import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import DataTable from '../../components/DataTable';
import axios from "axios";

const MyScores: NextPage = () => {
    const [info, setInfo] = useState({} as any);
    useEffect(() => {
       const id = localStorage.getItem('id');
       const name = localStorage.getItem('name');
       const deptName = localStorage.getItem('deptName');
       const totCred = localStorage.getItem('totCred');
        setInfo({"آیدی دانشجویی":id,"نام":name,"نام دانشکده":deptName,"اعتبار":totCred})
    }, []);
    return (
        <div style={{direction:"rtl"}}>
            {Object.keys(info).map(key=>(
                <h2 style={{
                    border:".1rem solid #aaa",
                    marginBottom : '1rem',
                    borderRadius:"5rem",
                    padding:"1rem"
                }}>{key} : {info[key]}</h2>
            ))}
        </div>
    );
};

export default MyScores;
