import React from 'react'
import { Avatar, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import TaylorSwift from "../images/TaylorSwift.jfif";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { userRoute } from '../utils/APIRoutes';

const CreatePost = () => {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState()

    const [file, setFile] = useState();
    const [caption, setCaption] = useState('')

    const [posts, setPosts] = useState()

    const handleFileChange = (e) => {
        console.log(e.target.files);
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleSubmit = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const formData = new FormData()

        formData.append('pictures', file)
        formData.append('caption', caption)
        formData.append('author', user && user._id)

        try {

            const { data } = await axios.post("http://localhost:8000/api/posts",
                formData
                , {

                    headers: {
                        Authorization: accessToken
                    }

                })

            // setPosts(data.posts);
            console.log(data);

        } catch (err) {
            console.log(err);
        }

    }

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

                setUser(data.user);

            } catch (err) {
                console.log(err);
            }
            setLoading(false)
        }

        fetchData()

    }, [])


    return (
        <Box display="flex" maxWidth={500}
            alignItems="left"
            margin="auto" borderRadius={2}
            bgcolor="#fafafa"
            marginTop={5}
            marginLeft={10}
            padding={3}
            height={300}
            sx={{ border: 1, borderColor: "text.primary" }}>

            <Box display={"flex"} flexDirection={"row"} >
                <Avatar alt="Grace" src={user && user.pictureUrls[0]} margin="left" sx={{ width: "50px", height: "50px" }} borderRadius={"50"} />

            </Box>
            {
                loading ? <>loading</> :
                    <Box display={"flex"} padding={3} alignItems={"left"} marginTop={-3} flexDirection={"column"} fontFamily={"Arial"}>
                        <TextField id="filled-basic" value={caption} onChange={(e) => setCaption(e.target.value)} label="What's on your mind,Grace?" variant="filled" />
                        <br />
                        <p>Post Here...................</p>
                        <Box marginTop={3} display={"flex"} textAlign={"center"} justifyContent="space-between" >


                            <input type="file" name="file" onChange={handleFileChange} />
                        </Box>
                        <Box marginTop={3} display={"flex"} textAlign={"center"} alignItems="center" sx={{ ml: "100px" }}>
                            <Button variant="outlined" onClick={handleSubmit}>Post</Button>
                        </Box>
                    </Box>
            }
        </Box >

    )
}

export default CreatePost