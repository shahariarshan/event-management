import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";


const Advices = () => {
    return (
        <div className="mx-auto container bg-zinc-800">
            <Helmet>
                <title>
                    Health & Wealth | Advises
                </title>
            </Helmet>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 mt-8">
                <div className="hero pt-12 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/qJHPJnV/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-postur.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Why Yoga is Importent?</h1>
                            <p className="py-6">Consistent yoga practice enhances flexibility, listen to your body's limits, focus on mindful breathing to reduce stress, stay present in each moment, and explore different yoga styles to find what suits you best for a holistic well-being</p>
                            <div className="rating">
                            <p className="font-medium text-red-600 mr-2">Rating:</p>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="hero pt-12 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/p1kPr63/portrait-smiling-handsome-male-doctor-man.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Why Fitness is Mejor!</h1>
                                <p className="py-6 ">


                                    <li>
                                        <span className="font-semibold">Enhanced Physical Health:</span> Regular exercise improves cardiovascular health, strengthens muscles, and supports weight management, reducing the risk of chronic diseases like heart disease and diabetes.
                                    </li>

                                    <li>
                                        <span className="font-semibold"> Mental Well-being: </span>Exercise releases endorphins, reducing stress and anxiety while enhancing mood and promoting better sleep, contributing to overall mental wellness.
                                    </li>

                                    <li>
                                        <span className="font-semibold"> Improved Immune Function:</span> Regular physical activity strengthens the immune system, making the body more resilient against illnesses and infections.
                                    </li>

                                    <li>
                                        <span className="font-semibold"> Increased Energy Levels:</span> Fitness routines improve stamina and energy levels, allowing you to accomplish daily tasks with vigor and reducing feelings of fatigue.

                                    </li>



                                </p>
                                <div className="rating">
                                <p className="font-medium text-red-600 mr-2">Rating:</p>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="hero pt-12 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/NLPn89C/front-view-young-female-doctor-white-medical-suit-with-stethoscope-wearing-white-protective-mask-whi.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Maintaining Healthy Food </h1>
                                <p className="py-6">
                                    <li>
                                        <span className="font-semibold"> Balanced Diet:</span> Aim for a balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. This provides essential nutrients and energy for your body.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Portion Control:</span> Be mindful of portion sizes to avoid overeating. Use smaller plates, bowls, and utensils to help control portion sizes and prevent excessive calorie intake.
                                    </li>

                                    <li>
                                        <span className="font-semibold"> Limit Processed Foods:</span> Reduce your intake of processed foods, sugary snacks, and drinks high in added sugars. These often lack essential nutrients and can contribute to health issues like obesity and diabetes.
                                    </li>

                                    <li>
                                        <span className="font-semibold"> Stay Hydrated:</span> Drink plenty of water throughout the day. Hydration is essential for digestion, nutrient absorption, and overall bodily functions. Limit sugary beverages and opt for water, herbal teas, or infused water instead.
                                    </li>

                                    <li>
                                        <span className="font-semibold">Meal Planning:</span> Plan your meals and snacks ahead of time to avoid impulsive unhealthy food choices. Prepare meals at home whenever possible, as it gives you control over the ingredients and cooking methods.
                                    </li>

                                    <li>
                                        <span className="font-semibold">  Moderation, Not Deprivation:</span> Healthy eating is about balance. It's okay to indulge occasionally, but in moderation. Depriving yourself of treats entirely can lead to cravings and binge eating.

                                    </li>
                                </p>
                                <div className="rating">
                                    <p className="font-medium text-red-600 mr-2">Rating:</p>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Advices;