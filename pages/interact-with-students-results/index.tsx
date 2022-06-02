import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import DataTable from '../../components/DataTable';
import { DataRow } from './models';

const columns: TableColumn<DataRow>[] = [];

const InteractWithStudentsResults: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  useEffect(() => {}, []);
  return <DataTable columns={columns} data={[]} progressPending={isLoading} />;
};

export default InteractWithStudentsResults;
