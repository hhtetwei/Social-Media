import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import TaylorSwift from "../images/TaylorSwift.jfif";
import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: 300,
  display: "flex",
  alignItems: "center",

  justifyContent: "center",
  color: theme.palette.text.secondary,
}));
function YourFriends() {
  return (
    <Box
      maxWidth={500}
      alignItems={"left"}
      height={200}
      flexDirection={"column"}
    >
      <Box padding={5}>
        <Typography variant="h3">Friend List</Typography>
      </Box>

      <Box sx={{ width: "500%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 12, sm: 6 }}
          padding={5}
          justifyContent="left"
          alignItems="left"
        >
          <Grid item xs={6} sm={3}>
            <Item>
              <Box marginLeft={6}>
                <Avatar
                  alt="Grace"
                  src={TaylorSwift}
                  sx={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box padding={20} flexDirection="column" marginTop={4}>
                <Link to="/profile">Dumpling Wei</Link>
                <Typography>Lives in Yangon</Typography>
                <Box
                  marginTop={5}
                  display={"flex"}
                  textAlign={"center"}
                  justifyContent="space-between"
                >
                  <Button variant="outlined">Unfriend</Button>
                  <Button variant="outlined">Block</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>
              <Box marginLeft={6}>
                <Avatar
                  alt="Grace"
                  src={TaylorSwift}
                  sx={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box padding={20} flexDirection="column" marginTop={4}>
                <Link to="/profile">Dumpling Wei</Link>
                <Typography>Lives in Yangon</Typography>
                <Box
                  marginTop={5}
                  display={"flex"}
                  textAlign={"center"}
                  justifyContent="space-between"
                >
                  <Button variant="outlined">Unfriend</Button>
                  <Button variant="outlined">Block</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>
              <Box marginLeft={6}>
                <Avatar
                  alt="Grace"
                  src={TaylorSwift}
                  sx={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box padding={20} flexDirection="column" marginTop={4}>
                <Link to="/profile">Dumpling Wei</Link>
                <Typography>Lives in Yangon</Typography>
                <Box
                  marginTop={5}
                  display={"flex"}
                  textAlign={"center"}
                  justifyContent="space-between"
                >
                  <Button variant="outlined">Unfriend</Button>
                  <Button variant="outlined">Block</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "500%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 12, sm: 6 }}
          padding={5}
          justifyContent="left"
          alignItems="left"
        >
          <Grid item xs={6} sm={3}>
            <Item>
              <Box marginLeft={6}>
                <Avatar
                  alt="Grace"
                  src={TaylorSwift}
                  sx={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box padding={20} flexDirection="column" marginTop={4}>
                <Link to="/profile">Dumpling Wei</Link>
                <Typography>Lives in Yangon</Typography>
                <Box
                  marginTop={5}
                  display={"flex"}
                  textAlign={"center"}
                  justifyContent="space-between"
                >
                  <Button variant="outlined">Unfriend</Button>
                  <Button variant="outlined">Block</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>
              <Box marginLeft={6}>
                <Avatar
                  alt="Grace"
                  src={TaylorSwift}
                  sx={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box padding={20} flexDirection="column" marginTop={4}>
                <Link to="/profile">Dumpling Wei</Link>
                <Typography>Lives in Yangon</Typography>
                <Box
                  marginTop={5}
                  display={"flex"}
                  textAlign={"center"}
                  justifyContent="space-between"
                >
                  <Button variant="outlined">Unfriend</Button>
                  <Button variant="outlined">Block</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Item>
              <Box marginLeft={6}>
                <Avatar
                  alt="Grace"
                  src={TaylorSwift}
                  sx={{ width: "100px", height: "100px" }}
                />
              </Box>
              <Box padding={20} flexDirection="column" marginTop={4}>
                <Link to="/profile">Dumpling Wei</Link>
                <Typography>Lives in Yangon</Typography>
                <Box
                  marginTop={5}
                  display={"flex"}
                  textAlign={"center"}
                  justifyContent="space-between"
                >
                  <Button variant="outlined">Unfriend</Button>
                  <Button variant="outlined">Block</Button>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default YourFriends;
