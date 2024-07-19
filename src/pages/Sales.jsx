/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { addSale, getSales, updateSale, deleteSale } from '../services/salesService';

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null); // To store the selected sale

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const data = await getSales();
      setSales(data);
    } catch (error) {
      console.error('There was an error fetching the sales!', error);
    }
  };

  const handleActionBegin = async (args) => {
    if (args.requestType === 'save') {
      try {
        if (args.action === 'add') {
          const addedSale = await addSale(args.data);
          setSales([...sales, addedSale]);
        } else if (args.action === 'edit') {
          const updatedSale = await updateSale(args.data.id, args.data);
          setSales(sales.map((item) => (item.id === updatedSale.id ? updatedSale : item)));
        }
      } catch (error) {
        console.error('There was an error saving the sale!', error);
      }
    }

    if (args.requestType === 'delete') {
      try {
        await deleteSale(args.data[0].id || selectedSale.id); // Use selected sale id if args.data[0].id is undefined
        setSales(sales.filter((item) => item.id !== (args.data[0].id || selectedSale.id)));
      } catch (error) {
        console.error('There was an error deleting the sale!', error);
      }
    }
  };

  const handleRowSelected = (args) => {
    setSelectedSale(args.data); // Store the selected sale in state
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Sales" />

      <GridComponent
        dataSource={sales}
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
          <ColumnDirective field="commodity" headerText="Commodity" width="200" />
          <ColumnDirective field="date" headerText="Date" width="150" format="yMd" />
          <ColumnDirective field="unit" headerText="Unit" width="150" />
          <ColumnDirective field="quantity_sold" headerText="Quantity Sold" width="150" textAlign="Right" />
          <ColumnDirective field="unit_price" headerText="Unit Price" width="150" textAlign="Right" />
          <ColumnDirective field="total_sales" headerText="Total Sales" width="150" textAlign="Right" />
          <ColumnDirective field="owner" headerText="Owner" width="200" />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Sales;
