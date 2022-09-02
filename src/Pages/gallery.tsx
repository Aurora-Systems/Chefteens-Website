import cvideo from "../assets/vid/video.mp4"
const Gallery=()=>{
    return(
        <div className="container">
            <div className="row text-center mt-2 d-flex align-items-center">
                <div className="col-sm">
                    <video src={cvideo} autoPlay loop controls width="100"  className="rounded"/>
                </div>
                <div className="col-sm">
                    <h1 className="display-1 animate-character">Gallery</h1>
                </div>
                <div className="col-sm">
                    <video src={cvideo} autoPlay loop controls width="100"  className="rounded"/>
                </div>
                
            </div>
            <div className="">
                <div className="powr-social-feed" id="3a57d853_1662121542"></div>
            </div>
            
        </div>
    )
}

export default Gallery;