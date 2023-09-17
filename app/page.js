import Navbar from "@/components/Navbar/Navbar";
import SliderCom from "@/components/SliderCom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <SliderCom ></SliderCom>


      </div>
      
    </>
  )
}
