import Banner from "./Banner";
import Destinations from "./Destinations";
import HotelsInHome from "./HotelsInHome";
import ResortsInHome from "./ResortsInHome";
import Review from "./Review/Review";

const Home = () => {
    return (
        <div className="font-Fira"> 
            <Banner></Banner>
            <Destinations></Destinations>
            <h1 className="text-5xl font-bold text-center m-5">Hotels</h1>
            <HotelsInHome></HotelsInHome>
            <h1 className="text-5xl font-bold text-center m-5">Resorts</h1>
            <ResortsInHome></ResortsInHome>
            <Review></Review>
        </div>
    );
};

export default Home;