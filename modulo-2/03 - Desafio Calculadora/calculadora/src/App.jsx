import React, { useState } from 'react'
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const Calculadora = styled.section`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  border: solid;
`

const Display = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0px 15px 0px;
`

const DisplayInput = styled.input`
  border: none;
  width: 60px;
  height: 60px;
  outline: 0;
  margin: 2px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  text-align: right;
  flex: 1;
  font-size: 40px;
  padding: 5px 10px;
  background-color: rgb(64, 64, 64);
`

const Botao = styled(DisplayInput)`
  font-size: 16px;
  background-color: rgb(91, 91, 151);
  text-align: center;
  &:hover {
    background-color: rgb(137, 22, 245);
  }
`
const BotaoEqual = styled(Botao)`
width: 188px;
`

function App() {
  const[value, setValue] = useState('');

  return (
    <Container>
      <Calculadora>
        <form action="">
          <Display>
            <DisplayInput type="text" value={value}/>
          </Display>
          <div>
            <Botao type="button" value="AC" onClick={e => setValue('')}/>
            <Botao type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            <Botao type="button" value="."  onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="/"  onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <Botao type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <Botao type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <Botao type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <Botao type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <Botao type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <BotaoEqual type="button" value="=" onClick={e => setValue(eval(value))}/>
          </div>
        </form>
      </Calculadora>
    </Container>
  )
}

export default App
