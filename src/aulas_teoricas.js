// Aulas Teóricas — Pipa Akd (Español para brasileños)
// Una por unidad, aparece antes de la primera lección de cada unidad

export const AULAS_TEORICAS = {

  // ─── A1 ───────────────────────────────────────────────────────────────────
  "ES-A1-U1": {
    title: "Apresentações e Cumprimentos",
    sections: [
      {
        title: "O Básico do Básico",
        tip: "O espanhol e o português são muito parecidos! Você já sabe muito mais do que imagina. Mas cuidado: as semelhanças também escondem armadilhas.",
        headers: ["Situação", "Em espanhol", "Em português"],
        rows: [
          ["Cumprimento formal", "Buenos días / Buenas tardes / Buenas noches", "Bom dia / Boa tarde / Boa noite"],
          ["Cumprimento informal", "¡Hola! / ¿Qué tal?", "Oi! / Tudo bem?"],
          ["Como vai?", "¿Cómo estás? / ¿Cómo está usted?", "Como você está? / Como o senhor está?"],
          ["Resposta positiva", "Bien, gracias. ¿Y tú?", "Bem, obrigado. E você?"],
          ["Despedida", "Adiós / Hasta luego / Hasta pronto", "Tchau / Até logo / Até mais"],
        ]
      },
      {
        title: "🔑 Pontos-Chave desta Unidade",
        tip: "Em espanhol existem dois pronomes para 'você': TÚ (informal) e USTED (formal). Em Portugal e em partes da América Latina isso muda — mas para começar, foque no espanhol neutro.",
        headers: ["Ponto", "Regra", "Exemplo"],
        rows: [
          ["TÚ vs USTED", "Tú = informal (amigos). Usted = formal (chefe, desconhecidos).", "¿Cómo te llamas? vs ¿Cómo se llama usted?"],
          ["Me llamo", "Para dizer seu nome: 'Me llamo...' ou 'Soy...'", "Me llamo João. Soy brasileño."],
          ["Verbos ser/estar", "Ser = identidade. Estar = estado/localização.", "Soy estudiante. Estoy bien."],
          ["Gênero", "Todos os substantivos têm gênero (masc./fem.)", "el amigo / la amiga — el libro / la mesa"],
        ]
      }
    ]
  },

  "ES-A1-U2": {
    title: "Números, Cores e Família",
    sections: [
      {
        title: "Sistema Numérico em Espanhol",
        tip: "Os números 1-15 se memorizam individualmente. De 16 em diante há um padrão claro: dieciséis (diez+y+seis), veintiuno (veinte+y+uno).",
        headers: ["Número", "Espanhol", "Observação"],
        rows: [
          ["1-10", "uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez", "Base — memorizar"],
          ["11-15", "once, doce, trece, catorce, quince", "Irregulares — memorizar"],
          ["16-19", "dieciséis, diecisiete, dieciocho, diecinueve", "Diez + y + número"],
          ["20-29", "veinte, veintiuno, veintidós...", "Veinte + y + número (junto)"],
          ["30+", "treinta, cuarenta, cincuenta...", "treinta y uno, cuarenta y dos..."],
        ]
      },
      {
        title: "🔑 Família — Vocabulário Essencial",
        tip: "Em espanhol, os possessivos (mi, tu, su, nuestro) concordam com o substantivo, não com o possuidor. 'Mi madre' e 'mi padre' — não 'mis padre'.",
        headers: ["Português", "Espanhol", "Plural"],
        rows: [
          ["pai", "padre", "padres (= pais)"],
          ["mãe", "madre", "madres"],
          ["irmão", "hermano", "hermanos"],
          ["irmã", "hermana", "hermanas"],
          ["filho/a", "hijo / hija", "hijos / hijas"],
          ["avô/avó", "abuelo / abuela", "abuelos (= avós)"],
        ]
      }
    ]
  },

  "ES-A1-U3": {
    title: "Comida, Restaurante e Vida Cotidiana",
    sections: [
      {
        title: "Pedir Comida em Espanhol",
        tip: "Para pedir algo de forma educada: 'Quisiera...' (eu gostaria) ou 'Me pone/trae...' (me traz...). 'Quiero' (quero) é correto mas mais direto.",
        headers: ["Situação", "Frase", "Tom"],
        rows: [
          ["Pedir prato", "Quisiera la paella, por favor.", "Educado ✅"],
          ["Pedir bebida", "Me pone un agua, por favor.", "Natural ✅"],
          ["Pedir a conta", "La cuenta, por favor.", "Neutro ✅"],
          ["Dizer que está gostoso", "¡Está muy rico/bueno!", "Elogio ✅"],
          ["Dizer que não come algo", "No como carne / Soy vegetariano/a.", "Direto ✅"],
        ]
      },
      {
        title: "🔑 Verbos no Presente — Padrão Regular",
        tip: "Os verbos em espanhol têm 3 grupos: -AR, -ER, -IR. A maioria segue o padrão regular. Aprenda as terminações e você consegue conjugar milhares de verbos.",
        headers: ["Pronome", "-AR (hablar)", "-ER (comer)", "-IR (vivir)"],
        rows: [
          ["yo", "hablo", "como", "vivo"],
          ["tú", "hablas", "comes", "vives"],
          ["él/ella", "habla", "come", "vive"],
          ["nosotros", "hablamos", "comemos", "vivimos"],
          ["ellos", "hablan", "comen", "viven"],
        ]
      }
    ]
  },

  "ES-A1-U4": {
    title: "Cidade, Transporte e Direções",
    sections: [
      {
        title: "Pedir e Dar Direções",
        tip: "As expressões de direção em espanhol são muito parecidas com o português. O mais importante: 'todo recto' (em frente) e 'a la derecha/izquierda' (à direita/esquerda).",
        headers: ["Instrução", "Espanhol", "Português"],
        rows: [
          ["Em frente", "Todo recto / Sigue adelante", "Continue em frente"],
          ["À direita", "A la derecha / Gira a la derecha", "À direita / Vire à direita"],
          ["À esquerda", "A la izquierda / Gira a la izquierda", "À esquerda / Vire à esquerda"],
          ["No semáforo", "En el semáforo", "No semáforo"],
          ["Na esquina", "En la esquina", "Na esquina"],
          ["Fica perto/longe", "Está cerca / lejos", "Fica perto / longe"],
        ]
      },
      {
        title: "🔑 Haver e Estar — HAY vs ESTÁ/ESTÁN",
        tip: "HAY = há / existe (impessoal). ESTÁ/ESTÁN = está/estão (localização de algo específico). Esta distinção é fundamental e diferente do português!",
        headers: ["Uso", "Espanhol", "Português"],
        rows: [
          ["Existência geral", "Hay una farmacia cerca.", "Tem uma farmácia perto."],
          ["Localização específica", "La farmacia está en la calle Mayor.", "A farmácia fica na Rua Mayor."],
          ["Quantos há", "Hay tres farmacias.", "Tem três farmácias."],
          ["Onde fica algo específico", "¿Dónde está el banco?", "Onde fica o banco?"],
        ]
      }
    ]
  },

  "ES-A1-U5": {
    title: "Rotina, Tempo e Horários",
    sections: [
      {
        title: "As Horas em Espanhol",
        tip: "Para dizer as horas: 'Es la una' (é uma hora) e 'Son las dos/tres...' (são duas/três horas). O singular é só para 1h.",
        headers: ["Hora", "Espanhol", "Observação"],
        rows: [
          ["1h00", "Es la una.", "Singular: la una"],
          ["2h00", "Son las dos.", "Plural: las dos, tres..."],
          ["3h30", "Son las tres y media.", "y media = e meia"],
          ["4h15", "Son las cuatro y cuarto.", "y cuarto = e quinze"],
          ["4h45", "Son las cinco menos cuarto.", "menos cuarto = quinze para as cinco"],
          ["12h00", "Son las doce. / Es mediodía.", "Meio-dia"],
        ]
      },
      {
        title: "🔑 Verbos Reflexivos — Rotina Diária",
        tip: "Verbos reflexivos são muito comuns para descrever a rotina: levantarse, ducharse, vestirse, acostarse. O pronome reflexivo (me, te, se...) vai antes do verbo conjugado.",
        headers: ["Português", "Espanhol", "Conjugação (yo)"],
        rows: [
          ["levantar-se", "levantarse", "me levanto"],
          ["tomar banho", "ducharse", "me ducho"],
          ["vestir-se", "vestirse", "me visto"],
          ["pentear-se", "peinarse", "me peino"],
          ["deitar-se", "acostarse", "me acuesto"],
          ["chamar-se", "llamarse", "me llamo"],
        ]
      }
    ]
  },

  "ES-A1-U6": {
    title: "Compras, Dinheiro e Cotidiano",
    sections: [
      {
        title: "Fazer Compras — Frases Essenciais",
        tip: "Em lojas hispanohablantes é comum o vendedor se aproximar com '¿Le/Te ayudo?' (posso ajudar?). A resposta educada se não precisar: 'No, gracias, solo estoy mirando.' (Não, obrigado, só estou olhando.)",
        headers: ["Situação", "Frase em espanhol", "Tradução"],
        rows: [
          ["Perguntar preço", "¿Cuánto cuesta? / ¿Cuánto vale?", "Quanto custa?"],
          ["Dizer que é caro", "Es muy caro. / ¿Tiene algo más barato?", "É muito caro. / Tem algo mais barato?"],
          ["Pedir desconto", "¿Me puede hacer un descuento?", "Pode me dar um desconto?"],
          ["Pagar", "¿Puedo pagar con tarjeta?", "Posso pagar com cartão?"],
          ["Tamanho", "¿Tiene una talla más grande/pequeña?", "Tem um tamanho maior/menor?"],
        ]
      },
      {
        title: "🔑 Demonstrativos — Este, Ese, Aquel",
        tip: "Três graus de distância em espanhol: ESTE (aqui, perto de mim), ESE (aí, perto de você), AQUEL (lá, longe dos dois). Concordam em gênero e número.",
        headers: ["Distância", "Masc. sg.", "Fem. sg.", "Masc. pl.", "Fem. pl."],
        rows: [
          ["Aqui (meu)", "este", "esta", "estos", "estas"],
          ["Aí (teu)", "ese", "esa", "esos", "esas"],
          ["Lá (longe)", "aquel", "aquella", "aquellos", "aquellas"],
        ]
      }
    ]
  },

  // ─── A2 ───────────────────────────────────────────────────────────────────
  "ES-A2-U1": {
    title: "Viagens e Turismo",
    sections: [
      {
        title: "Pretérito Perfecto — Passado Recente",
        tip: "O Pretérito Perfecto em espanhol (he comido, has viajado) expressa ações passadas com conexão ao presente. É diferente do português 'tenho comido' — em espanhol é muito mais usado para o passado recente.",
        headers: ["Pronome", "HABER", "Participio regular", "Exemplo"],
        rows: [
          ["yo", "he", "-ado / -ido", "he viajado, he comido"],
          ["tú", "has", "", "has visitado, has visto"],
          ["él/ella", "ha", "", "ha llegado, ha hecho"],
          ["nosotros", "hemos", "", "hemos ido, hemos dicho"],
          ["ellos", "han", "", "han vuelto, han puesto"],
        ]
      },
      {
        title: "🔑 Participios Irregulares — Memorize Estes",
        tip: "Estes participios irregulares são os mais usados. Sem eles não se forma o pretérito perfecto, o pluscuamperfecto nem a voz passiva.",
        headers: ["Infinitivo", "Participio", "Significado"],
        rows: [
          ["hacer", "hecho", "feito"],
          ["decir", "dicho", "dito"],
          ["ver", "visto", "visto"],
          ["volver", "vuelto", "voltado"],
          ["poner", "puesto", "colocado"],
          ["abrir", "abierto", "aberto"],
          ["escribir", "escrito", "escrito"],
          ["romper", "roto", "quebrado"],
        ]
      }
    ]
  },

  "ES-A2-U2": {
    title: "Passado e Memórias",
    sections: [
      {
        title: "Pretérito Imperfecto vs Indefinido",
        tip: "Esta é a distinção mais importante do passado em espanhol. O Imperfecto descreve estados e hábitos contínuos. O Indefinido narra ações completas e pontuais.",
        headers: ["Uso", "Tempo verbal", "Exemplo"],
        rows: [
          ["Hábito passado", "Imperfecto", "Cuando era niño, jugaba fútbol."],
          ["Estado passado", "Imperfecto", "Era tarde y hacía frío."],
          ["Ação completada", "Indefinido", "Ayer comí pizza."],
          ["Ação pontual", "Indefinido", "El teléfono sonó."],
          ["Ação de fundo", "Imperfecto", "Llovía cuando llegué."],
          ["Ação que interrompe", "Indefinido", "Llegué (enquanto chovia)"],
        ]
      },
      {
        title: "🔑 Imperfecto — Terminações",
        tip: "O Imperfecto é muito regular. Verbos -AR terminam em -aba. Verbos -ER/-IR terminam em -ía. Apenas 3 verbos são irregulares: ser, ir, ver.",
        headers: ["Pronome", "-AR (hablar)", "-ER/-IR (comer/vivir)", "SER (irreg.)"],
        rows: [
          ["yo", "hablaba", "comía / vivía", "era"],
          ["tú", "hablabas", "comías / vivías", "eras"],
          ["él/ella", "hablaba", "comía / vivía", "era"],
          ["nosotros", "hablábamos", "comíamos", "éramos"],
          ["ellos", "hablaban", "comían", "eran"],
        ]
      }
    ]
  },

  "ES-A2-U3": {
    title: "Saúde, Conselhos e Obrigações",
    sections: [
      {
        title: "Expressar Obrigação e Conselho",
        tip: "Espanhol tem várias formas de expressar obrigação com nuances diferentes. O nível de imposição varia: TENER QUE (pessoal e forte) > DEBER (moderado) > DEBERÍA (suave) > HAY QUE (impessoal).",
        headers: ["Expressão", "Força", "Uso", "Exemplo"],
        rows: [
          ["Tener que + inf.", "Forte/pessoal", "Obrigação pessoal", "Tengo que estudiar."],
          ["Deber + inf.", "Moderado", "Obrigação/dever moral", "Debes descansar más."],
          ["Hay que + inf.", "Impessoal", "Regra geral", "Hay que comer bien."],
          ["Debería + inf.", "Suave", "Conselho educado", "Deberías dormir más."],
          ["Es necesario + inf.", "Formal", "Necessidade", "Es necesario hacer ejercicio."],
        ]
      },
      {
        title: "🔑 Futuro Simples — Previsões e Promessas",
        tip: "O Futuro Simples em espanhol se forma com o infinitivo + as terminações do verbo HABER. É muito regular — só 12 verbos têm radical irregular.",
        headers: ["Pronome", "Terminação", "-AR (viajar)", "Irregular (hacer)"],
        rows: [
          ["yo", "-é", "viajaré", "haré"],
          ["tú", "-ás", "viajarás", "harás"],
          ["él/ella", "-á", "viajará", "hará"],
          ["nosotros", "-emos", "viajaremos", "haremos"],
          ["ellos", "-án", "viajarán", "harán"],
        ]
      }
    ]
  },

  "ES-A2-U4": {
    title: "Trabalho, Tecnologia e Sociedade",
    sections: [
      {
        title: "Introdução ao Subjuntivo Presente",
        tip: "O Subjuntivo é o modo do desejo, da dúvida e da emoção. Aparece depois de expressões como: quiero que, espero que, es importante que, ojalá. A chave: muda de sujeito → subjuntivo.",
        headers: ["Gatilho", "Estrutura", "Exemplo"],
        rows: [
          ["Desejo", "quiero que + subj.", "Quiero que vengas."],
          ["Esperança", "espero que + subj.", "Espero que estés bien."],
          ["Emoção", "me alegra que + subj.", "Me alegra que hayas llegado."],
          ["Dúvida", "no creo que + subj.", "No creo que sea verdad."],
          ["Desejo impossível", "ojalá + subj.", "Ojalá pudiera volar."],
        ]
      },
      {
        title: "🔑 Subjuntivo Presente — Formação",
        tip: "Truque para formar o subjuntivo: vá para a 1ª pessoa do singular do presente (yo hablo → hablo), tire o -o (habl-) e adicione as terminações opostas: -AR recebe -E, -ER/-IR recebem -A.",
        headers: ["Pronome", "HABLAR (-AR→-E)", "COMER (-ER→-A)", "VIVIR (-IR→-A)"],
        rows: [
          ["yo", "hable", "coma", "viva"],
          ["tú", "hables", "comas", "vivas"],
          ["él/ella", "hable", "coma", "viva"],
          ["nosotros", "hablemos", "comamos", "vivamos"],
          ["ellos", "hablen", "coman", "vivan"],
        ]
      }
    ]
  },

  "ES-A2-U5": {
    title: "Cultura Hispana e Diversidade",
    sections: [
      {
        title: "O Mundo Hispanohablante",
        tip: "21 países têm o espanhol como idioma oficial. Não existe 'o espanhol certo' — todas as variedades são igualmente válidas. Para brasileiros, o espanhol latinoamericano (especialmente o neutro) é geralmente o mais fácil de entender.",
        headers: ["Região", "Característica", "Exemplo"],
        rows: [
          ["Espanha", "Vosotros, ceceo (c/z = th)", "vosotros habláis"],
          ["México/América Central", "Ustedes, español neutro", "ustedes hablan"],
          ["Argentina/Uruguai", "Voseo, entonação italiana", "vos hablás, ¿cómo andás?"],
          ["Caribe (Cuba, PR, RD)", "Aspiração do /s/, velocidade", "loh niñoh (los niños)"],
          ["Andino (Peru, Bolívia)", "Espanhol mais conservador", "pronúncia clara e lenta"],
        ]
      },
      {
        title: "🔑 Conectores Discursivos — Organize seu Discurso",
        tip: "Os conectores discursivos são o que diferencia um B1 de um A2. Usados corretamente, tornam o discurso fluido e coeso.",
        headers: ["Função", "Conector", "Tradução"],
        rows: [
          ["Adicionar", "además / también / asimismo", "além disso / também"],
          ["Contrastar", "sin embargo / pero / aunque", "no entanto / mas / embora"],
          ["Causa", "porque / ya que / puesto que", "porque / já que"],
          ["Consequência", "por lo tanto / así que", "portanto / então"],
          ["Exemplificar", "por ejemplo / como", "por exemplo / como"],
          ["Concluir", "en definitiva / en resumen", "em definitivo / em resumo"],
        ]
      }
    ]
  },

  "ES-A2-U6": {
    title: "Situações Avançadas do Cotidiano",
    sections: [
      {
        title: "Estilo Indireto — Contar o Que Outros Disseram",
        tip: "Quando relatamos o que alguém disse no passado, os tempos verbais recuam: presente → imperfecto, futuro → condicional, perfecto → pluscuamperfecto.",
        headers: ["Discurso direto", "Discurso indireto", "Mudança"],
        rows: [
          ["'Estoy bien'", "Dijo que estaba bien.", "presente → imperfecto"],
          ["'Vendré mañana'", "Dijo que vendría mañana.", "futuro → condicional"],
          ["'He terminado'", "Dijo que había terminado.", "perfecto → pluscuamperfecto"],
          ["'¿Tienes tiempo?'", "Preguntó si tenía tiempo.", "pregunta → si + imperfecto"],
          ["'Ven aquí'", "Me pidió que fuera.", "imperativo → subj. imperf."],
        ]
      },
      {
        title: "🔑 Condicional — Situações Hipotéticas",
        tip: "O Condicional (-ría) é o 'deveria / faria / gostaria' em espanhol. Mesmo radical irregular do futuro + terminações do imperfecto de -ER/-IR.",
        headers: ["Pronome", "Terminação", "HABLAR", "HACER (irreg.)"],
        rows: [
          ["yo", "-ría", "hablaría", "haría"],
          ["tú", "-rías", "hablarías", "harías"],
          ["él/ella", "-ría", "hablaría", "haría"],
          ["nosotros", "-ríamos", "hablaríamos", "haríamos"],
          ["ellos", "-rían", "hablarían", "harían"],
        ]
      }
    ]
  },

  // ─── B1 ───────────────────────────────────────────────────────────────────
  "ES-B1-U1": {
    title: "Subjuntivo — Deseos, Dudas y Emociones",
    sections: [
      {
        title: "Mapa Completo do Subjuntivo",
        tip: "O Subjuntivo não é um tempo verbal — é um MODO. Expressa o que não é fato objetivo: desejo, dúvida, emoção, negação de opinião. Dominá-lo é o que separa o A2 do B1.",
        headers: ["Categoria", "Gatilhos", "Exemplo"],
        rows: [
          ["Desejo/Volição", "querer, desear, esperar, ojalá", "Quiero que vengas."],
          ["Dúvida/Negação", "no creer, dudar, no pensar", "No creo que sea verdad."],
          ["Emoção", "alegrarse, preocupar, sorprender", "Me alegra que estés bien."],
          ["Necessidade", "es necesario, hay que... (com subj.)", "Es importante que vengas."],
          ["Temporal (futuro)", "cuando, hasta que, en cuanto", "Cuando llegues, llámame."],
          ["Final", "para que, a fin de que", "Te lo digo para que sepas."],
        ]
      },
      {
        title: "🔑 Subjuntivo Imperfeito — A Grande Virada",
        tip: "O Subjuntivo Imperfeito (tuviera, pudiera, fuera) é o que permite as hipóteses ('se eu tivesse...') e o discurso indireto no passado. Vem do pretérito indefinido — sem exceções!",
        headers: ["Infinitivo", "3ª pl. Indefinido", "Subj. Imperf. (yo)"],
        rows: [
          ["tener", "tuvieron", "tuviera"],
          ["poder", "pudieron", "pudiera"],
          ["ser / ir", "fueron", "fuera"],
          ["hacer", "hicieron", "hiciera"],
          ["saber", "supieron", "supiera"],
          ["venir", "vinieron", "viniera"],
        ]
      }
    ]
  },

  "ES-B1-U2": {
    title: "Orações Condicionais e Hipóteses",
    sections: [
      {
        title: "Os Três Tipos de Condicionais",
        tip: "Os condicionais em espanhol têm três tipos com significados bem diferentes. O tipo 2 e 3 são os que mais confundem brasileiros — foque nas estruturas.",
        headers: ["Tipo", "Estrutura", "Significado", "Exemplo"],
        rows: [
          ["Tipo 1 (real)", "Si + presente → futuro/imperativo", "Possível e provável", "Si llueve, no salgo."],
          ["Tipo 2 (hipotético)", "Si + imperf. subj. → condicional", "Improvável no presente", "Si tuviera dinero, viajaría."],
          ["Tipo 3 (impossível)", "Si + hubiera + part. → habría + part.", "Impossível, passado", "Si hubiera estudiado, habría aprobado."],
          ["Misto", "Si + hubiera + part. → condicional", "Passado com efeito presente", "Si hubiera aceptado, estaría mejor ahora."],
        ]
      },
      {
        title: "🔑 Voz Passiva — Ser e Estar + Participio",
        tip: "Em espanhol existem duas construções passivas com significados distintos. SER foca na ação/processo; ESTAR foca no resultado/estado. Em ambas, o participio concorda em gênero e número com o sujeito.",
        headers: ["Construção", "Foco", "Exemplo", "Significado"],
        rows: [
          ["SER + participio", "Ação/processo", "El libro fue escrito por Cervantes.", "foi escrito (processo)"],
          ["ESTAR + participio", "Resultado/estado", "El libro está escrito en español.", "está escrito (estado)"],
          ["SE + verbo (impessoal)", "Ação sem agente", "Se habla español aquí.", "fala-se espanhol aqui"],
        ]
      }
    ]
  },

  "ES-B1-U3": {
    title: "Narração e Estilo Literário",
    sections: [
      {
        title: "Combinar Tempos do Passado com Maestria",
        tip: "A narração avançada em espanhol combina quatro tempos: Indefinido (ação completada) + Imperfecto (fundo/estado) + Perfecto (recente) + Pluscuamperfecto (anterior ao passado).",
        headers: ["Tempo", "Uso na narração", "Sinal", "Exemplo"],
        rows: [
          ["Indefinido", "Ação completada, passo da narrativa", "ayer, el año pasado", "Llegó a las tres."],
          ["Imperfecto", "Estado de fundo, contexto", "siempre, cuando era", "Llovía y hacía frío."],
          ["Perfecto", "Passado recente com relevância", "hoy, ya, todavía", "Ya he comido."],
          ["Pluscuamperfecto", "Ação anterior a outra passada", "ya, cuando llegué", "Ya había comido cuando llegué."],
        ]
      },
      {
        title: "🔑 Expressões Idiomáticas Essenciais do B1",
        tip: "As expressões idiomáticas são o que torna o espanhol natural. Não é suficiente conhecê-las — é preciso usá-las no momento certo.",
        headers: ["Expressão", "Significado", "Uso"],
        rows: [
          ["de maravilla", "de maravilha / muito bem", "Me fue de maravilla."],
          ["pan comido", "moleza / fácil demais", "El examen fue pan comido."],
          ["quedarse de piedra", "ficar chocado / de pedra", "Me quedé de piedra."],
          ["a pedir de boca", "redondinho / perfeito", "Salió todo a pedir de boca."],
          ["coger el toro por los cuernos", "pegar o touro pelos chifres", "Hay que coger el toro..."],
          ["no pasa nada", "não tem problema / tudo bem", "Tranquilo, no pasa nada."],
        ]
      }
    ]
  },

  "ES-B1-U4": {
    title: "Mundo Profissional e Acadêmico",
    sections: [
      {
        title: "Espanhol Profissional — Registro Formal",
        tip: "O espanhol formal profissional se caracteriza por: nominalização (substituir verbos por substantivos), voz passiva, conectores formais e cortesia máxima. Quanto mais formal, mais nominalizações.",
        headers: ["Informal", "Formal", "Mudança"],
        rows: [
          ["resolver el problema", "la resolución del problema", "verbo → substantivo"],
          ["Nos reunimos para...", "La reunión tuvo como objetivo...", "nominalização"],
          ["Le mandé el informe", "Se le hizo llegar el informe", "voz passiva impessoal"],
          ["Buenos días", "Estimado señor García:", "saudação formal"],
          ["Hasta luego", "Le saluda atentamente,", "encerramento formal"],
        ]
      },
      {
        title: "🔑 Medios de Comunicación — Vocabulário Jornalístico",
        tip: "O jornalismo em espanhol usa expressões de distanciamento para indicar que a informação vem de terceiros. São fundamentais para ler e escrever notícias com precisão.",
        headers: ["Expressão", "Tradução", "Uso"],
        rows: [
          ["según fuentes", "segundo fontes", "Según fuentes oficiales..."],
          ["al parecer", "ao que parece", "Al parecer, habrá cambios."],
          ["se ha confirmado que", "foi confirmado que", "Se ha confirmado que..."],
          ["en declaraciones a", "em declarações a", "En declaraciones a la prensa..."],
          ["fuentes cercanas", "fontes próximas", "Fuentes cercanas al gobierno..."],
        ]
      }
    ]
  },

  "ES-B1-U5": {
    title: "Literatura e Cultura Hispana",
    sections: [
      {
        title: "Grandes Correntes da Literatura Hispânica",
        tip: "Conhecer as correntes literárias permite contextualizar qualquer obra e usar vocabulário crítico adequado. Esta é a base para a análise literária em nível B1/B2.",
        headers: ["Período/Corrente", "Características", "Autores"],
        rows: [
          ["Siglo de Oro (XVI-XVII)", "Barroco, humanismo, teatro, mística", "Cervantes, Lope de Vega, Quevedo"],
          ["Romanticismo (XIX)", "Sentimento, natureza, individualismo", "Bécquer, Espronceda"],
          ["Modernismo (fin XIX)", "Refinamento, musicalidade, exotismo", "Rubén Darío, Juan Ramón Jiménez"],
          ["Generación del 98", "Crise espanhola, regeneração, ensaio", "Unamuno, Machado, Azorín"],
          ["Boom latinoam. (60-70)", "Realismo mágico, experimentação", "García Márquez, Cortázar, Vargas Llosa"],
        ]
      },
      {
        title: "🔑 Vocabulário de Análise Literária",
        tip: "Para analisar textos literários em espanhol é preciso dominar o vocabulário crítico específico. Estes são os termos mais usados.",
        headers: ["Termo", "Significado", "Uso"],
        rows: [
          ["el narrador", "o narrador (quem conta)", "El narrador es omnisciente."],
          ["el protagonista", "o protagonista", "El protagonista evoluciona."],
          ["la trama", "a trama / o enredo", "La trama gira en torno a..."],
          ["el desenlace", "o desenlecho / o desfecho", "El desenlace es ambiguo."],
          ["el punto de vista", "o ponto de vista", "El punto de vista cambia."],
          ["la metáfora", "a metáfora", "Usa la metáfora del laberinto."],
        ]
      }
    ]
  },

  "ES-B1-U6": {
    title: "Situações Complexas e Autonomia Linguística",
    sections: [
      {
        title: "Pragmática — O Que Não Se Diz",
        tip: "A pragmática estuda o que realmente se comunica além das palavras. Em espanhol, como em português, muito do significado está no que NÃO se diz — no subtexto, na entonação e nas implicaturas.",
        headers: ["O que se diz", "O que se comunica", "Contexto"],
        rows: [
          ["Ya lo veremos.", "Provavelmente não. / Tenho dúvidas.", "Recusa educada"],
          ["Bueno...", "Hesitação / discordância suave", "Evasão"],
          ["No sé...", "Não quero / tenho dúvidas", "Esquiva educada"],
          ["Está bien.", "OK (mas pode ser resignação)", "Depende do tom"],
          ["¿No te parece?", "Quero que concorde comigo.", "Busca de validação"],
        ]
      },
      {
        title: "🔑 Linguagem Coloquial — Espanhol Real",
        tip: "O espanhol coloquial tem expressões e estruturas que não aparecem nos livros. Conhecê-las é o que torna o espanhol natural.",
        headers: ["Formal / Neutro", "Coloquial", "Significado"],
        rows: [
          ["¿Cómo estás?", "¿Qué tal? / ¿Cómo andas?", "Como vai?"],
          ["Es muy bueno", "Es una pasada / Es brutal", "É incrível (Espanha)"],
          ["No entiendo", "No me entero / No pillo", "Não entendo (Espanha)"],
          ["Está muy bien", "Está genial / Está de lujo", "Está ótimo"],
          ["¡Qué interesante!", "¡Flipas! / ¡Alucino!", "Não acredito! (Espanha)"],
          ["De acuerdo", "¡Venga! / ¡Dale! / ¡Va!", "Bora / Fechado"],
        ]
      }
    ]
  },

  // ─── B2 ───────────────────────────────────────────────────────────────────
  "ES-B2-U1": {
    title: "Gramática Avanzada — Matices y Precisión",
    sections: [
      {
        title: "Subjuntivo vs Indicativo — As Distinções Sutis do B2",
        tip: "No B2, a diferença entre subjuntivo e indicativo não é só gramática — é semântica. 'Busco un médico que habla ruso' (existe, sei quem é) vs 'que hable ruso' (qualquer um, hipotético).",
        headers: ["Estrutura", "Indicativo (definido)", "Subjuntivo (hipotético)"],
        rows: [
          ["Buscar algo", "Busco al médico que habla ruso. (sei quem é)", "Busco un médico que hable ruso. (qualquer um)"],
          ["Negar opinião", "Creo que es verdad.", "No creo que sea verdad."],
          ["Temporal", "Cuando llego, como. (hábito)", "Cuando llegues, come. (futuro)"],
          ["Conceder", "Aunque llueve, voy. (fato)", "Aunque llueva, iré. (hipótese)"],
        ]
      },
      {
        title: "🔑 Estructuras Nominales — Registro Formal",
        tip: "O espanhol formal e acadêmico usa muita nominalização: verbos se tornam substantivos. Isso torna o texto mais denso e formal. Reconhecer e produzir essas estruturas é essencial no B2.",
        headers: ["Verbo", "Substantivo", "Exemplo formal"],
        rows: [
          ["desarrollar", "el desarrollo", "El desarrollo del proyecto..."],
          ["implementar", "la implementación", "La implementación de medidas..."],
          ["resolver", "la resolución", "La resolución del conflicto..."],
          ["gestionar", "la gestión", "La gestión de recursos..."],
          ["evaluar", "la evaluación", "La evaluación de resultados..."],
          ["negociar", "la negociación", "La negociación del acuerdo..."],
        ]
      }
    ]
  },

  "ES-B2-U2": {
    title: "Comunicação Profissional Avançada",
    sections: [
      {
        title: "Correspondência Formal — Estrutura e Fórmulas",
        tip: "A correspondência formal em espanhol tem convenções muito específicas. Desviá-las soa amador. Aprenda a estrutura padrão e as fórmulas de abertura e encerramento.",
        headers: ["Parte", "Fórmula formal", "Tradução"],
        rows: [
          ["Abertura", "Estimado/a señor/a García:", "Caro/a Sr./Sra. García:"],
          ["Motivo", "Me dirijo a usted para...", "Dirijo-me a você para..."],
          ["Referência", "En respuesta a su carta de fecha...", "Em resposta à sua carta de..."],
          ["Encerramento", "Quedo a su disposición para...", "Fico à sua disposição para..."],
          ["Despedida", "Le saluda atentamente,", "Atenciosamente,"],
          ["Alternativa", "En espera de su respuesta,", "Aguardando sua resposta,"],
        ]
      },
      {
        title: "🔑 Debater e Argumentar — Linguagem de Alto Nível",
        tip: "No B2 você precisa não só argumentar mas conceder e refutar com elegância. Estas estruturas são as que diferenciam um argumentador mediano de um sofisticado.",
        headers: ["Função", "Estrutura", "Exemplo"],
        rows: [
          ["Conceder + refutar", "Si bien es cierto que... sin embargo...", "Si bien es cierto que hay ventajas, sin embargo..."],
          ["Discordar com elegância", "Permítame discrepar / Me temo que...", "Permítame discrepar de ese punto."],
          ["Citar evidência", "Los datos muestran / Según estudios...", "Los datos muestran que..."],
          ["Matizar", "Cabría señalar / Cabe matizar que...", "Cabe matizar que no es tan simple."],
          ["Concluir", "En definitiva / A modo de conclusión...", "En definitiva, la solución pasa por..."],
        ]
      }
    ]
  },

  "ES-B2-U3": {
    title: "Pensamento Crítico e Análise",
    sections: [
      {
        title: "Análise de Textos — Vocabulário Crítico B2",
        tip: "Para analisar textos com profundidade B2 é preciso ir além do conteúdo explícito. O que o texto pressupõe? Que posição implícita toma? Como a seleção lexical revela intenção?",
        headers: ["Conceito", "Definição", "Como detectar"],
        rows: [
          ["Tesis explícita", "O que o texto afirma diretamente", "Buscar a afirmação central"],
          ["Tesis implícita", "O que o texto assume sem afirmar", "Analisar seleção lexical"],
          ["Presuposición", "O que o texto dá como dado sem provar", "Buscar o que não é questionado"],
          ["Argumento", "Evidência que sustenta a tese", "Buscar 'porque', 'ya que', dados"],
          ["Contraargumento", "Posição oposta à tese", "Buscar 'sin embargo', 'aunque'"],
          ["Tono", "Atitude do autor perante o tema", "Analisar adjetivos e verbos"],
        ]
      },
      {
        title: "🔑 Intertextualidade — Diálogo entre Obras",
        tip: "A intertextualidade é a conversa entre textos. No B2 é preciso reconhecer quando um texto faz referência a outro e entender como essa referência muda o significado.",
        headers: ["Tipo", "Definição", "Exemplo"],
        rows: [
          ["Cita directa", "Reprodução literal de outro texto", "Como dijo Cervantes..."],
          ["Alusión", "Referência implícita", "Su Quijote personal (sem citar)"],
          ["Parodia", "Imitação humorística ou crítica", "Versão cômica do Quixote"],
          ["Pastiche", "Imitação de estilo sem ironia", "Escrever 'à maneira de' Borges"],
          ["Intertexto", "Referência que muda o sentido", "O labirinto de Borges em outro texto"],
        ]
      }
    ]
  },

  "ES-B2-U4": {
    title: "Espanhol para o Mundo Digital e Mídia",
    sections: [
      {
        title: "Espanhol Digital — Novos Registros",
        tip: "O mundo digital criou registros híbridos entre o oral e o escrito. O espanhol digital tem suas próprias convenções que diferem do espanhol escrito formal.",
        headers: ["Registro", "Características", "Exemplo"],
        rows: [
          ["WhatsApp/DM", "Informal, abreviações, emojis", "bn, xq, tmb, jajaja"],
          ["Twitter/X", "140-280 caracteres, hashtags, concisão", "Thread com estrutura narrativa"],
          ["LinkedIn", "Semiprofissional, primeira pessoa", "Orgulloso de anunciar que..."],
          ["Email formal", "Estrutura clássica, verbos em cortesia", "Estimado/a..., le saluda"],
          ["Newsletter", "Próximo, pessoal, voz autoral", "Esta semana quiero contarte..."],
        ]
      },
      {
        title: "🔑 Expressões Idiomáticas Avançadas B2",
        tip: "No B2 as expressões idiomáticas são mais complexas e menos transparentes. Conhecê-las é o que torna o espanhol sofisticado e natural.",
        headers: ["Expressão", "Significado", "Contexto"],
        rows: [
          ["andarse con pies de plomo", "agir com cautela / pisar em ovos", "situações delicadas"],
          ["tener la mosca detrás de la oreja", "estar desconfiado", "suspeita"],
          ["caerle el muerto a alguien", "sobrar o pepino para alguém", "problemas alheios"],
          ["el agua al cuello", "em apuros / sufocado", "situação crítica"],
          ["matar dos pájaros de un tiro", "matar dois coelhos de uma cajadada", "eficiência"],
          ["no hay mal que por bien no venga", "não há mal que não venha para o bem", "consolo"],
        ]
      }
    ]
  },

  "ES-B2-U5": {
    title: "Arte, Identidade e Sociedade Contemporânea",
    sections: [
      {
        title: "Arte Contemporânea Hispana — Contexto e Vocabulário",
        tip: "Para falar de arte em espanhol de nível B2 é preciso dominar o vocabulário específico e poder contextualizar obras em seu período histórico e cultural.",
        headers: ["Conceito", "Definição", "Uso crítico"],
        rows: [
          ["el contexto histórico", "o contexto histórico", "La obra se enmarca en..."],
          ["la corriente artística", "a corrente artística", "Pertenece a la corriente..."],
          ["el compromiso político", "o engajamento político", "Su obra refleja un compromiso..."],
          ["la hibridez cultural", "a hibridez cultural", "Incorpora la hibridez de..."],
          ["trascender", "transcender / ir além", "Su obra trasciende el género."],
          ["reivindicar", "reivindicar / recuperar", "Reivindica la tradición popular."],
        ]
      },
      {
        title: "🔑 Questões Sociais — Vocabulário do Debate Contemporâneo",
        tip: "Para participar de debates sobre sociedade contemporânea em espanhol é preciso dominar o vocabulário específico de cada área temática.",
        headers: ["Área", "Vocabulário chave", "Expressão"],
        rows: [
          ["Meio ambiente", "cambio climático, sostenibilidad, huella de carbono", "la transición ecológica"],
          ["Tecnologia", "inteligencia artificial, digitalización, brecha digital", "el impacto de la IA"],
          ["Sociedade", "desigualdad, cohesión social, inclusión", "la fractura social"],
          ["Economia", "precarización, desempleo estructural, PIB", "la coyuntura económica"],
          ["Política", "polarización, consenso, gobernanza", "el sistema democrático"],
        ]
      }
    ]
  },

  "ES-B2-U6": {
    title: "Preparação para Certificações — DELE B2",
    sections: [
      {
        title: "Estrutura do DELE B2 — O Que Esperar",
        tip: "O DELE B2 do Instituto Cervantes avalia 4 destrezas. Conhecer a estrutura do exame é fundamental para se preparar adequadamente.",
        headers: ["Prova", "Tempo", "Tarefas", "Dica principal"],
        rows: [
          ["Comprensión lectora", "70 min", "4 tarefas com textos longos", "Ler perguntas antes dos textos"],
          ["Comprensión auditiva", "40 min", "4 tarefas de áudio", "Não se bloquear em palavras desconhecidas"],
          ["Expresión escrita", "80 min", "2 textos de 150-250 palavras", "Variedade léxica e sintática"],
          ["Expresión oral", "15 min", "Monólogo + interação com examinador", "Defender posição com argumentos"],
        ]
      },
      {
        title: "🔑 Texto Escrito B2 — Critérios de Avaliação",
        tip: "O DELE B2 avalia a escrita em 4 critérios. Saber exatamente o que é avaliado permite focar no que importa.",
        headers: ["Critério", "O que avaliam", "Como melhorar"],
        rows: [
          ["Coherencia y cohesión", "Lógica interna e conectores", "Usar conectores variados"],
          ["Riqueza léxica", "Variedade de vocabulário", "Evitar repetições, usar sinônimos"],
          ["Corrección gramatical", "Ausência de erros", "Revisar antes de entregar"],
          ["Adecuación al registro", "Tom adequado ao tipo de texto", "Nunca misturar formal e informal"],
        ]
      }
    ]
  },

  // ─── C1 ───────────────────────────────────────────────────────────────────
  "ES-C1-U1": {
    title: "Domínio Lingüístico Total — Precisión y Matiz",
    sections: [
      {
        title: "Perífrases Verbais — O Motor do Espanhol Avançado",
        tip: "As perífrases verbais são combinações de verbo auxiliar + infinitivo/gerúndio/participio que expressam nuances de aspecto e modo que os verbos simples não conseguem. Dominá-las é o que separa o B2 do C1.",
        headers: ["Perífrase", "Significado", "Exemplo"],
        rows: [
          ["llevar + gerundio", "faz tempo que (ação contínua)", "Llevo tres años estudiando."],
          ["ponerse a + inf.", "começar de repente/com esforço", "Me puse a trabajar."],
          ["acabar + gerundio", "acabar fazendo / terminar por", "Acabé comiéndolo todo."],
          ["seguir sin + inf.", "continuar sem fazer algo", "Sigo sin entenderlo."],
          ["volver a + inf.", "fazer de novo", "Volvió a llamar."],
          ["andar + gerundio", "andar fazendo (tom depreciativo)", "Anda buscando excusas."],
        ]
      },
      {
        title: "🔑 Modalidade — Dever, Poder, Querer com Precisão",
        tip: "No C1 a distinção entre DEBER (obrigação) e DEBER DE (dedução) é fundamental. São dois usos do mesmo verbo com significados completamente diferentes.",
        headers: ["Expressão", "Significado", "Exemplo"],
        rows: [
          ["debe + inf.", "tem obrigação de (moral/regra)", "Debe llegar a las 9."],
          ["debe de + inf.", "provavelmente / dedução", "Debe de estar durmiendo."],
          ["debería + inf.", "deveria (conselho suave)", "Deberías descansar más."],
          ["puede que + subj.", "pode ser que / talvez", "Puede que tenga razón."],
          ["habrá que + inf.", "vai ser preciso (futuro imp.)", "Habrá que esperar."],
        ]
      }
    ]
  },

  "ES-C1-U2": {
    title: "Registro Culto e Literatura",
    sections: [
      {
        title: "O Ensaio como Gênero — Características e Técnicas",
        tip: "O ensaio hispânico (de Montaigne a Unamuno) é o gênero mais rico para quem quer pensar em espanhol. Não é opinião: é pensamento em processo, primeira pessoa honesta, digression como método.",
        headers: ["Característica", "Descrição", "Exemplo"],
        rows: [
          ["Primera persona honesta", "Não retórica — genuína", "'No sé si lo que siento es...'"],
          ["Digresión como método", "Desviar para descobrir", "Começar sobre X, terminar sobre Y"],
          ["Pensamiento en proceso", "Pensar na frente do leitor", "Mostrar dúvidas, não só certezas"],
          ["Sin tesis cerrada", "Terminar com pergunta melhor", "Não resolver — afinar o problema"],
          ["Registro culto-natural", "Nem acadêmico nem coloquial", "Elegante mas não pomposo"],
        ]
      },
      {
        title: "🔑 Figuras de Linguagem — Vocabulário de Análise C1",
        tip: "No C1 é preciso não só identificar figuras de linguagem mas analisar seu efeito. Por que o autor usou uma metáfora aqui? Que efeito a anáfora cria?",
        headers: ["Figura", "Definição", "Efeito"],
        rows: [
          ["metáfora", "Identificação de A com B", "Cria imagem, densifica significado"],
          ["anáfora", "Repetição no início de versos/frases", "Cria ritmo e ênfase"],
          ["oxímoron", "Combinação de opostos", "Cria paradoxo, tensão expressiva"],
          ["elipsis", "Omissão de elemento recuperável", "Cria economia, densifica"],
          ["ironía", "Dizer o contrário do que se pensa", "Distância crítica, humor"],
          ["in medias res", "Começar no meio da ação", "Cria tensão imediata"],
        ]
      }
    ]
  },

  "ES-C1-U3": {
    title: "Pensamento, Filosofia e Alta Cultura",
    sections: [
      {
        title: "Filosofia da Linguagem — Conceitos Essenciais",
        tip: "Para discutir filosofia da linguagem em espanhol é preciso dominar o vocabulário conceitual específico. Estes são os conceitos mais usados nos debates contemporâneos.",
        headers: ["Conceito", "Definição", "Autor/Origem"],
        rows: [
          ["cosmovisión", "visão de mundo integrada e cultural", "Tradição alemã (Weltanschauung)"],
          ["el significante / significado", "forma / conteúdo do signo linguístico", "Saussure"],
          ["la performatividad", "a língua como ação que cria realidade", "Austin / Searle"],
          ["la metáfora conceptual", "mapeamento cognitivo entre domínios", "Lakoff & Johnson"],
          ["la diglosia", "duas línguas com status diferentes na mesma comunidade", "Ferguson"],
          ["el code-switching", "alternância de código por bilíngues", "Sociolinguística"],
        ]
      },
      {
        title: "🔑 Retórica Clássica — Ethos, Pathos, Logos",
        tip: "A tríade aristotélica é a base de qualquer argumentação eficaz. Dominá-la em espanhol é o que diferencia um argumentador B2 de um C1.",
        headers: ["Categoria", "Definição", "Como usar em espanhol"],
        rows: [
          ["Ethos", "Credibilidade/caráter do orador", "Como alguien que lleva años en..."],
          ["Pathos", "Apelo emocional ao público", "Imaginen por un momento que..."],
          ["Logos", "Argumento racional / evidência", "Los datos demuestran que..."],
          ["Equilibrio", "A força vem da combinação dos três", "Nenhum dos três é suficiente sozinho"],
        ]
      }
    ]
  },

  "ES-C1-U4": {
    title: "Espanhol Profissional de Élite",
    sections: [
      {
        title: "Diplomacia e Protocolo — Fórmulas Essenciais",
        tip: "O espanhol diplomático tem um conjunto de fórmulas fixas que é preciso conhecer. Improvisar nesse registro soa amador — as fórmulas existem para dar segurança e elegância.",
        headers: ["Situação", "Fórmula diplomática", "Tradução"],
        rows: [
          ["Abertura de discurso", "Es para mí un honor dirigirme a ustedes...", "É para mim uma honra..."],
          ["Agradecimento", "Quisiera expresar nuestro más sincero agradecimiento", "Gostaria de expressar nossa sincera gratidão"],
          ["Cooperação", "En aras de fortalecer los lazos entre...", "Com o objetivo de fortalecer os laços..."],
          ["Proposta", "Nos permitimos proponer / sugerir que...", "Permitimo-nos propor que..."],
          ["Encerramento", "Con ese espíritu de cooperación, concluyo...", "Com esse espírito de cooperação..."],
        ]
      },
      {
        title: "🔑 Humor e Ironia Sofisticada — O Último Nível",
        tip: "Entender e produzir humor sofisticado em espanhol é um dos últimos indicadores de fluência real. O humor depende de timing, conhecimento cultural e sensibilidade para o tom.",
        headers: ["Tipo de humor", "Como funciona", "Exemplo"],
        rows: [
          ["Ironía verbal", "Dizer o contrário com tom específico", "'¡Qué sorpresa!' (sem surpresa)"],
          ["Sarcasmo", "Ironia com intenção crítica", "'Brillante idea, como siempre.'"],
          ["Humor absurdo", "Situação ilógica levada a sério", "O discurso político tratado como lógico"],
          ["Juego de palabras", "Explorar duplo sentido", "Trocadilhos, paronomásia"],
          ["Understatement", "Diminuir para maximizar efeito", "'No es que sea perfecto, pero...'"],
        ]
      }
    ]
  },

  "ES-C1-U5": {
    title: "Criação Literária em Espanhol",
    sections: [
      {
        title: "Técnicas Narrativas Avançadas",
        tip: "A criação literária em C1 exige domínio consciente das técnicas. Não se trata de escrever bonito — trata-se de fazer escolhas narrativas informadas e eficazes.",
        headers: ["Técnica", "Efeito", "Quando usar"],
        rows: [
          ["In medias res", "Tensão imediata, sem contextualização", "Quando a ação é mais forte que o contexto"],
          ["Narrador no fiable", "Dúvida, suspense interpretativo", "Quando a perspectiva é parte do tema"],
          ["Economía narrativa", "Densidade, nada supérfluo", "Contos curtos, alta carga semântica"],
          ["El iceberg (Hemingway)", "O que não se diz pesa mais", "Quando o subtexto é o tema real"],
          ["Tiempo circular", "O fim é o começo / a estrutura é o significado", "Temas de repetição, memória"],
          ["Polifonía", "Múltiplas vozes sem hierarquia", "Temas de verdade múltipla, conflito"],
        ]
      },
      {
        title: "🔑 O Duende de Lorca — Conceito Central",
        tip: "O 'duende' de Lorca é um dos conceitos mais únicos da estética hispânica. É fundamental para entender a arte flamenca, a poesia lorquiana e a ideia hispânica de excelência artística.",
        headers: ["Aspecto", "Descrição"],
        rows: [
          ["O que é", "Força misteriosa, irracional, telúrica que aparece na arte em seu pico de intensidade"],
          ["O que não é", "Não é o anjo (perfeição técnica) nem a musa (inspiração racional)"],
          ["De onde vem", "Das entranhas da terra, da morte, da urgência existencial"],
          ["Como se convida", "Preparando as condições — mas o duende vem ou não vem"],
          ["Exemplos", "O cante jondo, o bailaor em transe, o torero no momento de risco"],
          ["Para o escritor", "Quando a escrita supera a técnica e toca algo além do planejado"],
        ]
      }
    ]
  },

  "ES-C1-U6": {
    title: "Preparação para C2 — O Falante Nativo",
    sections: [
      {
        title: "O que Separa o C1 do C2",
        tip: "A diferença entre C1 e C2 não é mais gramática nem vocabulário — é automatismo, intuição e nuance. O C2 pensa em espanhol; o C1 ainda passa pelo português às vezes.",
        headers: ["Dimensão", "C1", "C2"],
        rows: [
          ["Produção", "Fluente com algum esforço perceptível", "Fluente sem esforço perceptível"],
          ["Compreensão", "Entende quase tudo", "Entende tudo, incluindo implícitos e humor"],
          ["Vocabulário", "Rico e variado", "Matizes sutis entre sinônimos"],
          ["Gramática", "Domina estruturas complexas", "Gramática flexible, intuitiva"],
          ["Humor", "Entende com algum processamento", "Ri ao mesmo tempo que o nativo"],
          ["Sonhos", "Às vezes em espanhol", "Frequentemente em espanhol"],
        ]
      },
      {
        title: "🔑 Arcaísmos e Registros Históricos",
        tip: "O falante C1/C2 reconhece estruturas arcaicas e sabe em que contextos ainda sobrevivem: textos jurídicos, refrões, literatura clássica.",
        headers: ["Forma arcaica", "Forma moderna", "Contexto atual"],
        rows: [
          ["sea lo que fuere", "sea lo que sea", "Expressão fixada, ainda usada"],
          ["haber de + inf.", "tener que + inf.", "Registro formal elevado"],
          ["el que tuviere", "el que tenga", "Textos jurídicos formais"],
          ["antaño / otrora", "antes / antiguamente", "Registro literário"],
          ["acaecer", "ocurrir / suceder", "Registro literário arcaico"],
          ["el futuro de subjuntivo", "subjuntivo presente", "Textos legais e refrões"],
        ]
      }
    ]
  },

  // ─── C2 ───────────────────────────────────────────────────────────────────
  "ES-C2-U1": {
    title: "Domínio Absoluto da Língua",
    sections: [
      {
        title: "O Espanhol no Seu Nível Mais Profundo",
        tip: "No C2 a língua deixa de ser objeto de estudo e se torna instrumento de pensamento. As estruturas já são automáticas — o foco passa para a precisão, o estilo e a intuição.",
        headers: ["Nível", "Característica central", "Como se manifesta"],
        rows: [
          ["A1-A2", "Sobrevivência comunicativa", "Consegue se fazer entender"],
          ["B1-B2", "Autonomia comunicativa", "Consegue expressar ideias complexas"],
          ["C1", "Fluência com consciência", "Fala bem, ainda pensa nas escolhas"],
          ["C2", "Fluência automática", "A língua simplesmente ocorre"],
          ["Master", "A língua como condição", "Não fala espanhol: É espanhol também"],
        ]
      },
      {
        title: "🔑 Variação Diafásica — Todos os Registros",
        tip: "O falante C2 transita naturalmente entre todos os registros. A marca do C2 não é apenas usar bem o formal — é saber quando usar cada registro e fazê-lo sem esforço.",
        headers: ["Registro", "Características", "Exemplo"],
        rows: [
          ["Jurídico", "Futuro subj., nominalização máxima", "El que incumpliere..."],
          ["Académico", "Impessoal, citas, hedging", "Los resultados sugieren que..."],
          ["Literário", "Imagem, ritmo, densidade", "La tarde caía como un telón..."],
          ["Coloquial culto", "Natural, idiomático, culto", "No me cuadra lo que dices."],
          ["Coloquial informal", "Gírias, elipse, código", "Tío, es que flipas."],
        ]
      }
    ]
  },

  "ES-C2-U2": {
    title: "Escrita Criativa de Alto Nível",
    sections: [
      {
        title: "O Ensaio Pessoal — Gênero Supremo do C2",
        tip: "O ensaio pessoal (Montaigne, Unamuno, Ortega) é o gênero mais exigente em C2: exige voz própria, pensamento genuíno, estilo elaborado e honestidade intelectual radical.",
        headers: ["Elemento", "Descrição", "Como trabalhar"],
        rows: [
          ["Voz própria", "Reconhecível, não genérica", "Escrever muito, editar impiedosamente"],
          ["Pensamento genuíno", "Não clichê — real", "Questionar o óbvio antes de afirmá-lo"],
          ["Estilo elaborado", "Cada palavra justifica-se", "Reler em voz alta — ouvir o ritmo"],
          ["Honestidade intelectual", "Admitir dúvidas, contradições", "Não fingir certeza onde há dúvida"],
          ["Digresión productiva", "O desvio como descoberta", "Seguir os fios que surgem"],
        ]
      },
      {
        title: "🔑 Crítica Cultural — Vocabulário C2",
        tip: "Para escrever crítica cultural em espanhol de nível C2 é preciso um vocabulário conceitual preciso. Estes são os termos mais usados na crítica contemporânea.",
        headers: ["Termo", "Significado", "Uso crítico"],
        rows: [
          ["la ambigüedad calculada", "ambiguidade intencional e funcional", "La obra usa la ambigüedad calculada..."],
          ["el artificio", "recurso que pode parecer forçado", "No es un artificio gratuito sino..."],
          ["epistemológico", "relativo ao conhecimento e seus limites", "Una pregunta de naturaleza epistemológica"],
          ["la otredad", "a alteridade / o ser do outro", "Preservar la otredad en la traducción"],
          ["avant la lettre", "antes do tempo / antes do conceito existir", "Un metarrelato avant la lettre"],
          ["sin parangón", "sem igual / incomparável", "Una lucidez sin parangón"],
        ]
      }
    ]
  },

  "ES-C2-U3": {
    title: "Pensamento de Fronteira — Espanhol como Língua Global",
    sections: [
      {
        title: "Glotopolítica — As Línguas como Campo de Poder",
        tip: "A glotopolítica estuda como as decisões políticas e sociais moldam as línguas e como as línguas moldam as decisões políticas. É um campo fundamental para entender o espanhol como fenômeno global.",
        headers: ["Conceito", "Definição", "Aplicação ao espanhol"],
        rows: [
          ["hegemonía lingüística", "Domínio de uma língua sobre outras", "O espanhol sobre línguas indígenas"],
          ["planificación lingüística", "Políticas que regulam o uso das línguas", "RAE, políticas educativas"],
          ["diglosia", "Duas línguas com status diferentes", "Espanhol/catalão na Catalunha"],
          ["revitalización", "Esforços para recuperar línguas ameaçadas", "Políticas de defesa do guaraní"],
          ["imperialismo lingüístico", "Expansão de uma língua por poder político", "Expansão do inglês global"],
        ]
      },
      {
        title: "🔑 Neurolingüística — A Ciência do Bilinguismo",
        tip: "A neurociência do bilinguismo explica por que certas coisas são mais difíceis de aprender em L2 e como o cérebro bilíngue difere do monolíngue.",
        headers: ["Fenômeno", "Explicação", "Implicação prática"],
        rows: [
          ["Período crítico", "Até ~12 anos: aquisição é mais natural", "Depois: mais esforço, resultado possível"],
          ["Sotaque estrangeiro", "Circuitos fonológicos formados na infância", "Difícil de eliminar, não impossível"],
          ["Interferência", "A L1 ativa estruturas na L2", "O português interfere no espanhol"],
          ["Vantagem cognitiva", "Bilíngues têm melhor atenção e controle", "Bilinguismo protege contra demência"],
          ["Code-switching", "Alternância sistemática por bilíngues competentes", "Não é erro — é habilidade"],
        ]
      }
    ]
  },

  "ES-C2-U4": {
    title: "DELE C2 — Maestria Total",
    sections: [
      {
        title: "DELE C2 — O Exame da Maestria",
        tip: "O DELE C2 é o nível máximo do Instituto Cervantes. Avalia não só o domínio da língua mas a capacidade de usá-la com elegância, precisão e estilo em qualquer contexto.",
        headers: ["Prova", "Duração", "O que avalia", "Diferença do B2"],
        rows: [
          ["Comprensión lectora", "90 min", "Textos complexos e implícitos", "Textos acadêmicos e literários"],
          ["Comprensión auditiva", "50 min", "Discursos formais, sotaques variados", "Velocidade e implícitos"],
          ["Expresión escrita", "90 min", "Textos longos com voz própria", "Estilo, não só correção"],
          ["Expresión oral", "20 min", "Argumentação e debate sofisticado", "Fluência total, sem hesitação"],
        ]
      },
      {
        title: "🔑 Texto C2 — O Que Distingue a Maestria",
        tip: "Um texto C2 não é apenas correto e fluente — é preciso, elegante e tem voz própria. Estes são os critérios que distinguem um B2+ de um C2 genuíno.",
        headers: ["Critério C2", "Descrição", "Como demonstrar"],
        rows: [
          ["Precisión léxica", "Cada palavra exatamente a certa", "Evitar palavras genéricas: 'cosa', 'hacer'"],
          ["Variedad sintáctica", "Frases simples e complexas alternadas", "Variar comprimento e estrutura"],
          ["Voz propia", "Reconhecível, não genérica", "Posição clara e sustentada"],
          ["Sin tópicos sin elaborar", "Nunca clichês não desenvolvidos", "Cada ideia deve ter argumento"],
          ["Registro preciso", "Nunca mezclar sin consciência", "Formal ou informal — nunca acidentalmente"],
        ]
      }
    ]
  },

  "ES-C2-U5": {
    title: "Literatura Universal em Espanhol",
    sections: [
      {
        title: "Dom Quixote — A Origem de Tudo",
        tip: "Dom Quixote (1605/1615) é considerado o primeiro romance moderno. Sua importância vai além da literatura hispânica — definiu o que o romance ocidental seria nos 400 anos seguintes.",
        headers: ["Inovação", "O que Cervantes inventou", "Influência"],
        rows: [
          ["Metarrelato", "Romance consciente de ser ficção", "Todos os romances pós-modernos"],
          ["Narrador no fiable", "Narrador cuja versão é questionável", "Nabokov, Borges, Coetzee"],
          ["Anti-herói", "Protagonista ridículo mas amável", "Don Quijote → anti-heróis modernos"],
          ["Ironía narrativa", "O texto zomba do próprio texto", "Toda a ironia literária ocidental"],
          ["Realidade e ficção", "Os limites entre os dois são porosos", "Reality fiction, autoficção"],
        ]
      },
      {
        title: "🔑 O Boom Latinoamericano — Uma Revolução",
        tip: "O Boom (anos 60-70) foi a primeira vez que a literatura em espanhol se impôs globalmente com total autonomia estética. Entender o Boom é entender a modernidade literária hispânica.",
        headers: ["Autor", "País", "Obra central", "Inovação"],
        rows: [
          ["Gabriel García Márquez", "Colombia", "Cien años de soledad", "Realismo mágico"],
          ["Julio Cortázar", "Argentina", "Rayuela", "Romance que o leitor monta"],
          ["Mario Vargas Llosa", "Perú", "La ciudad y los perros", "Polifonía, tempo não linear"],
          ["Carlos Fuentes", "México", "La muerte de Artemio Cruz", "Narrador múltiplo (yo/tú/él)"],
          ["José Donoso", "Chile", "El obsceno pájaro de la noche", "Realismo grotesco"],
        ]
      }
    ]
  },

  "ES-C2-U6": {
    title: "Síntese Final — A Língua Como Vida",
    sections: [
      {
        title: "Do A1 ao C2 — O Mapa da Jornada",
        tip: "Olhar para trás da perspectiva do C2 permite entender o que cada nível representou e o que foi ganho em cada etapa.",
        headers: ["Nível", "O que foi ganho", "Marco afetivo"],
        rows: [
          ["A1", "Sobrevivência básica, confiança inicial", "Primeira conversa em espanhol"],
          ["A2", "Rotina, passado, futuro imediato", "Primeiro filme entendido"],
          ["B1", "Subjuntivo, autonomia, naturalidade inicial", "Primeira vez pensando em espanhol"],
          ["B2", "Precisão, argumentação, registros", "Primeiro texto formal elegante"],
          ["C1", "Automatismo, estilo, literatura", "Primeiro sonho em espanhol"],
          ["C2", "Maestria, voz própria, identidade", "O espanhol como parte de quem você é"],
        ]
      },
      {
        title: "🔑 O Que Vem Depois do C2",
        tip: "O C2 não é o fim — é o limiar. Depois do C2 a língua passa de objeto de estudo a meio de criação e de vida. A pergunta muda de 'o que aprendo?' para 'o que crio?'",
        headers: ["Depois do C2", "Descrição", "Como desenvolver"],
        rows: [
          ["Leitura autoral", "Ler para descobrir — não para aprender", "Escolher por interesse, não por nível"],
          ["Escrita criativa", "Criar na língua — não praticar", "Escrever com voz própria, projetos reais"],
          ["Comunidade", "Participar da cultura hispânica", "Projetos, viagens, amizades"],
          ["Ensinar", "Transmitir — e descobrir o que sabia", "Ensinar algo que domina"],
          ["Contribuir", "Deixar algo na língua", "Criar algo que não existia em espanhol"],
        ]
      }
    ]
  },

  // ─── MASTER ───────────────────────────────────────────────────────────────
  "ES-M-U1": {
    title: "Estilo Literario Propio — La Voz del Escritor",
    sections: [
      {
        title: "O Processo Criativo em Espanhol",
        tip: "No nível Master a pergunta não é mais 'estou correto?' mas 'estou sendo eu mesmo?' O processo criativo tem fases distintas que requerem atitudes diferentes.",
        headers: ["Fase", "Atitude necessária", "Armadilha a evitar"],
        rows: [
          ["Primer borrador", "Liberdade total, sem julgamento", "A autocensura precoce"],
          ["Reescrita", "Olhar crítico, matar os darlings", "O apego ao que foi difícil de escrever"],
          ["Edição", "Precisão cirúrgica, cada palavra", "Deixar o que está 'bom o suficiente'"],
          ["Distancia temporal", "Ler como leitor, não como autor", "Ler cedo demais"],
          ["Publicação", "Soltar — o texto pertence ao leitor", "Querer explicar o que quis dizer"],
        ]
      },
      {
        title: "🔑 Devorar e Digerir — Como Aprender com os Mestres",
        tip: "Todo escritor aprende devorando os mestres. Mas devorar sem digerir produz imitação. A digestão — transformar o que foi lido em algo próprio — é o processo central do desenvolvimento artístico.",
        headers: ["Estágio", "O que acontece", "Sinal de progresso"],
        rows: [
          ["Devorar", "Ler os mestres com obsessão e avidez", "Querer escrever como eles"],
          ["Imitar", "Escrever deliberadamente no estilo deles", "Conseguir imitar com fidelidade"],
          ["Digerir", "O estilo deles transforma-se no seu", "Não conseguir mais imitar — só ser você"],
          ["Voz própria", "Alguém lê sem assinatura e sabe que é você", "O reconhecimento sem identificação"],
        ]
      }
    ]
  },

  "ES-M-U2": {
    title: "Pensamento Original em Espanhol",
    sections: [
      {
        title: "Wittgenstein e os Limites da Linguagem",
        tip: "'Os limites da minha linguagem são os limites do meu mundo.' Para um poliglota, essa frase é verificável empiricamente: cada língua nova expande literalmente o mundo habitável.",
        headers: ["Conceito", "O que significa", "Para o poliglota"],
        rows: [
          ["Limites da linguagem", "O que não pode ser dito não pode ser pensado", "O espanhol abre mundos novos"],
          ["Jogo de linguagem", "Cada contexto tem suas próprias regras", "Cada registro é um jogo diferente"],
          ["Mostrar vs dizer", "O que se mostra não pode ser dito", "Algumas coisas só existem na literatura"],
          ["O silêncio", "'Sobre o que não se pode falar, deve-se calar'", "O não-dito também é espanhol"],
        ]
      },
      {
        title: "🔑 O Ensaísta como Filósofo — Inventar Conceitos",
        tip: "Os grandes ensaístas não descrevem o mundo — inventam conceitos para vê-lo de forma diferente. Ortega inventou 'la deshumanización del arte'. Unamuno, 'el sentimiento trágico de la vida'.",
        headers: ["Ensaísta", "Conceito inventado", "O que revelou"],
        rows: [
          ["Ortega y Gasset", "La deshumanización del arte", "A arte moderna afasta o humano para ser pura forma"],
          ["Unamuno", "El sentimiento trágico de la vida", "A tensão entre razão e fé como motor existencial"],
          ["María Zambrano", "La razón poética", "Uma razão que inclui o afeto e a imaginação"],
          ["Octavio Paz", "El laberinto de la soledad", "A identidade mexicana como máscara e mistério"],
          ["Você", "???", "O conceito que só você pode nomear"],
        ]
      }
    ]
  },

  "ES-M-U3": {
    title: "Espanhol nas Fronteiras — Contato, Crioulização e Futuro",
    sections: [
      {
        title: "O Espanhol no Século XXI",
        tip: "O espanhol do século XXI está sendo moldado por forças sem precedentes: a comunidade hispana nos EUA, o mundo digital, a IA e o contato intensificado entre variedades. Entender essas forças é entender o futuro do idioma.",
        headers: ["Força", "Impacto", "Exemplo concreto"],
        rows: [
          ["Hispanidad nos EUA", "Variante mais influente em 2050?", "+100M de hispanos em 2050"],
          ["Mundo digital", "Novos gêneros, registros híbridos", "Thread, podcast, newsletter"],
          ["Inteligência artificial", "IA gera espanhol correto mas sem duende", "ChatGPT em espanhol"],
          ["Variantes latinoam.", "Ganham prestígio global", "Música, séries, influencers"],
          ["Contato com inglês", "Anglicismos, code-switching", "Tuitear, googlear, selfie"],
        ]
      },
      {
        title: "🔑 O Portuñol como Caso de Estudo",
        tip: "O portuñol não é erro — é linguística viva. Como caso de contato entre duas línguas muito próximas, revela mecanismos gerais da evolução linguística.",
        headers: ["Tipo de portuñol", "Características", "Status"],
        rows: [
          ["Portuñol do aprendiz", "Mistura não sistemática, erros", "Fase de aprendizado a superar"],
          ["Portuñol riverense (UY/BR)", "Variedade sistematizada com regras próprias", "Variedade legítima de contato"],
          ["Espanglês (EUA)", "Code-switching sistemático", "Variedade de identidade bicultural"],
          ["Portuñol digital", "Mistura em chats, redes sociais", "Fenômeno emergente global"],
        ]
      }
    ]
  },

  "ES-M-U4": {
    title: "O Escritor Bilíngue — Legado e Responsabilidade",
    sections: [
      {
        title: "Escrever em L2 — Uma Tradição Nobre",
        tip: "A tradição de escrever em uma segunda língua é longa e gloriosa: Beckett em francês, Nabokov em inglês, Kundera em francês. Cada um encontrou na L2 algo que a L1 não oferecia.",
        headers: ["Escritor", "L1", "L2 escolhida", "Por quê a L2"],
        rows: [
          ["Samuel Beckett", "Inglês", "Francês", "Despojamento, estranhamento produtivo"],
          ["Vladimir Nabokov", "Russo", "Inglês", "Precisão, jogo verbal, novo público"],
          ["Milan Kundera", "Tcheco", "Francês", "Liberdade, distância do exílio"],
          ["Jhumpa Lahiri", "Bengali/Inglês", "Italiano", "Amor pela língua, identidade nova"],
          ["Você", "Português", "Espanhol", "???"],
        ]
      },
      {
        title: "🔑 A Tríade Master — Ler, Escrever, Pensar",
        tip: "No Master, as três atividades formam uma espiral ascendente: cada uma melhora as outras. Ler bem informa o escrever. Escrever bem afina o pensar. Pensar bem enriquece o ler.",
        headers: ["Atividade", "Como melhora as outras", "Prática recomendada"],
        rows: [
          ["Leer", "Expõe a modelos de pensamento e estilo", "Ler com lápis — marcar, anotar, questionar"],
          ["Escribir", "Força a articular o que se sabe", "Escrever sobre o que leu — síntese, análise"],
          ["Pensar", "Gera perguntas que guiam a leitura", "Manter diário de pensamentos em espanhol"],
        ]
      }
    ]
  },

  "ES-M-U5": {
    title: "Síntese Universal — O Espanhol Como Projeto de Vida",
    sections: [
      {
        title: "A Grande Obra — O Que Você Vai Criar",
        tip: "O Master não é o fim do aprendizado — é o começo da criação. Chegados aqui, a pergunta muda: não 'o que aprendo?' mas 'o que deixo?'",
        headers: ["Tipo de projeto", "Descrição", "Como começar"],
        rows: [
          ["Literário", "Conto, romance, ensaio, poema", "Escrever 200 palavras por dia"],
          ["Jornalístico", "Artigos, newsletter, podcast", "Escolher um tema, publicar regularmente"],
          ["Acadêmico", "Pesquisa, tese, artigo científico", "Colaborar com hispanohablantes"],
          ["Pedagógico", "Ensinar, criar materiais", "Transmitir o que aprendeu"],
          ["Cultural", "Traduzir, mediar, conectar culturas", "Pontes entre o Brasil e o mundo hispânico"],
        ]
      },
      {
        title: "🔑 Sonhar em Espanhol — O Último Indicador",
        tip: "Sonhar regularmente em espanhol é considerado o indicador mais profundo de internalização — o momento em que o idioma penetrou o inconsciente. Mas não é o único sinal de maestria.",
        headers: ["Indicador de maestria", "O que significa", "Quando aparece"],
        rows: [
          ["Pensar em espanhol sem passar pelo PT", "Processamento direto na L2", "C1-C2"],
          ["Rir junto com nativos", "Humor processado em tempo real", "C1-C2"],
          ["Sonhar em espanhol", "Inconsciente na L2", "C2-Master"],
          ["Escolher palavras em ES antes do PT", "L2 se torna dominante em certos contextos", "Master"],
          ["Não perceber que está em espanhol", "Invisibilidade da língua", "Master"],
        ]
      }
    ]
  },

  "ES-M-U6": {
    title: "Além do Master — Horizontes Infinitos",
    sections: [
      {
        title: "O Espanhol Como Companhia Para a Vida",
        tip: "Uma língua que se aprendeu profundamente nunca se esgota. Sempre há um livro novo, um sotaque novo, uma palavra que você não conhecia. Isso é a maior promessa do espanhol: nunca te entediarás.",
        headers: ["O que o espanhol tem para dar ainda", "Onde encontrar"],
        rows: [
          ["Literatura que você ainda não leu", "Autores de países que ainda não explorou"],
          ["Sotaques que ainda não domina", "Contato com comunidades específicas"],
          ["Registros que ainda está desenvolvendo", "Textos jurídicos, científicos, literários"],
          ["Amizades que ainda não fez", "Comunidades digitais e presenciais hispanas"],
          ["Projetos que ainda não criou", "A sua grande obra em espanhol"],
          ["Mundos que ainda não habitou", "Cada livro abre dez portas novas"],
        ]
      },
      {
        title: "🔑 Declaração Final — El Español Eres Tú",
        tip: "O espanhol que você fala não existia antes de você falar. É seu. E por isso é necessário — porque o mundo ficaria mais pobre sem a sua maneira específica de habitar este idioma.",
        headers: ["Verdade final", "O que significa para você"],
        rows: [
          ["Las lenguas no se poseen: se habitan", "Você não tem o espanhol — você vive dentro dele"],
          ["Lo que habitamos nos posee", "O espanhol também te formou e transformou"],
          ["El español que hablas no existía antes", "É único, irrepetível, necessário"],
          ["La lengua te irá eligiendo a ti", "A relação é mútua — bidirecional"],
          ["No tiene fin", "Sempre haverá mais — e isso é o mais belo"],
        ]
      }
    ]
  },

};
