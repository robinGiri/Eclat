import { useNavigate, Link } from "react-router-dom";


export default function TheFooter() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    setActiveTab("");
    navigate("/");
  };
    return (
        <footer className="bg-neutral-800 text-white p-4">
        <div className="flex justify-between">
          <div className="flex items-center">
           <img src="src/assets/logo_dark.png" alt="Logo" className="w-[100px] pb-2"/>
          </div>
          <div className="flex text-sm gap-5 items-center">
            <a href="#" className="hover:font-bold">
              Home
            </a>
            <a href="#" className="hover:font-bold">
              About Us
            </a>
            <a href="#" className="hover:font-bold">
              Contact
            </a>
          </div>
        </div>
      </footer>
    )
}