import axiosInstance from './axios';

export const diagnosePlant = (formData: FormData) => {
  return axiosInstance.post('/diagnose', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};