// C2 PART 2 — Unidades 3 y 4
// 12 lecciones · 60 ejercicios

export const C2_U3_U4 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 3 — Pensamento Crítico e Produção Intelectual
  // ══════════════════════════════════════════════════════
  {
    id: "C2-U3",
    title: "Pensamento Crítico e Produção Intelectual em C2",
    level: "C2",
    lessons: [
      {
        id: "C2-U3-L1",
        title: "Epistemologia prática: como saber o que sabe",
        objectives: ["Aplicar ferramentas epistemológicas à análise de informação", "Distinguir conhecimento, crença, opinião e ideologia"],
        shadowingDialogue: {
          title: "O que podemos saber?",
          lines: [
            { speaker: "Filósofa", text: "Platão definiu conhecimento como 'crença verdadeira justificada'. Parece simples." },
            { speaker: "Aluno", text: "Mas Gettier mostrou que podemos ter crença verdadeira justificada sem que seja conhecimento." },
            { speaker: "Filósofa", text: "O problema de Gettier. E isso muda tudo para a epistemologia — a definição clássica não funciona." },
            { speaker: "Aluno", text: "Na prática, como distinguir o que sei do que acho que sei?" },
            { speaker: "Filósofa", text: "Perguntando: qual é a evidência? Ela poderia ser falsa? Estou disposto a mudar de ideia se a evidência mudar?" }
          ]
        },
        keyPhrases: [
          "Epistemologia: o estudo do conhecimento — o que sabemos e como sabemos",
          "Crença / opinião / conhecimento / certeza — distinções fundamentais",
          "Falácias epistêmicas: viés de confirmação, raciocínio motivado",
          "Princípio da falsificabilidade (Popper): ciência vs. pseudociência"
        ],
        guidedProduction: [
          "Qual a diferença entre 'eu acho' e 'eu sei'? Dê um exemplo de cada.",
          "O que é viés de confirmação e como afeta nosso raciocínio cotidiano?",
          "Como você avalia se uma fonte de informação é confiável?"
        ],
        grammar: {
          title: "Vocabulário Epistemológico C2",
          explanation: "Conhecimento: crença verdadeira justificada (definição clássica). Opinião: crença sem justificativa adequada. Certeza: grau subjetivo de confiança. Evidência: aquilo que justifica uma crença. Falsificabilidade (Popper): uma teoria científica deve ser refutável — se nenhuma evidência possível poderia falsificá-la, não é ciência. Viés de confirmação: tendência a buscar e valorizar evidências que confirmam o que já acreditamos. Raciocínio motivado: raciocinar para defender uma conclusão pré-determinada.",
          conjugation: "Marcadores epistêmicos em C2: 'é razoável supor que' / 'as evidências sugerem' / 'não há como ter certeza, mas' / 'o balanço das evidências aponta para' / 'seria precipitado afirmar sem mais dados'"
        },
        exercises: [
          { type: "analysis", prompt: "Explique o 'problema de Gettier' e por que ele importa para a epistemologia.", answer: "Edmund Gettier (1963) apresentou casos em que alguém tem crença verdadeira justificada — mas não tem conhecimento. Exemplo clássico: João acredita (com boa razão) que há um Ford na garagem porque seu vizinho sempre tem Ford. O vizinho vendeu o Ford sem avisar — mas coincidentemente outra pessoa estacionou um Ford na garagem. João tem crença verdadeira (há um Ford) e justificada (o vizinho sempre tem Ford) — mas claramente não 'sabe' que há um Ford lá. O problema importa porque derruba a definição clássica platônica de conhecimento e mostra que justificação e verdade, mesmo juntas, não são suficientes para garantir conhecimento." },
          { type: "production", prompt: "Como o viés de confirmação afeta o consumo de notícias nas redes sociais?", answer: "O viés de confirmação nos leva a buscar, valorizar e lembrar informações que confirmam o que já acreditamos — e a descartar ou desvalorizar o que contradiz nossas crenças. Nas redes sociais, isso é amplificado algoritmicamente: as plataformas mostram mais do que já nos engajou, criando câmaras de eco onde só encontramos confirmação. O resultado é que pessoas com crenças opostas podem consumir universos informativos completamente distintos, compartilhando pouquíssima base factual comum. Isso torna o debate público cada vez mais difícil: não discordamos apenas sobre interpretações, mas sobre os próprios fatos." },
          { type: "analysis", prompt: "Por que a falsificabilidade (Popper) é o critério que separa ciência de pseudociência?", answer: "Karl Popper argumentou que o que torna uma teoria científica não é que ela pode ser provada verdadeira — nenhuma teoria pode ser definitivamente provada — mas que ela pode ser provada falsa. Uma teoria científica deve fazer previsões específicas que, se não confirmadas, a refutam. A teoria da evolução é falsificável: se encontrássemos fósseis de coelhos no Pré-Cambriano, ela seria refutada. A astrologia não é falsificável: qualquer resultado pode ser 'explicado' pela teoria. Isso não prova que a astrologia é falsa — prova que não é ciência. O critério de falsificabilidade evita que 'teorias' irrefutáveis (e portanto não-testáveis) sejam tratadas como conhecimento científico." },
          { type: "production", prompt: "Avalie criticamente: 'Todo mundo tem direito à sua opinião.' Quando isso é verdadeiro e quando é problemático?", answer: "É verdadeiro que, num estado democrático, todos têm direito a expressar opiniões. Mas a frase frequentemente é usada para equiparar opiniões com evidências, sugerindo que todas as posições têm igual peso epistêmico. Isso é problemático: a opinião de um virologista sobre vacinas e a de um influencer que nunca estudou medicina não têm o mesmo valor epistêmico — mesmo que ambos tenham 'direito' de expressá-las. Há uma diferença entre direito político de se expressar e autoridade epistêmica para fazer afirmações em determinada área. Confundir os dois leva ao relativismo do 'cada um tem sua verdade', que é politicamente perigoso e epistemologicamente indefensável." },
          { type: "production", prompt: "Como você avalia a confiabilidade de uma fonte em 5 critérios práticos?", answer: "1) Expertise: o autor tem formação na área sobre a qual afirma? 2) Evidência: a afirmação vem acompanhada de fontes verificáveis ou é apenas assertiva? 3) Incentivos: quem financia a pesquisa ou a publicação? Há conflito de interesse? 4) Consenso: a posição está alinhada com o consenso de especialistas da área ou é uma voz isolada? 5) Falsificabilidade: a afirmação é testável? O autor está disposto a especificar o que o faria mudar de ideia? Uma fonte que passa nesses cinco filtros tem alta credibilidade; uma que falha em múltiplos deve ser tratada com grande cautela." }
        ]
      },
      {
        id: "C2-U3-L2",
        title: "Retórica clássica e persuasão contemporânea",
        objectives: ["Aplicar categorias da retórica clássica à comunicação contemporânea", "Produzir discursos persuasivos de alta sofisticação em C2"],
        shadowingDialogue: {
          title: "Aristóteles na era das redes sociais",
          lines: [
            { speaker: "Professor", text: "Aristóteles identificou três modos de persuasão: ethos, pathos, logos. Dois mil anos depois, ainda são os únicos." },
            { speaker: "Aluno", text: "Ethos é a credibilidade do orador, pathos é a emoção do público, logos é o argumento racional." },
            { speaker: "Professor", text: "Exato. E o que as redes sociais fizeram foi escalar o pathos à enésima potência." },
            { speaker: "Aluno", text: "Conteúdo emocional viraliza mais que conteúdo racional. Então o pathos domina." },
            { speaker: "Professor", text: "E o logos — a razão — fica em desvantagem evolutiva. Isso é o problema central da nossa era informacional." }
          ]
        },
        keyPhrases: [
          "Ethos: credibilidade e caráter do orador",
          "Pathos: apelo às emoções do público",
          "Logos: argumento lógico e evidência",
          "Kairos: o momento certo para falar — oportunidade retórica"
        ],
        guidedProduction: [
          "Analise um discurso político famoso usando ethos, pathos e logos.",
          "Como as redes sociais privilegiam o pathos em detrimento do logos?",
          "Construa um argumento usando os três modos de persuasão sobre um tema que você defende."
        ],
        grammar: {
          title: "Retórica Clássica Aplicada C2",
          explanation: "Ethos: credibilidade construída pela reputação, pelo cargo, pelo estilo. Como se constrói: consistência, expertise demonstrada, valores explicitados. Pathos: emoção mobilizada para persuadir. Recursos: narrativa pessoal, imagens, ritmo, metáfora. Logos: argumento lógico. Silogismo, indução, analogia, dados. Kairos: o momento oportuno — o mesmo argumento pode funcionar ou falhar dependendo do contexto. Dispositio: a ordem dos argumentos. O mais forte no início ou no final? Peroratio: a conclusão emotiva que mobiliza para a ação.",
          conjugation: "Recursos retóricos de persuasão: anáfora (repetição para ritmo), tricolon (grupo de três), antítese (oposição de ideias), climax (progressão crescente), apóstrofe (interpelação direta do público)"
        },
        exercises: [
          { type: "analysis", prompt: "Analise: 'Tenho um sonho' (Luther King) — identifique ethos, pathos e logos.", answer: "Ethos: King fala como líder religioso e civil do movimento pelos direitos civis — sua credibilidade é estabelecida por anos de ativismo e sofrimento pessoal, não apenas por cargo. Pathos: a anáfora 'I have a dream' cria ritmo hipnótico e apelo emocional poderoso; a imagem dos filhos de ex-escravos e ex-donos de escravos sentados juntos mobiliza a esperança. Logos: o argumento racional está presente mas subordinado — ele apela à Constituição e à Declaração da Independência como 'cheque sem fundo' que América deve honrar. O discurso é magistral porque integra os três, mas a força dominante é o pathos, amplificado pelo kairos (contexto histórico do movimento)." },
          { type: "production", prompt: "Construa um argumento sobre a importância da leitura usando ethos, pathos e logos.", answer: "Ethos: 'Como educador com 20 anos de sala de aula, observei consistentemente a diferença entre alunos que leem por prazer e os que não leem.' Logos: 'Pesquisas do PISA mostram correlação direta entre hábito de leitura e desempenho em raciocínio crítico, independentemente do nível socioeconômico.' Pathos: 'Lembro de uma aluna que chegou calada ao início do ano e passou o ano inteiro sem levantar a mão. Em março, dei a ela uma coleção de contos. Em junho, ela apresentou o melhor trabalho da turma — havia encontrado, na ficção, o vocabulário para dizer o que antes não conseguia.' Conclusão (peroratio): 'Não ensinamos leitura para passar em vestibular. Ensinamos para que nossos filhos encontrem palavras para o que vivem.'" },
          { type: "analysis", prompt: "Como o Instagram e o TikTok privilegiam o pathos estruturalmente?", answer: "O pathos — apelo emocional — domina as redes visuais por razões estruturais, não apenas culturais. Instagram e TikTok são plataformas de imagem e vídeo: emoção se comunica visualmente com muito mais velocidade que argumento. O algoritmo maximiza engajamento (likes, compartilhamentos, comentários) — e conteúdo emocional gera mais engajamento que conteúdo racional. O formato curto (15 segundos no TikTok) impossibilita argumento complexo mas permite impacto emocional imediato. O resultado é uma assimetria: posts emocionalmente intensos (indignação, medo, amor, humor) alcançam milhões; argumentos nuançados alcançam poucos." },
          { type: "production", prompt: "Escreva a abertura retórica de uma conferência sobre desigualdade no Brasil (8 linhas) usando os três modos.", answer: "Trago aqui vinte anos de pesquisa sobre desigualdade — mas hoje não vou começar com dados. [ethos estabelecido, suspenso] Vou começar com uma pergunta: quantos de vocês, ao saírem daqui hoje, vão tomar um táxi ou um Uber? E quantos de vocês pensaram, enquanto eu perguntava, que o motorista provavelmente trabalha doze horas por dia para ganhar menos em um mês do que o jantar desta noite custa? [pathos: identificação, incômodo moral] Os dados confirmam essa intuição: o Brasil tem um dos maiores índices de Gini do mundo — 0,52 — o que significa que a renda de metade da população inteira não chega a cobrir o que 1% ganha. [logos] Mas dados não mudam comportamento. Histórias, sim. Por isso começo com uma." },
          { type: "production", prompt: "Identifique o kairos num discurso ou situação comunicativa e explique como aproveitá-lo.", answer: "Kairos é o momento oportuno — quando o contexto cria abertura para uma mensagem que em outro momento não seria recebida. Exemplo: defender investimento em saúde mental durante uma pandemia que tornou o tema urgente e pessoal para milhões é kairos — a mesma proposta que seria ignorada antes de 2020 encontra receptividade máxima. Como aproveitar: identificar o que o momento tornou irrecusável ou urgente; conectar seu argumento com a emoção coletiva do momento; agir antes que a janela se feche. Kairos também tem dimensão oposta: escolher o momento errado para argumentar é tão fatal quanto ter o argumento errado." }
        ]
      },
      {
        id: "C2-U3-L3",
        title: "Escrita acadêmica de excelência: artigo e tese",
        objectives: ["Produzir escrita acadêmica de nível C2 com rigor e originalidade", "Dominar as convenções do artigo científico em língua portuguesa"],
        shadowingDialogue: {
          title: "A contribuição original",
          lines: [
            { speaker: "Orientadora", text: "Sua revisão de literatura está excelente. Mas qual é a sua contribuição? O que você traz de novo?" },
            { speaker: "Mestranda", text: "Aplico a teoria de X ao contexto brasileiro, que ainda não havia sido estudado." },
            { speaker: "Orientadora", text: "Isso é uma contribuição. Mas seja mais específica: o que você espera encontrar? O que seria surpreendente?" },
            { speaker: "Mestranda", text: "Minha hipótese é que o contexto brasileiro vai revelar uma variação que a teoria de X não prevê." },
            { speaker: "Orientadora", text: "Agora sim. Uma hipótese que pode ser refutada, aplicada a um contexto inexplorado. Isso é pesquisa." }
          ]
        },
        keyPhrases: [
          "Contribuição original: o que você acrescenta ao estado da arte",
          "Hipótese: afirmação testável e falsificável",
          "Revisão de literatura: o que já foi feito e onde está o gap",
          "IMRaD: Introdução / Metodologia / Resultados / Discussão"
        ],
        guidedProduction: [
          "Qual é a estrutura IMRaD e por que é o padrão científico?",
          "Como se escreve uma hipótese de pesquisa bem formulada?",
          "Escreva uma introdução acadêmica de 5 frases sobre um tema que você domina."
        ],
        grammar: {
          title: "Estrutura do Artigo Científico C2",
          explanation: "IMRaD: Introdução (problema, objetivo, hipótese, justificativa), Metodologia (como a pesquisa foi feita — reprodutibilidade), Resultados (o que foi encontrado — sem interpretação), Discussão (interpretação dos resultados, comparação com literatura, limitações). Abstract: 150-250 palavras, estrutura IMRaD comprimida. Palavras-chave: 3-6 termos descritores. Referências: ABNT ou Vancouver ou APA. Voz: impessoal, presente do indicativo para afirmações gerais, pretérito para procedimentos.",
          conjugation: "Verbos acadêmicos de C2: corroborar / refutar / evidenciar / apontar para / sugerir / demonstrar / contrastar com / dialogar com / problematizar / revisitar / ressignificar / complexificar"
        },
        exercises: [
          { type: "production", prompt: "Escreva um abstract (150 palavras) de uma pesquisa fictícia sobre desigualdade digital no Brasil.", answer: "O presente estudo investigou a relação entre acesso à internet e desempenho educacional em escolas públicas brasileiras durante o período pós-pandemia (2021-2023). Adotando metodologia mista — análise quantitativa de dados do SAEB (n=12.400 estudantes) e entrevistas qualitativas com 40 docentes de cinco regiões — a pesquisa buscou identificar correlações entre infraestrutura digital e indicadores de aprendizagem. Os resultados evidenciaram que estudantes com acesso regular à internet de alta velocidade apresentaram desempenho 23% superior em matemática e 18% em leitura, comparativamente aos sem acesso. Constatou-se, contudo, que a mera disponibilidade tecnológica sem formação docente adequada não produziu ganhos significativos. Conclui-se que a desigualdade digital constitui fator estrutural de ampliação das desigualdades educacionais, recomendando-se políticas integradas de infraestrutura e capacitação profissional como condição para resultados efetivos." },
          { type: "production", prompt: "Formule uma hipótese de pesquisa bem estruturada sobre redes sociais e saúde mental.", answer: "Hipótese principal: o uso de redes sociais por mais de quatro horas diárias correlaciona-se positivamente com indicadores de ansiedade em adolescentes de 13 a 17 anos, independentemente do nível socioeconômico, sendo esse efeito mediado pelo tipo de uso (passivo vs. ativo). Hipótese alternativa: não há correlação estatisticamente significativa entre tempo de uso e ansiedade quando controladas variáveis como qualidade das relações offline e presença de suporte familiar. Previsão: se a hipótese principal for corroborada, o tipo de uso (passivo: scrolling; ativo: interação social) mostrará efeitos diferenciados, com uso passivo associado a maiores níveis de ansiedade." },
          { type: "production", prompt: "Escreva a seção de 'Limitações' de uma pesquisa sobre comportamento eleitoral no Brasil.", answer: "O presente estudo apresenta limitações que devem ser consideradas na interpretação dos resultados. Em primeiro lugar, a amostragem intencional, embora adequada aos objetivos qualitativos da pesquisa, impede generalizações estatísticas para a população total de eleitores brasileiros. Em segundo lugar, os dados foram coletados imediatamente após o período eleitoral, o que pode ter introduzido viés de retrospecto nos relatos dos participantes. Terceiro, o foco em eleitores urbanos das capitais deixa sub-representadas as populações rurais e de municípios menores, que compõem parcela significativa do eleitorado nacional. Por fim, a volatilidade do comportamento eleitoral brasileiro torna os resultados potencialmente datados em ciclos eleitorais subsequentes. Pesquisas futuras deveriam ampliar a cobertura geográfica e incluir coleta longitudinal." },
          { type: "rewrite", prompt: "Torne academicamente rigoroso: 'Todo mundo sabe que a educação pública no Brasil é um problema sério que precisa de solução urgente.'", answer: "Conforme apontam consistentemente os indicadores educacionais internacionais — incluindo o PISA 2022, no qual o Brasil ocupa a 65ª posição entre 79 países avaliados — o sistema de educação pública nacional enfrenta desafios estruturais que demandam intervenção política prioritária e sistemática." },
          { type: "production", prompt: "Escreva a seção de 'Discussão' (5 frases) de uma pesquisa que encontrou resultado inesperado.", answer: "Os resultados obtidos contradizem parcialmente a hipótese inicial, que previa correlação positiva entre renda familiar e desempenho escolar em todas as faixas analisadas. A ausência dessa correlação no segmento de renda média-baixa — onde estudantes de famílias com renda entre 1 e 3 salários mínimos apresentaram desempenho superior ao previsto — sugere a influência de variáveis não controladas, possivelmente relacionadas ao capital cultural familiar e ao engajamento parental. Esses achados dialogam com os de Bourdieu (1979), para quem o capital cultural pode operar de forma relativamente independente do capital econômico em contextos específicos. Cabe destacar que o tamanho amostral desta categoria (n=87) limita inferências conclusivas, recomendando-se estudos focados nesse segmento. Em síntese, os dados problematizam a relação linear entre renda e desempenho, apontando para a complexidade dos determinantes do aprendizado." }
        ]
      },
      {
        id: "C2-U3-L4",
        title: "Debate e oratória de alto nível em C2",
        objectives: ["Realizar debate de alto nível com estrutura retórica C2", "Responder a objeções complexas com elegância e precisão"],
        shadowingDialogue: {
          title: "O debate como arte",
          lines: [
            { speaker: "Debatedora", text: "O maior erro num debate não é ter o argumento errado — é não ouvir o argumento adversário." },
            { speaker: "Aluno", text: "Porque se não ouvi direito, posso refutar algo que a pessoa não disse." },
            { speaker: "Debatedora", text: "O espantalho. E além de ser uma falácia, revela fraqueza — você não conseguiu refutar o que foi dito." },
            { speaker: "Aluno", text: "Como demonstrar que ouvi sem perder tempo?" },
            { speaker: "Debatedora", text: "'Entendo que seu argumento é X. Discordo por Y.' Doze palavras. Mostra escuta, abre o rebate." }
          ]
        },
        keyPhrases: [
          "Escuta ativa antes do rebate — reformular o argumento adversário",
          "Concessão estratégica: reconhecer o que é válido antes de discordar",
          "Reductio ad absurdum: mostrar que o argumento leva a conclusões inaceitáveis",
          "Distinguir: atacar o argumento vs. atacar a pessoa (ad hominem)"
        ],
        guidedProduction: [
          "Rebata este argumento sem usar falácias: 'Cotas raciais são racismo ao contrário.'",
          "Use reductio ad absurdum para refutar: 'Se cada um fizer o que quer, o mundo será melhor.'",
          "Faça uma concessão estratégica seguida de rebate sobre o uso de celular em sala de aula."
        ],
        grammar: {
          title: "Técnicas de Debate C2",
          explanation: "Concessão estratégica: 'É verdade que X — contudo, isso não implica Y porque Z.' Reductio ad absurdum: levar o argumento às suas consequências lógicas extremas para mostrar sua inviabilidade. Distinção: separar casos que parecem iguais mas têm diferenças relevantes. Analogia: comparar com caso paralelo mais claro. Inversão do ônus da prova: mostrar que é o adversário que deve provar, não você. Tu quoque: 'você também faz isso' — falácia que não refuta o argumento.",
          conjugation: "Fórmulas de rebate C2: 'Embora reconheça a validade de X, o argumento pressupõe Y, que não está demonstrado.' / 'A analogia proposta falha porque A e B diferem em C, que é precisamente o ponto em questão.' / 'Levar esse raciocínio às últimas consequências implicaria Z, o que parece inaceitável.'"
        },
        exercises: [
          { type: "production", prompt: "Rebata sem falácias: 'Cotas raciais são racismo ao contrário porque tratam pessoas de forma diferente com base na raça.'", answer: "Reconheço que a preocupação com tratamento igualitário é legítima. No entanto, o argumento pressupõe que igualdade formal equivale a equidade — e isso é precisamente o que está em disputa. Tratar de forma idêntica pessoas em situações estruturalmente desiguais reproduz e amplifica a desigualdade. As cotas não criam diferença racial — operam sobre uma diferença já existente e historicamente construída. A analogia correta não é 'discriminar negros vs. discriminar brancos', mas 'compensar um terreno desnivelado para que a corrida seja fair'. Chamar isso de 'racismo ao contrário' confunde a causa (escravidão, exclusão histórica) com o instrumento de correção." },
          { type: "production", prompt: "Use reductio ad absurdum para refutar: 'O Estado não deve regular o mercado.'", answer: "Levemos esse princípio às suas consequências lógicas: sem regulação, empresas farmacêuticas poderiam vender remédios sem teste de segurança — porque o mercado 'puniria' os que causam dano (após as primeiras mortes). Bancos poderiam criar produtos financeiros sem transparência — o mercado eventualmente os corrigiria (após a crise de 2008 destruir as economias de milhões). Indústrias poderiam despejar resíduos tóxicos em rios — o mercado eventualmente precificaria a poluição (quando não houver mais água potável). Se o princípio 'sem regulação' leva a esses resultados em casos paradigmáticos, precisamos ao menos qualificá-lo: qual regulação, em que áreas, com que mecanismos?" },
          { type: "production", prompt: "Faça concessão estratégica + rebate sobre: 'Celular em sala de aula sempre distrai e prejudica o aprendizado.'", answer: "É verdade que o uso irrestrito e não-supervisionado de celular em sala de aula correlaciona-se negativamente com atenção e desempenho — os estudos de Wilmer et al. (2017) e Duncan et al. (2012) o demonstram de forma consistente. No entanto, o argumento falha ao generalizar 'celular em sala' como categoria homogênea. Há diferença fundamental entre uso passivo (scrolling em redes sociais durante a aula) e uso pedagógico ativo (pesquisa orientada, produção de conteúdo, acesso a material didático). O problema não é o dispositivo — é a ausência de mediação pedagógica. Proibir o celular sem desenvolver competência para seu uso educacional é resolver o sintoma sem tratar a causa." },
          { type: "analysis", prompt: "Identifique a falácia e corrija o raciocínio: 'Você não pode falar sobre desmatamento se dirige um carro.'", answer: "Falácia tu quoque (e ad hominem): ataca a consistência do falante em vez do argumento em si. Mesmo que o argumento fosse hipocritamente apresentado, a validade de uma afirmação é independente do comportamento de quem a faz. O desmatamento causa emissões de carbono: isso é verdadeiro independentemente de quem o afirma. Correção do raciocínio: se quiser refutar o argumento sobre desmatamento, questione os dados, a metodologia ou as soluções propostas — não o modo de transporte do orador. A hipocrisia pode ser relevante para questionar a credibilidade (ethos), mas nunca substitui a refutação do argumento (logos)." },
          { type: "production", prompt: "Escreva a abertura de um debate (4 linhas) que demonstre escuta ativa do argumento adversário.", answer: "Antes de apresentar minha posição, quero garantir que entendi corretamente o argumento que acabou de ser apresentado: defende-se que a privatização de serviços públicos aumenta a eficiência porque elimina o incentivo ao desperdício inerente à gestão estatal. Se compreendi bem — e peço correção se não — é esse o núcleo da tese. Bem: concordo que incentivos importam para a eficiência. Minha discordância é sobre o que a privatização incentiva — e se esses incentivos produzem os resultados que o argumento pressupõe." }
        ]
      },
      {
        id: "C2-U3-L5",
        title: "Revisão e produção integrada C2-U3",
        objectives: ["Integrar epistemologia, retórica, escrita acadêmica e debate em produção C2", "Demonstrar pensamento crítico de alto nível em português"],
        shadowingDialogue: {
          title: "O intelectual público",
          lines: [
            { speaker: "Escritora", text: "O intelectual público tem uma responsabilidade que o acadêmico não tem: tornar o complexo acessível sem torná-lo falso." },
            { speaker: "Aluno", text: "Sem simplificar demais — porque simplificar demais é uma forma de mentir." },
            { speaker: "Escritora", text: "Exatamente. Popularizar não é vulgarizar. É encontrar a analogia certa, a narrativa que carrega a ideia intacta." },
            { speaker: "Aluno", text: "E ter coragem de dizer 'não sei' ou 'a evidência é inconclusiva' — quando é." },
            { speaker: "Escritora", text: "Isso é o mais difícil. O público quer certeza. O intelectual honesto oferece nuance. São mercados diferentes." }
          ]
        },
        keyPhrases: [
          "Intelectual público: rigor + acessibilidade + coragem epistêmica",
          "Popularizar sem vulgarizar: a analogia como ferramenta",
          "Dizer 'não sei' como ato de honestidade intelectual",
          "Responsabilidade epistêmica: o impacto do que se diz publicamente"
        ],
        guidedProduction: [
          "Explique um conceito filosófico complexo para um não-especialista sem perder o rigor.",
          "Quando é honesto dizer 'não sei' e quando é evasão?",
          "Produza um texto de 200 palavras de divulgação intelectual sobre um tema que você domina."
        ],
        grammar: {
          title: "Revisão C2-U3",
          explanation: "Consolida: epistemologia aplicada (conhecimento, evidência, falsificabilidade), retórica clássica (ethos/pathos/logos/kairos), escrita acadêmica (IMRaD, hipótese, contribuição), debate (escuta ativa, concessão, reductio ad absurdum).",
          conjugation: "Marcadores de integridade epistêmica C2: 'as evidências disponíveis sugerem, mas não provam' / 'há consenso científico sobre X, embora haja debate sobre Y' / 'minha posição é X, reconhecendo que Y é uma objeção séria que não tenho resposta definitiva' / 'isso está além do que os dados permitem afirmar'"
        },
        exercises: [
          { type: "production", prompt: "Explique 'falsificabilidade' para um leigo em 5 frases sem jargão.", answer: "Imagine que você quer saber se uma afirmação é científica ou não. A pergunta mais importante não é 'isso pode ser provado verdadeiro?' — é 'isso pode ser provado falso?' Uma boa teoria científica faz apostas: diz que SE tal coisa for verdade, ENTÃO vamos observar tal resultado — e se não observarmos, a teoria estava errada. A teoria da gravidade, por exemplo, faz previsões específicas que poderiam, em princípio, ser contraditas por experimentos. Já 'o universo foi criado por uma entidade sobrenatural que também criou as evidências de que não foi' não pode ser testada — portanto não é ciência. Não porque seja falsa, mas porque não é testável." },
          { type: "production", prompt: "Escreva um texto de divulgação de 150 palavras sobre um tema acadêmico que você conhece.", answer: "Por que esquecemos os sonhos ao acordar? A resposta tem a ver com como o cérebro consolida memórias durante o sono. Durante o sono REM — quando sonhamos mais vividamente — o hipocampo, região crucial para formação de memórias, está em modo diferente do que quando estamos acordados. Além disso, há baixos níveis de noradrenalina, neurotransmissor importante para consolidação de memórias. O resultado: as imagens oníricas não passam pelo mesmo processo de 'salvar' que nossas memórias acordadas. Acordar bruscamente pode preservar fragmentos — por isso às vezes lembramos de sonhos quando despertamos no meio da noite. Mas à medida que a consciência diurna se instala, os fragmentos sobrescritos desaparecem. Não é que os sonhos sejam sem sentido — é que o cérebro acorda com outras prioridades." },
          { type: "production", prompt: "Construa um argumento de 5 frases sobre IA e educação usando ethos, pathos e logos integrados.", answer: "Como pesquisador que passou os últimos cinco anos estudando tecnologia educacional, posso afirmar que a IA em sala de aula é simultaneamente a maior oportunidade e o maior risco que a educação enfrenta. [ethos] Tenho visto professores brilhantes paralisados pelo medo de que a IA torne seu trabalho obsoleto — e esse medo é compreensível, mas mal direcionado. [pathos] Os dados mostram que países que integraram IA como ferramenta pedagógica — não como substituta docente — registraram aumento de 30% no engajamento estudantil (OCDE, 2023). [logos] A IA não substitui professores: substitui a parte burocrática do trabalho docente, liberando tempo para o que só humanos fazem — criar vínculo, perceber o aluno que está sofrendo, adaptar o olhar. [distinção] Por isso, a pergunta correta não é 'IA vai tirar emprego de professor?' — é 'como preparamos professores para trabalhar com IA?'" },
          { type: "production", prompt: "Quando é honesto dizer 'não sei' e quando é evasão intelectual? Escreva 4 frases.", answer: "Dizer 'não sei' é honesto quando as evidências são genuinamente inconclusivas, quando a pergunta está fora da área de expertise do falante, ou quando a resposta honesta é mais complexa do que o contexto permite desenvolver. É evasão quando serve para evitar uma posição que seria impopular mas está bem fundamentada, quando a evidência disponível é suficiente para uma posição razoável mas o falante prefere a conforto do 'não sei', ou quando é usado para equiparar falsamente questões com graus muito diferentes de evidência. A distinção prática: 'Não sei se existe vida em outros planetas' é honesto (genuína incerteza). 'Não sei se vacinas causam autismo' em 2024 é evasão — há consenso científico esmagador." },
          { type: "analysis", prompt: "O que diferencia um debate intelectual de alto nível de uma discussão comum?", answer: "Um debate intelectual de alto nível distingue-se por: escuta genuína — os participantes realmente alteram suas posições quando confrontados com boa evidência; precisão conceitual — os termos são definidos antes de serem disputados; boa fé epistêmica — o objetivo é chegar mais perto da verdade, não vencer; distinção entre o que se sabe e o que se crê; capacidade de sustentar incerteza — nem toda questão tem resposta clara e um bom debate reconhece isso. Em discussões comuns, o objetivo frequentemente é confirmar o que já se pensa, derrotar o adversário simbolicamente, ou defender a identidade do grupo. A diferença não é de inteligência — é de comprometimento com a verdade acima da vitória." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 4 — Brasil Profundo: História, Memória e Identidade
  // ══════════════════════════════════════════════════════
  {
    id: "C2-U4",
    title: "Brasil Profundo: História, Memória e Identidade",
    level: "C2",
    lessons: [
      {
        id: "C2-U4-L1",
        title: "Memória coletiva e esquecimento histórico no Brasil",
        objectives: ["Analisar a construção da memória histórica brasileira com perspectiva crítica", "Discutir o papel do esquecimento como instrumento político"],
        shadowingDialogue: {
          title: "O que lembramos e o que esquecemos",
          lines: [
            { speaker: "Historiadora", text: "O Brasil nunca fez um acerto de contas com a escravidão. Não houve processo como na África do Sul, não houve reparação." },
            { speaker: "Aluno", text: "E o que fica quando não há acerto de contas? A desigualdade persiste com outro nome?" },
            { speaker: "Historiadora", text: "Exatamente. O 13 de maio de 1888 libertou juridicamente, mas não economicamente, não socialmente." },
            { speaker: "Aluno", text: "E a narrativa oficial celebrou a Abolição como generosidade — em vez de reconhecê-la como reparação tardia e incompleta." },
            { speaker: "Historiadora", text: "Memória histórica é política. Quem decide o que se comemora decide o que se esquece." }
          ]
        },
        keyPhrases: [
          "Memória coletiva (Halbwachs): a memória é sempre social, nunca individual",
          "Lugares de memória (Nora): monumentos, datas, arquivos como âncoras do passado",
          "Esquecimento estratégico: o que não se lembra não precisa ser reparado",
          "Comissão da Verdade (2012-2014): acerto tardio e incompleto com a ditadura"
        ],
        guidedProduction: [
          "Por que o Brasil não fez um 'acerto de contas' com a escravidão?",
          "O que é 'lugar de memória'? Dê exemplos brasileiros positivos e problemáticos.",
          "Como a ditadura militar (1964-1985) é lembrada e esquecida no Brasil hoje?"
        ],
        grammar: {
          title: "Vocabulário de Memória Histórica C2",
          explanation: "Memória coletiva (Maurice Halbwachs): toda memória individual é moldada por grupos sociais — família, nação, classe. Lugares de memória (Pierre Nora): espaços, objetos, rituais que ancoram a memória coletiva quando a memória viva desaparece. Esquecimento ativo: apagar deliberadamente eventos incômodos da narrativa oficial. Reparação histórica: reconhecimento e compensação por injustiças passadas. Negacionismo: negar ou minimizar eventos históricos documentados. Trauma histórico: ferida coletiva que persiste através de gerações.",
          conjugation: "Verbos de memória histórica: commemorar / rememorar / silenciar / apagar / ressignificar / reparar / reconhecer / denunciar / testemunhar / arquivar / preservar / revelar"
        },
        exercises: [
          { type: "analysis", prompt: "Por que a narrativa da 'Abolição como presente da Princesa Isabel' é historicamente problemática?", answer: "A narrativa que celebra a Abolição como gesto generoso de Isabel obscurece vários elementos históricos cruciais. Primeiro, ignora as lutas dos próprios escravizados — fugas, quilombos, resistência cotidiana — que tornaram a escravidão economicamente inviável antes de 1888. Segundo, apaga o papel do movimento abolicionista negro e branco que pressionou por décadas. Terceiro, enquadra a Abolição como dádiva, não como reconhecimento tardio e forçado de um direito fundamental. Quarto, e mais importante politicamente, uma 'dádiva' não cria obrigação de reparação — mas uma injustiça reconhecida cria. A narrativa do 'presente' serve, portanto, para naturalizar a ausência de reparação." },
          { type: "production", prompt: "O que é um 'lugar de memória' e quais são exemplos brasileiros problemáticos e outros afirmativos?", answer: "Lugar de memória (Pierre Nora) é um espaço, objeto ou ritual que ancora a memória coletiva quando a vivência direta desaparece — substituindo a memória viva pela memória arquivada. Exemplos afirmativos no Brasil: o Memorial da Resistência em São Paulo (preserva a memória da ditadura), o Museu da República, os quilombos remanescentes como Palmares. Exemplos problemáticos: estátuas de bandeirantes que celebram massacradores de indígenas como heróis civilizatórios; nomes de ruas e praças que homenageiam escravocratas e torturadores da ditadura; o próprio 13 de maio como data comemorativa que celebra a Abolição sem reconhecer o que veio antes e depois. Quem tem poder de nomear lugares de memória tem poder sobre o que a nação recorda." },
          { type: "analysis", prompt: "O que foi a Comissão da Verdade brasileira (2012-2014) e quais foram suas limitações?", answer: "A Comissão Nacional da Verdade, instalada em 2012 pelo governo Dilma Rousseff, documentou sistematicamente os crimes da ditadura militar de 1964-1985: torturas, mortes, desaparecimentos forçados. Seu relatório final (2014) identificou 434 mortos e desaparecidos e nomeou 377 agentes do Estado responsáveis por crimes. Limitações: não teve poder punitivo — os perpetradores foram identificados mas não processados, graças à anistia de 1979, reinterpretada como bilateral (o que é juridicamente contestado). O Brasil é um dos poucos países que fizeram comissão da verdade sem responsabilização penal. Além disso, a Comissão focou na ditadura recente, sem abordar crimes do período colonial e da escravidão. Foi um passo tardio e incompleto — mas necessário." },
          { type: "production", prompt: "Escreva sobre o paradoxo do 13 de maio no Brasil.", answer: "O 13 de maio de 1888 é celebrado como um dos grandes marcos da história brasileira — a data em que a Lei Áurea pôs fim à escravidão. O paradoxo é que essa comemoração coexiste com a negação de suas consequências: se a Abolição foi um ato de justiça, ela foi uma reparação de uma injustiça. Reparações exigem continuidade: não basta libertar juridicamente quem foi escravizado por séculos sem terra, sem educação, sem qualquer base econômica. O Brasil liberou e abandonou. A comemoração do 13 de maio, sem o reconhecimento do abandono que se seguiu, é uma forma de memória seletiva que celebra o gesto sem assumir a responsabilidade que ele cria." },
          { type: "analysis", prompt: "Como o negacionismo histórico opera no Brasil contemporâneo?", answer: "O negacionismo histórico no Brasil opera em múltiplas frentes. Em relação à ditadura (1964-1985): minimização ('não foi uma ditadura', 'havia motivo para o AI-5'), glorificação de torturadores como 'heróis', contestação dos números de mortos. Em relação à escravidão: naturalização ('a escravidão existia em toda parte', 'foi a menos cruel', 'os próprios africanos escravizavam'), negação de sua influência na desigualdade atual. Em relação às populações indígenas: minimização do genocídio colonial, contestação das demarcações como 'ideologia'. Em todos os casos, o mecanismo é o mesmo: questionar os fatos documentados para evitar as conclusões políticas que deles decorrem — reconhecimento, reparação, responsabilização." }
        ]
      },
      {
        id: "C2-U4-L2",
        title: "Pensamento social brasileiro: intérpretes do Brasil",
        objectives: ["Conhecer os grandes intérpretes do Brasil e suas contribuições", "Analisar o pensamento social brasileiro com perspectiva crítica C2"],
        shadowingDialogue: {
          title: "Quem somos nós?",
          lines: [
            { speaker: "Professor", text: "Cada geração de pensadores brasileiros tentou responder: quem somos? De onde viemos? Para onde vamos?" },
            { speaker: "Aluno", text: "Gilberto Freyre com a mestiçagem harmoniosa, Sérgio Buarque com o homem cordial, Darcy Ribeiro com o povo novo." },
            { speaker: "Professor", text: "E Florestan Fernandes, que mostrou que a cordialidade esconde a violência da hierarquia social." },
            { speaker: "Aluno", text: "São leituras que competem ou se complementam?" },
            { speaker: "Professor", text: "As duas coisas. O Brasil é grande o suficiente para que todas sejam verdadeiras — e nenhuma seja completa." }
          ]
        },
        keyPhrases: [
          "Gilberto Freyre: 'Casa Grande e Senzala' — mestiçagem e democracia racial (mito)",
          "Sérgio Buarque de Holanda: 'Raízes do Brasil' — homem cordial, herança ibérica",
          "Caio Prado Júnior: formação colonial e capitalismo periférico",
          "Florestan Fernandes: escravidão e desigualdade racial estrutural"
        ],
        guidedProduction: [
          "O que é o 'homem cordial' de Sérgio Buarque? É uma característica positiva?",
          "Como Florestan Fernandes contradiz e complementa Gilberto Freyre?",
          "O Brasil precisa de novos 'intérpretes'? Quem são os pensadores contemporâneos?"
        ],
        grammar: {
          title: "Intérpretes do Brasil C2",
          explanation: "Gilberto Freyre (1900-1987): 'Casa Grande e Senzala' (1933) — a miscigenação como singularidade brasileira positiva; críticas: romantiza a violência da escravidão, cria mito da 'democracia racial'. Sérgio Buarque de Holanda (1902-1982): 'Raízes do Brasil' (1936) — o 'homem cordial' como traço ibérico: relações pessoais acima das institucionais (não é gentileza, é personalismo). Caio Prado Júnior (1907-1990): perspectiva marxista da formação colonial. Florestan Fernandes (1920-1995): demonstra empiricamente a persistência do racismo após a Abolição.",
          conjugation: "Verbos de análise do pensamento social: tematizar / problematizar / sistematizar / contestar / revisitar / atualizar / superar / complexificar / descolonizar / ressignificar"
        },
        exercises: [
          { type: "analysis", prompt: "O que é o 'homem cordial' de Sérgio Buarque e por que não significa 'gentileza'?", answer: "O 'homem cordial' de Sérgio Buarque vem de 'cordis' (coração) — não é elogio, é diagnóstico. O brasileiro cordial opera a partir de laços pessoais, familiares e afetivos, não a partir de normas impessoais e institucionais. Para o homem cordial, a distinção entre o público e o privado é fluida: emprega o sobrinho no cargo público, favorece o amigo na licitação, trata o chefe com familiaridade excessiva. É uma herança ibérica de uma cultura que nunca separou completamente a esfera pública da doméstica. O que parece gentileza é, na verdade, personalismo — e o personalismo é o inimigo das instituições, da meritocracia e do estado de direito. Sérgio Buarque via nisso uma das raízes dos problemas políticos brasileiros." },
          { type: "production", prompt: "Como Florestan Fernandes contradiz o mito da democracia racial de Freyre?", answer: "Gilberto Freyre, em 'Casa Grande e Senzala', argumentou que a miscigenação entre brancos, indígenas e africanos criou no Brasil uma forma única de convivência racial relativamente harmoniosa — a 'democracia racial'. Florestan Fernandes, em 'A Integração do Negro na Sociedade de Classes' (1965), refutou empiricamente essa tese: mesmo após a Abolição, negros e mulatos permaneceram nos estratos mais baixos da hierarquia social, com acesso limitado à educação, emprego qualificado e mobilidade social. A desigualdade racial era (e é) estrutural — não uma reminiscência da escravidão que o tempo naturalmente corrigiria, mas um produto ativo de um sistema que nunca foi desmontado. A cordialidade racial de Freyre, para Florestan, era superficial — uma convivência de desiguais que não elimina a hierarquia." },
          { type: "production", prompt: "Quem são os intérpretes contemporâneos do Brasil? Cite 3 e suas contribuições.", answer: "Jessé Souza ('A Elite do Atraso', 2017): atualiza o debate sobre a herança colonial e o papel das elites na perpetuação da desigualdade, criticando tanto Freyre quanto Sérgio Buarque por focarem em cultura sem abordar classe e poder econômico. Conceição Evaristo (literatura e ensaio): traz a perspectiva da mulher negra como sujeito intelectual e não apenas objeto de estudo, renovando o debate sobre identidade e resistência. Ailton Krenak ('Ideias para Adiar o Fim do Mundo', 2019): oferece uma perspectiva indígena sobre a relação do Brasil com a natureza, a modernidade e o futuro — deslocando o centro da reflexão para onde nunca esteve." },
          { type: "analysis", prompt: "Por que 'Raízes do Brasil' e 'Casa Grande e Senzala', publicados na mesma década (1930s), chegam a conclusões tão diferentes?", answer: "Os dois livros partem de diagnósticos diferentes sobre a herança ibérica e colonial. Freyre vê na miscigenação e na intimidade entre senhor e escravizado uma singularidade positiva que fundou uma civilização tropical única — com romantismo explícito sobre a 'doçura' das relações. Sérgio Buarque vê na mesma herança ibérica um obstáculo ao desenvolvimento moderno: o personalismo, a dificuldade de separar público e privado, a resistência à burocracia impessoal. A diferença reflete também posições políticas e metodológicas distintas: Freyre é mais sociológico-cultural, influenciado por Boas; Sérgio Buarque é mais histórico-weberiano. Os dois obras continuam sendo lidas porque cada uma ilumina aspectos do Brasil que a outra negligencia." },
          { type: "production", prompt: "Escreva uma síntese crítica de 5 frases sobre a contribuição dos intérpretes clássicos do Brasil.", answer: "Os grandes intérpretes clássicos do Brasil — Freyre, Sérgio Buarque, Caio Prado, Florestan — constituem um corpus de pensamento indispensável e igualmente datado. Sua contribuição foi construir as primeiras sínteses sistemáticas sobre o que somos como povo, identificando heranças, contradições e possibilidades que a história colonial e imperial deixou como legado. Suas limitações são as limitações de seus tempos: perspectivas majoritariamente masculinas, brancas e letradas, que frequentemente tratam as populações negras, indígenas e populares como objeto de análise, não como sujeitos do pensamento. A tarefa contemporânea é revisitar esses clássicos sem reverenciá-los acriticamente — reconhecer o que iluminam e nomear o que não viam. O Brasil de Freyre, Sérgio Buarque e Florestan ainda existe; mas o Brasil de Krenak, Evaristo e Lélia Gonzalez também é real, e estava lá o tempo todo." }
        ]
      },
      {
        id: "C2-U4-L3",
        title: "Cultura popular e erudita: fronteiras e diálogos",
        objectives: ["Analisar criticamente as fronteiras entre cultura popular e erudita no Brasil", "Discutir o papel da cultura na construção de identidade e resistência"],
        shadowingDialogue: {
          title: "O popular como político",
          lines: [
            { speaker: "Pesquisadora", text: "A distinção entre cultura popular e erudita é, em grande medida, uma distinção de classe." },
            { speaker: "Aluno", text: "O samba era cultura popular — hoje está nos museus. O funk é popular — ainda é marginalizado." },
            { speaker: "Pesquisadora", text: "O caminho do samba para o museu levou cinquenta anos e passou pela apropriação de classe média." },
            { speaker: "Aluno", text: "Então o que se 'erudita' é o que a classe dominante decide legitimar?" },
            { speaker: "Pesquisadora", text: "Em parte, sim. Mas a cultura popular também tem sua autonomia — não é só reativa, é criativa. O funk não espera legitimação." }
          ]
        },
        keyPhrases: [
          "Cultura popular: produzida por e para grupos subalternos — não é 'menos'",
          "Indústria cultural (Adorno/Horkheimer): cultura como mercadoria",
          "Hibridismo cultural (Canclini): culturas que se misturam sem hierarquia",
          "Resistência cultural: criatividade como resposta à opressão"
        ],
        guidedProduction: [
          "O funk é arte legítima ou problema social? Qual é a distinção correta a fazer?",
          "Como o samba percorreu o caminho de 'música de marginal' a 'patrimônio nacional'?",
          "O que é hibridismo cultural? Dê exemplos brasileiros contemporâneos."
        ],
        grammar: {
          title: "Vocabulário de Teoria Cultural C2",
          explanation: "Indústria cultural (Adorno e Horkheimer, 1944): a cultura na sociedade capitalista torna-se mercadoria — produzida em massa, homogeneizada, consumida passivamente. Hibridismo (Néstor García Canclini): culturas não são puras nem separadas — se misturam, se hibridizam constantemente. Campo cultural (Bourdieu): espaço de lutas simbólicas onde grupos competem pelo poder de definir o que é legítimo. Resistência cultural (James Scott): as classes subalternas usam a cultura como forma de resistência ao poder — através da ironia, do duplo sentido, da subversão velada.",
          conjugation: "Verbos de análise cultural C2: legitimar / estigmatizar / apropriar / hibridizar / subalternizar / ressignificar / cooptar / mercantilizar / patrimonializar / resistir via"
        },
        exercises: [
          { type: "analysis", prompt: "Como o samba percorreu o caminho de 'música de vagabundo' a 'patrimônio nacional'?", answer: "No início do séc. XX, o samba carioca — produzido nas favelas e cortiços por populações negras e pobres — era perseguido pela polícia e estigmatizado pelas elites como 'música de vagabundo'. O caminho para o patrimônio nacional envolveu pelo menos três processos: primeiro, a apropriação pela classe média nos anos 30, quando artistas como Noel Rosa e Carmen Miranda levaram o samba para teatros e rádios; segundo, a política cultural do Estado Novo (Vargas), que cooptou o samba como símbolo de brasilidade — desde que depurado de elementos 'primitivos'; terceiro, o processo de musealização e tombamento que, ao longo do séc. XX, transformou o gênero em 'cultura nacional'. A ironia: o mesmo Estado que perseguia os sambistas nos anos 20 os glorificava nos anos 40." },
          { type: "production", prompt: "O funk é arte legítima? Qual é o argumento correto a fazer?", answer: "A pergunta 'funk é arte legítima?' está mal formulada — pressupõe que há uma instância neutra que confere ou retira legitimidade. A questão correta é: quem define o que é 'legítimo' e por quê? Do ponto de vista estético: o funk tem complexidade rítmica, criatividade lítrica e capacidade de evolução estilística (de proibidão a funk ostentação a funk melody). Do ponto de vista social: produz identidade, comunidade e resistência para populações marginalizadas. Do ponto de vista histórico: percorre o mesmo caminho que o samba percorreu — estigmatizado pela classe dominante, vital para quem o produz. A questão não é se é 'arte' — é por que certas artes são legitimadas e outras não, e quem se beneficia dessa hierarquia." },
          { type: "production", prompt: "O que é hibridismo cultural (Canclini) e como o Brasil exemplifica esse conceito?", answer: "Néstor García Canclini, em 'Culturas Híbridas' (1990), argumenta que as culturas modernas, especialmente na América Latina, não são puras nem separadas — estão em constante processo de mistura, onde elementos de diferentes tradições se combinam criando formas novas. O Brasil é um laboratório extraordinário de hibridismo: o axé baiano que mistura candomblé com pop eletrônico; o tropicalismo dos anos 60 que fundiu rock com baião; a literatura de Guimarães Rosa que mescla erudição europeia com oralidade sertaneja; o funk carioca que absorve hip-hop americano e o reinventa com ritmo baile funk. O conceito de Canclini é importante porque recusa tanto o purismo cultural (culturas 'autênticas' que devem ser preservadas intactas) quanto o imperialismo cultural (uma cultura dominante que absorve todas as outras)." },
          { type: "analysis", prompt: "Como a indústria cultural (Adorno) cooptou a MPB e o samba?", answer: "Adorno e Horkheimer argumentaram que a indústria cultural transforma arte em mercadoria, padronizando e homogeneizando o que era singular para maximizar o consumo. No Brasil, tanto o samba quanto a MPB sofreram esse processo. O samba, ao ser gravado em disco e transmitido pelo rádio nos anos 30-40, foi depurado de seus elementos mais dissonantes e adaptado ao gosto da classe média. A MPB, nos anos 70-80, tornou-se produto de nicho sofisticado — com seus próprios cânones de 'bom gosto' que excluíam o brega, o sertanejo e o funk. O paradoxo: ao serem legitimados pela indústria, esses gêneros perderam parte de sua força subversiva. O funk resiste parcialmente a esse processo — ainda é marginalizado o suficiente para não ter sido completamente cooptado." },
          { type: "production", prompt: "Escreva 4 frases sobre resistência cultural em comunidades marginalizadas no Brasil.", answer: "A resistência cultural das comunidades marginalizadas brasileiras não é secundária à resistência política — frequentemente a precede e a sustenta. O candomblé preservou cosmovisões africanas por séculos de perseguição, criando um espaço de autonomia espiritual e cultural que o Estado nunca conseguiu eliminar completamente. O funk, o rap e a literatura periférica contemporânea produzem vocabulário, narrativas e identidades que o sistema hegemônico não oferece — e que são, portanto, atos de afirmação em si mesmos. Resistir culturalmente é dizer 'existimos, pensamos, criamos' num contexto que sistematicamente nega essa existência." }
        ]
      },
      {
        id: "C2-U4-L4",
        title: "O Brasil no contexto da América Latina",
        objectives: ["Posicionar o Brasil no contexto latino-americano com perspectiva crítica C2", "Discutir convergências e divergências entre Brasil e seus vizinhos"],
        shadowingDialogue: {
          title: "Brasil na América Latina",
          lines: [
            { speaker: "Geógrafa", text: "O Brasil é, ao mesmo tempo, parte da América Latina e separado dela pela língua, pela história e pela escala." },
            { speaker: "Aluno", text: "A língua cria uma fronteira simbólica enorme. Bolivianos e uruguaios podem conversar em espanhol; brasileiros ficam de fora." },
            { speaker: "Geógrafa", text: "E a escala é decisiva: o Brasil é metade da América do Sul em território e população. Isso cria uma relação assimétrica." },
            { speaker: "Aluno", text: "Como os vizinhos veem o Brasil? Há ressentimento pela hegemonia regional?" },
            { speaker: "Geógrafa", text: "Há ambiguidade — admiração pela cultura, desconforto com a política externa, irritação com a arrogância ocasional de 'gigante da região'." }
          ]
        },
        keyPhrases: [
          "Brasil como 'ilha de língua portuguesa' na América Latina",
          "MERCOSUL / UNASUL / CELAC: integração regional e seus limites",
          "Dependência (Cardoso/Faletto): estrutura econômica periférica compartilhada",
          "Decolonialidade (Quijano / Mignolo): crítica ao eurocentrismo nas ciências sociais"
        ],
        guidedProduction: [
          "O que une Brasil e países hispânicos da América Latina além da geografia?",
          "O que é a teoria da dependência e como se aplica ao Brasil?",
          "O que é o pensamento decolonial e por que é relevante para entender a América Latina?"
        ],
        grammar: {
          title: "Vocabulário Geopolítico Latino-Americano C2",
          explanation: "Teoria da dependência (Cardoso, Faletto, Prebisch): economias periféricas latino-americanas são estruturalmente dependentes dos centros capitalistas — não por atraso, mas por inserção específica no capitalismo global. Colonialidade do poder (Aníbal Quijano): a estrutura de poder colonial persiste mesmo após a independência formal — hierarquias raciais, epistemológicas e econômicas. Decolonialidade: projeto intelectual e político de questionar e superar a colonialidade em todas as suas dimensões. Sul Global: conceito geopolítico que agrupa países não-dominantes na ordem mundial, independentemente da posição geográfica.",
          conjugation: "Termos geopolíticos C2: hegemonia regional / integração sul-sul / assimetria / dependência estrutural / colonialidade / decolonialidade / epistemologia do Sul / pensamento situado"
        },
        exercises: [
          { type: "analysis", prompt: "O que é a 'colonialidade do poder' (Quijano) e como se manifesta no Brasil contemporâneo?", answer: "Aníbal Quijano cunhou 'colonialidade do poder' para descrever como as estruturas criadas durante a colonização — hierarquias raciais, exploração econômica, subalternização epistêmica — persistem muito além da independência formal. No Brasil contemporâneo, manifesta-se em: a correspondência entre cor da pele e posição na hierarquia social (negros e indígenas sobre-representados na pobreza); o eurocentrismo no currículo escolar (história e filosofia centradas na Europa); a desvalorização de formas de conhecimento não-ocidentais (medicina tradicional indígena, cosmovisões africanas); a concentração de poder político e econômico em grupos historicamente brancos. A colonialidade não é resíduo do passado — é estrutura ativa do presente." },
          { type: "production", prompt: "O que é a teoria da dependência e como explica o desenvolvimento do Brasil?", answer: "A teoria da dependência, desenvolvida por Cardoso, Faletto e Prebisch nos anos 60-70, argumenta que o subdesenvolvimento latino-americano não é um estágio de desenvolvimento a ser superado — é produto estrutural da inserção periférica no capitalismo global. Países como o Brasil especializaram-se na exportação de commodities (café, soja, minério) enquanto importam manufaturados e tecnologia dos centros. Essa estrutura mantém os países periféricos em posição de dependência tecnológica, financeira e comercial. No caso brasileiro: mesmo com crescimento econômico expressivo nos anos 2000, a pauta exportadora permaneceu baseada em commodities, a dívida externa em dólares e a vulnerabilidade a ciclos internacionais de preços. A teoria explica por que 'crescer' não é o mesmo que 'desenvolver'." },
          { type: "analysis", prompt: "Quais são as principais tensões na relação do Brasil com seus vizinhos sul-americanos?", answer: "As principais tensões derivam da assimetria de tamanho e poder: o Brasil responde por metade do PIB e da população sul-americana, o que cria relações estruturalmente desiguais. Tensões específicas: com Argentina, rival histórico por liderança regional e pelo Mercosul; com Bolívia e Paraguai, que percebem o Brasil como potência extratora de recursos (gás boliviano, energia de Itaipu); com países andinos, onde o português cria barreira cultural e o Brasil é visto como ausente da integração hispânica. A política externa brasileira oscila entre a liderança regional (projeto de Lula de colocar o Brasil como 'porta-voz do Sul') e o isolamento relativo (preferência por relações bilaterais que preservem assimetria). O MERCOSUL e a UNASUL foram tentativas de institucionalizar a integração — com resultados limitados." },
          { type: "production", prompt: "O que é o pensamento decolonial e por que é relevante para o Brasil?", answer: "O pensamento decolonial, desenvolvido por pensadores como Quijano, Mignolo, Lugones e outros, questiona a validade universal das categorias de conhecimento produzidas pela modernidade europeia — que se apresentam como neutras e universais, mas são na verdade situadas e particulares. Propõe que o conhecimento sempre é produzido de algum lugar — e que o lugar importa. Para o Brasil, isso é relevante porque o eurocentrismo nas universidades, no currículo escolar e nas ciências sociais invisibiliza formas de conhecimento produzidas por populações negras, indígenas e periféricas. O pensamento decolonial não propõe rejeitar todo conhecimento europeu — propõe reconhecer que ele é um conhecimento entre outros, não o único, e ampliar o que conta como saber." },
          { type: "production", prompt: "Como o Brasil pode ser simultaneamente 'líder do Sul Global' e reproduzir colonialidade internamente?", answer: "Essa é uma das contradições centrais da política externa brasileira. O Brasil, como membro dos BRICS, defensor da multipolaridade e líder do Sul Global, propõe uma ordem mundial mais justa e menos eurocêntrica — enquanto internamente reproduz estruturas profundamente coloniais: desigualdade racial persistente, subalternização de populações indígenas, concentração de riqueza em grupos historicamente brancos. A explicação é que a política externa e a política interna têm lógicas distintas: no palco internacional, o Brasil se apresenta como potência emergente que desafia a hegemonia do Norte; domesticamente, as elites que controlam o Estado são as mesmas que se beneficiam da estrutura colonial. Não é hipocrisia individual — é incoerência estrutural de um estado pós-colonial onde as classes dominantes mudaram o discurso sem mudar as estruturas." }
        ]
      },
      {
        id: "C2-U4-L5",
        title: "Revisão e produção integrada C2-U4",
        objectives: ["Integrar memória histórica, pensamento social, cultura e geopolítica em análise C2", "Produzir texto crítico sobre identidade e história brasileira"],
        shadowingDialogue: {
          title: "O Brasil que ainda não foi",
          lines: [
            { speaker: "Intelectual", text: "Darcy Ribeiro dizia que o Brasil é 'uma nação que ainda não foi'. Cinquenta anos depois, ainda vale?" },
            { speaker: "Aluna", text: "Em parte sim. O potencial existe — a diversidade, os recursos, a criatividade. Mas a estrutura não mudou." },
            { speaker: "Intelectual", text: "A estrutura colonial persiste: as mesmas hierarquias raciais, a mesma concentração de riqueza, as mesmas exclusões." },
            { speaker: "Aluna", text: "Mas há movimentos novos — a literatura periférica, os jovens indígenas com diplomas, o activismo negro nas universidades." },
            { speaker: "Intelectual", text: "Talvez o Brasil que 'ainda não foi' esteja sendo construído não pelas elites, mas pelas margens." }
          ]
        },
        keyPhrases: [
          "'O Brasil que ainda não foi' — Darcy Ribeiro",
          "Estrutura colonial persistente vs. transformações em curso",
          "As margens como espaço de criação e resistência",
          "História não como fardo, mas como recurso crítico"
        ],
        guidedProduction: [
          "O Brasil ainda é a 'nação que ainda não foi' de Darcy Ribeiro? Argumente.",
          "O que seria o Brasil que poderia ser? Descreva uma visão de futuro fundamentada.",
          "Escreva sobre o papel da memória histórica na construção do futuro."
        ],
        grammar: {
          title: "Revisão C2-U4",
          explanation: "Consolida: memória histórica e esquecimento estratégico, intérpretes clássicos e contemporâneos do Brasil, cultura popular como resistência, posição do Brasil na América Latina e teoria decolonial.",
          conjugation: "Síntese vocabular C2-U4: colonialidade / decolonialidade / memória coletiva / lugares de memória / negacionismo / reparação histórica / hibridismo cultural / resistência cultural / teoria da dependência / Sul Global"
        },
        exercises: [
          { type: "production", prompt: "O Brasil ainda é a 'nação que ainda não foi' de Darcy Ribeiro? Argumente em 5 frases.", answer: "A fórmula de Darcy Ribeiro — 'nação que ainda não foi' — permanece pertinente em 2024, embora com nuances que o próprio Darcy não poderia antecipar. O potencial que ele identificava — a diversidade cultural, a criatividade, os recursos naturais — continua latente; mas o que também continua é a estrutura colonial que impede sua realização: concentração de renda, racismo estrutural, exclusão sistêmica de populações indígenas e negras. O que mudou são os sujeitos que constroem a transformação: não as elites ilustradas que Darcy esperava, mas as margens — os jovens negros nas universidades, os povos indígenas com diplomas e câmeras, as escritoras periféricas com contratos internacionais. O 'ainda não' de Darcy era uma promessa; hoje é, ao mesmo tempo, diagnóstico persistente e processo em curso." },
          { type: "production", prompt: "Escreva sobre um aspecto da história brasileira que deveria ser mais discutido publicamente.", answer: "A história dos quilombos brasileiros — comunidades formadas por escravizados que fugiram e construíram sociedades autônomas — deveria ocupar lugar central no currículo e na memória nacional, e permanece marginal. Palmares, a maior confederação quilombola, resistiu por quase um século (c.1600-1695) e chegou a ter 20.000 habitantes — uma das maiores comunidades livres das Américas no período. A história oficial celebra Zumbi como herói folclórico mas raramente examina o que Palmares foi: uma demonstração de que outra organização social era possível, de que a escravidão não era inevitável, de que as populações escravizadas não eram passivas. Recuperar essa história é recuperar um projeto alternativo de Brasil que foi derrotado militarmente mas nunca ideologicamente." },
          { type: "production", prompt: "Como as 'margens' constroem o Brasil contemporâneo? Dê 3 exemplos concretos.", answer: "Primeiro, a literatura periférica: escritores como Geovani Martins, Eliane Brum e Itamar Vieira Junior trazem perspectivas de territórios e experiências que o cânone literário nunca havia contemplado, criando um mapa cultural mais honesto do país. Segundo, os povos indígenas com diplomas universitários e acesso a mídia: lideranças como Ailton Krenak e Sônia Guajajara não apenas resistem — produzem pensamento que interpela e transforma o debate nacional sobre terra, natureza e futuro. Terceiro, o ativismo negro nas universidades: após a implementação das cotas, uma geração de pesquisadores negros produz conhecimento sobre racismo, história afro-brasileira e decolonialidade que estava ausente da academia brasileira. Em todos os casos, as margens não apenas 'chegam' ao centro — elas redesenham o que o centro é." },
          { type: "analysis", prompt: "Por que entender a história colonial é essencial para compreender o Brasil contemporâneo?", answer: "A história colonial não é passado: é presente com disfarce. As hierarquias raciais estabelecidas durante 350 anos de escravidão persistem nos dados de renda, saúde, educação e segurança pública — com negros e indígenas sistematicamente em posição inferior. A estrutura fundiária (grandes latifúndios) tem origem colonial e nunca foi fundamentalmente alterada. A dificuldade de separar público e privado que Sérgio Buarque identificava é herança da gestão patrimonialista do período colonial. Entender que a desigualdade contemporânea não é 'natural' — que tem uma história específica, com agentes e decisões identificáveis — é condição para imaginar e construir alternativas. Sem memória histórica, o presente parece inevitável; com ela, torna-se resultado de escolhas que poderiam ter sido diferentes — e que ainda podem ser." },
          { type: "production", prompt: "Escreva uma visão de futuro para o Brasil em 5 frases, fundamentada na análise histórica.", answer: "Um Brasil à altura de seu potencial seria aquele que, finalmente, acertasse as contas com sua história — não como punição, mas como condição para a liberdade: reconhecendo a dívida histórica com as populações escravizadas e indígenas, implementando reparações estruturais em educação, saúde e terra. Seria um Brasil que valorize sua extraordinária diversidade cultural não como exotismo para o turismo, mas como fundamento de uma epistemologia pluriversal — onde o saber Yanomami sobre ecossistemas e o conhecimento de terreiro sobre cura social são tão válidos quanto a academia europeia. Seria também um Brasil que liderasse o Sul Global não apenas retoricamente, mas pela coerência entre política externa de multipolaridade e política interna de equidade. Nada disso é utopia abstrata — países menores com histórias comparáveis fizeram escolhas diferentes com resultados diferentes. A questão não é se é possível; é se há vontade política e social para fazê-lo." }
        ]
      }
    ]
  }
];
