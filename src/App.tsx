import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./animation.css";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import whatsAppIcon from "./assets/whatsapp.webp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/course-details/:id",
        element: <CourseDetails />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
    },
    {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
    },
    {
        path: "refund-policy",
        element: <RefundPolicy />,
    },

    {
        path: "*",
        element: <Home />,
    },
]);

function App() {
    return (
        <Layout>
            <RouterProvider router={router} />;
        </Layout>
    );
}

export default App;

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {children}

            <a
                className=""
                href="https://wa.me/+919262386604"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={whatsAppIcon}
                    alt="WhatsApp"
                    className="w-12 h-12 fixed bottom-6 right-6 cursor-pointer z-50 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </a>

            <Footer />
        </div>
    );
};
