// C1 PART 1 — Unidades 1 y 2
// 12 lecciones · 60 ejercicios

export const C1_U1_U2 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 1 — Estilística e Figuras de Linguagem Avançadas
  // ══════════════════════════════════════════════════════
  {
    id: "C1-U1",
    title: "Estilística e Figuras de Linguagem Avançadas",
    level: "C1",
    lessons: [
      {
        id: "C1-U1-L1",
        title: "Figuras de linguagem: da metáfora ao paradoxo",
        objectives: ["Identificar e usar figuras de linguagem com precisão C1", "Analisar o efeito estilístico de cada figura"],
        shadowingDialogue: {
          title: "Análise literária",
          lines: [
            { speaker: "Crítica", text: "Drummond usa o paradoxo de forma magistral: 'No meio do caminho tinha uma pedra'." },
            { speaker: "Aluno", text: "A pedra é uma metáfora de obstáculo, mas o paradoxo está na repetição obsessiva?" },
            { speaker: "Crítica", text: "Exatamente. A anáfora cria ritmo hipnótico e o paradoxo revela a persistência do obstáculo existencial." },
            { speaker: "Aluno", text: "É como se o eu-lírico não conseguisse superar o trauma, e a forma reforça o conteúdo." },
            { speaker: "Crítica", text: "Perfeito. Em literatura, forma e conteúdo são inseparáveis. Isso é o que chamamos de iconicidade." }
          ]
        },
        keyPhrases: [
          "Metáfora / Metonímia / Sinédoque / Catacrese — figuras de semelhança",
          "Anáfora / Epífora / Quiasmo / Gradação — figuras de repetição e construção",
          "Paradoxo / Oxímoro / Antítese / Ironia — figuras de pensamento",
          "Hipérbole / Litotes / Eufemismo / Perífrase — figuras de intensidade"
        ],
        guidedProduction: [
          "Identifique as figuras em: 'Ela tinha um sorriso de mel e olhos de pedra.'",
          "Crie uma frase usando oxímoro para descrever o amor.",
          "Reescreva usando litotes: 'O texto é muito bom.'"
        ],
        grammar: {
          title: "Figuras de Linguagem C1: Análise e Produção",
          explanation: "Figuras de semelhança: metáfora (substituição por semelhança), metonímia (parte pelo todo, causa pelo efeito), sinédoque (espécie pelo gênero). Figuras de pensamento: paradoxo (contradição aparente que revela verdade), oxímoro (termos opostos unidos — 'doce amargo'), antítese (oposição sem fusão), ironia (dizer o contrário com intenção crítica). Figuras de construção: quiasmo (inversão paralela — 'Uns têm o que comer; outros comem o que têm'), gradação clímax/anticlímax.",
          conjugation: "Identificar: A figura X produz o efeito de Y, reforçando a ideia de Z. / O uso de X cria uma tensão entre A e B que problematiza C."
        },
        exercises: [
          { type: "identify", prompt: "Identifique a figura: 'A vida é uma peça de teatro onde ninguém ensaiou o papel.'", answer: "Metáfora. A vida é comparada a uma peça de teatro sem ensaio, sugerindo a imprevisibilidade e falta de controle da existência humana." },
          { type: "identify", prompt: "Identifique a figura: 'Feliz infelicidade a minha, que me faz tão miserável!'", answer: "Oxímoro/Paradoxo. 'Feliz infelicidade' une termos contraditórios, revelando a complexidade do estado emocional do eu-lírico." },
          { type: "identify", prompt: "Identifique a figura: 'Vim, vi, venci.' (Júlio César)", answer: "Assíndeto e gradação clímax. A ausência de conjunções acelera o ritmo e os verbos formam uma progressão de conquistas em ordem crescente." },
          { type: "production", prompt: "Escreva um parágrafo usando três figuras de linguagem diferentes para descrever a cidade de São Paulo.", answer: "São Paulo é uma fera insone que devora seus filhos e os regurgita como executivos às sete da manhã. Seus arranha-céus tocam o céu enquanto suas favelas escavam o subsolo da dignidade. A metrópole respira: seus pulmões são o metrô lotado, seu coração a Paulista, suas veias as marginais em eterna convulsão — vida e morte, riqueza e miséria, velocidade e paralisia coexistindo num paradoxo glorioso e cruel." },
          { type: "identify", prompt: "Identifique e explique o efeito: 'Não é que ele seja desonesto — apenas nunca diz a verdade.'", answer: "Litotes e ironia. A litotes nega o oposto ('não é desonesto') para afirmar indiretamente a qualidade. A ironia emerge no contraste com a segunda oração, que contradiz implicitamente a afirmação anterior, criando humor e crítica." }
        ]
      },
      {
        id: "C1-U1-L2",
        title: "Registro linguístico: do culto ao coloquial",
        objectives: ["Transitar com fluidez entre registros linguísticos", "Analisar marcas de registro em textos autênticos"],
        shadowingDialogue: {
          title: "Código linguístico e contexto",
          lines: [
            { speaker: "Sociolinguista", text: "Todo falante nativo alterna registros instintivamente. É o que chamamos de alternância de código." },
            { speaker: "Estudante", text: "Então o mesmo falante que diz 'tô por dentro' numa roda de amigos dirá 'estou ciente' numa reunião?" },
            { speaker: "Sociolinguista", text: "Exatamente. E isso não é erro — é competência sociolinguística plena." },
            { speaker: "Estudante", text: "O problema é quando o falante só domina um dos registros, não é?" },
            { speaker: "Sociolinguista", text: "Precisamente. O monolinguismo de registro é uma desvantagem social e profissional real." }
          ]
        },
        keyPhrases: [
          "Registro culto / formal / técnico / científico / literário",
          "Registro coloquial / informal / popular / gíria / regional",
          "Alternância de código (code-switching) — competência sociolinguística",
          "Norma culta ≠ único registro correto — adequação ao contexto"
        ],
        guidedProduction: [
          "Reescreva em registro culto: 'O cara tava na bronca com o chefe e saiu pra espairecer.'",
          "Reescreva em coloquial: 'A situação econômica apresenta perspectivas desalentadoras.'",
          "Em que situações você usaria cada registro? Dê 3 exemplos."
        ],
        grammar: {
          title: "Marcas de Registro C1",
          explanation: "Registro culto: vocabulário preciso, concordância rigorosa, pronomes oblíquos (lhe, o, a), colocação pronominal normativa, conectivos formais, sem gírias. Registro coloquial: 'a gente', 'tá/tô', pronomes retos como objeto ('vi ele'), ausência de concordância variável, gírias, elipses. Intermediário (PB padrão real): mistura controlada dos dois — 'a gente foi' mas 'não obstante'. Nenhum é 'errado' — todos têm função social.",
          conjugation: "Culto: 'O que você fez?' → 'O que fizeste?' (PE) / Coloquial: 'O que você fez?' ou 'Cê fez o quê?' / Coloquialíssimo: 'Que que você fez?'"
        },
        exercises: [
          { type: "rewrite", prompt: "Reescreva em registro culto formal: 'Tô achando que esse negócio não vai dar certo, não.'", answer: "Tenho sérias dúvidas quanto à viabilidade deste empreendimento." },
          { type: "rewrite", prompt: "Reescreva em coloquial natural: 'Não me é possível comparecer ao evento supracitado.'", answer: "Não consigo ir não, desculpa." },
          { type: "identify", prompt: "Identifique o registro e as marcas linguísticas: 'A gente tava conversando e aí ele chegou.'", answer: "Coloquial. Marcas: 'a gente' (pronome coletivo informal), 'tava' (apócope de estava), 'aí' (conector narrativo informal). Em culto: 'Estávamos conversando quando ele chegou.'" },
          { type: "production", prompt: "Escreva o mesmo acontecimento em dois registros: uma mensagem para um amigo e um email para seu chefe.", answer: "Para amigo (WhatsApp): 'Mano, perdi a reunião de hoje! O trânsito tava um caos absurdo, cheguei e já tinha acabado tudo. Me passa o que rolou?'\n\nPara o chefe (email): 'Prezado diretor, venho por meio deste comunicar que não pude comparecer à reunião das 14h em função de congestionamento excepcional. Solicito que me seja enviado o registro das deliberações. Desde já agradeço. Atenciosamente.'" },
          { type: "analysis", prompt: "Por que a alternância de registro é uma habilidade valiosa e não uma inconsistência?", answer: "A alternância de registro é uma manifestação da competência sociolinguística plena. Um falante que domina múltiplos registros consegue adaptar sua comunicação a diferentes contextos — profissionais, familiares, acadêmicos — maximizando a eficácia da interação. É análogo à competência de um músico que toca jazz e música clássica: a flexibilidade não é incoerência, mas domínio ampliado do sistema. O monolinguismo de registro, ao contrário, limita as possibilidades comunicativas e de inserção social do falante." }
        ]
      },
      {
        id: "C1-U1-L3",
        title: "Sintaxe avançada: inversão, elipse e anacoluto",
        objectives: ["Identificar e usar estruturas sintáticas expressivas C1", "Compreender o efeito estilístico da ruptura sintática"],
        shadowingDialogue: {
          title: "Estilística da frase",
          lines: [
            { speaker: "Editor", text: "Sua prosa é correta, mas previsível. Experimente inverter a ordem sintática para criar ênfase." },
            { speaker: "Escritora", text: "Você quer dizer começar com o predicado? Tipo 'Bela era a cidade' em vez de 'A cidade era bela'?" },
            { speaker: "Editor", text: "Isso. O hipérbato desloca o elemento mais expressivo para o início, criando foco imediato." },
            { speaker: "Escritora", text: "E o anacoluto? Posso usar numa narrativa mais moderna?" },
            { speaker: "Editor", text: "Pode, com cuidado. 'Eu, honestamente, essa situação me exaure' — captura a voz interior de forma autêntica." }
          ]
        },
        keyPhrases: [
          "Hipérbato: inversão da ordem canônica para ênfase",
          "Anacoluto: ruptura sintática expressiva da fala interior",
          "Zeugma: omissão de termo já expresso para concisão",
          "Elipse: supressão de elemento recuperável pelo contexto"
        ],
        guidedProduction: [
          "Reescreva com hipérbato para enfatizar o adjetivo: 'A noite era silenciosa e fria.'",
          "Identifique o zeugma: 'Ela tinha fé; eu, dúvidas.'",
          "Crie um anacoluto que capture o pensamento fragmentado de uma personagem ansiosa."
        ],
        grammar: {
          title: "Figuras de Construção Sintática C1",
          explanation: "Hipérbato: deslocamento de elementos para posição não canônica. 'Das estrelas, surgiu o silêncio.' Anacoluto: ruptura do plano sintático inicial, frequente na oralidade e narrativa moderna. 'Eu, essas críticas, não me afetam mais.' Zeugma: omissão de termo já enunciado. 'Ele ama o trabalho; eu, a liberdade.' Silepse: concordância com o sentido, não a forma. 'O casal chegaram felizes.' Pleonasmo vicioso vs. expressivo: 'subir para cima' (vicioso) vs. 'ver com os próprios olhos' (expressivo-enfático).",
          conjugation: "Hipérbato: elemento enfatizado + restante da oração. Zeugma: A tem X; B, [tem] Y. Anacoluto: sujeito destacado + retomada por pronome."
        },
        exercises: [
          { type: "identify", prompt: "Identifique a figura: 'Uns têm o que comer; outros comem o que têm.'", answer: "Quiasmo (inversão paralela cruzada) + zeugma implícito. A estrutura ABBA cria simetria que ressalta a ironia da desigualdade social." },
          { type: "rewrite", prompt: "Crie hipérbato para enfatizar o tempo: 'Chegou cedo para a reunião mais importante de sua vida.'", answer: "Cedo chegou — para a reunião mais importante de sua vida." },
          { type: "production", prompt: "Escreva um parágrafo de narrativa usando hipérbato, anacoluto e zeugma.", answer: "Silenciosa estava a casa quando ela entrou. Eu, a verdade, já sabia desde o começo — mas preferi o conforto da dúvida. Ela trouxe flores; eu, desculpas. E assim vivemos: ela com sua certeza renovada a cada manhã, eu com minha elegante evasão." },
          { type: "identify", prompt: "Identifique silepse e explique: 'A maioria dos estudantes não entenderam a questão.'", answer: "Silepse de número: o verbo concorda com o sentido plural de 'estudantes' em vez da forma singular de 'maioria'. É uma concordância ideológica, frequente no PB, especialmente na oralidade." },
          { type: "analysis", prompt: "Por que o anacoluto é uma figura e não um erro gramatical?", answer: "O anacoluto é considerado figura de linguagem quando usado com intencionalidade expressiva, especialmente para reproduzir o fluxo caótico do pensamento ou da fala interior. Na narrativa modernista e contemporânea, é recurso estilístico deliberado. O erro ocorre quando o autor perde o fio sintático por descuido. A distinção está na intencionalidade e no efeito: se a ruptura produz sentido expressivo, é figura; se é apenas inconsistência, é erro." }
        ]
      },
      {
        id: "C1-U1-L4",
        title: "Intertextualidade e metaficção",
        objectives: ["Identificar e analisar intertextualidade em textos complexos", "Produzir texto com recursos intertextuais"],
        shadowingDialogue: {
          title: "Análise intertextual",
          lines: [
            { speaker: "Professora", text: "Toda obra dialoga com outras obras — é o que Bakhtin chama de dialogismo." },
            { speaker: "Aluno", text: "E quando o diálogo é explícito, com citação ou referência direta, é intertextualidade?" },
            { speaker: "Professora", text: "Isso. E quando o texto fala sobre sua própria construção, é metaficção ou metalinguagem." },
            { speaker: "Aluno", text: "Como em Machado de Assis, quando o narrador Brás Cubas fala ao leitor diretamente?" },
            { speaker: "Professora", text: "Exatamente. É uma das primeiras manifestações de metaficção na literatura brasileira." }
          ]
        },
        keyPhrases: [
          "Intertextualidade: diálogo entre textos (citação, alusão, paródia, pastiche)",
          "Metaficção / metalinguagem: texto que fala sobre si mesmo",
          "Dialogismo (Bakhtin): toda voz é resposta a outra voz",
          "Paródia: imitação crítica / Pastiche: imitação homenagem"
        ],
        guidedProduction: [
          "Identifique a intertextualidade em: 'Ser ou não ser startup — eis a questão.'",
          "O que é paródia? Como difere da pastiche?",
          "Crie uma frase com intertextualidade explícita referenciando algo que você conhece."
        ],
        grammar: {
          title: "Intertextualidade C1: Tipos e Funções",
          explanation: "Citação: reprodução literal de outro texto com aspas. Alusão: referência implícita sem citar a fonte. Paródia: imitação crítica que subverte o original. Pastiche: imitação homenagem que reproduz o estilo. Epígrafe: citação inicial que contextualiza a obra. Hipotexto (texto-base) vs. hipertexto (texto derivado). Metalinguagem: a linguagem que fala de si mesma — 'Esta frase está em negrito.' Metaficção: ficção que expõe seu próprio artifício.",
          conjugation: "A obra dialoga com / remete a / subverte / homenageia / parodia / ressignifica / retoma / transforma / relê / questiona"
        },
        exercises: [
          { type: "identify", prompt: "Identifique o tipo de intertextualidade: 'Macunaíma, herói sem nenhum caráter, acordou certo dia decidido a ser influencer.'", answer: "Paródia. Retoma o texto-fonte de Mário de Andrade ('herói sem nenhum caráter') para subvertê-lo com humor contemporâneo, criando contraste cômico entre o arquétipo literário e a cultura digital." },
          { type: "identify", prompt: "Identifique: 'No princípio era o Verbo — e o Verbo era fake news.'", answer: "Paródia do Evangelho de João (1:1). A substituição do conceito teológico central por 'fake news' cria efeito irônico e crítico sobre a pós-verdade contemporânea." },
          { type: "production", prompt: "Escreva um parágrafo de metaficção (o narrador comenta a própria narrativa).", answer: "Poderia começar esta história de outra forma — com o sol raiando ou um crime passional — mas escolhi começá-la com o narrador em crise: eu, que lhes escrevo, não sei bem o que fazer com esta personagem. Ela insiste em não morrer quando deveria, não se apaixona por quem planejei, e tem a insolência de olhar para mim através da página. O leitor, claro, já percebeu que isso é um truque. Mas então — o que não é?" },
          { type: "analysis", prompt: "Por que a intertextualidade é inevitável em qualquer produção textual?", answer: "Segundo Bakhtin, todo enunciado é uma resposta a enunciados anteriores e uma antecipação de respostas futuras — é o princípio do dialogismo. Nenhum texto nasce do vácuo: mesmo sem citar explicitamente, um escritor carrega as leituras que fez, os gêneros que internalizou, as convenções que absorveu. A intertextualidade é, portanto, não uma escolha estilística opcional, mas uma condição constitutiva de todo discurso. Reconhecê-la é parte essencial da competência leitora avançada." },
          { type: "production", prompt: "Crie uma alusão literária ou cultural numa frase sobre a vida moderna.", answer: "Como Sísifo diante da caixa de entrada, empurramos os emails morro acima — e eles sempre voltam." }
        ]
      },
      {
        id: "C1-U1-L5",
        title: "Revisão e produção integrada C1-U1",
        objectives: ["Integrar figuras, registros, sintaxe e intertextualidade", "Produzir texto literário-crítico em nível C1"],
        shadowingDialogue: {
          title: "Crítica literária avançada",
          lines: [
            { speaker: "Crítico", text: "A grandeza de Guimarães Rosa está na invenção: ele cria palavras, subverte a sintaxe, usa figuras incomuns." },
            { speaker: "Pesquisadora", text: "E a intertextualidade com a tradição oral do sertão é fundamental para entender a obra." },
            { speaker: "Crítico", text: "Exatamente. O estilo rosiano é uma síntese: erudição europeia filtrada pela voz sertaneja." },
            { speaker: "Pesquisadora", text: "Uma antropofagia estilística, por assim dizer." },
            { speaker: "Crítico", text: "Magnífica síntese! É exatamente isso — devorar o culto e o popular e criar algo inédito." }
          ]
        },
        keyPhrases: [
          "Síntese estilística — erudição + popular — invenção linguística",
          "A obra problematiza / subverte / reinventa / ressignifica",
          "Do ponto de vista estilístico / estrutural / temático / intertextual",
          "Como afirma [crítico], / Na perspectiva de / À luz da teoria de"
        ],
        guidedProduction: [
          "Analise um parágrafo de sua leitura favorita identificando figuras e intertextualidade.",
          "Escreva uma micro-crítica literária de 5 frases com rigor C1.",
          "Crie um texto com pelo menos 3 figuras e 1 elemento intertextual."
        ],
        grammar: {
          title: "Revisão C1-U1",
          explanation: "Consolida: figuras de linguagem (semelhança, construção, pensamento, intensidade), registros e alternância de código, sintaxe expressiva (hipérbato, anacoluto, zeugma), intertextualidade e metaficção.",
          conjugation: "Síntese crítica: A obra X, através de Y (figura/recurso), produz o efeito Z, dialogando com W (intertexto) e revelando a perspectiva V do autor sobre o tema U."
        },
        exercises: [
          { type: "production", prompt: "Escreva uma análise estilística de 5 frases de qualquer obra que você conhece.", answer: "Em 'O Alquimista', Paulo Coelho emprega uma linguagem de aparente simplicidade que mascara uma sofisticada rede de simbolismos. A jornada de Santiago funciona como metáfora da busca humana por sentido — recurso alegórico que remete tanto à tradição bíblica quanto ao conto de aventuras. A anáfora de 'lenda pessoal' ao longo da narrativa cria coesão temática e hipnose rítmica no leitor. Do ponto de vista intertextual, a obra dialoga com o Bildungsroman europeu enquanto o ressignifica numa perspectiva espiritual universalista. Apesar da crítica literária erudita frequentemente subestimá-lo, Coelho domina com maestria a arte de tornar o profundo acessível." },
          { type: "identify", prompt: "Identifique todas as figuras em: 'A saudade é uma faca de dois gumes que corta quem vai e quem fica.'", answer: "Metáfora (saudade = faca de dois gumes), personificação (a saudade que corta), antítese (quem vai / quem fica), e implicitamente paradoxo (o mesmo sentimento fere os dois lados opostos). A imagem produz efeito de dor compartilhada e universal." },
          { type: "production", prompt: "Crie um texto de 6 frases usando hipérbato, metáfora, intertextualidade e dois registros distintos.", answer: "Bela e cruel era São Paulo às seis da manhã — cidade que devora seus filhos antes mesmo do café. 'No princípio era o metrô', e o metrô estava apinhado, e o metrô era a vida. Eu, esses sonhos de grandeza, já não me convencem mais. A cidade-monstro respira: inspira trabalhadores ao amanhecer, expira executivos ao entardecer. Mas e daí? A gente segura as pontas, dá um jeito, e no fim da semana ri de tudo isso com uma cerveja. Porque, como diria Drummond, 'no meio do caminho tinha uma pedra' — e essa pedra se chama segunda-feira." },
          { type: "analysis", prompt: "Explique por que forma e conteúdo são inseparáveis na boa literatura.", answer: "Na grande literatura, a forma não é uma embalagem neutra do conteúdo — ela é parte constitutiva do significado. A escolha de um ritmo fragmentado para narrar uma mente em colapso, o uso de anacoluto para reproduzir o pensamento caótico, a repetição anafórica para expressar obsessão: em todos esses casos, o como dizer é parte do que se diz. É o que os formalistas russos chamavam de 'iconicidade' — a forma imita o conteúdo. Drummond não apenas descreve o obstáculo existencial: ele o reproduz formalmente na repetição obsessiva da pedra." },
          { type: "production", prompt: "Escreva um parágrafo em dois registros sobre o mesmo tema (noite na cidade).", answer: "Registro culto: 'A noite se abate sobre a metrópole como um manto pesado, atenuando as asperezas do dia e conferindo à cidade um silêncio ilusório, pois sob ele fervilham as inquietações de milhões de almas insones.'\n\nRegistro coloquial: 'À noite a cidade muda tudo. Os prédios ficam mais bonitos com as luzes, o metrô esvazia, e dá pra caminhar sem empurrar ninguém. É a única hora em que São Paulo parece que respira de verdade.'" }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 2 — Gramática C1: Regência, Crase e Colocação
  // ══════════════════════════════════════════════════════
  {
    id: "C1-U2",
    title: "Gramática C1: Regência, Crase e Colocação Pronominal",
    level: "C1",
    lessons: [
      {
        id: "C1-U2-L1",
        title: "Regência verbal e nominal: casos especiais",
        objectives: ["Dominar a regência de verbos e nomes de uso culto", "Evitar erros de regência frequentes em C1"],
        shadowingDialogue: {
          title: "Correção de texto",
          lines: [
            { speaker: "Revisor", text: "Você escreveu 'assisti o filme'. Em norma culta, o correto é 'assisti ao filme'." },
            { speaker: "Autora", text: "Ah, é verdade! ASSISTIR no sentido de ver exige 'a'." },
            { speaker: "Revisor", text: "Exato. E aqui: 'prefiro isso do que aquilo'. O correto é 'prefiro isso a aquilo'." },
            { speaker: "Autora", text: "PREFERIR rege 'a', não 'do que'. E 'aspirar a uma carreira' também, né?" },
            { speaker: "Revisor", text: "Perfeito! Aspirar, visar, assistir, obedecer — todos exigem complemento com preposição." }
          ]
        },
        keyPhrases: [
          "Assistir A (ver/presenciar) — assistir (ajudar, transitivo direto)",
          "Visar A (almejar) — visar (rubricar, transitivo direto)",
          "Aspirar A (desejar) — aspirar (inalar, transitivo direto)",
          "Preferir A (nunca 'do que') — obedecer A — simpatizar COM"
        ],
        guidedProduction: [
          "Corrija: 'Ela aspirava uma vida melhor.'",
          "Use 'preferir' corretamente numa frase comparativa.",
          "Qual a diferença entre 'assistir o jogo' e 'assistir ao jogo'?"
        ],
        grammar: {
          title: "Regência Verbal C1: Verbos de Dupla Regência",
          explanation: "Verbos com mudança de sentido conforme a regência: ASSISTIR (a = ver/presenciar; sem preposição = ajudar). VISAR (a = almejar; sem preposição = rubricar). ASPIRAR (a = desejar; sem preposição = inalar). QUERER (a = amar/desejar pessoa; sem preposição = desejar objeto). Verbos que sempre exigem preposição: OBEDECER A, DESOBEDECER A, SIMPATIZAR COM, ANTIPATIZAR COM, IMPLICAR COM (irritar-se), RESIDIR EM, CONSISTIR EM.",
          conjugation: "Preferir A a B (nunca 'do que'): Prefiro café a chá. / Implicar EM (acarretar): O ato implica consequências. / Implicar COM (irritar-se): Ele implica comigo."
        },
        exercises: [
          { type: "correct", prompt: "Corrija: 'Prefiro cinema do que teatro.'", answer: "Prefiro cinema a teatro. (PREFERIR rege 'a', nunca 'do que')" },
          { type: "correct", prompt: "Corrija: 'Os funcionários desobedeceram as ordens.'", answer: "Os funcionários desobedeceram às ordens. (DESOBEDECER rege 'a')" },
          { type: "fill", prompt: "Ela aspira ___ uma posição de liderança desde jovem.", answer: "a" },
          { type: "correct", prompt: "Corrija: 'Não assisti o documentário ontem.'", answer: "Não assisti ao documentário ontem. (ASSISTIR = ver/presenciar → rege 'a')" },
          { type: "production", prompt: "Escreva 4 frases usando corretamente: assistir a, aspirar a, preferir a, obedecer a.", answer: "Assisti a todos os filmes do festival com atenção crítica. Aspiro a uma carreira que concilie propósito e remuneração justa. Prefiro a profundidade dos romances à superficialidade das redes sociais. A equipe obedeceu às diretrizes estabelecidas sem questionamento." }
        ]
      },
      {
        id: "C1-U2-L2",
        title: "Crase: todos os casos e exceções",
        objectives: ["Dominar o uso da crase em todos os contextos", "Identificar casos obrigatórios, facultativos e proibidos"],
        shadowingDialogue: {
          title: "A crase em detalhes",
          lines: [
            { speaker: "Gramático", text: "A crase é simples: ocorre quando há fusão de 'a' preposição com 'a' artigo ou pronome demonstrativo." },
            { speaker: "Aluna", text: "E como saber se o substantivo feminino aceita artigo? Posso trocar por masculino?" },
            { speaker: "Gramático", text: "Exato. Se no masculino fica 'ao', no feminino fica 'à'. 'Vou ao mercado' → 'Vou à feira'." },
            { speaker: "Aluna", text: "E 'Vou a Paris'? Paris é feminino mas não leva crase?" },
            { speaker: "Gramático", text: "Correto. Nomes próprios de cidades sem artigo habitual não levam crase. Exceção: 'Fui à Roma Antiga.'" }
          ]
        },
        keyPhrases: [
          "Crase obrigatória: a + a (artigo) feminino — 'Vou à escola'",
          "Crase facultativa: antes de pronome possessivo feminino — 'Vou à/a sua casa'",
          "Crase proibida: antes de masculino, verbo, pronome pessoal, 'uma'",
          "Crase proibida: 'Vou a Paris / a pé / a cavalo / a partir de'"
        ],
        guidedProduction: [
          "Explique a regra do masculino para verificar a crase.",
          "Corrija: 'Refiro-me à isso que você disse.'",
          "Quando a crase é facultativa? Dê um exemplo."
        ],
        grammar: {
          title: "Crase C1: Casos Completos",
          explanation: "OBRIGATÓRIA: antes de substantivo feminino com artigo (à escola, à reunião), locuções prepositivas femininas (à medida que, à luz de, à beira de), locuções adverbiais femininas (às vezes, à tarde, à noite), antes de 'aquela/aquilo/aquelas' (refiro-me àquela decisão). FACULTATIVA: antes de pronomes possessivos femininos (à/a sua proposta), antes de nomes próprios femininos de lugares com artigo (fui à/a Lisboa). PROIBIDA: antes de masculino, verbos, pronomes pessoais (ele, ela, você), palavras no plural sem artigo, 'uma', locuções com palavra masculina.",
          conjugation: "Teste masculino: 'Fui ao banco' → 'Fui à escola'. / 'Fui a pé' → sem 'ao' → sem crase. / 'Refiro-me a isso' → pronome sem artigo → sem crase."
        },
        exercises: [
          { type: "correct", prompt: "Corrija se necessário: 'Às vezes penso em voltar à Paris onde nasci.'", answer: "'Às vezes' está correto (locução adverbial). 'à Paris' — se Paris não tem artigo habitual, o correto é 'a Paris'. Mas se contextualmente se usa artigo (a Paris que conheci), pode-se usar crase. Forma mais segura: 'a Paris'." },
          { type: "correct", prompt: "Corrija: 'Isso é referente à ele e à situação toda.'", answer: "'à ele' → ERRADO. Pronome pessoal não leva crase. Correto: 'a ele e à situação toda'." },
          { type: "fill", prompt: "Fui ___ reunião e depois ___ casa da minha mãe.", answer: "à / à" },
          { type: "fill", prompt: "___ medida que o tempo passa, ___ luz dos novos dados, a teoria se consolida.", answer: "À / à" },
          { type: "production", prompt: "Escreva um parágrafo usando crase obrigatória (3x), facultativa (1x) e evitando uma situação proibida.", answer: "À medida que os dados foram analisados à luz das novas teorias, tornou-se evidente a necessidade de revisão. Fui à biblioteca consultar as referências e, às vezes, precisei recorrer à/a sua orientação para esclarecer dúvidas. Note-se que o argumento se refere a ele, não à pesquisadora, como erroneamente se supôs." }
        ]
      },
      {
        id: "C1-U2-L3",
        title: "Colocação pronominal: próclise, mesóclise e ênclise",
        objectives: ["Dominar a colocação pronominal em norma culta C1", "Identificar casos de próclise obrigatória e mesóclise"],
        shadowingDialogue: {
          title: "Pronomes em posição",
          lines: [
            { speaker: "Professor", text: "No português brasileiro contemporâneo, a próclise domina — mas a norma culta escrita é mais exigente." },
            { speaker: "Estudante", text: "Então 'me diga' está errado no início de frase?" },
            { speaker: "Professor", text: "Em norma culta escrita, início absoluto de frase exige ênclise: 'Diga-me'. Mas no PB oral, 'me diga' é universal." },
            { speaker: "Estudante", text: "E a mesóclise? Parece arcaica." },
            { speaker: "Professor", text: "É muito formal. 'Dir-lhe-ei' é corretíssimo, mas soaria artificioso numa conversa. Reserva-se para textos muito formais." }
          ]
        },
        keyPhrases: [
          "Próclise obrigatória: negação, advérbios, conjunções, pronomes relativos",
          "Ênclise: início absoluto de frase, imperativo afirmativo, infinitivo",
          "Mesóclise: futuro do presente e futuro do pretérito (muito formal)",
          "PB real: próclise domina em quase todos os contextos"
        ],
        guidedProduction: [
          "Corrija para norma culta: 'Me chama quando chegar.'",
          "Quando se usa mesóclise? Dê um exemplo.",
          "Por que 'Não me diga!' está certo mas 'Me diga!' é questionado na norma culta?"
        ],
        grammar: {
          title: "Colocação Pronominal C1: Norma Culta vs. PB Real",
          explanation: "PRÓCLISE (antes do verbo) obrigatória com: negação (não me diga), advérbios (sempre te vi), pronomes relativos (quem me chamou), conjunções subordinativas (quando me viu), pronomes indefinidos (alguém me disse). ÊNCLISE (após o verbo): início absoluto de frase (Diga-me), imperativo afirmativo (Ajude-me), gerúndio (Dizendo-lhe), infinitivo impessoal (para dizer-lhe). MESÓCLISE: futuro do presente e do pretérito (Dir-lhe-ei, Far-me-ia). PB contemporâneo: próclise generalizada — 'me diga' no início é aceito no uso real.",
          conjugation: "Fui → Foi-me dito (ênclise) | Não me disseram (próclise) | Dir-lhe-ei a verdade (mesóclise) | Para dizer-lhe (ênclise no infinitivo) | Quem me disse? (próclise obrigatória)"
        },
        exercises: [
          { type: "correct", prompt: "Corrija para norma culta: 'Me lembra disso amanhã, por favor.'", answer: "Lembra-me disso amanhã. (Início absoluto → ênclise) OU: Por favor, me lembra... (advérbio antecede → próclise válida)" },
          { type: "correct", prompt: "Corrija para norma culta: 'Não se preocupe, eu te ligo mais tarde.'", answer: "Correto. 'Não se preocupe' — negação exige próclise (se). 'Eu te ligo' — pronome pessoal 'eu' antes permite próclise (te). Ambas as colocações estão corretas na norma culta." },
          { type: "transform", prompt: "Passe para mesóclise (formal): 'Eu direi a verdade a ele.'", answer: "Dir-lhe-ei a verdade. (dir = dizer futuro + lhe = pronome + ei = desinência)" },
          { type: "fill", prompt: "Sempre ___ vi assim. / Ninguém ___ disse nada. / Dê- ___ o documento.", answer: "te / me / me (Dê-me)" },
          { type: "production", prompt: "Escreva um parágrafo formal usando próclise obrigatória, ênclise e uma mesóclise.", answer: "Nunca me passou pela cabeça que tudo se resolveria tão facilmente. Permita-me, contudo, expor os fatos tal como os compreendo. Dir-lhe-ei a verdade sem rodeios: o que se nos apresenta é um desafio de ordem estrutural, não meramente circunstancial. Quem nos trouxe até aqui foi a determinação coletiva — e será ela que nos conduzirá adiante." }
        ]
      },
      {
        id: "C1-U2-L4",
        title: "Pontuação expressiva e parágrafo de alta qualidade",
        objectives: ["Usar pontuação com precisão e expressividade C1", "Construir parágrafos com coesão e progressão temática sofisticadas"],
        shadowingDialogue: {
          title: "Oficina de escrita",
          lines: [
            { speaker: "Escritora", text: "A vírgula é o sinal mais abusado. Muita gente a usa onde não pode — entre sujeito e predicado." },
            { speaker: "Aluno", text: "E o travessão? Parece mais expressivo que os parênteses." },
            { speaker: "Escritora", text: "É mesmo. O travessão isola com ênfase; os parênteses, com discreção. São escolhas estilísticas." },
            { speaker: "Aluno", text: "E os dois-pontos? Podem introduzir uma explicação sem verbo?" },
            { speaker: "Escritora", text: "Podem e devem. São uma das ferramentas mais poderosas de ritmo na prosa: criam expectativa, entregam." }
          ]
        },
        keyPhrases: [
          "Vírgula PROIBIDA entre sujeito e predicado — 'O aluno, estudou.' ❌",
          "Travessão (ênfase) vs. parênteses (discreção) vs. vírgula (fluxo)",
          "Dois-pontos: introduzem enumeração, explicação, citação ou consequência",
          "Ponto e vírgula: separa itens complexos ou orações de mesmo nível"
        ],
        guidedProduction: [
          "Corrija a pontuação: 'O projeto, que desenvolvemos em equipe, foi aprovado, na reunião.'",
          "Reescreva usando travessão em vez de parênteses para dar ênfase.",
          "Use dois-pontos para criar suspense numa frase."
        ],
        grammar: {
          title: "Pontuação C1: Usos Expressivos",
          explanation: "VÍRGULA: isola aposto, vocativo, adjunto adverbial deslocado, oração intercalada. PROIBIDA entre sujeito e verbo, verbo e complemento. TRAVESSÃO: isola com ênfase, introduz fala em narrativa, marca ruptura expressiva. DOIS-PONTOS: antes de enumeração, explicação, citação, consequência. PONTO E VÍRGULA: separa itens de lista complexa, orações independentes relacionadas. RETICÊNCIAS: suspense, hesitação, pensamento incompleto.",
          conjugation: "Uso expressivo: 'Havia apenas uma certeza — ela não voltaria.' (travessão de ênfase) / 'Trouxe tudo: coragem, determinação e paciência.' (dois-pontos antes de enumeração)"
        },
        exercises: [
          { type: "correct", prompt: "Corrija a pontuação: 'Ela, chegou atrasada, e, disse que, tinha se perdido.'", answer: "Ela chegou atrasada e disse que tinha se perdido. (Vírgulas desnecessárias entre sujeito/predicado e entre verbo/complemento.)" },
          { type: "rewrite", prompt: "Substitua os parênteses por travessão para dar ênfase: 'O projeto (o mais ambicioso da empresa) foi aprovado.'", answer: "O projeto — o mais ambicioso da empresa — foi aprovado." },
          { type: "production", prompt: "Escreva um parágrafo usando travessão, dois-pontos, ponto e vírgula e reticências expressivamente.", answer: "Havia três caminhos: desistir, adiar ou enfrentar. Escolhi o terceiro — e juro que não foi por coragem. A reunião foi longa; os argumentos, exaustivos; o silêncio final, ensurdecedor. Quando o diretor enfim falou, eu soube antes mesmo das palavras: era o fim de algo, ou... talvez o começo." },
          { type: "identify", prompt: "Explique o uso dos dois-pontos: 'Só queria uma coisa: paz.'", answer: "Os dois-pontos introduzem um complemento nominal com ênfase — funcionam como um zoom: criam expectativa na primeira parte e a satisfazem com precisão na segunda. O efeito é de revelação ou conclusão, reforçado pela brevidade do que vem depois." },
          { type: "production", prompt: "Reescreva este parágrafo melhorando a pontuação e o ritmo: 'Ela estava cansada e foi para casa e dormiu e esqueceu tudo.'", answer: "Estava cansada. Foi para casa, dormiu — e esqueceu tudo." }
        ]
      },
      {
        id: "C1-U2-L5",
        title: "Revisão e produção integrada C1-U2",
        objectives: ["Integrar regência, crase, colocação pronominal e pontuação", "Produzir texto sem erros normativos em nível C1"],
        shadowingDialogue: {
          title: "Revisão final",
          lines: [
            { speaker: "Revisora", text: "Seu texto está quase perfeito. Três pontos de atenção: regência, crase e colocação pronominal." },
            { speaker: "Autor", text: "Que tipo de erros encontrou?" },
            { speaker: "Revisora", text: "'Refiro-me à isso' — pronome não leva crase. 'Me parece' no início — ênclise no absoluto." },
            { speaker: "Autor", text: "E a regência?" },
            { speaker: "Revisora", text: "'Prefiro isso do que aquilo' — o correto é 'prefiro isso a aquilo'. São os três pontos clássicos de C1." }
          ]
        },
        keyPhrases: [
          "Os três clássicos de C1: regência / crase / colocação pronominal",
          "Vírgula entre sujeito e predicado: erro gravíssimo de pontuação",
          "Preferir A / Assistir A / Aspirar A / Obedecer A",
          "Não me diga (próclise) / Diga-me (ênclise) / Dir-lhe-ei (mesóclise)"
        ],
        guidedProduction: [
          "Corrija um parágrafo com 5 erros de norma culta.",
          "Produza um texto de 200 palavras sem nenhum erro normativo.",
          "Avalie seu próprio texto: quais pontos ainda são desafio para você?"
        ],
        grammar: {
          title: "Revisão C1-U2",
          explanation: "Consolida: regência verbal e nominal (verbos de dupla regência), crase (obrigatória, facultativa, proibida), colocação pronominal (próclise, ênclise, mesóclise), pontuação expressiva (vírgula, travessão, dois-pontos, ponto e vírgula).",
          conjugation: "Checklist C1: ✅ Regência correta dos verbos-armadilha ✅ Crase nos contextos corretos ✅ Pronome na posição normativa ✅ Vírgula nunca entre S e P ✅ Pontuação como ferramenta expressiva"
        },
        exercises: [
          { type: "correct", prompt: "Encontre e corrija todos os erros: 'Me parece que ela aspira uma carreira melhor, e prefere isso do que aquilo que tem.'", answer: "Parece-me que ela aspira a uma carreira melhor e prefere isso a aquilo que tem. (Correções: ênclise no início absoluto, regência de aspirar a, regência de preferir a)" },
          { type: "correct", prompt: "Corrija: 'Refiro-me à ele e à situação que assistimos ontem.'", answer: "Refiro-me a ele e à situação a que assistimos ontem. (Crase proibida antes de pronome pessoal; assistir = ver → assistir a)" },
          { type: "production", prompt: "Escreva um parágrafo de 100 palavras sem nenhum erro normativo, usando as estruturas estudadas nesta unidade.", answer: "Nunca me ocorreu que assistir a uma simples conferência mudaria minha perspectiva. O palestrante — à medida que expunha seus argumentos — conduzia-nos com precisão à essência do problema. Permita-me expor o que aprendi: prefiro a clareza à verbosidade; aspiro a uma escrita que respeite o leitor; e obedeço às regras não por submissão, mas porque delas emerge a liberdade expressiva. Dir-lhe-ei sem rodeios: o domínio da norma culta não limita — liberta." },
          { type: "fill", prompt: "Sempre ___ vi assim. ___ medida que o tempo passa, ___ parece que tudo se resolve.", answer: "te / À / me parece (ou parece-me no início absoluto)" },
          { type: "production", prompt: "Corrija e reescreva com qualidade C1: 'Eu prefiro ler do que assistir televisão, me parece mais enriquecedor, refiro-me à esse tipo de entretenimento passivo.'", answer: "Prefiro a leitura a assistir televisão — parece-me atividade mais enriquecedora. Refiro-me a esse tipo de entretenimento passivo que, embora acessível, raramente estimula o pensamento crítico." }
        ]
      }
    ]
  }
];
