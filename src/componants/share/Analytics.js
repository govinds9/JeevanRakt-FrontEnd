import React, { useEffect, useState } from "react";
import Header from "./Header";
import Api from "../../services/Api";
import moment from "moment";

function Analytics() {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
  ];

  //Get Blood Group data
  const getBloodGroupData = async () => {
    try {
      const { data } = await Api.get("/analytics/bloodgroups-data");

      if (data?.success) {
        setData(data?.bloodGroupsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  //Get Recent inventory data
  const getRecentInventory = async () => {
    try {
      const { data } = await Api.get("/inventory//get-recent-inventory");

      if (data?.success) {
        setInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecentInventory();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex flex-row  flex-wrap ">
        {data?.map((rec, i) => (
          <div
            className="card m-2 p-1 "
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark  text-center  mb-2 ">
                {rec.bloodGroup}
              </h1>
              <p className="card-text m-1 ">
                Total In : <b>{rec.totalIn}</b> ml
              </p>
              <p className="card-text m-1 ">
                Total Out : <b>{rec.totalOut}</b> ml
              </p>

              <div className="card-footer text-light bg-dark  text-center  mt-3   ">
                Total Available : <b>{rec.availableBlood}</b> ml
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container my-3 ">
        <h1 className=" text-center my-3  ">Recent Blood Transaction</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group </th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity (ML)</th>
              <th scope="col">Donar Email </th>
              <th scope="col">Time & Date </th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((rec) => (
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
      </div>
    </>
  );
}

export default Analytics;
