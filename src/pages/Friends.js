import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import { styled } from "@mui/material/styles";
import TaylorSwift from "../images/TaylorSwift.jfif";
import Avatar from "@mui/material/Avatar";

// import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Friends() {
  return (
    <Box width="100%">
      <Box>
        <Typography variant="h5"> Friend Requests</Typography>
        <Box marginTop={5}>
          <Button variant="outlined">Your Friends</Button>
          <Button variant="outlined" sx={{ ml: "20px" }}>
            Blocked Friends
          </Button>
        </Box>
      </Box>

      {/* Start of the Card */}
      <Box display="flex" border="1px solid red" margin={10}>
        <Box display="flex" flexWrap="wrap" flexDirection="row" gap="50px">
          <Box
            width="45%"
            height={200}
            display="flex"
            border="1px solid blue"
            justifyContent="center"
            alignItems={"center"}
            flex="0 1 450px"
          >
            <Box>
              <Avatar
                alt="Grace"
                src={TaylorSwift}
                sx={{ width: "100px", height: "100px", marginLeft: "30px" }}
              />
              <Box marginLeft={4}>
                <Link to="/profile">Dumpling Wei</Link>

                <Typography>Lives in Yangon</Typography>
              </Box>
              <Box display={"flex"} marginTop={1}>
                <Button size="small" variant="contained">
                  Accept
                </Button>
                <Button size="small" variant="contained" sx={{ ml: "20px" }}>
                  Decline
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Start of 2nd card */}
          <Box
            width="45%"
            height={200}
            display="flex"
            border="1px black"
            justifyContent="center"
            alignItems={"center"}
            flex="0 1 450px"
          >
            <Box>
              <Avatar
                alt="Grace"
                src={TaylorSwift}
                sx={{ width: "100px", height: "100px", marginLeft: "30px" }}
              />
              <Box marginLeft={4}>
                <Link to="/profile">Dumpling Wei</Link>

                <Typography>Lives in Yangon</Typography>
              </Box>
              <Box display={"flex"} marginTop={1}>
                <Button size="small" variant="contained">
                  Accept
                </Button>
                <Button size="small" variant="contained" sx={{ ml: "20px" }}>
                  Decline
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            width="45%"
            height={200}
            display="flex"
            border="1px solid blue"
            justifyContent="center"
            alignItems={"center"}
            flex="0 1 450px"
          >
            <Box>
              <Avatar
                alt="Grace"
                src={TaylorSwift}
                sx={{ width: "100px", height: "100px", marginLeft: "30px" }}
              />
              <Box marginLeft={4}>
                <Link to="/profile">Dumpling Wei</Link>

                <Typography>Lives in Yangon</Typography>
              </Box>
              <Box display={"flex"} marginTop={1}>
                <Button size="small" variant="contained">
                  Accept
                </Button>
                <Button size="small" variant="contained" sx={{ ml: "20px" }}>
                  Decline
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            width="45%"
            height={200}
            display="flex"
            border="1px solid blue"
            justifyContent="center"
            alignItems={"center"}
            flex="0 1 450px"
          >
            <Box>
              <Avatar
                alt="Grace"
                src={TaylorSwift}
                sx={{ width: "100px", height: "100px", marginLeft: "30px" }}
              />
              <Box marginLeft={4}>
                <Link to="/profile">Dumpling Wei</Link>

                <Typography>Lives in Yangon</Typography>
              </Box>
              <Box display={"flex"} marginTop={1}>
                <Button size="small" variant="contained">
                  Accept
                </Button>
                <Button size="small" variant="contained" sx={{ ml: "20px" }}>
                  Decline
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            height={200}
            display="flex"
            border="1px solid blue"
            justifyContent="center"
            alignItems={"center"}
            flex="0 1 450px"
          >
            <Box>
              <Avatar
                alt="Grace"
                src={TaylorSwift}
                sx={{ width: "100px", height: "100px", marginLeft: "30px" }}
              />
              <Box marginLeft={4}>
                <Link to="/profile">Dumpling Wei</Link>

                <Typography>Lives in Yangon</Typography>
              </Box>
              <Box display={"flex"} marginTop={1}>
                <Button size="small" variant="contained">
                  Accept
                </Button>
                <Button size="small" variant="contained" sx={{ ml: "20px" }}>
                  Decline
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Friends;
