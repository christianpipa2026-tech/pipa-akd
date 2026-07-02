export const CURRICULUM_ES_B2_PART2 = {
  units: [
    {
      id: "ES-B2-U3",
      title: "Pensamento Crítico e Análise",
      description: "Análise crítica, reflexão e argumentação sofisticada em espanhol",
      lessons: [
        {
          id: "ES-B2-U3-L1",
          title: "Análise de Textos Literários em Espanhol",
          shadowing: "— El texto presenta una estructura circular: comienza y termina en el mismo punto.\n— ¿Qué función tiene eso narrativamente?\n— Sugiere que el protagonista no ha evolucionado, o quizás que el tiempo es cíclico.\n— ¿Y el narrador? ¿Es fiable?\n— Es un narrador en primera persona con memoria selectiva, lo que cuestiona su fiabilidad.\n— ¿Qué recursos estilísticos predominan?\n— El uso de la ironía y la elipsis temporal son los más destacados.",
          memoryPhrases: [
            "la estructura circular = a estrutura circular",
            "el narrador (no) fiable = o narrador (não) confiável",
            "la memoria selectiva = a memória seletiva",
            "los recursos estilísticos = os recursos estilísticos",
            "la ironía / la elipsis = a ironia / a elipse",
            "cuestionar = questionar"
          ],
          oralProduction: "Analise um texto literário curto em espanhol identificando estrutura, narrador e recursos estilísticos.",
          exercises: [
            { id: "ES-B2-U3-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é um 'narrador no fiable'?", options: ["Um narrador que não narra", "Um narrador cuja versão dos fatos é questionável ou parcial", "Um narrador formal", "Um narrador onisciente"], answer: 1, explanation: "Narrador no fiable = narrador não confiável. Sua perspectiva ou memória é parcial, seletiva ou distorcida, tornando o relato questionável." },
            { id: "ES-B2-U3-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é a 'elipsis temporal'?", options: ["Uma figura de linguagem que suprime palavras", "Um salto no tempo narrativo (omissão de período)", "Uma repetição temporal", "Uma contradição temporal"], answer: 1, explanation: "Elipsis temporal = elipse temporal. Supressão de um período de tempo na narrativa. O leitor entende que tempo passou sem que seja descrito." },
            { id: "ES-B2-U3-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El autor usa la ironía para _____ los valores de la sociedad de su época.' (O autor usa a ironia para questionar...)", answer: ["cuestionar", "criticar"], hint: "por en dúvida / questionar em espanhol", explanation: "Cuestionar = questionar. Criticar = criticar. Ambos funcionam no contexto de análise literária." },
            { id: "ES-B2-U3-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'O texto se estrutura em torno de um narrador em primeira pessoa cuja memória seletiva questiona a fiabilidade do relato.'", answer: ["El texto se estructura en torno a un narrador en primera persona cuya memoria selectiva cuestiona la fiabilidad del relato.", "El texto está estructurado alrededor de un narrador en primera persona cuya memoria selectiva pone en duda la fiabilidad del relato."], explanation: "Se estructura en torno a = se estrutura em torno de. Cuya = cuja (pronome relativo possessivo). Fiabilidad = fiabilidade." },
            { id: "ES-B2-U3-L1-E5", type: "free_writing", skill: "writing", question: "Escreva uma análise literária de um livro que você leu, identificando estrutura, narrador e 3 recursos estilísticos. Mínimo 10 frases.", prompt: "Inclua: estrutura da obra · tipo de narrador · tempo narrativo · recursos estilísticos · interpretação temática", hint: "La obra se estructura en..., el narrador es..., el autor utiliza recursos como..., el tema central es..." }
          ]
        },
        {
          id: "ES-B2-U3-L2",
          title: "Filosofia e Pensamento Crítico",
          shadowing: "— ¿Crees que el libre albedrío existe?\n— Es una pregunta compleja. Si el determinismo es cierto, nuestras decisiones son ilusorias.\n— Pero experimentamos la sensación de elegir.\n— Eso podría ser una construcción mental. Compatibilistas argumentan que libertad y determinismo no son excluyentes.\n— ¿Y tú qué opinas?\n— Creo que la pregunta misma presupone categorías que quizás no son las adecuadas para entender la realidad.",
          memoryPhrases: [
            "el libre albedrío = o livre-arbítrio",
            "el determinismo = o determinismo",
            "ilusorio = ilusório",
            "excluyentes = excludentes / mutuamente exclusivos",
            "presuponer = pressupor",
            "las categorías = as categorias"
          ],
          oralProduction: "Discuta um dilema filosófico de sua escolha em espanhol, apresentando pelo menos dois pontos de vista.",
          exercises: [
            { id: "ES-B2-U3-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é o 'libre albedrío'?", options: ["Livre comércio", "Livre-arbítrio / capacidade de escolher livremente", "Livre pensamento", "Liberdade de expressão"], answer: 1, explanation: "Libre albedrío = livre-arbítrio. A capacidade de tomar decisões livremente, sem determinismo. Um dos grandes temas da filosofia ocidental." },
            { id: "ES-B2-U3-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'no son excluyentes'?", options: ["Não são exclusivos", "Não se excluem / podem coexistir", "Não são excludentes entre si", "B e C corretas"], answer: 3, explanation: "No son excluyentes = não se excluem mutuamente / podem coexistir. Excluyente = excludente. 'No mutuamente excluyentes' significa que duas coisas podem ser verdadeiras ao mesmo tempo." },
            { id: "ES-B2-U3-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La pregunta _____ una dualidad que quizás no existe.' (A pergunta pressupõe uma dualidade que talvez não exista.)", answer: ["presupone"], hint: "verbo pressupor no presente", explanation: "Presupone = pressupõe. Presuponer = pressupor. Forma muito usada no pensamento crítico e filosófico." },
            { id: "ES-B2-U3-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Se o determinismo é verdadeiro, nossas decisões podem ser ilusórias, mas ainda assim as experimentamos como reais.'", answer: ["Si el determinismo es cierto, nuestras decisiones pueden ser ilusorias, pero aun así las experimentamos como reales.", "Si el determinismo es verdadero, nuestras decisiones podrían ser ilusorias, pero las experimentamos como reales."], explanation: "Determinismo = determinismo. Ilusorias = ilusórias. Aun así = ainda assim. Las experimentamos = as experimentamos." },
            { id: "ES-B2-U3-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio filosófico sobre um dilema ético contemporâneo em espanhol. Mínimo 10 frases.", prompt: "Sugestões: IA e humanidade, direitos dos animais, ética ambiental, privacidade digital", hint: "El dilema ético de..., por un lado..., por otro..., los argumentos a favor..., sin embargo..., en conclusión..." }
          ]
        },
        {
          id: "ES-B2-U3-L3",
          title: "Sociolinguística — Língua e Sociedade",
          shadowing: "— ¿Por qué cambia el español según el contexto social?\n— La lengua es un fenómeno social. Adaptamos nuestro registro al interlocutor y la situación.\n— ¿A qué se llama diglosia?\n— A la coexistencia de dos lenguas con diferente estatus social en una misma comunidad.\n— ¿Como en Cataluña?\n— Exacto. El catalán y el castellano coexisten con distintas funciones sociales.\n— ¿Y en qué afecta eso a los hablantes?\n— Crea identidades lingüísticas complejas y a veces tensiones sociales.",
          memoryPhrases: [
            "el registro = o registro (linguístico)",
            "el interlocutor = o interlocutor",
            "la diglosia = a diglossia",
            "la coexistencia = a coexistência",
            "el estatus social = o status social",
            "las tensiones sociales = as tensões sociais"
          ],
          oralProduction: "Explique o conceito de registro linguístico com exemplos do espanhol e do português.",
          exercises: [
            { id: "ES-B2-U3-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el registro lingüístico'?", options: ["O sotaque de uma pessoa", "O nível ou variedade de língua usada segundo o contexto", "O vocabulário técnico", "A gramática de um idioma"], answer: 1, explanation: "Registro lingüístico = registro linguístico. O nível ou variedade da língua adaptado ao contexto: formal, informal, técnico, coloquial, etc." },
            { id: "ES-B2-U3-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'diglosia'?", options: ["Falar dois idiomas", "Coexistência de dois idiomas com diferente status social numa mesma comunidade", "Mistura de dois idiomas", "Tradução entre idiomas"], answer: 1, explanation: "Diglosia = diglossia. Coexistência de duas línguas ou variedades com status diferentes. Ex: uma língua para contextos formais, outra para informais." },
            { id: "ES-B2-U3-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Adaptamos nuestro _____ según el contexto y el interlocutor.' (Adaptamos nosso registro...)", answer: ["registro"], hint: "variedade ou nível de língua usado", explanation: "Registro = registro. 'Adaptar el registro' = adaptar o nível da língua ao contexto e ao interlocutor." },
            { id: "ES-B2-U3-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'A coexistência de duas línguas numa mesma comunidade gera identidades linguísticas complexas.'", answer: ["La coexistencia de dos lenguas en una misma comunidad genera identidades lingüísticas complejas.", "La convivencia de dos lenguas en la misma comunidad genera identidades lingüísticas complejas."], explanation: "Coexistencia = coexistência. Genera = gera. Identidades lingüísticas = identidades linguísticas." },
            { id: "ES-B2-U3-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre a situação sociolinguística do Brasil: a língua portuguesa, as línguas indígenas e a influência de idiomas estrangeiros. Mínimo 10 frases.", prompt: "Inclua: língua oficial · variedades regionais · línguas minorizadas · code-switching · identidade linguística", hint: "En Brasil, el portugués es..., sin embargo, existen..., los hablantes a veces..., la identidad lingüística..." }
          ]
        },
        {
          id: "ES-B2-U3-L4",
          title: "Ensaio Argumentativo Avanzado",
          shadowing: "— El artículo sostiene que la inteligencia artificial transformará radicalmente el mercado laboral.\n— ¿Coincides con esa tesis?\n— En parte. Si bien reconozco que hay sectores vulnerables, creo que el análisis peca de determinista.\n— ¿En qué sentido?\n— En que ignora la capacidad humana de adaptación histórica. Siempre hemos creado nuevos empleos ante los cambios tecnológicos.\n— Un argumento sólido. ¿Y la contraargumentación?\n— El ritmo del cambio actual es sin precedentes. Eso complica la comparación histórica.",
          memoryPhrases: [
            "sostiene que = sustenta que / afirma que",
            "pecar de = pecar de / ser excessivamente",
            "sin precedentes = sem precedentes",
            "la capacidad de adaptación = a capacidade de adaptação",
            "complica la comparación = complica a comparação",
            "un argumento sólido = um argumento sólido"
          ],
          oralProduction: "Defenda e contra-argumente a seguinte tese: 'A globalização beneficia mais do que prejudica.'",
          exercises: [
            { id: "ES-B2-U3-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el artículo sostiene que'?", options: ["O artigo sugere que", "O artigo sustenta / afirma que (como tese principal)", "O artigo menciona que", "O artigo pergunta que"], answer: 1, explanation: "Sostiene que = sustenta / afirma que (como tese principal). 'Sostener' no sentido intelectual = defender uma posição, argumentar." },
            { id: "ES-B2-U3-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'sin precedentes'?", options: ["Sem preço", "Sem precedentes / inédito / nunca antes visto", "Sem precedência", "Sem pré-requisitos"], answer: 1, explanation: "Sin precedentes = sem precedentes. 'Un evento sin precedentes' = um evento inédito, que nunca aconteceu antes." },
            { id: "ES-B2-U3-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El análisis _____ de simplista al ignorar factores contextuales.' (A análise peca de simplista ao ignorar...)", answer: ["peca"], hint: "verbo pecar (pecar / ser excessivamente)", explanation: "Peca de = peca de / é excessivamente. 'Pecar de simplista' = ser simplista demais. Forma muito usada na crítica acadêmica." },
            { id: "ES-B2-U3-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Embora reconheça que o argumento tem mérito, considero que peca de determinista ao ignorar a capacidade humana de adaptação.'", answer: ["Si bien reconozco que el argumento tiene mérito, considero que peca de determinista al ignorar la capacidad humana de adaptación.", "Aunque reconozco el mérito del argumento, creo que peca de determinista al ignorar la capacidad humana de adaptación."], explanation: "Si bien reconozco = embora reconheça. Peca de determinista = peca de determinista. Capacidad de adaptación = capacidade de adaptação." },
            { id: "ES-B2-U3-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio argumentativo completo sobre os impactos da inteligência artificial no mundo do trabalho. Mínimo 15 frases.", prompt: "Inclua: tese clara · 3 argumentos desenvolvidos · contra-argumento · refutação · conclusão com proposta", hint: "La tesis central es..., en primer lugar..., no obstante..., si bien es cierto que..., en conclusión, propongo..." }
          ]
        },
        {
          id: "ES-B2-U3-L5",
          title: "Intertextualidade e Referências Culturais",
          shadowing: "— Esta novela dialoga claramente con el Quijote.\n— ¿En qué sentido?\n— El protagonista también confunde la realidad con la ficción, pero en el contexto contemporáneo.\n— Una suerte de quijotismo posmoderno.\n— Exacto. Y las referencias a Borges son evidentes en la estructura laberíntica.\n— ¿Y el lector que no conoce esas referencias?\n— Puede disfrutar la obra igualmente, aunque pierde capas de significado.",
          memoryPhrases: [
            "dialoga con = dialoga com",
            "una suerte de = uma espécie de",
            "referencias a = referências a",
            "la estructura laberíntica = a estrutura labiríntica",
            "capas de significado = camadas de significado",
            "el quijotismo = o quixotismo"
          ],
          oralProduction: "Identifique referências intertextuais em uma obra que você conhece e explique-as em espanhol.",
          exercises: [
            { id: "ES-B2-U3-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'una suerte de'?", options: ["Um tipo de sorte", "Uma espécie de / uma forma de", "Um jogo de", "Uma sorte de"], answer: 1, explanation: "Una suerte de = uma espécie de / um tipo de. 'Una suerte de quijotismo posmoderno' = uma espécie de quixotismo pós-moderno." },
            { id: "ES-B2-U3-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'capas de significado'?", options: ["Capas de roupas simbólicas", "Camadas de significado / múltiplas interpretações", "Capas de proteção", "Cobertura de significado"], answer: 1, explanation: "Capas de significado = camadas de significado. 'Capa' em espanhol pode significar camada (além de capa de roupa). 'Múltiples capas' = múltiplas camadas." },
            { id: "ES-B2-U3-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'La obra _____ con la tradición literaria hispanoamericana.' (A obra dialoga com a tradição literária hispano-americana.)", answer: ["dialoga"], hint: "verbo dialogar (dialogar)", explanation: "Dialoga = dialoga. En contexto literario, 'dialogar con' = manter um diálogo intertextual com, fazer referência a, responder a." },
            { id: "ES-B2-U3-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'A estrutura labiríntica da obra dialoga claramente com os contos de Borges, acrescentando camadas de significado para o leitor informado.'", answer: ["La estructura laberíntica de la obra dialoga claramente con los cuentos de Borges, añadiendo capas de significado para el lector informado.", "La estructura laberíntica dialoga claramente con la narrativa borgiana, añadiendo capas de significado para el lector que las conoce."], explanation: "Laberíntica = labiríntica. Añadiendo = acrescentando. Capas de significado = camadas de significado. Lector informado = leitor informado." },
            { id: "ES-B2-U3-L5-E5", type: "free_writing", skill: "writing", question: "Escreva uma análise intertextual de uma obra que você conhece, identificando diálogos com outras obras ou tradições. Mínimo 10 frases.", prompt: "Inclua: obra analisada · referências identificadas · como dialogam · efeito no leitor · interpretação", hint: "La obra dialoga con..., las referencias a..., esta intertextualidad produce..., el lector que conoce... puede apreciar..." }
          ]
        }
      ]
    },
    {
      id: "ES-B2-U4",
      title: "Espanhol para o Mundo Digital e Mídia",
      description: "Comunicação digital, mídia social e jornalismo em espanhol",
      lessons: [
        {
          id: "ES-B2-U4-L1",
          title: "Redação para Web e Redes Sociais em Espanhol",
          shadowing: "— ¿Cómo optimizas el contenido para redes sociales en español?\n— Primero, adapto el tono al público objetivo. Instagram pide más cercanía, LinkedIn más formalidad.\n— ¿Y los hashtags?\n— Son clave para el alcance. Uso entre cinco y diez por publicación.\n— ¿Qué tipo de contenido funciona mejor?\n— El contenido de valor: tutoriales, consejos prácticos y storytelling auténtico.",
          memoryPhrases: [
            "el público objetivo = o público-alvo",
            "la cercanía = a proximidade / o calor",
            "el alcance = o alcance",
            "la publicación = a publicação / o post",
            "el contenido de valor = o conteúdo de valor",
            "el storytelling = o storytelling"
          ],
          oralProduction: "Explique sua estratégia de conteúdo para redes sociais usando vocabulário digital em espanhol.",
          exercises: [
            { id: "ES-B2-U4-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'público-alvo' em espanhol?", options: ["público general", "público objetivo", "público meta", "B e C corretas"], answer: 3, explanation: "Tanto 'público objetivo' quanto 'público meta' significam público-alvo em espanhol. 'Meta' vem de 'metáfora'... não. 'Meta' = objetivo/alvo. Ambos são amplamente usados." },
            { id: "ES-B2-U4-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el alcance' em marketing digital?", options: ["O alcance / o número de pessoas que viram o conteúdo", "O armazenamento de dados", "O design do conteúdo", "O custo do anúncio"], answer: 0, explanation: "El alcance = o alcance. Em marketing digital, o número de pessoas únicas que visualizaram o conteúdo. 'Aumentar el alcance' = aumentar o alcance." },
            { id: "ES-B2-U4-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Publicamos tres veces por semana para mantener el _____ de la audiencia.' (Publicamos três vezes por semana para manter o engajamento.)", answer: ["engagement", "compromiso"], hint: "engajamento em espanhol", explanation: "Engagement (anglicismo aceito) ou compromiso/interacción = engajamento. No marketing digital hispanohablante, 'engagement' é amplamente usado." },
            { id: "ES-B2-U4-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'O conteúdo de valor e o storytelling autêntico são fundamentais para aumentar o alcance orgânico nas redes sociais.'", answer: ["El contenido de valor y el storytelling auténtico son fundamentales para aumentar el alcance orgánico en las redes sociales.", "El contenido valioso y el storytelling auténtico son clave para aumentar el alcance orgánico en redes sociales."], explanation: "Contenido de valor = conteúdo de valor. Alcance orgánico = alcance orgânico. Redes sociales = redes sociais." },
            { id: "ES-B2-U4-L1-E5", type: "free_writing", skill: "writing", question: "Escreva uma estratégia de conteúdo para uma marca brasileira que quer se expandir para o mercado hispanohablante. Mínimo 10 frases.", prompt: "Inclua: plataformas · tipo de conteúdo · tom · frequência · adaptação cultural · métricas de sucesso", hint: "La estrategia consiste en..., el público objetivo es..., el tono debe ser..., publicaremos..., mediremos el éxito a través de..." }
          ]
        },
        {
          id: "ES-B2-U4-L2",
          title: "Jornalismo e Desinformação em Espanhol",
          shadowing: "— ¿Cómo distingues entre información veraz y desinformación?\n— Primero, verifico la fuente. ¿Es un medio con trayectoria?\n— ¿Y si la fuente parece legítima?\n— Contrasto con otras fuentes independientes. Si solo lo publica un medio, sospecho.\n— ¿Qué señales alertan de fake news?\n— Titulares sensacionalistas, ausencia de firma, errores gramaticales y ausencia de fecha.\n— ¿Y el fact-checking?\n— Es fundamental. Hay plataformas especializadas como Newtral o Maldita.",
          memoryPhrases: [
            "información veraz = informação verídica",
            "la desinformación = a desinformação",
            "verificar la fuente = verificar a fonte",
            "contrastar = contrastar / comparar",
            "el titular sensacionalista = a manchete sensacionalista",
            "el fact-checking = a verificação de fatos"
          ],
          oralProduction: "Explique como você verifica se uma notícia é verdadeira ou falsa, em espanhol.",
          exercises: [
            { id: "ES-B2-U4-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la desinformación'?", options: ["Falta de informação", "Informação falsa ou enganosa difundida deliberadamente", "Informação desatualizada", "Informação secreta"], answer: 1, explanation: "Desinformación = desinformação. Informação falsa ou enganosa difundida intencionalmente. Diferente de 'misinformation' (errônea mas não intencional)." },
            { id: "ES-B2-U4-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'un titular sensacionalista'?", options: ["Um título informativo", "Uma manchete que exagera ou distorce para chamar atenção", "Um título curto", "Um título em maiúsculas"], answer: 1, explanation: "Titular sensacionalista = manchete sensacionalista. Exagera ou distorce os fatos para gerar impacto emocional e cliques." },
            { id: "ES-B2-U4-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Es fundamental _____ la información con fuentes independientes.' (É fundamental contrastar a informação...)", answer: ["contrastar"], hint: "comparar/checar contra outras fontes", explanation: "Contrastar = contrastar / comparar / checar. 'Contrastar la información' = verificar a informação cruzando com outras fontes." },
            { id: "ES-B2-U4-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Antes de compartilhar uma notícia, é fundamental verificar a fonte e contrastar com meios independentes.'", answer: ["Antes de compartir una noticia, es fundamental verificar la fuente y contrastarla con medios independientes.", "Antes de compartir una noticia, hay que verificar la fuente y contrastarla con otros medios independientes."], explanation: "Compartir = compartilhar. Verificar la fuente = verificar a fonte. Contrastarla = contrastá-la." },
            { id: "ES-B2-U4-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um guia completo sobre como identificar fake news em espanhol. Mínimo 10 frases.", prompt: "Inclua: critérios de verificação · sinais de alerta · ferramentas de fact-checking · responsabilidade do leitor", hint: "Para identificar fake news, debemos..., las señales de alerta son..., es importante verificar..., existen herramientas como..." }
          ]
        },
        {
          id: "ES-B2-U4-L3",
          title: "Espanhol Técnico — Tecnologia e Inovação",
          shadowing: "— Nuestro sistema utiliza algoritmos de machine learning para personalizar la experiencia.\n— ¿Y cómo gestionan los datos del usuario?\n— Cumplimos con el RGPD. Los datos se anoninizan y no se ceden a terceros.\n— ¿Qué infraestructura usan?\n— Trabajamos en la nube con arquitectura de microservicios.\n— ¿Y la ciberseguridad?\n— Tenemos cifrado de extremo a extremo y auditorías de seguridad trimestrales.",
          memoryPhrases: [
            "el machine learning = o aprendizado de máquina",
            "la nube = a nuvem (computação)",
            "los microservicios = os microsserviços",
            "el cifrado = a criptografia",
            "la ciberseguridad = a cibersegurança",
            "ceder datos = compartilhar / ceder dados"
          ],
          oralProduction: "Explique a arquitetura técnica de um projeto de software em espanhol para um cliente não técnico.",
          exercises: [
            { id: "ES-B2-U4-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'computação em nuvem' em espanhol?", options: ["computación en cielo", "computación en la nube", "informática en nubes", "tecnología de nube"], answer: 1, explanation: "Computación en la nube = computação em nuvem. 'La nube' = a nuvem. 'Almacenamiento en la nube' = armazenamento em nuvem." },
            { id: "ES-B2-U4-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el cifrado de extremo a extremo'?", options: ["Tradução entre idiomas", "Criptografia ponta a ponta", "Arquivo digital", "Transmissão de dados"], answer: 1, explanation: "Cifrado de extremo a extremo = criptografia ponta a ponta. Cifrado = criptografado/cifrado. Muy importante em aplicativos de mensagens como WhatsApp." },
            { id: "ES-B2-U4-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Los datos de los usuarios están _____ y no se comparten con terceros.' (Os dados estão criptografados e não são compartilhados.)", answer: ["cifrados"], hint: "participio de cifrar (criptografar)", explanation: "Cifrados = criptografados. Cifrar = criptografar. 'Datos cifrados' = dados criptografados." },
            { id: "ES-B2-U4-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Nossa plataforma usa aprendizado de máquina para personalizar a experiência do usuário na nuvem.'", answer: ["Nuestra plataforma usa machine learning para personalizar la experiencia del usuario en la nube.", "Nuestra plataforma utiliza aprendizaje automático para personalizar la experiencia del usuario en la nube."], explanation: "Machine learning / aprendizaje automático = aprendizado de máquina. Personalizar = personalizar. En la nube = na nuvem." },
            { id: "ES-B2-U4-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um pitch técnico em espanhol para uma startup de tecnologia, explicando o produto, a tecnologia e o mercado. Mínimo 10 frases.", prompt: "Inclua: o que o produto faz · tecnologia utilizada · modelo de negócios · mercado-alvo · diferencial competitivo", hint: "Nuestra plataforma es..., utilizamos tecnologías como..., el modelo de negocio es..., nuestro mercado objetivo es..., nos diferenciamos por..." }
          ]
        },
        {
          id: "ES-B2-U4-L4",
          title: "Expressões Idiomáticas Avançadas e Modismos",
          shadowing: "— Hay que andarse con pies de plomo en este asunto.\n— ¿Por qué? ¿Está el ambiente cargado?\n— Sí. El director anda con la mosca detrás de la oreja desde que descubrió el error.\n— ¿Y qué pasa si no actuamos?\n— Que nos puede caer el muerto a nosotros.\n— O sea, que tenemos que coger el toro por los cuernos.\n— Exacto. Y sin meter la pata.",
          memoryPhrases: [
            "andarse con pies de plomo = agir com cautela / pisar em ovos",
            "el ambiente está cargado = o ambiente está pesado",
            "tener la mosca detrás de la oreja = estar desconfiado",
            "caerle el muerto a alguien = sobrar o pepino para alguém",
            "coger el toro por los cuernos = pegar o touro pelos chifres",
            "meter la pata = meter o pé"
          ],
          oralProduction: "Use pelo menos 5 expressões idiomáticas avançadas para contar uma situação difícil no trabalho.",
          exercises: [
            { id: "ES-B2-U4-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'andarse con pies de plomo'?", options: ["Andar devagar", "Agir com muita cautela / pisar em ovos", "Ter pés pesados", "Andar com chumbo nos pés"], answer: 1, explanation: "Andarse con pies de plomo = agir com muita cautela / pisar em ovos. Literalmente 'andar com pés de chumbo' (devagar e cuidadoso)." },
            { id: "ES-B2-U4-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'meter la pata'?", options: ["Meter o pé / cometer uma gafe", "Meter algo no lugar", "Entrar em uma situação", "Causar problemas intencionalmente"], answer: 0, explanation: "Meter la pata = meter o pé / cometer uma gafe. 'Metí la pata' = meti o pé / me enganei feio." },
            { id: "ES-B2-U4-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Ya es hora de _____ el toro _____ los cuernos y resolver este problema.' (Já é hora de pegar o touro pelos chifres.)", answer: ["coger / agarrar, por"], hint: "pegar o touro pelos chifres", explanation: "Coger/agarrar el toro por los cuernos = pegar o touro pelos chifres. Enfrentar o problema diretamente sem fugir." },
            { id: "ES-B2-U4-L4-E4", type: "translation", skill: "writing", question: "Traduza usando expressões idiomáticas: 'Devemos agir com cautela porque o chefe está desconfiado e qualquer erro pode nos sobrar.'", answer: ["Debemos andarnos con pies de plomo porque el jefe tiene la mosca detrás de la oreja y cualquier error nos puede caer el muerto.", "Hay que andarse con pies de plomo porque el jefe está con la mosca detrás de la oreja y cualquier error nos puede caer."], explanation: "Andarse con pies de plomo = agir com cautela. Mosca detrás de la oreja = desconfiado. Caer el muerto = sobrar o pepino." },
            { id: "ES-B2-U4-L4-E5", type: "free_writing", skill: "writing", question: "Escreva uma história usando pelo menos 8 expressões idiomáticas avançadas em espanhol. Mínimo 12 frases.", prompt: "Use: andarse con pies de plomo · coger el toro por los cuernos · meter la pata · caerle el muerto · mosca detrás de la oreja · ambiente cargado · más e outras que você conheça", hint: "Era una situación tensa..., teníamos que andarnos con pies de plomo..., al final cogimos el toro por los cuernos..." }
          ]
        },
        {
          id: "ES-B2-U4-L5",
          title: "Revisão B2 e Preparação para C1",
          shadowing: "— En este nivel ya deberías ser capaz de expresarte con fluidez y precisión en casi cualquier contexto.\n— Sí, aunque aún hay matices que se me escapan.\n— Es normal. El C1 es donde empiezas a sonar realmente nativo.\n— ¿Y el C2?\n— En el C2 ya no hay prácticamente diferencia con un hablante nativo.\n— ¿Cuánto tiempo lleva alcanzar ese nivel?\n— Depende mucho de la exposición. Si te sumerges en la lengua, puede ser cuestión de años.",
          memoryPhrases: [
            "expresarte con fluidez y precisión = se expresar com fluência e precisão",
            "matices que se me escapan = matizes que me escapam",
            "sonar nativo = soar nativo",
            "prácticamente = praticamente",
            "sumergirse en la lengua = se imergir na língua",
            "puede ser cuestión de = pode ser questão de"
          ],
          oralProduction: "Faça uma autoavaliação completa do seu espanhol atual e elabore um plano para alcançar o C1.",
          exercises: [
            { id: "ES-B2-U4-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'sumergirse en la lengua'?", options: ["Aprender gramática intensivamente", "Se imergir totalmente na língua (input massivo, vida no idioma)", "Estudar em um livro de língua", "Traduzir textos literários"], answer: 1, explanation: "Sumergirse en la lengua = se imergir na língua. Exposição total ao idioma: filmes, podcasts, conversas, leituras — vivendo o idioma." },
            { id: "ES-B2-U4-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que são 'matices' no aprendizado de línguas?", options: ["Erros gramaticais", "Matizes / nuances sutis de significado e uso", "Palavras novas", "Regras gramaticais"], answer: 1, explanation: "Matices = matizes / nuances. As diferenças sutis de significado, uso e connotação que distinguem um falante avançado de um nativo." },
            { id: "ES-B2-U4-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Para llegar al C1, es necesario que _____ (exponerse) más al español auténtico.' (Para chegar ao C1, é necessário se expor mais...)", answer: ["te expongas"], hint: "subjuntivo de exponerse para tú", explanation: "Te expongas = você se exponha. 'Es necesario que' + subjuntivo. Exponerse → me exponga, te expongas, se exponga..." },
            { id: "ES-B2-U4-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'No B2, você consegue se expressar com fluência e precisão em quase qualquer contexto, embora ainda existam matizes que escapam.'", answer: ["En el B2, puedes expresarte con fluidez y precisión en casi cualquier contexto, aunque aún hay matices que se te escapan.", "En el B2, eres capaz de expresarte con fluidez y precisión en casi cualquier situación, aunque todavía hay matices que escapan."], explanation: "Puedes expresarte = você consegue se expressar. Se te escapan = que te escapam. Casi cualquier contexto = quase qualquer contexto." },
            { id: "ES-B2-U4-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um plano de estudo detalhado para alcançar o nível C1 em espanhol nos próximos 6 meses. Mínimo 12 frases.", prompt: "Inclua: horas semanais de estudo · recursos a usar · habilidades a desenvolver · metas mensais · como medir o progresso", hint: "Para alcanzar el C1 en 6 meses, necesito..., dedicaré... horas semanales a..., usaré recursos como..., mis objetivos mensuales son..." }
          ]
        }
      ]
    }
  ]
};
