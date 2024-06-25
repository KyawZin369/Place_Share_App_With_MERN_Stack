import React, { useState, useContext } from "react";
import { Card, Button } from "react-daisyui";
import Modal from "../../shared/UIComponents/Modal";
import GoogleMap from "../../shared/UIComponents/GoogleMap";
import { Link } from "react-router-dom";
import { authContext } from "../../shared/Context/LoginContext";

const PlaceItem = (props) => {
  const auth = useContext(authContext);

  const [viewModal, setViewModal] = useState(false);
  const [showWarningToDelete, setShowWarningToDelete] = useState(false);

  const showModalHandler = () => setViewModal(true);
  const hideModalHandler = () => setViewModal(false);

  const showDeleteWarningModal = () => setShowWarningToDelete(true);
  const cancelWarningModal = () => setShowWarningToDelete(false);
  const DeletePlace = () => {
    console.log("DELETE...");
    setShowWarningToDelete(false);
  };

  return (
    <div className={`max-w-lg mx-auto mb-8 ${viewModal ? "opacity-5" : ""}`}>
      <Modal
        show={viewModal}
        onCancel={() => hideModalHandler()}
        header={props.Address}
        modal="modalclass"
        headclass="headclass"
        headerclass="header"
        bodyclass="bodyclass"
        footerclass="footerclass"
        footer={<Button onClick={() => hideModalHandler()}>Close</Button>}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMap
            center={props.coordinate}
            zoom={10}
            className="map-container"
          />
        </div>
      </Modal>
      <Modal
        show={showWarningToDelete}
        onCancel={cancelWarningModal}
        header="DELETE YOUR PLACE"
        modal="modalclass"
        headclass="headclass"
        headerclass="header"
        bodyclass="bodyclass"
        footerclass="footerclass"
        footer={
          <>
            <Button
              className="bg-blue-500 text-white hover:bg-blue-800 me-10"
              onClick={() => cancelWarningModal()}
            >
              CANCEL
            </Button>
            <Button
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={() => DeletePlace()}
            >
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do You Really Want To Delete This Place. Can't be undone there after
        </p>
      </Modal>
      <Card className="flex flex-col items-center shadow-xl overflow-hidden">
        <figure className="flex-shrink-0 p-4 w-full bg-slate-200">
          <div className=" max-w-full max-h-72">
            <img src={props.ImageUrl} className="rounded-lg" />
          </div>
        </figure>
        <div className="flex-grow p-4">
          <div className="mb-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-5">{props.title}</h2>
            <h3 className="text-xl font-bold mb-5">{props.Address}</h3>
            <div>
              <p className="text-gray-500 mb-5 text-justify">{props.desc}</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-around mt-3">
            <Button
              className="bg-white text-gray-700 border-blue-300 border-2 hover:bg-blue-500 hover:text-gray-100"
              onClick={() => showModalHandler()}
            >
              View On Map
            </Button>
            {auth.isLoggedIn && (
              <Link to={`/places/${props.placeId}`}>
                <Button className="bg-blue-300 text-gray-700 border-0 hover:bg-blue-500 hover:text-gray-100">
                  Edit
                </Button>
              </Link>
            )}
            {auth.isLoggedIn && (
              <Button
                className="bg-red-400 text-gray-100 border-0 hover:bg-red-600 hover:text-gray-100"
                onClick={() => showDeleteWarningModal()}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlaceItem;
