import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {OrderBook} from "./modules/OrderBook/OrderBook";
import {makeStyles, createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        marginTop: 50
    },
});
const theme = ( mode ) => createMuiTheme({
    palette: {
        type: mode
    }
});

export default function App() {
    const classes = useStyles();
    const [mode, setMode] = useState('dark');
    return (
        <ThemeProvider theme={theme(mode)}>
            <CssBaseline/>
            <Container className={classes.container}>
                <OrderBook setMode={setMode} mode={mode}/>
            </Container>
        </ThemeProvider>
    );
}
