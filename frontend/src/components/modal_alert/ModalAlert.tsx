import { Button, Modal } from 'react-bootstrap';

type ModalAlertProps = {
  showModal: boolean;
  message: string;
  onHide: () => void;
  onClose: () => void;
};

const ModalAlert = ({ showModal, message, onHide, onClose }: ModalAlertProps): JSX.Element => {
  return (
    <Modal show={showModal} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAlert;
