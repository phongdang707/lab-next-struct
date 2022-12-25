import { useQuery } from 'react-query';
import { fetchData } from 'pages/api/getData.api';

const useGetData = () => {
  return useQuery('test', () => fetchData());
};

export default useGetData;
