import { useState,  useRef } from "react"
import ModalShoes from "./ModalShoes.jsx";
import {shoesData} from '../UTIL/shoeData.js'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Shoes(){
    const openModal = useRef()
    const [isPicture, setIsPicture] = useState(0);
    const [modalPic, setModalPic] = useState(0)

    function handleSelectImg(shoeId){
        setIsPicture(shoeId)
    };

    function handleOpenModal(){
        openModal.current.open()
    }

    function handleRightSlide(){
        const slide = modalPic === shoesData.length -1
        const imgSlides = slide ? 0: modalPic + 1

        setModalPic(imgSlides)
    }

    function handleLeftSlide(){
        const slides = modalPic === 0
        const imgSlides = slides ? shoesData.length -1: modalPic -1;
        setModalPic(imgSlides)
    }

    function modalPicSelect(shoesId){
        setModalPic(shoesId)
    }

    return(
        <>
            <ModalShoes ref={openModal} >
               
               
               
                <div className=" flex justify-center items-center relative">
                    <button className=" absolute left-1" onClick={handleLeftSlide} ><SlArrowLeft  /></button>
                    <img src={shoesData[modalPic].img} alt="icon" className=" w-[500px] rounded-lg bg-cover" /> 
                    <button className=" absolute right-1" onClick={handleRightSlide}><SlArrowRight /></button>
                </div>     
                
                <ul className=" flex items-center justify-center mt-3 gap-3">
                {shoesData.map((shoes, shoesId) => (
                        <li key={shoesId}>
                            <button onClick={() => modalPicSelect(shoesId)}>
                                <img src={shoes.img} alt="icon-jpg" className=" w-[90px] rounded-lg" />
                            </button>
                        </li>
                    ))}
                </ul>
            </ModalShoes> 
                

            <div>
                <button onClick={handleOpenModal}>
                    <img src={shoesData[isPicture].img} alt="icon-jpg" className=" w-[420px] rounded-md mt-3npm mx-10 mb-5 cursor-pointer" />
                </button>
                   
                    
                
                <ul className=" flex items-center justify-center ml-14 gap-8">
                    {shoesData.map((shoes, shoesId) => (
                        <li key={shoesId}>
                            <button onClick={() => handleSelectImg(shoesId)}>
                            <img src={shoes.img} alt="icon-jpg" className=" w-[165px] rounded-md" />
                            </button>
                        </li>
                    ))}
                    </ul>

            </div>
        </>
    )
}

// <div className=" w-[350px] h-9 rounded bg-cover bg-no-repeat" style= {{  backgroundImage: `url(${shoesData[isPicture].img})`}}></div>
/*<div className=" flex">
                    <button><SlArrowLeft className="rounded-full h-5 mr-3" /></button>
                        <img src={shoesData[isPicture].img} alt="icon" className=" w-[250px] rounded bg-cover" /> 
                    <button><SlArrowRight /></button>
                </div> */