import {useEffect, useState} from "react";
import {ORDER_BOOK_API_URL, TIMEOUT} from '../constants/binance';

export function useBinanceOrderBook(pair) {

    const url = ORDER_BOOK_API_URL
        .replace(':pair', pair)
        .replace(':timeout', TIMEOUT);

    const [message, setMessage] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const webSocket = new WebSocket(url);

        webSocket.onmessage = e => {
            const message = JSON.parse(e.data);
            setMessage(message);
            setIsLoading(false);
        };

        return () => {
            webSocket.close();
        };
    }, [url]);

    return {
        isLoading,
        message
    }
}
