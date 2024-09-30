import { Alert, Button, Form } from 'react-bootstrap';
import usePropertyForm from './usePropertyForm';

const PropertyForm = () => {
  const { formData, alert, setAlert, handleChange, handleSubmit } = usePropertyForm();

  return (
    <div className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '400px' }} className="w-100 mt-4">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cozy Cabin"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Miami, Florida, United States"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pricePerNight">
          <Form.Label>Price per Night</Form.Label>
          <Form.Control
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="availabilityStart">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="datetime-local"
            name="availabilityStart"
            value={formData.availabilityStart}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="availabilityEnd">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="datetime-local"
            name="availabilityEnd"
            value={formData.availabilityEnd}
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

export default PropertyForm;
