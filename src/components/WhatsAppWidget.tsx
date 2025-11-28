import { useState } from "react";
// Assuming you are using an icon library like lucide-react or react-icons
// If not, you can replace these with your own <img> tags or text.
import { MessageCircle, Users, X } from "lucide-react";
import whatsAppIcon from "../assets/whatsapp.webp";
import { Link } from "react-router";

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* --- Option 2: Join Channel --- */}
            <Link
                to="https://whatsapp.com/channel/0029VbBm6Mh7DAWy5XJH433k"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-50 transition-all duration-300 transform origin-bottom-right
                    ${
                        isOpen
                            ? "scale-100 opacity-100 translate-y-0"
                            : "scale-0 opacity-0 translate-y-10 pointer-events-none"
                    }
                `}
            >
                <span className="font-medium text-sm">Join Channel</span>
                {/* Replace with your community icon or <img /> */}
                <div className="bg-blue-100 p-1.5 rounded-full">
                    <Users size={18} className="text-blue-600" />
                </div>
            </Link>

            {/* --- Option 1: Chat With Us --- */}
            <Link
                to="https://wa.me/+917676720897?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-50 transition-all duration-300 transform origin-bottom-right delay-75
                    ${
                        isOpen
                            ? "scale-100 opacity-100 translate-y-0"
                            : "scale-0 opacity-0 translate-y-10 pointer-events-none"
                    }
                `}
            >
                <span className="font-medium text-sm">Chat with us</span>
                {/* Replace with your chat icon or <img /> */}
                <div className="bg-green-100 p-1.5 rounded-full">
                    <MessageCircle size={18} className="text-green-600" />
                </div>
            </Link>

            {/* --- Main Trigger Button --- */}
            <button
                onClick={toggleOpen}
                className="relative w-14 h-14 bg-transparent focus:outline-none hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            >
                {/* Logic: If open, show an 'X' (or dim the icon). 
                   If closed, show the WhatsApp Icon.
                   Below creates a smooth fade effect between the Icon and an X.
                */}

                {/* The X Icon (shows when open) */}
                <div
                    className={`absolute inset-0 bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                    }`}
                >
                    <X className="w-6 h-6 text-gray-600" />
                </div>

                {/* The WhatsApp Icon (shows when closed) */}
                <img
                    src={whatsAppIcon}
                    alt="Contact"
                    className={`w-full h-full object-cover transition-all duration-300 ${
                        isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                />
            </button>
        </div>
    );
};

export default WhatsAppWidget;
