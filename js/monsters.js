const sectionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById("seleccionar_mascota")
// const mascotaHipodoge = document.getElementById("hipodoge");
// const mascotaCapipepo = document.getElementById("capipepo");
// const mascotaRatigueya = document.getElementById("ratigueya");
// const mascotaLangostelvis = document.getElementById("langostelvis");
// const mascotaTucupalma = document.getElementById("tucupalma");
// const mascotaPydos = document.getElementById("pydos");
// pidgeot quedo abajo poruqe utiize otra forma de llamarlo 
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const mascotasContainer = document.getElementById('mascotas-container')
const botonesAtaques = document.getElementById("botones_ataques")

const showMokepones = document.getElementById('mostrar-mascota')
const showMokeponesEnemigo = document.getElementById('mostrar-mascota-enemigo')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let vidasJugador = 3;
let vidasEnemigo = 3;

let mascotaHipodoge;
let mascotaCapipepo;
let mascotaRatigueya;
let mascotaLangostelvis;
let mascotaTucupalma;
let mascotaPydos;
let mascotaPidgeot;

let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo

let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;

let botonFuego
let botonAgua
let botonTierra
let botonAire
let botones

let foto
let mostrarMokepon

let lienzo = mapa.getContext("2d")  // nos permite dibujar en 2d 
let intervalo     // se actualiza el canvas para ver el movimiento
let mapaBackground = new Image()
mapaBackground.src = './/images/mokemap.png'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMax = 800
if (anchoDelMapa > anchoMax) {
    anchoDelMapa = anchoMax - 20
}

alturaQueBuscamos = anchoDelMapa * 550 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = anchoDelMapa * 80 / 800;
        this.alto = alturaQueBuscamos * 80 / 550;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', './images/hipodoge.png', 5, './images/hipodoge.png')
let capipepo = new Mokepon('Capipepo', './images/capipepo.png', 5, './images/capipepo.png')
let ratigueya = new Mokepon('Ratigueya', './images/ratigueya.png', 5, './images/ratigueya.png')
let langostelvis = new Mokepon('Langostelvis', './images/langostelvis.png', 5, './images/langostelvis.png')
let tucupalma = new Mokepon('Tucupalma', './images/tucupalma.png', 5, './images/tucupalma.png')
let pydos = new Mokepon('Pydos', './images/pydos.png', 5, './images/pydos.png')
let pidgeot = new Mokepon('Pidgeot', './images/pidgeot.png', 5, './images/pidgeot.png')


let hipodogeEnemigo = new Mokepon('Hipodoge', './images/hipodoge.png', 5, './images/hipodoge.png')
let capipepoEnemigo = new Mokepon('Capipepo', './images/capipepo.png', 5, './images/capipepo.png')
let ratigueyaEnemigo = new Mokepon('Ratigueya', './images/ratigueya.png', 5, './images/ratigueya.png')
let langostelvisEnemigo = new Mokepon('Langostelvis', './images/langostelvis.png', 5, './images/langostelvis.png')
let tucupalmaEnemigo = new Mokepon('Tucupalma', './images/tucupalma.png', 5, './images/tucupalma.png')
let pydosEnemigo = new Mokepon('Pydos', './images/pydos.png', 5, './images/pydos.png')
let pidgeotEnemigo = new Mokepon('Pidgeot', './images/pidgeot.png', 5, './images/pidgeot.png')


hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
langostelvis.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
tucupalma.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)
pydos.ataques.push(
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
pidgeot.ataques.push(
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)


hipodogeEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
capipepoEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)
ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
langostelvisEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
tucupalmaEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)
pydosEnemigo.ataques.push(
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
pidgeotEnemigo.ataques.push(
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '🌪', id: 'boton-aire' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)


mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucupalma, pydos, pidgeot)


