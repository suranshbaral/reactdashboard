/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { addCustomer, getCustomers, updateCustomer, deleteCustomer } from '../services/customerService';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // To store the selected customer

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error('There was an error fetching the customers!', error);
    }
  };

  const handleActionBegin = async (args) => {
    if (args.requestType === 'save') {
      try {
        if (args.action === 'add') {
          const addedCustomer = await addCustomer(args.data);
          setCustomers([...customers, addedCustomer]);
        } else if (args.action === 'edit') {
          const updatedCustomer = await updateCustomer(args.data.id, args.data);
          setCustomers(customers.map((item) => (item.id === updatedCustomer.id ? updatedCustomer : item)));
        }
      } catch (error) {
        console.error('There was an error saving the customer!', error);
      }
    }

    if (args.requestType === 'delete') {
      try {
        await deleteCustomer(args.data[0].id || selectedCustomer.id); // Use selected customer id if args.data[0].id is undefined
        setCustomers(customers.filter((item) => item.id !== (args.data[0].id || selectedCustomer.id)));
      } catch (error) {
        console.error('There was an error deleting the customer!', error);
      }
    }
  };

  const handleRowSelected = (args) => {
    setSelectedCustomer(args.data); // Store the selected customer in state
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customers}
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
          <ColumnDirective field="name" headerText="Name" width="200" />
          <ColumnDirective field="email" headerText="Email" width="200" />
          <ColumnDirective field="phone" headerText="Phone" width="150" />
          <ColumnDirective field="address" headerText="Address" width="200" />
          <ColumnDirective field="earnings" headerText="Earnings" width="150" textAlign="Right" />
          <ColumnDirective field="yearly_sales" headerText="Yearly Sales" width="150" textAlign="Right" />
          <ColumnDirective field="refunds" headerText="Refunds" width="150" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
