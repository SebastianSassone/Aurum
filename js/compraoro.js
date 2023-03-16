// Carrito
// Abrir y cerrar carrito
const abrir_c = document.getElementById('abrir_c')
const cerrar_c = document.getElementById('cerrar_c')

abrir_c.addEventListener('click', () => {
    let section_carrito = document.getElementById('section_carrito')
    section_carrito.style.display = 'flex'
})
cerrar_c.addEventListener('click', () => {
    let section_carrito = document.getElementById('section_carrito')
    section_carrito.style.display = 'none'
})

// Sumar productos
const lis_produc = document.getElementById('lis_produc')
const val_final = document.getElementById('val_final')
const buttons = document.querySelectorAll('button')
console.log(buttons)

const productos = [
    ["Lingote de oro", 1000000],
    ["Lingote de oro", 2000000],
    ["Lingote de oro", 3000000]
]

let pre_produc_default = 0

function sumar_precios(pre_produc){
let valor1 = pre_produc
let valor2 = pre_produc_default
suma=parseFloat(valor1)+parseFloat(valor2);
    console.log(suma)
    val_final.innerHTML = suma
}

console.log()

// function restar_precios(){
// let valor1 = pre_produc
// let valor2 = pre_produc_default
// let suma =parseFloat(valor1) - parseFloat(valor2);
//     console.log(suma)
//     val_final.innerHTML = suma
// }
// restar_precios()

function sumar_productos(producto){
    buttons.forEach(() => button = buttons);{

    buttons[1].addEventListener('click', () => {
        producto = productos[0]  
        crear_producto(producto)  
            pre_produc = productos[0][1]
            sumar_precios(pre_produc)
    })
        buttons[2].addEventListener('click', () => {
            producto = productos[1] 
            crear_producto(producto)
               pre_produc = productos[1][1]
               sumar_precios(pre_produc)
        })
            buttons[3].addEventListener('click', () => {
                producto = productos[2] 
                crear_producto(producto)
                    pre_produc = productos[2][1]
                    sumar_precios(pre_produc)
            })
}
}
sumar_productos()

function crear_producto(producto){
    const lis_produc = document.getElementById('lis_produc')
        let mosp_produc = document.createElement('div');
            lis_produc.appendChild(mosp_produc);
                mosp_produc.classList.add('mosp_produc');
                    mosp_produc.innerHTML = producto
    
        let boton = document.createElement('button')
            mosp_produc.appendChild(boton)
                boton.classList.add('but_bor')
                    boton.innerHTML = 'X'
                        boton.addEventListener('click', () => mosp_produc.style.display = 'none')
                        boton.addEventListener('click', () => boton.style.display = 'none')
}

const but_fin_com = document.getElementById('but_fin_com').addEventListener('click', () => {
    alert('Su compra a sido relizada con exito')
})