function iniciarJuego() {              //? este codigo es para ejecutar el juego - Botones 
    sectionSeleccionarAtaque.style.display = 'none';
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {                // creamo una variable para guardar la info del html, con un template literarios
        opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre} />
        <label for=${mokepon.nombre}> <img src="${mokepon.foto}" alt=${mokepon.nombre}>${mokepon.nombre}</label>`
        mascotasContainer.innerHTML += opcionDeMokepones;

        mascotaHipodoge = document.getElementById("Hipodoge");
        mascotaCapipepo = document.getElementById("Capipepo");
        mascotaRatigueya = document.getElementById("Ratigueya");
        mascotaLangostelvis = document.getElementById("Langostelvis");
        mascotaTucupalma = document.getElementById("Tucupalma");
        mascotaPydos = document.getElementById("Pydos");
        mascotaPidgeot = document.getElementById("Pidgeot");
    })

    sectionReiniciar.style.display = 'none';

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)        // agregamos un eventlistener el 'click'
    //(evento ,  funcion)

    // boton de reiniciar
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {    //? funcion para elejir la mascota del JUGADOR y dentro la funcion de la PC

    // sectionSeleccionarAtaque.style.display = 'flex';
    sectionSeleccionarMascota.style.display = 'none';
  

    if (mascotaHipodoge.checked) {
        spanMascotaJugador.innerHTML = mascotaHipodoge.id
        mascotaJugador = mascotaHipodoge.id
        foto = hipodoge.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else if (mascotaCapipepo.checked) {
        spanMascotaJugador.innerHTML = mascotaCapipepo.id
        mascotaJugador = mascotaCapipepo.id
        foto = capipepo.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else if (mascotaRatigueya.checked) {
        spanMascotaJugador.innerHTML = mascotaRatigueya.id
        mascotaJugador = mascotaRatigueya.id
        foto = ratigueya.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else if (mascotaLangostelvis.checked) {
        spanMascotaJugador.innerHTML = mascotaLangostelvis.id
        mascotaJugador = mascotaLangostelvis.id
        foto = langostelvis.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else if (mascotaTucupalma.checked) {
        spanMascotaJugador.innerHTML = mascotaTucupalma.id
        mascotaJugador = mascotaTucupalma.id
        foto = tucupalma.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else if (mascotaPydos.checked) {
        spanMascotaJugador.innerHTML = mascotaPydos.id
        mascotaJugador = mascotaPydos.id
        foto = pydos.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else if (mascotaPidgeot.checked) {
        spanMascotaJugador.innerHTML = mascotaPidgeot.id
        mascotaJugador = mascotaPidgeot.id
        foto = pidgeot.foto
        showMokepones.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`
    } else {
        alert("Debes seleccionar una mascota")
        reiniciarJuego()
    }


    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex';
    iniciarMapa()
    // seleccionarMascotaEnemigo()   //aca llamamos internamente a la funcion del enemigo despues de que el jugador elije

}

function extraerAtaques(mascotaJugador) {           //va por el array de mokepones y cdo coincide con el seleccionado, regresa el atauqe
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-ataque BAtaque"><span class="baspan">${ataque.nombre}</span></button>`

        botones_ataques.innerHTML += ataquesMokepon;
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botonAire = document.getElementById("boton-aire")

    botones = document.querySelectorAll(".BAtaque")

    //     // agregamos los botones de ataque **
    //     botonFuego.addEventListener("click", ataqueFuego)
    //     botonAgua.addEventListener("click", ataqueAgua)
    //     botonTierra.addEventListener("click", ataqueTierra)
    //     botonAire.addEventListener("click", ataqueAire)
}

function secuenciaAtaque() {             //? Ataques-del-JUGADOR 
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else if (e.target.textContent === '🌪') {
                ataqueJugador.push('AIRE')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else if (e.target.textContent === '🌱') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo()
        })
    });
}

function seleccionarMascotaEnemigo(enemigo) {    //? funcion para la mascota del enemigo  -PC-

    // let mascotaAleatoria = aleatorio(0, mokepones.length - 1);
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    foto = enemigo.foto
    showMokeponesEnemigo.innerHTML = `<img src="${foto}" alt="image-mokepon-pelea">`

    secuenciaAtaque()
}

//? Ataques-del-JUGADOR (cuando se da click)
// function ataqueFuego() {
//     ataqueJugador = 'FUEGO 🔥'
//     ataqueAleatorioEnemigo()
// }
// function ataqueAgua() {
//     ataqueJugador = 'AGUA 💧'
//     ataqueAleatorioEnemigo()
// }
// function ataqueTierra() {
//     ataqueJugador = 'TIERRA 🌱'
//     ataqueAleatorioEnemigo()
// }
// function ataqueAire() {
//     ataqueJugador = 'AIRE 🌪'
//     ataqueAleatorioEnemigo()
// }

