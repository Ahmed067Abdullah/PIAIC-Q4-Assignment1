import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const CustomIconButton = ({ title, icon, onClick, disabled = false, color = 'default' }) => (
  <Tooltip placement="top" title={title}>
    <IconButton aria-label={title} onClick={onClick} disabled={disabled} style={{ color }}>
      {icon}
    </IconButton>
  </Tooltip>
);

export default CustomIconButton;