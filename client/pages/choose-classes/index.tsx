import type { NextPage } from 'next';
import { MouseEvent, useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { toast } from 'react-toastify';

const ChooseClasses: NextPage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {}, []);

  const handleChange = (event: SelectChangeEvent<typeof classes>) => {};
  const onClick = (event: MouseEvent<HTMLElement>) => {
    toast.success('واحد ها با موفقیت اضافه شدند');
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>انتخاب واحد ها</InputLabel>
        <Select
          labelId='choose-classes-label'
          id='choose-classes'
          multiple
          value={selectedClasses}
          onChange={handleChange}
          input={<OutlinedInput label='انتخاب واحد ها' />}
          renderValue={(selected) => selected.join(', ')}
        >
          {/* {classes.map((class) => (
              <MenuItem key={index} value={'fsdfds'}>
              <Checkbox checked={selectedClasses.indexOf(class) > -1} />
              <ListItemText primary={'fsdfds'} />
              </MenuItem>
            ))} */}
        </Select>
        <br />
        <Button onClick={onClick} variant='contained'>
          ثبت
        </Button>
      </FormControl>
    </>
  );
};

export default ChooseClasses;
