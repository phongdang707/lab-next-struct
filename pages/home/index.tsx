import useGetData from 'hooks/useGetData';

const Home = () => {
  const { data, isLoading, error } = useGetData();
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default Home;
