export const CURRICULUM_ES_A2_PART2 = {
  units: [
    {
      id: "ES-A2-U3",
      title: "Saúde, Conselhos e Obrigações",
      description: "Expressões de obrigação, conselho e vocabulário de saúde",
      lessons: [
        {
          id: "ES-A2-U3-L1",
          title: "Hay que, Tener que, Deber — Obrigação e Conselho",
          shadowing: "— Doctor, me duele mucho la espalda.\n— Tiene que descansar más y no debe levantar cosas pesadas.\n— ¿Hay que tomar medicamentos?\n— Sí, debe tomar estos antiinflamatorios. Y debería hacer fisioterapia.\n— ¿Cuándo debo volver?\n— Si no mejora, debe volver en una semana.",
          memoryPhrases: [
            "tener que + inf. = ter que / precisar (obrigação pessoal)",
            "deber + inf. = dever (obrigação/conselho)",
            "hay que + inf. = é preciso (impessoal)",
            "debería + inf. = deveria (conselho suave)",
            "no debe = não deve",
            "es necesario = é necessário"
          ],
          oralProduction: "Dê 5 conselhos de saúde para um amigo imaginário usando tener que, deber e hay que.",
          exercises: [
            { id: "ES-A2-U3-L1-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença entre 'hay que' e 'tener que'?", options: ["São iguais", "Hay que é impessoal (geral), tener que é pessoal (específico)", "Hay que é mais forte", "Tener que é impessoal"], answer: 1, explanation: "Hay que estudiar = é preciso estudar (geral). Tengo que estudiar = eu tenho que estudar (específico para mim)." },
            { id: "ES-A2-U3-L1-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Você deveria dormir mais' (conselho suave)?", options: ["Tienes que dormir más", "Debes dormir más", "Deberías dormir más", "Hay que dormir más"], answer: 2, explanation: "Deberías = deveria (condicional de deber). É a forma mais suave e educada para dar conselhos." },
            { id: "ES-A2-U3-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ hacer más ejercicio para estar sano.' (É preciso fazer mais exercício para ser saudável.)", answer: ["Hay que"], hint: "expressão impessoal de obrigação", explanation: "Hay que = é preciso / é necessário. Sempre seguido de infinitivo, sem sujeito específico." },
            { id: "ES-A2-U3-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Você deve beber mais água e não deveria tomar tanto café.'", answer: ["Debes beber más agua y no deberías tomar tanto café.", "Tienes que beber más agua y no deberías tomar tanto café."], explanation: "Debes/Tienes que = você deve/tem que. No deberías = não deveria (conselho negativo suave)." },
            { id: "ES-A2-U3-L1-E5", type: "free_writing", skill: "writing", question: "Escreva uma lista de recomendações de saúde para alguém que está estressado. Mínimo 8 frases.", prompt: "Inclua: o que tem que fazer · o que deve evitar · o que deveria tentar · hábitos gerais (hay que)", hint: "Tienes que..., no debes..., deberías..., hay que..., es importante que..." }
          ]
        },
        {
          id: "ES-A2-U3-L2",
          title: "En la Farmacia — Na Farmácia",
          shadowing: "— Buenos días. ¿Tiene algo para el dolor de cabeza?\n— ¿Tiene alergia a algún medicamento?\n— No, que yo sepa.\n— Le recomiendo este ibuprofeno. Tómelo cada ocho horas.\n— ¿Con o sin receta?\n— Este es sin receta. Pero si el dolor continúa más de tres días, debe ver a un médico.\n— ¿Cuánto cuesta?\n— Cuatro euros con noventa.",
          memoryPhrases: [
            "el medicamento = o medicamento",
            "la receta = a receita médica",
            "sin receta = sem receita",
            "tómelo cada... horas = tome-o a cada... horas",
            "¿tiene alergia a? = você tem alergia a?",
            "que yo sepa = que eu saiba"
          ],
          oralProduction: "Pratique uma conversa em farmácia: descreva seus sintomas e pergunte sobre medicamentos.",
          exercises: [
            { id: "ES-A2-U3-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'sem receita médica' em espanhol?", options: ["sin receta", "sin doctor", "sin medicina", "sin pastilla"], answer: 0, explanation: "Sin receta = sem receita. Con receta = com receita. Receta = receita (tanto culinária quanto médica em espanhol)." },
            { id: "ES-A2-U3-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'que yo sepa'?", options: ["Que eu aprenda", "Que eu saiba", "Porque eu sei", "Segundo eu sei"], answer: 1, explanation: "Que yo sepa = que eu saiba. É uma expressão muito útil para indicar incerteza educada. 'No, que yo sepa' = não, que eu saiba." },
            { id: "ES-A2-U3-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Tome una _____ cada seis horas.' (Tome um comprimido a cada seis horas.)", answer: ["pastilla", "tableta"], hint: "comprimido em espanhol", explanation: "Pastilla/tableta = comprimido. Jarabe = xarope. Gotas = gotas. Crema = creme." },
            { id: "ES-A2-U3-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Tenho dor de garganta. Você tem algo sem receita para isso?'", answer: ["Tengo dolor de garganta. ¿Tiene algo sin receta para eso?", "Me duele la garganta. ¿Tiene algo sin receta?"], explanation: "Dolor de garganta = dor de garganta. Sin receta = sem receita. Para eso = para isso." },
            { id: "ES-A2-U3-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo completo em uma farmácia. Você tem vários sintomas diferentes. Mínimo 10 falas.", prompt: "Inclua: descrição dos sintomas · alergias · medicamentos recomendados · como tomar · preço", hint: "Me duele..., tengo..., ¿Tiene alergia a...?, Tómelo cada..., ¿Cuánto cuesta?" }
          ]
        },
        {
          id: "ES-A2-U3-L3",
          title: "Futuro Simples — Predicções e Promessas",
          shadowing: "— ¿Qué harás este verano?\n— Viajaré a Argentina con mi familia.\n— ¿Cuánto tiempo estaréis allí?\n— Estaremos tres semanas. Visitaremos Buenos Aires y Mendoza.\n— ¿Y el trabajo?\n— Mi jefe me dijo que podré trabajar desde allá.\n— ¡Qué bien! Seguro que lo pasaréis genial.",
          memoryPhrases: [
            "viajaré = viajarei",
            "estaré = estarei",
            "haré = farei",
            "podré = poderei",
            "vendrá = virá",
            "tendrá = terá"
          ],
          oralProduction: "Fale sobre seus planos para o próximo ano usando o futuro simples. Mínimo 6 frases.",
          exercises: [
            { id: "ES-A2-U3-L3-E1", type: "multiple_choice", skill: "grammar", question: "Como se forma o futuro simples de 'hablar' para 'yo'?", options: ["hablaré", "hablaré", "hablarié", "he hablado"], answer: 0, explanation: "Hablaré = falarei. Futuro simples regular: infinitivo + terminações (-é, -ás, -á, -emos, -éis, -án)." },
            { id: "ES-A2-U3-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual é o futuro de 'hacer' para 'yo' (irregular)?", options: ["haceré", "haré", "hacerá", "haré"], answer: 1, explanation: "Haré = farei. HACER tem radical irregular no futuro: har- (não hacer-). Outros irregulares: tener→tendr-, venir→vendr-, poder→podr-, saber→sabr-." },
            { id: "ES-A2-U3-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'El año que viene _____ a España.' (No ano que vem irei à Espanha.)", answer: ["iré"], hint: "futuro de 'ir' para yo", explanation: "Iré = irei. IR no futuro: iré, irás, irá, iremos, iréis, irán. Regular com o infinitivo ir." },
            { id: "ES-A2-U3-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'No próximo verão farei uma viagem pela América do Sul.'", answer: ["El próximo verano haré un viaje por América del Sur.", "El verano que viene haré un viaje por Sudamérica."], explanation: "Haré = farei. Viaje = viagem. Por = pela (movimento por um lugar). El próximo verano = no próximo verão." },
            { id: "ES-A2-U3-L3-E5", type: "free_writing", skill: "writing", question: "Escreva uma redação sobre o que você fará nos próximos 5 anos usando o futuro simples. Mínimo 8 frases.", prompt: "Inclua: trabalho · viagens · família · estudos · objetivos pessoais", hint: "Trabajaré en..., viajaré a..., estudiaré..., tendré..., podré..." }
          ]
        },
        {
          id: "ES-A2-U3-L4",
          title: "Condicional — Situações Hipotéticas",
          shadowing: "— Si tuvieras más dinero, ¿qué harías?\n— Viajaría por todo el mundo. ¿Y tú?\n— Yo compraría una casa en la playa.\n— ¿Y si pudieras vivir en otro país, dónde vivirías?\n— Viviría en Italia. Me encanta la cultura italiana.\n— Yo preferiría quedarme en Brasil. No cambiaría nada.",
          memoryPhrases: [
            "haría = faria",
            "viajaría = viajaria",
            "compraría = compraria",
            "viviría = moraria",
            "querría = queria / gostaria",
            "me gustaría = eu gostaria"
          ],
          oralProduction: "Responda: Se você pudesse fazer qualquer coisa amanhã, o que faria? Use o condicional.",
          exercises: [
            { id: "ES-A2-U3-L4-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Eu gostaria de visitar o Japão' em espanhol?", options: ["Me gusto visitar Japón", "Me gustaría visitar Japón", "Yo gustaría Japón", "Me gusté visitar Japón"], answer: 1, explanation: "Me gustaría = eu gostaria. GUSTAR no condicional: me gustaría, te gustaría, le gustaría, nos gustaría, les gustaría." },
            { id: "ES-A2-U3-L4-E2", type: "multiple_choice", skill: "grammar", question: "Qual é o condicional de 'hacer' para 'yo'?", options: ["hacería", "haría", "harería", "hacía"], answer: 1, explanation: "Haría = faria. HACER no condicional usa o radical irregular har- (mesmo do futuro): haría, harías, haría, haríamos, haríais, harían." },
            { id: "ES-A2-U3-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Con más tiempo, _____ más.' (Com mais tempo, estudaria mais.)", answer: ["estudiaría"], hint: "condicional de 'estudiar' para yo", explanation: "Estudiaría = estudaria. Condicional regular -AR: estudiar + -ía = estudiaría." },
            { id: "ES-A2-U3-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Se eu tivesse um milhão de dólares, compraria uma casa e viajaria pelo mundo.'", answer: ["Si tuviera un millón de dólares, compraría una casa y viajaría por el mundo.", "Si tuviese un millón de dólares, compraría una casa y viajaría por el mundo."], explanation: "Si tuviera = se eu tivesse (subjuntivo). Compraría = compraria. Viajaría = viajaria." },
            { id: "ES-A2-U3-L4-E5", type: "free_writing", skill: "writing", question: "Escreva sobre o que você faria se pudesse mudar algo na sua vida. Mínimo 8 frases.", prompt: "Inclua: trabalho · local de moradia · estudos · relacionamentos · hábitos", hint: "Si pudiera..., cambiaría..., viviría en..., trabajaría de..., estudiaría..." }
          ]
        },
        {
          id: "ES-A2-U3-L5",
          title: "Conectores Discursivos — Organizar o Discurso",
          shadowing: "— ¿Por qué aprendes español?\n— Primero, porque me gusta mucho la cultura latina. Además, necesito el idioma para mi trabajo.\n— ¿Y es difícil para un brasileño?\n— En realidad, no tanto. Sin embargo, la gramática tiene sus complicaciones.\n— ¿Como cuáles, por ejemplo?\n— Bueno, el subjuntivo es bastante difícil. Pero, por otro lado, la pronunciación es más fácil que el inglés.",
          memoryPhrases: [
            "primero = primeiro / em primeiro lugar",
            "además = além disso",
            "sin embargo = no entanto / porém",
            "por otro lado = por outro lado",
            "en realidad = na verdade",
            "por ejemplo = por exemplo"
          ],
          oralProduction: "Explique por que você está aprendendo espanhol usando pelo menos 5 conectores diferentes.",
          exercises: [
            { id: "ES-A2-U3-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'no entanto / porém' em espanhol?", options: ["además", "sin embargo", "por lo tanto", "en realidad"], answer: 1, explanation: "Sin embargo = no entanto / porém. É o conector adversativo mais usado em espanhol." },
            { id: "ES-A2-U3-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'além disso' em espanhol?", options: ["también", "además", "por eso", "así que"], answer: 1, explanation: "Además = além disso. También = também. Por eso = por isso. Así que = então / portanto." },
            { id: "ES-A2-U3-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: '_____, no estoy de acuerdo con esa idea.' (Na verdade, não concordo com essa ideia.)", answer: ["En realidad"], hint: "expressão para contradizer ou corrigir", explanation: "En realidad = na verdade / na realidade. Usado para corrigir uma ideia ou revelar a realidade." },
            { id: "ES-A2-U3-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'O espanhol é parecido com o português. No entanto, há muitas diferenças importantes.'", answer: ["El español es parecido al portugués. Sin embargo, hay muchas diferencias importantes.", "El español se parece al portugués. Sin embargo, hay muchas diferencias importantes."], explanation: "Parecido al = parecido com o. Sin embargo = no entanto. Hay = há." },
            { id: "ES-A2-U3-L5-E5", type: "free_writing", skill: "writing", question: "Escreva um texto argumentativo sobre as vantagens e desvantagens de aprender espanhol sendo brasileiro. Mínimo 10 frases.", prompt: "Inclua: vantagens (primero, además) · desvantagens (sin embargo, por otro lado) · conclusão (en definitiva, en resumen)", hint: "Primero, la ventaja es..., Además,..., Sin embargo,..., Por otro lado,..., En definitiva..." }
          ]
        }
      ]
    },
    {
      id: "ES-A2-U4",
      title: "Trabalho, Tecnologia e Sociedade",
      description: "Vocabulário do mundo profissional e tecnológico",
      lessons: [
        {
          id: "ES-A2-U4-L1",
          title: "En el Trabajo — Situações Profissionais",
          shadowing: "— Buenos días. ¿Puede comunicarme con el señor López?\n— Un momento, por favor. Lo siento, en este momento está en una reunión.\n— ¿Puede decirle que llamó el señor Silva?\n— Por supuesto. ¿Quiere dejar algún mensaje?\n— Sí, dígale que lo llamaré esta tarde.\n— Perfecto. Le daré el recado.",
          memoryPhrases: [
            "¿Puede comunicarme con...? = Pode me transferir para...?",
            "está en una reunión = está em uma reunião",
            "dejar un mensaje = deixar uma mensagem",
            "le daré el recado = vou passar o recado",
            "dígale que = diga a ele que",
            "lo llamaré = vou ligar para ele"
          ],
          oralProduction: "Pratique uma ligação profissional em espanhol: ligue para uma empresa e deixe uma mensagem.",
          exercises: [
            { id: "ES-A2-U4-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'deixar uma mensagem' em espanhol?", options: ["dejar un mensaje", "poner un mensaje", "dar un mensaje", "hacer un mensaje"], answer: 0, explanation: "Dejar un mensaje = deixar uma mensagem. DEJAR = deixar (no sentido de largar, depositar)." },
            { id: "ES-A2-U4-L1-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'Le daré el recado'?", options: ["Vou dar um presente a ele", "Vou passar o recado para ele", "Vou ligar para ele", "Vou escrever para ele"], answer: 1, explanation: "Le daré el recado = vou passar o recado para ele. Recado = recado. Le (objeto indireto) = a ele/ela." },
            { id: "ES-A2-U4-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'El director está en una _____.' (O diretor está em uma reunião.)", answer: ["reunión"], hint: "reunião em espanhol", explanation: "Reunión = reunião. 'Estar en una reunión' = estar em uma reunião / estar em reunião." },
            { id: "ES-A2-U4-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Por favor, diga a ela que eu liguei e que vou ligar de novo às três.'", answer: ["Por favor, dígale que llamé y que la llamaré de nuevo a las tres.", "Por favor, dígale que llamé y que voy a llamarla de nuevo a las tres."], explanation: "Dígale = diga a ela. Llamé = liguei. La llamaré = vou ligar para ela. De nuevo = de novo." },
            { id: "ES-A2-U4-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo de uma ligação profissional. Você quer falar com alguém que não está disponível. Mínimo 8 falas.", prompt: "Inclua: cumprimento profissional · pedido de transferência · mensagem · despedida formal", hint: "Buenos días, ¿puedo hablar con...?, está en reunión, ¿quiere dejar un mensaje?, dígale que..." }
          ]
        },
        {
          id: "ES-A2-U4-L2",
          title: "La Tecnología — Vocabulário Digital",
          shadowing: "— ¿Has visto mi móvil?\n— No, pero ¿lo has buscado en la bolsa?\n— Sí, no está. ¡Ah, espera! Lo tenía en el bolsillo.\n— ¿Tienes batería?\n— Poca. ¿Puedo cargar el móvil aquí?\n— Claro, hay un enchufe detrás del sofá.\n— Gracias. ¿Tienes wifi? Necesito enviar un email urgente.",
          memoryPhrases: [
            "el móvil / el celular = o celular",
            "la batería = a bateria",
            "cargar = carregar",
            "el enchufe = a tomada / o plugue",
            "el wifi = o wifi",
            "enviar un email = enviar um e-mail"
          ],
          oralProduction: "Fale sobre como você usa a tecnologia no dia a dia em espanhol. Mínimo 5 frases.",
          exercises: [
            { id: "ES-A2-U4-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'celular' em espanhol (duas versões)?", options: ["teléfono y celular", "móvil (España) y celular (Am. Latina)", "smartphone y telefono", "móvil y teléfono"], answer: 1, explanation: "Móvil = celular (Espanha). Celular = celular (América Latina). Ambos são compreendidos em todo o mundo hispânico." },
            { id: "ES-A2-U4-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'cargar el móvil'?", options: ["Carregar o celular (peso)", "Carregar o celular (bateria)", "Ligar o celular", "Guardar o celular"], answer: 1, explanation: "Cargar el móvil = carregar o celular (bateria). Cargar = carregar (em todos os sentidos)." },
            { id: "ES-A2-U4-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Necesito _____ este documento por email.' (Preciso enviar este documento por e-mail.)", answer: ["enviar", "mandar"], hint: "enviar em espanhol", explanation: "Enviar/mandar = enviar/mandar. São sinônimos. Enviar un email = enviar/mandar um e-mail." },
            { id: "ES-A2-U4-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Meu celular está sem bateria. Você tem um carregador?'", answer: ["Mi móvil/celular está sin batería. ¿Tienes un cargador?", "Mi celular está sin batería. ¿Tienes cargador?"], explanation: "Sin batería = sem bateria. Cargador = carregador. ¿Tienes? = você tem?" },
            { id: "ES-A2-U4-L2-E5", type: "free_writing", skill: "writing", question: "Escreva sobre seu uso de tecnologia: quais apps usa, quanto tempo fica no celular, se isso é bom ou ruim. Mínimo 8 frases.", prompt: "Inclua: apps favoritos · rede social que mais usa · tempo de tela · vantagens e desvantagens", hint: "Uso mucho..., paso... horas al día en..., me parece útil/perjudicial porque..." }
          ]
        },
        {
          id: "ES-A2-U4-L3",
          title: "Subjuntivo Presente — Introdução",
          shadowing: "— Quiero que vengas a mi fiesta.\n— ¿Cuándo es?\n— El sábado. Espero que puedas venir.\n— No sé si podré. Mi jefe quiere que trabajemos el sábado.\n— ¡Qué mal! Ojalá que no tengas que trabajar.\n— Yo también espero que me dé el día libre.",
          memoryPhrases: [
            "quiero que + subj. = quero que",
            "espero que + subj. = espero que",
            "ojalá que + subj. = tomara que / oxalá",
            "es importante que + subj. = é importante que",
            "no creo que + subj. = não acho que",
            "subjuntivo: -e (ER→-a), -a (AR→-e)"
          ],
          oralProduction: "Use quiero que, espero que e ojalá para falar sobre seus desejos e expectativas.",
          exercises: [
            { id: "ES-A2-U4-L3-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Quiero que tú _____ (venir) a la fiesta.'", options: ["vienes", "vengas", "viene", "vas a venir"], answer: 1, explanation: "Vengas = subjuntivo de venir. Depois de 'quiero que' sempre vai o SUBJUNTIVO. Venir subjuntivo: venga, vengas, venga, vengamos, vengáis, vengan." },
            { id: "ES-A2-U4-L3-E2", type: "multiple_choice", skill: "grammar", question: "Quando se usa o subjuntivo?", options: ["Para falar do passado", "Para desejos, dúvidas, emoções, recomendações com mudança de sujeito", "Para o futuro sempre", "Para perguntas"], answer: 1, explanation: "Subjuntivo = modo do desejo, dúvida, emoção. Aparece depois de: querer que, esperar que, es importante que, ojalá, no creo que..." },
            { id: "ES-A2-U4-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Espero que todo _____ bien.' (Espero que tudo corra bem.)", answer: ["salga", "vaya"], hint: "subjuntivo de 'salir' ou 'ir' para todo (él)", explanation: "Salga bien = saia bem / dê certo. Ou: vaya bien. Ambos corretos. Subjuntivo de salir: salga." },
            { id: "ES-A2-U4-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Quero que você estude mais e que não use tanto o celular.'", answer: ["Quiero que estudies más y que no uses tanto el móvil/celular.", "Quiero que estudies más y que no uses tanto el teléfono."], explanation: "Quiero que + subjuntivo. Estudies = subjuntivo de estudiar. Uses = subjuntivo de usar." },
            { id: "ES-A2-U4-L3-E5", type: "free_writing", skill: "writing", question: "Escreva uma carta para alguém importante expressando seus desejos para ele/ela usando o subjuntivo. Mínimo 8 frases.", prompt: "Inclua: quiero que..., espero que..., ojalá..., es importante que..., no quiero que...", hint: "Quiero que seas feliz, espero que tengas éxito, ojalá puedas..." }
          ]
        },
        {
          id: "ES-A2-U4-L4",
          title: "Estilo Indireto — Contar o que Outros Disseram",
          shadowing: "— ¿Qué te dijo el jefe?\n— Me dijo que llegaría tarde.\n— ¿Y sobre el proyecto?\n— Dijo que estaba muy bien pero que teníamos que cambiar el final.\n— ¿Te preguntó algo?\n— Sí, me preguntó si ya habíamos enviado el informe.\n— ¿Y qué le dijiste?\n— Le dije que lo mandaríamos mañana.",
          memoryPhrases: [
            "me dijo que + imperfecto = me disse que + imperfeito",
            "preguntó si = perguntou se",
            "dijo que llegaría = disse que chegaria",
            "me pidió que + imperfecto subj. = me pediu que",
            "añadió que = acrescentou que",
            "contestó que = respondeu que"
          ],
          oralProduction: "Conte o que alguém disse em uma conversa recente usando o estilo indireto.",
          exercises: [
            { id: "ES-A2-U4-L4-E1", type: "multiple_choice", skill: "grammar", question: "Como se transforma 'Estoy cansado' em estilo indireto?", options: ["Dijo que estoy cansado", "Dijo que estaba cansado", "Dijo que estuvo cansado", "Dijo que estaría cansado"], answer: 1, explanation: "Dijo que estaba cansado. No estilo indireto: presente → imperfecto. 'Estoy' → 'estaba'." },
            { id: "ES-A2-U4-L4-E2", type: "multiple_choice", skill: "grammar", question: "Como se transforma '¿Tienes tiempo?' em estilo indireto?", options: ["Preguntó que tengo tiempo", "Preguntó si tenía tiempo", "Preguntó si tiene tiempo", "Preguntó que tuviera tiempo"], answer: 1, explanation: "Me preguntó si tenía tiempo. Perguntas indiretas: ¿...? → si + imperfecto. O 'se' substitui o sinal de interrogação." },
            { id: "ES-A2-U4-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'María dijo que _____ el próximo lunes.' (María disse que viria na próxima segunda.)", answer: ["vendría"], hint: "venir no condicional = virá (estilo indireto)", explanation: "Vendría = viria. Futuro no estilo indireto → condicional. 'Vendré' → 'dijo que vendría'." },
            { id: "ES-A2-U4-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Meu chefe disse que o projeto estava bom mas que precisávamos de mais tempo.'", answer: ["Mi jefe dijo que el proyecto estaba bien pero que necesitábamos más tiempo.", "Mi jefe dijo que el proyecto era bueno pero que necesitábamos más tiempo."], explanation: "Dijo que... estaba = estava (estilo indireto). Necesitábamos = precisávamos (imperfecto)." },
            { id: "ES-A2-U4-L4-E5", type: "free_writing", skill: "writing", question: "Escreva o relato de uma conversa importante que você teve, contando o que cada pessoa disse usando o estilo indireto. Mínimo 10 frases.", prompt: "Inclua: contexto da conversa · o que cada pessoa disse · perguntas e respostas · o que foi decidido", hint: "Le pregunté..., me dijo que..., me preguntó si..., contesté que..., al final acordamos que..." }
          ]
        },
        {
          id: "ES-A2-U4-L5",
          title: "Revisão A2 — Consolidação",
          shadowing: "— ¿Sabes lo que me pasó ayer?\n— No, cuéntame.\n— Pues estaba en el metro, tranquilamente, cuando de repente se me cayó el móvil a las vías.\n— ¡No me digas! ¿Lo recuperaste?\n— Sí, al final un empleado me ayudó a sacarlo con un palo.\n— ¡Qué historia! Cuántas veces te he dicho que tengas cuidado con el móvil.\n— Ya lo sé. Pero todo salió bien al final.",
          memoryPhrases: [
            "cuéntame = me conta / conte-me",
            "de repente = de repente",
            "se me cayó = caiu (acidental: se me/te/le cayó)",
            "al final = no final / por fim",
            "¡No me digas! = Não me diga! / Sério?",
            "ya lo sé = já sei"
          ],
          oralProduction: "Conte uma história engraçada ou surpreendente que aconteceu com você, usando todos os tempos que aprendeu no A2.",
          exercises: [
            { id: "ES-A2-U4-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'se me cayó el móvil'?", options: ["Eu derrubei o celular (intencional)", "O celular caiu (acidental — sem culpa direta)", "Perdi o celular", "Quebrei o celular"], answer: 1, explanation: "Se me cayó = caiu (acidentalmente). A estrutura SE + pronome + verbo indica acidente involuntário: se me olvidó (esqueci sem querer), se le rompió (quebrou sem querer)." },
            { id: "ES-A2-U4-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se diz '¡No me digas!' em português?", options: ["Não me diga!", "Me diz!", "Que maravilha!", "Não importa!"], answer: 0, explanation: "¡No me digas! = Não me diga! / Sério?! É uma expressão de surpresa, equivalente a 'Nossa!' em contexto informal." },
            { id: "ES-A2-U4-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: '_____ estaba durmiendo cuando _____ el teléfono.' (Eu estava dormindo quando o telefone tocou.)", answer: ["Yo, sonó"], hint: "imperfecto para ação de fundo + indefinido para ação pontual", explanation: "Estaba durmiendo (imperfecto: ação contínua) + sonó (indefinido: ação pontual que interrompeu)." },
            { id: "ES-A2-U4-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'De repente, enquanto eu caminhava, comecei a chover muito forte.'", answer: ["De repente, mientras caminaba, empezó a llover muy fuerte.", "De repente, mientras yo caminaba, comenzó a llover muy fuerte."], explanation: "Mientras caminaba = enquanto caminhava (imperfecto). Empezó a llover = começou a chover (indefinido)." },
            { id: "ES-A2-U4-L5-E5", type: "free_writing", skill: "writing", question: "Escreva uma história completa sobre algo que aconteceu com você ou alguém que você conhece. Use todos os tempos do A2. Mínimo 12 frases.", prompt: "Inclua: contexto (imperfecto) · eventos principais (indefinido) · diálogos (estilo indireto) · como terminou · sua opinião atual", hint: "Era un día normal..., de repente..., me dijo que..., al final..., ahora creo que..." }
          ]
        }
      ]
    }
  ]
};
