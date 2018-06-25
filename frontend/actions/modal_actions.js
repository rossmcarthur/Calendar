export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

export const showModal = component => {
  return {
    type: SHOW_MODAL,
    component
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
