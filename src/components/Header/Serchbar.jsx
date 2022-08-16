import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { FaSearch } from "react-icons/fa";
function MyVerticallyCenteredModal(props) {
  return (
    <div className="searchmodel">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="searchbar searchmodel"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className="text-center"> Search any thing related this web</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Search anything" />
          <a href="">
            <FaSearch />
          </a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function Serchbar() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="text-white"
        onClick={() => setModalShow(true)}
      >
        <FaSearch />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Serchbar;
