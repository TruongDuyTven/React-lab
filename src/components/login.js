import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button';
import { UserAuth } from '../contexts/authcontext';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
export default function Login() {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        if (user != null) {
            navigate('/')
        }
    }, [user, navigate])
    return (
        <Container>
            <div style={{minHeight: '85vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h4' style={{ marginBottom: '30px' }}>WELCOME TO NETNET</Typography>
                <Typography variant='h5' style={{ marginBottom: '30px' }}>Please login to coutinue</Typography>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </Container>
    )
}
