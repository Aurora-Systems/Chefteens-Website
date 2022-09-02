import cvideo from "../assets/vid/video.mp4"
import {Fade} from "react-awesome-reveal"
const Gallery=()=>{
    return(
        <div className="container">
            <div className="row text-center mt-2 d-flex align-items-center">
                <div className="col-sm">
                    <Fade direction="left">
                        <video src={cvideo} autoPlay loop controls width="100"  className="rounded"/>
                    </Fade>
                </div>
                <div className="col-sm">
                    <Fade direction="down">
                        <h1 className="display-1 animate-character">Gallery</h1>
                    </Fade>
                </div>
                <div className="col-sm">
                    <Fade direction="right">
                        <video src={cvideo} autoPlay loop controls width="100"  className="rounded"/>
                    </Fade>
                </div>
                
            </div>
            <div className="">
                <Fade direction="down">
                    <div className="powr-social-feed" id="3a57d853_1662121542"></div>
                </Fade>
            </div>
            
        </div>
    )
}

export default Gallery;