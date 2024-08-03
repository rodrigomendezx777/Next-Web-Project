import Identificacao from '@/components/identificacao'
import Saudacao from '@/components/saudacao'
import { ChangeEventHandler, useEffect, useState } from 'react'

const Page = () => {
  const [name, setName] = useState('')
  const [mudarComponente, setMudarComponente] = useState(false)

  const alterarNome:React.ChangeEventHandler<HTMLInputElement>=(evento)=>{
    setName(evento.target.value)
  }

  const alterarComponente:React.MouseEventHandler<HTMLButtonElement> = ( ) =>{
    setMudarComponente(!mudarComponente)
  }

  if (!mudarComponente) return  <Identificacao alterarNome={alterarNome} alterarComponente={alterarComponente} />

  return <Saudacao name={name} alterarComponente={alterarComponente} />
}

export default Page