"use client"

//import { signUp } from "../../../server/user"
import styles from "./createCount.module.css"
import { useState } from "react"


export default function CreateCount() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false)


  async function Cadastrar() {
    await fetch("/api/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nome, email: email, password: senha }),
    });
    alert(`cadastrado com sucesso bem vindo ${nome}`)
    setNome("");
    setEmail("");
    setSenha("");

  }

  function showNow() {
    setShow(true)
  }

  const ComponentCad = () => {
    return (
      <div>
        <h1>inscrever-se</h1>
        <input required type="text" className={styles.inputCreate} placeholder="seu nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input required type="email" className={styles.inputCreate} placeholder="seu email" value={email} onChange={e => setEmail(e.target.value)} />
        <input required type="password" className={styles.inputCreate} placeholder="sua senha" value={senha} onChange={e => setSenha(e.target.value)} />
        <button className={styles.inputCreate} onClick={Cadastrar} type="submit">Cadastrar</button>
      </div>
    );
  }

  return (
    <div className="p-2 flex flex-col items-center"  >
      <button onClick={showNow} className="p-2 bg-black text-white">Cadastrar</button>

      {show && <div className="p-12 border-2 rounded-2 mt-2">
        {ComponentCad()}
        {<span onClick={() => setShow(false)} className="cursor-pointer">X</span>}
      </div>}
    </div>
  )
}   