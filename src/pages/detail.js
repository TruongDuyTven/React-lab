import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container'
import { Box, Typography, Button, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import axios from 'axios'

function Detail() {
  const selectedFilm = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const baseURL = `https://6533d85ae1b6f4c5904650d5.mockapi.io/Films`;
    axios.get(`${baseURL}/${selectedFilm.id}`)
      .then(response => {
        setFilm(response.data);
      })
      .catch(error => {
        if (error.response) {
          console.error(`HTTP Status: ${error.response.status}`);
        } else {
          console.error('Error', error.message);
        }
      });
  }, [selectedFilm.id]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    display: 'flex',
    gap: '20px',
    width: '100%',
    height: '80vh',
    marginTop: '30px',
    marginBottom: '30px'
  }

  const boxStyle = {
    aspectRatio: '16/9',
    height: '450px',
    backgroundColor: 'white',
    zIndex: '99',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    boxShadow: '2px 2px 4px 2px gray'
  };

  const ModalStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const iframeStyle = {
    width: '100%',
    height: '400px',
    display: 'flex',
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
            <div style={{ display: 'flex', gap: '20px' }}>
            <Button variant='outlined' style={{ marginTop: '20px', width: 'calc(33.33%)' }} onClick={handleOpen}>View Trailer</Button>
            <Button variant='outlined' style={{ marginTop: '20px', width: 'calc(33.33%)' }} onClick={handleOpen}>Update film</Button>
            <Button variant='outlined' style={{ marginTop: '20px', width: 'calc(33.33%)' }} onClick={handleOpen}>Delete film</Button>
            </div>
          </Box>
        </Box>
      }
      <Modal
        style={ModalStyle}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box style={boxStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', height: '50px', paddingLeft: '10px', paddingRight: '10px' }}>
            <Typography fontSize='20px' alignItems='center'>
              Trailer for {film && film.Title}
            </Typography>
            <button style={{ border: 'none', cursor: 'pointer' }} onClick={handleClose}><CloseIcon /></button>
          </div>
          <iframe
            style={iframeStyle}
            justifyContent='center'
            src={film.Clip}
            title={`Trailer for ${film.Title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Container>
  )
}

export default Detail