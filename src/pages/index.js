import NewTownVisit from '../component/NewTownVisit';
import TownsVisited from '../component/TownsVisited';

export default function Home() {
  return (
    <main>
      <h1>Fauna Data</h1>
      <hr />
      <TownsVisited />
      <hr />
      <NewTownVisit />
    </main>
  );
}
