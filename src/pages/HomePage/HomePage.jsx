import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Gallery from "../../components/Gallery/Gallery";
import Review from "../../components/Review/Review";




const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Gallery></Gallery>
           <Review></Review>
        </div>
    );
};

export default HomePage;