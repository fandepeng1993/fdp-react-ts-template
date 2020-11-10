import { all } from 'redux-saga/effects'
import userSaga from '@/store/sagas/user-info'

const rootSagas = function* () {
  yield all([userSaga()])
}

export default rootSagas
