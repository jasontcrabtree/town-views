export default async function fetcher(endpoint) {
  const data = await fetch(endpoint).then((res) => res.json());
  return data;
}
