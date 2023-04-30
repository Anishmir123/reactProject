import React from "react";
import doctor26img from '../images2/doctor_26.png'
import doctor27img from '../images2/doctor_27.png'
import doctor28img from '../images2/doctor_28.png'
import doctor29img from '../images2/doctor_29.png'
import doctor30img from '../images2/doctor_30.png'
import "./Department6.css";



const Department6 = () => {
    return (
        <>

           
                <div className="dep-text">
                    <h2>Dermatologist Doctors</h2>
                  
                <div className="doc-6">
                <div className="doctor-site">
                    
                    <img src={doctor26img} alt="img"/>
                    <h5>Dr. Jyothi Menon</h5>
                    <p>MBBS,DDVL</p>
                    <h6>22 years experience overall</h6>
                    <p>Oliva Skin & Hair Clinic</p>
                    <p>Koramangola 7 block</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor29img} alt="img"/>
                    <h5>Dr. Sankeerth </h5>
                    <p>MBBS,MD- Dermatology</p>
                    <h6>13 years experience overall</h6>
                    <p>Dermaville</p>
                    <p>HSR Layout</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
               
                <div className="doctor-site">
                    <img src={doctor27img} alt="img"/>
                    <h5>Dr. Sheelavathi Natraj </h5>
                    <p>MBBS , DDVL</p>
                    <h6>19 years experience overall</h6>
                    <p>Aesthetics Clinic</p>
                    <p>JP Nagar</p>
                    <a href="#" className="button15">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor30img} alt="img"/>
                    <h5>Dr. Shashidhar T</h5>
                    <p>MBBS,MD- Dermatology</p>
                    <h6>16 years experience overall</h6>
                    <p>Dermacare Skin </p>
                    <p>Jayanagr 4 block</p>
                    <a href="#" className="button13">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor28img} alt="img"/>
                    <h5>Dr. Renu Nair</h5>
                    <p>MBBS,MD- Dermatology</p>
                    <h6>15 years experience overall</h6>
                    <p>Dr. Renu's Skin</p>
                    <p>HSR Layout</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                </div>
                </div>
        </>
    )
}

export default Department6;
