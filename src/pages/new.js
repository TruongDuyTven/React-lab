import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardActionArea, CardContent } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import PersonIcon from '@mui/icons-material/Person';
import NewsData from '../shared/ListOfNews';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function New() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <Container>
            <Box sx={{ width: '100%', minHeight: '85vh'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="Movie news" {...a11yProps(1)} />
                        <Tab label="Actor news" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {NewsData.map((newsData) => (
                        <Card sx={{ widt: '100%', marginBottom: '20px', boxShadow: '2px 2px 4px 2px gray' }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom textTransform='uppercase' variant="h5" component="div">
                                        {newsData.type} NEWS {newsData.type === 'movie' ? <MovieIcon/> : <PersonIcon />}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {newsData.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                {NewsData.filter(newsData => newsData.type === 'movie').map((filterData) => (
                        <Card sx={{ width: '100%', marginBottom: '20px', boxShadow: '2px 2px 4px 2px gray' }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom textTransform='uppercase' variant="h5" component="div">
                                        {filterData.type} NEWS <MovieIcon />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {filterData.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                {NewsData.filter(newsData => newsData.type === 'actor').map((filterData) => (
                        <Card sx={{ widt: '100%', marginBottom: '20px', boxShadow: '2px 2px 4px 2px gray' }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom textTransform='uppercase' variant="h5" component="div">
                                        {filterData.type} NEWS <PersonIcon />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {filterData.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </CustomTabPanel>
            </Box>
        </Container>
    );
}