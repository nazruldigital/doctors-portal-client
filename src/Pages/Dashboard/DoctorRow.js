import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { img, name, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
