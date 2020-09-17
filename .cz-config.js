module.exports = {
    types: [
      { value: 'novo', name: 'novo:     Novas funcionalidades' },
      { value: 'correcao', name: 'correção:      Correção de bugs.' },
      { value: 'docs', name: 'docs:     Alteração na documentação, como uma atualização no README.' },
      {
        value: 'estilo',
        name:
          'estilo:   Alteração nas folhas de estilo. ex.: Espaços em branco, formatação etc.',
      },
      {
        value: 'refatoracao',
        name: 'refatoração: Alteração no código que não corrige erros e não adiciona novas funcionalidades. ',
      },
      { value: 'teste', name: 'teste:     Alteração que adiciona ou corrige testes. '},
      {
        value: 'biblioteca',
        name:
          'biblioteca:    Instalação de nova biblioteca.',
      },      
      { value: 'WIP', name: 'WIP:      Work in progress, quando uma feature não foi concluida, mas precisa ser commitada' },
    ],
  
  
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
  
    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
      type: "Selecione o tipo de alteração que você deseja realizar:",
      customScope: '\nDefina o escopo da alteração (opcional):',
      subject: '\nFaça uma descrição das alterações realizadas:',
      footer: '\nListe as ISSUES encerradas por essa alteração (opcional). Ex.: #31, #34:',
      confirmCommit: '\nTem certeza que deseja prosseguir com o commit acima?',
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: false,
    // skip any questions you want
    skipQuestions: ['body'],
  
    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  };