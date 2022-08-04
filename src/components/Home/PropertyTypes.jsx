import TypesList from './PropertyTypeComponents/TypesList';
import { useGetJSON } from '../../hooks';

function PropertyTypes() {
  const { data } = useGetJSON('hotels/getByType');

  return <TypesList data={data} />;
}

export default PropertyTypes;
