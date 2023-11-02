import style from 'assets/text/modal.json';

interface ModalTextProps {
  text: string;
}

export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  return <p className={style.classes.modalContentText}>{text}</p>;
};
