// A1 — Unidades 1 y 2
export const A1_U1_U2 = [
  {
    id: "A1-U1",
    title: "Primeiros contatos",
    description: "Saludos, presentaciones y datos personales",
    lessons: [
      {
        id: "A1-U1-L1",
        title: "Cumprimentos e saudações",
        shadowing: "Lê 3 vezes em voz alta, imitando o ritmo brasileiro:\n\n— Oi! Bom dia! Como vai você?\n— Bom dia! Tudo bem, obrigado! E você?\n— Tudo ótimo! Me chamo Carlos. Prazer!\n— Prazer! Eu sou a Ana. De onde você é?\n— Sou do Brasil, de São Paulo. E você?\n— Sou da Argentina, mas moro aqui no Rio.\n— Que legal! Até logo, Ana!\n— Tchau, Carlos! Até mais!",
        memoryPhrases: ["Bom dia! Como vai você?","Tudo bem, obrigado!","Me chamo... Prazer!","De onde você é?","Até logo! Tchau!"],
        oralProduction: "SITUAÇÃO ORAL: Você chega ao trabalho e encontra um colega novo. Apresente-se em voz alta: nome, origem, como você está. Mínimo 4 frases. Repita até sair natural, sem olhar para as notas.",
        content: "# Cumprimentos e Saudações\n\n## As saudações do dia\nBom dia! = Buenos días (hasta las 12h)\nBoa tarde! = Buenas tardes (12h-18h)\nBoa noite! = Buenas noches (después de 18h)\nOi! / Olá! = ¡Hola!\nTchau! / Até logo! = ¡Chau! / ¡Hasta luego!\n\n## Perguntar e responder\nComo vai você? / Tudo bem? = ¿Cómo estás?\nTudo bem! / Tudo ótimo! / Mais ou menos.\n\n## Apresentação\nMeu nome é... / Me chamo... = Me llamo...\nPrazer! = ¡Mucho gusto!\nIgualmente! / De onde você é? / Sou do/da...\n\n## Pronúncia\nR inicial = H: Rio = HEE-oh\nã nasal: manhã = man-NYAH\nObrigado (hombre) / Obrigada (mujer)",
        exercises: [
          {id:"A1-U1-L1-E1",type:"multiple_choice",skill:"vocabulary",question:"Son las 9 de la mañana. ¿Cuál es el saludo correcto?",options:["Boa noite!","Boa tarde!","Bom dia!","Tchau!"],answer:2,explanation:"Bom dia se usa hasta las 12h.",hint:"El saludo de la mañana"},
          {id:"A1-U1-L1-E2",type:"multiple_choice",skill:"vocabulary",question:"Alguien te dice 'Tudo bem?' ¿Qué respondés?",options:["Bom dia!","Tudo bem, obrigado!","Me chamo Ana.","Prazer!"],answer:1,explanation:"Tudo bem, obrigado/a! es la respuesta más natural.",hint:"¿Cómo te sentís?"},
          {id:"A1-U1-L1-E3",type:"fill_blank",skill:"speaking",question:"Completa: '— Prazer! — ___!'",answer:["igualmente","prazer","muito prazer"],hint:"La misma emoción de vuelta",explanation:"Igualmente! o Prazer! son las respuestas naturales."},
          {id:"A1-U1-L1-E4",type:"translation",skill:"writing",question:"Traduce: '¡Hola! Me llamo Sofía. Soy de México. ¡Mucho gusto!'",answer:["oi","me chamo sofia","sou do méxico","prazer"],hint:"Oi · Me chamo... · Sou de/do/da... · Prazer!",explanation:"Oi! Me chamo Sofía. Sou do México. Prazer!"},
          {id:"A1-U1-L1-E5",type:"free_writing",skill:"writing",question:"Escribe un diálogo de presentación completo entre dos personas. Mínimo 6 intercambios.",prompt:"Incluí: saudação · nome · origem · como está · despedida",hint:"Seguí el modelo del shadowing"}
        ]
      },
      {
        id: "A1-U1-L2",
        title: "Pronomes pessoais e verbo SER/ESTAR",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Você é brasileiro?\n— Sou sim! Sou de São Paulo. E você?\n— Eu sou colombiana. Ela é minha amiga, é peruana.\n— E vocês moram aqui?\n— A gente mora aqui há dois anos.\n— Nós também somos novos aqui. Prazer!",
        memoryPhrases: ["Eu sou de...","Você é...?","A gente mora em...","Nós somos amigos.","Eles/Elas são..."],
        oralProduction: "SITUAÇÃO ORAL: Apresente três pessoas imaginárias em voz alta. Para cada uma diga: nome, origem e profissão. Use SER corretamente.",
        content: "# Pronomes e Verbos SER/ESTAR\n\n## Pronomes no Brasil\neu=yo · você=tú/usted (EL MÁS USADO) · a gente=nosotros informal\nele/ela=él/ella · nós=nosotros formal · vocês=ustedes · eles/elas=ellos/ellas\n\n> IMPORTANTE: En Brasil se usa VOCÊ para todos — amigos, jefes, desconocidos.\n> A GENTE es muy común y usa la 3ª persona singular.\n\n## Verbo SER\neu sou · você/a gente/ele/ela é · nós somos · vocês/eles/elas são\nUsos: identidade (Eu sou Ana) · origem (Sou do Brasil) · profissão (Ela é médica)\n\n## Verbo ESTAR\neu estou · você/a gente/ele/ela está · nós estamos · vocês/eles/elas estão\nUsos: estado temporal (Estou cansado) · lugar (Estamos em casa)\n\n## SER vs ESTAR\nSER = permanente: Eu sou alto. / Ela é médica.\nESTAR = temporário: Eu estou cansado. / Ela está doente.",
        exercises: [
          {id:"A1-U1-L2-E1",type:"multiple_choice",skill:"grammar",question:"Completa: 'Eu ___ brasileira.'",options:["está","são","sou","somos"],answer:2,explanation:"SER para EU = sou.",hint:"SER en primera persona singular"},
          {id:"A1-U1-L2-E2",type:"multiple_choice",skill:"grammar",question:"'A gente ___ cansada.' ¿Cuál es correcto?",options:["somos","são","é","está"],answer:3,explanation:"A gente + estado temporal = ESTÁ. Usa 3ª persona singular.",hint:"A gente + estado temporal → ESTAR"},
          {id:"A1-U1-L2-E3",type:"fill_blank",skill:"grammar",question:"'Eles ___ professores.' (ser)",answer:["são"],hint:"SER para vocês/eles/elas",explanation:"VOCÊS/ELES/ELAS → SÃO"},
          {id:"A1-U1-L2-E4",type:"multiple_choice",skill:"grammar",question:"'Ela ___ cansada hoje.' ¿SER o ESTAR?",options:["é","sou","está","estamos"],answer:2,explanation:"ESTAR para estado temporal.",hint:"¿Es permanente o temporal?"},
          {id:"A1-U1-L2-E5",type:"free_writing",skill:"writing",question:"Preséntate usando SER y ESTAR. 5 oraciones mínimo.",prompt:"Incluí: nome · origen · profesión · cómo estás hoy · una característica permanente",hint:"Eu sou... / Sou de... / Trabalho como... / Hoje estou... / Sou muito..."}
        ]
      },
      {
        id: "A1-U1-L3",
        title: "Números, datas e idade",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Quantos anos você tem?\n— Tenho vinte e oito anos. E você?\n— Eu tenho trinta e dois. Quando é seu aniversário?\n— É no dia quinze de março.\n— O meu é em novembro, no dia três.",
        memoryPhrases: ["Quantos anos você tem?","Tenho vinte e cinco anos.","Quando é seu aniversário?","É no dia... de...","Meu número é..."],
        oralProduction: "SITUAÇÃO ORAL: Diga em voz alta — sua idade, data de nascimento e a idade de dois familiares. Fale como se estivesse preenchendo um formulário. Repita 3 vezes.",
        content: "# Números, Datas e Idade\n\n## Números 0-20\n0=zero · 1=um/uma · 2=dois/duas · 3=três · 4=quatro · 5=cinco\n6=seis · 7=sete · 8=oito · 9=nove · 10=dez\n11=onze · 12=doze · 13=treze · 14=catorze · 15=quinze\n16=dezesseis · 17=dezessete · 18=dezoito · 19=dezenove · 20=vinte\n\n## Dezenas\n30=trinta · 40=quarenta · 50=cinquenta · 60=sessenta\n70=setenta · 80=oitenta · 90=noventa · 100=cem\nCombinando com E: 21=vinte e um · 35=trinta e cinco\n\n## Gênero: um carro / uma casa · dois livros / duas mesas\n\n## Idade — verbo TER\nQuantos anos você tem? → Eu tenho 25 anos.\nATENÇÃO: TER para edad, NUNCA SER.\n\n## Datas e meses\njaneiro · fevereiro · março · abril · maio · junho\njulho · agosto · setembro · outubro · novembro · dezembro\n\n## Dias da semana\nsegunda · terça · quarta · quinta · sexta · sábado · domingo",
        exercises: [
          {id:"A1-U1-L3-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice el número 15?",options:["quatorze","quinze","dezesseis","cinquenta"],answer:1,explanation:"Quinze = 15.",hint:"Entre 14 y 16"},
          {id:"A1-U1-L3-E2",type:"fill_blank",skill:"vocabulary",question:"Escribe en português: 35",answer:["trinta e cinco"],hint:"Treinta y cinco con E en el medio",explanation:"35 = trinta e cinco."},
          {id:"A1-U1-L3-E3",type:"multiple_choice",skill:"grammar",question:"'Eu ___ vinte e dois anos.'",options:["sou","tenho","tem","estou"],answer:1,explanation:"Para edad: TER. Eu TENHO.",hint:"Verbo TER para EU — nunca SER para edad"},
          {id:"A1-U1-L3-E4",type:"translation",skill:"writing",question:"Traduce: 'Hoy es martes tres de julio. Tengo 27 años.'",answer:["hoje é terça","três de julho","tenho vinte e sete anos"],hint:"Hoje é + día · número + de + mês · tenho + número + anos",explanation:"Hoje é terça-feira, dia três de julho. Tenho vinte e sete anos."},
          {id:"A1-U1-L3-E5",type:"free_writing",skill:"writing",question:"Escribe sobre vos: edad, fecha de nacimiento y la edad de 2 familiares.",prompt:"Eu tenho... anos. / Nasci no dia... de... / Minha mãe/meu pai tem... anos.",hint:"Nasci = nací"}
        ]
      },
      {
        id: "A1-U1-L4",
        title: "As profissões e ocupações",
        shadowing: "Lê 3 vezes em voz alta:\n\n— O que você faz?\n— Sou médica. Trabalho num hospital aqui no centro.\n— E seu marido?\n— Ele é professor de português. Ensina numa escola pública.\n— E seus filhos?\n— Minha filha é engenheira. O mais novo ainda é estudante.",
        memoryPhrases: ["O que você faz?","Sou médico/a.","Trabalho numa empresa.","Ele/Ela é professor/a.","Ainda sou estudante."],
        oralProduction: "SITUAÇÃO ORAL: Fale sobre a profissão de 3 pessoas da sua família. Use SER e TRABALHAR. Mínimo 5 frases.",
        content: "# As Profissões\n\n## Profissões comuns\nmédico/a · professor/a · engenheiro/a · advogado/a\nenfermeiro/a · arquiteto/a · psicólogo/a · dentista\ncozinheiro/a · motorista · vendedor/a · gerente\ndesigner · programador/a · estudante · aposentado/a\n\n## Como perguntar\nO que você faz? = ¿Qué hacés?\nOnde você trabalha? = ¿Dónde trabajás?\n\n## Como responder\nSou + profissão: Sou médica. / Sou professor.\nTrabalho em/numa/num... = Trabajo en...\n\n## Onde se trabalha\nnum hospital · numa escola · numa empresa\nnum escritório · num restaurante · em casa\n\n## Concordância\n-o/-a: médico/médica · professor/professora\n-ista: dentista (invariable)\n-nte: estudante (invariable)",
        exercises: [
          {id:"A1-U1-L4-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'enfermera' en português?",options:["médica","enfermeira","professora","advogada"],answer:1,explanation:"Enfermeira = enfermera.",hint:"Cuida enfermos en el hospital"},
          {id:"A1-U1-L4-E2",type:"fill_blank",skill:"grammar",question:"'O que você ___?' (hacer — para preguntar la profesión)",answer:["faz"],hint:"FAZER para você",explanation:"FAZER para você: O que você FAZ?"},
          {id:"A1-U1-L4-E3",type:"multiple_choice",skill:"grammar",question:"'Ela ___ num hospital.' (trabajar — presente)",options:["trabalha","trabalho","trabalhamos","trabalham"],answer:0,explanation:"TRABALHAR para ela: TRABALHA.",hint:"Verbo -AR para ela → -a"},
          {id:"A1-U1-L4-E4",type:"translation",skill:"writing",question:"Traduce: 'Soy ingeniero. Trabajo en una empresa grande en São Paulo.'",answer:["sou engenheiro","trabalho numa empresa grande","em são paulo"],hint:"Sou + profissão · trabalho numa/num...",explanation:"Sou engenheiro. Trabalho numa empresa grande em São Paulo."},
          {id:"A1-U1-L4-E5",type:"free_writing",skill:"writing",question:"Describe tu trabajo o estudios actuales. Mínimo 4 oraciones.",prompt:"Sou... / Trabalho em/numa... / Estudo... na... / Meu horário é...",hint:"Usa: sou · trabalho · estudo · fico em casa"}
        ]
      },
      {
        id: "A1-U1-L5",
        title: "O alfabeto e a soletração",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Como você soletra seu nome?\n— M-A-R-C-E-L-O. Marcelo.\n— E seu sobrenome?\n— S-I-L-V-A. Silva.\n— Seu email?\n— marcelo ponto silva arroba gmail ponto com\n— Você tem WhatsApp?\n— Tenho sim! Mesmo número do celular.",
        memoryPhrases: ["Como você soletra?","Meu nome é... — M-A-R-I-A","Meu email é...","Tenho WhatsApp sim!","Pode me mandar mensagem."],
        oralProduction: "SITUAÇÃO ORAL: Imagina que estás preenchendo um formulário por telefone. Diga em voz alta: seu nome completo soletrado, email e número de celular. Repita 3 vezes.",
        content: "# O Alfabeto e a Soletração\n\n## O Alfabeto\nA(á) B(bê) C(cê) D(dê) E(é) F(éfe) G(gê) H(agá) I(i) J(jota)\nK(cá) L(ele) M(eme) N(ene) O(ó) P(pê) Q(quê) R(erre) S(esse) T(tê)\nU(u) V(vê) W(dáblio) X(xis) Y(ípsilon) Z(zê)\n\n## Sons especiais\nã/ã = nasal: pão, manhã\nç = s suave: açúcar, França\nlh = como ll: trabalho, filho\nnh = como ñ: manhã, vinho\n\n## Contatos digitais\narroba = @ · ponto = . · traço = - · sublinhado = _\n\n## Frases úteis\nPode repetir? = ¿Podés repetir?\nMais devagar, por favor. = Más despacio.\nNão entendi. = No entendí.\nComo se escreve? = ¿Cómo se escribe?",
        exercises: [
          {id:"A1-U1-L5-E1",type:"multiple_choice",skill:"pronunciation",question:"¿Cómo se dice '@' en português?",options:["at","ponto","arroba","traço"],answer:2,explanation:"@ = arroba. Ponto = punto (.), Traço = guión (-).",hint:"Es igual que en español"},
          {id:"A1-U1-L5-E2",type:"fill_blank",skill:"vocabulary",question:"'Pode ___? Não entendi.' (repetir)",answer:["repetir"],hint:"Pedir que repitan algo",explanation:"Pode repetir? = ¿Podés repetir?"},
          {id:"A1-U1-L5-E3",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'Más despacio, por favor'?",options:["Mais rápido, por favor.","Mais devagar, por favor.","Pode repetir?","Não entendi."],answer:1,explanation:"Mais devagar = más despacio.",hint:"Devagar = despacio/lento"},
          {id:"A1-U1-L5-E4",type:"translation",skill:"writing",question:"Traduce: 'Mi email es mariana ponto costa arroba gmail ponto com'",answer:["meu email é mariana ponto costa arroba gmail ponto com"],hint:"ponto=punto · arroba=@",explanation:"Meu email é mariana ponto costa arroba gmail ponto com."},
          {id:"A1-U1-L5-E5",type:"free_writing",skill:"writing",question:"Escribí un mensaje presentándote por WhatsApp. Nombre, origen, un dato de contacto.",prompt:"Oi! Me chamo... / Sou de... / Meu email é... / Pode me chamar no WhatsApp.",hint:"Chamar = llamar"}
        ]
      }
    ]
  },
  {
    id: "A1-U2",
    title: "Descrição pessoal e família",
    description: "Colores, descripción física y familia brasileña",
    lessons: [
      {
        id: "A1-U2-L1",
        title: "Cores e adjetivos básicos",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Como é seu apartamento?\n— É pequeno mas muito bonito! As paredes são brancas e o sofá é azul.\n— E seu quarto?\n— Meu quarto é verde. Tenho uma cama grande e uma janela enorme.\n— A minha casa é toda amarela por fora.\n— Que alegre! Amarelo é uma cor muito brasileira!",
        memoryPhrases: ["As paredes são brancas.","O sofá é azul.","Que bonito/a!","É grande/pequeno/a.","Que alegre!"],
        oralProduction: "SITUAÇÃO ORAL: Descreva o lugar onde você está agora — cores das paredes, móveis, roupas que está usando. Mínimo 5 frases com cores e adjetivos.",
        content: "# Cores e Adjetivos Básicos\n\n## As cores\nvermelho/a=rojo · azul=azul · verde=verde · amarelo/a=amarillo\nbranco/a=blanco · preto/a=negro · rosa=rosa · laranja=naranja\nroxo/a=morado · cinza=gris · marrom=marrón · bege=beige\n\n## Concordância\nLas cores concordam com o substantivo:\num carro vermelho / uma camisa vermelha\nCores INVARIÁVEIS (no cambian): azul · verde · rosa · laranja · cinza · marrom\n\n## Adjetivos essenciais\ngrande/pequeno/a · bonito/a/feio/a · novo/a/velho/a\nbom/boa/ruim · rápido/a/lento/a · alto/a/baixo/a\nlimpo/a/sujo/a · barato/a/caro/a\n\n## Posição: DESPUÉS del sustantivo\num carro vermelho (no: un vermelho carro)\nExceção: énfase → Um lindo dia! / Uma bela cidade!",
        exercises: [
          {id:"A1-U2-L1-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'negro' en português?",options:["roxo","cinza","marrom","preto"],answer:3,explanation:"Preto/a = negro/a en PB.",hint:"El opuesto de branco"},
          {id:"A1-U2-L1-E2",type:"multiple_choice",skill:"grammar",question:"'As paredes são ___.' (azul — plural)",options:["azulas","azules","azuis","azul"],answer:2,explanation:"Azul en plural = AZUIS.",hint:"Azul + plural = terminación especial -is"},
          {id:"A1-U2-L1-E3",type:"fill_blank",skill:"grammar",question:"'O carro é ___ e ___.' (rojo y nuevo)",answer:["vermelho e novo","novo e vermelho"],hint:"vermelho=rojo · novo=nuevo — ambos masculinos",explanation:"O carro é vermelho e novo."},
          {id:"A1-U2-L1-E4",type:"translation",skill:"writing",question:"Traduce: 'Mi apartamento es pequeño pero bonito. Las paredes son blancas y los muebles son marrones.'",answer:["meu apartamento é pequeno mas bonito","as paredes são brancas","os móveis são marrons"],hint:"mas=pero · paredes=paredes · móveis=muebles · marrom plural=marrons",explanation:"Meu apartamento é pequeno mas bonito. As paredes são brancas e os móveis são marrons."},
          {id:"A1-U2-L1-E5",type:"free_writing",skill:"writing",question:"Describe tu lugar favorito usando al menos 6 adjetivos y 4 colores diferentes.",prompt:"Meu lugar favorito é... porque é... / As cores são... / É um lugar...",hint:"Recordá: adjetivos van DESPUÉS del sustantivo"}
        ]
      },
      {
        id: "A1-U2-L2",
        title: "Descrição física das pessoas",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Como é sua melhor amiga?\n— Ela é alta e magra. Tem cabelo longo e cacheado, cor de mel.\n— E os olhos?\n— Tem olhos castanhos muito expressivos. E um sorriso lindo!\n— E você, como é?\n— Sou mais baixinha, tenho cabelo curto e preto, e olhos escuros.",
        memoryPhrases: ["Como é você fisicamente?","Tenho cabelo curto/longo.","Tenho olhos castanhos/azuis.","Sou alto/a e magro/a.","Ele/Ela é bonito/a."],
        oralProduction: "SITUAÇÃO ORAL: Descreva fisicamente 3 pessoas: você mesmo/a, um familiar e uma celebridade. Use TER para cabelo e olhos, SER para características gerais.",
        content: "# Descrição Física\n\n## Estatura e corpo\nalto/a · baixo/a · magro/a · gordo/a · forte · musculoso/a\n\n## Cabelo — usando TER\nCor: loiro=rubio · castanho=castaño · preto=negro · ruivo=pelirrojo\nTamanho: curto=corto · longo=largo · médio=medio\nTipo: liso=liso · ondulado · cacheado=rizado · crespo=muy rizado\n\nEu tenho cabelo longo e liso. / Ela tem cabelo curto e cacheado.\n\n## Olhos — usando TER\nTem olhos azuis/verdes/castanhos/pretos/claros/escuros.\n\n## SER vs TER para descrever\nSER + adjetivo: Ela é alta e magra. / Ele é bonito.\nTER + sustantivo: Ela tem olhos azuis. / Ele tem barba.\n\n## Expressões brasileiras\nQue lindo/a! · Tem cara de... · Parece com...",
        exercises: [
          {id:"A1-U2-L2-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'cabello rizado' en português?",options:["cabelo liso","cabelo ondulado","cabelo cacheado","cabelo curto"],answer:2,explanation:"Cabelo cacheado = cabello rizado.",hint:"El tipo con rizos definidos"},
          {id:"A1-U2-L2-E2",type:"fill_blank",skill:"grammar",question:"'Ela ___ olhos verdes.' (tener)",answer:["tem"],hint:"Verbo TER para ela/você",explanation:"TER para ella: Ela TEM olhos verdes."},
          {id:"A1-U2-L2-E3",type:"multiple_choice",skill:"grammar",question:"¿Cuál es correcto para describir físicamente?",options:["Ela tem alta.","Ela é olhos azuis.","Ela é alta e tem olhos azuis.","Ela tem é alta."],answer:2,explanation:"SER + adjetivo (alta) y TER + sustantivo (olhos azuis).",hint:"SER para características · TER para partes del cuerpo"},
          {id:"A1-U2-L2-E4",type:"translation",skill:"writing",question:"Traduce: 'Mi hermano es alto y musculoso. Tiene cabello negro corto y ojos castanhos.'",answer:["meu irmão é alto e musculoso","tem cabelo preto e curto","tem olhos castanhos"],hint:"irmão=hermano · musculoso · preto=negro · curto=corto",explanation:"Meu irmão é alto e musculoso. Tem cabelo preto e curto e tem olhos castanhos."},
          {id:"A1-U2-L2-E5",type:"free_writing",skill:"writing",question:"Describe físicamente a tu persona favorita con todos los detalles. Mínimo 6 oraciones.",prompt:"Minha pessoa favorita é... / Ela/Ele é... / Tem cabelo... / Tem olhos...",hint:"Combina SER + adjetivos y TER + sustantivos"}
        ]
      },
      {
        id: "A1-U2-L3",
        title: "A família brasileira",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Você tem uma família grande?\n— Tenho sim! Meus pais moram em São Paulo com minha irmã mais nova.\n— E seus avós?\n— Minha avó mora com a gente. Vovó tem oitenta anos e é muito animada!\n— E você tem filhos?\n— Ainda não. Mas tenho um sobrinho de três anos. É a alegria da família!",
        memoryPhrases: ["Minha família tem... pessoas.","Meus pais moram em...","Minha avó tem... anos.","Tenho dois irmãos.","Ainda não tenho filhos."],
        oralProduction: "SITUAÇÃO ORAL: Apresente sua família para um amigo brasileiro. Fale sobre 4 membros: nome, idade, onde moram e o que fazem.",
        content: "# A Família Brasileira\n\n## Membros da família\npai=papá · mãe=mamá · filho/filha=hijo/hija\nirmão/irmã=hermano/hermana · avô/avó=abuelo/abuela\ntio/tia · primo/prima · sobrinho/sobrinha\nmarido/esposo · esposa/mulher · namorado/a=novio/a\ncunhado/a=cuñado/a · sogro/sogra=suegro/suegra\n\n## Possessivos\nmeu/minha=mi · meus/minhas=mis · seu/sua=tu/su\nnosso/nossa=nuestro · dele/dela=de él/de ella\n\n> DICA: Prefira DELE/DELA para evitar ambigüedad:\n> O carro dele = su auto (de él) — muy claro\n\n## Cultura\nFamília é tudo! · Churrasco de família (tradição)\nVovô/Vovó = forma cariñosa · Fofo/a = tierno/a",
        exercises: [
          {id:"A1-U2-L3-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'hermana' en português?",options:["irmão","irmã","filha","sobrinha"],answer:1,explanation:"Irmã = hermana. Irmão = hermano.",hint:"Con acento til ~ en la ã"},
          {id:"A1-U2-L3-E2",type:"fill_blank",skill:"vocabulary",question:"'Minha ___ tem oitenta anos.' (abuela)",answer:["avó"],hint:"La abuela",explanation:"Avó=abuela. Avô=abuelo. Diferencia en el acento."},
          {id:"A1-U2-L3-E3",type:"multiple_choice",skill:"grammar",question:"'O carro ___ é azul.' (de él — forma preferida en PB)",options:["seu","dele","nosso","meu"],answer:1,explanation:"DELE es la forma preferida en PB oral para de él.",hint:"Forma coloquial preferida en Brasil"},
          {id:"A1-U2-L3-E4",type:"translation",skill:"writing",question:"Traduce: 'Mi familia es grande. Tengo tres hermanos y dos hermanas. Mis padres viven en Brasil.'",answer:["minha família é grande","tenho três irmãos e duas irmãs","meus pais moram no brasil"],hint:"minha família · tenho + número · irmão/irmã · meus pais moram em/no",explanation:"Minha família é grande. Tenho três irmãos e duas irmãs. Meus pais moram no Brasil."},
          {id:"A1-U2-L3-E5",type:"free_writing",skill:"writing",question:"Describe tu familia completa: cuántos son, nombres, edades, dónde viven y qué hacen. Mínimo 7 oraciones.",prompt:"Minha família tem... pessoas. / Meu/minha ___ se chama... / Tem... anos. / Mora em...",hint:"Usa possessivos: meu/minha/meus/minhas · dele/dela"}
        ]
      },
      {
        id: "A1-U2-L4",
        title: "A casa e os cômodos",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Como é sua casa?\n— É um apartamento no terceiro andar. Tem sala, dois quartos, cozinha e dois banheiros.\n— Tem varanda?\n— Tem sim! A varanda é meu lugar favorito. Dá para ver o mar.\n— Que maravilha! Fica em que bairro?\n— No Leblon, pertinho da praia.",
        memoryPhrases: ["Minha casa tem... quartos.","A cozinha fica na frente.","O banheiro fica ao lado.","Meu lugar favorito é a varanda.","Fica no... andar."],
        oralProduction: "SITUAÇÃO ORAL: Descreva sua casa pelo telefone para um amigo. Mencione todos os cômodos, as cores e seu lugar favorito. Mínimo 6 frases.",
        content: "# A Casa e os Cômodos\n\n## Os cômodos\nsala de estar · sala de jantar=comedor · quarto=habitación\ncozinha=cocina · banheiro=baño · garagem=garaje\nvaranda=balcón · jardim=jardín · quintal=patio\nescritório=oficina · área de serviço=lavadero\n\n## Móveis e objetos\ncama · sofá · poltrona=sillón · mesa · cadeira=silla\narmário · geladeira=nevera · fogão=cocina (aparato)\njanela=ventana · porta=puerta · espelho=espejo\n\n## Preposições de lugar\nem/na/no=en · perto de=cerca de · longe de=lejos de\nna frente de=delante · atrás de=detrás · ao lado de=al lado\nem cima de=encima · embaixo de=debajo · entre=entre\n\n## Contrações obrigatórias com EM\nem + o = no · em + a = na · em + os = nos · em + as = nas\nA cama está NO quarto. / A geladeira está NA cozinha.",
        exercises: [
          {id:"A1-U2-L4-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'nevera' en português?",options:["fogão","geladeira","armário","janela"],answer:1,explanation:"Geladeira=nevera. Viene de GELADO=helado.",hint:"Viene de gelado (frío)"},
          {id:"A1-U2-L4-E2",type:"fill_blank",skill:"grammar",question:"'A cama está ___ quarto.' (en el — contracción obligatoria)",answer:["no"],hint:"em + o = ?",explanation:"em + o = NO. Contracción obligatoria."},
          {id:"A1-U2-L4-E3",type:"multiple_choice",skill:"vocabulary",question:"¿Qué es una 'varanda'?",options:["garaje","jardín","balcón/terraza","comedor"],answer:2,explanation:"Varanda = balcón o terraza.",hint:"Lugar al aire libre en el apartamento"},
          {id:"A1-U2-L4-E4",type:"translation",skill:"writing",question:"Traduce: 'Mi casa tiene tres habitaciones, una cocina grande y un jardín bonito.'",answer:["minha casa tem três quartos","uma cozinha grande","um jardim bonito"],hint:"quartos · cozinha · jardim",explanation:"Minha casa tem três quartos, uma cozinha grande e um jardim bonito."},
          {id:"A1-U2-L4-E5",type:"free_writing",skill:"writing",question:"Describe tu casa o apartamento ideal. ¿Cómo sería tu casa perfecta? Usá preposiciones de lugar.",prompt:"Minha casa ideal seria... / Teria... quartos / A cozinha ficaria... / Haveria uma varanda...",hint:"seria=sería · teria=tendría · ficaria=quedaría"}
        ]
      },
      {
        id: "A1-U2-L5",
        title: "As roupas e as compras",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Posso te ajudar?\n— Sim, estou procurando uma camisa social.\n— Que tamanho você usa?\n— Médio. Você tem em azul escuro?\n— Tenho sim! Essa aqui. O que você acha?\n— Gostei! Qual é o preço?\n— Está em promoção: oitenta reais.\n— Ótimo! Vou levar essa.",
        memoryPhrases: ["Posso te ajudar?","Estou procurando...","Que tamanho você usa?","Qual é o preço?","Vou levar esse/essa."],
        oralProduction: "SITUAÇÃO ORAL: Você está numa loja. Simule a conversa: diga o que procura, o tamanho, a cor preferida e pergunte o preço. Mínimo 6 falas.",
        content: "# As Roupas e Compras\n\n## Peças de roupa\ncamisa · camiseta · blusa · casaco=abrigo · jaqueta=chaqueta\ncalça=pantalón · bermuda=shorts · vestido · saia=falda\nmeia=calcetín · sapato=zapato · tênis=zapatilla · sandália\ncinto=cinturón · bolsa=cartera · mochila\n\n## Tamanhos\nPP=XS · P=S · M=M · G=L · GG=XL\n\n## Nas compras\nPosso te ajudar? · Estou procurando...\nQue tamanho você usa? · Você tem em...?\nQual é o preço? / Quanto custa?\nEm promoção=en oferta · Em conta=a buen precio\nVou levar! · Não vou levar, obrigado/a.\nPosso pagar com cartão? · Pix=transferencia instantánea",
        exercises: [
          {id:"A1-U2-L5-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'zapatillas/tenis' en português?",options:["sapato","sandália","tênis","meia"],answer:2,explanation:"Tênis = zapatillas deportivas.",hint:"Las zapatillas deportivas"},
          {id:"A1-U2-L5-E2",type:"fill_blank",skill:"vocabulary",question:"'Estou ___ uma calça jeans azul.' (buscando)",answer:["procurando"],hint:"Verbo PROCURAR en gerundio",explanation:"Estou procurando = estoy buscando."},
          {id:"A1-U2-L5-E3",type:"multiple_choice",skill:"vocabulary",question:"¿Qué significa 'Em promoção'?",options:["A precio completo","En oferta/descuento","Sin stock","Nuevo modelo"],answer:1,explanation:"Em promoção = en oferta, con descuento.",hint:"Precio rebajado"},
          {id:"A1-U2-L5-E4",type:"translation",skill:"writing",question:"Traduce: 'Cuánto cuesta ese vestido rojo? ¿Tienen algo más barato? ¿Puedo pagar con Pix?'",answer:["quanto custa esse vestido vermelho","tem algo mais em conta","posso pagar com pix"],hint:"custa=cuesta · em conta=barato · posso pagar com=puedo pagar con",explanation:"Quanto custa esse vestido vermelho? Tem algo mais em conta? Posso pagar com Pix?"},
          {id:"A1-U2-L5-E5",type:"free_writing",skill:"writing",question:"Describí tu ropa favorita y tu estilo personal. ¿Qué usás en diferentes situaciones? Mínimo 5 oraciones.",prompt:"Minha roupa favorita é... / No trabalho uso... / No fim de semana prefiro... / Gosto de cores...",hint:"Usa: usar · preferir · gostar de · vestir"}
        ]
      }
    ]
  }
];
