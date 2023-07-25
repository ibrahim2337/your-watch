import { Slide } from "hero-slider";
import HeroSlider from "hero-slider/dist/HeroSlider";


const img1 = "https://i.ibb.co/WDs53sZ/img1.png";
const img2 = "https://i.ibb.co/g6wtd1H/img2.png";
const img3 = "https://i.ibb.co/w0Lxcrx/img3.png";
const img4 = "https://i.ibb.co/j4FQBNy/img4.png";
const img5 = "https://i.ibb.co/J2SDbXM/img5.png";
const img6 = "https://i.ibb.co/zRnNwhr/img6.png";
const img7 = "https://i.ibb.co/9r7hQFG/img7.png";

const Banner = () => {
    return (
        
         <div className="py-5">
              {/* <HeroSlider
               slidingAnimation="left_to _right"
               orientation="horizontal"
               initialSlide={1}
               onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange",previousSlide, nextSlide)}
               onChange={nextSlide => console.log(" onChange", nextSlide)}
               onAfterChange={nextSlide => console.log("nextSlide", nextSlide)}
               style={{
                backgroundColor:"rgba(0,0,0,0.33)"
               }}
               setting={{
                slidingDuration:250,
                slidingDelay:100,
                shouldAutoplay:true,
                shouldDisplayButtons:true,
                autoplayDuration:5000,
                height:"100vh"
               }}
           >

            <Slide
                background={{
                    backgroundImage:img1,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide>
                background={{
                    backgroundImage:img2,
                    backgroundAttachment: "fixed"
                }}
            </Slide>
            <Slide>
                background={{
                    backgroundImage:img3,
                    backgroundAttachment: "fixed"
                }}
            </Slide>
            <Slide>
                background={{
                    backgroundImage:img4,
                    backgroundAttachment: "fixed"
                }}
            </Slide>
            <Slide>
                background={{
                    backgroundImage:img5,
                    backgroundAttachment: "fixed"
                }}
            </Slide>
            <Slide>
                background={{
                    backgroundImage:img6,
                    backgroundAttachment: "fixed"
                }}
            </Slide>
            <Slide>
                background={{
                    backgroundImage:img7,
                    backgroundAttachment: "fixed"
                }}
            </Slide>
           </HeroSlider> */}
         </div>
       
    );
};

export default Banner;