import text from 'assets/text/modal.json';

interface ModalTextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
  placeholder = 'Введите описание',
}) => {
  return (
    <div className={text.classes.modaltextareaWrapper}>
      <label htmlFor={text.classes.modaltextarea}>Описание</label>
      <textarea
        id={text.classes.modaltextarea}
        className={text.classes.modaltextarea}
        placeholder={placeholder}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>
  );
};
