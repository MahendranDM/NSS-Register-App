import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewVolunteer = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("http://localhost:3000/api/view-volunteers")
      .then((response) => {
        changeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

<NavBar/>
      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Volunteers</h2>

        {loading ? (
          <h4 className="text-center text-primary">Loading...</h4>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Volunteer ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Department</th>
                  <th>Year of Study</th>
                  <th>Camp Name</th>
                  <th>Hours Completed</th>
                  <th>Address</th>
                  <th>Unit Number</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.volunteer_id}</td>
                    <td>{value.full_name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.date_of_birth}</td>
                    <td>{value.gender}</td>
                    <td>{value.blood_group}</td>
                    <td>{value.department}</td>
                    <td>{value.year_of_study}</td>
                    <td>{value.camp_name}</td>
                    <td>{value.hours_completed}</td>
                    <td>{value.address}</td>
                    <td>{value.unit_number}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewVolunteer;