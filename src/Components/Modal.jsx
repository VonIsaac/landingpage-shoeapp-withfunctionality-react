import React from "react";
import { createPortal } from "react-dom";

const Modal = React.forwardRef(function Modal({children}, ref){
    const openModal = React.useRef()

    React.useImperativeHandle(ref, () => {
        return{
            open(){
                openModal.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={openModal} className=" bg-stone-600 p-1 px-4 py-3 w-[450px] rounded backdrop:bg-stone-900/50">
            {children}
            <form method="dialog" className=" flex justify-center items-center">
              <button className=" my-2 bg-stone-700 py-1 px-2 rounded font-medium hover:bg-neutral-600 hover:text-slate-900">CLOSE</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal