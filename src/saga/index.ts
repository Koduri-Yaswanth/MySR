import { fork, all } from "redux-saga/effects";
import watchGetAllRoles from "../routes/Signup/saga/getRoles";
import watchEmailExistsRequest from "../routes/Signup/saga/checkEmailAlreadyExists";
import watchSignUpRequest from "../routes/Signup/saga/signUpVolunteer";
import watchPhoneExistsRequest from "../routes/Signup/saga/checkPhoneAlreadyExists";
import watchLoginRequest from "../routes/Login/saga";
import watchResetPasswordRequest from "../routes/ResetPassword/saga";
import watchGetAddressByLatLong from "../routes/AddAddress/saga/getAddressByLatLong";
import watchAddAddressRequest from "../routes/Maps/saga/addAddress";
import watchDeleteAddressRequest from "../routes/Maps/saga/deleteAddress";
import watchUpdateAddress from "../routes/AddAddress/saga/updateAddress";
import watchGetAddress from "../routes/AddAddress/saga/getAddress";
import watchGetLatLongByAddress from "../routes/AddAddress/saga/getLatLongByAddress";
import watchUpdateProfileRequest from "../routes/MyAccount/saga/updateProfile";
import watchGetAddressByIdRequest from "../routes/MainScreen/saga/GetAddressById";
import watchGetProfileRequest from "../routes/MyAccount/saga/getProfile";
import watchNearByNgo from "../routes/MainScreen/saga/NearByNGO";
import watchDeleteProfile from "../routes/MyAccount/saga/deleteAccount";
import watchChangePasswordRequest from "../routes/MyAccount/saga/changePassword";

export default function* rootSaga() {
    yield all([
      fork(watchGetAllRoles),
      fork(watchEmailExistsRequest),
      fork(watchSignUpRequest),
      fork(watchPhoneExistsRequest),
      fork(watchLoginRequest),
      fork(watchResetPasswordRequest),
      fork(watchGetAddressByLatLong),
      fork(watchGetLatLongByAddress),
      fork(watchAddAddressRequest),
      fork(watchDeleteAddressRequest),
      fork(watchUpdateAddress),
      fork(watchGetAddress),
      fork(watchUpdateProfileRequest),
      fork(watchGetAddressByIdRequest),
      fork(watchGetProfileRequest),
      fork(watchNearByNgo),
      fork(watchDeleteProfile),
      fork(watchChangePasswordRequest),
    ]);
}