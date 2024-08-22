import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/images/logo192.png';
import '../assets/css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/password-recovery', { email: email });
      if (response.status === 200) {
        toast.success(response.data.message || "We've sent you OTP for password reset", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate(`/new-password/${email}`);
      }
    } catch (error) {
      console.error('Password Reset Failed:', error.response.data);
      toast.error(error.response.data.error || 'Password Reset Failed! Please try again.', {
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
      <Card className="mx-auto" style={{ maxWidth: '400px' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <Image src={Logo} alt="Logo" style={{ maxWidth: '150px' }} />
          </div>
          <h3 className="text-center mb-4">Forget Password</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
