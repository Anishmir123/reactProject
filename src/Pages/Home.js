import React from "react";
import headerimg from '../images2/Home3_206x245.png';
import './Home.css';




const Home = ()=>{
    return (
          <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-8">
                      <h5>Pages</h5>
                      <h1><b>Doctors</b></h1>
                      <h5>Dynamically reinvent market-driven opportunities and ubiquitous interfaces.</h5>
                      <h5>Energistically fabricate an expanded array of niche markets through robust products.</h5>
                      <button><a href="#">Read More</a></button>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <img src={headerimg}/>  
                    
                    </div>
                </div>
            </div>
         
          </header>
              
    )
}




export default Home;