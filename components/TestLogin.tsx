"use client";
import { useEffect } from "react";

export default function TestLogin() {
  useEffect(() => {
    const testLogin = async () => {
      try {
        const response = await fetch("https://hemolink-9fau.onrender.com/api/usuario/login?email=mendoncasabrina61@gmail.com&senha=1234", {
          method: "POST",
        });

        const text = await response.text();
        console.log("Resposta do servidor:", text);
      } catch (error) {
        console.error("Erro no fetch:", error);
      }
    };

    testLogin();
  }, []);

  return (
    <div className="p-4">
      <h2>Testando login no backend…</h2>
      <p>Abre o console (F12) pra ver o resultado.</p>
    </div>
  );
}
