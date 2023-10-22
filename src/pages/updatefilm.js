import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, TextField, Grid, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Updatefilm() {
    const selectedFilm = useParams();
    const [film, setFilm] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        Image: '',
        Title: '',
        Clip: '',
        Year: '',
        Nation: '',
        Detail: '',
    });
    useEffect(() => {
        const baseURL = `https://6533d85ae1b6f4c5904650d5.mockapi.io/Films`;
        axios.get(`${baseURL}/${selectedFilm.id}`)
          .then(response => {
            setFilm(response.data);
            setFormData(response.data);
          })
          .catch(error => {
            if (error.response) {
              console.error(`HTTP Status: ${error.response.status}`);
            } else {
              console.error('Error', error.message);
            }
          });
      }, [selectedFilm.id]);
    console.log(film)

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
        axios.put(`https://6533d85ae1b6f4c5904650d5.mockapi.io/Films/${selectedFilm.id}`, formData)
            .then((response) => {
                console.log('Data updated: ', response.data);
                navigate(`/detail/${selectedFilm.id}`);
                handleClickOpen();
            })
            .catch((error) => {
                console.error('Error updating data: ', error);
            });
    };
    return (
        <Container>
            <div style={{ height: "85vh" }}>
                <Card style={{ margin: "0 auto" }}>
                    <CardContent>
                        <Typography variant='h4' style={{ marginBottom: '10px' }}>Update films</Typography>
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
                <DialogTitle>{"Update film successfully"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You have successfully update film, you can now see it right on the home page.
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

export default Updatefilm