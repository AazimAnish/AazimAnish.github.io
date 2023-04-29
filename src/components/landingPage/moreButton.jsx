import React, { useState } from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';

const MoreButton = ({ linkPath }) => {
  const positionStyle = {
    position: 'fixed',
    top: '60%',
    right: '0',
    bottom: '0',
    left: '50%',
    fontSize: '0'
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={{...positionStyle, display: 'inline-block', overflow: 'hidden', width: '87px', height: '50px'}}>
      <Link to={linkPath}>
        <button
          className="glass-button"
          style={{
            width: '100%',
            marginLeft:'auto',
            marginRight:'auto',
            fontFamily: 'Poppins',
            fontWeight: 1000,
            borderRadius: '20px',
            border: 'none',
            padding: '10px 25px',
            color: 'rgba(255,255,255,0.8)',
            backgroundColor: hover ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
            boxShadow: hover ? '0 3px 10px rgba(0, 0, 0, 0.3)' : '0 2px 5px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transform: hover ? 'translateY(2px)' : 'none'
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          More
        </button>
      </Link>
    </div>
  );
};

export default MoreButton;
