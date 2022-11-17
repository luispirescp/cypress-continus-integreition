
const fornecedores = [ "Accenture",	
"Compasso",
"CSU",	    
"CWI",
"CRK",
"DBC Company",
"DBServer",
"Excellence",
"IBM",
"La Republica",
"Level 4",
"NT Consult",
"Procomp - Diebold",	
"Sincrônica",
"SoftDesign",
"South System",
"Stefanini",
"TIVIT",
"TOTVS",
"Fusion",
"GX2",
"Avenue Code",
"TPZ"
]



const perfils = [
  "Analista de Sistemas de Negócio",
  "Analista de Qualidade",
  "Analista UX",
  "Arquiteto",
  "Curador Watson",
  "Desenvolvedor - Demais Tecnologias",
  "Desenvolvedor ANDROID",
  "Desenvolvedor Backend",
  "Desenvolvedor Frontend",
  "Desenvolvedor IOS",
  "Desenvolvedor FullStack",
  "Analista de Inteligência Artificial/Cientista de Dados",
  "Agilista",
  "Analista de Suporte (N2)",
  "Administrador Salesforce",
  "Analista de Testes de Performance",
  "Desenvolvedor - BPEL / ETL / ODI / BPM (SOA)",
  "Desenvolvedor - Clipper / PL-SQL / C# / Delphi",
]

const time_squads = [

    'Abertura de Contas'
    ,'Administrativo'
    ,'Adquizilla'
    ,'Analytics'
    ,'ARQ Soluções'
    ,'Atendimento e Operações de Produtos'
    ,'Cadastro'
    ,'Ciência de Dados'
    ,'Kombat'
    ,'Contabilidade'
    ,'Convênio e Cobranças'
    ,'Cooperativismo e Capital Social'
    ,'CRM'
    ,'CXM'
    ,'DC Comics'
    ,'DevOps'
    ,'Docs Legais'
    ,'Fidelidade'
    ,'Fumageiros'
    ,'Gestão Financeira'
    ,'Green Rocket'
    ,'House of Cards'
    ,'Ibest'
    ,'Investimentos'
    ,'Mobizera'
    ,'Os InCCRWeis'
    ,'Papaléguas'
    ,'Recuperação de Crédito'
    ,'Sem Time Definido'
    ,'Sparta'
    ,'TeamMaia'
    ,'Team Two Ri'
    ,'Wall Street'
    ,'Judit'
    ,'ContasCred'
    ,'Holerit'
    ,'Cheque&Mate'
    ,'Emissão Impossível'
    ,'InovaCob'
    ,'Meteoro da Cobrança'
    ,'Witchercraft'
    ,'Arrecadiow'
    ,'Nobit'
    ,'Aventuras de P.I'
    ,'Pixies'
    ,'Open Banking'
    ,'Camaleões'
    ,'FarmVille'
    ,'João de Barro'
    ,'La Casa Comercial'
    ,'Crédito 66'
    ,'Super Bros'
    ,'Guardiões das Garantias'
    ,'MotoCross'
    ,'CrossOver'
    ,'Leopoldo'
    ,'Lannisters'
    ,'Time Cameleiros'
    ,'Time Contemplados'
    ,'Avengers'
    ,'Ice Team'
    ,'Braves'
    ,'VOID'
    ,'F5 Team'
    ,'Joker'
    ,'Pacman'
    ,'Mudanças e Qualidade'
    ,'Altas Ordens'
    ,'SAP'
    ,'Zé Colmeia'
    ,'GEDAI'
    ,'Muricis'
    ,'CADPOS'
    ,'Super Trunfo'
    ,'Gestão de Incidentes e Capacidade'
    ,'Consultoria'
    ,'Gestão de Fornecedores'
    ,'Modelagem'
    ,'Suporte ao Colaborador'
    ,'Estratégia de Transformação '
    ,'Aquisição'
    ,'Preço'
    ,'Design System (DesignOps)'
    ,'Pesquisa e Cultura  (DesignOps) '
    ,'Engenharia de Dados'
    ,'Engajamento Fisital'
    ,'Gestão da Mudança'
    ,'Juntos Digital'
    ,'Segurança na originação'
    ,'Cyber Security'
    ,'Segurança transacional'
    ,'Riscos'
    ,'Componentes Cross'
    ,'Core Bancário'
    ,'Administração do Relacionamento'
    ,'Visão de Relacionamento'
    ,'Canais de Relacionamento'
    ,'Seguros'
    ,'Seguros Prestamista'
    ,'Consignado'
    ,'Empréstimos'
    ,'Rotativos'
    ,'Preço e Formalística de Crédito '
    ,'Concessão de Crédito'
    ,'Woop'
    ,'Movimentações de Conta'
    ,'Cheque'
    ,'Marketplace'
    ,'Remunerados (Fundos de Investimento)'
    ,'Time Zion'
    ,'Encerramento'
    ,'Capitão Esteira'
    ,'Tróia'
    ,'Segurança na originação'
    ,'Financiamentos'
    ,'Meios de Pagamento Relacionamento'
    ,'Meios de Pagamento Aquisição'
    ,'Iron Team'
    ,'Novo Caixa'
    ,'X3'
    ,'Marketing Woop'
];

const area_tribos = [
    'Sistemas de Produtos e Serviços Financeiros',
'Sistemas de Relacionamento com o Associado, Seguros e Consórcios',
'Sistemas de Crédito, Recuperação e Outras Aplicações de Crédito',
'Sistemas de Canais e Cartões',
'Sistemas de BI, Risco e Modelagem',
'Sistemas Administrativos, Fundação e Incorporações',
'Mudanças e Qualidade',
'Arquitetura',
'Gestão de Incidentes e Capacidade',
'Gestão de Sourcing',
'Suporte ao Colaborador',
'Meios de Pagamentos',
'Movimentações Financeiras',
'Estratégia e Engajamento',
'Transformação',
'Woop',
'Backbone',
'CXM',
'Crédito',
'Contabilidade e Obrigações Legais',
'Educação Cooperativa e Financeira',
'Coordenação de Evolução e Qualidade',
'Gerência de Emissão',
'Gerência de Adquirência',
'Gerência de Controle e Suporte Administrativo',
'Gerência de Planejamento Financeiro e BI',
'Gerência de CRM',
'Gerência de Operações de TI',
'Gerência de Estratégia e Inovação',
'Gerência de VMO Corporativo',
'Seguros',
'Segurança',
'Riscos',
'Cooperativismo',
'Abertura de Contas, Cadastro e Encerramento',
'Migração',
'Centro de Cognição',
];

const senioridades = ["I","II","III"];
const senioridade_api = 0;
const timesSquad_api = 0;
const areasTribos_api = 0;

 export function dados_random(entra_dados){
  const index_aleatorio = Math.floor(Math.random() * entra_dados.length);
  return index_aleatorio;
};

const dados_random_api = (entra_dados) => {
  const index_aleatorio = Math.floor(Math.random() * entra_dados);
  return index_aleatorio;
};

const dados_aleatorios_da_vaga = {
  perfil: perfils[dados_random(perfils)],
  time_squad: time_squads[dados_random(time_squads)],
  area_tribo: area_tribos[dados_random(area_tribos)],
  senioridade: senioridades[dados_random(senioridades)],
  senioridade_api: dados_random_api(4)+1,
  timesSquad_api: dados_random_api(121),
  areasTribos_api: dados_random_api(37),
};

export default dados_aleatorios_da_vaga;
