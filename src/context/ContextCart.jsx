import { createContext, useState } from "react";

export const ContextCart = createContext()


export	 const ProviderContext = ({children})=>{

    const [cartShopping,setCartShopping]= useState([])

    const addProductCart = (product) =>{
        //SI EL PRODUCTO EXISTE O NO EXISTE DENTRO DE NUESTRO CARRITO
        const existProduct = cartShopping.find((item)=>item.id===product.id)
    
        if (existProduct) {
            //CUANDO EL PRODUCTO EXISTE
            const newProduct = {
                ...product,
                quantity:existProduct.quantity+1
            }
            //buscamos el producto en el carrito y lo reemplazamos con sus
            //nuevos valores, si no existe devolvemos el carrito tal cual
            const updateCarrito = cartShopping.map((item)=>(
                item.id===existProduct.id ? newProduct : item
            ))
            setCartShopping([updateCarrito])
        }else{
            const newProduct = {
                //CUANDO EL PRODUCTO NO EXISTE
                ...product,
                quantity:1
            }
            setCartShopping([...cartShopping,newProduct])
        }
    };

    const removeFromCart = (product) => {
        const existProduct = cartShopping.find((item) => item.id === product);
    
        if (existProduct.quantity > 1) {
          // Disminuir cantidad si hay más de uno
          const newProduct = {
            ...existProduct,
            quantity: existProduct.quantity - 1,
          };
          const updatedCart = cartShopping.map((item) =>
            item.id === existProduct.id ? newProduct : item
          );
          setCartShopping(updatedCart);
        } else {
          // Eliminar del carrito si solo hay uno
          const updatedCart = cartShopping.filter((item) => item.id !== product);
          setCartShopping(updatedCart);
        }
      };


    return (
    <ContextCart.Provider value={{addProductCart,cartShopping, removeFromCart}}>
        {children}
    </ContextCart.Provider>
    )
}