import React from "react"
import { createPortal } from "react-dom"
import { GoX } from "react-icons/go";
 const ModalShoes = React.forwardRef( function ModalShoes({ children}, ref){
    const openModal = React.useRef()

        React.useImperativeHandle(ref, () => {
            return{
                open(){
                   
                     openModal.current.showModal()
                    
                    
                }
            }
        })


    return createPortal(
        <dialog ref={openModal} className=" rounded bg-stone-600 bg-transparent backdrop:bg-stone-900/60" >
                <div className="flex justify-end mb-1">
                    <form method="dialog">
                    <button className="ml-auto"><GoX /></button>
                    </form>
               
                </div>
            {children}
        </dialog>,
        document.getElementById('modal-shoes')
    )
})

export default  ModalShoes

/* */