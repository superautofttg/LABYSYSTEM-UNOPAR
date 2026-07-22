import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <main className="bg-mesh min-h-screen flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-md p-8 animate-fade-in relative overflow-hidden">
        
        {/* Decoração de fundo */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl"></div>

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Acesso Restrito</h1>
          <p className="text-sm text-gray-500">Insira suas credenciais para acessar o LEACLab</p>
        </div>

        <form className="flex flex-col gap-5 relative z-10">
          
          <div className="input-group">
            <label htmlFor="email">Email ou CPF</label>
            <input 
              type="text" 
              id="email" 
              className="input-premium" 
              placeholder="exemplo@unopar.br" 
              required 
            />
          </div>

          <div className="input-group">
            <div className="flex justify-between">
              <label htmlFor="password">Senha</label>
              <Link href="#" className="text-xs text-primary hover:underline font-medium">Esqueceu a senha?</Link>
            </div>
            <input 
              type="password" 
              id="password" 
              className="input-premium" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input type="checkbox" id="lgpd" className="mt-1 accent-primary" required />
            <label htmlFor="lgpd" className="text-xs text-gray-500 leading-tight">
              Declaro que li e concordo com a <Link href="/lgpd" className="text-primary hover:underline">Política de Privacidade</Link> e consinto com o tratamento de dados de acordo com a LGPD.
            </label>
          </div>

          <Link href="/dashboard" className="btn-primary mt-4 text-center w-full justify-center">
            Entrar no Sistema
          </Link>
        </form>

        <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-200 pt-4">
          Ambiente Seguro • Criptografia de Ponta a Ponta
        </div>
      </div>
    </main>
  );
}
