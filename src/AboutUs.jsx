import { Link } from "react-router-dom";



const AboutUs = () => {
    return (
        <div>
           
            <div className="hero min-h-screen mt-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/dffVQck/health-and-wellness-events-500x500.webp" className="max-w rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Us!</h1>
                        <p className="py-6"><span className="text-amber-400 text-4xl font-semibold"> W</span>elcome to <span className="text-red-600 text-xl">Health & Wealthness Event</span>, where we believe that good health and financial well-being are the cornerstones of a fulfilling life. Founded on the principles of holistic wellness, we are dedicated to empowering individuals to achieve optimal health and prosperity.At <span className="text-red-600 text-xl">Health & Wealthness Event</span>, we understand the intricate connection between health and wealth. A healthy body and mind provide the foundation for a successful and prosperous life. Our mission is to provide valuable insights, practical tips, and expert guidance to help you attain physical well-being, mental clarity, and financial stability
                        <Link to='/about'>
                        <p className="text-sky-800 text-xl">Read More...</p>
                        </Link>
                        </p>
                       
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AboutUs;