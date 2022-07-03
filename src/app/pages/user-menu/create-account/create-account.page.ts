import userTableState from './create-account.table';
import userForm from './create-account.form';

const userPage = {
  title: 'create user account',
  type: 'default page',
  form: userForm.userForm,
  table: userTableState,
};

export default userPage;