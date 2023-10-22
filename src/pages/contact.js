import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, TextField, Grid, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://6533d85ae1b6f4c5904650d5.mockapi.io/News', formData)
      .then((response) => {
        console.log('Data sent: ', response.data);
      })
      .catch((error) => {
        console.error('Error sending data: ', error);
      });
    handleClickOpen();
  };

  return (
    <Container>
      <div style={{height: "85vh"}}>
        <Card style={{margin: "0 auto"}}>
          <CardContent>
            <Typography variant='h4' style={{marginBottom: '10px'}}>Contact Us</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} >
                <Grid xs={12} sm={6} item>
                  <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required name='firstName' value={formData.firstName} onChange={handleChange}/>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required name='lastName' value={formData.lastName} onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField type='email' label="Email" placeholder='Enter email' variant='outlined' fullWidth required name='email' value={formData.email} onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required name='phone' value={formData.phone} onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField label="Message" multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth required name='message' value={formData.message} onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item>
                  <Button type="submit" variant='contained' color='primary' fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thank for contact!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Your contribution is a great help to us. We welcome all your feedback to improve the effectiveness of our website. We will respond to you as soon as possible by phone number or email. Thank you very much !!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Link to='/'><Button>Continous view website</Button></Link>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Contact