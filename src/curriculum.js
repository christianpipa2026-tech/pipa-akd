export const REFERENCE = {
  pronouns: {
    sections: [
      {
        title: "Pronomes Pessoais — Sujeito",
        tip: "No Brasil NÃO se usa 'tu' na maioria das regiões. 'Você' é o padrão oral. 'A gente' é muito frequente na fala e conjuga sempre como ele/ela (3ª pessoa singular).",
        headers: ["Pronome", "Español", "Nota"],
        rows: [
          ["eu", "yo", "sempre minúscula"],
          ["você", "tú / usted", "padrão no Brasil"],
          ["ele / ela", "él / ella", ""],
          ["a gente", "nosotros (informal)", "conjuga como ele/ela"],
          ["nós", "nosotros (formal)", "mais usado na escrita"],
          ["vocês", "ustedes", ""],
          ["eles / elas", "ellos / ellas", ""],
        ]
      },
      {
        title: "Pronomes Pessoais — Objeto (Oblíquos)",
        tip: "No PB coloquial 'me fala' e 'me dá' são muito mais comuns do que 'fala-me' / 'dá-me'.",
        headers: ["Pronome sujeito", "Oblíquo direto", "Oblíquo indireto", "Reflexivo"],
        rows: [
          ["eu", "me", "me", "me"],
          ["você / ele / ela", "o / a", "lhe", "se"],
          ["a gente / nós", "nos", "nos", "nos"],
          ["vocês / eles / elas", "os / as", "lhes", "se"],
        ]
      },
      {
        title: "Pronomes Possessivos",
        tip: "'Seu/sua' pode gerar ambiguidade. Prefira 'o carro dele' ou 'o carro de você' para maior clareza. 'A gente' usa 'nosso/nossa' na fala: 'a gente perdeu o nosso jogo' ✅",
        headers: ["Pronome sujeito", "Masc. sing.", "Fem. sing.", "Masc. pl.", "Fem. pl."],
        rows: [
          ["eu", "meu", "minha", "meus", "minhas"],
          ["você / ele / ela", "seu", "sua", "seus", "suas"],
          ["a gente / nós", "nosso", "nossa", "nossos", "nossas"],
          ["vocês / eles / elas", "seu", "sua", "seus", "suas"],
        ]
      },
      {
        title: "Pronomes Demonstrativos",
        tip: "No PB coloquial, 'esse/essa' quase substitui 'este/esta' também.",
        headers: ["Pronome", "Español", "Uso"],
        rows: [
          ["este / esta / isto", "este/esta/esto", "perto de quem fala"],
          ["esse / essa / isso", "ese/esa/eso", "perto de quem ouve"],
          ["aquele / aquela / aquilo", "aquel/aquella/aquello", "longe dos dois"],
        ]
      },
      {
        title: "Pronomes Relativos",
        tip: null,
        headers: ["Pronome", "Español", "Exemplo"],
        rows: [
          ["que", "que", "O livro que li / A pessoa que veio"],
          ["quem", "quien", "A pessoa com quem falei"],
          ["onde", "donde", "A cidade onde moro"],
          ["cujo / cuja", "cuyo/cuya", "O autor cujo livro li"],
          ["o qual / a qual", "el cual / la cual", "A causa pela qual lutamos"],
        ]
      },
      {
        title: "Pronomes Indefinidos e Interrogativos",
        tip: null,
        headers: ["Pronome", "Español"],
        rows: [
          ["alguém / ninguém", "alguien / nadie"],
          ["algo / nada", "algo / nada"],
          ["algum/alguma · nenhum/nenhuma", "algún/alguna · ningún/ninguna"],
          ["tudo · todos/todas", "todo · todos/todas"],
          ["outro/outra · mesmo/mesma", "otro/otra · mismo/misma"],
          ["qualquer · vários/várias", "cualquier · varios/varias"],
          ["quem · que · qual/quais", "quién · qué · cuál/cuáles"],
          ["onde · quando · como · por que", "dónde · cuándo · cómo · por qué"],
        ]
      },
    ]
  },

  contractions: {
    sections: [
      {
        title: "DE + Artigo Definido",
        tip: null,
        headers: ["Preposição + Artigo", "Contração", "Español"],
        rows: [
          ["de + o", "do", "del"],
          ["de + a", "da", "de la"],
          ["de + os", "dos", "de los"],
          ["de + as", "das", "de las"],
        ]
      },
      {
        title: "EM + Artigo Definido",
        tip: null,
        headers: ["Preposição + Artigo", "Contração", "Español"],
        rows: [
          ["em + o", "no", "en el"],
          ["em + a", "na", "en la"],
          ["em + os", "nos", "en los"],
          ["em + as", "nas", "en las"],
        ]
      },
      {
        title: "A + Artigo Definido",
        tip: null,
        headers: ["Preposição + Artigo", "Contração", "Español"],
        rows: [
          ["a + o", "ao", "al"],
          ["a + a", "à", "a la"],
          ["a + os", "aos", "a los"],
          ["a + as", "às", "a las"],
        ]
      },
      {
        title: "POR + Artigo Definido",
        tip: null,
        headers: ["Preposição + Artigo", "Contração", "Español"],
        rows: [
          ["por + o", "pelo", "por el"],
          ["por + a", "pela", "por la"],
          ["por + os", "pelos", "por los"],
          ["por + as", "pelas", "por las"],
        ]
      },
      {
        title: "DE + Pronomes Demonstrativos",
        tip: null,
        headers: ["Preposição + Demonstrativo", "Contração"],
        rows: [
          ["de + este / esta / isto", "deste / desta / disto"],
          ["de + esse / essa / isso", "desse / dessa / disso"],
          ["de + aquele / aquela / aquilo", "daquele / daquela / daquilo"],
        ]
      },
      {
        title: "EM + Pronomes Demonstrativos",
        tip: null,
        headers: ["Preposição + Demonstrativo", "Contração"],
        rows: [
          ["em + este / esta / isto", "neste / nesta / nisto"],
          ["em + esse / essa / isso", "nesse / nessa / nisso"],
          ["em + aquele / aquela / aquilo", "naquele / naquela / naquilo"],
        ]
      },
      {
        title: "DE + Pronomes Pessoais",
        tip: null,
        headers: ["Preposição + Pronome", "Contração"],
        rows: [
          ["de + ele", "dele"],
          ["de + ela", "dela"],
          ["de + eles", "deles"],
          ["de + elas", "delas"],
        ]
      },
      {
        title: "EM + Artigo Indefinido",
        tip: null,
        headers: ["Preposição + Artigo", "Contração", "Exemplo"],
        rows: [
          ["em + um", "num", "Num restaurante"],
          ["em + uma", "numa", "Numa cidade"],
        ]
      },
      {
        title: "Contrações Coloquiais — PB Oral",
        tip: "Estas formas são universais na fala brasileira. Não são erros — são o português real.",
        headers: ["Forma padrão", "Forma coloquial"],
        rows: [
          ["você", "cê"],
          ["estou", "tô"],
          ["está", "tá"],
          ["para", "pra"],
          ["para o", "pro"],
          ["para a", "pra"],
          ["não sei", "num sei"],
          ["obrigado", "brigado"],
        ]
      },
    ]
  },

  verbConjugations: {
    sections: [
      {
        title: "⚡ Como usar estas tabelas",
        tip: "ESTRUTURA: eu · você/ele/ela/a gente · nós · vocês/eles/elas. 'A gente' conjuga SEMPRE igual a você/ele/ela (3ª pessoa singular). Exemplo: 'A gente vai' ✅ — 'A gente vamos' ❌",
        headers: null,
        rows: []
      },
      {
        title: "SER — ser (identidade, origem, profissão)",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "sou", "fui", "era"],
          ["você / ele / ela / a gente", "é", "foi", "era"],
          ["nós", "somos", "fomos", "éramos"],
          ["vocês / eles / elas", "são", "foram", "eram"],
        ]
      },
      {
        title: "ESTAR — estar (estado temporário, localização)",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "estou", "estive", "estava"],
          ["você / ele / ela / a gente", "está", "esteve", "estava"],
          ["nós", "estamos", "estivemos", "estávamos"],
          ["vocês / eles / elas", "estão", "estiveram", "estavam"],
        ]
      },
      {
        title: "TER — tener / haber existencial",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "tenho", "tive", "tinha"],
          ["você / ele / ela / a gente", "tem", "teve", "tinha"],
          ["nós", "temos", "tivemos", "tínhamos"],
          ["vocês / eles / elas", "têm", "tiveram", "tinham"],
        ]
      },
      {
        title: "IR — ir",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "vou", "fui", "ia"],
          ["você / ele / ela / a gente", "vai", "foi", "ia"],
          ["nós", "vamos", "fomos", "íamos"],
          ["vocês / eles / elas", "vão", "foram", "iam"],
        ]
      },
      {
        title: "FAZER — hacer",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "faço", "fiz", "fazia"],
          ["você / ele / ela / a gente", "faz", "fez", "fazia"],
          ["nós", "fazemos", "fizemos", "fazíamos"],
          ["vocês / eles / elas", "fazem", "fizeram", "faziam"],
        ]
      },
      {
        title: "PODER — poder",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "posso", "pude", "podia"],
          ["você / ele / ela / a gente", "pode", "pôde", "podia"],
          ["nós", "podemos", "pudemos", "podíamos"],
          ["vocês / eles / elas", "podem", "puderam", "podiam"],
        ]
      },
      {
        title: "QUERER — querer",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "quero", "quis", "queria"],
          ["você / ele / ela / a gente", "quer", "quis", "queria"],
          ["nós", "queremos", "quisemos", "queríamos"],
          ["vocês / eles / elas", "querem", "quiseram", "queriam"],
        ]
      },
      {
        title: "SABER — saber",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "sei", "soube", "sabia"],
          ["você / ele / ela / a gente", "sabe", "soube", "sabia"],
          ["nós", "sabemos", "soubemos", "sabíamos"],
          ["vocês / eles / elas", "sabem", "souberam", "sabiam"],
        ]
      },
      {
        title: "VIR — venir",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "venho", "vim", "vinha"],
          ["você / ele / ela / a gente", "vem", "veio", "vinha"],
          ["nós", "vimos", "viemos", "vínhamos"],
          ["vocês / eles / elas", "vêm", "vieram", "vinham"],
        ]
      },
      {
        title: "VER — ver",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "vejo", "vi", "via"],
          ["você / ele / ela / a gente", "vê", "viu", "via"],
          ["nós", "vemos", "vimos", "víamos"],
          ["vocês / eles / elas", "veem", "viram", "viam"],
        ]
      },
      {
        title: "DAR — dar",
        tip: null,
        headers: ["Pronome", "Presente", "Pret. Perfeito", "Imperfeito"],
        rows: [
          ["eu", "dou", "dei", "dava"],
          ["você / ele / ela / a gente", "dá", "deu", "dava"],
          ["nós", "damos", "demos", "dávamos"],
          ["vocês / eles / elas", "dão", "deram", "davam"],
        ]
      },
      {
        title: "Verbos Regulares -AR — Presente",
        tip: "REGRA: retire o -AR e adicione: -o / -a / -amos / -am. Exemplos: falar, comprar, trabalhar, estudar, morar.",
        headers: ["Pronome", "Terminação", "Exemplo: FALAR"],
        rows: [
          ["eu", "-o", "falo"],
          ["você / ele / ela / a gente", "-a", "fala"],
          ["nós", "-amos", "falamos"],
          ["vocês / eles / elas", "-am", "falam"],
        ]
      },
      {
        title: "Verbos Regulares -ER — Presente",
        tip: "REGRA: retire o -ER e adicione: -o / -e / -emos / -em. Exemplos: comer, beber, escrever, vender.",
        headers: ["Pronome", "Terminação", "Exemplo: COMER"],
        rows: [
          ["eu", "-o", "como"],
          ["você / ele / ela / a gente", "-e", "come"],
          ["nós", "-emos", "comemos"],
          ["vocês / eles / elas", "-em", "comem"],
        ]
      },
      {
        title: "Verbos Regulares -IR — Presente",
        tip: "REGRA: retire o -IR e adicione: -o / -e / -imos / -em. Exemplos: partir, abrir, assistir, dividir.",
        headers: ["Pronome", "Terminação", "Exemplo: PARTIR"],
        rows: [
          ["eu", "-o", "parto"],
          ["você / ele / ela / a gente", "-e", "parte"],
          ["nós", "-imos", "partimos"],
          ["vocês / eles / elas", "-em", "partem"],
        ]
      },
      {
        title: "Pretérito Perfeito — Todos os regulares",
        tip: "REGRA: retire o infinitivo e adicione as terminações abaixo.",
        headers: ["Pronome", "-AR (falar)", "-ER (comer)", "-IR (partir)"],
        rows: [
          ["eu", "falei", "comi", "parti"],
          ["você / ele / ela / a gente", "falou", "comeu", "partiu"],
          ["nós", "falamos", "comemos", "partimos"],
          ["vocês / eles / elas", "falaram", "comeram", "partiram"],
        ]
      },
      {
        title: "Pretérito Imperfeito — Todos os regulares",
        tip: "Usado para ações contínuas ou repetidas no passado.",
        headers: ["Pronome", "-AR (falar)", "-ER/-IR (comer/partir)"],
        rows: [
          ["eu", "falava", "comia / partia"],
          ["você / ele / ela / a gente", "falava", "comia / partia"],
          ["nós", "falávamos", "comíamos / partíamos"],
          ["vocês / eles / elas", "falavam", "comiam / partiam"],
        ]
      },
      {
        title: "Futuro com IR — Conjugação de IR",
        tip: "Estrutura: IR conjugado + infinitivo do verbo. É a forma de futuro mais usada no PB oral.",
        headers: ["Pronome", "IR no presente", "Exemplo"],
        rows: [
          ["eu", "vou", "Eu vou falar / comer / partir"],
          ["você / ele / ela / a gente", "vai", "Você vai falar / A gente vai comer"],
          ["nós", "vamos", "Nós vamos falar / comer / partir"],
          ["vocês / eles / elas", "vão", "Eles vão falar / comer / partir"],
        ]
      },
      {
        title: "Futuro com IR — Verbos Irregulares",
        tip: "Para todos os verbos irregulares, o IR fica conjugado e o verbo principal vai no infinitivo (invariável).",
        headers: ["Pronome", "SER/IR", "TER", "FAZER", "PODER", "VENIR"],
        rows: [
          ["eu", "vou ser/ir", "vou ter", "vou fazer", "vou poder", "vou vir"],
          ["você / ele / ela / a gente", "vai ser/ir", "vai ter", "vai fazer", "vai poder", "vai vir"],
          ["nós", "vamos ser/ir", "vamos ter", "vamos fazer", "vamos poder", "vamos vir"],
          ["vocês / eles / elas", "vão ser/ir", "vão ter", "vão fazer", "vão poder", "vão vir"],
        ]
      },
      {
        title: "Futuro Simples — Verbos Regulares -AR",
        tip: "Usado em textos formais e literatura. Formação: infinitivo completo + terminação.",
        headers: ["Pronome", "FALAR", "COMPRAR", "TRABALHAR"],
        rows: [
          ["eu", "falarei", "comprarei", "trabalharei"],
          ["você / ele / ela / a gente", "falará", "comprará", "trabalhará"],
          ["nós", "falaremos", "compraremos", "trabalharemos"],
          ["vocês / eles / elas", "falarão", "comprarão", "trabalharão"],
        ]
      },
      {
        title: "Futuro Simples — Verbos Regulares -ER e -IR",
        tip: null,
        headers: ["Pronome", "COMER", "BEBER", "PARTIR", "ABRIR"],
        rows: [
          ["eu", "comerei", "beberei", "partirei", "abrirei"],
          ["você / ele / ela / a gente", "comerá", "beberá", "partirá", "abrirá"],
          ["nós", "comeremos", "beberemos", "partiremos", "abriremos"],
          ["vocês / eles / elas", "comerão", "beberão", "partirão", "abrirão"],
        ]
      },
      {
        title: "Futuro Simples — Verbos Irregulares",
        tip: "Estes verbos têm radical irregular no futuro simples.",
        headers: ["Pronome", "TER", "VIR", "FAZER", "DIZER", "TRAZER"],
        rows: [
          ["eu", "terei", "virei", "farei", "direi", "trarei"],
          ["você / ele / ela / a gente", "terá", "virá", "fará", "dirá", "trará"],
          ["nós", "teremos", "viremos", "faremos", "diremos", "traremos"],
          ["vocês / eles / elas", "terão", "virão", "farão", "dirão", "trarão"],
        ]
      },
      {
        title: "Presente com valor de Futuro — PB coloquial",
        tip: "No PB coloquial é muito comum usar o presente do indicativo para expressar o futuro próximo, especialmente com uma referência temporal como 'amanhã', 'semana que vem', 'depois'.",
        headers: ["Pronome", "FALAR (presente = futuro)", "COMER (presente = futuro)"],
        rows: [
          ["eu", "Amanhã eu falo com ele.", "Amanhã eu como lá."],
          ["você / ele / ela / a gente", "Você fala com ela depois.", "A gente come juntos."],
          ["nós", "Nós falamos mais tarde.", "Nós comemos às 8h."],
          ["vocês / eles / elas", "Eles falam amanhã.", "Vocês comem aqui."],
        ]
      },
    ]
  },

  top100Verbs: {
    sections: [
      {
        title: "Nível A1 — Essenciais",
        tip: "Memorize estes 20 verbos primeiro. São os mais usados no dia a dia.",
        headers: ["#", "Verbo", "Español", "Exemplo"],
        rows: [
          ["1", "ser", "ser (permanente)", "Eu sou brasileiro."],
          ["2", "estar", "estar (temporário)", "Estou bem."],
          ["3", "ter", "tener / haber", "Tenho fome. / Tem um problema."],
          ["4", "ir", "ir", "Vou ao mercado."],
          ["5", "fazer", "hacer", "Faço exercício."],
          ["6", "falar", "hablar", "Falo português."],
          ["7", "querer", "querer", "Quero água."],
          ["8", "poder", "poder", "Posso te ajudar?"],
          ["9", "saber", "saber", "Sei nadar."],
          ["10", "ver", "ver", "Vejo tudo."],
          ["11", "vir", "venir", "Venha aqui."],
          ["12", "dar", "dar", "Me dá um café."],
          ["13", "ficar", "quedarse / estar", "Fico em casa."],
          ["14", "precisar", "necesitar", "Preciso de ajuda."],
          ["15", "gostar", "gustar", "Gosto de música."],
          ["16", "morar", "vivir", "Moro em São Paulo."],
          ["17", "trabalhar", "trabajar", "Trabalho muito."],
          ["18", "estudar", "estudiar", "Estudo português."],
          ["19", "comer", "comer", "Comi pizza."],
          ["20", "beber", "beber / tomar", "Bebo café."],
        ]
      },
      {
        title: "Nível A2 — Frequentes",
        tip: null,
        headers: ["#", "Verbo", "Español", "Exemplo"],
        rows: [
          ["21", "chegar", "llegar", "Cheguei tarde."],
          ["22", "sair", "salir", "Saio às 18h."],
          ["23", "entrar", "entrar", "Entre, por favor."],
          ["24", "comprar", "comprar", "Comprei um livro."],
          ["25", "vender", "vender", "Vendem de tudo."],
          ["26", "pagar", "pagar", "Paguei com cartão."],
          ["27", "usar", "usar", "Uso óculos."],
          ["28", "abrir", "abrir", "Abre a janela."],
          ["29", "fechar", "cerrar", "Fecha a porta."],
          ["30", "começar", "comenzar", "Começa às 9h."],
          ["31", "acabar", "acabar / terminar", "Acabou o café."],
          ["32", "ajudar", "ayudar", "Me ajuda?"],
          ["33", "esperar", "esperar", "Espera um pouco."],
          ["34", "perguntar", "preguntar", "Posso perguntar?"],
          ["35", "responder", "responder", "Responda por favor."],
          ["36", "encontrar", "encontrar", "Encontrei meu amigo."],
          ["37", "levar", "llevar", "Leva o guarda-chuva."],
          ["38", "trazer", "traer", "Traz o cardápio."],
          ["39", "deixar", "dejar", "Deixa eu tentar."],
          ["40", "pegar", "agarrar / tomar", "Pega o ônibus 47."],
        ]
      },
      {
        title: "Nível B1 — Importantes",
        tip: null,
        headers: ["#", "Verbo", "Español", "Exemplo"],
        rows: [
          ["41", "pensar", "pensar", "Penso que sim."],
          ["42", "achar", "creer / encontrar", "Acho que está certo."],
          ["43", "acreditar", "creer", "Acredito em você."],
          ["44", "conhecer", "conocer", "Conheço São Paulo."],
          ["45", "aprender", "aprender", "Aprendo rápido."],
          ["46", "ensinar", "enseñar", "Me ensina?"],
          ["47", "escrever", "escribir", "Escreve um e-mail."],
          ["48", "ler", "leer", "Leio muito."],
          ["49", "ouvir", "oír / escuchar", "Ouço música."],
          ["50", "sentir", "sentir", "Sinto saudade."],
          ["51", "perceber", "darse cuenta", "Percebi o erro."],
          ["52", "mostrar", "mostrar", "Me mostra?"],
          ["53", "explicar", "explicar", "Explica melhor."],
          ["54", "acontecer", "pasar / ocurrir", "O que aconteceu?"],
          ["55", "parecer", "parecer", "Parece difícil."],
          ["56", "conseguir", "lograr", "Consegui o emprego."],
          ["57", "tentar", "intentar", "Tenta de novo."],
          ["58", "resolver", "resolver", "Resolve o problema."],
          ["59", "mudar", "cambiar", "Mudei de ideia."],
          ["60", "voltar", "volver", "Volta amanhã."],
        ]
      },
      {
        title: "Nível B2 — Avançados",
        tip: null,
        headers: ["#", "Verbo", "Español", "Exemplo"],
        rows: [
          ["61", "desenvolver", "desarrollar", "Desenvolve habilidades."],
          ["62", "estabelecer", "establecer", "Estabelece regras."],
          ["63", "apresentar", "presentar", "Apresenta o projeto."],
          ["64", "representar", "representar", "Representa o Brasil."],
          ["65", "produzir", "producir", "Produz resultados."],
          ["66", "crescer", "crecer", "A empresa cresceu."],
          ["67", "aumentar", "aumentar", "Aumentou o preço."],
          ["68", "diminuir", "disminuir", "Diminuiu o ruído."],
          ["69", "melhorar", "mejorar", "Melhorou muito."],
          ["70", "piorar", "empeorar", "Piorou a situação."],
          ["71", "assumir", "asumir", "Assume a responsabilidade."],
          ["72", "propor", "proponer", "Proponho uma solução."],
          ["73", "discutir", "discutir", "Discutimos o tema."],
          ["74", "concordar", "estar de acuerdo", "Concordo com você."],
          ["75", "discordar", "no estar de acuerdo", "Discordo completamente."],
          ["76", "incluir", "incluir", "Inclui todos."],
          ["77", "excluir", "excluir", "Não exclui ninguém."],
          ["78", "considerar", "considerar", "Considera todas as opções."],
          ["79", "depender", "depender", "Depende do contexto."],
          ["80", "surgir", "surgir", "Surgiu uma ideia."],
        ]
      },
      {
        title: "Nível C1-Master — Especializados",
        tip: null,
        headers: ["#", "Verbo", "Español", "Exemplo"],
        rows: [
          ["81", "analisar", "analizar", "Analisou os dados."],
          ["82", "avaliar", "evaluar", "Avalia o desempenho."],
          ["83", "criticar", "criticar", "Critica construtivamente."],
          ["84", "argumentar", "argumentar", "Argumenta com clareza."],
          ["85", "justificar", "justificar", "Justifica a decisão."],
          ["86", "comparar", "comparar", "Compara os resultados."],
          ["87", "contrastar", "contrastar", "Contrasta as ideias."],
          ["88", "sintetizar", "sintetizar", "Sintetiza o conteúdo."],
          ["89", "contextualizar", "contextualizar", "Contextualiza o problema."],
          ["90", "problematizar", "problematizar", "Problematiza a questão."],
          ["91", "investigar", "investigar", "Investiga as causas."],
          ["92", "comprovar", "comprobar", "Comprova a hipótese."],
          ["93", "refutar", "refutar", "Refuta o argumento."],
          ["94", "reivindicar", "reivindicar", "Reivindica direitos."],
          ["95", "conscientizar", "concienciar", "Conscientiza a população."],
          ["96", "transformar", "transformar", "Transforma a realidade."],
          ["97", "preservar", "preservar", "Preserva a cultura."],
          ["98", "promover", "promover", "Promove a igualdade."],
          ["99", "garantir", "garantizar", "Garante os direitos."],
          ["100", "conquistar", "conquistar", "Conquistou seu espaço."],
        ]
      },
    ]
  },
};

