import React, { useState } from 'react';

function NewTownVisit() {
  const [townName, setTownName] = useState('');

  function useSetTownName(e) {
    setTownName(e.target.value);
  }

  console.log(townName);

  async function addNewTownVisit() {
    // const res = await fetch('/api/town/addTown', {
    await fetch('/api/town/addTown', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        townName,
      }),
    });

    setTownName('');

    // const result = await res.json();
    // console.log(result);
  }

  return (
    <form autoComplete="off">
      <label htmlFor="townName">
        Town Name
        <input
          type="text"
          id="townName"
          value={townName}
          onChange={useSetTownName}
        />
      </label>
      <button type="button" onClick={addNewTownVisit}>
        Save Visit
      </button>
    </form>
  );
}

export default NewTownVisit;
