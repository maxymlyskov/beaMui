import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { useTheme, Theme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactForm from "../Form/ContactForm";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";

type ThemeWidth = Theme
  & { drawerWidth: number | string }

const drawerWidth = 240;
const transitionDuration = 1000;

const styles = (theme: ThemeWidth) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120, 120, 120, 0.2)"
    },
    content: {
      padding: 3,
      minWidth: drawerWidth,
      marginLeft: 0
    },
    contentShift: {
      minWidth: drawerWidth,
      marginLeft: drawerWidth
    }
  }
}

export default function NavDrawer() {
  const theme = useTheme() as ThemeWidth;
  theme.drawerWidth = drawerWidth
  return (
    <>
      <BrowserRouter>
        
         <AppBar>
          <Toolbar>
            <Typography variant='h6'> Basic Typography text </Typography>
          </Toolbar>
         </AppBar>
         <Drawer variant='temporary' open={true}>
            <List>
              {[{text:"Firsts"},{text:"second"}].map(item=>
                 <ListItem key={item.text}>{item.text}</ListItem>)
              }
            </List>
         </Drawer>
      </BrowserRouter>
    </>
  );
}