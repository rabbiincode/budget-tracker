import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import useStyles from "./styles";

const CustomizedSnackbar = ({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }) => {
  const classes = useStyles();
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;