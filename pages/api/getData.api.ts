import axios from 'axios';

const fetchData = (query?: string) => {
  return axios({
    method: 'get',
    url: process.env.LINK,
    data: query,
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw new Error(err);
    });
};

export { fetchData };
