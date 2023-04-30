import React from "react";
import { doctorData } from "../DoctorsData/doctorsData";
import "./Department1.css";
const DefaultDepartMent = () => {
  let doctordetails = doctorData.GeneralHealthDepartmentDoctorsDetails();
  debugger;
  debugger;
  return (
    <>
      <div className="dep-text">
        <h2>Extra Doctor</h2>
        <div className="doc-1">
          {doctordetails.map((data) =>
            doctorData.GeneralHealthDepartmentDoctorsData(
              data.imagePath,
              data.doctorName,
              data.doctorcatagory,
              data.hospitanName,
              data.address
            )
          )}
        </div>
      </div>
    </>
  );
};
export default DefaultDepartMent;
