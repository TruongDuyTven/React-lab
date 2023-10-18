import React from 'react'
import { useParams } from 'react-router-dom'
import FilmsData from '../shared/ListOfFilms';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material'

function Detail() {
  const selectedFilm = useParams();
  const film = FilmsData.find(obj => {
    return obj.id === parseInt(selectedFilm.id);
  });
  const style = {
    display: 'flex',
    gap: '20px',
    width: '100%',
    height: '80vh',
    marginTop: '30px',
    marginBottom: '30px'
  }

  return (
    <Container>
      {film &&
        <Box sx={style}>
          {film && (
            <img src={`../${film.Image}`} style={{ width: '50%' }} alt='selected film' />
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
            <Typography id="modal-modal-title" variant="h3" fontWeight='bold' component="h2">
              {film && film.Title}
            </Typography>
            <Typography fontSize='20px' id="modal-modal-description">
              Year: {film && film.Year}
            </Typography>
            <Typography fontSize='20px' id="modal-modal-description">
              Nation: {film && film.Nation}
            </Typography>
            <Typography fontSize='20px' id="modal-modal-description">
              Detail: {film && film.Detail}
            </Typography>
          </Box>
        </Box>
      }
    </Container>
  )
}

export default Detail