export const CURRICULUM = {
  A1: {
    units: [
      {
        id: "A1-U1",
        title: "Primeiros contatos",
        description: "Saludos, presentaciones y datos personales básicos",
        lessons: [
          {
            id: "A1-U1-L1",
            title: "Cumprimentos e saudações",
            dialogue: "— Oi! Bom dia! Como vai você?\n— Bom dia! Tudo bem, obrigado! E você?\n— Tudo ótimo! Me chamo Carlos. Prazer!\n— Prazer! Eu sou a Ana. De onde você é?\n— Sou do Brasil, de São Paulo. E você?\n— Sou da Argentina, mas moro aqui no Rio.\n— Que legal! Até logo, Ana!\n— Tchau, Carlos! Até mais!",
            content: "# Cumprimentos e Saudações\n\n## Saudações do dia\nBom dia! = Buenos días (hasta las 12h)\nBoa tarde! = Buenas tardes (12h-18h)\nBoa noite! = Buenas noches (después de 18h)\nOi! / Olá! = Hola (siempre)\nTchau! / Até logo! = Chau / Hasta luego\nAté mais! / Até amanhã! = Hasta luego / Hasta mañana\n\n## Perguntar e responder\nComo vai você? / Tudo bem? = ¿Cómo estás? / ¿Todo bien?\nTudo bem! = Todo bien!\nTudo ótimo! = Todo excelente!\nMais ou menos. = Más o menos.\nBem, obrigado/a! = Bien, gracias!\n\n## Apresentação pessoal\nMeu nome é... / Me chamo... = Me llamo...\nEu sou... = Soy...\nPrazer! = Mucho gusto!\nIgualmente! = Igualmente!\nDe onde você é? = ¿De dónde eres?\nSou do/da... = Soy de...\nMoro em... = Vivo en...\n\n## Pronúncia importante\n- R al inicio suena como H: Rio = HEE-oh\n- ã es nasal: manhã = man-NYAH\n- lh = como ll: trabalho = tra-BA-lyo\n- Obrigado (hombre) / Obrigada (mujer)",
            exercises: [
              { id:"A1-U1-L1-E1", type:"multiple_choice", skill:"vocabulary", question:"Son las 9 de la mañana. ¿Cuál es el saludo correcto?", options:["Boa noite!","Boa tarde!","Bom dia!","Tchau!"], answer:2, explanation:"Bom dia se usa desde que amanece hasta las 12h.", hint:"El saludo de la mañana" },
              { id:"A1-U1-L1-E2", type:"multiple_choice", skill:"vocabulary", question:"Alguien te dice 'Tudo bem?' ¿Qué respondés?", options:["Bom dia!","Tudo bem, obrigado!","Me chamo Ana.","Prazer!"], answer:1, explanation:"Tudo bem, obrigado/a! es la respuesta más natural.", hint:"¿Cómo te sentís?" },
              { id:"A1-U1-L1-E3", type:"fill_blank", skill:"speaking", question:"Completa: '— Prazer! — ___!' (la respuesta natural)", answer:["igualmente","prazer","muito prazer"], hint:"La misma emoción de vuelta", explanation:"Igualmente! o Prazer! son las respuestas naturales." },
              { id:"A1-U1-L1-E4", type:"translation", skill:"writing", question:"Traduce: 'Hola, me llamo Sofía. Soy de México. Mucho gusto!'", answer:["oi","me chamo sofia","sou do méxico","prazer"], hint:"Oi/Olá · Me chamo... · Sou de/do/da... · Prazer!", explanation:"Oi! Me chamo Sofía. Sou do México. Prazer!" },
              { id:"A1-U1-L1-E5", type:"free_writing", skill:"writing", question:"Escribe un diálogo de presentación entre dos personas. Mínimo 6 intercambios.", prompt:"Usa: saudações, nome, origem, onde mora, Prazer/Igualmente", hint:"Sigue el modelo del diálogo de la lección" }
            ]
          },
          {
            id: "A1-U1-L2",
            title: "Pronomes e verbo SER/ESTAR",
            dialogue: "— Você é brasileiro?\n— Sou sim! E você, de onde é?\n— Eu sou colombiana. Ela é minha amiga, é peruana.\n— E vocês moram aqui?\n— A gente mora aqui há dois anos.\n— Que bacana! Nós também somos novos aqui.",
            content: "# Pronomes Pessoais e Verbos SER/ESTAR\n\n## Os pronomes no Brasil\neu = yo · você = tú/usted (EL MÁS USADO) · a gente = nosotros (informal)\nele/ela = él/ella · nós = nosotros (formal) · vocês = ustedes · eles/elas = ellos/ellas\n\n> En Brasil se usa VOCÊ para todo el mundo: amigos, jefes, desconocidos.\n> A GENTE es muy común en el habla oral y usa la 3ª persona singular.\n\n## Verbo SER — identidade permanente\neu sou · você/a gente/ele/ela é · nós somos · vocês/eles/elas são\n\nUsos: identidad (Eu sou Ana) · origen (Sou do Brasil) · profesión (Ela é médica) · característica (É grande)\n\n## Verbo ESTAR — estado temporário\neu estou · você/a gente/ele/ela está · nós estamos · vocês/eles/elas estão\n\nUsos: estado temporal (Estou cansado) · lugar (Estamos em casa) · emoción (Ela está feliz)\n\n## SER vs ESTAR\nSER = permanente: Eu sou alto. / Ela é médica.\nESTAR = temporario: Eu estou cansado. / Ela está doente.",
            exercises: [
              { id:"A1-U1-L2-E1", type:"multiple_choice", skill:"grammar", question:"Completa: 'Eu ___ brasileira.'", options:["está","são","sou","somos"], answer:2, explanation:"SER para EU = sou. Completamente irregular.", hint:"SER en primera persona" },
              { id:"A1-U1-L2-E2", type:"multiple_choice", skill:"grammar", question:"'A gente ___ cansada.' ¿SER o ESTAR?", options:["somos","são","é","está"], answer:3, explanation:"A gente + ESTAR = está. Estado temporal. A gente usa 3ª persona singular.", hint:"Estado temporal → ESTAR" },
              { id:"A1-U1-L2-E3", type:"fill_blank", skill:"grammar", question:"'Eles ___ professores.' (ser)", answer:["são"], hint:"SER para vocês/eles/elas", explanation:"VOCÊS/ELES/ELAS → SÃO" },
              { id:"A1-U1-L2-E4", type:"multiple_choice", skill:"grammar", question:"'Ela ___ cansada hoje.' ¿Cuál es correcto?", options:["é","sou","está","estamos"], answer:2, explanation:"ESTAR para estado temporal. Cansada hoje = hoy, no siempre.", hint:"¿Es permanente o temporal?" },
              { id:"A1-U1-L2-E5", type:"free_writing", skill:"writing", question:"Preséntate usando SER y ESTAR. 5 oraciones mínimo.", prompt:"Incluye: nome, origen, profesión, cómo estás hoy, una característica tuya", hint:"Eu sou... / Sou de... / Trabalho como... / Hoje estou... / Sou muito..." }
            ]
          },
          {
            id: "A1-U1-L3",
            title: "Números, datas e idade",
            dialogue: "— Quantos anos você tem?\n— Tenho vinte e oito anos. E você?\n— Eu tenho trinta e dois. Quando é seu aniversário?\n— É no dia quinze de março. E o seu?\n— O meu é em novembro, no dia três.",
            content: "# Números, Datas e Idade\n\n## Números 0-20\n0=zero · 1=um/uma · 2=dois/duas · 3=três · 4=quatro · 5=cinco\n6=seis · 7=sete · 8=oito · 9=nove · 10=dez\n11=onze · 12=doze · 13=treze · 14=catorze · 15=quinze\n16=dezesseis · 17=dezessete · 18=dezoito · 19=dezenove · 20=vinte\n\n## Dezenas e centenas\n30=trinta · 40=quarenta · 50=cinquenta · 60=sessenta\n70=setenta · 80=oitenta · 90=noventa · 100=cem · 1000=mil\nCombinando com E: 21=vinte e um · 35=trinta e cinco\n\n## Gênero nos números\num carro / uma casa · dois livros / duas mesas\n\n## Idade — verbo TER\nQuantos anos você tem? = ¿Cuántos años tenés?\nEu tenho 25 anos. / Ela tem 30 anos.\n\n## Datas\nQue dia é hoje? = ¿Qué día es hoy?\nHoje é dia quinze de março.\nQuando é seu aniversário? = ¿Cuándo es tu cumpleaños?\n\n## Meses\njaneiro · fevereiro · março · abril · maio · junho\njulho · agosto · setembro · outubro · novembro · dezembro\n\n## Dias da semana\nsegunda-feira · terça-feira · quarta-feira · quinta-feira · sexta-feira · sábado · domingo",
            exercises: [
              { id:"A1-U1-L3-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cómo se dice el número 15?", options:["quatorze","quinze","dezesseis","cinquenta"], answer:1, explanation:"Quinze = 15. Catorze=14, Dezesseis=16.", hint:"Entre 14 y 16" },
              { id:"A1-U1-L3-E2", type:"fill_blank", skill:"vocabulary", question:"Escribe en português: 35", answer:["trinta e cinco"], hint:"Treinta y cinco", explanation:"35 = trinta e cinco. Siempre se usa E entre decenas y unidades." },
              { id:"A1-U1-L3-E3", type:"multiple_choice", skill:"grammar", question:"'Eu ___ vinte e dois anos.' (tener)", options:["sou","tenho","tem","estou"], answer:1, explanation:"Para la edad se usa TER: eu TENHO. No se usa SER.", hint:"Verbo TER para EU" },
              { id:"A1-U1-L3-E4", type:"translation", skill:"writing", question:"Traduce: 'Hoy es martes, tres de julio. Tengo 27 años.'", answer:["hoje é terça","três de julho","tenho vinte e sete anos"], hint:"Hoje é + día · número + de + mês · tenho + número + anos", explanation:"Hoje é terça-feira, dia três de julho. Tenho vinte e sete anos." },
              { id:"A1-U1-L3-E5", type:"free_writing", skill:"writing", question:"Escribe sobre ti: edad, fecha de nacimiento y la edad de 2 familiares.", prompt:"Use: Eu tenho... anos. / Nasci no dia... de... / Minha mãe/meu pai tem...", hint:"Nasci = nací · número de telefone = número de teléfono" }
            ]
          }
        ]
      },
      {
        id: "A1-U2",
        title: "Família, casa e descrição",
        description: "Colores, descripción física, familia y casa",
        lessons: [
          {
            id: "A1-U2-L1",
            title: "Cores e descrição física",
            dialogue: "— Como é seu namorado?\n— Ele é alto, tem cabelo castanho e olhos verdes.\n— Ah, bonito! E a roupa que ele usa?\n— Hoje ele está de camisa azul e calça preta.\n— E você, como é?\n— Sou baixa, tenho cabelo longo e preto.",
            content: "# Cores e Descrição Física\n\n## As cores\nvermelho/a=rojo · azul=azul · verde=verde · amarelo/a=amarillo\nbranco/a=blanco · preto/a=negro · rosa=rosa · laranja=naranja\nroxo/a=morado · cinza=gris · marrom=marrón\n\n## Concordância\nAs cores concordam com o substantivo:\num carro vermelho / uma camisa vermelha / carros vermelhos / camisas vermelhas\nCores invariáveis (não mudam): azul, verde, rosa, laranja, cinza, marrom\n\n## Descrição física\nalto/a=alto · baixo/a=bajo · magro/a=delgado · gordo/a=gordo\nbonito/a=bonito · feio/a=feo · jovem=joven · velho/a=viejo\n\n## Cabelo e olhos\nCabelo: curto/longo · liso/cacheado/crespo · loiro/castanho/preto/ruivo\nOlhos: azuis/verdes/castanhos/pretos\n\n## Verbo TER para descrever\nEu tenho cabelo curto. / Ela tem olhos castanhos.\n\n## Como é? / Como são?\nComo é você? = ¿Cómo sos?\nEle é alto e magro. / Ela tem cabelo longo.",
            exercises: [
              { id:"A1-U2-L1-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cómo se dice 'negro' en português?", options:["roxo","cinza","marrom","preto"], answer:3, explanation:"Preto/a = negro/a en PB.", hint:"El opuesto de branco" },
              { id:"A1-U2-L1-E2", type:"fill_blank", skill:"grammar", question:"'Ela tem cabelo ___.' (largo)", answer:["longo"], hint:"El opuesto de curto", explanation:"Longo/a = largo/a. El adjetivo concuerda con el sustantivo." },
              { id:"A1-U2-L1-E3", type:"multiple_choice", skill:"grammar", question:"'As paredes são ___.' (azul en plural)", options:["azulas","azules","azuis","azul"], answer:2, explanation:"Azul en plural = AZUIS. Excepción a la regla.", hint:"Azul en plural termina en -is" },
              { id:"A1-U2-L1-E4", type:"translation", skill:"writing", question:"Traduce: 'Mi hermana es alta, tiene ojos verdes y cabello castaño y largo.'", answer:["minha irmã é alta","tem olhos verdes","cabelo castanho e longo"], hint:"minha irmã · é alta · tem olhos... · cabelo...", explanation:"Minha irmã é alta, tem olhos verdes e cabelo castanho e longo." },
              { id:"A1-U2-L1-E5", type:"free_writing", skill:"writing", question:"Describe físicamente a tres personas: vos, un familiar y un amigo/a.", prompt:"Use: É alto/a/baixo/a · tem cabelo... · tem olhos... · É...", hint:"Recordá la concordancia de género en los adjetivos" }
            ]
          },
          {
            id: "A1-U2-L2",
            title: "A família brasileira",
            dialogue: "— Você tem uma família grande?\n— Tenho sim! Meus pais moram em São Paulo. Tenho dois irmãos e uma irmã.\n— E seus avós?\n— Minha avó mora com a gente. Meu avô faleceu.\n— Você tem filhos?\n— Não ainda, mas tenho um sobrinho de três anos. É muito fofo!",
            content: "# A Família Brasileira\n\n## Membros da família\npai=papá · mãe=mamá · filho/filha=hijo/hija\nirmão/irmã=hermano/hermana · avô/avó=abuelo/abuela\ntio/tia=tío/tía · primo/prima=primo/prima · sobrinho/sobrinha=sobrino/sobrina\nmarido=esposo · esposa/mulher=esposa · namorado/a=novio/a\ncunhado/a=cuñado/a · sogro/a=suegro/a\n\n## Adjetivos possessivos\nmeu/minha=mi · meus/minhas=mis · seu/sua=tu/su\nnosso/nossa=nuestro/nuestra · dele/dela=de él/de ella\n\n> En PB oral se prefiere DELE/DELA para evitar confusión:\n> O carro dele = su auto (de él) / A casa dela = su casa (de ella)\n\n## Verbo TER — família\nEu tenho dois irmãos. / Ela tem três filhos.\nA gente tem uma família grande. / Eles têm muitos primos.\n\n## Cultura brasileira\nFamília é tudo! · Churrasco em família (tradición) · Vovô/Vovó (abuelos cariñosos)\nFofo/a = tierno/a, adorable (muy usado en Brasil)",
            exercises: [
              { id:"A1-U2-L2-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cómo se dice 'hermana' en português?", options:["irmão","irmã","filha","sobrinha"], answer:1, explanation:"Irmã=hermana. Irmão=hermano. El acento til indica femenino.", hint:"Con acento til en la ã" },
              { id:"A1-U2-L2-E2", type:"fill_blank", skill:"vocabulary", question:"'Minha ___ tem sessenta anos.' (abuela)", answer:["avó"], hint:"La abuela", explanation:"Avó=abuela. Avô=abuelo. La diferencia es el acento." },
              { id:"A1-U2-L2-E3", type:"multiple_choice", skill:"grammar", question:"'O carro ___ é azul.' (de él — forma preferida en PB)", options:["seu","dele","nosso","meu"], answer:1, explanation:"Dele es la forma preferida en PB oral para de él.", hint:"Forma coloquial preferida en Brasil" },
              { id:"A1-U2-L2-E4", type:"translation", skill:"writing", question:"Traduce: 'Mi familia es grande. Tengo tres hermanos y dos hermanas. Mis padres viven en Brasil.'", answer:["minha família é grande","tenho três irmãos e duas irmãs","meus pais moram no brasil"], hint:"minha família · tenho + número · irmão/irmã · meus pais moram em/no", explanation:"Minha família é grande. Tenho três irmãos e duas irmãs. Meus pais moram no Brasil." },
              { id:"A1-U2-L2-E5", type:"free_writing", skill:"writing", question:"Describe tu familia completa: cuántos son, nombres, edades y dónde viven.", prompt:"Minha família tem... pessoas. / Meu/minha ___ se chama... / Tem... anos. / Mora em...", hint:"Usa possessivos: meu/minha/meus/minhas" }
            ]
          },
          {
            id: "A1-U2-L3",
            title: "A casa e os cômodos",
            dialogue: "— Como é sua casa?\n— É um apartamento pequeno mas muito bonito. Tem sala, dois quartos, cozinha e banheiro.\n— Tem varanda?\n— Tem sim! A varanda é meu lugar favorito. De lá dá pra ver o mar.\n— Que incrível! Fica em que bairro?\n— No Flamengo, pertinho do metrô.",
            content: "# A Casa e os Cômodos\n\n## Os cômodos\nsala de estar=sala · sala de jantar=comedor · quarto=habitación\ncozinha=cocina · banheiro=baño · garagem=garaje · varanda=balcón\njardim=jardín · quintal=patio · escritório=oficina\n\n## Móveis e objetos\ncama=cama · sofá=sofá · mesa=mesa · cadeira=silla\njanela=ventana · porta=puerta · geladeira=nevera · fogão=cocina (aparato)\n\n## Preposições de lugar\nem/na/no=en · perto de=cerca de · longe de=lejos de\nna frente de=delante de · atrás de=detrás de\ndentro de=dentro de · em cima de=encima de · ao lado de=al lado de\n\n## Expressões úteis\nTem...? = ¿Hay...? · Não tem. = No hay.\nFica em... = Está en... · Pertinho de... = Cerquita de...\nDa pra ver... = Se puede ver... (muy coloquial)\n\n## Tipos de moradia\napartamento=departamento/piso · casa=casa · kitnet=estudio",
            exercises: [
              { id:"A1-U2-L3-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cómo se dice 'nevera' en português?", options:["fogão","geladeira","armário","janela"], answer:1, explanation:"Geladeira=nevera. Viene de gelado=helado.", hint:"Viene de gelado (frío)" },
              { id:"A1-U2-L3-E2", type:"fill_blank", skill:"grammar", question:"'A cama está ___ quarto.' (en el)", answer:["no"], hint:"em + o = ?", explanation:"em + o = NO. Contracción obligatoria." },
              { id:"A1-U2-L3-E3", type:"multiple_choice", skill:"vocabulary", question:"¿Qué es una 'varanda'?", options:["garaje","jardín","balcón/terraza","comedor"], answer:2, explanation:"Varanda=balcón o terraza. Muy importante en la cultura brasileña.", hint:"Lugar al aire libre en el apartamento" },
              { id:"A1-U2-L3-E4", type:"translation", skill:"writing", question:"Traduce: 'Mi casa tiene tres habitaciones, una cocina grande y un jardín bonito.'", answer:["minha casa tem três quartos","uma cozinha grande","um jardim bonito"], hint:"minha casa tem · quartos · cozinha · jardim", explanation:"Minha casa tem três quartos, uma cozinha grande e um jardim bonito." },
              { id:"A1-U2-L3-E5", type:"free_writing", skill:"writing", question:"Describe tu casa o apartamento: tipo, tamaño, cómodos, lo que más te gusta.", prompt:"Minha casa/apartamento tem... / Fica em... / O meu lugar favorito é... porque...", hint:"Usa preposições de lugar: no/na · perto de · em cima de" }
            ]
          }
        ]
      },
      {
        id: "A1-U3",
        title: "Comida, rotina e tempo",
        description: "Alimentación, rutina diaria y vocabulario del tiempo",
        lessons: [
          {
            id: "A1-U3-L1",
            title: "Comida e bebida brasileira",
            dialogue: "— O que você quer comer?\n— Quero uma feijoada! É meu prato favorito.\n— Boa escolha! E para beber?\n— Uma caipirinha, por favor. E você?\n— Para mim, um suco de maracujá e um pão de queijo.\n— Que delícia! O Brasil tem a melhor comida do mundo!",
            content: "# Comida e Bebida Brasileira\n\n## Pratos típicos\nfeijoada=feijoada (plato nacional: frijoles negros con carne)\narroz e feijão=arroz y frijoles (base de toda refeição)\nchurrasco=asado · pão de queijo=pan de queso\nbrigadeiro=dulce de chocolate · açaí=açaí · coxinha=croqueta de pollo\n\n## Bebidas\nágua=agua · suco=jugo · café=café · leite=leche\ncerveja=cerveza · caipirinha=caipirinha · refrigerante=refresco\n\n## Frutas brasileiras\nmaracujá=maracuyá · goiaba=guayaba · manga=mango\nabacaxi=piña · banana=banana · laranja=naranja\n\n## Verbos para comer e beber\ncomer=comer · beber/tomar=beber · querer=querer · pedir=pedir\ngostar de=gustar de · adorar=adorar · preferir=preferir\n\n## No restaurante\nO cardápio, por favor. = La carta, por favor.\nQuero pedir... = Quiero pedir...\nQuanto custa? = ¿Cuánto cuesta?\nA conta, por favor. = La cuenta, por favor.\nEstá delicioso! = ¡Está delicioso!",
            exercises: [
              { id:"A1-U3-L1-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cuál es el plato nacional brasileño?", options:["churrasco","coxinha","feijoada","tapioca"], answer:2, explanation:"La feijoada es el plato nacional: frijoles negros con varios tipos de carne.", hint:"Frijoles negros con carne" },
              { id:"A1-U3-L1-E2", type:"fill_blank", skill:"vocabulary", question:"¿Cómo se dice 'jugo/zumo' en português?", answer:["suco"], hint:"Empieza con S", explanation:"Suco = jugo/zumo. Um suco de laranja = un jugo de naranja." },
              { id:"A1-U3-L1-E3", type:"multiple_choice", skill:"grammar", question:"'Eu ___ de feijoada.' (gustar)", options:["gosto","gosta","gostas","gostamos"], answer:0, explanation:"GOSTAR para EU = GOSTO. Siempre va con DE: gosto DE feijoada.", hint:"GOSTAR para EU + DE" },
              { id:"A1-U3-L1-E4", type:"translation", skill:"writing", question:"Traduce: 'Quiero un jugo de maracuyá y un pan de queso, por favor.'", answer:["quero um suco de maracujá","um pão de queijo","por favor"], hint:"quero=quiero · um/uma · por favor", explanation:"Quero um suco de maracujá e um pão de queijo, por favor." },
              { id:"A1-U3-L1-E5", type:"free_writing", skill:"writing", question:"Describe tus comidas favoritas y lo que comés en un día típico. Menciona al menos una comida brasileña.", prompt:"Meu prato favorito é... / No café da manhã como/tomo... / No almoço... / No jantar...", hint:"café da manhã=desayuno · almoço=almuerzo · jantar=cena" }
            ]
          },
          {
            id: "A1-U3-L2",
            title: "Rotina diária e horas",
            dialogue: "— Que horas são?\n— São sete e meia da manhã.\n— Já? Preciso me levantar! A que horas você começa a trabalhar?\n— Começo às nove. Mas antes tomo banho, tomo café e levo os filhos na escola.\n— E que horas você almoça?\n— Geralmente ao meio-dia.",
            content: "# Rotina Diária e Horas\n\n## As horas\nQue horas são? = ¿Qué hora es?\nSão duas horas. = Son las dos. (plural)\nÉ uma hora. = Es la una. (singular)\nÉ meio-dia. = Es mediodía. · É meia-noite. = Es medianoche.\ne meia=y media · e quinze=y cuarto · menos quinze=menos cuarto\nda manhã=de la mañana · da tarde=de la tarde · da noite=de la noche\nem ponto=en punto\n\nEjemplos: São dez e meia da manhã. / É uma hora da tarde.\n\n## Verbos de rotina\nacordar=despertar · se levantar=levantarse · tomar banho=ducharse\ntomar café=desayunar · almoçar=almorzar · jantar=cenar · dormir=dormir\nir para=ir a · chegar=llegar · voltar=volver\n\n## Expressões de tempo\nde manhã=por la mañana · de tarde=por la tarde · de noite=por la noche\ncedo=temprano · tarde=tarde · sempre=siempre · nunca=nunca\ngeralmente=generalmente · às vezes=a veces · todos os dias=todos los días\n\n## A que horas?\nA que horas você acorda? = ¿A qué hora te despertás?\nEu acordo às seis da manhã.\nÀS = a las (preposição + artigo: a + as = às)",
            exercises: [
              { id:"A1-U3-L2-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cómo se dice 'ducharse' en português?", options:["se vestir","acordar","tomar banho","almoçar"], answer:2, explanation:"Tomar banho = ducharse (literalmente tomar baño).", hint:"Literalmente tomar baño" },
              { id:"A1-U3-L2-E2", type:"fill_blank", skill:"grammar", question:"'___ sete horas da manhã.' (son las)", answer:["são"], hint:"¿Singular o plural?", explanation:"São sete horas — plural porque son más de una hora. Solo É para la una, mediodía y medianoche." },
              { id:"A1-U3-L2-E3", type:"multiple_choice", skill:"grammar", question:"'Eu acordo ___ seis horas.' (a las)", options:["em","a","às","de"], answer:2, explanation:"Para horas con a las se usa ÀS (contracción de a + as).", hint:"Contracción de a + as" },
              { id:"A1-U3-L2-E4", type:"translation", skill:"writing", question:"Traduce: 'Me despierto a las 7, desayuno a las 8 y llego al trabajo a las 9 en punto.'", answer:["acordo às sete","tomo café às oito","chego ao trabalho às nove"], hint:"acordar · tomar café da manhã · chegar · em ponto", explanation:"Acordo às sete, tomo café às oito e chego ao trabalho às nove em ponto." },
              { id:"A1-U3-L2-E5", type:"free_writing", skill:"writing", question:"Describe tu rutina diaria completa con horarios. Mínimo 7 oraciones.", prompt:"De manhã... / Às... horas eu... / Geralmente almoço... / À noite...", hint:"Usa: acordar · tomar banho · trabalhar/estudar · almoçar · jantar · dormir" }
            ]
          }
        ]
      }
    ]
  },
  A2: {
    units: [
      {
        id: "A2-U1",
        title: "Verbos e ações",
        description: "Verbos regulares, presente e passado",
        lessons: [
          {
            id: "A2-U1-L1",
            title: "Verbos regulares no presente",
            dialogue: "— Você trabalha aqui perto?\n— Trabalho sim, na empresa ali na esquina. E você, o que faz?\n— Estudo medicina na USP. A gente começa as aulas às oito.\n— E seus colegas também estudam lá?\n— Alguns sim. A maioria mora longe e viaja muito de transporte público.",
            content: "# Verbos Regulares no Presente\n\n## Grupo -AR: FALAR\neu falo · você/a gente/ele/ela fala · nós falamos · vocês/eles/elas falam\nOutros -AR: trabalhar · morar · estudar · comprar · viajar · cantar · gostar · precisar · usar · chegar · começar\n\n## Grupo -ER: COMER\neu como · você/a gente/ele/ela come · nós comemos · vocês/eles/elas comem\nOutros -ER: beber · escrever · ler · vender · aprender · entender · responder · receber\n\n## Grupo -IR: PARTIR\neu parto · você/a gente/ele/ela parte · nós partimos · vocês/eles/elas partem\nOutros -IR: abrir · assistir · dividir · existir · discutir\n\n## Irregulares essenciais\nIR: vou/vai/vai/vai/vamos/vão/vão\nTER: tenho/tem/tem/tem/temos/têm/têm\nFAZER: faço/faz/faz/faz/fazemos/fazem/fazem\nPODER: posso/pode/pode/pode/podemos/podem/podem\nQUERER: quero/quer/quer/quer/queremos/querem/querem\n\n> Dica: A GENTE usa la misma conjugación que ELE/ELA (3ª singular):\n> A gente fala (no falamos) · A gente vai (no vamos) · A gente tem (no temos)",
            exercises: [
              { id:"A2-U1-L1-E1", type:"multiple_choice", skill:"grammar", question:"'Ela ___ muito rápido.' (falar)", options:["falo","falamos","fala","falam"], answer:2, explanation:"Verbo -AR, 3ª persona singular: ELA FALA. Terminación -a.", hint:"Verbo -AR, ela → termina en -a" },
              { id:"A2-U1-L1-E2", type:"fill_blank", skill:"grammar", question:"'A gente ___ pizza toda sexta.' (comer)", answer:["come"], hint:"A gente usa la misma forma que ele/ela", explanation:"A gente + verbo 3ª singular: A gente COME." },
              { id:"A2-U1-L1-E3", type:"multiple_choice", skill:"grammar", question:"'Vocês ___ na universidade?' (estudar)", options:["estuda","estudamos","estudam","estudo"], answer:2, explanation:"VOCÊS/ELES/ELAS → ESTUDAM. Terminación -am.", hint:"Vocês/eles/elas → terminación -am" },
              { id:"A2-U1-L1-E4", type:"translation", skill:"writing", question:"Traduce: 'Nosotros trabajamos juntos, vivimos cerca y comemos en el mismo restaurante.'", answer:["trabalhamos juntos","moramos perto","comemos no mesmo restaurante"], hint:"juntos=juntos · perto=cerca · mesmo=mismo", explanation:"Nós trabalhamos juntos, moramos perto e comemos no mesmo restaurante." },
              { id:"A2-U1-L1-E5", type:"free_writing", skill:"writing", question:"Escribe sobre tu semana típica usando al menos 8 verbos diferentes en presente.", prompt:"Na segunda-feira... / Às vezes... / A gente geralmente... / Eu nunca...", hint:"Usa: trabalhar · estudar · comer · beber · ler · assistir · fazer · ir" }
            ]
          },
          {
            id: "A2-U1-L2",
            title: "Pretérito Perfeito — o passado",
            dialogue: "— O que você fez no fim de semana?\n— Fui à praia com minha família! A gente nadou, comeu camarão e assistiu ao pôr do sol.\n— Que maravilha! E sábado à noite?\n— Fomos a um show de samba no Rio. Foi incrível!\n— Você já foi ao Carnaval?\n— Ainda não. Mas o ano passado viajei para Salvador e foi a melhor experiência da minha vida!",
            content: "# Pretérito Perfeito Simples\n\n## Quando usar\nAção completa e pontual no passado:\nOntem fui ao mercado. / Ela comeu pizza na sexta. / A gente viajou para o Rio.\n\n## Conjugação dos regulares\nFALAR: falei/falou/falou/falou/falamos/falaram/falaram\nCOMER: comi/comeu/comeu/comeu/comemos/comeram/comeram\nPARTIR: parti/partiu/partiu/partiu/partimos/partiram/partiram\n\n> Atenção: NÓS no pretérito é IGUAL ao presente para -AR e -IR. O contexto define!\n> Nós falamos (agora) = Nós falamos (ontem)\n\n## Irregulares mais importantes\nSER/IR: fui/foi/foi/foi/fomos/foram/foram\nTER: tive/teve/teve/teve/tivemos/tiveram/tiveram\nFAZER: fiz/fez/fez/fez/fizemos/fizeram/fizeram\nVIR: vim/veio/veio/veio/viemos/vieram/vieram\nVER: vi/viu/viu/viu/vimos/viram/viram\nDAR: dei/deu/deu/deu/demos/deram/deram\n\n## Marcadores de tempo\nontem=ayer · anteontem=anteayer · hoje de manhã=esta mañana\nna semana passada=la semana pasada · no ano passado=el año pasado\nhá dois dias=hace dos días · já=ya · ainda não=todavía no",
            exercises: [
              { id:"A2-U1-L2-E1", type:"multiple_choice", skill:"grammar", question:"'Ontem ela ___ ao cinema.' (ir)", options:["vai","foi","iam","vão"], answer:1, explanation:"Pretérito de IR/SER para ELA = FOI.", hint:"Pretérito irregular de IR" },
              { id:"A2-U1-L2-E2", type:"fill_blank", skill:"grammar", question:"'A gente ___ muita coisa na viagem.' (ver)", answer:["viu"], hint:"Pretérito de VER para ele/ela/a gente", explanation:"VER: eu vi · você/ele/ela/a gente viu · nós vimos." },
              { id:"A2-U1-L2-E3", type:"multiple_choice", skill:"grammar", question:"'Eles ___ para casa cedo.' (voltar)", options:["voltei","volta","voltaram","voltamos"], answer:2, explanation:"ELES/VOCÊS + verbo -AR → VOLTARAM.", hint:"Eles/vocês + -AR → terminação -aram" },
              { id:"A2-U1-L2-E4", type:"translation", skill:"writing", question:"Traduce: 'Ayer fui al trabajo, almorcé con un amigo y llegué a casa a las ocho.'", answer:["ontem fui ao trabalho","almocei com um amigo","cheguei em casa às oito"], hint:"fui · almocei (almoçar→almocei) · cheguei", explanation:"Ontem fui ao trabalho, almocei com um amigo e cheguei em casa às oito." },
              { id:"A2-U1-L2-E5", type:"free_writing", skill:"writing", question:"Contá lo que hiciste el fin de semana pasado en detalle. Mínimo 6 oraciones.", prompt:"No sábado... / A gente foi... / Comemos... / À noite... / No domingo...", hint:"Usa: ontem · na sexta · no fim de semana · à noite · de manhã" }
            ]
          },
          {
            id: "A2-U1-L3",
            title: "Pretérito Imperfeito — hábitos e descrições",
            dialogue: "— Como era sua infância?\n— Era muito boa! A gente morava no interior, numa casa grande com quintal.\n— E o que você fazia nas férias?\n— Brincava na rua com os amigos até escurecer. Não tinha celular naquela época!\n— Que saudade de uma época mais simples...\n— É verdade. Antes a vida era mais tranquila.",
            content: "# Pretérito Imperfeito\n\n## Quando usar\n1. Hábito ou ação repetida no passado: Quando criança, eu brincava muito.\n2. Descrição de estado no passado: A casa era grande. Ele estava cansado.\n3. Ação em progresso quando outra aconteceu: Eu dormia quando ele chegou.\n4. Contexto/cenário de história: Era uma vez uma princesa que morava...\n\n## Conjugação\nFALAR: falava/falava/falava/falava/falávamos/falavam/falavam\nCOMER: comia/comia/comia/comia/comíamos/comiam/comiam\nPARTIR: partia/partia/partia/partia/partíamos/partiam/partiam\n\n## Irregulares\nSER: era/era/era/era/éramos/eram/eram\nTER: tinha/tinha/tinha/tinha/tínhamos/tinham/tinham\nIR: ia/ia/ia/ia/íamos/iam/iam\nVIR: vinha/vinha/vinha/vinha/vínhamos/vinham/vinham\n\n## Imperfeito vs Perfeito\nPerfeito = puntual y completo: Ontem comi pizza. (una vez, terminada)\nImperfeito = hábito o estado: Quando criança, comia pizza toda semana. (hábito)\nCombinados: Eu dormia (fondo) quando o telefone tocou (acción puntual).\n\n## Expressões de hábito passado\nquando era criança=cuando era niño/a · antes=antes\nnaquela época=en aquella época · antigamente=antiguamente\nsempre=siempre · todos os dias=todos los días",
            exercises: [
              { id:"A2-U1-L3-E1", type:"multiple_choice", skill:"grammar", question:"'Quando criança, ela ___ muito.' (brincar — hábito)", options:["brincou","brinca","brincava","brincaram"], answer:2, explanation:"Hábito en el pasado → IMPERFEITO: BRINCAVA.", hint:"Hábito en el pasado → Imperfeito" },
              { id:"A2-U1-L3-E2", type:"fill_blank", skill:"grammar", question:"'A casa ___ muito grande e bonita.' (ser — descripción pasada)", answer:["era"], hint:"SER en imperfeito para a casa", explanation:"SER en imperfeito: ERA. Para describir cómo era algo en el pasado." },
              { id:"A2-U1-L3-E3", type:"multiple_choice", skill:"grammar", question:"'Eu ___ (dormir) quando ele ___ (chegar).'", options:["dormia/chegou","dormiu/chegava","dorme/chegou","dormia/chegava"], answer:0, explanation:"DORMIA (imperfeito=fondo) + CHEGOU (perfeito=acción puntual que interrumpe).", hint:"¿Cuál era el fondo y cuál la acción puntual?" },
              { id:"A2-U1-L3-E4", type:"translation", skill:"writing", question:"Traduce: 'Antes vivíamos en el campo. Los niños jugaban afuera y no había internet.'", answer:["antes morávamos no campo","as crianças brincavam lá fora","não tinha internet"], hint:"antes · morávamos · brincavam · não tinha (TER en imperfeito)", explanation:"Antes morávamos no campo. As crianças brincavam lá fora e não tinha internet." },
              { id:"A2-U1-L3-E5", type:"free_writing", skill:"writing", question:"Describe cómo era tu vida hace 10 años. Mínimo 6 oraciones.", prompt:"Dez anos atrás, eu morava em... / Estudava... / Todos os dias... / Minha vida era...", hint:"Usa: era · morava · estudava · trabalhava · ia · tinha · brincava" }
            ]
          }
        ]
      }
    ]
  },
  B1: {
    units: [
      {
        id: "B1-U1",
        title: "Subjuntivo e opiniões",
        description: "Subjuntivo presente, opiniones y debate",
        lessons: [
          {
            id: "B1-U1-L1",
            title: "Subjuntivo presente",
            dialogue: "— Quero que você venha ao meu casamento!\n— Claro que vou! É importante que eu esteja lá.\n— Tomara que faça bom tempo.\n— Espero que tudo corra bem!\n— É fundamental que todos se sintam bem-vindos.",
            content: "# Subjuntivo Presente\n\n## Quando usar\n1. Desejo/Esperança: Espero que você venha. / Quero que eles fiquem.\n2. Emoção: Fico feliz que você esteja aqui.\n3. Recomendação: É importante que você faça exercício.\n4. Concessão: Embora seja difícil, vou tentar.\n5. Finalidade: Falo devagar para que você entenda.\n\n## Conjugação\nFALAR: fale/fale/fale/fale/falemos/falem/falem\nCOMER: coma/coma/coma/coma/comamos/comam/comam\nIR: vá/vá/vá/vá/vamos/vão/vão\nSER: seja/seja/seja/seja/sejamos/sejam/sejam\nTER: tenha/tenha/tenha/tenha/tenhamos/tenham/tenham\nFAZER: faça/faça/faça/faça/façamos/façam/façam\nESTAR: esteja/esteja/esteja/esteja/estejamos/estejam/estejam\nVIR: venha/venha/venha/venha/venhamos/venham/venham\n\n## Palavras que SEMPRE pedem subjuntivo\nespero que · quero que · preciso que · é importante que\né fundamental que · embora · para que · desde que · a menos que\n\n> Dica: No Brasil falado informal, às vezes se usa indicativo:\n> Formal: Espero que venha. / Coloquial: Espero que vem. (menos correto)",
            exercises: [
              { id:"B1-U1-L1-E1", type:"multiple_choice", skill:"grammar", question:"'Espero que ela ___ amanhã.' (vir)", options:["vem","venha","veio","virá"], answer:1, explanation:"Espero que + subjuntivo: VENHA.", hint:"VIR no subjuntivo" },
              { id:"B1-U1-L1-E2", type:"fill_blank", skill:"grammar", question:"'Embora ___ cansado, vou trabalhar.' (estar)", answer:["esteja"], hint:"EMBORA sempre pide subjuntivo. ESTAR no subjuntivo = ?", explanation:"EMBORA + subjuntivo: EMBORA ESTEJA cansado." },
              { id:"B1-U1-L1-E3", type:"multiple_choice", skill:"grammar", question:"'É importante que a gente ___ mais água.' (beber)", options:["bebe","bebemos","beba","bebeu"], answer:2, explanation:"É importante que + subjuntivo: BEBA. A gente usa 3ª singular.", hint:"Subjuntivo de BEBER" },
              { id:"B1-U1-L1-E4", type:"translation", skill:"writing", question:"Traduce: 'Aunque sea difícil, es importante que practiquemos todos los días.'", answer:["embora seja difícil","é importante que","pratiquemos todos os dias"], hint:"Aunque=Embora · seja · é importante que · pratiquemos", explanation:"Embora seja difícil, é importante que pratiquemos todos os dias." },
              { id:"B1-U1-L1-E5", type:"free_writing", skill:"writing", question:"Escribe 6 oraciones usando subjuntivo: 2 con deseo, 2 con recomendación y 2 con EMBORA.", prompt:"Use: espero que · quero que · é importante que · é fundamental que · embora · para que", hint:"Pensá en situaciones reales de tu vida" }
            ]
          },
          {
            id: "B1-U1-L2",
            title: "Expressando e defendendo opiniões",
            dialogue: "— O que você acha do trabalho remoto?\n— Na minha opinião, é excelente. Tenho mais tempo para a família.\n— Concordo em partes. Por outro lado, acho que perdemos o contato humano.\n— É verdade. No entanto, dá para manter contato por videochamada.\n— Não acho que seja a mesma coisa. Presença física tem valor diferente.\n— Entendo seu ponto. Mas cada pessoa é diferente, né?",
            content: "# Expressando e Defendendo Opiniões\n\n## Dar sua opinião\nNa minha opinião,... = En mi opinión,...\nEu acho que... = Creo que... (coloquial)\nEu acredito que... = Creo/Considero que...\nDo meu ponto de vista,... = Desde mi punto de vista,...\nPara mim,... = Para mí,...\nA meu ver,... = A mi parecer,...\n\n## Concordar\nConcordo! / Concordo plenamente! = ¡De acuerdo!\nTem razão! = ¡Tiene razón!\nExatamente! = ¡Exactamente!\nConcordo em partes. = Estoy de acuerdo en parte.\n\n## Discordar\nDiscordo. = No estoy de acuerdo.\nNão acho que... = No creo que...\nAo contrário,... = Al contrario,...\nNa verdade,... = En realidad,...\nNão é bem assim. = No es exactamente así.\n\n## Conectivos de argumento B1\npor outro lado=por otro lado · no entanto=sin embargo\nalém disso=además · portanto=por lo tanto\nou seja=o sea · inclusive=incluso · embora=aunque\npor isso=por eso · assim=así\n\n## Estrutura de um argumento\n1. Opinião: Na minha opinião, o celular é essencial.\n2. Argumento: Porque nos conecta com o mundo.\n3. Exemplo: Por exemplo, posso trabalhar de qualquer lugar.\n4. Concessão: Embora seja uma distração às vezes.\n5. Conclusão: No entanto, os benefícios superam os problemas.",
            exercises: [
              { id:"B1-U1-L2-E1", type:"multiple_choice", skill:"vocabulary", question:"¿Cuál introduce una perspectiva contraria?", options:["Além disso","Por outro lado","Por isso","Ou seja"], answer:1, explanation:"Por outro lado = por otro lado. Introduce perspectiva diferente o contraria.", hint:"Introduce perspectiva diferente" },
              { id:"B1-U1-L2-E2", type:"fill_blank", skill:"grammar", question:"'___ o celular seja útil, pode ser viciante.' (aunque)", answer:["embora","apesar de que"], hint:"La conjunción de concesión más usada", explanation:"EMBORA + subjuntivo: Embora o celular seja útil, pode ser viciante." },
              { id:"B1-U1-L2-E3", type:"multiple_choice", skill:"vocabulary", question:"¿Qué significa 'Concordo em partes'?", options:["Estoy completamente de acuerdo","No estoy de acuerdo","Estoy de acuerdo en parte","No entiendo"], answer:2, explanation:"Concordo em partes = estoy de acuerdo en parte.", hint:"Em partes = parcialmente" },
              { id:"B1-U1-L2-E4", type:"translation", skill:"writing", question:"Traduce: 'En mi opinión, aprender idiomas es fundamental. Sin embargo, requiere mucha dedicación.'", answer:["na minha opinião","aprender idiomas é fundamental","no entanto","requer muita dedicação"], hint:"na minha opinião · fundamental · no entanto · requer", explanation:"Na minha opinião, aprender idiomas é fundamental. No entanto, requer muita dedicação." },
              { id:"B1-U1-L2-E5", type:"free_writing", skill:"writing", question:"Escribe tu opinión argumentada sobre un tema. Mínimo 6 oraciones con conectivos.", prompt:"Elige: redes sociais · trabalho remoto · vegetarianismo · tecnologia na educação", hint:"opinião → argumento 1 → argumento 2 → concessão (embora) → conclusão" }
            ]
          }
        ]
      }
    ]
  },
  B2: {
    units: [
      {
        id: "B2-U1",
        title: "Registro formal e argumentação",
        description: "Registro formal, voz pasiva y textos argumentativos",
        lessons: [
          {
            id: "B2-U1-L1",
            title: "Registro formal vs coloquial",
            dialogue: "Informal: Oi! Tô precisando de umas infos sobre o curso. Pode me mandar?\nFormal: Prezado Senhor, Venho por meio deste solicitar informações acerca do curso oferecido. Aguardo retorno. Atenciosamente.",
            content: "# Registro Formal vs Coloquial\n\n## Comparação\nColoquial → Formal:\nOi/Ei → Prezado(a)/Caro(a)\nTô (estou) → Estou\nTá (está) → Está\nA gente vai → Nós iremos\nPra (para) → Para\nMas → Porém / No entanto / Contudo\nEntão → Portanto / Por conseguinte\nTambém → Outrossim / Ademais\nSobre → Acerca de / A respeito de\nPor causa de → Em virtude de / Em razão de\n\n## Conectivos formais essenciais B2\nhaja vista=dado que/visto que\nnão obstante=no obstante/a pesar de\nademais=además · outrossim=asimismo\npor conseguinte=por consiguiente\nem virtude de=en virtud de\nà luz de=a la luz de · cabe ressaltar=cabe destacar\n\n## Nominalização\ndesenvolver→desenvolvimento · investir→investimento\ncrescer→crescimento · reduzir→redução\nproduzir→produção · concluir→conclusão\nImplementar→implementação · avaliar→avaliação\n\nInformal: O governo gastou muito em educação.\nFormal: Os investimentos governamentais em educação foram significativos.",
            exercises: [
              { id:"B2-U1-L1-E1", type:"multiple_choice", skill:"grammar", question:"¿Cuál es el equivalente formal de 'mas'?", options:["haja vista","porém","outrossim","cabe ressaltar"], answer:1, explanation:"PORÉM = pero/sin embargo. Equivalente formal de MAS.", hint:"Conector de contraste formal" },
              { id:"B2-U1-L1-E2", type:"fill_blank", skill:"grammar", question:"Nominalización: el verbo DESENVOLVER en sustantivo es: o ___", answer:["desenvolvimento"], hint:"Desarrollo en português", explanation:"Desenvolver → o desenvolvimento." },
              { id:"B2-U1-L1-E3", type:"multiple_choice", skill:"grammar", question:"Versión más formal de 'Por causa do trânsito, cheguei tarde':", options:["Graças ao trânsito, cheguei tarde.","Em virtude do tráfego, cheguei com atraso.","Porque tinha trânsito, fiquei atrasado.","O trânsito me atrasou demais."], answer:1, explanation:"Em virtude de = en virtud de. Tráfego más formal que trânsito. Com atraso más formal que tarde.", hint:"Em virtude de = por causa de (formal)" },
              { id:"B2-U1-L1-E4", type:"translation", skill:"writing", question:"Reescribe en registro formal: 'A gente tá precisando melhorar muito a educação porque tá muito ruim.'", answer:["é necessário","melhorar a qualidade","educação","apresenta deficiências"], hint:"a gente→nós · tá precisando→necessita · muito ruim→apresenta sérias deficiências", explanation:"É necessário aprimorar significativamente a qualidade da educação, haja vista as graves deficiências que esta apresenta." },
              { id:"B2-U1-L1-E5", type:"free_writing", skill:"writing", question:"Escribe un email formal solicitando información. Mínimo 8 oraciones.", prompt:"Assunto: Solicitação de informações / Prezado(a)... / Venho por meio deste... / Aguardo retorno. / Atenciosamente,", hint:"Usa: venho solicitar · acerca de · em virtude de · agradeço · atenciosamente" }
            ]
          }
        ]
      }
    ]
  },
  C1: {
    units: [
      {
        id: "C1-U1",
        title: "Análise crítica e estilística",
        description: "Figuras de linguagem y análisis avanzado",
        lessons: [
          {
            id: "C1-U1-L1",
            title: "Figuras de linguagem",
            dialogue: "Texto: O Brasil é uma terra de contrastes: onde o sol da esperança coexiste com a sombra da desigualdade. O sertão sangra secura; as cidades choram chuva. Somos, todos nós, um paradoxo vivo.",
            content: "# Figuras de Linguagem\n\n## Figuras de Palavras\nMetáfora: comparação implícita. A vida é uma viagem cheia de curvas.\nMetonímia: substituição por relação lógica. Preciso de um Shakespeare. (=un gran escritor)\nSinestesia: mistura de sentidos. Ela tinha um olhar doce e uma voz fria.\n\n## Figuras de Pensamento\nParadoxo: contradição que revela verdad. O silêncio gritava mais alto que as palavras.\nIronia: dizer o contrário. Que aluno dedicado — chegou às 11h!\nEufemismo: suavizar lo desagradable. Ele passou desta para melhor. (=murió)\nHipérbole: exageração. Já te expliquei isso um milhão de vezes!\n\n## Figuras de Construção\nAnáfora: repetição no início. Quero paz. Quero justiça. Quero liberdade.\nZeugma: omissão de término ya mencionado. Ela tinha esperança; eu, dúvidas. (omite tinha)\nAssíndeto: sem conjunções (velocidade). Chegou, viu, venceu.\nPolissíndeto: muitas conjunções (acumulação). E riu, e chorou, e gritou.\n\n## Infinitivo flexionado\nCaracterística exclusiva del português:\nPara nós fazermos isso, precisamos de tempo.\nÉ importante elas virem cedo.\nSem eles saberem a verdade, nada avança.",
            exercises: [
              { id:"C1-U1-L1-E1", type:"multiple_choice", skill:"grammar", question:"'O silêncio gritava mais alto que as palavras.' ¿Qué figura es?", options:["Hipérbole","Paradoxo + Personificação","Metonímia","Eufemismo"], answer:1, explanation:"Paradoxo (silêncio que grita = contradição) + Personificação (silêncio con capacidad humana).", hint:"El silencio grita — dos figuras en una" },
              { id:"C1-U1-L1-E2", type:"multiple_choice", skill:"grammar", question:"'Ela tinha esperança; eu, dúvidas.' ¿Qué figura omite el verbo?", options:["Anáfora","Elipse","Zeugma","Assíndeto"], answer:2, explanation:"Zeugma: omite un término ya mencionado. Eu [tinha] dúvidas.", hint:"Omisión del verbo ya mencionado" },
              { id:"C1-U1-L1-E3", type:"fill_blank", skill:"grammar", question:"'Preciso de um Shakespeare' usa la figura de la ___", answer:["metonímia"], hint:"Una persona representa una cualidad", explanation:"Metonímia: Shakespeare representa un gran escritor." },
              { id:"C1-U1-L1-E4", type:"translation", skill:"writing", question:"Traduce y analiza: 'El Brasil sangra desigualdad. Sus ciudades lloran mientras el campo seca.' Identifica las figuras.", answer:["o brasil sangra","as cidades choram","o campo seca","personificação","metáfora"], hint:"Identifica: personificação · metáfora · possível paradoxo", explanation:"O Brasil sangra desigualdade. Suas cidades choram enquanto o campo seca. Figuras: personificação, metáfora." },
              { id:"C1-U1-L1-E5", type:"free_writing", skill:"writing", question:"Escribe un párrafo literario (6-8 oraciones) sobre un tema social usando al menos 4 figuras de lenguaje. Identifícalas.", prompt:"Tema: desigualdade · meio ambiente · tecnologia · amor · solidão", hint:"Usa: personificação · metáfora · paradoxo · hipérbole · anáfora" }
            ]
          }
        ]
      }
    ]
  },
  C2: {
    units: [
      {
        id: "C2-U1",
        title: "Domínio acadêmico",
        description: "Ensayo académico, estilística avanzada y literatura",
        lessons: [
          {
            id: "C2-U1-L1",
            title: "O ensaio acadêmico",
            dialogue: "Fragmento: A língua, longe de ser mero instrumento de comunicação, constitui-se como espaço de poder, identidade e resistência. Haja vista os estudos de Bourdieu acerca do capital linguístico, percebe-se que o domínio da norma culta não é neutro.",
            content: "# O Ensaio Acadêmico\n\n## Estrutura\n1. Introdução: tema + tese (posição do autor)\n2. Desenvolvimento: argumentos + evidências + contra-argumentos\n3. Conclusão: síntese + perspectiva\n\n## Conectivos acadêmicos avançados\nPara introduzir: Primeiramente · Em primeiro lugar\nPara adicionar: Outrossim · Ademais · Cumpre acrescentar que\nPara contrastar: Não obstante · Conquanto · Malgrado\nPara concluir: À guisa de conclusão · Em suma · Depreende-se que\nPara citar: Consoante afirma X · À luz de · Segundo X\n\n## Norma culta avançada\n\nColocação pronominal:\nCom negação: Não me diga isso. (próclise)\nCom advérbio: Sempre te vi assim. (próclise)\nInício absoluto: Diga-me a verdade. (ênclise)\n\nCrase:\nUsa à/às antes de sustantivo feminino: Fui à escola. / Às vezes.\nNão usa antes de pronomes ou cidades sem artigo: Vou a Paris.\n\nRegência verbal culta:\naspirar a · visar a · assistir a · implicar em",
            exercises: [
              { id:"C2-U1-L1-E1", type:"multiple_choice", skill:"grammar", question:"¿Cuál uso de crase es correcto?", options:["Vou à Paris.","Fui à escola.","Refiro-me à isso.","Vou à ele."], answer:1, explanation:"Fui À escola — crase obrigatória antes de sustantivo femenino con artículo.", hint:"Sustantivo femenino + artículo" },
              { id:"C2-U1-L1-E2", type:"fill_blank", skill:"grammar", question:"Conectivo para concluir un ensayo: '___ guisa de conclusão, pode-se afirmar que...'", answer:["à"], hint:"Preposição antes de guisa", explanation:"À guisa de conclusão = a modo de conclusión." },
              { id:"C2-U1-L1-E3", type:"multiple_choice", skill:"grammar", question:"'Não ___ disse a verdade.' ¿Colocación correcta?", options:["disse-lhe","lhe disse","disse lhe","lhe-disse"], answer:1, explanation:"Con negação → próclise: Não LHE disse.", hint:"Con negación → pronombre ANTES del verbo" },
              { id:"C2-U1-L1-E4", type:"free_writing", skill:"writing", question:"Escribe la introducción de un ensayo académico (6-8 oraciones) con tesis clara.", prompt:"Tema: A língua como instrumento de poder e identidade no Brasil contemporâneo", hint:"dato/citação → contexto → tese → antecipação dos argumentos" },
              { id:"C2-U1-L1-E5", type:"free_writing", skill:"writing", question:"Escribe el ensayo completo: introducción, 2 párrafos de desarrollo y conclusión. Mínimo 15 oraciones.", prompt:"A globalização homogeneizou ou enriqueceu a diversidade cultural brasileira?", hint:"Usa: haja vista · não obstante · outrossim · à guisa de conclusão · depreende-se que" }
            ]
          }
        ]
      }
    ]
  },
  Master: {
    units: [
      {
        id: "M-U1",
        title: "Sociolinguística e pesquisa",
        description: "Variación lingüística, historia del PB y análisis avanzado",
        lessons: [
          {
            id: "M-U1-L1",
            title: "Variação linguística no PB",
            dialogue: "Pesquisador: O que você nota de diferente no português dos paulistanos em relação aos cariocas?\nFalante: O paulistano fala mais fechado. O carioca tem aquele ixso no lugar de isso, e o R parece que vem da garganta. Já o gaúcho tem uma musicalidade toda diferente, com aquele bah e tchê.",
            content: "# Variação Linguística no Español Neutro\n\n## Tipos de variação\nDiatópica (geográfica):\nPaulistano: /r/ retroflexo caipira · vogais fechadas · ritmo acentual\nCarioca: /s/→[ʃ] (ixso=isso) · /r/ uvular · cara, mano\nNordestino: vogais abertas · ritmo silábico · oxente, vixe, cabra\nGaúcho: influência italiana/alemana · bah, tchê · entonação ascendente\n\nDiastrática (social): norma culta vs norma popular vs variedades vernáculas\nDiafásica (registro): formal → informal → coloquial → familiar → íntimo\n\n## Fenômenos fonológicos\nPalatalização: /t/→[tʃ] y /d/→[dʒ] ante /i/: tia=[tʃia] · dia=[dʒia]\nMonotongação: /ei/→[e]: beijo→[bejo] · peixe→[pexe]\nApócope: você→cê · para→pra · está→tá · estou→tô\n\n## Substratos históricos\n1. Línguas indígenas (Tupi-Guarani): mandioca · pipoca · jacaré · piranha\n2. Línguas africanas (Yorubá/Kimbundu): samba · capoeira · moleque · quiabo\n3. Imigrantes europeus s.XIX-XX: tchau (italiano) · influência fonológica sulista\n\n## PB vs Português Europeu (PE)\nPronome sujeito: PB=você · PE=tu\nObjeto direto: PB=Eu vi ela · PE=Eu vi-a\nFuturo: PB=Vou falar · PE=Falarei\nGerúndio: PB=Estou falando · PE=Estou a falar",
            exercises: [
              { id:"M-U1-L1-E1", type:"multiple_choice", skill:"culture", question:"¿Qué caracteriza fonológicamente al dialecto carioca?", options:["El /r/ retroflexo y vocales cerradas","El /s/ chiante y /r/ uvular","La entonación descendente","La influencia italiana"], answer:1, explanation:"El dialecto carioca: /s/→[ʃ] (ixso) y /r/ uvular. Exemplo: isso suena ixso.", hint:"/s/ que suena como sh y /r/ gutural" },
              { id:"M-U1-L1-E2", type:"fill_blank", skill:"culture", question:"La palabra 'jacaré' viene de la lengua ___.", answer:["tupi","tupi-guarani","indígena"], hint:"Lengua de los pueblos originarios del Brasil", explanation:"Jacaré viene del Tupi-Guaraní. También: mandioca, pipoca, abacaxi." },
              { id:"M-U1-L1-E3", type:"multiple_choice", skill:"grammar", question:"El fenómeno /t/→[tʃ] antes de /i/ se llama:", options:["Monotongação","Apócope","Palatalização","Rotacismo"], answer:2, explanation:"Palatalización: /t/→[tʃ] y /d/→[dʒ] ante /i/. Tia=[tʃia], dia=[dʒia].", hint:"Cambio de oclusiva a africada palatal" },
              { id:"M-U1-L1-E4", type:"free_writing", skill:"writing", question:"Analiza sociolingüísticamente este fenómeno con rigor académico (8-10 oraciones).", prompt:"A palatalização das oclusivas /t/ e /d/ no português brasileiro urbano e sua relação com prestígio linguístico e identidade social.", hint:"distribuição geográfica · estratificação social · estigma/prestígio · implicações pedagógicas" },
              { id:"M-U1-L1-E5", type:"free_writing", skill:"writing", question:"Redacta el abstract de una propuesta de investigación lingüística (10-12 oraciones).", prompt:"Tema libre sobre um fenômeno do PB. Estrutura: objeto → justificativa → objetivos → metodologia → resultados esperados.", hint:"o presente trabalho objetiva · a metodologia será · espera-se contribuir · os resultados sugerem" }
            ]
          }
        ]
      }
    ]
  }
};
