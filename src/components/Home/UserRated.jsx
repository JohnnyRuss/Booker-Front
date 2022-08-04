import RatedList from './UserRated/RatedList';
import { useGetJSON } from '../../hooks';

function UserRated() {
  const { data } = useGetJSON('hotels/topRated');

  return <RatedList data={data} />;
}

export default UserRated;
