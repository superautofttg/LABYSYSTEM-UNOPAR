import React from 'react';

export default function LaudoVisualizer() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 print:p-0 print:bg-white flex justify-center">
      {/* Container A4 */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-lg print:shadow-none p-12 text-sm text-gray-800 relative">
        
        {/* Cabeçalho */}
        <header className="flex justify-between items-start border-b border-gray-300 pb-4 mb-6">
          <div className="flex gap-4 items-center">
            {/* Logo Placeholder */}
            <div className="w-24 h-24 flex flex-col items-center justify-center border border-gray-200 p-2">
              <span className="text-blue-700 font-bold text-xl">LEAC</span>
              <span className="text-gray-500 text-xs text-center">Laboratório Escola UNOPAR</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">LEAC Unopar</h1>
              <p className="text-xs text-gray-500">Exames Laboratoriais</p>
            </div>
          </div>
          {/* Logo Biomedicina Placeholder */}
          <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center text-green-600 font-bold text-xs">
            BIOMEDICINA
          </div>
        </header>

        {/* Informações do Paciente e Requisição */}
        <section className="grid grid-cols-2 gap-4 border-b border-gray-300 pb-4 mb-6 text-xs">
          <div>
            <p><strong>Nome.........:</strong> 00001-Carlos Henrique da Silva</p>
            <p><strong>Sexo.........:</strong> Masculino</p>
            <p><strong>Idade........:</strong> 22 Ano(s) 11 Mes(es) 24 Dia(s)</p>
            <p><strong>Médico(a)...:</strong> NÃO INFORMADO</p>
            <p><strong>Convênio...:</strong> 1 LEAC</p>
          </div>
          <div>
            <p><strong>Requisição..:</strong> 00001</p>
            <p><strong>Entrada.....:</strong> 17/04/2026</p>
            <p><strong>Impresso....:</strong> 17/04/2026 12:31</p>
            <p><strong>Destino.....:</strong> LEAC</p>
            <p className="text-right mt-2">Pág.: 1/2</p>
          </div>
        </section>

        {/* Resultado de Exame 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-1 uppercase">HBsAg (Hepatite B)</h2>
          <p className="text-xs text-gray-600 mb-4">Material: Soro Coletado em: 21/01/2026 08:04 Método: Imunocromatográfico</p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm">HBsAg....................: <span className="font-bold">NÃO REAGENTE</span></p>
            </div>
            <div className="text-xs">
              <p className="font-bold mb-1">Valores de Referência</p>
              <p>Não Reagente: Ausência de antígeno</p>
              <p>Reagente.....: Presença de antígeno</p>
            </div>
          </div>
        </section>

        {/* Resultado de Exame 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-1 uppercase">HBs, ANTI (Hepatite B)</h2>
          <p className="text-xs text-gray-600 mb-4">Material: Soro Coletado em: 21/01/2026 08:04 Método: Enzima imunoensaio</p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm">Resultado...........: <span className="font-bold">Inferior a 2,0 mUI/mL</span></p>
            </div>
            <div className="text-xs">
              <p className="font-bold mb-1">Valores de Referência</p>
              <p>Inferior a 10 mUI/mL = Não reagente Superior a 10</p>
              <p>mUI/mL = Reagente (imunidade)</p>
            </div>
          </div>
        </section>

        {/* Assinatura e Rodapé Absolutos */}
        <div className="absolute bottom-12 left-12 right-12">
          
          {/* Área de Assinatura */}
          <div className="flex justify-end mb-8">
            <div className="text-center w-64 border-t border-gray-400 pt-2">
              <p className="font-bold text-sm">Dr. João Vitor de Souza Lima</p>
              <p className="text-xs">CRBM: 7459/6</p>
            </div>
          </div>

          <footer className="flex justify-between items-end text-xs text-gray-600">
            <div>
              <p>Endereço: Av. Dra. Fernandina do Amaral</p>
              <p>Gentile, 405 - Centro, Ibaiti - PR, 84900-000</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800">"Em tudo, dai graças."</p>
              <p>— 1 Tessalonicenses 5:18</p>
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
}
