#ifndef SHADER_H
#define SHADER_H

#include <glad/glad.h>

#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

class Shader {
public:
    unsigned int ID;
    
    // Constructor generates the shader on the fly
    Shader(const char* vertexPath, const char* fragmentPath);
    Shader(const std::string& vertexSource, const std::string& fragmentSource);
    
    // Activate the shader
    void use() const;
    
    // Utility uniform functions
    void setBool(const std::string& name, bool value) const;
    void setInt(const std::string& name, int value) const;
    void setFloat(const std::string& name, float value) const;

private:
    // Utility function for checking shader compilation/linking errors
    void checkCompileErrors(unsigned int shader, const std::string& type);
};

#endif
