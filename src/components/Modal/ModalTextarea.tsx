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
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder={placeholder}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>
  );
};
