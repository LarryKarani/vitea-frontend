/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

import axios from 'axios';
import {toast } from 'react-toastify';

import * as types from '../action_types';
import apiRequest from '../common_actions';
import moment from 'moment';

const updateDoctorSuccess = payload => ({
    type: types.UPDATE_DOCTOR_SUCCESS,
    payload,
});

const createUserFailed = (payload) => ({
  type: types.UPDATE_DOCTOR_FAILED,
  payload,
});
       
const startCreateUser = () => ({
    type: 'START_UPDATE_USER',
})

const createUser = user => (dispatch) => {
    dispatch(startCreateUser());
    const { facility_id } = JSON.parse(localStorage.getItem('user'))
    const formtDob = moment(user.dob).format("YYYY-MM-DD")
    user.dob = formtDob
    const facility_token = localStorage.getItem('facility_token')
    return axios.put(`http://vitea.azurewebsites.net/appointment/${facility_id}`, user, {
        headers: {
            'Authorization': `Bearer ${facility_token}`,
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json'
        },
    })
    .then((res) => {
        dispatch(createUserSuccess(res.data));

    })
    .catch((err) => {
        console.log(err)
        toast.error((err.response && err.response.data.message));
        dispatch(createUserFailed(err));
    })
}

export default createUser;