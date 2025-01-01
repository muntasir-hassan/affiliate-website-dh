<!--! adding a new blog -->

To add a new blog create a folder Blog {no.} and a file Blog{no.}.jsx inside the Blog {no.} folder, and add the folder to Pages folder.

<!--! And paste the code to the Blog{no.}.jsx file: -->

import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

function Blog{no.}() {
return (
<>
<Helmet>

<title></title>
<meta
          name="description"
          content=""
        />
</Helmet>
<Header />

      <main className="max-sm:mx-2 sm:w-4/5 my-5 max-w-[800px] sm:mx-auto text-lg">
        <Link
          to={"/blogs"}
          className="text-2xl font-mono font-semibold underline decoration-2 hover:text-red-600 transition-all duration-300"
        >
          More Blogs
        </Link>
      </main>

      <Footer />
    </>

);
}

export default Blog{no.};

<!--! After that add the following code for specific needs -->

To add a:

image: <img src="" width="100%">
h1: <h1 className="text-4xl mb-1 sm:text-5xl md:text-6xl font-semibold"><h1>
h3: <h3 className="text-2xl my-2 sm:text-3xl md:text-4xl font-medium"></h3>
ol: <ol className="list-decimal ml-6 sm:text-lg"><li className="mb-2"></li></ol>
a: <a href=""className="text-blue-950 font-bold underline"></a>{" "}
