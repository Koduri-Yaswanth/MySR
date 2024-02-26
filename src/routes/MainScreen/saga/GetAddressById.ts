import {PayloadAction} from '@reduxjs/toolkit';
import {
  callGetAddressById,
  callGetAddressByIdError,
  callGetAddressByIdSuccess,
} from '../slice/GetAddressById';
import {GetAddressByIdInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* getAddressById(
  action: PayloadAction<GetAddressByIdInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `user/getAddressByAddressId/${userPayload.id}`,
      headers: {
        Authorization: `Bearer ${userPayload?.jwt}`,
      },
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(callGetAddressByIdSuccess(response.data));
      console.log('success');
    } else {
      yield put(callGetAddressByIdError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      callGetAddressByIdError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchGetAddressByIdRequest() {
  yield takeLatest(callGetAddressById.type, getAddressById);
}
