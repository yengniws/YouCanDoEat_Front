import React from 'react';
import '../css/landing-page.scss';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const handleClick = () => {
    // Perform any additional actions before navigating, if needed
    console.log('Page clicked');
  };

  return (
    <Link to="/info" onClick={handleClick} className='link-container'>
      <div>
        <h1 contentEditable data-heading="YOUCANDOEAT">
        YOUCANDOEAT
        </h1>
      </div>
    </Link>
  );
}