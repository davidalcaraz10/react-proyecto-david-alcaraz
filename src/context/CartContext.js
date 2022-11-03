import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartElements, setCartElements] = useState([]);

    const alreadyInCart = (id) => {
        const productExists = cartElements.some( (elm) => elm.id === id);
        return productExists;
    }

    const addProduct = (item, quantity) => {
        const newCartArray = [...cartElements];
        if(alreadyInCart(item.id)){
            const posProduct = newCartArray.findIndex( (elemento) => elemento.id === item.id);
            newCartArray[posProduct].quantity += quantity;
            newCartArray[posProduct].total = newCartArray[posProduct].quantity * newCartArray[posProduct].price;
            setCartElements(newCartArray);
        } else{
            const newProduct = {
                ...item,
                quantity:quantity,
                total:quantity * item.price,
            };
            newCartArray.push(newProduct);
            setCartElements(newCartArray);
        }
    }

    const total = () => {
        const totalPrice = cartElements.reduce((acc,curr) => acc + curr.total, 0);
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