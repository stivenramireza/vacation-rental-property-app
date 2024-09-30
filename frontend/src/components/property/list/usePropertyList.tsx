/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { deleteProperty } from '../../../services/property';
import { Property, RenderItem } from '../../../utils/types/components';
import PropertyCard from '../card/PropertyCard';

const usePropertyList = (): {
  showModal: boolean;
  deleteErrorMessage: string;
  renderProperty: RenderItem<Property>;
  handleClose: () => void;
} => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteErrorMessage, setDeleteErrorMessage] = useState<string>('');

  const handleDeleteProperty = async (propertyId: string) => {
    try {
      await deleteProperty(propertyId);
      window.location.reload();
    } catch (error: any) {
      console.error(error);

      setDeleteErrorMessage('Error to delete the property. Try again!');
      setShowModal(true);
    }
  };

  const handleClose = (): void => setShowModal(false);

  const renderProperty: RenderItem<Property> = ({ item }): JSX.Element => {
    return <PropertyCard key={item.id} property={item} onDelete={handleDeleteProperty} />;
  };

  return {
    showModal,
    deleteErrorMessage,
    renderProperty,
    handleClose
  };
};

export default usePropertyList;
