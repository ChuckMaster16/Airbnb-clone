import React from 'react'

function Banner() {
  return (
    <div className="bg-cover bg-center relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] justify-center ">
    <img
        src="https://res.cloudinary.com/chuckmaster/image/upload/v1664682592/airbnb%20clone/airbnb_bgimg_cfcdpd.webp"
        alt="back ground"
        layout='fill'        
        />
    <div className="absolute top-1/2 w-full text-center ">
     <p className="text-sm sm:text-lg text-white font-simibold">Not sure where to go? Perfect</p>
     <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> I'm Flexiable</button>
    </div>

    </div>
  )
}

export default Banner;
