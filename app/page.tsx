import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-mesh min-h-screen flex items-center justify-center p-4">
      <div className="glass-panel max-w-5xl w-full p-8 md:p-12 animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Marca e Apresentação */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm inline-flex items-center justify-center w-fit border border-surface-border">
            {/* O usuário informou que tem a logo. Aqui fica o espaço reservado para a logo oficial. */}
            <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-dark)' }}>
              <span style={{ color: 'var(--secondary-dark)' }}>LEAC</span>Lab
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Excelência e Segurança em <span className="text-transparent bg-clip-text bg-gradient-primary">Análises Clínicas</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Plataforma oficial do Laboratório Escola UNOPAR. Gerencie pacientes, 
            amostras, e gere laudos profissionais com total rastreabilidade e 
            conformidade com a LGPD.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/login" className="btn-primary">
              Acessar Sistema
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link href="/portal-paciente" className="btn-secondary">
              Portal do Paciente
            </Link>
          </div>
        </div>

        {/* Lado Direito: Cards de Destaque / Painel Decorativo */}
        <div className="relative h-full min-h-[400px] flex flex-col gap-6 justify-center">
          
          {/* Card Flutuante 1 */}
          <div className="glass-panel p-6 absolute top-0 right-0 w-3/4 animate-fade-in" style={{ animationDelay: '0.2s', zIndex: 2 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Laudos Automatizados</h3>
                <p className="text-sm text-slate-500">Geração de PDFs padronizados</p>
              </div>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4"></div>
            </div>
          </div>

          {/* Card Flutuante 2 */}
          <div className="glass-panel p-6 absolute bottom-10 left-0 w-3/4 animate-fade-in" style={{ animationDelay: '0.4s', zIndex: 1 }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--secondary-light)', color: 'var(--secondary-dark)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Segurança LGPD</h3>
                <p className="text-sm text-slate-500">Criptografia e logs de acesso</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
