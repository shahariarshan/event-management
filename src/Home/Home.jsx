
import { useLoaderData } from "react-router-dom";
import Card from "../All cards/Card";

import Header from "../Header/Header";
import Slider from "../Slider";
import Navbar from "./Navbar";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const cards =useLoaderData()
    console.log(cards)
    
    return (
        <div className=" mx-auto container bg-gradient-to-r from-cyan-200 to-blue-100">
            <Helmet>
                <title>
                    Health & Wealth | Home
                </title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            
        <div>
           <Card cards={cards}></Card>
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