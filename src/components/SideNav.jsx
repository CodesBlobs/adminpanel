import React from 'react'

import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; import StyleIcon from '@mui/icons-material/Style';
import { useLocation, useNavigate } from 'react-router-dom';

const SideNav = () => {
  const nav = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { collapsed} = useProSidebar()
  return (
    <Sidebar
    style={{ height: "100%", top: 'auto' }}
    breakPoint="md"
    backgroundColor={theme.palette.neutral.light}

>
  <Box sx={styles.avatarContaniner}>
    <Avatar sx={styles.avatar} className='ml4' alt='Channel Name' src="src/assets/meeeee.jpg"/>
    {!collapsed ? <Typography  variant="body2" sx={styles.yourChannel}>Your Channel</Typography> : null}
    {!collapsed ? <Typography variant="overline">Maths Kiddo</Typography> : null}

  </Box>
      <Menu 
        menuItemStyles={{
          button: ({active}) => {
            return {
              backgroundColor: active? theme.palette.neutral.medium : undefined
            }
          }
        }}
      >
        <MenuItem active={location.pathname==='/'} icon={<DashboardOutlinedIcon> </DashboardOutlinedIcon> } onClick={()=>{nav('/')}}>
          <Typography variant='body2'>Dashboard</Typography>
        </MenuItem>
        <MenuItem active={location.pathname==='/content'} icon={<SourceOutlinedIcon></SourceOutlinedIcon>} onClick={()=>{nav('/content')}} >
          <Typography variant='body2'>Content</Typography>
        </MenuItem>
        <MenuItem active={location.pathname==='/analytics'} icon={<AnalyticsOutlinedIcon></AnalyticsOutlinedIcon>} onClick={()=>{nav('/analytics')}} >
          <Typography variant='body2'>Analytics</Typography>
        </MenuItem>
        <MenuItem active={location.pathname==='/customization'} icon={<StyleOutlinedIcon></StyleOutlinedIcon>} onClick={()=>{nav('/customization')}}>
          <Typography variant='body2'>Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SideNav
/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
  avatarContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: 'column',
      my: 5,
      color: 'gold'
  },
  avatar: {
    alignSelf: 'center',
      width: '40%',
      height: 'auto'
  },
  yourChannel: {
      mt: 1
  }

}