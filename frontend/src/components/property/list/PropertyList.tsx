import InfiniteScroll from '../../infinite_scroll/InfiniteScroll';
import { Property, RenderItem } from '../../../utils/types/components';
import PropertyCard from '../card/PropertyCard';
import { getProperties } from '../../../services/property';

const PropertyList = () => {
  const renderProperty: RenderItem<Property> = ({ item }): JSX.Element => {
    return <PropertyCard property={item} />;
  };

  return (
    <InfiniteScroll<Property>
      renderItem={renderProperty}
      requestService={getProperties}
      pageLimit={4}
    />
  );
};

export default PropertyList;
