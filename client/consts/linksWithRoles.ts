import { RoleAdmin, RoleStudent } from './roles';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

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

const watchAndEditStudentsResults = {
  link: 'interact-with-students-results',
  roles: [RoleAdmin],
  name: 'تماشا و تغییر نمرات دانشجویان',
  Icon: EditOutlinedIcon
};

const logout = {
  link: 'logout',
  roles: [RoleStudent],
  name: 'خروج',
  Icon: AddBoxOutlinedIcon
};

const linksWithRoles = [myScroes, chooseClasses, watchAndEditStudentsResults];

export default linksWithRoles;
