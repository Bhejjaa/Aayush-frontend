import React from 'react';
import Header from '../components/header/Header';
import Caro from '../components/carousel/Caro';
const Home = ({email}) => {
  return (
    <div>
      <Header email = {email}/>
      <Caro />
    </div>
  );
};

export default Home;
