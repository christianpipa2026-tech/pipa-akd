export const CURRICULUM_ES_B2_PART1 = {
  units: [
    {
      id: "ES-B2-U1",
      title: "Gramática Avanzada — Matices y Precisión",
      description: "Domínio de estruturas gramaticais complexas e matizes do espanhol",
      lessons: [
        {
          id: "ES-B2-U1-L1",
          title: "Subjuntivo vs Indicativo — Matices Sutis",
          shadowing: "— Busco un apartamento que tenga terraza.\n— ¿Y si no encuentras uno que la tenga?\n— Pues buscaré hasta que encuentre uno que me convenza.\n— Conozco un agente que tiene muchos pisos con terraza.\n— ¿Conoces alguno que esté cerca del metro también?\n— Hay uno que está perfecto. Creo que te va a gustar.",
          memoryPhrases: [
            "busco algo que + subj. = procuro algo que (indefinido, hipotético)",
            "busco algo que + indic. = procuro algo que (definido, existe)",
            "el que quiera = quem quiser",
            "sea como sea = seja como for",
            "haga lo que haga = faça o que fizer",
            "donde quiera que = onde quer que"
          ],
          oralProduction: "Explique a diferença entre 'busco un piso que tiene terraza' e 'busco un piso que tenga terraza' com exemplos.",
          exercises: [
            { id: "ES-B2-U1-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença de significado? A) 'Busco un médico que habla ruso' B) 'Busco un médico que hable ruso'", options: ["São iguais", "A: existe um médico específico que fala russo. B: procuro qualquer médico que fale russo (hipotético)", "A é mais formal", "B é mais educado"], answer: 1, explanation: "A (indicativo 'habla') = existe um médico específico em mente. B (subjuntivo 'hable') = qualquer médico que possua essa característica (hipotético, não específico). Diferença crucial no B2!" },
            { id: "ES-B2-U1-L1-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Haga lo que _____ (hacer), siempre se equivoca.'", options: ["hace", "haga", "hará", "haría"], answer: 1, explanation: "Haga = faça (subj.). 'Haga lo que haga' = faça o que fizer. Estruturas com subjuntivo duplicado: sea como sea, diga lo que diga, pase lo que pase." },
            { id: "ES-B2-U1-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'El que _____ (querer) venir, que venga.' (Quem quiser vir, que venha.)", answer: ["quiera"], hint: "subjuntivo de QUERER para el que (=quem)", explanation: "El que quiera = quem quiser. 'El que' + subjuntivo = quem + subjuntivo futuro português." },
            { id: "ES-B2-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Faça o que fizer, não vou mudar de opinião. Seja como for, já decidi.'", answer: ["Haga lo que haga, no voy a cambiar de opinión. Sea como sea, ya he decidido.", "Haga lo que haga, no cambiaré de opinión. Sea como sea, ya decidí."], explanation: "Haga lo que haga = faça o que fizer. Sea como sea = seja como for. Estruturas de subjuntivo duplicado muito comuns no B2." },
            { id: "ES-B2-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva 5 pares de frases mostrando a diferença entre subjuntivo (hipotético) e indicativo (definido) na mesma estrutura.", prompt: "Exemplo: 'Quiero un jefe que me respete' vs 'Tengo un jefe que me respeta'", hint: "Busco, quiero, necesito, prefiero + que + subj./indic." }
          ]
        },
        {
          id: "ES-B2-U1-L2",
          title: "Orações Relativas Reduzidas e Construcciones con Infinitivo",
          shadowing: "— El proyecto a desarrollar es muy ambicioso.\n— ¿Quién se encargará de coordinarlo?\n— La persona a cargo será Ana. Es la indicada para liderarlo.\n— ¿Y los recursos a utilizar?\n— Están por definir todavía. Hay que esperar.\n— Parece complicado de gestionar.\n— Al ser tan grande, sí. Pero estamos para eso.",
          memoryPhrases: [
            "a + infinitivo = para + infinitivo / a ser + participado",
            "el proyecto a desarrollar = o projeto a desenvolver",
            "pendiente de hacer = pendente de fazer",
            "difícil de entender = difícil de entender",
            "fácil de manejar = fácil de manusear",
            "imposible de ignorar = impossível de ignorar"
          ],
          oralProduction: "Descreva um projeto usando orações relativas reduzidas: 'los objetivos a alcanzar', 'los problemas a resolver'...",
          exercises: [
            { id: "ES-B2-U1-L2-E1", type: "multiple_choice", skill: "grammar", question: "O que significa 'el informe a entregar mañana'?", options: ["O relatório que entrego amanhã", "O relatório que deve ser entregue amanhã", "O relatório entregado amanhã", "O relatório depois de entregar"], answer: 1, explanation: "'A + infinitivo' em espanhol formal = que deve ser / que há de ser. 'El informe a entregar' = o relatório que deve ser entregue / o relatório a ser entregue." },
            { id: "ES-B2-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Es un tema difícil _____ explicar.'", options: ["de", "para", "a", "por"], answer: 0, explanation: "Difícil de explicar = difícil de explicar. A estrutura é: adjetivo + DE + infinitivo para indicar dificuldade/facilidade." },
            { id: "ES-B2-U1-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Quedan muchos asuntos _____ resolver antes de la reunión.' (Restam muitos assuntos a resolver...)", answer: ["por"], hint: "indica o que ainda falta fazer", explanation: "Pendientes por resolver = que ainda faltam resolver. POR + infinitivo indica algo pendente, que ainda falta ser feito." },
            { id: "ES-B2-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Os problemas a resolver são muitos, mas os recursos disponíveis são escassos.'", answer: ["Los problemas a resolver son muchos, pero los recursos disponibles son escasos.", "Los problemas por resolver son muchos, pero los recursos disponibles son escasos."], explanation: "A resolver / por resolver = a resolver. Escasos = escassos. Disponibles = disponíveis." },
            { id: "ES-B2-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um memorando profissional usando construções com infinitivo reduzido. Mínimo 8 frases.", prompt: "Inclua: tarefas a realizar · objetivos a alcançar · problemas por resolver · pontos a considerar", hint: "Los objetivos a alcanzar son..., los temas a tratar..., los problemas por resolver..., las tareas pendientes..." }
          ]
        },
        {
          id: "ES-B2-U1-L3",
          title: "El Estilo Indirecto Avanzado — Todos os Tempos",
          shadowing: "— ¿Qué te dijo exactamente?\n— Me dijo que había tenido problemas y que no podría venir.\n— ¿Y qué había dicho antes?\n— Antes había dicho que vendría seguro. No entiendo el cambio.\n— ¿Te prometió algo?\n— Me prometió que, si todo salía bien, me lo explicaría.\n— ¿Y qué te pidió que hicieras?\n— Me pidió que esperara y que no contara nada a nadie.",
          memoryPhrases: [
            "dijo que vendría = disse que viria (fut.→condicional)",
            "dijo que había tenido = disse que tinha tido (perf.→plusc.)",
            "pidió que esperara = pediu que eu esperasse (subj.→subj. imperf.)",
            "prometió que explicaría = prometeu que explicaria",
            "dijo que no podría = disse que não poderia",
            "preguntó si sabía = perguntou se eu sabia"
          ],
          oralProduction: "Relate em estilo indireto uma conversa completa que você teve com alguém recentemente.",
          exercises: [
            { id: "ES-B2-U1-L3-E1", type: "multiple_choice", skill: "grammar", question: "Transforme em estilo indireto: 'Vendré mañana' → Dijo que...", options: ["Dijo que viene mañana", "Dijo que vendría mañana", "Dijo que vendrá mañana", "Dijo que vino mañana"], answer: 1, explanation: "Dijo que vendría mañana. No estilo indireto passado: futuro → condicional. 'Vendré' → 'vendría'." },
            { id: "ES-B2-U1-L3-E2", type: "multiple_choice", skill: "grammar", question: "Transforme: 'He terminado el trabajo' → Me dijo que...", options: ["Me dijo que ha terminado", "Me dijo que había terminado", "Me dijo que terminó", "Me dijo que terminaría"], answer: 1, explanation: "Me dijo que había terminado. Pretérito perfecto → pluscuamperfecto no estilo indireto." },
            { id: "ES-B2-U1-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Me pidió que _____ (hablar) con el director.' (Me pediu que eu falasse com o diretor.)", answer: ["hablara", "hablase"], hint: "subjuntivo imperfeito de HABLAR para yo", explanation: "Hablara/hablase = falasse. Pedido no passado (pidió) + subjuntivo → subjuntivo imperfeito." },
            { id: "ES-B2-U1-L3-E4", type: "translation", skill: "writing", question: "Transforme em estilo indireto: O jefe disse: 'Chegue mais cedo e já terminei o relatório.'", answer: ["El jefe dijo que llegara más temprano y que ya había terminado el informe.", "El jefe dijo que llegase más temprano y que ya había terminado el informe."], explanation: "Llegue → llegara (pedido em subj. imperf.). He terminado → había terminado (plusc.)." },
            { id: "ES-B2-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva o relato de uma reunião de trabalho usando estilo indireto completo. Mínimo 10 frases.", prompt: "Inclua: o que cada pessoa disse · promessas feitas · pedidos · dúvidas expressas · decisões tomadas", hint: "El director dijo que..., nos prometió que..., nos pidió que..., alguien preguntó si..., acordaron que..." }
          ]
        },
        {
          id: "ES-B2-U1-L4",
          title: "Usos Avançados do Ser e Estar",
          shadowing: "— Está visto que no va a funcionar.\n— ¿Por qué eres tan pesimista?\n— No soy pesimista, soy realista. Está claro que hay problemas.\n— Pero es que siempre es lo mismo contigo.\n— Mira, es que la situación es lo que es.\n— Bueno, sea como sea, hay que intentarlo.\n— De acuerdo, pero siendo así, no esperes milagros.",
          memoryPhrases: [
            "está visto que = é evidente que / está claro que",
            "es que = é que (conector explicativo)",
            "es lo que es = é o que é",
            "siendo así = sendo assim",
            "estar + gerundio = estar + gerúndio",
            "ser + adjetivo vs estar + adjetivo (matizes)"
          ],
          oralProduction: "Explique a diferença de significado entre: 'es aburrido' vs 'está aburrido', 'es listo' vs 'está listo'.",
          exercises: [
            { id: "ES-B2-U1-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença? A) 'Juan es aburrido' B) 'Juan está aburrido'", options: ["São iguais", "A: Juan é uma pessoa chata (característica). B: Juan está entediado agora (estado)", "A é formal, B informal", "A é passado, B é presente"], answer: 1, explanation: "SER + adjetivo = característica permanente. ESTAR + adjetivo = estado temporário. Es aburrido = é chato (sempre). Está aburrido = está entediado (agora)." },
            { id: "ES-B2-U1-L4-E2", type: "multiple_choice", skill: "grammar", question: "O que significa 'La comida está rica'?", options: ["A comida é rica (cara)", "A comida está gostosa (estado)", "A comida estava boa", "A comida vai estar boa"], answer: 1, explanation: "Está rica = está gostosa (percepção no momento). 'Es rica' seria uma característica permanente. Com comida, ESTAR é mais natural para experiência sensorial." },
            { id: "ES-B2-U1-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete com SER ou ESTAR: 'El jefe _____ muy nervioso hoy. Normalmente _____ muy tranquilo.'", answer: ["está, es"], hint: "estado temporário vs característica permanente", explanation: "Está muy nervioso hoy (estado temporário, hoy). Es muy tranquilo (característica permanente, normalmente)." },
            { id: "ES-B2-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Ele é muito sério como pessoa, mas hoje está muito animado por causa da boa notícia.'", answer: ["Es muy serio como persona, pero hoy está muy animado por la buena noticia.", "Él es muy serio, pero hoy está muy animado debido a la buena noticia."], explanation: "Es serio = é sério (característica). Está animado = está animado (estado temporário, hoje)." },
            { id: "ES-B2-U1-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um perfil completo de uma pessoa real ou fictícia, distinguindo características permanentes (SER) e estados temporários (ESTAR). Mínimo 10 frases.", prompt: "Inclua: aparência física · personalidade · estado atual · localização · profissão · situação de vida", hint: "Es alto, moreno y simpático. Normalmente es tranquilo pero hoy está estresado. Está en Madrid..." }
          ]
        },
        {
          id: "ES-B2-U1-L5",
          title: "Nominalização e Registro Formal",
          shadowing: "— La implementación del proyecto fue un éxito.\n— El desarrollo de las fases iniciales resultó más complejo de lo esperado.\n— ¿Y la resolución de los conflictos internos?\n— La gestión de los recursos humanos fue clave en la superación de obstáculos.\n— ¿Qué hay de la evaluación final?\n— La entrega de los resultados está prevista para el viernes.",
          memoryPhrases: [
            "la implementación = a implementação",
            "el desarrollo = o desenvolvimento",
            "la resolución = a resolução",
            "la gestión = a gestão",
            "la superación = a superação",
            "la entrega = a entrega"
          ],
          oralProduction: "Reescreva 5 frases verbais no estilo nominal formal: 'resolver problemas' → 'la resolución de problemas'.",
          exercises: [
            { id: "ES-B2-U1-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "Qual é a nominalização de 'desarrollar'?", options: ["el desarrollador", "el desarrollo", "la desarrollación", "lo desarrollado"], answer: 1, explanation: "El desarrollo = o desenvolvimento. Nominalização de verbos em espanhol: desarrollar → el desarrollo, implementar → la implementación, resolver → la resolución." },
            { id: "ES-B2-U1-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Como nominalizar 'gestionar los recursos'?", options: ["el gestionado de recursos", "la gestión de los recursos", "el gestión de recursos", "la gestionación de recursos"], answer: 1, explanation: "La gestión de los recursos = a gestão dos recursos. Gestionar → la gestión. O artigo feminino e o sufixo -ión são muito comuns nas nominalizações formais." },
            { id: "ES-B2-U1-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Nominalize: 'Entregaron los resultados' → 'La _____ de los resultados se realizó en plazo.'", answer: ["entrega"], hint: "substantivo de 'entregar'", explanation: "La entrega = a entrega. Entregar → la entrega. Frase nominal mais formal e concisa." },
            { id: "ES-B2-U1-L5-E4", type: "translation", skill: "writing", question: "Transforme em registro formal: 'Resolvemos os problemas e implementamos novas soluções.'", answer: ["La resolución de los problemas y la implementación de nuevas soluciones fueron los logros principales.", "La resolución de los problemas e implementación de nuevas soluciones se llevaron a cabo con éxito."], explanation: "Resolución (resolver) + implementación (implementar). O estilo nominal é característico do espanhol escrito formal." },
            { id: "ES-B2-U1-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um relatório executivo formal em espanhol usando nominalizações. Mínimo 10 frases.", prompt: "Inclua: desenvolvimento do projeto · implementação de soluções · gestão da equipe · resolução de problemas · entrega de resultados", hint: "El desarrollo del proyecto..., la implementación de..., la gestión del equipo..., la resolución de..., la entrega de..." }
          ]
        }
      ]
    },
    {
      id: "ES-B2-U2",
      title: "Comunicação Profissional Avançada",
      description: "Espanhol de alto nível para contextos profissionais exigentes",
      lessons: [
        {
          id: "ES-B2-U2-L1",
          title: "Correspondência Formal Avanzada",
          shadowing: "— Estimada doctora Martínez:\n— Me dirijo a usted para solicitar formalmente su colaboración en el proyecto...\n— En respuesta a su amable carta del pasado quince de marzo...\n— Adjunto encontrará los documentos solicitados en su momento.\n— Quedo a su entera disposición para cualquier consulta que pueda surgir.\n— En espera de su respuesta, le saluda atentamente.",
          memoryPhrases: [
            "me dirijo a usted para = dirijo-me a você para",
            "en respuesta a su carta = em resposta à sua carta",
            "adjunto encontrará = em anexo encontrará",
            "quedo a su disposición = fico à sua disposição",
            "en espera de su respuesta = aguardando sua resposta",
            "le saluda atentamente = atenciosamente"
          ],
          oralProduction: "Dite uma carta formal completa em espanhol para um cliente ou parceiro de negócios.",
          exercises: [
            { id: "ES-B2-U2-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se abre formalmente uma carta em espanhol?", options: ["Querido señor:", "Hola, señor García:", "Estimado señor García:", "Buenos días señor:"], answer: 2, explanation: "Estimado señor García: = Caro Senhor García / Prezado Senhor García. 'Estimado/a' é o padrão formal. 'Querido/a' é mais afetivo (para conhecidos próximos)." },
            { id: "ES-B2-U2-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se fecha uma carta formal?", options: ["Hasta pronto,", "Le saluda atentamente,", "Besos,", "Nos vemos,"], answer: 1, explanation: "Le saluda atentamente = atenciosamente. Outras opções formais: 'Atentamente,' 'Cordialmente,' 'En espera de su respuesta, le saluda atentamente,'." },
            { id: "ES-B2-U2-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Me _____ a usted para solicitar información.' (Dirijo-me a você para solicitar informações.)", answer: ["dirijo"], hint: "verbo dirigirse (dirigir-se)", explanation: "Me dirijo a usted = dirijo-me a você. 'Dirigirse a alguien' = se dirigir a alguém. Fórmula de abertura muito formal." },
            { id: "ES-B2-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Em anexo encontrará os documentos solicitados. Fico à sua disposição para qualquer esclarecimento.'", answer: ["Adjunto encontrará los documentos solicitados. Quedo a su disposición para cualquier aclaración.", "En el adjunto encontrará los documentos solicitados. Estoy a su disposición para cualquier consulta."], explanation: "Adjunto = em anexo. Quedo a su disposición = fico à sua disposição. Aclaración = esclarecimento." },
            { id: "ES-B2-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva uma carta formal completa em espanhol para um parceiro de negócios propondo uma colaboração. Mínimo 12 frases.", prompt: "Inclua: abertura formal · apresentação · proposta de colaboração · benefícios · próximos passos · encerramento formal", hint: "Estimado/a..., me dirijo a usted para..., le propongo..., los beneficios serían..., le saluda atentamente..." }
          ]
        },
        {
          id: "ES-B2-U2-L2",
          title: "Apresentações e Conferências em Espanhol",
          shadowing: "— Buenos días a todos. Es un placer estar aquí con ustedes.\n— Voy a comenzar con una pregunta: ¿qué tienen en común estas tres empresas?\n— Como pueden observar en el gráfico, los resultados hablan por sí solos.\n— Quisiera destacar especialmente este punto, que considero fundamental.\n— Antes de concluir, permítanme resumir los puntos clave.\n— Estaré encantado de responder sus preguntas. Muchas gracias por su atención.",
          memoryPhrases: [
            "es un placer estar aquí = é um prazer estar aqui",
            "voy a comenzar con = vou começar com",
            "como pueden observar = como podem observar",
            "quisiera destacar = gostaria de destacar",
            "permítanme resumir = permita-me resumir",
            "estaré encantado de = ficarei feliz em"
          ],
          oralProduction: "Faça uma apresentação de 3 minutos sobre um tema de sua área profissional em espanhol.",
          exercises: [
            { id: "ES-B2-U2-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se chama a atenção do público para um dado importante?", options: ["Miren aquí", "Quisiera destacar / Cabe subrayar / Es importante señalar", "Esto es importante", "Escuchen esto"], answer: 1, explanation: "'Quisiera destacar', 'Cabe subrayar', 'Es importante señalar' são as formas mais elegantes e profissionais de chamar atenção para um ponto em apresentações formais." },
            { id: "ES-B2-U2-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se abre para perguntas ao final de uma apresentação?", options: ["¿Alguna pregunta?", "Estaré encantado de responder sus preguntas / Abro el turno de preguntas", "Pregunten lo que quieran", "¿Qué quieren saber?"], answer: 1, explanation: "Estaré encantado de responder sus preguntas ou Abro el turno de preguntas são as formas mais profissionais. 'Encantado de' = com prazer em." },
            { id: "ES-B2-U2-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Antes de concluir, _____ resumir los puntos principales.' (Antes de concluir, permita-me resumir...)", answer: ["permítanme", "déjenme"], hint: "forma de pedir permissão ao público de forma elegante", explanation: "Permítanme / Déjenme + infinitivo = permita-me / deixem-me. Forma elegante de pedir atenção do público antes da conclusão." },
            { id: "ES-B2-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Como podem observar no gráfico, as vendas aumentaram 30% no último trimestre.'", answer: ["Como pueden observar en el gráfico, las ventas aumentaron un 30% en el último trimestre.", "Como pueden ver en el gráfico, las ventas crecieron un 30% en el último trimestre."], explanation: "Como pueden observar = como podem observar. Aumentaron un 30% = aumentaram 30%. Último trimestre = último trimestre." },
            { id: "ES-B2-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva o roteiro completo de uma apresentação de 5 minutos para uma conferência sobre inovação no Brasil. Mínimo 15 frases.", prompt: "Inclua: abertura com gancho · contexto · 3 pontos principais · dados · conclusão · abertura para perguntas", hint: "Buenos días, es un honor..., voy a comenzar con..., el primer punto..., como pueden observar..., en conclusión..., estaré encantado..." }
          ]
        },
        {
          id: "ES-B2-U2-L3",
          title: "Debate e Argumentação Avanzada",
          shadowing: "— Permítame discrepar respetuosamente.\n— Por supuesto, le escucho.\n— Bien. Si bien es cierto que los datos que ha presentado son relevantes, considero que la interpretación que hace de ellos es cuestionable.\n— ¿En qué basa esa afirmación?\n— Me baso en estudios más recientes que contradicen esa hipótesis.\n— Interesante. ¿Podría citar esos estudios?\n— Con mucho gusto. Encontrará las referencias en el dosier que les hemos entregado.",
          memoryPhrases: [
            "permítame discrepar = permita-me discordar",
            "si bien es cierto que = embora seja verdade que",
            "cuestionable = questionável",
            "me baso en = baseio-me em",
            "contradicen = contradizem",
            "con mucho gusto = com muito prazer"
          ],
          oralProduction: "Discorde respeitosamente de uma afirmação usando as estruturas formais aprendidas.",
          exercises: [
            { id: "ES-B2-U2-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se discorda formalmente em espanhol?", options: ["No, eso no es verdad", "Permítame discrepar / Me temo que no comparto esa opinión", "Está equivocado", "Eso es mentira"], answer: 1, explanation: "'Permítame discrepar' e 'Me temo que no comparto esa opinión' são as formas mais elegantes e profissionais de discordar num debate formal." },
            { id: "ES-B2-U2-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se introduz uma concessão seguida de refutação?", options: ["Pero...", "Sin embargo, creo que...", "Si bien es cierto que... sin embargo...", "Aunque..."], answer: 2, explanation: "'Si bien es cierto que X, sin embargo Y' = embora seja verdade que X, no entanto Y. É a estrutura mais elegante para conceder e refutar ao mesmo tempo." },
            { id: "ES-B2-U2-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Me _____ en los datos del informe de la OMS.' (Baseio-me nos dados do relatório da OMS.)", answer: ["baso"], hint: "verbo basarse (se basear)", explanation: "Me baso en = baseio-me em. Basarse en = se basear em. Forma muito usada para citar fontes num debate formal." },
            { id: "ES-B2-U2-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Embora seja verdade que a economia cresceu, considero que essa interpretação é questionável.'", answer: ["Si bien es cierto que la economía ha crecido, considero que esa interpretación es cuestionable.", "Aunque es cierto que la economía creció, creo que esa interpretación es cuestionable."], explanation: "Si bien es cierto que = embora seja verdade que. Cuestionable = questionável. Considero que = considero que." },
            { id: "ES-B2-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um debate formal sobre se a inteligência artificial vai substituir os empregos humanos. Dois lados opostos. Mínimo 12 frases.", prompt: "Inclua: argumento a favor · concessão · refutação · dados · conclusão de cada lado", hint: "Permítame señalar que..., si bien es cierto que..., sin embargo..., me baso en..., por lo tanto..." }
          ]
        },
        {
          id: "ES-B2-U2-L4",
          title: "Vocabulário de Economia e Finanças",
          shadowing: "— ¿Cómo ves la coyuntura económica actual?\n— Hay señales mixtas. Por un lado, el PIB creció un 2,3%, pero la inflación sigue siendo elevada.\n— ¿Y el mercado laboral?\n— La tasa de desempleo bajó, pero la precariedad laboral aumentó.\n— ¿Qué perspectivas hay para el próximo semestre?\n— Las previsiones apuntan a una moderación del crecimiento.\n— ¿Y la inversión extranjera?\n— Sigue siendo atractiva, aunque la incertidumbre regulatoria genera dudas.",
          memoryPhrases: [
            "la coyuntura económica = a conjuntura econômica",
            "el PIB = o PIB (Produto Interno Bruto)",
            "la inflación = a inflação",
            "la tasa de desempleo = a taxa de desemprego",
            "la inversión extranjera = o investimento estrangeiro",
            "las previsiones apuntan a = as previsões apontam para"
          ],
          oralProduction: "Comente a situação econômica atual do Brasil em espanhol usando vocabulário técnico.",
          exercises: [
            { id: "ES-B2-U2-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el PIB' em espanhol?", options: ["O Produto Industrial Bruto", "O Produto Interno Bruto", "O Plano de Investimento Básico", "O Produto Internacional Bruto"], answer: 1, explanation: "PIB = Producto Interior Bruto (España) ou Producto Interno Bruto (América Latina). Equivale ao PIB em português." },
            { id: "ES-B2-U2-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'precariedad laboral'?", options: ["Trabalho perigoso", "Precariedade no trabalho / empregos instáveis", "Trabalho precioso", "Precisão no trabalho"], answer: 1, explanation: "Precariedad laboral = precariedade no trabalho. Laboral = relacionado ao trabalho/emprego. Mercado laboral = mercado de trabalho." },
            { id: "ES-B2-U2-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La _____ sigue siendo el principal desafío de la economía brasileña.' (A inflação segue sendo o principal desafio.)", answer: ["inflación"], hint: "fenômeno econômico de aumento de preços", explanation: "Inflación = inflação. 'Inflación alta' = inflação alta. 'Control de la inflación' = controle da inflação." },
            { id: "ES-B2-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'O investimento estrangeiro cresceu 15% graças à estabilidade econômica e às reformas regulatórias.'", answer: ["La inversión extranjera creció un 15% gracias a la estabilidad económica y las reformas regulatorias.", "La inversión extranjera aumentó un 15% debido a la estabilidad económica y las reformas regulatorias."], explanation: "Inversión extranjera = investimento estrangeiro. Estabilidad = estabilidade. Reformas regulatorias = reformas regulatórias." },
            { id: "ES-B2-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escreva uma análise econômica do Brasil em espanhol para um investidor hispanohablante. Mínimo 10 frases.", prompt: "Inclua: PIB · inflação · desemprego · investimento estrangeiro · perspectivas · riscos", hint: "El PIB de Brasil..., la inflación se sitúa en..., la tasa de desempleo..., la inversión extranjera..., las perspectivas..." }
          ]
        },
        {
          id: "ES-B2-U2-L5",
          title: "Espanhol Jurídico e Administrativo Básico",
          shadowing: "— ¿Ha leído usted las cláusulas del contrato?\n— Sí, aunque hay algunos términos que no comprendo del todo.\n— ¿A qué cláusulas se refiere concretamente?\n— A la cláusula tercera, sobre la rescisión del contrato.\n— Significa que cualquiera de las partes puede rescindirlo con treinta días de preaviso.\n— ¿Y si incumplimos el contrato?\n— En ese caso, la parte incumplidora deberá indemnizar a la otra parte.",
          memoryPhrases: [
            "la cláusula = a cláusula",
            "la rescisión = a rescisão",
            "el preaviso = o aviso prévio",
            "incumplir el contrato = descumprir o contrato",
            "la parte incumplidora = a parte inadimplente",
            "indemnizar = indenizar"
          ],
          oralProduction: "Explique os termos básicos de um contrato em espanhol para alguém que não entende o vocabulário jurídico.",
          exercises: [
            { id: "ES-B2-U2-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la rescisión del contrato'?", options: ["A renovação do contrato", "A assinatura do contrato", "A rescisão / cancelamento do contrato", "O resumo do contrato"], answer: 2, explanation: "La rescisión = a rescisão. Rescindir el contrato = rescindir o contrato. Renovar = renovar. Firmar = assinar." },
            { id: "ES-B2-U2-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'preaviso'?", options: ["Pré-aviso / aviso antecipado", "Aviso posterior", "Aviso urgente", "Aviso formal"], answer: 0, explanation: "Preaviso = pré-aviso / aviso prévio. 'Treinta días de preaviso' = trinta dias de aviso prévio." },
            { id: "ES-B2-U2-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La empresa deberá _____ al trabajador por el despido improcedente.' (A empresa deverá indenizar o trabalhador.)", answer: ["indemnizar"], hint: "indenizar em espanhol", explanation: "Indemnizar = indenizar. Indemnización = indenização. Despido improcedente = demissão sem justa causa." },
            { id: "ES-B2-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Qualquer das partes pode rescindir o contrato com 30 dias de aviso prévio.'", answer: ["Cualquiera de las partes puede rescindir el contrato con 30 días de preaviso.", "Cualquier parte podrá rescindir el contrato previo aviso de 30 días."], explanation: "Cualquiera de las partes = qualquer das partes. Puede rescindir = pode rescindir. Con 30 días de preaviso = com 30 dias de aviso prévio." },
            { id: "ES-B2-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva as cláusulas principais de um contrato de prestação de serviços em espanhol. Mínimo 8 cláusulas.", prompt: "Inclua: partes do contrato · objeto · prazo · valor · forma de pagamento · rescisão · resolução de conflitos", hint: "CLÁUSULA PRIMERA: Las partes son..., CLÁUSULA SEGUNDA: El objeto es..., CLÁUSULA TERCERA: El plazo..." }
          ]
        }
      ]
    }
  ]
};
