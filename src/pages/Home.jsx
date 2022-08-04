import { Hero, Featured, PropertyTypes, UserRated } from '../components';
import { Subscribe } from '../components/Layouts';

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <PropertyTypes />
      <UserRated />
      <Subscribe />
    </>
  );
}

export default Home;
