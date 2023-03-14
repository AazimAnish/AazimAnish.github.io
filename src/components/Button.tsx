import React, { useState } from 'react';

type IconButtonColorsProps = {
  /**
   * The position of the icon button.
   * @default 'bottom-right'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
};

const IconButtonColors: React.FC<IconButtonColorsProps> = ({ position = 'center'}) => {
  let positionStyle;
  switch (position) {
    case 'top-left':
      positionStyle = styles.topLeft;
      break;
    case 'top-right':
      positionStyle = styles.topRight;
      break;
    case 'bottom-left':
      positionStyle = styles.bottomLeft;
      break;
    case 'center':
      positionStyle = styles.center;
      break;
    default:
      positionStyle = styles.bottomRight;
  }

  const [hover, setHover] = useState(false);

  return (
    <div style={{...positionStyle, display: 'inline-block', overflow: 'hidden', width: '87px', height: '50px'}}>
      <button 
        className="glass-button"
        style={{
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
    </div>
  );
};

// ========================================================
// styles

type Styles = { [key in string]: React.CSSProperties };

const temp: Styles = {
  container: {
    position: 'fixed',
    bottom: '0',
    right: '0',
    fontSize: '0',
  },
};

const styles: Styles = {
  topLeft: {
    ...temp.container,
    top: '10px',
    left: '10px',
  },
  topRight: {
    ...temp.container,
    top: '10px',
    right: '10px',
  },
  bottomLeft: {
    ...temp.container,
    bottom: '10px',
    left: '10px',
  },
  bottomRight: {
    ...temp.container,
    bottom: '10px',
    right: '10px',
  },
  center: {
    ...temp.container,
    right: '725px',
    top: '475px',
  },
};

export default IconButtonColors;
