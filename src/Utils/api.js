import axios from 'axios';

const api = async (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page,
    key: '37104201-a2ad5f6b4959c494d41dc31b6',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const { data } = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  if (data.totalHits === 0) {
    throw new Error('Ничего не найдено');
  }
  return data;
};

export default api;