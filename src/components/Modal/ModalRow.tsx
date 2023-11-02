import { ModalInput } from './ModalInput';
import { ModalDropdown } from './ModalDropdown';
import text from 'assets/text/modal.json';

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
    <div className={text.classes.modalContentRow}>
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
