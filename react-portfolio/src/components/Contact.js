import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const Contact = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Contact Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="modal-header-footer" toggle={toggle}>
          Let's work together!
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup floating>
              <Input id="name" name="name" placeholder="Name" type="text" />
              <Label for="name">Name</Label>
            </FormGroup>
            <FormGroup floating>
              <Input id="name" name="name" placeholder="Name" type="textarea" />
              <Label for="name">Message</Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-header-footer">
          <Button color="primary" onClick={toggle}>
            Send Message
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Contact;
