import React from "react";
import Box from "@mui/material/Box";
import ProfileCard from "../Components/ProfileCard";

export default function ProfilePage({ posts, loading }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* <DrawerAndBar /> */}
            {loading ? (
                <>loading</>
            ) : (
                posts && posts.map((post, i) => <ProfileCard post={post} key={post._id} />)
            )}
        </Box>
    );
}
