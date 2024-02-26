import {PayloadAction} from '@reduxjs/toolkit';
import {
  callEmailExists,
  emailExistsError,
  emailExistsSuccess,
} from '../slice/checkEmailAlreadyExists';
import {EmailExistsInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* emailExists(
  action: PayloadAction<EmailExistsInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `user/email/exists?email=${userPayload.email}`,
    };


    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(emailExistsSuccess(response.data));
      console.log('success');
    } else {
      yield put(emailExistsError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      emailExistsError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchEmailExistsRequest() {
  yield takeLatest(callEmailExists.type, emailExists);
}
