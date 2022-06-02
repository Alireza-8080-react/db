import { RoleStudent } from './roles';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const myScroes = {
  link: 'my-scores',
  roles: [RoleStudent],
  name: 'نمرات من',
  Icon: AssignmentIndOutlinedIcon
};

const chooseClasses = {
  link: 'choose-classes',
  roles: [RoleStudent],
  name: 'انتخاب واحد',
  Icon: AddBoxOutlinedIcon
};

const linksWithRoles = [myScroes, chooseClasses];

export default linksWithRoles;
