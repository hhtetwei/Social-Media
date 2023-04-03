import React from 'react'
import { Avatar, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import TaylorSwift from "../images/TaylorSwift.jfif";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { postRoute, userRoute } from '../utils/APIRoutes';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditPost = () => {

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState()

    const [file, setFile] = useState();
    const [caption, setCaption] = useState()

    const handleFileChange = (e) => {
        console.log(e.target.files);
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const { id } = useParams()

    // fetch data from pervious unedited value state
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        const fetchData = async () => {
            setLoading(true)
            try {

                const { data } = await axios.get(`${postRoute}/${id}`, {

                    headers: {
                        Authorization: accessToken
                    }

                })
                setCaption(data.post.caption)

            } catch (err) {
                console.log(err);
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    // uploading photo and caption
    const handleSubmit = async () => {
        const accessToken = localStorage.getItem('accessToken')

        const formData = new FormData()

        formData.append('pictures', file)
        formData.append('caption', caption)

        try {

            const { data } = await axios.put(`${postRoute}/${id}`,
                formData
                , {

                    headers: {
                        Authorization: accessToken
                    }

                })


            toast.success(data.msg)

        } catch (err) {
            console.log(err);
        }

    }
    // console.log(po);

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
                <Avatar alt="Grace" src={TaylorSwift} margin="left" sx={{ width: "50px", height: "50px" }} borderRadius={"50"} />

            </Box>
            <ToastContainer />
            {
                loading ? <>loading</> :
                    <Box display={"flex"} padding={3} alignItems={"left"} marginTop={-3} flexDirection={"column"} fontFamily={"Arial"}>
                        <TextField id="filled-basic" value={caption} onChange={(e) => setCaption(e.target.value)} label="What's on your mind,Grace?" variant="filled" />
                        <br />
                        <p>Post Here...................</p>

                        <Box marginTop={3} display={"flex"} textAlign={"center"} alignItems="center" sx={{ ml: "100px" }}>
                            <Button variant="outlined" onClick={handleSubmit}>Post</Button>
                        </Box>
                    </Box>
            }
        </Box >

    )

}
export default EditPost