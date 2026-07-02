export const CURRICULUM_ES_C1_PART1 = {
  units: [
    {
      id: "ES-C1-U1",
      title: "Domínio Lingüístico Total — Precisión y Matiz",
      description: "Control total del idioma con precisión y naturalidad en cualquier contexto",
      lessons: [
        {
          id: "ES-C1-U1-L1",
          title: "Perífrasis Verbales Avanzadas",
          shadowing: "— Llevo tiempo dándole vueltas a esa propuesta.\n— ¿Y qué has concluido?\n— Que hay que ponerse a trabajar cuanto antes. Llevamos demasiado tiempo sin hacer nada.\n— ¿No te da por abandonar a veces?\n— Me da por cuestionarlo todo, pero acabo volviendo al mismo punto.\n— Así que sigues sin decidirte.\n— Sigo pensando, vamos. Que no es poco.",
          memoryPhrases: [
            "llevar + gerundio = estar + gerundio (duración)",
            "ponerse a + inf. = começar a (de repente)",
            "darle vueltas a algo = ficar ruminando algo",
            "dar por + inf. = ter vontade de / dar para",
            "acabar + gerundio = acabar + gerundio",
            "seguir sin + inf. = continuar sem + inf."
          ],
          oralProduction: "Use 5 perífrases verbais avançadas para descrever um projeto que você está desenvolvendo.",
          exercises: [
            { id: "ES-C1-U1-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual é o significado de 'llevo tres años estudiando español'?", options: ["Estudiei por três anos", "Há três anos que estudo espanhol (continua)", "Estudiarei por três anos", "Terminei de estudar há três anos"], answer: 1, explanation: "Llevar + gerúndio = faz tempo que + verbo (ação que continua no presente). Indica duração de uma ação que ainda está em curso." },
            { id: "ES-C1-U1-L1-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença entre 'empezar a' e 'ponerse a'?", options: ["São iguais", "'Ponerse a' implica início súbito ou com esforço; 'empezar a' é mais neutro", "'Empezar a' é mais formal", "'Ponerse a' é para ações físicas"], answer: 1, explanation: "'Ponerse a trabajar' implica começar de forma decidida ou súbita. 'Empezar a trabajar' é neutro. 'Ponerse a' tem conotação de início enérgico." },
            { id: "ES-C1-U1-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ sin entender por qué me rechazaron.' (Continuo sem entender por que me rejeitaram.)", answer: ["Sigo"], hint: "perífrasis de continuidade com negação", explanation: "Sigo sin entender = continuo sem entender. SEGUIR + sin + infinitivo = continuar sem fazer algo." },
            { id: "ES-C1-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Faz horas que fico pensando no assunto e acabo sempre voltando à mesma conclusão.'", answer: ["Llevo horas dándole vueltas al asunto y acabo siempre volviendo a la misma conclusión.", "Llevo horas pensando en el asunto y siempre acabo llegando a la misma conclusión."], explanation: "Llevo horas + gerúndio = faz horas que. Acabo volviendo = acabo voltando. Dándole vueltas = pensando, ruminando." },
            { id: "ES-C1-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um texto usando pelo menos 6 perífrases verbais diferentes em contextos naturais. Mínimo 10 frases.", prompt: "Inclua: llevar + gerundio · ponerse a · acabar + gerundio · seguir sin · darle vueltas · volver a + inf.", hint: "Llevo tiempo queriendo..., al final me puse a..., acabo siempre..., sigo sin entender..., le doy vueltas a..." }
          ]
        },
        {
          id: "ES-C1-U1-L2",
          title: "Modalidade e Evidencialidade — Dever, Poder, Querer",
          shadowing: "— Debe de haber salido ya. No coge el teléfono.\n— O puede que esté ocupado.\n— No, debería estar disponible a estas horas.\n— Quizás haya tenido algún problema.\n— Puede que sí. En todo caso, habrá que esperar.\n— ¿No podrías llamar a alguien que lo conozca?\n— Podría, pero prefiero no agobiarle.",
          memoryPhrases: [
            "debe de + inf. = deve (dedução)",
            "debería + inf. = deveria (expectativa)",
            "puede que + subj. = pode ser que",
            "habrá que + inf. = vai ser preciso",
            "podría = poderia (condicional)",
            "deber vs deber de (obrigação vs dedução)"
          ],
          oralProduction: "Especule sobre o que pode estar acontecendo em 3 situações usando deber de, puede que e quizás.",
          exercises: [
            { id: "ES-C1-U1-L2-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença entre 'debe hacer' e 'debe de hacer'?", options: ["São iguais", "'Debe hacer' = obrigação; 'debe de hacer' = probabilidade/dedução", "'Debe de' é mais formal", "'Debe' é para o passado"], answer: 1, explanation: "'Debe hacer' = tem obrigação de fazer. 'Debe de hacer' = provavelmente faz (dedução). Distinção importante no C1!" },
            { id: "ES-C1-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'No contesta. _____ estar durmiendo.' (Provavelmente está dormindo.)", options: ["Debe hacer", "Debe de estar", "Debería estar", "Podría ser"], answer: 1, explanation: "Debe de estar = deve estar (dedução). Para especulação sobre o presente: debe de + infinitivo composto ou simples." },
            { id: "ES-C1-U1-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ que haya perdido el tren.' (Pode ser que tenha perdido o trem.)", answer: ["Puede"], hint: "puede que + subjuntivo", explanation: "Puede que + subjuntivo = pode ser que. 'Puede que haya perdido' = pode ser que tenha perdido." },
            { id: "ES-C1-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Deveria estar aqui às 9h. Provavelmente teve algum problema no trânsito.'", answer: ["Debería estar aquí a las 9. Debe de haber tenido algún problema de tráfico.", "Debería estar aquí a las 9. Puede que haya tenido algún problema con el tráfico."], explanation: "Debería estar = deveria estar (expectativa não cumprida). Debe de haber tenido = provavelmente teve (dedução)." },
            { id: "ES-C1-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um texto especulando sobre as causas de um problema ou situação desconhecida, usando todos os modais estudados. Mínimo 8 frases.", prompt: "Cenário: Um colega não apareceu para uma reunião importante. Especule o que pode ter acontecido.", hint: "Debe de haber..., puede que..., debería..., quizás..., habrá que..., podría ser que..." }
          ]
        },
        {
          id: "ES-C1-U1-L3",
          title: "Subjuntivo Composto e Sequência de Tempos",
          shadowing: "— Me alegra que hayas podido venir.\n— Temía que no hubiera plazas.\n— Ojalá hubiera venido antes. Me perdí el comienzo.\n— Es una pena que no hayas llegado más temprano.\n— Sí, aunque dudo que hayan dicho algo importante todavía.\n— Espero que haya valido la pena el desplazamiento.\n— Sin duda. Aunque hubiera sido más corto, habría valido la pena.",
          memoryPhrases: [
            "haya + participio = subjuntivo perfecto",
            "hubiera + participio = subjuntivo pluscuamperfecto",
            "me alegra que hayas = fico feliz que você tenha",
            "es una pena que no hayas = é uma pena que você não tenha",
            "ojalá hubiera = tomara que tivesse",
            "aunque hubiera sido = mesmo que tivesse sido"
          ],
          oralProduction: "Expresse reações a 5 situações passadas usando o subjuntivo composto.",
          exercises: [
            { id: "ES-C1-U1-L3-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Me alegra que _____ (llegar) bien.' (Fico feliz que você tenha chegado bem.)", options: ["llegaras", "hayas llegado", "llegas", "llegarías"], answer: 1, explanation: "Hayas llegado = tenha chegado. Subjuntivo perfecto (haya + participio) para ação passada em relação ao verbo principal presente." },
            { id: "ES-C1-U1-L3-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Era una pena que no _____ (poder) venir ayer.'", options: ["hayas podido", "puedas", "hubieras podido", "podrías"], answer: 2, explanation: "Hubieras podido = tivesses podido. Verbo principal no passado (era) → subjuntivo pluscuamperfecto (hubiera + participio)." },
            { id: "ES-C1-U1-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Ojalá _____ (saber) la respuesta.' (Tomara que você soubesse / tivesse sabido a resposta.)", answer: ["hubieras sabido", "hubiera sabido"], hint: "desejo sobre algo que não aconteceu no passado", explanation: "Ojalá hubieras/hubiera sabido = tomara que tivesses/tivesse sabido. Desejo impossível sobre o passado → pluscuamperfecto de subjuntivo." },
            { id: "ES-C1-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'É uma pena que ele não tenha podido vir. Tomara que tivesse estado aqui para ver isso.'", answer: ["Es una pena que no haya podido venir. Ojalá hubiera estado aquí para ver esto.", "Es una lástima que no haya podido venir. Ojalá hubiera podido estar aquí para ver esto."], explanation: "No haya podido = não tenha podido (subj. perfecto). Ojalá hubiera estado = tomara que tivesse estado (subj. pluscuamperfecto)." },
            { id: "ES-C1-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre reações a eventos passados usando subjuntivo perfecto e pluscuamperfecto. Mínimo 10 frases.", prompt: "Inclua: alegria e tristeza por ações passadas · desejos sobre o passado · dúvidas sobre o passado", hint: "Me alegra que hayas..., es una pena que no hubieras..., ojalá hubiera..., dudo que haya..., no creo que hubiera..." }
          ]
        },
        {
          id: "ES-C1-U1-L4",
          title: "Orações Concessivas e Adversativas Avançadas",
          shadowing: "— Por más que lo intento, no consigo entenderle.\n— Es que habla muy rápido. Y encima con acento gallego.\n— Con todo, es un conferenciante brillante.\n— Aun así, me cuesta seguirle. A pesar de que lo conozco de hace años.\n— Pues a mí me parece fascinante, pese a la dificultad.\n— Cada uno es cada uno. Sea como fuere, el contenido es excelente.",
          memoryPhrases: [
            "por más que + subj. = por mais que",
            "con todo = mesmo assim / apesar de tudo",
            "aun así = mesmo assim",
            "pese a (que) = apesar de (que)",
            "sea como fuere = seja como for (futuro subj.)",
            "a pesar de que = apesar de que"
          ],
          oralProduction: "Use 5 conectores concessivos diferentes para falar sobre algo que admira apesar dos seus defeitos.",
          exercises: [
            { id: "ES-C1-U1-L4-E1", type: "multiple_choice", skill: "grammar", question: "Complete: '_____ lo estudie, no lo entiendo.' (Por mais que eu estude, não entendo.)", options: ["Aunque", "Por más que", "A pesar de que", "Pese a que"], answer: 1, explanation: "Por más que + subjuntivo = por mais que. Estrutura concessiva que indica esforço máximo sem resultado." },
            { id: "ES-C1-U1-L4-E2", type: "multiple_choice", skill: "grammar", question: "O que significa 'sea como fuere'?", options: ["Seja como for (futuro do subjuntivo — forma arcaica elegante)", "É como é", "Como quiser", "Seja lá o que for"], answer: 0, explanation: "Sea como fuere = seja como for. 'Fuere' é o futuro do subjuntivo, forma praticamente arcaica em espanhol moderno mas que se mantém em expressões fixas e registros formais/literários." },
            { id: "ES-C1-U1-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ todas las dificultades, siguió adelante.' (Apesar de todas as dificuldades, continuou.)", answer: ["Pese a", "A pesar de"], hint: "conector concessivo sem verbo", explanation: "Pese a / A pesar de + substantivo (sem verbo conjugado). Com verbo: pese a que / a pesar de que + indicativo ou subjuntivo." },
            { id: "ES-C1-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Por mais que tente, não consigo convencê-lo. Mesmo assim, continuo tentando.'", answer: ["Por más que lo intente, no consigo convencerle. Aun así, sigo intentándolo.", "Por más que intente, no logro convencerle. Con todo, continúo intentándolo."], explanation: "Por más que intente = por mais que tente (subj.). Aun así / Con todo = mesmo assim. Sigo intentándolo = continuo tentando." },
            { id: "ES-C1-U1-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um texto sobre uma situação em que perseverou apesar das dificuldades, usando conectores concessivos variados. Mínimo 10 frases.", prompt: "Inclua: por más que · con todo · aun así · pese a que · aunque · a pesar de · sea como fuere", hint: "Por más que intenté..., con todo, seguí..., aun así no me rendí..., pese a que todo parecía..., sea como fuere..." }
          ]
        },
        {
          id: "ES-C1-U1-L5",
          title: "Elipse e Economia Linguística",
          shadowing: "— ¿Vas a venir mañana?\n— Depende. ¿Tú?\n— Yo sí. Aunque si no hay nadie...\n— Habrá gente. Siempre la hay.\n— Ojalá. El año pasado éramos poquísimos.\n— Este año, más. Ya verás.\n— ¿Seguro?\n— Segurísimo. Te lo digo yo.",
          memoryPhrases: [
            "yo sí / yo no = eu sim / eu não (resposta elíptica)",
            "¿tú? = e você? (elipse total)",
            "ya verás = já vai ver",
            "te lo digo yo = pode ter certeza / eu te digo",
            "siempre la hay = sempre tem (elipse do substantivo)",
            "segurísimo = absolutamente certo (superlativo)"
          ],
          oralProduction: "Pratique diálogos ultra-compactos em espanhol usando elipse de forma natural.",
          exercises: [
            { id: "ES-C1-U1-L5-E1", type: "multiple_choice", skill: "grammar", question: "No diálogo '¿Vienes? — Depende', o que está omitido na resposta?", options: ["O sujeito", "O verbo e o complemento ('de muchas cosas' ou similar)", "O objeto", "Nada está omitido"], answer: 1, explanation: "'Depende' é uma elipse de 'Depende de muchas cosas' ou 'Depende de si habrá transporte' etc. Em espanhol coloquial, a elipse é muito frequente." },
            { id: "ES-C1-U1-L5-E2", type: "multiple_choice", skill: "grammar", question: "O que significa 'siempre la hay' no contexto de 'habrá gente, siempre la hay'?", options: ["Sempre tem gente (a = gente, omitida no segundo membro)", "A gente sempre está", "Sempre há alguma", "Sempre vai ter"], answer: 0, explanation: "'Siempre la hay' = sempre tem (gente). 'La' é pronome que retoma 'gente' (feminino singular). Elipse do substantivo substituído por pronome." },
            { id: "ES-C1-U1-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete de forma elíptica: '¿Vendrás? — _____ .' (Sim, venho.)", answer: ["Sí", "Claro", "Por supuesto"], hint: "resposta mínima afirmativa em espanhol", explanation: "Sí / Claro / Por supuesto — todas são respostas elípticas válidas. Em espanhol não é necessário repetir o verbo como no inglês ('Yes, I will')." },
            { id: "ES-C1-U1-L5-E4", type: "translation", skill: "writing", question: "Reescreva este diálogo de forma mais natural e elíptica em espanhol: '¿Tú vas a venir? — Yo voy a venir si hay tiempo. ¿Tú vas a venir también?'", answer: ["¿Vienes? — Si tengo tiempo, sí. ¿Y tú?", "¿Vienes? — Depende del tiempo. ¿Tú?"], explanation: "Elipse: suprimir pronomes desnecessários, encurtar perguntas repetidas, usar respostas mínimas. Resultado muito mais natural." },
            { id: "ES-C1-U1-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo completamente natural e compacto em espanhol C1, usando elipse, respostas mínimas e expressões idiomáticas. Mínimo 12 falas.", prompt: "Tema: dois amigos se encontram depois de muito tempo e se atualizam sobre as suas vidas", hint: "Usa: sí/no simples, ¿y tú?, depende, ya verás, te lo digo yo, ¡venga!, ¿cómo que...?" }
          ]
        }
      ]
    },
    {
      id: "ES-C1-U2",
      title: "Registro Culto e Literatura",
      description: "Domínio do registro culto, literário e especializado em espanhol",
      lessons: [
        {
          id: "ES-C1-U2-L1",
          title: "O Ensaio Literário em Espanhol — Unamuno e Ortega",
          shadowing: "— Unamuno decía que el español lleva la tragedia en la sangre.\n— ¿No es eso un tópico?\n— Puede que lo sea, pero Unamuno lo convierte en categoría filosófica.\n— ¿Y Ortega y Gasset?\n— Ortega aborda España desde una perspectiva histórica y europea.\n— ¿Son compatibles sus visiones?\n— En muchos aspectos no, pero ambos plantean la cuestión de la identidad española con una lucidez sin parangón.",
          memoryPhrases: [
            "llevar en la sangre = ter no sangue",
            "convertir en categoría = elevar a categoria",
            "abordar desde = abordar a partir de",
            "plantear la cuestión = colocar a questão",
            "con lucidez sin parangón = com lucidez sem par",
            "un tópico = um lugar-comum / um clichê"
          ],
          oralProduction: "Analise um ensaio ou pensador hispânico que você conhece usando vocabulário crítico em espanhol.",
          exercises: [
            { id: "ES-C1-U2-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'un tópico' em contexto literário/filosófico?", options: ["Um tópico de conversa", "Um lugar-comum / clichê / ideia recorrente e desgastada", "Um tema filosófico", "Um capítulo de um livro"], answer: 1, explanation: "Un tópico = um lugar-comum / clichê. 'Es un tópico' = é um clichê. Diferente de 'topic' em inglês que seria 'tema'. Falso cognato importante!" },
            { id: "ES-C1-U2-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'sin parangón'?", options: ["Sem pausa", "Sem comparação / sem igual / incomparável", "Sem parâmetro", "Sem paralelo (arcaico)"], answer: 1, explanation: "Sin parangón = sem igual / incomparável / sem paralelo. 'Una lucidez sin parangón' = uma lucidez incomparável. Expressão culta de alto registro." },
            { id: "ES-C1-U2-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El autor _____ la cuestión de la identidad desde una perspectiva novedosa.' (O autor coloca a questão da identidade...)", answer: ["plantea"], hint: "verbo plantear (colocar/propor uma questão)", explanation: "Plantea = coloca / propõe. Plantear = colocar uma questão, propor um problema para reflexão. Verbo muito usado em contextos acadêmicos e literários." },
            { id: "ES-C1-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Unamuno eleva o que poderia ser um lugar-comum a categoria filosófica, com uma lucidez sem igual.'", answer: ["Unamuno convierte lo que podría ser un tópico en categoría filosófica, con una lucidez sin parangón.", "Unamuno eleva lo que podría ser un lugar común a categoría filosófica, con una lucidez sin par."], explanation: "Convierte... en = converte... em / eleva... a. Podría ser = poderia ser. Sin parangón = sem igual." },
            { id: "ES-C1-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio literário curto sobre a identidade brasileira, à maneira de Unamuno ou Ortega. Mínimo 12 frases.", prompt: "Inclua: tese central · paradoxos · perspectiva histórica · reflexão filosófica · estilo culto", hint: "Brasil lleva en su sangre..., la cuestión de la identidad brasileña plantea..., lo que podría parecer un tópico es en realidad..." }
          ]
        },
        {
          id: "ES-C1-U2-L2",
          title: "Figuras de Linguagem e Estilística Avanzada",
          shadowing: "— El texto comienza in medias res, lo que genera una tensión narrativa inmediata.\n— Además, el uso del oxímoron 'silencio estruendoso' condensa la paradoja central.\n— ¿Y la anáfora?\n— Sí, la repetición de 'nunca' al inicio de cada párrafo crea un ritmo hipnótico.\n— ¿Podría considerarse también una aliteración?\n— En algunos pasajes sí. La acumulación de fricativas suaviza el tono.\n— Un texto extraordinariamente trabajado.",
          memoryPhrases: [
            "in medias res = in medias res (começo no meio da ação)",
            "el oxímoron = o oxímoro",
            "la anáfora = a anáfora (repetição no início)",
            "la aliteración = a aliteração",
            "la acumulación = a acumulação",
            "las fricativas = as fricativas"
          ],
          oralProduction: "Identifique e nomeie 5 figuras de linguagem em um texto literário em espanhol.",
          exercises: [
            { id: "ES-C1-U2-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é um 'oxímoron'?", options: ["Repetição de palavras", "Combinação de termos contraditórios ('silencio estruendoso')", "Comparação entre dois elementos", "Personificação de objetos"], answer: 1, explanation: "Oxímoron = combinação de termos contraditórios ou paradoxais: 'oscura claridad', 'silencio estruendoso', 'hielo abrasador'. Cria tensão expressiva e paradoxo." },
            { id: "ES-C1-U2-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la anáfora'?", options: ["Repetição de sons", "Repetição de palavras ou estruturas no início de versos ou frases consecutivas", "Figura de ironia", "Ausência de palavras"], answer: 1, explanation: "Anáfora = repetição de palavras/estruturas no início de versos ou orações consecutivas: 'Nunca te vi partir, nunca te vi llegar, nunca te olvidé'." },
            { id: "ES-C1-U2-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El relato comienza _____ _____, en el momento más álgido de la acción.' (O relato começa in medias res, no momento mais intenso.)", answer: ["in medias res"], hint: "expressão latina para início no meio da ação", explanation: "In medias res = no meio da ação. Técnica narrativa de começar no ponto mais intenso, sem contextualização prévia." },
            { id: "ES-C1-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'A repetição anafórica de 'nunca' no início de cada estrofe cria um ritmo hipnótico que condensa o tema da perda.'", answer: ["La repetición anafórica de 'nunca' al inicio de cada estrofa crea un ritmo hipnótico que condensa el tema de la pérdida.", "La anáfora de 'nunca' al principio de cada estrofa genera un ritmo hipnótico que sintetiza el tema de la pérdida."], explanation: "Repetición anafórica = repetição anafórica. Al inicio = no início. Condensa = condensa / sintetiza. Pérdida = perda." },
            { id: "ES-C1-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma análise estilística de um poema ou texto literário que você conhece, identificando e comentando pelo menos 5 figuras de linguagem. Mínimo 10 frases.", prompt: "Inclua: tipo de texto · figuras identificadas · efeito de cada figura · relação com o tema · avaliação geral", hint: "El texto utiliza..., la anáfora de... crea un efecto de..., el oxímoron... condensa..., la aliteración en... suaviza/intensifica..." }
          ]
        },
        {
          id: "ES-C1-U2-L3",
          title: "Espanhol Científico e Técnico Avanzado",
          shadowing: "— Los resultados apuntan a una correlación significativa entre ambas variables.\n— ¿Cómo se puede interpretar eso?\n— Que existe una relación estadísticamente relevante, aunque no necesariamente causal.\n— ¿Y el margen de error?\n— Es del dos por ciento, lo cual es aceptable para este tipo de estudio.\n— ¿Qué implicaciones tiene para la hipótesis inicial?\n— Que deberemos reformularla parcialmente. Los datos no la refutan, pero sí la matizan.",
          memoryPhrases: [
            "apuntan a = apontam para",
            "la correlación = a correlação",
            "estadísticamente relevante = estatisticamente relevante",
            "no necesariamente causal = não necessariamente causal",
            "el margen de error = a margem de erro",
            "matizar = matizar / nuançar"
          ],
          oralProduction: "Apresente os resultados de um estudo imaginário em espanhol usando linguagem científica precisa.",
          exercises: [
            { id: "ES-C1-U2-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'los datos no la refutan, pero sí la matizan'?", options: ["Os dados contradizem a hipótese", "Os dados não contradizem a hipótese, mas a tornam mais nuançada", "Os dados confirmam a hipótese", "Os dados são irrelevantes"], answer: 1, explanation: "Matizar = nuançar, qualificar, tornar mais preciso. 'Los datos matizan la hipótesis' = os dados não a contradizem mas adicionam nuances, qualificações." },
            { id: "ES-C1-U2-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "Qual é a diferença entre 'correlación' e 'causalidad'?", options: ["São iguais", "Correlação = relação estatística; causalidade = uma causa que gera um efeito", "Correlação é mais forte que causalidade", "Causalidade é mais frequente"], answer: 1, explanation: "Correlación ≠ causalidad. Dois fenômenos podem estar correlacionados sem que um cause o outro. Confundi-los é um dos erros mais comuns em ciência." },
            { id: "ES-C1-U2-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Los resultados _____ a la necesidad de revisar el modelo teórico.' (Os resultados apontam para a necessidade de revisar o modelo.)", answer: ["apuntan"], hint: "verbo que indica direção ou indicação", explanation: "Apuntan a = apontam para. Apuntar a = apontar para / indicar. Muito usado em contextos científicos para indicar o que os dados sugerem." },
            { id: "ES-C1-U2-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Os resultados apontam para uma correlação significativa, embora não necessariamente causal, entre as duas variáveis estudadas.'", answer: ["Los resultados apuntan a una correlación significativa, aunque no necesariamente causal, entre las dos variables estudiadas.", "Los datos apuntan a una correlación significativa, si bien no necesariamente causal, entre ambas variables."], explanation: "Apuntan a = apontam para. Aunque no necesariamente = embora não necessariamente. Ambas variables = ambas as variáveis." },
            { id: "ES-C1-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva o resumo (abstract) de um artigo científico imaginário em espanhol. Mínimo 10 frases.", prompt: "Inclua: objetivo do estudo · metodologia · resultados · conclusões · limitações · implicações", hint: "El presente estudio tiene como objetivo..., se utilizó una metodología..., los resultados apuntan a..., estos hallazgos sugieren que..., las limitaciones incluyen..." }
          ]
        },
        {
          id: "ES-C1-U2-L4",
          title: "Pragmática — O Não Dito em Espanhol",
          shadowing: "— ¿Le has dicho algo a Marta sobre lo que pasó?\n— Bueno... le he comentado algo.\n— ¿Y qué te dijo?\n— Pues... que ya lo veremos.\n— O sea, que no está de acuerdo.\n— No he dicho eso.\n— No, pero se sobreentiende.\n— Puede que tengas razón. Hay cosas que no hacen falta decirlas.",
          memoryPhrases: [
            "bueno... = bem... (hesitação, evasão)",
            "ya lo veremos = já veremos (rejeição suave)",
            "o sea = ou seja / quer dizer",
            "se sobreentiende = subentende-se",
            "no hace falta decirlo = não é preciso dizer",
            "comentar algo = mencionar algo (eufemismo)"
          ],
          oralProduction: "Interprete o que realmente está sendo comunicado em 3 diálogos ambíguos em espanhol.",
          exercises: [
            { id: "ES-C1-U2-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "Quando alguém diz 'ya lo veremos' em resposta a uma proposta, o que geralmente comunica?", options: ["Entusiasmo", "Rejeição suave ou dúvida / 'não sei / provavelmente não'", "Confirmação", "Necessidade de mais informação"], answer: 1, explanation: "'Ya lo veremos' = já veremos. Em pragmática, geralmente comunica ceticismo, rejeição suave ou procrastinação. Raramente indica entusiasmo genuíno." },
            { id: "ES-C1-U2-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'se sobreentiende' em espanhol?", options: ["Se entende muito", "Se subentende / está implícito / não precisa ser dito", "Se entende claramente", "Precisa ser explicado"], answer: 1, explanation: "Se sobreentiende = subentende-se / está implícito. 'Lo que no se dice pero se sobreentiende' = o que não é dito mas está implícito. Central na pragmática." },
            { id: "ES-C1-U2-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'No hace _____ que lo expliques, ya se sobreentiende.' (Não é preciso que você explique, já se subentende.)", answer: ["falta"], hint: "no hace falta = não é preciso", explanation: "No hace falta = não é preciso / não é necessário. 'No hace falta que' + subjuntivo = não é preciso que." },
            { id: "ES-C1-U2-L4-E4", type: "translation", skill: "writing", question: "Interprete e reescreva de forma explícita: 'Bueno, lo que me comentaste... ya lo veremos. No sé, hay cosas...'", answer: ["Creo que no estoy de acuerdo con lo que me dijiste y probablemente no lo voy a hacer, aunque no quiero decírtelo directamente.", "Lo que me dijiste me genera dudas y quizás no lo acepte, pero no quiero ser directo/a al respecto."], explanation: "A pragmática do discurso evasivo: 'Bueno' = hesitação, 'ya lo veremos' = provavelmente não, 'hay cosas' = elipse intencional que evita explicitar a rejeição." },
            { id: "ES-C1-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escreva dois versões de um mesmo diálogo: uma versão direta e uma versão pragmaticamente indireta, como se faria em espanhol natural. Mínimo 8 falas cada.", prompt: "Situação: alguém pede emprestado dinheiro e a outra pessoa não quer emprestar, mas não quer ser rude.", hint: "Versão direta: 'No, no puedo.' Versão indireta: 'Bueno... es que ahora mismo..., ya sabes..., lo que pasa es que...'" }
          ]
        },
        {
          id: "ES-C1-U2-L5",
          title: "Expressão Oral Avanzada — Conferências e Discursos",
          shadowing: "— Señoras y señores, es para mí un honor dirigirme a ustedes en este acto tan significativo.\n— A lo largo de mi intervención, intentaré abordar tres aspectos fundamentales que, en mi opinión, definen el reto que tenemos ante nosotros.\n— Permítanme comenzar con una reflexión que quizás les resulte provocadora.\n— La pregunta no es si podemos hacerlo, sino si estamos dispuestos a pagar el precio.\n— Con esto en mente, paso a desarrollar el primero de mis argumentos.",
          memoryPhrases: [
            "es para mí un honor = é para mim uma honra",
            "a lo largo de mi intervención = ao longo da minha intervenção",
            "abordar tres aspectos = abordar três aspectos",
            "el reto que tenemos ante nosotros = o desafio que temos diante de nós",
            "permítanme comenzar = permita-me começar",
            "paso a desarrollar = passo a desenvolver"
          ],
          oralProduction: "Faça um discurso de abertura de 3 minutos para uma conferência sobre o futuro do Brasil em espanhol.",
          exercises: [
            { id: "ES-C1-U2-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se abre um discurso formal de alto nível em espanhol?", options: ["Hola a todos", "Señoras y señores, es para mí un honor...", "Buenas tardes, estoy aquí para...", "Antes de empezar..."], answer: 1, explanation: "'Señoras y señores, es para mí un honor/placer dirigirme a ustedes' é a abertura mais formal e elegante para discursos de alto nível." },
            { id: "ES-C1-U2-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se anuncia a transição para o próximo ponto num discurso formal?", options: ["Y ahora...", "Paso a desarrollar / A continuación me referiré a / Quisiera ahora abordar", "Ok, el siguiente punto es...", "Voy a hablar de..."], answer: 1, explanation: "'Paso a desarrollar', 'A continuación me referiré a', 'Quisiera ahora abordar' são as transições mais elegantes em discursos formais de nível C1." },
            { id: "ES-C1-U2-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El _____ que tenemos ante nosotros requiere valentía y determinación.' (O desafio que temos diante de nós requer coragem.)", answer: ["reto"], hint: "desafio em espanhol", explanation: "El reto = o desafio. 'Reto' é mais vigoroso que 'desafío' (sinônimo). Muito usado em discursos motivacionais e políticos." },
            { id: "ES-C1-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Ao longo desta intervenção, abordarei três aspectos fundamentais que, na minha opinião, definem o desafio que temos diante de nós.'", answer: ["A lo largo de esta intervención, abordaré tres aspectos fundamentales que, en mi opinión, definen el reto que tenemos ante nosotros.", "A lo largo de mi intervención, voy a abordar tres aspectos fundamentales que, según mi criterio, definen el reto que tenemos por delante."], explanation: "A lo largo de = ao longo de. Abordaré = abordarei. Reto que tenemos ante nosotros = desafio que temos diante de nós." },
            { id: "ES-C1-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva o discurso completo de abertura de uma conferência internacional sobre educação bilíngue. Mínimo 15 frases.", prompt: "Inclua: abertura formal · apresentação dos 3 pontos · reflexão inicial provocadora · transições elegantes · encerramento memorável", hint: "Señoras y señores..., a lo largo de mi intervención..., permítanme comenzar con..., paso a desarrollar..., quisiera concluir con..." }
          ]
        }
      ]
    }
  ]
};
