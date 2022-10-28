import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartElements, setCartElements] = useState([]);

    const alreadyInCart = (id) => {
        const productExists = cartElements.some( (elm) => elm.id === id);
        return productExists;
    }

    const addProduct = (item, quantity) => {
        const newArrayCart = [...cartElements];
        if(alreadyInCart(item.id)){
            const posProduct = newArrayCart.findIndex( (elemento) => elemento.id === item.id);
            newArrayCart[posProduct].quantity += quantity;
            newArrayCart[posProduct].quantityPrice = newArrayCart[posProduct].quantity * newArrayCart[posProduct].price;
            setCartElements(newArrayCart);
        } else{
            const newProduct = {
                ...item,
                quantity:quantity,
                quantityPrice:quantity * item.price,
            };
            newArrayCart.push(newProduct);
            setCartElements(newArrayCart);
        }
    }

    const total = () => {
        const totalPrice = cartElements.reduce((acc,curr) => acc + curr.quantityPrice, 0);
        return totalPrice;
    }

    const numberProducts = () => {
        const numberProducts = cartElements.reduce((acc,curr) => acc + curr.quantity, 0);
        return numberProducts;
    }

    const removeItem = (id) => {
        const newProducts = cartElements.filter((elemento) => elemento.id !== id);
        setCartElements(newProducts);
    }

    return(
        <CartContext.Provider value= {{cartElements, addProduct, total, numberProducts,removeItem}}>
            {children}
        </CartContext.Provider>
    )

}