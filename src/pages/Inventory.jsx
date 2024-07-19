/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { addInventory, getInventory, updateInventory, deleteInventory } from '../services/inventoryService';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // To store the selected item

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const data = await getInventory();
      setInventory(data);
    } catch (error) {
      console.error('There was an error fetching the inventory!', error);
    }
  };

  const handleActionBegin = async (args) => {
    if (args.requestType === 'save') {
      try {
        const updatedItem = args.data.id
          ? await updateInventory(args.data.id, args.data)
          : await addInventory(args.data);
        setInventory(inventory.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      } catch (error) {
        console.error('There was an error updating or adding the inventory item!', error);
      }
    }

    if (args.requestType === 'delete') {
      try {
        await Promise.all(args.data.map((item) => deleteInventory(item.id)));
        setInventory(inventory.filter((item) => !args.data.some((deletedItem) => deletedItem.id === item.id)));
      } catch (error) {
        console.error('There was an error deleting the inventory item!', error);
      }
    }
  };

  const handleRowSelected = (args) => {
    setSelectedItem(args.data); // Store the selected item in state
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Inventory" />

      <GridComponent
        dataSource={inventory}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={{ type: 'Single', persistSelection: true }} // Specify type of selection
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
        editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true }}
        allowSorting
        actionBegin={handleActionBegin}
        rowSelected={handleRowSelected} // Handle row selection event
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="50" /> {/* Selection column */}
          <ColumnDirective field="id" headerText="ID" width="100" textAlign="Right" isPrimaryKey />
          <ColumnDirective field="name" headerText="Name" width="200" />
          <ColumnDirective field="category" headerText="Category" width="150" />
          <ColumnDirective field="quantity" headerText="Quantity" width="120" textAlign="Right" />
          <ColumnDirective field="price" headerText="Price (Rs)" width="120" format="N2" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Inventory;
