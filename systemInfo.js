const osModule = require("./cjs/osModule.js");
const networkModule = require("./cjs/networkModule.js")

const getOsModule = () => {
    const arrayOs = []
    for (element in osModule){
        arrayOs.push(`${element}: ${osModule[element]}`)
    }
    return arrayOs
}

const getNetworkModule = () => {
     const arrayNetwork = []
     for (element1 in networkModule){
        const arrayEle = []
        arrayEle.push(`Interfaz ${element1}:`)

        for(element2 of networkModule[element1]){
            arrayEle.push(`     Familia: ${element2.family}`)
            arrayEle.push(`     Direccion: ${element2.address}`)
            arrayEle.push(`     Interno: ${element2.internal}`)
        }

        arrayNetwork.push(arrayEle.join("\n"))
     }
    return arrayNetwork
 }
console.log(getOsModule().join('\n'))
console.log(getNetworkModule().join('\n'))
