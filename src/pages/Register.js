import {
  Typography,
  TextField,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authRoute } from "../utils/APIRoutes";

const Register = () => {
  // const [value, setValue] = useState(dayjs("2008-01-1"));
  const [date, setDate] = useState(dayjs(Date.now()));
  const navigate = useNavigate();
  // const [gender, setGender] = useState("");
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${authRoute}/register`, {
        name: values.Name,
        email: values.Email,
        password: values.Password,
        DOB: date.format("YYYY/MM/DD"),
        gender: values.gender,
      });

      localStorage.setItem("accessToken", data.accessToken);

      return navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <Typography variant="h5">Register To Use Our Blog</Typography>
          <TextField
            style={{ marginBottom: 20, marginTop: 20, display: "block" }}
            color="info"
            fullWidth
            variant="outlined"
            label="Name"
            value={values.Name}
            name="Name"
            onChange={handleChange}
          />
          <TextField
            style={{ marginBottom: 20, marginTop: 20, display: "block" }}
            color="info"
            fullWidth
            variant="outlined"
            label="Email"
            name="Email"
            value={values.Email}
            onChange={handleChange}
          />
          <TextField
            style={{ marginBottom: 20, marginTop: 20, display: "block" }}
            color="info"
            fullWidth
            variant="outlined"
            label="Password"
            name="Password"
            value={values.Password}
            onChange={handleChange}
          />

          <Box width={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: 1 }}
                label="Select Your Date Of Birth"
                value={date}
                onChange={(newValue) => setDate(dayjs(new Date(newValue)))}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Box>
          <FormControl
            style={{
              marginBottom: 20,
              marginTop: 20,
              display: "block",
              alignSelf: "start",
            }}
          >
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                control={<Radio name="gender" value="male" />}
                label="Male"
              />

              <FormControlLabel
                value="Female"
                control={<Radio name="gender" value="female" />}
                label="Female"
              />

              <FormControlLabel
                value="Prefer Not To Say"
                control={<Radio name="gender" value="prefer not to say" />}
                label="Prefer Not To Say"
              />
            </RadioGroup>
          </FormControl>
          <div>
            <Button
              sx={{ marginTop: 3, borderRadius: 3, marginRight: "28px" }}
              size="medium"
              variant="contained"
              type="submit"
            >
              Register
            </Button>
            <Button
              sx={{ marginTop: 3, borderRadius: 3, marginLeft: "12px" }}
              size="medium"
              variant="outlined"
            >
              <Link style={{ textDecoration: "none" }} to={"/auth/login"}>
                Cancel
              </Link>
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Register;
