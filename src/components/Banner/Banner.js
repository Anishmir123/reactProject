import React from "react";
import './Banner.css';





const Banner = () => {
    return (
        <header>
            <div className="book-app">
                <div className="container">
                    <div className="row">
                        <h5><b>Get the right medical care</b></h5>
                        <h1>Book with <b>your doctor</b> </h1>
                        <p>Some up and coming trends are healthcare consolidation for independent healthcare centers that see a cut in unforeseen payouts.</p>
                          <div className="banner12">
                        <form>
                            <div className="from-control" >
                                <input placeholder="Your Name" />
                                </div>
                                <div className="from-control">
                                <input id="email" 
                    type="email" placeholder="Your Email" />
                                </div>
                                <div className="from-control">
                                <input placeholder="Phone Number" />
                                </div>
                                <div className="from-control">
                                <input   
                      type="date" placeholder="Appointment Date" />
                                </div>
                                <div className="selector">
                                    <select>
                                        <option>Select Your Doctors</option>
                                        <option>Dr. Vivekanada Reddy</option>
                                        <option>Dr. Tejas Suresh Rao</option>
                                        <option>Dr. Dilip Joseph Wilson</option>
                                        <option>Dr. B Rajashekar</option>
                                        <option>Dr. Harish N S</option>


                                    </select>
                                    
                                   

                                </div>
                                <div className="from-control">
                                    <textarea type="text" className="Messege" style={{width:"519px"}}>Message</textarea>
                                </div>
                               
                               
                        </form>
                        <button  className="button2" style={{marginTop:"50px", width:"250px", marginLeft:"21px"}}>Book Appointment</button>
                        </div>
                        < div className="banner12">
                       {/* <img alt="img" src={"/images2/appon_250x250.png"} className="img12" />*/}
                           </div>
                        
                    </div>
                </div>

            </div>
        
            </header>

    );
}




export default Banner;