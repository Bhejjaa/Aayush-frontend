import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/images/logo192.png';
import '../assets/css/Login.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();


  const handleImageChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('contactNo', contactNo);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('profilePicture', profilePicture);
      
      const response = await axios.post('http://localhost:5000/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Signup Successful');
      navigate(`/verify/${email}`);
      if (response.ok) {
        toast.success(response.data.message || 'Signup Successful!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
       
      }
    } catch (error) {
      console.error('Signup Failed:', error.response.data);
      toast.error(error.response.data.error || 'Signup Failed! Please try again.', {
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
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

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

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicContactNo">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your contact number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLatitude" style={{ display: 'none' }}>
              <Form.Control
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLongitude" style={{ display: 'none' }}>
              <Form.Control
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={handleImageChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Signup;
