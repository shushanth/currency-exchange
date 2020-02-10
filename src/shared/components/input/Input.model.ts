type inputType = 'text' | 'number';

interface InputProps {
  val: string | number;
  inputType: inputType;
  onInputChange?: any; //TODO change it to proper type
  placeholderText?: string;
}

export { InputProps };
