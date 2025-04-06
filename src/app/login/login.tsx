"use client";

import { useState } from "react";
import styles from "./createCount.module.css";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function showNow() {
    setShow(true);
  }

  async function login() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (data.ok) {
      window.location.href = "/dashboard"; // redireciona
    } else {
      alert("Email ou senha inválidos");
    }
  }

  const ComponentLog = () => {
    return (
      <div>
        <h1>Entrar</h1>
        <input
          type="email"
          placeholder="email"
          className={styles.inputCreate}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          className={styles.inputCreate}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <Button onClick={login}>Entrar</Button>
      </div>
    );
  };
  return (
    <div>
      <button onClick={showNow} className="p-2 bg-black text-white">
        Login now
      </button>

      {show && (
        <div className="p-12 border-2 rounded-2 mt-2">
          {ComponentLog()}
          <br />
          <span onClick={() => setShow(false)}>X</span>
        </div>
      )}
    </div>
  );
}
