/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from '../services/employeeService'; // Adjust the import path as needed
import { Header } from '../components';

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetchEmployees().then((response) => {
      setEmployeesData(response.data);
    }).catch((error) => {
      console.error('There was an error fetching the employees!', error);
    });
  }, []);

  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Search']; // Ensure 'Add' is included

  const editing = { allowDeleting: true, allowEditing: true };

  const handleActionComplete = (args) => {
    if (args.requestType === 'save') {
      if (args.action === 'add') {
        createEmployee(args.data).then((response) => {
          setEmployeesData([...employeesData, response.data]); // Update state with new data
        }).catch((error) => {
          console.error('There was an error adding the employee!', error);
        });
      } else if (args.action === 'edit') {
        updateEmployee(args.data.id, args.data).then((response) => {
          const updatedData = employeesData.map((item) => (item.id === response.data.id ? response.data : item));
          setEmployeesData(updatedData); // Update state with updated data
        }).catch((error) => {
          console.error('There was an error updating the employee!', error);
        });
      }
    } else if (args.requestType === 'delete') {
      deleteEmployee(args.data[0].id).then(() => {
        const filteredData = employeesData.filter((item) => item.id !== args.data[0].id);
        setEmployeesData(filteredData); // Update state after deletion
      }).catch((error) => {
        console.error('There was an error deleting the employee!', error);
      });
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="100%"
        allowPaging
        allowSorting
        pageSettings={{ pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        actionComplete={handleActionComplete}
      >
        <ColumnsDirective>
          <ColumnDirective field="id" headerText="ID" width="100" textAlign="Right" isPrimaryKey />
          <ColumnDirective field="name" headerText="Name" width="200" />
          <ColumnDirective field="position" headerText="Position" width="150" />
          <ColumnDirective field="email" headerText="Email" width="200" />
          <ColumnDirective field="phone" headerText="Phone" width="150" />
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
