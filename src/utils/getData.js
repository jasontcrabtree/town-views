import fetcher from './fetcher';

export default function getData(endpoint) {
  async function fetchData() {
    const dataRes = await fetcher(endpoint);
    return dataRes;
  }
  const data = fetchData();
  return data;
}
