import React, { useContext, useState } from 'react';
import Container from '@mui/material/Container';
import FilmsData from '../shared/ListOfFilms';
import { Box, Card, CardActionArea, CardContent, CardMedia, Fab, Grid, Modal, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useTheme from '../hook/useTheme';

function Films() {
    const { theme, toggle, dark } = useTheme();
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (film) => {
        setSelectedFilm(film);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100vh",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        alignItems: 'center',
        gap: '50px'
    };

    return (
        <div className='container-films' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
            <Container>
                <Grid container spacing={5}>
                    {FilmsData.map((film) => (
                        <Grid item sx={12} sm={6} md={4} key={film.id}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea onClick={() => handleOpen(film)}>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image={film.Image}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{backgroundColor: theme.color ,color: theme.backgroundColor}}>
                                        <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
                                            {film.Title}
                                        </Typography>
                                        <Typography variant="body2" fontSize='20px'>
                                            Year: {film.Year}
                                        </Typography>
                                        <Typography variant="body2" fontSize='20px'>
                                            Nation: {film.Nation}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {selectedFilm && (
                            <img src={selectedFilm.Image} style={{ width: '50%' }} alt='selected film' />
                        )}
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography id="modal-modal-title" variant="h3" fontWeight='bold' component="h2">
                                {selectedFilm && selectedFilm.Title}
                            </Typography>
                            <Typography fontSize='20px' id="modal-modal-description" sx={{ mt: 2 }}>
                                Year: {selectedFilm && selectedFilm.Year}
                            </Typography>
                            <Typography fontSize='20px' id="modal-modal-description" sx={{ mt: 2 }}>
                                Nation: {selectedFilm && selectedFilm.Nation}
                            </Typography>
                            <Typography fontSize='20px' id="modal-modal-description" sx={{ mt: 2 }}>
                                Detail: {selectedFilm && selectedFilm.Detail}
                            </Typography>
                        </Box>
                    </Box>
                </Modal>
            </Container>
            <Fab aria-label="add" sx={{position: 'fixed', right: 0, bottom: 0}} onClick={toggle}>
                {!dark ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
            </Fab>
        </div>
    );
}
export default Films;
