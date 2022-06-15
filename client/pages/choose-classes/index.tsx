import type { NextPage } from 'next';
import { MouseEvent, useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel, MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { toast } from 'react-toastify';
import axios from "axios";

const ChooseClasses: NextPage = () => {
  const [classes, setClasses] = useState([]);
  const [courses, setCourses] = useState([] as any);
  const [selectedCourse, setSelectedCourse] = useState();
  const [sections, setSections] = useState([] as any);
  const [selectedSection, setSelectedSection] = useState();
  const [semester, setSemester] = useState([] as any);
  const [selectedSemester, setSelectedSemester] = useState();
  const [year, setYear] = useState([] as any);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedClasses, setSelectedClasses] = useState("");
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
      setStudentId(localStorage.getItem("id") as string)
    axios.get("http://localhost:5001/api/teaches?param=course_id")
        .then(res=>{
          const arr = res.data.result.map((item:any)=>item.course_id);
          // @ts-ignore
          setCourses([...new Set(arr)]);
        })
        .catch(err=>console.log(err))
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof classes>) => {
    setSelectedClasses(event.target.value as string)
  };
  const onClick = (event: MouseEvent<HTMLElement>) => {
      axios.post("http://localhost:5001/api/courses",{
          studentId,
          courseId:selectedCourse,
          secId:selectedSection,
          semester:selectedSemester,
          year:selectedYear,
          grade:"-1"
      })
          .then(res=>toast.success('واحدها با موفقیت اضافه شدند'))
          .catch(err=>toast.warn('مشکلی پیش آمد . لطفا دوباره سعی کنید'))

  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>آیدی درس</InputLabel>
        <Select
          labelId='choose-classes-label'
          id='choose-classes'
          value={selectedCourse as any}
          onChange={(e:any)=>{
              setSelectedCourse(e.target.value);
              axios.get(`http://localhost:5001/api/teaches?param=sec_id&condition=course_id="${e.target.value}"`)
                  .then(res=>{
                      const arr = res.data.result.map((item:any)=>item.sec_id);
                      // @ts-ignore
                      setSections([...new Set(arr)]);
                  })
                  .catch(err=>console.log(err))
          }}
          input={<OutlinedInput label='آیدی درس' />}
          // renderValue={(selected) => selected.join(', ')}
        >
          {courses.map((item:any)=>(
              <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        <br />
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='choose-classes2'>آیدی سکشن</InputLabel>
        <Select
            labelId='choose-classes-label2'
            id='choose-classes2'
            disabled={!selectedCourse}
            value={selectedSection as any}
            onChange={(e:any)=>{
                setSelectedSection(e.target.value);
                axios.get(`http://localhost:5001/api/teaches?param=semester&condition=course_id="${selectedCourse}" and sec_id=${e.target.value}`)
                    .then(res=>{
                        const arr = res.data.result.map((item:any)=>item.semester);
                        // @ts-ignore
                        setSemester([...new Set(arr)]);
                    })
                    .catch(err=>console.log(err))
            }}
            input={<OutlinedInput label='آیدی سکشن' />}
            // renderValue={(selected) => selected.join(', ')}
        >
          {sections.map((item:any)=>(
              <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='choose-classes2'>نیمسال تحصیلی</InputLabel>
            <Select
                labelId='choose-classes-label2'
                id='choose-classes2'
                disabled={!selectedSection}
                value={selectedSemester as any}
                onChange={(e:any)=>{
                    setSelectedSemester(e.target.value);
                    axios.get(`http://localhost:5001/api/teaches?param=year&condition=course_id="${selectedCourse}" and sec_id=${selectedSection} and semester="${e.target.value}"`)
                        .then(res=>{
                            console.log(res);
                            const arr = res.data.result.map((item:any)=>item.year);
                            // @ts-ignore
                            setYear([...new Set(arr)]);
                        })
                        .catch(err=>console.log(err))
                }}
                input={<OutlinedInput label='نیمسال تحصیلی' />}
                // renderValue={(selected) => selected.join(', ')}
            >
                {semester.map((item:any)=>(
                    <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='choose-classes2'>سال</InputLabel>
            <Select
                labelId='choose-classes-label2'
                id='choose-classes2'
                disabled={!selectedSemester}
                value={selectedYear as any}
                onChange={(e:any)=>setSelectedYear(e.target.value)}
                input={<OutlinedInput label='سال' />}
                // renderValue={(selected) => selected.join(', ')}
            >
                {year.map((item:any)=>(
                    <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
      <Button onClick={onClick} variant='contained' sx={{marginTop:"1.2rem"}}>
        ثبت
      </Button>
    </>
  );
};

export default ChooseClasses;
