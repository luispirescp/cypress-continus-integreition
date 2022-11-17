
const Locaitors = {
  LOGIN: {
    campoLogin: "#fieldUser",
    campoPassword: "#fieldPassword",
    btnLogin: "#btnSubmit",
  },

  MENU_LATERAL:{
    botao_menu_abrir_vaga:'[title="Abrir vaga"] button',
    botao_submenu_valida_id:'sicredi-menu-child',
    botao_submenu:'sicredi-menu-child',
  },


  CAMPOS_DE_VAGA_CADASTRADA:{
    campo_profissional__classe_block_visivel: '[label="Perfil profissional"] .background',
    campo_id_vaga__classe_block_visivel: '[label="ID vaga"] .background',
    campo_fornecedo__classe_block_visivel: '[label="Fornecedor"] .background',
    campo_nota_ranking__classe_block_visivel: '[label="Nota do Ranking"] .background',
    campo_requisitante_classe_block_visivel: '[label="Requisitante"] .background',
  },

  VALIDA_ID:{
    texto_em_tela: ' [title="Vagas fechadas"] header span',
    texto_valida_id_em_tela: 'app-pesquisa-id sicredi-h1 h1',
    botao_valida_id: '[title="Validar ID"] button',
  },

  LISTA_VAGAS_HOME: {
    tabela: "#s-table-wrapper",
    botao_pesquisar: '[title="Pesquisar"] button',
    icone_edita_vaga: 'tbody tr td:nth-child(9)',
    campo_tipo_de_vaga: '[label="Tipo de vaga"] p-dropdown',
    click_nas_opcoes: '[label="Tipo de vaga"] ul',
    click_na_opcao_reposicao: '#s-select-wrapper [aria-label= "Reposição"]',
    click_no_botao_pesquisar: '[title="Pesquisar"] button',
    campo_input_id: '[label="ID da vaga"]',
    campo_id_da_tabela: 'tbody tr td',
    elemento_action_edicao: 'tbody .actions div:nth-child(2)',
    primeiro_elemento_action_edicao: 'tbody tr:nth-child(1) sicredi-edit-action button',
    label_nome_user_logado: 'header sicredi-header-user-login label',
  },

  CADASTRA_VAGA: {
    click_abertura_de_vaga: "label span",
    click_no_caledario: '[label="Expectativa de início"] input',
    clcik_inicio_imediato: '[label="Expectativa de início"] button',
    clcik_input_perfil: '[label^="Perfil profissional"] input',
    seleciona_agilista: ".options-list > :nth-child(3)",
    clcik_senioridade: '[label*="Senioridade"] div.ui-dropdown',
    seleciona_senioridade: ":nth-child(2) > .ui-dropdown-item",
    click_tecnologia: '[label="Tecnologias"] input',
    click_na_opcao_AWS: ".list-options > ul > :nth-child(3)",
    click_body_da_tela: ".mdc-drawer-app-content",
    preenche_area_tribo: '[label^="Área/Tribo"] div.input-wrapper',
    preenche_time_squad: '[label^="Time/Squad"] div.input-wrapper input',
    clcik_tipo_vaga: '[label^="Tipo de vaga"] label',
    seleciona_tipo_nova: '[aria-label="Nova"',
    preenche_observacao: "[label=Observações] div.wrapper",
    clcik_para_adicionar_fornecedor: '[title="Adicionar fornecedores"] button',
    click_drop_preposto: '(//td[text()="SoftDesign"] /..//input)[2]',
    botao_salvar_e_abrir_nova: '[title="Salvar e abrir nova"] button',
    abre_opcoes_preposto: "li",
    adicionado_fornecedor_a_vaga:
      'footer [title="Adicionar fornecedores"] button',
      click_salvar: '[title="Salvar"]',
      click_botao_salvar: '[title="Salvar"] button',
      botao_matriz_competencia: 'app-button-matriz-competencia button',
      botao_preview_avaliacao: 'preview-avaliacao-btn button',
      botao_limpar_formulario: '[title="Limpar formulário"] button',
      botao_voltar: '[title="Voltar"] button',
    
    VALORES_EM_TELA:{
      titulo_sistema: '#app-bar[title="Módulo de Gestão de Profissionais Terceiros"]',
      nome_usuario: "sicredi-header-user-login",
      logo_do_sistema: 'sicredi-menu-drawer-content img[src="assets/img/sicredi-logo.svg"]',
    },

    Modal_confirmacao:{
      click_salvar:".content-modal .primary-button button",
    } 
  },

  DELETA_VAGA: {
    imagem_modal_presente:
      '.content-modal [src="assets/img/modal-destructive.svg',
    botao_voltar: "footer .secondary-button",
    texto_titulo_modal: ".content-modal .modal-title",
  },

  MODAL_DELETA_VAGA: {
    
    texto_descricao_modal: 'Você tem certeza que deseja excluir essa vaga? Ela deixará de ficar visível para os fornecedores convidados.',
  },


  MODAL_ALERTA_CAMPOS_OBRIGATORIOS:{
    botao_fecha_modal:'.content-modal footer button',
  },


  
  GENERIC:{
    
  },

  CAMPOS_GLOBAL: {
    click_confirma_modal: ".content-modal footer .primary-button",
    modal_deleta_vaga: ".content-modal .modal-description",
    campo_expectativa_inico: '[label="Expectativa de início"] div',
    campo_area_tribo: '[label="Área/Tribo"] div',
    campo_profissional: '[label="Perfil profissional"] div',
    campo_tecnologia: '[label="Tecnologias"] div',
    campo_time_squad: '[label="Time/Squad"] div',
    campo_tipo_vaga: '[label="Tipo de vaga"] div',
    campo_observacao: '[label="Observações"] div',
    campo_senioridade: '[label="Senioridade"] div',
    botao_pesquisar: '[title="Pesquisar"] button',
    campo_id_da_vaga: '[label="ID da vaga"] input',
  },

  TEXTO_MODAL: {
    confirma: "Confirmar exclusão da vaga",
    descricao:"Você tem certeza que deseja excluir essa vaga? Ela deixará de ficar visível para os fornecedores convidados.",
  },
  TEXTO_MODAL_FECHAMENTO_VAGA: {
    confirma: "Confirmar fechamento da vaga",
    descricao:"Você tem certeza que deseja fechar essa vaga? Esta ação vai encerrar o processo seletivo.",
  },

};

export default Locaitors;
