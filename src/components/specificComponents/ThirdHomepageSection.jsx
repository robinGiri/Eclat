export default function ThirdHomepageSection() {
    return (
        <div>
            <div className="bg-neutral-50 ">
                <div className=" bg-white flex justify-center">
                    <h1 className="font-bold text-5xl py-16">More Products</h1>
                </div>
                <div className="bg-white">
                    <div className="p-5 grid grid-cols-3 gap-3">
                        
                        
                        {/* First clickable div */}

                        <div
                            className="h-80 w-120 p-4 cursor-pointer transition duration-300 bg-[url('https://chateauclothingco.com/cdn/shop/files/minimalist-retail-clothing-display_9ff6f20e-9b1f-4ef0-85e3-8006add3d60a.jpg?v=1666190488&width=1500')] bg-cover hover:border-8 border-black hover:text-orange-800"
                            onClick={() => console.log("Div 1 clicked")}
                        >
                            <p className="font-bold text-6xl p-4 bg-orange-100">Clothing</p>

                        </div>


                         {/* Second clickable div */}

                         <div
                            className="h-80 w-120 p-4 cursor-pointer transition duration-300 bg-[url('https://static-assets.business.amazon.com/assets/in/7th-april-2022/shutterstock_2880_960_0704.jpg.transform/2880x960/image.jpg')] bg-cover hover:border-8 border-red-800  hover:text-red-50 "
                            onClick={() => console.log("Div 1 clicked")}
                        >
                            <p className="font-bold text-6xl p-4 bg-orange-400">Cosmetics</p>

                        </div>


                         {/* Third clickable div */}

                         <div
                            className="h-80 w-120 p-4 cursor-pointer transition duration-300 bg-[url('https://www.myg.in/images/thumbnails/533/400/blog/9/Best_Mobile_Accessories.jpg')] bg-cover hover:border-8 border-blue-400 hover:text-teal-50"
                            onClick={() => console.log("Div 1 clicked")}
                        >
                            <p className="font-bold text-6xl p-4 bg-teal-900">Electronics & Watches</p>

                        </div>


                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
} 