import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl py-5 text-white">Make An Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          est dolore iure numquam tempore ratione nihil cupiditate deleniti,
          nulla error laudantium quidem ab similique ipsa minima quae iusto
          ipsam reprehenderit, beatae culpa earum id non. Vitae sapiente
          consectetur ea provident!
        </p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
