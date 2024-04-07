import Header from "./Components/Header"
import { currencyFormatter } from "./UTIL/formatter"
import { shoesData } from "./UTIL/shoeData";
import { useState, useContext } from "react";


function App() {

  const [isPicture, setIsPicture] = useState(0)
  


    /*function handleAddQauntity(){
      ctxContex.addQuantity()
    }*/
   

    function handleSelectImg(shoeId){
        setIsPicture(shoeId)
    }



  return (
    <>
      
        <header className=' m-4 '>
          <Header />
        </header>
        <main>

          <div className=" flex justify-center items-center gap-28 mx-20 my-32"> 
            {/* for imageslide */}
            <div>
              <div>
                <img src={shoesData[isPicture].img} alt="icon-jpg" className=" w-[420px] rounded-md m-10 cursor-pointer" />
                
              </div>
              <ul className=" flex items-center justify-center ml-11 gap-8">
                {shoesData.map((shoes, shoesId) => (
                    <li key={shoesId}>
                        <button onClick={() => handleSelectImg(shoesId)}>
                          <img src={shoes.img} alt="icon-jpg" className=" w-[140px] rounded-md" />
                        </button>
                    </li>
                ))}
                </ul>

            </div>
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
                        <button className=" font-semibold " >-</button>
                        <span className=" px-4 font-semibold">0</span>
                        <button className="font-semibold">+</button>
                      </div>
                      <button className=" bg-slate-500 px-10 py-1 rounded font-medium text-slate-900 hover:bg-neutral-600 hover:text-gray-400" >Add Cart</button>
                    </div>
                  
                </div>
              </div>
          </div>
        </main>
      </>     
    
  )
}

export default App
