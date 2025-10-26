import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/course-details/:id",
        element: <Home />,
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
            <Footer />
        </div>
    );
};
