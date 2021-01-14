# DockerTG: Notificaciones Telegram - [Overclock Server](https://lordpedal.github.io)

## Modos de ejecución para crear el contenedor Docker

### docker-compose (*Opción recomendada*)

Compatible con los esquemas docker-compose v2.

```
version: "2"
services:
  docker-telegram:
    image: lordpedal/dockertg
    container_name: DockerTG
    environment:
      - PUID=1000
      - PGID=1000
      - TELEGRAM_NOTIFIER_BOT_TOKEN=xxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx #Token_Telegram
      - TELEGRAM_NOTIFIER_CHAT_ID=xxxxxxxx #ID_Telegram
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    restart: always
```

### docker-cli

```
docker run -d \
        --name=DockerTG \
	-e PUID=1000 \
	-e PGID=1000 \
	-e TELEGRAM_NOTIFIER_BOT_TOKEN=xxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx #Token_Telegram \
	-e TELEGRAM_NOTIFIER_CHAT_ID=xxxxxxxx #ID_Telegram \
	-v /var/run/docker.sock:/var/run/docker.sock:ro \
        --restart=always \
        lordpedal/dockertg
```

## Parámetros

Las imágenes de contenedor se configuran utilizando parámetros pasados en tiempo de ejecución (como los anteriores). 
Estos parámetros están separados por dos puntos e indican ``<external>: <internal>`` respectivamente. 

| Parámetro | Función |
| ------ | ------ |
| `PUID=1000` | UID de nuestro usuario. Para saber nuestro ID ejecutar en terminal: `id` |
| `PGID=1000` | GID de nuestro usuario. Para saber nuestro ID ejecutar en terminal: `id` |
| `TELEGRAM_NOTIFIER_BOT_TOKEN=` | Añadimos el Token de nuestro Bot Telegram |
| `TELEGRAM_NOTIFIER_CHAT_ID=` | Añadimos el ID de Telegram consultar en @Lordpedalbot |
| `/var/run/docker.sock:/var/run/docker.sock:ro` | Ruta donde lee la configuración Dockers |
| `restart: always` | Habilitamos que tras reiniciar la maquina anfitrion vuelva a cargar el servicio |

> ... la culminación de un fin es el comienzo de una realidad.

