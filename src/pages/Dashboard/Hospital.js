import React, { useEffect, useState } from "react";
import Layout from "../../componants/share/Layout";
import moment from "moment";
import Api from "../../services/Api";

function Hospital() {
  const [data, setData] = useState([]);

  const gethospitals = async () => {
    try {
      const { data } = await Api.get("/inventory/get-hospitals");
      console.log(data);
      if (data && data.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    gethospitals();
  }, []);

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Hospital Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Address</th>
            <th scope="col">Time & Date </th>
          </tr>
        </thead>
        <tbody>
          {data.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.hospital}</td>
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

export default Hospital;
