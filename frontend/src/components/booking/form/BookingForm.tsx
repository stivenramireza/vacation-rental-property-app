import { Alert, Button, Form } from 'react-bootstrap';

import useBookingForm from './useBookingForm';

type BookingFormProps = {
  propertyId: string;
};

const BookingForm = ({ propertyId }: BookingFormProps) => {
  const { formData, alert, setAlert, handleChange, handleSubmit } = useBookingForm(propertyId);

  return (
    <div className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '400px' }} className="w-100 mt-4">
        <Form.Group className="mb-3" controlId="customerName">
          <Form.Label>Customer name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Stiven Ramírez Arango"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkIn">
          <Form.Label>CheckIn Date</Form.Label>
          <Form.Control
            type="datetime-local"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkOut">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="datetime-local"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>

        {alert && (
          <Alert className="mt-4" variant={alert.type} onClose={() => setAlert(null)} dismissible>
            {alert.message}
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default BookingForm;
