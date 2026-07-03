export const CURRICULUM_ES_C2_PART1 = {
  units: [
    {
      id: "ES-C2-U1",
      title: "Domínio Absoluto da Língua",
      description: "Precisão, espontaneidade e naturalidade de falante nativo",
      lessons: [
        {
          id: "ES-C2-U1-L1",
          title: "Futuro do Subjuntivo — O Tempo Esquecido",
          shadowing: "— La ley establece que quien incumpliere el contrato será sancionado.\n— ¿Se usa mucho el futuro de subjuntivo?\n— En el habla cotidiana, casi no. Pero en textos jurídicos, religiosos y literarios arcaicos, sí.\n— ¿Y en frases hechas?\n— Exacto: 'sea lo que fuere', 'venga quien viniere', 'pase lo que pasare'.\n— ¿Cómo se forma?\n— Del pretérito indefinido: hicieron → hiciere, dijeron → dijere, fueran → fuere.",
          memoryPhrases: [
            "fuere = for (futuro subj. de ser/ir)",
            "hiciere = fizer (futuro subj. de hacer)",
            "viniere = vier (futuro subj. de venir)",
            "sea lo que fuere = seja o que for",
            "donde fuere = onde for",
            "el que lo hiciere = quem o fizer"
          ],
          oralProduction: "Use 5 estruturas com futuro do subjuntivo em contextos jurídicos ou literários.",
          exercises: [
            { id: "ES-C2-U1-L1-E1", type: "multiple_choice", skill: "grammar", question: "O futuro do subjuntivo 'hiciere' deriva de qual forma?", options: ["Del infinitivo hacer", "Del pretérito 'hicieron' (quitando -on + -e)", "Del presente subjuntivo", "Del imperfecto"], answer: 1, explanation: "Hicieron → hiciere. Regla: pretérito indefinido 3ª plural → quitar -on → + e/es/e/emos/eis/en. Funciona para todos los verbos, regulares e irregulares." },
            { id: "ES-C2-U1-L1-E2", type: "multiple_choice", skill: "grammar", question: "En qué contextos se usa el futuro de subjuntivo hoy?", options: ["En conversación cotidiana", "Solo en textos jurídicos, refranes y expresiones fijas", "En el español latinoamericano", "En preguntas formales"], answer: 1, explanation: "El futuro de subjuntivo es prácticamente arcaico en el habla cotidiana. Sobrevive en textos jurídicos ('el que incumpliere'), refranes y expresiones fijas ('adonde fueres, haz lo que vieres')." },
            { id: "ES-C2-U1-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete el refrán: 'Adonde _____ (ir), haz lo que _____ (ver).' (Onde for, faça o que ver.)", answer: ["fueres, vieres"], hint: "futuro de subjuntivo de IR y VER", explanation: "Fueres (ir) y vieres (ver). Refrán clásico: 'adonde fueres, haz lo que vieres' = onde você for, faça como fazem lá." },
            { id: "ES-C2-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza para registro jurídico: 'Quem descumprir as obrigações ficará sujeito a penalidades.'", answer: ["El que incumpliere las obligaciones quedará sujeto a penalidades.", "Quien incumpliere las obligaciones quedará sujeto a penalidades."], explanation: "El que / quien + futuro de subjuntivo = quem + futuro do presente. Registro jurídico formal." },
            { id: "ES-C2-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva 5 artigos de lei em espanhol jurídico usando o futuro do subjuntivo. Mínimo 10 linhas.", prompt: "Use: el que incumpliere / quien lo hiciere / donde se hallare / en caso de que ocurriere / el que infringiere", hint: "ARTÍCULO 1: El que incumpliere..., ARTÍCULO 2: Quien hubiere..., ARTÍCULO 3: En caso de que ocurriere..." }
          ]
        },
        {
          id: "ES-C2-U1-L2",
          title: "Sintaxe Complexa — Orações Encaixadas",
          shadowing: "— Lo que me parece curioso es que nadie se haya dado cuenta de lo que estaba pasando.\n— Es que la situación era tan compleja que resultaba difícil saber a qué atenerse.\n— O sea, que lo que ocurrió fue que todo el mundo sabía algo pero nadie sabía todo.\n— Exactamente. Un problema de información asimétrica en el que cada parte creía saber más de lo que sabía.\n— Lo cual explica por qué nadie actuó a tiempo.",
          memoryPhrases: [
            "lo que me parece es que = o que me parece é que",
            "lo cual = o que / o qual (referência à frase anterior)",
            "a qué atenerse = ao que se ater",
            "información asimétrica = informação assimétrica",
            "en el que / en la que = no qual / na qual",
            "fue que = foi que"
          ],
          oralProduction: "Construa 3 frases de alta complexidade sintática em espanhol com orações encaixadas.",
          exercises: [
            { id: "ES-C2-U1-L2-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença entre 'que' e 'lo cual' como relativos?", options: ["São iguais", "'Lo cual' referencia toda la frase anterior, no solo un sustantivo", "'Lo cual' es más informal", "'Que' es solo para personas"], answer: 1, explanation: "'Lo cual' = o que / o qual — refere-se a toda a proposição anterior: 'No vino, lo cual me sorprendió' (= o que me surpreendeu). 'Que' introduz orações relativas sobre um substantivo específico." },
            { id: "ES-C2-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'El informe _____ (el cual / que / lo cual) me entregaron era incompleto.'", options: ["lo cual", "que", "el cual", "B y C son correctas"], answer: 3, explanation: "'El informe que me entregaron' (restrictivo, sin coma) y 'el informe, el cual me entregaron,' (explicativo, con coma) son ambos correctos. 'Lo cual' no funciona aquí pues refiere a proposiciones." },
            { id: "ES-C2-U1-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'No sé a qué _____. La situación cambia constantemente.' (Não sei ao que me ater.)", answer: ["atenerme"], hint: "a qué atenerse = ao que se ater", explanation: "A qué atenerme = ao que me ater. 'Atenerse a algo' = se ater a algo / saber com o que contar." },
            { id: "ES-C2-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'O que me parece mais curioso é que ninguém percebeu o que estava acontecendo, o que explica por que ninguém agiu.'", answer: ["Lo que me parece más curioso es que nadie se diera cuenta de lo que estaba pasando, lo cual explica por qué nadie actuó.", "Lo que me resulta más curioso es que nadie se percatara de lo que ocurría, lo cual explica que nadie actuara."], explanation: "Lo que me parece = o que me parece. Lo cual explica = o que explica (toda a frase anterior). Se diera cuenta = percebesse (subj. imperf.)." },
            { id: "ES-C2-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um parágrafo de análise política usando sintaxe complexa com orações encaixadas. Mínimo 5 frases longas.", prompt: "Inclua: lo que / lo cual / el cual / a qué atenerse / en el que / de lo que", hint: "Lo que resulta llamativo es que..., una situación en la que..., lo cual explica..., de modo que..." }
          ]
        },
        {
          id: "ES-C2-U1-L3",
          title: "Registro Arcaico e Poético — O Espanhol Clássico",
          shadowing: "— 'En el principio era el Verbo, y el Verbo era con Dios.'\n— La Biblia de Casiodoro de Reina. ¿Notas las diferencias con el español actual?\n— Sí: 'era con Dios' en vez de 'estaba con Dios'. El ser más esencial.\n— Y la construcción de infinitivo: 'haber de hacer' en vez de 'tener que hacer'.\n— También el subjuntivo futuro: 'el que tuviere oídos que oiga'.\n— El español clásico tiene una musicalidad que el moderno ha perdido en parte.\n— O ganado en claridad. Los registros evolucionan.",
          memoryPhrases: [
            "haber de + inf. = ter que (arcaico elegante)",
            "ser vs estar (clásico): ser más esencial",
            "el que tuviere = quem tiver (fut. subj.)",
            "otrora = outrora / antigamente",
            "antaño = antigamente / outrora",
            "acaecer = acontecer (arcaico)"
          ],
          oralProduction: "Leia em voz alta um texto do espanhol clássico e explique as diferenças em relação ao espanhol moderno.",
          exercises: [
            { id: "ES-C2-U1-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'haber de + infinitivo' em espanhol clássico?", options: ["Ter feito algo", "Ter que / dever + infinitivo (obrigação elegante)", "Haver / existir", "Ter esperança de"], answer: 1, explanation: "'Haber de + inf.' = ter que / dever (obrigação). 'He de decirte algo' = tenho que te dizer algo. Forma mais elegante e arcaica que 'tener que'." },
            { id: "ES-C2-U1-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'antaño' em espanhol?", options: ["Antigamente / no passado (não muito remoto)", "Este ano", "No futuro", "Às vezes"], answer: 0, explanation: "Antaño = antigamente / outrora / noutros tempos. 'Antaño era diferente' = antigamente era diferente. Sinônimo literário: otrora." },
            { id: "ES-C2-U1-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete com vocabulário arcaico: '_____ las cosas eran más simples.' (Antigamente as coisas eram mais simples.)", answer: ["Antaño", "Otrora", "En otros tiempos"], hint: "palavra arcaica para 'antigamente'", explanation: "Antaño / Otrora = antigamente / outrora. Ambos são elegantes e literários." },
            { id: "ES-C2-U1-L3-E4", type: "translation", skill: "writing", question: "Reescreva em espanhol clássico elegante: 'Antigamente, quem tinha que falar na praça pública devia preparar muito bem seu discurso.'", answer: ["Antaño, el que hubiere de hablar en la plaza pública habría de preparar muy bien su discurso.", "Otrora, quien hubiera de hablar ante el pueblo debía preparar su discurso con gran cuidado."], explanation: "Hubiere de hablar = tiver que falar (fut. subj.). Habría de preparar = deveria preparar (haber de + inf.)." },
            { id: "ES-C2-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um texto curto em espanhol com estilo literário clássico, como se fosse do Siglo de Oro. Mínimo 8 frases.", prompt: "Use: antaño / otrora / haber de / futuro de subjuntivo / vocabulário elevado", hint: "En tiempos que ya fueron..., el que hubiere de..., otrora las gentes..., hanse de considerar..." }
          ]
        },
        {
          id: "ES-C2-U1-L4",
          title: "Variação Diafásica — Domínio de Todos os Registros",
          shadowing: "— Buenos días, señoría. Me dirijo al tribunal para exponer los hechos que a continuación se detallan.\n[registro coloquial]\n— Tío, ¿te enteraste de lo que pasó? Es que flipas.\n[registro científico]\n— Los resultados evidencian una correlación estadísticamente significativa entre las variables.\n[registro literario]\n— La tarde caía como un telón de seda sobre los tejados de la ciudad dormida.",
          memoryPhrases: [
            "señoría = Vossa Excelência / Meritíssimo",
            "flipar = se impressionar / não acreditar (ES coloquial)",
            "evidenciar = evidenciar",
            "estadísticamente significativo = estatisticamente significativo",
            "caía como un telón = caía como uma cortina",
            "a continuación = a seguir"
          ],
          oralProduction: "Expresse a mesma ideia em 4 registros diferentes: jurídico, coloquial, científico e literário.",
          exercises: [
            { id: "ES-C2-U1-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'flipar' no espanhol coloquial peninsular?", options: ["Virar / girar", "Se impressionar muito / não acreditar / ser surpreendente", "Ficar chateado", "Sair correndo"], answer: 1, explanation: "Flipar = se impressionar muito / ficar boquiaberto / ser incrível. 'Es que flipas' = é de não acreditar. Muito coloquial, típico de jovens espanhóis." },
            { id: "ES-C2-U1-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se adapta 'tío, no me enteré de nada' para registro formal?", options: ["Señor, no me enteré de nada", "No tuve conocimiento de ninguno de los hechos mencionados", "No supe nada de nada", "Desconocía los hechos"], answer: 1, explanation: "'No tuve conocimiento de ninguno de los hechos mencionados' é a versão formal/jurídica de 'no me enteré de nada'. O C2 exige transitar naturalmente entre esses registros." },
            { id: "ES-C2-U1-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Reescreva em registro literário: 'Llovía mucho y hacía frío.' → 'La lluvia _____ sobre la ciudad mientras el frío _____ sus dedos de hielo...'", answer: ["caía", "extendía / tendía"], hint: "verbos expressivos e imagéticos para registro literário", explanation: "La lluvia caía / se precipitaba. El frío extendía / tendía sus dedos de hielo. O registro literário busca imagens concretas e verbos expressivos." },
            { id: "ES-C2-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza o mesmo conteúdo em dois registros: 1) coloquial e 2) jurídico: 'Chegaram tarde e causaram problemas.'", answer: ["1) Coloquial: Llegaron tardísimo y lo pusieron todo patas arriba. 2) Jurídico: Los implicados hicieron acto de presencia con retraso, causando perjuicios a las partes afectadas."], explanation: "Patas arriba = de cabeça para baixo / um caos. Hicieron acto de presencia = compareceram. Perjuicios = prejuízos. Partes afectadas = partes prejudicadas." },
            { id: "ES-C2-U1-L4-E5", type: "free_writing", skill: "writing", question: "Escreva o mesmo evento (uma reunião que saiu do controle) em 4 registros: coloquial, formal, científico e literário. Mínimo 3 frases cada.", prompt: "Evento: uma reunião de trabalho que acabou em discussão. Descreva o mesmo fato nos 4 registros.", hint: "Coloquial: fue un desastre total, tío. Formal: La reunión no alcanzó los objetivos previstos. Científico: El encuentro evidenció una divergencia significativa. Literario: Las palabras volaron como pájaros heridos..." }
          ]
        },
        {
          id: "ES-C2-U1-L5",
          title: "Metáfora Conceptual e Linguagem Figurada",
          shadowing: "— Decimos 'el tiempo es dinero', 'el debate fue una batalla', 'las ideas son alimento para la mente'.\n— Son metáforas conceptuales: estructuran nuestra manera de pensar.\n— No son solo adornos retóricos.\n— Exacto. Cuando decimos 'invertir tiempo', usamos la misma metáfora que con el dinero.\n— O 'atacar un argumento', 'defender una posición', 'ganar un debate'.\n— La lengua revela cómo conceptualizamos la realidad.\n— Y a veces la construye.",
          memoryPhrases: [
            "el tiempo es dinero = o tempo é dinheiro",
            "invertir tiempo = investir tempo",
            "atacar un argumento = atacar um argumento",
            "la metáfora conceptual = a metáfora conceitual",
            "estructurar la manera de pensar = estruturar a maneira de pensar",
            "conceptualizar = conceitualizar"
          ],
          oralProduction: "Identifique 5 metáforas conceptuais no espanhol e explique como estruturam a percepção da realidade.",
          exercises: [
            { id: "ES-C2-U1-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é uma 'metáfora conceptual' segundo a linguística cognitiva?", options: ["Uma metáfora poética", "Uma estrutura cognitiva que mapeia um domínio sobre outro para organizar o pensamento", "Uma figura de linguagem decorativa", "Um erro de linguagem"], answer: 1, explanation: "Metáfora conceptual (Lakoff & Johnson) = estrutura cognitiva que mapeia um domínio (debate = guerra) sobre outro, organizando como pensamos e falamos sobre o tema." },
            { id: "ES-C2-U1-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Qual metáfora conceptual está em 'devoré el libro en una tarde'?", options: ["Los libros son comida", "El tiempo es valioso", "La lectura es movimiento", "Los libros son seres vivos"], answer: 0, explanation: "'Devoré el libro' = a leitura / o conhecimento é alimento. 'Devorar', 'digerir', 'nutrirse de ideas' — todas partes da metáfora LAS IDEAS SON ALIMENTO." },
            { id: "ES-C2-U1-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Ese argumento es _____ de atacar.' (Esse argumento é difícil de atacar — metáfora do debate como guerra.)", answer: ["difícil", "imposible"], hint: "metáfora da guerra aplicada ao debate", explanation: "Difícil/imposible de atacar. A metáfora do debate como guerra: atacar, defender, ganar, demoler, refutar argumentos." },
            { id: "ES-C2-U1-L5-E4", type: "translation", skill: "writing", question: "Traduza identificando a metáfora conceitual: 'Perdemos muito tempo nessa discussão. Você estava desperdiçando minha atenção.'", answer: ["Perdimos mucho tiempo en esa discusión. Estabas desperdiciando mi atención.", "Desperdiciamos tiempo en esa discusión. Estabas malgastando mi atención."], explanation: "Metáfora: EL TIEMPO ES DINERO — perder/desperdiciar/gastar tempo igual que dinheiro. Atención = atenção (também como recurso limitado)." },
            { id: "ES-C2-U1-L5-E5", type: "free_writing", skill: "writing", question: "Analise 3 metáforas conceptuais do espanhol (ou do português) explicando como estruturam a percepção da realidade. Mínimo 12 frases.", prompt: "Escolha 3 domínios: tempo, debate, conhecimento, vida, amor, carreira. Para cada um, liste expressões e analise a metáfora.", hint: "La metáfora EL DEBATE ES UNA GUERRA se manifiesta en expresiones como..., lo que implica que conceptualizamos..., esta metáfora tiene consecuencias porque..." }
          ]
        }
      ]
    },
    {
      id: "ES-C2-U2",
      title: "Escrita Criativa de Alto Nível",
      description: "Produção literária, ensaística e crítica em espanhol com voz própria",
      lessons: [
        {
          id: "ES-C2-U2-L1",
          title: "O Ensaio Pessoal — Voz, Argumento e Estilo",
          shadowing: "— El ensayo personal no es un artículo de opinión ni una autobiografía.\n— Es un género híbrido: pensamiento que se convierte en prosa.\n— Montaigne lo inventó para pensar en voz alta.\n— ¿Cuáles son sus marcas distintivas?\n— La primera persona honesta, la digresión como método, el pensamiento en proceso.\n— No se llega a una conclusión: se llega a una pregunta mejor.\n— O a la misma pregunta, formulada con más precisión.",
          memoryPhrases: [
            "el género híbrido = o gênero híbrido",
            "pensar en voz alta = pensar em voz alta",
            "la digresión como método = a digressão como método",
            "el pensamiento en proceso = o pensamento em processo",
            "la primera persona honesta = a primeira pessoa honesta",
            "formular con precisión = formular com precisão"
          ],
          oralProduction: "Explique a diferença entre um ensaio pessoal, um artigo de opinião e uma autobiografia em espanhol.",
          exercises: [
            { id: "ES-C2-U2-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la digresión como método' no ensaio montaigniano?", options: ["Errar ao escrever", "O desvio intencional do tema como forma de exploração e descoberta", "Um tipo de argumento lógico", "Uma técnica para prolongar o texto"], answer: 1, explanation: "Digresión como método = o desvio intencional é parte do pensamento do ensaio. Montaigne divagava para descobrir — a digresão revela o que o argumento direto não alcança." },
            { id: "ES-C2-U2-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el pensamiento en proceso'?", options: ["Pensar de forma rápida", "O pensamento mostrado enquanto se forma, não como produto acabado", "Um processo de edição", "O pensamento científico"], answer: 1, explanation: "Pensamiento en proceso = o pensamento mostrado no ato de se formar. O ensaio pessoal não apresenta conclusões prontas mas o ato vivo de pensar." },
            { id: "ES-C2-U2-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El ensayo no llega a una conclusión, sino a una _____ mejor formulada.' (O ensaio não chega a uma conclusão, mas a uma pergunta mais bem formulada.)", answer: ["pregunta"], hint: "o ensaio termina com uma interrogação melhor", explanation: "Pregunta = pergunta. O ensaio pessoal muitas vezes não responde mas afina a pergunta — o que já é um avanço intelectual." },
            { id: "ES-C2-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'O ensaio pessoal é um gênero híbrido: pensamento que se converte em prosa, com a primeira pessoa como único guia.'", answer: ["El ensayo personal es un género híbrido: pensamiento que se convierte en prosa, con la primera persona como único guía.", "El ensayo personal es un género híbrido: el pensamiento deviene prosa, con la primera persona honesta como única brújula."], explanation: "Se convierte en = se converte em / deviene. La primera persona como único guía/brújula = a primeira pessoa como único guia/bússola." },
            { id: "ES-C2-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio pessoal em espanhol sobre o que significa não saber algo. Mínimo 15 frases.", prompt: "Estilo: primeira pessoa honesta, digressões permitidas, terminar com uma pergunta melhor que a inicial.", hint: "No sé exactamente cuándo empecé a..., lo que me resulta curioso es..., quizás la pregunta no sea..., me pregunto si..." }
          ]
        },
        {
          id: "ES-C2-U2-L2",
          title: "Crítica Literária e Cultural em Espanhol",
          shadowing: "— La última novela de Cercas plantea una pregunta incómoda: ¿puede la ficción alcanzar la verdad que el periodismo no puede?\n— Y la responde de manera ambigua, lo cual es su mayor virtud.\n— ¿No te parece un artificio la ambigüedad calculada?\n— Solo si es gratuita. Aquí la ambigüedad es epistemológica: refleja la naturaleza del conocimiento.\n— Un libro que plantea más preguntas que respuestas.\n— El mejor tipo de libro, ¿no te parece?",
          memoryPhrases: [
            "plantear una pregunta incómoda = colocar uma pergunta incômoda",
            "la ambigüedad calculada = a ambiguidade calculada",
            "epistemológico = epistemológico",
            "la naturaleza del conocimiento = a natureza do conhecimento",
            "artificio = artifício",
            "gratuito = gratuito (sem justificativa)"
          ],
          oralProduction: "Escreva e leia uma crítica de 2 minutos de um livro, filme ou exposição em espanhol.",
          exercises: [
            { id: "ES-C2-U2-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'artificio' em crítica literária?", options: ["Arte artificial", "Recurso ou técnica que parece forçado ou pouco natural", "Habilidade artística", "Obra de arte"], answer: 1, explanation: "Artificio = artifício. Em crítica literária, um recurso 'artificioso' é aquele que parece calculado demais, pouco natural ou gratuito. Pode ser positivo (como 'artificio brillante') ou negativo." },
            { id: "ES-C2-U2-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é uma ambiguidade 'epistemológica'?", options: ["Uma ambiguidade por falta de clareza", "Uma ambiguidade que reflete a natureza incerta do conhecimento em si", "Um erro de interpretação", "Uma ambiguidade estética"], answer: 1, explanation: "Ambigüedad epistemológica = ambiguidade que reflete a natureza do conhecimento — o que podemos e não podemos saber. Não é falta de clareza mas precisão sobre os limites do conhecível." },
            { id: "ES-C2-U2-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La novela _____ preguntas que el lector ha de resolver.' (O romance planta / levanta perguntas que o leitor deve resolver.)", answer: ["plantea", "siembra"], hint: "colocar / semear perguntas", explanation: "Plantea = coloca / planta. Siembra = semeia. Ambos são usados metaforicamente: plantear / sembrar preguntas = levantar questões para o leitor resolver." },
            { id: "ES-C2-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'A ambiguidade calculada da obra não é um artifício gratuito mas um reflexo epistemológico da natureza do conhecimento.'", answer: ["La ambigüedad calculada de la obra no es un artificio gratuito sino un reflejo epistemológico de la naturaleza del conocimiento.", "La ambigüedad deliberada de la obra no constituye un artificio gratuito, sino un reflejo de la naturaleza epistemológica del conocimiento."], explanation: "No es... sino = não é... mas. Reflejo epistemológico = reflexo epistemológico. Naturaleza del conocimiento = natureza do conhecimento." },
            { id: "ES-C2-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma crítica literária completa de um livro que você leu, em espanhol de nível C2. Mínimo 15 frases.", prompt: "Inclua: tese central · análise de forma e conteúdo · recursos estilísticos · comparação com outros autores · avaliação final com nuance", hint: "La novela de... plantea..., su virtud principal es..., sin embargo, cabe señalar..., en comparación con..., en definitiva..." }
          ]
        },
        {
          id: "ES-C2-U2-L3",
          title: "Humor, Ironia e Sátira Sofisticada",
          shadowing: "— El político declaró que el aumento del paro es una 'oportunidad para reinventarse'.\n— Una perla de optimismo involuntario.\n— O voluntario. El lenguaje del poder nunca es inocente.\n— Cierto. Llamar 'flexibilización' al despido libre es sátira sin pretenderlo.\n— El lenguaje que intenta ocultar la realidad acaba revelándola por el absurdo.\n— Karl Kraus lo sabía: 'El idioma es el termómetro de una época.'",
          memoryPhrases: [
            "perla de optimismo involuntario = pérola de otimismo involuntário",
            "el lenguaje del poder nunca es inocente = a linguagem do poder nunca é inocente",
            "sin pretenderlo = sem pretender / sem querer",
            "revelar por el absurdo = revelar pelo absurdo",
            "el termómetro de una época = o termômetro de uma época",
            "sátira sin pretenderlo = sátira sem querer"
          ],
          oralProduction: "Escreva e leia um texto satírico sobre um fenômeno contemporâneo em espanhol.",
          exercises: [
            { id: "ES-C2-U2-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'sátira sin pretenderlo'?", options: ["Sátira intencional", "Quando o discurso sério acaba sendo cômico por seu absurdo involuntário", "Uma piada mal contada", "Ironia suave"], answer: 1, explanation: "Sátira sin pretenderlo = sátira involuntária. Quando o discurso sério e oficial é tão absurdo que acaba sendo cômico sem querer. Muito do discurso político entra nessa categoria." },
            { id: "ES-C2-U2-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el lenguaje del poder nunca es inocente'?", options: ["Os políticos mentem sempre", "As escolhas linguísticas do poder sempre carregam intenção ideológica", "A linguagem é sempre complicada", "O poder usa palavras difíceis"], answer: 1, explanation: "O poder escolhe suas palavras com intenção ideológica: 'flexibilización laboral' em vez de 'precariedad', 'intervención' em vez de 'invasión'. Nunca é linguagem neutra." },
            { id: "ES-C2-U2-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La ironía _____ la realidad revelándola por contraste.' (A ironia ilumina a realidade revelando-a por contraste.)", answer: ["ilumina", "revela", "desnuda"], hint: "verbo para revelar ou iluminar algo", explanation: "Ilumina / revela / desnuda = ilumina / revela / desnuda. A ironia desnuda a realidade ao dizer o contrário do que aparenta." },
            { id: "ES-C2-U2-L3-E4", type: "translation", skill: "writing", question: "Reescreva ironicamente: 'O desemprego aumentou 20%. O ministro disse que é uma oportunidade.'", answer: ["El desempleo creció un 20%. El ministro, con su proverbial optimismo, lo calificó de 'oportunidad histórica para la reinvención personal'.", "El paro aumentó un 20%. El ministro, en un alarde de creatividad eufemística, lo definió como 'una ventana de oportunidad para el autoempoderamiento ciudadano'."], explanation: "Proverbial optimismo = proverbial otimismo. Alarde de creatividad eufemística = exibição de criatividade eufemística. A ironia funciona pelo contraste entre o fato e a linguagem do poder." },
            { id: "ES-C2-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um texto satírico sobre um fenômeno contemporâneo (redes sociais, linguagem política, cultura do trabalho, etc.). Mínimo 12 frases.", prompt: "Use: ironia / eufemismo revelado / exagero absurdo / inversão de valores / humor ácido", hint: "En nuestra avanzada sociedad..., hemos logrado el extraordinario logro de..., lo que antaño se llamaba... ahora se denomina con mucha más elegancia..." }
          ]
        },
        {
          id: "ES-C2-U2-L4",
          title: "Tradução Literária Avançada — Português ↔ Espanhol",
          shadowing: "— Traducir 'saudade' al español es casi imposible.\n— 'Añoranza' aproxima el dolor de la ausencia, pero le falta el componente de lo que nunca existió.\n— Y 'morriña' tiene la misma raíz gallega, pero evoca más lo geográfico.\n— ¿Y 'nostalgia'?\n— Nostalgia viene del griego: dolor por el regreso. Saudade no implica regreso posible.\n— Entonces la única opción es el préstamo.\n— O crear el concepto en el lector mediante el contexto. Eso es lo que hacen los grandes traductores.",
          memoryPhrases: [
            "el préstamo = o empréstimo (linguístico)",
            "la añoranza = a saudade (aprox.)",
            "la morriña = a saudade (gallego)",
            "crear el concepto en el lector = criar o conceito no leitor",
            "mediante el contexto = mediante o contexto",
            "el componente = o componente"
          ],
          oralProduction: "Traduza e comente em espanhol um parágrafo literário de um autor brasileiro de sua escolha.",
          exercises: [
            { id: "ES-C2-U2-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "Qual é a melhor estratégia para traduzir um culturema sem equivalente?", options: ["Omiti-lo", "Usar o empréstimo direto OU criar o conceito no leitor via contexto", "Usar uma nota de rodapé sempre", "Adaptar para a cultura-alvo"], answer: 1, explanation: "As duas melhores estratégias são: 1) empréstimo (manter a palavra original: 'saudade') e 2) criar o conceito no leitor pelo contexto. Notas de rodapé quebram a fluência; omitir empobrece o texto." },
            { id: "ES-C2-U2-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "Por que 'nostalgia' não traduz 'saudade' perfeitamente?", options: ["São sinônimos", "Nostalgia implica regresso possível; saudade pode ser por algo que nunca existiu", "Nostalgia é mais intensa", "São da mesma origem grega"], answer: 1, explanation: "Nostalgia (grego nóstos = regresso + algos = dor) = dor pelo regresso a um lugar/tempo. Saudade pode ser por algo impossível ou que nunca existiu — sua dimensão é mais ampla e existencial." },
            { id: "ES-C2-U2-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La traducción ideal no busca equivalentes sino _____ el concepto en el lector.' (A tradução ideal não busca equivalentes mas criar o conceito no leitor.)", answer: ["crear", "construir", "generar"], hint: "verbo para gerar ou construir algo no leitor", explanation: "Crear / construir / generar el concepto = criar / construir / gerar o conceito. O tradutor literário ideal não encontra equivalentes mas constrói o efeito equivalente." },
            { id: "ES-C2-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza e comente: 'A saudade é uma presença da ausência.' (Manoel de Barros)", answer: ["La saudade es una presencia de la ausencia. [Comentário: El poeta usa el paradoxo 'presencia de la ausencia' para definir lo indefinible. Se mantiene 'saudade' como préstamo porque ningún equivalente español alcanza su profundidad semántica.]"], explanation: "Presencia de la ausencia = presença da ausência. Manter 'saudade' como empréstimo é a escolha mais honesta. O comentário justifica a decisão do tradutor." },
            { id: "ES-C2-U2-L4-E5", type: "free_writing", skill: "writing", question: "Traduza para o espanhol um parágrafo de um autor brasileiro que você admira e escreva um comentário de tradução justificando suas escolhas. Mínimo 15 frases total.", prompt: "Inclua: o texto original · a tradução · comentário sobre escolhas · dificuldades · decisões de domesticação ou extranjerização", hint: "He optado por mantener... porque..., la expresión... no tiene equivalente en español, por lo que..., he decidido domesticar... ya que..." }
          ]
        },
        {
          id: "ES-C2-U2-L5",
          title: "Revisão C2 — O Falante Nativo em Espanhol",
          shadowing: "— Después de todo este camino, ¿qué sientes que te distingue de un nativo?\n— Quizás la conciencia. Un nativo usa la lengua; yo la habito conscientemente.\n— ¿Eso es una desventaja?\n— Y también una ventaja. Tengo acceso a dos sistemas a la vez.\n— Un traductor nativo de dos mundos.\n— Algo así. La mirada del que viene de fuera puede ver lo que el de dentro no nota.\n— El extranjero como revelador.\n— Exactamente. Nabokov escribió mejor en inglés que la mayoría de los nativos.",
          memoryPhrases: [
            "habitar la lengua = habitar a língua",
            "conscientemente = conscientemente",
            "la mirada del que viene de fuera = o olhar de quem vem de fora",
            "el extranjero como revelador = o estrangeiro como revelador",
            "acceso a dos sistemas = acesso a dois sistemas",
            "lo que el de dentro no nota = o que quem está dentro não nota"
          ],
          oralProduction: "Reflita em espanhol sobre o que significa habitar uma segunda língua versus simplesmente usá-la.",
          exercises: [
            { id: "ES-C2-U2-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'habitar la lengua' versus 'usar la lengua'?", options: ["São iguais", "Habitar = viver dentro da língua com consciência plena; usar = instrumento para comunicação", "Habitar é mais básico", "Usar é mais avançado"], answer: 1, explanation: "Habitar la lengua = viver dentro dela, como casa, com consciência e profundidade. Usar = instrumento funcional. O C2 é quando a língua se torna habitat, não ferramenta." },
            { id: "ES-C2-U2-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la mirada del que viene de fuera' como vantagem?", options: ["Ver de longe sem entender", "Perceber o que os nativos não notam por estarem imersos", "Ser externo e neutro", "Não ter preconceitos culturais"], answer: 1, explanation: "La mirada del que viene de fuera = o olhar do estrangeiro. Quem aprende uma língua pode ver suas peculiaridades, belezas e absurdos que os nativos, imersos desde sempre, não percebem." },
            { id: "ES-C2-U2-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Nabokov _____ en inglés mejor que la mayoría de los nativos porque su mirada extranjera revelaba lo que los nativos no veían.' (Nabokov escrevia em inglês melhor que a maioria dos nativos.)", answer: ["escribía", "escribió"], hint: "pretérito ou imperfeito de ESCRIBIR para él", explanation: "Escribía / escribió. Ambos corretos dependendo do tempo que queremos enfatizar. Nabokov, nascido russo, escreveu três de suas maiores obras em inglês." },
            { id: "ES-C2-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'A vantagem do estrangeiro é habitar a língua conscientemente, tendo acesso simultâneo a dois sistemas linguísticos e culturais.'", answer: ["La ventaja del extranjero es habitar la lengua conscientemente, teniendo acceso simultáneo a dos sistemas lingüísticos y culturales.", "La ventaja del hablante extranjero radica en habitar la lengua con conciencia, accediendo simultáneamente a dos sistemas lingüísticos y culturales."], explanation: "Habitar la lengua = habitar a língua. Conscientemente = conscientemente. Teniendo acceso simultáneo = tendo acesso simultâneo." },
            { id: "ES-C2-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio pessoal sobre o que significa para você chegar ao C2 em espanhol. O que mudou? O que você habita agora que antes era estrangeiro? Mínimo 15 frases.", prompt: "Estilo: ensaio pessoal. Primeira pessoa honesta. Digressões permitidas. Terminar com uma pergunta ou reflexão aberta.", hint: "Hubo un momento en que el español dejó de ser..., ahora cuando hablo, no pienso..., lo que más me sorprende es que..., me pregunto si algún día..." }
          ]
        }
      ]
    }
  ]
};
