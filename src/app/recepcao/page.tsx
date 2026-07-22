import Link from 'next/link';
import React from 'react';

export default function Recepcao() {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold" style={{ color: 'var(--primary-dark)' }}>
            <span style={{ color: 'var(--secondary-dark)' }}>LEAC</span>Lab
          </h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/recepcao" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-light text-primary-dark font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                Recepção
              </Link>
            </li>
            <li>
              <Link href="/laudo" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Laudos
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header Superior */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-gray-800">Recepção: Cadastro de Paciente</h2>
        </header>

        {/* Conteúdo Formulário */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
            
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-6">Dados Pessoais</h3>
            
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input type="text" id="nome" className="input-premium" placeholder="Carlos Henrique da Silva" required />
                </div>
                <div className="input-group">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" className="input-premium" placeholder="000.000.000-00" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="input-group">
                  <label htmlFor="nascimento">Data de Nascimento</label>
                  <input type="date" id="nascimento" className="input-premium" required />
                </div>
                <div className="input-group">
                  <label htmlFor="sexo">Sexo</label>
                  <select id="sexo" className="input-premium bg-white">
                    <option value="">Selecione...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" className="input-premium" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mt-8 mb-6">Dados Clínicos / Convênio</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-group">
                  <label htmlFor="convenio">Convênio</label>
                  <select id="convenio" className="input-premium bg-white">
                    <option value="LEAC">LEAC Unopar</option>
                    <option value="SUS">SUS</option>
                    <option value="PARTICULAR">Particular</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="medico">Médico Solicitante</label>
                  <input type="text" id="medico" className="input-premium" placeholder="Ex: Dr. Fulano (CRM)" />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8 border-t border-gray-100 pt-6">
                <button type="button" className="btn-secondary">Cancelar</button>
                <button type="submit" className="btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                  Salvar Paciente
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
