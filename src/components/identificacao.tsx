import react from 'react'
interface IdentificacaoProps {
    alterarNome:react.ChangeEventHandler<HTMLInputElement>
    alterarComponente:react.MouseEventHandler<HTMLButtonElement>

}


const Identificacao: React.FC<IdentificacaoProps> = (props) => {
    return <div>
        <h1>Por favor, identifique-se.</h1>
        <input type="text" onChange={props.alterarNome} />
        <button onClick={props.alterarComponente}>Identifique-se</button>
    </div> 
}

export default Identificacao