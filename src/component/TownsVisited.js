import React, { useEffect, useState } from 'react';

function useLoadData() {
  // Loading, Data, Error states

  // Set loading, useEffect runs on render, changes loading state, when useEffect is finished change loading state and render data if any, if error render error message

  // This is a manual implementation of SWR

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/town/getTowns')
      .then((res) => res.json())
      .then((townData) => {
        setData(townData);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    data,
    error,
  };
}

function TownsVisited() {
  const { data, error, loading } = useLoadData();
  const faunaData = data;

  console.log(faunaData);

  if (loading)
    return (
      <div>
        <p>LOADING, PLEASE WAIT</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      <div>
        {faunaData?.data?.map((cityVisit) => (
          <div key={cityVisit.ts}>{cityVisit.data.townName}</div>
        ))}

        {faunaData ? (
          faunaData?.data?.map((cityVisit) => (
            <div key={cityVisit.ts}>{cityVisit.data.townName}</div>
          ))
        ) : (
          <p>No Towns</p>
        )}
      </div>
    </div>
  );
}

export default TownsVisited;
