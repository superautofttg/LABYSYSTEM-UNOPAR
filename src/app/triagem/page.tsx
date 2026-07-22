import Link from 'next/link';
import React from 'react';

export default function Triagem() {
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
              <Link href="/triagem" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-light text-primary-dark font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Triagem e Coleta
              </Link>
            </li>
            <li>
              <Link href="/resultados" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
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
          <h2 className="text-xl font-semibold text-gray-800">Triagem e Recebimento de Amostras</h2>
        </header>

        {/* Conteúdo Formulário */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-5xl mx-auto">
            
            <div className="flex gap-4 mb-8">
              <input type="text" className="input-premium flex-1" placeholder="Bipar código de barras ou buscar por Nº Requisição..." />
              <button className="btn-primary">Buscar Amostra</button>
            </div>

            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-6">Amostras Pendentes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Amostra 1 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors bg-blue-50/30">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Requisição: 00001</h4>
                    <p className="text-sm text-gray-600">Carlos Henrique da Silva</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded border border-yellow-200">Aguardando Coleta</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm p-2 bg-white rounded border border-gray-100">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-600"></div>
                      Tubo Tampa Vermelha (Soro)
                    </span>
                    <span className="text-gray-500 font-medium">HBsAg, HBs ANTI</span>
                  </div>
                  <div className="flex items-center justify-between text-sm p-2 bg-white rounded border border-gray-100">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                      Tubo Tampa Roxa (EDTA)
                    </span>
                    <span className="text-gray-500 font-medium">Hemograma</span>
                  </div>
                </div>
                <button className="w-full mt-4 btn-secondary text-sm border-dashed">Confirmar Recebimento</button>
              </div>

              {/* Amostra 2 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors bg-blue-50/30">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Requisição: 00002</h4>
                    <p className="text-sm text-gray-600">Ana Beatriz Gomes</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded border border-yellow-200">Aguardando Coleta</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm p-2 bg-white rounded border border-gray-100">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      Pote Amarelo (Urina)
                    </span>
                    <span className="text-gray-500 font-medium">EAS</span>
                  </div>
                </div>
                <button className="w-full mt-4 btn-secondary text-sm border-dashed">Confirmar Recebimento</button>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
