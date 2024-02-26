import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {DeleteProfileInfo} from '../../../types';
import {
  callDeleteProfile,
  callDeleteSuccess,
  callDeleteError,
} from '../slice/deleteAccount';

function* deleteProfile(
  action: PayloadAction<DeleteProfileInfo>,
): SagaReturnType<any> {

  try {
    const userPayload = action.payload;
    console.log(userPayload);
    const requestParams: AxiosProps = {
      type: 'DELETE',
      url: `user/${userPayload.userId}`,
      headers: {
        Authorization: `Bearer ${userPayload?.jwt}`,
      },
    };
    console.log('Delete SAGA 1');
    const response: AxiosResponse = yield call(requestApi, requestParams);
    const {data} = response;
    if (data) {
      yield put(callDeleteSuccess(response.data));
      console.log('Delete SAGA 2');
    } else {
      yield put(callDeleteError(response.data));
    }
  } catch (error) {
    yield put(
      callDeleteError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchDeleteProfile() {
  yield takeLatest(callDeleteProfile.type, deleteProfile);
}
