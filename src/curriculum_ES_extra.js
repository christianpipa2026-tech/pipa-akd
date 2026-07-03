// Conteúdos de urgência alta — adicionados às apps
// Pontuação espanhola · Tipos de texto · Til diacrítico

export const CURRICULUM_ES_EXTRA = {
  units: [
    {
      id: "ES-EXTRA-U1",
      title: "Pontuação Espanhola — O Que o Português Não Tem",
      description: "¿ ¡ ; — … e outras marcas essenciais que brasileiros ignoram",
      lessons: [
        {
          id: "ES-EXTRA-U1-L1",
          title: "¿ e ¡ — Os Sinais de Abertura",
          shadowing: "— ¿Sabías que el español es el único idioma del mundo que usa signos de apertura?\n— ¿De verdad? ¡No lo sabía!\n— Exacto. El ¿ al inicio de pregunta y el ¡ al inicio de exclamación.\n— ¿Y si la pregunta empieza en medio de una frase?\n— El signo de apertura va justo donde empieza la pregunta. Por ejemplo: 'Dime, ¿cómo te llamas?'\n— ¡Tiene lógica! Así sabes desde dónde leer con entonación de pregunta.\n— Exactamente. No es decoración: es información de entonación.",
          memoryPhrases: [
            "¿ = sinal de abertura de pergunta (exclusivo do espanhol)",
            "¡ = sinal de abertura de exclamação",
            "Dime, ¿cómo te llamas? (¿ no meio da frase)",
            "¡Qué bien! = Que bom! (¡ sempre que há exclamação)",
            "¿Verdad? = É mesmo? / Não é? (mini-pergunta no fim)",
            "¡Claro que sí! = Claro que sim!"
          ],
          oralProduction: "Escreva 5 perguntas e 5 exclamações em espanhol, praticando os sinais de abertura.",
          exercises: [
            { id: "ES-EXTRA-U1-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a pontuação correta para a frase: 'Quando você vai ao mercado, você pode me trazer algo?'", options: ["Cuando vas al mercado, ¿puedes traerme algo?", "¿Cuando vas al mercado, puedes traerme algo?", "Cuando vas al mercado, puedes traerme algo?", "¿Cuando vas al mercado, puedes traerme algo¿"], answer: 0, explanation: "O ¿ vai no início da parte interrogativa, não no início da frase inteira. 'Cuando vas al mercado' é contexto, não pergunta. A interrogação começa em '¿puedes'." },
            { id: "ES-EXTRA-U1-L1-E2", type: "multiple_choice", skill: "grammar", question: "Em português você escreve 'Que legal!'. Em espanhol correto é:", options: ["¡Que genial!", "Que genial!", "¡Que genial¡", "!Que genial!"], answer: 0, explanation: "¡Que genial! — o sinal de exclamação de abertura (¡) vai no início, o de fechamento (!) no final. Nunca dois !! nem exclamação só no final." },
            { id: "ES-EXTRA-U1-L1-E3", type: "fill_blank", skill: "grammar", question: "Adicione a pontuação correta: '___Sabes___qué hora es___'", answer: ["¿Sabes qué hora es?"], hint: "pergunta completa — onde vai o ¿?", explanation: "¿Sabes qué hora es? — a pergunta começa no início da frase, então ¿ vai antes de 'Sabes'." },
            { id: "ES-EXTRA-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza com pontuação correta: 'Você sabe onde fica a farmácia? Fica longe? Quanto tempo leva?'", answer: ["¿Sabes dónde está la farmacia? ¿Está lejos? ¿Cuánto tiempo se tarda?"], explanation: "Cada pergunta tem seu próprio ¿...? — não se acumulam numa só. Note: ¿Cuánto tiempo se tarda? = Quanto tempo leva? (se tarda = demora-se)." },
            { id: "ES-EXTRA-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo de 10 linhas entre duas pessoas que se encontram na rua, usando pelo menos 5 perguntas (¿?) e 3 exclamações (¡!) corretamente.", prompt: "Use: ¿Cómo estás? / ¡Qué sorpresa! / ¿Sabes que...? / ¡No me digas! / ¿Y tú qué harías?", hint: "— ¡Hola! ¿Qué haces por aquí? — ¡Qué casualidad! ¿No trabajas hoy?..." }
          ]
        },
        {
          id: "ES-EXTRA-U1-L2",
          title: "Ponto e Vírgula, Dois Pontos e Reticências",
          shadowing: "— El punto y coma es el signo más olvidado del español.\n— ¿Para qué sirve exactamente?\n— Pausa mayor que la coma, menor que el punto. Une ideas muy relacionadas.\n— Por ejemplo: 'Llegué tarde; el tren había salido.'\n— Los dos puntos anuncian algo: una lista, una cita, una explicación.\n— Y los puntos suspensivos…\n— Indican que algo queda sin decir. O que el hablante duda. O que algo se insinúa.\n— Como cuando dices: 'Bueno, si tú lo dices…'\n— Exacto. El silencio también habla.",
          memoryPhrases: [
            "; (punto y coma) = pausa entre ideias relacionadas",
            ": (dos puntos) = anuncia lista, citação ou explicação",
            "… (puntos suspensivos) = algo não dito, dúvida, insinuação",
            "Llegué tarde; el tren había salido. (relação de causa)",
            "Necesito tres cosas: tiempo, dinero y ganas.",
            "Bueno, si tú lo dices… (insinuação)"
          ],
          oralProduction: "Escreva 3 frases com ponto e vírgula, 3 com dois pontos e 3 com reticências em espanhol.",
          exercises: [
            { id: "ES-EXTRA-U1-L2-E1", type: "multiple_choice", skill: "grammar", question: "Qual sinal completa corretamente: 'Tenía todo lo necesario___ dinero, tiempo y energía.'?", options: [":", ";", ",", "—"], answer: 0, explanation: "Dois pontos (:) para anunciar uma lista. 'Tenía todo lo necesario: dinero, tiempo y energía.' — os dois pontos introduzem os elementos da lista." },
            { id: "ES-EXTRA-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual frase usa o ponto e vírgula corretamente?", options: ["Estudié mucho; aprobé el examen.", "Estudié; mucho y aprobé.", "Estudié mucho, aprobé; el examen.", "Estudié; aprobé."], answer: 0, explanation: "'Estudié mucho; aprobé el examen.' — ponto e vírgula une duas orações completas e relacionadas (causa-consequência). As outras opções separam elementos que não deveriam ser separados." },
            { id: "ES-EXTRA-U1-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete com o sinal adequado: 'El médico dijo algo importante___ 'Descanse tres días.'' (O médico disse algo importante: 'Descanse três dias.')", answer: [":"], hint: "sinal que anuncia uma citação", explanation: ": (dois pontos) para introduzir uma citação direta. 'El médico dijo algo importante: «Descanse tres días.»'" },
            { id: "ES-EXTRA-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza usando pontuação adequada: 'Fui ao mercado; comprei pão, leite e frutas: maçã, banana e laranja.'", answer: ["Fui al mercado; compré pan, leche y frutas: manzana, plátano y naranja."], explanation: "; separa as duas ações relacionadas. : introduz a lista de frutas dentro da lista maior." },
            { id: "ES-EXTRA-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um parágrafo de 8 linhas sobre seu dia, usando pelo menos uma vez cada sinal: ; : … e ¿? e ¡!", prompt: "Conte seu dia de ontem com esses sinais incorporados naturalmente.", hint: "Me levanté tarde; estaba agotado. Necesitaba varias cosas: café, ducha y motivación. ¿Lograría llegar a tiempo? ¡Imposible! El bus ya había..." }
          ]
        },
        {
          id: "ES-EXTRA-U1-L3",
          title: "O Travessão (—) e as Aspas em Espanhol",
          shadowing: "— En español se usan dos tipos de comillas: las latinas «» y las inglesas ''.\n— ¿Y cuál se usa más?\n— En España, las latinas «». En Latinoamérica, las inglesas ''. Ambas son correctas.\n— ¿Y el guion largo? ¿Para qué sirve?\n— La raya — tiene tres usos: diálogos, incisos y para separar ideas.\n— ¿Cómo se diferencia del guion corto?\n— El guion - une palabras. La raya — separa ideas o marca diálogo.",
          memoryPhrases: [
            "— (raya/travessão) = diálogo, inciso ou separação de ideia",
            "«texto» = aspas latinas (Espanha)",
            '"texto" = aspas inglesas (América Latina)',
            "— Hola — dijo ella. (travessão no diálogo)",
            "Mi madre —que vive lejos— me llama todos los días.",
            "- (guion corto) une: anglo-argentino, ex-presidente"
          ],
          oralProduction: "Escreva um diálogo de 8 falas usando o travessão corretamente para o discurso direto.",
          exercises: [
            { id: "ES-EXTRA-U1-L3-E1", type: "multiple_choice", skill: "grammar", question: "Como se escreve corretamente um diálogo em espanhol?", options: ["— Buenos días — dijo ella.", "\"Buenos días\" dijo ella.", "- Buenos días - dijo ella.", "«Buenos días» dijo ella."], answer: 0, explanation: "O diálogo em espanhol usa a raya (—), não o guion (-) nem aspas. '— Buenos días — dijo ella.' A raya abre o discurso e a segunda raya fecha antes do verbo dicendi." },
            { id: "ES-EXTRA-U1-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual é o uso correto da raya como inciso?", options: ["Mi hermano —el mayor— vive en Madrid.", "Mi hermano, el mayor, vive en Madrid.", "Mi hermano -el mayor- vive en Madrid.", "Mi hermano «el mayor» vive en Madrid."], answer: 0, explanation: "Mi hermano —el mayor— vive en Madrid. A raya como inciso é mais forte que a vírgula — destaca a informação adicional. As duas rayas funcionam como parênteses mais ênfaticos." },
            { id: "ES-EXTRA-U1-L3-E3", type: "fill_blank", skill: "grammar", question: "Escreva o diálogo com pontuação correta: 'Bom dia, disse ela. Tudo bem? perguntou ele.'", answer: ["— Buenos días —dijo ella—. ¿Cómo estás? —preguntó él."], hint: "travessão para abrir fala e antes do verbo dicendi", explanation: "— Buenos días —dijo ella—. ¿Cómo estás? —preguntó él. Raya abre, raya fecha antes do verbo, ponto depois do verbo." },
            { id: "ES-EXTRA-U1-L3-E4", type: "translation", skill: "writing", question: "Traduza com pontuação correta: 'Não sei — respondeu ele — se é uma boa ideia. Pensa bem antes de decidir.'", answer: ["—No sé —respondió él— si es una buena idea. Piénsalo bien antes de decidir."], explanation: "Raya abre, depois do 'respondió él' outro par de rayas fecha o inciso, ponto final depois da frase." },
            { id: "ES-EXTRA-U1-L3-E5", type: "free_writing", skill: "writing", question: "Reescreva este diálogo em prosa narrativa em espanhol, usando travessão, rayas de inciso e pontuação correta. Mínimo 10 linhas.", prompt: "Diálogo: duas pessoas discutem se vão viajar nas férias. Uma quer praia, a outra quer montanha. Chegam a um acordo.", hint: "— Me apetece más la playa —dijo Ana—. El mar siempre me relaja. — Pues yo —contestó Luis, pensativo— prefiero la montaña..." }
          ]
        },
        {
          id: "ES-EXTRA-U1-L4",
          title: "Vírgula em Espanhol — Erros Mais Comuns de Brasileiros",
          shadowing: "— La coma en español funciona parecido al portugués, pero hay diferencias importantes.\n— ¿Cuáles?\n— Una muy común: no se pone coma entre sujeto y verbo. 'Juan, fue al mercado' está MAL.\n— ¿Y en enumeraciones?\n— Antes del último elemento con 'y' o 'o' generalmente no va coma. 'Pan, leche y huevos.'\n— ¿Y las oraciones de relativo?\n— Con coma = explicativa. Sin coma = especificativa. Enorme diferencia de significado.",
          memoryPhrases: [
            "NUNCA coma entre sujeito e verbo: Juan, fue → ❌ Juan fue → ✅",
            "Enumeração: pan, leche y huevos (sem vírgula antes de 'y')",
            "Vocativo: Juan, ven aquí. (vírgula depois do nome chamado)",
            "Explicativa: Mi madre, que es médica, trabaja mucho.",
            "Especificativa: El libro que compré es interesante. (sem vírgula)",
            "Concessiva: Aunque llueve, salgo. (vírgula depois da concessiva)"
          ],
          oralProduction: "Escreva 10 frases em espanhol praticando o uso correto da vírgula.",
          exercises: [
            { id: "ES-EXTRA-U1-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual frase está correta?", options: ["Mi hermana, estudia medicina.", "Mi hermana estudia medicina.", "Mi hermana estudia, medicina.", "Mi hermana, estudia, medicina."], answer: 1, explanation: "NUNCA vírgula entre sujeito e verbo em espanhol (nem em português). 'Mi hermana estudia medicina.' é a única opção correta." },
            { id: "ES-EXTRA-U1-L4-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença de significado entre as duas frases? A) 'Los estudiantes que llegaron tarde reprobaron.' B) 'Los estudiantes, que llegaron tarde, reprobaron.'", options: ["São iguais", "A: só os atrasados reprovaram. B: todos reprovaram (e todos chegaram atrasados).", "A: todos reprovaram. B: só os atrasados.", "A é informal, B é formal."], answer: 1, explanation: "A (sem vírgula, especificativa): especifica QUAIS estudantes (os que chegaram atrasados). B (com vírgula, explicativa): TODOS os estudantes reprovaram, e adicionalmente todos chegaram atrasados." },
            { id: "ES-EXTRA-U1-L4-E3", type: "fill_blank", skill: "grammar", question: "Adicione vírgulas onde necessário: 'Pedro ven aquí por favor y trae el libro.'", answer: ["Pedro, ven aquí, por favor, y trae el libro."], hint: "vocativo + advérbio 'por favor' pedem vírgula", explanation: "'Pedro,' (vocativo), 'por favor,' (advérbio intercalado). 'ven aquí' e 'trae el libro' são os verbos sem vírgula entre eles porque são coordenadas com 'y'." },
            { id: "ES-EXTRA-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza com vírgulas corretas: 'Minha irmã, que mora em Buenos Aires, vai me visitar. Ela traz pão, queijo e vinho.'", answer: ["Mi hermana, que vive en Buenos Aires, va a visitarme. Trae pan, queso y vino."], explanation: "Vírgulas para a explicativa (que vive en Buenos Aires). Sem vírgula antes de 'y' na enumeração de 3 elementos." },
            { id: "ES-EXTRA-U1-L4-E5", type: "free_writing", skill: "writing", question: "Corrija e reescreva este texto com vírgulas corretas em espanhol (o texto tem 8 erros de vírgula): 'Mi amigo, vive en Madrid. Él, que es muy simpático trabaja en una empresa de tecnología, y, tiene un perro. Los lunes, martes, y miércoles él trabaja desde casa. Su perro, que se llama Max le acompaña siempre.'", prompt: "Identifique cada erro e corrija justificando.", hint: "1. Mi amigo vive... (nunca vírgula sujeito-verbo). 2. simpático, trabaja (vírgula para fechar relativa explicativa)..." }
          ]
        },
        {
          id: "ES-EXTRA-U1-L5",
          title: "Revisão — Pontuação Espanhola Completa",
          shadowing: "— Repasemos: ¿qué signos son exclusivos del español?\n— El signo de apertura de pregunta ¿ y el de exclamación ¡.\n— ¿Y cuáles funcionan igual que en portugués?\n— El punto, la coma básica, los dos puntos.\n— ¿Y cuáles son diferentes?\n— La raya para diálogo, el punto y coma, el uso específico de la coma.\n— ¿Y las comillas?\n— «» en España, '' en América. Pero en digital todos usan ' cada vez más.",
          memoryPhrases: [
            "Exclusivos ES: ¿ ¡ (sinais de abertura)",
            "Raya —: diálogo, inciso — diferente do travessão PT",
            "Ponto e vírgula ;: mais usado em ES que em PT",
            "Vírgula: NUNCA entre sujeito e verbo",
            "Especificativa vs explicativa: diferença de significado",
            "Reticências …: dúvida, insinuação, pausa dramática"
          ],
          oralProduction: "Explique em espanhol para um brasileiro iniciante as 3 diferenças mais importantes de pontuação entre espanhol e português.",
          exercises: [
            { id: "ES-EXTRA-U1-L5-E1", type: "multiple_choice", skill: "grammar", question: "Qual das seguintes afirmações sobre pontuação espanhola é FALSA?", options: ["O ¿ vai antes da parte interrogativa da frase", "A vírgula pode separar sujeito e verbo para dar ênfase", "A raya (—) é usada para diálogos", "As reticências … indicam algo não dito"], answer: 1, explanation: "FALSO: A vírgula NUNCA separa sujeito e verbo em espanhol. Isso é um erro gramatical, não estilístico." },
            { id: "ES-EXTRA-U1-L5-E2", type: "multiple_choice", skill: "grammar", question: "Corrija a pontuação: 'Necesito ayuda, dijo él, estoy perdido.'", options: ["—Necesito ayuda —dijo él—. Estoy perdido.", "\"Necesito ayuda\" dijo él, estoy perdido.", "-Necesito ayuda- dijo él, estoy perdido.", "Necesito ayuda; dijo él; estoy perdido."], answer: 0, explanation: "Diálogo em espanhol = raya longa (—). '—Necesito ayuda —dijo él—. Estoy perdido.' A segunda raya fecha o inciso 'dijo él'." },
            { id: "ES-EXTRA-U1-L5-E3", type: "fill_blank", skill: "grammar", question: "Ponha os sinais corretos: '___Qué hora es___ preguntó María. ___Las tres___ respondió Juan."", answer: ["—¿Qué hora es? —preguntó María. —Las tres —respondió Juan."], hint: "diálogo + pergunta = raya + ¿?", explanation: "Raya para o diálogo, ¿? para a pergunta dentro do diálogo." },
            { id: "ES-EXTRA-U1-L5-E4", type: "translation", skill: "writing", question: "Traduza com pontuação completamente correta: 'Pedro — meu melhor amigo, que mora em Córdoba — me ligou ontem: \"Vai chover amanhã? Traz um guarda-chuva!\"'", answer: ["Pedro —mi mejor amigo, que vive en Córdoba— me llamó ayer: «¿Va a llover mañana? ¡Trae un paraguas!»"], explanation: "Rayas para o inciso. Dois pontos para introduzir a citação. ¿? para a pergunta. ¡! para a exclamação." },
            { id: "ES-EXTRA-U1-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto narrativo de 15 linhas em espanhol que use corretamente: ¿? ¡! ; : — … e vírgulas. Marque entre colchetes [cada sinal] e justifique sua escolha.", prompt: "Tema livre. O objetivo é demonstrar domínio de todos os sinais estudados.", hint: "—¡Por fin! [¡! exclamação] —dijo ella—. [— diálogo e inciso] ¿Llegaste bien? [¿? pergunta] Estaba preocupada: [: introduz explicação]..." }
          ]
        }
      ]
    },
    {
      id: "ES-EXTRA-U2",
      title: "Tipos de Texto — Narrativo, Descritivo, Expositivo, Argumentativo, Instrucional",
      description: "Cada tipo de texto tem suas marcas linguísticas específicas em espanhol",
      lessons: [
        {
          id: "ES-EXTRA-U2-L1",
          title: "Texto Narrativo — Contar uma História em Espanhol",
          shadowing: "— El texto narrativo cuenta eventos en el tiempo. Es el más natural para todos.\n— ¿Cuáles son sus marcas en español?\n— Verbos de acción en indefinido para los eventos, imperfecto para el contexto.\n— ¿Y los conectores temporales?\n— Primero, luego, después, entonces, de repente, al final, al cabo de.\n— ¿Algo específico del español?\n— El pluscuamperfecto para eventos anteriores: 'Cuando llegué, ya había empezado.'\n— Y el discurso directo con raya.",
          memoryPhrases: [
            "Indefinido = acciones del relato: llegó, dijo, fue",
            "Imperfecto = fondo/contexto: llovía, era tarde, había",
            "Pluscuamperfecto = anterior al pasado: ya había salido",
            "Conectores: primero · luego · entonces · de repente · al final",
            "De repente = de repente (igual!) / De pronto = subitamente",
            "Al cabo de un rato = após um tempo"
          ],
          oralProduction: "Conte em espanhol uma história pessoal de 2 minutos usando os três tempos do passado.",
          exercises: [
            { id: "ES-EXTRA-U2-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual tempo verbal é o 'motor' da narração — o que faz a história avançar?", options: ["Pretérito imperfecto", "Pretérito indefinido (perfecto simple)", "Pretérito pluscuamperfecto", "Presente"], answer: 1, explanation: "O pretérito indefinido (llegó, dijo, fue) é o motor da narração — faz os eventos avançarem. O imperfecto pinta o cenário de fundo. O pluscuamperfecto indica o que aconteceu antes." },
            { id: "ES-EXTRA-U2-L1-E2", type: "multiple_choice", skill: "grammar", question: "Identifique o texto narrativo: ", options: ["El calentamiento global aumenta la temperatura. Las consecuencias son...", "Primero mezcla la harina con el azúcar. Luego añade los huevos.", "Era una noche oscura. De repente, escuché un ruido extraño y me levanté.", "El texto presenta tres argumentos a favor de la energía solar."], answer: 2, explanation: "Texto narrativo: conta eventos no tempo com fundo descritivo (era una noche oscura = imperfecto) e evento que faz a história avançar (escuché, me levanté = indefinido)." },
            { id: "ES-EXTRA-U2-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete a narrativa com os verbos corretos: 'Cuando _____ (llegar) a casa, mi madre ya _____ (hacer) la cena. _____ (sentarse) a la mesa y _____ (empezar) a comer.'", answer: ["llegué, había hecho, Me senté, empecé"], hint: "indefinido para ações + pluscuamperfecto para o que já estava feito", explanation: "Llegué (indefinido - ação pontual), había hecho (pluscuamperfecto - anterior ao chegué), Me senté, empecé (indefinido - ações que avançam a narrativa)." },
            { id: "ES-EXTRA-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza este trecho narrativo: 'Era uma tarde de verão. De repente, começou a chover. João, que tinha saído sem guarda-chuva, correu para a entrada de uma loja.'", answer: ["Era una tarde de verano. De repente, empezó a llover. Juan, que había salido sin paraguas, corrió hasta la entrada de una tienda."], explanation: "Era (imperfecto-fundo), empezó (indefinido-evento), había salido (pluscuamperfecto-anterior), corrió (indefinido-ação)." },
            { id: "ES-EXTRA-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um texto narrativo de 15 linhas em espanhol sobre um momento inesperado na sua vida. Use os três tempos do passado e pelo menos 5 conectores temporais.", prompt: "Marque entre [ ] qual tempo verbal usou e por quê em cada verbo.", hint: "Era un día normal [imperfecto-fondo] cuando de repente sonó [indefinido-evento] el teléfono. Hacía años que no hablaba [imperfecto-duración]..." }
          ]
        },
        {
          id: "ES-EXTRA-U2-L2",
          title: "Texto Descritivo — Descrever com Precisão",
          shadowing: "— El texto descriptivo pinta con palabras. El tiempo principal es el presente o el imperfecto.\n— ¿Qué lo diferencia de la narración?\n— No hay secuencia temporal de eventos. Es estático: describes un lugar, persona u objeto.\n— ¿Qué recursos usa?\n— Adjetivos precisos, comparaciones, metáforas. Y el orden importa: de lo general a lo específico.\n— ¿Hay algún verbo clave?\n— 'Tener', 'ser', 'estar', 'parecer'. Y verbos sensoriales: oler, sonar, brillar, pesar.",
          memoryPhrases: [
            "Descripción = presente o imperfecto (estático)",
            "Orden: general → específico / arriba → abajo / exterior → interior",
            "Verbos sensoriales: oler · brillar · sonar · pesar · parecer",
            "Comparaciones: tan... como / más... que / parece un/una",
            "Tiene el pelo... / Mide aproximadamente... / Se distingue por...",
            "A diferencia de... / Lo que más llama la atención es..."
          ],
          oralProduction: "Descreva em espanhol um lugar que você conhece sem mencionar o nome — o parceiro tenta adivinhar.",
          exercises: [
            { id: "ES-EXTRA-U2-L2-E1", type: "multiple_choice", skill: "grammar", question: "Qual texto é predominantemente descritivo?", options: ["Primero hay que calentar el horno. Luego se mezclan los ingredientes.", "La plaza era enorme. Los árboles centenarios daban sombra a los bancos.", "Muchos creen que la energía solar es cara. Sin embargo, los datos muestran que...", "Llegué, vi y vencí."], answer: 1, explanation: "Texto descritivo: 'La plaza era enorme. Los árboles centenarios daban sombra...' — imperfecto (estático), adjetivos (enorme, centenarios), sem progressão de eventos." },
            { id: "ES-EXTRA-U2-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual recurso NÃO é típico do texto descritivo?", options: ["Adjetivos abundantes", "Conectores temporais: primero, luego, después", "Comparações: tan alto como, parece un...", "Verbos de estado: ser, estar, tener, parecer"], answer: 1, explanation: "Conectores temporais (primero, luego, después) são do texto narrativo ou instrucional — indicam progressão no tempo. O texto descritivo é estático, não tem sequência temporal." },
            { id: "ES-EXTRA-U2-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete a descrição: 'La ciudad _____ (ser) antigua y _____ (tener) calles estrechas que _____ (oler) a especias. Sus edificios _____ (parecer) salidos de otro siglo.'", answer: ["era, tenía, olían, parecían"], hint: "descrição no passado = imperfecto", explanation: "Toda a descrição usa imperfecto: era, tenía, olían, parecían. O imperfecto pinta o cenário estático, sem fazer eventos avançarem." },
            { id: "ES-EXTRA-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza esta descrição: 'O mercado era barulhento e colorido. Centenas de barracas vendiam frutas tropicais que pareciam joias. O ar cheirava a especiarias e café fresco.'", answer: ["El mercado era ruidoso y colorido. Cientos de puestos vendían frutas tropicales que parecían joyas. El aire olía a especias y café recién hecho."], explanation: "Era, vendían, parecían, olía = imperfecto descritivo. Puestos = barracas/tendas de mercado. Joyas = joias." },
            { id: "ES-EXTRA-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma descrição de 12 linhas de um lugar que você ama em espanhol — sem narrar eventos, só descrever. Use ao menos 10 adjetivos, 3 comparações e verbos sensoriais.", prompt: "Estruture: parágrafo 1 = visão geral / parágrafo 2 = detalhes visuais / parágrafo 3 = sons, cheiros, sensações.", hint: "Mi lugar favorito es... Se encuentra... Lo primero que llama la atención es... Huele a... El sonido de... parece..." }
          ]
        },
        {
          id: "ES-EXTRA-U2-L3",
          title: "Texto Expositivo — Explicar com Clareza",
          shadowing: "— El texto expositivo explica, informa, aclara. Sin tomar partido.\n— ¿Cuáles son sus marcas?\n— Presente atemporal, vocabulario técnico o preciso, ausencia de primera persona.\n— ¿Y los conectores?\n— De explicación: es decir, esto es, o sea, en otras palabras.\n— ¿De adición?\n— Asimismo, además, por otra parte, en este sentido.\n— ¿Y para concluir?\n— En definitiva, en síntesis, en conclusión, para resumir.",
          memoryPhrases: [
            "Presente atemporal: 'El sol gira alrededor...' (verdade geral)",
            "Es decir / esto es / o sea = ou seja / quer dizer",
            "Asimismo = da mesma forma / igualmente",
            "En este sentido = nesse sentido",
            "Por otra parte = por outro lado (neutro, não adversativo)",
            "En definitiva / En síntesis = em definitivo / em síntese"
          ],
          oralProduction: "Explique em espanhol, de forma expositiva e sem opinião, como funciona algo que você conhece bem.",
          exercises: [
            { id: "ES-EXTRA-U2-L3-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a marca mais característica do texto expositivo?", options: ["Uso do imperfecto para descrever", "Presente atemporal e ausência de opinião pessoal", "Primeira pessoa e argumentação", "Verbos no imperativo"], answer: 1, explanation: "O texto expositivo usa o presente atemporal ('La fotosíntesis es el proceso por el cual...') e evita a primeira pessoa e opinião. O objetivo é informar, não convencer nem narrar." },
            { id: "ES-EXTRA-U2-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual conector é típico do texto expositivo para explicar um conceito?", options: ["Sin embargo", "Aunque", "Es decir / esto es", "Por lo tanto"], answer: 2, explanation: "'Es decir' / 'esto es' = ou seja — reformulam e esclarecem. São típicos do texto expositivo. 'Sin embargo' e 'aunque' são adversativos. 'Por lo tanto' é conclusivo-causal." },
            { id: "ES-EXTRA-U2-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete o texto expositivo: 'La energía solar _____ (ser) una fuente renovable. _____ decir, no _____ (agotar) con el uso. _____ _____, presenta ciertas limitaciones en zonas con poca luz.'", answer: ["es, Es, se agota, Sin embargo"], hint: "presente atemporal + es decir + conector adversativo", explanation: "Es (presente atemporal), Es decir (conector explicativo), se agota (presente atemporal), Sin embargo (adversativo para a limitação)." },
            { id: "ES-EXTRA-U2-L3-E4", type: "translation", skill: "writing", question: "Reescreva de forma expositiva (sem opinião): 'Eu acho que o espanhol é fácil para brasileiros. Na minha opinião, as semelhanças ajudam muito.'", answer: ["El español presenta numerosas similitudes con el portugués, lo que facilita su aprendizaje para los hablantes lusófonos.", "El español y el portugués comparten raíces latinas comunes, lo que genera similitudes léxicas y gramaticales significativas."], explanation: "Remove 'eu acho', 'na minha opinião'. Usa presente atemporal e terceira pessoa. Foco em fatos verificáveis, não em opinião." },
            { id: "ES-EXTRA-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva um texto expositivo de 12 linhas em espanhol explicando o que é o 'jeitinho brasileiro' para um leitor hispanohablante que nunca ouviu falar. Use presente atemporal, 'es decir', 'asimismo', 'sin embargo' e evite a primeira pessoa.", prompt: "Estruture: definição → exemplos → contexto cultural → limitações/críticas.", hint: "El 'jeitinho brasileiro' es un concepto cultural que hace referencia a... Es decir, se trata de... Asimismo, este comportamiento... Sin embargo, también se asocia con..." }
          ]
        },
        {
          id: "ES-EXTRA-U2-L4",
          title: "Texto Argumentativo — Convencer com Estrutura",
          shadowing: "— El texto argumentativo quiere convencer. Tiene tesis, argumentos y conclusión.\n— ¿Cómo se diferencia del expositivo?\n— El expositivo informa. El argumentativo toma posición y la defiende.\n— ¿Y los conectores?\n— De argumento: en primer lugar, además, asimismo, cabe señalar.\n— ¿De contraargumento?\n— Sin embargo, no obstante, a pesar de, aunque, si bien es cierto que.\n— ¿Y de conclusión?\n— En definitiva, por todo lo anterior, a modo de conclusión, en suma.",
          memoryPhrases: [
            "Tese: La educación bilingüe presenta ventajas significativas.",
            "En primer lugar / Para empezar = Em primeiro lugar",
            "Asimismo / Además = Além disso",
            "Sin embargo / No obstante = No entanto (contraargumento)",
            "Si bien es cierto que... = Embora seja verdade que...",
            "En definitiva / Por todo lo anterior = Em definitivo / Por tudo isso"
          ],
          oralProduction: "Defenda em espanhol uma posição sobre um tema polêmico usando a estrutura argumentativa completa.",
          exercises: [
            { id: "ES-EXTRA-U2-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a estrutura clássica de um texto argumentativo?", options: ["Introdução → eventos → conclusão", "Definição → exemplos → limitações", "Tese → argumentos → contraargumento → conclusão", "Instrução 1 → Instrução 2 → Resultado"], answer: 2, explanation: "Texto argumentativo: Tese (posição) → Argumentos (evidências) → Contraargumento (reconhecer o lado contrário com elegância) → Conclusão (reafirmar a tese). Conceder para depois refutar é um recurso poderoso." },
            { id: "ES-EXTRA-U2-L4-E2", type: "multiple_choice", skill: "grammar", question: "Qual conector é mais adequado para introduzir um contraargumento com elegância?", options: ["En primer lugar", "Asimismo", "Si bien es cierto que..., sin embargo...", "En definitiva"], answer: 2, explanation: "'Si bien es cierto que... sin embargo...' = 'Embora seja verdade que... no entanto...' — reconhece o argumento contrário antes de refutá-lo. Mais sofisticado que um simples 'pero'." },
            { id: "ES-EXTRA-U2-L4-E3", type: "fill_blank", skill: "grammar", question: "Organize o texto argumentativo: 'En definitiva... / En primer lugar... / Creo que el deporte es esencial... / Sin embargo, algunas personas afirman... / Además...'", answer: ["Creo que el deporte es esencial... [tese] / En primer lugar... [arg. 1] / Además... [arg. 2] / Sin embargo, algunas personas afirman... [contraarg.] / En definitiva... [conclusão]"], hint: "tese → argumentos → contraargumento → conclusão", explanation: "Ordem: 1) Tese (Creo que...), 2) Arg. 1 (En primer lugar), 3) Arg. 2 (Además), 4) Contraargumento (Sin embargo), 5) Conclusão (En definitiva)." },
            { id: "ES-EXTRA-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza este parágrafo argumentativo: 'Embora seja verdade que o trabalho remoto reduz os custos, no entanto as pesquisas mostram que a produtividade cai a longo prazo. Por tudo isso, um modelo híbrido parece a melhor solução.'", answer: ["Si bien es cierto que el trabajo remoto reduce los costes, sin embargo las investigaciones muestran que la productividad disminuye a largo plazo. Por todo lo anterior, un modelo híbrido parece la mejor solución."], explanation: "Si bien es cierto que = embora seja verdade que. Sin embargo = no entanto. Por todo lo anterior = por tudo isso. Costes (ES-España) / costos (ES-América Latina)." },
            { id: "ES-EXTRA-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um texto argumentativo de 15 linhas em espanhol sobre se as redes sociais fazem mais bem ou mal. Use a estrutura completa: tese → 2 argumentos → 1 contraargumento → conclusão.", prompt: "Tome uma posição clara. Use: en primer lugar / asimismo / si bien es cierto que... sin embargo / en definitiva.", hint: "Tesis: Las redes sociales representan más una amenaza que un beneficio... En primer lugar... Asimismo... Si bien es cierto que permiten la conexión... En definitiva..." }
          ]
        },
        {
          id: "ES-EXTRA-U2-L5",
          title: "Texto Instrucional — Dar Ordens e Indicações",
          shadowing: "— El texto instruccional da pasos para hacer algo. Recetas, manuales, instrucciones.\n— ¿Qué lo distingue?\n— El imperativo o el infinitivo impersonal. Pasos numerados o con conectores de secuencia.\n— ¿Qué conectores usa?\n— Primero, a continuación, luego, después, mientras tanto, por último, finalmente.\n— ¿Y el tiempo verbal?\n— Imperativo ('Añade sal'), infinitivo ('Añadir sal') o presente ('Se añade sal').\n— En español formal se prefiere el infinitivo impersonal.\n— Exacto: 'Precalentar el horno a 180°C.'",
          memoryPhrases: [
            "Imperativo: Añade sal. / Mezcla bien. / Corta en trozos.",
            "Infinitivo impersonal (formal): Añadir sal. / Precalentar el horno.",
            "Impessoal con SE: Se añade sal. / Se mezcla hasta obtener...",
            "Primero · A continuación · Luego · Mientras tanto · Finalmente",
            "Tener cuidado de + inf. = tomar cuidado de",
            "Asegurarse de que + subj. = certificar-se de que"
          ],
          oralProduction: "Explique em espanhol como fazer uma receita ou como usar um aplicativo, usando o texto instrucional.",
          exercises: [
            { id: "ES-EXTRA-U2-L5-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a forma verbal preferida em instruções formais escritas em espanhol?", options: ["Imperativo: '¡Añade la sal!'", "Infinitivo impersonal: 'Añadir la sal'", "Futuro: 'Añadirás la sal'", "Subjuntivo: 'Que se añada la sal'"], answer: 1, explanation: "O infinitivo impersonal (Añadir, Precalentar, Mezclar) é a forma preferida em textos instrucionais formais: manuais, receitas impressas, instruções de montagem." },
            { id: "ES-EXTRA-U2-L5-E2", type: "multiple_choice", skill: "grammar", question: "Qual sequência de conectores é típica de texto instrucional?", options: ["Sin embargo / aunque / no obstante", "Primero / a continuación / finalmente", "Es decir / esto es / o sea", "En primer lugar / asimismo / en definitiva"], answer: 1, explanation: "'Primero / a continuación / finalmente' são conectores de sequência temporal — típicos do texto instrucional. Os outros são argumentativos ou explicativos." },
            { id: "ES-EXTRA-U2-L5-E3", type: "fill_blank", skill: "grammar", question: "Reescreva em infinitivo impessoal formal: 'Primero, mezcla la harina con el azúcar. Luego, añade los huevos. Finalmente, hornea durante 30 minutos.'", answer: ["Primero, mezclar la harina con el azúcar. Luego, añadir los huevos. Finalmente, hornear durante 30 minutos."], hint: "imperativos → infinitivos", explanation: "mezcla → mezclar / añade → añadir / hornea → hornear. Infinitivo impessoal para instruções formais." },
            { id: "ES-EXTRA-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza para instrucional formal em espanhol: 'Primeiro, baixe o aplicativo. Em seguida, crie uma conta com seu e-mail. Por último, confirme seu cadastro pelo link enviado.'", answer: ["Primero, descargar la aplicación. A continuación, crear una cuenta con el correo electrónico. Por último, confirmar el registro a través del enlace enviado."], explanation: "Infinitivos impessoais formais. A continuación = em seguida. Por último = por último / finalmente. Enlace = link." },
            { id: "ES-EXTRA-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto instrucional de 12 linhas em espanhol: como aprender espanhol eficazmente em 3 meses. Use infinitivos impessoais, conectores de sequência e pelo menos 2 estruturas com 'asegurarse de que + subjuntivo'.", prompt: "Estruture em etapas numeradas ou com conectores de sequência.", hint: "1. Establecer un objetivo claro. A continuación, dedicar... Asegurarse de que el estudio sea... Por último, practicar con hablantes nativos..." }
          ]
        }
      ]
    },
    {
      id: "ES-EXTRA-U3",
      title: "Til Diacrítico — mi/mí, si/sí, el/él, mas/más",
      description: "Os pares que mudam completamente de significado com ou sem acento",
      lessons: [
        {
          id: "ES-EXTRA-U3-L1",
          title: "TÚ vs TU / ÉL vs EL / MÍ vs MI",
          shadowing: "— Hay palabras que se escriben igual pero significan cosas completamente distintas.\n— ¿Como cuáles?\n— 'Tú' con acento es el pronombre. 'Tu' sin acento es el posesivo.\n— ¿Y en oración?\n— 'Tú tienes tu libro.' Las dos palabras juntas. Una con acento, otra sin.\n— ¿Y 'él'?\n— 'Él' con acento = pronombre de tercera persona. 'El' sin acento = artículo.\n— ¿Y 'mí'?\n— 'Mí' con acento = pronombre preposicional. 'Mi' sin acento = posesivo.",
          memoryPhrases: [
            "TÚ (pronome, sujeito) ≠ TU (possessivo)",
            "Tú tienes tu libro. (os dois na mesma frase!)",
            "ÉL (pronome, sujeito) ≠ EL (artigo)",
            "Él compró el pan. (os dois na mesma frase!)",
            "MÍ (pronome preposicional) ≠ MI (possessivo)",
            "A mí me gusta mi ciudad. (os dois juntos!)"
          ],
          oralProduction: "Crie 10 frases em espanhol usando cada par (tú/tu, él/el, mí/mi) na mesma frase.",
          exercises: [
            { id: "ES-EXTRA-U3-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual frase está correta?", options: ["Tu tienes tu libro.", "Tú tienes tú libro.", "Tú tienes tu libro.", "Tu tienes tú libro."], answer: 2, explanation: "TÚ (sujeito, pronome) + TU (possessivo, sem acento). 'Tú tienes tu libro.' — pronome sujeito SEMPRE com acento, possessivo NUNCA com acento." },
            { id: "ES-EXTRA-U3-L1-E2", type: "multiple_choice", skill: "grammar", question: "Complete: '___ llegó tarde porque ___ coche no arrancó.'", options: ["El / el", "Él / el", "El / él", "Él / él"], answer: 1, explanation: "ÉL (pronome sujeito, com acento) chegou tarde porque EL (artigo, sem acento) carro não ligou. 'Él llegó tarde porque el coche no arrancó.'" },
            { id: "ES-EXTRA-U3-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'A ___ me encanta ___ ciudad. ¿Y a ___?' (A mim me encanta minha cidade. E a você?)", answer: ["mí, mi, ti"], hint: "mí = pronome preposicional / mi = possessivo / ti = pronome preposicional de 2ª pessoa", explanation: "A mí (pronome após preposição, com acento), mi ciudad (possessivo, sem acento), a ti (pronome preposicional de tú, sem acento — ti nunca leva acento)." },
            { id: "ES-EXTRA-U3-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Ele pegou o meu livro e o seu também. Para mim, isso não foi justo.'", answer: ["Él cogió mi libro y el suyo también. Para mí, eso no fue justo."], explanation: "Él (pronome, acento), mi libro (possessivo, sem acento), el suyo (artigo, sem acento), Para mí (pronome preposicional, acento)." },
            { id: "ES-EXTRA-U3-L1-E5", type: "free_writing", skill: "writing", question: "Escreva 8 frases em espanhol, cada uma usando os dois elementos do par na mesma frase: 4 frases com tú/tu e 4 frases com él/el.", prompt: "Exemplo: 'Tú puedes usar tu teléfono.' / 'Él perdió el trabajo ayer.'", hint: "Tú tienes tu propio estilo. / ¿Tú crees que tu hermano viene? / Él es el mejor estudiante. / ¿Él trajo el documento?" }
          ]
        },
        {
          id: "ES-EXTRA-U3-L2",
          title: "SÍ vs SI / MÁS vs MAS / SÉ vs SE / DÉ vs DE",
          shadowing: "— 'Sí' con acento es afirmación. 'Si' sin acento es condicional.\n— ¿Por ejemplo?\n— '¿Vendrás? Sí, vendré si puedo.' Las dos en la misma oración.\n— ¿Y 'más'?\n— 'Más' con acento es cuantificador: más dinero, más tiempo. 'Mas' sin acento es conjunción adversativa literaria: equivale a 'pero', muy formal.\n— ¿Y 'sé' y 'dé'?\n— 'Sé' puede ser primera persona de saber o imperativo de ser. 'Se' sin acento es pronombre reflexivo.",
          memoryPhrases: [
            "SÍ (afirmação) ≠ SI (condicional/hipótese)",
            "Sí, iré si tengo tiempo. (os dois na mesma frase!)",
            "MÁS (quantificador, mais) ≠ MAS (conjunção adversativa = pero, literário)",
            "SÉ (sei / sê) ≠ SE (pronome reflexivo)",
            "Sé que se fue. (sei que ele se foi — os dois!)",
            "DÉ (dê, imperativo) ≠ DE (preposição)"
          ],
          oralProduction: "Crie frases que usem os dois elementos de cada par na mesma frase: sí/si, más/mas, sé/se.",
          exercises: [
            { id: "ES-EXTRA-U3-L2-E1", type: "multiple_choice", skill: "grammar", question: "Complete: '¿Vendrás? ___, iré ___ tengo tiempo.'", options: ["Si / sí", "Sí / si", "Sí / sí", "Si / si"], answer: 1, explanation: "SÍ (afirmação/resposta, com acento) + SI (condicional, sem acento). '¿Vendrás? Sí, iré si tengo tiempo.'" },
            { id: "ES-EXTRA-U3-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual frase usa 'más' e 'mas' corretamente?", options: ["Quiero mas dinero, mas no lo tengo.", "Quiero más dinero, mas no lo tengo.", "Quiero más dinero, más no lo tengo.", "Quiero mas dinero, más no lo tengo."], answer: 1, explanation: "'Quiero más dinero, mas no lo tengo.' — MÁS (quantificador, mais) com acento. MAS (= pero, conjunção adversativa literária) sem acento." },
            { id: "ES-EXTRA-U3-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: '___ que ___ fue sin avisar.' (Sei que se foi sem avisar.)", answer: ["Sé, se"], hint: "SÉ = sei (verbo saber, 1ª pessoa) / SE = pronome reflexivo", explanation: "SÉ (1ª pessoa do presente de saber, com acento), SE (pronome reflexivo, sem acento). 'Sé que se fue sin avisar.'" },
            { id: "ES-EXTRA-U3-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Sim, eu sei que ele se foi. Se você quer mais informações, eu lhe darei.' Use os acentos diacríticos corretamente.", answer: ["Sí, sé que se fue. Si quieres más información, te la daré.", "Sí, yo sé que se marchó. Si deseas más información, te la proporcionaré."], explanation: "Sí (afirmação), sé (sei = verbo saber), se (pronome), Si (condicional), más (mais, quantificador)." },
            { id: "ES-EXTRA-U3-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de 10 linhas em espanhol que contenha pelo menos uma vez cada par: sí/si, más/mas, sé/se, tú/tu, él/el. Sublinhe cada ocorrência.", prompt: "Texto livre — o objetivo é usar cada par naturalmente no contexto.", hint: "Sí, sé lo que piensas. Si él viene, tú puedes... Él dijo que el problema es que se necesita más tiempo, mas..." }
          ]
        },
        {
          id: "ES-EXTRA-U3-L3",
          title: "TÉ vs TE / AÚN vs AUN / QUIÉN vs QUIEN",
          shadowing: "— ¿Conoces el caso de 'té' y 'te'?\n— 'Té' con acento es la bebida. 'Te' sin acento es el pronombre.\n— ¿Y 'aún'?\n— 'Aún' con acento equivale a 'todavía'. 'Aun' sin acento equivale a 'incluso' o 'aunque'.\n— Eso es sutil.\n— Sí. 'Aún no ha llegado' = Todavía no llegó. 'Aun llegando tarde, lo consiguió' = Incluso llegando tarde.\n— ¿Y 'quién'?\n— 'Quién' con acento = pronombre interrogativo o exclamativo. 'Quien' sin acento = pronombre relativo.",
          memoryPhrases: [
            "TÉ (chá, bebida) ≠ TE (pronome)",
            "¿Te apetece un té? (os dois na mesma frase!)",
            "AÚN (= todavía, ainda) ≠ AUN (= incluso/aunque, até mesmo)",
            "Aún no llegó. / Aun así, siguió intentando.",
            "QUIÉN (interrogativo/exclamativo) ≠ QUIEN (relativo)",
            "¿Quién es quien decide? (os dois na mesma frase!)"
          ],
          oralProduction: "Crie diálogos em espanhol que usem os três pares estudados nesta lição.",
          exercises: [
            { id: "ES-EXTRA-U3-L3-E1", type: "multiple_choice", skill: "grammar", question: "Complete: '¿___ apetece un ___?'", options: ["Te / té", "Té / te", "Te / te", "Té / té"], answer: 0, explanation: "TE (pronome, sem acento) + TÉ (bebida/chá, com acento). '¿Te apetece un té?' = Quer um chá?" },
            { id: "ES-EXTRA-U3-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual frase usa aún/aun corretamente?", options: ["Aun no ha llegado.", "Aún así, no se rindió.", "Aún llegando tarde, lo logró.", "Aún no llegó."], answer: 3, explanation: "'Aún no llegó' (= todavía, ainda) — com acento quando = todavía. 'Aun así' (= mesmo assim) — sem acento quando = incluso/aunque. As opções A e C têm os acentos trocados." },
            { id: "ES-EXTRA-U3-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: '¿___ es ___ sabe la respuesta?' (Quem é quem sabe a resposta?)", answer: ["Quién, quien"], hint: "¿Quién? = interrogativo / quien = relativo (que, o qual)", explanation: "¿QUIÉN? (pronome interrogativo, com acento) + QUIEN (pronome relativo = que/o qual, sem acento). '¿Quién es quien sabe la respuesta?'" },
            { id: "ES-EXTRA-U3-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Quem quer chá? Ainda não sei quem vai vir. Mesmo assim, preparei chá para todos.'", answer: ["¿Quién quiere té? Aún no sé quién va a venir. Aun así, preparé té para todos."], explanation: "¿Quién? (interrogativo), té (bebida), Aún (= todavía), quién (interrogativo indireto), Aun así (= mesmo assim), té (bebida)." },
            { id: "ES-EXTRA-U3-L3-E5", type: "free_writing", skill: "writing", question: "Escreva 5 pares de frases em espanhol, cada par mostrando a diferença de significado entre as palavras com e sem acento diacrítico. Use: té/te, aún/aun, quién/quien, sí/si, tú/tu.", prompt: "Exemplo: 'Él llegó aún cansado.' (ainda) vs 'Aun cansado, siguió trabajando.' (mesmo assim)", hint: "1. ¿Aún no llegó? / Aun lloviendo, salió. 2. ¿Quién habló? / La persona quien habló... 3. Sí, vendré. / Iré si puedo..." }
          ]
        },
        {
          id: "ES-EXTRA-U3-L4",
          title: "Interrogativos e Exclamativos — SEMPRE com Acento",
          shadowing: "— Hay una regla de oro: los pronombres interrogativos y exclamativos siempre llevan tilde.\n— ¿Qué, quién, cuál, cómo, cuándo, dónde, cuánto?\n— Exacto. Sin importar si están en pregunta directa o indirecta.\n— ¿Qué diferencia hay?\n— Pregunta directa: '¿Cuándo llegas?' Indirecta: 'No sé cuándo llegas.' Mismo acento.\n— ¿Y en exclamaciones?\n— ¡Qué bonito! ¡Cómo llueve! ¡Cuánta gente! Siempre con acento.",
          memoryPhrases: [
            "QUÉ = interrogativo/exclamativo → acento SEMPRE",
            "que = relativo / conjunção → sem acento NUNCA",
            "CUÁNDO = quando (pergunta) ≠ cuando = quando (relativo/condicional)",
            "DÓNDE = onde (pergunta) ≠ donde = onde (relativo)",
            "CÓMO = como (pergunta/exclamação) ≠ como = como (relativo/comparativo)",
            "No sé cuándo / dónde / cómo llegará. (indireta = acento!)"
          ],
          oralProduction: "Formule 5 perguntas diretas e 5 perguntas indiretas em espanhol usando todos os interrogativos.",
          exercises: [
            { id: "ES-EXTRA-U3-L4-E1", type: "multiple_choice", skill: "grammar", question: "Qual frase tem os acentos corretos?", options: ["No se donde vives.", "No sé dónde vives.", "No sé donde vives.", "No se dónde vives."], answer: 1, explanation: "'No sé dónde vives.' — SÉ (verbo saber, com acento diacrítico) + DÓNDE (interrogativo indireto, sempre com acento)." },
            { id: "ES-EXTRA-U3-L4-E2", type: "multiple_choice", skill: "grammar", question: "Identifique TODOS os erros de acento: 'No se como se llama ni cuando llegara.'", options: ["Sem erros", "Falta acento em: sé, cómo, cuándo", "Falta acento em: cómo, cuándo (se está correto)", "Falta acento em: sé, cómo, cuándo, llegará"], answer: 3, explanation: "Quatro erros: sé (= sei, diacrítico), cómo (interrogativo indireto), cuándo (interrogativo indireto), llegará (oxítona em -á). 'No sé cómo se llama ni cuándo llegará.'" },
            { id: "ES-EXTRA-U3-L4-E3", type: "fill_blank", skill: "grammar", question: "Coloque os acentos corretos: 'Dime que es lo que quieres, como lo quieres y cuando lo necesitas.'", answer: ["Dime qué es lo que quieres, cómo lo quieres y cuándo lo necesitas."], hint: "interrogativos indiretos depois de 'dime' = acentos", explanation: "QUÉ (interrogativo indireto), lo que (relativo, sem acento), CÓMO (interrogativo indireto), CUÁNDO (interrogativo indireto). 'Dime qué es lo que quieres, cómo lo quieres y cuándo lo necesitas.'" },
            { id: "ES-EXTRA-U3-L4-E4", type: "translation", skill: "writing", question: "Traduza colocando todos os acentos corretamente: 'Não sei onde você mora, como trabalha nem quanto ganha. Me diga quem você é.'", answer: ["No sé dónde vives, cómo trabajas ni cuánto ganas. Dime quién eres."], explanation: "DÓNDE, CÓMO, CUÁNTO, QUIÉN = todos interrogativos indiretos, todos com acento." },
            { id: "ES-EXTRA-U3-L4-E5", type: "free_writing", skill: "grammar", question: "Escreva um interrogatório policial em espanhol (15 linhas): o detetive faz 5 perguntas diretas e 5 indiretas ao suspeito, usando qué, quién, cómo, cuándo, dónde, cuánto. Sublinhe cada interrogativo.", prompt: "Inclua variação: perguntas diretas (¿Dónde estabas?) e indiretas ('Dígame dónde estaba').", hint: "—¿Dónde estaba usted el martes? —Necesito saber dónde estuvo. —¿Con quién habló? —Dígame con quién habló..." }
          ]
        },
        {
          id: "ES-EXTRA-U3-L5",
          title: "Revisão Completa — Til Diacrítico em Contexto Real",
          shadowing: "— Resumen rápido: ¿cuántos pares de tilde diacrítica hay?\n— Los principales: tú/tu, él/el, mí/mi, sí/si, más/mas, sé/se, dé/de, té/te, aún/aun.\n— ¿Y los interrogativos?\n— Siempre con tilde en directo e indirecto: qué, quién, cómo, dónde, cuándo, cuánto, cuál.\n— ¿Cuál es el error más común de brasileños?\n— No poner acento en los interrogativos indirectos. 'No sé cuando llegas' sin acento.\n— El segundo error más común.\n— Confundir tú/tu: escribir 'tu eres' o 'haz lo que tu quieras'.",
          memoryPhrases: [
            "Regra de ouro: interrogativo = sempre acento (direto OU indireto)",
            "tú/tu · él/el · mí/mi · sí/si · más/mas · sé/se · té/te · aún/aun",
            "Erro mais comum BR: 'No sé cuando...' → correto: 'No sé cuándo...'",
            "Erro 2: 'haz lo que tu quieras' → 'haz lo que tú quieras'",
            "TI nunca leva acento (pronome preposicional de tú)",
            "QUIEN relativo nunca leva acento. QUIÉN interrogativo sempre leva."
          ],
          oralProduction: "Ditado mental: ouça frases em espanhol e escreva com os acentos diacríticos corretos.",
          exercises: [
            { id: "ES-EXTRA-U3-L5-E1", type: "multiple_choice", skill: "grammar", question: "Quantos erros de acento diacrítico há nesta frase? 'Tu sabes que si el viene, se lo dare a el y no a ti.'", options: ["2 erros", "3 erros", "4 erros", "5 erros"], answer: 2, explanation: "4 erros: TÚ sabes (pronome, acento), SÍ el viene (condicional está correto sem acento... não!— aqui é 'si' condicional = correto). EL viene → ÉL viene (pronome, acento). se lo DARÉ (oxítona futura). a ÉL (pronome, acento). = 4 erros: tú, él, daré, él." },
            { id: "ES-EXTRA-U3-L5-E2", type: "multiple_choice", skill: "grammar", question: "Corrija a frase: 'No se cuando ni donde encontrare a quien me pueda ayudar.'", options: ["No sé cuándo ni dónde encontraré a quien me pueda ayudar.", "No sé cuándo ni dónde encontraré a quién me pueda ayudar.", "No se cuándo ni dónde encontraré a quien me pueda ayudar.", "No sé cuando ni donde encontraré a quien me pueda ayudar."], answer: 0, explanation: "SÉ (diacrítico), CUÁNDO (interrogativo indireto), DÓNDE (interrogativo indireto), encontraré (oxítona), quien (relativo, sem acento — não é interrogativo aqui)." },
            { id: "ES-EXTRA-U3-L5-E3", type: "fill_blank", skill: "grammar", question: "Coloque todos os acentos que faltam: 'Tu le preguntaste a el si sabia donde estaba mi libro, ¿no?'", answer: ["Tú le preguntaste a él si sabía dónde estaba mi libro, ¿no?"], hint: "tú (pronome), él (pronome), sabía (pretérito imperfeito), dónde (interrogativo indireto)", explanation: "TÚ (pronome sujeito), ÉL (pronome sujeito), SABÍA (imperfeito = -ía tônico), DÓNDE (interrogativo indireto). MI livro = possessivo, sem acento." },
            { id: "ES-EXTRA-U3-L5-E4", type: "translation", skill: "writing", question: "Traduza com TODOS os acentos diacríticos corretos: 'Você sabe onde ele mora? Não sei se ele ainda está aqui. Me diga o que sabe.'", answer: ["¿Tú sabes dónde vive él? No sé si aún está aquí. Dime qué sabes."], explanation: "TÚ (pronome), DÓNDE (interrogativo direto), ÉL (pronome), sé (verbo saber, diacrítico), si (condicional, sem acento aqui), AÚN (=todavía, com acento), QUÉ (interrogativo indireto)." },
            { id: "ES-EXTRA-U3-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto de 12 linhas em espanhol com pelo menos 3 ocorrências de cada par: tú/tu, él/el, sí/si, más/mas, sé/se, dónde/donde, quién/quien. Sublinhe cada ocorrência e indique entre [ ] qual é.", prompt: "Texto livre sobre qualquer tema. O objetivo é usar todos os pares em contexto natural.", hint: "Tú [pronome] crees que tú [possessivo] amigo sabe más [quantif.] que yo, mas [adversat.] te equivocas. Él [pronome] y el [artigo] resultado..." }
          ]
        }
      ]
    }
  ]
};
