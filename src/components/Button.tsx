import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material-next/Button';


type IconButtonColorsProps = {
  /**
   * The color of the icon button.
   * @default 'secondary'
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * The position of the icon button.
   * @default 'bottom-right'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  variant?: 'outline' | 'text' | 'filled' | 'filledTonal' | 'elevated';
  size?: 'small' | 'medium' | 'large';
};

const IconButtonColors: React.FC<IconButtonColorsProps> = ({ color = 'secondary', position = 'center', variant = 'outline' }) => {
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

  return (
    <Stack direction="row" spacing={1} sx={positionStyle}>
      <IconButton aria-label="fingerprint" color="primary">
      <Button sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} variant="outlined">Click Me</Button>
      </IconButton>
    </Stack>
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
    left: '50%',
    top: '50p%',
    bottom: '30%',
  }
};

export default IconButtonColors;