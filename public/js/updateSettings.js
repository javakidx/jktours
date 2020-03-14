/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alters';

// Type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url:
        '/api/v1/users/' + (type === 'data' ? 'updateMe' : 'updateMyPassword'),
      data: data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated sucessfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
