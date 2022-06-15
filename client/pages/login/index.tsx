import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useRouter } from 'next/router'
import {toast} from "react-toastify";

export default function SignIn() {
    const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {id} = e.target as any;
    const idVal = id.value;
    axios.post("http://localhost:5001/api/auth/login",{
        id : idVal
    }).then(res=>{
        const [data] = res.data.result;
        console.log(data);
        localStorage.setItem('id', data.ID);
        localStorage.setItem('name', data.name);
        localStorage.setItem('deptName', data.dept_name);
        localStorage.setItem('totCred', data.tot_cred);
        router.push("/my-scores");
        toast.success("با موفقیت وارد شدید")
    })
      .catch(err=>toast.warn("آیدی وارد شده اشتباه است"))
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        ورود
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='آیدی دانشجو'
          name='id'
          autoComplete='id'
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='رمز عبور'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          ورود
        </Button>
      </Box>
    </>
  );
}
