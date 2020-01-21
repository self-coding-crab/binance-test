import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';

import { PAIRS_LIST } from '../../shared/constants/binance'

const StyledRow = styled(TableRow)`
    background: -webkit-linear-gradient(left, #303030 ${props => props.oWidth}%, #FF66CC ${props => props.width}%);
    // background: -webkit-linear-gradient(left, black 97%, white 3%);

    // background: -webkit-linear-gradient(right, #FF66CC ${props => props.width}%, #303030 ${props => 100 - props.width}%);
    `

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    title: {
        marginTop: 18,
        marginLeft: 18,
        fontSize: 18
    },
    cellPrice: {
        width: 150
    },
    cellAmount: {
        width: 150
    },
});
export default function OrdersList({title, items, pair}) {
    const classes = useStyles();
    let sum = 0;
    const standardBTC = 2.5;
    const standardETH = 8
    const standardLTC = 4
    return (
        <Paper className={classes.root}>
            <Typography variant="h4" gutterBottom className={classes.title}>
                {title}
            </Typography>

            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cellPrice}>Price</TableCell>
                        <TableCell  className={classes.cellAmount}>Amount</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, key) => {
                        const price = parseFloat(item[0]);
                        const amount = parseFloat(item[1]);
                        const total = price * amount;
                        sum += total;
                        let width = 0;
                        if (pair === PAIRS_LIST.btcusdt)
                            width = amount / standardBTC
                        else if (pair === PAIRS_LIST.ethusdt)
                            width = amount / standardETH
                        else
                            width = amount / standardLTC
                        width = parseInt(width * 100);
                        return (
                            <StyledRow key={key} width={width} oWidth={100 - width}>
                                <TableCell>{price.toFixed(2)}</TableCell>
                                <TableCell>{amount.toFixed(6) }</TableCell>
                                <TableCell>{total.toFixed(8)}</TableCell>
                                <TableCell>{sum.toFixed(8)}</TableCell>
                            </StyledRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
};
