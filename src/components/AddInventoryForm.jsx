/* eslint-disable jsx-a11y/label-has-associated-control */
// AddInventoryForm.jsx

import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const AddInventoryForm = ({ onSubmit }) => {
  const [inventoryData, setInventoryData] = useState({
    ItemName: '',
    Quantity: '',
    Price: '',
    Description: '',
    InventoryImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({ ...inventoryData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInventoryData({ ...inventoryData, InventoryImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(inventoryData).forEach((key) => {
      formData.append(key, inventoryData[key]);
    });
    onSubmit(formData);
    setInventoryData({
      ItemName: '',
      Quantity: '',
      Price: '',
      Description: '',
      InventoryImage: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="ItemName"
            label="Item Name"
            value={inventoryData.ItemName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Quantity"
            label="Quantity"
            value={inventoryData.Quantity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Price"
            label="Price"
            value={inventoryData.Price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="Description"
            label="Description"
            value={inventoryData.Description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            type="file"
            id="InventoryImage"
            name="InventoryImage"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="InventoryImage">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Inventory Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddInventoryForm;
