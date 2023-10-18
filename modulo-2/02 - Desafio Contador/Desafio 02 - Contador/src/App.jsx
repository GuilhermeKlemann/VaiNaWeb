import styled from "styled-components";
import { useState } from 'react'
import './App.css'

const Botao = styled.button`
  max-width: 10vw;
  min-width: 4vw;
	background-color: purple;
	font-size: 20px;
  margin: 0 1vw;
`;

const TituloPrincipal = styled.h1`
  font-size: 80px;
`;

function App() {
	const [numero, setNumero] = useState(0);

  
	const Diminuir = () => {
		if (numero > 0) {
			setNumero(numero - 1);
		}
	};

	const Adicionar = () => {
		if (numero < 10) {
			setNumero(numero + 1);
		}
	};

	return (
		<div>
			<TituloPrincipal>{numero}</TituloPrincipal>
			<Botao onClick={Diminuir}>-1</Botao>
			<Botao onClick={Adicionar}>+1</Botao>
		</div>
	);
}

export default App
