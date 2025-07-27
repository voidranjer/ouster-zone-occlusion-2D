# OpenGL Experiment

## Overview
A simple OpenGL experiment project demonstrating basic rendering techniques with modern CMake best practices.

## Features
- **Modern OpenGL**: Uses OpenGL 3.3 Core Profile
- **GLFW**: Cross-platform window and input management
- **GLAD**: Modern OpenGL function loading
- **Animated Triangle**: Displays a color-changing triangle with pulsing opacity
- **Modern C++17**: Clean, well-structured code following best practices

## Prerequisites
- **CMake** (version 3.16 or higher)
- **GLFW3** development libraries
- **OpenGL** development libraries
- **C++ Compiler** supporting C++17 (GCC, Clang, or MSVC)

## Installation

### macOS
```bash
# Install dependencies using Homebrew
brew install cmake glfw
```

### Ubuntu/Debian
```bash
# Install dependencies
sudo apt update
sudo apt install build-essential cmake libglfw3-dev libgl1-mesa-dev
```

### Windows
```powershell
# Using vcpkg (recommended)
vcpkg install glfw3:x64-windows
# Or install dependencies manually
```

## Build Instructions

### Quick Start (macOS/Linux)
```bash
# Clone the repository
git clone <repository-url>
cd occlusion

# Build and run
mkdir build && cd build
cmake ..
make
./bin/OpenGLExperiment
```

### Detailed Build Process
```bash
# Create and enter build directory
mkdir build && cd build

# Configure the project
cmake ..

# Build the project
cmake --build . --config Release

# Run the executable
./bin/OpenGLExperiment    # macOS/Linux
# or
.\bin\OpenGLExperiment.exe  # Windows
```

### Windows with Visual Studio
```powershell
mkdir build && cd build
cmake -G "Visual Studio 17 2022" -A x64 ..
cmake --build . --config Release
```

## Project Architecture
```
occlusion/
├── src/              # Source files
│   ├── main.cpp      # Application entry point and OpenGL setup
│   └── glad.c        # OpenGL function loader implementation
├── include/          # Header files
│   ├── shader.h      # Shader class definition (extensible)
│   ├── glad/         # GLAD headers
│   └── KHR/          # Khronos headers
├── build/            # Build output (generated)
│   ├── bin/          # Executables
│   └── lib/          # Libraries
├── CMakeLists.txt    # Build configuration
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Code Structure

### Modern CMake Features
- **Separate GLAD Library**: GLAD is compiled as a static library for better organization
- **Target-based Linking**: Uses modern `target_link_libraries` with PRIVATE/PUBLIC keywords
- **Platform Detection**: Automatic platform-specific linking (macOS frameworks, Linux libraries)
- **Warning Flags**: Comprehensive compiler warnings enabled

### C++ Best Practices
- **RAII**: Proper resource management with cleanup
- **Constexpr**: Compile-time constants where appropriate
- **Modern Headers**: Uses `<cmath>` instead of C-style headers
- **Warning-free**: No unused parameter warnings

## Controls
- **ESC**: Exit the application
- **Window Resize**: Automatically adjusts viewport

## Building from Scratch
If you need to regenerate the build system:
```bash
rm -rf build/          # Remove old build
mkdir build && cd build
cmake ..
make
```

## Troubleshooting

### Common Issues
1. **GLFW not found**: Install GLFW development libraries
2. **OpenGL headers missing**: Install OpenGL development packages
3. **CMake version**: Ensure CMake 3.16+ is installed

### macOS Specific
If you encounter linking issues on macOS, ensure you have Xcode Command Line Tools:
```bash
xcode-select --install
```

## Dependencies
- **GLFW3**: Window management and input handling
- **GLAD**: OpenGL function loading (included)
- **OpenGL**: Graphics API (system-provided or Mesa)

## License
This project is provided as an educational example. See LICENSE file for details.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes following the existing code style
4. Test your changes
5. Submit a pull request
