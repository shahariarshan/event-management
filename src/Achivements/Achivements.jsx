import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";


const Achivements = () => {
    return (
        
        <div className="mx-auto container">
          <Helmet>
                <title>
                    Health & Wealth | Achievements
                </title>
            </Helmet>
            <Navbar></Navbar>
             <div className="carousel w-full mt-9">
        <div id="slide1" className="carousel-item relative w-full h-84">
          <img className="h-full  w-full " src="https://i.ibb.co/jZmZxX3/istockphoto-1153130142-612x612.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-84">
          <img className="h-full w-full " src="https://i.ibb.co/2NhN6jR/dr-jorge-francisco-meneses-wha76-health-prize-awardee.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-84 ">
          <img className="h-full w-full  " src="https://i.ibb.co/2gYFWWb/team-doctors-smiling-conference-room.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-84">
          <img className="h-full w-full" src="https://i.ibb.co/935XcGy/hgsp-photo-1.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="mt-10">
      <Footer></Footer>
      </div>
        </div>
    );
};

export default Achivements;