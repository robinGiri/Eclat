
export default function ThirdHomepageSection() {
    return (
        <div>
            <div className="bg-white">
                <div className=" bg-neutral-50 flex justify-start">
                    <h1 className="font-bold text-5xl m-10">More Products</h1>
                </div>
                <div className="p-2">
                    <div className="grid grid-cols-2 gap-2">
                        {/* First clickable div */}

                        <div
                            className="h-64 w-120 bg-neutral-500 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
                            onClick={() => console.log("Div 1 clicked")}
                        >
                            <p className="font-bold text-6xl p-16">Clothing</p>
                        </div>

                        {/* Second clickable div */}
                        <div
                            className="bg-neutral-500 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
                            onClick={() => console.log("Div 2 clicked")}
                        >
                            <p className="font-bold text-6xl p-16">Accessories</p>
                        </div>

                        {/* Third clickable div */}
                        <div
                            className="h-64 w-120 bg-neutral-600 text-white p-4 cursor-pointer transition duration-300 hover:bg-black"
                            onClick={() => console.log("Div 3 clicked")}
                        >
                            <p className="font-bold text-6xl p-16">Shoes</p>
                        </div>

                        {/* Fourth clickable div */}
                        <div
                            className="bg-slate-500  text-white p-4 cursor-pointer transition duration-300 hover:bg-red-600"
                            onClick={() => console.log("Div 4 clicked")}
                        >
                            <p className="font-bold text-6xl p-16">Request</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 