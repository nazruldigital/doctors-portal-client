import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    console.log("hello");
    fetch(`https://sheltered-bastion-93238.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data.acknowledged);
        if (data.acknowledged) {
          toast.success(`Successfully made an admin ${email}`);
        } else {
          toast.error("Opps!! You are not Admin");
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove user</button>
      </td>
    </tr>
  );
};

export default UserRow;
