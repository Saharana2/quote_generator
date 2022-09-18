import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { quotesList } from '../utils/constants';

const DisplayQuote = () => {
    const [quote, setQuote] = useState('');
    const [randomNo, updateNo] = useState(Math.floor(Math.random() * quotesList.length));

    const newRandomNo = () => {
        updateNo(Math.floor(Math.random() * quotesList.length));
    }

    const onChange = () => {
        newRandomNo();
        setQuote(quotesList[randomNo]);
    }

    useEffect(() => {
        setQuote(quotesList[randomNo])
    }, [])

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h5" sx={{ m: 15.5 }} textAlign='center'>
                        {`"`}
                        {quote}
                        {`"`}
                    </Typography>
                </CardContent>
            </Card>
            <Typography textAlign='center' sx={{ m: 15.5 }}>
                <Button position='fixed' variant='outlined' size='large' onClick={() => onChange()}>
                    Find a new One...
                </Button>
            </Typography>

        </>
    )
};

export default DisplayQuote;

