import React from "react";
import doctor31img from '../images2/doctor_31.png'
import doctor32img from '../images2/doctor_32.png'
import doctor33img from '../images2/doctor_33.png'
import doctor34img from '../images2/doctor_34.png'
import doctor35img from '../images2/doctor_35.png'
import "./Department7.css";



const Department7 = () => {
    return (
        <>

           
                <div className="dep-text">
                    <h2>Cardiologist Doctors</h2>
                  
                <div className="doc-7">
                <div className="doctor-site">
                    
                    <img src={doctor31img} alt="img"/>
                    <h5>Dr. B Ramesh</h5>
                    <p>DM - Cardiology</p>
                    <h6>37 years experience overall</h6>
                    <p>Apollo Hospital</p>
                    <p>Bannerghatta Road</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor32img} alt="img"/>
                    <h5>Dr. Jayaranganath </h5>
                    <p>DM - Cardiology</p>
                    <h6>35 years experience overall</h6>
                    <p>Apollo Hospital</p>
                    <p>Seshadripuram</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
               
                <div className="doctor-site">
                    <img src={doctor33img} alt="img"/>
                    <h5>Dr. Sunil Kumar </h5>
                    <p>MBBS ,MD - General Medicine</p>
                    <h6>19 years experience overall</h6>
                    <p>Manipal Hospital</p>
                    <p>Hebbal</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor34img} alt="img"/>
                    <h5>Dr.Venkatesh</h5>
                    <p>MBBS,MD- Medicine</p>
                    <h6>29 years experience overall</h6>
                    <p>Aster RV Hospital</p>
                    <p>JP Nagar</p>
                    <a href="#" className="button13">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor35img} alt="img"/>
                    <h5>Dr. Abhijit Vilas</h5>
                    <p>MBBS,MD- Cardiologist </p>
                    <h6>21 years experience overall</h6>
                    <p>Apollo Hospital</p>
                    <p>Bannerghatta Road</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                </div>
                </div>
        </>
    )
}

export default Department7;
