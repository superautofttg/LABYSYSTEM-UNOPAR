import Link from 'next/link';
import React from 'react';

export default function Resultados() {
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
              <Link href="/recepcao" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                Recepção
              </Link>
            </li>
            <li>
              <Link href="/triagem" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Triagem e Coleta
              </Link>
            </li>
            <li>
              <Link href="/resultados" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-light text-primary-dark font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                Resultados
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
          <h2 className="text-xl font-semibold text-gray-800">Lançamento de Resultados</h2>
        </header>

        {/* Conteúdo Formulário */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-5xl mx-auto">
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Paciente</p>
                <h3 className="font-bold text-gray-900 text-lg">Carlos Henrique da Silva</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Requisição</p>
                <h3 className="font-bold text-gray-900 text-lg">00001</h3>
              </div>
            </div>

            <form>
              
              <h4 className="font-bold text-gray-800 text-lg mb-4 bg-primary-light text-primary-dark p-2 rounded">Setor: Imunologia (Hepatite B)</h4>
              
              <div className="grid grid-cols-12 gap-4 items-center mb-4 pb-4 border-b border-gray-100">
                <div className="col-span-4">
                  <label className="font-semibold text-gray-700 text-sm">HBsAg</label>
                  <p className="text-xs text-gray-500">Método: Imunocromatográfico</p>
                </div>
                <div className="col-span-4">
                  <select className="input-premium bg-white w-full">
                    <option value="">Selecione o Resultado...</option>
                    <option value="nao_reagente">NÃO REAGENTE</option>
                    <option value="reagente">REAGENTE</option>
                  </select>
                </div>
                <div className="col-span-4 text-xs text-gray-500">
                  <strong>Ref:</strong><br/>Não Reagente: Ausência<br/>Reagente: Presença
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center mb-8 pb-4 border-b border-gray-100">
                <div className="col-span-4">
                  <label className="font-semibold text-gray-700 text-sm">HBs, ANTI</label>
                  <p className="text-xs text-gray-500">Método: Enzima imunoensaio</p>
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <input type="text" className="input-premium w-full" placeholder="Ex: Inferior a 2,0" />
                  <span className="text-sm text-gray-500">mUI/mL</span>
                </div>
                <div className="col-span-4 text-xs text-gray-500">
                  <strong>Ref:</strong><br/>&lt; 10 = Não reagente<br/>&gt; 10 = Reagente (imunidade)
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button type="button" className="btn-secondary">Salvar Rascunho</button>
                <button type="submit" className="btn-primary">
                  Liberar Laudo (Assinar Digitalmente)
                </button>
              </div>

            </form>

          </div>
        </div>
      </main>
    </div>
  );
}
