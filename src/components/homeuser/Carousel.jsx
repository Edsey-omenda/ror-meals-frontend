import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from 'react-bootstrap';
import './carousel.css';

function Carr() {

    return(
        <>
            <Carousel>
                <CarouselItem>
                    <div style={{backgroundImage: 'url("https://images.unsplash.com/photo-1504649346668-2cc86afaa2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80")', height:"50vh", width:"100%", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat:"no-repeat", marginTop: "100px"}}>
                        <h3 className="car-h" style={{display:"flex", float:"left", fontSize:"36px"}}>
                            Roast Lamb
                        </h3>
                        {/* <p className="car-p" style={{display:"flex", flexWrap:"wrap", float:"left", fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum nihil laudantium veniam animi velit enim ad corrupti illum eos!</p> */}
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1604908177453-7462950a6a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80")', height:"50vh", width:"100%", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat:"no-repeat", marginTop: "100px"}}>
                        <h3 className="car-h" style={{display:"flex", float:"left", fontSize:"36px"}}>
                            Arrosto
                        </h3>
                        {/* <p className="car-p" style={{display:"flex", flexWrap:"wrap", float:"left", fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum nihil laudantium veniam animi velit enim ad corrupti illum eos!</p> */}
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1559203244-78de52adba0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1643&q=80")', height:"50vh", width:"100%", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat:"no-repeat", marginTop: "100px"}}>
                        <h3 className="car-h" style={{display:"flex", float:"left", fontSize:"36px"}}>
                            Chicken Curry
                        </h3>
                        {/* <p className="car-p" style={{display:"flex", flexWrap:"wrap", float:"left", fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum nihil laudantium veniam animi velit enim ad corrupti illum eos!</p> */}
                    </div>
                </CarouselItem>
            </Carousel>
        </>
    );
} 

export default Carr;