export const CURRICULUM_ES_B1_PART1 = {
  units: [
    {
      id: "ES-B1-U1",
      title: "Subjuntivo — Deseos, Dudas y Emociones",
      description: "Domínio completo do subjuntivo presente e passado",
      lessons: [
        {
          id: "ES-B1-U1-L1",
          title: "Subjuntivo com Verbos de Desejo e Volição",
          shadowing: "— Quiero que seas feliz, no que tengas éxito.\n— Ya sé, pero espero que entiendas que el trabajo también importa.\n— Claro, pero deseo que encuentres un equilibrio.\n— Ojalá pueda. A veces me piden que trabaje demasiado.\n— Diles que necesitas tiempo para ti.\n— Sí, necesito que me escuchen más.",
          memoryPhrases: [
            "quiero que + subj. = quero que",
            "espero que + subj. = espero que",
            "deseo que + subj. = desejo que",
            "necesito que + subj. = preciso que",
            "ojalá + subj. = tomara que / oxalá",
            "prefiero que + subj. = prefiro que"
          ],
          oralProduction: "Expresse 5 desejos para pessoas próximas usando o subjuntivo presente.",
          exercises: [
            { id: "ES-B1-U1-L1-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Quiero que mis amigos _____ (ser) felices.'", options: ["son", "sean", "serán", "eran"], answer: 1, explanation: "Sean = sejam. Subjuntivo de SER: sea, seas, sea, seamos, seáis, sean. Depois de 'quiero que' sempre subjuntivo." },
            { id: "ES-B1-U1-L1-E2", type: "multiple_choice", skill: "grammar", question: "Quando NÃO se usa subjuntivo?", options: ["'Quiero que él venga'", "'Espero que todo salga bien'", "'Quiero venir yo mismo'", "'Ojalá pueda venir'"], answer: 2, explanation: "'Quiero venir' = quero vir (mesmo sujeito, sem 'que'). O subjuntivo só aparece quando há MUDANÇA DE SUJEITO: 'quiero QUE ÉL venga'." },
            { id: "ES-B1-U1-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Espero que tú _____ (tener) mucha suerte.' (Espero que você tenha muita sorte.)", answer: ["tengas"], hint: "subjuntivo de TENER para tú", explanation: "Tengas = tenhas. Subjuntivo de TENER: tenga, tengas, tenga, tengamos, tengáis, tengan." },
            { id: "ES-B1-U1-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Prefiro que ele não saiba disso ainda.'", answer: ["Prefiero que él no sepa eso todavía.", "Prefiero que no lo sepa todavía."], explanation: "Prefiero que = prefiro que. No sepa = não saiba. Subjuntivo de SABER: sepa, sepas, sepa..." },
            { id: "ES-B1-U1-L1-E5", type: "free_writing", skill: "writing", question: "Escreva sobre o que você deseja para sua vida nos próximos anos usando quiero que, espero que, deseo que e ojalá. Mínimo 8 frases.", prompt: "Inclua: desejos pessoais · desejos para a família · esperanças profissionais · sonhos", hint: "Quiero que mi vida..., espero que pueda..., deseo que mi familia..., ojalá consiga..." }
          ]
        },
        {
          id: "ES-B1-U1-L2",
          title: "Subjuntivo com Expressões de Dúvida e Negação",
          shadowing: "— No creo que eso sea verdad.\n— ¿Por qué lo dudas?\n— Porque no es posible que alguien haga eso.\n— Puede que tengas razón. No estoy seguro de que sea cierto.\n— Dudo mucho que lleguen a tiempo.\n— Quizás lleguen tarde, sí.\n— No creo que nadie lo sepa.",
          memoryPhrases: [
            "no creo que + subj. = não acho que",
            "dudo que + subj. = duvido que",
            "no es posible que + subj. = não é possível que",
            "puede que + subj. = pode ser que",
            "quizás/tal vez + subj. = talvez",
            "no estoy seguro de que + subj. = não tenho certeza que"
          ],
          oralProduction: "Expresse dúvidas sobre 5 situações usando no creo que, dudo que e quizás com subjuntivo.",
          exercises: [
            { id: "ES-B1-U1-L2-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'No creo que él _____ (venir) mañana.'", options: ["viene", "vendrá", "venga", "vino"], answer: 2, explanation: "Venga = venha. Depois de 'no creo que' (negação de opinião) sempre subjuntivo. Mas 'creo que viene' (afirmativo) usa indicativo." },
            { id: "ES-B1-U1-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual usa subjuntivo?", options: ["Creo que está bien", "Sé que vendrá", "Quizás esté enfermo", "Es obvio que tiene razón"], answer: 2, explanation: "'Quizás esté enfermo' = talvez esteja doente. Quizás/tal vez podem usar subjuntivo ou indicativo, mas com subjuntivo indica mais incerteza." },
            { id: "ES-B1-U1-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Es imposible que _____ (llegar) antes de las diez.' (É impossível que chegue antes das dez.)", answer: ["llegue"], hint: "subjuntivo de LLEGAR para él/ella", explanation: "Llegue = chegue. Expressões impessoais de dúvida/negação pedem subjuntivo: es imposible que, no es cierto que, es raro que..." },
            { id: "ES-B1-U1-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Duvido que ele saiba a resposta. Talvez ninguém saiba.'", answer: ["Dudo que él sepa la respuesta. Quizás nadie lo sepa.", "Dudo que sepa la respuesta. Tal vez nadie sepa."], explanation: "Dudo que = duvido que. Sepa = saiba (subj. de saber). Quizás nadie sepa = talvez ninguém saiba." },
            { id: "ES-B1-U1-L2-E5", type: "free_writing", skill: "writing", question: "Escreva sobre incertezas e dúvidas que você tem sobre o futuro usando expressões de dúvida com subjuntivo. Mínimo 8 frases.", prompt: "Inclua: dúvidas profissionais · incertezas pessoais · questões sobre o mundo · o que você acha improvável", hint: "No creo que..., dudo que..., es posible que..., quizás..., no estoy seguro de que..." }
          ]
        },
        {
          id: "ES-B1-U1-L3",
          title: "Subjuntivo com Expressões de Emoção",
          shadowing: "— Me alegra mucho que hayas venido.\n— ¡Gracias! Me sorprende que la fiesta sea tan grande.\n— ¿De verdad? Me preocupa que no haya suficiente comida.\n— No te preocupes. Es normal que haya mucha gente al principio.\n— Me molesta que lleguen tarde.\n— A mí me encanta que todo el mundo esté aquí.",
          memoryPhrases: [
            "me alegra que + subj. = fico feliz que",
            "me sorprende que + subj. = me surpreende que",
            "me preocupa que + subj. = me preocupa que",
            "me molesta que + subj. = me incomoda que",
            "es una pena que + subj. = é uma pena que",
            "me parece bien/mal que + subj. = acho bem/mal que"
          ],
          oralProduction: "Expresse emoções sobre situações reais usando me alegra que, me preocupa que e me sorprende que.",
          exercises: [
            { id: "ES-B1-U1-L3-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Me alegra que tú _____ (estar) aquí.'", options: ["estás", "estarás", "estés", "estabas"], answer: 2, explanation: "Estés = esteja. Subjuntivo de ESTAR: esté, estés, esté, estemos, estéis, estén. Emoções pedem subjuntivo com mudança de sujeito." },
            { id: "ES-B1-U1-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual é correto?", options: ["Me sorprende que él sabe tanto", "Me sorprende que él sepa tanto", "Me sorprendo que él sepa tanto", "Sorprende que él sabe tanto"], answer: 1, explanation: "Me sorprende que él sepa tanto = me surpreende que ele saiba tanto. Emoção (me sorprende) + que + subjuntivo (sepa)." },
            { id: "ES-B1-U1-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Es una pena que no _____ (poder) venir.' (É uma pena que você não possa vir.)", answer: ["puedas"], hint: "subjuntivo de PODER para tú", explanation: "Puedas = possas. Subjuntivo de PODER: pueda, puedas, pueda, podamos, podáis, puedan." },
            { id: "ES-B1-U1-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Me preocupa que ela não esteja respondendo. Espero que esteja bem.'", answer: ["Me preocupa que ella no esté respondiendo. Espero que esté bien.", "Me preocupa que no esté contestando. Espero que esté bien."], explanation: "Me preocupa que = me preocupa que. No esté = não esteja (subj.). Espero que esté = espero que esteja." },
            { id: "ES-B1-U1-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre situações que te causam diferentes emoções usando o subjuntivo. Mínimo 8 frases.", prompt: "Inclua: coisas que te alegram · coisas que te preocupam · coisas que te surpreendem · coisas que te incomodam", hint: "Me alegra que..., me preocupa que..., me sorprende que..., me molesta que..., es una pena que..." }
          ]
        },
        {
          id: "ES-B1-U1-L4",
          title: "Subjuntivo em Orações Temporais e Finais",
          shadowing: "— Cuando llegues a casa, llámame.\n— ¿Para qué?\n— Para que sepas que llegué bien.\n— Ah, de acuerdo. Cuando salga del trabajo, te mando un mensaje.\n— No te vayas hasta que llegue María.\n— Espera. Me quedaré hasta que ella venga.\n— Perfecto, para que no se quede sola.",
          memoryPhrases: [
            "cuando + subj. = quando (futuro/hipotético)",
            "hasta que + subj. = até que",
            "para que + subj. = para que",
            "antes de que + subj. = antes que",
            "en cuanto + subj. = assim que",
            "aunque + subj. = mesmo que (hipotético)"
          ],
          oralProduction: "Crie 5 frases com quando referindo-se ao futuro usando o subjuntivo.",
          exercises: [
            { id: "ES-B1-U1-L4-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Cuando _____ (llegar) a Madrid, te escribo.'", options: ["llego", "llegaré", "llegue", "llegaba"], answer: 2, explanation: "Llegue = chegar (subj.). 'Cuando' referindo-se ao futuro sempre pede subjuntivo. 'Cuando llego' = quando eu chego (hábito presente, não futuro)." },
            { id: "ES-B1-U1-L4-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Te lo digo para que _____ (saber) la verdad.'", options: ["sabes", "sabrás", "sepas", "supieras"], answer: 2, explanation: "Sepas = saibas. 'Para que' (finalidade) sempre pede subjuntivo. Para que sepas = para que você saiba." },
            { id: "ES-B1-U1-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'En cuanto _____ (terminar) el trabajo, salimos.' (Assim que terminar o trabalho, saímos.)", answer: ["termine"], hint: "subjuntivo de terminar para él/ella ou yo (mesma forma)", explanation: "Termine = terminar (subj.). 'En cuanto' (assim que) com referência ao futuro pede subjuntivo." },
            { id: "ES-B1-U1-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Vou esperar até que você chegue. Quando você chegar, avisarei todo mundo.'", answer: ["Esperaré hasta que llegues. Cuando llegues, avisaré a todos.", "Voy a esperar hasta que llegues. Cuando llegues, les aviso a todos."], explanation: "Hasta que llegues = até que você chegue. Cuando llegues = quando você chegar. Ambos no futuro = subjuntivo." },
            { id: "ES-B1-U1-L4-E5", type: "free_writing", skill: "writing", question: "Escreva sobre seus planos futuros usando conectores temporais com subjuntivo. Mínimo 8 frases.", prompt: "Inclua: cuando · hasta que · en cuanto · antes de que · para que · aunque", hint: "Cuando termine los estudios..., hasta que consiga trabajo..., en cuanto pueda..., para que todos sepan..." }
          ]
        },
        {
          id: "ES-B1-U1-L5",
          title: "Subjuntivo Passado — Imperfecto de Subjuntivo",
          shadowing: "— Si tuviera más tiempo, viajaría más.\n— ¿Adónde irías?\n— Quería que me llevaras a Japón algún día.\n— Ojalá pudiéramos ir juntos.\n— Mis padres querían que estudiara medicina.\n— ¿Y qué pasó?\n— Les pedí que me dejaran elegir. Al final estudiaron lo que yo quería.",
          memoryPhrases: [
            "tuviera = tivesse (subj. imperfeito de tener)",
            "pudiera = pudesse",
            "fuera = fosse (ser/ir)",
            "supiera = soubesse",
            "hiciera = fizesse",
            "viniera = viesse"
          ],
          oralProduction: "Use o subjuntivo imperfeito para falar sobre situações hipotéticas ou desejos do passado.",
          exercises: [
            { id: "ES-B1-U1-L5-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Si _____ (poder) volar, iría a cualquier lugar.'", options: ["puedo", "pudiera", "podría", "pueda"], answer: 1, explanation: "Pudiera = pudesse. Estrutura hipotética: Si + imperfeito subjuntivo + condicional. 'Si pudiera volar, iría' = se eu pudesse voar, iria." },
            { id: "ES-B1-U1-L5-E2", type: "multiple_choice", skill: "grammar", question: "Complete: 'Mi madre quería que yo _____ (ser) médico.'", options: ["soy", "sería", "sea", "fuera"], answer: 3, explanation: "Fuera = fosse. Depois de queria que (passado) o subjuntivo vai ao imperfeito: quería que fuera, esperaba que viniera, pedía que estudiara." },
            { id: "ES-B1-U1-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Ojalá _____ (tener) más dinero.' (Tomara que eu tivesse mais dinheiro.)", answer: ["tuviera", "tuviese"], hint: "subjuntivo imperfeito de TENER para yo", explanation: "Tuviera = tivesse. Ojalá com imperfeito subjuntivo indica desejo improvável ou impossível no presente/futuro." },
            { id: "ES-B1-U1-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Se eu soubesse a resposta, te diria. Mas não sei.'", answer: ["Si supiera la respuesta, te lo diría. Pero no sé.", "Si lo supiera, te lo diría. Pero no sé."], explanation: "Si supiera = se eu soubesse (subj. imperfeito). Te lo diría = te diria (condicional). Estrutura hipotética irreal." },
            { id: "ES-B1-U1-L5-E5", type: "free_writing", skill: "writing", question: "Escreva sobre situações hipotéticas usando o subjuntivo imperfeito. Mínimo 8 frases.", prompt: "Inclua: si tuviera..., ojalá pudiera..., quisiera que..., si fuera posible...", hint: "Si tuviera un millón, si pudiera cambiar algo, si fuera presidente, ojalá supiera..." }
          ]
        }
      ]
    },
    {
      id: "ES-B1-U2",
      title: "Orações Condicionais e Hipóteses",
      description: "Condicionais reais, hipotéticas e impossíveis",
      lessons: [
        {
          id: "ES-B1-U2-L1",
          title: "Condicional Tipo 1 — Situações Reais e Possíveis",
          shadowing: "— Si llueve mañana, no salimos.\n— ¿Y si hace sol?\n— Si hace sol, vamos a la playa.\n— ¿Y si viene Pedro?\n— Si viene Pedro, tendremos que buscar más sillas.\n— ¿Qué pasa si no hay suficiente espacio?\n— Si no hay espacio, nos vamos a otro sitio.",
          memoryPhrases: [
            "Si + presente → futuro/imperativo",
            "Si llueve, no salgo = Se chover, não saio",
            "Si tienes hambre, come algo",
            "Si puedes, llámame",
            "Si hay tiempo, lo hacemos",
            "En caso de que + subj. = no caso de que"
          ],
          oralProduction: "Crie 5 condicionais do tipo 1 sobre planos para o fim de semana.",
          exercises: [
            { id: "ES-B1-U2-L1-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Si _____ (tener) tiempo, te ayudaré.'", options: ["tengo", "tendría", "tuviera", "tenga"], answer: 0, explanation: "Si tengo tiempo = se eu tiver tempo. Tipo 1: Si + PRESENTE → futuro/imperativo. Para situações reais e possíveis." },
            { id: "ES-B1-U2-L1-E2", type: "multiple_choice", skill: "grammar", question: "Qual é o Condicional Tipo 1?", options: ["Si tuviera dinero, viajaría", "Si tengo dinero, viajo", "Si hubiera tenido dinero, habría viajado", "Si tendría dinero, viajaría"], answer: 1, explanation: "Si tengo dinero, viajo = Tipo 1 (real/possível): presente + presente/futuro. Tipo 2: Si tuviera + condicional. Tipo 3: Si hubiera tenido + condicional composto." },
            { id: "ES-B1-U2-L1-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Si no _____ (estudiar), no aprobarás el examen.'", answer: ["estudias"], hint: "presente para condicional tipo 1", explanation: "Si no estudias = se você não estudar. Tipo 1: si + presente. A consequência pode ser futuro ou presente." },
            { id: "ES-B1-U2-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Se você precisar de ajuda, me liga. Posso ajudar se tiver tempo.'", answer: ["Si necesitas ayuda, llámame. Puedo ayudarte si tengo tiempo.", "Si necesitas ayuda, llámame. Te ayudo si tengo tiempo."], explanation: "Si necesitas = se precisar. Llámame = me liga (imperativo). Si tengo tiempo = se eu tiver tempo." },
            { id: "ES-B1-U2-L1-E5", type: "free_writing", skill: "writing", question: "Escreva sobre seus planos para os próximos meses usando condicionais do tipo 1. Mínimo 8 frases.", prompt: "Inclua: condições climáticas · trabalho · saúde · viagens · situações do dia a dia", hint: "Si termino el proyecto..., si hace buen tiempo..., si me dan vacaciones..., si todo va bien..." }
          ]
        },
        {
          id: "ES-B1-U2-L2",
          title: "Condicional Tipo 2 — Hipóteses Improváveis",
          shadowing: "— Si fuera rico, donaría la mitad a los pobres.\n— ¿Y la otra mitad?\n— Si tuviera tanto dinero, invertiría en educación.\n— ¿Y si pudieras cambiar una cosa del mundo?\n— Si pudiera, eliminaría el hambre. ¿Y tú?\n— Yo, si fuera posible, daría educación gratuita a todos.\n— Qué bonito sería ese mundo.",
          memoryPhrases: [
            "Si + imperf. subj. → condicional",
            "Si fuera rico, viajaría = se eu fosse rico, viajaria",
            "Si pudiera, lo haría = se eu pudesse, faria",
            "Si tuviera tiempo, estudiaría",
            "Si viviera allí, estaría más feliz",
            "Como si + subj. = como se"
          ],
          oralProduction: "Responda: Se você pudesse mudar três coisas no mundo, quais seriam e o que faria? Use o tipo 2.",
          exercises: [
            { id: "ES-B1-U2-L2-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Si _____ (ser) presidente, cambiaría muchas cosas.'", options: ["soy", "seré", "fuera", "sea"], answer: 2, explanation: "Fuera = fosse. Tipo 2: Si + imperfeito subjuntivo → condicional. Para hipóteses improváveis ou impossíveis no presente." },
            { id: "ES-B1-U2-L2-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a consequência correta? 'Si hablara mejor inglés...'", options: ["...tendré más oportunidades", "...tengo más oportunidades", "...tendría más oportunidades", "...tenga más oportunidades"], answer: 2, explanation: "Tendría = teria. Tipo 2: Si + imperf. subj. → CONDICIONAL (-ría). Si hablara mejor inglés, tendría más oportunidades." },
            { id: "ES-B1-U2-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Si _____ (vivir) en España, aprendería catalán también.'", answer: ["viviera", "viviese"], hint: "imperfeito subjuntivo de VIVIR para yo", explanation: "Viviera/viviese = morasse. Imperfeito subjuntivo -IR: viviera, vivieras, viviera, viviéramos, vivierais, vivieran." },
            { id: "ES-B1-U2-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Se eu morasse em outro país, falaria pelo menos 3 idiomas.'", answer: ["Si viviera en otro país, hablaría al menos 3 idiomas.", "Si viviese en otro país, hablaría por lo menos 3 idiomas."], explanation: "Si viviera = se eu morasse. Hablaría = falaria. Al menos/por lo menos = pelo menos." },
            { id: "ES-B1-U2-L2-E5", type: "free_writing", skill: "writing", question: "Escreva sobre o que você faria em situações hipotéticas usando o condicional tipo 2. Mínimo 8 frases.", prompt: "Inclua: se fosse famoso · se tivesse superpoderes · se pudesse voltar no tempo · se vivesse em outro século", hint: "Si fuera famoso..., si tuviera superpoderes..., si pudiera volver al pasado..., si viviera en el año..." }
          ]
        },
        {
          id: "ES-B1-U2-L3",
          title: "Condicional Tipo 3 — Lamentos sobre o Passado",
          shadowing: "— Si hubiera estudiado más, habría aprobado el examen.\n— No te tortures. Ya pasó.\n— Es que si hubiera prestado más atención...\n— Mira, si hubiéramos llegado antes, habríamos conseguido entradas.\n— Tienes razón. Si no hubiéramos tardado tanto...\n— Ya está. Lo importante es que la próxima vez lleguemos a tiempo.",
          memoryPhrases: [
            "Si hubiera + participio → habría + participio",
            "Si hubiera estudiado, habría aprobado",
            "Si lo hubiera sabido, no habría ido",
            "Si hubiéramos llegado antes...",
            "De haberlo sabido... = Se eu tivesse sabido...",
            "Ojalá lo hubiera hecho = Tomara que tivesse feito"
          ],
          oralProduction: "Fale sobre 3 arrependimentos usando o condicional tipo 3.",
          exercises: [
            { id: "ES-B1-U2-L3-E1", type: "multiple_choice", skill: "grammar", question: "Complete: 'Si _____ (estudiar) más, habría aprobado.'", options: ["hubiera estudiado", "hubiera estudiar", "habría estudiado", "estudiara"], answer: 0, explanation: "Si hubiera estudiado = se eu tivesse estudado. Tipo 3: Si + HABER (subj. imperf.) + participio → habría + participio." },
            { id: "ES-B1-U2-L3-E2", type: "multiple_choice", skill: "grammar", question: "Qual é a consequência correta para o tipo 3?", options: ["Si hubiera ido... iría ahora", "Si hubiera ido... habría visto eso", "Si hubiera ido... vería eso", "Si hubiera ido... veré eso"], answer: 1, explanation: "Si hubiera ido, habría visto eso. Tipo 3: Si + hubiera + participio → habría + participio. Ambas as partes no passado." },
            { id: "ES-B1-U2-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Si me _____ (decir) la verdad, no me habría enfadado.'", answer: ["hubieras dicho"], hint: "hubiera/hubieras + participio de DECIR", explanation: "Si me hubieras dicho = se você tivesse me dito. Dicho = dito (participio irregular de decir)." },
            { id: "ES-B1-U2-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Se eu tivesse aceito aquela oferta de emprego, estaria em uma situação melhor agora.'", answer: ["Si hubiera aceptado aquella oferta de trabajo, estaría en una situación mejor ahora.", "Si hubiese aceptado esa oferta de trabajo, estaría mejor ahora."], explanation: "Si hubiera aceptado = se eu tivesse aceitado (tipo 3 misto com consequência no presente)." },
            { id: "ES-B1-U2-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre decisões do passado e o que teria acontecido se você tivesse feito diferente. Mínimo 8 frases.", prompt: "Inclua: decisões de estudo · trabalho · relacionamentos · viagens · momentos perdidos", hint: "Si hubiera estudiado..., si hubiera aceptado..., si no hubiera dicho..., ojalá hubiera..." }
          ]
        },
        {
          id: "ES-B1-U2-L4",
          title: "Discurso Argumentativo — Dar e Refutar Argumentos",
          shadowing: "— Yo defiendo que el teletrabajo es mejor para la productividad.\n— Sin embargo, hay quien sostiene que se pierde la colaboración.\n— Es cierto que hay desventajas, pero los datos muestran que...\n— Aunque reconozco ese punto, creo que los beneficios superan los problemas.\n— ¿En qué te basas?\n— En estudios que demuestran que la gente trabaja más desde casa.",
          memoryPhrases: [
            "yo defiendo que = eu defendo que",
            "sin embargo = no entanto",
            "es cierto que... pero = é verdade que... mas",
            "aunque reconozco = embora reconheça",
            "los datos muestran que = os dados mostram que",
            "en resumen / en definitiva = em resumo"
          ],
          oralProduction: "Defenda e refute a seguinte ideia em espanhol: 'As redes sociais são prejudiciais para a sociedade.'",
          exercises: [
            { id: "ES-B1-U2-L4-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'no entanto' em espanhol?", options: ["sin embargo", "además", "por lo tanto", "es decir"], answer: 0, explanation: "Sin embargo = no entanto / porém. É o conector adversativo mais importante do espanhol formal." },
            { id: "ES-B1-U2-L4-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se introduz uma concessão em espanhol?", options: ["Por lo tanto...", "Es decir...", "Es cierto que... pero / Aunque...", "Además..."], answer: 2, explanation: "'Es cierto que... pero' ou 'Aunque...' introduzem concessões: 'é verdade que X, mas Y'. Fundamental no discurso argumentativo." },
            { id: "ES-B1-U2-L4-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Los _____ muestran que el ejercicio mejora la salud mental.' (Os dados mostram que...)", answer: ["datos", "estudios"], hint: "dados/evidências em espanhol", explanation: "Datos = dados. Estudios = estudos. Ambos funcionam: 'los datos/estudios muestran que...'" },
            { id: "ES-B1-U2-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Embora reconheça as dificuldades, defendo que o bilinguismo traz benefícios imensos.'", answer: ["Aunque reconozco las dificultades, defiendo que el bilingüismo trae beneficios inmensos.", "Si bien reconozco las dificultades, defiendo que el bilingüismo aporta beneficios inmensos."], explanation: "Aunque reconozco = embora reconheça (indicativo após aunque para fatos reais). Defiendo = defendo." },
            { id: "ES-B1-U2-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um texto argumentativo sobre se o espanhol será o idioma mais falado do futuro. Mínimo 10 frases.", prompt: "Inclua: argumento principal · concessão · refutação · dados/exemplos · conclusão", hint: "En mi opinión..., sin embargo..., es cierto que... pero..., aunque..., en definitiva..." }
          ]
        },
        {
          id: "ES-B1-U2-L5",
          title: "Voz Passiva — Ser e Estar + Participio",
          shadowing: "— Esta novela fue escrita por García Márquez.\n— ¿Y cuándo fue publicada?\n— En 1967. Y todavía es leída en todo el mundo.\n— El museo fue construido en el siglo XIX.\n— Sí, y fue renovado hace cinco años.\n— ¿Está abierto hoy?\n— Sí, está abierto. Fue inaugurado el año pasado.",
          memoryPhrases: [
            "fue escrito por = foi escrito por (passiva de processo)",
            "está escrito = está escrito (resultado)",
            "ser + participio = passiva (ação)",
            "estar + participio = estado resultante",
            "se + verbo = passiva impessoal",
            "participios irregulares: escrito, hecho, dicho, visto, abierto, puesto"
          ],
          oralProduction: "Descreva 5 obras, lugares ou eventos usando a voz passiva em espanhol.",
          exercises: [
            { id: "ES-B1-U2-L5-E1", type: "multiple_choice", skill: "grammar", question: "Qual é a diferença entre 'fue construido' e 'está construido'?", options: ["São iguais", "'Fue construido' = ação passada; 'está construido' = estado atual resultante", "'Fue' é mais formal", "'Está' indica o passado"], answer: 1, explanation: "Fue construido (por X) = foi construído (foco na ação/processo). Está construido = está construído (foco no resultado/estado atual)." },
            { id: "ES-B1-U2-L5-E2", type: "multiple_choice", skill: "grammar", question: "Como transformar em passiva: 'García Márquez escribió esta novela'?", options: ["Esta novela fue escrita por García Márquez", "Esta novela escribió García Márquez", "Esta novela se escribió García Márquez", "García Márquez fue escrita por esta novela"], answer: 0, explanation: "Esta novela fue escrita por García Márquez. Passiva: objeto → sujeito + SER + participio (concordando) + POR + agente." },
            { id: "ES-B1-U2-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'El proyecto _____ terminado ayer.' (O projeto foi terminado ontem.)", answer: ["fue"], hint: "auxiliar SER no pretérito para passiva de processo", explanation: "Fue terminado = foi terminado. SER no pretérito indefinido para a passiva de processo." },
            { id: "ES-B1-U2-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'A Sagrada Família foi projetada por Gaudí e ainda está sendo construída.'", answer: ["La Sagrada Familia fue diseñada por Gaudí y todavía está siendo construida.", "La Sagrada Familia fue proyectada por Gaudí y aún está siendo construida."], explanation: "Fue diseñada/proyectada = foi projetada. Está siendo construida = está sendo construída (passiva progressiva)." },
            { id: "ES-B1-U2-L5-E5", type: "free_writing", skill: "writing", question: "Escreva sobre um monumento, obra de arte ou evento histórico usando a voz passiva. Mínimo 8 frases.", prompt: "Inclua: quando foi construído/criado · por quem · como está hoje · o que representa", hint: "Fue construido en..., fue diseñado por..., fue inaugurado..., está ubicado en..., es visitado por..." }
          ]
        }
      ]
    }
  ]
};
