import {AppBar, Toolbar, IconButton, Typography, Button, Box, Grid} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactLinkedIn from "@mui/icons-material/LinkedIn";
import ContactInstagram from "@mui/icons-material/Instagram";
import ContactFaceBook from "@mui/icons-material/Facebook";
import "../styles/navBar.css";
import Logo from "../imagenes/logo_PF_Yatch.png";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import '../styles/footer.css';



export default function Footer() {
 

  return (
    
      <AppBar position="sticky" id="footer">
        <Grid>
          <Toolbar>
        <Box id="footerCopy">
        <footer>
        Copyright &copy; Nautical 2022.
        </footer> 
        </Box>

        <Box id="LinksFooterAll" sx={{marginLeft: 'auto'}}>

          <Box id="LinksFooter">
              <IconButton id="contactFooter" href="/contactForm">
        
                <ContactMailIcon/> 
              </IconButton>
            </Box>

            <Box id="LinksFooter">
              <IconButton id="contactFooter" href="https://www.linkedin.com">
               
                <ContactLinkedIn/>
              </IconButton>
          </Box>

          <Box id="LinksFooter">
              <IconButton id="contactFooter" href="https://www.linkedin.com">
              
                <ContactInstagram/>
              </IconButton>
          </Box>

          <Box id="LinksFooter">
              <IconButton id="contactFooter" href="https://www.facebook.com">
                
                <ContactFaceBook/>
              </IconButton>
          </Box>

        </Box>  
          </Toolbar>
        </Grid>
      </AppBar>
    
  );
}
