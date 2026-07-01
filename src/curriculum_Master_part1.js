// MASTER PART 1 — Unidades 1 y 2
// 12 lecciones · 60 ejercicios

export const MASTER_U1_U2 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 1 — Domínio Absoluto: Língua como Arte
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U1",
    title: "Domínio Absoluto: Língua como Arte e Pensamento",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U1-L1",
        title: "A língua além da gramática: intuição e estilo",
        objectives: ["Usar o português com intuição de falante nativo", "Desenvolver sensibilidade para nuances que nenhum manual ensina"],
        shadowingDialogue: {
          title: "Quando a língua vira intuição",
          lines: [
            { speaker: "Mestra", text: "Há um momento em que você para de aprender português e começa a sentir português. Você já chegou lá?" },
            { speaker: "Aluno", text: "Às vezes sim. Quando escrevo e uma frase soa errada antes de eu saber por quê." },
            { speaker: "Mestra", text: "Isso é a intuição linguística. O seu ouvido interno chegou onde o manual não chega." },
            { speaker: "Aluno", text: "Mas ainda erro coisas que um nativo nunca erraria." },
            { speaker: "Mestra", text: "Claro. A diferença entre C2 e Master não é ausência de erro — é a qualidade do que você faz entre os erros." }
          ]
        },
        keyPhrases: [
          "Intuição linguística: saber que está errado antes de saber por quê",
          "Ouvido interno: o gramático inconsciente do falante avançado",
          "Estilo como assinatura: o que só você diria, do jeito que só você diz",
          "Master: a língua como instrumento de pensamento, não de comunicação apenas"
        ],
        guidedProduction: [
          "Descreva em português o que significa para você 'dominar uma língua'.",
          "Qual é a frase em português que você nunca poderia ter escrito quando começou?",
          "O que o português ainda te surpreende? O que ainda te escapa?"
        ],
        grammar: {
          title: "O Nível Master: Além do C2",
          explanation: "O nível Master não é sobre regras novas — é sobre o aprofundamento infinito do que já existe. Características: sensibilidade a variação estilística mínima (a diferença entre 'disse' e 'afirmou' num contexto específico), capacidade de produzir e analisar textos literários com olhar crítico sofisticado, domínio de registros históricos (português arcaico, clássico), competência metalinguística plena (falar sobre a língua com a precisão de um linguista). O Master não tem fim: é o começo do aprendizado que nunca termina.",
          conjugation: "Marcadores do Master: 'há algo nessa frase que...' / 'o ritmo aqui pede...' / 'essa palavra carrega uma conotação que...' / 'no contexto cultural brasileiro, isso ressoa como...' / 'a forma serve o conteúdo porque...'"
        },
        exercises: [
          { type: "production", prompt: "Escreva em 5 frases o que significa para você dominar o português.", answer: "Dominar o português, descobri, não é chegar a um ponto fixo — é desenvolver a capacidade de perceber o quanto ainda não se sabe. É quando você lê Guimarães Rosa e, em vez de se perguntar o que as palavras significam, você se pergunta por que ele escolheu aquela palavra e não esta. É quando você sente que uma frase está errada antes de conseguir explicar por quê. É quando o português começa a pensar por você — quando certas ideias se formam primeiro nessa língua, não na sua. É, talvez, quando você percebe que 'dominar' era a palavra errada: a língua não se domina, se habita." },
          { type: "analysis", prompt: "Qual é a diferença entre 'disse', 'afirmou', 'declarou', 'pontuou' e 'asseverou' numa narrativa?", answer: "'Disse' é neutro — o mais invisível dos verbos de elocução, adequado quando o foco é o conteúdo, não a forma de dizer. 'Afirmou' implica convicção — quem afirma está seguro do que diz. 'Declarou' tem conotação formal ou pública — se usa em jornalismo e contextos oficiais. 'Pontuou' é mais recente e jornalístico — sugere que o falante destacou algo específico num fluxo maior. 'Asseverou' é o mais enfático — afirmação com autoridade absoluta, frequentemente em contexto acadêmico ou jurídico. A escolha entre eles não é arbitrária: em Master, cada verbo de elocução é uma decisão estilística com consequências para o tom e o registro." },
          { type: "production", prompt: "Escreva um parágrafo sobre uma cidade usando apenas palavras que você não conhecia quando começou a aprender português.", answer: "[Resposta pessoal — modelo:] 'A cidade se espraia pelos morros como mancha de tinta em papel úmido, as favelas agarradas aos contrafortes, o asfalto ondulando entre elas e os arranha-céus que viram as costas para o mangue. Há uma luz crepuscular no Rio que não existe em nenhum outro lugar — morna, dourada, quase cúmplice das contradições que ilumina.'" },
          { type: "analysis", prompt: "Por que 'mas' e 'porém' não são intercambiáveis em todos os contextos?", answer: "'Mas' é a conjunção adversativa mais versátil e informal — funciona em qualquer registro, do mais coloquial ao literário. 'Porém' é mais formal e tem peso semântico levemente diferente: enquanto 'mas' introduz simples contradição ou ressalva, 'porém' tende a enfatizar a adversidade com mais solenidade. Em prosa literária, 'porém' no início de oração cria pausa mais marcada e efeito de conclusão mais definitivo. 'Mas' no início é mais conversacional. 'Contudo', 'todavia' e 'entretanto' têm graus semelhantes de formalidade entre si, sendo 'contudo' ligeiramente mais conciso e cortante." },
          { type: "production", prompt: "Escreva 3 versões da mesma frase usando conectivos adversativos diferentes — e explique a diferença de efeito.", answer: "'Ela sabia que estava errada, mas não conseguia admitir.' — coloquial, fluxo contínuo, sem drama.\n\n'Ela sabia que estava errada; porém, não conseguia admitir.' — ponto e vírgula cria pausa; 'porém' dá peso solene à contradição.\n\n'Ela sabia que estava errada. Não conseguia, contudo, admitir.' — ponto cria ruptura; 'contudo' no interior da frase, após vírgula, cria efeito de ironia fria e distância narrativa." }
        ]
      },
      {
        id: "MASTER-U1-L2",
        title: "Português arcaico e clássico: raízes da língua",
        objectives: ["Ler e compreender português arcaico e clássico", "Identificar a evolução da língua do séc. XIII ao XX"],
        shadowingDialogue: {
          title: "A língua que veio antes",
          lines: [
            { speaker: "Medievalista", text: "'Ai eu coitada! Como vivo em gran cuidado / por meu amigo que hei alongado!' — século XIII. Consegue entender?" },
            { speaker: "Aluno", text: "Quase tudo! 'Coitada' é sofrida, 'cuidado' aqui é sofrimento, 'hei alongado' é tenho afastado." },
            { speaker: "Medievalista", text: "Excelente! O galego-português medieval não está tão longe quanto parece. As estruturas básicas persistem." },
            { speaker: "Aluno", text: "E o clássico do séc. XVI — Camões? Esse é mais difícil." },
            { speaker: "Medievalista", text: "Porque Camões já incorporou o humanismo renascentista — vocabulário latino mais denso, sintaxe mais elaborada." }
          ]
        },
        keyPhrases: [
          "Galego-português (séc. IX-XIV): lírica trovadoresca, cantigas de amor e amigo",
          "Português arcaico (séc. XIV-XVI): Fernão Lopes, Gil Vicente",
          "Português clássico (séc. XVI-XVIII): Camões, Padre Vieira",
          "Arcaísmos vivos no PB: 'outrossim', 'destarte', 'malgrado', 'talqualmente'"
        ],
        guidedProduction: [
          "Leia este trecho de Camões e interprete: 'Amor é fogo que arde sem se ver'.",
          "Que palavras do português moderno são arcaísmos que sobreviveram?",
          "Como o contato com o árabe mudou o léxico do português medieval?"
        ],
        grammar: {
          title: "Evolução Histórica do Português C2→Master",
          explanation: "Galego-português (séc. IX-XIV): vogais nasais mais marcadas, artigo definido 'lo/la', infinitivo pessoal já presente, formas verbais como 'hei' (tenho). Português arcaico (XIV-XVI): perda de 'lo/la', entrada de italianismos e latinismos, desenvolvimento da mesóclise. Clássico (XVI-XVIII): Camões usa 'vós' como tratamento, futuro do conjuntivo abundante, hipérbato constante. Moderno (XVIII-hoje): você substitui vós, simplificação de certas construções, entrada de galicismos e anglicismos.",
          conjugation: "Arcaísmos em uso formal: outrossim (além disso), destarte (deste modo), malgrado (apesar de), talqualmente (exatamente assim), mercê (graça/favor), doravante (de agora em diante), faz mister (é necessário)"
        },
        exercises: [
          { type: "analysis", prompt: "Interprete e modernize: 'Amor é fogo que arde sem se ver; / é ferida que dói e não se sente' (Camões).", answer: "Interpretação: Camões define o amor através de oxímoros — contradições aparentes que revelam sua natureza paradoxal. 'Fogo que arde sem se ver' = paixão invisível mas consumidora. 'Ferida que dói e não se sente' = dor que não se reconhece como tal. É uma definição negativa: o amor é aquilo que contradiz as leis normais da experiência. Modernização: 'O amor é uma chama que queima sem aparecer; é uma ferida que dói sem que a gente perceba a dor.' A modernização perde o ritmo decassílabo e a densidade semântica — prova de que a forma e o conteúdo são inseparáveis." },
          { type: "production", prompt: "Identifique 5 arcaísmos que ainda aparecem em textos formais ou literários brasileiros e explique cada um.", answer: "1) 'Outrossim': arcaísmo que significa 'além disso, também' — sobrevive em peças jurídicas e textos formais. 2) 'Doravante': 'de agora em diante' — frequente em contratos e documentos legais. 3) 'Malgrado': 'apesar de, a despeito de' — de uso literário, mais elegante que 'apesar'. 4) 'Faz mister': 'é necessário, faz-se necessário' — sobrevive em textos jurídicos e jornalismo formal. 5) 'Destarte': 'deste modo, assim sendo' — raro mas presente em textos acadêmicos muito formais." },
          { type: "analysis", prompt: "O que é a 'mesóclise' historicamente e por que persiste no português formal?", answer: "A mesóclise — inserção do pronome entre o radical verbal e a desinência no futuro (dir-lhe-ei, dar-me-ão) — é uma construção surgida no português arcaico quando os pronomes átonos se encurvaram aos infinitivos com aglutinação com o auxiliar 'hei/hás/há' (dizer + hei = direi, com pronome intercalado: dir-lhe-ei). No português do Brasil, a mesóclise é praticamente extinta na oralidade e raramente aparece na escrita contemporânea. Persiste em textos muito formais (discursos, documentos legais, literatura conservadora) como marca de erudição ou de respeito à norma culta histórica. Em C2, é opcional; no Master, o falante reconhece seu uso e contexto." },
          { type: "production", prompt: "Escreva um parágrafo no estilo do português clássico (séc. XVI-XVII) sobre um tema contemporâneo.", answer: "Ora, acerca desta maravilha que os modernos chamam de rede social — e bem seria chamá-la de rede, pois que apanha e enreda quanto nela se lança — cumpre dizer que não há novidade debaixo do sol, posto que os vícios que nela florescem já floresciam nas cortes e praças de outrora. A vaidade que hoje se nutre de curtidas nutriam-se de aplausos e reverências; a maledicência que circula em mensagens circulava em cartas e murmurinhos de antecâmara. Muda o suporte; a natureza humana, essa, mantém-se fiel a si mesma com uma constância que faria inveja a qualquer virtude." },
          { type: "analysis", prompt: "Por que ler literatura do séc. XIX (Machado de Assis) ainda é relativamente fácil para um C2, mas ler Camões exige treino específico?", answer: "A distância linguística entre o português contemporâneo e o de Machado de Assis (séc. XIX) é principalmente lexical e de registro: o vocabulário é mais formal e há alguns arcaísmos, mas a sintaxe é reconhecível e a estrutura gramatical essencialmente a mesma. Entre o português contemporâneo e o de Camões (séc. XVI), a distância é maior em múltiplas dimensões: léxico com italianismos e latinismos menos assimilados, sintaxe com hipérbatos intensos e ordem de palavras muito diferente da atual, formas verbais arcaicas ('vós' como tratamento padrão, futuro do subjuntivo mais frequente), e referências culturais do humanismo renascentista que exigem contexto histórico. Ler Camões é, em parte, aprender uma fase diferente do mesmo idioma." }
        ]
      },
      {
        id: "MASTER-U1-L3",
        title: "Metalinguagem avançada: falar sobre a língua em português",
        objectives: ["Analisar a língua portuguesa com precisão linguística de nível Master", "Usar terminologia linguística com rigor e fluidez"],
        shadowingDialogue: {
          title: "A língua falando de si mesma",
          lines: [
            { speaker: "Linguista", text: "O que você acha mais fascinante na fonologia do português brasileiro?" },
            { speaker: "Aluno", text: "A vogal átona final — como 'leite' vira 'leitchi' em certas regiões, por palatalização." },
            { speaker: "Linguista", text: "Excelente observação. E isso varia diatopicamente — no Rio, mais marcado; no interior de São Paulo, menos." },
            { speaker: "Aluno", text: "E a neutralização de /e/ e /i/ átonos — 'menino' e 'menenu' coexistem no mesmo falante." },
            { speaker: "Linguista", text: "Você está pensando como fonólogo. O PB é um laboratório extraordinário de variação em tempo real." }
          ]
        },
        keyPhrases: [
          "Fonologia: fonema, alofone, palatalização, neutralização, acento",
          "Morfologia: morfema, paradigma, flexão, derivação, composição",
          "Sintaxe: sintagma, constituinte, dependência, valência verbal",
          "Semântica: denotação, conotação, polissemia, homonímia, campo semântico"
        ],
        guidedProduction: [
          "Explique o conceito de 'fonema' usando exemplos do português.",
          "O que é valência verbal e como se aplica ao verbo 'dar'?",
          "Qual é a diferença entre polissemia e homonímia? Dê exemplos em PB."
        ],
        grammar: {
          title: "Metalinguagem Linguística Master",
          explanation: "Fonologia: estudo dos fonemas (unidades sonoras distintivas). PB tem 19 consoantes e 7 vogais tônicas. Alofone: variante não-distintiva de um fonema (o /r/ carioca uvular e o /r/ caipira retroflexo são alofones do mesmo fonema). Morfologia: morfema = menor unidade com significado. 'Deslealmente' = des- (prefixo) + leal (radical) + -mente (sufixo). Sintaxe: valência = número de argumentos que um verbo exige. 'Dormir' é monovalente (só sujeito); 'dar' é trivalente (sujeito + objeto direto + objeto indireto). Semântica: polissemia = uma palavra com múltiplos significados relacionados; homonímia = palavras iguais com significados não relacionados.",
          conjugation: "Exemplos de análise: 'banco' (instituição financeira / assento) = homonímia | 'cabeça' (parte do corpo / líder de grupo / cabeça de alho) = polissemia | /p/ em 'pato' e 'pata' = par mínimo que prova que /p/ e /t/ são fonemas distintos"
        },
        exercises: [
          { type: "analysis", prompt: "O que é um 'par mínimo' e por que é importante para a fonologia?", answer: "Um par mínimo é formado por duas palavras que diferem em apenas um fonema na mesma posição e têm significados distintos. Exemplo: 'pato' vs. 'gato' — diferem apenas no primeiro fonema (/p/ vs. /g/), o que prova que /p/ e /g/ são fonemas distintos no português (têm função distintiva). Outros pares: 'caro/calo', 'mesa/messa' (inexistente — mostra que o s dobrado não é fonema distinto em PB). A importância: pares mínimos são a ferramenta metodológica fundamental para identificar o inventário fonológico de uma língua — só é fonema o que gera distinção semântica." },
          { type: "production", prompt: "Analise morfologicamente: 'deslealmente', 'infelizmente', 'anticapitalista'.", answer: "'Deslealmente': des- (prefixo de negação) + leal (adjetivo, radical) + -mente (sufixo formador de advérbio de modo). 'Infelizmente': in- (prefixo de negação) + feliz (adjetivo, radical) + -mente (sufixo). Nota: a forma base é 'feliz', não 'felizmente' + in-; portanto a análise é in+feliz+mente, não in+felizmente. 'Anticapitalista': anti- (prefixo de oposição, do grego) + capital (substantivo) + -ist- (sufixo formador de agente/crença) + -a (desinência de gênero). Mostra composição com três morfemas derivacionais e um radical." },
          { type: "analysis", prompt: "Explique a valência de 'dar' e 'dormir' com exemplos.", answer: "'Dormir' é verbo monovalente (intransitivo): exige apenas um argumento — o sujeito (quem dorme). 'A criança dorme.' Não há complemento necessário. 'Dar' é verbo trivalente: exige três argumentos — sujeito (quem dá), objeto direto (o que se dá) e objeto indireto (a quem se dá). 'João deu o livro à Maria.' Omitir qualquer um dos três cria frase semanticamente incompleta ou estranha: 'João deu à Maria' (o que?) / 'João deu o livro' (a quem?) são aceitáveis contextualmente, mas a estrutura plena é trivalente. A valência é uma propriedade lexical do verbo que determina a estrutura argumental da oração." },
          { type: "production", prompt: "Escreva 5 exemplos de polissemia no PB e 5 de homonímia — com justificativa.", answer: "Polissemia (significados relacionados, mesma origem): 1) 'banco' (assento / margem de rio — ambos de 'lugar para sentar/apoiar'). 2) 'cabeça' (parte do corpo / líder / cabeça de alho — todos remetem à ideia de 'topo/principal'). 3) 'pé' (parte do corpo / pé de árvore / pé de letra). 4) 'folha' (de árvore / de papel / de pagamento). 5) 'canto' (música / ângulo/esquina — talvez homonímia, debatida).\n\nHomonímia (origens distintas, significado não relacionado): 1) 'manga' (fruta tropical / parte da camisa — origens distintas). 2) 'são' (verbo ser / adjetivo saudável / nome próprio Santo). 3) 'cedo' (advérbio de tempo / do verbo ceder). 4) 'rio' (curso de água / do verbo rir, 1ª pessoa). 5) 'velo' (velocidade coloquial / lã de carneiro)." },
          { type: "analysis", prompt: "O que é a 'concordância ad sensum' (silepse) e quando é aceitável em PB?", answer: "A silepse (concordância ad sensum) é a concordância com o sentido semântico em vez da forma gramatical. Em PB, o caso mais frequente é 'a gente' + verbo no plural: 'a gente foram ao mercado' — gramaticalmente 'errado' (a gente é 3ª pessoa singular), mas semanticamente natural (a gente = nós). A silepse de gênero também ocorre: 'Vossa Excelência chegou cansado' — 'Vossa' é feminino mas concorda com o sexo real do referente. A silepse é aceitável quando: a) é registro coloquial e o contexto aceita variação; b) o referente semântico é mais saliente que a forma gramatical; c) evita ambiguidade ou estranheza. No registro formal escrito, a concordância normativa é esperada." }
        ]
      },
      {
        id: "MASTER-U1-L4",
        title: "Estilística comparada: PB e PE na literatura",
        objectives: ["Comparar estilos literários de autores brasileiros e portugueses", "Identificar as marcas que distinguem a prosa do PB da do PE"],
        shadowingDialogue: {
          title: "Dois portugueses",
          lines: [
            { speaker: "Professora", text: "Leia Saramago e Clarice lado a lado. Ambos são extraordinários — mas são extraordinários de formas opostas." },
            { speaker: "Aluno", text: "Saramago não usa ponto final nem travessão em diálogos. A frase se estende por páginas." },
            { speaker: "Professora", text: "E Clarice? Frases curtíssimas, reticências, perguntas sem resposta. Dois projetos radicalmente distintos." },
            { speaker: "Aluno", text: "Saramago constrói labirintos; Clarice faz buracos no chão." },
            { speaker: "Professora", text: "Isso é crítica literária de nível Master. A metáfora que você acabou de usar diz mais que um parágrafo analítico." }
          ]
        },
        keyPhrases: [
          "Saramago: frase longa, vírgula onde deveria haver ponto, narrador onisciente irônico",
          "Clarice: frase curta, reticências, consciência fragmentada, epifania",
          "Fernando Pessoa: heterônimos como multiplicidade do eu",
          "PB vs PE na prosa: ritmo, léxico, sintaxe, relação com o leitor"
        ],
        guidedProduction: [
          "Compare o estilo de Saramago com o de Clarice em 4 frases.",
          "O que são os heterônimos de Fernando Pessoa e por que são únicos na literatura mundial?",
          "Escreva um parágrafo que soe claramente como prosa brasileira — não portuguesa."
        ],
        grammar: {
          title: "Marcas da Prosa Brasileira vs. Portuguesa",
          explanation: "Prosa brasileira: ritmo mais oral, coloquialismos incorporados à narrativa culta, 'você' como pronome padrão, gerúndio abundante (estou fazendo), léxico com tupi/africano, proximidade com o leitor. Prosa portuguesa: 'tu' em registros mais informais, infinitivo pessoal frequente (ao chegares), vocabulário mais conservador, distância irônica mais europeia, sintaxe mais latinizada. Em literatura: Saramago cria labirintos sintáticos; Clarice cria abismos psicológicos. Ambos geniais, projetos opostos.",
          conjugation: "PB literário: 'A gente foi embora...' / 'Ela tava lá, olhando...' / 'Que droga, pensei...' — PE literário: 'Fomos embora...' / 'Ela estava ali, a olhar...' / 'Que chatice, pensei...'"
        },
        exercises: [
          { type: "production", prompt: "Compare Saramago e Clarice em 4 frases críticas.", answer: "Saramago constrói labirintos: suas frases se estendem por linhas, incorporando diálogo, descrição e pensamento numa corrente contínua que obriga o leitor a habitar o tempo de leitura como habita o tempo real. Clarice, ao contrário, escava: suas frases curtas e reticentes criam espaços de ausência onde a experiência do leitor é convocada a preencher o que a linguagem deliberadamente omite. Se Saramago é o arquiteto que não para de construir, Clarice é a geóloga que remove camadas até encontrar a rocha viva. Os dois são radicais — mas em direções opostas: um por excesso, outro por subtração." },
          { type: "production", prompt: "O que são os heterônimos de Fernando Pessoa e por que são únicos?", answer: "Fernando Pessoa criou não pseudônimos, mas heterônimos — personalidades literárias autônomas com biografias, filosofias, estilos e até horóscopos distintos. Alberto Caeiro é o 'mestre' pagão que vê o mundo sem pensamento, só sensação: 'Não tenho filosofia: tenho sentidos.' Ricardo Reis é o latinista clássico, estóico, que escreve odes ao modo horaciano. Álvaro de Campos é o modernista sensacionista, excessivo e contraditório. O próprio Pessoa 'ortônimo' é o mais enigmático. O que os torna únicos é que não são máscaras do mesmo autor: têm vozes irredutíveis entre si, tanto que Pessoa dizia que o trabalho de Caeiro era superior ao dele próprio. Nenhum outro escritor na história literária mundial construiu heterônimos com tamanha autonomia e consistência." },
          { type: "production", prompt: "Escreva um parágrafo de prosa claramente brasileira — que não poderia ter sido escrito por um português.", answer: "A feira chegava aos sábados com um barulho que era quase musical — o pregão dos feirantes, o chiado do azeite na panela de acarajé, o batuque que vinha de não sei onde e entrava no corpo antes de a gente perceber. Minha mãe comprava sempre mais do que precisava: dizia que não dava pra passar na frente de um quiabo bonito e não levar. Eu não entendia quando criança. Hoje entendo: era uma forma de amar o mundo, aquela compra generosa e sem conta do que é bom e fresco e nosso." },
          { type: "analysis", prompt: "Como a sintaxe de Saramago imita o fluxo do pensamento de forma diferente de Clarice?", answer: "Em Saramago, o fluxo do pensamento é mimético por acumulação: a frase avança, não para, incorpora objeções, parênteses, digressões, sem jamais conceder a pausa de um ponto final — como o pensamento real, que não para nem mesmo quando dorme. A vírgula que substitui o ponto cria uma respiração contínua que produz no leitor uma imersão quase hipnótica. Em Clarice, o fluxo é mimético por fragmentação: a frase curta, a reticência, o silêncio entre parágrafos reproduzem a consciência que não consegue formular completamente o que sente — o pensamento que tropeça no inomeável. Saramago imita o pensamento em movimento; Clarice imita o pensamento diante do que não pode ser pensado." },
          { type: "production", prompt: "Escreva a mesma cena (um homem olhando para o mar) no estilo de Saramago e no de Clarice.", answer: "Saramago: 'Ele ficou olhando para o mar, que naquela tarde estava particularmente azul, como se houvesse decidido ser mais mar do que de costume, e pensou, sem saber bem o que estava pensando, que havia algo naquela imensidão que o fazia sentir, ao mesmo tempo, pequeno e suficiente, o que é talvez a definição mais honesta de paz que alguém já encontrou, ainda que não a tenha escrito assim, com estas palavras, neste lugar.'\n\nClarice: 'O mar. Ele ficou olhando. O azul era demais — quase uma ameaça, esse azul. O que é que o mar quer? Ele não sabia. Ficou. O vento. Depois foi embora sem entender por que havia ido.'" }
        ]
      },
      {
        id: "MASTER-U1-L5",
        title: "Revisão e produção integrada Master-U1",
        objectives: ["Integrar intuição linguística, história da língua, metalinguagem e estilística comparada", "Produzir análise e criação de nível Master"],
        shadowingDialogue: {
          title: "O falante que chegou",
          lines: [
            { speaker: "Mestra", text: "No Master, você não estuda português — você estuda com português. A língua é o instrumento, não o objeto." },
            { speaker: "Aluno", text: "É como a diferença entre aprender a tocar piano e usar o piano para fazer música." },
            { speaker: "Mestra", text: "Perfeita analogia. E como o pianista que ainda estuda Schubert depois de décadas — há sempre mais." },
            { speaker: "Aluno", text: "O Master não é um destino." },
            { speaker: "Mestra", text: "É uma forma de habitar a língua. E habitações não têm fim — só se aprofundam." }
          ]
        },
        keyPhrases: [
          "Master: a língua como instrumento, não como objeto de estudo",
          "Intuição + história + metalinguagem + estilo = domínio pleno",
          "O português como janela: para a literatura, o pensamento, a identidade",
          "Aprender sem fim: cada texto é uma descoberta nova"
        ],
        guidedProduction: [
          "Escreva um texto de 200 palavras sobre o que o português te deu que não existia antes.",
          "Analise um parágrafo de sua autoria com olho de linguista e de editor.",
          "O que você ainda quer explorar no português que o Master não ensinou?"
        ],
        grammar: {
          title: "Revisão Master-U1",
          explanation: "Consolida: intuição linguística e estilo próprio, português arcaico e clássico (arcaísmos, evolução histórica), metalinguagem (fonema, morfema, valência, polissemia), estilística comparada (Saramago/Clarice, PB/PE literário).",
          conjugation: "Síntese Master-U1: intuição > regra / história da língua / metalinguagem precisa / estilística comparada / arcaísmos funcionais / análise de estilo"
        },
        exercises: [
          { type: "production", prompt: "Escreva um texto de 180 palavras sobre o que o português te deu que não existia antes.", answer: "O português me deu categorias. Não apenas palavras — categorias de experiência que antes existiam difusas, sem forma. 'Saudade' é a mais famosa, mas há outras: 'perrengue' (situação difícil com dose de humor involuntário que 'hardship' não captura), 'gozar' no sentido carioca (aproveitar com prazer pleno, diferente de 'enjoy'), 'moleque' (aquela mistura específica de criança, malícia e afeto que nenhuma tradução preserva intacta). Me deu também uma literatura. Não no sentido de 'acesso' — posso ler em tradução. Mas ler Clarice em português é ler Clarice; ler Clarice em inglês é ler alguém que tentou ser Clarice. A diferença não é pequena. Me deu ainda um jeito de pensar. Certas ideias se formam primeiro em português agora — não porque seja 'melhor' que minha língua nativa, mas porque certas experiências acontecem em português e não têm equivalente em outro lugar. Habitar dois idiomas é habitar dois mundos. O segundo sempre ilumina o primeiro — e às vezes o questiona." },
          { type: "production", prompt: "Analise este parágrafo com olho de linguista e de editor: 'A situação econômica do Brasil é muito complexa e tem muitos problemas que precisam ser resolvidos pelo governo com urgência.'", answer: "Linguista: 'muito complexa' — advérbio de intensidade com adjetivo vago. 'Muitos problemas' — determinante vago. 'Precisam ser resolvidos' — voz passiva sem agente especificado. 'Pelo governo' — agente vago (qual governo? federal? estadual?). 'Com urgência' — adjunto adverbial genérico.\n\nEditor: O parágrafo diz muito pouco com muitas palavras. 'Complexa' e 'muitos problemas' não informam — são marcadores de que o autor não identificou o que especificamente quer dizer. 'Urgência' sem prazo não é urgência.\n\nReescrita possível: 'A economia brasileira enfrenta dois desafios estruturais que nenhum governo desde 1994 conseguiu resolver simultaneamente: inflação controlada com crescimento sustentado. O dilema persiste.'" },
          { type: "production", prompt: "Escreva um parágrafo que incorpore um arcaísmo, uma análise metalinguística e uma marca de estilo pessoal.", answer: "Há algo nos textos jurídicos brasileiros que me fascina e me exaspera em igual medida: o uso compulsivo de arcaísmos como 'doravante' e 'mister' — palavras que sobreviveram precisamente porque o direito tem medo de mudar, e a língua jurídica é, antes de tudo, um ritual de conservação. Do ponto de vista morfológico, 'doravante' é uma lexicalização da expressão 'de ora em diante', fundida num único advérbio que hoje só vive em contratos. É um fóssil linguístico — e como todo fóssil, nos diz algo precioso sobre o que veio antes." },
          { type: "analysis", prompt: "Por que o Master não é um nível que se termina?", answer: "O Master não é um nível que se termina porque a língua não termina. Cada livro novo ensina algo; cada interlocutor novo revela uma variedade, um sotaque, um uso que você não havia encontrado; cada momento histórico cria novos termos e ressignifica antigos. Um falante Master de 2024 que não ler literatura dos próximos dez anos terá uma língua defasada — não na gramática, que muda lentamente, mas na sensibilidade ao contemporâneo. A diferença entre um músico e um ex-músico não é técnica — é a continuidade da escuta. O Master é uma postura: a da escuta ativa permanente, da curiosidade sem prazo de validade, do prazer no detalhe que ninguém mais notou." },
          { type: "production", prompt: "Escreva a resposta que você daria se alguém perguntasse: 'Você fala português?'", answer: "Depende do que você quer dizer com 'falar'. Consigo fazer compras, discutir política, escrever um relatório, fazer uma piada — em português. Leio Clarice Lispector e entendo o que ela está fazendo com a linguagem, não apenas o que está dizendo. Quando ouço um carioca e um gaúcho conversando, entendo os dois e percebo as diferenças. Em certos momentos, penso em português antes de traduzir. Mas ainda há coisas que me escapam — referências culturais que um nativo absorve na infância, gírias que mudam antes que eu aprenda, a velocidade de certas conversas informais. Então: falo português? Sim. Falo como um nativo brasileiro? Não. Estou no meio, que é onde as coisas ficam interessantes." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 2 — Produção Criativa Master: Escrita que Transforma
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U2",
    title: "Produção Criativa Master: Escrita que Transforma",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U2-L1",
        title: "O conto perfeito: estrutura, voz e inevitabilidade",
        objectives: ["Produzir contos de excelência literária em nível Master", "Dominar a economia narrativa — máximo sentido com mínimas palavras"],
        shadowingDialogue: {
          title: "A perfeição do conto",
          lines: [
            { speaker: "Escritora", text: "Tchekhov dizia: se no primeiro ato aparece uma arma, ela precisa disparar. No conto, não há espaço para nada que não dispare." },
            { speaker: "Aluno", text: "É uma forma de escrita que me intimida. Cada palavra carrega um peso imenso." },
            { speaker: "Escritora", text: "Mas também liberta. No romance você pode se perder e se achar. No conto, você não pode se perder." },
            { speaker: "Aluno", text: "O conto exige que você já saiba o que quer dizer antes de começar?" },
            { speaker: "Escritora", text: "Exige que você descubra o que quer dizer exatamente ao escrever — e depois retire tudo que não é esse descobrimento." }
          ]
        },
        keyPhrases: [
          "Economia narrativa: cada elemento dispara (Lei de Tchekhov)",
          "O conto como destilação: retirar até que só reste o essencial",
          "Final inevitável mas surpreendente: quando o leitor pensa 'claro, era isso'",
          "A primeira frase como contrato: define o tom, o mundo, a promessa"
        ],
        guidedProduction: [
          "Escreva um conto de 150 palavras com início, meio, fim e uma reviravolta.",
          "Reescreva eliminando 30% das palavras sem perder sentido.",
          "Analise a primeira frase de um conto que você ama: o que ela promete?"
        ],
        grammar: {
          title: "Técnicas do Conto Master",
          explanation: "Lei de Tchekhov: cada elemento narrativo deve ser funcional — se aparece, deve servir. A arma que aparece deve disparar; a personagem introduzida deve importar. Economy of means: no conto, não há espaço para ornamento que não seja também estrutura. O final deve ser ao mesmo tempo surpreendente e inevitável — quando o leitor pensa 'como não vi isso vindo?' significa que as pistas estavam lá. A primeira frase é um contrato com o leitor: define o mundo da ficção, o tom e a promessa do que virá.",
          conjugation: "Primeiras frases memoráveis: 'Aquela tarde, Mariana decidiu que não ia mais mentir.' / 'O homem chegou sem avisar, como sempre.' / 'Havia dois anos que ela não abria aquela gaveta.'"
        },
        exercises: [
          { type: "production", prompt: "Escreva um conto completo de 150 palavras.", answer: "O último bilhete que ela escreveu disse: 'Saí para comprar leite.' Isso foi há três anos.\n\nO marido manteve a nota na porta da geladeira durante meses — primeiro por esperança, depois por hábito, depois porque não sabia bem o que fazer com ela. O leite acabava, ele comprava mais, o bilhete ficava.\n\nUm dia sua filha, que tinha seis anos quando a mãe foi, perguntou: 'Ela vai voltar hoje?'\n\nEle olhou para o bilhete. Pensou em dizer que sim. Pensou em dizer que não. Disse: 'Vou buscar você na escola, vai?'\n\nEla foi. Ele foi buscá-la. No caminho, ela perguntou se podiam parar no mercado.\n\n'Para quê?' ele perguntou.\n\n'Leite', ela disse. 'A gente tá sem.'\n\nEle parou o carro. Ficou um tempo olhando para a frente. Depois disse: 'Tá bom. Vamos.'" },
          { type: "production", prompt: "Escreva a primeira frase de 5 contos diferentes — cada uma com um tom distinto.", answer: "1) Tensão/mistério: 'Quando abriu a caixa de sapatos que estava embaixo da cama da mãe, encontrou trezentas e quarenta e dois bilhetes dobrados em quatro.'\n\n2) Humor: 'O problema com ser invisível é que ninguém avisa quando vai sentar em cima de você.'\n\n3) Lírico: 'Naquele verão, ela aprendeu que o silêncio tem cheiro — e que o cheiro do silêncio da avó era de alfazema e coisa não dita.'\n\n4) Direto: 'Ele mentiu pela primeira vez aos sete anos. Só parou aos sessenta e dois, quando não havia mais ninguém para quem mentir.'\n\n5) Perturbador: 'Toda família tem um quarto que ninguém entra. A nossa tinha uma casa.'" },
          { type: "production", prompt: "Reescreva eliminando 30%: 'Ela entrou no quarto e viu que a janela estava aberta, o que era estranho porque ela sabia que tinha certeza que havia fechado todas as janelas antes de sair pela manhã.'", answer: "Ela entrou no quarto. A janela estava aberta. Ela havia fechado tudo antes de sair. (De 42 para 14 palavras, -67%. 'tinha certeza que havia' = redundância. 'o que era estranho porque ela sabia que' = explicação desnecessária — a estranheza está no fato, não na explicação.)" },
          { type: "analysis", prompt: "Por que o final de um conto deve ser 'surpreendente mas inevitável'?", answer: "O final surpreendente mas inevitável é o graal do conto porque representa a resolução perfeita de uma tensão narrativa: se for apenas surpreendente (sem inevitabilidade), o leitor se sente manipulado — foi um truque, não uma revelação. Se for apenas inevitável (sem surpresa), o leitor se sente entediado — sabia onde ia chegar. O equilíbrio perfeito é quando o final surpreende na primeira leitura mas, na segunda, o leitor percebe que todas as pistas estavam lá desde o início. 'Como não vi isso vindo?' é a pergunta que define o grande final. Tchekhov, Poe, Clarice: todos constroem esse equilíbrio com maestria diferente mas igual ambição." },
          { type: "production", prompt: "Escreva o início e o fim de um conto — deixando o meio implícito.", answer: "Início: 'Na manhã em que ela decidiu perdoá-lo, acordou às cinco e foi fazer café antes que ele acordasse.'\n\n[...]\n\nFim: 'Quando ele desceu e encontrou o café já frio na mesa, ela estava sentada com a xícara nas mãos, olhando pela janela. Ele sentou do lado. Ficaram assim. O café esfriou mais. Nenhum dos dois disse nada, e isso foi suficiente — ou foi o que havia.'" }
        ]
      },
      {
        id: "MASTER-U2-L2",
        title: "Poesia em português: escrever e analisar",
        objectives: ["Produzir poesia em português com consciência formal e semântica", "Analisar poesia com profundidade crítica de nível Master"],
        shadowingDialogue: {
          title: "A impossibilidade da poesia",
          lines: [
            { speaker: "Poeta", text: "Quando Mallarmé disse que o poema não é feito de ideias mas de palavras, mudou tudo." },
            { speaker: "Aluno", text: "Mas então como se escreve um poema? Você começa pela palavra ou pela ideia?" },
            { speaker: "Poeta", text: "Você começa pela pressão — a sensação de que algo precisa ser dito de uma forma específica e nenhuma outra." },
            { speaker: "Aluno", text: "E quando encontra a forma, o poema acontece?" },
            { speaker: "Poeta", text: "Quando a forma e o conteúdo se tornam a mesma coisa. Aí você tem um poema. Até lá, você tem rascunho." }
          ]
        },
        keyPhrases: [
          "O poema não é feito de ideias — é feito de palavras (Mallarmé)",
          "Verso livre: liberdade com responsabilidade rítmica",
          "Imagem poética: o concreto que ilumina o abstrato",
          "A compressão: o poema diz em 10 palavras o que o ensaio diria em 1000"
        ],
        guidedProduction: [
          "Escreva um poema de 6-8 versos sobre uma emoção sem nomear a emoção.",
          "Analise um poema de Drummond identificando todas as figuras de linguagem.",
          "Transforme um parágrafo de prosa em poema — o que se perde? O que se ganha?"
        ],
        grammar: {
          title: "Elementos Formais da Poesia em PB",
          explanation: "Versificação: verso (linha), estrofe (grupo de versos), metro (número de sílabas), rima (consoante/toante/branca). Figuras: imagem (comparação implícita), símbolo (objeto que representa abstração), sinestesia (mistura de sentidos). Ritmo: acentuação das sílabas cria padrão musical. Verso livre: sem metro fixo mas com ritmo intencional — toda escolha de quebra de linha é semântica. Poema concreto (já estudado): forma visual como significado.",
          conjugation: "Análise de verso: escansão (contar sílabas poéticas), identificar tonicidade, acentos que criam ritmo, posição das pausas (cesura)"
        },
        exercises: [
          { type: "production", prompt: "Escreva um poema de 6-8 versos sobre solidão sem usar a palavra 'solidão'.", answer: "A xícara ainda quente\nna mesa onde ninguém sentou.\n\nO telefone que eu olho\ncomo se olhasse um espelho\nvazio.\n\nLá fora, alguém ri.\nAqui dentro,\no som que o riso faz\nquando atravessa a parede\ne some." },
          { type: "production", prompt: "Transforme este parágrafo em poema e explique o que mudou: 'Era tarde, ela estava cansada, mas continuou caminhando porque não havia outro lugar para ir.'", answer: "Poema:\nEra tarde.\nEla estava cansada\ne continuou.\n\nNão havia\noutro lugar.\n\nO que mudou: a prosa tem conectivos ('mas', 'porque') que explicam a relação entre os fatos. O poema os remove — cada fragmento fica isolado, carregando seu próprio peso. A quebra de linha em 'e continuou' cria pausa antes do verbo, enfatizando o esforço. 'Não havia / outro lugar' separado cria um silêncio antes da revelação. O poema não explica a tristeza — a encarna na forma fragmentada." },
          { type: "analysis", prompt: "Analise: 'No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho' (Drummond) — figuras e efeito.", answer: "Figuras: anáfora inversa (a segunda linha repete a primeira com ordem invertida — 'tinha uma pedra no meio do caminho' vs. 'no meio do caminho tinha uma pedra'). Paralelismo sintático. Repetição obsessiva ao longo do poema (ao todo a frase aparece seis vezes). Metáfora central: a pedra como obstáculo existencial — não especificado, portanto universal. Efeito: a repetição anafórica cria um ritmo hipnótico que imita a obsessão — a incapacidade de superar e seguir em frente. A forma encarna o conteúdo: o poema não descreve a obsessão, ele a produz no leitor. A simplicidade extrema (vocabulário básico, sintaxe direta) contrasta com a profundidade existencial — economia máxima, impacto máximo." },
          { type: "production", prompt: "Escreva um poema concreto (visual) de 5-8 palavras.", answer: "s\n si\n  sil\n   silê\n    silên\n     silênc\n      silênci\n       silêncio\n\n[A palavra 'silêncio' se forma gradualmente, imitando visualmente o silêncio que cresce — e quando termina de se formar, o poema acabou: o silêncio chegou.]\n\nOU mais simples:\n\nabismo\n bismo\n  ismo\n   smo\n    mo\n     o\n\n[A palavra se apaga letra a letra — o abismo engolindo a si mesmo.]" },
          { type: "analysis", prompt: "Por que 'o poema não é feito de ideias mas de palavras' é uma declaração revolucionária?", answer: "Antes de Mallarmé (e do modernismo), a poesia era frequentemente vista como veículo de ideias, emoções ou narrativas — as palavras eram transparentes, serviam ao conteúdo. Mallarmé inverte isso: as palavras não são janelas para o sentido, elas são o sentido. A sonoridade, a aparência visual, a posição no verso, a ressonância com outras palavras — tudo isso é significado, não apenas embalagem. Isso é revolucionário porque libera a poesia da obrigação de 'dizer algo' no sentido prosaico: um poema pode ser 'sobre' o som das palavras ao se chocarem, sobre o silêncio entre elas, sobre a impossibilidade de dizer. O Concretismo brasileiro bebeu diretamente dessa fonte." }
        ]
      },
      {
        id: "MASTER-U2-L3",
        title: "Crônica literária Master: o cotidiano como epopeia",
        objectives: ["Produzir crônicas de excelência literária em nível Master", "Elevar o cotidiano à dimensão épica sem perder a leveza"],
        shadowingDialogue: {
          title: "A grandeza do pequeno",
          lines: [
            { speaker: "Cronista", text: "A crônica perfeita faz o leitor parar no metrô e olhar para o lado como se visse o mundo pela primeira vez." },
            { speaker: "Aluno", text: "Mas ela parte de algo tão pequeno — uma xícara, um semáforo, um velho no banco da praça." },
            { speaker: "Cronista", text: "É precisamente isso. A grandeza está em como o pequeno ilumina o grande." },
            { speaker: "Aluno", text: "Então a crônica é uma metáfora expandida?" },
            { speaker: "Cronista", text: "Às vezes. Mas as melhores crônicas não são metáforas de nada — são elas mesmas. O velho no banco é o velho no banco. E isso é tudo." }
          ]
        },
        keyPhrases: [
          "Crônica Master: o cotidiano elevado sem ser alegorizado",
          "Voz de primeira pessoa com distância crítica — íntimo mas não confessional",
          "O detalhe observado que ninguém mais notou",
          "Final que ressoa: não explica, mas permanece"
        ],
        guidedProduction: [
          "Escreva uma crônica de 200 palavras sobre algo que observou hoje.",
          "Identifique a voz da crônica: o que a torna sua e de ninguém mais?",
          "Reescreva a crônica eliminando toda explicação — deixe só a observação."
        ],
        grammar: {
          title: "A Crônica Master: Técnicas Avançadas",
          explanation: "Voz: a crônica Master tem uma voz inconfundível — específica o suficiente para ser de alguém, universal o suficiente para ser de todos. Observação vs. interpretação: a crônica mostra (o detalhe, o gesto, o silêncio) e raramente explica — o leitor tira as conclusões. Tempo: a crônica vive no presente narrativo ou no pretérito que parece presente. Ritmo: alternância de frases longas e curtas, com o punchline frequentemente na frase mais curta. Final: não resolve, não explica, mas deixa algo ressoando.",
          conjugation: "Técnicas: detalhe específico ('ela dobrou o guardanapo três vezes') > generalidade ('ela estava nervosa') / final aberto > conclusão explicada / voz próxima > narrador distante"
        },
        exercises: [
          { type: "production", prompt: "Escreva uma crônica de 200 palavras sobre algo observado hoje ou recentemente.", answer: "Tinha um homem no banco do metrô que estava relendo a mesma mensagem no celular há três estações. Eu sei porque eu também estava olhando para ele, que é uma coisa que a gente não admite mas faz o tempo todo no metrô — observar os outros como se fosse o único que observa.\n\nA mensagem devia ter cinco linhas. Ele descia o dedo, subia, descia de novo. De vez em quando erguia a cabeça e olhava para o nada com a expressão de quem está tentando entender algo que entendeu mas preferia não ter entendido.\n\nNa estação Consolação, ele fechou o celular, colocou no bolso e ficou olhando para a frente.\n\nNa estação Paulista, ele tirou o celular de novo.\n\nSaí na estação seguinte. Não sei se ele releu a mensagem. Não sei o que dizia. Sei que havia algo naquela repetição que eu reconhecia sem saber nomear — a gente volta ao que dói como volta à língua ao dente que dói, não para curar, só para confirmar que ainda está lá." },
          { type: "production", prompt: "Reescreva eliminando toda explicação: 'Ele estava sozinho e triste, sem ninguém para conversar, o que me fez pensar na solidão das grandes cidades.'", answer: "Ele estava no banco do parque com um sanduíche fechado no colo. Os pombos ficavam perto. Ele não dava migalhas. Eles ficavam perto assim mesmo." },
          { type: "analysis", prompt: "Por que 'o velho no banco é o velho no banco' é uma afirmação literária profunda?", answer: "Afirmar que 'o velho no banco é o velho no banco — e isso é tudo' é uma declaração contra a alegorização compulsiva da literatura. Há uma tendência (especialmente na crônica mediana) de transformar cada observação em símbolo: o velho no banco 'representa' a solidão urbana, 'é uma metáfora' do envelhecimento ignorado. Mas a crônica Master resiste a isso. Quando o velho é apenas o velho — descrito com tal precisão e atenção que o leitor o vê completamente —, algo mais poderoso acontece: o leitor preenche a significância por conta própria. O específico que não precisa ser generalizado é mais universal que a generalização direta. É o princípio fundamental do 'show, don't tell' elevado ao plano filosófico." },
          { type: "production", prompt: "Escreva o final de uma crônica que ressoa sem explicar.", answer: "[Crônica sobre um café que fechou:] 'Passei em frente na semana passada. Onde era o balcão, tem agora uma farmácia. A farmacêutica estava de jaleco branco, olhando para o celular. Não havia fila. Era terça-feira à tarde. O sol batia de lado, como sempre batia naquele horário naquele lugar, e não havia nada diferente no sol.'" },
          { type: "production", prompt: "Escreva a abertura de uma crônica que prende o leitor nas primeiras 2 frases.", answer: "Opção 1: 'A mulher na fila do banco estava usando o perfume da minha avó, que morreu há onze anos, e eu quase pedi a ela que ficasse parada para eu poder sentir um pouco mais.'\n\nOpção 2: 'Tem uma calçada na minha rua onde um azulejo está levantado há quatro anos. Eu já vi três pessoas tropeçar. Nenhuma delas tropeçou no mesmo lugar.'\n\nOpção 3: 'Hoje alguém me ligou no número errado e ficamos conversando por vinte minutos antes de perceber.'" }
        ]
      },
      {
        id: "MASTER-U2-L4",
        title: "Ensaio literário de alto nível: pensamento em movimento",
        objectives: ["Produzir ensaio literário de excelência em nível Master", "Integrar análise crítica, experiência pessoal e argumentação sofisticada"],
        shadowingDialogue: {
          title: "O ensaio como pensamento vivo",
          lines: [
            { speaker: "Ensaísta", text: "Montaigne inventou o ensaio escrevendo sobre si mesmo — e descobriu que escrever sobre si mesmo era escrever sobre tudo." },
            { speaker: "Aluno", text: "O paradoxo: quanto mais particular, mais universal." },
            { speaker: "Ensaísta", text: "Exato. E o ensaio literário vai além do ensaio pessoal: integra análise, argumento e experiência numa forma que não é nem ficção nem ciência." },
            { speaker: "Aluno", text: "É um pensamento que acontece na página — não que foi pensado e depois escrito." },
            { speaker: "Ensaísta", text: "Isso. O leitor assiste ao pensamento se formando. Essa é a forma de honestidade que só o ensaio permite." }
          ]
        },
        keyPhrases: [
          "Ensaio literário: análise + experiência + argumento numa forma híbrida",
          "O pensamento que acontece na página — não que foi pensado antes",
          "Montaigne: escrever sobre si mesmo é escrever sobre tudo",
          "Desvio produtivo: a digressão que volta transformada"
        ],
        guidedProduction: [
          "Escreva o início de um ensaio literário sobre um livro que mudou sua forma de pensar.",
          "Use uma digressão pessoal para iluminar um argumento crítico.",
          "Escreva uma conclusão de ensaio que abre em vez de fechar."
        ],
        grammar: {
          title: "O Ensaio Literário Master: Estrutura e Voz",
          explanation: "O ensaio literário distingue-se por: 1) Voz pessoal integrada à análise — o 'eu' não é removido, é o instrumento. 2) Argumento que se desenvolve, contradiz e revisa — não linear como o acadêmico. 3) Desvio produtivo: a digressão que parece se afastar mas volta transformada. 4) Final que abre: o ensaio literário raramente 'resolve' — deixa a questão mais rica e aberta do que encontrou. 5) Estilo como argumento: como o texto é escrito é parte do que argumenta.",
          conjugation: "Marcadores do ensaio literário: 'o que me ocorre ao reler...' / 'há algo nessa frase que...' / 'não sei ao certo, mas...' / 'deixa eu tentar de outro ângulo...' / 'talvez o que esteja em jogo aqui seja...'"
        },
        exercises: [
          { type: "production", prompt: "Escreva o início de um ensaio literário sobre qualquer livro brasileiro (8 linhas).", answer: "Reli 'Memórias Póstumas de Brás Cubas' pela quarta vez e desta vez não consegui parar de pensar numa coisa: como é que Machado de Assis sabia? Ele escreveu em 1880 sobre um narrador que mente sobre si mesmo de formas que ele próprio não percebe — e levamos décadas para ter o vocabulário psicanalítico e narratológico para nomear o que ele estava fazendo. O narrador não confiável existia antes do termo existir. A ironia que não se anuncia existia antes de a teoria literária mapeá-la. Isso me faz pensar que os grandes escritores não ilustram teorias — eles as antecipam. E que talvez a função da crítica não seja explicar a literatura, mas chegar atrasada e fingir que sabia o caminho." },
          { type: "production", prompt: "Escreva uma digressão pessoal de 5 linhas que ilumina um argumento crítico sobre linguagem.", answer: "Argumento que estava desenvolvendo: a linguagem molda o que conseguimos pensar.\n\nDigressão: 'Quando aprendi a palavra alemã 'Weltschmerz' — dor do mundo, angústia pela diferença entre o mundo como é e como deveria ser — passei semanas identificando esse sentimento em todo lugar, como se ele tivesse existido sempre mas eu nunca houvesse conseguido vê-lo porque não tinha onde pousá-lo. A palavra criou o sentimento, ou me permitiu perceber o que já existia? Não sei. Mas sei que, desde então, sinto Weltschmerz com mais frequência. O que sugere que a palavra criou alguma coisa, ou pelo menos ampliou o espaço onde ela cabe.'\n\nRetorno ao argumento: isso é exatamente o que a hipótese de Sapir-Whorf fraca propõe — e a minha experiência com essa palavra alemã é a evidência mais pessoal que tenho para corroborá-la." },
          { type: "production", prompt: "Escreva uma conclusão de ensaio que abre em vez de fechar (4 linhas).", answer: "O que aprendi ao escrever este ensaio não foi uma resposta — foi a forma mais precisa que encontrei até agora para a pergunta. E isso, percebo, é o máximo que um ensaio pode fazer: não resolver, mas tornar a questão mais habitável, mais rica, mais digna de continuar sendo habitada. A pergunta sobre o que a língua faz com quem a fala continua aberta. Mais aberta do que quando comecei. Isso parece, estranhamente, um progresso." },
          { type: "analysis", prompt: "Qual é a diferença entre o ensaio acadêmico e o ensaio literário?", answer: "O ensaio acadêmico estabelece uma tese e a defende com evidências, mantendo distância do sujeito que escreve — o 'eu' é removido ou minimizado para garantir objetividade. O ensaio literário coloca o 'eu' no centro como instrumento epistemológico: o escritor usa sua própria experiência, dúvidas e contradições como dados. O acadêmico parte de uma conclusão e a demonstra; o literário descobre a conclusão no ato de escrever — o leitor acompanha o pensamento se formando. O acadêmico fecha; o literário abre. O acadêmico usa a linguagem como veículo; o literário usa a linguagem como parte do argumento — como o texto é escrito é parte do que afirma." },
          { type: "production", prompt: "Escreva um parágrafo de ensaio literário onde você muda de ideia no meio do texto.", answer: "Durante anos acreditei que ler muito tornava as pessoas mais empáticas — havia estudos, havia a intuição, havia a minha própria experiência de sair de um romance sentindo o mundo mais habitado de outras perspectivas. Mas recentemente comecei a desconfiar disso. Conheço leitores vorazes que são rígidos, incuriosos sobre o outro real, fascinados pelo outro fictício mas indiferentes ao vizinho. Talvez a leitura não crie empatia — talvez ajude quem já tem disposição para ela a exercitá-la e refiná-la. O que é completamente diferente. E significa que a literatura não salva — o que é uma notícia péssima se você precisava que salvasse, e uma notícia ótima se prefere que ela seja ela mesma." }
        ]
      },
      {
        id: "MASTER-U2-L5",
        title: "Revisão e produção integrada Master-U2",
        objectives: ["Integrar conto, poesia, crônica e ensaio numa produção Master completa", "Demonstrar virtuosidade criativa plena em português"],
        shadowingDialogue: {
          title: "O escritor completo",
          lines: [
            { speaker: "Mestra", text: "No Master, você transita entre gêneros como um músico que toca vários instrumentos — cada um com técnica específica, todos a serviço da música." },
            { speaker: "Aluno", text: "E o que une todos os gêneros, afinal?" },
            { speaker: "Mestra", text: "A voz. A voz é a mesma no conto e no ensaio, na crônica e no poema — mesmo que o registro mude." },
            { speaker: "Aluno", text: "A voz como identidade que persiste através dos gêneros." },
            { speaker: "Mestra", text: "Isso. E é o que torna um escritor inconfundível. Você pode mudar o tom, o gênero, o tema — mas a voz permanece." }
          ]
        },
        keyPhrases: [
          "Voz como identidade transgenérica: persiste no conto, no poema, na crônica",
          "Transitar entre gêneros com consciência das diferenças formais",
          "A produção Master: técnica invisível a serviço da voz",
          "O escritor completo: quando parar de se perguntar 'estou escrevendo certo?'"
        ],
        guidedProduction: [
          "Escreva o mesmo tema em 4 gêneros: conto, poema, crônica, ensaio — 3 linhas cada.",
          "Identifique sua voz: o que seus textos têm em comum independente do gênero?",
          "Escreva um texto de 250 palavras no gênero que você mais domina."
        ],
        grammar: {
          title: "Revisão Master-U2",
          explanation: "Consolida: conto (economia narrativa, lei de Tchekhov, final inevitável), poesia (imagem, compressão, verso livre, poema concreto), crônica (observação precisa, voz íntima, final que ressoa), ensaio literário (pensamento em movimento, digressão produtiva, conclusão aberta).",
          conjugation: "Síntese Master-U2: economia narrativa / imagem poética / observação precisa / pensamento em movimento / voz transgenérica / técnica invisível"
        },
        exercises: [
          { type: "production", prompt: "Escreva o mesmo tema (a chuva) em 4 gêneros — 3-4 linhas cada.", answer: "Conto: 'Quando a chuva começou, ela percebeu que havia esquecido o guarda-chuva em casa pela terceira vez naquela semana. Parou numa loja, molhada, olhou para os preços e saiu sem comprar. Chegou em casa encharcada e não ligou para ninguém.'\n\nPoema:\nA chuva desce\nela não sobe.\nIsto é tudo\ne é suficiente.\n\nCrônica: 'Choveu essa tarde em São Paulo do jeito que só chove aqui — sem aviso, de repente, como se a cidade merecesse. As pessoas correram para as marquises. Por cinco minutos, éramos todos iguais: molhados ou prestes a ser.'\n\nEnsaio: 'Há uma memória específica de chuva que carrego — não a chuva em si, mas o cheiro de terra molhada que a precede. Isso me leva a pensar que o que chamamos de memória raramente é visual: é olfativa, sonora, cutânea. E que a língua, ao nomear sensações com palavras visuais, já traiu metade da experiência.'" },
          { type: "production", prompt: "Escreva um texto de 200 palavras no gênero que você mais domina.", answer: "[Crônica — modelo:] Tem um mendigo que dorme toda noite na porta do prédio em que trabalho. Não o mesmo mendigo — ao longo dos anos foram vários. Mas parece o mesmo porque a cidade faz isso: torna as pessoas invisíveis ao ponto de serem intercambiáveis. Hoje de manhã havia um que eu nunca tinha visto. Estava acordado, sentado, com uma xícara de café nas mãos — não sei de onde tinha vindo, alguém devia ter dado. Ele segurava a xícara com as duas mãos, como a gente segura quando faz frio, mesmo que hoje não estivesse tão frio assim. Passei por ele. Entrei no prédio. Fui para o meu trabalho. Às onze, fui buscar café na máquina do corredor — a mesma xícara descartável de sempre — e me peguei segurando com as duas mãos, do mesmo jeito. Não estava com frio. Era só o jeito de segurar que aprendi sem saber de quem." },
          { type: "analysis", prompt: "Por que a 'voz' persiste através dos gêneros mesmo quando o registro muda?", answer: "A voz de um escritor é formada por escolhas que se repetem inconscientemente em qualquer gênero: o tipo de detalhe que escolhe observar (visual, sonoro, tátil), a relação com o leitor (próxima, irônica, confidente), o ritmo preferido das frases (longa ou curta, com ou sem pausa antes do punchline), a posição epistemológica (certeza ou dúvida, declarativo ou interrogativo). Essas escolhas persistem porque emergem de uma sensibilidade específica — uma forma de habitar o mundo — que não muda com o gênero. Clarice é Clarice no conto e na crônica, em Perto do Coração Selvagem e em Para não Esquecer. O gênero é o traje; a voz é o corpo." },
          { type: "production", prompt: "Identifique 3 marcas recorrentes da sua voz de escrita em português e demonstre cada uma.", answer: "[Resposta pessoal — modelo:] 1) Começo parágrafos com observação concreta antes de ir para o abstrato: 'A xícara ainda quente na mesa vazia. Isso é o que chamo de solidão' — nunca 'A solidão é uma sensação de...' 2) Uso perguntas no interior do texto, não apenas no final: o pensamento se interroga enquanto avança. 3) Meus finais são curtos — depois de um desenvolvimento longo, a última frase é quase sempre a mais breve. É uma forma de pontuar: o silêncio depois da última palavra é parte do texto." },
          { type: "production", prompt: "Escreva uma mensagem para você mesmo no início desta jornada — com o que aprendeu no Master.", answer: "Você está começando a aprender português. Vai demorar mais do que você imagina e vai te dar mais do que você esperava. Não vou te contar quanto tempo — você não acreditaria, e mesmo que acreditasse, não seria a mesma experiência. O que posso dizer é isto: haverá um momento em que você vai ler uma frase em português e vai pensar 'eu podia ter escrito isso' — e isso vai ser ao mesmo tempo arrogante e verdadeiro, porque o que vai significar é que a língua ficou grande o suficiente para caber no seu interior. Quando chegar esse momento, não comemore ainda. Releia a frase. Perceba o que ela tem que você ainda não tem. Continue. A língua não termina. Você também não." }
        ]
      }
    ]
  }
];