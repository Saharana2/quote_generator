import { AppBar, Box, Paper, Typography } from '@mui/material';

function header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Paper elevation="5">
                    <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,163,210,1) 16%, rgba(213,135,215,1) 20%, rgba(68,98,153,0.8130602582830007) 22%, rgba(187,22,223,1) 82%, rgba(38,149,198,1) 100%, rgba(0,212,255,1) 100%)" }}>
                        <Typography variant="h3" component="div" textAlign="center" sx={{ m: 5 }}>
                            Quotes
                        </Typography>
                    </div>
                </Paper>
            </AppBar>
        </Box >
    )
}

export default header