import { IReduxAction } from '../types'

export const GET_USER_PENDING = 'GET_USER_PENDING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'

export const getUser = (): IReduxAction => ({
    type: GET_USER_PENDING,
})

export const getUserSuccess = (payload: any): IReduxAction => ({
    payload,
    type: GET_USER_SUCCESS,
})

export const getUserFailed = (): IReduxAction => ({
    type: GET_USER_FAILED,
})
