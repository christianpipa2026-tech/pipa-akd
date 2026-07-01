export const CURRICULUM_ES_A1_PART1 = {
  units: [
    {
      id: "ES-A1-U1",
      title: "Saludos e Apresentações",
      description: "Aprenda a se apresentar e cumprimentar em espanhol",
      lessons: [
        {
          id: "ES-A1-U1-L1",
          title: "Hola — Cumprimentos Básicos",
          shadowing: "— ¡Hola! ¿Cómo estás?\n— Bien, gracias. ¿Y tú?\n— Muy bien, ¡gracias!\n— ¡Hasta luego!\n— ¡Adiós!",
          memoryPhrases: [
            "¡Hola! = Olá!",
            "¿Cómo estás? = Como você está?",
            "Bien, gracias = Bem, obrigado",
            "¿Y tú? = E você?",
            "¡Adiós! = Tchau / Adeus",
            "¡Hasta luego! = Até logo!"
          ],
          oralProduction: "Pratique em voz alta: cumprimente alguém, pergunte como ela está e despeça-se. Use pelo menos 4 expressões da lição.",
          exercises: [
            {
              id: "ES-A1-U1-L1-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Como se diz 'Olá!' em espanhol?",
              options: ["¡Adiós!", "¡Hola!", "¡Gracias!", "¡Hasta luego!"],
              answer: 1,
              explanation: "¡Hola! é o cumprimento básico em espanhol, equivalente a 'Olá!' em português."
            },
            {
              id: "ES-A1-U1-L1-E2",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "O que significa '¿Cómo estás?'?",
              options: ["Como se chama?", "Como você está?", "De onde você é?", "Quanto custa?"],
              answer: 1,
              explanation: "¿Cómo estás? = Como você está? É a pergunta mais comum para saber como alguém está."
            },
            {
              id: "ES-A1-U1-L1-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: '¡Bien, _____!' (Bem, obrigado!)",
              answer: ["gracias"],
              hint: "equivalente de 'obrigado' em espanhol",
              explanation: "Gracias = obrigado/obrigada. É uma das palavras mais importantes do espanhol."
            },
            {
              id: "ES-A1-U1-L1-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza para o espanhol: 'Até logo!'",
              answer: ["¡Hasta luego!"],
              explanation: "¡Hasta luego! = Até logo! Para despedidas quando você vai se ver em breve."
            },
            {
              id: "ES-A1-U1-L1-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva um diálogo de cumprimento completo em espanhol. Mínimo 4 falas.",
              prompt: "Inclua: saudação · como está · resposta · despedida",
              hint: "Use as frases da lição como modelo"
            }
          ]
        },
        {
          id: "ES-A1-U1-L2",
          title: "Me llamo — Apresentações Pessoais",
          shadowing: "— ¡Hola! Me llamo Carlos. ¿Y tú?\n— Hola, Carlos. Yo me llamo Ana.\n— Mucho gusto, Ana.\n— Igualmente, Carlos.\n— ¿De dónde eres?\n— Soy de Brasil. ¿Y tú?\n— Soy de México.",
          memoryPhrases: [
            "Me llamo... = Meu nome é... / Eu me chamo...",
            "¿Cómo te llamas? = Como você se chama?",
            "Mucho gusto = Muito prazer",
            "Igualmente = Igualmente",
            "¿De dónde eres? = De onde você é?",
            "Soy de... = Sou de..."
          ],
          oralProduction: "Apresente-se em voz alta em espanhol: seu nome, de onde você é, e cumprimente um interlocutor imaginário.",
          exercises: [
            {
              id: "ES-A1-U1-L2-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Como se diz 'Meu nome é...' em espanhol?",
              options: ["Yo soy...", "Me llamo...", "Tengo...", "Quiero..."],
              answer: 1,
              explanation: "Me llamo... = Meu nome é... / Eu me chamo... Literalmente significa 'Eu me chamo...'"
            },
            {
              id: "ES-A1-U1-L2-E2",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "O que significa 'Mucho gusto'?",
              options: ["Muito cansado", "Muito prazer", "Muito obrigado", "Muito bom"],
              answer: 1,
              explanation: "Mucho gusto = Muito prazer. É a expressão usada ao se apresentar a alguém."
            },
            {
              id: "ES-A1-U1-L2-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Soy _____ Brasil.' (Sou do Brasil.)",
              answer: ["de"],
              hint: "A preposição 'de' indica origem",
              explanation: "Soy de Brasil = Sou do Brasil. Em espanhol não se usa artigo: 'de Brasil' (não 'del Brasil')."
            },
            {
              id: "ES-A1-U1-L2-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: '¿Cómo te llamas?'",
              answer: ["Como você se chama?", "Qual é o seu nome?"],
              explanation: "¿Cómo te llamas? = Como você se chama? É a pergunta mais comum para saber o nome de alguém."
            },
            {
              id: "ES-A1-U1-L2-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva um diálogo de apresentação completo. Mínimo 6 falas.",
              prompt: "Inclua: nome · origem · mucho gusto · igualmente",
              hint: "Use o modelo do shadowing desta lição"
            }
          ]
        },
        {
          id: "ES-A1-U1-L3",
          title: "Números 1-20 e Perguntas Básicas",
          shadowing: "— ¿Cuántos años tienes?\n— Tengo veinticinco años.\n— ¿Cuál es tu número de teléfono?\n— Es el tres-dos-uno, cuatro-cinco-seis.\n— ¿Qué hora es?\n— Son las tres de la tarde.",
          memoryPhrases: [
            "uno, dos, tres, cuatro, cinco",
            "seis, siete, ocho, nueve, diez",
            "once, doce, trece, catorce, quince",
            "dieciséis, diecisiete, dieciocho, diecinueve, veinte",
            "¿Cuántos años tienes? = Quantos anos você tem?",
            "Tengo... años = Tenho... anos"
          ],
          oralProduction: "Diga em voz alta: sua idade em espanhol, seu número de telefone e a hora atual.",
          exercises: [
            {
              id: "ES-A1-U1-L3-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Como se diz 'Tenho 25 anos' em espanhol?",
              options: ["Soy 25 años", "Tengo veinticinco años", "Estoy 25 años", "He 25 años"],
              answer: 1,
              explanation: "Em espanhol se usa TENER para a idade: Tengo 25 años. Nunca 'soy' ou 'estoy' para idade."
            },
            {
              id: "ES-A1-U1-L3-E2",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Qual é o número 15 em espanhol?",
              options: ["Trece", "Catorce", "Quince", "Dieciséis"],
              answer: 2,
              explanation: "Quince = 15. Os números do 11 ao 15 são: once, doce, trece, catorce, quince."
            },
            {
              id: "ES-A1-U1-L3-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: '¿Cuántos _____ tienes?' (Quantos anos você tem?)",
              answer: ["años"],
              hint: "a palavra para 'anos' em espanhol",
              explanation: "Años = anos. Atenção: em espanhol é 'años' com til no n (ñ)."
            },
            {
              id: "ES-A1-U1-L3-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza para o espanhol: 'Tenho dezoito anos.'",
              answer: ["Tengo dieciocho años."],
              explanation: "Tengo dieciocho años. = Tenho dezoito anos. Use TENER + número + años."
            },
            {
              id: "ES-A1-U1-L3-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva 5 frases usando números em espanhol (sua idade, telefone, endereço, etc.)",
              prompt: "Inclua: tengo · número de telefone · endereço com número",
              hint: "Use os números da lição"
            }
          ]
        },
        {
          id: "ES-A1-U1-L4",
          title: "Ser vs Estar — A Grande Diferença",
          shadowing: "— ¿Cómo estás hoy?\n— Estoy cansado, pero estoy bien.\n— ¿Y cómo es tu ciudad?\n— Es muy bonita. Es grande y moderna.\n— ¿Dónde estás ahora?\n— Estoy en casa.",
          memoryPhrases: [
            "SER: identidade, origem, profissão, características permanentes",
            "ESTAR: estado temporário, localização, sentimentos",
            "Soy brasileño = Sou brasileiro (identidade)",
            "Estoy cansado = Estou cansado (estado temporário)",
            "Es bonita = É bonita (característica permanente)",
            "Está en casa = Está em casa (localização)"
          ],
          oralProduction: "Diga 3 frases com SER e 3 com ESTAR sobre você mesmo. Exemplo: Soy estudiante. Estoy en casa.",
          exercises: [
            {
              id: "ES-A1-U1-L4-E1",
              type: "multiple_choice",
              skill: "grammar",
              question: "Qual é correto: 'Yo ___ brasileño'?",
              options: ["estoy", "soy", "está", "es"],
              answer: 1,
              explanation: "SOY = use SER para nacionalidade/identidade. 'Soy brasileño' = Sou brasileiro."
            },
            {
              id: "ES-A1-U1-L4-E2",
              type: "multiple_choice",
              skill: "grammar",
              question: "Qual é correto: 'Ella ___ cansada hoy'?",
              options: ["es", "soy", "está", "somos"],
              answer: 2,
              explanation: "ESTÁ = use ESTAR para estado temporário. Estar cansada é um estado que muda."
            },
            {
              id: "ES-A1-U1-L4-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Madrid _____ en España.' (Madri fica na Espanha.)",
              answer: ["está"],
              hint: "localização = ESTAR",
              explanation: "ESTÁ = use ESTAR para localização. 'Madrid está en España.'"
            },
            {
              id: "ES-A1-U1-L4-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: 'Ela é médica e está em casa.'",
              answer: ["Ella es médica y está en casa."],
              explanation: "Es médica (profissão = SER) + está en casa (localização = ESTAR)."
            },
            {
              id: "ES-A1-U1-L4-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva um parágrafo sobre você usando SER e ESTAR corretamente. Mínimo 5 frases.",
              prompt: "Inclua: profissão ou ocupação (SER) · como você está hoje (ESTAR) · onde você está (ESTAR) · características suas (SER)",
              hint: "SER = permanente/identidade. ESTAR = temporário/localização"
            }
          ]
        },
        {
          id: "ES-A1-U1-L5",
          title: "Falsos Amigos — Cuidado com as Armadilhas!",
          shadowing: "— ¡Estoy embarazada! ¡Qué vergüenza!\n— No entiendo. ¿Por qué tienes vergüenza?\n— ¡Porque estoy embarazada frente a todos!\n— Ah, ¿estás... encinta?\n— ¡No! ¡Estoy avergonzada!",
          memoryPhrases: [
            "embarazada = grávida (NÃO 'envergonhada'!)",
            "borracha = bêbada (NÃO 'bolsa'!)",
            "polvo = pó/poeira (NÃO 'polvo'!)",
            "exquisito = delicioso (NÃO 'esquisito'!)",
            "vaso = copo (NÃO 'vaso'!)",
            "simpático = agradável (mesma ideia, mas cuidado!)"
          ],
          oralProduction: "Crie 3 frases usando falsos amigos corretamente. Exemplo: 'El pastel está exquisito.'",
          exercises: [
            {
              id: "ES-A1-U1-L5-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "O que significa 'embarazada' em espanhol?",
              options: ["Envergonhada", "Grávida", "Cansada", "Animada"],
              answer: 1,
              explanation: "CUIDADO! 'Embarazada' = grávida em espanhol. 'Envergonhada' = avergonzada."
            },
            {
              id: "ES-A1-U1-L5-E2",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Se alguém diz 'Este pastel está exquisito!', o que significa?",
              options: ["Este bolo está esquisito!", "Este bolo está delicioso!", "Este bolo está caro!", "Este bolo está pronto!"],
              answer: 1,
              explanation: "Exquisito = delicioso/delicado em espanhol. Não tem o sentido negativo de 'esquisito' em português!"
            },
            {
              id: "ES-A1-U1-L5-E3",
              type: "fill_blank",
              skill: "vocabulary",
              question: "Em espanhol, 'polvo' significa _____. (não é o animal marinho!)",
              answer: ["pó", "poeira"],
              hint: "é o que acumula nos móveis",
              explanation: "Polvo = pó/poeira em espanhol. O animal 'polvo' em espanhol é 'pulpo'."
            },
            {
              id: "ES-A1-U1-L5-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza corretamente: 'Ela está grávida e está envergonhada.'",
              answer: ["Ella está embarazada y está avergonzada."],
              explanation: "Embarazada = grávida. Avergonzada = envergonhada. Dois falsos amigos na mesma frase!"
            },
            {
              id: "ES-A1-U1-L5-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva 4 frases em espanhol usando palavras que são falsos amigos com o português.",
              prompt: "Inclua pelo menos: embarazada · exquisito · borracha ou polvo em contexto correto",
              hint: "Cuidado com o significado! Embarazada = grávida, exquisito = delicioso"
            }
          ]
        }
      ]
    },
    {
      id: "ES-A1-U2",
      title: "Família e Vida Cotidiana",
      description: "Vocabulário de família, casa e rotina diária",
      lessons: [
        {
          id: "ES-A1-U2-L1",
          title: "La Familia — A Família",
          shadowing: "— ¿Tienes hermanos?\n— Sí, tengo un hermano y una hermana.\n— ¿Y tus padres, dónde viven?\n— Mis padres viven en São Paulo.\n— ¿Estás casado?\n— No, estoy soltero.",
          memoryPhrases: [
            "el padre / la madre = o pai / a mãe",
            "el hermano / la hermana = o irmão / a irmã",
            "el hijo / la hija = o filho / a filha",
            "el esposo / la esposa = o marido / a esposa",
            "los padres = os pais (pai e mãe)",
            "los hijos = os filhos"
          ],
          oralProduction: "Descreva sua família em espanhol. Quantos irmãos você tem? Seus pais? Estado civil?",
          exercises: [
            {
              id: "ES-A1-U2-L1-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Como se diz 'irmã' em espanhol?",
              options: ["hermano", "hermana", "madre", "hija"],
              answer: 1,
              explanation: "Hermana = irmã. Hermano = irmão. A terminação -a indica feminino."
            },
            {
              id: "ES-A1-U2-L1-E2",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "O que significa 'los padres' em espanhol?",
              options: ["Os padres (religiosos)", "Os pais (pai e mãe)", "Os avós", "Os parentes"],
              answer: 1,
              explanation: "Los padres = os pais (pai e mãe). Atenção: em português 'padre' é religioso, em espanhol 'padre' é pai!"
            },
            {
              id: "ES-A1-U2-L1-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Tengo dos _____.' (Tenho dois filhos.)",
              answer: ["hijos"],
              hint: "filho em espanhol",
              explanation: "Hijo = filho. Hija = filha. Hijos (plural) pode incluir filhos e filhas."
            },
            {
              id: "ES-A1-U2-L1-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: 'Meu irmão é casado e tem uma filha.'",
              answer: ["Mi hermano está casado y tiene una hija."],
              explanation: "Casado usa ESTAR (estado civil temporário). Tiene = tem. Hija = filha."
            },
            {
              id: "ES-A1-U2-L1-E5",
              type: "free_writing",
              skill: "writing",
              question: "Descreva sua família em espanhol. Mínimo 6 frases.",
              prompt: "Inclua: quantos irmãos · seus pais · estado civil · filhos (se tiver)",
              hint: "Use tengo, mi hermano/hermana, mis padres, estoy casado/soltero"
            }
          ]
        },
        {
          id: "ES-A1-U2-L2",
          title: "La Casa — A Casa",
          shadowing: "— ¿Cómo es tu casa?\n— Es un apartamento pequeño pero bonito.\n— ¿Cuántos cuartos tiene?\n— Tiene dos cuartos, una sala, una cocina y un baño.\n— ¿Vives solo?\n— No, vivo con mi familia.",
          memoryPhrases: [
            "la sala = a sala",
            "la cocina = a cozinha",
            "el cuarto / la habitación = o quarto",
            "el baño = o banheiro",
            "el comedor = a sala de jantar",
            "pequeño/grande = pequeno/grande"
          ],
          oralProduction: "Descreva sua casa ou apartamento em espanhol. Quantos cômodos? Como é?",
          exercises: [
            {
              id: "ES-A1-U2-L2-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Como se diz 'cozinha' em espanhol?",
              options: ["cocina", "cuarto", "sala", "comedor"],
              answer: 0,
              explanation: "Cocina = cozinha. Cuidado: 'cocinar' = cozinhar em espanhol."
            },
            {
              id: "ES-A1-U2-L2-E2",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "O que significa 'el cuarto' em espanhol?",
              options: ["O quarto (4º)", "O quarto (dormitório)", "O banheiro", "A sala"],
              answer: 1,
              explanation: "El cuarto = o quarto (dormitório). Também pode ser usado para '1/4' (un cuarto = um quarto de alguma coisa)."
            },
            {
              id: "ES-A1-U2-L2-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Mi casa tiene tres _____.' (Minha casa tem três quartos.)",
              answer: ["cuartos", "habitaciones"],
              hint: "quarto em espanhol",
              explanation: "Cuartos ou habitaciones = quartos. Ambas as formas são corretas."
            },
            {
              id: "ES-A1-U2-L2-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: 'O apartamento é pequeno mas tem uma cozinha grande.'",
              answer: ["El apartamento es pequeño pero tiene una cocina grande."],
              explanation: "Pequeño = pequeno. Grande = grande. Pero = mas. Tiene = tem."
            },
            {
              id: "ES-A1-U2-L2-E5",
              type: "free_writing",
              skill: "writing",
              question: "Descreva sua casa em espanhol. Mínimo 6 frases.",
              prompt: "Inclua: tipo de moradia · quantos cômodos · como é · com quem você mora",
              hint: "Use es, tiene, vivo con, pequeño/grande"
            }
          ]
        },
        {
          id: "ES-A1-U2-L3",
          title: "Verbos Regulares — AR no Presente",
          shadowing: "— ¿Qué trabajas?\n— Trabajo en una oficina. ¿Y tú?\n— Yo estudio español en casa.\n— ¿Hablas bien?\n— Hablo un poco. Practico todos los días.\n— ¡Qué bien! ¿Con quién hablas?\n— Hablo con mi profesora.",
          memoryPhrases: [
            "hablar = falar (hablo, hablas, habla, hablamos, hablan)",
            "trabajar = trabalhar (trabajo, trabajas, trabaja...)",
            "estudiar = estudar (estudio, estudias, estudia...)",
            "practicar = praticar (practico, practicas, practica...)",
            "llegar = chegar (llego, llegas, llega...)",
            "escuchar = escutar/ouvir (escucho, escuchas...)"
          ],
          oralProduction: "Conjugue em voz alta 3 verbos -AR no presente para todas as pessoas (yo, tú, él, nosotros, ellos).",
          exercises: [
            {
              id: "ES-A1-U2-L3-E1",
              type: "multiple_choice",
              skill: "grammar",
              question: "Como se conjuga 'hablar' na primeira pessoa do singular (yo)?",
              options: ["hablas", "hablo", "habla", "hablamos"],
              answer: 1,
              explanation: "Yo hablo = Eu falo. Verbos -AR: yo -o, tú -as, él -a, nosotros -amos, ellos -an."
            },
            {
              id: "ES-A1-U2-L3-E2",
              type: "multiple_choice",
              skill: "grammar",
              question: "Como se diz 'Nós trabalhamos' em espanhol?",
              options: ["Nosotros trabajas", "Nosotros trabajan", "Nosotros trabajamos", "Nosotros trabajo"],
              answer: 2,
              explanation: "Trabajamos = trabalhamos. A terminação -AMOS é para nosotros em verbos -AR."
            },
            {
              id: "ES-A1-U2-L3-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Ella _____ español muy bien.' (Ela fala espanhol muito bem.)",
              answer: ["habla"],
              hint: "hablar conjugado na 3ª pessoa singular",
              explanation: "Habla = fala (ela/ele). Terceira pessoa singular de hablar: hab- + -a."
            },
            {
              id: "ES-A1-U2-L3-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: 'Eu estudo e pratico espanhol todos os dias.'",
              answer: ["Yo estudio y practico español todos los días."],
              explanation: "Estudio = estudo. Practico = pratico. Todos los días = todos os dias."
            },
            {
              id: "ES-A1-U2-L3-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva um parágrafo sobre sua rotina diária usando verbos -AR. Mínimo 6 frases.",
              prompt: "Inclua: trabajar · estudiar · hablar · practicar · llegar · escuchar",
              hint: "Conjugue cada verbo corretamente para a pessoa (yo, él, ella, nosotros)"
            }
          ]
        },
        {
          id: "ES-A1-U2-L4",
          title: "Verbos Regulares — ER e IR no Presente",
          shadowing: "— ¿Qué comes normalmente?\n— Como arroz, frijoles y carne. ¿Y tú?\n— Yo como mucha pasta. ¿Vives cerca de aquí?\n— Sí, vivo a cinco minutos.\n— ¿A qué hora sales?\n— Salgo a las ocho de la mañana.",
          memoryPhrases: [
            "comer = comer (como, comes, come, comemos, comen)",
            "beber = beber (bebo, bebes, bebe, bebemos, beben)",
            "vivir = morar/viver (vivo, vives, vive, vivimos, viven)",
            "escribir = escrever (escribo, escribes, escribe...)",
            "abrir = abrir (abro, abres, abre, abrimos, abren)",
            "decidir = decidir (decido, decides, decide...)"
          ],
          oralProduction: "Conjugue em voz alta: comer e vivir para todas as pessoas. Depois crie 2 frases com cada verbo.",
          exercises: [
            {
              id: "ES-A1-U2-L4-E1",
              type: "multiple_choice",
              skill: "grammar",
              question: "Como se conjuga 'vivir' para 'yo'?",
              options: ["vives", "vivimos", "vivo", "viven"],
              answer: 2,
              explanation: "Vivo = moro/vivo. Verbos -IR: yo -o, tú -es, él -e, nosotros -imos, ellos -en."
            },
            {
              id: "ES-A1-U2-L4-E2",
              type: "multiple_choice",
              skill: "grammar",
              question: "Como se diz 'Eles comem' em espanhol?",
              options: ["Ellos como", "Ellos come", "Ellos comen", "Ellos comes"],
              answer: 2,
              explanation: "Comen = comem. Terceira pessoa plural de comer: com- + -en."
            },
            {
              id: "ES-A1-U2-L4-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Nosotros _____ agua.' (Nós bebemos água.)",
              answer: ["bebemos"],
              hint: "beber conjugado na 1ª pessoa plural",
              explanation: "Bebemos = bebemos. Verbos -ER nosotros: beb- + -emos."
            },
            {
              id: "ES-A1-U2-L4-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: 'Eu moro no Brasil mas como comida mexicana.'",
              answer: ["Vivo en Brasil pero como comida mexicana."],
              explanation: "Vivo = moro. Como = como. Pero = mas. Comida mexicana = comida mexicana."
            },
            {
              id: "ES-A1-U2-L4-E5",
              type: "free_writing",
              skill: "writing",
              question: "Escreva sobre seus hábitos alimentares e onde você mora. Mínimo 6 frases.",
              prompt: "Inclua: vivir · comer · beber · escribir · abrir",
              hint: "Conjugue corretamente: vivo, como, bebo, escribo, abro"
            }
          ]
        },
        {
          id: "ES-A1-U2-L5",
          title: "Los Colores e Adjetivos",
          shadowing: "— ¿De qué color es tu coche?\n— Es rojo. ¿Y el tuyo?\n— El mío es azul, pero está viejo.\n— ¿Tienes ropa nueva?\n— Sí, tengo una camisa blanca y unos pantalones negros.",
          memoryPhrases: [
            "rojo/roja = vermelho/vermelha",
            "azul = azul",
            "verde = verde",
            "amarillo/amarilla = amarelo/amarela",
            "blanco/blanca = branco/branca",
            "negro/negra = preto/preta"
          ],
          oralProduction: "Descreva 5 objetos ao seu redor usando cores e adjetivos em espanhol.",
          exercises: [
            {
              id: "ES-A1-U2-L5-E1",
              type: "multiple_choice",
              skill: "vocabulary",
              question: "Como se diz 'vermelho' em espanhol?",
              options: ["rojo", "verde", "azul", "amarillo"],
              answer: 0,
              explanation: "Rojo = vermelho. Os adjetivos de cor concordam com o gênero: rojo (masc.) / roja (fem.)."
            },
            {
              id: "ES-A1-U2-L5-E2",
              type: "multiple_choice",
              skill: "grammar",
              question: "Como se diz 'A camisa branca'?",
              options: ["La camisa blanco", "La camisa blanca", "El camisa blanca", "La camiso blanca"],
              answer: 1,
              explanation: "La camisa blanca. Camisa é feminino, então o adjetivo também vai ao feminino: blanca."
            },
            {
              id: "ES-A1-U2-L5-E3",
              type: "fill_blank",
              skill: "grammar",
              question: "Complete: 'Tengo un coche _____.' (Tenho um carro preto.)",
              answer: ["negro"],
              hint: "preto em espanhol, masculino",
              explanation: "Negro = preto (masculino). Negra = preta (feminino). Coche é masculino, então negro."
            },
            {
              id: "ES-A1-U2-L5-E4",
              type: "translation",
              skill: "writing",
              question: "Traduza: 'Ela tem um vestido azul e sapatos vermelhos.'",
              answer: ["Ella tiene un vestido azul y zapatos rojos."],
              explanation: "Vestido = vestido. Azul não muda para feminino. Zapatos rojos = sapatos vermelhos."
            },
            {
              id: "ES-A1-U2-L5-E5",
              type: "free_writing",
              skill: "writing",
              question: "Descreva sua roupa atual e 3 objetos ao seu redor usando cores em espanhol.",
              prompt: "Inclua: pelo menos 5 cores diferentes · concordância de gênero",
              hint: "Rojo/roja, azul, verde, amarillo/amarilla, blanco/blanca, negro/negra"
            }
          ]
        }
      ]
    }
  ]
};
