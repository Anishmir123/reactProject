import React from "react";
import doctor11img from '../images2/doctor_11.png';
import doctor12img from '../images2/doctor_12.png';
import doctor13img from '../images2/doctor_13.png';
import doctor14img from '../images2/doctor_14.png';
import doctor15img from '../images2/doctor_15.png';
import "./Department3.css";



const Department3 = () => {
    return (
        <>

            
                <div className="dep-text">
                    <h2>Pediatrician Doctors</h2>
                    <div className="doc-3">
                <div className="doctor-site">
                    
                    <img src={doctor11img} alt="img"/>
                    <h5>Dr. Tejaswini Nayak </h5>
                    <p>MBBS,Diploma in Paediatrics</p>
                    <h6>28 years experience overall</h6>
                    <p>Chinmayi Child Care Clinic</p>
                    <p>Bellandur</p>
                    <a href="#" className="button8">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor14img} alt="img"/>
                    <h5>Dr. Tejas Suresh Rao</h5>
                    <p>MBBS,MD - General medicine</p>
                    <h6>28 years experience overall</h6>
                    <p>Manipal Hospital Yeswanthapur</p>
                    <p>Yeswanthapur</p>
                    <a href="#" className="button9">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor13img} alt="img"/>
                    <h5>Dr. Santosh N </h5>
                    <p>MBBS,Md - Pediatrics</p>
                    <h6>29 years experience overall</h6>
                    <p>Apollo Cradle & Children's Hospital</p>
                    <p>Jaynagar 5 Block</p>
                    <a href="#" className="button9">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor12img} alt="img"/>
                    <h5>Dr. Sowmya Prahanth</h5>
                    <p>MBBS,DNB - Paediatrics</p>
                    <h6>24 years experience overall</h6>
                    <p>Apollo Cradle & Children's Hospital</p>
                    <p>Jaynagar 5 Block</p>
                    <a href="#" className="button9">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor15img} alt="img"/>
                    <h5>Dr. P Sameer Reddy</h5>
                    <p>MBBS,DNB - Paediatrics</p>
                    <h6>28 years experience overall</h6>
                    <p>Manipal Hospital</p>
                    <p>Jaynagar 9 Block</p>
                    <a href="#" className="button8">Book Appointment</a>
                </div>
                </div>
                </div>
        </>
    )
}

export default Department3;