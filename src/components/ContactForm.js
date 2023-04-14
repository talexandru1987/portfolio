import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  return (
    <Grid container component="form" spacing={4} sx={{ marginTop: "10px" }}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          error={!!errors.firstName}
          label="First name"
          variant="outlined"
          helperText={!!errors.firstName ? "Please enter your first name." : ""}
          {...register("firstName", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          error={!!errors.firstName}
          label="Last name"
          variant="outlined"
          helperText={!!errors.firstName ? "Please enter your last name." : ""}
          {...register("lastName", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          error={!!errors.email}
          label="Email"
          variant="outlined"
          helperText={!!errors.email ? "Please enter a valid email." : ""}
          {...register("email", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          id="outlined-textarea"
          label="Write your message"
          multiline
          {...register("message", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" type="submit">
          Send
        </Button>
      </Grid>
    </Grid>
  );
};
