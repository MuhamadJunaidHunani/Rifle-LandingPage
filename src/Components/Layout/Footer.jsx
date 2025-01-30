import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaFax, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 text-sm pt-[130px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold uppercase mb-4 border-b border-gray-500 pb-2">Quick Links</h3>
          <ul className="space-y-4">
            <li>» Home</li>
            <li>» About</li>
            <li>» Our Products</li>
            <li>» Why Choose Us</li>
            <li>» Reviews</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-bold uppercase mb-4 border-b border-gray-500 pb-2">Other Links</h3>
          <ul className="space-y-4">
            <li>» FAQ</li>
            <li>» Terms & Conditions</li>
            <li>» Privacy Policy</li>
            <li>» Healthy</li>
            <li>» Contact Us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold uppercase mb-4 border-b border-gray-500 pb-2">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 2033 Auburn Sky Ct. League, United States</li>
            <li className="flex items-center gap-2"><FaPhone /> +1 (514) 927 - 2855</li>
            <li className="flex items-center gap-2"><FaFax /> +1 999 999 999</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@sirarms.com</li>
          </ul>
        </div>

        {/* Find Us On */}
        <div>
          <h3 className="font-bold uppercase mb-4 border-b border-gray-500 pb-2">Find Us On</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2"><FaTwitter /> Twitter</li>
            <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
            <li className="flex items-center gap-2"><FaFacebook /> Facebook</li>
            <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-500 pt-4">
        <p>© 2022 Sirarms. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
