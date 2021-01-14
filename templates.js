module.exports = {
    container_start: e =>
        `Iniciado <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b>`,

    container_die: e =>
        `Detenido <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b>\nCódigo salida: <b>${e.Actor.Attributes.exitCode}</b>`,

    'container_health_status: healthy': e =>
        `Estado <b>saludable</b> para <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b>`,

    'container_health_status: unhealthy': e =>
        `Estado <b>no saludable</b> para <b>${e.Actor.Attributes.name} (${e.Actor.Attributes.image}) {${e.Actor.ID.substr(0, 12)}}</b>`,
};
