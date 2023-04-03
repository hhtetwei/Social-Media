import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from "@mui/material/Avatar";
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';


import IconButton from '@mui/material/IconButton';
import TaylorSwift from "../images/TaylorSwift.jfif";


import DrawerAndBar from '../Layout/DrawerAndBar';
// import styled from '@emotion/styled';
import { useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
import { userRoute } from '../utils/APIRoutes';



// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));




const Profile = ({ posts }) => {
    const [expanded, setExpanded] = useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);


    };

    const [user, setUsers] = useState()
    const [loading, setLoading] = useState(true)



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

                setUsers(data.user);

            } catch (err) {
                console.log(err);
            }
            setLoading(false)
        }
        fetchData()



    }, [])







    return (




        <Box>

            <DrawerAndBar />



            <Box display="flex" maxWidth={900}
                alignItems="center"
                margin="auto" borderRadius={2}
                bgcolor="#fafafa"
                // marginTop={2}
                padding={3}
                height={280}
                sx={{ border: 1, borderColor: "text.primary" }}>






                <Box spacing={2} >


                    <Avatar alt="Grace" src={user && user.pictureUrls[0]} margin="left" sx={{ width: "180px", height: "180px" }} />

                    {
                        loading ? <>loading</> :
                            <Box textAlign={"center"} paddingTop={3}>

                                <Typography fontWeight={"bold"}>{user.name}</Typography>
                                <Typography>{user.bio}</Typography>


                            </Box>
                    }

                </Box>






                <Box display={"flex"} padding={10} flexDirection="column" alignItems={"center"} marginBottom={10} >
                    <Typography fontWeight={"bold"}>8</Typography>
                    <Typography>Posts</Typography>

                </Box>


                <Box display={"flex"} padding={10} flexDirection="column" alignItems={"center"} marginBottom={10}>
                    <Typography fontWeight={"bold"}>2.4K</Typography>
                    <Typography>Friends</Typography>
                </Box>

                <Box display={"flex"} padding={10} flexDirection="column" alignItems={"center"} marginBottom={10} >
                    <Typography fontWeight={"bold"}>189</Typography>
                    <Typography>Likes</Typography>
                </Box>

            </Box>

            <Box margin={6} justifyContent={"center"} display="flex">
                <Typography variant='h6'>Your Posts</Typography>
            </Box>

            <Box justifyContent={"center"} display="flex">
                <Card
                    sx={{
                        maxWidth: 500,
                        paddingTop: 5,
                        padding: 8,
                        marginTop: 3,
                        justifyContent: "center",
                        marginBottom: 5,
                        flexDirection: "column",
                        border: 1,
                        borderColor: "text.primary",
                        borderRadius: 2,
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={TaylorSwift}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along with
                            the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                                and set aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
                                over medium-high heat. Add chicken, shrimp and chorizo, and cook,
                                stirring occasionally until lightly browned, 6 to 8 minutes.
                                Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic,
                                tomatoes, onion, salt and pepper, and cook, stirring often until
                                thickened and fragrant, about 10 minutes. Add saffron broth and
                                remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes
                                and peppers, and cook without stirring, until most of the liquid
                                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                                reserved shrimp and mussels, tucking them down into the rice, and
                                cook again without stirring, until mussels have opened and rice is
                                just tender, 5 to 7 minutes more. (Discard any mussels that
                                don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then
                                serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
            <Box justifyContent={"center"} display="flex">
                <Card
                    sx={{
                        maxWidth: 500,
                        paddingTop: 5,
                        padding: 8,
                        marginTop: 3,
                        justifyContent: "center",
                        marginBottom: 5,
                        flexDirection: "column",
                        border: 1,
                        borderColor: "text.primary",
                        borderRadius: 2,
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={TaylorSwift}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along with
                            the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                                and set aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
                                over medium-high heat. Add chicken, shrimp and chorizo, and cook,
                                stirring occasionally until lightly browned, 6 to 8 minutes.
                                Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic,
                                tomatoes, onion, salt and pepper, and cook, stirring often until
                                thickened and fragrant, about 10 minutes. Add saffron broth and
                                remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes
                                and peppers, and cook without stirring, until most of the liquid
                                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                                reserved shrimp and mussels, tucking them down into the rice, and
                                cook again without stirring, until mussels have opened and rice is
                                just tender, 5 to 7 minutes more. (Discard any mussels that
                                don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then
                                serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
            <Box justifyContent={"center"} display="flex">
                <Card
                    sx={{
                        maxWidth: 500,
                        paddingTop: 5,
                        padding: 8,
                        marginTop: 3,
                        justifyContent: "center",
                        marginBottom: 5,
                        flexDirection: "column",
                        border: 1,
                        borderColor: "text.primary",
                        borderRadius: 2,
                    }}
                >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={TaylorSwift}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along with
                            the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>
                </Card>
            </Box>


        </Box>








    )
}

export default Profile