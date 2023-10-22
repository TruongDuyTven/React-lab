import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, TextField, Grid, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Createfilm() {
  const [formData, setFormData] = useState({
    id: '',
    Image: '',
    Title: '',
    Clip: '',
    Year: '',
    Nation: '',
    Detail: ''
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
    axios.get('https://6533d85ae1b6f4c5904650d5.mockapi.io/Films')
      .then((response) => {
        const latestId = response.data.reduce((max, film) => (film.id > max ? film.id : max), 0);
        const newId = latestId + 1;
        const newData = { ...formData, id: newId };
        axios
          .post('https://6533d85ae1b6f4c5904650d5.mockapi.io/Films', newData)
          .then((response) => {
            console.log('Data sent: ', response.data);
          })
          .catch((error) => {
            console.error('Error sending data: ', error);
          });
        handleClickOpen();
      })
      .catch((error) => {
        console.error('Error getting data: ', error);
      });
  };

  return (
    <Container>
      <div style={{ height: "85vh" }}>
        <Card style={{ margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h4' style={{ marginBottom: '10px' }}>Create new films</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} >
                <Grid xs={12} item>
                  <TextField label="Title" placeholder='Enter title' variant='outlined' fullWidth required name='Title' value={formData.Title} onChange={handleChange} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Year" placeholder='Enter year' variant='outlined' fullWidth required name='Year' value={formData.Year} onChange={handleChange} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Nation" placeholder='Enter nation number' variant='outlined' fullWidth required name='Nation' value={formData.Nation} onChange={handleChange} />
                </Grid>
                <Grid xs={12} item>
                  <TextField label="Image" placeholder='Enter image' variant='outlined' fullWidth required name='Image' value={formData.Image} onChange={handleChange} />
                </Grid>
                <Grid xs={12} item>
                  <TextField label="Clip" placeholder='Enter clip number' variant='outlined' fullWidth required name='Clip' value={formData.Clip} onChange={handleChange} />
                </Grid>
                
                <Grid xs={12} item>
                  <TextField label="Detail" multiline rows={4} placeholder='Type your detail here' variant='outlined' fullWidth required name='detail' value={formData.Detail} onChange={handleChange} />
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
        <DialogTitle>{"Create new film successfully"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have successfully created a new film, you can now see it right on the home page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Link to='/'><Button>Home Page</Button></Link>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Createfilm