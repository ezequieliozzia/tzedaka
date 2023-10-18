# Tzedaka App

## Instrucciones de Docker

### Paso 1: Crear la imagen de Docker

Primero, debes construir una imagen de Docker para la aplicación. Ejecuta el siguiente comando en la terminal:

```bash
docker build -t tzedaka .


### Paso 2: Ejecutar la aplicación
Una vez que la imagen de Docker esté construida, puedes ejecutar la aplicación localmente. Utiliza el siguiente comando:

```bash
docker run --env-file .ENV -p 5000:5000 tzedaka
