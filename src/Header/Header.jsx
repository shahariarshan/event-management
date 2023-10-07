import logo from '../assets/pngwing.com.png'

const Header = () => {
    return (
        <div className=' max-w-6xl mx-auto'>
            <div className=''>
                <img className='w-40 lg:w-1/6 mx-auto' src={logo} alt="" />
                <h1 className="text-2xl text-center mb-8 font-semibold text-green-800 mt-3">Health and Wellness Events</h1>
            </div>
        </div>
    );
};

export default Header;