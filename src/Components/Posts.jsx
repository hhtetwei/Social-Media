import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import NewsFeed from '../pages/NewsFeed'
import "react-toastify/dist/ReactToastify.css"
import { postRoute } from '../utils/APIRoutes'

const Posts = () => {
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
            <NewsFeed loading={loading} posts={posts} />
        </>

    )
}

export default Posts