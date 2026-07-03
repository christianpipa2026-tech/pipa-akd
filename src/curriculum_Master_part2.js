export const CURRICULUM_ES_MASTER_PART2 = {
  units: [
    {
      id: "ES-M-U3",
      title: "Espanhol nas Fronteiras — Contato, Crioulização e Futuro",
      description: "O espanhol como língua viva em zonas de contato e transformação",
      lessons: [
        {
          id: "ES-M-U3-L1",
          title: "Linguística de Contato — Onde as Línguas se Tocam",
          shadowing: "— Las zonas de contacto lingüístico son laboratorios de la evolución del lenguaje.\n— El español en contacto con el náhuatl generó un español mexicano distinto.\n— Y en contacto con el quechua, un español andino. Con el guaraní, el español paraguayo.\n— Cada contacto deja una huella en la fonética, el léxico y la sintaxis.\n— ¿Y el contacto con el portugués en la frontera?\n— El portuñol riverense en Uruguay es un caso de contacto sistematizado: tiene sus propias reglas.\n— No un error: una lengua en formación.",
          memoryPhrases: [
            "las zonas de contacto = as zonas de contato",
            "dejar una huella = deixar uma marca",
            "la fonética, el léxico y la sintaxis = a fonética, o léxico e a sintaxe",
            "sistematizado = sistematizado",
            "el portuñol riverense = o portunhol do litoral uruguaio",
            "en formación = em formação"
          ],
          oralProduction: "Analise um exemplo de espanhol em zona de contato e explique o que revela sobre a evolução linguística.",
          exercises: [
            { id: "ES-M-U3-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'una zona de contacto lingüístico'?", options: ["Uma área geográfica onde duas línguas coexistem e se influenciam mutuamente", "Uma aula de idiomas", "Um dicionário bilíngue", "Uma fronteira geopolítica"], answer: 0, explanation: "Zona de contacto lingüístico = área onde duas ou mais línguas coexistem e se influenciam — gerando novos léxicos, fonéticas e estruturas sintáticas. Laboratório natural da evolução linguística." },
            { id: "ES-M-U3-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é o 'portuñol riverense'?", options: ["O espanglês uruguaio", "Uma variedade sistematizada de contato entre português e espanhol na fronteira Brasil-Uruguai", "Um erro de comunicação fronteiriço", "Um dialeto brasileiro"], answer: 1, explanation: "Portuñol riverense = variedade de contato sistematizada falada na fronteira Brasil-Uruguai (especialmente em Rivera/Santana do Livramento). Tem suas próprias regras e é reconhecido como variedade legítima." },
            { id: "ES-M-U3-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Cada contacto lingüístico deja una _____ en la fonética, el léxico y la sintaxis.' (Cada contato linguístico deixa uma marca.)", answer: ["huella"], hint: "marca / rastro / impressão deixada por algo", explanation: "Huella = marca / pegada / rastro. 'Dejar una huella' = deixar uma marca. O contato entre línguas sempre deixa traços nas três dimensões: som, vocabulário, estrutura." },
            { id: "ES-M-U3-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'As zonas de contato linguístico são laboratórios da evolução da língua — onde cada língua deixa sua marca na outra e surgem variedades novas.'", answer: ["Las zonas de contacto lingüístico son laboratorios de la evolución del lenguaje, donde cada lengua deja su huella en la otra y surgen nuevas variedades.", "Las zonas de contacto son laboratorios de evolución lingüística: cada lengua marca a la otra y emergen variedades nuevas."], explanation: "Laboratorios de evolución = laboratórios de evolução. Deja su huella = deixa sua marca. Surgen nuevas variedades = surgem novas variedades." },
            { id: "ES-M-U3-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre a fronteira linguística Brasil-Uruguai e o portuñol riverense como caso de criação de nova variedade. Mínimo 12 frases.", prompt: "Inclua: contexto geográfico · como surgiu o portuñol riverense · suas características · seu status linguístico · implicações para o conceito de língua", hint: "En la frontera entre Brasil y Uruguay..., el portuñol riverense surgió como..., sus características principales son..., desde el punto de vista sociolingüístico..., este caso cuestiona..." }
          ]
        },
        {
          id: "ES-M-U3-L2",
          title: "Variação Diacrônica — O Espanhol Através do Tempo",
          shadowing: "— El español de hoy sería incomprensible para un hablante del siglo XII.\n— ¿Y el del siglo XV?\n— Con esfuerzo, algo entenderíamos. El Lazarillo ya nos resulta legible con algo de práctica.\n— ¿Qué ha cambiado más: el léxico, la fonética o la gramática?\n— La fonética radicalmente. La 'v' y la 'b' sonaban diferente. La 'h' se aspiraba. Las sibilantes eran cuatro.\n— ¿Y la gramática?\n— Más conservadora. El español moderno simplificó muchas formas.\n— La lengua como río que siempre fluye.",
          memoryPhrases: [
            "diacrônico = diacrônico (através do tempo)",
            "incomprensible = incompreensível",
            "el Lazarillo = o Lazarillo de Tormes (1554)",
            "las sibilantes = as sibilantes",
            "aspirar = aspirar (a 'h' era pronunciada)",
            "simplificó = simplificou"
          ],
          oralProduction: "Explique as principais mudanças do espanhol do século XV ao XXI em espanhol.",
          exercises: [
            { id: "ES-M-U3-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é a variação 'diacrônica' de uma língua?", options: ["Variação por região geográfica", "Variação através do tempo — como a língua muda de uma época para outra", "Variação por classe social", "Variação por registro"], answer: 1, explanation: "Diacrônica = através do tempo (do grego 'dia' = através, 'chronos' = tempo). Opõe-se a 'sincrônica' (em um momento específico). A linguística diacrônica estuda como a língua evolui." },
            { id: "ES-M-U3-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que eram 'las cuatro sibilantes' do espanhol medieval?", options: ["Quatro sons de /s/ distintos que o espanhol moderno fundiu em dois ou um", "Quatro consoantes", "Quatro tipos de s", "Quatro dialetos"], answer: 0, explanation: "O espanhol medieval tinha 4 sibilantes: /ts/ e /dz/ (escritas c/ç), /s/ e /z/ (escritas s/ss) e /ʃ/ e /ʒ/ (escritas x/j). O espanhol moderno simplificou em 1-2 sons segundo a variedade." },
            { id: "ES-M-U3-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El Lazarillo de Tormes (1554) resulta legible para un lector moderno _____ con algo de práctica.' (O Lazarillo resulta legível para um leitor moderno, embora com alguma prática.)", answer: ["aunque", "aunque sea"], hint: "conector concessivo", explanation: "Aunque = embora. 'Aunque con algo de práctica' = embora com alguma prática. O Lazarillo é um dos primeiros textos legíveis para um leitor moderno do espanhol." },
            { id: "ES-M-U3-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'O espanhol medieval tinha 4 sibilantes distintas que o espanhol moderno fundiu, simplificando radicalmente a fonética.'", answer: ["El español medieval tenía cuatro sibilantes distintas que el español moderno fundió, simplificando radicalmente la fonética.", "El español medieval contaba con cuatro sibilantes diferenciadas que el español moderno fusionó, simplificando drásticamente el sistema fonético."], explanation: "Tenía cuatro sibilantes = tinha quatro sibilantes. Fundió = fundiu. Simplificando radicalmente = simplificando radicalmente." },
            { id: "ES-M-U3-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma linha do tempo comentada das principais transformações do espanhol do século XII ao XXI. Mínimo 10 períodos com comentário.", prompt: "Inclua: século XII (primeiros textos) · século XV (pré-colombiano) · século XVI (Siglo de Oro) · século XVII · século XVIII (RAE) · século XIX · XX · XXI", hint: "Siglo XII: Las jarchas y el Cantar del Mío Cid muestran..., Siglo XV: la lengua de Cervantes..., Siglo XVIII: fundación de la RAE (1713)..." }
          ]
        },
        {
          id: "ES-M-U3-L3",
          title: "Escrita Multimodal — Espanhol Digital e Novos Gêneros",
          shadowing: "— Los géneros digitales están creando nuevas normas que la academia tardará en reconocer.\n— El hilo de Twitter, el podcast, la newsletter: ¿son géneros literarios?\n— Son géneros con sus propias retóricas. El hilo tiene su estructura narrativa específica.\n— ¿Y la lengua que usan?\n— Híbrida: entre lo oral y lo escrito. Con emojis como signos de puntuación.\n— ¿La RAE puede mantener el ritmo?\n— Nunca ha podido. La calle siempre va primero.\n— Y el español siempre llega donde la gente vive.",
          memoryPhrases: [
            "los géneros digitales = os gêneros digitais",
            "el hilo de Twitter = o thread do Twitter",
            "la newsletter = a newsletter",
            "la retórica específica = a retórica específica",
            "híbrida entre lo oral y lo escrito = híbrida entre o oral e o escrito",
            "el emoji como signo de puntuación = o emoji como sinal de pontuação"
          ],
          oralProduction: "Analise as retóricas específicas de 3 gêneros digitais em espanhol.",
          exercises: [
            { id: "ES-M-U3-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é a 'retórica específica' de um gênero digital?", options: ["O vocabulário usado", "As convenções, estruturas e técnicas comunicativas próprias de cada formato digital", "O design visual", "O algoritmo"], answer: 1, explanation: "Retórica específica = as convenções retóricas de cada gênero. O thread tem sua estrutura (gancho, desenvolvimento, conclusão por tweet). O podcast tem sua retórica oral. A newsletter tem a sua." },
            { id: "ES-M-U3-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'entre lo oral y lo escrito'?", options: ["Nem oral nem escrito", "Um registro híbrido que combina características da fala e da escrita — como as mensagens de texto", "Uma nova língua", "O espanhol formal"], answer: 1, explanation: "Os gêneros digitais (WhatsApp, Twitter, DMs) criam um registro híbrido: tem a espontaneidade e informalidade da fala, mas a permanência e fixidez da escrita. Fenômeno linguístico novo." },
            { id: "ES-M-U3-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Los emojis funcionan como _____ de puntuación en los textos digitales informales.' (Os emojis funcionam como sinais de pontuação.)", answer: ["signos", "señales"], hint: "sinais / indicadores", explanation: "Signos / señales = sinais. 'Signos de puntuación' = sinais de pontuação. Os emojis codificam tom, emoção e ênfase — funções da pontuação tradicional e mais." },
            { id: "ES-M-U3-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Os gêneros digitais estão criando novas retóricas que a academia demorará a reconhecer — mas a língua sempre vai onde a gente vive.'", answer: ["Los géneros digitales están creando nuevas retóricas que la academia tardará en reconocer, pero la lengua siempre llega donde la gente vive.", "Los géneros digitales crean nuevas retóricas que la academia tardará en reconocer, pero la lengua siempre va donde vive la gente."], explanation: "Están creando = estão criando. Tardará en reconocer = demorará a reconhecer. La lengua siempre llega / va donde la gente vive = a língua sempre vai onde as pessoas vivem." },
            { id: "ES-M-U3-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um thread de 10 tweets em espanhol sobre um tema de sua escolha, seguindo as convenções retóricas do formato. Depois analise as escolhas que fez.", prompt: "O thread: gancho no primeiro tweet, desenvolvimento, conclusão memorável no último. A análise: por que cada decisão.", hint: "Tweet 1 (gancho): Hay algo que nadie te dice sobre..., Tweet 2-8: desarrolla el argumento, Tweet 9: giro inesperado, Tweet 10: conclusión que se comparte." }
          ]
        },
        {
          id: "ES-M-U3-L4",
          title: "Inteligência Artificial e o Espanhol — Língua na Era das Máquinas",
          shadowing: "— Los modelos de lenguaje han aprendido español de millones de textos. ¿Hablan español?\n— Generan español. Es diferente.\n— ¿Por qué diferente?\n— Porque hablar implica intención, contexto, historia personal. Los modelos optimizan la probabilidad de la siguiente palabra.\n— Pero el resultado puede ser indistinguible del humano.\n— A veces. Pero el español de la IA no tiene duende. Tiene corrección.\n— ¿Y eso es un problema?\n— Depende para qué. Para un formulario, no. Para un poema, todo.",
          memoryPhrases: [
            "los modelos de lenguaje = os modelos de linguagem",
            "generar vs hablar = gerar vs falar",
            "optimizar la probabilidad = otimizar a probabilidade",
            "indistinguible = indistinguível",
            "no tiene duende = não tem duende",
            "para un formulario vs para un poema = para um formulário vs para um poema"
          ],
          oralProduction: "Debata em espanhol o que a IA pode e não pode fazer com a língua espanhola.",
          exercises: [
            { id: "ES-M-U3-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é a diferença entre 'generar' e 'hablar' em relação à IA?", options: ["São iguais", "Gerar = produzir texto otimizando probabilidade estatística. Falar = comunicar com intenção, contexto e história pessoal", "A IA fala melhor", "Humanos geram, IA fala"], answer: 1, explanation: "A distinção é fundamental: a IA otimiza a probabilidade estatística da próxima palavra com base em padrões de treinamento. Humanos falam com intenção, subjetividade, contexto vivido — mesmo que o output seja semelhante." },
            { id: "ES-M-U3-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el español de la IA no tiene duende'?", options: ["A IA não tem alma ou força irracional", "O espanhol da IA não tem a força misteriosa, irracional e vital que Lorca chamou de duende — pode ter correção mas não esse algo indefinível", "A IA não é boa em espanhol", "O duende é difícil de aprender"], answer: 1, explanation: "El duende de Lorca = força misteriosa que aparece na arte no seu pico de intensidade. A IA pode gerar espanhol correto e até belo — mas o duende, que vem da mortalidade, da urgência e do risco, está ausente." },
            { id: "ES-M-U3-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Para un formulario, la IA es suficiente. Para un poema, _____.' (Para um formulário, a IA é suficiente. Para um poema, é tudo.)", answer: ["es todo", "la diferencia es todo", "lo cambia todo"], hint: "o contraste máximo — o que falta é tudo", explanation: "Es todo / lo cambia todo = é tudo / muda tudo. O contraste: para tarefas funcionais a IA funciona. Para arte, o que falta (duende, intenção, risco, mortalidade) é justamente o que mais importa." },
            { id: "ES-M-U3-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'A IA gera espanhol correto mas sem duende — e isso não é um defeito técnico mas uma diferença ontológica entre a máquina e o ser que vai morrer.'", answer: ["La IA genera español correcto pero sin duende, y eso no es un defecto técnico sino una diferencia ontológica entre la máquina y el ser que va a morir.", "La IA produce español correcto pero carente de duende: no es un fallo técnico sino una diferencia ontológica entre la máquina y el ser mortal."], explanation: "Genera = gera. Sin duende = sem duende. Diferencia ontológica = diferença ontológica. El ser que va a morir / el ser mortal = o ser que vai morrer / o ser mortal." },
            { id: "ES-M-U3-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre o que a IA pode e não pode fazer com a língua espanhola — e o que isso revela sobre a própria natureza da linguagem. Mínimo 12 frases.", prompt: "Inclua: o que a IA faz bem · o que a IA não pode fazer · o que isso revela sobre a linguagem humana · o futuro do espanhol com IA · sua posição", hint: "La IA puede..., sin embargo, lo que no puede es..., esto revela que el lenguaje humano es fundamentalmente..., el futuro del español con IA será..." }
          ]
        },
        {
          id: "ES-M-U3-L5",
          title: "Revisão Master U3 — Espanhol como Campo de Forças",
          shadowing: "— El español no es una entidad fija: es un campo de fuerzas en permanente tensión.\n— Tradición vs innovación. Purismo vs contacto. Estándar vs variedades.\n— Y ahora: humano vs artificial.\n— Todas esas tensiones son lo que lo mantiene vivo.\n— Una lengua sin tensión es una lengua muerta.\n— Como el latín.\n— O como cualquier lengua que deje de cambiar.\n— El español cambia. Por eso sobrevive.\n— Y por eso nos habita.",
          memoryPhrases: [
            "el campo de fuerzas = o campo de forças",
            "en permanente tensión = em permanente tensão",
            "purismo vs contacto = purismo vs contato",
            "una lengua muerta = uma língua morta",
            "dejar de cambiar = parar de mudar",
            "nos habita = nos habita"
          ],
          oralProduction: "Sintetize em espanhol as forças que moldam o espanhol contemporâneo.",
          exercises: [
            { id: "ES-M-U3-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el español como campo de fuerzas'?", options: ["O espanhol é forte", "O espanhol é um sistema vivo definido pela tensão dinâmica entre forças opostas", "O espanhol tem muitos dialetos", "O espanhol é poderoso politicamente"], answer: 1, explanation: "Campo de fuerzas = campo de forças. O espanhol não é uma entidade estática mas uma tensão dinâmica entre forças opostas: purismo/inovação, padrão/variedade, oral/escrito, humano/artificial." },
            { id: "ES-M-U3-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Por que 'una lengua sin tensión es una lengua muerta'?", options: ["Porque as línguas mortas não têm conflitos", "Porque a mudança e a tensão são sinais de vitalidade — uma língua que não muda é porque não tem falantes vivos que a transformem", "Porque o latim não era tenso", "Porque a tensão gera conflito"], answer: 1, explanation: "A mudança linguística é sinal de vida. O latim 'morreu' no sentido de que deixou de mudar — porque os seus falantes passaram a falar as línguas românicas. Uma língua que muda é uma língua com falantes vivos." },
            { id: "ES-M-U3-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El español _____, por eso sobrevive y por eso nos habita.' (O espanhol muda, por isso sobrevive e por isso nos habita.)", answer: ["cambia"], hint: "verbo mudar / cambiar no presente", explanation: "Cambia = muda. 'El español cambia' = o espanhol muda. O presente simples indica verdade geral — e aqui também otimismo: segue mudando, segue vivo." },
            { id: "ES-M-U3-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Uma língua sem tensão é uma língua morta. O espanhol muda, se tensiona e se contradiz — por isso sobrevive, por isso nos habita.'", answer: ["Una lengua sin tensión es una lengua muerta. El español cambia, se tensa y se contradice: por eso sobrevive, por eso nos habita.", "Una lengua sin tensión es lengua muerta. El español cambia, se tensa, se contradice: por eso vive y por eso nos habita."], explanation: "Sin tensión = sem tensão. Se tensa y se contradice = se tensiona e se contradiz. Por eso sobrevive / vive = por isso sobrevive / vive." },
            { id: "ES-M-U3-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre o espanhol como campo de forças em tensão. Quais são as forças? Como se equilibram? O que revelam sobre a natureza das línguas vivas? Mínimo 12 frases.", prompt: "Inclua: as forças em tensão · exemplos concretos de cada tensão · como o espanhol sobrevive pela mudança · o futuro do espanhol · sua posição sobre qual força é mais vital", hint: "El español existe en la tensión entre..., un ejemplo de la tensión purismo/contacto es..., lo que revela esta dinámica es que..., el futuro del español dependerá de..." }
          ]
        }
      ]
    },
    {
      id: "ES-M-U4",
      title: "O Escritor Bilíngue — Legado e Responsabilidade",
      description: "A responsabilidade do escritor bilíngue e seu papel na cultura hispânica",
      lessons: [
        {
          id: "ES-M-U4-L1",
          title: "Escritores Bilíngues e o Espanhol como Segunda Língua Literária",
          shadowing: "— Hay una tradición de grandes escritores que eligieron el español como segunda lengua literaria.\n— Jhumpa Lahiri eligió el italiano. Samuel Beckett, el francés.\n— ¿Y en español?\n— Autores de origen árabe, chino o japonés que han escrito novelas en español.\n— ¿Por qué eligen la segunda lengua?\n— Por la distancia que permite. Por el extrañamiento productivo.\n— La segunda lengua como liberación.\n— Y como desafío. Escribir en la lengua del otro es apropiarse de ella sin traicionarla.",
          memoryPhrases: [
            "el extrañamiento productivo = o estranhamento produtivo",
            "apropiarse de = se apropriar de",
            "sin traicionarla = sem traí-la",
            "la lengua del otro = a língua do outro",
            "como liberación = como liberação",
            "la tradición de = a tradição de"
          ],
          oralProduction: "Analise por que escritores escolhem escrever em uma segunda língua em vez de sua língua materna.",
          exercises: [
            { id: "ES-M-U4-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el extrañamiento productivo' ao escrever em L2?", options: ["Sentir-se estranho ao escrever", "A distância da L2 que gera um estranhamento criativo — ver o mundo com olhos ligeiramente diferentes, o que pode revelar o que a L1 não vê", "Um erro de escrita", "Um efeito literário"], answer: 1, explanation: "Extrañamiento productivo = estranhamento produtivo. A L2 cria uma distância ligeira do eu — como ver o mundo em outra frequência. Essa distância pode revelar coisas que a imediatidade da L1 esconde." },
            { id: "ES-M-U4-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'apropiarse de la lengua del otro sin traicionarla'?", options: ["Roubar a língua", "Fazer a língua sua — encontrar sua voz dentro dela — sem distorcer nem trair suas tradições e especificidades", "Traduzir sem erros", "Imitar perfeitamente"], answer: 1, explanation: "Apropiarse de = se apropriar de (fazer seu). Sin traicionarla = sem traí-la. O paradoxo do escritor em L2: deve ser ele mesmo na língua do outro, sem apagar nem a si mesmo nem a língua." },
            { id: "ES-M-U4-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Escribir en la lengua del otro es _____ de ella sin traicionarla.' (Escrever na língua do outro é se apropriar dela sem traí-la.)", answer: ["apropiarse"], hint: "verbo se apropriar", explanation: "Apropiarse = se apropriar. 'Apropiarse de la lengua' = fazer a língua sua / dominá-la a ponto de criar nela com liberdade." },
            { id: "ES-M-U4-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Escritores como Beckett escolheram a segunda língua pela distância que permite — o estranhamento produtivo que a L1, pela sua imediatidade, não oferece.'", answer: ["Escritores como Beckett eligieron la segunda lengua por la distancia que permite: el extrañamiento productivo que la L1, por su inmediatez, no ofrece.", "Escritores como Beckett optaron por la segunda lengua a causa de la distancia que esta ofrece: el extrañamiento productivo que la lengua materna, por su inmediatez, no permite."], explanation: "Eligieron / optaron por = escolheram. La distancia que permite = a distância que permite. La inmediatez = a imediatidade." },
            { id: "ES-M-U4-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre o que significa para você, como brasileiro, escrever em espanhol. É traição à sua L1? É apropriação da L2? É algo novo? Mínimo 15 frases.", prompt: "Inclua: sua relação pessoal com as duas línguas · o que o espanhol permite que o português não · o que você perde · o que você ganha · o que acha sobre escrever literatura em L2", hint: "Para mí, escribir en español no es traicionar el portugués sino..., lo que el español me permite es..., sin embargo, lo que pierdo es..., me pregunto si..." }
          ]
        },
        {
          id: "ES-M-U4-L2",
          title: "A Responsabilidade do Escritor em Espanhol",
          shadowing: "— Escribir en español es entrar en conversación con una tradición de quinientos años.\n— Y con quinientos millones de personas vivas.\n— Eso es una responsabilidad y un privilegio.\n— ¿Qué responsabilidad exactamente?\n— La de no tratar el español como un instrumento: la de habitarlo.\n— Y la de devolverle algo.\n— ¿Qué puede devolver un escritor a una lengua?\n— Palabras nuevas. Formas nuevas. Mundos que sin él no existirían en esa lengua.",
          memoryPhrases: [
            "entrar en conversación con = entrar em conversa com",
            "una tradición de quinientos años = uma tradição de quinhentos anos",
            "un privilegio = um privilégio",
            "devolverle algo = devolver algo a ela",
            "mundos que sin él no existirían = mundos que sem ele não existiriam",
            "no tratar como instrumento = não tratar como instrumento"
          ],
          oralProduction: "Fale sobre sua responsabilidade como falante de espanhol em relação à língua e à cultura hispânica.",
          exercises: [
            { id: "ES-M-U4-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'entrar en conversación con una tradición de quinientos años'?", options: ["Estudar história", "Reconhecer que ao escrever em espanhol você entra num diálogo com toda a tradição literária e cultural de 500 anos", "Falar com pessoas antigas", "Ler clássicos"], answer: 1, explanation: "Entrar en conversación = entrar em diálogo / em conversação. Ao escrever em espanhol, você entra involuntariamente em conversa com Cervantes, Lorca, García Márquez, com toda a tradição." },
            { id: "ES-M-U4-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'devolverle algo a la lengua'?", options: ["Parar de usar a língua", "Contribuir com a língua — com palavras, formas, mundos novos que enriquecem o espanhol", "Devolver um livro", "Pagar pela língua"], answer: 1, explanation: "Devolverle = devolver a ela. A ideia: a língua nos deu mundos — nossa obrigação é contribuir com algo de volta. Palavras novas, metáforas novas, visões do mundo que sem nós não existiriam em espanhol." },
            { id: "ES-M-U4-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Un escritor puede devolver a la lengua palabras nuevas y _____ que sin él no existirían.' (Um escritor pode devolver à língua palavras novas e mundos que sem ele não existiriam.)", answer: ["mundos"], hint: "o que a literatura cria", explanation: "Mundos = mundos. 'Mundos que sin él no existirían' = mundos que sem ele não existiriam. A literatura cria mundos possíveis que enriquecem o repertório da língua." },
            { id: "ES-M-U4-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Escrever em espanhol é entrar em conversa com quinhentos anos de tradição e quinhentos milhões de pessoas vivas — isso é responsabilidade e privilégio ao mesmo tempo.'", answer: ["Escribir en español es entrar en conversación con quinientos años de tradición y quinientos millones de personas vivas: eso es responsabilidad y privilegio al mismo tiempo.", "Escribir en español supone entrar en diálogo con quinientos años de tradición y con quinientos millones de personas vivas, lo que constituye a la vez una responsabilidad y un privilegio."], explanation: "Entrar en conversación/diálogo con = entrar em conversa/diálogo com. A la vez = ao mesmo tempo. Responsabilidad y privilegio = responsabilidade e privilégio." },
            { id: "ES-M-U4-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma carta aberta à língua espanhola — o que você recebeu dela e o que pretende devolver. Mínimo 15 frases.", prompt: "Destinatária: a língua espanhola. Estilo: carta literária. Tom: pessoal e reflexivo. Alta qualidade de escrita.", hint: "Querido español..., cuando te encontré..., lo que me diste fue..., lo que temo no haberte dado es..., lo que me comprometo a devolverte es..., gracias por..." }
          ]
        },
        {
          id: "ES-M-U4-L3",
          title: "Brasil e o Espanhol — Uma Relação Necessária",
          shadowing: "— Brasil es el único país grande de América Latina sin el español como lengua oficial.\n— Una anomalía geográfica y cultural.\n— ¿O una singularidad?\n— Quizás. El portugués brasileño es el más rico y vivo de los lusófonos. Y eso tiene que ver con la frontera.\n— ¿Con el español?\n— Con el contacto. Con la tensión. El portugués brasileño creció rozando el español durante siglos.\n— La frontera como fertilizador.\n— Y el español como espejo necesario para entender el portugués.",
          memoryPhrases: [
            "la anomalía = a anomalia",
            "la singularidad = a singularidade",
            "los lusófonos = os lusófonos",
            "rozar = roçar / friccionar",
            "el fertilizador = o fertilizador",
            "el espejo necesario = o espelho necessário"
          ],
          oralProduction: "Analise a relação entre Brasil, o português brasileiro e o espanhol em espanhol.",
          exercises: [
            { id: "ES-M-U4-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'la frontera como fertilizador'?", options: ["A fronteira física como terra fértil", "O contato e a tensão nas fronteiras como força que enriquece e vitaliza as línguas que se tocam", "A agricultura nas fronteiras", "A criação de novas línguas"], answer: 1, explanation: "La frontera como fertilizador = a fronteira como fertilizante. O contato linguístico nas fronteiras — a tensão, o empréstimo, a influência mútua — enriquece as línguas. O português brasileiro cresceu 'rozando' (roçando) o espanhol por séculos." },
            { id: "ES-M-U4-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el español como espejo necesario para entender el portugués'?", options: ["O espanhol é mais claro que o português", "O contraste com o espanhol revela aspectos do português que sem esse espelho seriam invisíveis", "O espanhol é necessário no Brasil", "O português precisa do espanhol para existir"], answer: 1, explanation: "O espanhol como espelho = o contraste com o espanhol (semelhante mas diferente) revela aspectos do português que sem essa comparação seriam invisíveis. O espelho mostra o que não vemos em nós mesmos." },
            { id: "ES-M-U4-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Brasil es una _____ geográfica: el único gran país latinoamericano sin español como lengua oficial.' (O Brasil é uma anomalia geográfica.)", answer: ["anomalía"], hint: "algo fora do padrão / irregular", explanation: "Anomalía = anomalia. O Brasil é rodeado por 10 países hispanohablantes mas tem o português como língua oficial — uma anomalia única na América Latina." },
            { id: "ES-M-U4-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'O português brasileiro cresceu roçando o espanhol durante séculos — a fronteira como fertilizador, o espanhol como espelho necessário.'", answer: ["El portugués brasileño creció rozando el español durante siglos: la frontera como fertilizador, el español como espejo necesario.", "El portugués de Brasil creció en contacto constante con el español a lo largo de siglos: la frontera como fertilizante, el español como espejo imprescindible."], explanation: "Rozando = roçando / em contato. La frontera como fertilizador = a fronteira como fertilizador. El español como espejo necesario = o espanhol como espelho necessário." },
            { id: "ES-M-U4-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre a relação entre o Brasil e o espanhol — por que um brasileiro aprende espanhol com mais facilidade e por que essa proximidade também cria dificuldades específicas. Mínimo 12 frases.", prompt: "Inclua: vantagens da proximidade linguística · armadilhas específicas · portuñol como problema e solução · o que o espanhol revela sobre o português · sua experiência pessoal", hint: "La proximidad entre el portugués y el español es..., sin embargo, esta misma proximidad crea..., el portuñol es..., lo que el español me ha revelado sobre mi propia lengua es..." }
          ]
        },
        {
          id: "ES-M-U4-L4",
          title: "Ler, Escrever, Pensar — A Tríade do Falante Master",
          shadowing: "— A este nivel, leer, escribir y pensar en español son la misma cosa.\n— ¿Por qué la misma cosa?\n— Porque leer bien informa el escribir. Escribir bien afina el pensar. Pensar bien enriquece el leer.\n— Una espiral ascendente.\n— Y sin fin.\n— ¿Cuál de los tres es el más difícil?\n— El pensar. Es el último en ceder a la segunda lengua.\n— ¿Y cuándo cede?\n— Cuando ya no notas que estás pensando en español. Cuando el pensamiento simplemente ocurre.",
          memoryPhrases: [
            "la espiral ascendente = a espiral ascendente",
            "afinar = afinar / apurar",
            "ceder a = ceder a",
            "el último en ceder = o último a ceder",
            "simplemente ocurre = simplesmente acontece",
            "informa el escribir = informa o escrever"
          ],
          oralProduction: "Reflita em espanhol sobre a relação entre ler, escrever e pensar na sua experiência com a língua.",
          exercises: [
            { id: "ES-M-U4-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la espiral ascendente' de ler, escrever e pensar?", options: ["Uma espiral descendente", "A melhora contínua e mútua das três habilidades — cada uma que melhora eleva as outras", "Uma metáfora visual", "Um processo linear"], answer: 1, explanation: "Espiral ascendente = espiral ascendente. Cada melhora em leitura melhora a escrita; cada melhora em escrita afina o pensamento; cada melhora no pensamento enriquece a leitura. Ciclo virtuoso sem fim." },
            { id: "ES-M-U4-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "Por que 'pensar' é 'el último en ceder' a uma segunda língua?", options: ["O pensamento é mais difícil", "O pensamento está mais profundamente vinculado à L1 — é o último nível de imersão antes da fluência total", "A gramática do pensamento é diferente", "O pensamento não precisa de língua"], answer: 1, explanation: "O pensamento está vinculado à L1 nos níveis mais profundos do inconsciente. A fala cede à L2 primeiro (nível mais consciente), depois a escrita, por último o pensamento espontâneo — que é o grau máximo de imersão." },
            { id: "ES-M-U4-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Cuando el pensamiento en español _____ sin que lo notes, has llegado.' (Quando o pensamento em espanhol acontece sem que você perceba, você chegou.)", answer: ["ocurre", "sucede", "fluye"], hint: "verbo para algo que acontece espontaneamente", explanation: "Ocurre / sucede / fluye = acontece / ocorre / flui. O grau máximo de imersão: o pensamento simplesmente ocorre em espanhol, sem mediação consciente." },
            { id: "ES-M-U4-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'No nível Master, ler, escrever e pensar em espanhol são a mesma coisa — uma espiral ascendente sem fim.'", answer: ["En el nivel Master, leer, escribir y pensar en español son la misma cosa: una espiral ascendente sin fin.", "En el nivel Master, leer, escribir y pensar en español se funden en una sola actividad: una espiral ascendente que no tiene fin."], explanation: "Son la misma cosa = são a mesma coisa. Se funden = se fundem. Espiral ascendente sin fin = espiral ascendente sem fim." },
            { id: "ES-M-U4-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio sobre a relação entre ler, escrever e pensar na sua experiência com o espanhol. Em que momento as três atividades se tornaram a mesma coisa? Mínimo 15 frases.", prompt: "Inclua: como começou cada uma · quando percebeu a espiral ascendente · o momento em que pensar em espanhol se tornou espontâneo · o que ainda falta · o que vem depois", hint: "Cuando empecé a leer en español..., escribir me ayudó a..., el momento en que noté que estaba pensando en español fue cuando..., lo que falta es..." }
          ]
        },
        {
          id: "ES-M-U4-L5",
          title: "Manifesto do Falante Master — Declaração de Pertença",
          shadowing: "— Llegados aquí, una pregunta: ¿el español es tuyo?\n— En la medida en que cualquier lengua puede ser de alguien, sí.\n— ¿Y en qué medida?\n— Las lenguas no se poseen: se habitan. Y lo que se habita, nos posee.\n— Una posesión mutua.\n— La única posesión que vale: la que te cambia mientras la tienes.\n— ¿Qué te ha cambiado el español?\n— Lo que aún no sé responder del todo. Y esa incapacidad es la respuesta.",
          memoryPhrases: [
            "llegados aquí = chegados aqui / chegados a este ponto",
            "en la medida en que = na medida em que",
            "las lenguas no se poseen = as línguas não se possuem",
            "nos posee = nos possui",
            "la posesión mutua = a posse mútua",
            "la incapacidad es la respuesta = a incapacidade é a resposta"
          ],
          oralProduction: "Faça sua declaração de pertença ao espanhol — em que medida o espanhol é seu?",
          exercises: [
            { id: "ES-M-U4-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'lo que se habita, nos posee'?", options: ["As casas nos pertencem", "Aquilo que habitamos (língua, cultura, lugar) também nos forma e nos transforma — uma posse mútua", "Habitamos as línguas", "As línguas nos controlam"], answer: 1, explanation: "'Lo que se habita, nos posee' = o que habitamos, nos possui. A posse é mútua e transformadora — ao habitar o espanhol, ele também nos habita e nos modifica. Não possuímos a língua: nos possuímos mutuamente." },
            { id: "ES-M-U4-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la incapacidad es la respuesta'?", options: ["Não saber é fracasso", "Não conseguir responder totalmente é o sinal mais honesto de que a experiência foi real e profunda", "Resposta incapaz", "Uma limitação"], answer: 1, explanation: "La incapacidad es la respuesta = a incapacidade é a resposta. Quando não conseguimos responder completamente 'como o espanhol me mudou', é porque a mudança foi tão profunda que ainda está em processo — e isso é o maior sinal de sucesso." },
            { id: "ES-M-U4-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Las lenguas no se _____, se habitan.' (As línguas não se possuem, se habitam.)", answer: ["poseen"], hint: "verbo possuir no presente reflexivo", explanation: "Se poseen = se possuem. 'Las lenguas no se poseen: se habitan' = as línguas não se possuem: se habitam. A distinção entre posse (objeto) e habitar (sujeito que vive dentro)." },
            { id: "ES-M-U4-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'As línguas não se possuem: se habitam. E o que habitamos nos possui — uma posse mútua, a única que vale, a que te transforma enquanto a tens.'", answer: ["Las lenguas no se poseen: se habitan. Y lo que habitamos nos posee: una posesión mutua, la única que vale, la que te transforma mientras la tienes.", "Las lenguas no son una posesión: son un hábitat. Y lo que nos habita, nos posee: posesión mutua, la única verdadera, la que te cambia mientras la tienes."], explanation: "No se poseen: se habitan = não se possuem: se habitam. La que te transforma mientras la tienes = a que te transforma enquanto a tens." },
            { id: "ES-M-U4-L5-E5", type: "free_writing", skill: "writing", question: "Escreva seu Manifesto Master — sua declaração definitiva de pertença ao espanhol. Em que medida o espanhol é seu? Em que medida você é do espanhol? O que essa língua te fez? O que você fez com ela? Mínimo 20 frases. Este é o último e mais importante texto deste curso.", prompt: "Sem instruções. Você chegou. Escreva.", hint: "—" }
          ]
        }
      ]
    }
  ]
};
