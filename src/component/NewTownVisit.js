import React, { useState } from 'react';

function NewTownVisit() {
  // const [townName, setTownName] = useState('');
  const [townVisit, setTownVisit] = useState({
    username: '',
    townName: '',
    cityName: '',
    visited: false,
    description: '',
    dateVisited: Date.now(),
    photoURL: '',
  });

  /*   function useSetTownName(e) {
    setTownName(e.target.value);
  } */

  function handleUpdateTownVisitState(e) {
    setTownVisit({
      ...townVisit,
      [e.target.name]: e.target.value,
    });
  }

  async function addNewTownVisit() {
    console.log(townVisit);

    // const res = await fetch('/api/town/addTown', {
    await fetch('/api/town/addTown', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        townVisit,
      }),
    });

    // setTownVisit('');
    // setTownVisit({ username: '' });

    // setTownName('');

    // const result = await res.json();
    // const newTownVisits =
    // console.log(result);
  }

  return (
    <form autoComplete="off">
      <label htmlFor="username">
        Name
        <input
          type="text"
          id="username"
          name="username"
          value={townVisit.username}
          onChange={handleUpdateTownVisitState}
        />
      </label>
      <label htmlFor="townName">
        Area Name
        <input
          type="text"
          id="townName"
          name="townName"
          value={townVisit.townName}
          onChange={handleUpdateTownVisitState}
        />
      </label>
      <label htmlFor="description">
        Description of Suburb
        <input
          type="text"
          id="description"
          name="description"
          value={townVisit.description}
          onChange={handleUpdateTownVisitState}
        />
      </label>
      <button type="button" onClick={addNewTownVisit}>
        Save Visit
      </button>
    </form>
  );
}

export default NewTownVisit;
