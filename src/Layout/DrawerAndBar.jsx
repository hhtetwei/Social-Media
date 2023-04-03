import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


import TaylorSwift from "../images/TaylorSwift.jfif";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { userRoute } from "../utils/APIRoutes";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,

    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const menuItems = [
    {
        text: "Home",
        icon: <HomeOutlinedIcon />,
        path: "/posts",
    },
    {
        text: "Create",
        icon: <AddCircleOutlineOutlinedIcon />,
        path: "/posts/create",
    },
    {
        text: "Friends",
        icon: <PeopleAltOutlinedIcon />,
        path: "/friends",
    },
    {
        text: "Blocked Friends",
        icon: <BlockOutlinedIcon />,
        path: "/blockedfriends",
    },
];

const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
];
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function DrawerAndBar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleProfile = () => {
        return navigate("/profile");
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        const fetchData = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(`${userRoute}/me`, {

                    headers: {
                        Authorization: accessToken
                    }

                })
                setUser(data.user)

            } catch (err) {
                console.log(err);
            }
            setLoading(false)
        }
        fetchData()
    }
        , [])

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        bgcolor: "#212121",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Cookie Blog
                        </Typography>
                    </Box>

                    <Box bgcolor={"#fafafa"} sx={{ width: 300 }}>
                        <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField {...params} label="Search" bgcolor="#fafafa" />
                            )}
                        />
                    </Box>

                    {
                        loading ? <>loading</> :
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Typography>{user.name}</Typography>
                                <Avatar alt="Grace" src={user.pictureUrls[0]} onClick={handleProfile} />
                            </Stack>
                    }
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    {menuItems.map((val, index) => (
                        <ListItem key={val} disablePadding sx={{ display: "block" }}>
                            <NavLink to={val.path}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {val.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={val.text}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet></Outlet>
            </Box>
        </Box>

    )
}
