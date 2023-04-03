import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Divider,
} from "@mui/material";

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //   const [values, setValues] = useState({
  //     email: "",
  //     password: "",
  //   });

  // const handleChange = (e) => {
  //   setValues((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const onSubmit = async (values) => {
    // console.log(values);
    // try {
    //   const data = await fetch("http://localhost:8000/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });

    //   console.log({ data });
    //   if (data.status === true) {
    //     localStorage.setItem("accessToken", data.accessToken);
    //     navigate("/");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }


  return (
    <div>
      <form

        onSubmit={handleSubmit(onSubmit)}

      >
        <Box
          display="flex"
          flexDirection={"column"}
          mx="auto"
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={2}
          bgcolor="#fafafa"
          sx={{ border: 1, borderColor: "text.primary" }}
        >
          <Typography variant="h5">Login To Use Our Blog</Typography>
          <TextField
            style={{ marginBottom: 20, marginTop: 20, display: "block", textAlign: "left" }}
            color="info"
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            {...register("email")}
            // value={values.email}
            // onChange={handleChange}
            type="email"
            errorMessage="Email should not be empty!"

          />
          {/* {
            !values.email < 0 && (<label>email is required</label>)
          } */}
          {/* <label>Email is required!</label> */}
          <TextField
            style={{ marginBottom: 20, marginTop: 20, display: "block" }}
            color="info"
            fullWidth
            variant="outlined"
            label="Password"
            name="password"
          // {...register("email")}
          // value={values.password}
          // onChange={handleChange}
          />

          <Grid container justify="space-between">
            <Typography inline variant="body2" align="left">
              <Link style={{ textDecoration: "none" }} to="/">
                {"Forgot Password?"}
              </Link>
            </Typography>
          </Grid>

          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            size="medium"
            variant="contained"
            type="submit"
          >
            Login
          </Button>

          <Divider variant="middle" />
          <Box
            display={"flex"}
            margin="auto"
            alignItems="center"
            justifyContent={"center"}
            marginTop={2}
            padding={2}
          >
            <Typography>
              <Link to="/auth/register">{"Create New Account"}</Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </div>
  );
}


export default AuthForm;
