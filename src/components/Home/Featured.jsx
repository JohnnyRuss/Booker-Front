import FeaturedList from './FeaturedComponents/FeaturedList';
import { useGetJSON } from '../../hooks';

function Featured() {
  const { data } = useGetJSON('hotels/getByCity');
 
  return <FeaturedList data={data} />;
}

export default Featured;
