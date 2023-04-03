import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { MenuItem } from 'react-pro-sidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDisclosure } from '../hooks/useDisclosure'
import { postRoute, userRoute } from '../utils/APIRoutes'

const PostCard = ({ post }) => {
    const anchorEl = useRef();
    const navigate = useNavigate();

    const { isOpen, setClose, setOpen } = useDisclosure();
    const [user, setUser] = useState();
    // Like State
    // const [like, setLike] = useState()

    const [loading, setLoading] = useState(true);
    const [isLiked, setIsLiked] = useState("");

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${userRoute}/me`, {
                    headers: {
                        Authorization: accessToken,
                    },
                });
                setUser(data.user);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        };
        fetchData();

        if (loading) {
            setIsLiked("")
        } else {
            if (post.likes.includes(user._id)) {
                setIsLiked(true);
            } else {
                setIsLiked(false);
            }
        }

    }, []);

    const handleLike = async (id) => {
        try {
            setIsLiked(!isLiked)
            const accessToken = localStorage.getItem("accessToken");
            console.log(accessToken);

            const { data } = await axios.put(`${postRoute}/${id}/liked`, null, {
                headers: {
                    Authorization: accessToken,
                },
            });

            console.log(data);
        } catch (err) {
            // toast.error(err.response.data.error.message);
            console.log(err.response.data);
        }
    };

    const handleUnlike = () => {
        console.log("unlike");
    };

    const handleEdit = (id) => {
        navigate(`/posts/edit/${id}`);
    };

    const handleDelete = async (id) => {
        const accessToken = localStorage.getItem("accessToken");

        try {
            const { data } = await axios.delete(`${postRoute}/${id}`, {
                headers: {
                    Authorization: accessToken,
                },
            });
            setClose();
            toast.success(data.msg);
        } catch (err) {
            setClose();
            toast.error(err.response.data.error.message);
        }
    };

    return (
        <Card
            sx={{
                width: 500,
                paddingTop: 2,
                marginTop: 3,
                marginBottom: 3,
                flexDirection: "column",
                border: 1,
                borderColor: "text.primary",
                borderRadius: 2,
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: "red" }}
                        aria-label="recipe"
                        src={post.author && post.author.pictureUrls}
                    />
                }
                action={
                    <div>
                        <IconButton
                            id="basic-button"
                            aria-controls={isOpen ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={isOpen ? "true" : undefined}
                            onClick={setOpen}
                            aria-label="settings"
                            ref={anchorEl}
                        >
                            <MoreVert />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl.current}
                            open={isOpen}
                            onClose={setClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={() => handleEdit(post._id)}>Edit</MenuItem>
                            <MenuItem onClick={() => handleDelete(post._id)}>Delete</MenuItem>
                        </Menu>
                    </div>
                }
                title={post.author && post.author.name}
                subheader={post.createdAt && post.createdAt.split("T")[0]}
            />

            <CardMedia
                component="img"
                height="300"
                width="300"
                image={post.pictureUrls}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {loading ? (
                    <></>
                ) : (
                    <>
                        {isLiked && isLiked !== "" ? (
                            <IconButton onClick={() => handleLike(post._id)}>
                                <Favorite sx={{ color: isLiked ? 'red' : 'blue' }} />
                            </IconButton>
                        ) : (
                            <IconButton onClick={() => handleLike(post._id)}>
                                <Favorite />
                            </IconButton>
                        )}
                    </>
                )}
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostCard