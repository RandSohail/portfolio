import styled from 'styled-components';

const Button = styled.a`
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  text-decoration: none;
  padding: 12px 30px;
  color: var(--color1);
  font-size: 18px;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--monospace-font);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(181, 107, 227, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Button;
