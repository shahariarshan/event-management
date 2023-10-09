import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";


const OurTeam = () => {
    return (
        <div className="mx-auto container">
          <Helmet>
                <title>
                    Health & Wealth | Our Team
                </title>
            </Helmet>
            <Navbar></Navbar>
            <div className="carousel w-full mt-10">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover  w-full " src="https://i.ibb.co/824Xtfs/diverse-hands-touching-white-paper.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover w-full " src="https://i.ibb.co/VjmQwgS/business-people-collection-collage.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-96 ">
          <img className="lg:object-cover w-full  " src="https://i.ibb.co/MDgxJt0/team-teamwork-support-collaboration-concept.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover w-full" src="https://i.ibb.co/FJ4z0Rc/team-six-office-workers-white-wall.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover w-full h-auto" src="https://i.ibb.co/syh4H1b/5685567-58532.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div  id="slide6" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover w-full h-auto " src="https://i.ibb.co/M2C1bRL/young-people-working-out-park.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
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

export default OurTeam;