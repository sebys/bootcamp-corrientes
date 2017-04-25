# Azure BootCamp 2017 - Corrientes

Slides: https://www.slideshare.net/sebishenzenn/azure-functions-75349938/sebishenzenn/azure-functions-75349938

Este repo contiene el código fuente de la demo usada en el Azure BootCamp Corrientes.

En la carpeta [DemoFunctions](DemoFunctions) podrán encontrar la solución presentada en la cual se utilizo Azure Functions para que ante un comentario en una issue de GitHub se realice un comentario en un canal de Slack.

Para mostrar como podemos escribir funciones en diferentes lenguajes de programación, van a encontrar dos:

- **_GithubWebhookJS:_** Función que recibe por un POST el contenido del comentario realizado en la issue de GitHUb.
- **_GenericWebhookCSharp:_** Función que recibe por un POST de la anterior el contenido y lo envía al Webhook expuesto poe Slack, logrando de esta forma la realización de un comentario.

A continuación les dejo los siguientes enlaces al detalle de las explicaciones para los puntos restantes:

- [Cómo hacer debug de nuestras Azure Functions en C#?](DebugEnCSharp.md)
- [Configurando deployment continuo en las Azure Functions](DeploymentContinuo.md)
