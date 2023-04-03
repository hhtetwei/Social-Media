import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Profile from './Profile'
import { postRoute } from '../utils/APIRoutes'

const ProfilePosts = () => {
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        const fetchData = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get(postRoute, {
                    headers: {
                        Authorization: accessToken
                    }

                })

                setPosts(data.posts);

            } catch (err) {
                console.log(err);
            }
            setLoading(false)
        }
        fetchData()

    }, [])

    return (
        <>
            <ToastContainer />
            <Profile loading={loading} posts={posts} />
        </>

    )
}

export default ProfilePosts