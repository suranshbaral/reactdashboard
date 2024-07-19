/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import React from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid, makeStyles } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
  },
  card: {
    padding: theme.spacing(4),
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
}));

const AddEmployeeForm = () => {
  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log('Form data:', data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h2 className="mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="designation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Designation"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth margin="dense" required>
                <InputLabel id="country-label">Country</InputLabel>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="country-label"
                      label="Country"
                      defaultValue=""
                    >
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="UK">UK</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="hireDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Hire Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
          <div style={{ marginTop: '16px' }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '16px' }}>
              Add Employee
            </Button>
            <Button type="button" variant="outlined" color="secondary" onClick={() => reset()}>
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
