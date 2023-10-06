import React, { useState, useEffect } from "react";
import Layout from "../../componants/share/Layout";
import Api from "../../services/Api";
import moment from "moment";
import { useSelector } from "react-redux";

function Organisation() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const getOrganisations = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await Api.get("/inventory/get-organisations");
        if (data && data.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await Api.get("/inventory/get-organisations-hospital");

        if (data && data.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrganisations();
  }, [user]);
  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Organisation Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Address</th>
            <th scope="col">Time & Date </th>
          </tr>
        </thead>
        <tbody>
          {data.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.organisationName}</td>
              <td>{rec.email}</td>
              <td>{rec.phone}</td>
              <td>{rec.address}</td>

              <td>{moment(rec.createdAt).format("DD/MM/YY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Organisation;
