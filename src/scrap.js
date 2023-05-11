const cheerio = require('cheerio');
const request = require('request-promise');

require('../database');
const Equipo = require('../Models/Equipos');



module.exports = async function init(){
    const promiedos = await request({
        uri: 'https://www.promiedos.com.ar/primera',
        transform: body => cheerio.load(body)
    });

    //Toma de datos de equipos de la página a scrapear

    const info_equipo = promiedos('.tablesorter1 tbody tr').each((i, el) =>{
        const posic = promiedos(el).find('td:first').text();
        const nomb = promiedos(el).find('td:nth-child(2)').text();
        const punt = promiedos(el).find('td:nth-child(3)').text();
        const juga = promiedos(el).find('td:nth-child(4)').text();
        const gana = promiedos(el).find('td:nth-child(5)').text();
        const empa = promiedos(el).find('td:nth-child(6)').text();
        const perd = promiedos(el).find('td:nth-child(7)').text();
        const golesF = promiedos(el).find('td:nth-child(8)').text();
        const golesC = promiedos(el).find('td:nth-child(9)').text();
        const diferen =  promiedos(el).find('td:nth-child(10)').text();

       /* Función para crear la DB, una vez ya creada se precisa actualizar, solo se la usó la primera vez.

        async function guardar(){

        const equipo = new Equipo({
            posicion: posic,
            nombre: nomb,
            puntos: punt,
            jugados: juga,
            ganados: gana,
            empatados: empa,
            perdidos: perd,
            golesFavor: golesF,
            golesContra: golesC,
            diferencia: diferen,
        })

        const equipoGuardado = await equipo.save();
        return equipoGuardado;
    }

    guardar()
        .then(equipoGuardado => console.log(equipoGuardado))
        .catch(err => console.log(err))

    })
    */

    //Función para actualizar tabla
    
    async function actualizarTabla(){
        const equipoActualizar = await Equipo.findOne({nombre: nomb});
        equipoActualizar.posicion = posic
        equipoActualizar.nombre = nomb
        equipoActualizar.puntos = punt
        equipoActualizar.jugados = juga
        equipoActualizar.ganados = gana
        equipoActualizar.empatados = empa
        equipoActualizar.perdidos = perd
        equipoActualizar.golesFavor = golesF
        equipoActualizar.golesContra = golesC
        equipoActualizar.diferencia = diferen
        //console.log(equipoActualizar)
        equipoActualizar.save()
    }
    actualizarTabla();
    

})
    
}

//init();