import React from 'react'
import Container from '@mui/material/Container'
import FilmsData from '../shared/ListOfFilms'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function Films() {
    return (
        <Container>
            <Grid container spacing={2}>
            {FilmsData.map((film) => (
                <Grid item md={4}>
                <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="500"
                            image={film.Image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
                                {film.Title}
                            </Typography>
                            <Typography variant="body2" fontSize='20px' color="text.secondary" >
                                Year: {film.Year}
                            </Typography>
                            <Typography variant="body2" fontSize='20px' color="text.secondary">
                                Nation: {film.Nation}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}

export default Films