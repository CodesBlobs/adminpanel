import React from "react";
import {
    Box, AppBar,
    Toolbar,
    IconButton,
    Badge
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useProSidebar } from "react-pro-sidebar";
const AppHeader = () => {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  /** @type {import("@mui/material").SxProps} */

  const styles = {
    appLogo: {
      borderRadius: 2,
      width: 80,
      ml: 2,
      cursor: "pointer",
    },
    appBar: {
      bgcolor: "neutral.main",
    },
  };
  return (
    // Using a toolbar can use its default written css to keep your appbar tidy(if not then you have to use your own css)

    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          color="secondary"
        >
          <MenuIcon />
        </IconButton>
        {/** Make sure to mostly use the components from the same package/website as the parent
         * for example: if I use the Image component that is not from mui replacing the box component,
         * they won't actually work well together. Because sometimes the child needs to have a certain
         * parent component
         */}
        <Box
          component="img"
          sx={styles.appLogo}
          src="https://yt3.googleusercontent.com/ytc/AL5GRJVCqoQl_kzLyudwEEx-Lb65xfu-60JrciaIuStNQg=s900-c-k-c0x00ffffff-no-rj"
        />
        <Box sx={{ flexGrow: 1 }} />

        <IconButton title="Notifications" color="secondary">
          <Badge badgeContent={14} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <SettingsIcon />
        </IconButton>
        <IconButton title="Sign Out" color="secondary">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
