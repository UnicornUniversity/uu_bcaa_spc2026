import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function TransactionItemForm({ setShowTransactionItemForm }) {
  const handleClose = () => setShowTransactionItemForm(false);

  return (
    <Modal show={true} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vytvořit transakci</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            className="mb-3"
            controlId="transactionitemformForm.counterparty"
          >
            <Form.Label>Protistrana</Form.Label>
            <Form.Control type="text" autoFocus required />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="transactionitemformForm.amount"
          >
            <Form.Label>Částka</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="transactionitemformForm.date">
            <Form.Label>Datum</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="transactionitemformForm.desc">
            <Form.Label>Popis</Form.Label>
            <Form.Control type="text" as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="transactionitemformForm.categoryId"
          >
            <Form.Label>Kategorie</Form.Label>
            <Form.Control type="select" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zrušit
          </Button>
          <Button variant="primary" type="submit">
            Vytvořit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default TransactionItemForm;
