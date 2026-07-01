// B2 PART 2 — Unidades 3 y 4
// 12 lecciones · 60 ejercicios

export const B2_U3_U4 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 3 — Registro Formal e Comunicação Profissional
  // ══════════════════════════════════════════════════════
  {
    id: "B2-U3",
    title: "Registro Formal e Comunicação Profissional",
    level: "B2",
    lessons: [

      {
        id: "B2-U3-L1",
        title: "Email formal, ofício e requerimento",
        objectives: ["Escrever emails formais e documentos oficiais", "Usar vocabulário e estrutura adequados ao registro formal"],
        shadowingDialogue: {
          title: "Redigindo um email formal",
          lines: [
            { speaker: "Funcionária", text: "Prezado senhor, venho por meio deste solicitar informações sobre o processo seletivo." },
            { speaker: "RH", text: "Atenciosamente agradecemos seu contato e informamos que as inscrições encerram na próxima sexta-feira." },
            { speaker: "Funcionária", text: "Desde já agradeço a atenção dispensada e aguardo retorno." },
            { speaker: "RH", text: "Colocamo-nos à disposição para demais esclarecimentos." }
          ]
        },
        keyPhrases: [
          "Prezado(a) Sr./Sra. / Ilmo. Sr. / À atenção de",
          "Venho por meio deste / Venho respeitosamente solicitar",
          "Desde já agradeço / Aguardo retorno / Certo(a) de sua atenção",
          "Atenciosamente / Cordialmente / Respeitosamente / Subscrevo-me"
        ],
        guidedProduction: [
          "Escreva a abertura de um email formal para um diretor.",
          "Como se encerra um email formal em português?",
          "Formalize: 'Oi, quero saber sobre a vaga.'"
        ],
        grammar: {
          title: "Estrutura do Email Formal",
          explanation: "Abertura: Prezado(a) + cargo/nome. Corpo: Venho por meio deste... / Em referência ao... / Conforme solicitado... Fechamento: Desde já agradeço + finalidade. Encerramento: Atenciosamente / Cordialmente + nome + cargo. Evitar: gírias, abreviações, 'vc', 'pq', exclamações excessivas.",
          conjugation: "Fórmulas de cortesia: solicitar (não 'pedir'). Venho solicitar / Venho informar / Venho esclarecer / Venho comunicar / Venho agradecer"
        },
        exercises: [
          { type: "rewrite", prompt: "Formalize: 'Oi, preciso de um atestado de matrícula pra ontem.'", answer: "Prezado(a) Secretário(a), venho por meio deste solicitar, com urgência, a emissão de declaração de matrícula. Desde já agradeço a atenção dispensada. Atenciosamente." },
          { type: "fill", prompt: "___ Sr. Diretor, ___ por meio deste comunicar nossa decisão.", answer: "Prezado / venho" },
          { type: "choice", prompt: "Qual fechamento é mais adequado para um email formal?", options: ["Beijos!", "Abraços", "Atenciosamente,", "Até mais,"], answer: "Atenciosamente," },
          { type: "fill", prompt: "___ já agradecemos e aguardamos ___ retorno.", answer: "Desde / vosso/seu" },
          { type: "production", prompt: "Escreva um email formal solicitando segunda via de documento.", answer: "Prezada Secretaria, venho por meio deste solicitar a emissão de segunda via do meu histórico escolar, referente ao ano letivo de 2025. Informo que o documento original foi extraviado. Desde já agradeço a atenção. Atenciosamente, [Nome]." }
        ]
      },

      {
        id: "B2-U3-L2",
        title: "Apresentação oral formal: palestra e seminário",
        objectives: ["Estruturar e apresentar uma palestra formal", "Usar marcadores discursivos orais em nível B2"],
        shadowingDialogue: {
          title: "Abertura de palestra",
          lines: [
            { speaker: "Palestrante", text: "Bom dia a todos. Primeiramente, agradeço o convite para falar sobre inovação tecnológica." },
            { speaker: "Palestrante", text: "Ao longo desta apresentação, abordarei três pontos fundamentais." },
            { speaker: "Palestrante", text: "Em primeiro lugar, contextualizarei o cenário atual. Em seguida, analisarei os desafios..." },
            { speaker: "Palestrante", text: "Por fim, proporei soluções concretas. Alguma dúvida antes de começar?" }
          ]
        },
        keyPhrases: [
          "Bom dia/boa tarde a todos. Agradeço o convite para...",
          "Ao longo desta apresentação / Neste seminário / Nesta palestra",
          "Em primeiro lugar / Em seguida / Por outro lado / Por fim / Para concluir",
          "Como mencionei anteriormente / Voltando ao ponto principal / Em síntese"
        ],
        guidedProduction: [
          "Faça a abertura de uma apresentação sobre sua área profissional.",
          "Use marcadores para transitar entre dois pontos: 'primeiro... em seguida...'",
          "Feche uma palestra de forma elegante e convide perguntas."
        ],
        grammar: {
          title: "Marcadores Discursivos Orais B2",
          explanation: "Abertura: primeiramente, antes de mais nada, para começar. Sequência: em primeiro lugar, a seguir, posteriormente, por sua vez. Contraste: no entanto, por outro lado, ao passo que. Exemplificação: a título de exemplo, como ilustração, vale mencionar. Conclusão: em síntese, em suma, para finalizar, sendo assim.",
          conjugation: "Verbos formais de apresentação: abordar, contextualizar, analisar, discorrer sobre, destacar, ressaltar, enfatizar, concluir"
        },
        exercises: [
          { type: "order", prompt: "Ordene: [Por fim / Em seguida / Em primeiro lugar] para estruturar uma apresentação.", answer: "Em primeiro lugar → Em seguida → Por fim" },
          { type: "fill", prompt: "___ esta apresentação, abordarei os desafios da educação.", answer: "Ao longo de" },
          { type: "rewrite", prompt: "Formalize a transição: 'Aí tem outro ponto importante.'", answer: "Por outro lado, convém destacar um aspecto igualmente relevante." },
          { type: "fill", prompt: "___ mencionei, os dados são alarmantes.", answer: "Como" },
          { type: "production", prompt: "Escreva a abertura e o encerramento de uma palestra de 3 minutos sobre sustentabilidade.", answer: "Boa tarde a todos. É uma honra estar aqui para discorrer sobre sustentabilidade ambiental. Ao longo desta apresentação, abordarei as principais ameaças ao meio ambiente e as soluções disponíveis. [...] Em síntese, a sustentabilidade não é uma escolha, mas uma necessidade. Agradeço a atenção e fico à disposição para perguntas." }
        ]
      },

      {
        id: "B2-U3-L3",
        title: "Negociação e persuasão em português",
        objectives: ["Argumentar e persuadir de forma estratégica", "Fazer concessões e defender posições em negociação"],
        shadowingDialogue: {
          title: "Negociação comercial",
          lines: [
            { speaker: "Compradora", text: "O preço está acima do nosso orçamento. Podemos chegar a um acordo?" },
            { speaker: "Vendedor", text: "Entendo sua preocupação. Que tal parcelarmos em 12 vezes sem juros?" },
            { speaker: "Compradora", text: "Interessante. E se aumentarmos o volume do pedido, há desconto?" },
            { speaker: "Vendedor", text: "Para pedidos acima de 500 unidades, oferecemos 15% de desconto. Fechamos negócio?" }
          ]
        },
        keyPhrases: [
          "Entendo seu ponto de vista, no entanto...",
          "Podemos chegar a um meio-termo / Que tal uma alternativa?",
          "Se aumentarmos o volume, poderíamos...",
          "Isso parece razoável. Vamos fechar? / Temos um acordo!"
        ],
        guidedProduction: [
          "Peça um desconto de forma educada e persuasiva.",
          "Faça uma contraproposta usando 'e se... / que tal...'",
          "Como você fecharia uma negociação com elegância?"
        ],
        grammar: {
          title: "Linguagem de Negociação",
          explanation: "Concordância parcial: entendo, porém... / reconheço, contudo... Proposta alternativa: que tal + infinitivo? / e se + condicional? / o que acha de...? Pressão suave: precisamos resolver isso hoje / temos um prazo a cumprir. Fechamento: parece justo / temos um acordo / vamos formalizar?",
          conjugation: "Modais de negociação: poderíamos considerar / seria possível / conseguiríamos chegar / estaria disposto a / poderíamos encontrar"
        },
        exercises: [
          { type: "rewrite", prompt: "Seja mais persuasivo: 'Quero desconto.'", answer: "Gostaria de avaliar se há possibilidade de um ajuste no valor, considerando o volume do nosso pedido." },
          { type: "fill", prompt: "Entendo sua posição, ___ precisamos reconsiderar os prazos.", answer: "no entanto / contudo / porém" },
          { type: "transform", prompt: "Formule uma contraproposta: 'Não podemos dar 30% de desconto.'", answer: "Não conseguiríamos chegar a 30%, porém poderíamos oferecer 15% com prazo de entrega reduzido. O que acha?" },
          { type: "fill", prompt: "Se ___ o contrato hoje, garantimos a entrega em 48 horas.", answer: "assinarmos / fecharmos" },
          { type: "production", prompt: "Escreva um diálogo de negociação de 4 linhas para reduzir um prazo.", answer: "— Precisamos do produto em 10 dias. É possível? — Normalmente trabalhamos em 15, mas se confirmarmos o pedido hoje, podemos priorizar a entrega. — Perfeito. E há algum custo adicional? — Para este volume, sem custo extra. Temos um acordo?" }
        ]
      },

      {
        id: "B2-U3-L4",
        title: "Reuniões e videoconferências em português",
        objectives: ["Participar e conduzir reuniões em português formal", "Pedir a palavra, concordar, discordar e resumir"],
        shadowingDialogue: {
          title: "Reunião de equipe",
          lines: [
            { speaker: "Coordenadora", text: "Antes de começarmos, alguém tem algum ponto a acrescentar à pauta?" },
            { speaker: "Membro", text: "Com licença, gostaria de fazer uma observação sobre o cronograma." },
            { speaker: "Coordenadora", text: "Claro, pode falar. Depois passamos para o próximo ponto." },
            { speaker: "Outro membro", text: "Concordo parcialmente, mas acho importante considerar os riscos também." }
          ]
        },
        keyPhrases: [
          "Com licença, posso fazer uma observação? / Gostaria de acrescentar que...",
          "Concordo plenamente / Concordo parcialmente / Discordo respeitosamente",
          "Se me permitir, gostaria de voltar ao ponto anterior",
          "Para resumir o que foi discutido / Em síntese, chegamos à conclusão de que"
        ],
        guidedProduction: [
          "Como você pede a palavra de forma educada em uma reunião?",
          "Discorde de uma ideia sem ser agressivo.",
          "Resuma os pontos de uma reunião usando marcadores."
        ],
        grammar: {
          title: "Vocabulário de Reuniões",
          explanation: "Conduzir reunião: abrir a sessão / passar para o próximo ponto / encerrar a reunião / constar em ata. Participar: pedir a palavra / fazer uma observação / retomar o ponto / concluir. Concordar: estou de acordo / corroboro / ratificamos. Discordar: permita-me discordar / vejo de outra forma / há pontos que merecem revisão.",
          conjugation: "Verbos de reunião: deliberar / votar / aprovar / arquivar / adiar / registrar em ata / encaminhar / dar por encerrado"
        },
        exercises: [
          { type: "fill", prompt: "___ licença, gostaria de acrescentar um ponto.", answer: "Com" },
          { type: "rewrite", prompt: "Discorde de forma educada: 'Essa ideia não vai funcionar.'", answer: "Permita-me discordar. Acredito que há pontos que merecem reavaliação antes de avançarmos." },
          { type: "choice", prompt: "Para resumir a reunião, use:", options: ["E aí, o que foi decidido?", "Em síntese, chegamos à conclusão de que...", "Tá bom então.", "Resumindo rapidinho..."], answer: "Em síntese, chegamos à conclusão de que..." },
          { type: "fill", prompt: "Vamos ___ para o próximo ponto da ___.", answer: "passar / pauta" },
          { type: "production", prompt: "Escreva a abertura e o encerramento formais de uma reunião.", answer: "Abertura: Bom dia a todos. Declaro aberta a reunião. A pauta de hoje contempla três pontos: revisão do cronograma, alocação de recursos e próximos passos. Encerramento: Em síntese, ficou deliberado que... Agradeço a participação de todos. Dou por encerrada a reunião." }
        ]
      },

      {
        id: "B2-U3-L5",
        title: "Revisão e produção integrada B2-U3",
        objectives: ["Integrar email formal, apresentação e negociação", "Produzir comunicação profissional completa em nível B2"],
        shadowingDialogue: {
          title: "Proposta comercial",
          lines: [
            { speaker: "Diretora", text: "Prezados, venho por meio deste apresentar nossa proposta para o projeto X." },
            { speaker: "Diretora", text: "Ao longo desta apresentação, abordaremos os benefícios, custos e cronograma." },
            { speaker: "Cliente", text: "Interessante. Se aumentarmos o escopo, haveria flexibilidade no prazo?" },
            { speaker: "Diretora", text: "Poderíamos considerar. Contanto que a decisão seja tomada esta semana." }
          ]
        },
        keyPhrases: [
          "Venho por meio deste apresentar / solicitar / informar / comunicar",
          "Ao longo desta apresentação / Neste documento / Conforme acordado",
          "Poderíamos considerar / Estaria disposto a / Seria possível",
          "Contanto que / Desde que / A menos que / Por conseguinte"
        ],
        guidedProduction: [
          "Escreva um email formal propondo uma reunião.",
          "Apresente oralmente uma proposta de projeto (1 minuto).",
          "Negocie uma condição usando subjuntivo e condicional."
        ],
        grammar: {
          title: "Revisão B2-U3",
          explanation: "Consolida: email formal (abertura/corpo/fechamento), apresentação oral (marcadores e estrutura), negociação (persuasão e concessão) e reuniões (pedir palavra, concordar, discordar, resumir).",
          conjugation: "Vocabulário-chave: solicitar / abordar / deliberar / considerar / propor / concordar / discordar / fechar negócio / registrar em ata / encaminhar"
        },
        exercises: [
          { type: "production", prompt: "Escreva um email formal convocando uma reunião.", answer: "Prezada equipe, venho por meio deste convocar reunião ordinária para a próxima segunda-feira, às 10h, na sala de reuniões B. A pauta constará: revisão de metas e planejamento para o próximo trimestre. Confirme presença até sexta-feira. Atenciosamente, [Nome]." },
          { type: "rewrite", prompt: "Formalize uma negociação informal: 'Tá certo, mas quero 20%.'", answer: "Compreendo a proposta. No entanto, para fecharmos o negócio neste momento, precisaríamos de um desconto de 20%. Isso seria viável?" },
          { type: "fill", prompt: "Em ___, ficou deliberado que o projeto será ___ em março.", answer: "síntese / iniciado/retomado" },
          { type: "fill", prompt: "___ que aprovem o orçamento, podemos começar imediatamente.", answer: "Contanto / Desde" },
          { type: "production", prompt: "Escreva a abertura de uma palestra de 2 minutos sobre inovação nos negócios.", answer: "Boa tarde a todos. É uma satisfação compartilhar reflexões sobre inovação nos negócios. Ao longo desta breve apresentação, abordarei três aspectos: o cenário atual, as principais tendências e as oportunidades para nossas empresas. Espero que nossa conversa seja proveitosa." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 4 — Brasil Contemporâneo: Sociedade e Cultura
  // ══════════════════════════════════════════════════════
  {
    id: "B2-U4",
    title: "Brasil Contemporâneo: Sociedade e Cultura",
    level: "B2",
    lessons: [

      {
        id: "B2-U4-L1",
        title: "Sistema político e direitos constitucionais",
        objectives: ["Entender e descrever o sistema político brasileiro", "Discutir direitos e deveres do cidadão"],
        shadowingDialogue: {
          title: "Educação cívica",
          lines: [
            { speaker: "Professor", text: "O Brasil é uma república federativa presidencialista. Sabe o que isso significa?" },
            { speaker: "Estudante", text: "Que temos um presidente eleito e que os estados têm autonomia?" },
            { speaker: "Professor", text: "Exatamente. Nosso sistema tem três poderes independentes e harmônicos." },
            { speaker: "Estudante", text: "Executivo, Legislativo e Judiciário, né? Cada um com suas funções." }
          ]
        },
        keyPhrases: [
          "República Federativa — presidencialismo — três poderes",
          "Executivo (presidente/governador/prefeito) — Legislativo — Judiciário",
          "Constituição de 1988 — 'Constituição Cidadã'",
          "Voto obrigatório — impeachment — plebiscito — referendo"
        ],
        guidedProduction: [
          "Explique a diferença entre os três poderes em suas palavras.",
          "O que é o voto obrigatório e você concorda com ele?",
          "Descreva o sistema político do Brasil para um estrangeiro."
        ],
        grammar: {
          title: "Vocabulário Político-Cidadão",
          explanation: "Poderes: Executivo (governar), Legislativo (legislar/fiscalizar), Judiciário (julgar). Cargos: presidente, governador, prefeito, senador, deputado federal/estadual, vereador. Termos: mandato, eleição, urna eletrônica, TSE, Congresso, Senado, Câmara, STF, STJ.",
          conjugation: "Verbos políticos: eleger / nomear / aprovar / vetar / julgar / legislar / fiscalizar / impugnar / convocar / deliberar"
        },
        exercises: [
          { type: "match", prompt: "Relacione: STF / Câmara / Presidente / Senado com Judiciário/Legislativo/Executivo", answer: "STF→Judiciário, Câmara→Legislativo, Presidente→Executivo, Senado→Legislativo" },
          { type: "fill", prompt: "A ___ de 1988 é conhecida como a 'Constituição ___'.", answer: "Constituição / Cidadã" },
          { type: "production", prompt: "Explique o que é o sistema de três poderes em 3 frases.", answer: "O Poder Executivo governa e implementa políticas públicas. O Legislativo cria leis e fiscaliza o Executivo. O Judiciário interpreta as leis e resolve conflitos, tendo o STF como instância máxima." },
          { type: "fill", prompt: "No Brasil, o voto é ___ para maiores de 18 e menores de 70 anos.", answer: "obrigatório" },
          { type: "production", prompt: "Opine: 'O voto obrigatório deve ser mantido no Brasil?' Use argumentos.", answer: "Acredito que o voto obrigatório é fundamental para garantir a representatividade democrática. Embora haja quem defenda o voto facultativo, em um país com altos índices de desinformação, a obrigatoriedade assegura maior participação popular. Por conseguinte, sua manutenção parece essencial." }
        ]
      },

      {
        id: "B2-U4-L2",
        title: "Desigualdade social e políticas públicas",
        objectives: ["Discutir desigualdade com vocabulário específico", "Argumentar sobre soluções de políticas públicas"],
        shadowingDialogue: {
          title: "Debate sobre desigualdade",
          lines: [
            { speaker: "Analista", text: "O Brasil tem um dos índices de Gini mais altos do mundo." },
            { speaker: "Estudante", text: "O que significa exatamente? Gini mede a distribuição de renda?" },
            { speaker: "Analista", text: "Sim. Quanto mais próximo de 1, maior a desigualdade. O Brasil está em 0,52." },
            { speaker: "Estudante", text: "E programas como o Bolsa Família ajudam a reduzir isso?" },
            { speaker: "Analista", text: "Ajudam, mas a solução estrutural exige reforma tributária e educação de qualidade." }
          ]
        },
        keyPhrases: [
          "Índice de Gini — distribuição de renda — concentração de riqueza",
          "Bolsa Família / Auxílio Brasil — transferência de renda — beneficiários",
          "Cota racial / social — inclusão — acesso à educação e saúde",
          "Reforma tributária — progressividade — imposto de renda"
        ],
        guidedProduction: [
          "Explique o que é desigualdade social com suas palavras.",
          "Você é a favor ou contra cotas nas universidades? Por quê?",
          "Que políticas públicas você proporia para reduzir a desigualdade?"
        ],
        grammar: {
          title: "Vocabulário de Políticas Sociais",
          explanation: "Principais programas: Bolsa Família (transferência de renda condicional), Minha Casa Minha Vida (habitação), PROUNI (bolsas universitárias), SUS (saúde pública universal), FIES (financiamento estudantil). Termos: vulnerabilidade social, inclusão social, acesso a direitos, dignidade humana, equidade.",
          conjugation: "Verbos sociais: combater a pobreza / reduzir a desigualdade / garantir acesso / ampliar direitos / implementar políticas / fiscalizar benefícios / incluir digitalmente"
        },
        exercises: [
          { type: "fill", prompt: "O índice de ___ mede a desigualdade de ___ de um país.", answer: "Gini / renda" },
          { type: "production", prompt: "Argumente a favor das cotas universitárias em 3 frases.", answer: "As cotas universitárias são uma medida de reparação histórica para grupos marginalizados. Embora gerem debate, os dados mostram que estudantes cotistas têm desempenho semelhante aos demais. Por conseguinte, as cotas são um instrumento essencial de inclusão e equidade social." },
          { type: "fill", prompt: "O SUS garante ___ saúde ___ e ___ a todos os brasileiros.", answer: "acesso à / universal / gratuito" },
          { type: "production", prompt: "Proponha duas políticas públicas para reduzir a desigualdade.", answer: "Primeiramente, faz-se necessário ampliar o acesso à educação de qualidade, desde a primeira infância até o ensino superior. Além disso, uma reforma tributária progressiva, que onere mais quem ganha mais, contribuiria significativamente para a redistribuição de renda." },
          { type: "opinion", prompt: "O que você acha do Bolsa Família/Auxílio Brasil? Desenvolva.", answer: "O Bolsa Família é um programa de transferência de renda que, embora seja essencial para reduzir a pobreza extrema, deve ser acompanhado de políticas estruturais. Visto que apenas a transferência de renda não elimina as causas da desigualdade, é necessário combiná-la com acesso à educação, saúde e geração de emprego." }
        ]
      },

      {
        id: "B2-U4-L3",
        title: "Mídia, fake news e senso crítico",
        objectives: ["Analisar e discutir informação midiática criticamente", "Identificar e combater desinformação"],
        shadowingDialogue: {
          title: "Conversa sobre mídias digitais",
          lines: [
            { speaker: "Jornalista", text: "Antes de compartilhar, sempre verifico a fonte. Você tem esse hábito?" },
            { speaker: "Amigo", text: "Confesso que às vezes compartilho sem checar. Mas como fazer isso?" },
            { speaker: "Jornalista", text: "Sites como Agência Lupa e Aos Fatos fazem checagem de fatos no Brasil." },
            { speaker: "Amigo", text: "E se a notícia vier de um veículo desconhecido, desconfio logo, né?" },
            { speaker: "Jornalista", text: "Exatamente. Verifique a data, o autor e se outros veículos confirmam." }
          ]
        },
        keyPhrases: [
          "Fake news — desinformação — checagem de fatos (fact-checking)",
          "Veículo de comunicação — fonte primária — fonte secundária",
          "Câmara de eco — bolha informacional — algoritmo",
          "Agência Lupa / Aos Fatos — verificar antes de compartilhar"
        ],
        guidedProduction: [
          "Como você verifica se uma notícia é verdadeira?",
          "O que é uma câmara de eco e por que é perigosa?",
          "Argumente sobre a responsabilidade das redes sociais com fake news."
        ],
        grammar: {
          title: "Vocabulário Midiático",
          explanation: "Mídia: jornal / revista / portal / blog / podcast / newsletter / youtuber / influencer. Termos críticos: clickbait (título sensacionalista), deep fake (vídeo manipulado), desinformação (informação falsa proposital), teoria da conspiração, polarização, radicalização online. Verbos: verificar / checar / desmentir / confirmar / contextualizar / retificar.",
          conjugation: "Expressões: 'segundo fontes confiáveis' / 'de acordo com especialistas' / 'dados do IBGE indicam' / 'conforme nota oficial' / 'sem confirmação até o momento'"
        },
        exercises: [
          { type: "fill", prompt: "Antes de compartilhar, é fundamental ___ a ___ da notícia.", answer: "verificar / fonte" },
          { type: "production", prompt: "Explique 'câmara de eco' para alguém que nunca ouviu o termo.", answer: "Uma câmara de eco é um ambiente digital onde você só é exposto a opiniões semelhantes às suas. Os algoritmos das redes sociais mostram conteúdo que reforça suas crenças, impedindo o contato com perspectivas diferentes. Isso pode levar à polarização e à dificuldade de aceitar informações contrárias." },
          { type: "fill", prompt: "Sites como ___ e ___ fazem checagem de fatos no Brasil.", answer: "Agência Lupa / Aos Fatos" },
          { type: "opinion", prompt: "As redes sociais deveriam ser responsabilizadas por fake news? Argumente.", answer: "Entendo que as plataformas digitais têm responsabilidade no combate à desinformação, visto que seus algoritmos amplificam conteúdo viral, independentemente de sua veracidade. Embora a liberdade de expressão seja um valor democrático fundamental, ela não deve proteger a difusão de informações sabidamente falsas que causam danos à sociedade." },
          { type: "production", prompt: "Escreva 3 dicas para combater fake news no dia a dia.", answer: "Primeiramente, verifique sempre a fonte da notícia antes de compartilhar. Em seguida, consulte agências de checagem como Agência Lupa ou Aos Fatos. Por fim, desconfie de títulos sensacionalistas ou de notícias que confirmam apenas o que você já acredita." }
        ]
      },

      {
        id: "B2-U4-L4",
        title: "Meio ambiente e sustentabilidade no Brasil",
        objectives: ["Discutir temas ambientais com vocabulário específico", "Argumentar sobre sustentabilidade e políticas ambientais"],
        shadowingDialogue: {
          title: "Debates ambientais",
          lines: [
            { speaker: "Ambientalista", text: "O desmatamento na Amazônia atingiu níveis críticos na última década." },
            { speaker: "Pesquisadora", text: "E o Pantanal também tem sofrido com queimadas sem precedente." },
            { speaker: "Ambientalista", text: "O Brasil tem potencial enorme em energia renovável — solar, eólica, hidrelétrica." },
            { speaker: "Pesquisadora", text: "O desafio é compatibilizar desenvolvimento econômico com preservação ambiental." }
          ]
        },
        keyPhrases: [
          "Desmatamento — queimadas — biodiversidade — bioma",
          "Amazônia — Cerrado — Mata Atlântica — Pantanal — Caatinga",
          "Energia renovável: solar / eólica / hidrelétrica / biomassa",
          "Pegada de carbono — neutralidade climática — economia circular"
        ],
        guidedProduction: [
          "Quais são os principais biomas do Brasil? Descreva um.",
          "O que o Brasil pode fazer para reduzir o desmatamento?",
          "Como compatibilizar desenvolvimento e preservação ambiental?"
        ],
        grammar: {
          title: "Vocabulário Ambiental",
          explanation: "Biomas: Amazônia (maior floresta tropical), Cerrado (savana mais biodiversa do mundo), Mata Atlântica (95% desmatada), Pantanal (maior área úmida), Caatinga (semiárido único no mundo). Ameaças: desmatamento, queimadas, garimpo ilegal, agrotóxicos, poluição hídrica. Soluções: reflorestamento, unidades de conservação, energia limpa, agricultura sustentável.",
          conjugation: "Verbos ambientais: preservar / conservar / reflorestar / fiscalizar / desmatar (errado) / queimar (errado) / proteger / demarcar (terras indígenas) / mitigar (efeitos)"
        },
        exercises: [
          { type: "match", prompt: "Relacione: Amazônia / Pantanal / Caatinga com: maior área úmida / semiárido / maior floresta tropical", answer: "Amazônia→maior floresta tropical, Pantanal→maior área úmida, Caatinga→semiárido" },
          { type: "fill", prompt: "O ___ ilegal é uma das principais causas de degradação da Amazônia.", answer: "desmatamento / garimpo" },
          { type: "production", prompt: "Argumente sobre a importância da Amazônia para o planeta.", answer: "A Amazônia é fundamental para o equilíbrio climático global, pois abriga mais de 10% da biodiversidade do planeta e é responsável por regular o ciclo das chuvas em toda a América do Sul. Embora seja território brasileiro, seu papel ecológico é universal, o que justifica a pressão internacional por sua preservação." },
          { type: "fill", prompt: "O Brasil tem grande potencial em ___ solar e ___, fontes de energia ___.", answer: "energia / eólica / renovável" },
          { type: "production", prompt: "Proponha duas medidas concretas para combater o desmatamento.", answer: "É fundamental que o governo brasileiro aumente a fiscalização nas áreas de risco por meio do IBAMA e das forças armadas. Além disso, deve-se investir em alternativas econômicas para comunidades locais que dependem do desmatamento, promovendo o ecoturismo e a agricultura sustentável." }
        ]
      },

      {
        id: "B2-U4-L5",
        title: "Revisão e produção integrada B2-U4",
        objectives: ["Integrar temas de sociedade, política, mídia e meio ambiente", "Produzir texto argumentativo completo em nível B2"],
        shadowingDialogue: {
          title: "Mesa-redonda: Brasil em debate",
          lines: [
            { speaker: "Moderadora", text: "Hoje debatemos os desafios do Brasil contemporâneo. Começamos pela questão ambiental." },
            { speaker: "Especialista 1", text: "Embora tenhamos avanços, o desmatamento ainda é um problema estrutural." },
            { speaker: "Especialista 2", text: "E a desigualdade social agrava os impactos das mudanças climáticas nas populações vulneráveis." },
            { speaker: "Moderadora", text: "Por conseguinte, as políticas públicas precisam ser integradas e não isoladas." }
          ]
        },
        keyPhrases: [
          "Embora tenhamos avançado / Apesar dos progressos / Visto que há desafios",
          "As populações mais vulneráveis são as mais afetadas por...",
          "Faz-se necessário / Incumbe ao Estado / Cabe à sociedade civil",
          "Por conseguinte / Sendo assim / Em síntese / Conclui-se que"
        ],
        guidedProduction: [
          "Escreva um texto sobre um desafio do Brasil contemporâneo.",
          "Argumente sobre a relação entre desigualdade e meio ambiente.",
          "Redija uma proposta de intervenção para um problema social brasileiro."
        ],
        grammar: {
          title: "Revisão B2-U4",
          explanation: "Consolida: vocabulário político, social, midiático e ambiental. Estrutura argumentativa completa com conectivos avançados. Produção oral e escrita em registro formal B2.",
          conjugation: "Expressões formais de argumentação: conforme dados / segundo especialistas / à luz dos fatos / à medida que / na medida em que / tanto... quanto / não apenas... mas também"
        },
        exercises: [
          { type: "production", prompt: "Escreva um parágrafo sobre desigualdade social no Brasil usando dados.", answer: "Segundo o IBGE, o Brasil figura entre os países com maior concentração de renda do mundo, com índice de Gini de 0,52. Visto que 10% da população mais rica detém mais de 40% da renda nacional, torna-se urgente a implementação de políticas tributárias progressivas e de expansão do acesso à educação e saúde públicas de qualidade." },
          { type: "fill", prompt: "Tanto o desmatamento ___ a poluição ___ os recursos hídricos do Brasil.", answer: "quanto / ameaçam" },
          { type: "production", prompt: "Argumente sobre a relação entre fake news e democracia.", answer: "A desinformação representa uma ameaça concreta à democracia, na medida em que compromete a capacidade dos cidadãos de tomarem decisões políticas informadas. Embora a liberdade de expressão seja um pilar democrático, não pode ser invocada para proteger a difusão deliberada de mentiras. Por conseguinte, é fundamental investir em educação midiática e em regulação responsável das plataformas digitais." },
          { type: "rewrite", prompt: "Formalize: 'O governo precisa fazer mais pelo meio ambiente.'", answer: "Incumbe ao poder público implementar políticas ambientais mais rigorosas, sob pena de comprometer o equilíbrio ecológico das gerações futuras." },
          { type: "production", prompt: "Escreva a conclusão de um texto sobre desafios do Brasil com proposta de intervenção.", answer: "Em síntese, os desafios do Brasil contemporâneo — desigualdade social, desinformação e degradação ambiental — estão interligados e exigem respostas integradas. Cabe ao Estado, em parceria com a sociedade civil e o setor privado, implementar políticas públicas que promovam equidade, educação crítica e sustentabilidade, com vistas à construção de um país mais justo e democrático para as gerações futuras." }
        ]
      }
    ]
  }
];
