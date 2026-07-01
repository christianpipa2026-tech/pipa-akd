export const CURRICULUM_ES_A2_PART1 = {
  units: [
    {
      id: "ES-A2-U1",
      title: "Viagens e Turismo",
      description: "Vocabulário para viagens, hotéis, aeroportos e turismo",
      lessons: [
        {
          id: "ES-A2-U1-L1",
          title: "En el Aeropuerto — No Aeroporto",
          shadowing: "— Buenos días. ¿A qué destino viaja?\n— A Buenos Aires. Tengo un vuelo a las tres.\n— ¿Factura equipaje?\n— Sí, una maleta grande.\n— ¿Ventana o pasillo?\n— Ventana, por favor.\n— Aquí tiene su tarjeta de embarque. La puerta es la B12.\n— ¿A qué hora embarcan?\n— A las dos y cuarenta. Buen viaje.",
          memoryPhrases: [
            "el vuelo = o voo",
            "la maleta = a mala / a mochila",
            "la tarjeta de embarque = o cartão de embarque",
            "facturar equipaje = despachar bagagem",
            "la puerta de embarque = o portão de embarque",
            "el asiento = o assento"
          ],
          oralProduction: "Pratique o check-in de um voo em espanhol. Inclua destino, bagagem e assento.",
          exercises: [
            { id: "ES-A2-U1-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'cartão de embarque' em espanhol?", options: ["tarjeta de crédito", "tarjeta de embarque", "pasaporte", "billete"], answer: 1, explanation: "Tarjeta de embarque = cartão de embarque. Billete = bilhete/passagem. Pasaporte = passaporte." },
            { id: "ES-A2-U1-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'facturar equipaje'?", options: ["Pagar a bagagem", "Despachar a bagagem", "Perder a bagagem", "Pesar a bagagem"], answer: 1, explanation: "Facturar equipaje = despachar bagagem (entregar a mala para ir no porão do avião)." },
            { id: "ES-A2-U1-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El _____ sale a las tres de la tarde.' (O voo sai às três da tarde.)", answer: ["vuelo"], hint: "voo em espanhol", explanation: "Vuelo = voo. El vuelo sale = o voo parte/sai." },
            { id: "ES-A2-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Quero um assento na janela no voo para Madri.'", answer: ["Quiero un asiento de ventana en el vuelo a Madrid.", "Quiero asiento de ventana para el vuelo a Madrid."], explanation: "Asiento de ventana = assento de janela. Pasillo = corredor. Madrid = Madri." },
            { id: "ES-A2-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo de check-in no aeroporto. Mínimo 8 falas.", prompt: "Inclua: destino · bagagem · assento · portão · horário de embarque", hint: "¿A qué destino viaja?, ¿Factura equipaje?, ¿Ventana o pasillo?, la puerta es..." }
          ]
        },
        {
          id: "ES-A2-U1-L2",
          title: "En el Hotel — Reservas e Reclamações",
          shadowing: "— Buenos días, tengo una reserva a nombre de Santos.\n— Sí, señor Santos. Una habitación doble para tres noches.\n— Exacto. ¿Puedo hacer el check-in ahora?\n— Por supuesto. Aquí tiene su llave. Habitación 415.\n— ¿El desayuno está incluido?\n— Sí, de siete a diez en el restaurante.\n— Perdone, pero hay un problema con el aire acondicionado.\n— Disculpe, enseguida enviamos a alguien.",
          memoryPhrases: [
            "la habitación doble/sencilla = quarto duplo/solteiro",
            "el check-in/check-out = o check-in/check-out",
            "la llave = a chave",
            "el aire acondicionado = o ar-condicionado",
            "hay un problema = há um problema",
            "disculpe = desculpe"
          ],
          oralProduction: "Faça um check-in de hotel e reclame de um problema no quarto, em espanhol.",
          exercises: [
            { id: "ES-A2-U1-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'quarto de casal' em espanhol?", options: ["habitación sencilla", "habitación doble", "habitación triple", "suite"], answer: 1, explanation: "Habitación doble = quarto duplo/casal. Sencilla = solteiro/simples. Triple = triplo." },
            { id: "ES-A2-U1-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'enseguida'?", options: ["Ontem", "Agora mesmo / imediatamente", "Amanhã", "Às vezes"], answer: 1, explanation: "Enseguida = agora mesmo / imediatamente. Muito útil para responder reclamações: 'enseguida lo arreglamos' = vamos resolver imediatamente." },
            { id: "ES-A2-U1-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Tengo una _____ a nombre de García.' (Tenho uma reserva no nome de García.)", answer: ["reserva"], hint: "reserva em espanhol", explanation: "Reserva = reserva. 'A nombre de' = em nome de. Muito útil em hotéis e restaurantes." },
            { id: "ES-A2-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'O ar-condicionado não funciona e o quarto está muito quente.'", answer: ["El aire acondicionado no funciona y la habitación está muy caliente.", "El aire acondicionado no funciona y hace mucho calor en la habitación."], explanation: "No funciona = não funciona. Caliente = quente (objeto). Hace calor = está quente (temperatura ambiente)." },
            { id: "ES-A2-U1-L2-E5", type: "free_writing", skill: "writing", question: "Você está insatisfeito com o seu quarto de hotel. Escreva o diálogo com a recepção. Mínimo 8 falas.", prompt: "Inclua: problema específico · pedido de solução · oferta do hotel · resolução", hint: "Hay un problema con..., ¿Puede cambiarme de habitación?, Disculpe, enseguida..." }
          ]
        },
        {
          id: "ES-A2-U1-L3",
          title: "Pretérito Perfecto — Passado Recente",
          shadowing: "— ¿Has estado en México?\n— Sí, he estado dos veces. Es increíble.\n— ¿Y has probado la comida mexicana?\n— ¡Claro! He comido tacos, enchiladas... todo.\n— ¿Has aprendido algo de español allí?\n— He mejorado mucho. He practicado todos los días.",
          memoryPhrases: [
            "he + participio = tenho + participado",
            "has viajado = você viajou / você já viajou",
            "ha comido = ele/ela comeu (recente)",
            "hemos llegado = chegamos (agora)",
            "¿Has + participio? = Você já + verbo?",
            "participios irregulares: hecho, dicho, visto, vuelto, puesto"
          ],
          oralProduction: "Conte o que você já fez na sua vida usando o pretérito perfecto. Use 5 verbos diferentes.",
          exercises: [
            { id: "ES-A2-U1-L3-E1", type: "multiple_choice", skill: "grammar", question: "Como se forma o pretérito perfecto de 'viajar' para 'yo'?", options: ["yo viajé", "yo he viajado", "yo había viajado", "yo viajaba"], answer: 1, explanation: "He viajado = viajei / tenho viajado. Pretérito perfecto: HABER conjugado + participio (-ado/-ido)." },
            { id: "ES-A2-U1-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual é o participio irregular de 'ver'?", options: ["vido", "veído", "visto", "véido"], answer: 2, explanation: "Visto = visto (participio de VER). Irregulares importantes: hecho (fazer), dicho (dizer), visto (ver), vuelto (voltar), puesto (colocar), abierto (abrir)." },
            { id: "ES-A2-U1-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: '¿_____ probado el ceviche?' (Você já provou o ceviche?)", answer: ["Has"], hint: "auxiliar HABER para 'tú'", explanation: "¿Has probado? = Você já provou? HAS = auxiliar haber para tú no pretérito perfecto." },
            { id: "ES-A2-U1-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Nunca fui ao Japão mas já comi sushi muitas vezes.'", answer: ["Nunca he ido a Japón pero he comido sushi muchas veces.", "Nunca he estado en Japón pero he comido sushi muchas veces."], explanation: "Nunca he ido = nunca fui. He comido = comi / já comi. Muchas veces = muitas vezes." },
            { id: "ES-A2-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre suas experiências de viagem usando o pretérito perfecto. Mínimo 8 frases.", prompt: "Inclua: lugares que visitou · coisas que comeu · pessoas que conheceu · coisas que fez", hint: "He visitado, he comido, he conocido, he visto, he aprendido, he disfrutado..." }
          ]
        },
        {
          id: "ES-A2-U1-L4",
          title: "Comparativos e Superlativos",
          shadowing: "— ¿Cuál es más barato, el hotel o el hostal?\n— El hostal es más barato pero menos cómodo.\n— ¿Y el más caro de la ciudad?\n— El Hotel Palace es el más lujoso.\n— ¿Es tan bueno como dicen?\n— Sí, es tan bueno como un cinco estrellas.\n— Prefiero algo más económico.",
          memoryPhrases: [
            "más... que = mais... que",
            "menos... que = menos... que",
            "tan... como = tão... como",
            "el/la más... = o/a mais...",
            "mejor/peor = melhor/pior",
            "mayor/menor = maior/menor"
          ],
          oralProduction: "Compare 3 cidades ou países que você conhece usando comparativos em espanhol.",
          exercises: [
            { id: "ES-A2-U1-L4-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'São Paulo é maior que Rio' em espanhol?", options: ["São Paulo es más grande que Rio", "São Paulo es mayor que Rio", "São Paulo es lo más grande de Rio", "A e B são corretas"], answer: 3, explanation: "Tanto 'más grande que' quanto 'mayor que' são corretos para comparar tamanho. Mayor/menor são formas irregulares de grande/pequeño." },
            { id: "ES-A2-U1-L4-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'O melhor restaurante da cidade'?", options: ["El más bien restaurante", "El mejor restaurante de la ciudad", "El más bueno restaurante", "El restaurante mejor"], answer: 1, explanation: "El mejor = o melhor. BUENO tem superlativo irregular: bueno → mejor (melhor) → el mejor (o melhor)." },
            { id: "ES-A2-U1-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Este hotel es _____ caro _____ el otro.' (Este hotel é tão caro quanto o outro.)", answer: ["tan", "como"], hint: "estrutura de comparação de igualdade", explanation: "Tan... como = tão... quanto/como. Estrutura para comparar igualdade: tan + adjetivo + como." },
            { id: "ES-A2-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'O voo direto é mais caro mas mais rápido que o com escala.'", answer: ["El vuelo directo es más caro pero más rápido que el vuelo con escala.", "El vuelo directo es más caro pero más rápido que el de escala."], explanation: "Vuelo directo = voo direto. Con escala = com escala. Más caro pero más rápido = mais caro mas mais rápido." },
            { id: "ES-A2-U1-L4-E5", type: "free_writing", skill: "writing", question: "Compare dois destinos turísticos que você conhece ou gostaria de conhecer. Mínimo 8 frases.", prompt: "Inclua: clima · custo · comida · atrações · qual prefere e por quê", hint: "Es más/menos..., tan... como, el mejor/peor, prefiero... porque..." }
          ]
        },
        {
          id: "ES-A2-U1-L5",
          title: "Pedir Informações e Orientações",
          shadowing: "— Perdona, ¿sabes dónde está el museo?\n— Sí, mira: sigue todo recto dos cuadras, gira a la izquierda en el semáforo y está justo enfrente.\n— ¿Está lejos?\n— No, a unos diez minutos a pie.\n— ¿Y hay alguna parada de metro cerca?\n— Sí, la estación Plaza Mayor está a cien metros.\n— Muchas gracias, muy amable.",
          memoryPhrases: [
            "sigue todo recto = continue em frente",
            "gira a la izquierda/derecha = vire à esquerda/direita",
            "en el semáforo = no semáforo",
            "enfrente de = em frente a",
            "a unos... metros/minutos = a uns... metros/minutos",
            "muy amable = muito gentil"
          ],
          oralProduction: "Peça e dê direções para 3 lugares diferentes em espanhol, descrevendo o caminho completo.",
          exercises: [
            { id: "ES-A2-U1-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'vire à direita no semáforo' em espanhol?", options: ["Sigue a la derecha en el cruce", "Gira a la derecha en el semáforo", "Dobla derecha en la luz", "Ve a la derecha del semáforo"], answer: 1, explanation: "Gira a la derecha en el semáforo = vire à direita no semáforo. Semáforo = semáforo. Gira/dobla/tuerce = vire." },
            { id: "ES-A2-U1-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'muy amable'?", options: ["Muito animado", "Muito gentil / muito simpático", "Muito amigo", "Muito longe"], answer: 1, explanation: "Muy amable = muito gentil / que gentileza. É a forma mais educada de agradecer uma ajuda ou favor." },
            { id: "ES-A2-U1-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Está _____ enfrente del banco.' (Fica bem em frente ao banco.)", answer: ["justo"], hint: "palavra para enfatizar 'exatamente em frente'", explanation: "Justo enfrente = bem em frente / exatamente em frente. Justo = exatamente / bem (intensificador)." },
            { id: "ES-A2-U1-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Siga em frente dois quarteirões, vire à esquerda e o hotel fica à direita.'", answer: ["Siga todo recto dos cuadras, gire a la izquierda y el hotel está a la derecha.", "Sigue todo recto dos cuadras, gira a la izquierda y el hotel está a la derecha."], explanation: "Todo recto = em frente. Dos cuadras = dois quarteirões. Gire/gira = vire. A la derecha = à direita." },
            { id: "ES-A2-U1-L5-E5", type: "free_writing", skill: "writing", question: "Você é guia turístico. Escreva as instruções detalhadas para chegar de um ponto famoso da sua cidade a outro. Mínimo 8 frases.", prompt: "Inclua: ponto de partida · direções detalhadas · pontos de referência · distância aproximada", hint: "Sal de..., sigue todo recto, gira a la..., en el semáforo, a mano derecha/izquierda, llegas a..." }
          ]
        }
      ]
    },
    {
      id: "ES-A2-U2",
      title: "Passado e Memórias",
      description: "Pretérito indefinido e imperfecto para contar histórias",
      lessons: [
        {
          id: "ES-A2-U2-L1",
          title: "Pretérito Imperfecto — Hábitos do Passado",
          shadowing: "— ¿Cómo eras de pequeño?\n— Era muy tímido. No hablaba mucho.\n— ¿Y qué hacías en verano?\n— Íbamos a la playa todos los años. Mi abuela cocinaba y nosotros jugábamos en el mar.\n— ¡Qué bonito! ¿Vivías en el campo?\n— No, vivíamos en la ciudad, pero pasábamos el verano en el pueblo.",
          memoryPhrases: [
            "era = era (ser, imperfecto)",
            "tenía = tinha (ter, imperfecto)",
            "vivía = morava (viver, imperfecto)",
            "hacía = fazia (fazer, imperfecto)",
            "jugaba = brincava/jogava (jogar, imperfecto)",
            "de pequeño/a = quando era pequeno/a"
          ],
          oralProduction: "Descreva como você era e o que fazia quando tinha 10 anos, em espanhol. Mínimo 6 frases.",
          exercises: [
            { id: "ES-A2-U2-L1-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Eu morava no Rio' (hábito passado)?", options: ["Yo vivé en Río", "Yo vivía en Río", "Yo he vivido en Río", "Yo viví en Río"], answer: 1, explanation: "Vivía = morava. Pretérito imperfecto para hábitos/estados continuados no passado: -aba/-ía." },
            { id: "ES-A2-U2-L1-E2", type: "multiple_choice", skill: "grammar", question: "Quando usar o Imperfecto vs Indefinido?", options: ["Imperfecto para ações únicas, Indefinido para hábitos", "Imperfecto para hábitos/estados contínuos, Indefinido para ações completas", "São iguais", "Imperfecto para o futuro"], answer: 1, explanation: "Imperfecto = hábito/estado contínuo no passado ('eu morava'). Indefinido = ação completa/única ('eu morei lá por 2 anos e vim embora')." },
            { id: "ES-A2-U2-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Cuando era niño, _____ al fútbol todos los días.' (Quando era criança, jogava futebol todos os dias.)", answer: ["jugaba"], hint: "imperfecto de 'jugar' para yo", explanation: "Jugaba = jogava/brincava. Imperfecto de -AR: yo -aba. Jugaba, hablaba, estudiaba..." },
            { id: "ES-A2-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Quando eu era criança, minha avó sempre me contava histórias antes de dormir.'", answer: ["Cuando era niño/niña, mi abuela siempre me contaba cuentos antes de dormir.", "De pequeño/a, mi abuela siempre me contaba historias antes de dormir."], explanation: "Cuando era niño/niña = quando era criança. Contaba = contava. Antes de dormir = antes de dormir." },
            { id: "ES-A2-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva sobre sua infância usando o pretérito imperfecto. Mínimo 8 frases.", prompt: "Inclua: onde morava · escola · brincadeiras · família · hábitos de fim de semana", hint: "Cuando era pequeño/a, vivía en..., iba a la escuela..., jugaba..., mi familia..." }
          ]
        },
        {
          id: "ES-A2-U2-L2",
          title: "Contraste Indefinido vs Imperfecto",
          shadowing: "— Ayer, mientras comía, sonó el teléfono.\n— ¿Y quién era?\n— Era mi jefe. Me dijo que llegó un cliente importante.\n— ¿Qué hiciste?\n— Terminé de comer rápido y fui a la oficina.\n— ¿Estaba lejos?\n— No, pero cuando llegué, el cliente ya se había ido.",
          memoryPhrases: [
            "mientras + imperfecto = enquanto + imperfeito",
            "cuando llegué = quando cheguei (ação que interrompeu)",
            "sonó el teléfono = o telefone tocou (ação pontual)",
            "era = era (estado de fundo)",
            "llegó = chegou (ação concluída)",
            "ya + pluscuamperfecto = já tinha + participado"
          ],
          oralProduction: "Conte um dia em que aconteceu algo inesperado, usando imperfecto e indefinido.",
          exercises: [
            { id: "ES-A2-U2-L2-E1", type: "multiple_choice", skill: "grammar", question: "Escolha o correto: 'Mientras _____ (ducharse), _____ (sonar) el teléfono.'", options: ["me duchaba / sonó", "me duché / sonaba", "me duchaba / sonaba", "me duché / sonó"], answer: 0, explanation: "Me duchaba (ação contínua) + sonó (ação que interrompeu). Imperfecto para o fundo, Indefinido para a ação pontual." },
            { id: "ES-A2-U2-L2-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Cuando era pequeño, _____ (vivir) en Madrid.'", options: ["viví", "vivía", "he vivido", "viviera"], answer: 1, explanation: "Vivía = morava. 'Cuando era pequeño' pede imperfecto — é um estado contínuo/hábito da infância, não uma ação pontual." },
            { id: "ES-A2-U2-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Ayer _____ al supermercado y _____ a mi vecina.' (Ontem fui ao supermercado e encontrei minha vizinha.)", answer: ["fui, encontré"], hint: "duas ações pontuais e completas no passado", explanation: "Fui + encontré = indefinido (ações pontuais/completas no passado). Não é hábito, é algo que aconteceu uma vez." },
            { id: "ES-A2-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Enquanto eu estudava, meu irmão chegou em casa com uma novidade.'", answer: ["Mientras yo estudiaba, mi hermano llegó a casa con una novedad.", "Mientras estudiaba, mi hermano llegó a casa con una sorpresa."], explanation: "Mientras estudiaba = enquanto eu estudava (imperfecto). Llegó = chegou (indefinido — ação que interrompeu)." },
            { id: "ES-A2-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva uma história sobre algo interessante ou engraçado que aconteceu com você. Mínimo 10 frases.", prompt: "Inclua: onde você estava e o que fazia (imperfecto) · o que aconteceu de repente (indefinido) · como terminou", hint: "Era un día normal, yo estaba..., de repente..., entonces..., al final..." }
          ]
        },
        {
          id: "ES-A2-U2-L3",
          title: "Verbos de Comunicação — Decir, Preguntar, Pedir",
          shadowing: "— ¿Qué te dijo el médico?\n— Me dijo que tenía que descansar más.\n— ¿Y te preguntó sobre el estrés?\n— Sí, me preguntó qué hacía en el trabajo.\n— ¿Le pediste algo?\n— Le pedí una baja por enfermedad.\n— ¿Y te la dio?\n— Sí, me dio una semana.",
          memoryPhrases: [
            "me dijo que = me disse que",
            "me preguntó = me perguntou",
            "le pedí = pedi a ele/ela",
            "me dio = me deu",
            "decir → dijo (pretérito irregular)",
            "pedir → pidió (pretérito com mudança e→i)"
          ],
          oralProduction: "Conte o que alguém te disse ou perguntou hoje usando decir, preguntar e pedir.",
          exercises: [
            { id: "ES-A2-U2-L3-E1", type: "multiple_choice", skill: "grammar", question: "Qual é o pretérito de 'decir' para 'él'?", options: ["decidió", "dijo", "decía", "ha dicho"], answer: 1, explanation: "Dijo = disse. Decir é completamente irregular no pretérito: dije, dijiste, dijo, dijimos, dijisteis, dijeron." },
            { id: "ES-A2-U2-L3-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Ela me pediu ajuda' em espanhol?", options: ["Ella me pidió ayuda", "Ella me pedió ayuda", "Ella me pedio ayuda", "Ella me preguntó ayuda"], answer: 0, explanation: "Me pidió = me pediu. PEDIR é irregular no pretérito (mudança e→i): pedí, pediste, pidió, pedimos, pedisteis, pidieron." },
            { id: "ES-A2-U2-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Mi jefe me _____ que llegara temprano.' (Meu chefe me disse para chegar cedo.)", answer: ["dijo"], hint: "pretérito de decir para él/ella", explanation: "Me dijo = me disse. Decir → dijo (3ª pessoa singular do pretérito indefinido)." },
            { id: "ES-A2-U2-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Ela me perguntou onde eu morava e eu disse que era do Brasil.'", answer: ["Ella me preguntó dónde vivía y yo le dije que era de Brasil.", "Me preguntó dónde vivía y le dije que era brasileño/a."], explanation: "Me preguntó = me perguntou. Le dije = disse a ela. Que era de Brasil = que era do Brasil (estilo indireto)." },
            { id: "ES-A2-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre uma conversa importante que você teve usando decir, preguntar e pedir. Mínimo 8 frases.", prompt: "Inclua: quem disse o quê · o que você perguntou · o que você pediu · o resultado", hint: "Me dijo que..., le pregunté..., me pidió que..., le pedí..., al final..." }
          ]
        },
        {
          id: "ES-A2-U2-L4",
          title: "Pronomes de Objeto Indireto — Le, Les",
          shadowing: "— ¿Le has escrito a tu madre?\n— Sí, le mandé un mensaje ayer.\n— ¿Y qué le dijiste?\n— Le conté que estoy bien y que ya llegué.\n— ¿Les vas a llamar a tus amigos también?\n— Sí, les voy a llamar esta tarde.\n— ¿Les traes algo de regalo?\n— Claro, les compré recuerdos.",
          memoryPhrases: [
            "le = a ele/ela/você (objeto indireto singular)",
            "les = a eles/elas/vocês (objeto indireto plural)",
            "le dije = disse a ele/ela",
            "les mandé = mandei a eles/elas",
            "le compré = comprei para ele/ela",
            "se lo di = dei-o para ele/ela (combinação)"
          ],
          oralProduction: "Fale sobre o que você fez ou vai fazer para pessoas próximas usando le e les.",
          exercises: [
            { id: "ES-A2-U2-L4-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Eu disse a ela que cheguei' em espanhol?", options: ["La dije que llegué", "Le dije que llegué", "Les dije que llegué", "Lo dije que llegué"], answer: 1, explanation: "Le dije = disse a ela. LE é o pronome de objeto indireto para singular (ele/ela/você). Não confundir com LO/LA (objeto direto)." },
            { id: "ES-A2-U2-L4-E2", type: "multiple_choice", skill: "grammar", question: "Complete: '_____ mandé flores a mis padres.'", options: ["Lo", "La", "Le", "Les"], answer: 3, explanation: "Les mandé = mandei a eles (meus pais = plural). LES para objeto indireto plural." },
            { id: "ES-A2-U2-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ voy a comprar un regalo a mi novia.' (Vou comprar um presente para minha namorada.)", answer: ["Le"], hint: "objeto indireto singular feminino", explanation: "Le = a ela (singular). Objeto indireto não distingue masculino/feminino: le dije, le compré, le mandé." },
            { id: "ES-A2-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Comprei presentes para meus amigos e dei-os a eles ontem.'", answer: ["Compré regalos para mis amigos y se los di ayer.", "Les compré regalos y se los di ayer."], explanation: "Les compré = comprei para eles. Se los di = dei-os a eles. SE substitui LE/LES antes de LO/LA/LOS/LAS." },
            { id: "ES-A2-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escreva sobre algo que você fez para pessoas importantes na sua vida recentemente. Mínimo 8 frases.", prompt: "Inclua: o que você deu/mandou/disse a essas pessoas · reação delas · como você se sentiu", hint: "Le regalé..., les dije..., le mandé..., les compré..., le conté que..." }
          ]
        },
        {
          id: "ES-A2-U2-L5",
          title: "Expressar Sentimentos e Emoções",
          shadowing: "— ¿Estás bien? Te noto triste.\n— Estoy un poco preocupado. Tengo un examen importante.\n— ¿Y cómo te sientes?\n— Nervioso. Pero también emocionado.\n— ¿Por qué emocionado?\n— Porque si apruebo, consigo el trabajo que quiero.\n— ¡Ánimo! Estoy seguro de que lo vas a hacer muy bien.",
          memoryPhrases: [
            "estoy preocupado/a = estou preocupado/a",
            "me siento nervioso/a = estou nervoso/a",
            "estoy emocionado/a = estou animado/a (positivo!)",
            "¡Ánimo! = Coragem! / Vai lá!",
            "estoy seguro/a de que = tenho certeza que",
            "me alegra que = fico feliz que"
          ],
          oralProduction: "Descreva como você está se sentindo hoje e por quê, em espanhol. Use pelo menos 4 emoções.",
          exercises: [
            { id: "ES-A2-U2-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "CUIDADO! 'Estoy emocionado' em espanhol significa:", options: ["Estou emocionado (chorando)", "Estou animado / entusiasmado", "Estou com medo", "Estou com raiva"], answer: 1, explanation: "Emocionado em espanhol = animado, entusiasmado (positivo!). Para 'emocionado' no sentido de 'with tears' em espanhol se diz: 'me emocioné' = me emocionei, fiquei emocionado." },
            { id: "ES-A2-U2-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se diz '¡Ánimo!' em português?", options: ["Animo!", "Coragem! / Vai lá! / Bora!", "Calma!", "Para!"], answer: 1, explanation: "¡Ánimo! = Coragem! / Vai lá! / Força! É uma palavra de encorajamento muito usada em espanhol." },
            { id: "ES-A2-U2-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Me _____ que hayas llegado bien.' (Fico feliz que você tenha chegado bem.)", answer: ["alegra"], hint: "verbo alegrarse = alegrar-se", explanation: "Me alegra = fico feliz / me alegra. Funciona como GUSTAR: me alegra + que + subjuntivo." },
            { id: "ES-A2-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Estou muito nervoso com a apresentação de amanhã mas tenho certeza que vai dar certo.'", answer: ["Estoy muy nervioso con la presentación de mañana pero estoy seguro de que va a salir bien.", "Estoy muy nervioso por la presentación de mañana pero estoy seguro de que lo voy a hacer bien."], explanation: "Nervioso = nervoso. Seguro de que = com certeza que. Va a salir bien = vai dar certo / vai sair bem." },
            { id: "ES-A2-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva sobre um momento em que você sentiu emoções intensas (positivas ou negativas). Mínimo 8 frases.", prompt: "Inclua: situação · como você se sentia · o que aconteceu · como terminou · como você se sente agora sobre isso", hint: "Me sentía..., estaba..., de repente..., me alegré/me puse triste/me asusté..., ahora..." }
          ]
        }
      ]
    }
  ]
};
