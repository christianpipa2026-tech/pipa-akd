// C2 PART 1 — Unidades 1 y 2
// 12 lecciones · 60 ejercicios

export const C2_U1_U2 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 1 — Domínio Estilístico: Prosa de Alto Nível
  // ══════════════════════════════════════════════════════
  {
    id: "C2-U1",
    title: "Domínio Estilístico: Prosa de Alto Nível",
    level: "C2",
    lessons: [
      {
        id: "C2-U1-L1",
        title: "A frase como unidade estilística",
        objectives: ["Construir frases com precisão rítmica e semântica C2", "Analisar e imitar estilos de grandes prosadores brasileiros"],
        shadowingDialogue: {
          title: "O ritmo da prosa",
          lines: [
            { speaker: "Escritora", text: "Clarice escreveu: 'A vida se faz de escolhas e de abismos'. Onze palavras. Uma vida." },
            { speaker: "Aluno", text: "A brevidade não é pobreza — é precisão que pressupõe um leitor disposto a preencher os espaços." },
            { speaker: "Escritora", text: "Exato. A grande prosa confia no leitor. Não explica o que pode sugerir." },
            { speaker: "Aluno", text: "Machado também tem isso — a ironia funciona porque ele nunca explica a piada." },
            { speaker: "Escritora", text: "O não-dito é o território do estilo. O que se omite define tanto quanto o que se escreve." }
          ]
        },
        keyPhrases: [
          "Brevidade como precisão — não como pobreza",
          "O não-dito como território do estilo",
          "Ritmo da frase: curta (impacto) / longa (acumulação) / mista (variação)",
          "Confiança no leitor: sugerir em vez de explicar"
        ],
        guidedProduction: [
          "Reescreva em uma frase: 'Ela estava muito triste porque havia perdido algo muito importante para ela.'",
          "Crie uma frase longa de acumulação sobre uma cidade à noite.",
          "Escreva três versões da mesma ideia: curta, média e longa. Compare os efeitos."
        ],
        grammar: {
          title: "Ritmo e Arquitetura da Frase C2",
          explanation: "Frase curta: impacto, conclusão, revelação. 'Ela não voltou.' Frase longa (período composto por subordinação): acumulação, tensão, suspense antes da resolução. Frase mista: variação que cria ritmo musical. Técnicas: anáfora (repetição inicial para ritmo), assíndeto (ausência de conjunções para velocidade), polissíndeto (conjunções repetidas para peso). Em C2, o falante escolhe a estrutura pelo efeito desejado, não por acaso.",
          conjugation: "Anáfora: 'Havia barulho, havia fumaça, havia medo.' Assíndeto: 'Chegou, viu, foi embora.' Polissíndeto: 'E chovia e ventava e trovejava e ninguém dormia.'"
        },
        exercises: [
          { type: "rewrite", prompt: "Reescreva com máxima precisão: 'A situação era muito difícil e complicada e ninguém sabia o que fazer.'", answer: "Ninguém sabia. A situação não deixava saída." },
          { type: "production", prompt: "Escreva uma frase de acumulação (mínimo 40 palavras) descrevendo uma feira nordestina.", answer: "A feira chegava aos sábados com o sol ainda baixo, trazendo o cheiro de couro, de tempero, de fritura, de terra molhada da madrugada, os vendedores montando suas bancas antes que o dia esquentasse de vez, a cidade acordando aos poucos em torno daquele movimento que era, ao mesmo tempo, comércio e ritual e memória." },
          { type: "analysis", prompt: "Analise o efeito rítmico: 'Vim. Vi. Venci.' vs. 'Cheguei à cidade, observei cuidadosamente a situação e, por fim, alcancei a vitória.'", answer: "A versão curta (assíndeto + frases mínimas) cria impacto, velocidade e memória — três ações equivalentes, peso igual, sem hierarquia. A versão longa dilui o impacto com subordinação e qualificadores. Para expressar poder e determinação, o assíndeto é estilisticamente superior: a forma imita o conteúdo — decisivo, rápido, sem rodeios." },
          { type: "production", prompt: "Escreva o mesmo momento emocional (receber uma má notícia) em: a) uma frase curta; b) uma frase longa.", answer: "a) O telefone ficou na mão, frio.\n\nb) Ela ouviu as palavras, uma por uma, como se viessem de longe, de um lugar onde o som demora a chegar, e foi só quando a ligação terminou que percebeu que a xícara estava no chão e o café se espalhava devagar pelo azulejo branco." },
          { type: "production", prompt: "Imite o estilo de Clarice Lispector: escreva 3 frases sobre um objeto cotidiano que revelam algo sobre a condição humana.", answer: "A cadeira vazia tem uma presença que a cadeira ocupada não tem. Alguém a deixou assim — escolheu outro lugar, outra vida, outro rumo. E eu fico aqui, olhando para o que sobrou da ausência." }
        ]
      },
      {
        id: "C2-U1-L2",
        title: "Ironia, ambiguidade e subtexto em C2",
        objectives: ["Produzir e identificar ironia sofisticada em texto C2", "Usar o subtexto como ferramenta narrativa e argumentativa"],
        shadowingDialogue: {
          title: "A arte da ironia",
          lines: [
            { speaker: "Crítico", text: "Machado escreve sobre Brás Cubas: 'Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.' Com que tom?" },
            { speaker: "Aluno", text: "Parece resignação, mas é ironia amarga. Ele se vangloria de não perpetuar o sofrimento — o que é, em si, uma forma de sofrimento." },
            { speaker: "Crítico", text: "E o leitor que lê literalmente perde a camada mais rica do texto. A ironia pressupõe cumplicidade." },
            { speaker: "Aluno", text: "É uma espécie de teste: o leitor que entende a ironia entra num pacto com o autor." },
            { speaker: "Crítico", text: "Exatamente. A ironia cria comunidade entre os que percebem e exclui os que não percebem." }
          ]
        },
        keyPhrases: [
          "Ironia: dizer o contrário com intenção crítica — cumplicidade com o leitor",
          "Subtexto: o que a personagem não diz mas o leitor entende",
          "Ambiguidade produtiva: múltiplas leituras igualmente válidas",
          "Ironia dramática: o leitor sabe mais que a personagem"
        ],
        guidedProduction: [
          "Escreva uma frase irônica sobre a burocracia brasileira sem usar a palavra 'burocracia'.",
          "Crie um diálogo onde o subtexto contradiz o texto — dois personagens que dizem uma coisa e querem outra.",
          "Reescreva ironicamente: 'O governo resolveu todos os problemas da educação.'"
        ],
        grammar: {
          title: "Tipos de Ironia C2",
          explanation: "Ironia verbal: dizer o contrário do que se pensa. Ironia situacional: o resultado é oposto ao esperado. Ironia dramática: o leitor/espectador sabe mais que a personagem. Ironia socrática: fingir ignorância para revelar a ignorância do outro. Sarcasmo: ironia com intenção de ferir. Em C2, o domínio da ironia inclui saber quando cada tipo serve ao texto e como sinalizá-la sem explicá-la.",
          conjugation: "Marcadores de ironia sutil: 'evidentemente', 'naturalmente', 'como era de se esperar', 'surpreendentemente' — usados em contextos onde o oposto é verdadeiro."
        },
        exercises: [
          { type: "production", prompt: "Escreva um parágrafo ironicamente elogioso sobre o trânsito de São Paulo.", answer: "O trânsito paulistano oferece uma oportunidade única de meditação forçada — horas por dia de imobilidade contemplativa que nenhum retiro budista conseguiria replicar. Aprende-se, nos engarrafamentos, a virtude da paciência, a relatividade do tempo e a profunda inutilidade dos compromissos. É, sem dúvida, a contribuição mais original de São Paulo ao bem-estar mental de seus habitantes." },
          { type: "analysis", prompt: "Identifique e explique o subtexto: 'Você está muito bem hoje', disse ela, olhando para o relógio.", answer: "O subtexto contradiz o texto: 'você está bem' é um cumprimento social vazio, e olhar para o relógio enquanto o diz sinaliza desinteresse, pressa para encerrar a interação. A personagem está sendo socialmente cortês enquanto corporalmente demonstra o oposto. O leitor entende o subtexto; a pessoa cumprimentada pode ou não entender, criando uma potencial ironia dramática." },
          { type: "production", prompt: "Escreva um diálogo de 6 linhas onde dois personagens falam sobre o tempo mas na verdade estão terminando um relacionamento.", answer: "— Parece que vai chover.\n— É. A previsão era de sol a semana toda, mas a gente não pode confiar muito nessas previsões.\n— Não pode mesmo. As coisas mudam.\n— De repente, sem avisar.\n— Bom, eu preciso ir antes que venha.\n— Vai com cuidado. Nunca se sabe o que pode acontecer no caminho." },
          { type: "production", prompt: "Use ironia socrática: finja não entender algo que você claramente entende para revelar uma contradição.", answer: "Perdão minha ignorância, mas não entendo como uma lei que proíbe o nepotismo pode ter sido aprovada por um parlamento onde 40% dos membros têm parentes em cargos comissionados. Talvez alguém pudesse me explicar — de preferência alguém sem parentes no governo, para evitar conflito de interesses." },
          { type: "analysis", prompt: "Qual é a diferença entre ironia e sarcasmo? Dê um exemplo de cada.", answer: "Ironia é dizer o contrário com distância crítica e frequentemente certa elegância — o alvo pode não perceber imediatamente. 'Que maravilhosa forma de resolver o problema' dito sobre uma solução desastrosa. Sarcasmo é ironia com intenção de ferir, mais explícita e agressiva: 'Parabéns, você conseguiu piorar algo que já era péssimo.' A ironia convida à reflexão; o sarcasmo ataca. Em literatura, a ironia é mais duradoura; o sarcasmo envelhece mal." }
        ]
      },
      {
        id: "C2-U1-L3",
        title: "Pastiche, paródia e escrita criativa avançada",
        objectives: ["Produzir pastiche e paródia com domínio estilístico C2", "Escrever criativamente imitando e subvertendo estilos canônicos"],
        shadowingDialogue: {
          title: "Imitar para criar",
          lines: [
            { speaker: "Professora", text: "O pastiche não é cópia — é homenagem que exige domínio total do estilo imitado." },
            { speaker: "Aluno", text: "Para imitar Machado, preciso entender não só o vocabulário, mas a estrutura do pensamento dele." },
            { speaker: "Professora", text: "E a relação com o leitor — aquele olhar irônico que inclui o narrador na crítica que faz." },
            { speaker: "Aluno", text: "A paródia vai além: ela imita para subverter. O original está lá, mas deslocado, recontextualizado." },
            { speaker: "Professora", text: "Exato. Toda paródia pressupõe que o leitor conheça o original — é um diálogo entre dois textos." }
          ]
        },
        keyPhrases: [
          "Pastiche: imitação homenagem — capturar o espírito e o estilo",
          "Paródia: imitação crítica — subverter o original com humor ou crítica",
          "Estilização: absorver marcas do estilo sem copiar literalmente",
          "Intertextualidade ativa: o novo texto dialoga com o antigo"
        ],
        guidedProduction: [
          "Escreva 3 linhas no estilo de Machado de Assis sobre um aplicativo de delivery.",
          "Crie uma paródia do início de 'Grande Sertão: Veredas' ambientada numa reunião de condomínio.",
          "Escreva um parágrafo clariciano sobre o ato de pagar uma conta."
        ],
        grammar: {
          title: "Marcas Estilísticas dos Grandes Autores Brasileiros C2",
          explanation: "Machado de Assis: narrador em primeira pessoa reflexivo, ironia velada, aparte ao leitor, vocabulário preciso do séc. XIX, citações filosóficas. Clarice Lispector: fluxo de consciência, frases nominais, reticências, paradoxos, epifanias do cotidiano, linguagem que questiona a si mesma. Guimarães Rosa: neologismos, vocabulário sertanejo, sintaxe invertida, ritmo oral, fusão de erudição e popular. João Cabral: sem ornamento, precisão máxima, linguagem como pedra.",
          conjugation: "Estilo machadiano: 'Capítulo X — em que o autor...', parênteses explicativos irônicos, 'leitor amigo', referências clássicas. Clariciano: '...', frases que começam com 'E', substantivos abstratos como personagens."
        },
        exercises: [
          { type: "production", prompt: "Escreva 5 linhas no estilo de Machado de Assis sobre as redes sociais.", answer: "Capítulo MMXXIV — Das Redes Sociais e Suas Misérias. Não serei eu quem condene o hábito moderno de exibir a própria vida em pequenos fragmentos digitais, à espera da aprovação alheia. Brás Cubas, se vivesse hoje, teria certamente seu perfil verificado, e seus caprichos filosóficos caberiam bem em cento e quarenta caracteres. O que muda é o suporte; a vaidade é a mesma de sempre — e o leitor, meu caro leitor, reconhece em mim o que prefere não ver em si mesmo." },
          { type: "production", prompt: "Escreva uma paródia de abertura de conto rosiano ambientada numa fila de banco.", answer: "— Nonada. A fila começa no começo mas não tem fim que se veja. Sertão? — perguntou o homem atrás de mim. O sertão é aqui, respondi, e era verdade toda: entre a senha 347 e o guichê 2, medeia a mesma distância que separa o homem de Deus e do seu dinheiro. Travessia. O banco é enorme." },
          { type: "production", prompt: "Escreva 4 linhas claricianas sobre o ato de lavar a louça.", answer: "Lavar a louça é um ato que não deveria ser pensado. Quando se pensa, a água fica fria demais, o prato escorrega, a espuma some. Existe uma sabedoria dos gestos repetidos que a consciência estraga. Eu lavo a louça e procuro não saber que lavo." },
          { type: "analysis", prompt: "Identifique as marcas estilísticas em: 'O Nordeste não é um lugar. É uma condição. Quem o carrega no corpo sabe disso sem precisar ter nascido lá.'", answer: "Marcas: frase curta de impacto ('O Nordeste não é um lugar. É uma condição.') — estilo sentencioso; substantivo abstrato elevado a conceito ('condição'); 'carrega no corpo' — metáfora física do pertencimento; 'sem precisar ter nascido lá' — abertura inclusiva que universaliza. Estilo próximo ao ensaístico-literário contemporâneo, com influências de João Cabral (precisão) e da crônica moderna (brevidade)." },
          { type: "production", prompt: "Escreva uma paródia de texto acadêmico sobre o costume de tomar café.", answer: "O presente estudo objetiva analisar o fenômeno sociocultural da ingestão matinal de café no contexto brasileiro contemporâneo. Observa-se que o consumidor, ao se deparar com a ausência do referido beverage, apresenta sintomas de disfuncionalidade cognitiva e irritabilidade interpessoal que comprometem significativamente sua inserção no ambiente laboral. Conclui-se, portanto, que o café não é uma bebida — é uma condição epistemológica de possibilidade do dia de trabalho. Recomenda-se sua disponibilização como direito constitucional." }
        ]
      },
      {
        id: "C2-U1-L4",
        title: "Escrita não-linear e fragmentação narrativa",
        objectives: ["Produzir narrativas com estrutura não-linear em nível C2", "Usar fragmentação como recurso expressivo consciente"],
        shadowingDialogue: {
          title: "A narrativa que não obedece",
          lines: [
            { speaker: "Escritor", text: "Comecei pelo fim — a personagem já está morta na primeira linha. O leitor sabe. A questão é o como e o porquê." },
            { speaker: "Leitora", text: "Isso muda tudo. Cada cena anterior à morte ganha peso que não teria numa narrativa linear." },
            { speaker: "Escritor", text: "Exatamente. A não-linearidade não é só técnica — é semântica. O que vem primeiro na leitura parece mais importante." },
            { speaker: "Leitora", text: "Como em 'Memórias Póstumas' — começa com a morte e retroage. Machado já sabia disso." },
            { speaker: "Escritor", text: "E a fragmentação? Às vezes um parágrafo em branco diz mais que mil palavras." }
          ]
        },
        keyPhrases: [
          "In medias res: começar no meio da ação",
          "Analepse (flashback) e prolepse (flashforward) como recursos narrativos",
          "Fragmentação: espaços em branco como significado, elipse narrativa",
          "Stream of consciousness: pensamento sem filtro cronológico"
        ],
        guidedProduction: [
          "Comece uma história pela cena final e depois volte ao início.",
          "Escreva um parágrafo fragmentado que reproduza o pensamento caótico de alguém esperando um resultado médico.",
          "Use um espaço em branco como recurso narrativo — escreva o antes e o depois, omitindo o momento central."
        ],
        grammar: {
          title: "Técnicas Narrativas Avançadas C2",
          explanation: "In medias res: início no meio da ação (sem contexto inicial). Analepse: recuo no tempo para explicar o presente. Prolepse: avanço no tempo (antecipação). Elipse: omissão de eventos — o leitor deduz o que aconteceu. Stream of consciousness: reprodução do fluxo mental sem sintaxe ordenada. Multiperspectiva: o mesmo evento narrado por diferentes vozes. Em C2, o escritor domina todas essas técnicas e as escolhe conforme o efeito desejado.",
          conjugation: "Marcadores temporais em narrativa não-linear: 'anos antes', 'na tarde em que tudo começou', 'muito depois', 'naquele momento ela ainda não sabia que', 'o que ninguém viu foi'"
        },
        exercises: [
          { type: "production", prompt: "Escreva o início de uma história usando in medias res (8 linhas).", answer: "O vidro ainda estava no chão quando a polícia chegou. Três horas antes, nada disso teria parecido possível. Carolina servia café para os convidados, o marido ria de alguma coisa que ela não tinha ouvido, e a noite seguia como noites seguem — sem avisar o que guarda." },
          { type: "production", prompt: "Escreva um parágrafo de fluxo de consciência de alguém esperando um resultado de exame médico.", answer: "Sala branca demais, cadeira dura, o cheiro que não muda nunca nesses lugares, a revista com a capa rasgada que ninguém leu até o fim, quinze minutos que são uma hora que são um ano, ele vai entrar pela porta e vai falar e eu vou ouvir e antes de ouvir já vou saber pelo jeito que ele abrir a porta se é um jeito de sim ou um jeito de não e até lá fico aqui contando os quadros do linóleo no chão porque alguma coisa precisa ser contada." },
          { type: "production", prompt: "Escreva o antes e o depois de um beijo sem escrever o beijo — use o espaço em branco.", answer: "Ela estava falando sobre algo que agora não consigo lembrar — o tempo, talvez, ou a chuva, ou os planos para a semana. Eu ouvia e pensava em como as palavras às vezes são só ruído.\n\n\n\nA cidade lá fora era a mesma cidade, mas parecia ter trocado de cor. Ela olhou para o lado e sorriu para nada, e eu percebi que também estava sorrindo sem razão clara." },
          { type: "analysis", prompt: "Por que 'Memórias Póstumas de Brás Cubas' começa com a morte do narrador? Qual é o efeito narrativo?", answer: "Começar com a morte cria distância irônica absoluta: o narrador não tem mais nada a perder, logo pode ser completamente honesto — ou completamente desonesto — sem consequências. Liberta-o da cronologia: pode narrar em qualquer ordem, omitir, mentir, se contradizer. Para o leitor, saber que Brás Cubas está morto desde a primeira linha transforma toda a narrativa em retrospecto: cada momento tem o peso do que sabemos que virá. É também uma declaração filosófica — a vida só faz sentido (ou não faz) quando olhada de trás para frente." },
          { type: "production", prompt: "Escreva um fragmento narrativo multiperspectiva: o mesmo momento visto por duas pessoas diferentes (4 linhas cada).", answer: "Ela: O jantar estava esfriando mas ele ainda não tinha chegado. Dez minutos, depois vinte. Em algum momento parou de olhar para o relógio. Guardou o prato.\n\nEle: O trânsito havia parado completamente na ponte. Ligou três vezes; ela não atendeu. Quando chegou, as luzes da sala estavam apagadas e havia apenas um prato na pia, já lavado." }
        ]
      },
      {
        id: "C2-U1-L5",
        title: "Revisão e produção integrada C2-U1",
        objectives: ["Integrar ritmo, ironia, pastiche e narrativa não-linear em produção C2", "Demonstrar domínio estilístico pleno na escrita criativa"],
        shadowingDialogue: {
          title: "O escritor e seu estilo",
          lines: [
            { speaker: "Mentora", text: "No C2, você não imita mais — você tem um estilo. Mas saber imitar é o que prova que tem domínio." },
            { speaker: "Aluno", text: "Como saber quando um estilo é 'meu' e não uma imitação inconsciente de quem li?" },
            { speaker: "Mentora", text: "Quando você escolhe conscientemente tomar emprestado em vez de não saber que está tomando." },
            { speaker: "Aluno", text: "A diferença entre influência e plágio é a consciência da dívida?" },
            { speaker: "Mentora", text: "E a transformação. O que você tomou emprestado precisa sair diferente do que entrou." }
          ]
        },
        keyPhrases: [
          "Estilo próprio: influências conscientes transformadas",
          "Voz narrativa: quem fala, de onde, com que intenção",
          "Domínio C2: escolher qualquer técnica com consciência do efeito",
          "A escrita como artesanato: revisão, refinamento, coragem de cortar"
        ],
        guidedProduction: [
          "Escreva um texto de 150 palavras no seu próprio estilo sobre o tema 'cidade'.",
          "Identifique suas influências estilísticas e explique o que tomou de cada uma.",
          "Revise um texto antigo seu aplicando as técnicas de C2-U1."
        ],
        grammar: {
          title: "Revisão C2-U1",
          explanation: "Consolida: arquitetura da frase (ritmo, brevidade, acumulação), ironia e subtexto, pastiche e paródia, narrativa não-linear (in medias res, flashback, stream of consciousness, fragmentação).",
          conjugation: "Checklist estilístico C2: ✅ Cada frase tem uma razão rítmica ✅ Sem explicar o que pode ser sugerido ✅ Ironia sinalizada mas não explicada ✅ Estrutura serve ao efeito desejado ✅ Voz consistente ao longo do texto"
        },
        exercises: [
          { type: "production", prompt: "Escreva um texto de 120 palavras sobre 'esperar' usando pelo menos 3 técnicas estudadas nesta unidade.", answer: "Esperar é um verbo que não deveria existir no infinitivo — só no gerúndio, só no estou esperando, que é uma forma de tempo presente que não avança. Ela esperava na sala branca. (Três horas antes, havia chegado certa de que seria rápido. A recepcionista sorrira de um jeito que ela aprenderia a reconhecer só depois.) Agora: o relógio na parede, o chiado do ar-condicionado, a mulher ao lado que também esperava e não sabia que esperavam pela mesma coisa. Às vezes a espera é o momento em que duas vidas se aproximam sem se tocar. A porta se abriu. As duas olharam." },
          { type: "production", prompt: "Escreva uma paródia de 6 linhas de Drummond sobre pagar boleto.", answer: "No meio do mês havia um boleto.\nHavia um boleto no meio do mês.\nNunca me esquecerei desse acontecimento\nna vida de minhas finanças tão fatigadas.\nNunca me esquecerei que no meio do mês\nhavia um boleto, e havia juros." },
          { type: "analysis", prompt: "Analise seu próprio estilo de escrita: quais são suas marcas recorrentes?", answer: "[Resposta pessoal] Exemplo: 'Percebo que uso frases curtas após períodos longos para criar contraste rítmico. Tenho tendência a começar parágrafos com substantivos concretos antes de partir para o abstrato. Uso digressão parentética — influência de Machado que absorvi sem perceber. Minha maior dificuldade é confiar no leitor: ainda explico demais.'" },
          { type: "production", prompt: "Escreva o início de um conto (10 linhas) usando in medias res e ironia.", answer: "O elogio que destruiu a carreira de Mariana Braga foi publicado às 14h37 de uma terça-feira, num portal de nicho que ela mesma não sabia que existia. 'A melhor romancista da sua geração', dizia a manchete — e ali estava o problema: ela tinha 28 anos, havia publicado um livro, e a frase 'da sua geração' era lida, pelos demais membros dessa geração, como uma declaração de guerra. Até então, ninguém a odiava. A partir dali, todos tinham um motivo." },
          { type: "production", prompt: "Escreva uma cena de 8 linhas em que o espaço em branco (elipse) é o momento mais importante.", answer: "Eles conversaram por três horas sobre tudo exceto o que precisavam conversar. O café esfriou duas vezes. Ela reaqueceu. Ele aceitou mais uma xícara sem precisar.\n\n\n\nWhen the taxi arrived, they hugged for a moment too long. He said he'd call. She said yes. Both of them knew the word 'yes' could mean many things, and that night, it meant goodbye." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 2 — Língua Portuguesa: Variação, Norma e Poder
  // ══════════════════════════════════════════════════════
  {
    id: "C2-U2",
    title: "Língua Portuguesa: Variação, Norma e Poder",
    level: "C2",
    lessons: [
      {
        id: "C2-U2-L1",
        title: "Sociolinguística avançada: variação e mudança linguística",
        objectives: ["Analisar variação linguística com perspectiva sociolinguística C2", "Compreender mecanismos de mudança e resistência na língua"],
        shadowingDialogue: {
          title: "A língua que muda",
          lines: [
            { speaker: "Linguista", text: "Toda língua muda — o português de Camões é quase incompreensível para um falante contemporâneo sem treino." },
            { speaker: "Aluno", text: "E o que força a mudança? Contato com outras línguas? Pressão social?" },
            { speaker: "Linguista", text: "Ambos. E também a necessidade interna — quando novas realidades surgem, a língua precisa nomeá-las." },
            { speaker: "Aluno", text: "Como 'selfie', 'fake news', 'pix' — neologismos que surgem com a realidade que nomeiam." },
            { speaker: "Linguista", text: "E há resistência — puristas que querem 'preservar' a língua. Mas preservar é mumificar. Língua viva muda." }
          ]
        },
        keyPhrases: [
          "Variação diacrônica: mudança ao longo do tempo",
          "Variação diastrática: diferenças entre grupos sociais",
          "Neologismo / arcaísmo / empréstimo linguístico / decalque",
          "Purismo linguístico vs. descrição linguística"
        ],
        guidedProduction: [
          "Cite 5 palavras que entraram no português brasileiro nas últimas décadas e sua origem.",
          "Por que o purismo linguístico é uma posição politicamente conservadora?",
          "Como o contato com línguas indígenas moldou o léxico do PB?"
        ],
        grammar: {
          title: "Mecanismos de Mudança Linguística C2",
          explanation: "Mudança fonológica: alteração na pronúncia ao longo do tempo (latim 'filium' → português 'filho'). Mudança lexical: entrada de neologismos, desaparecimento de arcaísmos. Mudança semântica: alteração de significado ('virtude' em latim = 'força masculina'; hoje = 'qualidade moral'). Mudança sintática: a ordem SVO se consolidou no português moderno; o latim era mais livre. Contato linguístico: bilinguismo, pidgins, crioulos, empréstimos. O PB passou por todas essas mudanças — e continua mudando.",
          conjugation: "Neologismos recentes: deletar / tuitar / selfie / stalkear / dar match / cancelar (sentido social) / mitar / vazar (no sentido de ir embora)"
        },
        exercises: [
          { type: "analysis", prompt: "Por que dizer que alguém 'fala errado' é uma posição sociolinguisticamente insustentável?", answer: "Porque 'errado' pressupõe uma norma neutra e objetiva, quando na verdade toda norma é historicamente construída e reflete o poder de quem a estabelece. Do ponto de vista descritivo, não existe variedade linguística sem gramática — toda variedade tem regras sistemáticas, mesmo as estigmatizadas. 'A gente foram' não é 'erro': é concordância com o sentido semântico plural de 'a gente', presente em variedades que têm lógica própria. O que chamamos de 'erro' é frequentemente variação socialmente estigmatizada porque associada a grupos de menor prestígio." },
          { type: "production", prompt: "Identifique a origem e o processo de formação de: 'deletar', 'tuitar', 'estressante', 'checar'.", answer: "'Deletar': empréstimo do inglês 'delete' + sufixo verbal português '-ar'. 'Tuitar': empréstimo de 'tweet/Twitter' + adaptação morfológica ao PB. 'Estressante': empréstimo de 'stress' (inglês via latim) + sufixo adjetival '-ante'. 'Checar': empréstimo de 'check' + '-ar', disputado com 'verificar' (de origem latina). Todos são exemplos de empréstimo com adaptação morfológica — o PB não apenas toma a palavra, mas a 'aportuguesiza'." },
          { type: "analysis", prompt: "O que é um crioulo linguístico e como se formam? Há exemplos na lusofonia?", answer: "Um crioulo é uma língua estabilizada que emerge do contato intenso entre grupos que não compartilham língua comum, geralmente passando por um estágio de pidgin (sistema simplificado de comunicação). Na lusofonia: o crioulo cabo-verdiano (crioulo de base portuguesa com influências do wolof, mandinga e outras línguas africanas) é talvez o mais estudado. O palenquero, na Colômbia, tem base espanhola mas com elementos de línguas banto. No Brasil, alguns estudiosos identificam elementos crioulos no falar de comunidades quilombolas, embora o debate continue." },
          { type: "production", prompt: "Escreva um parágrafo sobre como o contato do português com línguas africanas moldou o PB.", answer: "O português falado no Brasil carrega marcas profundas do contato com centenas de línguas africanas, especialmente as de família banto (kimbundu, quicongo, iorubá). Além do léxico visível — samba, caçula, quitute, moleque, carimbo, bagunça, fubá —, pesquisadores identificam influências fonológicas (como a simplificação de grupos consonantais) e até sintáticas (como o uso de 'tá' como marcador discursivo e certas construções com objeto direto duplicado). O PB é, portanto, uma língua profundamente africana em sua expressividade cotidiana — um fato que o racismo estrutural frequentemente invisibiliza." },
          { type: "analysis", prompt: "O que é 'glocalização linguística' e como o PB exemplifica esse fenômeno?", answer: "Glocalização linguística é a adaptação de elementos globais a contextos locais — o global que se torna local. O PB exemplifica isso com a recepção de anglicismos: não os adota passivamente, mas os transforma morfologicamente ('deletar', 'printar', 'tuitar') e semânicamente ('cancelar' no sentido de boicote social, 'vazar' no sentido de sair). Além disso, cria neologismos a partir de base local que depois se globalizam: 'favela' entrou em várias línguas como empréstimo do PB. O Pix, desenvolvido no Brasil, criou um vocabulário próprio que está sendo adaptado em outros países." }
        ]
      },
      {
        id: "C2-U2-L2",
        title: "Política linguística e o futuro do português",
        objectives: ["Analisar políticas linguísticas com perspectiva crítica C2", "Discutir o lugar do português no mundo contemporâneo"],
        shadowingDialogue: {
          title: "Quem decide como se fala?",
          lines: [
            { speaker: "Pesquisadora", text: "O Acordo Ortográfico de 1990 foi uma decisão política tanto quanto linguística." },
            { speaker: "Estudante", text: "Política porque uniformiza — e uniformizar é sempre uma escolha que beneficia alguém." },
            { speaker: "Pesquisadora", text: "Beneficia quem quer um mercado editorial único, uma norma comum para livros didáticos." },
            { speaker: "Estudante", text: "Mas apaga as diferenças entre o português de Lisboa e o do Rio, de Luanda e de Maputo." },
            { speaker: "Pesquisadora", text: "E é aí que política linguística e poder se encontram: quem define a norma define quem 'fala certo'." }
          ]
        },
        keyPhrases: [
          "Acordo Ortográfico de 1990/2009 — unificação vs. diversidade",
          "Glotopolítica: relação entre língua e poder político",
          "Línguas em risco: preservação vs. línguas dominantes",
          "O futuro do português: demografia, tecnologia, geopolítica"
        ],
        guidedProduction: [
          "O Acordo Ortográfico foi uma boa ideia? Quais os argumentos prós e contras?",
          "Como a tecnologia (Google, IA) afeta as línguas minoritárias?",
          "O inglês ameaça o português no Brasil? Argumente."
        ],
        grammar: {
          title: "Glotopolítica e Política Linguística C2",
          explanation: "Glotopolítica: campo que estuda as relações entre língua e poder — quem decide o que é 'correto', quais línguas recebem suporte estatal, quais são suprimidas. Língua de herança: língua falada em casa mas não na escola/sociedade (japonês de descendentes no Brasil). Revitalização linguística: esforços para recuperar línguas ameaçadas (guarani no Brasil/Paraguai). Diglossia: situação em que duas variedades da mesma língua coexistem com funções sociais distintas (árabe clássico vs. árabe coloquial; PE vs. PB em contextos formais).",
          conjugation: "Termos C2 de política linguística: vernáculo / língua franca / língua veicular / língua de prestígio / língua subalterna / glotofagia (quando uma língua 'engole' outra) / diglossia / bilinguismo aditivo vs. subtrativo"
        },
        exercises: [
          { type: "analysis", prompt: "O que é 'glotofagia' e como o português a praticou historicamente?", answer: "Glotofagia (Louis-Jean Calvet) é o processo pelo qual uma língua dominante 'engole' e elimina línguas menores — através da colonização, da educação obrigatória na língua dominante, do prestígio social associado ao monolinguismo. O português praticou glotofagia sistematicamente no Brasil: a proibição das línguas gerais indígenas no séc. XVIII (Marquês de Pombal), a perseguição a falantes de línguas de imigrantes no Estado Novo, a supressão das línguas africanas durante a escravidão. Hoje, centenas de línguas indígenas estão em extinção no Brasil — processo que continua." },
          { type: "production", prompt: "Argumente: 'O inglês não ameaça o português no Brasil — o português ameaça as línguas indígenas.'", answer: "O pânico com a 'invasão do inglês' no português brasileiro é, em grande medida, um problema de elite: afeta quem lê contratos, assiste a séries legendadas, usa software. O português das classes populares permanece robusto e criativo. Enquanto isso, o verdadeiro processo de extinção linguística ocorre nas aldeias indígenas: de cerca de 1.300 línguas faladas no Brasil no séc. XVI, restam hoje menos de 150. A ameaça ao português é um anglicismo no vocabulário; a ameaça das línguas indígenas é a morte — e o agente dessa morte não é o inglês, é o português." },
          { type: "analysis", prompt: "Quais são os argumentos prós e contras do Acordo Ortográfico?", answer: "Pró: uniformização da escrita facilita o mercado editorial lusófono, reduz custos de adaptação de materiais, cria identidade gráfica comum. Sinaliza cooperação política entre países lusófonos. Contra: apaga diferenças legítimas entre variedades — palavras pronunciadas diferentemente em Lisboa e Rio recebem a mesma grafia, criando inconsistências. Impôs mudanças sem consulta ampla à sociedade. Não resolveu as diferenças profundas (vocabulário, sintaxe, pronúncia) enquanto criou ilusão de uniformidade. Linguistas dividem-se; escritores, em sua maioria, resistiram." },
          { type: "production", prompt: "Escreva um parágrafo sobre as línguas indígenas brasileiras e a urgência de sua preservação.", answer: "Das mais de 1.300 línguas indígenas faladas no Brasil no início da colonização europeia, restam hoje menos de 150, muitas delas com poucos falantes idosos e sem transmissão para as novas gerações. Cada língua que morre leva consigo uma forma única de organizar o mundo — categorias gramaticais sem equivalente em português, vocabulários específicos para ecossistemas que só aquela comunidade conhecia a fundo, narrativas orais que não existem em nenhum outro idioma. A urgência de documentação e revitalização não é apenas linguística: é epistemológica. Perdemos conhecimento que não pode ser recuperado." },
          { type: "analysis", prompt: "Como o crescimento da IA afeta as línguas com menor presença digital?", answer: "Modelos de linguagem como ChatGPT são treinados predominantemente em textos digitais — e a presença digital das línguas é profundamente desigual. Inglês domina; português tem presença razoável. Línguas indígenas, línguas africanas, crioulos: presença mínima ou nula. O resultado é que IA produz conteúdo de alta qualidade em inglês e qualidade decrescente em línguas menos representadas. Isso cria um ciclo: usuários migram para as línguas que a IA domina; as línguas menos representadas perdem mais usuários digitais; ficam ainda menos treinadas. A IA pode, portanto, acelerar o processo de extinção linguística — a menos que políticas ativas de inclusão digital multilíngue sejam implementadas." }
        ]
      },
      {
        id: "C2-U2-L3",
        title: "Análise do discurso: língua como ação política",
        objectives: ["Analisar discursos políticos e midiáticos com ferramentas da análise do discurso", "Identificar mecanismos de manipulação e resistência na linguagem"],
        shadowingDialogue: {
          title: "Palavras que fazem coisas",
          lines: [
            { speaker: "Analista", text: "Austin dizia: a linguagem não só descreve — ela age. 'Declaro aberta a sessão' não descreve uma abertura, cria uma abertura." },
            { speaker: "Estudante", text: "Os atos de fala. Mas no discurso político, as palavras costumam fazer o contrário do que dizem." },
            { speaker: "Analista", text: "Isso é o que Orwell chamou de 'Newspeak': 'Ministério da Paz' para o ministério da guerra." },
            { speaker: "Estudante", text: "E como identificar isso? Olhar para o que a linguagem faz, não só para o que diz." },
            { speaker: "Analista", text: "Exato. A análise do discurso pergunta: quem fala, para quem, em que contexto, e com que efeito de poder." }
          ]
        },
        keyPhrases: [
          "Atos de fala (Austin/Searle): a linguagem que age",
          "Análise crítica do discurso (Fairclough): língua e poder",
          "Eufemismo político: nomear para esconder",
          "Enquadramento (framing): como nomear define como pensar"
        ],
        guidedProduction: [
          "Analise o eufemismo 'pacificação' usado para operações militares em favelas.",
          "Como o enquadramento muda a percepção: 'imigrante' vs. 'refugiado' vs. 'invasor'.",
          "Identifique mecanismos de manipulação num discurso político que você conhece."
        ],
        grammar: {
          title: "Análise do Discurso C2: Ferramentas",
          explanation: "Ato de fala (performativo): linguagem que faz coisas — prometer, declarar, ordenar, batizar. Eufemismo: suavizar o impacto de algo negativo — 'desligamento' para demissão, 'dano colateral' para morte civil. Disfemismo: tornar algo negativo ainda mais negativo — 'invasor' para imigrante. Enquadramento (framing): a escolha de palavras ativa esquemas mentais — 'combate às drogas' vs. 'política de redução de danos'. Pressuposição: o que é dado como verdade sem ser afirmado — 'Quando você parou de bater em sua esposa?' presupõe que você batia.",
          conjugation: "Verbos performativos: declarar / prometer / ordenar / batizar / condenar / absolver / nomear / demitir — sua enunciação é a ação, não a descrição de uma ação."
        },
        exercises: [
          { type: "analysis", prompt: "Analise os eufemismos: 'desligamento' (demissão), 'dano colateral' (morte civil), 'intervenção humanitária' (invasão militar).", answer: "'Desligamento': o trabalhador é 'desligado' como se fosse um aparelho — neutraliza o impacto humano e a responsabilidade moral do empregador. 'Dano colateral': transforma mortes humanas em efeito secundário técnico de uma operação — desumaniza as vítimas e isenta juridicamente os responsáveis. 'Intervenção humanitária': inverte o significado — nomeia invasão com vocabulário de ajuda, criando legitimidade moral para o uso da força. Em todos os casos, o eufemismo serve ao poder: protege quem age, invisibiliza quem sofre." },
          { type: "production", prompt: "Como o enquadramento (framing) muda a percepção pública de um problema? Use o exemplo de 'criminalidade' vs. 'desigualdade'.", answer: "Enquadrar a violência urbana como 'criminalidade' ativa um esquema mental de segurança pública: a solução é policial, penal, de repressão. Enquadrá-la como 'consequência da desigualdade' ativa um esquema de política social: a solução é redistribuição, educação, oportunidade. O problema empírico pode ser o mesmo (altas taxas de homicídio em periferias), mas o enquadramento determina quais soluções parecem razoáveis. Governos que querem mais policiamento escolhem o primeiro enquadramento; os que querem investimento social, o segundo. A escolha da palavra não é neutra — é um ato político." },
          { type: "analysis", prompt: "Identifique as pressuposições em: 'Quando o Brasil vai parar de ser corrupto?'", answer: "A pergunta pressupõe: 1) que o Brasil é (sempre foi) corrupto — afirmação não demonstrada mas tratada como óbvia; 2) que a corrupção é uma característica do país, não de grupos específicos — generalização que invisibiliza atores concretos; 3) que há um 'parar', ou seja, que a situação é transitória e reversível — pode ser otimismo ou pode ser manipulação (sugerindo que basta uma mudança política). A pergunta parece neutra mas carrega um conjunto de crenças que quem responde aceita ao responder — sem perceber que deveria questioná-las primeiro." },
          { type: "production", prompt: "Escreva dois textos sobre a mesma notícia com enquadramentos opostos (4 linhas cada).", answer: "Enquadramento 1 (segurança): 'Polícia prende traficante em operação bem-sucedida no Complexo do Alemão. A ação resultou na apreensão de 50kg de drogas e dois suspeitos. A comunidade pode respirar mais aliviada com a presença do Estado nas áreas dominadas pelo crime.'\n\nEnquadramento 2 (direitos humanos): 'Operação policial no Complexo do Alemão deixa moradores em pânico e escolas fechadas pelo terceiro dia consecutivo. A presença ostensiva das forças de segurança interrompe a rotina de 30 mil pessoas, enquanto o tráfico permanece estrutural.'" },
          { type: "analysis", prompt: "O que é 'Newspeak' em Orwell e como se manifesta em discursos contemporâneos?", answer: "Em '1984', Orwell cria uma língua onde as palavras são sistematicamente invertidas para impossibilitar o pensamento dissidente: 'Guerra é Paz', 'Liberdade é Escravidão'. O objetivo é que certas ideias se tornem literalmente impensáveis por falta de vocabulário. Manifestações contemporâneas: 'pós-verdade' para mentira sistemática, 'notícias alternativas' para desinformação intencional, 'flexibilização trabalhista' para redução de direitos, 'gestão de expectativas' para frustrar promessas. Em todos os casos, a linguagem é mobilizada para fazer o inaceitável parecer natural — ou para tornar o inaceitável literalmente inominável." }
        ]
      },
      {
        id: "C2-U2-L4",
        title: "Tradução e intraduzibilidade: o que se perde e o que se ganha",
        objectives: ["Refletir sobre os limites e possibilidades da tradução", "Identificar conceitos e expressões intraduzíveis do português"],
        shadowingDialogue: {
          title: "O impossível da tradução",
          lines: [
            { speaker: "Tradutora", text: "Toda tradução é uma traição, dizem. Mas traição a quê? Ao texto original? Ao autor? Ao leitor?" },
            { speaker: "Aluno", text: "Talvez ao pressuposto de que dois textos em línguas diferentes podem ser equivalentes." },
            { speaker: "Tradutora", text: "Exato. 'Saudade' não tem equivalente em inglês — mas posso explicar em inglês o que é saudade." },
            { speaker: "Aluno", text: "A explicação é sempre mais longa que a palavra. A palavra comprime uma experiência cultural inteira." },
            { speaker: "Tradutora", text: "Por isso traduzir não é substituir palavras — é negociar mundos. E nessa negociação, algo sempre se perde e algo novo sempre emerge." }
          ]
        },
        keyPhrases: [
          "'Traduttore, traditore' — traduzir é trair, mas também criar",
          "Intraduzibilidade: saudade / jeitinho / malandragem / ginga",
          "Equivalência dinâmica (Nida): o efeito, não a forma",
          "Tradução como ato cultural: o que uma cultura consegue dizer"
        ],
        guidedProduction: [
          "Explique 'saudade' para alguém que nunca sentiu e não tem palavra para isso.",
          "O que se perde quando um poema é traduzido? O que pode se ganhar?",
          "Traduza mentalmente: há algo em sua língua nativa que não tem equivalente em português?"
        ],
        grammar: {
          title: "Intraduzibilidade C2: Conceitos Culturalmente Específicos",
          explanation: "Palavras do PB sem equivalente direto: saudade (nostalgia + antecipação + pertencimento), jeitinho (criatividade relacional para contornar obstáculos), malandragem (astúcia social não-violenta, entre esperteza e pilantragem), ginga (fluidez corporal e social, adaptabilidade), moleque (criança de rua com conotação de malícia afetiva), perrengue (situação difícil com conotação de superação cômica), bagunça (desordem criativa, não necessariamente negativa). Cada uma dessas palavras carrega uma forma de ver o mundo.",
          conjugation: "Intraduzíveis clássicos: alemão Schadenfreude (prazer na desgraça alheia) / japonês wabi-sabi (beleza imperfeita) / dinamarquês hygge (aconchego social) / português saudade / russo toska (angústia vaga) — cada um nomeia uma experiência que outras línguas descrevem em muitas palavras."
        },
        exercises: [
          { type: "production", prompt: "Escreva uma explicação de 'saudade' para alguém que nunca sentiu a palavra.", answer: "Saudade é o estado de quem sente falta de algo ou alguém que amou — mas não é só isso. É também a presença desse algo ou alguém na ausência: sentir saudade é, paradoxalmente, ter perto o que está longe. Difere da nostalgia porque não é apenas orientada para o passado: pode-se ter saudade de algo que ainda não aconteceu, de uma vida que não se viveu, de uma pessoa que ainda não se conheceu. É um sentimento que habita o tempo de modo estranho — entre memória e desejo, entre dor e prazer. Os portugueses e brasileiros chamam isso de uma só palavra porque aprenderam, culturalmente, que esse estado complexo merece um nome próprio." },
          { type: "analysis", prompt: "O que se perde e o que se ganha na tradução de 'Grande Sertão: Veredas' para o inglês?", answer: "Perde-se: o ritmo oral sertanejo, os neologismos intraduizíveis, a musicalidade da sintaxe invertida, as palavras que Rosa inventou e que não existem nem em português padrão. A sonoridade — fundamental no original — não tem equivalente. Ganha-se: a possibilidade de que leitores de outras línguas acessem a profundidade filosófica da obra, as questões universais sobre bem e mal, diabo e redenção. A tradutora Harriet de Onís tentou capturar o dialeto com arcaísmos do inglês, criando algo novo — não o original, mas um texto que carrega o espírito do original em nova forma. Toda grande tradução é uma segunda obra-prima." },
          { type: "production", prompt: "Explique 'malandragem' para um estudante estrangeiro, incluindo suas dimensões culturais.", answer: "Malandragem é um conceito brasileiro que descreve uma forma de navegação social — a habilidade de se mover pelo mundo com astúcia, flexibilidade e certo charme, contornando obstáculos sem conflito frontal. O malandro não enfrenta o sistema de frente: ele dança com o sistema, encontra as frestas, usa o jeitinho. Tem conotação ambígua: admiração pela esperteza e desconfiança da desonestidade. O malandro clássico da literatura — Macunaíma, o Zé Carioca, os personagens de Jorge Amado — é simpático e indigno ao mesmo tempo. É um conceito que só existe em culturas onde a lei é negociável e a sobrevivência exige criatividade." },
          { type: "analysis", prompt: "Por que 'equivalência dinâmica' (Nida) é preferível à 'equivalência formal' em tradução literária?", answer: "A equivalência formal busca reproduzir a estrutura do original: mesma ordem de palavras, mesmas figuras, mesmos registros. O resultado frequentemente soa estranho na língua-alvo porque as línguas têm estruturas diferentes. A equivalência dinâmica (Eugene Nida) busca reproduzir o efeito: o texto traduzido deve causar no leitor da língua-alvo o mesmo impacto que o original causou no leitor da língua-fonte. Para literatura, isso é geralmente superior: um poema que causa admiração em português deve causar admiração em inglês — mesmo que para isso a forma precise mudar. O que importa é a experiência do leitor, não a fidelidade à superfície." },
          { type: "production", prompt: "Há alguma palavra ou conceito em sua língua nativa que não tem equivalente em português? Explique-o.", answer: "[Resposta pessoal — exemplo em espanhol]: 'Madrugada' é muitas vezes citada como equivalente, mas o espanhol tem 'trasnochar' (ficar acordado até tarde/madrugada) que não tem equivalente exato em português — 'passar a noite em claro' é mais longo. 'Sobremesa' no sentido espanhol (a conversa depois da refeição, ainda à mesa) é mais específico que 'mesa' em português. 'Pena ajena' (vergonha que se sente pelo constrangimento alheio) tem o japonês 'kimochi warui' similar, mas em português só temos a explicação, não a palavra." }
        ]
      },
      {
        id: "C2-U2-L5",
        title: "Revisão e produção integrada C2-U2",
        objectives: ["Integrar sociolinguística, política linguística, análise do discurso e tradução", "Produzir análise linguística sofisticada em nível C2"],
        shadowingDialogue: {
          title: "A língua como campo de batalha",
          lines: [
            { speaker: "Professora", text: "Toda luta social é também uma luta pela linguagem — quem nomeia, controla." },
            { speaker: "Aluno", text: "Por isso movimentos sociais sempre criam vocabulário novo: 'racismo estrutural', 'mansplaining', 'capacitismo'." },
            { speaker: "Professora", text: "E por isso a reação conservadora sempre tenta proibir essas palavras — negar o vocabulário é negar a realidade que ele nomeia." },
            { speaker: "Aluno", text: "A língua não reflete a realidade — ela a constitui parcialmente." },
            { speaker: "Professora", text: "Sapir-Whorf, em versão fraca: a língua que falamos molda o que conseguimos pensar. E o que conseguimos pensar molda o que conseguimos fazer." }
          ]
        },
        keyPhrases: [
          "Linguagem como campo de poder — quem nomeia, controla",
          "Neologismo social: novas palavras para novas realidades políticas",
          "Hipótese de Sapir-Whorf: a língua molda o pensamento",
          "Resistência linguística: criar vocabulário como ato político"
        ],
        guidedProduction: [
          "Como neologismos sociais ('racismo estrutural', 'mansplaining') mudam debates públicos?",
          "A hipótese de Sapir-Whorf implica que línguas diferentes produzem pensamentos diferentes?",
          "Escreva sobre a língua como ferramenta de resistência cultural."
        ],
        grammar: {
          title: "Revisão C2-U2",
          explanation: "Consolida: variação e mudança linguística, glotopolítica, análise do discurso (atos de fala, eufemismo, enquadramento), intraduzibilidade e tradução.",
          conjugation: "Vocabulário C2-U2: glotopolítica / glotofagia / diglossia / variedade de prestígio / vernáculo / enquadramento / ato de fala performativo / equivalência dinâmica / intraduzibilidade / hipótese de Sapir-Whorf"
        },
        exercises: [
          { type: "production", prompt: "Como a criação do termo 'racismo estrutural' mudou o debate sobre raça no Brasil?", answer: "Antes do termo 'racismo estrutural' se popularizar, o debate frequentemente se limitava ao racismo individual — atos explícitos de discriminação por indivíduos. O termo, ao nomear o racismo como característica do sistema (e não apenas de pessoas racistas), deslocou o campo de análise: passou a ser possível discutir como instituições, políticas públicas e estruturas econômicas produzem desigualdade racial independentemente das intenções individuais. Isso teve efeito político concreto: tornou mais difícil descatar denúncias com 'mas fulano não é racista' — porque o argumento passou a ser sobre estruturas, não sobre intenções. Nomear foi um ato de poder." },
          { type: "analysis", prompt: "A hipótese de Sapir-Whorf (versão fraca): a língua que falamos influencia o que conseguimos pensar?", answer: "A versão fraca da hipótese (relativismo linguístico) — que a língua influencia (sem determinar) o pensamento — tem suporte empírico crescente. Estudos mostram: falantes de línguas com vocabulário mais rico para cores distintas as percebem mais rapidamente; línguas com sistemas espaciais absolutos (norte/sul/leste/oeste em vez de esquerda/direita) produzem falantes com orientação espacial superior; línguas com tempos verbais distintos para futuro próximo e remoto correlacionam com diferentes atitudes de poupança. No caso de saudade: não que não-lusófonos não sintam o que ela descreve — mas ter uma palavra facilita identificar, expressar e refletir sobre o sentimento." },
          { type: "production", prompt: "Escreva um parágrafo sobre a língua como instrumento de resistência cultural — use exemplos brasileiros.", answer: "A língua é um dos territórios mais resistentes à colonização — e também um dos mais contestados. No Brasil, a sobrevivência de elementos africanos na língua cotidiana — samba, caçula, moleque, axé, dendê — é resistência que durou cinco séculos apesar da violência do sistema escravagista. A língua geral nheengatu, suprimida por Pombal no séc. XVIII, sobrevive na Amazônia e foi declarada co-oficial no município de São Gabriel da Cachoeira. O candomblé preservou o iorubá em rituais por gerações. E hoje, o movimento negro ressignifica termos: 'preto' e 'pardo', antes estigmatizados, tornam-se identidade e orgulho. Cada uma dessas escolhas linguísticas é um ato político de afirmação." },
          { type: "analysis", prompt: "Por que proibir certas palavras (em escolas, por exemplo) é uma forma de exercício de poder?", answer: "Proibir vocabulário é negar a realidade que ele nomeia — e, ao mesmo tempo, afirmar que quem tem o poder de nomear é quem pode proibir. Quando se proíbe 'gênero' ou 'racismo' em materiais didáticos, não se apaga o fenômeno: apaga-se a ferramenta conceitual para discuti-lo. O resultado é que estudantes ficam sem vocabulário para analisar sua própria realidade — o que beneficia quem quer que essas realidades permaneçam não-examinadas. Foucault mostrou que o poder opera tanto pelo discurso quanto pela repressão do discurso: controlar o que pode ser dito é controlar o que pode ser pensado e, eventualmente, feito." },
          { type: "production", prompt: "Em 5 frases, explique por que o português brasileiro é politicamente importante no cenário global.", answer: "O português brasileiro é falado por mais de 215 milhões de pessoas, tornando o Brasil o quinto país mais populoso do mundo e o maior falante único de português na história. Como a língua com maior crescimento projetado nas próximas décadas (devido ao crescimento demográfico africano e à influência cultural brasileira), o PB tem peso geopolítico crescente. A produção cultural em PB — música, cinema, literatura, futebol — cria demanda global espontânea pela língua, o que nenhuma política linguística consegue comprar. O Brasil, como membro dos BRICS e líder do Sul Global, usa o português como instrumento diplomático em África e América Latina. Por fim, a diversidade interna do PB — suas variações regionais, sociais e étnicas — o torna um laboratório único de vitalidade linguística." }
        ]
      }
    ]
  }
];
