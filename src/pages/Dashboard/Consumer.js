import React, { useEffect, useState } from "react";
import Layout from "../../componants/share/Layout";
import moment from "moment";
import Api from "../../services/Api";
import { useSelector } from "react-redux";

function Consumer() {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  const getDonars = async () => {
    try {
      const { data } = await Api.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "out",
          hospital: user?._id,
        },
      });
      console.log(data);

      if (data && data.success) {
        setData(data?.inventory);
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
            <th scope="col">Blood Group</th>
            <th scope="col">Inventory Type</th>
            <th scope="col">Quantity</th>
            <th scope="col">Email</th>
            <th scope="col">Time & Date </th>
          </tr>
        </thead>
        <tbody>
          {data.map((rec) => (
            <tr key={rec._id}>
              <td>{rec.bloodGroup}</td>
              <td>{rec.inventoryType}</td>
              <td>{rec.quantity}</td>
              <td>{rec.email}</td>

              <td>{moment(rec.createdAt).format("DD/MM/YY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Consumer;
