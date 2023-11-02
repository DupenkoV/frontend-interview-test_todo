/* VENDOR */
import React, { useRef, useState, MouseEvent, FC } from 'react';
import cn from 'classnames';
/* APPLICATION */
import './Modal.css';

/*ASSETS*/
import text from 'assets/text/modal.json';

export interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  const [maskClicked, setMaskClicked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalClassName = cn(text.classes.modal, {
    active: active,
  });

  const handleMouseDown = (event: MouseEvent) => {
    if (event.target === modalRef.current) {
      setMaskClicked(true);
    }
  };

  const handleMouseUp = (event: MouseEvent) => {
    if (maskClicked && event.target === event.currentTarget) {
      clearState && clearState();
      setActive(false);
    }
    setMaskClicked(false);
  };

  return (
    <div
      className={modalClassName}
      ref={modalRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <div
        className={text.classes.content}
        onClick={e => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  );
};
