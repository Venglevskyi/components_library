import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async () => {
  const queryParams =
    '?key=14591029-b9abf563857b66fab696140db&q=cat&image_type=photo';

  const { hits } = await (await axios.get(queryParams)).data;

  return hits;
};
