import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid #910791;
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
  width: ${(props: React.CSSProperties) => props.width || "20%"};
  /* width React.CSSProperties ou STRING? */
  //porque ${{}} n da?
  background: linear-gradient(94.99deg, #e7d1d5 -3.88%, #ea2eff 120.78%);
  color: #fff;
  background: "linear-gradient(94.99deg, #e7d1d5 -3.88%, #ea2eff 120.78%)";
  //que ponho aqui??
  color: ${({ color }) => color || "#fff"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media (max-width: 470px) {
    width: 30%;
    font-size: 80%;
    padding: 1.5%;
  }
`;
/* acima caso nao recebamos props no background e cor de letra no botao fica com as cores definidas depois do || */
