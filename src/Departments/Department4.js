import React from "react";
import doctor16img from '../images2/doctor_16.jpg';
import doctor17img from '../images2/doctor-17.png';
import doctor18img from '../images2/doctor_18.png';
import doctor19img from '../images2/doctor_19.png';
import doctor20img from '../images2/doctor_20.png';


import "./Department4.css";



const Department4 = () => {
    return (
        <>
            
           
            <div className="dep-text">
                <h2>Orthopedics Doctors</h2>
                <div className="doc-4">
                <div className="doctor-site">
                    
                    <img src={doctor16img} alt="img"/>
                    <h5>Dr. Shashidhar V</h5>
                    <p>MBBS,MS - Orthopeadics</p>
                    <h6>19 years experience overall</h6>
                    <p>Practo Care Surgeries</p>
                    <p>Yelenahalli</p>
                    <a href="#" className="button10">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor17img} alt="img"/>
                    <h5>Dr. B A Gopala Krishna</h5>
                    <p>MBBS,MS - Orthopeadics</p>
                    <h6>22 years experience overall</h6>
                    <p>Practo Care Surgeries</p>
                    <p>Banashankari 2nd stage</p>
                    <a href="#" className="button10">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor18img} alt="img"/>
                    <h5>Dr. Sharath Kumar Shetty </h5>
                    <p>MBBS,MS - Orthopeadics</p>
                    <h6>22 years experience overall</h6>
                    <p>Practo Care Surgeries</p>
                    <p>HSR Layout</p>
                    <a href="#" className="button10">Book Appointment</a>
                </div>
                
                <div className="doctor-site">
                    <img src={doctor19img} alt="img"/>
                    <h5>Dr. Gowrishankar Swamy L G</h5>
                    <p>MBBS,DNB - Orthopeadics</p>
                    <h6>32 years experience overall</h6>
                    <p>Practo Care Surgeries</p>
                    <p>Yeshwanthapur</p>
                    <a href="#" className="button11">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor20img} alt="img"/>
                    <h5>Dr. Nanda Kumar Bhairi</h5>
                    <p>DNB - Orthopeadics</p>
                    <h6>28 years experience overall</h6>
                    <p>Manipal Hospital</p>
                    <p>Jaynagar 9 Block</p>
                    <a href="#" className="button12">Book Appointment</a>
                </div>
                </div>
                </div>
       </>
    )
}

export default Department4;
