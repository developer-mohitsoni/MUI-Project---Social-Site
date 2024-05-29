import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box } from "@mui/material";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const NavBar = () =>{ 
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Trend Karo
        </Typography>

        <WhatshotIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />

        <Search>
          <InputBase
            placeholder="search..."
            sx={{
              color: "black"
            }}
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Mohit"
            src="https://i.pinimg.com/originals/d5/01/fd/d501fd445f1ad7e52a6e9acd0325f891.jpg"
            sx={{
              width: 30,
              height: 30,
              objectFit: "contain"
            }}
            onClick={() => {
              setOpen(true);
            }}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Mohit"
            src="../Mohit-Soni-Image.jpg"
            sx={{
              width: 30,
              height: 30,
            }}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Typography variant="span">Mohit</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
