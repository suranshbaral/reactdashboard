import React, { useState } from 'react';
import { TextField, Button, Grid, Input } from '@material-ui/core';

const AddCustomerForm = ({ onSubmit }) => {
  const [customerData, setCustomerData] = useState({
    CustomerID: '',
    CustomerName: '',
    CustomerEmail: '',
    ProjectName: '',
    Status: '',
    CustomerImage: '',
    StatusBg: '',
    Weeks: '',
    Budget: '',
    Location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCustomerData({ ...customerData, CustomerImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setCustomerData({ ...customerData, CustomerImage: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customerData);
    setCustomerData({
      CustomerID: '',
      CustomerName: '',
      CustomerEmail: '',
      ProjectName: '',
      Status: '',
      CustomerImage: '',
      StatusBg: '',
      Weeks: '',
      Budget: '',
      Location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="CustomerName"
            label="Customer Name"
            value={customerData.CustomerName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="CustomerEmail"
            label="Customer Email"
            value={customerData.CustomerEmail}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="ProjectName"
            label="Project Name"
            value={customerData.ProjectName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Status"
            label="Status"
            value={customerData.Status}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Location"
            label="Location"
            value={customerData.Location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Budget"
            label="Budget"
            value={customerData.Budget}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Weeks"
            label="Weeks"
            value={customerData.Weeks}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            type="file"
            inputProps={{ accept: 'image/*' }}
            onChange={handleImageChange}
          />
          {customerData.CustomerImage && (
            <div>
              <img src={customerData.CustomerImage} alt="Customer" style={{ width: '100px', height: '100px' }} />
              <Button variant="contained" color="secondary" onClick={handleRemoveImage}>
                Remove Photo
              </Button>
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Customer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCustomerForm;
