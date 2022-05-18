import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body ">
        <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-secondary btn-sm text-white"
          >
            Buy Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
