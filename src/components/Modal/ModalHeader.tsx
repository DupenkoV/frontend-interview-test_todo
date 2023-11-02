import close from '../../icons/close.svg';
import text from 'assets/text/modal.json';
interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  clearState,
  title,
  setActive,
}) => {
  return (
    <header className={text.classes.modalContentHeader}>
      <h4 className={text.classes.modalContentTitle}>{title}</h4>
      <button
        className={text.classes.modalContentHeaderBtn}
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}>
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
