import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import useForm from "../hooks/useForm";
import Validation from "../hooks/Validation";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import GroupIcon from "@mui/icons-material/Group";

const defaultTheme = createTheme();

export default function EventRegistrationForm() {
  const initialValues = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "",
    guestName: "",
  };

  const { values, handleChange } = useForm(initialValues);
  const { errors, validate } = Validation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validate(values)) {
      navigate("/submitted", { state: { ...values } }); // Pass form values to /submitted
    }
  };

  const backgroundImageUrl = "https://picsum.photos/1200/800";

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Event Registration
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                autoFocus
                InputProps={{
                  startAdornment: (
                    <PersonIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  ),
                }}
              />
              {errors.name && (
                <Typography color="error">{errors.name}</Typography>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <EmailIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  ),
                }}
              />
              {errors.email && (
                <Typography color="error">{errors.email}</Typography>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                name="age"
                label="Age"
                type="number"
                id="age"
                value={values.age}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <DisplaySettingsIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  ),
                }}
              />
              {errors.age && (
                <Typography color="error">{errors.age}</Typography>
              )}

              <FormControl fullWidth margin="normal" required>
                <InputLabel id="attendingWithGuest-label">
                  Are you attending with a guest?
                </InputLabel>
                <Select
                  labelId="attendingWithGuest-label"
                  id="attendingWithGuest"
                  name="attendingWithGuest"
                  value={values.attendingWithGuest}
                  onChange={handleChange}
                  label="Are you attending with a guest?"
                  startAdornment={
                    <GroupIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  }
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
              {errors.attendingWithGuest && (
                <Typography color="error">
                  {errors.attendingWithGuest}
                </Typography>
              )}

              {values.attendingWithGuest === "Yes" && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="guestName"
                  label="Guest Name"
                  id="guestName"
                  value={values.guestName}
                  onChange={handleChange}
                />
              )}

              <div
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
                onClick={handleSubmit}
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span
                  className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"
                  style={{ zIndex: 2 }}
                >
                  Register
                </span>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
