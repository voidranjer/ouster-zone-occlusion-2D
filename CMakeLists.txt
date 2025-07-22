cmake_minimum_required(VERSION 3.10)
project(OpenGLExperiment)

set(CMAKE_CXX_STANDARD 11)

include_directories(include)

find_package(glfw3 REQUIRED)

add_executable(OpenGLExperiment main.cpp src/glad.c)

if(APPLE)
    target_link_libraries(OpenGLExperiment glfw "-framework OpenGL")
else()
    target_link_libraries(OpenGLExperiment glfw GL)
endif()
