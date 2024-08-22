import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { toast, ToastContainer } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import './Header.css';
import Cookies from 'js-cookie';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const userNameCookie = Cookies.get('userName');
    if (userNameCookie) {
      setUserName(userNameCookie);
    }else{
      alert("Token not found");
    }
  }, []);

  const navigate = useNavigate();


  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogout = async() => {
    try {
      const api = 'http://localhost:5000/user/logout';
      await axios.post(`${api}`);
      Cookies.remove('userName');
      setUserName('');
      toast.success("LoggedOut Successfully");

    } catch (error) {
      console.log("Error While Logging out",error);
      toast.error("Failed To Logout");
    }
  };
  // navigate to Home page
  const handleHome= () => {
    navigate('/');
  }
  //  navigate to login page
  const handleLogin   = () => {
      navigate('/login')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body" fixed="top">
        <Container>
          <Navbar.Brand className='logo' onClick={handleHome}>VendorVault</Navbar.Brand>
           {/* <p>{userName}</p> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="collapsible-nav-dropdown">
                {/*  dropdown ko ni dropdown For Electronics*/}
                <NavDropdown
                  className="header_electronics"
                  title="Electronics"
                  id="collapsible-nav-dropdown"
                >
                  <div className="electronics_drop">
                    <NavDropdown.Item href="#action/3.1">
                      Mobile Phones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Laptops & Computers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Tablet & Accessories
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Camera & Photography
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Audio & Video
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      Wearable Technology
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
                {/*  end of electronics category sub dropdown  */}

                {/*  Dropdown for Fashion Sub Category */}
                <NavDropdown
                  className="header_fashion"
                  title="Fashion"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Men's Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Women's Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Kid's Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Bags</NavDropdown.Item>
                </NavDropdown>
                {/* end of the subcategory dropdown for the Fashion */}

                {/*  Dropdown for the subcategory of Home & Furniture */}

                <NavDropdown
                  className="header_furniture"
                  title="Home & Furniture"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Furniture
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Home Decor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Kitchen & Dining
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Bedding & Linen
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Lighting
                  </NavDropdown.Item>
                </NavDropdown>

                {/*  end of home and furniture dropdown  */}

                {/*  Start of Health And Beauty */}
                <NavDropdown
                  className="header_health"
                  title="Health & Beauty"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Skincare
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Haircare
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Makeup</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Personal Care
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Perfumes & Fragrances
                  </NavDropdown.Item>
                </NavDropdown>
                {/*  End of Health and Beauty */}

                {/*  Start of Baby and Kids  */}

                <NavDropdown
                  className="header_kids"
                  title="Baby & Kids"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Diapers & Wipes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Baby Food & Formula
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Baby Gear(Strollers,Car Seats,etc..)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Toys & Kids
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Kid's Fashion
                  </NavDropdown.Item>
                </NavDropdown>
                {/*  End of Baby and Kids Dropdown */}

                {/* Start of Books and Stationery*/}
                <NavDropdown
                  className="header_books"
                  title="Books & Stationery"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Fiction & Non-Fiction Books
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Educational Books
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Office Supplies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Art & Craft Supplies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Notebook & Diaries
                  </NavDropdown.Item>
                </NavDropdown>
                {/* End of Books and Stationery */}

                {/* Start of Sports And OutDoors */}
                <NavDropdown
                  className="header_sports"
                  title="Sports & Outdoors"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Exercise & Fitness
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Sports Equipment
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Camping & Hiking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Cycling
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Outdoor Recreation
                  </NavDropdown.Item>
                </NavDropdown>
                {/* End of Sports and Outdoors */}

                {/* Start of Grocery and Gourment  */}
                <NavDropdown
                  className="header_grocery"
                  title="Grocery & Gourment"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Fresh Produce
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dairy & Eggs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Beverages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Snacks & Confectionary
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Cooking Essentials
                  </NavDropdown.Item>
                </NavDropdown>
                {/* End of Grocery and Gourment */}

                {/*  Start of Automotive */}
                <NavDropdown
                  className="header_automotive"
                  title="Automotive"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Car Parts & Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Tools & Equipments
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Car Care & Detailing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Motorcycle Parts & Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Automotive Electronics
                  </NavDropdown.Item>
                </NavDropdown>
                {/* End of Automotive */}

                {/*  Start of Electrical Appliances */}
                <NavDropdown
                  className="header_elecAppliances"
                  title="Electrical Appliances"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Large Appliances(Refrigerators,Washing Machines)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Small Appliances(Microwaves,Toasters,etc);
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Kitchen Appliances
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Air Conditioners
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Fans & Lighting
                  </NavDropdown.Item>
                </NavDropdown>
                {/* End of Electrical Appliances */}
              </NavDropdown>
              <Nav.Link>Vendors</Nav.Link>
            </Nav>

            <Form className="d-flex align-items-center">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-4 search-input"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="#deets">
                <span className="me-4">
                  <FavoriteBorderOutlinedIcon className="icon" />
                  Wishlist
                </span>
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="me-4">
                  <ShoppingCartOutlinedIcon className="icon" />
                  Cart
                </span>
              </Nav.Link>
              
              <NavDropdown
                className="me-4 dropdown_class"
                title={<PersonRoundedIcon />}
                id="collapsible-nav-dropdown"
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              
                <NavDropdown.Item href="#action/3.1">
                  <span>
                    <PersonRoundedIcon className="icon" />
                    My Account
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <span>
                    <FavoriteBorderOutlinedIcon className="icon" />
                    My Wishlist
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <span>
                    <TuneOutlinedIcon className="icon" />
                    Settings
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  {userName ? (
                    <span onClick={handleLogout}>
                      <ExitToAppOutlinedIcon className="icon" />
                      Sign out
                    </span>
                  ) : (
                    <span onClick={handleLogin}>
                      <LoginOutlinedIcon className="icon" />
                      Login
                    </span>
                  )}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
}

export default Header;
