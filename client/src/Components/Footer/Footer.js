import { Container, Box, Link, Grid } from "@mui/material";
import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className= 'footer'>
      <Box  px={{xs: 3, sm: 3}} py={{xs: 5, sm: 3}} sx={{backgroundColor: 'gray'}}  >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>1</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>2</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>3</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign= 'center'sx={{pt:{sx:5, sm: 10}, pb:{sx:5, sm: 10}}}>
            The PokeCave &reg; { new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
