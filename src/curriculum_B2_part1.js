// B2 PART 1 — Unidades 1 y 2
// 12 lecciones · 60 ejercicios

export const B2_U1_U2 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 1 — Subjuntivo Imperfeito e Futuro do Subjuntivo
  // ══════════════════════════════════════════════════════
  {
    id: "B2-U1",
    title: "Subjuntivo Imperfeito e Futuro do Subjuntivo",
    level: "B2",
    lessons: [

      {
        id: "B2-U1-L1",
        title: "Subjuntivo Imperfeito: formação e uso",
        objectives: ["Formar o subjuntivo imperfeito corretamente", "Usar em condicionais e hipóteses"],
        shadowingDialogue: {
          title: "E se você pudesse mudar algo?",
          lines: [
            { speaker: "Mariana", text: "Se eu pudesse voltar no tempo, estudaria medicina." },
            { speaker: "Rafael", text: "Eu queria que você fosse minha vizinha quando éramos crianças." },
            { speaker: "Mariana", text: "Imagina se a gente se conhecesse antes. Seria incrível!" },
            { speaker: "Rafael", text: "Tomara que as coisas fossem diferentes, mas a vida é assim." }
          ]
        },
        keyPhrases: [
          "Se eu pudesse — Se você fosse — Se nós tivéssemos",
          "Queria que você fizesse — Esperava que ele viesse",
          "Tomara que tudo fosse mais fácil",
          "Mesmo que ele soubesse, não diria nada"
        ],
        guidedProduction: [
          "Diga uma coisa que você faria se tivesse mais dinheiro.",
          "O que você queria que seu chefe fizesse diferente?",
          "Complete: 'Se eu soubesse a verdade, eu...'"
        ],
        grammar: {
          title: "Subjuntivo Imperfeito",
          explanation: "Formado a partir do pretérito perfeito: eles falaram → eu falasse. Usa-se em condicionais (se + imperfeito), expressando hipóteses no passado ou situações irreais no presente.",
          conjugation: "falar: falasse/falasses/falasse/falássemos/falassem | ser: fosse | ter: tivesse | poder: pudesse | querer: quisesse | fazer: fizesse | saber: soubesse | vir: viesse"
        },
        exercises: [
          { type: "fill", prompt: "Se eu ___ (ter) mais tempo, aprenderia japonês.", answer: "tivesse" },
          { type: "fill", prompt: "Ela queria que nós ___ (vir) à festa.", answer: "viéssemos" },
          { type: "transform", prompt: "Transforma para hipótese: 'Eu sei a resposta.'", answer: "Se eu soubesse a resposta..." },
          { type: "fill", prompt: "Tomara que ele ___ (ser) mais pontual.", answer: "fosse" },
          { type: "production", prompt: "Escreva uma frase com 'mesmo que + subjuntivo imperfeito'.", answer: "Mesmo que ele viesse, eu não abriria a porta." }
        ]
      },

      {
        id: "B2-U1-L2",
        title: "Futuro do Subjuntivo em contexto real",
        objectives: ["Distinguir futuro do subjuntivo de outras formas", "Usá-lo em condições reais futuras"],
        shadowingDialogue: {
          title: "Planos com condições",
          lines: [
            { speaker: "Thiago", text: "Quando você terminar o curso, o que vai fazer?" },
            { speaker: "Paula", text: "Se eu conseguir uma vaga em São Paulo, me mudo imediatamente." },
            { speaker: "Thiago", text: "Assim que você tiver notícias, me avisa, tá?" },
            { speaker: "Paula", text: "Claro! Se tudo correr bem, a gente comemora junto." }
          ]
        },
        keyPhrases: [
          "Quando você terminar — Assim que ele chegar",
          "Se conseguir — Se puder — Se quiser",
          "Enquanto eu estiver aqui — Onde quer que você for",
          "A menos que ele mude de ideia"
        ],
        guidedProduction: [
          "O que você vai fazer quando terminar seus estudos?",
          "Fale sobre um plano usando 'se + futuro do subjuntivo'.",
          "Use 'assim que' para descrever o que fará ao chegar em casa."
        ],
        grammar: {
          title: "Futuro do Subjuntivo",
          explanation: "Formado igual ao infinitivo pessoal na maioria dos verbos. Verbos irregulares seguem a raiz do pretérito: ser/ir → for, ter → tiver, fazer → fizer, poder → puder, querer → quiser. Usado com quando, se, assim que, enquanto, onde, caso.",
          conjugation: "falar: falar/falares/falar/falarmos/falarem | ser/ir: for/fores | ter: tiver | fazer: fizer | poder: puder | querer: quiser"
        },
        exercises: [
          { type: "fill", prompt: "Quando você ___ (chegar), me liga.", answer: "chegar" },
          { type: "fill", prompt: "Se ele ___ (querer) ajuda, é só pedir.", answer: "quiser" },
          { type: "fill", prompt: "Assim que nós ___ (ter) os resultados, avisamos.", answer: "tivermos" },
          { type: "choice", prompt: "A menos que ela ___ de ideia, o projeto será cancelado.", options: ["muda", "mudasse", "mude", "mudar"], answer: "mude" },
          { type: "production", prompt: "Escreva um plano futuro com 'quando + futuro do subjuntivo'.", answer: "Quando eu terminar o curso, vou viajar pelo Brasil." }
        ]
      },

      {
        id: "B2-U1-L3",
        title: "Período Hipotético: tipos e estruturas",
        objectives: ["Identificar e produzir os três tipos de período hipotético", "Usar corretamente futuro/imperfeito/mais-que-perfeito do subjuntivo"],
        shadowingDialogue: {
          title: "Situações reais, possíveis e impossíveis",
          lines: [
            { speaker: "Camila", text: "Se você estudar todos os dias, vai passar no concurso." },
            { speaker: "Diego", text: "Se eu estudasse mais quando jovem, seria médico hoje." },
            { speaker: "Camila", text: "Se tivéssemos saído mais cedo, não teríamos perdido o avião." },
            { speaker: "Diego", text: "Pois é. Hipóteses não mudam a realidade, né?" }
          ]
        },
        keyPhrases: [
          "Tipo 1 (real): Se + presente → futuro",
          "Tipo 2 (irreal presente): Se + imperfeito → condicional",
          "Tipo 3 (irreal passado): Se + mais-que-perfeito → condicional composto",
          "Deveria ter feito — Poderia ter sido — Teria acontecido"
        ],
        guidedProduction: [
          "Crie uma hipótese real sobre o futuro com 'se'.",
          "Diga algo que você faria diferente no passado.",
          "Use o tipo 3: 'Se eu tivesse... teria...'"
        ],
        grammar: {
          title: "Os 3 Tipos de Hipótese",
          explanation: "Tipo 1: condição real/provável (Se você vier, vamos sair). Tipo 2: condição irreal no presente (Se eu fosse rico, viajaria o mundo). Tipo 3: condição irreal no passado — impossível de mudar (Se eu tivesse estudado, teria passado).",
          conjugation: "Tipo 3: tivesse falado / tivesse sido / tivesse feito / tivesse vindo — condicional composto: teria falado / teria sido"
        },
        exercises: [
          { type: "classify", prompt: "Classifique: 'Se ela tivesse ligado, eu teria ido.' Tipo 1, 2 ou 3?", answer: "Tipo 3 — irreal passado" },
          { type: "fill", prompt: "Se eu ___ (ser) mais jovem, ___ (aprender) a tocar guitarra.", answer: "fosse / aprenderia" },
          { type: "fill", prompt: "Se você ___ (chegar) a tempo, não ___ (perder) a reunião.", answer: "tivesse chegado / teria perdido" },
          { type: "transform", prompt: "Transforma para tipo 2: 'Não tenho carro, não vou ao aeroporto.'", answer: "Se eu tivesse carro, iria ao aeroporto." },
          { type: "production", prompt: "Escreva uma frase usando o período hipotético tipo 3.", answer: "Se eu tivesse estudado mais, teria passado no vestibular." }
        ]
      },

      {
        id: "B2-U1-L4",
        title: "Concordância nominal e verbal avançada",
        objectives: ["Aplicar concordância nominal com palavras compostas e invariáveis", "Dominar casos especiais de concordância verbal"],
        shadowingDialogue: {
          title: "Revisão de texto",
          lines: [
            { speaker: "Editora", text: "Olha, você escreveu 'a gente foram'. Está errado." },
            { speaker: "Autor", text: "Sério? Achei que 'a gente' fosse plural." },
            { speaker: "Editora", text: "'A gente' concorda com o singular: 'a gente foi'." },
            { speaker: "Autor", text: "E 'mais de um aluno chegaram tarde' também está errado?" },
            { speaker: "Editora", text: "Pode usar o singular: 'mais de um aluno chegou tarde'." }
          ]
        },
        keyPhrases: [
          "A gente foi (não 'foram') — A gente está (não 'estão')",
          "Mais de um candidato chegou — Menos de dois alunos faltou",
          "Guarda-chuva é masculino — guarda-chuvas (pl.)",
          "Olhos azuis-claros — camisas verde-escuras"
        ],
        guidedProduction: [
          "Corrija: 'A gente foram ao cinema ontem.'",
          "Use 'mais de um' em uma frase correta.",
          "Forme o plural de 'couve-flor' e 'bem-estar'."
        ],
        grammar: {
          title: "Concordância: Casos Especiais",
          explanation: "A gente + singular. Mais de um + singular. Verbos impessoais (haver, fazer, ser) ficam no singular: 'Há muitos problemas'. Palavras compostas: guarda-chuva → guarda-chuvas; bem-estar → bens-estar. Cores compostas são invariáveis: verde-oliva, azul-marinho.",
          conjugation: "Impessoais: faz dois anos / há muitos anos / fazia tempo / houve problemas"
        },
        exercises: [
          { type: "correct", prompt: "Corrija: 'Haviam muitas pessoas na fila.'", answer: "Havia muitas pessoas na fila." },
          { type: "fill", prompt: "A gente não ___ (saber) o que fazer.", answer: "sabia" },
          { type: "fill", prompt: "Mais de um professor ___ (faltar) à reunião.", answer: "faltou" },
          { type: "plural", prompt: "Dê o plural de: guarda-chuva, bem-estar, couve-flor", answer: "guarda-chuvas, bens-estar, couves-flores" },
          { type: "production", prompt: "Escreva duas frases com casos especiais de concordância.", answer: "Há muitos problemas para resolver. A gente chegou atrasado." }
        ]
      },

      {
        id: "B2-U1-L5",
        title: "Revisão e produção integrada B2-U1",
        objectives: ["Integrar subjuntivo imperfeito, futuro do subjuntivo e hipóteses", "Produzir texto coeso com estruturas B2"],
        shadowingDialogue: {
          title: "Entrevista: vida e escolhas",
          lines: [
            { speaker: "Entrevistador", text: "Se você pudesse recomeçar, o que faria diferente?" },
            { speaker: "Entrevistada", text: "Se eu soubesse o que sei hoje, teria investido em tecnologia muito antes." },
            { speaker: "Entrevistador", text: "E quando se aposentar, quais são os seus planos?" },
            { speaker: "Entrevistada", text: "Assim que eu puder, vou viajar pelo Nordeste inteiro." }
          ]
        },
        keyPhrases: [
          "Se eu pudesse — Se eu soubesse — Se eu tivesse sabido",
          "Quando puder — Assim que terminar — A menos que mude",
          "Teria feito — Poderia ter sido — Deveria ter tentado",
          "A gente deveria — Há muitas opções — Mais de uma pessoa"
        ],
        guidedProduction: [
          "Fale sobre uma decisão passada usando hipótese tipo 3.",
          "Descreva um plano futuro com condições reais.",
          "Escreva um parágrafo sobre o que faria se fosse presidente do Brasil."
        ],
        grammar: {
          title: "Revisão B2-U1",
          explanation: "Consolida: subjuntivo imperfeito (fosse, tivesse, pudesse), futuro do subjuntivo (for, tiver, fizer), os 3 tipos de período hipotético, e concordância nominal/verbal avançada.",
          conjugation: "Quadro resumo: Tipo 1: se + presente/futuro | Tipo 2: se + imperfeito + condicional | Tipo 3: se + mais-que-perfeito + condicional composto"
        },
        exercises: [
          { type: "fill", prompt: "Se eu ___ (ter) estudado, ___ (passar) na prova.", answer: "tivesse / teria passado" },
          { type: "fill", prompt: "Quando você ___ (poder), me manda o arquivo.", answer: "puder" },
          { type: "correct", prompt: "Corrija: 'A gente foram ao mercado e haviam filas.'", answer: "A gente foi ao mercado e havia filas." },
          { type: "classify", prompt: "Classifique: 'Se você vier amanhã, vamos resolver isso.' Tipo?", answer: "Tipo 1 — condição real" },
          { type: "production", prompt: "Escreva um parágrafo com pelo menos 3 estruturas do subjuntivo.", answer: "Se eu pudesse voltar no tempo, teria estudado mais. Assim que eu terminar este curso, vou trabalhar com tradução. Se soubesse falar inglês melhor, teria mais oportunidades." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 2 — Voz Passiva Avançada e Discurso Indireto
  // ══════════════════════════════════════════════════════
  {
    id: "B2-U2",
    title: "Voz Passiva Avançada e Discurso Indireto",
    level: "B2",
    lessons: [

      {
        id: "B2-U2-L1",
        title: "Voz passiva: analítica, sintética e de estado",
        objectives: ["Distinguir os três tipos de voz passiva", "Usar a passiva sintética (se) corretamente"],
        shadowingDialogue: {
          title: "Notícias da semana",
          lines: [
            { speaker: "Âncora", text: "A nova lei foi aprovada pelo Congresso Nacional ontem." },
            { speaker: "Repórter", text: "Vendem-se casas na região central com desconto especial." },
            { speaker: "Âncora", text: "O sistema ficou sobrecarregado após o anúncio." },
            { speaker: "Repórter", text: "Diz-se que o preço do petróleo vai subir nos próximos meses." }
          ]
        },
        keyPhrases: [
          "Passiva analítica: ser + particípio (A carta foi escrita por ela)",
          "Passiva sintética: se + verbo (Vende-se apartamento / Vendem-se apartamentos)",
          "Passiva de estado: estar/ficar + particípio (A porta está fechada)",
          "Diz-se que / Sabe-se que / Considera-se que"
        ],
        guidedProduction: [
          "Transforme para passiva: 'O governo aprovou a lei.'",
          "Crie um anúncio usando passiva sintética.",
          "Use 'estar + particípio' para descrever um estado."
        ],
        grammar: {
          title: "Os 3 Tipos de Voz Passiva",
          explanation: "Analítica: sujeito + ser/estar + particípio + por + agente. Sintética: verbo + se (apassivador) — 'Alugam-se quartos'. Passiva de estado: estar/ficar + particípio (estado resultante) — 'A janela está quebrada' (resultado de uma ação). Atenção: vende-se (sing.) vs. vendem-se (pl.).",
          conjugation: "ser aprovado/aprovada/aprovados/aprovadas | estar fechado/fechada | vende-se / vendem-se | aluga-se / alugam-se"
        },
        exercises: [
          { type: "transform", prompt: "Transforme: 'Os alunos resolveram os problemas.'", answer: "Os problemas foram resolvidos pelos alunos." },
          { type: "fill", prompt: "___ (vender-se) ingressos na bilheteria.", answer: "Vendem-se" },
          { type: "choice", prompt: "A janela ___ quebrada depois da tempestade.", options: ["foi", "ficou", "foi ficada", "ser"], answer: "ficou" },
          { type: "fill", prompt: "___ (dizer-se) que o ator vai se aposentar.", answer: "Diz-se" },
          { type: "production", prompt: "Escreva um anúncio de aluguel usando passiva sintética.", answer: "Aluga-se apartamento de 2 quartos no centro. Aceitam-se animais. Vende-se também garagem separada." }
        ]
      },

      {
        id: "B2-U2-L2",
        title: "Discurso indireto: mudanças verbais e de tempo",
        objectives: ["Reproduzir falas no discurso indireto com todas as mudanças", "Identificar quando o tempo verbal muda ou permanece"],
        shadowingDialogue: {
          title: "Fofoca no escritório",
          lines: [
            { speaker: "Carla", text: "A Maria disse que estava com dor de cabeça e não poderia vir." },
            { speaker: "Fábio", text: "O diretor anunciou que a reunião seria transferida para sexta." },
            { speaker: "Carla", text: "E o Pedro perguntou se alguém havia terminado o relatório." },
            { speaker: "Fábio", text: "A secretária respondeu que ninguém tinha enviado ainda." }
          ]
        },
        keyPhrases: [
          "Ele disse que estava / seria / havia feito",
          "Ela perguntou se eu podia / queria / tinha terminado",
          "O chefe ordenou que todos chegassem cedo",
          "Eles anunciaram que o projeto fora aprovado"
        ],
        guidedProduction: [
          "Reporte: 'Eu não vou ao evento.' → Ela disse que...",
          "Reporte uma pergunta: 'Você já comeu?' → Ele perguntou se...",
          "Reporte uma ordem: 'Faça o relatório!' → A chefe ordenou que..."
        ],
        grammar: {
          title: "Discurso Indireto: Tabela de Mudanças",
          explanation: "Presente → imperfeito (disse que estava). Pretérito perfeito → mais-que-perfeito (disse que havia feito). Futuro → condicional (disse que viria). Imperativo → subjuntivo imperfeito (ordenou que fizesse). Pronomes: eu→ele/ela, você→ele/ela, aqui→ali/lá, hoje→naquele dia, amanhã→no dia seguinte.",
          conjugation: "Verbos de reporte: dizer / falar / afirmar / declarar / perguntar / responder / ordenar / pedir / sugerir / avisar"
        },
        exercises: [
          { type: "transform", prompt: "Reporte: 'Eu estou cansado.' → Ele disse que...", answer: "Ele disse que estava cansado." },
          { type: "transform", prompt: "Reporte: 'Você pode me ajudar?' → Ela perguntou se...", answer: "Ela perguntou se eu podia ajudá-la." },
          { type: "transform", prompt: "Reporte: 'Venha amanhã!' → O chefe ordenou que...", answer: "O chefe ordenou que eu fosse no dia seguinte." },
          { type: "fill", prompt: "Ela anunciou que a empresa ___ (abrir) uma nova filial.", answer: "abriria" },
          { type: "production", prompt: "Reporte um diálogo curto de 3 linhas no discurso indireto.", answer: "Ele disse que estava atrasado. Ela perguntou se ele tinha esquecido da reunião. Ele respondeu que havia esquecido o horário." }
        ]
      },

      {
        id: "B2-U2-L3",
        title: "Coesão textual: conectivos avançados",
        objectives: ["Usar conectivos de causa, concessão, condição e conclusão em nível B2", "Produzir textos coesos e sofisticados"],
        shadowingDialogue: {
          title: "Debate acadêmico",
          lines: [
            { speaker: "Beatriz", text: "Embora os dados sejam promissores, ainda há muito a ser investigado." },
            { speaker: "Leandro", text: "Visto que o orçamento foi cortado, precisamos priorizar." },
            { speaker: "Beatriz", text: "Contanto que mantenhamos o rigor científico, podemos avançar." },
            { speaker: "Leandro", text: "Por conseguinte, proponho que revisemos a metodologia." }
          ]
        },
        keyPhrases: [
          "Concessão: embora, ainda que, apesar de (que), mesmo que",
          "Causa/explicação: visto que, dado que, tendo em vista que, porquanto",
          "Condição: contanto que, desde que, a menos que, caso",
          "Conclusão: portanto, logo, por conseguinte, assim sendo, destarte"
        ],
        guidedProduction: [
          "Use 'embora' para expressar uma concessão.",
          "Conecte duas ideias com 'visto que' ou 'dado que'.",
          "Escreva uma conclusão usando 'por conseguinte' ou 'portanto'."
        ],
        grammar: {
          title: "Conectivos B2: Uso e Nuances",
          explanation: "Concessão + subjuntivo: embora venha, ainda que precise, mesmo que queira. Causa formal: visto que está (indicativo), dado que há. Condição + subjuntivo: contanto que venha, desde que faça, caso precise. Conclusão: portanto/logo (mais formais); por conseguinte (muito formal). Atenção: 'apesar de' + infinitivo, 'apesar de que' + subjuntivo.",
          conjugation: "embora + subjuntivo | visto que + indicativo | contanto que + subjuntivo | a menos que + subjuntivo | porquanto + indicativo"
        },
        exercises: [
          { type: "fill", prompt: "___ o projeto seja difícil, vamos tentar.", answer: "Embora" },
          { type: "fill", prompt: "___ que os recursos são limitados, devemos ser criativos.", answer: "Visto" },
          { type: "fill", prompt: "Pode participar, ___ que respeite as regras.", answer: "contanto" },
          { type: "rewrite", prompt: "Reescreva de forma mais formal: 'Apesar de ter estudado, não passei.'", answer: "Embora tivesse estudado, não passei." },
          { type: "production", prompt: "Escreva um parágrafo argumentativo usando ao menos 3 conectivos avançados.", answer: "Embora os resultados sejam positivos, ainda há desafios. Visto que o orçamento é limitado, precisamos priorizar ações. Contanto que mantenhamos o foco, alcançaremos os objetivos. Por conseguinte, é fundamental revisar o planejamento." }
        ]
      },

      {
        id: "B2-U2-L4",
        title: "Texto dissertativo-argumentativo nível B2",
        objectives: ["Estruturar um texto argumentativo completo", "Usar evidências, exemplos e conclusões sofisticadas"],
        shadowingDialogue: {
          title: "Modelo de redação",
          lines: [
            { speaker: "Professora", text: "Um bom texto tem tese clara, argumentos desenvolvidos e conclusão propositiva." },
            { speaker: "Aluno", text: "Então devo começar apresentando minha posição?" },
            { speaker: "Professora", text: "Exatamente. Em seguida, desenvolva com dados, exemplos e citações." },
            { speaker: "Aluno", text: "E a conclusão deve retomar a tese e propor algo?" },
            { speaker: "Professora", text: "Perfeito. No ENEM, também inclua uma proposta de intervenção." }
          ]
        },
        keyPhrases: [
          "Introdução: contextualização + tese",
          "Desenvolvimento: argumento + evidência + exemplo",
          "Conclusão: retomada + proposta de intervenção",
          "Sabe-se que / É notório que / Conforme dados do IBGE / Segundo estudiosos"
        ],
        guidedProduction: [
          "Escreva uma tese sobre o impacto das redes sociais na saúde mental.",
          "Desenvolva um argumento com dados e exemplo.",
          "Crie uma conclusão com proposta de intervenção."
        ],
        grammar: {
          title: "Estrutura do Texto Dissertativo",
          explanation: "Introdução (3-5 linhas): apresentar tema + tese. Desenvolvimento (2 parágrafos): cada um com 1 argumento + 1 evidência + 1 exemplo. Conclusão: retomar tese + proposta concreta (quem faz, como faz, com que fim). Evitar: linguagem coloquial, primeira pessoa do singular, frases nominais soltas.",
          conjugation: "Verbos impessoais formais: é preciso que / faz-se necessário que / torna-se imprescindível / cabe ao governo / incumbe à sociedade"
        },
        exercises: [
          { type: "production", prompt: "Escreva a introdução sobre 'O impacto da tecnologia na educação'.", answer: "Na era digital, a tecnologia transformou profundamente os métodos educacionais. Embora ofereça inúmeras possibilidades, seu uso indiscriminado pode comprometer o processo de aprendizagem, tornando urgente uma reflexão sobre como integrá-la de forma eficaz." },
          { type: "production", prompt: "Escreva um parágrafo de desenvolvimento com argumento e evidência.", answer: "Um dos principais impactos é o acesso à informação. Conforme dados da UNESCO, 63% dos estudantes em países em desenvolvimento têm mais acesso a conteúdos educativos por meio de dispositivos móveis. Isso demonstra que a tecnologia pode democratizar o ensino quando bem utilizada." },
          { type: "identify", prompt: "Identifique o conectivo de conclusão: 'Logo, é fundamental que o governo invista...'", answer: "'Logo' — conectivo de conclusão/consequência" },
          { type: "rewrite", prompt: "Formalize: 'A gente precisa fazer algo sobre o problema.'", answer: "Faz-se necessário que a sociedade adote medidas concretas para enfrentar tal problemática." },
          { type: "production", prompt: "Escreva uma proposta de intervenção para o tema tecnologia e educação.", answer: "Cabe ao Ministério da Educação, em parceria com municípios, implementar políticas de inclusão digital que capacitem professores e forneçam infraestrutura tecnológica às escolas públicas, com o intuito de garantir um ensino de qualidade para todos." }
        ]
      },

      {
        id: "B2-U2-L5",
        title: "Revisão e produção integrada B2-U2",
        objectives: ["Integrar voz passiva, discurso indireto e conectivos", "Produzir texto jornalístico ou acadêmico em nível B2"],
        shadowingDialogue: {
          title: "Noticiário formal",
          lines: [
            { speaker: "Apresentador", text: "Foi anunciado pelo governo que novas medidas econômicas serão implementadas." },
            { speaker: "Repórter", text: "O ministro declarou que os impostos seriam revistos ainda este semestre." },
            { speaker: "Apresentador", text: "Embora a inflação tenha recuado, ainda há preocupação com o desemprego." },
            { speaker: "Repórter", text: "Por conseguinte, espera-se que o Banco Central mantenha os juros estáveis." }
          ]
        },
        keyPhrases: [
          "Foi anunciado / Foram aprovadas / Diz-se que / Sabe-se que",
          "Declarou que seria / Afirmou que estava / Perguntou se havia",
          "Embora / Visto que / Contanto que / Por conseguinte",
          "Faz-se necessário / Incumbe ao governo / Cabe à sociedade"
        ],
        guidedProduction: [
          "Reporte uma notícia usando voz passiva e discurso indireto.",
          "Escreva um parágrafo jornalístico com conectivos formais.",
          "Produza um texto curto (150 palavras) sobre um tema social."
        ],
        grammar: {
          title: "Revisão B2-U2",
          explanation: "Consolida: voz passiva (analítica, sintética, de estado), discurso indireto com todas as mudanças de tempo, conectivos avançados e estrutura do texto dissertativo.",
          conjugation: "Quadro: passiva analítica (ser + part.) | passiva sintética (se + verbo) | passiva de estado (estar/ficar + part.) | discurso indireto: presente→imperf., perf.→mais-q-perf., fut.→cond."
        },
        exercises: [
          { type: "transform", prompt: "Transforme para voz passiva analítica: 'O presidente assinou o decreto.'", answer: "O decreto foi assinado pelo presidente." },
          { type: "transform", prompt: "Reporte: 'Vou aumentar os salários.' → O diretor prometeu que...", answer: "O diretor prometeu que aumentaria os salários." },
          { type: "fill", prompt: "___ (alugar-se) salas comerciais no edifício central.", answer: "Alugam-se" },
          { type: "rewrite", prompt: "Formalize com conectivo de concessão: 'Tem problemas mas vai bem.'", answer: "Embora enfrente desafios, o projeto apresenta resultados positivos." },
          { type: "production", prompt: "Escreva um parágrafo de notícia com passiva, discurso indireto e conectivos.", answer: "Foi confirmado pela assessoria que o evento será realizado em julho. O organizador declarou que os ingressos seriam disponibilizados ainda esta semana. Embora haja poucos patrocinadores, afirmou que o espetáculo não seria cancelado. Por conseguinte, espera-se grande público." }
        ]
      }
    ]
  }
];
