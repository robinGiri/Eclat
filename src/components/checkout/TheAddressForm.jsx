import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function TheAddressForm({ onClose }) {
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Home", "Office"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[65%] h-[90%]">
        <div className="flex justify-between items-center p-6 border border-neutral-100 shadow-sm">
          <p className="text-sm ">Add New Delivery Address</p>
          <button title="Close">
            <IoCloseOutline
              className="text-3xl text-gray-500"
              onClick={onClose}
            />
          </button>
        </div>
        <div className="flex justify-between pl-6 pr-10 mt-5">
          <div className="w-[50%]">
            <form>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  placeholder="Input full name"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  placeholder="Input mobile number"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  Province
                </label>
                <div>
                  <select
                    name="province"
                    className="w-full text-gray-400 text-md border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  >
                    <option value="">Please choose your province</option>
                    <option
                      value="province1"
                      className="text-gray-700 text-sm "
                    >
                      Province 1
                    </option>
                    <option
                      value="province2"
                      className="text-gray-700 text-sm "
                    >
                      Province 2
                    </option>
                    <option
                      value="province3"
                      className="text-gray-700 text-sm "
                    >
                      Province 3
                    </option>
                    <option
                      value="province4"
                      className="text-gray-700 text-sm "
                    >
                      Province 4
                    </option>
                    <option
                      value="province5"
                      className="text-gray-700 text-sm "
                    >
                      Province 5
                    </option>
                    <option
                      value="province6"
                      className="text-gray-700 text-sm "
                    >
                      Province 6
                    </option>
                    <option
                      value="province7"
                      className="text-gray-700 text-sm "
                    >
                      Province 7
                    </option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  City
                </label>
                <div>
                  <select
                    name="city"
                    className="w-full text-gray-400 text-md border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  >
                    <option value="">
                      Please choose your city/municipality
                    </option>
                    <option
                      value="kathmandu"
                      className="text-gray-700 text-sm "
                    >
                      Kathmandu
                    </option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  Area
                </label>
                <div>
                  <select
                    name="area"
                    className="w-full text-gray-400 text-md border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  >
                    <option value="">Please choose your area</option>
                    <option
                      value="koteshwor"
                      className="text-gray-700 text-sm "
                    >
                      Koteshwor
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[47%]">
            <form>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  placeholder="House no. / building / street / area"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm  mb-2">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  name="landmark"
                  className="w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none"
                  placeholder="E.g. beside train station"
                />
              </div>
              <div>
                <div>
                  <p className="text-gray-700 text-sm  mb-1">
                    Select a label for effective delivery:
                  </p>
                </div>
                <div className="flex justify-between">
                  {options.map((option, index) => (
                    <p
                      key={index}
                      className={`cursor-pointer border w-[45%] text-sm flex justify-center rounded-md shadow-md p-2 py-3 ${
                        selectedOption === option
                          ? "border-sky-600"
                          : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="text-sm text-gray-700 mt-2">
                      Default Address (Optional)
                    </p>
                  </div>
                  <div className="border rounded-md flex flex-col gap-4 p-4">
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="w-4 h-4" />
                      <label className="text-sm">
                        Default shipping address
                      </label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="w-4 h-4" />
                      <label className="text-sm">Default billing address</label>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        Your existing default address setting will be replaced
                        if you make some changes here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-9 flex justify-end mr-9">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-4 px-16 rounded-md"
        >
          Save
        </button>
      </div>
      </div>
      </div>
  );
}

export default TheAddressForm;
