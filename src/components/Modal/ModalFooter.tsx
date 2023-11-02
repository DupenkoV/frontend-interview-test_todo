import { ModalBtn } from './ModalBtn';
import text from 'assets/text/modal.json';
interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: 'large';
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  clearState,
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <footer className={text.classes.modalContentFooter}>
      <ModalBtn type="primary" size={size || ''} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}>
        Закрыть
      </ModalBtn>
    </footer>
  );
};
