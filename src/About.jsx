
import { Helmet } from "react-helmet-async";
import Navbar from "./Home/Navbar";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Health & Wealth | About
                </title>
            </Helmet>
            <Navbar></Navbar>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/dffVQck/health-and-wellness-events-500x500.webp" alt="Shoes" /></figure>
                <div className="card-body">

                    <div>
                        <h1 className="text-5xl font-bold text-center ">About Us!</h1>
                        <p className="py-6"><span className="text-amber-400 text-4xl font-semibold"> W</span>elcome to <span className="text-red-600 text-xl">Health & Wealthness Event</span>, where we believe that good health and financial well-being are the cornerstones of a fulfilling life. Founded on the principles of holistic wellness, we are dedicated to empowering individuals to achieve optimal health and prosperity.At <span className="text-red-600 text-xl">Health & Wealthness Event</span>, we understand the intricate connection between health and wealth. A healthy body and mind provide the foundation for a successful and prosperous life. Our mission is to provide valuable insights, practical tips, and expert guidance to help you attain physical well-being, mental clarity, and financial stability.Our team of experienced professionals, including health experts and financial advisors, is committed to guiding you on your journey to robust health and financial freedom. Through informative articles, personalized advice, and inspiring success stories, we aim to inspire and support you in making positive changes in your life.Join us in exploring the intersection of health and wealth. Together, let's embark on a transformative journey towards a healthier, wealthier, and happier you.</p>

                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default About;