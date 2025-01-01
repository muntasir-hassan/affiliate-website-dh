import Header from "../../Components/Header";
import Aside from "../../Components/Aside";
import Footer from "../../Components/Footer";
import data from "./data";
import { Link } from "react-router-dom";
function Blogs() {
  return (
    <>
      <Header />
      <div className="my-10 flex flex-col px-5 gap-4 md:grid grid-cols-2 lg:grid-cols-3 md:items-center md:justify-items-center md:px-10 lg:px-14 lg:mx-auto bg-[#f6f9fc] py-4">
        {data.map((blog) => {
          return (
            <div
              className="w-[256px] border-2 border-black rounded-md bg-[#fffffff]"
              key={blog.id}
            >
              <img src={blog.imgSrc} alt={blog.alt} />
              <div className="border-t-2 border-black p-1">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-xs font-normal">{blog.description}</p>
                <Link
                  to={blog.link}
                  className="font-mono font-semibold hover:underline decoration-2"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Aside />
      <div className="mb-10"></div>
      <Footer />
    </>
  );
}

export default Blogs;
