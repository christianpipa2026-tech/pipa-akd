// MASTER PART 2 — Unidades 3 y 4
// 12 lecciones · 60 ejercicios

export const MASTER_U3_U4 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 3 — Pensamento e Expressão: O Intelectual Público
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U3",
    title: "Pensamento e Expressão: O Intelectual Público em Português",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U3-L1",
        title: "Debate intelectual de alto nível: defender e ser refutado",
        objectives: ["Conduzir debates de alto nível com elegância e precisão Master", "Aceitar refutação sem perder autoridade intelectual"],
        shadowingDialogue: {
          title: "O prazer da refutação",
          lines: [
            { speaker: "Debatedora", text: "Você está errado nesse ponto — e vou explicar por quê com precisão." },
            { speaker: "Oponente", text: "Ótimo. Refutar é a melhor coisa que pode acontecer numa conversa séria." },
            { speaker: "Debatedora", text: "A maioria das pessoas trata a refutação como derrota. É o oposto — é quando o pensamento avança." },
            { speaker: "Oponente", text: "Concordo. Mas há refutações que destroem e refutações que constroem." },
            { speaker: "Debatedora", text: "A diferença está em refutar o argumento, nunca a pessoa. E em reconhecer quando você próprio foi refutado." }
          ]
        },
        keyPhrases: [
          "Refutação construtiva: atacar o argumento, nunca a pessoa",
          "Reconhecer quando você foi refutado: a maior virtude intelectual",
          "Distinguir desacordo factual de desacordo de valores",
          "A pergunta como arma mais poderosa que a afirmação"
        ],
        guidedProduction: [
          "Refute este argumento de forma construtiva: 'Toda censura é errada.'",
          "Reconheça que foi refutado elegantemente sobre uma posição que você defende.",
          "Use uma pergunta para desmontar um argumento sem afirmar nada."
        ],
        grammar: {
          title: "Técnicas de Debate Intelectual Master",
          explanation: "Refutação por distinção: 'Concordo com X em contexto A, mas não em contexto B.' Refutação por reductio: levar o argumento às suas consequências absurdas. Refutação por contrapexemplo: um único caso que contradiz a regra geral. Reconhecimento de refutação: 'Você tem razão nesse ponto — vou reconsiderar.' A pergunta socrática: fingir não entender para que o interlocutor revele as premissas problemáticas. Desacordo factual (resolvível com evidência) vs. desacordo de valores (não resolvível, mas mapeável).",
          conjugation: "Fórmulas de refutação Master: 'Permita-me fazer uma distinção...' / 'O argumento seria válido se X, mas no caso Y...' / 'Um contrapexemplo: ...' / 'Levando essa lógica até o fim, chegamos a...' / 'Você me convenceu nesse ponto — revejo minha posição sobre...'"
        },
        exercises: [
          { type: "production", prompt: "Refute de forma construtiva: 'Toda censura é errada, pois limita a liberdade de expressão.'", answer: "O argumento é poderoso mas impreciso — e a imprecisão é onde está o problema. 'Toda censura' é uma generalização que inclui casos que a maioria de nós aceitaria: proibir difamação privada, limitar propaganda infantil enganosa, restringir incitação ao ódio. Se chamarmos isso de 'censura', a afirmação colapsa imediatamente. O que talvez o argumento queira dizer é que a censura política e ideológica — o Estado restringindo ideias por questão de poder — é sempre errada. Com essa precisão, concordo. Mas 'toda censura' como formulação é defendível apenas se você também defende o direito de difamar, o direito de vender remédios falsos com propaganda mentirosa e o direito de incitar genocídio. O problema não é a posição — é a formulação que não distingue o que precisa ser distinguido." },
          { type: "production", prompt: "Reconheça elegantemente que foi refutado sobre a afirmação 'leitura aumenta empatia'.", answer: "Você me convenceu — ou pelo menos me fez mudar a formulação, o que talvez seja a mesma coisa. Você tem razão que há leitores vorazes que são rígidos e incuriosos sobre o outro real, e que isso contradiz a versão mais simplista da tese que eu estava defendendo. Revejo assim: leitura não cria empatia — amplifica disposições que já existem. Quem tem abertura para o outro encontra na leitura um ginásio para exercitá-la. Quem não tem pode ler o mundo inteiro sem desenvolvimento significativo dessa capacidade. É uma posição menos elegante e menos reconfortante do que a que eu tinha. Mas é provavelmente mais próxima do que os dados sugerem." },
          { type: "production", prompt: "Use apenas perguntas para desmontar o argumento 'o mercado resolve tudo'.", answer: "'O mercado resolve tudo' — deixa eu entender melhor. O mercado de 1860 resolvia a escravidão? Por que não resolveu? Porque não havia mecanismo de mercado que tornasse a escravidão não-lucrativa o suficiente. Certo? Então há coisas que o mercado não resolve quando os custos são externalidades — são pagos por quem não participa da transação. Poluição, por exemplo: quem polui não paga o custo da poluição. Como o mercado resolve isso sem regulação? E saúde pública: como o mercado resolve doenças infecciosas, onde o benefício de me vacinar é em parte meu e em parte de todos ao redor? Não pergunto para atacar — pergunto para entender onde a afirmação se sustenta e onde precisa de qualificação." },
          { type: "analysis", prompt: "Qual é a diferença entre desacordo factual e desacordo de valores — e por que importa?", answer: "Desacordo factual é sobre o que é verdadeiro: 'vacinas causam autismo' é um desacordo factual, resolvível com evidência científica. 'O aborto deve ser legal' é primariamente um desacordo de valores: envolve questões sobre quando começa a vida, o peso relativo da autonomia da mulher vs. do feto, o papel do Estado — questões onde a evidência empírica não resolve porque o desacordo está nas premissas morais. Importa porque tratar desacordos de valores como factuais leva a frustração: você apresenta dados e a outra pessoa 'continua errando'. E tratar desacordos factuais como de valores leva ao relativismo: 'cada um tem sua verdade sobre as vacinas'. O debate intelectual de qualidade começa por identificar de qual tipo de desacordo se trata." },
          { type: "production", prompt: "Escreva um debate de 8 linhas onde as duas posições evoluem ao longo do diálogo.", answer: "— A inteligência artificial vai substituir escritores.\n— Ou vai transformar o que os escritores fazem. Como a fotografia 'substituiu' a pintura.\n— Mas a pintura sobreviveu porque se reinventou — tornou-se mais abstrata, mais experimental.\n— Exato. A literatura provavelmente fará o mesmo — em direções que ainda não conseguimos prever.\n— Mas há uma diferença: a fotografia não escrevia romances. A IA escreve textos que parecem literatura.\n— Que 'parecem'. A questão é se 'parecer' é o mesmo que 'ser' na arte.\n— Isso depende de o que estamos chamando de 'ser' na arte — e aqui não tenho certeza.\n— Eu também não. Mas acho que chegamos a uma questão mais interessante do que a que começamos." }
        ]
      },
      {
        id: "MASTER-U3-L2",
        title: "A conferência acadêmica: apresentar pesquisa em português",
        objectives: ["Apresentar pesquisa acadêmica em português com autoridade Master", "Responder perguntas de banca com precisão e elegância"],
        shadowingDialogue: {
          title: "Apresentando na conferência",
          lines: [
            { speaker: "Pesquisador", text: "Bom dia. Vou apresentar resultados que contradizem a hipótese inicial — o que, descobri, é o resultado mais interessante possível." },
            { speaker: "Banca", text: "Isso é incomum como abertura. Continue." },
            { speaker: "Pesquisador", text: "Parti da premissa X. Os dados não a suportam. Mas ao investigar por quê, encontrei algo que X não previa." },
            { speaker: "Banca", text: "Você poderia ter simplesmente descartado os dados anômalos." },
            { speaker: "Pesquisador", text: "Poderia. Mas dados anômalos são onde a ciência avança. Quis seguir a anomalia." }
          ]
        },
        keyPhrases: [
          "Abertura de conferência acadêmica: contexto + lacuna + contribuição",
          "Apresentar resultado negativo com integridade científica",
          "Responder perguntas difíceis da banca com precisão e honestidade",
          "Distinguir o que os dados mostram do que o pesquisador interpreta"
        ],
        guidedProduction: [
          "Escreva a abertura de uma apresentação de pesquisa (4-5 frases).",
          "Como você responde a uma pergunta de banca que você não sabe responder?",
          "Apresente um resultado negativo como descoberta valiosa."
        ],
        grammar: {
          title: "Apresentação Acadêmica Master",
          explanation: "Estrutura CARS (Create A Research Space): Establishing territory (área de pesquisa), Establishing a niche (lacuna/problema), Occupying the niche (contribuição). Em português: 'Sabe-se que X [territory]. Contudo, Y ainda não foi investigado [niche]. O presente estudo objetiva Z [occupying].' Resposta a pergunta difícil: reconhecer o limite, especificar o que os dados permitem afirmar, indicar direções futuras. Resultado negativo: 'A hipótese não foi confirmada — o que nos diz que [implicação positiva].'",
          conjugation: "Fórmulas acadêmicas Master: 'Os dados sugerem, mas não permitem concluir...' / 'Essa é uma limitação reconhecida do estudo...' / 'Sua pergunta aponta para uma lacuna que pesquisas futuras deveriam endereçar...' / 'A hipótese não se confirmou, o que é igualmente informativo porque...'"
        },
        exercises: [
          { type: "production", prompt: "Escreva a abertura de uma apresentação de pesquisa fictícia (5 frases).", answer: "A relação entre uso de redes sociais e indicadores de bem-estar subjetivo em adolescentes brasileiros tem sido extensamente debatida, mas os estudos existentes raramente distinguem entre diferentes modalidades de uso — passivo versus ativo, individual versus social. Essa distinção, argumentamos, é crucial para compreender os mecanismos pelos quais a tecnologia afeta o desenvolvimento adolescente. O presente estudo, conduzido com 847 participantes de 13 a 17 anos em cinco capitais brasileiras, buscou preencher essa lacuna através de metodologia mista que combina dados quantitativos de uso e indicadores validados de bem-estar com entrevistas qualitativas aprofundadas. Os resultados, que apresentarei em seguida, contradizem parcialmente a narrativa dominante sobre tecnologia e adolescência — e é precisamente nessa contradição que reside, acredito, a contribuição mais relevante deste trabalho." },
          { type: "production", prompt: "Como você responde a uma pergunta de banca que não sabe responder?", answer: "Há duas formas, dependendo do tipo de pergunta. Se é sobre algo que deveria saber (um autor, um dado, uma referência): 'Não tenho essa informação de cabeça — vou verificar e incluir na versão revisada. Você poderia indicar onde encontro o dado?' Isso demonstra integridade e abertura. Se é sobre algo que genuinamente vai além do estudo: 'Essa é uma pergunta excelente que os dados do presente estudo não permitem responder. Identifico isso como uma limitação importante e uma direção clara para pesquisa futura. O que posso dizer com base nos meus dados é...' A honestidade sobre os limites do que você sabe é um sinal de maturidade acadêmica, não de fraqueza." },
          { type: "production", prompt: "Apresente um resultado negativo como descoberta valiosa (4 frases).", answer: "A hipótese principal do estudo — que uso passivo de redes sociais correlaciona negativamente com bem-estar em todos os subgrupos — não se confirmou. Adolescentes com redes de suporte offline robustas mostraram padrão inverso: uso passivo associado positivamente a indicadores de bem-estar. Isso não invalida o estudo — ao contrário, sugere que o efeito do uso passivo é mediado pela qualidade das relações offline, o que é uma descoberta substantiva. Resultado negativo que revela um moderador é frequentemente mais valioso que resultado positivo que confirma o esperado." },
          { type: "analysis", prompt: "Por que apresentar resultados que contradizem a hipótese exige mais coragem mas produz ciência melhor?", answer: "Apresentar resultados negativos ou contraditórios exige coragem porque vai contra os incentivos da publicação acadêmica — revistas publicam mais resultados positivos (viés de publicação) e pesquisadores têm pressão para confirmar hipóteses. Mas produz ciência melhor por várias razões: evita que outros pesquisadores percam tempo investigando a mesma hipótese equivocada; força a investigação dos mecanismos (por que a hipótese falhou?), que frequentemente é mais iluminadora que a confirmação; contribui para o mapeamento do que não funciona, que é essencial para saber o que tentar. A anomalia que não se descarta é onde a ciência genuinamente avança — como demonstram casos históricos de descobertas acidentais que contrariaram hipóteses vigentes." },
          { type: "production", prompt: "Escreva uma resposta a esta crítica da banca: 'Sua amostra é muito pequena para generalizar.'", answer: "A observação é pertinente e reconheço a limitação. Contudo, gostaria de contextualizar dois pontos. Primeiro, o presente estudo adota abordagem qualitativa para o componente principal de análise — e para pesquisa qualitativa, a representatividade estatística não é o critério central; o critério é a saturação teórica, que foi atingida. Segundo, o componente quantitativo, com 847 participantes, está dentro do intervalo adequado para os testes estatísticos utilizados, com poder suficiente para detectar os efeitos de tamanho esperados com base na literatura. A generalização, de fato, deve ser feita com cautela — particularmente para populações rurais e de baixa renda, sub-representadas na amostra, o que indico explicitamente como limitação na discussão. Estudos futuros deveriam ampliar a cobertura geográfica e socioeconômica." }
        ]
      },
      {
        id: "MASTER-U3-L3",
        title: "Crítica cultural pública: escrever sobre arte, política e sociedade",
        objectives: ["Produzir crítica cultural de alto nível para públicos amplos", "Integrar rigor intelectual e acessibilidade sem sacrificar nenhum dos dois"],
        shadowingDialogue: {
          title: "Para quem se escreve",
          lines: [
            { speaker: "Crítica", text: "A crítica cultural tem um problema central: para ser rigorosa, precisa de vocabulário técnico; para ser lida, precisa ser acessível." },
            { speaker: "Aluno", text: "E como se resolve isso?" },
            { speaker: "Crítica", text: "Não se resolve — se gerencia. Você usa o conceito técnico uma vez, explica na mesma frase, e depois usa a versão acessível." },
            { speaker: "Aluno", text: "'Intertextualidade — o diálogo entre textos' — assim?" },
            { speaker: "Crítica", text: "Exato. E nunca use jargão para impressionar. Use quando não há substituto equivalente. Se há, use o simples." }
          ]
        },
        keyPhrases: [
          "Crítica cultural: rigor + acessibilidade — não são opostos",
          "Jargão quando não há substituto; língua comum sempre que possível",
          "Posição clara: a crítica que não toma partido não diz nada",
          "Ancorar no específico antes de generalizar: a cena, a frase, o gesto"
        ],
        guidedProduction: [
          "Escreva uma crítica de 200 palavras de uma obra brasileira recente.",
          "Explique um conceito teórico complexo sem usar o jargão.",
          "Tome uma posição polêmica sobre uma obra famosa — e defenda."
        ],
        grammar: {
          title: "Crítica Cultural Master: Estrutura e Voz",
          explanation: "Estrutura: âncora específica (cena, frase, gesto) → análise → contexto → posição. Não: contexto → análise → exemplos (estrutura acadêmica — muito lenta para crítica). Voz: a crítica tem perspectiva — não é neutra. O leitor sabe o que o crítico pensa. Jargão: usar e imediatamente traduzir; nunca acumular termos técnicos sem explicação. Posição polêmica: a crítica que diz que 'há aspectos positivos e negativos' é inútil. Tome partido — com fundamentação.",
          conjugation: "Critérios de crítica cultural: a obra funciona porque / falha quando / é significativa no contexto de / dialoga com / subverte / confirma / questiona / antecipa / ressoa com"
        },
        exercises: [
          { type: "production", prompt: "Escreva uma crítica de 150 palavras de qualquer obra brasileira — tome uma posição clara.", answer: "'Bacurau' (2019, Kleber Mendonça Filho e Juliano Dornelles) é o filme político mais honesto do cinema brasileiro recente — e honesto aqui significa que não pretende consolar. A alegoria é transparente (um vilarejo nordestino sob ataque de forças externas que literalmente o apagam do mapa), mas a transparência é funcional: o filme não está interessado em sutileza, está interessado em raiva. E a raiva é precisa. A câmera olha o Brasil periférico com olhos que combinam amor e fúria, recusando tanto o pitoresco quanto o melodrama. O que Bacurau faz de extraordinário é tratar a resistência popular não como heroísmo abstrato mas como prática concreta, cheia de contradições e violência. É um filme que desconforta quem preferia que cinema político fosse gentil. Não é. E é melhor assim." },
          { type: "production", prompt: "Explique 'dialogismo de Bakhtin' sem usar o jargão — em 3 frases.", answer: "Toda fala é uma resposta a falas anteriores e uma antecipação de falas futuras — nenhum enunciado nasce do vácuo. Quando você escreve um texto, está inevitavelmente respondendo a textos que leu, concordando ou discordando, mesmo sem citá-los. E qualquer texto que você escreva já carrega dentro de si as vozes de outras pessoas, outros contextos, outras épocas — nenhuma voz é completamente original, e isso não é limitação: é a condição de toda comunicação." },
          { type: "production", prompt: "Tome uma posição polêmica sobre uma obra famosa e defenda em 4 frases.", answer: "'O Alquimista' de Paulo Coelho é um livro importante — e não pelos motivos pelos quais seus defensores o celebram. Não é bom como literatura: a linguagem é plana, os personagens são vetores de lições de autoajuda, o enredo é telegrafado. Mas é extraordinariamente eficaz como tecnologia de esperança: ele encontra leitores em momentos de crise existencial e lhes oferece uma estrutura narrativa para pensar o próprio percurso com dignidade. Isso não é pouca coisa — e criticá-lo como se fosse Clarice Lispector é comparar soluções para problemas diferentes." },
          { type: "analysis", prompt: "Por que a crítica que 'tem aspectos positivos e negativos' é considerada inútil?", answer: "A crítica 'tem aspectos positivos e negativos' é inútil porque não ajuda o leitor a decidir nada: leia ou não leia? Vale o tempo? É importante para o contexto cultural? Qual é o estado da arte nesse campo? A crítica que não toma partido é, na melhor das hipóteses, uma descrição — e descrição não é análise. A função da crítica é orientar — não comandar, mas oferecer uma perspectiva fundamentada que o leitor pode aceitar, rejeitar ou debater. Uma crítica que conclui 'há méritos e limitações' não orienta ninguém. Além disso, 'há aspectos positivos e negativos' é verdadeiro para absolutamente qualquer obra — portanto não distingue nada de nada. O valor da crítica está precisamente na hierarquização: o que pesa mais? Por quê? Essa é a contribuição que só uma posição clara pode fazer." },
          { type: "production", prompt: "Escreva o primeiro parágrafo de uma crítica que começa com uma âncora específica.", answer: "Há uma cena em 'Ainda Estou Aqui' que dura menos de trinta segundos e que é, para mim, o coração do filme: Eunice Paiva está numa sala de espera do governo, aguardando informações sobre o marido desaparecido, e ela sorri para um funcionário que a olha com indiferença. O sorriso não é servilidade — é armadura. É a recusa de mostrar ao sistema que você foi quebrado. Em trinta segundos, Fernanda Torres faz o que escritores levam páginas para articular: demonstra como a resistência política pode ser um gesto íntimo, quase invisível, que ninguém ao redor reconhece como ato de coragem." }
        ]
      },
      {
        id: "MASTER-U3-L4",
        title: "O texto que convence: persuasão ética e eficaz",
        objectives: ["Produzir textos de persuasão de alto nível ético e retórico", "Distinguir persuasão legítima de manipulação"],
        shadowingDialogue: {
          title: "Convencer sem manipular",
          lines: [
            { speaker: "Rhetor", text: "Há uma diferença fundamental entre persuadir e manipular. Você consegue articulá-la?" },
            { speaker: "Aluno", text: "Persuasão apela à razão e à emoção de forma transparente. Manipulação explora vieses sem que o outro perceba." },
            { speaker: "Rhetor", text: "Quase. Mas a emoção em persuasão ética também pode ser genuína — você não precisa fingir." },
            { speaker: "Aluno", text: "A diferença está em respeitar a autonomia do interlocutor?" },
            { speaker: "Rhetor", text: "Sim. Persuasão ética deixa o outro livre para discordar. Manipulação remove essa liberdade sem que ele saiba." }
          ]
        },
        keyPhrases: [
          "Persuasão ética: respeitar a autonomia do interlocutor",
          "Manipulação: explorar vieses cognitivos sem transparência",
          "Concessão ao contraditório como ferramenta de credibilidade",
          "O texto que antecipa objeções é mais persuasivo que o que as ignora"
        ],
        guidedProduction: [
          "Escreva um texto persuasivo que incorpora a posição contrária e a responde.",
          "Identifique a diferença entre apelo emocional legítimo e manipulação emocional.",
          "Defenda uma posição impopular de forma ética e eficaz."
        ],
        grammar: {
          title: "Persuasão Ética Master",
          explanation: "Princípio de caridade: antes de refutar, apresente a posição contrária em sua versão mais forte — não em caricatura. Concessão estratégica: reconhecer o que é válido na posição oposta aumenta a credibilidade de quem concede. Antecipação de objeções: o texto que responde às objeções antes de serem feitas demonstra que o autor as considerou e as superou. Apelo emocional legítimo: usar emoção que é genuinamente relevante para o argumento (não para distrair dele). Transparência de interesses: revelar seu interesse no assunto antes de argumentar — o leitor confia mais.",
          conjugation: "Fórmulas de persuasão ética: 'Reconheço que a posição contrária tem [mérito específico]...' / 'Alguém poderia objetar que X — e essa objeção é válida se Y. Porém no caso Z...' / 'Tenho interesse pessoal nessa questão, o que o leitor deve considerar ao avaliar meus argumentos...'"
        },
        exercises: [
          { type: "production", prompt: "Escreva um texto persuasivo de 150 palavras que incorpora e responde à posição contrária.", answer: "Defendo a obrigatoriedade do voto no Brasil — e reconheço que os argumentos contrários têm peso real. O mais forte: forçar alguém a votar sem forçá-lo a ser informado pode produzir escolhas aleatórias ou puramente emocionais, o que não é democracia de qualidade. Esse argumento é válido. Mas há uma distinção crucial que ele não faz: o voto obrigatório não garante qualidade de escolha, mas garante representatividade quantitativa. E numa democracia com altos índices de desigualdade, onde os mais pobres têm menor propensão a votar voluntariamente (por desconfiança do sistema, dificuldade de acesso, jornadas de trabalho exaustivas), o voto facultativo tende a sobre-representar os mais privilegiados. O Brasil que escolhe sem obrigatoriedade não é necessariamente mais sábio — pode ser simplesmente mais rico. Por isso mantenho minha posição, reconhecendo a objeção mas considerando seu peso menor que o problema que resolve." },
          { type: "analysis", prompt: "Qual é a diferença entre apelo emocional legítimo e manipulação emocional?", answer: "O apelo emocional é legítimo quando a emoção é genuinamente relevante para o argumento e não substitui o raciocínio, mas o complementa. Mostrar imagens de crianças afetadas por poluição num argumento sobre regulação ambiental é legítimo: a emoção que provoca (compaixão, indignação) é proporcional ao problema e não distorce o argumento. A manipulação emocional usa emoção para desviar do argumento: mostrar uma bandeira nacional para criar orgulho antes de argumentar sobre política de imigração, por exemplo, usa emoção para criar viés antes que o raciocínio comece. O teste: a emoção provocada seria proporcional e relevante se o argumento fosse avaliado de forma neutra? Se sim, é legítima. Se não, é manipulação." },
          { type: "production", prompt: "Defenda uma posição impopular de forma ética e eficaz: 'Redes sociais deveriam ser pagas.'", answer: "Sei que a afirmação que estou prestes a defender é impopular — e reconheço o interesse legítimo que qualquer pessoa tem em manter o acesso gratuito à comunicação. Dito isso: redes sociais gratuitas não são gratuitas — são pagas com atenção e dados pessoais, num modelo que sistematicamente incentiva o engajamento acima da veracidade e o conflito acima da conversação. A questão não é se deveríamos pagar, mas o que pagamos. Um modelo de assinatura eliminaria o incentivo ao engajamento tóxico (sem receita de anúncio, não há benefício em maximizar o tempo de tela). Criaria um problema de inclusão — o que é real e sério. Mas o modelo atual também cria um problema de inclusão: inclui a todos numa infraestrutura que está, segundo evidências crescentes, deteriorando a saúde mental coletiva e a qualidade do debate democrático. Entre dois problemas sérios, precisamos escolher o menos ruim. Não estou certo de qual é — mas acho que deveríamos parar de fingir que o modelo atual é gratuito." },
          { type: "production", prompt: "Escreva um texto que revela o interesse pessoal do autor antes de argumentar.", answer: "Devo revelar meu interesse antes de argumentar: sou professor universitário e, portanto, tenho interesse material na valorização da educação superior pública. O leitor deve calibrar meus argumentos considerando que defendo um sistema do qual me beneficio. Dito isso — e porque dito isso não invalida o argumento, apenas o contextualiza —: o ensino superior público brasileiro produz 95% da pesquisa científica do país, forma a maior parte dos profissionais de saúde que atendem pelo SUS, e é acessado cada vez mais pelas camadas populares graças às cotas. Argumentar por seu desfinanciamento não é posição neutra: tem consequências específicas sobre quem perde e quem ganha. Eu sou um dos que ganhariam com o fortalecimento — e mesmo assim acredito que os dados justificam a posição independentemente de quem a defende." },
          { type: "analysis", prompt: "Por que apresentar a posição contrária em sua versão mais forte torna você mais persuasivo?", answer: "Apresentar a posição contrária em sua versão mais fraca (um espantalho) é tentador mas contraproducente: leitores que conhecem o tema percebem que você está evitando o argumento real, o que destrói sua credibilidade. Apresentar a versão mais forte demonstra várias coisas valiosas: você conhece profundamente o debate, não teme o melhor argumento contrário, e sua posição sobrevive ao teste mais rigoroso. Isso é o Princípio de Caridade — tratar o interlocutor intelectual com respeito. O paradoxo é que conceder força ao argumento adversário antes de refutá-lo faz sua refutação parecer mais sólida: se você foi generoso com o outro lado e ainda assim manteve sua posição, o leitor confia que sua posição é robusta." }
        ]
      },
      {
        id: "MASTER-U3-L5",
        title: "Revisão e produção integrada Master-U3",
        objectives: ["Integrar debate intelectual, apresentação acadêmica, crítica cultural e persuasão ética", "Demonstrar pensamento público de excelência em português"],
        shadowingDialogue: {
          title: "O pensamento que encontra o mundo",
          lines: [
            { speaker: "Mestra", text: "O intelectual público tem a responsabilidade mais difícil: pensar com rigor e comunicar com clareza para pessoas que não têm o tempo de fazer os dois." },
            { speaker: "Aluno", text: "É uma tradução permanente — da profundidade para a acessibilidade e de volta." },
            { speaker: "Mestra", text: "Sem perder nada essencial nos dois sentidos. Isso é o que distingue o intelectual do especialista." },
            { speaker: "Aluno", text: "O especialista sabe muito sobre pouco. O intelectual público conecta muito ao que importa agora." },
            { speaker: "Mestra", text: "E faz isso em público, assumindo o risco do erro, da simplificação, da crítica. Coragem epistêmica." }
          ]
        },
        keyPhrases: [
          "Intelectual público: rigor + clareza + coragem epistêmica",
          "Traduzir sem trair: a arte de tornar complexo acessível",
          "Assumir posição pública é aceitar o risco do erro",
          "Dizer 'não sei' publicamente é a maior das coragens intelectuais"
        ],
        guidedProduction: [
          "Escreva um artigo de opinião de 250 palavras sobre um tema de sua área.",
          "Apresente uma posição complexa em 3 frases para um público amplo.",
          "Escreva sobre um tema em que você mudou de ideia recentemente."
        ],
        grammar: {
          title: "Revisão Master-U3",
          explanation: "Consolida: debate intelectual (refutação construtiva, reconhecer derrota, pergunta socrática), apresentação acadêmica (CARS, resultado negativo, resposta a banca), crítica cultural (âncora específica, posição clara, jargão mínimo), persuasão ética (princípio de caridade, concessão, antecipação de objeções).",
          conjugation: "Síntese Master-U3: refutação construtiva / reconhecer derrota intelectual / CARS acadêmico / âncora específica em crítica / princípio de caridade / concessão estratégica / persuasão ética"
        },
        exercises: [
          { type: "production", prompt: "Escreva um artigo de opinião de 200 palavras sobre um tema que você conhece bem.", answer: "O Brasil tem um dos maiores sistemas de ensino superior público do mundo — e um dos mais desconhecidos pelos próprios brasileiros. Quando se discute financiamento universitário, o debate frequentemente ignora um dado fundamental: as universidades federais brasileiras são responsáveis por mais de 90% da pesquisa científica do país. Não 50%. Não 70%. Mais de 90%. Isso significa que qualquer política de desfinanciamento do ensino superior público não é apenas uma questão educacional — é uma política de pesquisa e desenvolvimento. E desenvolvimento, como qualquer economista concordaria, é condição para crescimento sustentável de longo prazo. Países que investiram em educação superior pública de qualidade — Coreia do Sul, Finlândia, Alemanha — colheram décadas depois em forma de inovação tecnológica e produtividade. Países que desinvestiram enfrentaram dependência tecnológica crescente. O Brasil está, neste momento, numa encruzilhada. As escolhas feitas nos próximos anos sobre financiamento universitário determinarão em que lado dessa divisão o país estará em 2050. Isso mereceria um debate público mais informado do que temos tido." },
          { type: "production", prompt: "Apresente uma posição complexa sobre IA e trabalho em 3 frases para público amplo.", answer: "A inteligência artificial vai transformar o mercado de trabalho — mas o maior risco não é que ela crie desemprego, e sim que crie desemprego para quem menos tem condições de se adaptar. A tecnologia já substituiu trabalhos repetitivos antes, e sempre criou outros — mas dessa vez a velocidade da mudança pode ser mais rápida do que nossa capacidade de requalificar trabalhadores. O que precisamos não é de menos IA, mas de mais política pública que prepare as pessoas para o mundo que a IA está criando." },
          { type: "production", prompt: "Escreva sobre algo em que você mudou de ideia recentemente — com honestidade intelectual.", answer: "Durante anos defendi que redes sociais eram primariamente neutras — ferramentas cujo efeito dependia do uso. Mudei de ideia. O que me convenceu não foi um argumento único, mas o acúmulo de evidências sobre como os algoritmos são desenhados: não para o usuário, mas para o tempo de tela; não para a qualidade do debate, mas para o engajamento; não para o bem-estar, mas para a dependência. Isso não é uso — é o design do produto. E quando o design incentiva sistematicamente comportamentos que são prejudiciais para os usuários e para a democracia, a neutralidade da ferramenta é uma ilusão. Não gosto de ter mudado de ideia porque a nova posição é mais pessimista. Mas as evidências não me deixam outra escolha." },
          { type: "production", prompt: "Escreva a abertura de uma crítica cultural que começa com posição polêmica.", answer: "'Tropa de Elite 2' (2010) é um filme fascista — e o maior sucesso de bilheteria do cinema brasileiro. Essas duas afirmações não se contradizem; se complementam tragicamente. O filme apresenta a violência estatal como solução para problemas estruturais, glorifica a brutalidade policial como virtude e oferece ao público o prazer culpado de aplaudir a força como justiça. Que tenha feito isso com habilidade cinematográfica inegável é o que o torna perigoso, não apenas ruim." },
          { type: "analysis", prompt: "Por que dizer 'não sei' publicamente é considerada a maior coragem intelectual?", answer: "Dizer 'não sei' publicamente é difícil por razões estruturais: o espaço público incentiva certeza, não dúvida; quem expressa incerteza parece menos competente; e há pressão para ter resposta para tudo, especialmente quando se tem status intelectual. Mas dizer 'não sei' quando é a resposta honesta é a forma mais radical de integridade epistêmica. Significa: valoro a verdade mais do que minha reputação de onisciência. Significa: não vou afirmar além do que os dados permitem. Significa: o problema é mais complexo do que minha expertise atual alcança. Intelectuais que nunca dizem 'não sei' são suspeitos — ninguém sabe tudo, e quem finge saber tudo está substituindo sabedoria por performance. A coragem está em aceitar publicamente os limites do que você sabe, num ambiente que pune a humildade epistêmica e recompensa a certeza falsa." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 4 — Brasil no Século XXI: Questões do Nosso Tempo
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U4",
    title: "Brasil no Século XXI: Questões Urgentes do Nosso Tempo",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U4-L1",
        title: "Democracia brasileira: fragilidades e forças",
        objectives: ["Analisar a democracia brasileira com profundidade crítica Master", "Discutir ameaças e forças do sistema democrático brasileiro"],
        shadowingDialogue: {
          title: "A democracia que não se dava como certa",
          lines: [
            { speaker: "Cientista política", text: "A Constituição de 1988 foi chamada de 'Constituição Cidadã' — mas ela completou 35 anos sob pressão constante." },
            { speaker: "Aluno", text: "O Brasil não é exemplo de democracia consolidada?" },
            { speaker: "Cientista política", text: "Demonstração de que democracia não se consolida de uma vez — é um processo contínuo de luta." },
            { speaker: "Aluno", text: "O que mais ameaça a democracia brasileira hoje?" },
            { speaker: "Cientista política", text: "Não uma coisa só: é a combinação de desinformação, desigualdade e descrença nas instituições. Nenhuma isolada derruba; as três juntas, sim." }
          ]
        },
        keyPhrases: [
          "Constituição de 1988: 'Constituição Cidadã' — avanços e tensões",
          "Desinformação + desigualdade + descrença = risco democrático",
          "Instituições vs. líderes: democracia que depende de líderes é frágil",
          "Participação social: movimentos, organizações, imprensa livre"
        ],
        guidedProduction: [
          "Quais são as maiores ameaças à democracia brasileira contemporânea?",
          "O que diferencia uma democracia consolidada de uma frágil?",
          "Como a desigualdade social afeta a qualidade democrática?"
        ],
        grammar: {
          title: "Vocabulário Político-Democrático Master",
          explanation: "Democracia liberal: sistema que combina eleições livres com proteção de direitos individuais e minorias. Populismo: apelo direto ao 'povo' contra as 'elites', frequentemente contornando instituições. Backsliding democrático: erosão gradual de normas e instituições democráticas sem golpe formal. Polarização: divisão da sociedade em campos opostos com pouca comunicação. Desinformação: informação falsa disseminada intencionalmente. Estado de direito: todos (inclusive o governo) sujeitos à lei.",
          conjugation: "Termos Master: backsliding democrático / normas não escritas / erosão institucional / polarização afetiva / populismo de direita/esquerda / estado de direito / checks and balances / separação de poderes"
        },
        exercises: [
          { type: "analysis", prompt: "O que é 'backsliding democrático' e como se manifesta no Brasil contemporâneo?", answer: "Backsliding democrático (Steven Levitsky e Daniel Ziblatt) é a erosão gradual das normas e instituições democráticas por líderes eleitos, sem um golpe de estado formal. Diferente da ruptura democrática clássica (tanques nas ruas), o backsliding ocorre incrementalmente: questionamento da legitimidade das eleições, ataques à imprensa livre e ao judiciário independente, pressão sobre forças armadas, enfraquecimento de órgãos de fiscalização. No Brasil contemporâneo, manifestações desse processo incluíram: questionamento sistemático da urna eletrônica sem evidências, ataques a ministros do STF, e o 8 de janeiro de 2023 como ponto culminante de uma campanha de deslegitimação institucional. A democracia brasileira resistiu — mas as cicatrizes institucionais persistem." },
          { type: "production", prompt: "Como a desigualdade social afeta a qualidade democrática? Argumente em 4 frases.", answer: "A desigualdade econômica extrema corrói a democracia de formas múltiplas e interdependentes. Primeiramente, concentra poder político: quem tem mais recursos tem mais capacidade de influenciar campanhas, lobbies e formação de opinião — o que distorce a igualdade formal do voto. Em segundo lugar, dificulta a participação: cidadãos que trabalham 12 horas por dia em empregos precários têm menos tempo e energia para se informar e participar politicamente. Terceiro, aumenta a vulnerabilidade à manipulação populista: em contextos de desigualdade extrema, a retórica do 'povo vs. elite' ressoa com mais força e pode ser instrumentalizada por líderes antidemocráticos." },
          { type: "analysis", prompt: "Por que democracias que dependem de líderes são mais frágeis que as que dependem de instituições?", answer: "Democracias baseadas em líderes carecem de resiliência institucional: quando o líder sai — por eleição, morte ou escândalo —, não há mecanismos internalizados que garantam a continuidade democrática. As 'normas não escritas' (Levitsky e Ziblatt) — a lealdade ao sistema mesmo quando em desvantagem, a auto-contenção dos líderes mesmo quando poderiam concentrar poder — são interiorizadas por décadas de prática institucional, não produzidas por um bom líder individual. Democracias robustas como a alemã pós-45 foram desenhadas especificamente para não depender da virtude dos líderes: mecanismos institucionais (corte constitucional forte, imprensa livre, sociedade civil organizada) funcionam independentemente de quem está no poder." },
          { type: "production", prompt: "Escreva um parágrafo sobre o papel da imprensa livre na democracia brasileira.", answer: "A imprensa livre é um dos pilares mais contestados e mais necessários da democracia brasileira. Contestado porque a mídia tradicional tem histórico de parcialidade e representação desigual de interesses — crítica que a esquerda faz com razão. Necessário porque, sem jornalismo investigativo independente, escândalos como o Mensalão e a Lava Jato não teriam chegado à luz pública — o que a direita frequentemente esquece quando ataca a mídia. O ambiente contemporâneo de redes sociais e desinformação tornou mais urgente, não menos, a existência de jornalismo com metodologia verificável e responsabilidade editorial. Uma democracia sem imprensa livre pode funcionar por algum tempo — mas sem os olhos que revelam o que o poder preferia esconder, degenera progressivamente." },
          { type: "production", prompt: "O Brasil de 2024 é mais ou menos democrático do que o de 1988? Argumente com nuances.", answer: "A pergunta pressupõe uma escala linear que a realidade não oferece. Em algumas dimensões, o Brasil de 2024 é inequivocamente mais democrático: o eleitorado é maior e mais diverso, as cotas ampliaram o acesso ao poder de grupos historicamente excluídos, a transparência governamental tem instrumentos que não existiam em 1988. Em outras dimensões, há regressão: a polarização afetiva atingiu níveis sem precedentes na história recente, a desinformação digitalizada criou um ambiente informacional que a Constituição de 1988 não poderia prever, e o 8 de janeiro revelou que a vulnerabilidade a tentativas de ruptura democrática é real. A resposta honesta é: mais democrático em acesso, mais frágil em coesão. E coesão é também condição da democracia." }
        ]
      },
      {
        id: "MASTER-U4-L2",
        title: "Futuro do Brasil: desafios e potenciais do século XXI",
        objectives: ["Analisar os desafios estruturais do Brasil com perspectiva de longo prazo", "Articular uma visão de futuro fundamentada e crítica"],
        shadowingDialogue: {
          title: "O Brasil que pode ser",
          lines: [
            { speaker: "Futurista", text: "O Brasil tem ativos únicos para o século XXI: biodiversidade, energia renovável, jovem população africana crescente." },
            { speaker: "Aluno", text: "E os passivos: desigualdade estrutural, educação deficiente, violência, corrupção." },
            { speaker: "Futurista", text: "Todo país tem passivos. A questão é se os ativos são suficientemente extraordinários para compensar." },
            { speaker: "Aluno", text: "Os ativos do Brasil são extraordinários. O problema é a incapacidade de convertê-los em desenvolvimento." },
            { speaker: "Futurista", text: "Isso é um problema de instituições, não de recursos. E instituições podem mudar — mais lentamente do que queremos, mas mudam." }
          ]
        },
        keyPhrases: [
          "Ativos do Brasil para o século XXI: biodiversidade, energia, juventude",
          "Passivos estruturais: desigualdade, educação, violência, corrupção",
          "Conversão de potencial em desenvolvimento: um problema de instituições",
          "Visão de longo prazo: o Brasil de 2050"
        ],
        guidedProduction: [
          "Quais são os maiores ativos do Brasil para o século XXI?",
          "O que impede o Brasil de converter seu potencial em desenvolvimento?",
          "Escreva sua visão do Brasil em 2050 — fundamentada, não utópica."
        ],
        grammar: {
          title: "Análise Prospectiva Master",
          explanation: "Análise SWOT aplicada a países: Strengths (vantagens competitivas estruturais), Weaknesses (vulnerabilidades estruturais), Opportunities (tendências globais favoráveis), Threats (riscos externos). Para o Brasil: S: biodiversidade, energia renovável (90% da matriz), agronegócio líder mundial, diversidade cultural, população jovem. W: desigualdade extrema, infraestrutura deficiente, custo Brasil, desindustrialização. O: transição energética global (o Brasil já está posicionado), crescimento africano (CPLP), demanda por proteína. T: mudança climática (ameaça ao agro e à Amazônia), instabilidade política, competição tecnológica.",
          conjugation: "Vocabulário prospectivo: projeção / cenário / tendência / janela de oportunidade / ponto de inflexão / variável crítica / horizonte temporal / resiliência / vulnerabilidade sistêmica"
        },
        exercises: [
          { type: "production", prompt: "Escreva uma análise de 3 ativos do Brasil para o século XXI com evidências.", answer: "Três ativos estruturais do Brasil para o século XXI merecem atenção especial. Primeiro, a matriz energética: com 90% da eletricidade gerada por fontes renováveis (hídrica, eólica, solar e biomassa), o Brasil já está posicionado onde o mundo está tentando chegar — a transição energética é uma janela de oportunidade, não um problema. Segundo, o agronegócio sustentável: o Brasil é líder mundial em produção de soja, carne, café e laranja, com crescente incorporação de práticas de baixo carbono — a demanda global por proteína e a consciência climática criam oportunidade para um agro que se diferencia por sustentabilidade. Terceiro, a biodiversidade: com 12% da água doce mundial e a maior floresta tropical, o Brasil tem ativos ecossistêmicos que serão cada vez mais valiosos num mundo de escassez de recursos naturais — desde que consiga monetizá-los sem destruí-los." },
          { type: "analysis", prompt: "Por que o Brasil tem dificuldade de converter potencial em desenvolvimento?", answer: "A literatura sobre desenvolvimento econômico converge em torno de algumas explicações para o caso brasileiro. O 'custo Brasil' — a combinação de carga tributária elevada, burocracia excessiva e infraestrutura deficiente — encarece a produção e desincentiva investimentos. A desindustrialização precoce (o Brasil começou a desindustrializar com nível de renda muito inferior ao dos países que seguiram esse caminho) limitou o desenvolvimento tecnológico. A desigualdade educacional produz uma força de trabalho com habilidades insuficientes para a economia do conhecimento. Mas o fator mais frequentemente citado é institucional: a incapacidade de construir políticas de Estado (que persistem além de governos) em vez de políticas de governo. O Brasil muda de direção a cada eleição — e nenhuma direção é sustentada tempo suficiente para produzir resultados estruturais." },
          { type: "production", prompt: "Escreva sua visão do Brasil em 2050 — em 5 frases, fundamentada e sem utopia.", answer: "O Brasil de 2050 será provavelmente mais igualitário do que hoje — não por virtude, mas por necessidade demográfica: uma população mais velha e com menos filhos precisará de uma economia mais produtiva, o que exige trabalhadores mais qualificados, o que exige melhor educação, o que produz mobilidade social. Será também mais presente no mundo lusófono africano, que terá dobrado ou triplicado em população — uma oportunidade diplomática e econômica que o Brasil começa a reconhecer. O desafio mais sério é a mudança climática: partes do Nordeste enfrentarão condições de aridez severa, e a gestão da Amazônia determinará não apenas o clima local mas o global — com toda a pressão geopolítica que isso implica. A democracia provavelmente sobreviverá — não porque os riscos terão desaparecido, mas porque os brasileiros demonstraram, em múltiplos momentos, uma capacidade de resistir que surpreende quem esperava o pior. E o Brasil continuará sendo, como sempre foi, um lugar onde a criatividade cultural compensa o que as instituições ainda não conseguem." },
          { type: "production", prompt: "Argumente: 'O problema do Brasil não é falta de recursos, é falta de instituições.'", answer: "O Brasil tem recursos naturais, humanos e culturais que justificariam um dos maiores índices de desenvolvimento do mundo. Tem a maior biodiversidade do planeta, a maior reserva de água doce, uma matriz energética já renovável, um agronegócio que alimenta bilhões, uma criatividade cultural de alcance global. E ainda assim tem uma das maiores desigualdades do mundo, uma educação pública deficiente e índices de violência comparáveis a países em conflito. Essa contradição não se explica pela falta de recursos — explica-se pela dificuldade de construir instituições que convertam recursos em bem-estar. Regras estáveis, contratos honrados, investimento público que persiste além do governo que o iniciou, imposto de renda progressivo que funciona. Países escandinavos não têm os recursos do Brasil. Têm instituições. O que o Brasil precisa não é de mais riqueza — é de uma distribuição melhor e de um Estado que funcione independentemente de quem o governa." },
          { type: "analysis", prompt: "Qual é o papel da diversidade cultural brasileira como ativo para o século XXI?", answer: "A diversidade cultural brasileira é um ativo subestimado para o século XXI por razões que vão além do turismo e da 'marca Brasil'. Primeiro, a criatividade cultural gera exportações reais: a música brasileira (MPB, funk, sertanejo, bossa nova), o cinema, a moda e o design têm alcance global crescente — e cultura é uma das indústrias que a IA ainda não consegue replicar com autenticidade. Segundo, a diversidade étnica e cultural é fator de inovação: pesquisas consistentes mostram que equipes diversas produzem soluções mais criativas para problemas complexos. Terceiro, a experiência brasileira de convivência entre culturas radicalmente distintas — com todos os seus conflitos e tensões — é uma expertise que poucos países têm e que será cada vez mais necessária num mundo de migrações crescentes. O Brasil não resolveu seus problemas de racismo e desigualdade. Mas acumulou séculos de experiência em viver com diferença, o que é diferente." }
        ]
      },
      {
        id: "MASTER-U4-L3",
        title: "Filosofia da educação: o que e por que ensinar",
        objectives: ["Discutir filosofia da educação com profundidade crítica Master", "Articular uma visão de educação para o século XXI"],
        shadowingDialogue: {
          title: "Para que serve a escola?",
          lines: [
            { speaker: "Filósofa", text: "Antes de discutir como melhorar a educação, precisamos perguntar: melhorar para quê? Para qual finalidade?" },
            { speaker: "Aluno", text: "Para preparar para o mercado de trabalho, diria a resposta padrão." },
            { speaker: "Filósofa", text: "E se o mercado de trabalho do futuro exige habilidades que ainda não sabemos quais são?" },
            { speaker: "Aluno", text: "Então talvez a educação precise ensinar a aprender, não o que aprender." },
            { speaker: "Filósofa", text: "Paulo Freire diria que precisa ensinar a questionar. A diferença não é pequena." }
          ]
        },
        keyPhrases: [
          "Freire: educação bancária vs. educação problematizadora",
          "Educação para o mercado vs. educação para a cidadania",
          "Aprender a aprender: a meta-habilidade do século XXI",
          "Currículo como política: o que se ensina define o que se valoriza"
        ],
        guidedProduction: [
          "O que é a 'educação bancária' de Freire e por que é problemática?",
          "Para que deve servir a educação no século XXI?",
          "O que deveria estar no currículo que não está?"
        ],
        grammar: {
          title: "Vocabulário de Filosofia da Educação Master",
          explanation: "Educação bancária (Freire): modelo em que o professor 'deposita' conhecimento no aluno passivo. Educação problematizadora: processo dialógico onde educando e educador constroem conhecimento juntos. Currículo: conjunto de conteúdos, habilidades e valores que a escola ensina — explícito e oculto (o currículo oculto são as normas implícitas que a escola transmite sem ensinar formalmente). Avaliação somativa vs. formativa: a somativa mede resultado final; a formativa acompanha o processo e orienta a aprendizagem. PISA: avaliação internacional de competências de estudantes de 15 anos.",
          conjugation: "Perspectivas: 'A educação deve formar cidadãos críticos' / 'A educação deve preparar para o mercado' / 'A educação deve transmitir a herança cultural' / 'A educação deve desenvolver o potencial individual' — tensões entre finalidades"
        },
        exercises: [
          { type: "analysis", prompt: "O que é 'educação bancária' de Freire e por que é problemática?", answer: "Paulo Freire chamou de 'educação bancária' o modelo em que o professor é sujeito ativo que 'deposita' conhecimento no aluno passivo, como se fosse uma conta bancária. O aluno recebe, memoriza, reproduz — mas não cria, questiona ou transforma. Para Freire, esse modelo é problemático em múltiplas dimensões: epistemologicamente, ignora que o conhecimento é construído, não transmitido; politicamente, produz sujeitos passivos que aceitam a realidade como dada em vez de questioná-la; pedagogicamente, não funciona porque memória descontextualizada se perde rapidamente. A alternativa freireana é a educação problematizadora: o processo dialógico onde educando e educador, juntos, investigam e constroem conhecimento a partir da experiência do educando — com o objetivo de que ele possa transformar a própria realidade." },
          { type: "production", prompt: "Para que deve servir a educação no século XXI? Argumente com 4 perspectivas.", answer: "Há pelo menos quatro perspectivas legítimas e tensas entre si sobre a finalidade da educação no século XXI. A perspectiva econômica: a educação deve preparar para um mercado de trabalho em transformação acelerada — o que implica foco em pensamento crítico, criatividade e aprendizado contínuo, mais que em conteúdos específicos que serão obsoletos. A perspectiva cívica: a educação deve formar cidadãos capazes de participar democraticamente — o que exige letramento político, pensamento crítico sobre informação e capacidade de diálogo em contexto de diversidade. A perspectiva humanista: a educação deve desenvolver o potencial humano integral — estético, ético, intelectual — independentemente da utilidade imediata. A perspectiva crítica (Freire): a educação deve ser instrumento de transformação social — formando sujeitos que questionam e agem sobre a própria realidade. Uma educação de qualidade integra as quatro, reconhecendo suas tensões." },
          { type: "production", prompt: "O que deveria estar no currículo escolar que não está? Defenda sua posição.", answer: "Defendo que o currículo brasileiro deveria incluir de forma sistemática o que chamarei de 'epistemologia prática': como se avalia a confiabilidade de uma fonte, como se distingue correlação de causalidade, como se identifica uma falácia, como se reconhece um viés cognitivo próprio. Essas competências são pré-condição para qualquer outro aprendizado — e para uma cidadania democrática num ambiente de desinformação. Atualmente, estudantes aprendem conteúdos (história, biologia, matemática) mas raramente aprendem a avaliar a qualidade do próprio conhecimento. O resultado é que adultos formados pelo sistema educacional brasileiro são frequentemente vulneráveis à desinformação — não por falta de educação, mas por um tipo específico de lacuna: saber coisas sem saber como avaliar o que sabem." },
          { type: "analysis", prompt: "O que é o 'currículo oculto' e como molda estudantes?", answer: "O currículo oculto são os valores, normas e hierarquias que a escola transmite implicitamente — não no que ensina, mas em como ensina. A organização do espaço escolar (filas, carteiras viradas para o professor) ensina que o conhecimento flui em uma direção. O sistema de avaliação ensina que errar é punível. A seleção de autores nos livros didáticos ensina quem conta e quem não conta na história. A forma como professores interagem com estudantes de diferentes origens ensina quem merece atenção e expectativa. Para Bourdieu, o currículo oculto é um mecanismo de reprodução social: ele prepara estudantes de classes dominantes para posições dominantes e estudantes de classes subalternas para posições subalternas — não por intenção explícita, mas por uma adequação entre o capital cultural da família e as expectativas implícitas da escola." },
          { type: "production", prompt: "Escreva um parágrafo sobre Paulo Freire que faça sentido para alguém que nunca o leu.", answer: "Paulo Freire foi um educador brasileiro que fez uma pergunta simples e revolucionária: a quem serve a educação? Sua resposta, em 'Pedagogia do Oprimido' (1968), foi que a educação tradicional serve à manutenção do status quo — ela transmite o conhecimento dos poderosos para os menos poderosos, de cima para baixo, como se fosse um favor. Freire propôs o contrário: que a educação deveria partir da experiência do educando, que o professor deveria aprender com o aluno enquanto ensina, e que o objetivo final não é que o aluno reproduza conhecimento existente, mas que desenvolva a capacidade de questionar a realidade e transformá-la. Ele praticou isso alfabetizando camponeses nordestinos não com cartilhas abstratas, mas com palavras do próprio cotidiano deles. Foi exilado em 1964. Suas ideias atravessaram o mundo. Hoje é o educador brasileiro mais citado internacionalmente." }
        ]
      },
      {
        id: "MASTER-U4-L4",
        title: "Língua, poder e resistência: o português como campo político",
        objectives: ["Analisar a dimensão política da língua portuguesa com profundidade Master", "Articular uma visão crítica da relação entre língua e poder no Brasil"],
        shadowingDialogue: {
          title: "A língua que incluía e excluía",
          lines: [
            { speaker: "Sociolinguista", text: "A escola brasileira sempre ensinou uma versão do português como se fosse a única — e estigmatizou tudo que se desviasse dela." },
            { speaker: "Aluno", text: "E isso teve consequências políticas: quem 'fala errado' é percebido como menos inteligente, menos capaz." },
            { speaker: "Sociolinguista", text: "É um mecanismo de exclusão muito eficiente porque parece neutro. 'Não é preconceito — ele simplesmente não sabe falar.'." },
            { speaker: "Aluno", text: "Como a linguística descritiva desafia isso?" },
            { speaker: "Sociolinguista", text: "Mostrando que todas as variedades são igualmente sistemáticas. Não há 'não saber falar' — há falar de formas diferentes." }
          ]
        },
        keyPhrases: [
          "Preconceito linguístico como mecanismo de exclusão social",
          "Norma culta como construção histórica, não como língua 'correta'",
          "Variação linguística como direito: Bagno e a desmitificação do português",
          "A língua dos excluídos: criatividade e resistência no falar popular"
        ],
        guidedProduction: [
          "Como o preconceito linguístico funciona como instrumento de exclusão?",
          "O que Marcos Bagno quer dizer com 'preconceito linguístico'?",
          "A língua popular brasileira é 'errada' ou é diferente? Qual é a distinção correta?"
        ],
        grammar: {
          title: "Língua e Poder: Perspectiva Crítica Master",
          explanation: "Marcos Bagno ('Preconceito Linguístico', 1999): desmitificação do 'português correto' como variedade superior. A norma culta é a variedade de prestígio, não a 'correta'. Todas as variedades são igualmente sistemáticas. A escola que ensina 'certo/errado' em vez de 'adequado/inadequado ao contexto' produz exclusão social. Linguística descritiva vs. prescritiva: descritiva observa como a língua é usada; prescritiva estabelece como deveria ser usada. O 'erro' na perspectiva descritiva é apenas divergência da norma de prestígio.",
          conjugation: "Distinções críticas: certo/errado (prescritivo, político) vs. adequado/inadequado ao contexto (descritivo, comunicativo) / norma culta (prestígio histórico) vs. língua correta (ficção normativa) / preconceito linguístico vs. educação para diversidade de registros"
        },
        exercises: [
          { type: "analysis", prompt: "Como o preconceito linguístico funciona como mecanismo de exclusão social?", answer: "O preconceito linguístico é particularmente eficaz como mecanismo de exclusão porque se apresenta como avaliação objetiva ('ele não sabe falar') enquanto é, na verdade, avaliação social ('ele não pertence ao grupo que detém o poder simbólico'). Funciona assim: a variedade da língua associada às classes dominantes é declarada 'correta'; as variedades das classes populares, das periferias, das regiões estigmatizadas são declaradas 'erradas'. Quem fala a variedade 'errada' é excluído de certas posições sociais não por incompetência, mas por não falar 'certo'. Como a competência é avaliada parcialmente pela forma de falar, o preconceito linguístico exclui antes mesmo de avaliar a capacidade real. O que parece meritocracia (o mais competente é selecionado) é, na verdade, filtragem cultural (o que fala 'certo' é selecionado)." },
          { type: "production", prompt: "Explique a distinção entre linguística prescritiva e descritiva e sua importância política.", answer: "A linguística prescritiva estabelece como a língua deveria ser usada — produz gramáticas normativas, manuais de redação, regras de 'certo e errado'. A linguística descritiva observa como a língua é realmente usada, sem julgamento de valor — produz análises de variedades, dialetos, mudanças em curso. A distinção tem implicações políticas cruciais: a linguística prescritiva, ao estabelecer uma variedade como 'correta', implicitamente deslegitima todas as outras. A linguística descritiva mostra que todas as variedades têm gramática própria, regularidade interna e eficiência comunicativa. Isso não significa que a escola não deva ensinar a norma culta — deve, pois é a variedade de acesso ao poder — mas que deve fazê-lo reconhecendo que está ensinando um registro social específico, não a língua 'certa'." },
          { type: "production", prompt: "Escreva um parágrafo sobre a criatividade da língua popular brasileira.", answer: "A língua popular brasileira é um dos maiores laboratórios de criatividade lexical e semântica do mundo. 'Mitar' (executar algo com excelência absoluta), 'lacrar' (impressionar, arrasar), 'tá na mão' (está perdido), 'dar match' (encontrar compatibilidade afetiva) — neologismos que surgem nas periferias e favelas e que eventualmente alcançam toda a sociedade. O funk e o rap brasileiros são máquinas de produção de linguagem: criam vocabulário, reinventam significados, jogam com a sonoridade de formas que a gramática normativa não prevê e não poderia prever. Essa criatividade não é 'degradação' da língua — é a língua cumprindo sua função mais vital: nomear experiências novas com formas novas, criadas por quem as vive." },
          { type: "analysis", prompt: "O que significa dizer que 'a língua é campo de luta política'?", answer: "Dizer que a língua é campo de luta política significa que as escolhas linguísticas — quais palavras existem, como se nomeiam fenômenos sociais, qual variedade é considerada legítima — não são neutras: refletem e reproduzem relações de poder. Quando o movimento negro introduz 'racismo estrutural' no vocabulário público, está lutando por uma categoria que torna visível o que antes ficava invisível. Quando governos proíbem certas palavras em currículos escolares ('gênero', 'diversidade'), estão tentando limitar o que pode ser pensado. Quando a linguística prescritiva declara 'errada' a variedade das classes populares, está legitimando uma hierarquia social através de uma hierarquia linguística. Nomear é um ato de poder — e questionar o que pode ser nomeado é um ato de resistência." },
          { type: "production", prompt: "Defenda a afirmação: 'Ensinar a norma culta sem ensinar a diversidade linguística é uma educação incompleta.'", answer: "Ensinar apenas a norma culta sem contextualizar sua natureza histórica e social produz dois problemas. Primeiro, um problema cognitivo: o estudante aprende uma versão da língua sem entender por que existe, como se formou e em que contextos se aplica — um conhecimento sem ancoragem na realidade da língua que vive e muda. Segundo, um problema político: a escola que diz 'isso está errado' sem explicar 'isso é diferente da variedade de prestígio' transmite a mensagem implícita de que a variedade do estudante — e portanto sua família, sua comunidade, sua origem — é inferior. Uma educação linguística completa ensina a norma culta como ferramenta de acesso ao poder institucional, ao mesmo tempo que reconhece a legitimidade e a riqueza das variedades que o estudante traz de casa. Não como concessão condescendente — como verdade linguística." }
        ]
      },
      {
        id: "MASTER-U4-L5",
        title: "Revisão e produção integrada Master-U4",
        objectives: ["Integrar democracia, futuro do Brasil, educação e língua-poder em produção Master", "Demonstrar pensamento crítico integrado sobre o Brasil contemporâneo"],
        shadowingDialogue: {
          title: "O Brasil como projeto",
          lines: [
            { speaker: "Mestra", text: "Há uma frase de que gosto muito: 'O Brasil não é um país — é um projeto'. O que você entende por isso?" },
            { speaker: "Aluno", text: "Que o Brasil ainda está em construção — que o que é não é tudo o que pode ser." },
            { speaker: "Mestra", text: "E que o que pode ser depende do que fazemos agora. Cada geração herda o projeto e o passa adiante." },
            { speaker: "Aluno", text: "Um projeto nunca terminado, mas que se deteriora se não for habitado ativamente." },
            { speaker: "Mestra", text: "Democracia, educação, língua — tudo que estudamos nesta unidade é parte desse projeto. E você, agora, faz parte dele." }
          ]
        },
        keyPhrases: [
          "O Brasil como projeto: em construção permanente",
          "Democracia + educação + língua: três pilares de uma sociedade justa",
          "O papel de quem aprende português: não apenas consumidor, mas agente",
          "A responsabilidade do falante avançado: usar a língua para o bem público"
        ],
        guidedProduction: [
          "Escreva sobre o Brasil como você o vê e como você o gostaria de ver.",
          "Qual é a responsabilidade de quem aprende português como segunda língua?",
          "O que o Master em português te deu como ferramenta para entender o Brasil?"
        ],
        grammar: {
          title: "Revisão Master-U4",
          explanation: "Consolida: democracia brasileira (backsliding, instituições vs. líderes, papel da imprensa), futuro do Brasil (ativos, passivos, conversão de potencial), filosofia da educação (Freire, currículo oculto, educação para o século XXI), língua e poder (preconceito linguístico, descritiva vs. prescritiva, criatividade popular).",
          conjugation: "Síntese Master-U4: backsliding democrático / norma culta como construção / educação bancária vs. problematizadora / preconceito linguístico / diversidade linguística / Brasil como projeto / responsabilidade epistêmica pública"
        },
        exercises: [
          { type: "production", prompt: "Escreva sobre o Brasil como você o vê e como você o gostaria de ver (6 frases).", answer: "O Brasil que vejo é, ao mesmo tempo, o mais improvável e o mais inevitável dos países: uma nação construída sobre contradições radicais — beleza e violência, criatividade e desigualdade, diversidade e exclusão — que de alguma forma persiste e às vezes, em momentos específicos, transcende a si mesma. O Brasil que gostaria de ver não é muito diferente desse em forma — gostaria que fosse mais honesto sobre o que é, menos ansioso para ser o que não é ainda. Gostaria de um Brasil que fizesse o acerto de contas com sua história de escravidão e violência colonial sem o julgamento paralisante e sem a negação conveniente. Que investisse em educação com a consistência de quem sabe que é a única aposta que retorna em décadas, não em mandatos. Que tratasse sua língua e suas variedades com o respeito que a diversidade merece. E que percebesse, de uma vez, que a riqueza extraordinária de sua cultura — a mais sincrética do mundo — é exatamente o que o torna único, e que essa singularidade não precisa ser negada nem vendida: precisa ser habitada." },
          { type: "production", prompt: "Qual é a responsabilidade de quem aprende português como segunda língua?", answer: "Quem aprende português como segunda língua tem uma responsabilidade peculiar: é testemunha de algo que os nativos frequentemente não percebem porque estão dentro dele. Vê as contradições com olhos que o hábito ainda não cegou. Percebe que 'saudade' não tem equivalente porque percebe que há sentimentos que têm e outros que não têm. Pode articular o que é específico numa língua porque tem onde comparar. Essa posição — de dentro suficiente para entender, de fora suficiente para ver — é valiosa e rara. A responsabilidade que vejo é esta: usar esse olhar não para julgar, mas para iluminar. Para trazer para dentro do debate sobre a língua, a cultura e o Brasil perspectivas que os de dentro não conseguem ter. E para reconhecer, sempre, que a língua que se aprende pertence a quem a fez — e que o melhor uso dela é em diálogo, não em monólogo." },
          { type: "production", prompt: "O que o domínio do português te deu como ferramenta para entender o Brasil?", answer: "O domínio do português me deu acesso a algo que nenhuma tradução oferece: a textura do debate público brasileiro na língua em que acontece. Quando leio um editorial do Piauí, ouço um podcast de política ou assisto a um debate no Congresso, não estou lendo uma versão filtrada — estou lendo o original, com todas as conotações, os subtextos e as referências culturais que uma tradução inevitavelmente perde. Isso mudou minha compreensão do Brasil de forma fundamental: aprendi que o país é muito mais complexo, muito mais contraditório e muito mais fascinante do que qualquer narrativa de fora consegue capturar. A língua foi a porta — e o que encontrei do outro lado foi um mundo." },
          { type: "production", prompt: "Escreva uma reflexão final sobre o que significa para você ter chegado ao Master em português.", answer: "Chegar ao Master em português não significa ter chegado. Significa ter chegado longe o suficiente para perceber o quanto resta. É a posição do alpinista que alcança um pico e vê, à sua frente, uma cordilheira que a névoa do vale não deixava ver. O que ganho, no Master, não é certeza — é a capacidade de habitar a incerteza com mais conforto. Não é o fim dos erros — é a velocidade com que os percebo e a naturalidade com que os corrijo. Não é o silêncio da língua que finalmente obedece — é a música da língua que começa a me surpreender de formas que eu não esperava. E, talvez o mais importante: é o começo de uma relação longa com uma literatura, uma cultura e um povo que antes estava separada de mim por uma barreira que já não existe. Isso não tem fim. Isso é, precisamente, o começo." },
          { type: "analysis", prompt: "Por que o Master não é o último nível, mas o primeiro nível de liberdade total?", answer: "O Master é o último nível estruturado — o último ponto onde há um currículo, objetivos definidos, exercícios com respostas. A partir daí, o aprendizado é orgânico: acontece por leitura, por conversa, por escrita, por imersão — sem programa. É o primeiro nível de liberdade total porque, a partir do Master, a língua não é mais obstáculo: você usa o português para fazer o que quer fazer, não para aprender a usar o português. Pode ler qualquer obra sem auxílio. Pode escrever qualquer texto que deseje. Pode participar de qualquer debate. A língua, que era o destino, tornou-se o veículo. E veículos não têm fim — têm horizonte. O horizonte do português é infinito: há literatura que você não leu, palavras que você não conhece, variantes que não explorou, histórias que ainda não foram escritas. O Master abre essa infinitude — e diz: agora é com você." }
        ]
      }
    ]
  }
];