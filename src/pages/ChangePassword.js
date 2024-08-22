import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/images/logo192.png';
import '../assets/css/Login.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ChangePassword = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/new-password', {
        email: email,
        otp: otp,
        newPassword: newPassword,
      });
      if (response.status === 200) {
        toast.success(response.data.message || 'Password Successfully changed', {
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
      console.error('Password Change Failed:', error.response.data);
      toast.error(error.response.data.error || 'Password Change Failed! Please try again.', {
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
          <h3 className="text-center mb-4">Change Password</h3>
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
            <Form.Group controlId="formBasicNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Change Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
