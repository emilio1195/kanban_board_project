import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface dataItem {
    item: any
}
export default function Dropdown(props: dataItem) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon/>}
        onClick={handleClick}
        style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color:  props.item.priority == 'High'? "#ad0707" : 
                    props.item.priority == 'Medium'? "#d4760b" :
                    props.item.priority == 'Low'? "#076fcf" : "#575757"
        }}
      >
        {props.item.priority} Priority
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>High Priority</MenuItem>
        <MenuItem onClick={handleClose}>Medium Priority</MenuItem>
        <MenuItem onClick={handleClose}>Low Priority</MenuItem>
      </Menu>
    </div>
  );
}