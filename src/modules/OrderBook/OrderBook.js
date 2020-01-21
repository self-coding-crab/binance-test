import React, {useState} from 'react';
import {useBinanceOrderBook} from "../../shared/hooks/useBinanceOrderBook";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import OrdersList from "./OrdersList";
import {PAIRS_LIST} from '../../shared/constants/binance';

const useStyles = makeStyles({
    title: {
        fontSize: 25,
    },
});

export function OrderBook(props) {

    const classes = useStyles();
    const [pair, setPair] = useState('btcusdt');
    const {isLoading, message} = useBinanceOrderBook(pair);
    const { mode, setMode, languageMode, setLanguageMode } = props;
    const handleChangePair = (event, mode) => {
        if (mode)
            setPair(mode);
    };
    const handleModeChange = (event, mode) => {
        if (mode)
            setMode(mode)
    }
    const handleLanguageChange = (event, mode) => {
        if (mode)
            setLanguageMode(mode)
    }

    console.log('bid', message)
    return (
        <>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Order Book
                    </Typography>
                </Grid>
                <Grid item>
                    <ToggleButtonGroup
                        exclusive
                        size="small"
                        value={pair}
                        onChange={handleChangePair}
                    >
                        {Object.keys(PAIRS_LIST).map(code => {
                            const name = PAIRS_LIST[code];
                            return <ToggleButton value={code} key={code}>{name}</ToggleButton>
                        })}
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <ToggleButtonGroup exclusive size="small" onChange={handleModeChange} value={mode}>
                        <ToggleButton key={1} value="dark">
                            dark
                        </ToggleButton>
                        <ToggleButton key={2} value="light">
                            light
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <ToggleButtonGroup exclusive size="small" onChange={handleLanguageChange} value={languageMode}>
                        <ToggleButton key={1} value="en">
                            English
                        </ToggleButton>
                        <ToggleButton key={2} value="th">
                            Thailand
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>


            {isLoading
                ? (<p>loading ...</p>)
                : (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <OrdersList title="Buy Order" items={message.bids}/>
                        </Grid>
                        <Grid item xs={6}>
                            <OrdersList title="Sell Order" items={message.asks}/>
                        </Grid>
                    </Grid>
                )
            }
        </>
    )
}
