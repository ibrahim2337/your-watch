import Marquee from "react-fast-marquee";
import img1 from "../../assets/band-logo/1.jpg";
import img2 from "../../assets/band-logo/2.jpg";
import img3 from "../../assets/band-logo/3.jpg";
import img4 from "../../assets/band-logo/4.jpg";
import img5 from "../../assets/band-logo/5.jpg";
import img6 from "../../assets/band-logo/6.jpg";
import img7 from "../../assets/band-logo/7.jpg";
import img8 from "../../assets/band-logo/8.jpg";
import img9 from "../../assets/band-logo/9.jpg";
import img10 from "../../assets/band-logo/10.jpg";

const Category = () => {
  return (
    <div className="my-10">
      <Marquee>
        <div className="flex flex-row gap-10">
          <div className=" border-4 border-[#7ba4d3]">
            <img src={img1} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img3} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img4} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img5} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img6} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img7} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img8} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img2} className="h-20" alt="" />
          </div>
          <div className="border-4 border-[#7ba4d3]">
            <img src={img9} className="h-20" alt="" />
          </div>
          <div className="me-10 border-4 border-[#7ba4d3]">
            <img src={img10} className="h-20" alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Category;
