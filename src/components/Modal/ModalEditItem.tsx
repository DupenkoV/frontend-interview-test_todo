/* VENDOR */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalRow } from './ModalRow';
import { ModalInput } from './ModalInput';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import { tasksUpdated } from '../../slices/tasksSlice';
import { categoriesUpdated } from '../../slices/categoriesSlice';
import { ModalProps } from './Modal';
import { basicFields } from '../../types/types';
import text from 'assets/text/modal.json';

type ModalEditItemProps = Pick<ModalProps, 'active' | 'setActive'> & {
  item: basicFields;
};

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes('categories'),
    [name, setName] = useState(item.name),
    [selected, setSelected] = useState(item.category || ''),
    [description, setDescription] = useState(item.description);

  const title = isCategories
    ? text.header.title.categoryEdit
    : text.header.title.taskEdit;

  return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={title} />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText={text.footer.buttons.save}
        size="large"
        onSubmit={() => {
          dispatch(
            isCategories
              ? categoriesUpdated({ id: item.id, name, description })
              : tasksUpdated({
                  id: item.id,
                  name,
                  description,
                  category: selected,
                })
          );
          setActive(false);
        }}
      />
    </Modal>
  );
};
