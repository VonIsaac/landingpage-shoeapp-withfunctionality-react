import Header from "./Components/Header"
import { currencyFormatter } from "./UTIL/formatter"
import { shoesData } from "./UTIL/shoeData";
import { useState } from "react";
function App() {
  const [isPicture, setIsPicture] = useState(0)

  
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
                <h1>SNEKER COMPANY</h1>
                <h1>Air Jordan 1 Zoom CMFT 2</h1>
                <p>
                  Soft suede and Jordan Brand's
                  signature Formula 23 foam come together to give you an extra luxurious 
                  (and extra cosy) AJ1. You don't need to play"either or" when it comes to 
                  choosing style or comfort with this one—which is nice, 'cause you deserve both. 
                </p>

                  <div>
                  <h1>{currencyFormatter.format(8095)}</h1>
                  <h2>50%</h2>
                  </div>

                  <div>
                    <div>
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                    <button>Add Cart</button>
                  </div>
                
              </div>
            </div>
        </div>
      </main>

    </>
  )
}

export default App
