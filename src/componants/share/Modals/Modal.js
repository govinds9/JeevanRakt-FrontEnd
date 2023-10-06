import React, { useState } from "react";
import InputType from "../InputType";
import Api from "../../../services/Api";
import { useSelector } from "react-redux";

function Modal() {
  const [inventoryType, setinvectoryType] = useState("in");
  const [bloodGroup, setbloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);

  // Handle modal data
  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup && !quantity) {
        return alert("please Provide all field");
      }

      const { data } = await Api.post("/inventory/create-inventory", {
        email,
        organisation: user?._id,

        inventoryType,
        bloodGroup,
        quantity,
      });

      if (data && data.success) {
        alert("New Record Created");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      window.location.reload();
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Managed Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              ...
              <div className="d-flex">
                Blood Type &nbsp;
                <div className="form-check">
                  <input
                    type="radio"
                    name="inRadio"
                    defaultChecked
                    className="form-check-input ms-3 "
                    value={"in"}
                    onChange={(e) => setinvectoryType(e.target.value)}
                  />
                </div>
                <label htmlFor="in" className=" form-check-label ">
                  In
                </label>
                <div className="form-check">
                  <input
                    type="radio"
                    name="inRadio"
                    className="form-check-input ms-3 "
                    value={"out"}
                    onChange={(e) => setinvectoryType(e.target.value)}
                  />
                </div>
                <label htmlFor="in" className=" form-check-label ">
                  Out
                </label>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onClick={(e) => setbloodGroup(e.target.value)}
              >
                <option defaultValue={"Open this select menu"}>
                  Open this select menu
                </option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
              <InputType
                label={"Donar Email"}
                example={"donarEmail"}
                inptype={"email"}
                value={email}
                onchange={(e) => setEmail(e.target.value)}
              />
              <InputType
                label={"Quantity(ML)"}
                example={"quantity"}
                inptype={"Number"}
                value={quantity}
                onchange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
