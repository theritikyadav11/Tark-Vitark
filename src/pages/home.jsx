import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Main from "../components/main";
import Slideshow from "../components/slideshow";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Slideshow />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
