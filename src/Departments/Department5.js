import React from "react";
import doctor21img from '../images2/doctor_21.png'
import doctor22img from '../images2/doctor_22.png'
import doctor23img from '../images2/doctor_23.png'
import doctor24img from '../images2/doctor_24.png'
import doctor25img from '../images2/doctor_25.png'
import "./Department5.css";



const Department5 = () => {
    return (
        <>

           
                <div className="dep-text">
                    <h2>Ophthalmologist Doctors</h2>
                  
                <div className="doc-5">
                <div className="doctor-site">
                    
                    <img src={doctor21img} alt="img"/>
                    <h5>Dr. Yogesh D</h5>
                    <p>Ophthalmologist</p>
                    <h6>22 years experience overall</h6>
                    <p>Practo Care Surgeries</p>
                    <p>Yelenahalli</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor22img} alt="img"/>
                    <h5>Dr. M B Trisha</h5>
                    <p>Ophthalmologist</p>
                    <h6>33 years experience overall</h6>
                    <p>Manipal Hospital</p>
                    <p>Jayanagar 9 block</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
               
                <div className="doctor-site">
                    <img src={doctor23img} alt="img"/>
                    <h5>Dr. Shalini Shetty </h5>
                    <p>MBBS,MS - Ophthalmologist</p>
                    <h6>30 years experience overall</h6>
                    <p>Manipal Hospital Varthur Road</p>
                    <p>Whitefield</p>
                    <a href="#" className="button14">Book Appointment</a>
                </div>
                <div className="doctor-site">
                    <img src={doctor24img} alt="img"/>
                    <h5>Dr. Sanghamitra Burman</h5>
                    <p>MBBS,MS - Ophthalmology</p>
                    <h6>37 years experience overall</h6>
                    <p>Practo Care Surgeries</p>
                    <p>Yeshwanthapur</p>
                    <a href="#" className="button13">Book Appointment</a>

                </div>
                <div className="doctor-site">
                    <img src={doctor25img} alt="img"/>
                    <h5>Dr. Rajesh Parekh</h5>
                    <p>MBBS,MS - Ophthalmology</p>
                    <h6>27 years experience overall</h6>
                    <p>Manipal Hospital,Millers Road</p>
                    <p>Millers Road</p>
                    <a href="#" className="button13">Book Appointment</a>
                </div>
                </div>
                </div>
        </>
    )
}

export default Department5;
