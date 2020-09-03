import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const { nombre, precio, id } = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id) =>{
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito, producto
        ]);
    };

    const eliminarProducto = (id) =>{
        const producto = carrito.filter(producto => producto.id !== id);

        //Colocar productos en el state
        agregarProducto(producto);
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
            ?
                <button 
                    onClick={ ()=>{seleccionarProducto(id)}}
                    type="button">
                    Comprar
                </button>
            :
                <button 
                    onClick={ ()=>{eliminarProducto(id)}}
                    type="button">
                    Eliminar
                </button>
            }
        </div>
    );
}

export default Producto;
