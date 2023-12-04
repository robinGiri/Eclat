import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TheHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
  };

  return (
    <>
      {/* offers' board */}
      <div className='absolute bg-yellow-50 top-13 flex items-center justify-center w-full h-16 overflow-hidden z-10'>
        <div className='border-black border-dashed border-spacing-7'>
          <p className='marquee my-0 text-center text-xs font-semibold text-red-500 drop-shadow-lg'>15% Off</p>
          <p className='marquee text-center text-xs text-md'>Use Code: "Christmas"</p>
        </div>
      </div>
{/* Card Background */}
<div className="bg-white rounded-lg shadow-md p-8 m-8">
       

        {/* Hero section */}
        <div className="relative flex justify-center overflow-hidden">
          {/* Add your responsive styles here */}
          <Slider {...settings} className="w-full">
            {/* Replace these divs with your actual carousel items */}
            <div>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/03/totebags-lowres-3945.jpg?auto=webp&quality=75&crop=3:2&width=1024" // Replace with your image source
                alt="Carousel Item 1"
                className="my-16 p-1"
              />
              <p className='text-slate-700 p-1 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure odit numquam excepturi ab magnam aspernatur aliquid eaque pariatur tenetur earum sed, aperiam ut. Suscipit ex dolores optio dignissimos vitae!</p>
            </div>
            <div>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/03/totebags-lowres-3945.jpg?auto=webp&quality=75&crop=3:2&width=1024" // Replace with your image source
                alt="Carousel Item 1"
                className="my-16 p-1"
              />
              <p className='flex flex-col text-slate-700 p-1 font-bold font-serif'>Lorem ipsum dolor sit amet</p>
              <p className='text-slate-700 p-1 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure odit numquam excepturi ab magnam aspernatur aliquid eaque pariatur tenetur earum sed, aperiam ut. Suscipit ex dolores optio dignissimos vitae!</p>
            </div>
            <div>
              <img
                src="https://cdn.thewirecutter.com/wp-content/uploads/2020/03/totebags-lowres-3945.jpg?auto=webp&quality=75&crop=3:2&width=1024" // Replace with your image source
                alt="Carousel Item 1"
                className="p-1 my-16"
              />
              <p className='text-slate-700 p-1 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure odit numquam excepturi ab magnam aspernatur aliquid eaque pariatur tenetur earum sed, aperiam ut. Suscipit ex dolores optio dignissimos vitae!</p>
            </div>
            <div>
              <img
                src="https://placekitten.com/1200/601" // Replace with your image source
                alt="Carousel Item 2"
                className="my-12"
              />
            </div>
            {/* Add more carousel items as needed */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default TheHome;
