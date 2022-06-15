import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import DataTable from '../../components/DataTable';
import axios from "axios";
import {useRouter} from "next/router";

const MyScores: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('deptName');
        localStorage.removeItem('totCred');
        router.push("/login")
    }, []);
    return (
        <></>
    );
};

export default MyScores;
