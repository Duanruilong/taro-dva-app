import Request from '../../utils/request';

export const demo = data => Request({
  url: '/homepage-v3',
  method: 'GET',
  data,
});
