import React from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, TextField, Grid, Button, Typography } from '@mui/material'


function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container>
      <div style={{height: "85vh"}}>
        <Card style={{margin: "0 auto"}}>
          <CardContent>
            <Typography variant='h4' style={{marginBottom: '10px'}}>Contact Us</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} >
                <Grid xs={12} sm={6} item>
                  <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField type='email' label="Email" placeholder='Enter email' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField label="Message" multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <Button type="submit" variant='contained' color='primary' fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default Contact