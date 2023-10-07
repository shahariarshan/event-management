

const Slider = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover  " src="https://i.ibb.co/r07M5tC/fresh-fruits-vegetables-background-different-fruits-vegetables-eating-healthy-colorful-fruits-vegeta.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover " src="https://i.ibb.co/kqpWkTq/young-blonde-woman-sportswear-is-meditating-yoga-mat-with-closed-eyes.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-96 ">
          <img className="lg:object-cover w-full  " src="https://i.ibb.co/5Yh3QCx/group-diverse-people-holding-health-fitness-icons.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover w-full" src="https://i.ibb.co/vqxmBj4/wellness-exercise-health-lifestyle-nutrition-concept.jpg"  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full h-96">
          <img className="lg:object-cover w-full h-auto" src="https://i.ibb.co/YBnXr5T/hands-holding-water-bottle-slate.jpg"  />
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
    );
};

export default Slider;