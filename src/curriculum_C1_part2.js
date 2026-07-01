// C1 PART 2 — Unidades 3 y 4
// 12 lecciones · 60 ejercicios

export const C1_U3_U4 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 3 — Literatura Brasileira: Leitura e Análise Profunda
  // ══════════════════════════════════════════════════════
  {
    id: "C1-U3",
    title: "Literatura Brasileira: Leitura e Análise Profunda",
    level: "C1",
    lessons: [
      {
        id: "C1-U3-L1",
        title: "Machado de Assis: ironia, narrador e realismo",
        objectives: ["Analisar a ironia machadiana com precisão crítica", "Identificar o narrador não confiável na literatura brasileira"],
        shadowingDialogue: {
          title: "O narrador de Machado",
          lines: [
            { speaker: "Crítico", text: "Brás Cubas narra sua própria história depois de morto — o que isso implica narrativamente?" },
            { speaker: "Aluna", text: "Ele está fora do tempo, então pode mentir, omitir, se contradizer sem consequências." },
            { speaker: "Crítico", text: "Exatamente. É o narrador não confiável por excelência. E a ironia funciona como distância crítica." },
            { speaker: "Aluna", text: "Ele ri do leitor e de si mesmo simultaneamente?" },
            { speaker: "Crítico", text: "Sim. Machado usa o riso para revelar o que o sentimentalismo romântico escondia: a crueldade das relações sociais." }
          ]
        },
        keyPhrases: [
          "Narrador não confiável — narrador pós-morte — distância irônica",
          "Realismo brasileiro — crítica social velada — humor negro",
          "Memórias Póstumas / Dom Casmurro / Quincas Borba / Esaú e Jacó",
          "Capitu traiu ou não? — ambiguidade intencional como recurso literário"
        ],
        guidedProduction: [
          "Por que Machado usa um narrador morto em 'Memórias Póstumas'?",
          "A ironia machadiana critica o quê especificamente? Dê exemplos.",
          "Capitu traiu Dom Casmurro? Argumente com base no texto."
        ],
        grammar: {
          title: "Narrador Não Confiável: Análise C1",
          explanation: "O narrador não confiável (unreliable narrator) é aquele cujo relato é suspeito por razões psicológicas, morais ou narrativas. Em Machado: Brás Cubas é morto (fora da lógica causal), egocêntrico e autopiedoso. Bentinho/Dom Casmurro é ciumento e retrospectivo — reconstrói o passado para justificar o presente. A leitura atenta revela contradições internas que o narrador não percebe ou deliberadamente esconde.",
          conjugation: "O narrador afirma X, mas os fatos sugerem Y. / A contradição entre A e B revela C. / O silêncio sobre D é tão significativo quanto o que é dito."
        },
        exercises: [
          { type: "analysis", prompt: "Por que Machado de Assis é considerado o maior escritor brasileiro? Argumente com 3 elementos.", answer: "Machado de Assis é consensualmente considerado o maior escritor brasileiro por três razões centrais. Primeiro, pela inovação formal: suas obras da segunda fase rompem com o Romantismo sentimental e antecipam o modernismo com narradores não confiáveis e estruturas fragmentadas. Segundo, pela profundidade crítica: sob a aparência de histórias íntimas, ele disseca as contradições da sociedade escravocrata e patriarcal brasileira do século XIX. Terceiro, pelo domínio estilístico: sua prosa combina precisão vocabular, ironia sofisticada e humor que produzem um efeito único de simultaneidade entre prazer estético e desconforto moral." },
          { type: "production", prompt: "Escreva um parágrafo analisando a ironia numa passagem machadiana que você conhece.", answer: "Em 'Memórias Póstumas de Brás Cubas', quando o narrador afirma ter sido 'um pouco usurário, sim' e imediatamente justifica a usura com argumentos filosóficos absurdos, Machado produz ironia de dupla camada: Brás Cubas não percebe que se autoincrimina enquanto tenta se absolver, e o leitor ri não apenas do personagem, mas da própria naturalidade com que a elite brasileira racionalizava seus vícios morais. A ironia aqui não é adorno estilístico, mas instrumento de crítica social." },
          { type: "analysis", prompt: "Capitu traiu Dom Casmurro? Apresente os dois lados do debate.", answer: "O debate sobre a fidelidade de Capitu é propositalmente irresolvível — e essa ambiguidade é o maior mérito do romance. Os que defendem a traição baseiam-se no ciúme obsessivo de Bentinho, na semelhança de Ezequiel com Escobar e nos 'olhos de ressaca' que hipnotizam. Os que a defendem inocente apontam que todo o relato vem de um narrador ciumento e autodestrutivo que reconstrói o passado para justificar sua própria crueldade. A genialidade de Machado está em não resolver: a ambiguidade é a resposta, pois revela que a 'verdade' narrativa depende sempre de quem narra e por quê." },
          { type: "fill", prompt: "O narrador ___ é aquele cujo relato é internamente ___ ou motivado por interesses ___ não declarados.", answer: "não confiável / contraditório / pessoais" },
          { type: "production", prompt: "Em que sentido 'Dom Casmurro' é mais sobre Dom Casmurro do que sobre Capitu?", answer: "Dom Casmurro é fundamentalmente um retrato psicológico do narrador, não de Capitu. Bentinho nos concede apenas sua versão dos fatos — uma versão construída décadas depois, moldada pela mágoa e pelo ciúme. Capitu, paradoxalmente a personagem mais discutida da literatura brasileira, nunca tem voz própria: só existe pelo filtro distorcido de um homem que a destruiu e que agora escreve para se absolver. O romance é, portanto, a autoapresentação involuntária de um narrador que, ao tentar condenar a esposa, se condena a si mesmo." }
        ]
      },
      {
        id: "C1-U3-L2",
        title: "Clarice Lispector: fluxo de consciência e linguagem",
        objectives: ["Analisar a prosa clariciana com vocabulário crítico C1", "Identificar o fluxo de consciência como técnica narrativa"],
        shadowingDialogue: {
          title: "A linguagem de Clarice",
          lines: [
            { speaker: "Pesquisador", text: "Clarice diz: 'Escrever é procurar entender'. O ato de escrever é o tema central de sua obra." },
            { speaker: "Leitora", text: "É como se a linguagem fosse um instrumento de sondagem da realidade, não de representação." },
            { speaker: "Pesquisador", text: "Precisamente. Ela questiona se a linguagem pode capturar a experiência vivida — e a resposta é sempre: não completamente." },
            { speaker: "Leitora", text: "Por isso a prosa dela é fragmentada, cheia de reticências e paradoxos?" },
            { speaker: "Pesquisador", text: "Exato. A forma é o conteúdo: a impossibilidade de dizer é dita através da forma de dizer." }
          ]
        },
        keyPhrases: [
          "Fluxo de consciência — stream of consciousness — monólogo interior",
          "A Paixão Segundo G.H. / A Hora da Estrela / Laços de Família",
          "Epifania — momento de revelação súbita do ordinário",
          "A linguagem como instrumento de sondagem — não representação, mas busca"
        ],
        guidedProduction: [
          "O que é fluxo de consciência? Como Clarice o usa?",
          "O que é uma epifania literária? Crie um exemplo em prosa.",
          "Por que Clarice é considerada experimental para seu tempo?"
        ],
        grammar: {
          title: "Fluxo de Consciência: Técnica e Análise C1",
          explanation: "Fluxo de consciência (stream of consciousness): técnica narrativa que reproduz o pensamento em sua fluidez, sem filtros lógicos ou temporais. Características: ausência de pontuação convencional, saltos temporais, associação livre de ideias, fusão de passado/presente/futuro, fusão narrador-personagem. Em Clarice: frases nominais, reticências, paradoxos, retomadas, circularidade. A epifania: momento em que o cotidiano revela algo essencial — inspirado em Joyce, desenvolvido por Clarice.",
          conjugation: "A prosa clariciana caracteriza-se por / O fluxo de consciência manifesta-se através de / A epifania emerge quando / A linguagem, em Clarice, funciona como"
        },
        exercises: [
          { type: "analysis", prompt: "Analise a técnica em: 'Não, não é fácil escrever. É duro como quebrar rochas. Mas voam faíscas.' (Clarice)", answer: "O fragmento demonstra três traços da prosa clariciana: a dificuldade de escrever como tema metalinguístico, a metáfora física (escrever = quebrar rochas) que transforma o abstrato em sensorial, e a conjunção adversativa 'mas' que introduz a compensação — 'voam faíscas' — sugerindo que da dificuldade nasce a beleza. A brevidade das frases e a pontuação cortante reforçam formalmente o que o conteúdo descreve: o esforço do escrito, a dureza necessária para que algo luminoso emerja." },
          { type: "production", prompt: "Escreva um parágrafo de fluxo de consciência de uma personagem acordando às 3 da manhã.", answer: "Três da manhã e o teto novamente, esse teto que não muda nunca, por que não muda, as rachaduras na mesma posição de ontem, de antes de ontem, do ano passado — mas eu sou outra, não sou? Ou sou a mesma que olha o teto e pensa que devia ter dito aquilo e não disse, porque palavras travam na garganta no momento errado e saem perfeitas às três da manhã quando não serve mais para nada. O silêncio barulhento da noite. Alguém respira ao lado. Isso é amor — essa respiração quieta, esse peso familiar no colchão? Fechar os olhos. Não ajuda." },
          { type: "fill", prompt: "Em 'A Hora da Estrela', o narrador ___ comenta a própria ___, criando um efeito de ___.", answer: "Rodrigo S.M. / narrativa / metaficção / metalinguagem" },
          { type: "analysis", prompt: "Por que Clarice Lispector é frequentemente associada a Kafka e Virginia Woolf?", answer: "Clarice partilha com Kafka a capacidade de tornar o cotidiano estranho e ameaçador — ambos transformam situações banais em revelações existenciais perturbadoras. Com Virginia Woolf, compartilha o uso do fluxo de consciência e a exploração da subjetividade feminina como território literário legítimo. Os três escrevem de dentro da consciência de suas personagens, sem a distância do narrador onisciente tradicional, e tratam a linguagem não como transparência, mas como material opaco e resistente. Clarice, porém, adiciona uma dimensão mística e corporal única, especialmente em 'A Paixão Segundo G.H.'." },
          { type: "production", prompt: "Escreva uma epifania literária: um momento cotidiano que revela algo essencial.", answer: "Foi lavar a louça que quebrou algo em mim — não dramaticamente, não com choro, mas com a água morna escorrendo pelos dedos e o sabão fazendo espuma e o prato girando lentamente, e de repente, de um lugar que não sei nomear, a certeza: este é o meu tempo também. Não o futuro prometido, não a memória do passado, mas este gesto repetido de cuidar. O prato limpo sobre o escorredor. Uma forma perfeita de amor que ninguém vê." }
        ]
      },
      {
        id: "C1-U3-L3",
        title: "Poesia brasileira: do Modernismo ao Concretismo",
        objectives: ["Analisar poemas brasileiros com rigor crítico C1", "Compreender a evolução da poesia brasileira do século XX"],
        shadowingDialogue: {
          title: "Leitura de poesia",
          lines: [
            { speaker: "Professora", text: "Drummond diz 'No meio do caminho tinha uma pedra'. A pedra é uma metáfora?" },
            { speaker: "Estudante", text: "É, mas é também literal. A força está na ambiguidade — pode ser qualquer obstáculo existencial." },
            { speaker: "Professora", text: "E a repetição anafórica? 'Tinha uma pedra... tinha uma pedra...' — o que cria?" },
            { speaker: "Estudante", text: "Um ritmo hipnótico, obsessivo. Como se o eu-lírico não conseguisse superar o trauma." },
            { speaker: "Professora", text: "Perfeito. Forma e conteúdo inseparáveis — a repetição formal é a pedra no caminho da própria leitura." }
          ]
        },
        keyPhrases: [
          "Carlos Drummond de Andrade — Manuel Bandeira — João Cabral de Melo Neto",
          "Verso livre — poema visual — concretismo — poesia social",
          "Eu-lírico — persona poética — voz poética ≠ autor",
          "A pedra no caminho / No meio do caminho / Sentimento do mundo"
        ],
        guidedProduction: [
          "Analise 'No meio do caminho tinha uma pedra' em 3 frases críticas.",
          "O que é o Concretismo poético? Dê um exemplo.",
          "Escreva um poema livre de 5 versos sobre uma cidade brasileira."
        ],
        grammar: {
          title: "Análise Poética C1",
          explanation: "Elementos: eu-lírico (voz que fala no poema ≠ autor), ritmo (regular ou livre), rima (consoante, toante, branca), metro (número de sílabas), estrofe (agrupamento de versos). Figuras: imagem poética, símbolo, sinestesia, elipse. Movimentos: Modernismo 1ª fase (ruptura), 2ª fase (social e introspectiva), 3ª fase (Geração de 45 — forma), Concretismo (poema-objeto visual, anos 50-60). João Cabral: 'engenharia' poética — máxima precisão, mínimo ornamento.",
          conjugation: "O poema constrói / evoca / problematiza / ressignifica / subverte / celebra / denuncia / questiona / afirma / nega"
        },
        exercises: [
          { type: "analysis", prompt: "Analise 'Poema de Sete Faces' de Drummond: 'Quando nasci, um anjo torto desses que vivem na sombra disse: Vai, Carlos! ser gauche na vida.'", answer: "O anjo torto — figura distorcida, das sombras — é a voz profética que condena o sujeito à marginalidade ('ser gauche'). A escolha da palavra francesa 'gauche' (canhoto, desajeitado, à esquerda) condensa múltiplos sentidos: o desajuste social, a marginalidade política e a posição do artista que vê o mundo de um ângulo oblíquo. O anjo 'torto' prefigura toda a poética drummondiana: a recusa de ser 'certinho', a estética do desvio, a subjetividade que não se encaixa. A forma exclamativa ('Vai, Carlos!') tem ironia trágica: é uma ordem disfarçada de encorajamento." },
          { type: "production", prompt: "Escreva uma análise de 4 frases de qualquer poema brasileiro que você conhece.", answer: "Em 'Vou-me embora pra Pasárgada' de Manuel Bandeira, o eu-lírico cria um espaço mítico de fuga como resposta à opressão cotidiana. A anáfora 'lá sou amigo do rei' e as enumerações de prazeres proibidos revelam que Pasárgada não é um lugar real, mas a utopia da liberdade. O humor leve mascara uma melancolia profunda: a fuga imaginária é necessária precisamente porque a realidade é insuportável. Bandeira transforma a evasão em poética e em crítica — fugir é também denunciar o de que se foge." },
          { type: "fill", prompt: "O ___ é a voz que fala no poema, e não deve ser confundida com o ___.", answer: "eu-lírico / autor / poeta" },
          { type: "analysis", prompt: "O que diferencia a poesia de João Cabral de Melo Neto da de Drummond?", answer: "Enquanto Drummond é um poeta da subjetividade e da emoção — o gauche que sente e pensa em versos —, João Cabral é o anti-lírico por excelência: rejeita o sentimentalismo, o ornamento, a musicalidade fácil. Sua poesia é 'construída', como ele mesmo define, com a precisão de uma engenharia: cada palavra é necessária, nada é decorativo. 'A educação pela pedra' é seu manifesto estético — a pedra como modelo de dureza, economia e resistência. Onde Drummond usa a pedra como metáfora existencial, João Cabral a usa como ideal formal." },
          { type: "production", prompt: "Escreva um poema livre de 6 versos sobre algo cotidiano usando uma figura de linguagem.", answer: "O café esfria na xícara — / ninguém o bebe, / mas ele continua esquentando / o silêncio da manhã / com sua fumaça que sobe / em forma de pergunta." }
        ]
      },
      {
        id: "C1-U3-L4",
        title: "Literatura e sociedade: raça, gênero e periferia",
        objectives: ["Analisar literatura de autores marginalizados com perspectiva crítica", "Relacionar obra literária com contexto social e político"],
        shadowingDialogue: {
          title: "Novas vozes na literatura",
          lines: [
            { speaker: "Escritora", text: "Carolina Maria de Jesus escreveu 'Quarto de Despejo' num Brasil que não a reconhecia como sujeito." },
            { speaker: "Debatedor", text: "É impressionante como o diário dela documenta a fome sem melodrama, com precisão quase jornalística." },
            { speaker: "Escritora", text: "Porque ela sabia que o excesso sentimental seria desacreditado. A linguagem seca é uma estratégia de sobrevivência textual." },
            { speaker: "Debatedor", text: "E hoje, autores como Conceição Evaristo e Ferréz continuam essa tradição de dentro para fora." },
            { speaker: "Escritora", text: "Sim. A 'literatura de periferia' não é um subgênero — é uma perspectiva que desloca o centro da narrativa brasileira." }
          ]
        },
        keyPhrases: [
          "Carolina Maria de Jesus — Quarto de Despejo — literatura de favela",
          "Conceição Evaristo — escrevivência — literatura afro-brasileira",
          "Ferréz / Allan da Rosa — literatura marginal / periférica",
          "Deslocamento do centro narrativo — quem narra / de onde narra / para quem"
        ],
        guidedProduction: [
          "O que é 'escrevivência' no conceito de Conceição Evaristo?",
          "Por que 'Quarto de Despejo' é um documento literário e histórico?",
          "Como a literatura periférica questiona o cânone literário?"
        ],
        grammar: {
          title: "Literatura Marginal e Pós-Colonial C1",
          explanation: "Conceitos: cânone (conjunto de obras consagradas), literatura marginal (produzida por/sobre margens sociais), escrevivência (Conceição Evaristo: escrita que nasce da experiência vivida, especialmente feminina e negra), lugar de fala (de onde se fala determina o que se pode dizer). Autores: Carolina de Jesus, Conceição Evaristo, Ferréz, Geovani Martins ('O Sol na Cabeça'), Itamar Vieira Junior ('Torto Arado'). Perspectiva: quem escreve, de onde, para quem — determina o que é visível na literatura.",
          conjugation: "A obra desloca / questiona / subverte / amplia / denuncia / celebra / recupera / legitima / ressignifica / visibiliza"
        },
        exercises: [
          { type: "analysis", prompt: "Por que 'Quarto de Despejo' de Carolina de Jesus é uma obra literária e não apenas um documento social?", answer: "'Quarto de Despejo' transcende o documento social pela qualidade literária da escrita de Carolina: sua prosa tem ritmo, ironia, imagens poéticas precisas e uma voz narrativa inconfundível. A autora usa a linguagem não apenas para registrar a miséria, mas para processar a experiência estética e moralmente — ela compara o Brasil a um 'quarto de despejo' onde se jogam os indesejáveis, e a favela como 'quarto de despejo do quarto de despejo'. Essa capacidade de metaforizar a própria condição eleva o diário ao estatuto literário, fazendo dele, simultaneamente, obra de arte e denúncia histórica." },
          { type: "fill", prompt: "A 'escrevivência' de Conceição Evaristo une ___ e ___, produzindo uma escrita que nasce da ___ feminina e negra.", answer: "escrita / vivência / experiência" },
          { type: "production", prompt: "Como a literatura periférica questiona quem tem direito a contar histórias? Argumente.", answer: "A literatura periférica questiona radicalmente a premissa de que a literatura 'universal' é produzida por e para um grupo específico — historicamente branco, masculino e letrado. Ao trazer narradores que habitam as margens — favelas, periferias, quilombos — esses textos não apenas adicionam novos temas, mas mudam fundamentalmente o ponto de vista narrativo. Como afirma Conceição Evaristo, não se trata de escrever sobre a periferia, mas de dentro dela, com as ferramentas da vivência. Isso desloca o centro e obriga o leitor a reconhecer que toda perspectiva é parcial — inclusive a consagrada pelo cânone." },
          { type: "analysis", prompt: "Como 'Torto Arado' de Itamar Vieira Junior se insere na tradição da literatura afro-brasileira?", answer: "'Torto Arado' continua e amplia a tradição da literatura afro-brasileira ao dar centralidade às mulheres negras do sertão baiano e às suas formas de resistência cultural e espiritual. A escolha das narradores — duas irmãs quilombolas — desloca o olhar para experiências historicamente invisibilizadas. Itamar usa o realismo mágico para incorporar o candomblé e a tradição oral como elementos estruturais da narrativa, recusando a dicotomia entre sagrado e cotidiano. A obra dialoga com Conceição Evaristo e Carolina de Jesus ao reivindicar que a experiência negra e feminina é matéria literária plena, não marginal." },
          { type: "production", prompt: "Escreva um parágrafo argumentando que a diversidade de vozes enriquece a literatura brasileira.", answer: "A incorporação de vozes antes marginalizadas — negras, periféricas, femininas, indígenas — não empobrece a literatura brasileira: a liberta de sua própria limitação. Uma literatura que narra apenas da perspectiva de uma elite letrada produz um país imaginário, não o país real. Quando Carolina de Jesus, Conceição Evaristo ou Ferréz escrevem, trazem à língua experiências, ritmos e metáforas que o cânone tradicional desconhecia. O resultado é uma literatura mais complexa, mais contraditória e, paradoxalmente, mais capaz de ser 'universal' — porque universal, de fato, só pode ser aquilo que inclui o maior número possível de humanidades." }
        ]
      },
      {
        id: "C1-U3-L5",
        title: "Revisão e produção integrada C1-U3",
        objectives: ["Integrar análise de Machado, Clarice, poesia e literatura periférica", "Produzir crítica literária completa em nível C1"],
        shadowingDialogue: {
          title: "Mesa-redonda literária",
          lines: [
            { speaker: "Moderadora", text: "O que une Machado, Clarice, Drummond e Carolina de Jesus numa tradição literária?" },
            { speaker: "Crítico A", text: "A capacidade de fazer da linguagem um instrumento de crítica — cada um à sua maneira." },
            { speaker: "Crítico B", text: "Machado pela ironia velada, Clarice pela sondagem interior, Drummond pelo gauche existencial." },
            { speaker: "Crítico A", text: "E Carolina pela precisão documental que se torna denuncia. Formas diferentes, impulso comum." },
            { speaker: "Moderadora", text: "O Brasil literário é tão diverso quanto o Brasil real — e talvez mais honesto sobre suas contradições." }
          ]
        },
        keyPhrases: [
          "Tradição literária brasileira — pluralidade de formas e vozes",
          "Do cânone ao marginal — da ironia ao fluxo de consciência",
          "A linguagem como resistência / denúncia / sondagem / celebração",
          "Análise integradora: forma + conteúdo + contexto + impacto"
        ],
        guidedProduction: [
          "Compare dois autores brasileiros em termos de estilo e propósito.",
          "Escreva uma crítica literária de 200 palavras sobre qualquer obra.",
          "O que a literatura brasileira revela sobre a identidade nacional?"
        ],
        grammar: {
          title: "Revisão C1-U3",
          explanation: "Consolida: narrador não confiável (Machado), fluxo de consciência (Clarice), análise poética (Drummond), literatura periférica (Carolina/Evaristo). Vocabulário crítico: narrador, persona, eu-lírico, epifania, ironia, fluxo de consciência, cânone, escrevivência, lugar de fala.",
          conjugation: "Fórmula de análise C1: [Autor] + [recurso/técnica] + [efeito] + [relação com contexto]. Ex: 'Machado usa o narrador não confiável para revelar as hipocrisias da elite carioca do século XIX.'"
        },
        exercises: [
          { type: "production", prompt: "Compare Machado de Assis e Clarice Lispector em termos de técnica narrativa (4 frases).", answer: "Machado e Clarice partilham a desconfiança em relação ao narrador convencional, mas por razões e meios distintos. Machado usa o narrador não confiável como instrumento de crítica social — Brás Cubas e Bentinho revelam involuntariamente a hipocrisia de sua classe. Clarice, por sua vez, dissolve a própria fronteira entre narrador e personagem através do fluxo de consciência, tornando a linguagem o tema de si mesma. Se Machado ironiza de fora, com distância, Clarice mergulha de dentro, sem rede." },
          { type: "production", prompt: "Escreva a abertura de uma crítica literária de 'A Hora da Estrela' de Clarice Lispector.", answer: "'A Hora da Estrela' (1977), último romance publicado em vida por Clarice Lispector, é simultaneamente a história mais simples e a obra mais complexa de sua carreira. A trama — uma nordestina pobre e sem talentos vivendo no Rio de Janeiro — é narrada por Rodrigo S.M., um alter ego masculino que comenta, questiona e sabota sua própria narrativa a cada parágrafo. Do ponto de vista formal, a obra é um tratado de metaficção: a história de Macabéa é pretexto para uma meditação sobre os limites da representação, a responsabilidade do escritor e a impossibilidade de capturar pela linguagem aquilo que é essencial no ser humano." },
          { type: "analysis", prompt: "Como a literatura brasileira reflete as contradições da sociedade nacional?", answer: "A literatura brasileira é um espelho fiel das contradições do país: a ironia de Machado revela a hipocrisia de uma elite que se diz civilizada enquanto se apoia na escravidão; Clarice ilumina a solidão e a alienação da modernidade urbana; Drummond captura o desajuste do intelectual num país em desenvolvimento acelerado; Carolina de Jesus documenta o que essa mesma modernidade produz em seus excluídos. Juntos, esses autores mapeiam a fratura fundamental do Brasil: a coexistência de sofisticação cultural e brutalidade social, de beleza e violência, de sonho e miséria — e a literatura não resolve essa contradição, mas a torna visível." },
          { type: "fill", prompt: "A tradição literária brasileira se caracteriza pela ___ de formas, vozes e perspectivas, refletindo a ___ do próprio país.", answer: "pluralidade / diversidade / complexidade" },
          { type: "production", prompt: "Qual obra literária brasileira você recomendaria a um estrangeiro para entender o Brasil? Justifique.", answer: "Recomendaria 'Quarto de Despejo' de Carolina Maria de Jesus por três razões. Primeiro, porque oferece uma perspectiva radicalmente diferente das narrativas dominantes: é escrito de dentro da favela, por uma mulher negra e pobre, sobre a experiência que o Brasil oficial preferia ignorar. Segundo, porque a força da escrita de Carolina — sua precisão, sua ironia, sua recusa do melodrama — demonstra que a voz literária não é privilégio da elite. Terceiro, porque o Brasil que o livro revela — desigual, contraditório, com uma população que sobrevive apesar do Estado — é o Brasil real, mais honesto e mais necessário de conhecer do que o país das praias e do carnaval." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 4 — Debates Filosóficos e Pensamento Crítico
  // ══════════════════════════════════════════════════════
  {
    id: "C1-U4",
    title: "Debates Filosóficos e Pensamento Crítico em Português",
    level: "C1",
    lessons: [
      {
        id: "C1-U4-L1",
        title: "Filosofia em português: grandes questões",
        objectives: ["Discutir questões filosóficas com vocabulário preciso C1", "Construir argumentos filosóficos em português"],
        shadowingDialogue: {
          title: "Debate filosófico",
          lines: [
            { speaker: "Filósofa", text: "A questão da identidade pessoal é central: o que faz com que você seja você ao longo do tempo?" },
            { speaker: "Estudante", text: "A continuidade da memória, talvez? Se perco a memória, perco a identidade?" },
            { speaker: "Filósofa", text: "Locke diria que sim. Hume, contudo, negaria a existência de um 'eu' substancial — apenas feixe de percepções." },
            { speaker: "Estudante", text: "E o budismo chega a conclusão semelhante por outro caminho: o 'eu' é uma ilusão construída." },
            { speaker: "Filósofa", text: "Percebe como questões filosóficas surgem independentemente em culturas distintas? Isso sugere que são genuinamente universais." }
          ]
        },
        keyPhrases: [
          "Ontologia (o que existe) / Epistemologia (o que podemos conhecer) / Ética (como agir)",
          "Identidade pessoal / livre-arbítrio / determinismo / consciência",
          "Argumento / premissa / conclusão / falácia / paradoxo / dilema",
          "A priori (independente da experiência) / a posteriori (derivado da experiência)"
        ],
        guidedProduction: [
          "Você acredita em livre-arbítrio? Construa um argumento filosófico.",
          "O que é identidade pessoal? Use um exemplo para ilustrar.",
          "Formule um dilema ético da vida contemporânea."
        ],
        grammar: {
          title: "Vocabulário Filosófico C1",
          explanation: "Ramos: ontologia (natureza do ser), epistemologia (natureza do conhecimento), ética (normas do agir), estética (natureza do belo), lógica (validade dos argumentos). Estrutura argumento: premissa 1 + premissa 2 → conclusão. Falácias comuns: ad hominem (atacar o falante), espantalho (distorcer o argumento), apelo à autoridade ilegítima, falsa dicotomia (só dois lados quando há mais). Filósofos referenciados no PB: Paulo Freire (educação), Darcy Ribeiro (identidade), Florestan Fernandes (sociologia crítica).",
          conjugation: "Se aceitamos que P1 e P2, então necessariamente Q. / Porém, se negarmos P2, a conclusão não se sustenta. / Isso implica / pressupõe / contradiz / corrobora / refuta"
        },
        exercises: [
          { type: "production", prompt: "Construa um argumento filosófico de 3 etapas sobre livre-arbítrio.", answer: "Premissa 1: Todo evento tem uma causa necessária — incluindo os estados cerebrais que produzem decisões. Premissa 2: Se as decisões são causadas por estados cerebrais, e esses são determinados por causas anteriores, então as decisões são determinadas. Conclusão: Se o determinismo é verdadeiro, o livre-arbítrio, entendido como capacidade de agir de outra forma nas mesmas circunstâncias, é uma ilusão. Contudo: os compatibilistas argumentam que livre-arbítrio e determinismo coexistem se definirmos liberdade como agir segundo nossos próprios desejos — mesmo que esses desejos sejam causalmente determinados." },
          { type: "fill", prompt: "A ___ estuda o que podemos conhecer e como; a ___ investiga o que existe; a ___ pergunta como devemos agir.", answer: "epistemologia / ontologia / ética" },
          { type: "production", prompt: "Formule o Dilema do Bonde em 3 frases e apresente duas posições éticas.", answer: "O Dilema do Bonde (trolley problem): um bonde desgovernado vai matar cinco pessoas; você pode desviar, mas matará uma. Devo agir? A posição utilitarista responde sim: cinco vidas valem mais que uma, e a ação maximiza o bem-estar total. A posição deontológica (kantiana) responde não: usar uma pessoa como meio para salvar outras viola a dignidade humana, independentemente do resultado; além disso, há uma distinção moral entre matar e deixar morrer." },
          { type: "analysis", prompt: "Por que falácias são perigosas no debate público e como identificá-las?", answer: "Falácias são erros de raciocínio que parecem convincentes mas não sustentam logicamente a conclusão. São perigosas no debate público porque exploram vieses cognitivos e emocionais em vez de apresentar evidências. A falácia ad hominem ataca o falante em vez do argumento ('você não pode falar sobre economia se nunca teve empresa'). A falsa dicotomia reduz questões complexas a dois extremos ('ou você é patriota, ou é traidor'). O espantalho distorce a posição adversária para facilitar o ataque. Identificá-las exige prática de pensamento crítico: sempre perguntar 'este argumento sustenta logicamente esta conclusão?'" },
          { type: "production", prompt: "O que é uma falácia ad hominem? Crie um exemplo e corrija-a.", answer: "A falácia ad hominem consiste em atacar a pessoa que apresenta um argumento em vez de refutar o argumento em si. Exemplo falacioso: 'Ele defende a redução dos impostos, mas nunca trabalhou na vida — não tem credibilidade.' Refutação: a validade de um argumento é independente de quem o apresenta. O que importa é se as premissas são verdadeiras e se a conclusão segue logicamente. Mesmo uma pessoa sem credibilidade pessoal pode apresentar argumentos logicamente válidos. A pergunta correta é: 'O argumento é sólido?' — não: 'Quem o apresenta?'" }
        ]
      },
      {
        id: "C1-U4-L2",
        title: "Ética contemporânea: dilemas do mundo real",
        objectives: ["Analisar dilemas éticos contemporâneos com rigor filosófico", "Argumentar eticamente usando múltiplas perspectivas"],
        shadowingDialogue: {
          title: "Ética da IA",
          lines: [
            { speaker: "Ética", text: "A IA generativa levanta questões éticas fundamentais: autoria, privacidade, viés algorítmico." },
            { speaker: "Engenheiro", text: "Do ponto de vista técnico, o modelo aprende com dados — se os dados têm viés, o modelo também terá." },
            { speaker: "Ética", text: "E isso não é um problema técnico apenas — é político: quem decide quais dados são usados?" },
            { speaker: "Engenheiro", text: "Há também a questão da responsabilidade: se uma IA toma uma decisão prejudicial, quem responde?" },
            { speaker: "Ética", text: "Essa é a pergunta central. A ética da IA exige que repensemos conceitos como responsabilidade e agência moral." }
          ]
        },
        keyPhrases: [
          "Ética da IA — viés algorítmico — responsabilidade moral — agência",
          "Privacidade de dados — consentimento — vigilância — LGPD",
          "Bioética — eutanásia — reprodução assistida — edição genética",
          "Ética ambiental — direitos das gerações futuras — especismo"
        ],
        guidedProduction: [
          "Quem é moralmente responsável quando uma IA comete um erro grave?",
          "Argumente sobre a eutanásia usando perspectivas éticas distintas.",
          "Temos obrigações morais com as gerações futuras? Por quê?"
        ],
        grammar: {
          title: "Ética Aplicada C1: Estruturas de Argumento",
          explanation: "Frameworks éticos: utilitarismo (maximizar bem-estar), deontologia (dever moral independente de consequências), ética das virtudes (o que faria uma pessoa virtuosa?), ética do cuidado (priorizar relações e vulnerabilidade). Aplicação: 1) Identificar o dilema. 2) Mapear os stakeholders afetados. 3) Aplicar cada framework. 4) Identificar convergências e divergências. 5) Posicionar-se com justificativa. Vocabulário: autonomia, beneficência, não-maleficência, justiça, dignidade, responsabilidade, consentimento.",
          conjugation: "Do ponto de vista utilitarista / Da perspectiva deontológica / Segundo a ética das virtudes / À luz da ética do cuidado / Considerando os princípios de"
        },
        exercises: [
          { type: "production", prompt: "Analise a eutanásia usando dois frameworks éticos distintos.", answer: "Do ponto de vista utilitarista, a eutanásia voluntária é eticamente defensável quando o sofrimento do paciente é intenso e irreversível, pois a morte piedosa maximiza o bem-estar ao eliminar sofrimento sem impor dano a terceiros. Da perspectiva deontológica kantiana, porém, a questão é mais complexa: se entendermos que a vida tem valor intrínseco e que o paciente é fim em si mesmo, a eutanásia pode ser lícita como expressão máxima da autonomia — mas problemática se houver pressão externa ou vulnerabilidade que comprometa o consentimento genuíno. A convergência dos dois frameworks está na centralidade do consentimento informado e autônomo como condição necessária." },
          { type: "fill", prompt: "O ___ analisa a ética pelas consequências; a ___ pelo dever moral; a ética das ___ pela excelência do caráter.", answer: "utilitarismo / deontologia / virtudes" },
          { type: "production", prompt: "Temos obrigações morais com as gerações futuras? Argumente filosoficamente.", answer: "A questão das obrigações intergeracionais é um dos desafios mais intrigantes da ética contemporânea. Utilitaristas argumentam que o sofrimento e o bem-estar futuros são moralmente equivalentes aos presentes — portanto, as gerações futuras têm peso moral igual às atuais. A teoria dos direitos pode sustentar que há direitos fundamentais — a um ambiente habitável, a recursos naturais mínimos — que se projetam no tempo independentemente de quem os detém. Contraargumento: não podemos ter obrigações com quem não existe; direitos pressupõem portadores. Resposta: as decisões de hoje criam as condições de existência de amanhã — nossas ações presentes são constitutivas do futuro, o que funda uma responsabilidade real, ainda que não clássica." },
          { type: "analysis", prompt: "Quem é moralmente responsável quando uma decisão de IA causa dano?", answer: "A responsabilidade moral por danos causados por IA é distribuída e não pode ser atribuída exclusivamente a nenhum agente isolado. Os desenvolvedores são responsáveis pelas escolhas de design e pelos dados de treinamento. A empresa que implanta o sistema responde pelas condições de uso e pelos riscos que aceita. O usuário tem responsabilidade pelo uso que faz da ferramenta. O Estado tem o dever de regular o ecossistema. O problema é que essa distribuição pode gerar 'vazios de responsabilidade' — cada agente aponta para os outros. A solução emergente envolve frameworks de governança que atribuem responsabilidade primária à entidade que mais se beneficia comercialmente do sistema." },
          { type: "production", prompt: "Formule uma posição ética sobre privacidade de dados e LGPD em 3 frases.", answer: "Do ponto de vista da autonomia individual, a privacidade de dados é um direito fundamental: as pessoas devem ter controle sobre informações que as definem como sujeitos. A LGPD (Lei Geral de Proteção de Dados, 2018) representa um avanço significativo ao exigir consentimento explícito e transparência no uso de dados pessoais. Contudo, sua efetividade depende de fiscalização rigorosa e de educação digital que permita aos cidadãos exercerem concretamente os direitos que a lei lhes confere." }
        ]
      },
      {
        id: "C1-U4-L3",
        title: "Identidade brasileira: raça, nação e cultura",
        objectives: ["Discutir identidade nacional com profundidade crítica C1", "Analisar o conceito de identidade em perspectiva filosófica e cultural"],
        shadowingDialogue: {
          title: "O que é ser brasileiro?",
          lines: [
            { speaker: "Antropólogo", text: "Darcy Ribeiro dizia que o Brasil é 'uma nação que ainda não foi' — em formação permanente." },
            { speaker: "Estudante", text: "E a 'democracia racial' de Gilberto Freyre? Não seria uma mitificação que obscurece o racismo real?" },
            { speaker: "Antropólogo", text: "Exatamente. Florestan Fernandes demoliu esse mito nos anos 60 com dados empíricos sobre desigualdade racial." },
            { speaker: "Estudante", text: "Então a identidade brasileira está fundada numa contradição: pluralidade cultural real e desigualdade racial também real?" },
            { speaker: "Antropólogo", text: "Precisamente. O Brasil é, ao mesmo tempo, um dos países mais diversos e um dos mais desiguais. Ambos são verdadeiros." }
          ]
        },
        keyPhrases: [
          "Darcy Ribeiro — 'O Povo Brasileiro' — nação em formação",
          "Gilberto Freyre — 'Casa Grande e Senzala' — democracia racial (mito)",
          "Florestan Fernandes — desigualdade racial empírica — sociologia crítica",
          "Identidade híbrida — mestiçagem — pluralidade cultural — desigualdade estrutural"
        ],
        guidedProduction: [
          "O que é o mito da democracia racial e por que persiste?",
          "O Brasil tem uma identidade nacional coerente? Argumente.",
          "Como a cultura afro-brasileira moldou a identidade nacional?"
        ],
        grammar: {
          title: "Identidade Nacional: Perspectivas Críticas C1",
          explanation: "Darcy Ribeiro ('O Povo Brasileiro', 1995): o brasileiro é produto de três matrizes (indígena, europeia, africana) fundidas num povo novo. Gilberto Freyre ('Casa Grande e Senzala', 1933): a miscigenação como singularidade positiva — mas subestima as hierarquias raciais. Florestan Fernandes: o mito da democracia racial oculta a persistência do racismo estrutural. Abdias do Nascimento: o 'genocídio cultural' da população negra. Perspectiva contemporânea: o Brasil é pluricultural mas não plurirracialmente equânime.",
          conjugation: "A identidade brasileira caracteriza-se por / é marcada por / não pode ser reduzida a / é simultaneamente / envolve a tensão entre / resulta da confluência de / é contestada por"
        },
        exercises: [
          { type: "analysis", prompt: "Por que o conceito de 'democracia racial' é considerado um mito?", answer: "O conceito de 'democracia racial', popularizado por Gilberto Freyre, sugere que o Brasil desenvolveu relações raciais harmoniosas graças à miscigenação e à intimidade da Casa Grande com a Senzala. Florestan Fernandes demonstrou empiricamente nos anos 60 que, apesar da mistura racial, as hierarquias raciais persistem intactas: negros e pardos concentram-se nos estratos mais baixos da pirâmide social, têm menor acesso à educação e saúde, e são sobre-representados nas estatísticas de violência. O mito é perigoso porque usa a pluralidade cultural real como argumento para negar a desigualdade racial também real, dificultando políticas de reparação como as cotas." },
          { type: "production", prompt: "O que une e o que divide a identidade brasileira? Argumente em 4 frases.", answer: "A identidade brasileira é paradoxalmente una em sua pluralidade: a língua portuguesa, o futebol, o carnaval e a culinária sincrética funcionam como cimento cultural de uma nação radicalmente diversa em etnias, regiões e classes. Mas essa unidade simbólica coexiste com divisões profundas: o Brasil que habita condomínio fechado e o que vive em favela compartilham o mesmo idioma e pouco mais. A contradição fundamental é que a riqueza cultural brasileira — fruto da confluência de matrizes africanas, indígenas e europeias — coexiste com a desigualdade histórica entre os grupos que a produziram. A identidade nacional, portanto, não é uma síntese harmoniosa, mas um campo de tensão em permanente negociação." },
          { type: "fill", prompt: "Darcy Ribeiro definiu o brasileiro como um '___ povo', resultado da ___ de três matrizes culturais distintas.", answer: "novo / confluência / mistura / fusão" },
          { type: "production", prompt: "Como a cultura afro-brasileira moldou a identidade nacional? Dê 3 exemplos concretos.", answer: "A influência afro-brasileira na identidade nacional é profunda e muitas vezes subvalorizada. Na música, o samba — e por extensão a MPB, o funk e o pagode — tem raízes diretas nas tradições rítmicas e melódicas africanas trazidas pelos escravizados. Na culinária, pratos fundamentais como acarajé, vatapá, feijoada e dendê são de origem africana ou afro-brasileira, constituindo o núcleo da identidade gastronômica do país. Na religiosidade, o candomblé e a umbanda moldaram não apenas as práticas espirituais de milhões, mas influenciaram inclusive o catolicismo popular brasileiro. Reconhecer essas contribuições é essencial para uma narrativa identitária honesta." },
          { type: "analysis", prompt: "Em que sentido o Brasil é, como dizia Darcy Ribeiro, 'uma nação que ainda não foi'?", answer: "Darcy Ribeiro entendia o Brasil como projeto inacabado — uma nação que ainda não realizou o potencial de sua extraordinária pluralidade. A formulação 'nação que ainda não foi' aponta para a distância entre o que o Brasil poderia ser — uma democracia genuinamente plural e equânime, fundada na riqueza de suas múltiplas matrizes culturais — e o que é: uma das sociedades mais desiguais do mundo, onde as hierarquias coloniais persistem sob novas formas. A frase é simultaneamente diagnóstico e utopia: reconhece o fracasso do presente sem renunciar à possibilidade do futuro. É uma identidade fundada não na afirmação do que se é, mas na promessa do que se poderia vir a ser." }
        ]
      },
      {
        id: "C1-U4-L4",
        title: "Argumentação oral avançada: conferência e debate C1",
        objectives: ["Realizar conferência e debate em nível C1 com fluência e precisão", "Usar recursos retóricos avançados em português"],
        shadowingDialogue: {
          title: "Conferência avançada",
          lines: [
            { speaker: "Conferencista", text: "Permita-me começar com uma provocação: e se tudo que sabemos sobre educação estiver errado?" },
            { speaker: "Conferencista", text: "Durante décadas, partimos do pressuposto que a transmissão de conteúdo era o objetivo central do ensino." },
            { speaker: "Conferencista", text: "Os dados, porém, contradizem esse pressuposto de forma contundente." },
            { speaker: "Conferencista", text: "Proponho, portanto, uma inversão: e se o objetivo central fosse ensinar a aprender?" },
            { speaker: "Conferencista", text: "Isso não é retórica — é uma mudança estrutural que algumas nações já implementaram com resultados extraordinários." }
          ]
        },
        keyPhrases: [
          "Abertura retórica: provocação / pergunta / dado surpreendente / citação",
          "Transições: 'o que nos leva a' / 'daí decorre que' / 'cabe aqui uma distinção'",
          "Credibilidade: 'os dados indicam' / 'pesquisas demonstram' / 'como veremos'",
          "Encerramento: síntese + convocação à ação + pergunta aberta"
        ],
        guidedProduction: [
          "Prepare uma abertura retórica de 30 segundos sobre um tema que você defende.",
          "Use 'daí decorre que' para encadear dois argumentos.",
          "Feche uma conferência com uma convocação à ação em 2 frases."
        ],
        grammar: {
          title: "Retórica Avançada C1: Dispositivo, Elocução, Actio",
          explanation: "Dispositio (estrutura): exórdio (captura atenção), narratio (apresenta o contexto), partitio (anuncia pontos), confirmatio (desenvolve argumentos), refutatio (responde ao contraditório), peroratio (conclusão + apelo). Elocutio (linguagem): figuras retóricas, variação de registro, precisão vocabular. Actio (performance oral): ritmo, pausa, ênfase, contato visual. Recursos retóricos: anáfora (repetição inicial), antítese, pergunta retórica, gradação, ironia.",
          conjugation: "Exórdio: 'Comecemos com uma provocação...' / 'Permitam-me uma questão inicial...' / 'Os dados que partilharei hoje mudarão...' / Peroratio: 'Em síntese...' / 'O que está em jogo é...' / 'Cabe a nós, portanto...'"
        },
        exercises: [
          { type: "production", prompt: "Escreva um exórdio de conferência sobre inteligência artificial (3-4 frases).", answer: "Permitam-me começar com um número: em 2023, pela primeira vez na história, uma IA passou no exame da Ordem dos Advogados dos EUA com nota acima da média humana. Não menciono isso para gerar alarme — mas para fazer uma pergunta que raramente nos permitimos fazer: e se não soubermos, de fato, o que a inteligência humana é? O que torna nossa cognição insubstituível — ou não? É exatamente essa questão que os avanços recentes em IA colocam sobre a mesa, e é ela que gostaria de explorar com vocês hoje." },
          { type: "production", prompt: "Escreva uma refutatio elegante para o argumento 'a IA vai acabar com todos os empregos'.", answer: "Essa perspectiva, embora compreensível, merece um exame mais cuidadoso. A história das revoluções tecnológicas — da imprensa à eletricidade, do computador à internet — mostra um padrão consistente: tecnologias que eliminam funções criam demanda por outras, frequentemente mais qualificadas e melhor remuneradas. O Fórum Econômico Mundial projeta que a IA, até 2025, eliminará 85 milhões de postos de trabalho — e criará 97 milhões. A questão não é se haverá emprego, mas se as políticas educacionais e de requalificação estarão à altura da velocidade da transformação." },
          { type: "production", prompt: "Escreva uma peroratio (conclusão + convocação) sobre o tema da diversidade educacional.", answer: "Em síntese, o que os dados, as evidências e a experiência internacional nos ensinam é que não existe um modelo educacional universal — e fingir que existe é garantir o fracasso. O que existe são princípios: respeito à diversidade, equidade de acesso, formação crítica e adaptabilidade. O que está em jogo não é o desempenho de nossos alunos nas próximas avaliações internacionais. É que tipo de seres humanos — e de cidadãos — estamos formando. Cabe a cada um de nós, educadores, gestores e pais, fazer essa pergunta antes de qualquer outra. Obrigado." },
          { type: "fill", prompt: "O ___ captura a atenção no início; a ___ responde aos contrapontos; a ___ sintetiza e convoca à ação.", answer: "exórdio / refutatio / peroratio" },
          { type: "production", prompt: "Responda oralmente (escreva o roteiro) a esta objeção num debate: 'Filosofia não serve para nada prático.'", answer: "Entendo a intuição — e ela é mais filosófica do que parece. A própria pergunta 'para que serve algo?' é uma questão filosófica de valor e finalidade. Mas respondendo diretamente: a filosofia é o fundamento de toda prática crítica. O médico que raciocina sobre ética clínica faz bioética. O engenheiro que pondera sobre risco e responsabilidade faz ética aplicada. O gestor que questiona a missão da empresa faz filosofia organizacional. A diferença entre alguém que pensa de forma irrefletida e alguém que pensa filosoficamente é a diferença entre reproduzir e questionar — e em tempos de complexidade crescente, questionar é a habilidade mais prática que existe." }
        ]
      },
      {
        id: "C1-U4-L5",
        title: "Revisão e produção integrada C1-U4",
        objectives: ["Integrar filosofia, ética, identidade e retórica em produção C1", "Demonstrar pensamento crítico sofisticado em português"],
        shadowingDialogue: {
          title: "Síntese filosófico-cultural",
          lines: [
            { speaker: "Moderadora", text: "O que une filosofia, ética e identidade como questões do nosso tempo?" },
            { speaker: "Filósofa", text: "A urgência. Nunca antes questões como 'quem somos' e 'como devemos agir' tiveram consequências tão rápidas e globais." },
            { speaker: "Cientista", text: "A IA, as mudanças climáticas, a desinformação — todas exigem respostas éticas que a ciência sozinha não fornece." },
            { speaker: "Filósofa", text: "Por isso a filosofia não é luxo acadêmico — é necessidade democrática. Uma cidadania que não pensa criticamente é vulnerável." },
            { speaker: "Moderadora", text: "E a literatura brasileira, nesse contexto, cumpre um papel: tornar visível o que a estatística não captura." }
          ]
        },
        keyPhrases: [
          "Filosofia como necessidade democrática — pensamento crítico como cidadania",
          "A urgência das questões éticas contemporâneas",
          "Literatura, filosofia e identidade como campos interconectados",
          "O intelectual público — responsabilidade de quem pensa e fala"
        ],
        guidedProduction: [
          "Conecte filosofia e literatura numa análise de 5 frases.",
          "Qual é a responsabilidade do intelectual na sociedade contemporânea?",
          "Produza uma conferência de 3 minutos sobre um tema filosófico atual."
        ],
        grammar: {
          title: "Revisão C1-U4",
          explanation: "Consolida: vocabulário filosófico (ontologia, epistemologia, ética, falácias), ética aplicada (frameworks, dilemas), identidade brasileira (Darcy, Freyre, Florestan), retórica avançada (exórdio, refutatio, peroratio).",
          conjugation: "Integração C1: [questão filosófica] + [perspectiva ética] + [contexto cultural brasileiro] + [produção crítica em português] = competência C1 plena"
        },
        exercises: [
          { type: "production", prompt: "Conecte um tema filosófico (livre-arbítrio, identidade ou ética) com a literatura brasileira em 4 frases.", answer: "A questão da identidade pessoal — um dos problemas centrais da filosofia — encontra na literatura brasileira expressões únicas e perturbadoras. Em Machado de Assis, a identidade é um constructo social frágil: Brás Cubas e Bentinho revelam que o 'eu' é uma narrativa que contamos sobre nós mesmos, repleta de lacunas e mentiras. Em Clarice Lispector, a identidade dissolve-se no fluxo da consciência: o 'eu' não é uma substância estável, mas um processo de busca incessante. A literatura brasileira, nesse sentido, antecipou filosoficamente o que Hume, Locke e os filósofos analíticos contemporâneos formularam em termos abstratos." },
          { type: "production", prompt: "Qual é a responsabilidade do intelectual na sociedade contemporânea? Argumente.", answer: "O intelectual público tem responsabilidade tripla na sociedade contemporânea. Primeiro, de rigor: falar com fundamento, distinguir opinião de fato, citar evidências — especialmente num contexto de desinformação crescente. Segundo, de acessibilidade: o conhecimento produzido na academia não cumpre função social se permanece inteligível apenas para especialistas; traduzir sem simplificar é a competência essencial do intelectual público. Terceiro, de coragem: nomear o que é estruturalmente problemático mesmo quando isso contraria interesses poderosos. Paulo Freire é o modelo brasileiro dessa responsabilidade: rigoroso, acessível e corajoso — pagou com exílio por isso." },
          { type: "production", prompt: "Escreva o roteiro de uma conferência de 3 minutos sobre 'O papel da filosofia num mundo de fake news'.", answer: "Exórdio: 'Em 2016, o dicionário Oxford elegeu 'pós-verdade' a palavra do ano. Não foi por acaso — foi um diagnóstico. E como todo bom diagnóstico, ele sugere uma pergunta: qual é o remédio?' [pausa] Narratio: 'Vivemos num ecossistema informacional onde a velocidade do compartilhamento supera a verificação dos fatos, onde a emoção vende mais do que a evidência e onde algoritmos maximizam engajamento, não veracidade.' Partitio: 'Quero argumentar que a filosofia — não como disciplina acadêmica, mas como conjunto de habilidades — é a resposta mais poderosa que temos. E farei isso em três passos: primeiro, o diagnóstico; segundo, a proposta; terceiro, o que cabe a você.' [desenvolve os três pontos] Peroratio: 'Pensar criticamente não é privilégio de quem estudou filosofia. É direito democrático. E num mundo de fake news, é a forma mais radical de resistência. Obrigado.'" },
          { type: "fill", prompt: "A identidade brasileira é ___ em sua pluralidade: diversidade cultural real e ___ racial também real.", answer: "paradoxalmente una / desigualdade" },
          { type: "production", prompt: "Em 3 frases, articule a conexão entre ética, identidade e cidadania.", answer: "A ética pergunta como devemos agir; a identidade pergunta quem somos; a cidadania é o espaço onde ambas as perguntas se tornam coletivas e políticas. Uma cidadania sem ética é poder sem responsabilidade; uma identidade sem ética é pertencimento sem justiça. O projeto democrático, em sua essência, é a tentativa de construir, coletivamente, respostas provisórias e negociadas a essas questões — e isso exige que cada cidadão seja, em alguma medida, filósofo." }
        ]
      }
    ]
  }
];
