import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { Tooltip } from '@material-ui/core';
import { ToolTipWrapper } from '../../components/ToolTip'
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
export default function OrdersList({title, items}) {
    const classes = useStyles();
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, key) => {
                        const price = parseFloat(item[0]);
                        const amount = parseFloat(item[1]);
                        const avgPrice = items.slice(key).reduce((a, b) => a + parseFloat(b[0]), 0)
                        const btcSum = items.slice(key).reduce((a, b) => a + parseFloat(b[1]), 0)
                        const total = items.slice(key).reduce((a, b) => a + parseFloat(b[0]) * parseFloat(b[1]), 0);
                        return (
                            <Tooltip title={<ToolTipWrapper avgPrice={avgPrice.toFixed(2)} btcSum={btcSum.toFixed(6)} usdSum={total.toFixed(8)} />} key={key}>
                                <TableRow key={key}>
                                    <TableCell>{price.toFixed(2)}</TableCell>
                                    <TableCell>{amount.toFixed(6) }</TableCell>
                                    <TableCell>{total.toFixed(8)}</TableCell>
                                </TableRow>
                            </Tooltip>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
};
