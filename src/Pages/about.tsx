import aboutFour from "../assets/img/aboutFour.jpg";
import aboutTwo from "../assets/img/aboutTwo.jpg";
import aboutThree from "../assets/img/aboutThree.jpg";
import { bgDiv, generalImg } from "../Components/cssComponents";
import { Fade } from "react-awesome-reveal";
const About=()=>{
    return(
        <div className="container">
            <div className="row  text-center d-flex align-items-center mt-5">
               
                <div className="col-sm img-hover-zoom" >
                    <Fade direction="left">
                        <img src={aboutTwo} className={generalImg} alt=""/>
                    </Fade>
                </div>
                <div className="col-sm">
                    <Fade direction="down" cascade={true}>
                        <h1 className="animate-character display-1">ABOUT</h1>
                        <b>We cater for all diets. whether you need gluten free, vegan, vegetarian, Paleo, or pescatarian food for your event. we've got it all. we also offer a diverse menu so you can choose from Asian fusion to Italian food to whatever kind of food you want.</b>
                    </Fade>
                </div>
                <div className="col-sm  img-hover-zoom" >
                    <Fade direction="right">
                        <img src={aboutThree} className={generalImg} alt=""/>
                    </Fade>
                </div>
            </div>
            <div className="row page  mt-5">
                <div className="col-sm">
                    <Fade direction="down" cascade={true}>
                        <h1 className="display-1 animate-character">choose us?</h1>
                        <b>Catering isn't easy - but it shouldn't be hard. Chefteens has 10+ years of experience providing catering services, and all of our food is homemade with love. Our service is personal and we make sure there's joy in all that we do. Whether you want a full meal or just a snack, Chefteens will give you the best service and unforgettable experience.</b>
                    </Fade>
                </div>
                <div className="col-sm">
                    <Fade className="text-center img-hover-zoom" direction="down" cascade={true}>
                        <img src={aboutFour} alt="" className="img-fluid rounded w-50"/>
                    </Fade>
                </div>
                <div className="col-sm text-end">
                    <Fade direction="down" cascade={true}>
                        <h1 className="display-1 animate-character">Memory lane</h1>
                        <b>We've mastered the art of bringing your memories and recipes to life, specializing in all your old-school favorites from home. Not only will we provide you with your favorite dishes, but you'll also get to enjoy our special, secret family recipes.</b>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default About;