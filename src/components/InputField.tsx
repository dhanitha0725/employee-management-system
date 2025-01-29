interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => {
    return (
      <div className="form-floating mb-4">
        <input
          type={type}
          className="form-control"
          placeholder={`Enter ${label}`}
          value={value}
          onChange={onChange}
        />
        <label>{label}</label>
      </div>
    );
  };
  
  export default InputField;
  