/* VENDOR */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import text from 'assets/text/modal.json';
/* APPLICATION */
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalInput } from './ModalInput';
import { ModalRow } from './ModalRow';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import { tasksAdded } from '../../slices/tasksSlice';
import { categoriesAdded } from '../../slices/categoriesSlice';
import { ModalProps } from './Modal';

type ModalCreateItemProps = Pick<ModalProps, 'active' | 'setActive'>;

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes('categories'),
    [name, setName] = useState(''),
    [selected, setSelected] = useState(''),
    [description, setDescription] = useState('');
  const title_placeholder = isCategories
    ? text.header.title.categoryCreate
    : text.header.title.taskCreate;

  function clearState() {
    setName('');
    setDescription('');
    setSelected('');
  }

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={title_placeholder}
      />
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
        placeholder={title_placeholder}
      />
      <ModalFooter
        setActive={setActive}
        clearState={clearState}
        submitBtnText={text.footer.buttons.create}
        size="large"
        onSubmit={
          name
            ? () => {
                dispatch(
                  isCategories
                    ? categoriesAdded({ name, description })
                    : tasksAdded({
                        name,
                        description,
                        category: selected,
                      })
                );
                clearState();
                setActive(false);
              }
            : () => {}
        }
      />
    </Modal>
  );
};
