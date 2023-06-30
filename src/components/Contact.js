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
              <Input id="email" name="email" placeholder="Email" type="email" />
              <Label for="email">Email</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="message"
                name="message"
                placeholder="Message"
                type="textarea"
              />
              <Label for="message">Message</Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-header-footer">
          <Button color="danger" onClick={toggle}>
            Send Email
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
