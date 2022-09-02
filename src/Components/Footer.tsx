import facebook from "../assets/img/facebook.png"
const Footer=()=>{
    return(
        <div>
            <div className="container-fluid text-center mt-2 bg-light p-2  w-100 bg-primary">
                <a href="https://www.facebook.com/tinashe.mutonga" target="_blank"><img src={facebook} alt=""/></a>
                <p>or call</p>
                <a href="tel:+263 773 738 756" className="animate-character"><b>+263 773 738 756 | +263 719 738 756</b></a>
            </div>
        </div>
        
    )
}

export default Footer;