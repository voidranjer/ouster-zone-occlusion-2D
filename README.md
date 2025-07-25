# OpenGLExperiment

This is a generic OpenGL experiment project.

## Build Instructions

1. **Create a build directory:**

    ```bash
    mkdir build
    cd build
    ```

2. **Generate the Makefile using CMake:**

    ```bash
    cmake ..
    ```

3. **Build the project:**

```bash
# -DCMAKE_EXPORT_COMPILE_COMMANDS=ON helps LSPs figure out
# where to find header files, what compiler flags to use, what defines are set, etc.
cmake -DCMAKE_EXPORT_COMPILE_COMMANDS=ON -B build
```

## Run Instructions

1. **Navigate to the build directory:**

    ```bash
    cd build
    ```

2. **Run the executable:**

    ```bash
    ./OpenGLExperiment
    ```

## Renaming the Project Directory (Optional)

If you want to rename the project directory (currently `occlusion`), you can do so manually using your file system's rename function. After renaming the directory, you may want to update any relevant Git configurations or CI/CD pipelines.
