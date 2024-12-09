import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Access from "./components/Access/Access";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-full h-full">
          <Navbar />
          <Hero />
          <Content />
          <Access />
          <Footer />
        </div>
      ),
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/features",
      element: <Features />
    },
    {
      path: "/team",
      element: <Team />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
