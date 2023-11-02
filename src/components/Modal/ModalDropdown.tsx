/* VENDOR */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import text from 'assets/text/modal.json';
import cn from 'classnames';

/* APPLICATION */
import down from '../../icons/down.svg';
import { selectAllCategories } from '../../slices/categoriesSlice';

interface ModalDropdownProps {
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false),
    options = useSelector(selectAllCategories);

  const dropdownBtnClassNames = cn(text.classes.dropdownBtn, {
    placeholder: !selected,
  });

  return (
    <div
      className={text.classes.dropdown}
      onClick={() => setIsActive(!isActive)}>
      <span className={text.classes.dropdownLabel}>Категория</span>
      <div className={dropdownBtnClassNames}>
        {options.find(option => option.id === selected)?.name ||
          text.dropdowns.category}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className={text.classes.dropdownContent}>
          {options.map(option => (
            <div
              className={text.classes.dropdownItem}
              onClick={() => {
                setSelected(option.id);
                setIsActive(false);
              }}
              key={option.id}>
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
