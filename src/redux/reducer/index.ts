import {combineReducers} from '@reduxjs/toolkit';
import getAllRolesReducer from '../../routes/Signup/slice/getRoles';
import emailExistsReducer from '../../routes/Signup/slice/checkEmailAlreadyExists';
import signUpReducer from '../../routes/Signup/slice/signUpVolunteer';
import phoneExistsReducer from '../../routes/Signup/slice/checkPhoneAlreadyExists';
import loginReducer from '../../routes/Login/slice';
import resetPasswordReducer from '../../routes/ResetPassword/slice';
import getAddressByLatLongReducer from '../../routes/AddAddress/slice/getAddressByLatLong';
import addAddressReducer from '../../routes/Maps/slice/addAddress';
import deleteAddressReducer from '../../routes/Maps/slice/deleteAddress';
import updateAddressReducer from '../../routes/AddAddress/slice/updateAddress';
import getAddressReducer from '../../routes/AddAddress/slice/getAddress';
import getLatLongByAddressReducer from '../../routes/AddAddress/slice/getLatLongByAddress';
import updateProfileReducer from '../../routes/MyAccount/slice/updateProfile';
import getProfileReducer from '../../routes/MyAccount/slice/getProfile';
import getAddressByIdReducer from '../../routes/MainScreen/slice/GetAddressById';
import nearByNgoReducer from '../../routes/MainScreen/slice/NearByNGO';
import deleteReducer from '../../routes/MyAccount/slice/deleteAccount';
import changePasswordReducer from '../../routes/MyAccount/slice/changePassword';

const rootReducer = combineReducers({
  getAllRoles: getAllRolesReducer,
  emailExists: emailExistsReducer,
  phoneExists: phoneExistsReducer,
  signUp: signUpReducer,
  login: loginReducer,
  resetPassword: resetPasswordReducer,
  getAddressByLatLong: getAddressByLatLongReducer,
  getLatLongByAddress: getLatLongByAddressReducer,
  addAddress: addAddressReducer,
  deleteAddress: deleteAddressReducer,
  updateAddress: updateAddressReducer,
  getAddress: getAddressReducer,
  updateProfile: updateProfileReducer,
  getProfile: getProfileReducer,
  getAddressById: getAddressByIdReducer,
  nearByNgos: nearByNgoReducer,
  deleteProfile: deleteReducer,
  changeUserPassword: changePasswordReducer,
});

export default rootReducer;
