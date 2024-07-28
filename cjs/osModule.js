const os = require("node:os")

const osModule = {
    Nombre: os.userInfo().username,
    Tipo: os.type(),
    Version: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: `${(os.totalmem() / 1048576).toFixed(2)} MB`,
    MemoriaLibre: `${(os.freemem / 1048576).toFixed(2)} MB`,
}

module.exports = osModule;
