import React from "react";
import doctor6img from '../images2/doctor_6.jpg';
import doctor7img from '../images2/doctor_7.jpg';
import doctor8img from '../images2/doctor_8.jpg';
import doctor9img from '../images2/doctor_9.png';
import doctor10img from '../images2/doctor_10.jpg';
import "./Department2.css";



const Department2 = () => {
    return (
        <>
            
            
            <div className="dep-text">
               <h2>Dental Department Doctors</h2>
               <div className="doc-2">
                <div className="doctor-site">
                    
                    <img src={doctor6img} alt="img"/>
                    <h5>Dr. Sumanth Shetty </h5>
                    <p>Dentist,Implantologist</p>
                    <h6>24 years experience overall</h6>
                    <p>Chisel Dental</p>
                    <p>Koramangala</p>
                    <a href="#" className="button6">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor7img} alt="img"/>
                    <h5>Dr. Jnanesha H.C</h5>
                    <p>BDS,MDS - orthodonics</p>
                    <h6>21 years experience overall</h6>
                    <p>Excel Dental Care</p>
                    <p>Jayanagar 4 Block</p>
                    <a href="#" className="button6">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor8img} alt="img"/>
                    <h5>Dr. M J Murali </h5>
                    <p>MDS - Conservative Dentistry,BDS</p>
                    <h6>26 years experience overall</h6>
                    <p>All Care Dental Centre</p>
                    <p>Indranagar</p>
                    <a href="#" className="button7">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor9img} alt="img"/>
                    <h5>Dr. Ganesh Shetty</h5>
                    <p>Dentist, Implantologist BDS</p>
                    <h6>25 years experience overall</h6>
                    <p>Dental and Orthodonic Clinic</p>
                    <p>Kalyan Nagar</p>
                    <a href="#" className="button6">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor10img} alt="img"/>
                    <h5>Dr. K.A Mohan </h5>
                    <p>Orthodonist,Dentist BDS,MDS</p>
                    <h6>54 years experience overall</h6>
                    <p>Dental De Care</p>
                    <p>Domlur</p>
                    <a href="#" className="button6">Book Appointment</a>
                </div>
                </div>
              
            </div>
            
        
       </>
    )
}

export default Department2;
