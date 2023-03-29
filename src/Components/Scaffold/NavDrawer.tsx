import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import {useState, useEffect} from 'react'
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
import { IconButton, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";

type ThemeWidth = Theme
  & { drawerWidth: number | string }

const drawerWidth = 240;
const transitionDuration = 1000;

const styles = (theme: ThemeWidth, responsiveDrawerWidth: number | string) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: responsiveDrawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      }
    },
    drawerPaper: {
      width: responsiveDrawerWidth,
      backgroundColor: "rgba(120, 120, 120, 0.25)"
    },
    content: {
      padding: 3,
      marginLeft: 0,
      maxWidth: 720,
      minWdth: 375,
      transition: theme.transitions.create('margin',{
        easing: theme.transitions.easing.easeOut,
        duration : transitionDuration
      })
    },
    contentShift: {
      marginLeft: responsiveDrawerWidth,
      transition: theme.transitions.create('margin',{
        easing: theme.transitions.easing.easeOut,
        duration : transitionDuration
      })
    },
    menuButton: {
      marginRight: 2
    }
  }
}

export default function NavDrawer() {
  const theme = useTheme() as ThemeWidth;
  theme.drawerWidth = drawerWidth
  const greatedThan375 = useMediaQuery("(min-width: 376px");
  const [open, setOpen] = useState(greatedThan375)
  const responsiveDrawerWidth = greatedThan375 ? drawerWidth: '100%'

  useEffect(()=>{
    setOpen(greatedThan375)
  },[greatedThan375])

  return (
    <>
      <BrowserRouter>
        <div>
          <AppBar position="fixed" sx={styles(theme,responsiveDrawerWidth).appBar}>
            <Toolbar>
              <IconButton color='inherit' edge='start' onClick={()=>setOpen(!open)} sx={{...styles(theme,responsiveDrawerWidth).menuButton, display: greatedThan375 ? "none" :""}}>
                <Menu/>
              </IconButton>
              <Typography variant="h6" noWrap>
                Expert Material-UI Styling
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            disableEnforceFocus
            sx={styles(theme,responsiveDrawerWidth).drawer}
            variant="temporary"
            open={open}
            transitionDuration={{
              enter: transitionDuration,
              exit: transitionDuration
            }}

            PaperProps={{ elevation: 9, sx: styles(theme,responsiveDrawerWidth).drawerPaper }}
          >
            <Toolbar />
            <div>
              <List>
                {[{ text: "Contact Form", route: '/form' }, { text: "Card Grid", route: "/grid" }, { text: "Table", route: "/table" }, { text: "Data Grid", route: "/datagrid" }].map((nav, index) => (
                  <ListItem key={nav.text} sx={{ borderBottom: '1px solid black', borderBottomColor: 'primary.main' }}>
                    <Link to={nav.route}>{nav.text}</Link>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
          <main
            style={{ ...styles(theme,responsiveDrawerWidth).content, ...(open ? styles(theme,responsiveDrawerWidth).contentShift : {}) }}
          >
            <Toolbar />
            <ThemeProvider theme={BeautifulTheme}>
              <Routes>
                <Route path={"/"} element={<ContactForm />} />
                <Route path={"/form"} element={<ContactForm />} />
                <Route path={"/grid"} element={<ContactCardGrid />} />
                <Route path={"/table"} element={<ContactTable />} />
                <Route path={"/datagrid"} element={<ContactDataGrid />} />
              </Routes>
            </ThemeProvider>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}