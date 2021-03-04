import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ children, onClick, disabled = false, style, color = 'primary' }) => (
  <Button
    disableElevation
    disabled={disabled}
    style={{
      'padding': 0,
      'minWidth': 50,
      ...style
    }}
    onClick={onClick}
    variant="contained"
    color={color}>
    {children}
  </Button>
);

export default CustomButton;