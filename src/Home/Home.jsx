
import { useLoaderData } from "react-router-dom";
import Card from "../All cards/Card";
import Footer from "../Footer";
import Header from "../Header/Header";
import Slider from "../Slider";
import Navbar from "./Navbar";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";


const Home = () => {
    const cards =useLoaderData()
    console.log(cards)
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            
        <div>
           <Card cards={cards}></Card>
        </div>
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
        <div>
            <AboutUs></AboutUs>
        </div>
        <div className="h-1/4">
            <ContactUs></ContactUs>
        </div>
        <div className="mt-5">
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;