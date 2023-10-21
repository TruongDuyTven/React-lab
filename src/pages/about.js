import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

function About() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Container>
            <Typography variant='h2' textAlign='center'>
                ABOUT US
            </Typography>

            <div style={{ minHeight: '71vh', marginTop: '50px' }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Netnet
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Website about films</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Welcome to NETNET, your ultimate destination for all things cinema. Immerse yourself in a world of cinematic brilliance as we bring you the latest updates, reviews, and news from the world of film. From blockbuster hits to indie gems, our curated collection offers a diverse selection of movies across genres, ensuring there's something for every movie enthusiast. Discover in-depth analysis, behind-the-scenes exclusives, and interviews with renowned filmmakers and actors, providing you with an insider's perspective on the art of storytelling through the lens. Whether you're a dedicated cinephile or a casual moviegoer, NETNET is your go-to hub for everything film-related, delivering a seamless and enriching experience for all lovers of the silver screen.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Joshua</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Website creator
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Introducing JOSHUA, where we transform your vision into an impressive digital reality. With a team of skilled and innovative developers, designers, and strategists, we specialize in crafting unique and dynamic websites tailored to your specific needs. Our cutting-edge solutions are designed to elevate your online presence, offering a seamless user experience that captivates your audience and drives results. From intuitive layouts to stunning visuals, we blend creativity with functionality, ensuring that your website not only stands out but also delivers exceptional performance across all devices. Trust JOSHUA to bring your online aspirations to life and leave a lasting impression in the digital sphere.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Rules
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Terms of use of the website
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Welcome to the Rules section of our website. We strive to create a positive and inclusive community for all our users, and these rules are in place to ensure a safe and enjoyable experience for everyone. By using our website, you agree to adhere to the following guidelines:
                            <br />
                            1. Respectful Conduct: Treat all members of the community with respect and courtesy. Any form of harassment, hate speech, or discriminatory behavior will not be tolerated.
                            <br />
                            2. Appropriate Content: Refrain from posting or sharing any content that is offensive, abusive, or inappropriate. This includes but is not limited to explicit language, graphic images, and any material that violates copyright or intellectual property rights.
                            <br />
                            3. Privacy and Security: Safeguard your personal information and respect the privacy of others. Do not share sensitive data or engage in any activities that compromise the security of our website or its users.
                            <br />
                            4. Compliance with Laws: Abide by all local and international laws when using our website. Any illegal activities or discussions promoting unlawful behavior will result in immediate account suspension.
                            <br />
                            5. Constructive Engagement: Engage in constructive and meaningful discussions. Share ideas, feedback, and suggestions in a constructive manner to foster a positive and collaborative environment.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Contact Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You have two options to contact with us:
                            <br/>
                            Option 1: In the top of website, you click on Contact and enter form. We will respond as soon as possible.
                            <br/>
                            Option 2: Contact directly with phone number: 0964160xxx
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Container>
    )
}

export default About