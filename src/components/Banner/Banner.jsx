import img1 from "../../assets/banner/img1.png";
import img2 from "../../assets/banner/img2.png";
import img3 from "../../assets/banner/img3.png";
import img4 from "../../assets/banner/img4.png";
import img5 from "../../assets/banner/img5.png";
import img6 from "../../assets/banner/img6.png";
import img7 from "../../assets/banner/img7.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full lg:h-[650px]">
        <div id="slide1" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img1}
            className="w-full lg:h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img2}
            className="w-full lg:h-[650px] "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img3}
            className="w-full lg:h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img4}
            className="w-full lg:h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img5}
            className="w-full lg:h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img6}
            className="w-full lg:h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full lg:h-[650px]">
          <img
            src={img7}
            className="w-full lg:h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
