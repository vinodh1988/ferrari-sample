import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ferrari from '../ferrari_PNG10665.png';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography'
import traveling from '../TravelingTypewriter.ttf';
import ferrarilogo from '../ferraritext.png';
import {Link} from 'react-router-dom'
const theme = createMuiTheme({
  typography: createTypography(createPalette({}), {
    fontFamily: traveling
  }),
});

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: "20px",
      fontFamily: traveling
    },
    background: {
        backgroundColor : "#CB4335",
       
    },
    itemsAlign: {
      marginLeft : "auto"
    }
  }));

const Menubar = ()=>{
    const classes = useStyles();


    return(
    <MuiThemeProvider theme={theme}>
    <AppBar position="static" className={classes.background}>
        <Toolbar>
        <Avatar alt="Remy Sharp" src={ferrari} className={classes.large} />
          <Typography variant="h6" className={classes.title}>
           <Link className="link" to="/"> AUTO  </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="link" to="/racing"> RACING </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="link" to="/store">  STORE </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="link" to="/social"> SOCIAL </Link>
          </Typography>
         
          <div className = {classes.itemsAlign}>
                <img src={ferrarilogo} alt="FERRARI" height="50" width="200"></img>
         </div>
        </Toolbar>
       
       
      </AppBar>
      </MuiThemeProvider>
    );
}

export default Menubar;