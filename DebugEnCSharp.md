# Cómo hacer debug de nuestras Azure Functions en C#?

1. Instalar **Azure Functions CLI** según lo que se indica en https://github.com/Azure/azure-functions-cli
2. Crear un proyecto de aplicación web vacío en Visual Studio 2017
3. Establecer las siguientes propieades en el proyecto Web:
  - *Start external program:* C:\Users\[Usuario]\AppData\Roaming\npm\node_modules\azure-functions-cli\bin\Func.exe
  - *Command line argument:* host start
  - *Working directory:* path del proyecto web

4. Abrir la terminal y correr los siguientes comandos para crear la aplicación de Azure Functions:

```
func init
func new
```

5. Incluir la carpeta de la función y los archivos **.json* asociados.
6. Correr la aplicación, para probar copiar y pegar la Url de la función en el navegador.

## Alternativa para el caso donde ya tengamos nuestra aplicación creada.

Ejecutar los pasos anteriores hasta el 3 incluído.

4. Copiar el contenido de nuestras funciones dentro del proyecto web (al mismo nivel que el archivo de proyecto).
5. Agregar los elementos existentes al proyecto en Visual Studio.
6. Correr la aplicación, para probar copiar y pegar la Url de la función en el navegador.
