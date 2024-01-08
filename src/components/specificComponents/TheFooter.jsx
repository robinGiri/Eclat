import { useNavigate, Link } from "react-router-dom";


export default function TheFooter() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    setActiveTab("");
    navigate("/");
  };
    return (
        <footer className="bg-neutral-800 text-white p-6">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center">
           <img src="src/assets/logo_dark.png" alt="Logo" />
          </div>
          <div className="flex space-x-10">
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