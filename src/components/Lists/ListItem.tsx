/* VENDOR */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import text from 'assets/text/modal.json';
/* APPLICATION */
import edit from '../../icons/edit.svg';
import remove from '../../icons/remove.svg';
import { selectAllCategories } from '../../slices/categoriesSlice';
import { ModalEditItem } from '../Modal/ModalEditItem';
import { ModalRemoveItem } from '../Modal/ModalRemoveItem';

interface ListItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useSelector(selectAllCategories),
    [editModalActive, setEditModalActive] = useState(false);
  let [removeModalActive, setRemoveModalActive] = useState(false);

  return (
    <>
      <li className={text.classes.listItem}>
        <div className={text.classes.listItemCol1}>
          <div className={text.classes.listItemCol1Row1}>
            <h3 className={text.classes.listItemCol1Row1Title}>{item.name}</h3>
            {item.category && (
              <span className={text.classes.listItemCol1Row1Category}>
                {
                  categories.find(category => category.id === item.category)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className={text.classes.listItemCol1Row2}>
            {item.description}
          </div>
        </div>
        <div className={text.classes.listItemCol2}>
          <button
            className={text.classes.listItemCol2Btn}
            onClick={() => {
              setEditModalActive(true);
            }}>
            <img src={edit} alt="edit" />
          </button>
          <button
            className={text.classes.listItemCol2Btn}
            onClick={() => {
              setRemoveModalActive(true);
            }}>
            <img src={remove} alt="remove" />
          </button>
        </div>
        <ModalEditItem
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