//? Ataques-del-ENEMIGO -> contiene el 'mensaje'
function ataqueAleatorioEnemigo() {
    console.log('ataque enemigo', ataquesMokeponEnemigo)
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo.push('AGUA')
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo.push('TIERRA')
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo.push('AIRE')
    } else {

    }
    console.log(ataqueEnemigo)

    //!  __________________________________________________________________________________ 
    // if (ataqueEnemigo.includes(ataqueAleatorio)) {
    //     ataqueAleatorioEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].nombre)
    // }
    // ataqueEnemigo.push(ataqueAleatorio)

    // console.log(ataqueEnemigo) 
    // console.log(ataqueAleatorioEnemigo) 

    // if (ataqueEnemigo.length === ataqueJugador.length) {
    //     combate()
    // } else {
    //     ataqueEnemigo()
    // }

    //!  __________________________________________________________________________________ 
    // if (ataqueEnemigo.includes(ataqueAleatorio) === false) {
    //     ataqueEnemigo.push(ataqueAleatorio)

    //     if (ataquesMokeponEnemigo[ataqueAleatorio].ataques== '🔥') {
    //         secuenciaEnemigo.push('FUEGO')
    // ataqueEnemigo.push('fuego')
    //     }
    //     else if (ataquesMokeponEnemigo[ataqueAleatorio].ataque == '💧') {
    //         secuenciaEnemigo.push('AGUA')
    // ataqueEnemigo.push(ataqueAleatorio)
    //     } 
    //     else if (ataquesMokeponEnemigo[ataqueAleatorio].ataque == '🌱') {
    //         secuenciaEnemigo.push('TIERRA')
    // ataqueEnemigo.push(ataqueAleatorio)
    //     }
    //     else {
    //         secuenciaEnemigo.push('AIRE')
    // ataqueEnemigo.push(ataqueAleatorio)
    //     }
    //     console.log(ataqueEnemigo)
    //     console.log(secuenciaEnemigo)

    //     combate()

    // } else {

    // }
    iniciarPelea()

    // combate()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }

}

function indexAmbosJugadores(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

//? Reglas del combate
function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosJugadores(index, index)
            crearMensaje("EMPATE 😐")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'AIRE') {
            indexAmbosJugadores(index, index)
            crearMensaje("VICTORIA 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
            // vidasEnemigo--;
            // spanVidasEnemigo.innerHTML = vidasEnemigo;
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosJugadores(index, index)
            crearMensaje("VICTORIA 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosJugadores(index, index)
            crearMensaje("VICTORIA 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'AIRE' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosJugadores(index, index)
            crearMensaje("VICTORIA 🎉")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosJugadores(index, index)
            crearMensaje("DERROTA 😭")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
            // vidasJugador--;
            // spanVidasJugador.innerHTML = vidasJugador;
        }
    }

    // if (ataqueJugador == ataqueEnemigo) {
    //     crearMensaje("EMPATE 😐")
    // } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'AIRE 🌪' || (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') || (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧') || (ataqueJugador == 'AIRE 🌪' && ataqueEnemigo == 'TIERRA 🌱')) {
    //     crearMensaje("VICTORIA 🎉")
    //     vidasEnemigo--;
    //     spanVidasEnemigo.innerHTML = vidasEnemigo;
    // } else {
    //     crearMensaje("DERROTA 😭")
    //     vidasJugador--;
    //     spanVidasJugador.innerHTML = vidasJugador;
    // }

    //TODO: Revisar las vidas
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador == victoriasEnemigo) {
        crearMensajeFinal('Esto fue un EMPATE!!🥱')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('¡FELICITACIONES! 😎- Has ganado la partida')   //aca creamos el mensaje (esto seria el parametreo - 'resultadoFinal')
    } else {
        crearMensajeFinal('LO SIENTO 🤦‍♂️- Has perdido la partida')
    }

    // if (vidasEnemigo == 0) {
    //     crearMensajeFinal('¡FELICITACIONES! 😎- Has ganado la partida')   //aca creamos el mensaje (esto seria el parametreo - 'resultadoFinal')
    // } else if (vidasJugador == 0) {
    //     crearMensajeFinal('LO SIENTO 🤦‍♂️- Has perdido la partida')
    // }
}

