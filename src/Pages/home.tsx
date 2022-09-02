import homeOne from "../assets/img/homeOne.jpg"
import home from "../assets/img/h5.jpg"
import homeTwo from "../assets/img/h2.jpg"
import homeThree from "../assets/img/h3.jpg"
import homeFour from "../assets/img/h4.jpg"
import homeSix from "../assets/img/h6.jpg"
import { Fade } from "react-awesome-reveal"
import logo from "../assets/img/logo.svg"
import { bgDiv } from "../Components/cssComponents";
import Footer from "../Components/Footer"
const Home=()=>{
    return(
        <div className="container">
             <div className="row page mt-5 d-flex justify-content-center align-items-center" >
                <div className="col-sm text-center">
                    <Fade direction="down" cascade={true}>
                    <h1 className="display-1 animate-character">ChefTeens Catering</h1>
                    <img src={logo}  className="img-fluid " alt=""/>
                    </Fade>
                </div>
           
                <div className="col-sm img-hover-zoom">
                    <Fade direction="up"> 
                        <img src={home} className="img-fluid  rounded  "/>
                    </Fade>
                </div>
                
            </div>
            <Fade direction="down">
            <div className="row mt-5">
                <div className="col-sm">
                    <div className="row"> 
                        <div className=" col-sm img-hover-zoom">
                            <img src={homeTwo} className="img-fluid  rounded " alt=""/>

                        </div>
                        <div className="img-hover-zoom col-sm">
                            <img src={homeFour} className="img-fluid rounded " alt=""/>
                        </div>
                        <div className="img-hover-zoom mt-3">
                            <img src={homeThree} className="img-fluid rounded "  alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="img-hover-zoom">
                        <img src={homeSix} alt="" className="img-fluid rounded "/>
                    </div>
                    <br/>
                    <div className="text-center">
                         <b className="mt-3 animate-character">The small details matter</b>
                    </div>
                </div>
            </div>
            </Fade>
            
            <div className="row mt-5">
                <div className="col-sm text-center">
                <Fade direction="left" cascade={true}>
                    <h1 className="display-1 animate-character">WE CATER FOR</h1>
                    <small><b>Everyones Included</b></small>
                </Fade>
                </div>
                <div className="col-sm text-center ">
                    <Fade direction="right" cascade={true}>
                        <div className="animate-character ">
                            <p><b>Halaal</b></p>
                            <p><b>Vegeterians</b></p>
                            <p><b>Pescatarians</b></p>
                            <p><b>Flexitarian</b></p>
                            <p><b>Macrobiotic</b></p>
                            
                            
                           
                            
                        </div>
                        
                    </Fade>
                </div>
            </div>
            
        </div>
    )
}

export default Home;