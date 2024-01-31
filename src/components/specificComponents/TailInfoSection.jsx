import TheFooter from "./TheFooter";
import logo from '../../assets/logo.png';

export default function TailInfoSection() {
  const handleRowClick = (info) => {
    // Handle the click event for each row
    console.log(`Clicked on: ${info}`);
  };

  return (
    // <div className="grid grid-cols-3 gap-4 p-28">
    //     {/* Help Column */}
    //     <div>
    //         <p className="font-bold mb-7">Help</p>
    //         <div
    //             className="mb-3 cursor-pointer hover:font-bold hover:underline"
    //             onClick={() => handleRowClick("Call or Email us")}
    //         >
    //             Call or
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:font-bold hover:underline"
    //             onClick={() => handleRowClick("Call or Email us")}
    //         >
    //             Email
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500"
    //             onClick={() => handleRowClick("FAQs")}
    //         >
    //             FAQs
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500"
    //             onClick={() => handleRowClick("Product Care")}
    //         >
    //             Product Care
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500 "
    //             onClick={() => handleRowClick("Stores")}
    //         >
    //             Stores
    //         </div>
    //     </div>

    //     {/* Services Column */}
    //     <div>
    //         <p className="font-bold mb-7">Services</p>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500"
    //             onClick={() => handleRowClick("Request")}
    //         >
    //             Request
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-green-500"
    //             onClick={() => handleRowClick("Customize")}
    //         >
    //             Customize
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500"
    //             onClick={() => handleRowClick("Gift")}
    //         >
    //             Gift
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500"
    //             onClick={() => handleRowClick("Repairs")}
    //         >
    //             Repairs
    //         </div>
    //     </div>

    //     {/* Connect Column */}
    //     <div>
    //         <p className="font-bold mb-7">Connect</p>
    //         <div
    //             className="mb-3 cursor-pointer hover:text-neutral-500"
    //             onClick={() =>
    //                 handleRowClick(
    //                     "Get exclusive access to new product launches – sign up now!"
    //                 )
    //             }
    //         >
    //             Get exclusive access to new product launches – sign up now!
    //         </div>
    //         <div
    //             className="mb-3 cursor-pointer hover:underline hover:font-bold text-neutral-800"
    //             onClick={() => handleRowClick("Follow Us")}
    //         >
    //             Follow Us
    //         </div>
    //     </div>
    // </div>
    <div>
      <div className="hidden lg:block">
        <div className="p-3 border border-white shadow-custom-nav-shadow -mt-2">
          <div className="flex gap-5 my-16 mt-[15rem]">
            <div className="w-[40%] -mt-[5rem]">
              <img
                src={logo}
                alt="Eclat Logo"
                className="h-[70px]"
              />
              <p className="text-sm text-gray-900 leading-6 px-6 mt-3 font-[500]">
                Explore the perfect blend of fashion with Eclat, your premier
                destination for men's, women's, and kids' bags. Eclat offers a
                curated collection to suit every style and need. Elevate your
                everyday with our diverse range of high-quality bags, designed
                to complement any outfit and occasion. Shop now and add a touch
                of elegance to your ensemble with Eclat!
              </p>
            </div>

            <div className="w-[50%] text-[12px] flex justify-between leading-7">
              <div>
                <h1 className="text-[#B88E72] font-bold text-[1rem]">Help</h1>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Call
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Email
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    FAQs
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Product Care
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    stores
                  </span>
                </p>
              </div>
              <div>
                <h1 className="text-[#B88E72] font-bold text-[1rem]">
                  Services
                </h1>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Request
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Customize
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Gift
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Repairs
                  </span>
                </p>
              </div>
              <div>
                <h1 className="text-[#B88E72] font-bold text-[1rem]">
                  Connect
                </h1>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Get exclusive to new product launches - Sign up now!
                  </span>
                </p>
                <p>
                  <span className="stylish-border hover:text-gray-600 cursor-pointer">
                    Follow Us
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="lg:hidden">
          <div className="border border-white shadow-custom-nav-shadow -mt-2">
            <div className="flex flex-col gap-5 my-14 mt-[15rem]">
              <div className="-mt-[5rem]">
                <img
                  src={logo}
                  alt="Eclat Logo"
                  className="h-[60px]"
                />
                <p className="text-xs text-gray-900 leading-6 px-3 mt-3 font-[500]">
                  Explore the perfect blend of fashion with Eclat, your premier
                  destination for men's, women's, and kids' bags. Eclat offers a
                  curated collection to suit every style and need. Elevate your
                  everyday with our diverse range of high-quality bags, designed
                  to complement any outfit and occasion. Shop now and add a
                  touch of elegance to your ensemble with Eclat!
                </p>
              </div>

              <div className="text-[12px] px-4 flex justify-between gap-4 leading-7">
                <div>
                  <h1 className="text-[#B88E72] font-bold text-[1rem]">Help</h1>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Call
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Email
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      FAQs
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Product Care
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      stores
                    </span>
                  </p>
                </div>
                <div>
                  <h1 className="text-[#B88E72] font-bold text-[1rem]">
                    Services
                  </h1>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Request
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Customize
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Gift
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Repairs
                    </span>
                  </p>
                </div>
                <div>
                  <h1 className="text-[#B88E72] font-bold text-[1rem]">
                    Connect
                  </h1>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Get exclusive to new product launches - Sign up now!
                    </span>
                  </p>
                  <p>
                    <span className="stylish-border hover:text-gray-600 cursor-pointer">
                      Follow Us
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
