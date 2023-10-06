import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../componants/share/Spinner";
import Layout from "../componants/share/Layout";
import Modal from "../componants/share/Modals/Modal";
import Api from "../services/Api";
import moment from "moment";

function Homepage() {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  if (user?.role === "donar" || user?.role === "hospital") {
    navigate("/organisation");
  }
  if (user?.role === "admin") {
    navigate("/admin");
  }

  const getBloodRecord = async () => {
    try {
      const { data } = await Api.get("/inventory/get-inventory");
      if (data && data.success) {
        setData(data.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecord();
  }, []);

  return (
    <Layout>
      {error && <span> {alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4
              className=" ms-4 "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className=" fa-solid fa-plus text-success py-4 "></i>
              Add Inventory
            </h4>
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

            <Modal />
          </div>
        </>
      )}
    </Layout>
  );
}

export default Homepage;
