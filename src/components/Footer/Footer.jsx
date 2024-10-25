

const Footer = () => {
  return (
    // Footer Content

    <footer className="px-10 py-10 lg:px-20 bg-[#06091A] absolute">
      {/* Logo section */}
      <div className="flex justify-center items-center py-6  mt-48">
        <img src="./footer_logo.png" alt="Cricket Logo" className="w-24" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <div>
          <h6 className="font-bold text-lg">About Us</h6>
          <p className="mt-2 text-sm text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="font-bold text-lg">Quick Links</h6>
          <ul className="mt-2 space-y-2 text-sm list-disc list-inside">
            <li>
              <a href="#" className="text-gray-400 hover:text-[#0BE58A]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-[#0BE58A]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-[#0BE58A]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-[#0BE58A]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h6 className="font-bold text-lg">Subscribe</h6>
          <p className="mt-2 text-sm text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md text-white"
            />
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
        <p className="text-gray-400">
          ©2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
