import doctor1img from "../images2/doctor1.png";
import "../Departments/Department1.css";

export const doctorData = {
  GeneralHealthDepartmentDoctorsData,
  GeneralHealthDepartmentDoctorsDetails,
};

function GeneralHealthDepartmentDoctorsData(
  imagePath,
  doctorName,
  doctorcatagory,
  hospitanName,
  address
) {
  return (
    <>
            <div className="doctor-site">
              <img src={imagePath} alt="img" />
              <h5>{doctorName}</h5>
              <p>{doctorcatagory}</p>
              <p>{hospitanName}</p>
              <p>{address}</p>
              <a href="#" className="button1">
                Book Appointment
              </a>
            </div>
    </>
  );
}

function GeneralHealthDepartmentDoctorsDetails() {
  debugger;
  const data = [
    new GeneralHelthDoctorData(
      doctor1img,
      "Sk Saidulla",
      "MBBS,MD - General Medicine",
      "Marvel Multispeciality Hospital",
      "Koramangala 1 Block"
    ),
    new GeneralHelthDoctorData(
      doctor1img,
      "Dr. Vivekanada Reddy",
      "MBBS,MD - General Medicine",
      "Marvel Multispeciality Hospital",
      "Koramangala 1 Block"
    ),
    new GeneralHelthDoctorData(
      doctor1img,
      "Dr. Vivekanada Reddy",
      "MBBS,MD - General Medicine",
      "Marvel Multispeciality Hospital",
      "Koramangala 1 Block"
    ),
    new GeneralHelthDoctorData(
      doctor1img,
      "Dr. Vivekanada Reddy",
      "MBBS,MD - General Medicine",
      "Marvel Multispeciality Hospital",
      "Koramangala 1 Block"
    ),
    new GeneralHelthDoctorData(
      doctor1img,
      "Dr. Vivekanada Reddy",
      "MBBS,MD - General Medicine",
      "Marvel Multispeciality Hospital",
      "Koramangala 1 Block"
    ),
  ];
  return data;
}

class GeneralHelthDoctorData {
  constructor(imagePath, doctorName, doctorcatagory, hospitanName, address) {
    this.imagePath = imagePath;
    this.doctorName = doctorName;
    this.doctorcatagory = doctorcatagory;
    this.hospitanName = hospitanName;
    this.address = address;
  }
}
