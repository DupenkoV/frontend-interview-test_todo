/* VENDOR */
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalText } from './ModalText';
import { ModalFooter } from './ModalFooter';
import { tasksRemoved, tasksClearedCategories } from '../../slices/tasksSlice';
import { categoriesRemoved } from '../../slices/categoriesSlice';
import { ModalProps } from './Modal';
import { basicFields } from 'types/types';

type ModalRemoveItemProps = Pick<ModalProps, 'active' | 'setActive'> & {
  item: basicFields;
};

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes('categories'),
    text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={'Удаление задачи'} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => {
                dispatch(categoriesRemoved(item.id));
                dispatch(tasksClearedCategories(item.id));
              }
            : () => dispatch(tasksRemoved(item.id))
        }
      />
    </Modal>
  );
};
