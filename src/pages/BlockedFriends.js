import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography fontSize={30}>Lilac Shinyi</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Unblock</Button>
    </CardActions>
    <hr />
    <Box>
      <CardContent>
        <Typography fontSize={30}>Lilac Shinyi</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Unblock</Button>
      </CardActions>
    </Box>
    <hr />
    <Box>
      <CardContent>
        <Typography fontSize={30}>Lilac Shinyi</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Unblock</Button>
      </CardActions>
    </Box>
  </React.Fragment>
);

export default function BlockedFriends() {
  return (
    <Box
      maxWidth={500}
      alignItems={"center"}
      height={200}
      flexDirection={"column"}
    >
      <Box padding={5} width={700}>
        <Typography variant="h3">Blocked Friends List</Typography>
      </Box>

      <Box
        sx={{ minWidth: 600 }}
        alignItems={"center"}
        justifyContent="center"
        padding={5}
        marginLeft={40}
      >
        <Card variant="outlined">{card}</Card>
      </Box>
    </Box>
  );
}
