import React from "react"

interface SaudacaoProps {
    name: String
    alterarComponente: React.MouseEventHandler<HTMLButtonElement>
}


const Saudacao: React.FC<SaudacaoProps> = (props) => {
    return <div>
        <h1>olá, {props.name}</h1>
        <button onClick={props.alterarComponente}>voltar para a identificaçao</button>
        </div>
}

export default Saudacao