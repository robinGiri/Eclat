export default function TheFooter() {
    return (
        <footer className="bg-neutral-800 text-white p-8">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center">
            <p className="mb-10 text-3xl font-bold font-serif">Eclat</p>
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