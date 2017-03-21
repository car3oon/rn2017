import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import getPeople from './api'

export function getData () {
  console.log('FETCHING_DATA')
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess (data) {
  console.log('FETCHING_DATA_SUCCESS')
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  }
}

export function getDataFailure () {
  console.log(FETCHING_DATA_FAILURE)
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData () {
  return (dispatch) => {
    dispatch(getData())
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}
