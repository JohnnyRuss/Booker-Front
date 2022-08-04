import { useParams } from 'react-router-dom';
import { Container, Header, Gallery, Info } from '../components/Hotel';
import { Subscribe } from '../components/Layouts';
import { useGetJSON } from '../hooks';

function Hotel() {
  const { id } = useParams();
  const { data } = useGetJSON(`/hotels/${id}`);

  return (
    <>
      <Container>
        <Header data={data} />
        <Gallery images={data?.images} />
        <Info data={data} />
      </Container>
      <Subscribe />
    </>
  );
}

export default Hotel;
