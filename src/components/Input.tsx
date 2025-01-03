type InputProps = {
  value: string;
  type?: string;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
};

const Input = ({
  value,
  type = "text",
  className = "",
  onChange,
  onKeyDown,
}: InputProps) => {
  return (
    <input
      className={`border border-gray-300 rounded p-2 ${className}`}
      type={type}
      value={value}
      onKeyDown={onKeyDown}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
