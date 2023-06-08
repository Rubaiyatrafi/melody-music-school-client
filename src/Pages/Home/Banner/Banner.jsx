import "./Banner.css";
import banner1 from "../../../assets/images/banner-1.jpg";
import banner2 from "../../../assets/images/banner-2.jpg";
import banner3 from "../../../assets/images/banner-3.jpg";
import banner4 from "../../../assets/images/banner-4.jpg";
import banner5 from "../../../assets/images/banner-5.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[700px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded" />

        <div className="absolute  flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Soul</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-3">
              There are many Music School in your side but we guarantee that we
              are the best for your heart
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 bg-amber-200">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-amber-200">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded" />
        <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Soul</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-3">
              There are many Music School in your side but we guarantee that we
              are the best for your heart
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5 bg-amber-200">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-amber-200">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded" />
        <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Soul</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-3">
              There are many Music School in your side but we guarantee that we
              are the best for your heart
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5 bg-amber-200">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-amber-200">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded" />
        <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Soul</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-3">
              There are many Music School in your side but we guarantee that we
              are the best for your heart
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5 bg-amber-200">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle bg-amber-200">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full rounded" />
        <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-3/4">
            <h2 className="text-6xl font-extrabold">
              Make Your <br /> <span className="text-rose-600">Soul</span> Free{" "}
              <br />& Better
            </h2>
            <p className="font-semibold bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-3">
              There are many Music School in your side but we guarantee that we
              are the best for your heart
            </p>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 bg-amber-200">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-amber-200">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
