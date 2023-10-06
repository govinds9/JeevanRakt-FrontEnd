import React, { useEffect, useState } from "react";
import Layout from "../../componants/share/Layout";
import Api from "../../services/Api";
import moment from "moment";

function Orglist() {
  const [data, setData] = useState([]);

  const getOrganisations = async () => {
    try {
      const { data } = await Api.get("/admin/org-list");
      if (data && data.success) {
        setData(data?.orgData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrganisations();
  }, []);
  // handle delete
  const handleDelete = async (id) => {
    try {
      let ans = window.prompt("Are you sure want to delete this Donar", "Sure");
      if (!ans) return;
      const { data } = await Api.delete(`/admin/delete-org/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
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
            <th scope="col">Action </th>
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
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(rec._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Orglist;
