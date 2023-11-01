/* VENDOR */
import React, { useRef, useState } from 'react';

/* APPLICATION */
import './Modal.css';

interface ModalProps {
  item?: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  const [maskClicked, setMaskClicked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      setMaskClicked(true);
    }
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (maskClicked && event.target === event.currentTarget) {
      clearState && clearState();
      setActive(false);
    }
    setMaskClicked(false);
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      ref={modalRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <div
        className="modal__content"
        onClick={e => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  );
};
