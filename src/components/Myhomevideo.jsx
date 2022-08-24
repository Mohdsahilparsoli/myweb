import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  FaPlay,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShare,
} from "react-icons/fa";
function Myhomevideo() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        <FaPlay />
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <ul className="shareit">
              <li>
                <a href="">
                  <FaShare />
                </a>
                <div className="sharenow">
                  <ul className="links">
                    <li>
                      <a href="">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video loop autoPlay muted>
            <source src={`myhomevideo.mp4`} />
            this video does not supprot your browser
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Myhomevideo;
