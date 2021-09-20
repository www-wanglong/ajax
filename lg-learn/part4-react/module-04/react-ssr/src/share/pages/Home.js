import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return <div>
      home
      <Link to="/list">jump to list</Link>
    </div>
};

export default Home;