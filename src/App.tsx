import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./animation.css"
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import whatsAppIcon from "./assets/whatsapp.webp";

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
        path: "*",
        element: <Home />,
    }
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

            <span className="" >
                <img src={whatsAppIcon} alt="WhatsApp" className="w-12 h-12 fixed bottom-6 right-6 cursor-pointer z-50 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                        window.open("https://wa.me/1234567890", "_blank");
                    }}
                />
            </span>

            <Footer />
        </div>
    );
};
