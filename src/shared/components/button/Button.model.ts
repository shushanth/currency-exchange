type level = 'primary' | 'secondary';
type size = 'small' | 'medium';
interface ButtonProps {
  label: string;
  level: level;
  size?: size;
  onClick?: () => {};
}

export { ButtonProps };
