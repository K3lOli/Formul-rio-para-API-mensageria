import { Input } from "@chakra-ui/react";
import "./PrimaryInput.css";

interface PrimaryInputProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  placeholder?: string;
}

export default function PrimaryInput({
  name,
  value,
  onChange,
  label,
  placeholder,
}: PrimaryInputProps) {
  return (
    <>
      <div className="input-container">
        <label className="label">{label}</label>
        <Input
          variant="filled"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
