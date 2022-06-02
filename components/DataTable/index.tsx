import React from 'react';
import ReactDataTable, { TableProps } from 'react-data-table-component';
import CircularProgress from '@mui/material/CircularProgress';
import { DataRow } from '../../pages/my-scores/models';

const DataTable = (props: TableProps<DataRow>) => {
  return (
    <ReactDataTable
      noDataComponent='هیچ داده ای دریافت نشد'
      progressComponent={<CircularProgress />}
      {...props}
    />
  );
};

export default DataTable;
