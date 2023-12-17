export default function TailInfoSection() {
    const handleRowClick = (info) => {
        // Handle the click event for each row
        console.log(`Clicked on: ${info}`);
    };

    return (
        <div className="grid grid-cols-3 gap-4 p-28">
            {/* Help Column */}
            <div>
                <p className="font-bold mb-7">Help</p>
                <div
                    className="mb-3 cursor-pointer hover:font-bold hover:underline"
                    onClick={() => handleRowClick("Call or Email us")}
                >
                    Call or
                </div>
                <div
                    className="mb-3 cursor-pointer hover:font-bold hover:underline"
                    onClick={() => handleRowClick("Call or Email us")}
                >
                    Email
                </div>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500"
                    onClick={() => handleRowClick("FAQs")}
                >
                    FAQs
                </div>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500"
                    onClick={() => handleRowClick("Product Care")}
                >
                    Product Care
                </div>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500 "
                    onClick={() => handleRowClick("Stores")}
                >
                    Stores
                </div>
            </div>

            {/* Services Column */}
            <div>
                <p className="font-bold mb-7">Services</p>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500"
                    onClick={() => handleRowClick("Request")}
                >
                    Request
                </div>
                <div
                    className="mb-3 cursor-pointer hover:text-green-500"
                    onClick={() => handleRowClick("Customize")}
                >
                    Customize
                </div>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500"
                    onClick={() => handleRowClick("Gift")}
                >
                    Gift
                </div>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500"
                    onClick={() => handleRowClick("Repairs")}
                >
                    Repairs
                </div>
            </div>

            {/* Connect Column */}
            <div>
                <p className="font-bold mb-7">Connect</p>
                <div
                    className="mb-3 cursor-pointer hover:text-neutral-500"
                    onClick={() =>
                        handleRowClick(
                            "Get exclusive access to new product launches – sign up now!"
                        )
                    }
                >
                    Get exclusive access to new product launches – sign up now!
                </div>
                <div
                    className="mb-3 cursor-pointer hover:underline hover:font-bold text-neutral-800"
                    onClick={() => handleRowClick("Follow Us")}
                >
                    Follow Us
                </div>
            </div>
        </div>
    )
}