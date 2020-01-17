import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {OrderBook} from "./modules/OrderBook/OrderBook";
import {makeStyles, createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import {IntlProvider} from 'react-intl';

import messages_th from "./translations/th.json";
import messages_en from "./translations/en.json";

const messages = {
    th: messages_th,
    en: {
        price: "Price",
        amount: "Amount",
        total: "Total"
    }
};

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
    const [languageMode, setLanguageMode] = useState('en')
    return (
        <IntlProvider locale={languageMode} messages={messages[languageMode]}>
            <ThemeProvider theme={theme(mode)}>
                <CssBaseline/>
                <Container className={classes.container}>
                    <OrderBook setMode={setMode} mode={mode} setLanguageMode={setLanguageMode} languageMode={languageMode} />
                </Container>
            </ThemeProvider>
        </IntlProvider>
    );
}
