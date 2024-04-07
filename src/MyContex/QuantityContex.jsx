import {  createContext, useReducer } from "react";

const CartContext = createContext({
    quantity: 0,
    addQuantity: () => {},
    removeQauntity: () => {},
    
})


    function cardReducer(state, action){
        if(action.type === 'INCRESS_QUANTITY'){
            return{
                quantity: state.quantity + 1
            }
        }

        if(action.type === 'DECRESS_QAUNTITY'){
            return{
                quantity:state.quantity - 1
            }
        }
    }

export function CartQauntityProvider({children}){
const [state, dispatch] = useReducer(cardReducer, {quantity: 0})

        function addQuantity(){
            dispatch({
                type: 'INCRESS_QUANTITY'
            })
        }

        function removeQauntity(){
            dispatch({
                type: 'DECRESS_QAUNTITY'
            })
        }

        const cartContex ={
            quantity: state.quantity,
            addQuantity: addQuantity,
            removeQauntity: removeQauntity
        }



    return(
        <CartContext.Provider value={cartContex}>
            {children}
        </CartContext.Provider>
    )

    
}

export default CartContext