import React from 'react'

import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; import StyleIcon from '@mui/icons-material/Style';

const SideNav = () => {
  const theme = useTheme();
  return (
    <Sidebar
    style={{ height: "100%", top: 'auto' }}
    breakPoint="md"
    backgroundColor={theme.palette.neutral.light}

>
  <Box sx={styles.avatarContaniner}>
    <Avatar sx={styles.avatar} alt='Channel Name' src="src/assets/meeeee.jpg"/>
    <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography>
    <Typography variant="overline" >Fred</Typography>

  </Box>
      <Menu >
        <MenuItem active icon={<DashboardOutlinedIcon> </DashboardOutlinedIcon>}>
          <Typography variant='body2'>Dashboard</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceOutlinedIcon></SourceOutlinedIcon>}>
          <Typography variant='body2'>Content</Typography>
        </MenuItem>
        <MenuItem active icon={<AnalyticsOutlinedIcon></AnalyticsOutlinedIcon>}>
          <Typography variant='body2'>Analytics</Typography>
        </MenuItem>
        <MenuItem active icon={<StyleOutlinedIcon></StyleOutlinedIcon>}>
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
      my: 5
  },
  avatar: {
      width: '40%',
      height: 'auto'
  },
  yourChannel: {
      mt: 1
  }

}