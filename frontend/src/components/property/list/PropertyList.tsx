import InfiniteScroll from '../../infinite_scroll/InfiniteScroll';
import { Property } from '../../../utils/types/components';

import { getProperties } from '../../../services/property';
import usePropertyList from './usePropertyList';
import ModalAlert from '../../modal_alert/ModalAlert';

const PropertyList = (): JSX.Element => {
  const { showModal, deleteErrorMessage, renderProperty, handleClose } = usePropertyList();

  return (
    <>
      <InfiniteScroll<Property>
        renderItem={renderProperty}
        requestService={getProperties}
        pageLimit={4}
      />
      <ModalAlert
        showModal={showModal}
        message={deleteErrorMessage}
        onClose={handleClose}
        onHide={handleClose}
      />
    </>
  );
};

export default PropertyList;
