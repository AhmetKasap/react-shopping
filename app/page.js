import Navbar from "@/components/Navbar/Navbar";
import SliderCom from "@/components/SliderCom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import MiniSlider from "@/components/Navbar/MiniSlider";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <MiniSlider></MiniSlider>
      <div className="w-11/12 mx-auto">

        <SliderCom ></SliderCom>


        <Card></Card>

      </div>
      <Footer></Footer>

      
    </>
  )
}
