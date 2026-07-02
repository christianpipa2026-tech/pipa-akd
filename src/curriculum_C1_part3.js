export const CURRICULUM_ES_C1_PART3 = {
  units: [
    {
      id: "ES-C1-U5",
      title: "Criação Literária em Espanhol",
      description: "Produção literária própria em espanhol com voz autoral",
      lessons: [
        {
          id: "ES-C1-U5-L1",
          title: "O Conto Literário — Estrutura e Técnica",
          shadowing: "— El cuento perfecto es aquel en que no sobra ni falta nada.\n— ¿Cómo lo logras?\n— Escribiendo mucho y cortando más. La primera versión siempre es excesiva.\n— ¿Y el final?\n— El final tiene que resonar. No explicar, sino sugerir.\n— ¿Chekhov?\n— Exacto. El fusil que aparece en el primer acto debe disparar en el último.\n— El famoso principio de economía narrativa.\n— Sí, pero aplicado con inteligencia. A veces el fusil que no dispara es el verdadero final.",
          memoryPhrases: [
            "no sobra ni falta nada = não falta nem sobra nada",
            "resonar = ressoar",
            "sugerir vs explicar = sugerir vs explicar",
            "la economía narrativa = a economia narrativa",
            "el principio de Chekhov = o princípio de Chekhov",
            "cortar = cortar (edição)"
          ],
          oralProduction: "Explique em espanhol a estrutura de um conto que você escreveu ou gostaria de escrever.",
          exercises: [
            { id: "ES-C1-U5-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la economía narrativa'?", options: ["Escrever sobre economia", "O princípio de usar apenas o necessário, sem excesso nem falta", "Escrever rapidamente", "Usar palavras baratas"], answer: 1, explanation: "Economía narrativa = economia narrativa. O princípio de que um texto literário deve ter exatamente o necessário — nem mais nem menos. Associado a Chekhov, Hemingway e Carver." },
            { id: "ES-C1-U5-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el principio del fusil de Chekhov'?", options: ["Chekhov gostava de armas", "Cada elemento introduzido deve ter função narrativa — se aparece, deve ser usado", "A violência é central na narrativa", "Os finais devem ser explosivos"], answer: 1, explanation: "El fusil de Chekhov = se um fusil aparece na parede no primeiro ato, deve disparar no último. Princípio de que cada elemento narrativo deve cumprir uma função." },
            { id: "ES-C1-U5-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El final tiene que _____, no explicar.' (O final tem que ressoar, não explicar.)", answer: ["resonar"], hint: "criar um eco / ressoar no leitor", explanation: "Resonar = ressoar. Um final que ressoa continua vivo na mente do leitor após a leitura. Contrário de 'explicar' = fechar tudo de forma explícita." },
            { id: "ES-C1-U5-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'O conto perfeito é aquele em que não falta nem sobra nada — cada palavra cumpre uma função narrativa.'", answer: ["El cuento perfecto es aquel en que no sobra ni falta nada: cada palabra cumple una función narrativa.", "El cuento perfecto es aquel en el que no hay nada de más ni nada de menos: cada palabra tiene su función narrativa."], explanation: "No sobra ni falta nada = não falta nem sobra nada. Cumple una función = cumpre uma função. Narrativa = narrativa." },
            { id: "ES-C1-U5-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um conto curto em espanhol (máximo 300 palavras) aplicando o princípio de economia narrativa e um final que ressoa.", prompt: "Inclua: situação inicial · complicação · clímax · final sugestivo (não explicativo) · elemento que ressoa", hint: "Un conto de 300 palabras: cada frase conta. Começa in medias res, corta o desnecessário, termina com uma imagem que diz mais do que palavras." }
          ]
        },
        {
          id: "ES-C1-U5-L2",
          title: "A Voz do Narrador — Perspectiva e Ponto de Vista",
          shadowing: "— El narrador omnisciente sabe demasiado. Mata la tensión.\n— ¿Y el narrador en primera persona?\n— Tiene más intimidad, pero limita la información.\n— ¿Cuál prefieres?\n— Depende de la historia. Para esta, el narrador en segunda persona.\n— ¿Segunda persona? ¿'Tú haces..., tú piensas...'?\n— Sí. Obliga al lector a identificarse con el protagonista. Lo mete en la piel del personaje.\n— Muy arriesgado pero muy efectivo si se hace bien.",
          memoryPhrases: [
            "el narrador omnisciente = o narrador onisciente",
            "en primera/segunda/tercera persona = em primeira/segunda/terceira pessoa",
            "la intimidad narrativa = a intimidade narrativa",
            "meterse en la piel = se colocar no lugar",
            "arriesgado = arriscado",
            "efectivo = eficaz"
          ],
          oralProduction: "Reescreva o início de um conto em três perspectivas diferentes e explique o efeito de cada uma.",
          exercises: [
            { id: "ES-C1-U5-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "Por que o narrador onisciente 'mata la tensión'?", options: ["Porque sabe demais e revela tudo, reduzindo o mistério e a tensão", "Porque é muito lento", "Porque não é interessante", "Porque é muito formal"], answer: 0, explanation: "O narrador onisciente sabe tudo sobre todos os personagens. Isso pode reduzir a tensão e o mistério porque o leitor tem acesso a informações que os personagens não têm." },
            { id: "ES-C1-U5-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'meter al lector en la piel del personaje'?", options: ["Fazer o leitor vestir fantasia", "Fazer o leitor se identificar profundamente / se colocar no lugar do personagem", "Colocar o leitor dentro do livro", "Fazer o leitor sentir medo"], answer: 1, explanation: "Meterse en la piel = se colocar no lugar / se identificar profundamente. 'Meter al lector en la piel del personaje' = fazer o leitor sentir como se fosse o próprio personagem." },
            { id: "ES-C1-U5-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El narrador en segunda persona _____ al lector a identificarse con el protagonista.' (O narrador em segunda pessoa obriga o leitor a se identificar.)", answer: ["obliga"], hint: "forçar / obrigar", explanation: "Obliga = obriga. 'Obligar a' = obrigar a. O narrador em segunda pessoa ('tú') cria uma identificação forçada e perturbadora com o protagonista." },
            { id: "ES-C1-U5-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'O narrador em segunda pessoa é arriscado mas eficaz: obriga o leitor a se colocar no lugar do protagonista.'", answer: ["El narrador en segunda persona es arriesgado pero efectivo: obliga al lector a meterse en la piel del protagonista.", "El narrador en segunda persona resulta arriesgado pero muy efectivo: fuerza al lector a identificarse con el protagonista."], explanation: "Arriesgado = arriscado. Efectivo = eficaz. Obliga al lector = obriga o leitor. Meterse en la piel = se colocar no lugar." },
            { id: "ES-C1-U5-L2-E5", type: "free_writing", skill: "writing", question: "Escreva o início de um conto (100-150 palavras) em segunda pessoa em espanhol. O leitor é o protagonista.", prompt: "Tema livre. Começa com 'Estás en...' ou 'Te despiertas...'. Usa o presente para criar urgência.", hint: "Te despiertas y algo ha cambiado. No sabes qué, pero lo sientes en el aire. Te levantas despacio..., miras a tu alrededor... y entonces ves..." }
          ]
        },
        {
          id: "ES-C1-U5-L3",
          title: "Poesia em Espanhol — Ritmo, Rima e Verso Livre",
          shadowing: "— Lorca decía que la poesía no quiere adeptos sino amantes.\n— ¿Qué diferencia hay?\n— El adepto sigue una doctrina; el amante se entrega sin condiciones.\n— ¿Y el duende?\n— El duende es esa fuerza irracional que aparece cuando la poesía llega a su límite.\n— ¿Se puede aprender?\n— No. Solo se puede invitar. El artista prepara las condiciones, pero el duende viene o no viene.\n— ¿Y si no viene?\n— Haces técnica. Que tampoco está mal.",
          memoryPhrases: [
            "el adepto = o adepto",
            "el amante = o amante",
            "el duende = o duende (conceito de Lorca)",
            "entregarse sin condiciones = se entregar sem condições",
            "invitar = convidar",
            "la técnica = a técnica"
          ],
          oralProduction: "Explique o conceito de duende de Lorca em espanhol e dê exemplos da arte brasileira que o evocam.",
          exercises: [
            { id: "ES-C1-U5-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el duende' no conceito de Federico García Lorca?", options: ["Um ser mitológico", "Uma força irracional, misteriosa e telúrica que aparece na arte no seu momento mais intenso", "A técnica artística", "A inspiração racional"], answer: 1, explanation: "El duende de Lorca = uma força misteriosa, telúrica, irracional que aparece na arte (música flamenca, poesia, dança) no seu momento de maior intensidade. Não é anjo nem musa, é algo que vem das entranhas da terra." },
            { id: "ES-C1-U5-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'se entrega sin condiciones'?", options: ["Se entrega sem dinheiro", "Se dedica completamente / se entrega sem reservas", "Se entrega com condições específicas", "Se compromete parcialmente"], answer: 1, explanation: "Entregarse sin condiciones = se entregar sem condições / se dedicar completamente. 'El amante se entrega sin condiciones' = o amante se entrega sem reservas, sem calcular." },
            { id: "ES-C1-U5-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El artista _____ las condiciones, pero el duende viene o no viene.' (O artista prepara as condições, mas o duende vem ou não vem.)", answer: ["prepara"], hint: "verbo preparar no presente", explanation: "Prepara = prepara. O artista pode preparar as condições (técnica, concentração, entrega) mas não pode forçar o duende a aparecer." },
            { id: "ES-C1-U5-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Lorca dizia que a poesia não quer adeptos mas amantes — pessoas que se entregam sem condições.'", answer: ["Lorca decía que la poesía no quiere adeptos sino amantes: personas que se entregan sin condiciones.", "Lorca afirmaba que la poesía no quiere seguidores sino amantes, es decir, personas capaces de entregarse sin condiciones."], explanation: "Decía que = dizia que. No quiere... sino = não quer... mas. Se entregan sin condiciones = se entregam sem condições." },
            { id: "ES-C1-U5-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um poema em espanhol sobre um tema de sua escolha, em verso livre. Depois, escreva um parágrafo analisando as escolhas que fez.", prompt: "O poema: mínimo 10 versos. A análise: imagens usadas, ritmo, tom, o que tentou expressar.", hint: "Para el poema: imágenes concretas, ritmo natural, una imagen final que sorprenda. Para el análisis: He elegido el verso libre porque..., las imágenes de... representan..., el tono es..." }
          ]
        },
        {
          id: "ES-C1-U5-L4",
          title: "Teatro e Diálogo Dramático",
          shadowing: "— En el teatro, cada palabra carga con el peso del silencio que la rodea.\n— ¿Por eso hay tan poco diálogo en Beckett?\n— Beckett llevó el silencio al extremo. La pausa es tan importante como la palabra.\n— ¿Y en el teatro español clásico?\n— El contraste es total. Lope de Vega no para. La palabra corre, danza, lucha.\n— Son dos concepciones radicalmente distintas del lenguaje teatral.\n— Exacto. Y sin embargo, ambas llegan al mismo lugar: la verdad del ser humano.",
          memoryPhrases: [
            "la pausa teatral = a pausa teatral",
            "el peso del silencio = o peso do silêncio",
            "llevar al extremo = levar ao extremo",
            "la palabra corre, danza, lucha = a palavra corre, dança, luta",
            "concepciones distintas = concepções distintas",
            "la verdad del ser humano = a verdade do ser humano"
          ],
          oralProduction: "Compare dois estilos teatrais em espanhol (ex: Lorca e um autor contemporâneo) usando vocabulário crítico.",
          exercises: [
            { id: "ES-C1-U5-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'la pausa es tan importante como la palabra' no teatro?", options: ["É melhor não falar no teatro", "O silêncio e a pausa têm tanto significado dramático quanto as palavras ditas", "Os atores devem pausar muito", "A música é mais importante que o texto"], answer: 1, explanation: "No teatro contemporâneo (especialmente Beckett, Pinter), a pausa e o silêncio são elementos dramáticos tão significativos quanto o texto falado. O que não se diz tem tanto peso quanto o que se diz." },
            { id: "ES-C1-U5-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'radicalmente distintas'?", options: ["Completamente diferentes", "Ligeiramente diferentes", "Superficialmente diferentes", "Radicalmente iguais"], answer: 0, explanation: "Radicalmente distintas = completamente / radicalmente diferentes. 'Radicalmente' aqui é advérbio intensificador de 'distintas'." },
            { id: "ES-C1-U5-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Cada palabra _____ con el peso del silencio que la rodea.' (Cada palavra carrega o peso do silêncio que a rodeia.)", answer: ["carga"], hint: "verbo cargar (carregar)", explanation: "Carga = carrega. 'Cargar con' = carregar / suportar o peso de. 'La palabra carga con el silencio' = a palavra carrega o silêncio." },
            { id: "ES-C1-U5-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Beckett levou o silêncio ao extremo: a pausa é tão importante quanto a palavra, às vezes mais.'", answer: ["Beckett llevó el silencio al extremo: la pausa es tan importante como la palabra, a veces más.", "Beckett llevó el silencio hasta el límite: la pausa resulta tan importante como la palabra, en ocasiones más."], explanation: "Llevó al extremo = levou ao extremo. Tan importante como = tão importante quanto. A veces más = às vezes mais." },
            { id: "ES-C1-U5-L4-E5", type: "free_writing", skill: "writing", question: "Escreva uma cena teatral curta em espanhol (mínimo 15 falas) em que o silêncio e as pausas são elementos dramáticos centrais.", prompt: "Dois personagens. Algo não dito entre eles. As pausas são indicadas como [PAUSA]. O que não se diz é mais importante do que o que se diz.", hint: "A: [PAUSA] ¿Has pensado en lo que te dije? B: Sí. [PAUSA LARGA] A: ¿Y? B: Nada. [Silencio] A: Entiendo. [Se levanta]..." }
          ]
        },
        {
          id: "ES-C1-U5-L5",
          title: "Revisão Final C1 — Maestria Linguística",
          shadowing: "— Has llegado a un punto en que el español ya no es un obstáculo sino una herramienta.\n— Una herramienta que a veces me sorprende con su propia lógica.\n— ¿Qué quieres decir?\n— Que a veces empiezo una frase sin saber cómo terminarla y el idioma me lleva.\n— Eso es señal de que has internalizado la gramática.\n— O de que me he rendido a ella.\n— Que es lo mismo. El idioma perfecto es el que no se siente como idioma.\n— Sí. El día que no note que estoy hablando español, habré llegado.",
          memoryPhrases: [
            "internalizar = internalizar",
            "rendirse a = se render a",
            "el idioma que no se siente = o idioma que não se sente",
            "el idioma me lleva = o idioma me conduz",
            "habré llegado = terei chegado",
            "que es lo mismo = que é a mesma coisa"
          ],
          oralProduction: "Faça uma reflexão final sobre sua relação com o espanhol e o que significa ter chegado ao C1.",
          exercises: [
            { id: "ES-C1-U5-L5-E1", type: "multiple_choice", skill: "grammar", question: "O que é o futuro perfeito? 'El día que no note que hablo español, habré llegado.'", options: ["Algo que vai acontecer no futuro", "Algo que terá sido completado antes de outro momento futuro", "Algo do passado", "Uma hipótese impossível"], answer: 1, explanation: "Habré llegado = terei chegado. Futuro perfeito (habrá + participio) = ação que estará completa antes de outro momento futuro. 'Quando X acontecer, Y já terá acontecido'." },
            { id: "ES-C1-U5-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el idioma me lleva'?", options: ["O idioma me cansa", "O idioma me conduz / me guia de forma natural", "O idioma me atrasa", "O idioma me carrega"], answer: 1, explanation: "'El idioma me lleva' = o idioma me conduz. Quando o idioma funciona de forma automática e natural, conduzindo o falante em vez de ser conscientemente controlado por ele." },
            { id: "ES-C1-U5-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Cuando _____ (llegar) al C2, el español será mi segunda lengua materna.' (Quando chegar ao C2, o espanhol será minha segunda língua materna.)", answer: ["llegue"], hint: "subjuntivo de LLEGAR para yo (futuro)", explanation: "Llegue = chegar (subj.). 'Cuando' com referência ao futuro sempre pede subjuntivo. 'Cuando llegue' = quando eu chegar." },
            { id: "ES-C1-U5-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'O dia em que não perceber que estou falando espanhol, terei chegado. Esse é o objetivo final.'", answer: ["El día que no note que estoy hablando español, habré llegado. Ese es el objetivo final.", "El día en que no perciba que estoy hablando español, habré llegado. Ese es el verdadero objetivo."], explanation: "El día que no note = o dia em que não perceba. Habré llegado = terei chegado. El objetivo final = o objetivo final." },
            { id: "ES-C1-U5-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um manifesto literário pessoal em espanhol sobre o que a linguagem significa para você, como ferramenta, como arte e como identidade. Mínimo 15 frases.", prompt: "Inclua: a língua como ferramenta · a língua como arte · a língua como identidade · o que o espanhol acrescentou · o que vem depois", hint: "Para mí, la lengua es ante todo..., el español me ha enseñado que..., cuando uso el idioma como arte..., mi identidad hoy incluye..., lo que queda por delante es..." }
          ]
        }
      ]
    },
    {
      id: "ES-C1-U6",
      title: "Preparação para C2 — Maestria Total",
      description: "Ponte entre o C1 e o C2 — últimos passos para a maestria total",
      lessons: [
        {
          id: "ES-C1-U6-L1",
          title: "Arcaísmos e Registros Históricos do Espanhol",
          shadowing: "— El castellano medieval tenía una riqueza morfológica que hemos perdido.\n— ¿Como el futuro de subjuntivo?\n— Exacto. 'Si lo hiciere, será castigado.' Ya casi nadie lo usa en el habla cotidiana.\n— Pero se mantiene en el lenguaje jurídico.\n— Y en expresiones fijas: 'sea lo que fuere', 'venga quien viniere'.\n— ¿Y el vosotros histórico?\n— El 'vos' original que luego derivó en 'vosotros' en España y se conservó como 'vos' en el Río de la Plata.",
          memoryPhrases: [
            "el futuro de subjuntivo = o futuro do subjuntivo",
            "arcaísmo = arcaísmo",
            "el lenguaje jurídico = a linguagem jurídica",
            "sea lo que fuere = seja o que for",
            "venga quien viniere = venha quem vier",
            "derivar en = derivar em"
          ],
          oralProduction: "Explique a evolução histórica de um aspecto do espanhol e como isso se reflete nas variedades contemporâneas.",
          exercises: [
            { id: "ES-C1-U6-L1-E1", type: "multiple_choice", skill: "grammar", question: "Em qual contexto atual se usa o futuro do subjuntivo em espanhol?", options: ["Na fala cotidiana", "No registro jurídico e em expressões fixas arcaicas", "No espanhol latino-americano", "Na poesia moderna"], answer: 1, explanation: "O futuro do subjuntivo ('hiciere', 'viniere', 'fuere') é praticamente arcaico na fala cotidiana mas se mantém no registro jurídico ('el que incumpliere') e em expressões fijas como 'sea lo que fuere'." },
            { id: "ES-C1-U6-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é um 'arcaísmo'?", options: ["Um erro gramatical", "Palavra, forma ou expressão de uso antigo que sobrevive no idioma atual", "Um dialectismo regional", "Um neologismo"], answer: 1, explanation: "Arcaísmo = forma, palavra ou expressão de uso antigo que se mantém em alguns registros (literário, jurídico) ou expressões fixas, embora não seja mais de uso cotidiano." },
            { id: "ES-C1-U6-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete com futuro de subjuntivo: 'El que _____ (incumplir) el contrato pagará una multa.' (Quem descumprir o contrato pagará multa.)", answer: ["incumpliere"], hint: "futuro de subjuntivo de incumplir", explanation: "Incumpliere = descumprir (futuro de subjuntivo). Forma usada em textos jurídicos: 'el que incumpliere' = quem descumprir." },
            { id: "ES-C1-U6-L1-E4", type: "translation", skill: "writing", question: "Traduza para um registro jurídico formal: 'Quem descumprir as condições do contrato será responsabilizado.'", answer: ["El que incumpliere las condiciones del contrato será considerado responsable.", "Quien incumpliere las condiciones del contrato incurrirá en responsabilidad."], explanation: "El que incumpliere / quien incumpliere = quem descumprir (futuro de subjuntivo). Será considerado responsable = será considerado responsável." },
            { id: "ES-C1-U6-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um artigo de lei em espanhol jurídico formal, usando o futuro do subjuntivo e vocabulário especializado. Mínimo 8 artigos.", prompt: "Lei fictícia sobre proteção do patrimônio cultural imaterial. Inclua: definições, obrigações, proibições, sanções.", hint: "ARTÍCULO 1. A los efectos de la presente ley, se entenderá por..., ARTÍCULO 2. El que atentare contra..., ARTÍCULO 3. Serán sanciones..." }
          ]
        },
        {
          id: "ES-C1-U6-L2",
          title: "Neologismos e Espanhol do Futuro",
          shadowing: "— El español absorbe palabras de otras lenguas con una voracidad peculiar.\n— ¿Cómo se decide si una palabra nueva es española?\n— En teoría, la RAE lo decide. En práctica, la calle lo decide primero.\n— ¿Un ejemplo reciente?\n— 'Selfie' fue aceptada como 'selfi'. 'Smartphone' se convirtió en 'teléfono inteligente' en algunos países.\n— ¿Y los verbos?\n— 'Tuitear', 'googlear', 'stalkear'... el español los conjuga como si fueran de siempre.\n— La lengua viva no espera permiso.",
          memoryPhrases: [
            "el neologismo = o neologismo",
            "la RAE = a RAE (Real Academia Española)",
            "la calle lo decide = a rua decide",
            "conjugar como si fueran = conjugar como se fossem",
            "la lengua viva = a língua viva",
            "la voracidad = a voracidade"
          ],
          oralProduction: "Discuta 5 neologismos recentes em espanhol e avalie se devem ser incorporados ao idioma.",
          exercises: [
            { id: "ES-C1-U6-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la RAE' e qual é sua função?", options: ["Real Academia Española — regula e documenta a língua espanhola", "Rede Académica Española", "Registro Académico del Español", "Real Autoridad Española"], answer: 0, explanation: "RAE = Real Academia Española. Fundada em 1713, é a instituição que regula e documenta o espanhol. Publica o Diccionario de la lengua española (DLE) e é a autoridade máxima sobre o idioma." },
            { id: "ES-C1-U6-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'la lengua viva no espera permiso'?", options: ["A língua falada é livre de regras", "A língua real evolui naturalmente sem aguardar aprovação de instituições", "A língua precisa de autorização para mudar", "A língua viva é ilegal"], answer: 1, explanation: "A língua real (falada pelas pessoas) evolui naturalmente, incorporando neologismos e mudanças antes mesmo que as academias as reconheçam. A 'calle' (rua) decide antes da RAE." },
            { id: "ES-C1-U6-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El español _____ palabras extranjeras con una voracidad peculiar.' (O espanhol absorve palavras estrangeiras com uma voracidade peculiar.)", answer: ["absorbe"], hint: "incorporar / assimilar", explanation: "Absorbe = absorve. 'Absorber' = absorver / assimilar. 'Voracidad' = voracidade. O espanhol é notavelmente eficaz em adaptar palavras estrangeiras." },
            { id: "ES-C1-U6-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'O espanhol conjuga verbos estrangeiros como se fossem de sempre: tuitear, googlear, stalkear.'", answer: ["El español conjuga verbos extranjeros como si fueran de siempre: tuitear, googlear, stalkear.", "El español conjuga los verbos de otras lenguas como si llevaran siglos en el idioma: tuitear, googlear, stalkear."], explanation: "Conjuga como si fueran = conjuga como se fossem. De siempre = de sempre. Los verbos extranjeros se integran al sistema verbal español." },
            { id: "ES-C1-U6-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre o futuro do espanhol: como vai evoluir, que influências vai receber e que papel vai ter no mundo em 2050. Mínimo 12 frases.", prompt: "Inclua: influências do inglês e do tecnoleto · variedades latinoamericanas · espanhol nos EUA · papel global · ameaças e oportunidades", hint: "Para el año 2050, el español habrá evolucionado..., la influencia del inglés..., el español de Estados Unidos..., las variedades latinoamericanas..., el futuro del idioma depende de..." }
          ]
        },
        {
          id: "ES-C1-U6-L3",
          title: "Interlíngua e Interferências Português-Espanhol",
          shadowing: "— El mayor enemigo del brasileño que aprende español es la falsa seguridad.\n— ¿A qué se refiere?\n— A creer que como las lenguas son parecidas, ya lo sabe todo.\n— El portuñol.\n— Exacto. Una mezcla que suena mal en los dos idiomas.\n— ¿Cómo se supera?\n— Siendo muy consciente de las diferencias. Las lenguas parecidas requieren más atención que las distintas.\n— Paradójico, ¿verdad?\n— Mucho. El francés te obliga a aprender; el español te tienta a improvisar.",
          memoryPhrases: [
            "la falsa seguridad = a falsa segurança",
            "el portuñol = o portunhol",
            "superar = superar",
            "ser consciente de = ser consciente de",
            "las lenguas parecidas = os idiomas parecidos",
            "tentar a improvisar = tentar a improvisar"
          ],
          oralProduction: "Liste e explique 10 interferências comuns do português no espanhol que você ainda precisa monitorar.",
          exercises: [
            { id: "ES-C1-U6-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el portuñol'?", options: ["O português ensinado em Portugal", "A mistura não sistemática de português e espanhol", "Um dialeto fronteiriço oficial", "O espanhol falado no Brasil"], answer: 1, explanation: "Portuñol = mistura não sistemática de português e espanhol. Pode ser um dialeto de contato nas fronteiras (portuñol riograndense) ou o resultado da interferência do português no espanhol de um aprendiz." },
            { id: "ES-C1-U6-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "Por que 'las lenguas parecidas requieren más atención que las distintas'?", options: ["Porque são mais difíceis", "Porque a semelhança cria falsa segurança e o aprendiz não percebe os erros sutis", "Porque têm mais gramática", "Porque têm mais vocabulário"], answer: 1, explanation: "A semelhança entre o português e o espanhol cria falsa segurança: o aprendiz acredita que já sabe e não monitora os erros sutis. Com línguas muito diferentes, o aprendiz sabe que precisa aprender tudo." },
            { id: "ES-C1-U6-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El mayor _____ del brasileño que aprende español es la falsa seguridad.' (O maior inimigo do brasileiro que aprende espanhol é a falsa segurança.)", answer: ["enemigo"], hint: "o que mais prejudica / o principal obstáculo", explanation: "Enemigo = inimigo. 'El mayor enemigo' = o maior inimigo / o principal obstáculo. Uso figurado muito natural em espanhol." },
            { id: "ES-C1-U6-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'O portuñol é uma mistura que soa mal nos dois idiomas. Para superá-lo, é preciso ser muito consciente das diferenças.'", answer: ["El portuñol es una mezcla que suena mal en los dos idiomas. Para superarlo, hay que ser muy consciente de las diferencias.", "El portuñol es una mezcla que resulta mal en ambos idiomas. Para superarlo, es necesario ser muy consciente de las diferencias."], explanation: "Suena mal = soa mal. Para superarlo = para superá-lo. Hay que ser = é preciso ser. Consciente de las diferencias = consciente das diferenças." },
            { id: "ES-C1-U6-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um guia completo para brasileiros sobre as 20 interferências mais comuns do português no espanhol e como evitá-las. Mínimo 15 frases.", prompt: "Inclua: falsos cognatos · estruturas gramaticais diferentes · pronúncia · vocabulário enganoso · dicas práticas para cada interferência", hint: "Interferencia 1: 'borracha' en español significa..., no..., Interferencia 2: la preposición 'em' en portugués no equivale a..., Interferencia 3: el verbo 'ficar'..." }
          ]
        },
        {
          id: "ES-C1-U6-L4",
          title: "DELE C1 — Preparação para o Exame",
          shadowing: "— El DELE C1 evalúa cuatro destrezas: comprensión lectora, comprensión auditiva, expresión escrita e interacción oral.\n— ¿Qué distingue al C1 del B2?\n— La capacidad de manejar textos complejos, implícitos, con múltiples registros.\n— ¿Y en la expresión?\n— Fluidez sin esfuerzo aparente, precisión léxica y gramática flexible.\n— ¿Qué tipo de textos aparecen?\n— Artículos académicos, columnas de opinión, fragmentos literarios, entrevistas especializadas.\n— ¿Y los temas?\n— Variados y exigentes: filosofía, economía, cultura, ciencia, política internacional.",
          memoryPhrases: [
            "las cuatro destrezas = as quatro habilidades",
            "sin esfuerzo aparente = sem esforço aparente",
            "la precisión léxica = a precisão lexical",
            "gramática flexible = gramática flexível",
            "múltiples registros = múltiplos registros",
            "textos complejos e implícitos = textos complexos e implícitos"
          ],
          oralProduction: "Faça uma simulação de tarefa oral do DELE C1: apresentação + debate sobre um tema complexo.",
          exercises: [
            { id: "ES-C1-U6-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que distingue o C1 do B2 na expressão oral?", options: ["Mais velocidade", "Fluidez sem esforço aparente, precisão léxica e gramática flexível", "Mais vocabulário", "Melhor pronúncia"], answer: 1, explanation: "No C1: fluidez sem esforço aparente (não pausa para buscar palavras), precisão léxica (escolha exata das palavras) e gramática flexível (domínio de estruturas complexas sem cometer erros)." },
            { id: "ES-C1-U6-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que são 'textos implícitos'?", options: ["Textos curtos", "Textos cujo significado real vai além do que está explicitamente escrito", "Textos simples", "Textos sem autor"], answer: 1, explanation: "Textos implícitos = textos cujo significado pleno exige inferência, conhecimento de contexto e cultura, interpretação de subentendidos. Típicos do C1." },
            { id: "ES-C1-U6-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El C1 exige manejar múltiples _____ con naturalidad.' (O C1 exige dominar múltiplos registros com naturalidade.)", answer: ["registros"], hint: "níveis/variedades da língua", explanation: "Registros = registros linguísticos. 'Múltiples registros' = formal, informal, técnico, literário, coloquial — o falante C1 transita entre eles com naturalidade." },
            { id: "ES-C1-U6-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'O DELE C1 avalia a capacidade de manejar textos complexos e implícitos com fluência e precisão léxica.'", answer: ["El DELE C1 evalúa la capacidad de manejar textos complejos e implícitos con fluidez y precisión léxica.", "El DELE C1 evalúa la capacidad de gestionar textos complejos e implícitos con fluidez y exactitud léxica."], explanation: "Evalúa = avalia. La capacidad de manejar = a capacidade de dominar. Precisión léxica = precisão lexical." },
            { id: "ES-C1-U6-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de opinião de 350-400 palavras sobre a globalização cultural para o DELE C1, demonstrando domínio de vocabulário sofisticado e estruturas complexas.", prompt: "Estrutura: tese · desenvolvimento com 3 argumentos · concessão elaborada · conclusão reflexiva", hint: "La globalización cultural presenta paradojas que..., si bien es cierto que..., sin embargo, cabría preguntarse si..., en definitiva..." }
          ]
        },
        {
          id: "ES-C1-U6-L5",
          title: "Ponte para o C2 — O Falante Nativo",
          shadowing: "— La diferencia entre el C1 y el C2 es invisible para el extranjero pero enorme para el nativo.\n— ¿En qué consiste exactamente?\n— En los matices. En saber que 'casa' y 'hogar' no son sinónimos. Que 'mirar' y 'ver' son mundos distintos.\n— ¿Y la velocidad?\n— En el C2, no hay pensamiento previo. La lengua fluye como el agua.\n— ¿Se puede llegar ahí sin vivir en un país hispanohablante?\n— Es más difícil, pero posible. Si te sumerges totalmente en el idioma.\n— ¿Cuánto tiempo?\n— Con intensidad total, dos o tres años más. Pero depende de ti.",
          memoryPhrases: [
            "los matices = os matizes",
            "hogar vs casa = lar vs casa",
            "mirar vs ver = olhar vs ver",
            "pensamiento previo = pensamento prévio",
            "fluir como el agua = fluir como água",
            "con intensidad total = com intensidade total"
          ],
          oralProduction: "Faça uma reflexão final de 3 minutos sobre sua jornada no espanhol do A1 ao C1 e seus planos para o C2.",
          exercises: [
            { id: "ES-C1-U6-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "Qual é a diferença entre 'casa' e 'hogar' em espanhol?", options: ["São sinônimos perfeitos", "'Casa' é o espaço físico; 'hogar' é o lar no sentido afetivo e emocional", "'Hogar' é mais formal", "'Casa' é informal"], answer: 1, explanation: "'Casa' = casa (espaço físico). 'Hogar' = lar (conceito afetivo, emocional, o lugar onde se pertence). 'Mi hogar' tem uma carga emocional que 'mi casa' não tem necessariamente." },
            { id: "ES-C1-U6-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Qual é a diferença entre 'mirar' e 'ver' em espanhol?", options: ["São sinônimos", "'Mirar' = olhar (ato intencional); 'ver' = ver (percepção passiva/resultado)", "'Ver' é mais formal", "'Mirar' é para objetos"], answer: 1, explanation: "'Mirar' = olhar (ato intencional e dirigido). 'Ver' = ver (percepção, resultado). 'Miro la televisión' = olho a televisão. 'Veo la televisión' = vejo (= assisto). Distinção sutil e crucial." },
            { id: "ES-C1-U6-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'En el C2, la lengua _____ como el agua: sin pensamiento previo.' (No C2, a língua flui como água: sem pensamento prévio.)", answer: ["fluye"], hint: "verbo fluir no presente", explanation: "Fluye = flui. Fluir = fluir. 'La lengua fluye' = a língua flui. No C2 não há pensamento prévio — a língua é automática e natural." },
            { id: "ES-C1-U6-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'A diferença entre C1 e C2 é invisível para o estrangeiro mas enorme para o nativo: são os matizes sutis que distinguem os dois níveis.'", answer: ["La diferencia entre el C1 y el C2 es invisible para el extranjero pero enorme para el nativo: son los matices sutiles los que distinguen ambos niveles.", "La diferencia entre C1 y C2 resulta invisible para el extranjero pero enorme para el nativo: los matices sutiles son los que distinguen ambos niveles."], explanation: "Invisible para = invisível para. Enorme para = enorme para. Los matices sutiles = os matizes sutis. Los que distinguen = os que distinguem." },
            { id: "ES-C1-U6-L5-E5", type: "free_writing", skill: "writing", question: "Escreva sua declaração final como falante C1 de espanhol: quem você era quando começou, quem você é agora, e quem você vai ser quando alcançar o C2. Mínimo 15 frases.", prompt: "Inclua: a jornada completa · as transformações · o que o espanhol mudou em você · os matizes que ainda quer dominar · a visão do C2", hint: "Cuando empecé, el español era..., ahora es..., lo que más ha cambiado en mí es..., los matices que aún quiero..., cuando llegue al C2..." }
          ]
        }
      ]
    }
  ]
};
