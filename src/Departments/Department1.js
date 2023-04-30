import React, { useState } from "react";

import doctor1img from '../images2/doctor1.png';
import doctor2img from '../images2/doctor2_235x157.png'
import doctor3img from '../images2/doctor3_235x157.png'
import doctor4img from '../images2/doctor_4.png'
import doctor5img from '../images2/doctor_5.png'


import "./Department1.css";




const Department1 = () => {

 
    return (
        <>
            
           
            <div className="dep-text">
                <h2>General health department Doctors</h2>
                <div className="doc-1">
                <div className="doctor-site">
                    
                    <img src={doctor1img} alt="img"/>
                    <h5>Dr. Vivekanada Reddy </h5>
                    <p>MBBS,MD - General Medicine</p>
                    <p>Marvel Multispeciality Hospital</p>
                    <p>Koramangala 1 Block</p>
                    <a href="#" className="button1">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor2img} alt="img"/>
                    <h5>Dr. Tejas Suresh Rao</h5>
                    <p>MBBS,MD - General medicine</p>
                    <p>Manipal Hospital Yeswanthapur</p>
                    <p>Yeswanthapur</p>
                    <a href="#" className="button1">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor3img} alt="img"/>
                    <h5>Dr. Dilip Joseph Wilson </h5>
                    <p>MBBS,Diploma in Tropcal Medicine</p>
                    <p>Apollo Clinic</p>
                    <p>Sarjapur Road</p>
                    <a href="#" className="button3">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor4img} alt="img"/>
                    <h5>Dr. B Rajashekar</h5>
                    <p>MBBS,MD-General Medicine</p>
                    <p>Six Face Clinic</p>
                    <p>Indirangar</p>
                    <a href="#" className="button4">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor5img} alt="img"/>
                    <h5>Dr. Harish N S </h5>
                    <p>IDCCM,MBBS</p>
                    <p>Kshipra Health Clinic</p>
                    <p>Basvanagudi</p>
                    
                    <a href="#" className="button5">Book Appointment</a>
                </div>
                </div>
                
            </div>
            
            

            
            
     
       </>
    )
}

export default Department1;
