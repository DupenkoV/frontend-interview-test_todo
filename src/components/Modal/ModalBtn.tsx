import './ModalBtn.css';
import cn from 'classnames';
import text from 'assets/text/modal.json';

interface ModalBtnProps {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  children,
  size,
  onClick,
}) => {
  const btnClass = cn(text.classes.modalbtn, {
    large: size === text.classes.large,
    primary: type === text.classes.primary,
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
