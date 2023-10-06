import React, { useEffect, useState } from "react";
import Layout from "../../componants/share/Layout";
import Api from "../../services/Api";
import moment from "moment";

function Donar() {
  const [data, setData] = useState([]);

  const getDonars = async () => {
    try {
      const { data } = await Api.get("/inventory/get-donars");

      if (data && data.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDonars();
  }, []);
  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Address</th>
            <th scope="col">Time & Date </th>
          </tr>
        </thead>
        <tbody>
          {data.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.name || rec.organisationName + "(ORG)"}</td>
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

export default Donar;
