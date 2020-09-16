module.exports = {
    types: [
      { value: 'novo', name: 'novo:     Quando o desenvolvimento é relacionado a uma nova funcionalidade' },
      { value: 'correcao', name: 'correção:      Quando a alteração se trata da correção de um bug.' },
      { value: 'docs', name: 'docs:     Quando se trata somente de uma alteração na documentação, como uma atualização no README.' },
      {
        value: 'estilo',
        name:
          'estilo:    Quando a alteração se trata somente de folhas de estilo.',
      },
      {
        value: 'refatoracao',
        name: 'refatoração: Quando a alteração se trata de uma refatoração no código. ',
      },
      { value: 'teste', name: 'teste:     Quando foram escritos ou corrigidos apenas testes. '},
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
      type: "Selecione o tipo de alteração que você está commitando:",
      scope: '\nDefina o scopo da alteração (opicional):',
      subject: 'Faça uma descrição das alterações realizadas:\n',
      confirmCommit: 'Tem certeza que deseja proseguir com o commit acima?',
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: ['novo', 'correcao'],
    // skip any questions you want
    skipQuestions: ['body'],
  
    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  };