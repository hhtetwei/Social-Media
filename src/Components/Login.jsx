import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Typography,
    TextField,
    Box,
    Button,
    Grid,
    Divider,
} from "@mui/material";


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { authRoute } from '../utils/APIRoutes';



const schema = z.object({
    email: z.string().email({ message: 'Email is Required' }),
    password: z.string().min(1, { message: 'Password is Required' }),
});

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {

        try {

            const { data } = await axios.post(`${authRoute}/login`,
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(data);

            localStorage.setItem("accessToken", data.accessToken);
            navigate('/posts')


        } catch (err) {
            console.log(err);
        }
    }



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

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

                    />
                    {errors.email?.message && <p>{errors.email?.message}</p>}

                    <TextField
                        style={{ marginBottom: 20, marginTop: 20, display: "block" }}
                        color="info"
                        fullWidth
                        variant="outlined"
                        label="Password"
                        name="password"
                        {...register("password")}
                    // value={values.password}
                    // onChange={handleChange}
                    />
                    {errors.password?.message && <p>{errors.password?.message}</p>}


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


export default Login