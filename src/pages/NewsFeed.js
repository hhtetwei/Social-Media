import React from "react";
import Box from "@mui/material/Box";
import PostCard from "../Components/PostCard";

export default function NewsFeed({ posts, loading }) {
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
        posts && posts.map((post, i) => <PostCard post={post} key={post._id} />)
      )}
    </Box>
  );
}