//? Sección de Mensajes
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = `${indexAtaqueJugador}`    //texto original:`Tu mascota ataco con ${ataqueJugador}`
    nuevoAtaqueDelEnemigo.innerHTML = `${indexAtaqueEnemigo}`


    // let parrafo = document.createElement('p')               //creamos el parrafo y su contenido (este fue el primer parrafo que creamos)
    // parrafo.innerHTML = `Tu mascota ataco con ${ataqueJugador} y la mascota del enemigo ataco con ${ataqueEnemigo} - ${resultado}`

    // sectionMensaje.appendChild(notificacion)     //incertamos en el HTML el contenido del createElement, ahora con el css, F
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')
    sectionMensaje.innerHTML = `${resultadoFinal}`

    sectionMensaje.appendChild(parrafo)    //para el css desactivamos el appenchild

    //deshabilitamos los botones
    // botonFuego.disabled = true;
    // botonAgua.disabled = true;
    // botonTierra.disabled = true;
    // botonAire.disabled = true;

    //mostramos el boton de reiniciar el juego
    sectionReiniciar.style.display = 'block';
}

//? Sección de Mapa
function pintarCanvas() {             //muesta el personaje en el canvas
    // let imagenDeCapipepo = new Image()
    // imagenDeCapipepo.src = capipepo.foto
    // lienzo.fillRect(5,15,20,40)         //crea un rectangulo dentro de canvas (x,y,ancho,alto)

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)     //funcion que limpia el canvas indicando que posicicon (x, y, hasta el final del mapa)
    lienzo.drawImage(mapaBackground,        //funciion que pinta el fondo
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucupalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    pidgeotEnemigo.pintarMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {           //para saber si la mascota se mueves
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucupalmaEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(pidgeotEnemigo)
    }
}

function moverUp() {          //funcion que mueve el personaje
    // capipepo.y = capipepo.y - 5
    // pintarCanvas()
    //necesitamos que el personaje se muestre de manera continua
    mascotaJugadorObjeto.velocidadY = -5
}
function moverDown() {
    // capipepo.y = capipepo.y + 5
    // pintarCanvas()
    mascotaJugadorObjeto.velocidadY = 5
}
function moverRight() {
    // capipepo.x = capipepo.x + 5
    // pintarCanvas()
    mascotaJugadorObjeto.velocidadX = 5
}
function moverLeft() {
    // capipepo.x = capipepo.x - 5
    // pintarCanvas()
    mascotaJugadorObjeto.velocidadX = -5
}

function detenerMovimiento() {   // para detener el movimiento la velocidad debe pasar a cero
    mascotaJugadorObjeto.velocidadY = 0
    mascotaJugadorObjeto.velocidadX = 0
}

function presionarTecla(event) {
    //console.log(evento.key);  //observamos como se muestra la tecla en el navegador
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            moverUp()
            break
        case 'ArrowDown':
        case 's':
            moverDown()
            break
        case 'ArrowRight':
        case 'd':
            moverRight()
            break
        case 'ArrowLeft':
        case 'a':
            moverLeft()
            break
        default:
            break
    }
}

function iniciarMapa() {
    // mapa.width = 700
    // mapa.height = 450
    mascotaJugadorObjeto = obtenerObjetoMacota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)   // funcion que llama a una funcion constantemente esperando x tiempo
    //(nombre-de-la-funcion-a-ejecutar, milisegundos)
    window.addEventListener('keydown', presionarTecla)     // cada vez que soltemos alguna tecla se ejecuta la funcion
    window.addEventListener('keyup', detenerMovimiento)    //cada vez que soltemos alguna tecla se ejecuta la funcion
}

function obtenerObjetoMacota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]             //nos retorna el objeto complte de mokepon
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y + 25
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto - 25
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho - 25
    const izquierdaMascota = mascotaJugadorObjeto.x + 25

    if (abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo) {
        return
    }
    detenerMovimiento()
    console.log('se detecto una colision');
    clearInterval(intervalo)   //hace que se detenga el ciclo de ejecucion
    sectionSeleccionarAtaque.style.display = 'flex';
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)   
}


//? Reiniciar juego
function reiniciarJuego() {
    location.reload()
}

//funcion aleatoria para elejir la mascota del PC
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)   // creamos un evento para que carge el codigo js despues del codigo html



