
import Header from "./Components/Header"
import { currencyFormatter } from "./UTIL/formatter"
import { useState, useRef } from "react";
import Modal from "./Components/Modal";
import Shoes from "./Components/Shoes";

function App() {
  const [isAddRemove, setIsAddRemove] = useState(0)
  const openModal = useRef()

    function handleAddQuantity(){
      setIsAddRemove(addNum => addNum + 1)
    }


    function handlRemoveQuantity(){
      setIsAddRemove(removeNum => removeNum -1)
    }

    function handleOpenModal(){
      openModal.current.open()
    }

  return (
    <>
      <Modal ref={openModal}>
          <h1 className=" font-bold text-2xl my-2 text-center ">Thank You for Your Purchase!</h1>
          <p className=" my-2 text-center font-semibold text-slate-900">The price of  item that your purchase is ₱8,095.00 and the number of quantity is {isAddRemove}</p>
          <p className=" my-2 text-center font-semibold text-slate-900">We appreciate your business. Your order has been successfully processed.</p>
         
      </Modal>

     
        <header className=' m-4 '>
          <Header />
        </header>
        <main>

          <div className=" flex justify-center items-center gap-28 mx-20 my-32"> 
            {/* for imageslide */}
                <Shoes />
              {/* for buttonImg */}
              <div className="">
                <div>
                  <h1 className=" my-4 font-bold text-stone-800">SNEKER COMPANY</h1>
                  <h1 className=" text-5xl my-8 font-bold">Air Jordan 1 Zoom <br /> CMFT 2</h1>
                  <p className=" text-neutral-600 font-medium my-5 text-lg">
                    Soft suede and Jordan Brand's
                    signature Formula 23 foam come together to give you an extra luxurious 
                    (and extra cosy) AJ1. You don't need to play"either or" when it comes to 
                    choosing style or comfort with this one—which is nice, 'cause you deserve both. 
                  </p>

                    <div className=" flex gap-3 items-center mb-4">
                    <h1 className=" text-2xl font-semibold">{currencyFormatter.format(8095)}</h1>
                    <h2 className=" font-medium bg-stone-400 px-2 rounded text-gray-800">50%</h2>
                    </div>
                    

                    <div className=" flex gap-4 items-center py-3">
                    <div className=" bg-neutral-500  rounded py-1 px-3 ">
                        <button className=" font-semibold " onClick={ handlRemoveQuantity}>-</button>
                        <span className=" px-4 font-semibold">{isAddRemove}</span>
                        <button className="font-semibold" onClick={handleAddQuantity}>+</button>
                      </div>
                      <button 
                        onClick={handleOpenModal}
                        className=" bg-slate-500 px-10 py-1 rounded font-medium text-slate-900 hover:bg-neutral-600 hover:text-gray-400" 
                        >Add Cart
                      </button>
                    </div>
                  
                </div>
              </div>
          </div>
        </main>
      
      </>     
    
  )
}

export default App
         