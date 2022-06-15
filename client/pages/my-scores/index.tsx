import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import DataTable from '../../components/DataTable';
import { DataRow } from './models';
import axios from "axios";

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Course ID',
    selector: row => row.course_id,
  },
  {
    name: 'Section ID',
    selector: row => row.sec_id,
  },
  {
    name: 'Grade',
    selector: row => row.grade,
  },
  {
    name: 'Semester',
    selector: row => row.semester,
  },
  {
    name: 'Year',
    selector: row => row.year,
  }
];

const MyScores: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scoresData, setScoresData] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem('id');
    axios.get(`http://localhost:5001/api/grades?id=${id}`)
        .then(res=>{
          setScoresData(res.data.result);
          console.log(res.data.result);
        })
        .catch(err=>console.log(err))

  }, []);
  return <DataTable  columns={columns} data={scoresData} progressPending={isLoading} />;
};

export default MyScores;
