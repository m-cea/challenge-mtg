const cheerio = require('cheerio');
const request = require('request-promise');
require('../database');
const Brasil = require('../Models/Brasil');



module.exports = async function initBr(){
    const promiedos = await request({
        uri: 'https://www.promiedos.com.ar/brasil',
        transform: body => cheerio.load(body)
    });

    //Toma del encabezado de la tabla

    const encabezado = promiedos('.tablesorter1 thead tr').each((i, el) =>{
        const pos = promiedos(el).find('th:first').text();
        const nom = promiedos(el).find('th:nth-child(2)').text();
        const pts = promiedos(el).find('th:nth-child(3)').text();
        const jug = promiedos(el).find('th:nth-child(4)').text();
        const gan = promiedos(el).find('th:nth-child(5)').text();
        const emp = promiedos(el).find('th:nth-child(6)').text();
        const per = promiedos(el).find('th:nth-child(7)').text();
        const gf = promiedos(el).find('th:nth-child(8)').text();
        const gc = promiedos(el).find('th:nth-child(9)').text();
        const dif =  promiedos(el).find('th:nth-child(10)').text();

        console.log(pos, "\t", nom, "\t", pts, "\t", jug, "\t", gan, "\t", emp, "\t", per, "\t", gf, "\t", gc, "\t", dif, "\n");
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

        const brasil = new Brasil({
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

        const equipoGuardado = await brasil.save();
        return equipoGuardado;
    }

    guardar()
        .then(equipoGuardado => console.log(equipoGuardado))
        .catch(err => console.log(err))

    })
    */
    
    //Función para actualizar tabla
    
    async function actualizarTabla(){
        const equipoActualizar = await Brasil.findOne({nombre: nomb});
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

//initBr();