import React from 'react'
import {Box, Container} from '@material-ui/core';

export const ToolTipWrapper = ({avgPrice, btcSum, usdSum}) => (
    <Container style={{width: '200px'}}>
        <Box component="div" display="flex" justifyContent="space-between">
            <span>Avg.Price:</span>
            <span>{avgPrice}</span>
        </Box>
        <Box display="flex" component="div" justifyContent="space-between">
            <span>Sum BTC:</span>
            <span>{btcSum}</span>
        </Box>
        <Box display="flex" component="div" justifyContent="space-between">
            <span>Sum USDT:</span>
            <span>{usdSum}</span>
        </Box>
    </Container>
)
