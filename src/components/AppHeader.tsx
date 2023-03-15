import React from 'react'
import { ThemeProvider, Typography, Box, CssBaseline, AppBar, Toolbar, IconButton, Badge, Icon } from '@mui/material' 
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Logout } from '@mui/icons-material';
const AppHeader = () => {
    /** @type {import("@mui/material").SxProps} */
  
  const styles = {
    appLogo: {
        borderRadius: 2,
        width: 80,
        ml: 2,
        cursor: 'pointer'
    },
    appBar: {
        bgcolor: 'neutral.main'
    }
  }
  return (
    <AppBar position='sticky' sx={styles.appBar}>
        <Toolbar>
            <IconButton onClick={()=>{console.log("abc")}} color="secondary">
                <MenuIcon/>
            </IconButton>
            <Box component='img'
            sx = {styles.appLogo}
            src='https://yt3.googleusercontent.com/ytc/AL5GRJVCqoQl_kzLyudwEEx-Lb65xfu-60JrciaIuStNQg=s900-c-k-c0x00ffffff-no-rj'>
            

            </Box>
            <IconButton title="Notifications" color='secondary'>
            <Badge badgeContent={14} color="error">
            <NotificationsIcon/>
            </Badge>
                
            </IconButton>
            <IconButton title='Settings' color='secondary'>
                <SettingsIcon/>
            </IconButton>
            <IconButton title="SighOut" color='secondary'>
                <LogoutIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )

  
}

export default AppHeader
