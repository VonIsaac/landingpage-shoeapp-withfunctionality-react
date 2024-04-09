import {  createContext, useReducer } from "react";

/*const CartContext = createContext({
    quantity: 0,
    addQuantity: () => {},
    removeQuanitty: () => {},
    
})


    function cardReducer(state, action){
        if(action.type === 'INCRESS_QUANTITY'){
            return{
                quantity:  state.quantity + 1
            }
            
        }

        if(action.type === 'DECRESS_QUANTITY'){
            return {
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

        function removeQuanitty(){
            dispatch({
                type: 'DECRESS_QUANTITY'
            })
        }

        const cartContex ={
            quantity: state.quantity,
            addQuantity: addQuantity,
            removeQuanitty: removeQuanitty
        }



    return(
        <CartContext.Provider value={cartContex}>
            {children}
        </CartContext.Provider>
    )

    
}


*/
function cardReducer(state, action) {
    switch (action.type) {
      case 'INCRESS_QUANTITY':
        return {
          quantity: state.quantity + 1
        };
      case 'DECRESS_QUANTITY':
        return {
          quantity: state.quantity - 1
        };
      default:
        return state;
    }
  }
  
  const CartContext = createContext({
    quantity: 0,
    addQuantity: () => {},
    removeQuantity: () => {}
  });
  
  export function CartQauntityProvider({ children }) {
    const [state, dispatch] = useReducer(cardReducer, { quantity: 0 });
  
    function addQuantity() {
      dispatch({
        type: 'INCRESS_QUANTITY'
      });
    }
  
    function removeQuantity() {
      dispatch({
        type: 'DECRESS_QUANTITY'
      });
    }
  
    const cartContext = {
      quantity: state.quantity,
      addQuantity: addQuantity,
      removeQuantity: removeQuantity
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {children}
      </CartContext.Provider>
    );
  }
  export default CartContext