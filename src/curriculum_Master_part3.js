// MASTER PART 3 — Unidades 5, 6, 7 e 8
// 24 lecciones · 120 ejercicios

export const MASTER_U5_U8 = [

  // ══════════════════════════════════════════════════════
  // UNIDADE 5 — Sociolinguística e Análise do Discurso Avançada
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U5",
    title: "Sociolinguística e Análise do Discurso Avançada",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U5-L1",
        title: "Variação em tempo real: como o PB está mudando agora",
        objectives: ["Identificar mudanças em curso no português brasileiro contemporâneo", "Analisar variação linguística em tempo real com ferramentas sociolinguísticas"],
        shadowingDialogue: {
          title: "O PB que está mudando",
          lines: [
            { speaker: "Linguista", text: "O PB de 2024 não é o mesmo de 1980. Há mudanças fonológicas, morfossintáticas e lexicais em curso." },
            { speaker: "Aluno", text: "Quais são as mais significativas que você identifica?" },
            { speaker: "Linguista", text: "A substituição de 'nós' por 'a gente', que está praticamente completada nas gerações mais jovens." },
            { speaker: "Aluno", text: "E a colocação pronominal? O PB coloquial usa próclise quase exclusivamente." },
            { speaker: "Linguista", text: "Exato. E isso não é 'erro' — é uma mudança sistemática que já está consolidada na fala e avançando na escrita informal." }
          ]
        },
        keyPhrases: [
          "Mudança em curso: 'nós' → 'a gente' nas gerações jovens",
          "Próclise generalizada no PB oral — ênclise como marca de registro formal",
          "Concordância variável: 'a gente foi' vs 'a gente fomos'",
          "Neologismos digitais: 'deletar', 'tuitar', 'printar', 'dar match'"
        ],
        guidedProduction: [
          "Quais mudanças você percebe no PB que não estão nos manuais de gramática?",
          "A próclise generalizada no PB oral é erro ou mudança? Qual é a distinção?",
          "Como a internet e as redes sociais aceleraram mudanças no PB?"
        ],
        grammar: {
          title: "Mudança Linguística em Curso no PB — Perspectiva Master",
          explanation: "Mudanças consolidadas no PB oral: 'a gente' + verbo 3ª singular substituindo 'nós' + 1ª plural; próclise como padrão geral (em vez da ênclise normativa); concordância nominal variável ('os menino' vs 'os meninos'); apagamento do 'd' no gerúndio ('falando' → 'falano' em algumas regiões). Mudanças em curso na escrita informal: ausência de acentos no WhatsApp (não por erro, por velocidade), abreviações ('vc', 'tb', 'pq'), pontuação expressiva ('!!!', reticências como hesitação). A escrita digital criou um registro novo — nem oral nem escrito formal.",
          conjugation: "Registro digital: 'vc tb pode ir??' / 'nossa...' / 'q isso' / 'to bem' / 'vo la' — versus escrita formal: 'Você também pode ir?' / 'Que surpresa.' / 'Estou bem.' / 'Vou lá.'"
        },
        exercises: [
          { type: "analysis", prompt: "Por que a substituição de 'nós' por 'a gente' no PB é mudança linguística, não erro?", answer: "A substituição de 'nós' por 'a gente' preenche todos os critérios de uma mudança linguística em curso: é sistemática (não aleatória), é geracional (mais frequente nos jovens), é geográfica (mais avançada em certas regiões), e está ocorrendo há décadas de forma gradual. Além disso, 'a gente' tem vantagens estruturais: elimina a distinção entre 'nós' inclusivo (eu e você) e exclusivo (eu e outra pessoa, não você), simplifica o paradigma pronominal, e facilita a concordância verbal (3ª pessoa singular em vez de 1ª plural). O que é 'erro' é uma categoria normativa — prescritiva. Do ponto de vista descritivo, 'a gente vai' é tão sistemático e regular quanto 'nós vamos'; apenas pertence a uma variedade diferente." },
          { type: "production", prompt: "Como a escrita digital criou um registro novo no PB? Analise em 4 frases.", answer: "A escrita digital — especialmente no WhatsApp, Instagram e Twitter/X — criou um registro híbrido que não é fala transcrita nem escrita formal: é uma nova modalidade com regras próprias. Características: velocidade sobre correção (abreviações, ausência de acentos), oralidade incorporada à escrita (reticências como hesitação, maiúsculas como ênfase, '???' como incredulidade), criação de marcadores discursivos novos ('né', 'tipo assim' na escrita). Este registro não 'degrada' a escrita — expande o repertório de modalidades disponíveis. Um falante Master navega entre todos: a mensagem informal ao amigo, o email profissional e o artigo acadêmico exigem registros distintos, e dominar os três é parte da competência comunicativa plena." },
          { type: "production", prompt: "Identifique 5 neologismos digitais no PB e analise sua formação morfológica.", answer: "'Deletar': empréstimo do inglês 'delete' + sufixo verbal '-ar'. Verb formation by borrowing + Portuguese morphological adaptation. 'Postar': 'post' (inglês) + '-ar'. 'Tuitar': 'tweet'/'Twitter' + '-ar' com adaptação fonológica. 'Printar': 'print' + '-ar'. 'Curtir' (no sentido de 'dar like'): ressignificação de palavra existente — não neologismo formal, mas neologismo semântico. Padrão: o PB tende a não importar verbos estrangeiros diretamente — os adapta ao padrão '-ar', o infinitivo mais produtivo e mais fácil de conjugar nos tempos regulares." },
          { type: "analysis", prompt: "O que é 'variação estilística' e como um falante Master a domina?", answer: "Variação estilística é a capacidade de ajustar o registro linguístico ao contexto — falar de formas diferentes dependendo de com quem, onde e sobre o que se fala. Todo falante faz isso automaticamente em sua língua nativa: você não fala com o chefe da mesma forma que fala com o melhor amigo. O falante Master de uma segunda língua desenvolve essa mesma sensibilidade: sabe que 'a gente foi lá ontem' é adequado numa conversa informal mas inapropriado num relatório; sabe que 'deletar' é coloquial e 'excluir' é o equivalente formal; sabe que o humor que funciona num podcast pode ser inadequado numa conferência acadêmica. O domínio da variação estilística é o que distingue o falante avançado do virtuoso: não apenas falar corretamente, mas falar adequadamente." },
          { type: "production", prompt: "Escreva o mesmo conteúdo em 3 registros diferentes: oral informal, escrita digital, texto formal.", answer: "Conteúdo: reunião marcada para amanhã às 10h.\n\nOral informal: 'Ô gente, lembra que amanhã tem reunião às dez, tá? Não esquece.'\n\nEscrita digital: 'Oi!! Reunião amanhã 10h 📅 confirma aí pls'\n\nTexto formal: 'Comunicamos que a reunião de equipe está confirmada para amanhã, dia [data], às 10h00. Solicitamos confirmação de presença até o final do dia de hoje.'" }
        ]
      },
      {
        id: "MASTER-U5-L2",
        title: "Análise crítica do discurso: decodificar o poder na linguagem",
        objectives: ["Aplicar análise crítica do discurso a textos reais", "Identificar mecanismos ideológicos na linguagem cotidiana e midiática"],
        shadowingDialogue: {
          title: "O que o texto não diz",
          lines: [
            { speaker: "Analista", text: "Leia esta manchete: 'Manifestantes entram em confronto com a polícia'. O que ela pressupõe?" },
            { speaker: "Aluno", text: "Que os manifestantes iniciaram o conflito — 'entrar em confronto' sugere ação ativa da parte deles." },
            { speaker: "Analista", text: "Exato. A mesma notícia poderia dizer 'Polícia reprime manifestação' — completamente diferente." },
            { speaker: "Aluno", text: "A escolha do sujeito sintático determina quem é o agente da ação." },
            { speaker: "Analista", text: "E quem é o agente da ação é quem carrega a responsabilidade. Essa é a ideologia que a sintaxe carrega." }
          ]
        },
        keyPhrases: [
          "Voz passiva sem agente: 'foram mortos' — por quem? Apagamento de responsabilidade",
          "Escolha do sujeito: quem age vs. quem sofre a ação",
          "Nominalização política: 'o conflito' apaga quem conflitou",
          "Pressuposição: o que é dado como verdade sem ser afirmado"
        ],
        guidedProduction: [
          "Analise a manchete: 'Jovens são mortos em operação policial.'",
          "Como a nominalização pode apagar responsabilidade política?",
          "Reescreva um texto jornalístico revelando suas escolhas ideológicas implícitas."
        ],
        grammar: {
          title: "Análise Crítica do Discurso Master",
          explanation: "Fairclough: o discurso é simultaneamente texto, prática discursiva e prática social. Mecanismos ideológicos na linguagem: voz passiva sem agente ('a decisão foi tomada' — por quem?), nominalização que apaga o processo ('o confronto' em vez de 'a polícia reprimiu'), escolha lexical ('manifestante' vs. 'terrorista', 'intervenção' vs. 'invasão'), pressuposição ('quando você parou de...'), enquadramento que define quem é vítima e quem é agente.",
          conjugation: "Perguntas de análise crítica: Quem é o sujeito da ação? Quem sofre a ação? Qual agente foi apagado? O que é pressuposto sem ser afirmado? Que escolhas lexicais constroem o tema? Que vozes estão ausentes?"
        },
        exercises: [
          { type: "analysis", prompt: "Analise criticamente: 'Jovens são mortos em operação policial no Complexo do Alemão.'", answer: "Mecanismos ideológicos: Voz passiva 'são mortos' — apaga o agente ativo. A polícia realizou a operação e matou os jovens, mas a construção passiva não diz 'a polícia matou', diz 'são mortos' — a morte parece quase acidente, não ação. 'Operação policial' legitima a ação antes de qualquer avaliação: 'operação' é vocabulário militar que implica planejamento e legalidade. 'Jovens' é mais neutro que 'moradores' ou 'suspeitos' — mas a ausência de qualificação deixa abertura para que o leitor pressupusja que eram 'criminosos'. Reescrita que altera o enquadramento: 'Polícia mata moradores durante operação no Complexo do Alemão' — aqui a polícia é sujeito ativo, 'moradores' humaniza as vítimas, o resto é igual. A notícia é a mesma; o enquadramento muda tudo." },
          { type: "production", prompt: "Como a nominalização pode apagar responsabilidade política? Dê 3 exemplos.", answer: "1) 'Houve um massacre na aldeia' vs. 'O exército massacrou a aldeia': a nominalização 'houve um massacre' apresenta o evento como se fosse fenômeno natural, sem agente. 2) 'O desemprego aumentou' vs. 'O governo aumentou o desemprego com sua política fiscal': a nominalização 'o desemprego' age como sujeito autônomo, apagando quem fez as escolhas que produziram o resultado. 3) 'A corrupção destruiu o projeto' vs. 'Os gestores corrompidos desviaram os recursos do projeto': 'a corrupção' é uma abstração que não tem rosto nem responsabilidade, enquanto a segunda versão identifica agentes." },
          { type: "production", prompt: "Reescreva este texto revelando as escolhas ideológicas: 'Forças de segurança contiveram a agressão de manifestantes radicais que tentavam invadir o prédio público.'", answer: "Análise: 'Forças de segurança' (legitimação institucional) vs. possível 'policiais'. 'Contiveram' (ação defensiva e moderada). 'Agressão' (os manifestantes são agressores). 'Radicais' (deslegitima sem definir). 'Tentavam invadir' (intenção criminosa presumida). 'Prédio público' (ameaça à propriedade coletiva).\n\nReescrita alternativa: 'Policiais dispersaram manifestantes que tentavam entrar no edifício da prefeitura.'\n\nOutra versão: 'Manifestantes foram impedidos pela polícia de acessar a sede do governo municipal durante protesto.'\n\nCada versão conta a mesma história com enquadramentos radicalmente diferentes: quem age, quem reage, qual é a natureza do evento." },
          { type: "analysis", prompt: "Qual é a diferença entre 'imigrante', 'refugiado' e 'invasor' como escolhas lexicais?", answer: "'Imigrante' é neutro: pessoa que se desloca de um país para outro, sem implicação sobre a razão ou a legalidade. 'Refugiado' é específico juridicamente: pessoa que fugiu de perseguição, guerra ou catástrofe e tem proteção legal internacional — a palavra ativa compaixão e obrigação legal. 'Invasor' ou 'intruso' é lexicamente agressivo: transforma uma pessoa em ameaça, ativa respostas de defesa do território, deslegitima qualquer reivindicação. A escolha entre os três não é arbitrária: grupos políticos que querem políticas restritivas de imigração preferem 'invasor' ou 'ilegal'; os que defendem acolhimento usam 'refugiado' ou 'migrante'. O léxico é política." },
          { type: "production", prompt: "Escreva um parágrafo que usa 3 mecanismos de análise crítica do discurso consciente e explicitamente.", answer: "[Texto com mecanismos explicitados] 'O programa foi interrompido' — voz passiva que apaga quem interrompeu [mecanismo 1: apagamento de agente]. 'A situação de vulnerabilidade dos beneficiários' — nominalização que torna a pobreza um estado abstrato em vez de resultado de políticas [mecanismo 2: nominalização que apaga processo]. 'Ajustes necessários foram implementados' — 'necessários' é pressuposição: afirma como fato que os cortes eram inevitáveis, sem demonstrar [mecanismo 3: pressuposição ideológica]. Reescrita transparente: 'O governo federal interrompeu o programa social, deixando 2 milhões de pessoas pobres sem benefício. O governo justificou a decisão com necessidade de ajuste fiscal, argumento contestado por especialistas.''" }
        ]
      },
      {
        id: "MASTER-U5-L3",
        title: "Língua e identidade: o PB como marcador de pertencimento",
        objectives: ["Analisar a relação entre língua e identidade no Brasil", "Compreender como o PB marca pertencimento e exclusão"],
        shadowingDialogue: {
          title: "Falar é pertencer",
          lines: [
            { speaker: "Antropóloga", text: "Quando uma pessoa chega ao Rio do interior de São Paulo, a primeira coisa que marca sua diferença é a fala." },
            { speaker: "Aluno", text: "O sotaque como cartão de identidade involuntário." },
            { speaker: "Antropóloga", text: "E isso tem consequências reais: em entrevistas de emprego, na forma como é tratada em restaurantes, em como é percebida socialmente." },
            { speaker: "Aluno", text: "Então a língua não apenas expressa identidade — ela a constrói e a limita?" },
            { speaker: "Antropóloga", text: "E pode ser transformada como ato político. Falar a língua do oprimido é um ato de resistência." }
          ]
        },
        keyPhrases: [
          "Sotaque como marcador de identidade geográfica e social",
          "Língua como fronteira: incluir e excluir simultaneamente",
          "Code-switching: alternar entre variedades segundo o contexto",
          "Identidade linguística híbrida: o falante de segunda língua entre dois mundos"
        ],
        guidedProduction: [
          "Como o sotaque marca identidade geográfica e social no Brasil?",
          "O que é code-switching e quando ocorre?",
          "Como você negocia sua identidade linguística entre sua língua nativa e o português?"
        ],
        grammar: {
          title: "Língua e Identidade Master",
          explanation: "Code-switching: alternância entre línguas ou variedades no mesmo discurso. Não é confusão — é competência: o falante sabe exatamente quando muda e por quê. Identity construction through language: como escolhas linguísticas constroem e performam identidade. Língua de herança: manutenção da língua familiar em contexto de língua dominante diferente. Identidade translíngue: identidade que existe em múltiplas línguas simultaneamente, sem hierarquia entre elas.",
          conjugation: "Code-switching natural: 'Aí eu fui lá... you know what I mean? ...aí falei: cara, não dá.' / 'Vamos ao mercado — ¿vienes?' / Marcadores de identidade: sotaque / léxico regional / expressões idiomáticas / velocidade de fala"
        },
        exercises: [
          { type: "analysis", prompt: "O que é code-switching e por que não é sinal de confusão linguística?", answer: "Code-switching é a alternância entre duas ou mais línguas ou variedades no mesmo discurso — pode ocorrer entre frases, dentro de frases ou até dentro de palavras. Longe de indicar confusão ou competência insuficiente em ambas as línguas, o code-switching exige domínio de ambas: você precisa saber as gramáticas das duas para saber quando e como alternar. Ocorre por razões precisas: para acionar um registro cultural específico ('saudade' numa conversa em inglês porque não há equivalente), para marcar pertencimento a um grupo, para enfatizar ou amenizar algo, ou simplesmente porque uma língua tem a palavra certa para aquele momento. Bilingues usam code-switching estrategicamente — é uma ferramenta linguística, não uma falha." },
          { type: "production", prompt: "Como o sotaque constrói e limita identidade social no Brasil? Analise em 4 frases.", answer: "O sotaque funciona como marcador de identidade involuntário que precede qualquer outra informação que o falante possa dar sobre si mesmo. Um sotaque nordestino num contexto paulistano ativa imediatamente um conjunto de estereótipos — sobre classe, educação, origem — que a pessoa precisa superar antes de ser avaliada pelo conteúdo do que diz. Isso cria uma assimetria: o falante com sotaque de prestígio (o chamado 'carioca culto' ou 'paulistano padrão') não precisa provar nada antes de falar; o falante com sotaque estigmatizado precisa superar a avaliação negativa inicial. A dimensão política é clara: o sotaque como marcador de identidade é também um mecanismo de reprodução de desigualdade social, onde a voz herda o status da origem." },
          { type: "production", prompt: "Como você negocia sua identidade entre sua língua nativa e o português? Escreva em 5 frases.", answer: "[Resposta pessoal — modelo:] Há momentos em que sinto que estou sendo duas pessoas ao mesmo tempo — a que pensa em minha língua e a que fala em português. Com o tempo, as fronteiras ficaram mais porosas: certas ideias se formam primeiro em português agora, especialmente quando o tema é cultura brasileira ou literatura. Mas minha identidade não se apagou na outra língua — ela se expandiu. Sou agora alguém que habita dois espaços linguísticos, e cada um ilumina o outro: o português me deu perspectiva sobre minha língua nativa, e minha língua nativa me deu perspectiva sobre o português. Não sou nem um nem outro completamente — sou os dois, o que é mais rico do que qualquer um dos dois sozinho." },
          { type: "analysis", prompt: "O que é identidade translíngue e como se diferencia de bilinguismo simples?", answer: "Bilinguismo simples é ter competência em duas línguas — poder operar em ambas de forma eficaz, com ou sem alternância. Identidade translíngue é mais radical: é uma identidade que não pertence a nenhuma das línguas isoladamente, mas existe no espaço entre elas e no movimento entre elas. O falante translíngue não tem uma língua 'de verdade' que as outras complementam — tem um repertório linguístico integrado que usa de forma fluida dependendo do contexto. Teorizada por Canagarajah e outros, a perspectiva translíngue desafia a ideia de que cada língua ocupa um compartimento separado da mente: na prática, línguas se interpenetram, se influenciam e criam espaços comunicativos novos." },
          { type: "production", prompt: "Escreva sobre o papel da língua na construção de pertencimento em comunidades brasileiras.", answer: "No Brasil, a língua opera como fronteira e como ponte simultaneamente. Em comunidades de descendentes de imigrantes — japoneses em São Paulo, alemães no Sul, italianos no Rio Grande do Sul — a língua de herança marca pertencimento ao grupo de origem e, ao mesmo tempo, diferença em relação ao mainstream brasileiro. Falar japonês entre descendentes nikkei é pertencer; não falar pode significar exclusão da comunidade. No contexto das comunidades negras e periféricas, o vocabulário específico — as gírias, os ritmos de fala, as referências culturais — funciona como código de reconhecimento mútuo: você sabe quem é de dentro e quem não é pela forma de falar, não apenas pelo que diz. A língua, nesses contextos, não é apenas comunicação — é afirmação de identidade, resistência à homogeneização e construção de solidariedade." }
        ]
      },
      {
        id: "MASTER-U5-L4",
        title: "O discurso das redes sociais: linguagem no ambiente digital",
        objectives: ["Analisar a linguagem das redes sociais com ferramentas linguísticas Master", "Compreender como o ambiente digital transformou a comunicação em português"],
        shadowingDialogue: {
          title: "A língua na era do algoritmo",
          lines: [
            { speaker: "Pesquisadora", text: "O Twitter/X criou um gênero textual completamente novo — com restrições de caracteres que moldaram uma retórica própria." },
            { speaker: "Aluno", text: "A economia forçada de palavras que às vezes produz precisão e às vezes produz ambiguidade perigosa." },
            { speaker: "Pesquisadora", text: "E o algoritmo que favorece engajamento criou uma pressão seletiva sobre a linguagem — o que provoca emoção circula mais." },
            { speaker: "Aluno", text: "Então estamos sendo selecionados para escrever de forma mais emocional e menos nuançada?" },
            { speaker: "Pesquisadora", text: "Estruturalmente, sim. O ambiente molda a língua — e a língua molda o pensamento. Esse ciclo é o que me preocupa." }
          ]
        },
        keyPhrases: [
          "Gêneros digitais: tweet, story, reel, thread — cada um com retórica própria",
          "Algoritmo como seleção linguística: o que engaja mais, circula mais",
          "Desinformação linguística: como se constrói uma mentira eficaz",
          "Literacia digital: ler a linguagem das redes com olhos críticos"
        ],
        guidedProduction: [
          "Quais gêneros textuais as redes sociais criaram? Analise as características de um.",
          "Como o algoritmo molda a linguagem dos usuários?",
          "Analise a linguagem de uma campanha de desinformação que você conhece."
        ],
        grammar: {
          title: "Linguagem Digital Master",
          explanation: "Gêneros digitais: tweet (140/280 caracteres, aforismo fragmentado), thread (argumento serializado em tweets), story (efêmero, visual + verbal), caption (legenda que contextualiza imagem), comentário (responsivo, frequentemente reativo). Retórica do engajamento: título clickbait (promessa exagerada), outrage bait (conteúdo que provoca indignação), confirmation bias appeal (conteúdo que confirma o que o leitor já acredita). Literacia digital: identificar fonte, verificar data, checar contexto, avaliar intenção.",
          conjugation: "Análise de linguagem digital: Quem publicou? Quando? Com que intenção? O que o título promete vs. o que o texto entrega? Que emoção o conteúdo ativa? Por quê?"
        },
        exercises: [
          { type: "analysis", prompt: "Como o algoritmo das redes sociais molda a linguagem dos usuários ao longo do tempo?", answer: "O algoritmo das redes sociais cria uma pressão de seleção sobre a linguagem: conteúdo que gera mais engajamento (likes, comentários, compartilhamentos) recebe mais distribuição, o que incentiva os criadores a produzir mais desse tipo de conteúdo. Como o engajamento é ativado principalmente por emoções fortes — indignação, medo, admiração extrema, humor —, o algoritmo seleciona linguagem emocionalmente intensa. Ao longo do tempo, isso transforma os padrões de comunicação: títulos tornam-se mais hiperbólicos, afirmações mais absolutas, nuances são eliminadas porque reduzem o engajamento. O resultado é uma pressão estrutural contra a comunicação nuançada e complexa — não porque as pessoas sejam incapazes de nuance, mas porque o ambiente as desincentiva sistematicamente." },
          { type: "production", prompt: "Analise a retórica de um título clickbait — como funciona linguisticamente?", answer: "Exemplo: 'O que ninguém te conta sobre [tema X] — e que vai mudar sua vida'\n\nMecanismos linguísticos: 'O que ninguém te conta' — pressuposição de que há segredo guardado (cria curiosidade e senso de exclusividade). 'Ninguém' — hipérbole que não é verdade mas não pode ser verificada facilmente. 'Vai mudar sua vida' — promessa absolutamente impossível de verificar antecipadamente, mas que ativa esperança ou medo. A estrutura cria expectativa que o conteúdo raramente cumpre — mas o leitor já clicou, gerando a impressão (engajamento) que o algoritmo valoriza. O clickbait é uma tecnologia de atenção, não de informação." },
          { type: "production", prompt: "Escreva um guia de 5 regras de literacia digital para ler notícias nas redes sociais.", answer: "1) Verifique a fonte antes de ler o título: quem publicou? Tem histórico verificável? Se não conhece a fonte, busque sobre ela antes de compartilhar o conteúdo. 2) Leia além do título: o título é frequentemente mais extremo que o conteúdo — o que o texto realmente diz pode ser muito mais nuançado. 3) Verifique a data: notícias antigas são regularmente recirculadas como se fossem recentes, criando alarme sobre eventos passados. 4) Pergunte-se que emoção o conteúdo ativa e por quê: se você sente indignação muito intensa, pode ser que o conteúdo foi projetado para isso — conteúdo que ativa emoção forte circula mais, independentemente de ser verdadeiro. 5) Antes de compartilhar, pergunte: 'Eu verificaria isso se fosse uma notícia que contradiz o que acredito?' Se a resposta for não, você está com viés de confirmação." },
          { type: "analysis", prompt: "Como se constrói linguisticamente uma campanha de desinformação eficaz?", answer: "Uma campanha de desinformação eficaz usa vários mecanismos linguísticos simultaneamente. Ancoragem em fato real: começa com algo verdadeiro ou verificável, depois acrescenta a informação falsa — o fato verdadeiro funciona como âncora de credibilidade. Vocabulário emocional: palavras que ativam medo ou indignação antes de qualquer avaliação racional. Pressuposição: afirmar como dado o que precisa ser demonstrado ('quando o governo roubou' — pressupõe o roubo). Especificidade falsa: números precisos ('73% dos brasileiros') que parecem dados mas frequentemente não têm fonte verificável. Repetição: a mesma mentira repetida por múltiplas fontes parece mais verdadeira — o 'efeito de veracidade illusória'. E simplicidade: narrativas simples com vilão claro circulam mais que análises complexas." },
          { type: "production", prompt: "Escreva uma análise comparativa entre comunicação digital e comunicação oral presencial.", answer: "A comunicação digital e a oral presencial diferem em dimensões que vão além do canal. Presencialmente: a comunicação é sincrônica e efêmera, contextualizada por gestos, tom de voz e expressão facial, imediatamente responsiva, e raramente registrada. O interlocutor pode interromper, clarificar, reagir — há feedback em tempo real. Digitalmente: a comunicação é frequentemente assíncrona, desprovida de pistas paraverbais (que emojis tentam compensar com sucesso parcial), potencialmente permanente e decontextualizada — uma mensagem pode ser lida por quem não estava na situação original. Isso tem consequências: a ironia que é óbvia presencialmente pode ser incompreendida no texto; a raiva momentânea que seria esquecida numa conversa fica registrada; o contexto que justificaria uma afirmação polêmica pode ser apagado quando a afirmação é compartilhada isoladamente." }
        ]
      },
      {
        id: "MASTER-U5-L5",
        title: "Revisão e produção integrada Master-U5",
        objectives: ["Integrar variação linguística, análise crítica, identidade e linguagem digital", "Demonstrar análise sociolinguística de excelência em português"],
        shadowingDialogue: {
          title: "A língua em toda a sua complexidade",
          lines: [
            { speaker: "Mestra", text: "Chegamos ao fim da unidade de sociolinguística. O que você leva?" },
            { speaker: "Aluno", text: "Que língua não é um objeto fixo — é um processo em movimento constante." },
            { speaker: "Mestra", text: "E que cada escolha linguística é ao mesmo tempo individual e social." },
            { speaker: "Aluno", text: "E que analisar a língua com profundidade é analisar a sociedade com profundidade." },
            { speaker: "Mestra", text: "Isso. E agora você tem ferramentas para fazer as duas coisas ao mesmo tempo, em português." }
          ]
        },
        keyPhrases: [
          "Língua como processo, não objeto: sempre em movimento",
          "Escolha linguística = escolha social e política",
          "Análise sociolinguística como ferramenta de leitura do mundo",
          "O falante Master como analista da própria língua"
        ],
        guidedProduction: [
          "Analise um texto real de sua escolha com ferramentas de análise crítica do discurso.",
          "Identifique mudanças em curso no PB que você observa no cotidiano.",
          "Escreva sobre a sua identidade linguística com profundidade Master."
        ],
        grammar: {
          title: "Revisão Master-U5",
          explanation: "Consolida: variação em tempo real no PB (mudanças em curso, neologismos digitais), análise crítica do discurso (mecanismos ideológicos, voz passiva política, nominalização, enquadramento), língua e identidade (sotaque, code-switching, identidade translíngue), linguagem digital (gêneros digitais, algoritmo, desinformação, literacia).",
          conjugation: "Síntese Master-U5: variação em tempo real / análise crítica do discurso / mecanismos ideológicos / code-switching / identidade translíngue / literacia digital / gêneros digitais / pressão algorítmica sobre linguagem"
        },
        exercises: [
          { type: "production", prompt: "Analise criticamente este trecho: 'O desenvolvimento econômico gerou alguns impactos ambientais que precisam ser gerenciados.'", answer: "Mecanismos ideológicos: 'O desenvolvimento econômico gerou' — sujeito abstrato e positivo ('desenvolvimento') age como causa, apagando quem tomou as decisões. 'Alguns impactos ambientais' — 'alguns' minimiza, 'impactos' neutraliza (pode ser positivo ou negativo). 'Que precisam ser gerenciados' — voz passiva sem agente: quem vai gerenciar? Quando? Como? A frase pressupõe que os impactos são gerenciáveis, não que deveria ser evitados. Reescrita crítica: 'As políticas de desenvolvimento do governo X destruíram [X hectares] de Mata Atlântica, cujo reflorestamento levará décadas e está orçado em Y bilhões.'" },
          { type: "production", prompt: "Identifique 3 mudanças em curso no PB que você observa no cotidiano.", answer: "[Resposta pessoal — modelo:] 1) O 'né' como marcador discursivo de busca de confirmação ficou muito mais frequente em contextos formais — ouço em apresentações profissionais e até em entrevistas jornalísticas, onde antes só aparecia na fala informal. 2) O gerúndio progressivo com sentido de futuro imediato ('estou indo lá amanhã') parece mais frequente que o futuro simples ('irei lá amanhã'), mesmo em contextos mais formais. 3) O uso de 'tipo' como marcador discursivo de aproximação ('era tipo uma festa, mas não era bem uma festa') se expandiu das gerações mais jovens para adultos de 30-40 anos, perdendo o estigma que tinha há dez anos." },
          { type: "production", prompt: "Escreva sobre sua identidade linguística — entre sua língua nativa e o português — com profundidade Master.", answer: "Minha identidade linguística é, a esta altura, uma questão que não consigo mais responder com simplicidade. Há coisas que faço melhor em português — não porque o português seja melhor, mas porque certas experiências aconteceram em português e ficaram lá. Escrever sobre literatura brasileira em minha língua nativa soa estranho, como descrever uma cor para alguém com uma paleta diferente. Mas há também coisas que o português ainda não alcança — a velocidade do pensamento rápido, o humor que depende de milissegundos de timing, a imprecisão afetiva que a língua materna permite e que a segunda língua ainda às vezes formaliza demais. Sou alguém que vive numa fronteira linguística — e aprendi que fronteiras não são lugares de falta, mas de multiplicidade. Não tenho 'uma língua de verdade'; tenho um repertório que continua crescendo, e isso é mais rico do que qualquer monolinguismo, mesmo fluente." },
          { type: "analysis", prompt: "Por que 'errar' numa segunda língua é fundamentalmente diferente de 'errar' na língua nativa?", answer: "Na língua nativa, 'errar' significa divergir de uma norma que você internalizou: você sabe que errou porque o erro soa errado. Na segunda língua, especialmente nos primeiros anos, você frequentemente não sabe que errou porque não tem o ouvido interno que reconhece a divergência. Isso cria uma assimetria: o falante nativo se autocorrige automaticamente; o falante de segunda língua depende de feedback externo ou de um estudo explícito da norma. Com o tempo, o ouvido interno se desenvolve — e o falante Master de segunda língua começa a perceber seus erros antes de serem sinalizados. Outro aspecto: o falante nativo tem responsabilidade sociocultural pelo erro (errar em público é exposição social); o falante de segunda língua frequentemente recebe condescendência positiva ('para um estrangeiro está ótimo'), o que pode ser ao mesmo tempo generoso e limitante — não demanda o mesmo nível de excelência." },
          { type: "production", prompt: "Escreva uma análise de 150 palavras da linguagem de uma rede social de sua escolha.", answer: "O Instagram criou uma retórica visual-verbal híbrida que transforma toda experiência em narrativa consumível. A caption (legenda) opera em dois registros simultâneos: o irônico-confessional ('acordei assim 😭') e o inspiracional-aspiracional ('cada dia é uma nova chance') — frequentemente no mesmo perfil, às vezes na mesma semana. O emoji não é ornamento: é pontuação emocional que substitui o tom de voz ausente na escrita. A hashtag funciona como indexador semântico e como declaração de pertencimento a comunidades (#BookTok, #VidaSaudável). A story criou o gênero do efêmero curado: parecer espontâneo enquanto se é calculado. O que me fascina linguisticamente é a performance de autenticidade — todo o vocabulário é de revelação ('sendo real com vocês', 'sem filtro') enquanto a plataforma é, estruturalmente, um espaço de filtragem total." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 6 — Produção Oral Master
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U6",
    title: "Produção Oral Master: Conferência, Rádio, Podcast e Performance",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U6-L1",
        title: "A voz como instrumento: técnica vocal avançada",
        objectives: ["Dominar a voz como instrumento de comunicação em nível Master", "Usar respiração, ritmo e pausas com consciência e intenção"],
        shadowingDialogue: {
          title: "A física da voz",
          lines: [
            { speaker: "Fonoaudióloga", text: "A voz é um instrumento. Como qualquer instrumento, pode ser treinado, afinado, expandido." },
            { speaker: "Aluno", text: "Mas a maioria das pessoas trata a voz como algo dado — não como algo que se desenvolve." },
            { speaker: "Fonoaudióloga", text: "E é por isso que a maioria das pessoas fala abaixo de seu potencial. A voz que você usa não é a voz que você tem." },
            { speaker: "Aluno", text: "O que mais limita a voz das pessoas?" },
            { speaker: "Fonoaudióloga", text: "A respiração. Noventa por cento dos problemas vocais têm origem na respiração deficiente. Respire bem e a voz se resolve." }
          ]
        },
        keyPhrases: [
          "Respiração diafragmática: a base de toda voz potente",
          "Projeção sem grito: volume sem esforço laríngeo",
          "Ritmo e pausa: a música da fala pública",
          "Articulação: clareza sem artificialidade"
        ],
        guidedProduction: [
          "Descreva como você usa a voz de forma diferente em situações diferentes.",
          "Qual é a diferença entre projeção vocal e gritar?",
          "Escreva um roteiro de 1 minuto e marque as pausas e ênfases."
        ],
        grammar: {
          title: "Técnica Vocal para Falante Master",
          explanation: "Respiração diafragmática: usar o diafragma (não o peito) para respirar cria reserva de ar que sustenta frases longas sem perda de qualidade. Projeção: enviar a voz ao fundo da sala através de ressonância (não de volume). Articulação: abertura adequada da boca, movimento claro de lábios e língua — sem exagero artificial. Ritmo: variação na velocidade cria interesse; falar sempre na mesma velocidade entorpece o ouvinte. Pausa: 3 segundos de silêncio antes de uma afirmação importante cria antecipação e ênfase.",
          conjugation: "Marcação de roteiro: / = pausa curta // = pausa longa MAIÚSCULA = ênfase [lento] = desacelerar [rápido] = acelerar"
        },
        exercises: [
          { type: "production", prompt: "Escreva um roteiro de 90 segundos marcando pausas e ênfases (use / para pausa curta, // para longa, MAIÚSCULA para ênfase).", answer: "Vou falar sobre algo que a maioria de nós aprendeu errado. // [lento] Aprendemos que falar bem é falar CORRETAMENTE. / Vocabulário certo. / Gramática certa. / Pronúncia certa. // Mas isso é apenas a metade. / A outra metade / — e é a metade que ninguém ensina — / é saber QUANDO falar, / quando calar, / e quanto espaço deixar / para que o ouvinte respire junto com você. // [lento] As pessoas que mais nos impressionam quando falam / não são necessariamente as que usam as palavras mais bonitas. / São as que sabem exatamente / quando parar." },
          { type: "analysis", prompt: "Por que a pausa é uma das ferramentas mais poderosas do orador público?", answer: "A pausa cria múltiplos efeitos simultâneos. Para o orador: oferece tempo para organizar o próximo pensamento sem preencher o silêncio com 'éh' ou 'tipo'; demonstra controle e confiança (quem tem pressa para falar parece ansioso; quem pode fazer pausa parece seguro). Para o ouvinte: oferece tempo para processar o que foi dito; cria antecipação para o que virá; sinaliza que uma afirmação importante está chegando (pausa antes) ou que acabou de ser feita (pausa depois). Especificamente: a pausa de 2-3 segundos antes de uma afirmação-chave é tecnicamente a ferramenta de ênfase mais eficaz disponível ao orador — mais do que qualquer escolha lexical ou variação de volume." },
          { type: "production", prompt: "Explique a diferença entre projeção vocal e gritar — como se faz uma sem a outra?", answer: "Projeção vocal é enviar a voz ao fundo da sala usando ressonância — o som amplificado pelas cavidades de ressonância (peito, garganta, máscara facial). Gritar é forçar o volume aumentando a pressão nas cordas vocais. A diferença: projeção não cansa a voz e soa limpa; gritar fatiga as cordas vocais rapidamente e soa tensa. Como projetar sem gritar: respiração diafragmática (ter reserva de ar), abertura adequada da boca (permite ressonância), imaginar que se fala com alguém específico no fundo da sala (cria intenção direcional), falar para a frente (não para o chão ou o papel). O paradoxo: quem grita muitas vezes é ouvido com menos clareza do que quem projeta com técnica." },
          { type: "production", prompt: "Escreva um parágrafo sobre como adaptar a voz para 3 contextos diferentes: reunião de equipe, podcast, conferência para 500 pessoas.", answer: "Reunião de equipe (10-15 pessoas): voz conversacional, variação natural de ritmo, proximidade física dispensa projeção máxima — o desafio é manter atenção num ambiente com múltiplas distratores, então clareza de articulação e ritmo variado são mais importantes que volume. Podcast: voz íntima, como se falasse com uma única pessoa — o microfone amplifica nuances que uma sala anula, então o sussurro teatral, o riso contido e a entonação cotidiana funcionam melhor do que a voz 'de apresentador'. Conferência para 500: projeção plena com suporte técnico (microfone), ritmo mais lento que o natural (para a última fileira processar), pausas mais longas (eco e distância atrasam a percepção), variação dramática de volume para manter atenção ao longo de 30-60 minutos." },
          { type: "analysis", prompt: "Por que falar devagar é mais difícil do que parece?", answer: "Falar devagar é contraintuitivo porque vai contra a ansiedade de comunicar: quando temos algo importante para dizer, a tendência é acelerar — como se a velocidade garantisse que o conteúdo chegará antes de ser interrompido. Além disso, a velocidade própria do pensamento é mais rápida que a da fala, o que cria uma pressão para acelerar a fala para acompanhar o pensamento. Mas falar devagar tem múltiplos benefícios: permite articulação mais clara, dá ao ouvinte tempo para processar (especialmente numa segunda língua), cria autoridade (quem tem pressa parece ansioso; quem tem tempo para falar devagar parece seguro), e permite mais controle sobre ênfases e pausas. Para o falante de segunda língua, falar devagar é especialmente importante: reduz erros, permite autocorreção em tempo real e torna a fala mais inteligível para ouvintes de diferentes origens." }
        ]
      },
      {
        id: "MASTER-U6-L2",
        title: "Podcast e rádio: a voz que alcança sem ver",
        objectives: ["Produzir conteúdo de podcast e rádio de alto nível em português Master", "Dominar as especificidades da comunicação apenas vocal"],
        shadowingDialogue: {
          title: "Falar para quem não vê",
          lines: [
            { speaker: "Produtora", text: "No podcast, você não tem corpo — só tem voz. E a voz precisa fazer tudo que o corpo normalmente faz." },
            { speaker: "Aluno", text: "Criar presença sem gestos, sem contato visual, sem expressão facial." },
            { speaker: "Produtora", text: "E criar intimidade com alguém que pode estar te ouvindo no metrô, na cozinha, no academia." },
            { speaker: "Aluno", text: "É quase uma relação de confiança — o ouvinte escolhe te colocar nos ouvidos." },
            { speaker: "Produtora", text: "Exatamente. É um espaço muito íntimo. E quem fala precisa honrar isso sendo genuíno, não performático." }
          ]
        },
        keyPhrases: [
          "Intimidade do podcast: falar para um ouvinte específico, não para uma multidão",
          "Genuíno vs. performático: a diferença que o microfone revela",
          "Edição de áudio como edição de texto: cortar o que não serve",
          "Estrutura de episódio: hook, desenvolvimento, conclusão, call to action"
        ],
        guidedProduction: [
          "Escreva o roteiro de abertura de um episódio de podcast sobre cultura brasileira.",
          "Qual é a diferença de linguagem entre um podcast e uma conferência formal?",
          "Como se cria intimidade com o ouvinte num podcast em 30 segundos?"
        ],
        grammar: {
          title: "Linguagem de Podcast e Rádio Master",
          explanation: "Podcast: voz conversacional, primeira pessoa, falar 'para' e não 'em direção a'; intimidade construída por auto-revelação moderada e por tratar o ouvinte como interlocutor presente ('você que está ouvindo...'). Rádio: mais formal que podcast, mais urgente, linguagem cifrada pela localização do ouvinte (no carro, na cozinha), imagens verbais que substituem o visual. Diferenças: rádio é linear (o ouvinte não pode voltar); podcast é assíncrono e o ouvinte pode pausar e repetir — isso muda a densidade de informação que pode ser transmitida.",
          conjugation: "Marcadores de intimidade em podcast: 'você que está ouvindo' / 'como eu disse no último episódio' / 'se você já viveu isso, entende do que eu tô falando' / 'me conta nos comentários' / 'vou ser honesto com vocês'"
        },
        exercises: [
          { type: "production", prompt: "Escreva a abertura de um episódio de podcast sobre literatura brasileira (5-7 linhas).", answer: "Hoje vou falar sobre um livro que eu resisti a ler por anos — e que quando finalmente li, fiquei com raiva de mim mesmo por ter esperado tanto. [pausa] 'Grande Sertão: Veredas', de Guimarães Rosa. Provavelmente você já ouviu falar. Talvez até tenha tentado e desistido — e se isso aconteceu, não é culpa sua: é um livro que exige algo que a maioria das nossas leituras cotidianas não pede. Mas hoje eu quero te convencer a tentar de novo. Ou a tentar pela primeira vez. Porque o que está dentro desse livro vale qualquer esforço." },
          { type: "production", prompt: "Escreva a diferença de abordagem entre podcast informal e rádio jornalístico para o mesmo tema.", answer: "Tema: nova descoberta científica sobre sono.\n\nPodcast informal: 'Você sabia que a forma como você dorme pode estar sabotando sua memória? Porque eu descobri isso da pior forma possível na semana passada — depois de duas noites mal dormidas antes de uma apresentação importante. Mas hoje trouxe uma pesquisadora incrível que vai explicar por que isso acontece e, mais importante, o que você pode fazer de diferente.'\n\nRádio jornalístico: 'Pesquisadores da Universidade de São Paulo publicaram hoje um estudo que estabelece relação direta entre a qualidade do sono e a consolidação da memória de longo prazo. O estudo, publicado na revista Nature, acompanhou 800 voluntários por dois anos. Nóra Silva, coordenadora da pesquisa, explica as principais conclusões.'" },
          { type: "production", prompt: "Escreva 5 técnicas para criar intimidade com o ouvinte num podcast.", answer: "1) Falar para um ouvinte específico imaginário: em vez de falar 'para o público', imaginar uma pessoa específica que você conhece bem e falar diretamente para ela — isso muda completamente o tom para mais pessoal. 2) Auto-revelação moderada: compartilhar uma vulnerabilidade ou experiência pessoal relevante — não para exposição, mas para criar identificação ('eu também passei por isso'). 3) Nomear o ouvinte: 'você que está ouvindo isso às 7 da manhã no caminho pro trabalho' — cria sensação de que o orador te vê. 4) Reformular o que o ouvinte está pensando: 'você deve estar se perguntando...' — simula uma conversa bidirecional. 5) Consistência de persona: ser reconhecível episódio a episódio — mesmos valores, mesma voz, mesma relação com o ouvinte — cria confiança ao longo do tempo." },
          { type: "analysis", prompt: "Por que o microfone revela a diferença entre genuíno e performático?", answer: "O microfone elimina a distância física que a performance pública normalmente usa como proteção. Num palco ou numa sala de aula, a distância física permite certa artificialidade — o ouvinte processa você como figura, não como pessoa. No podcast, você está literalmente dentro dos ouvidos do ouvinte, numa distância que normalmente só é permitida a pessoas íntimas. Nessa proximidade, as pequenas inconsistências da performance — a voz que soa 'de apresentador' em vez de 'de pessoa', o entusiasmo que parece forçado, a emoção que não é sentida — ficam amplificadas. O ouvinte não consegue necessariamente nomear o que está errado, mas sente. Por isso, as vozes mais bem-sucedidas em podcast são frequentemente pessoas que falam 'como sempre falaram', não como aprenderam que deveriam falar." },
          { type: "production", prompt: "Escreva o roteiro de um call to action final de podcast (30 segundos).", answer: "Antes de você ir — e vai demorar 30 segundos, prometo — me conta uma coisa: qual foi o livro que mais mudou sua forma de pensar? Pode ser qualquer coisa, de qualquer área. Me manda nas redes, responde o episódio, deixa nos comentários. Porque quero montar uma lista com as indicações de quem está ouvindo — e talvez virar um episódio. O link de tudo que mencionei hoje está na descrição. Se esse episódio valeu seu tempo, conta para alguém. Não precisa ser muito — uma mensagem para um amigo que ia gostar. Até a semana que vem." }
        ]
      },
      {
        id: "MASTER-U6-L3",
        title: "Performance pública: palco, câmera e presença",
        objectives: ["Desenvolver presença pública de nível Master em português", "Dominar a comunicação em palco e para câmera"],
        shadowingDialogue: {
          title: "A presença que não se finge",
          lines: [
            { speaker: "Diretor de teatro", text: "Presença não é energia — é atenção. O ator mais presente não é o mais agitado; é o mais atento." },
            { speaker: "Aluno", text: "Atenção ao quê? À plateia? Ao texto?" },
            { speaker: "Diretor de teatro", text: "A tudo ao mesmo tempo — ao espaço, ao parceiro, ao próprio corpo, ao que está acontecendo agora." },
            { speaker: "Aluno", text: "Isso não é diferente da boa comunicação no geral?" },
            { speaker: "Diretor de teatro", text: "É exatamente igual. Presença em palco e presença numa conversa importante são a mesma coisa. A escala muda; a natureza, não." }
          ]
        },
        keyPhrases: [
          "Presença como atenção, não como energia ou volume",
          "Para câmera: olhar para a lente como se fosse uma pessoa",
          "Palco: usar o espaço intencionalmente — movimento como significado",
          "O corpo que fala: postura, gesto e expressão como linguagem"
        ],
        guidedProduction: [
          "O que é 'presença' numa performance pública e como se cultiva?",
          "Qual é a diferença entre falar para câmera e falar ao vivo?",
          "Escreva o roteiro de uma apresentação de 3 minutos usando o espaço intencionalmente."
        ],
        grammar: {
          title: "Performance Pública Master",
          explanation: "Presença: estado de atenção plena ao momento presente — ao espaço, ao público, ao próprio corpo e ao conteúdo simultaneamente. Para câmera: olhar para a lente (não para o monitor), criar o 'público imaginário' de uma pessoa, variar o ritmo mais do que ao vivo (a câmera comprime a presença). Palco: usar o espaço com intenção — mover-se para enfatizar mudança de ponto, ficar parado para intensidade, altura como poder (subir degrau = autoridade). Gesto: ampliar em palco grande, reduzir para câmera, nunca suprimir completamente (supressão de gesto aparece como rigidez).",
          conjugation: "Uso do espaço em palco: centro = autoridade / lateral = transição ou dúvida / avanço em direção ao público = intimidade / recuo = reflexão / giro = mudança de perspectiva"
        },
        exercises: [
          { type: "production", prompt: "Escreva o roteiro de uma apresentação de 3 minutos com marcações de movimento e uso de espaço.", answer: "[Centro do palco, parado] 'Vou começar com uma confissão: durante anos, tive medo de falar em público.' [Pausa 3 seg] [Movimento lento para a esquerda] 'Não o medo de errar uma palavra ou esquecer o que ia dizer.' [Pausa] [Virar para o público] 'Tinha medo de ser visto. De verdade.' // [Pausa longa, voltar ao centro] 'O que mudou não foi que o medo sumiu.' [Avanço em direção ao público] 'O que mudou foi que aprendi que o medo e a presença podem coexistir.' // [Ficar parado, olhar para diferentes partes da sala] 'Presença não é ausência de medo. É continuar apesar do medo. E isso, descobri, é o que as pessoas que mais admiramos fazem — não é que elas não sintam o que sentimos. É que elas fazem mesmo assim.'" },
          { type: "analysis", prompt: "Qual é a diferença entre falar para câmera e falar ao vivo para uma plateia?", answer: "A câmera cria uma ilusão de distância que é, na verdade, extrema proximidade: o rosto preenche a tela, os detalhes de expressão ficam amplificados, e o olhar diretamente para a lente cria contato íntimo com cada pessoa que assiste individualmente. Para câmera: movimentos menores (gestos grandes parecem exagerados), olhar para a lente como se fosse uma pessoa (não para o monitor), variar o ritmo mais dramaticamente (a câmera comprime a energia), e calibrar a energia para 'conversa íntima', não para 'palco'. Ao vivo: a presença física do público cria feedback em tempo real (risos, silêncios, energia coletiva), a escala do espaço exige projeção maior — tanto vocal quanto gestual — e o orador pode ler e responder à sala de formas que a câmera não permite." },
          { type: "production", prompt: "O que é presença pública e como se distingue de performance?", answer: "Presença é o estado de atenção plena ao momento presente — ao espaço, ao público, ao próprio corpo e ao conteúdo, tudo ao mesmo tempo. Performance é a execução de um roteiro previamente ensaiado, com ou sem presença. A diferença crucial: na presença, o orador responde ao que está realmente acontecendo; na performance sem presença, executa o que planejou independentemente do que acontece. Um orador presente percebe que a sala ficou inquieta e ajusta o ritmo; percebe que alguém no fundo não está ouvindo e projeta a voz; percebe que uma piada não funcionou e segue sem forçar o riso. A presença é o que faz a comunicação ao vivo ser diferente de simplesmente reproduzir um vídeo gravado — e é o que o público sente como 'carisma', mesmo sem saber nomear." },
          { type: "production", prompt: "Escreva sobre como você usa (ou pode usar) seu corpo para comunicar em português de forma mais eficaz.", answer: "[Resposta pessoal — modelo:] Aprendi que meu corpo em português ainda carrega hábitos da minha língua nativa — especialmente nos gestos, que tendem a ser maiores ou menores do que o natural em PB. Brasileiros gesticulam com amplitude e frequência específicas que são culturalmente marcadas: há gestos que não existem na minha cultura (como o 'sinal de legal' com o polegar, que tem contextos precisos de uso) e velocidades de gesto que diferem. O que trabalho conscientemente: manter contato visual mais constante do que é natural para mim (a cultura brasileira de comunicação é mais visual do que a minha), usar gestos de mão para enumerar pontos (que parecem mais naturais em PB do que na minha língua), e resistir à tendência de reduzir o corpo quando falo numa segunda língua — a insegurança linguística me fazia encolher fisicamente, o que paradoxalmente tornava a fala menos confiante." },
          { type: "analysis", prompt: "Por que o movimento no palco deve ser intencional e não apenas natural?", answer: "O movimento 'natural' no palco frequentemente não é comunicativo — é nervoso, aleatório, e distrai o público do conteúdo. Passinhos laterais inconscientes, balanceio de peso, gesticulação repetitiva sem relação com o conteúdo: todos criam ruído visual que concorre com a mensagem. Movimento intencional, por outro lado, é semanticamente carregado: avançar em direção ao público durante uma afirmação íntima cria conexão; ficar completamente parado durante uma afirmação importante aumenta o peso dessa afirmação; mover-se para um lado diferente do palco ao mudar de ponto cria separação visual entre ideias. O corpo do orador é um instrumento de comunicação — e instrumentos não funcionam bem sem intenção." }
        ]
      },
      {
        id: "MASTER-U6-L4",
        title: "Improvisação avançada: o discurso sem roteiro",
        objectives: ["Falar de forma improvisada sobre qualquer tema com excelência Master", "Dominar técnicas avançadas de estruturação instantânea do pensamento"],
        shadowingDialogue: {
          title: "A confiança de não saber",
          lines: [
            { speaker: "Improvisador", text: "A improvisação avançada não é falar sem pensar. É estruturar o pensamento em tempo real — e confiar no processo." },
            { speaker: "Aluno", text: "Mas às vezes o pensamento não vem. O silêncio fica pesado." },
            { speaker: "Improvisador", text: "Nesses momentos, a técnica salva: 'o que me ocorre imediatamente é...', depois deixar a frase me levar." },
            { speaker: "Aluno", text: "A frase como rampa de lançamento?" },
            { speaker: "Improvisador", text: "Exato. Você não sabe onde vai chegar quando começa. Mas começa — e a fala cria o pensamento enquanto acontece." }
          ]
        },
        keyPhrases: [
          "Improvisação como estruturação em tempo real — não ausência de estrutura",
          "A frase como rampa de lançamento: começar sem saber onde terminar",
          "Micro-estrutura instantânea: posição → evidência → implicação",
          "Confiança no processo: a fala cria o pensamento enquanto acontece"
        ],
        guidedProduction: [
          "Fale por 2 minutos sobre qualquer tema sem preparação (escreva o roteiro).",
          "Use a micro-estrutura P→E→I para estruturar um pensamento em 30 segundos.",
          "Como você recupera a linha de raciocínio quando perde o fio no meio de uma fala?"
        ],
        grammar: {
          title: "Improvisação Avançada Master",
          explanation: "Micro-estrutura P→E→I: Position (sua posição sobre o tema) → Evidence (um exemplo ou dado que a suporta) → Implication (o que isso significa, a consequência). 30 segundos são suficientes para um pensamento completo nessa estrutura. Técnica de retomada: quando você perde o fio, 'o que quero dizer com isso é...' permite reformular sem parecer perdido. Âncora final: terminar com a ideia mais importante garante que o ouvinte leva algo mesmo que não lembre o desenvolvimento. Técnica do eco: retomar uma palavra ou ideia que o interlocutor usou cria continuidade sem precisar inventar um tema novo.",
          conjugation: "Rampas de lançamento: 'O que me ocorre imediatamente é...' / 'Há uma dimensão desse tema que...' / 'Penso nisso de dois ângulos diferentes...' / 'A pergunta que isso levanta para mim é...' / 'Posso dar um exemplo pessoal?'"
        },
        exercises: [
          { type: "production", prompt: "Escreva o roteiro de 2 minutos sobre 'o que você aprendeu com um fracasso' sem preparação prévia.", answer: "O que me ocorre imediatamente quando penso em fracasso é uma apresentação específica — tinha 23 anos, uma ideia que achei brilhante, e um público que discordou silenciosamente por 30 minutos antes de finalmente me dizer que a premissa inteira estava equivocada. [pausa] O que aprendi? Não foi o que eu achei que aprendi. Achei que aprendi a me preparar melhor. Mas o que aprendi de verdade — e só percebi anos depois — foi que há uma diferença fundamental entre preparar um argumento e entender o público para quem você está argumentando. Eu tinha preparado para um público imaginário que concordava comigo. O público real não concordava — e eu não havia me preparado para esse encontro. Desde então, antes de qualquer apresentação importante, passo mais tempo pensando em quem vai ouvir do que no que vou dizer. O conteúdo importa. Mas o encontro entre o conteúdo e aquele público específico, naquele momento específico, é o que determina se algo de fato acontece." },
          { type: "production", prompt: "Use P→E→I para estruturar em 45 segundos: 'O que você pensa sobre o futuro das línguas?'", answer: "Posição: Acredito que o futuro das línguas é de concentração, não de diversidade — mas que isso não é inevitável.\n\nEvidência: Estudos mostram que metade das 7000 línguas do mundo pode desaparecer até o fim do século — uma língua morre a cada duas semanas. O inglês e o mandarim dominam cada vez mais espaços que antes pertenciam a línguas locais.\n\nImplicação: Se isso se confirmar, perderemos não apenas vocabulários, mas formas de organizar a realidade que só existem nessas línguas — o que é uma perda epistemológica, não apenas cultural. A questão não é se você aprende inglês; é se, ao aprender inglês, você mantém, perde ou transforma a língua que veio antes." },
          { type: "production", prompt: "Escreva 3 formas de recuperar o fio do raciocínio quando você perde o rumo no meio de uma fala.", answer: "1) Reformulação direta: 'Deixa eu dizer isso de outro jeito...' — permite recomeçar a mesma ideia com uma abordagem diferente, sem revelar que você se perdeu. 2) Meta-comentário: 'O que quero dizer com tudo isso é...' — permite pular para a conclusão quando o desenvolvimento está confuso, ainda entregando o ponto principal. 3) Pergunta retórica: 'Então, para onde isso nos leva?' — cria uma pausa natural enquanto você organiza os próximos pensamentos, e o público interpreta como transição deliberada, não como perda de fio." },
          { type: "analysis", prompt: "Por que 'a fala cria o pensamento enquanto acontece' é uma afirmação paradoxal mas verdadeira?", answer: "A afirmação parece paradoxal porque assumimos que o pensamento precede a fala — que você pensa algo e depois o expressa. Mas a relação é muito mais dialógica: ao formular em palavras, você descobre o que pensa. Isso é especialmente verdadeiro para pensamentos complexos ou ambíguos: antes de tentar articular, você tem uma impressão vaga; ao articular, você é forçado a precisar, a escolher, a estruturar — e no processo, o próprio pensamento se forma. Montaigne percebeu isso e fez da escrita de ensaios um método de pensar, não de reportar pensamentos já formados. A improvisação oral funciona da mesma forma: você começa com uma direção geral e a fala, ao acontecer, vai revelando e construindo o pensamento. Por isso começos de frases como 'o que me ocorre imediatamente é...' não são truques — são genuinamente metodológicos." },
          { type: "production", prompt: "Improvise oralmente (escreva o roteiro) respondendo à pergunta: 'O que diferencia um falante Master de um falante fluente?'", answer: "O que me ocorre imediatamente é uma distinção que levei tempo para articular: fluência é a ausência de obstáculos; Master é a presença de possibilidades. [pausa] Deixa eu explicar. Um falante fluente consegue fazer tudo que precisa em português sem travar — conversar, negociar, escrever, apresentar. A língua não é mais um problema. Um falante Master vai além: a língua é um instrumento com o qual pode fazer coisas específicas que outros instrumentos não permitem. Pode escrever com um ritmo particular que serve o conteúdo. Pode perceber a diferença de conotação entre 'afirmou' e 'disse' e escolher com intenção. Pode fazer rir de formas que dependem de timing e cumplicidade cultural. Pode analisar um texto não apenas pelo que diz, mas pelo que revela. [pausa] O falante fluente navega a língua. O Master a habita." }
        ]
      },
      {
        id: "MASTER-U6-L5",
        title: "Revisão e produção integrada Master-U6",
        objectives: ["Integrar técnica vocal, podcast, performance e improvisação em produção oral Master", "Demonstrar excelência oral plena em português"],
        shadowingDialogue: {
          title: "A voz que chegou",
          lines: [
            { speaker: "Mestra", text: "Você começou este módulo com uma voz que funcionava. Está terminando com uma voz que escolhe." },
            { speaker: "Aluno", text: "A diferença entre funcionar e escolher." },
            { speaker: "Mestra", text: "É a diferença entre ter um martelo e saber construir. O instrumento é o mesmo; o que você faz com ele, não." },
            { speaker: "Aluno", text: "E essa escolha consciente não tira a naturalidade?" },
            { speaker: "Mestra", text: "Quando a técnica é suficientemente incorporada, a escolha parece natural. É esse o objetivo: técnica invisível." }
          ]
        },
        keyPhrases: [
          "Técnica invisível: a habilidade que não aparece como esforço",
          "Voz que escolhe: cada elemento é uma decisão consciente",
          "Oral Master: fluência + precisão + presença + intenção + adaptação",
          "A comunicação que transforma: quando o ouvinte sai diferente"
        ],
        guidedProduction: [
          "Produza um monólogo de 3 minutos sobre um tema de sua escolha — gravado.",
          "Escreva o roteiro de um episódio piloto de podcast de 5 minutos.",
          "Apresente ao vivo (escreva o roteiro) para um público imaginário de 100 pessoas."
        ],
        grammar: {
          title: "Revisão Master-U6",
          explanation: "Consolida: técnica vocal (respiração, projeção, articulação, ritmo, pausa), podcast e rádio (intimidade, genuíno vs. performático, estrutura de episódio), performance pública (presença, câmera vs. ao vivo, uso do espaço), improvisação (P→E→I, rampas de lançamento, retomada de fio).",
          conjugation: "Síntese Master-U6: técnica vocal / presença como atenção / intimidade de podcast / P→E→I / rampa de lançamento / retomada de fio / técnica invisível / voz que escolhe"
        },
        exercises: [
          { type: "production", prompt: "Escreva o roteiro completo de um monólogo de 3 minutos sobre 'o que o português me ensinou'.", answer: "Vou falar sobre o que nenhum manual de língua menciona. [pausa] Quando você aprende uma língua adulto, você passa por uma regressão forçada: de repente, você que sabia dizer coisas complexas e nuançadas na sua língua volta a dizer coisas simples e imprecisas. É como ser reduzido. // Mas há algo interessante nessa redução. Quando você só tem as palavras básicas disponíveis, você descobre quais ideias são básicas. Você filtra o que é essencial do que é ornamento. // O português me ensinou isso de uma forma que minha língua nativa nunca conseguiu: a necessidade de clareza quando as ferramentas são limitadas. // E depois, à medida que as ferramentas cresceram, a clareza que aprendi na escassez permaneceu. Aprendi a perguntar, sobre qualquer frase que escrevo: o que estou realmente dizendo? Essa palavra existe porque precisa ou porque parece sofisticada? // O português também me deu algo que não esperava: novas formas de sentir. Há um jeito de habitar o cotidiano que o PB carrega — uma disposição para o detalhe, para a piada, para a emoção direta — que não existe na mesma forma na minha língua. Aprendi a notar essas coisas porque a língua me empurrava para elas. // Não sei se a língua molda quem você é. Mas molda quem você pode ser enquanto a fala. E isso, descobri, já é muito." },
          { type: "production", prompt: "Escreva o roteiro de um episódio piloto de podcast de 5 minutos sobre cultura brasileira.", answer: "[Abertura — 30 seg] 'Bem-vindos ao primeiro episódio de Dentro do Brasil — o podcast onde a gente vai fundo nas coisas que fazem o Brasil ser o Brasil. Não o Brasil do carnaval e do futebol — embora a gente vá falar sobre isso também. O Brasil das contradições, das criatividades, das perguntas sem resposta fácil. Eu sou [nome] e estou aprendendo português há [x] anos. Isso me dá uma perspectiva de dentro e de fora ao mesmo tempo — e é essa perspectiva que quero trazer pra vocês.'\n\n[Desenvolvimento — 3 min] Tema do episódio: a diversidade culinária brasileira como mapa cultural. Falar sobre como a culinária do Nordeste, do Sul, do Centro-Oeste e do Norte são, na prática, cozinhas diferentes que compartilham um idioma. Exemplos específicos: o baião de dois nordestino, o churrasco gaúcho, o pequi do Cerrado, o tacacá amazônico. O que cada um diz sobre a história e a identidade da região.\n\n[Conclusão — 30 seg] 'No próximo episódio, vou conversar com [convidado] sobre [tema]. Se você tem uma pergunta sobre o Brasil que sempre quis fazer — me manda. O link está na descrição. Até semana que vem.'" },
          { type: "production", prompt: "Escreva 5 princípios da excelência oral em português — com exemplos.", answer: "1) Precisão sobre velocidade: falar com clareza e intenção é mais eficaz que falar rápido. Exemplo: uma pausa de 3 segundos antes de uma afirmação-chave vale mais que 30 palavras adicionais. 2) Adaptar ao contexto, não ter 'uma voz': a voz para podcast é diferente da voz para palco, que é diferente da voz para reunião. 3) Presença como atenção ao momento: responder ao que está realmente acontecendo (a sala inquieta, o ouvinte confuso) em vez de executar o roteiro. 4) Técnica invisível: quando a habilidade é suficientemente incorporada, deixa de parecer esforço e passa a parecer natural — o objetivo de todo o treinamento. 5) Genuíno antes de performático: a voz que soa como quem você é, não como quem você acha que deveria ser, é sempre mais eficaz — especialmente na intimidade do microfone." },
          { type: "production", prompt: "Escreva uma avaliação honesta da sua própria voz oral em português — pontos fortes e áreas de desenvolvimento.", answer: "[Resposta pessoal — modelo:] Pontos fortes: articulação clara (o trabalho de precisão na língua escrita se transferiu para a fala), vocabulário suficiente para conversas de alta complexidade, e capacidade de estruturar argumentos em tempo real com razoável coerência. Também desenvolvi razoável conforto com o silêncio — consigo fazer pausas sem preenchê-las com 'éh'. Áreas de desenvolvimento: o sotaque em situações de estresse ou velocidade alta ainda fica mais marcado do que eu gostaria. O humor — especialmente o timing da piada — ainda exige mais esforço consciente do que deveria. E em situações muito emocionalmente carregadas, a segunda língua ainda cria uma leve distância que a língua nativa não criaria — o que às vezes é útil, mas às vezes é limitante." },
          { type: "analysis", prompt: "O que significa 'a comunicação que transforma'?", answer: "A comunicação que transforma é aquela em que o ouvinte sai diferente de como entrou — não necessariamente convencido, mas com uma perspectiva que não tinha antes, uma pergunta que não havia feito, uma experiência que a fala criou. Isso é diferente de comunicação que informa (você sabe mais) ou que entretém (você se divertiu). A transformação pode ser sutil: uma frase que você carrega por anos, uma imagem que muda como você vê algo. Ou pode ser dramática: uma conversa que altera uma decisão de vida. O orador ou escritor que consegue isso não é necessariamente o mais erudito ou o mais fluente — é o que combina autenticidade, precisão e presença de forma que o que diz encontra o ouvinte onde ele está e o leva a algum outro lugar. Isso não pode ser ensinado completamente — pode ser cultivado." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 7 — Literatura Comparada: Brasil e Mundo Lusófono
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U7",
    title: "Literatura Comparada: Brasil e Mundo Lusófono",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U7-L1",
        title: "Mia Couto e a literatura moçambicana em português",
        objectives: ["Analisar a obra de Mia Couto com profundidade crítica Master", "Compreender como o português é reinventado na literatura africana"],
        shadowingDialogue: {
          title: "O português que nasceu de novo",
          lines: [
            { speaker: "Crítico", text: "Mia Couto faz com o português algo que o português não fazia antes: o transforma numa língua de culturas em contato." },
            { speaker: "Aluno", text: "Ele mistura o português europeu com as línguas banto de Moçambique?" },
            { speaker: "Crítico", text: "Mais que isso — inventa uma sintaxe que carrega a cosmovisão bantu dentro da estrutura portuguesa." },
            { speaker: "Aluno", text: "'A fronteira entre vivos e mortos é porosa' — isso não é apenas tema, é forma?" },
            { speaker: "Crítico", text: "Exatamente. A língua de Mia Couto não descreve a fronteira porosa — ela é porosa. Forma e conteúdo inseparáveis." }
          ]
        },
        keyPhrases: [
          "Mia Couto: português que incorpora cosmovisão bantu na sintaxe",
          "'Terra Sonâmbula' / 'O Último Voo do Flamingo' / 'A Confissão da Leoa'",
          "Neologismos de Mia Couto: 'desazado', 'desfalecer', 'emocionar'",
          "A fronteira porosa entre vivos e mortos como tema e como forma"
        ],
        guidedProduction: [
          "O que torna a escrita de Mia Couto única no panorama lusófono?",
          "Como Mia Couto usa neologismos de forma diferente de Guimarães Rosa?",
          "Compare um trecho de Mia Couto com um de Clarice — o que compartilham?"
        ],
        grammar: {
          title: "Literatura Lusófona Africana Master",
          explanation: "Mia Couto (Moçambique, 1955): escritor branco que escreve sobre e com Moçambique — sua posição é política além de literária. Técnicas: neologismos formados por analogia ('desazado' = sem asa = sem sorte), inversão de metáforas convencionais, sintaxe que incorpora a oralidade das línguas banto, tempos verbais que borrão a fronteira entre passado e presente. Contexto: Moçambique pós-independência (1975), guerra civil, reconstrução — literatura que processa trauma coletivo através da ficção.",
          conjugation: "Neologismos de Mia Couto: 'desazado' (sem asa, sem sorte) / 'emocionar' (que causa emoção) / 'namorido' (portmanteau de namorado + marido) / 'xicuembo' (espírito ancestral, do ronga)"
        },
        exercises: [
          { type: "analysis", prompt: "O que torna a escrita de Mia Couto única no panorama lusófono?", answer: "Mia Couto realiza uma operação linguística raramente alcançada: ele incorpora à estrutura sintática do português europeu a cosmovisão das culturas banto de Moçambique — especialmente a relação fluida entre vivos e mortos, o tempo circular em vez de linear, e a onipresença do ancestral no cotidiano. Isso não é apenas temático: a forma da frase carrega esses valores. Neologismos como 'desazado' (sem asa = sem sorte) seguem a lógica morfológica do português mas criam imagens que vêm de outra tradição cultural. O resultado é uma língua que é português e não é português — uma terceira coisa, criada pelo encontro entre a língua colonizadora e as culturas que ela tentou, sem sucesso completo, apagar." },
          { type: "production", prompt: "Compare a estratégia de neologismo em Mia Couto e em Guimarães Rosa em 4 frases.", answer: "Ambos criam palavras novas para nomear experiências que a língua convencional não alcança, mas partem de lugares radicalmente diferentes. Rosa inventa a partir do próprio português — de raízes latinas, de vocabulário arcaico sertanejo, de onomatopeias — para criar uma língua que é ainda mais português, mais denso, mais rico. Mia Couto inventa na fronteira entre o português e as línguas banto — palavras que carregam morfologia portuguesa mas semântica e cosmovisão africanas. Rosa aprofunda a língua; Mia Couto a expande em direção ao outro. Em Rosa, o novo vem de dentro da própria tradição; em Mia Couto, vem do encontro de tradições distintas." },
          { type: "production", prompt: "Escreva 4 linhas de análise sobre: 'Na nossa terra, os mortos não morrem. Ficam por perto, ajudam, atrapalham. Às vezes mais que os vivos.' (Mia Couto, parafrasado)", answer: "O trecho estabelece a premissa cosmológica central da ficção de Mia Couto: a continuidade entre os mundos dos vivos e dos mortos como dado cultural, não como sobrenatural. 'Ajudam, atrapalham' — o paralelo antitético humaniza os mortos, que têm as mesmas ambiguidades morais dos vivos. 'Às vezes mais que os vivos' — inversão que questiona qual dos dois mundos é mais real ou mais presente. A singeleza da sintaxe (frases curtas, vocabulário simples) contrasta com a profundidade cultural do que enuncia — a forma mimética à oralidade das línguas banto onde essas ideias têm sua origem." },
          { type: "analysis", prompt: "Por que a posição política de Mia Couto — escritor branco que escreve sobre Moçambique negro — é relevante para a análise de sua obra?", answer: "A posição de Mia Couto é genuinamente complexa e ele mesmo a aborda com autoconsciência: nascido no Moçambique colonial de família portuguesa, escolheu ficar após a independência e identificar-se como moçambicano. Sua obra literária é uma negociação constante dessa posição: ele escreve sobre as culturas e cosmovisões das populações negras moçambicanas, o que levanta a questão legítima do 'lugar de fala' e da possibilidade de representação. O que torna seu caso interessante é que a qualidade literária de sua escrita — e o reconhecimento que recebe das próprias comunidades que representa — sugerem que o gesto é mais de colaboração que de apropriação. Mas a questão não se resolve: deve ser mantida como tensão produtiva na leitura de sua obra." },
          { type: "production", prompt: "Escreva um parágrafo sobre o papel da literatura moçambicana no panorama lusófono.", answer: "A literatura moçambicana ocupa um lugar único na lusofonia: é o único corpus literário significativo produzido em português num contexto de multilinguismo radical, onde o português é língua oficial mas língua nativa de menos de 15% da população. Isso significa que escrever em português em Moçambique é sempre uma escolha política — e uma negociação cultural. Mia Couto é o nome mais conhecido internacionalmente, mas a literatura moçambicana inclui vozes como Paulina Chiziane (a primeira romancista moçambicana publicada), José Craveirinha (poeta que combinou surrealismo europeu com oralidade africana) e Ungulani Ba Ka Khosa. Juntos, constroem um corpo literário que usa a língua do colonizador para narrar — e às vezes contestar — a experiência colonial e pós-colonial." }
        ]
      },
      {
        id: "MASTER-U7-L2",
        title: "Fernando Pessoa e a multiplicidade do eu",
        objectives: ["Analisar Pessoa com profundidade filosófica e literária Master", "Compreender os heterônimos como projeto filosófico-literário único"],
        shadowingDialogue: {
          title: "Quem é Fernando Pessoa?",
          lines: [
            { speaker: "Pessoiana", text: "Pessoa dizia: 'Sou o intervalo entre o meu desejo e aquilo que a vida fez de mim.' Isso não é poema — é definição de sujeito moderno." },
            { speaker: "Aluno", text: "E os heterônimos são extensões disso — não máscaras, mas pessoas reais com visões irreconciliáveis entre si." },
            { speaker: "Pessoiana", text: "Caeiro nega tudo que Campos excessa. Reis ordena tudo que o ortônimo deixa em caos." },
            { speaker: "Aluno", text: "É como se Pessoa percebesse que um único 'eu' coerente é uma ficção — e então a tornasse ficção literária." },
            { speaker: "Pessoiana", text: "Isso. E ao fazer isso, antecipou em décadas o que a filosofia e a psicologia levariam anos para teorizar." }
          ]
        },
        keyPhrases: [
          "Alberto Caeiro: o 'mestre' pagão — 'não tenho filosofia, tenho sentidos'",
          "Ricardo Reis: o latinista estoico — odes à maneira horaciana",
          "Álvaro de Campos: o modernista excessivo — 'Ode Triunfal', 'Tabacaria'",
          "Fernando Pessoa ortônimo: o mais enigmático — 'Mensagem', 'Livro do Desassossego'"
        ],
        guidedProduction: [
          "Por que os heterônimos são mais que pseudônimos — são identidades filosóficas?",
          "Compare Caeiro e Campos em termos de visão de mundo e estilo.",
          "O 'Livro do Desassossego' é de Pessoa ou de Bernardo Soares? Por que importa?"
        ],
        grammar: {
          title: "Fernando Pessoa e o Projeto Heteronímico Master",
          explanation: "Heterônimo: personalidade literária autônoma com biografia, filosofia e estilo próprios — diferente de pseudônimo (nome falso para o mesmo autor). Caeiro (1889-1915): pagão radical, empirismo absoluto, anti-metafísica, verso livre quase prosaico. Reis (1887-1935?): classicismo latino, estoicismo, odes em verso medido. Campos (1890-?): futurismo, sensacionismo, verso longo e excessivo, contradição como método. Ortônimo: Pessoa assinando como si mesmo — mais fragmentado e incerto que qualquer heterônimo. Bernardo Soares: semi-heterônimo do 'Livro do Desassossego' — entre Pessoa e não-Pessoa.",
          conjugation: "Vozes de Pessoa: Caeiro — 'O Tejo é mais belo que o rio que corre pela minha aldeia / Mas o Tejo não é mais belo que o rio que corre pela minha aldeia / Porque o Tejo não é o rio que corre pela minha aldeia.' Campos — 'Não sou nada. / Nunca serei nada. / Não posso querer ser nada. / À parte isso, tenho em mim todos os sonhos do mundo.'"
        },
        exercises: [
          { type: "analysis", prompt: "Por que os heterônimos são identidades filosóficas e não apenas pseudônimos?", answer: "Um pseudônimo é um nome falso para o mesmo autor — a voz, a filosofia e o estilo são os mesmos. Os heterônimos de Pessoa são radicalmente diferentes: Caeiro é anti-intelectual e empirista absoluto ('pensar é estar doente dos olhos'); Campos é intelectual e excessivo, com 'Sensação de tudo'; Reis é disciplinado, clássico e estoico. Mais que diferentes estilos, têm visões de mundo irreconciliáveis entre si. Pessoa inclusive afirmava que o trabalho de Caeiro era superior ao seu próprio — reconhecendo o heterônimo como entidade autônoma. Isso não é ficção narrativa (como um personagem de romance) — é uma multiplicação do sujeito que questiona a própria noção de identidade unitária do eu." },
          { type: "production", prompt: "Compare Caeiro e Campos em visão de mundo e estilo em 4 frases.", answer: "Caeiro e Campos são os heterônimos mais opostos de Pessoa, e essa oposição parece intencional. Caeiro recusa o pensamento abstrato ('Pensar incomoda como andar com chuva') e abraça a sensação pura do mundo físico — seus poemas têm sintaxe quase prosaica e vocabulário simples, como se a linguagem transparente fosse o equivalente de ver sem filtro. Campos, ao contrário, excessa: sua 'Ode Triunfal' acumula sensações, máquinas, velocidade, contradição — o verso longo e irregular imita a excitação sensorial moderna que ele ao mesmo tempo celebra e sofre. Se Caeiro é a paz da presença total, Campos é a angústia da multiplicidade — e ambos, paradoxalmente, são Pessoa buscando o mesmo impossível: ser completamente." },
          { type: "analysis", prompt: "O 'Livro do Desassossego' é de Pessoa ou de Bernardo Soares? Por que a questão importa?", answer: "Pessoa classificou Bernardo Soares como 'semi-heterônimo' — nem o próprio Pessoa (ortônimo) nem um heterônimo completamente autônomo. Soares compartilha com Pessoa traços biográficos (auxiliar de guarda-livros em Lisboa, melancolia, vida interior intensa) mas tem uma voz e uma sensibilidade ligeiramente distintas. A questão 'de quem é o livro' importa por razões teóricas e práticas: teoricamente, questiona a autoria e a identidade — se o semi-heterônimo é entre Pessoa e não-Pessoa, o que é autoria? Praticamente, determina como lemos o texto: como confissão autobiográfica (ortônimo) ou como construção ficcional (heterônimo). Pessoa parece ter deixado a questão deliberadamente aberta — e a abertura é parte do projeto." },
          { type: "production", prompt: "Escreva uma análise de 4 linhas do poema de Campos: 'Não sou nada. / Nunca serei nada. / Não posso querer ser nada. / À parte isso, tenho em mim todos os sonhos do mundo.'", answer: "O poema é uma equação paradoxal: quatro versos que constroem a aniquilação do sujeito ('não sou', 'nunca serei', 'não posso querer ser') para então afirmar sua plenitude ('todos os sonhos do mundo'). A conjunção 'à parte isso' é o momento mais dramático: como se o não-ser fosse um detalhe menor a esclarecer antes de anunciar a plenitude interior. Campos usa a contradição não como fraqueza lógica mas como estrutura filosófica — o vazio e a plenitude coexistem no mesmo sujeito. É também um retrato do próprio projeto de Pessoa: ser nada como sujeito unitário e ser tudo como multiplicidade de vozes." },
          { type: "production", prompt: "Por que Pessoa é considerado o maior poeta português e um dos maiores da língua portuguesa?", answer: "Pessoa é considerado o maior poeta português por ter realizado algo que nenhum outro poeta conseguiu: criou um conjunto de obras que, juntas, constroem uma interrogação filosófica sobre a natureza do sujeito e da identidade sem precedente na literatura em língua portuguesa — e com poucos paralelos em qualquer língua. Cada heterônimo é uma resposta diferente à questão 'o que é ser um eu?': Caeiro diz que o eu é um obstáculo para ver o mundo; Campos diz que o eu é múltiplo e contraditório ao extremo; Reis diz que o eu deve ser submetido à disciplina clássica; o ortônimo diz que o eu é o intervalo entre tudo isso. Além da profundidade filosófica, Pessoa domina registros formais completamente distintos: as odes de Reis em verso medido clássico, o verso livre de Caeiro, o verso longo sensacionista de Campos. É uma obra que abrange mais do que qualquer outro poeta individual parece capaz de produzir." }
        ]
      },
      {
        id: "MASTER-U7-L3",
        title: "A literatura cabo-verdiana e angolana: vozes do Atlântico",
        objectives: ["Conhecer as literaturas cabo-verdiana e angolana com perspectiva crítica Master", "Compreender como essas literaturas dialogam com o Brasil e Portugal"],
        shadowingDialogue: {
          title: "O Atlântico como espaço literário",
          lines: [
            { speaker: "Professora", text: "Há um triângulo literário no Atlântico lusófono: Brasil, Portugal e África. Cada vértice ilumina os outros." },
            { speaker: "Aluno", text: "O morabeza cabo-verdiano, a angolanidade, a saudade portuguesa, a brasilidade — todos traduzindo em português experiências distintas." },
            { speaker: "Professora", text: "E dialogando: Luandino Vieira bebeu em João Guimarães Rosa. Pepetela leu Eça de Queirós e Jorge Amado." },
            { speaker: "Aluno", text: "A língua como ponto de encontro de mundos que a história separou violentamente." },
            { speaker: "Professora", text: "E como campo de reconstrução. Escrever em português é, para muitos escritores africanos, um ato de apropriação do instrumento do colonizador." }
          ]
        },
        keyPhrases: [
          "Cabo Verde: movimento Claridade (1936) — literatura da terra, do povo, do mar",
          "Angola: Luandino Vieira, Pepetela — literatura de resistência e identidade",
          "Morabeza cabo-verdiana: hospitalidade e melancolia, análogo à saudade",
          "'Escrever em português é apropriar o instrumento do colonizador' — Ngũgĩ wa Thiong'o"
        ],
        guidedProduction: [
          "O que é a morabeza cabo-verdiana e como difere da saudade portuguesa?",
          "Como Luandino Vieira usa o português como instrumento de resistência?",
          "O debate sobre escrever em língua colonial: por que alguns escritores africanos o rejeitam?"
        ],
        grammar: {
          title: "Literaturas Lusófonas Africanas Master",
          explanation: "Cabo Verde: Movimento Claridade (1936) — primeira literatura africana de língua portuguesa a romper com o colonialismo estético, usando temas locais (evasão, a ilha, o emigrante) e o crioulo cabo-verdiano como tema. Claridosos: Manuel Lopes, Baltasar Lopes, Jorge Barbosa. Angola: Mensagem (grupo literário dos anos 50) — 'Vamos descobrir Angola!'. Luandino Vieira: mestiça o português com o kimbundu nos Luuanda (1963). Pepetela: romancista da angolanidade pós-colonial. Debate: Ngũgĩ wa Thiong'o (Quênia) abandonou o inglês pelo gikuyu — debate sobre língua colonial vs. línguas nativas.",
          conjugation: "Conceitos: morabeza (Cabo Verde: hospitalidade + melancolia + pertencimento à ilha) / angolanidade (identidade angolana híbrida) / Claridade (movimento literário) / crioulo cabo-verdiano (língua nacional, base portuguesa com léxico africano)"
        },
        exercises: [
          { type: "analysis", prompt: "O que é a morabeza cabo-verdiana e como se relaciona com a saudade portuguesa?", answer: "A morabeza é um conceito cabo-verdiano que combina hospitalidade extrema, melancolia suave e sentido profundo de pertencimento ao arquipélago. É prima da saudade — ambas são conceitos lusófonos para estados afetivos relacionados ao pertencimento, à distância e ao tempo — mas com diferenças significativas. A saudade é mais orientada para o passado e para o ausente; a morabeza é mais do presente e do lugar, um sentimento de enraizamento que paradoxalmente coexiste com o desejo de partir (a evasão, tema central da literatura cabo-verdiana). Cabo Verde é um arquipélago de emigração — a maioria da diáspora cabo-verdiana no mundo supera a população das ilhas. A morabeza é o que se leva e o que puxa de volta." },
          { type: "production", prompt: "Como Luandino Vieira usa o português como instrumento de resistência em 'Luuanda'?", answer: "'Luuanda' (1963), de Luandino Vieira, é um ato de resistência linguística e literária contra o colonialismo português. Escrito durante o período colonial (Luandino foi preso pela PIDE, a polícia política portuguesa), o livro usa o português mas o transforma através da sintaxe e do vocabulário do kimbundu — a língua banto mais falada em Angola. O resultado é uma língua híbrida que nega a superioridade cultural do português ao tornar o kimbundu um elemento constitutivo, não decorativo. Além disso, ao narrar a vida nos musseques (favelas de Luanda) com dignidade literária, Luandino afirma que a experiência do colonizado é matéria literária plena — não o ponto de vista do colonizador sobre o colonizado, mas a voz do colonizado sobre si mesmo." },
          { type: "analysis", prompt: "Por que alguns escritores africanos escolhem escrever em língua colonial e outros rejeitam essa escolha?", answer: "O debate é entre duas posições com argumentos sérios. Os que escrevem em língua colonial (português, inglês, francês) argumentam: a língua colonial permite alcançar audiências mais amplas, incluindo outros africanos que compartilham a língua mas não a língua étnica; a língua colonial pode ser subvertida e apropriada, tornando-se instrumento de resistência em vez de dominação; recusar a língua colonial pode significar rejeitar também a tradição literária que se construiu nela. Os que rejeitam (Ngũgĩ wa Thiong'o é o caso mais famoso, que abandonou o inglês pelo gikuyu): escrever em língua colonial é continuar a relação de dependência cultural; a descolonização da mente começa pela língua; há audiências que só as línguas nativas alcançam." },
          { type: "production", prompt: "Escreva sobre o papel do movimento Claridade na literatura lusófona africana.", answer: "O movimento Claridade (Cabo Verde, 1936) representa um marco na história da literatura lusófona africana: foi a primeira ruptura sistemática com a estética colonial no espaço literário de língua portuguesa em África. Os claridosos — Manuel Lopes, Baltasar Lopes, Jorge Barbosa — recusaram a imitação da literatura portuguesa metropolitana e voltaram o olhar para Cabo Verde: a ilha, o mar, o emigrante, a evasão e a morabeza. Ao fazerem isso, criaram um precedente que influenciou os movimentos literários em Angola e Moçambique nos anos seguintes. A Claridade foi também influenciada pelo modernismo brasileiro — especialmente pelo regionalismo nordestino, que oferecia um modelo de literatura que valorizava o local, o popular e o não-metropolitano. Esse triângulo de influências (Portugal, Brasil, África) seria constitutivo de toda a literatura lusófona africana subsequente." },
          { type: "production", prompt: "Escreva 4 frases sobre o que a comparação entre literaturas lusófonas revela sobre a língua portuguesa.", answer: "Comparar as literaturas lusófonas revela que o português não é uma língua — é uma família de línguas literárias que compartilham uma base mas desenvolveram estéticas, cosmovisões e relações com a tradição oral radicalmente distintas. O que Guimarães Rosa faz com o português sertanejo, Mia Couto faz com o português banto, Luandino Vieira com o português kimbundu — e nenhum desses projetos é redutível ao português de Lisboa ou à norma europeia. Isso demonstra que a imposição colonial de uma língua única produziu, paradoxalmente, uma multiplicidade literária extraordinária: ao obrigar culturas diversas a expressarem-se numa mesma língua, criou condições para que essa língua fosse transformada por cada cultura que a adotou. A lusofonia não é uma unidade — é um diálogo de diferenças que se comunicam numa língua compartilhada mas não idêntica." }
        ]
      },
      {
        id: "MASTER-U7-L4",
        title: "Intertextualidade e tradição: como os textos dialogam",
        objectives: ["Analisar intertextualidade em textos lusófonos com precisão Master", "Compreender como a tradição literária é transmitida, contestada e reinventada"],
        shadowingDialogue: {
          title: "Todo texto é resposta a outros textos",
          lines: [
            { speaker: "Professora", text: "Bloom dizia que cada poeta forte precisa 'matar' seus precursores para criar algo próprio. Concordo parcialmente." },
            { speaker: "Aluno", text: "A angústia da influência — sentir que tudo já foi dito melhor antes de você." },
            { speaker: "Professora", text: "Mas há outra posição: celebrar a intertextualidade como riqueza, não como ameaça. Bakhtin vs. Bloom." },
            { speaker: "Aluno", text: "Em Guimarães Rosa, a intertextualidade é exibida orgulhosamente — ele conversa com Goethe, com a Bíblia, com o sertanejo." },
            { speaker: "Professora", text: "Isso. A tradição não como prisão, mas como biblioteca infinita à disposição. A questão é o que você faz com ela." }
          ]
        },
        keyPhrases: [
          "Intertextualidade (Kristeva/Bakhtin): todo texto é tecido de outros textos",
          "Angústia da influência (Harold Bloom): o poeta que precisa 'matar' o precursor",
          "Paródia / pastiche / citação / alusão — graus de diálogo com o texto anterior",
          "Cânone literário lusófono: quem está e quem não está — e por quê"
        ],
        guidedProduction: [
          "Identifique uma referência intertextual numa obra brasileira que você conhece.",
          "O que é o 'cânone' literário lusófono e quem decide quem entra?",
          "Como a literatura periférica contemporânea dialoga com e contesta o cânone?"
        ],
        grammar: {
          title: "Intertextualidade e Tradição Master",
          explanation: "Intertextualidade (Julia Kristeva, a partir de Bakhtin): todo texto é 'mosaico de citações', absorção e transformação de outros textos. Tipos: citação explícita, alusão (referência implícita que pressupõe conhecimento do leitor), paródia (imitação crítica), pastiche (imitação homenagem), hipotexto (texto de origem) e hipertexto (texto derivado). Cânone: conjunto de obras consideradas centrais numa tradição literária — construção histórica que reflete quem tinha poder de definir o que era 'bom'. Revisão canônica: ampliação do cânone para incluir vozes historicamente excluídas.",
          conjugation: "Análise intertextual: 'o texto dialoga com / alude a / cita explicitamente / parodia / subverte / homenageia / revisita / responde a / constrói sobre / desconstrói'"
        },
        exercises: [
          { type: "analysis", prompt: "O que é intertextualidade e como funciona na leitura de textos literários?", answer: "Intertextualidade é a relação que um texto mantém com outros textos — através de citações, alusões, paródias, revisitações de temas e formas. Para Julia Kristeva, que cunhou o termo a partir de Bakhtin, todo texto é um 'mosaico de citações': nenhum texto nasce do vácuo, todo texto absorve e transforma textos anteriores. Na leitura literária, isso significa que o prazer e a profundidade de um texto frequentemente dependem do reconhecimento dessas referências: perceber que Guimarães Rosa dialoga com Goethe em 'Grande Sertão' acrescenta uma camada ao texto; perceber que Machado de Assis leu Sterne muda como lemos 'Memórias Póstumas'. A intertextualidade não é apenas erudição — é o mecanismo pelo qual a tradição literária se transmite, se contesta e se renova." },
          { type: "production", prompt: "O que é o cânone literário lusófono e quem decide quem entra?", answer: "O cânone literário lusófono é o conjunto de obras consideradas essenciais e de referência — os textos que entram nos currículos escolares, são mais editados, mais estudados e mais citados. Historicamente, esse cânone foi construído por instituições com poder de legitimar: universidades, academias literárias, grandes editoras, prêmios literários. No caso lusófono, isso significou que durante décadas o cânone era dominado por homens brancos de Portugal e Brasil, com presença mínima de mulheres, de escritores negros, de literatura africana e de literatura periférica. A revisão canônica das últimas décadas — que ampliou o espaço para Clarice Lispector (que demorou a ser plenamente reconhecida), Conceição Evaristo, escritores africanos como Mia Couto e Pepetela — não apagou o cânone anterior, mas o interrogou e o expandiu." },
          { type: "production", prompt: "Como a literatura periférica contemporânea dialoga com e contesta o cânone?", answer: "A literatura periférica brasileira contemporânea — Geovani Martins, Itamar Vieira Junior, Conceição Evaristo, Eliane Brum — contesta o cânone de duas formas simultâneas. A primeira é temática: traz para o centro narrativo experiências e perspectivas que o cânone havia sistematicamente excluído ou representado do ponto de vista externo — a favela, o quilombo, a periferia, a mulher negra como sujeito e não objeto. A segunda é formal: desenvolve linguagens narrativas que incorporam a oralidade, os ritmos e as referências culturais dessas comunidades — não como exotismo, mas como matéria literária legítima. Ao mesmo tempo, essa literatura não nega o cânone — dialoga com ele: Itamar Vieira Junior conhece e responde ao realismo mágico latino-americano; Conceição Evaristo dialoga com Clarice. O gesto é de expansão e contestação simultâneas, não de substituição." },
          { type: "analysis", prompt: "O que é a 'angústia da influência' de Harold Bloom e como se manifesta na literatura lusófona?", answer: "Harold Bloom argumentou que todo poeta 'forte' sente a 'angústia da influência': a opressão de ser posterior a precursores gigantes, que parece ter dito tudo melhor. A resposta criativa a essa angústia é uma 'misleitura' (misreading) deliberada do precursor — uma reinterpretação criativa que abre espaço para o novo. Na literatura lusófona, isso se manifesta de formas diversas. Saramago precisou trabalhar contra a sombra de Eça de Queirós e da tradição do romance realista português — e o fez desenvolvendo uma sintaxe radicalmente original que é inimitável. Clarice precisou trabalhar contra a tradição do romance realista brasileiro — e o fez através do fluxo de consciência e da metalinguagem. A angústia não paralisa os melhores escritores — os transforma, forçando-os a inventar formas que não existiam antes deles." },
          { type: "production", prompt: "Analise um caso concreto de intertextualidade na literatura lusófona — como um texto dialoga com outro.", answer: "O caso mais fascinante é a relação entre Machado de Assis e Laurence Sterne. 'Memórias Póstumas de Brás Cubas' (1881) é impensável sem o 'Tristram Shandy' (1759) de Sterne: o narrador que comenta a própria narrativa, a estrutura fragmentada com capítulos brevíssimos, a ironia que inclui o leitor como cúmplice, o humor filosófico que desestabiliza o gênero romance. Machado não cita Sterne explicitamente — alude a ele através da forma. O que é extraordinário é o que Machado faz com a influência: transforma um procedimento formal inglês num instrumento de crítica social especificamente brasileira e especificamente do século XIX. A intertextualidade não é cópia — é transformação. Sterne ensina a técnica; Machado cria um mundo com ela que Sterne não poderia ter criado." }
        ]
      },
      {
        id: "MASTER-U7-L5",
        title: "Revisão e produção integrada Master-U7",
        objectives: ["Integrar Mia Couto, Pessoa, literaturas africanas e intertextualidade", "Demonstrar análise literária comparada de excelência Master"],
        shadowingDialogue: {
          title: "A lusofonia como projeto literário",
          lines: [
            { speaker: "Mestra", text: "A lusofonia não é uma identidade — é um campo de forças onde diferentes vozes disputam a língua." },
            { speaker: "Aluno", text: "Português de Portugal, PB, PB africano, crioulos — nenhum é 'o' português." },
            { speaker: "Mestra", text: "E a literatura é onde essa disputa é mais visível e mais produtiva." },
            { speaker: "Aluno", text: "Cada escritor reivindica a língua para sua experiência — e ao fazê-lo, a transforma." },
            { speaker: "Mestra", text: "E o leitor que atravessa todas essas literaturas sai com uma concepção de língua que nenhuma escola poderia oferecer." }
          ]
        },
        keyPhrases: [
          "Lusofonia como campo de forças, não como identidade homogênea",
          "A língua disputada: cada voz reivindica o português para sua experiência",
          "Literatura comparada como método: iluminar pelo contraste",
          "O leitor que atravessa as lusofonia sai expandido"
        ],
        guidedProduction: [
          "Compare dois autores lusófonos de países diferentes — o que os une e o que os distingue?",
          "O que a literatura comparada lusófona te ensinou sobre o que é o português?",
          "Escreva uma análise literária integrando pelo menos 3 literaturas lusófonas."
        ],
        grammar: {
          title: "Revisão Master-U7",
          explanation: "Consolida: Mia Couto (português banto, cosmovisão africana, neologismo), Fernando Pessoa e heterônimos (projeto filosófico da multiplicidade do eu), literaturas cabo-verdiana e angolana (Claridade, morabeza, resistência colonial), intertextualidade e cânone (Bloom, Bakhtin, revisão canônica).",
          conjugation: "Síntese Master-U7: heterônimo / intertextualidade / cânone / lusofonia / morabeza / angolanidade / cosmovisão banto / angústia da influência / revisão canônica / literatura de resistência"
        },
        exercises: [
          { type: "production", prompt: "Compare Mia Couto e Guimarães Rosa em 4 frases — o que os une e o que os distingue.", answer: "Mia Couto e Guimarães Rosa compartilham a ambição mais radical da literatura em língua portuguesa: transformar a própria língua para que ela possa expressar o que o português convencional não expressa. Ambos criam neologismos, ambos incorporam tradições orais locais à estrutura narrativa, ambos tratam a fronteira entre o sagrado e o profano, o vivo e o morto, como tema e como forma. A diferença fundamental está na origem da transformação: em Rosa, a expansão vem de dentro da tradição portuguesa e de suas raízes latinas — o português se aprofunda. Em Mia Couto, a expansão vem do encontro com culturas banto de fora da tradição europeia — o português se abre para o outro." },
          { type: "production", prompt: "Escreva sobre o que a leitura de literaturas lusófonas diversas te ensinou sobre o português.", answer: "Ler literaturas lusófonas diversas me ensinou que o português que aprendi — o PB contemporâneo, culto, urbano — é apenas uma das formas que a língua assumiu, e talvez não seja a mais interessante delas. Descobri que o português pode ser banto em Mia Couto, pode ser medieval em textos jurídicos e religiosos portugueses, pode ser múltiplo em Pessoa, pode ser resistência em Luandino Vieira, pode ser crioulo em textos cabo-verdianos. Cada uma dessas formas é igualmente 'português' e igualmente legítima — e cada uma me ensinou algo que a outra não podia. A língua que aprendi é mais vasta do que qualquer escola poderia conter, e essa vastidão é exatamente o que me mantém aprendendo." },
          { type: "production", prompt: "Escreva uma análise literária comparada de 200 palavras usando 3 literaturas lusófonas.", answer: "A relação com a morte e o além é um dos temas mais reveladores para comparar literaturas lusófonas, porque cada tradição a trata de forma radicalmente distinta. Em Clarice Lispector, a morte é uma presença existencial que se infiltra no cotidiano como estranhamento — em 'A Hora da Estrela', Macabéa morre e a morte é o ponto de chegada de uma vida já marcada pela ausência. Em Mia Couto, a fronteira entre vivos e mortos é literalmente porosa: os ancestrais participam dos eventos, aconselham, interferem — isso não é sobrenatural, é cosmológico, uma forma diferente de organizar o tempo e a presença. Em Fernando Pessoa, especialmente no Ricardo Reis, a morte é o tema horaciano por excelência: 'o tempo destrói-nos, e sua foice é constante' — o estoicismo clássico diante da inevitabilidade. Três literaturas que compartilham uma língua e tratam a morte de formas que revelam não apenas estilos diferentes, mas cosmovisões irredutíveis entre si. Comparar os três não é encontrar uma síntese — é aprender que a mesma língua pode ser o instrumento de mundos muito diferentes." },
          { type: "production", prompt: "Por que Fernando Pessoa é essencial para compreender o projeto literário da modernidade lusófona?", answer: "Pessoa é central para o projeto da modernidade lusófona por várias razões. Primeiro, ele é o ponto de inflexão: é com ele que a literatura portuguesa definitivamente entra na modernidade europeia — não como epígono das vanguardas francesas ou inglesas, mas com uma contribuição original (os heterônimos) que antecipou debates filosóficos sobre identidade e subjetividade. Segundo, os heterônimos funcionam como espelho para as literaturas lusófonas africanas: a multiplicidade de vozes de Pessoa prefigura a condição dos escritores africanos que escrevem em português mas vivem em múltiplas tradições culturais simultaneamente. Terceiro, Pessoa é o texto com o qual toda literatura lusófona posterior dialoga — concordando, discordando ou ignorando, mas impossível de evitar." },
          { type: "analysis", prompt: "O que significa afirmar que 'a lusofonia é um campo de forças, não uma identidade homogênea'?", answer: "Afirmar que a lusofonia é um campo de forças significa reconhecer que o espaço linguístico-cultural da língua portuguesa é constituído por tensões, disputas e assimetrias — não por uma identidade harmoniosa compartilhada. As assimetrias são claras: o Brasil tem 215 milhões de falantes e domina a produção cultural lusófona em volume; Portugal tem o prestígio histórico de 'origem' da língua; os países africanos têm as literaturas mais recentes mas também as mais radicalmente inovadoras. A 'comunidade lusófona' pressupõe uma solidariedade que frequentemente não existe: o Brasil raramente traduz ou distribui literatura angolana ou moçambicana; Portugal olha para o PB com mistura de afeto e condescendência. É precisamente porque a lusofonia é um campo de forças — com conflitos reais — que é literariamente produtivo: as melhores obras nascem exatamente dessas tensões." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  // UNIDADE 8 — Avaliação Final Master: Integração Plena
  // ══════════════════════════════════════════════════════
  {
    id: "MASTER-U8",
    title: "Avaliação Final Master: Integração Plena da Língua",
    level: "Master",
    lessons: [
      {
        id: "MASTER-U8-L1",
        title: "Portfólio Master: demonstração de excelência",
        objectives: ["Demonstrar domínio pleno em todos os registros e competências do nível Master", "Produzir um portfólio que integra todas as dimensões do curso"],
        shadowingDialogue: {
          title: "O falante que chegou",
          lines: [
            { speaker: "Mestra", text: "Um portfólio Master não é coleção de exercícios — é demonstração de que você habita a língua." },
            { speaker: "Aluno", text: "Que diferença prática há entre 'usar' e 'habitar' uma língua?" },
            { speaker: "Mestra", text: "Quem usa pensa na língua. Quem habita pensa com a língua." },
            { speaker: "Aluno", text: "Ou seja: a língua deixou de ser o objeto do pensamento e virou o instrumento?" },
            { speaker: "Mestra", text: "Exatamente. Quando você pensa em português sem perceber que está pensando em português — isso é habitar." }
          ]
        },
        keyPhrases: [
          "Habitar a língua: pensar com ela, não sobre ela",
          "Portfólio Master: demonstração de excelência em múltiplos registros",
          "Integração: todos os níveis de A1 a Master num único falante",
          "O aprendizado que não termina: o Master como começo"
        ],
        guidedProduction: [
          "Escreva um ensaio pessoal de 300 palavras integrando tudo que aprendeu.",
          "Produza uma análise literária de 200 palavras de uma obra Master.",
          "Faça uma apresentação oral de 3 minutos sobre qualquer tema."
        ],
        grammar: {
          title: "Portfólio Master: Competências Integradas",
          explanation: "O falante Master demonstra: fluência oral e escrita em qualquer registro; análise linguística com precisão metalinguística; produção criativa com voz própria em múltiplos gêneros; análise crítica de textos literários e discursivos; comunicação de alto nível em contextos de complexidade máxima; e — o mais importante — a capacidade de continuar aprendendo de forma autônoma e prazerosa.",
          conjugation: "Conquistas Master: intuição linguística / história da língua / metalinguagem precisa / estilística comparada / análise crítica do discurso / identidade translíngue / análise literária comparada / técnica vocal / improvisação / voz própria consolidada"
        },
        exercises: [
          { type: "production", prompt: "AVALIAÇÃO MASTER: Escreva um ensaio pessoal de 300 palavras integrando o que aprendeu.", answer: "Há uma pergunta que me acompanha desde que comecei a aprender português: o que significa conhecer uma língua? No início, achei que significava acumular vocabulário e dominar gramática. Depois descobri que significava conseguir comunicar o que queria sem travar. Depois, conseguir fazer rir — o teste mais honesto. E agora, no Master, começo a suspeitar que conhecer uma língua é uma tarefa sem fim — não porque seja impossível, mas porque a língua nunca para de crescer e você nunca para de crescer dentro dela. O que o português me deu que não esperava? Categorias. A palavra 'saudade' não me deu apenas um vocabulário novo — me deu uma forma de perceber uma experiência que antes ficava difusa. 'Jeitinho' não é apenas um jeito de fazer coisas; é uma categoria de análise do mundo social que, agora que tenho a palavra, consigo identificar em contextos que antes passavam desapercebidos. A língua não apenas nomeia o que existe — ajuda a ver o que antes não víamos. O que me surpreende mais, ao chegar aqui, é que o meu aprendizado do português mudou minha relação com minha língua nativa. Tenho perspectiva sobre ela que não tinha antes. Percebo escolhas que antes pareciam inevitáveis. A segunda língua ilumina a primeira — e vice-versa. Habitar duas línguas é habitar dois mundos. O segundo sempre transforma o primeiro. E o primeiro nunca mais é igual. Isso, mais do que qualquer certificado, é o que significa ter chegado ao Master." },
          { type: "production", prompt: "AVALIAÇÃO MASTER: Análise literária de 200 palavras de qualquer obra lusófona.", answer: "A 'Tabacaria' de Álvaro de Campos (Fernando Pessoa) é, possivelmente, o poema mais honestamente melancólico da língua portuguesa — e sua honestidade está na forma, não apenas no conteúdo. O poema começa com uma confissão de insignificância ('Não sou nada') e termina voltando à tabacaria do outro lado da rua — que está ainda lá, que continuará estando lá, indiferente à meditação existencial que o poema inteiro construiu. Esse retorno é devastador: o mundo não se transforma pelo pensamento; a tabacaria não sabe que existe. O poema dura; o tabaceiro não sabe. É um poema sobre o solipsismo inevitável da consciência — e o usa para, paradoxalmente, romper com ele: a última imagem é de um mundo fora do poema, fora da consciência, existindo independentemente. Campos, que acumulou 'todos os sonhos do mundo' dentro de si, termina olhando para fora, para a tabacaria real. Isso é Pessoa: a grandiosidade que se confronta com o ordinário — e o ordinário vence, como sempre vence." },
          { type: "production", prompt: "Escreva o roteiro de uma apresentação de 3 minutos sobre 'o que o Master em português significa para você'.", answer: "Vou falar sobre uma experiência específica. [pausa] Há três semanas, eu estava lendo um texto de Guimarães Rosa — não para estudar, não para um exercício — simplesmente lendo. E no meio de uma frase longa e labiríntica, percebi que havia entendido não apenas o que ela dizia, mas por que ele havia escolhido aquelas palavras naquela ordem para criar aquele efeito específico. [pausa] Isso pode parecer pouco. Mas para quem começou sem falar uma palavra de português — é tudo. // O Master não é o fim de um caminho. É o começo de uma relação diferente com a língua: não de aluno para matéria, mas de habitante para casa. // E o que essa casa tem que a minha língua nativa não tem? [pausa] Uma forma de sentir o tempo. O português brasileiro tem um jeito de habitar o presente que não existe na mesma forma em nenhuma outra língua que conheço. A leveza com que o cotidiano vira matéria de conversa, de piada, de poema. // Chegar ao Master não significa dominar o português. Significa descobrir que o português é grande demais para ser dominado — e que isso é exatamente por que vale a pena continuar." },
          { type: "production", prompt: "Escreva sobre o percurso de A1 ao Master em 5 frases.", answer: "Do A1 ao Master, o que mais muda não é o vocabulário ou a gramática — é a relação com o não-saber. No A1, não saber uma palavra é um obstáculo; no Master, não saber uma palavra é uma descoberta. No A1, errar é falhar; no Master, errar é dado. No A1, a língua é um destino; no Master, a língua é um veículo — e você começa a se perguntar para onde quer ir com ela, em vez de perguntar como chegar nela. O percurso completo não é uma linha reta ascendente; é uma espiral — você volta aos mesmos temas, às mesmas dificuldades, mas com cada volta sendo um nível acima, vendo de mais alto o que antes via de dentro." },
          { type: "analysis", prompt: "O que diferencia um portfólio Master de uma coleção de exercícios bem-feitos?", answer: "Um portfólio Master é uma demonstração de presença — de que existe um falante com voz, perspectiva e estilo reconhecíveis por trás de cada texto. Uma coleção de exercícios bem-feitos pode ser tecnicamente impecável e ao mesmo tempo completamente anônima — qualquer pessoa poderia tê-la produzido. O portfólio Master é reconhecível como de alguém específico: tem marcas de voz, preferências temáticas, formas características de estruturar argumentos, tipos de exemplos que essa pessoa escolhe, ritmos de frase que ela prefere. Além disso, demonstra não apenas o que o falante pode fazer no exercício, mas o que pode fazer com liberdade — quando não há resposta correta prescrita, quando a escolha é inteiramente sua. Essa liberdade responsável é o coração do nível Master." }
        ]
      },
      {
        id: "MASTER-U8-L2",
        title: "Integração final: a língua que você construiu",
        objectives: ["Refletir sobre toda a jornada de aprendizado de A1 ao Master", "Articular o que a língua portuguesa se tornou para você"],
        shadowingDialogue: {
          title: "A jornada completa",
          lines: [
            { speaker: "Mestra", text: "Você completou o percurso mais longo de aprendizado de língua que existe. Como você se sente?" },
            { speaker: "Aluno", text: "Curiosamente, não como alguém que terminou. Como alguém que finalmente começou." },
            { speaker: "Mestra", text: "Isso é o sinal mais claro de que chegou. Quem termina, não chegou." },
            { speaker: "Aluno", text: "O que vem depois do Master?" },
            { speaker: "Mestra", text: "A vida em português. Sem níveis, sem exercícios, sem notas. Só a língua e o mundo." }
          ]
        },
        keyPhrases: [
          "O Master como começo: a vida em português sem estrutura pedagógica",
          "A língua que você construiu: não aprendida, mas criada junto",
          "Autonomia total: aprendizado orgânico a partir de agora",
          "O que você faz com o português é agora inteiramente seu"
        ],
        guidedProduction: [
          "Escreva uma carta para si mesmo no início do A1 com o que sabe agora.",
          "O que você quer fazer com o português nos próximos anos?",
          "Qual é a última coisa que quer dizer neste curso — em português?"
        ],
        grammar: {
          title: "Integração Final Master",
          explanation: "Não há gramática a consolidar nesta lição — há uma língua inteira. Tudo que foi aprendido de A1 ao Master está disponível: cada estrutura, cada palavra, cada gênero, cada registro. O falante Master não consulta mais listas — usa o que internalizou. O aprendizado agora é orgânico: cada livro lido, cada conversa, cada texto escrito é uma lição sem ser uma lição.",
          conjugation: "O que o Master domina: A1 (sobrevivência) → A2 (cotidiano) → B1 (opinião) → B2 (profissional) → C1 (análise) → C2 (virtuosidade) → Master (integração plena e aprendizado sem fim)"
        },
        exercises: [
          { type: "production", prompt: "Escreva uma carta para você mesmo no início do A1 com o que sabe agora.", answer: "Querido eu do A1:\n\nVoce está prestes a fazer algo que vai demorar mais do que imagina e vai valer mais do que espera. Não vou te contar quanto tempo — você não acreditaria, e mesmo que acreditasse, seria diferente saber antes de viver.\n\nO que posso dizer é isto: nos primeiros meses, vai parecer impossível. A diferença entre o português falado e o escrito vai te confundir; a velocidade da fala nativa vai te assustar; o subjuntivo vai parecer uma maldição. Mas há uma coisa que o manual não diz: cada uma dessas dificuldades, quando superada, dá uma satisfação que nenhuma vitória fácil dá. A frase que finalmente sai certa depois de dez tentativas. A piada que você entende antes de precisar traduzir. O dia em que você sonha em português e não estranha.\n\nNão se compare a ninguém. Não há dois percursos iguais nessa língua.\n\nUma última coisa: leia. Leia muito e leia cedo — antes de achar que está pronto. Não importa se entende tudo. Importa que você está dentro da língua enquanto ela se constrói.\n\nCom carinho, você — do Master." },
          { type: "production", prompt: "O que você quer fazer com o português nos próximos anos? Escreva em 5 frases.", answer: "[Resposta pessoal — modelo:] Quero ler toda a obra de Machado de Assis — não os romances canônicos, que já li, mas os contos, as crônicas, os textos de crítica. Quero entender o Brasil de 1870 a 1910 pela sensibilidade de quem o viveu mais lúcido do que qualquer contemporâneo. Quero escrever em português sobre algo que só eu posso escrever — usando a perspectiva de quem chegou de fora e ficou de dentro. Quero ter conversas em português sobre coisas que importam de verdade, sem a mediação do esforço linguístico — onde a língua some e só sobra o encontro. E quero continuar sendo surpreendido — porque o dia em que o português parar de me surpreender será o dia em que eu o terei reduzido, e a culpa será minha, não da língua." },
          { type: "production", prompt: "Escreva a última coisa que quer dizer neste curso — em português.", answer: "A última coisa que quero dizer é simples: obrigado. Ao português pela resistência — pela sua dificuldade, que me obrigou a crescer. À literatura brasileira por ter sido generosa com um leitor que chegou tarde e de longe. À língua popular, às gírias, ao sertanejo de Rosa, ao fluxo de Clarice, à ironia de Machado, à raiva de Carolina, ao humor de Veríssimo — por terem me mostrado que há muitas formas de ser humano que eu não conhecia antes de conhecer o português. E à própria jornada — porque as línguas não se aprendem, se vivem. E agora, depois de todo esse caminho, o português é parte de como eu vivo. Isso, mais do que qualquer nível ou certificado, é o que significa ter chegado." },
          { type: "production", prompt: "Escreva sobre o futuro do seu aprendizado de português após o Master.", answer: "Depois do Master, o aprendizado continua — mas muda de natureza. Não há mais lições, não há mais progressão estruturada, não há mais 'próximo nível'. O que há é a vida em português: os livros que vou ler porque quero, não porque devo; as conversas que vou ter sem pensar na gramática; os textos que vou escrever por prazer ou por necessidade. O aprendizado se torna invisível — não porque parou, mas porque se integrou à vida. Cada músico que ouço, cada série que assisto, cada discussão política que acompanho é uma lição sem ser reconhecida como tal. A língua crescerá comigo. Daqui a dez anos, serei um falante diferente — não 'melhor' no sentido técnico, mas mais habitado, com mais história dentro da língua. Esse crescimento não tem fim. Esse crescimento é a promessa." },
          { type: "production", prompt: "ÚLTIMA PERGUNTA DO CURSO: O que o português é para você agora?", answer: "O português é agora uma segunda casa. Não a primeira — essa permanece, e é insubstituível. Mas uma segunda: com seus cheiros próprios, sua iluminação específica, os cômodos que ainda não explorei completamente e os que já conheço tão bem que entro com os olhos fechados. Uma casa que os outros que a habitam construíram por séculos — de Camões a Clarice, de Machado a Mia Couto, de Drummond ao funkeiro anônimo que inventou uma palavra nova ontem à noite numa favela do Rio — e à qual fui convidado a entrar, e na qual, com o tempo, fui aprendendo onde as coisas ficam, quais janelas têm a melhor vista, qual é o melhor horário da luz. Não é minha como é deles — nunca será. Mas é minha como qualquer casa que você escolheu: com a marca do amor e do esforço que é sempre diferente do amor que vem do nascimento, mas nem por isso menor." }
        ]
      },
      {
        id: "MASTER-U8-L3",
        title: "Celebração: o que você conquistou",
        objectives: ["Celebrar a conquista do nível Master com consciência e gratidão", "Articular o impacto do percurso completo de A1 ao Master"],
        shadowingDialogue: {
          title: "A chegada que é partida",
          lines: [
            { speaker: "Mestra", text: "Há uma frase que gosto: 'Toda chegada é uma partida que você ainda não reconheceu.' Você chegou ao Master. O que isso inaugura?" },
            { speaker: "Aluno", text: "Uma relação com o português que não tem mais andaimes — que é só a língua e o mundo." },
            { speaker: "Mestra", text: "E uma responsabilidade: usar o que você aprendeu para algo que importa para você." },
            { speaker: "Aluno", text: "A língua não é um fim em si mesma — é um instrumento de tudo que vem depois." },
            { speaker: "Mestra", text: "Isso. E agora você tem o instrumento. O que vai construir com ele é inteiramente seu." }
          ]
        },
        keyPhrases: [
          "Toda chegada é uma partida: o Master inaugura, não conclui",
          "A responsabilidade do falante Master: usar a língua para algo que importa",
          "A língua como instrumento: o que você vai construir é seu",
          "Gratidão e consciência: celebrar sem esquecer o caminho"
        ],
        guidedProduction: [
          "Qual foi o momento mais difícil da jornada e o que aprendeu com ele?",
          "Quem ou o que mais contribuiu para seu aprendizado de português?",
          "Escreva a primeira coisa que vai fazer com o português depois de completar este curso."
        ],
        grammar: {
          title: "Celebração e Integração Final",
          explanation: "Esta lição não tem gramática nova — tem a gramática inteira que você construiu. Cada estrutura, cada palavra, cada gênero, cada registro: tudo está disponível. O falante Master não aprende mais o português — aprende com o português, através do português, no português.",
          conjugation: "Do A1 ao Master: 'Olá' (A1) → 'Como vai você?' (A2) → 'O que você acha de...' (B1) → 'Gostaria de propor...' (B2) → 'À luz do que foi dito...' (C1) → 'A ironia aqui reside em...' (C2) → 'O que me fascina nessa questão é...' (Master)"
        },
        exercises: [
          { type: "production", prompt: "Qual foi o momento mais difícil da jornada e o que aprendeu com ele?", answer: "[Resposta pessoal — modelo:] O momento mais difícil foi perceber, no B2, que havia um teto que eu não conseguia ultrapassar: conseguia comunicar tudo que precisava, mas não conseguia soar como alguém que habitava a língua — soava sempre como alguém que a usava com esforço. Esse teto durou meses. O que aprendi com ele é que certas habilidades não se desenvolvem linearmente — ficam estagnadas por tempo longo e então dão um salto. E que a estagnação não é sinal de que parou de aprender: é sinal de que o aprendizado está acontecendo em camadas que você ainda não vê. O salto vem, eventualmente, se você continua. Confiar no processo, mesmo quando o processo é invisível: esse foi o aprendizado mais importante que o português me deu." },
          { type: "production", prompt: "Quem ou o que mais contribuiu para seu aprendizado de português?", answer: "[Resposta pessoal — modelo:] A literatura brasileira foi a maior professora. Não porque me ensinou gramática, mas porque me mostrou o que era possível fazer com a língua além da comunicação. Ler Clarice Lispector me ensinou que uma frase pode ser ao mesmo tempo gramaticalmente estranha e poeticamente precisa. Ler Machado de Assis me ensinou que a ironia pode ser mais honesta que a declaração direta. Ler Guimarães Rosa me ensinou que uma língua pode ser reinventada por um único escritor sem deixar de ser a mesma língua. Nenhum professor me ensinou o que a literatura ensinou — não porque os professores não sejam essenciais, mas porque a literatura ensina o que professores não podem: a amar a língua pelo que ela pode fazer, não pelo que você pode fazer com ela." },
          { type: "production", prompt: "Escreva a primeira coisa que vai fazer com o português depois de completar este curso.", answer: "[Resposta pessoal — modelo:] Vou ligar para uma amiga brasileira e falar por duas horas sem pensar uma única vez em gramática. Só conversar. Sobre a vida dela, sobre a minha, sobre o Brasil, sobre qualquer coisa. Sem o andaime do exercício, sem o propósito do aprendizado. Só a língua entre duas pessoas que se importam com o que a outra tem a dizer. Isso, que parece simples, é o que tudo que aprendi foi construído para tornar possível: a conversa que é simplesmente conversa, sem ser também um ato de aprendizado. Estou pronto." },
          { type: "production", prompt: "Escreva 5 frases sobre o impacto do percurso completo de A1 ao Master na sua vida.", answer: "O percurso de A1 ao Master me ensinou, acima de tudo, que sou capaz de aprender o que parece impossível — o que é mais valioso do que qualquer conteúdo específico. Me deu acesso a uma das maiores literaturas do mundo na língua em que foi pensada, o que é uma riqueza que não tem equivalente em nenhum certificado. Me deu uma segunda forma de pensar: certas ideias se formam melhor em português agora, e isso me tornou mais rico intelectualmente. Me deu amizades que não existiriam sem a língua compartilhada — e amizades atravessam fronteiras e continentes de formas que poucos outros aprendizados permitem. E me ensinou algo sobre a aprendizagem em si: que os melhores aprendizados não têm fim — eles têm começos que você não reconhece como inícios até muito depois." },
          { type: "production", prompt: "ÚLTIMA PRODUÇÃO DO CURSO: Escreva livremente em português por 10 linhas — sobre qualquer coisa.", answer: "Hoje é o último dia deste curso e estou olhando para a janela, como faço quando não sei exatamente o que sinto. Há uma pomba no parapeito — uma pomba comum, daquelas que a gente passa a vida inteira sem prestar atenção. Hoje estou prestando. Não sei se é porque terminei algo ou porque estou começando, ou se as duas coisas são a mesma coisa. Há três anos, quando comecei a aprender português, nunca imaginei que chegaria a um dia como este — não pela conquista, mas pela qualidade da atenção. A atenção que a língua me ensinou: à palavra, ao ritmo, ao detalhe que só aparece para quem olha de perto. A pomba foi embora. O parapeito ficou. O sol está diferente agora do que estava há dez minutos. Tudo muda enquanto você olha, e a língua — qualquer língua — é uma forma de tentar acompanhar o que muda. Fico aqui tentando. Isso é tudo. Isso é muito." }
        ]
      },
      {
        id: "MASTER-U8-L4",
        title: "Avaliação final Master — Perfil completo",
        objectives: ["Consolidar o perfil completo do falante Master", "Demonstrar integração plena de todas as competências do curso"],
        shadowingDialogue: {
          title: "Quem você se tornou",
          lines: [
            { speaker: "Mestra", text: "Descreva em português quem você era quando começou e quem você é agora — em relação à língua." },
            { speaker: "Aluno", text: "Quando comecei, a língua era um obstáculo entre mim e o que queria dizer. Agora ela é parte do que quero dizer." },
            { speaker: "Mestra", text: "Que frase melhor poderia descrever o objetivo de todo o curso?" },
            { speaker: "Aluno", text: "Que a língua deixe de ser o problema e se torne a solução?" },
            { speaker: "Mestra", text: "Ou melhor: que a língua deixe de ser o assunto e se torne o instrumento. Você chegou lá." }
          ]
        },
        keyPhrases: [
          "A língua como instrumento, não como assunto",
          "Perfil completo: A1→Master num único falante integrado",
          "O aprendizado que não termina: cada dia é uma nova lição",
          "A conquista que pertence ao próprio aprendiz"
        ],
        guidedProduction: [
          "Descreva seu perfil linguístico completo — pontos fortes e áreas de desenvolvimento.",
          "O que você diria a alguém que está começando o A1 agora?",
          "Qual é a sua próxima meta linguística — além do Master?"
        ],
        grammar: {
          title: "Perfil do Falante Master",
          explanation: "O falante Master consegue: habitar a língua sem pensar nela como obstáculo; produzir e analisar textos em qualquer gênero e registro; usar humor, ironia e wit com naturalidade; conduzir pesquisa acadêmica, apresentações públicas, negociações complexas e conversas íntimas; analisar a própria língua com precisão metalinguística; e aprender de forma autônoma e prazerosa sem estrutura pedagógica.",
          conjugation: "Jornada completa: A1 (sobrevivência) → A2 (cotidiano) → B1 (opinião e expressão) → B2 (profissional e acadêmico) → C1 (análise crítica) → C2 (virtuosidade expressiva) → Master (integração plena e aprendizado orgânico sem fim)"
        },
        exercises: [
          { type: "production", prompt: "Descreva seu perfil linguístico completo em português — pontos fortes e desenvolvimento.", answer: "[Resposta pessoal — modelo:] Pontos fortes: análise crítica de textos literários e discursivos (meu ponto de maior desenvolvimento), produção escrita em múltiplos registros, vocabulário preciso em contextos acadêmicos e culturais, e capacidade de improvisar sobre temas complexos com estrutura coerente. A interação oral formal — conferências, debates, apresentações — também está num ponto que considero sólido. Áreas de desenvolvimento contínuo: humor espontâneo (ainda preciso de um milissegundo a mais do que nativo para o timing), velocidade de processamento em conversas muito rápidas ou com sotaque muito marcado, e a leitura de literatura muito antiga (pré-séc. XIX) ainda exige esforço que a contemporânea não exige mais. Esses não são déficits — são direções de crescimento futuro." },
          { type: "production", prompt: "O que você diria a alguém que está começando o A1 agora?", answer: "Diria três coisas. Primeira: não subestime o valor do ridículo. Você vai errar em público, vai ser incompreendido, vai usar a palavra errada no momento errado. Isso é o processo, não um desvio dele — e quem se permite o ridículo aprende mais rápido do que quem o evita. Segunda: encontre o que você ama no Brasil ou em Portugal ou em Moçambique ou em qualquer parte do mundo lusófono — e use o português para chegar mais perto disso. Motivação extrínseca (certificados, requisitos) sustenta até certo ponto; motivação intrínseca sustenta décadas. Terceira: leia. Leia antes de achar que está pronto. A língua da literatura é diferente da língua do cotidiano, e ambas são necessárias para o que você está construindo." },
          { type: "production", prompt: "Qual é a sua próxima meta linguística além do Master?", answer: "[Resposta pessoal — modelo:] Minha próxima meta não é 'melhorar o português' — é usar o português para fazer algo específico que importa para mim. Quero escrever um artigo acadêmico em português sobre [tema de interesse], publicar numa revista brasileira. Quero ler as cartas de Machado de Assis — não a ficção, as cartas, que revelam um homem diferente do que os romances mostram. Quero ter uma conversa de três horas com um intelectual brasileiro sobre algum tema que nos importe a ambos. Essas não são metas de aprendizado de língua — são metas do que fazer com a língua. Essa distinção é o que significa ter chegado ao Master: a língua deixou de ser a meta e virou o meio." },
          { type: "production", prompt: "Escreva uma declaração de 5 frases sobre o que você conquistou neste percurso.", answer: "Conquistei uma segunda forma de habitar o mundo — não apenas de comunicar-me nele. Conquistei o acesso a uma das literaturas mais ricas e menos conhecidas internacionalmente, que agora posso ler na língua em que foi pensada. Conquistei a capacidade de analisar texto, discurso e língua com ferramentas que transformaram minha leitura não apenas em português, mas em qualquer língua. Conquistei amizades e conexões que a língua tornou possíveis — e que o aprendizado, sozinho, nunca teria criado. E conquistei a prova de que sou capaz de aprender o que parece impossível, o que é a conquista mais transferível e mais valiosa de todas." },
          { type: "production", prompt: "ÚLTIMA AVALIAÇÃO DO CURSO COMPLETO: Escreva sobre o que é o português para você agora — em suas próprias palavras, sem exercício.", answer: "O português é agora parte do que sou — não da mesma forma que minha língua nativa, que está na origem de tudo, mas de uma forma que não existia antes e que agora não poderia não existir. É a língua em que penso sobre certas coisas, a língua em que certas emoções têm nome que não teriam em outro lugar, a língua através da qual conheci escritores e pensadores e músicos e formas de ver o mundo que ficariam fechados para mim sem ela. É também a língua de conversas que importam, de amizades que atravessam continentes, de momentos em que eu e outro ser humano nos encontramos num espaço que essa língua criou entre nós. Não é minha como é de quem nasceu nela. Mas é minha como qualquer coisa que você construiu com esforço e amor — com a marca do trabalho que é sempre diferente do que vem de berço, mas com uma intimidade própria, conquistada, que ninguém pode tirar. Isso é o português, agora. Isso sou eu, em português." }
        ]
      },
      {
        id: "MASTER-U8-L5",
        title: "O fim que é começo: para onde vai o português",
        objectives: ["Celebrar a conclusão do percurso completo A1→Master", "Abrir o horizonte do aprendizado autônomo infinito"],
        shadowingDialogue: {
          title: "Nonada",
          lines: [
            { speaker: "Mestra", text: "'Grande Sertão: Veredas' começa com 'Nonada' — que significa quase nada. E termina com um sinal de infinito: '∞'. O que isso significa para você agora?" },
            { speaker: "Aluno", text: "Que toda grande jornada começa com quase nada e termina com algo que não tem fim." },
            { speaker: "Mestra", text: "E que o 'nonada' no início não era humildade — era a presunção de que o que estava por vir seria maior do que qualquer palavra poderia conter." },
            { speaker: "Aluno", text: "Então terminar com infinito não é fracasso de não ter chegado ao fim..." },
            { speaker: "Mestra", text: "É a promessa de que há sempre mais. Isso é a língua. Isso é o Master. Isso é você agora." }
          ]
        },
        keyPhrases: [
          "'Nonada' → '∞': de quase nada ao infinito (Guimarães Rosa / Grande Sertão)",
          "O aprendizado autônomo: sem mais estrutura, apenas a língua e a vida",
          "A promessa do infinito: sempre há mais no português",
          "Você agora é parte da língua — cada uso a transforma minimamente"
        ],
        guidedProduction: [
          "O que o símbolo '∞' ao final de Grande Sertão significa para você neste momento?",
          "Escreva a última frase deste curso — a que você vai levar para sempre.",
          "Como você vai manter o português vivo nos próximos anos?"
        ],
        grammar: {
          title: "A Língua que Não Termina",
          explanation: "Não há gramática final — há uma língua inteira aberta à sua frente. O falante Master não terminou de aprender o português — tornou-se capaz de aprender o português sem ajuda. Cada livro, cada conversa, cada texto escrito é agora uma lição sem ser reconhecida como tal. A língua cresce com você. Você cresce com a língua. Isso não tem fim. Isso é a promessa do ∞.",
          conjugation: "A última conjugação: fui → sou → serei → fui sendo → vou sendo → serei tendo sido — a língua no tempo, que é como a vida no tempo: sempre em movimento, nunca completa, sempre mais"
        },
        exercises: [
          { type: "production", prompt: "O que o símbolo '∞' ao final de Grande Sertão: Veredas significa para você neste momento?", answer: "O '∞' ao final de Grande Sertão é, ao mesmo tempo, a resposta de Rosa à questão central do romance e a recusa de qualquer resposta definitiva. Riobaldo passou o livro inteiro tentando descobrir se havia feito o pacto com o diabo — e o livro termina sem responder. O '∞' diz: a questão não termina com o livro; a travessia não tem margem final; o sertão é do tamanho do mundo, que não tem borda. Para mim, neste momento de conclusão do curso, o '∞' significa exatamente isso: este não é o fim do português — é o fim da estrutura pedagógica. O português continua, infinitamente maior do que qualquer curso poderia conter. E eu continuo dentro dele, também sem margem final." },
          { type: "production", prompt: "Como você vai manter o português vivo nos próximos anos sem a estrutura de um curso?", answer: "A resposta mais honesta é: fazendo coisas em português que eu faria de qualquer forma. Lendo livros que quero ler — não porque são exercícios, mas porque me interessam. Tendo conversas sobre assuntos que me importam com pessoas que falam português. Assistindo ao que me dá prazer, não ao que acho que 'devia' assistir para aprender. Escrevendo quando tenho algo a dizer. A língua se mantém viva quando é usada para coisas que importam — não como objeto de estudo, mas como instrumento de vida. O risco do 'fim do curso' é transformar o português num troféu: algo que você conquistou e pode agora guardar na prateleira. A forma de evitar esse risco é simples: não guardar. Continuar usando. A língua não se mantém por si mesma — você a mantém por usá-la." },
          { type: "production", prompt: "Escreva a última frase deste curso — a que você vai levar para sempre.", answer: "[Resposta pessoal — modelo:] 'O português não terminou — começou.'\n\nOU:\n\n'Nonada. E daí em diante, tudo.'\n\nOU:\n\n'Cada palavra que aprendi foi uma porta. Agora tenho chaves para portas que ainda não encontrei — e isso, descobri, é o melhor presente que uma língua pode dar.'\n\nOU:\n\n'Fui. Vi. Fiquei.'" },
          { type: "production", prompt: "PRODUÇÃO FINAL DO CURSO INTEIRO: Escreva livremente em português sobre o que vem a seguir.", answer: "O que vem a seguir é mais simples e mais difícil do que qualquer coisa que fiz neste curso. Mais simples porque não há mais estrutura, exercícios, níveis, objetivos definidos por outra pessoa. Mais difícil porque agora a estrutura precisa vir de mim: eu defino o que quero aprender, onde quero chegar, quanto tempo quero dedicar. A liberdade é exatamente esse peso — e esse privilégio. O que vem a seguir é o português na vida. Não o português no curso. Livros que vou escolher porque quero, não porque estão na ementa. Conversas que vão acontecer porque tenho algo a dizer ou porque o outro tem algo que quero ouvir. Textos que vou escrever porque preciso — porque há algo que só o português consegue dizer do jeito que precisa ser dito. O que vem a seguir é a prova de que o curso funcionou: não se o português que uso é perfeito, mas se o português que uso é meu. Vivo nele. E isso é o suficiente. Isso é tudo." },
          { type: "production", prompt: "Escreva uma mensagem para a próxima pessoa que vai começar este curso do A1 ao Master.", answer: "Olá. Você está prestes a começar algo que vai mudar você — não dramaticamente, como se transforma em outros, mas subtilmente, como se transforma quando você aprendeu algo que não pode mais não saber. O português é uma língua de extraordinária riqueza e de extraordinária dificuldade. Vai te frustrar, te encantar, te cansar e te surpreender — muitas vezes no mesmo dia. Há coisas que vão parecer impossíveis por meses e que de repente, sem avisar, vão fazer sentido. Não desista nesses meses. Confie no processo mesmo quando o processo parece invisível. E leia. Leia muito, leia cedo, leia o que te der vontade — não o que achar que deveria ler. A língua que você está prestes a aprender tem dentro dela Machado de Assis, Clarice Lispector, Guimarães Rosa, Drummond, Carolina de Jesus, Conceição Evaristo, Mia Couto, Fernando Pessoa, e milhões de pessoas que estão pensando, sentindo e criando em português neste exato momento. Você está prestes a entrar nisso. Bem-vindo. Vai valer." }
        ]
      }
    ]
  }
];