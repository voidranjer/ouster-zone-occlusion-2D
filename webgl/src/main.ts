import './style.css'
import * as THREE from 'three'

// Settings matching the original OpenGL version
const SCR_WIDTH = 800
const SCR_HEIGHT = 600

// Variables for Three.js scene
let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let mesh: THREE.Mesh
let material: THREE.ShaderMaterial
let clock: THREE.Clock

// Vertex shader source - adapted for Three.js built-in attributes
const vertexShaderSource = `
attribute vec3 color;
varying vec3 vertexColor;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vertexColor = color;
}
`

// Fragment shader source - matches the OpenGL version with opacity uniform
const fragmentShaderSource = `
varying vec3 vertexColor;
uniform float opacity;

void main() {
    gl_FragColor = vec4(vertexColor, opacity);
}
`

// Triangle vertices matching the original OpenGL data
// positions (x,y,z) + colors (r,g,b)
const vertices = new Float32Array([
    // positions         // colors
     0.5, -0.5, 0.0,    1.0, 0.0, 0.0,   // bottom right (red)
    -0.5, -0.5, 0.0,    0.0, 1.0, 0.0,   // bottom left (green)
     0.0,  0.5, 0.0,    0.0, 0.0, 1.0    // top (blue)
])

function init() {
    // Get the canvas element
    const canvas = document.querySelector('#webgl-canvas') as HTMLCanvasElement
    if (!canvas) {
        console.error('Could not find canvas element')
        return
    }

    // Create scene
    scene = new THREE.Scene()

    // Create orthographic camera to match OpenGL viewport
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000)
    camera.position.z = 1

    // Create WebGL renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        antialias: true,
        alpha: true
    })
    renderer.setSize(SCR_WIDTH, SCR_HEIGHT)
    renderer.setClearColor(0x4d7a7a, 1.0) // Matches the OpenGL clear color (0.2, 0.3, 0.3, 1.0)
    
    // Enable blending for transparency (matches OpenGL version)
    renderer.getContext().enable(renderer.getContext().BLEND)
    renderer.getContext().blendFunc(
        renderer.getContext().SRC_ALPHA, 
        renderer.getContext().ONE_MINUS_SRC_ALPHA
    )

    // Create geometry
    const geometry = new THREE.BufferGeometry()
    
    // Split vertices into position and color arrays
    const positions = new Float32Array(9) // 3 vertices * 3 components
    const colors = new Float32Array(9)    // 3 vertices * 3 components
    
    for (let i = 0; i < 3; i++) {
        const baseIndex = i * 6
        const posIndex = i * 3
        
        // Position data
        positions[posIndex] = vertices[baseIndex]
        positions[posIndex + 1] = vertices[baseIndex + 1]
        positions[posIndex + 2] = vertices[baseIndex + 2]
        
        // Color data
        colors[posIndex] = vertices[baseIndex + 3]
        colors[posIndex + 1] = vertices[baseIndex + 4]
        colors[posIndex + 2] = vertices[baseIndex + 5]
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Create shader material with custom shaders
    material = new THREE.ShaderMaterial({
        vertexShader: vertexShaderSource,
        fragmentShader: fragmentShaderSource,
        uniforms: {
            opacity: { value: 1.0 }
        },
        transparent: true,
        blending: THREE.NormalBlending
    })

    // Create mesh
    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Initialize clock for animation
    clock = new THREE.Clock()

    // Handle window resize
    window.addEventListener('resize', onWindowResize)

    console.log('WebGL Triangle initialized successfully!')
}

function onWindowResize() {
    // For this demo, we keep the canvas size fixed
    // But we could make it responsive here
}

function animate() {
    requestAnimationFrame(animate)

    // Update pulsing opacity (matches the OpenGL version)
    const elapsedTime = clock.getElapsedTime()
    const opacityValue = (Math.sin(elapsedTime) / 2.0) + 0.5
    material.uniforms.opacity.value = opacityValue

    // Render the scene
    renderer.render(scene, camera)
}

// Initialize and start the application
init()
animate()

// Add some debug info
console.log('WebGL Triangle - Port from OpenGL C++ version')
console.log('Original features:')
console.log('- Colorful triangle with vertex colors')
console.log('- Pulsing opacity effect')
console.log('- Transparency blending')
