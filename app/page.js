import Navbar from "@/components/Navbar/Navbar";
import SliderCom from "@/components/home/SliderCom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "@/components/home/Card";
import Footer from "@/components/home/Footer";
import MiniSlider from "@/components/home/MiniSlider";


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
