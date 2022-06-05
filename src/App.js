import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import EditingBox from './components/EditingBox/EditingBox';
import Diagram from './components/Diagram/Diagram';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
        <Grid container justify="space-evenly" alignItems="stretch" spacing={3}>
            <Grid item xs={12} md={6}>
                <Diagram/>
            </Grid>
            <Grid item xs={12} md={6}>
                <EditingBox/>
            </Grid>
        </Grid>
        </Container>
    );
}

export default App;