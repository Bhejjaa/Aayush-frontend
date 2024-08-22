import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/images/logo192.png';
import '../assets/css/Login.css';

const Verify = () => {
  const {email} = useParams();
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  console.log(otp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/verify-otp', {email: email, otp: otp });
      console.log("Response from server:", response.data); // Log the response data
      if (response.status === 200) {
        toast.success(response.data.message || 'OTP Verified Successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Verification Failed:', error.response.data);
      toast.error(error.response.data.error || 'Verification Failed! Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  return (
    <div className="container mt-5">
    <p>{email}</p>
      <Card className="mx-auto" style={{ maxWidth: '400px' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <Image src={Logo} alt="Logo" style={{ maxWidth: '150px' }} />
          </div>
          <h3 className="text-center mb-4">Verify OTP</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicOTP">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                minLength={6}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Verify OTP
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Verify;
