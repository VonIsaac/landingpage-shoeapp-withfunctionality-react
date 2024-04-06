import markWeber from '../assets/avatar-mark-webber.webp'
import myCart from '../assets/shopping-cart.png'

export default function Header(){
     
    return(
        <div className=' flex justify-between items-center border-b '>
        <div className=' flex gap-[25px]'>
          <h1 className=' ml-8 font-black text-4xl'>SNEAKERS</h1>
          <ul className=' flex gap-6 ml-6 cursor-pointer text-neutral-400 font-medium'>
            <li className=''>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
       
        <div className=' flex justify-center items-center mb-5'>
          <img src= {myCart} alt="cart-icon" className=' w-[25px] cursor-pointer  h-[25px]' />
          <img src={markWeber} alt="ico" className=' w-[45px] mr-16 ml-[40px]'/>
        </div>
         
      </div>
    )
}