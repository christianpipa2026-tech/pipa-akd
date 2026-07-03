export const CURRICULUM_ES_MASTER_PART1 = {
  units: [
    {
      id: "ES-M-U1",
      title: "Estilo Literario Propio — La Voz del Escritor",
      description: "Desarrollo de una voz autoral propia en español",
      lessons: [
        {
          id: "ES-M-U1-L1",
          title: "El Estilo Como Identidad — Más Allá de la Corrección",
          shadowing: "— La corrección es el suelo. El estilo es la arquitectura.\n— ¿Cómo se construye un estilo propio?\n— No se construye: se descubre. Escribiendo sin miedo y leyendo con obsesión.\n— ¿Y los maestros? ¿Se imitan?\n— Se devoran. Luego se digieren. Lo que queda es tuyo.\n— ¿Y si lo que queda suena igual que ellos?\n— Entonces aún no has terminado de digerir. Sigue escribiendo.\n— ¿Cuándo sabrás que tienes voz propia?\n— Cuando alguien lea tu texto sin firma y sepa que eres tú.",
          memoryPhrases: [
            "el suelo = o chão / a base",
            "devorar = devorar (leer con avidez)",
            "digerir = digerir (asimilar)",
            "la voz propia = a voz própria",
            "sin firma = sem assinatura",
            "sigue escribiendo = continue escrevendo"
          ],
          oralProduction: "Descreva em espanhol o estilo de um escritor que você admira e o que tomou emprestado dele.",
          exercises: [
            { id: "ES-M-U1-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'devorar a los maestros' em contexto literário?", options: ["Criticá-los destruindo suas ideias", "Lê-los com avidez total para assimilar profundamente seu estilo e visão", "Imitá-los superficialmente", "Descartá-los depois de lidos"], answer: 1, explanation: "Devorar = absorver vorazmente. Devoramos os mestres para nos nutrir deles — o objetivo é a digestão total, que transforma o que lemos em algo próprio." },
            { id: "ES-M-U1-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa ter 'voz propia' como escritor?", options: ["Escrever com estilo único e reconhecível", "Falar muito", "Ter um vocabulário muito amplo", "Não imitar ninguém"], answer: 0, explanation: "Voz propia = estilo único e reconhecível. Quando alguém lê seu texto sem assinatura e reconhece que é você — pela sintaxe, pelo ritmo, pelas imagens escolhidas, pela visão de mundo." },
            { id: "ES-M-U1-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Lo que los maestros te dan, una vez digerido, se convierte en algo _____.' (O que os mestres te dão, uma vez digerido, se torna algo seu.)", answer: ["tuyo", "propio"], hint: "possessivo de segunda pessoa", explanation: "Tuyo / propio = seu / próprio. O processo: devorar → digerir → o que resta é tuyo. A criatividade nasce da assimilação profunda." },
            { id: "ES-M-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'A correção é o chão; o estilo é a arquitetura. Um sem o outro não funciona — mas confundi-los é o erro mais comum.'", answer: ["La corrección es el suelo; el estilo es la arquitectura. Uno sin el otro no funciona, pero confundirlos es el error más común.", "La corrección es el suelo y el estilo es la arquitectura. Sin lo uno no hay lo otro, pero confundirlos es el error más frecuente."], explanation: "El suelo = o chão / a base. La arquitectura = a arquitetura. Confundirlos = confundi-los." },
            { id: "ES-M-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um texto sobre o seu próprio estilo de escrita em espanhol — o que você usa, o que evita, de quem aprendeu cada coisa. Mínimo 15 frases.", prompt: "Inclua: ritmo de frases · vocabulário preferido · imagens recorrentes · autores que devorou · o que ainda está aprendendo a digerir", hint: "Mi estilo tiende a..., lo que intento evitar es..., de Borges tomé..., de García Márquez aprendí..., lo que aún no logro es..." }
          ]
        },
        {
          id: "ES-M-U1-L2",
          title: "A Frase Perfeita — Ritmo, Cadência e Precisão",
          shadowing: "— Hay frases que se recuerdan para siempre. '¿Por qué lloras? / No lloro; tengo los ojos que gotean.' ¿Por qué funciona?\n— Por la paradoja, sí. Pero sobre todo por el ritmo: dos segmentos casi iguales en extensión, con giro al final.\n— ¿La longitud importa?\n— Todo importa. La longitud, el sonido de las palabras, las pausas, el acento de la última sílaba.\n— ¿Se puede aprender a escribir frases perfectas?\n— Se puede aprender a reconocerlas. Luego viene la obsesión de crearlas.",
          memoryPhrases: [
            "gotear = pingar / gotejar",
            "el giro al final = a virada no final",
            "la cadencia = a cadência",
            "el acento de la última sílaba = o acento da última sílaba",
            "la paradoja = o paradoxo",
            "el segmento = o segmento"
          ],
          oralProduction: "Cite e analise 3 frases perfectas em espanhol que você admira, explicando por que funcionam.",
          exercises: [
            { id: "ES-M-U1-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la cadencia' de uma frase?", options: ["O significado", "O ritmo e fluxo sonoro das palavras — como soa ao ser lida", "A gramática", "A extensão"], answer: 1, explanation: "Cadencia = cadência. O ritmo e fluxo sonoro de uma frase — como as sílabas tônicas e átonas se alternam, como as pausas se distribuem, como o som conclui." },
            { id: "ES-M-U1-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "Por que 'el giro al final' é importante numa frase memorável?", options: ["Porque é surpresa", "Porque a última posição é a mais forte cognitivamente — o leitor a retém mais", "Porque é mais longa", "Porque é a mais fácil de escrever"], answer: 1, explanation: "O final de uma frase é a posição de maior destaque cognitivo. O leitor retém o que vem no final — por isso o giro (inversão ou surpresa) no final maximiza o impacto." },
            { id: "ES-M-U1-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Se puede aprender a _____ la frase perfecta. Crearla viene después, con la práctica y la obsesión.' (Pode-se aprender a reconhecer a frase perfeita.)", answer: ["reconocer"], hint: "identificar / perceber quando algo está certo", explanation: "Reconocer = reconhecer. Primeiro aprendemos a reconhecer a excelência — só depois de reconhecê-la conseguimos criar." },
            { id: "ES-M-U1-L2-E4", type: "translation", skill: "writing", question: "Reescreva com mais cadência e impacto: 'Era una persona que siempre llegaba tarde a todas partes.'", answer: ["Siempre llegaba tarde. A todas partes, a todas las cosas, a sí mismo.", "Era de los que llegan tarde: a las citas, a las decisiones, a la vida."], explanation: "A versão Master quebra a frase, cria ritmo, usa a posição final de 'a sí mismo' ou 'a la vida' para o golpe mais forte. Cada decisão de pontuação é uma decisão de ritmo." },
            { id: "ES-M-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva 10 frases que você considera 'perfectas' em espanhol, cada uma sobre um tema diferente. Depois analise o que as une.", prompt: "Uma frase sobre: silêncio · saudade · tempo · infância · medo · amor · cidade · livro · espera · partida.", hint: "Cada frase: máximo 20 palavras. Trabalhe o ritmo, a última palavra, a imagem central. Depois analise: ¿qué tienen en común?" }
          ]
        },
        {
          id: "ES-M-U1-L3",
          title: "A Arte da Descrição — Mostrar sem Dizer",
          shadowing: "— 'Show, don't tell' es el mandamiento número uno de la narrativa.\n— Pero en español tiene matices propios. 'No estaba triste: le pesaban las manos.'\n— Las manos que pesan. Una imagen que hace el trabajo que el adjetivo no puede.\n— Exacto. El adjetivo nombra; la imagen encarna.\n— ¿Y el exceso de imágenes?\n— Es el peligro contrario. La imagen que llama atención sobre sí misma en vez de iluminar el mundo.\n— El equilibrio entre la transparencia y la densidad.\n— Eso es el estilo: tensión permanente entre los dos.",
          memoryPhrases: [
            "show don't tell = mostre não diga",
            "le pesaban las manos = as mãos pesavam a ele",
            "encarnar = encarnar / dar corpo",
            "llamar atención sobre sí misma = chamar atenção para si mesma",
            "la transparencia = a transparência",
            "la densidad = a densidade"
          ],
          oralProduction: "Reescreva 5 descrições 'ditas' convertendo-as em descrições 'mostradas' em espanhol.",
          exercises: [
            { id: "ES-M-U1-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el adjetivo nombra; la imagen encarna'?", options: ["São equivalentes", "O adjetivo etiqueta; a imagem dá corpo físico e sensorial ao que descreve", "A imagem é mais simples", "O adjetivo é mais preciso"], answer: 1, explanation: "Nombrar = nomear (etiquetar abstratamente). Encarnar = encarnar (dar corpo, tornar sensorial). 'Estava triste' = adjetivo. 'Le pesaban los párpados' = imagem que encarna a tristeza." },
            { id: "ES-M-U1-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la imagen que llama atención sobre sí misma'?", options: ["Uma imagem muito bonita", "Uma imagem que é mais espetacular do que funcional — se exibe a si mesma em vez de servir o texto", "Uma imagem irônica", "Uma imagem clara"], answer: 1, explanation: "A imagem 'que se exhibe' é o vício contrário ao excesso de adjetivos: exagero lírico que chama atenção para o escritor em vez de iluminar o mundo narrado. Máximo perigo no C2+." },
            { id: "ES-M-U1-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Reescreva mostrando en vez de dizendo: 'Estaba muy nervioso antes de hablar.' → 'Las palmas de las manos le _____; la voz, cuando empezó, llegó un segundo _____ de donde debía.'", answer: ["sudaban", "tarde"], hint: "detalhes físicos que mostram nervosismo", explanation: "Sudaban / tarde — detalhes físicos que mostram o nervosismo sem nomeá-lo. A imagem faz o trabalho do adjetivo 'nervioso'." },
            { id: "ES-M-U1-L3-E4", type: "translation", skill: "writing", question: "Reescreva mostrando, não dizendo, em espanhol Master: 'Ela estava muito cansada e com saudade de casa.'", answer: ["Cerró los ojos un segundo más de lo necesario. En ese segundo estuvo en otro lado.", "Tardó en reconocer la calle. Le parecieron iguales todas las puertas. Pensó que a esta hora, en su ciudad, ya estarían cenando."], explanation: "O cansaço e a saudade aparecem em detalhes físicos e pensamentos — não são nomeados. 'Em outro lado' e 'sua cidade' encarnام o que 'cansada e com saudade' apenas nomearia." },
            { id: "ES-M-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva uma cena de 200 palavras em espanhol sem usar os adjetivos: triste, feliz, cansado, nervioso, hermoso, interesante. Mostre tudo, não diga nada.", prompt: "Personagem entra num lugar depois de muito tempo. Não nomeie seus sentimentos — mostre-os através de detalhes físicos, gestos e pensamentos.", hint: "Empujó la puerta con el hombro, como siempre. El olor no había cambiado. Eso era lo primero que notó..." }
          ]
        },
        {
          id: "ES-M-U1-L4",
          title: "O Diálogo Literário — Voz, Subtexto e Revelação",
          shadowing: "— En el diálogo literario, lo que no se dice pesa tanto como lo que se dice.\n— Como en Hemingway: la teoría del iceberg.\n— En español tienes además la ventaja del tuteo o el usted: una decisión que lo dice todo.\n— ¿Y los verbos de introducción del diálogo?\n— En la narrativa de calidad: 'dijo' casi siempre. 'Susurró', 'exclamó', 'protestó' son muletas.\n— ¿Por qué?\n— Porque si el diálogo está bien escrito, no necesitas decirle al lector cómo suena.",
          memoryPhrases: [
            "la teoría del iceberg = a teoria do iceberg",
            "el tuteo o el usted = o tratamento de você ou de senhor",
            "los verbos de introducción = os verbos de introdução",
            "las muletas = as muletas (recursos artificiosos)",
            "pesa tanto como = pesa tanto quanto",
            "lo que no se dice = o que não se diz"
          ],
          oralProduction: "Escreva e analise um diálogo de 10 falas em que o subtexto é mais importante que o texto.",
          exercises: [
            { id: "ES-M-U1-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "Por que 'dijo' é preferível a 'exclamó' ou 'susurró' no diálogo literário?", options: ["Porque é mais curto", "Porque a transparência deixa o leitor focar no que é dito, não no como — se o diálogo está bem escrito, o 'como' está dentro dele", "Porque é mais formal", "Porque os outros são informais"], answer: 1, explanation: "'Dijo' é transparente — não interfere. Se você precisa de 'susurró' para que o leitor entenda que a voz era baixa, o diálogo não está funcionando. A voz deve estar dentro das palavras." },
            { id: "ES-M-U1-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que são 'muletas' em escrita literária?", options: ["Personagens com deficiência", "Recursos usados para compensar uma fraqueza do texto — que revelam o que o texto deveria mostrar sozinho", "Figuras de linguagem", "Verbos de movimento"], answer: 1, explanation: "Muletas (literalmente: muletas) = recursos que compensam uma fraqueza. 'Susurró', 'exclamó', adjetivos desnecessários — compensam o que o diálogo ou a cena deveriam mostrar por si mesmos." },
            { id: "ES-M-U1-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete com o verbo mais neutro: '— Tengo que decirte algo —_____ ella, sin mirar.' (Disse ela, sem olhar.)", answer: ["dijo"], hint: "o verbo mais simples e transparente de introdução de diálogo", explanation: "Dijo = disse. O verbo mais transparente. 'Sin mirar' já diz tudo sobre o tom — não precisa de 'susurró' ou 'confesó'." },
            { id: "ES-M-U1-L4-E4", type: "translation", skill: "writing", question: "Reescreva este diálogo eliminando as muletas: '— ¡Me voy! —exclamó él furioso. — Está bien —respondió ella fríamente. — ¿Es todo lo que dices? —protestó él.'", answer: ["— Me voy —dijo él.\n— Está bien.\n— ¿Es todo lo que dices?\nElla no contestó.", "— Me voy.\n— Está bien —dijo ella.\nÉl esperó una respuesta que no llegó."], explanation: "Sem 'exclamó', 'furioso', 'fríamente', 'protestó' — o leitor infere o tom pela situação e pelo diálogo. O silêncio final ('no contestó') é mais poderoso que 'respondió fríamente'." },
            { id: "ES-M-U1-L4-E5", type: "free_writing", skill: "writing", question: "Escreva uma cena de diálogo de 15 falas em espanhol em que dois personagens falam sobre uma coisa mas estão realmente falando sobre outra. Use só 'dijo'.", prompt: "Sugestão: dois ex-amigos que se encontram e falam sobre o tempo enquanto discutem sem dizê-lo sobre o que os separou.", hint: "— ¿Cómo has estado? —dijo él. — Bien. ¿Y tú? (El subtexto: todo lo que no dicen está en los silencios, en las preguntas que no hacen)." }
          ]
        },
        {
          id: "ES-M-U1-L5",
          title: "Reescrita e Edição — A Arte de Cortar",
          shadowing: "— El primer borrador es para ti. La reescritura es para el lector.\n— ¿Cuántas veces reescribes?\n— Hasta que cada palabra justifique su existencia.\n— ¿Y si una frase es hermosa pero no funciona?\n— La cortas. Eso es lo más difícil: matar a los hijos favoritos.\n— ¿Cómo sabes cuándo un texto está listo?\n— Cuando ya no puedes mejorar nada. Solo empeorar.\n— O cuando ya no puedes verlo con ojos frescos.\n— Eso también. Por eso existe el tiempo entre versiones.",
          memoryPhrases: [
            "el borrador = o rascunho",
            "la reescritura = a reescrita",
            "justificar su existencia = justificar sua existência",
            "matar a los hijos favoritos = matar os filhos favoritos",
            "ojos frescos = olhos frescos",
            "entre versiones = entre versões"
          ],
          oralProduction: "Fale sobre seu processo de edição e reescrita em espanhol — como você sabe quando algo está pronto?",
          exercises: [
            { id: "ES-M-U1-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'matar a los hijos favoritos' em escrita literária?", options: ["Uma metáfora violenta", "Cortar as partes que você mais gosta mas que não servem ao texto — o gesto mais difícil da edição", "Eliminar os personagens favoritos", "Destruir um rascunho"], answer: 1, explanation: "Matar a los hijos favoritos (kill your darlings, Faulkner) = cortar as partes que você mais ama mas que não funcionam para o texto. O ego do escritor se apega ao que escreveu com mais esforço — mas o texto pede o que é necessário." },
            { id: "ES-M-U1-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'leer con ojos frescos'?", options: ["Leer de manhã cedo", "Ler como se fosse a primeira vez — com distância temporal suficiente para ver o que realmente está na página", "Leer rapidamente", "Leer com entusiasmo"], answer: 1, explanation: "Ojos frescos = olhos frescos. Ler com distância temporal — após dias ou semanas — para ver o texto como o leitor vai vê-lo, sem a memória de intenção que contamina a visão imediata." },
            { id: "ES-M-U1-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Cada palabra en el texto final debe _____ su existencia.' (Cada palavra no texto final deve justificar sua existência.)", answer: ["justificar"], hint: "verbo justificar no infinitivo", explanation: "Justificar = justificar. 'Justificar su existencia' = provar que está ali por uma razão — que remove ou modifica seria pior. Critério máximo da edição." },
            { id: "ES-M-U1-L5-E4", type: "translation", skill: "writing", question: "Traduza e aplique: 'O primeiro rascunho é para você. A reescrita é para o leitor. O que está entre os dois é o escritor.'", answer: ["El primer borrador es para ti. La reescritura es para el lector. Lo que hay entre los dos es el escritor.", "El primer borrador te pertenece a ti. La reescritura pertenece al lector. Lo que existe entre ambos es la escritura misma."], explanation: "El primer borrador es para ti = o primeiro rascunho é para você. La reescritura es para el lector = a reescrita é para o leitor." },
            { id: "ES-M-U1-L5-E5", type: "free_writing", skill: "writing", question: "Tome o texto mais longo que você já escreveu neste curso e reescreva o primeiro parágrafo cortando 30% das palavras sem perder nenhuma informação essencial. Depois explique cada corte.", prompt: "Instrução: identifique palavras desnecessárias, adjetivos redundantes, frases que repetem o que já foi dito. Corte. Depois justifique cada decisão.", hint: "Corté '...' porque ya estaba implícito en '...'. Eliminé '...' porque el adjetivo añadía poco. Cambié '...' por '...' porque..." }
          ]
        }
      ]
    },
    {
      id: "ES-M-U2",
      title: "Pensamento Original em Espanhol",
      description: "Desenvolver pensamento original e crítico na língua espanhola",
      lessons: [
        {
          id: "ES-M-U2-L1",
          title: "Filosofia da Linguagem — Wittgenstein e os Limites do Dizer",
          shadowing: "— 'Los límites de mi lenguaje son los límites de mi mundo.' Wittgenstein.\n— Una frase que los poliglotes verificamos cada día.\n— Exacto. En español tengo acceso a mundos que en portugués están cerrados.\n— ¿Y al revés?\n— También. 'Saudade' abre un espacio que 'añoranza' no alcanza del todo.\n— ¿La conclusión?\n— Que cada idioma que aprendes amplía el mundo. No metafóricamente: literalmente.\n— Y que hay cosas que solo existen cuando las puedes decir.",
          memoryPhrases: [
            "los límites del lenguaje = os limites da linguagem",
            "verificar = verificar / constatar",
            "alcanza del todo = alcança completamente",
            "literalmente = literalmente",
            "cada idioma que aprendes = cada idioma que você aprende",
            "solo existen cuando las puedes decir = só existem quando você pode dizê-las"
          ],
          oralProduction: "Debata em espanhol a ideia de Wittgenstein com exemplos concretos da sua experiência bilíngue.",
          exercises: [
            { id: "ES-M-U2-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "O que implica 'los límites de mi lenguaje son los límites de mi mundo' para um poliglota?", options: ["Que línguas diferentes têm gramáticas diferentes", "Que cada língua adicional expande literalmente o mundo do falante — não como metáfora mas como acesso real a experiências, conceitos e realidades novas", "Que é preciso aprender mais idiomas", "Que o mundo tem limites linguísticos"], answer: 1, explanation: "Para Wittgenstein (Tractatus), o que não pode ser dito não pode ser pensado — logo, não existe no meu mundo. Cada idioma novo cria novos mundos possíveis: 'saudade' abre um espaço que 'nostalgia' não abre." },
            { id: "ES-M-U2-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'hay cosas que solo existen cuando las puedes decir'?", options: ["As coisas dependem das palavras para existir fisicamente", "Certas experiências ou conceitos só se tornam plenamente reais e acessíveis quando a língua fornece o instrumento para nomeá-los", "A linguagem cria a realidade", "Sem palavras não há pensamento"], answer: 1, explanation: "A ideia não é idealismo radical mas algo mais sutil: certas nuances de experiência só se tornam plenamente acessíveis à consciência quando há uma palavra que as delimita. 'Duende' de Lorca cria uma categoria de experiência." },
            { id: "ES-M-U2-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Cada idioma que aprendes no amplía el mundo metafóricamente: lo amplía _____.' (Cada idioma que você aprende não amplia o mundo metaforicamente: amplia-o literalmente.)", answer: ["literalmente"], hint: "advérbio de modo que indica realidade concreta, não figura", explanation: "Literalmente = literalmente. A ênfase contrasta com 'metafóricamente' — Wittgenstein diria que a ampliação é literal, não figurada." },
            { id: "ES-M-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Os limites da minha linguagem são os limites do meu mundo — e por isso aprender espanhol foi, literalmente, ampliar o mundo que eu habito.'", answer: ["Los límites de mi lenguaje son los límites de mi mundo: por eso aprender español fue, literalmente, ampliar el mundo que habito.", "Los límites de mi lenguaje son los límites de mi mundo, y por ello aprender español fue ampliar literalmente el mundo que habito."], explanation: "Los límites = os limites. Por eso = por isso. Ampliar el mundo que habito = ampliar o mundo que habito." },
            { id: "ES-M-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio filosófico sobre o que o espanhol abriu no seu mundo que o português não tinha. Seja concreto — exemplos reais. Mínimo 15 frases.", prompt: "Inclua: conceitos que só existem em espanhol · experiências que a língua nomeou para você · mudanças na percepção · Wittgenstein aplicado à sua experiência", hint: "Cuando aprendí la palabra '...' en español, descubrí que..., hay una dimensión del humor en español que..., el concepto de 'madrugada' me reveló que..." }
          ]
        },
        {
          id: "ES-M-U2-L2",
          title: "Invenção de Conceitos — O Ensaísta como Filósofo",
          shadowing: "— Los grandes ensayistas no describen el mundo: inventan conceptos para verlo de otra manera.\n— Ortega inventó 'la deshumanización del arte'. Unamuno, 'el sentimiento trágico de la vida'.\n— ¿Se puede inventar un concepto nuevo?\n— Si nombra algo real que no tenía nombre, sí. El nombre no crea la cosa, pero la hace visible.\n— ¿Y si el concepto ya existe pero con otro nombre?\n— Entonces estás renombrando, que también es un acto de pensamiento.\n— El lenguaje como laboratorio del pensamiento.\n— Y el ensayo como su cuaderno de notas.",
          memoryPhrases: [
            "inventar conceptos = inventar conceitos",
            "la deshumanización = a desumanização",
            "el sentimiento trágico = o sentimento trágico",
            "renombrar = renomear",
            "el laboratorio del pensamiento = o laboratório do pensamento",
            "el cuaderno de notas = o caderno de notas"
          ],
          oralProduction: "Invente um conceito em espanhol para algo que você percebe mas que ainda não tem nome.",
          exercises: [
            { id: "ES-M-U2-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'renombrar' como ato de pensamento?", options: ["Traduzir um conceito", "Dar um nome novo a algo que já existia, revelando um aspecto antes invisível", "Renomear arquivos", "Criar sinônimos"], answer: 1, explanation: "Renombrar = renomear. Dar um nome novo a algo é um ato de pensamento porque ilumina um aspecto diferente. 'Calentamiento global' vs 'crisis climática' — o segundo nome é um ato político e cognitivo." },
            { id: "ES-M-U2-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'el lenguaje como laboratorio del pensamiento'?", options: ["Experimentos com palavras", "A língua como espaço onde o pensamento se testa, desenvolve e descobre a si mesmo", "Um experimento científico", "Análise linguística"], answer: 1, explanation: "El lenguaje como laboratorio = a língua onde testamos ideias. Escrever é pensar — não registrar o pensamento já feito mas descobri-lo ao tentar formulá-lo em palavras." },
            { id: "ES-M-U2-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El nombre no crea la cosa, pero la hace _____.' (O nome não cria a coisa, mas a torna visível.)", answer: ["visible"], hint: "passível de ser visto / perceptível", explanation: "Visible = visível. O nome não cria a realidade mas a ilumina — como uma lanterna que revela o que estava no escuro. Ato epistêmico fundamental." },
            { id: "ES-M-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Os grandes ensaístas não descrevem o mundo: inventam conceitos para vê-lo de outra maneira — e ao nomeá-lo de outra forma, o transformam.'", answer: ["Los grandes ensayistas no describen el mundo: inventan conceptos para verlo de otra manera, y al nombrarlo de otro modo, lo transforman.", "Los grandes ensayistas no se limitan a describir el mundo: inventan conceptos que permiten verlo de otra forma y, al renombrarlo, lo transforman."], explanation: "No describen: inventan = não descrevem: inventam. Al nombrarlo = ao nomeá-lo. Lo transforman = o transformam." },
            { id: "ES-M-U2-L2-E5", type: "free_writing", skill: "writing", question: "Invente um conceito em espanhol para uma experiência que você reconhece mas que ainda não tem nome. Defina-o rigorosamente e desenvolva-o em um ensaio. Mínimo 15 frases.", prompt: "Estrutura: 1) Nome do conceito inventado 2) Definição rigorosa 3) Exemplos do cotidiano 4) Por que este conceito fazia falta 5) Implicações filosóficas", hint: "Propongo el concepto de '...' para nombrar esa sensación de..., no se trata de..., aunque podría confundirse con..., este concepto es necesario porque..., su existencia revela que..." }
          ]
        },
        {
          id: "ES-M-U2-L3",
          title: "Escrita e Identidade — Quem Escreve em Espanhol?",
          shadowing: "— Cuando escribes en una segunda lengua, ¿quién escribe?\n— Una pregunta que me hago cada vez con menos angustia.\n— ¿Y la respuesta?\n— Que hay un yo en español que no es del todo el mismo que en portugués.\n— ¿Eso te parece una pérdida o una ganancia?\n— Las dos cosas. Pierdo cierta inmediatez. Gano cierta distancia.\n— La distancia como herramienta literaria.\n— Exacto. La segunda lengua es una máscara que permite decir lo que la primera no puede.",
          memoryPhrases: [
            "con menos angustia = com menos angústia",
            "la inmediatez = a imediatidade",
            "la distancia = a distância",
            "la máscara = a máscara",
            "la segunda lengua = a segunda língua",
            "permite decir = permite dizer"
          ],
          oralProduction: "Reflita em espanhol sobre as diferenças entre o seu 'eu' em português e em espanhol.",
          exercises: [
            { id: "ES-M-U2-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'la segunda lengua como máscara'?", options: ["Esconder a identidade", "A L2 cria distância que permite dizer coisas que a L1 (pela proximidade com o eu) não permite — uma liberdade paradoxal", "Uma língua falsa", "Uma representação"], answer: 1, explanation: "A máscara não esconde — ela liberta. A L2, por ser ligeiramente distante do eu mais profundo, permite falar com menos inibição sobre certas coisas. Muitos escritores descobrem uma voz mais livre em L2." },
            { id: "ES-M-U2-L3-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la inmediatez' que se perde ao escrever em L2?", options: ["A velocidade de escrita", "A conexão direta e visceral com a língua materna — onde as palavras chegam sem mediação consciente", "O vocabulário nativo", "A gramática automática"], answer: 1, explanation: "Inmediatez = imediatidade. Na L1, as palavras chegam sem mediação consciente — diretamente do inconsciente. Na L2 há sempre um mínimo de mediação, um passo a mais entre o sentir e o dizer." },
            { id: "ES-M-U2-L3-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Hay un yo en español que no es del todo el _____ que en portugués.' (Há um eu em espanhol que não é exatamente o mesmo que em português.)", answer: ["mismo"], hint: "pronome/adjetivo de identidade", explanation: "Mismo = mesmo. 'No es del todo el mismo' = não é exatamente o mesmo. A identidade se fragmenta ligeiramente entre línguas — não é perda: é ganho de perspectiva." },
            { id: "ES-M-U2-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'A segunda língua é uma máscara que permite dizer o que a primeira não pode — não porque esconde mas porque liberta.'", answer: ["La segunda lengua es una máscara que permite decir lo que la primera no puede: no porque esconde, sino porque libera.", "La segunda lengua funciona como una máscara que permite decir lo que la primera no puede, no porque oculte sino porque libera."], explanation: "Permite decir = permite dizer. No porque esconde sino porque libera = não porque esconde mas porque liberta." },
            { id: "ES-M-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um ensaio pessoal sobre quem você é quando escreve em espanhol — diferente do eu em português? O que essa diferença revela? Mínimo 15 frases.", prompt: "Inclua: como o eu em espanhol difere do eu em português · o que a distância da L2 permite · o que a imediatidade da L1 tem que a L2 não · sua conclusão sobre identidade e língua", hint: "Cuando escribo en español, noto que..., hay cosas que solo puedo decir en español porque..., la distancia de la segunda lengua me permite..., pero pierdo..." }
          ]
        },
        {
          id: "ES-M-U2-L4",
          title: "Leitura Avanzada — Ler nas Entrelinhas como Nativo",
          shadowing: "— Un lector avanzado lee el texto y el subtexto al mismo tiempo.\n— ¿Cómo se logra eso?\n— Con práctica y con la cultura que el texto presupone.\n— ¿Qué presupone un texto español?\n— Mucho: la Reconquista, el Siglo de Oro, el 98, la Guerra Civil, la Transición, el fenómeno del Boom.\n— Es una genealogía que el lector nativo lleva incorporada.\n— Y que el lector extranjero puede aprender. Con trabajo.\n— Y con amor. Sin amor a la cultura, la lectura se queda en la superficie.",
          memoryPhrases: [
            "el subtexto = o subtexto",
            "presuponer = pressupor",
            "la Reconquista = a Reconquista",
            "el Siglo de Oro = o Século de Ouro",
            "la Transición = a Transição (democrática espanhola)",
            "llevar incorporado = carregar incorporado"
          ],
          oralProduction: "Analise o que um texto literário hispânico pressupõe culturalmente que um leitor nativo sabe e um estrangeiro precisa aprender.",
          exercises: [
            { id: "ES-M-U2-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la genealogía cultural' que um texto pressupõe?", options: ["A família do autor", "O conjunto de referências históricas, literárias e culturais que o texto assume que o leitor conhece", "A origem do idioma", "Os antecedentes do personagem"], answer: 1, explanation: "Genealogía cultural = conjunto de referências que o texto pressupõe no leitor. Um texto espanhol pode pressupor conhecimento do Siglo de Oro, da Guerra Civil, da Transição — um leitor nativo as carrega inconscientemente." },
            { id: "ES-M-U2-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "O que é 'la Transición' na história espanhola?", options: ["A transição para o euro", "O período de transição da ditadura franquista para a democracia (1975-1982)", "A transição para a república", "A transição cultural do século XX"], answer: 1, explanation: "La Transición = o período de transição democrática após a morte de Franco (1975) até a consolidação da democracia (1982, primeiro governo socialista). Referência cultural onipresente na cultura espanhola contemporânea." },
            { id: "ES-M-U2-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Sin amor a la cultura, la lectura avanzada se queda en _____.' (Sem amor pela cultura, a leitura avançada fica na superfície.)", answer: ["la superficie"], hint: "o oposto da profundidade", explanation: "La superficie = a superfície. 'Quedarse en la superficie' = ficar na superfície. O amor pela cultura é o que motiva a busca pela profundidade." },
            { id: "ES-M-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'O leitor avançado lê o texto e o subtexto ao mesmo tempo — e isso exige não só domínio da língua mas amor pela cultura que o texto pressupõe.'", answer: ["El lector avanzado lee el texto y el subtexto al mismo tiempo, lo que exige no solo dominio de la lengua sino amor por la cultura que el texto presupone.", "El lector avanzado lee simultáneamente el texto y el subtexto, y eso requiere no solo dominio del idioma sino amor por la cultura que el texto da por supuesta."], explanation: "Lee el texto y el subtexto = lê o texto e o subtexto. Lo que exige = o que exige. Presupone / da por supuesta = pressupõe." },
            { id: "ES-M-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escolha um texto literário hispânico e faça uma leitura em duas camadas: 1) O que o texto diz. 2) O que o texto pressupõe que o leitor sabe. Mínimo 15 frases.", prompt: "Inclua: a primeira camada (leitura direta) · a segunda camada (referências culturais pressupostas) · como as duas camadas se relacionam · o que você precisou aprender para entender a segunda camada", hint: "En la primera lectura, el texto parece hablar de..., pero si consideramos el contexto histórico de..., las referencias a '...' presuponen que el lector sabe..., esto cambia el sentido porque..." }
          ]
        },
        {
          id: "ES-M-U2-L5",
          title: "Síntese Master — O Falante Completo",
          shadowing: "— Has llegado al nivel más alto. ¿Qué sientes?\n— Que el español ya no es un logro. Es una condición.\n— ¿Cómo así?\n— Como la vista. No piensas en ver: simplemente ves. El español ya no es algo que hago: es algo que soy.\n— ¿Y el aprendizaje?\n— No termina. Se transforma. Deja de ser esfuerzo y se convierte en curiosidad.\n— La curiosidad como motor, no el esfuerzo.\n— Exacto. Y la curiosidad no tiene fin.\n— Lo mismo que el español.",
          memoryPhrases: [
            "una condición = uma condição (algo que você é)",
            "como la vista = como a visão",
            "no termina, se transforma = não termina, se transforma",
            "la curiosidad como motor = a curiosidade como motor",
            "no tiene fin = não tem fim",
            "es algo que soy = é algo que eu sou"
          ],
          oralProduction: "Faça sua declaração final Master em espanhol: o que você é agora neste idioma.",
          exercises: [
            { id: "ES-M-U2-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'el español es una condición, no un logro'?", options: ["Que o espanhol não é uma conquista", "Que o espanhol deixou de ser algo que se faz e se tornou algo que se é — parte constitutiva da identidade", "Que as condições do espanhol são difíceis", "Que não há mais o que aprender"], answer: 1, explanation: "Condición = condição / estado de ser. Quando uma língua é 'condición', ela não é mais uma habilidade praticada mas parte do que você é — como a cor dos olhos ou a língua materna." },
            { id: "ES-M-U2-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'la curiosidad como motor'?", options: ["A curiosidade como obrigação", "A curiosidade (não o esforço) como força propulsora do aprendizado contínuo", "Um motor movido a curiosidade", "A curiosidade científica"], answer: 1, explanation: "La curiosidad como motor = a curiosidade como força motriz. No nível Master, o esforço se transforma em curiosidade — você continua aprendendo não porque é preciso mas porque quer saber mais." },
            { id: "ES-M-U2-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'El español ya no es algo que _____ (hacer): es algo que _____ (ser).' (O espanhol já não é algo que faço: é algo que sou.)", answer: ["hago, soy"], hint: "presente de HACER e SER para yo", explanation: "Hago = faço. Soy = sou. A distinção ser/fazer é fundamental: a língua como ação (fazer) vs a língua como identidade (ser)." },
            { id: "ES-M-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'O espanhol já não é uma conquista: é uma condição. Não é algo que eu faço — é algo que eu sou. E como tudo que somos, nunca termina de se aprofundar.'", answer: ["El español ya no es un logro: es una condición. No es algo que hago: es algo que soy. Y como todo lo que somos, nunca termina de profundizarse.", "El español ha dejado de ser un logro para convertirse en una condición. No es algo que hago: es algo que soy. Y como todo aquello que somos, sigue profundizándose sin fin."], explanation: "Ya no es un logro: es una condición = já não é uma conquista: é uma condição. Nunca termina de profundizarse = nunca termina de se aprofundar." },
            { id: "ES-M-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva seu texto final Master — o mais alto nível de escrita em espanhol que você é capaz. Tema livre. Mínimo 20 frases. Este é o texto que define quem você é neste idioma.", prompt: "Nenhuma instrução adicional. Você já sabe o que precisa. Escreva.", hint: "—" }
          ]
        }
      ]
    }
  ]
};
