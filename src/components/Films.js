import React from 'react';
import Container from '@mui/material/Container';
import FilmsData from '../shared/ListOfFilms';
import { Card, CardActionArea, CardContent, CardMedia, Fab, Grid, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import useTheme from '../hook/useTheme';
import { Link } from 'react-router-dom';

function Films() {
    const { theme, toggle, dark } = useTheme();

    return (
        <div className='container-films' style={{ backgroundColor: theme.backgroundColor, color: theme.color, marginTop: '50px', marginBottom: '50px'}}>
            <Container>
                <Grid container spacing={5}>
                    {FilmsData.map((film) => (
                        <Grid item sx={12} sm={6} md={4} key={film.id}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image={film.Image}
                                        alt="green iguana"
                                        sx={{
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                            }
                                        }}
                                    />
                                    <CardContent sx={{ backgroundColor: theme.color, color: theme.backgroundColor, paddingTop: '30px' }}>
                                        <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
                                            {film.Title}
                                        </Typography>
                                        <Typography variant="body2" fontSize='20px'>
                                            Year: {film.Year}
                                        </Typography>
                                        <Typography variant="body2" fontSize='20px'>
                                            Nation: {film.Nation}
                                        </Typography>
                                        <Link to={`detail/${film.id}`}><Button variant="outlined" sx={{marginTop: '5px', color: theme.backgroundColor, backgroundColor: theme.color}}>
                                            Detail
                                        </Button></Link>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Fab aria-label="add" sx={{ position: 'fixed', right: 20, bottom: 20 }} onClick={toggle}>
                {!dark ? (<DarkModeIcon />) : (<LightModeIcon />)}
            </Fab>
        </div>
    );
}
export default Films;
