// A1 — Unidades 3 y 4
export const A1_U3_U4 = [
  {
    id: "A1-U3",
    title: "Comida, rotina e tempo",
    description: "Alimentación brasileña, rutina diaria y el tiempo",
    lessons: [
      {
        id: "A1-U3-L1",
        title: "A comida brasileira",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Você já comeu feijoada?\n— Ainda não! Como é?\n— É incrível! Feijão preto com várias carnes, arroz, couve e laranja.\n— Parece pesado!\n— É, mas delicioso! É o prato nacional do Brasil.\n— E o que você recomenda para começar?\n— Começa com pão de queijo e suco de maracujá. Você vai amar!",
        memoryPhrases: ["Você já comeu...?","Ainda não! Como é?","É delicioso/a!","O que você recomenda?","Que vontade!"],
        oralProduction: "SITUAÇÃO ORAL: Um amigo quer te ensinar sobre comida brasileira. Você faz perguntas sobre 3 pratos que não conhece. Simule os dois lados da conversa. Mínimo 8 falas.",
        content: "# A Comida Brasileira\n\n## Pratos típicos\nfeijoada=plato nacional (feijão preto con carnes)\narroz e feijão=base de toda refeição\nchurrasco=asado · pão de queijo=pan de queso\nbrigadeiro=dulce de chocolate · açaí · coxinha=croqueta de pollo\ntapioca · pastel=empanada frita\n\n## Bebidas\nágua · suco=jugo · vitamina=batido con leche\ncafé · leite · cerveja · caipirinha\nrefrigerante=refresco · água de coco\n\n## Frutas brasileiras\nmaracujá=maracuyá · goiaba=guayaba · manga · abacaxi=piña\ncaju=marañón · açaí · jambo · cupuaçu\n\n## No restaurante\nO cardápio, por favor. · Quero pedir...\nEstá delicioso! · A conta, por favor.\n10% de gorjeta=10% de propina (comum no Brasil)",
        exercises: [
          {id:"A1-U3-L1-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cuál es el plato nacional brasileño?",options:["churrasco","coxinha","feijoada","tapioca"],answer:2,explanation:"Feijoada é o prato nacional: feijão preto com carnes.",hint:"Feijão preto con carnes"},
          {id:"A1-U3-L1-E2",type:"fill_blank",skill:"vocabulary",question:"¿Cómo se dice 'jugo/zumo' en português?",answer:["suco"],hint:"Empieza con S",explanation:"Suco = jugo/zumo."},
          {id:"A1-U3-L1-E3",type:"multiple_choice",skill:"grammar",question:"'Eu ___ de feijoada.' (gustar de)",options:["gosto","gosta","gostas","gostamos"],answer:0,explanation:"GOSTAR para EU = GOSTO. Siempre con DE.",hint:"GOSTAR para EU — siempre con DE"},
          {id:"A1-U3-L1-E4",type:"translation",skill:"writing",question:"Traduce: 'Quiero pedir un jugo de maracuyá y un pan de queso, por favor.'",answer:["quero pedir um suco de maracujá","um pão de queijo","por favor"],hint:"quero pedir · suco de · pão de queijo",explanation:"Quero pedir um suco de maracujá e um pão de queijo, por favor."},
          {id:"A1-U3-L1-E5",type:"free_writing",skill:"writing",question:"Describí tus comidas favoritas y lo que comés en un día típico. Menciona al menos una comida brasileña. Mínimo 5 oraciones.",prompt:"Meu prato favorito é... / No café da manhã... / No almoço... / No jantar...",hint:"café da manhã=desayuno · almoço=almuerzo · jantar=cena"}
        ]
      },
      {
        id: "A1-U3-L2",
        title: "As horas e a rotina",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Que horas são?\n— São sete e meia da manhã.\n— Já? Preciso me levantar! A que horas você começa?\n— Começo às nove. Mas antes tomo banho, tomo café e levo os filhos na escola.\n— E que horas você almoça?\n— Geralmente ao meio-dia.",
        memoryPhrases: ["Que horas são?","São... e meia.","A que horas você...?","Começo às nove.","Geralmente às..."],
        oralProduction: "SITUAÇÃO ORAL: Descreva sua rotina diária completa com horários. Comece com acordar e termine com dormir. Use 8 verbos de rotina diferentes.",
        content: "# As Horas e a Rotina\n\n## As horas\nQue horas são? = ¿Qué hora es?\nSão duas horas. (plural para 2+) · É uma hora. (singular)\nÉ meio-dia. / É meia-noite.\ne meia=y media · e quinze=y cuarto\nem ponto=en punto · da manhã/tarde/noite\n\n## Verbos de rotina\nacordar=despertar · se levantar=levantarse\ntomar banho=ducharse · tomar café=desayunar\nalmoçar=almorzar · jantar=cenar · dormir\ntrabalhar · estudar · ir para · chegar · voltar\n\n## Marcadores de tempo\ncedo=temprano · tarde=tarde\nsempre · nunca · às vezes · geralmente\ntodos os dias · de vez em quando\nprimeiro · depois · em seguida · finalmente\n\n## A que horas?\nA que horas você acorda?\nEu acordo às seis da manhã.\nÀS = a las (a + as = às)",
        exercises: [
          {id:"A1-U3-L2-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'ducharse' en português?",options:["se vestir","acordar","tomar banho","almoçar"],answer:2,explanation:"Tomar banho = ducharse.",hint:"Literalmente tomar baño"},
          {id:"A1-U3-L2-E2",type:"fill_blank",skill:"grammar",question:"'___ sete horas da manhã.' (son las — para iniciar)",answer:["são"],hint:"¿Singular o plural para las 7?",explanation:"SÃO sete horas — plural para más de una hora."},
          {id:"A1-U3-L2-E3",type:"multiple_choice",skill:"grammar",question:"'Eu acordo ___ seis horas.' (a las)",options:["em","a","às","de"],answer:2,explanation:"Para horas: ÀS (a + as). Para la una: À UMA.",hint:"Contracción a + as = às"},
          {id:"A1-U3-L2-E4",type:"translation",skill:"writing",question:"Traduce: 'Me despierto a las 6, me ducho, desayuno y llego al trabajo a las 9 en punto.'",answer:["acordo às seis","tomo banho","tomo café da manhã","chego ao trabalho às nove em ponto"],hint:"acordo · tomo banho · tomo café da manhã · chego ao trabalho · em ponto",explanation:"Acordo às seis, tomo banho, tomo café da manhã e chego ao trabalho às nove em ponto."},
          {id:"A1-U3-L2-E5",type:"free_writing",skill:"writing",question:"Describí tu rutina diaria completa con horarios. Mínimo 7 oraciones.",prompt:"De manhã, às... / Depois... / Geralmente almoço... / À tarde... / À noite... / Durmo às...",hint:"Conectores: primeiro · depois · em seguida · finalmente"}
        ]
      },
      {
        id: "A1-U3-L3",
        title: "Os dias da semana e o calendário",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Você tem tempo na sexta à tarde?\n— Sexta não, tenho reunião. Que tal sábado de manhã?\n— Sábado funciona! Às dez?\n— Perfeito! Nos vemos sábado, dia vinte e três.\n— E na semana que vem você trabalha na segunda?\n— Segunda é feriado! Dia de Tiradentes.",
        memoryPhrases: ["Que dia é hoje?","Hoje é segunda-feira.","Na semana que vem...","No fim de semana...","É feriado!"],
        oralProduction: "SITUAÇÃO ORAL: Planifica em voz alta sua semana ideal. Menciona o que faria cada dia da semana. Use os dias corretamente.",
        content: "# Os Dias da Semana e o Calendário\n\n## Os dias\nsegunda-feira=lunes · terça-feira=martes · quarta-feira=miércoles\nquinta-feira=jueves · sexta-feira=viernes\nsábado=sábado · domingo=domingo\n\n> Em PB coloquial: segunda · terça · quarta · quinta · sexta\n\n## Como usar\nHoje é segunda-feira. · Amanhã é terça.\nNa segunda = el lunes próximo\nNa semana que vem = la semana que viene\nNo fim de semana = el fin de semana\n\n## As estações do Brasil\nprimavera (setembro-novembro) · verão (dezembro-fevereiro)\noutono (março-maio) · inverno (junho-agosto)\n\n> IMPORTANTE: El verano en Brasil es en DEZEMBRO/JANEIRO!\n\n## Feriados importantes\nCarnaval=febrero/marzo · Páscoa · Tiradentes=21 abril\nDia do Trabalho=1 mayo · Independência=7 setembro\nNatal=25 dezembro · Réveillon=31 dezembro",
        exercises: [
          {id:"A1-U3-L3-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Qué día es 'quarta-feira'?",options:["martes","miércoles","jueves","viernes"],answer:1,explanation:"Quarta-feira = miércoles. Segunda=lunes, Terça=martes, Quinta=jueves.",hint:"El cuarto día (quarta = cuarta)"},
          {id:"A1-U3-L3-E2",type:"fill_blank",skill:"vocabulary",question:"En Brasil el verano ocurre en el mes de ___ (diciembre en português).",answer:["dezembro"],hint:"El último mes del año",explanation:"Dezembro = diciembre. ¡El verano en Brasil es de dezembro a fevereiro!"},
          {id:"A1-U3-L3-E3",type:"multiple_choice",skill:"grammar",question:"'Tenho uma reunião ___ sexta.' (el viernes próximo)",options:["em","de","na","no"],answer:2,explanation:"NA sexta = el viernes (em + a = na).",hint:"em + a = NA (femenino)"},
          {id:"A1-U3-L3-E4",type:"translation",skill:"writing",question:"Traduce: 'Esta semana trabajo el lunes, miércoles y viernes. El fin de semana descanso.'",answer:["esta semana trabalho na segunda","na quarta","na sexta","no fim de semana descanso"],hint:"esta semana · na segunda/quarta/sexta · no fim de semana",explanation:"Esta semana trabalho na segunda, na quarta e na sexta. No fim de semana descanso."},
          {id:"A1-U3-L3-E5",type:"free_writing",skill:"writing",question:"Describí tu semana típica día a día. Incluí el fin de semana y mencioná las estaciones en Brasil vs tu país.",prompt:"Na segunda... / Na terça... / No fim de semana geralmente... / No verão brasileiro...",hint:"En Brasil el verão es en dezembro/janeiro/fevereiro"}
        ]
      },
      {
        id: "A1-U3-L4",
        title: "O tempo e o clima brasileiro",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Como está o tempo hoje em São Paulo?\n— Está nublado e um pouco frio. Uns dezoito graus.\n— Que diferente! Aqui no Rio está sol e calor, trinta e dois graus!\n— E vai chover?\n— A previsão diz que sim, à tarde. Rio no verão: sol de manhã e chuva à tarde!\n— Típico! Vou levar guarda-chuva então.",
        memoryPhrases: ["Como está o tempo?","Está sol e calor.","Está frio/quente.","Vai chover hoje?","A previsão diz que..."],
        oralProduction: "SITUAÇÃO ORAL: Descreva o clima do seu país em diferentes épocas. Compare com o clima brasileiro que você conhece. Mínimo 6 frases.",
        content: "# O Tempo e o Clima\n\n## Como descrever o tempo\nEstá sol. · Está quente. · Está frio. · Está nublado.\nEstá ventando. · Está chovendo. · Está nevando.\nTem sol. · Tem vento. · Tem neblina.\n\n## A temperatura\nQuantos graus está? / Que temperatura está?\nquente=caliente (25°C+) · ameno=agradable (18-24°C)\nfresco=fresco (12-17°C) · frio=frío (menos de 12°C)\n\n## O clima do Brasil\nAmazônia: calor e chuva o ano todo\nNordeste: sol e calor, com época seca\nSudeste (SP/RJ): quatro estações amenas\nSul: inverno frio, pode nevar em Curitiba!\n\n## Vocabulário essencial\nchuva=lluvia · tempestade=tormenta · raio=rayo\nnuvem=nube · céu=cielo · guarda-chuva=paraguas\nprevisão do tempo=pronóstico del tiempo",
        exercises: [
          {id:"A1-U3-L4-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'Hace calor' en português?",options:["Está quente.","Tem calor.","Faz calor.","É quente."],answer:0,explanation:"Está quente = Hace calor. En PB se usa ESTAR para el clima.",hint:"ESTAR para el tiempo atmosférico"},
          {id:"A1-U3-L4-E2",type:"fill_blank",skill:"vocabulary",question:"¿Cómo se dice 'paraguas' en português?",answer:["guarda-chuva"],hint:"Literalmente guarda (protege) la chuva (lluvia)",explanation:"Guarda-chuva = paraguas."},
          {id:"A1-U3-L4-E3",type:"multiple_choice",skill:"culture",question:"¿En qué región de Brasil puede nevar ocasionalmente?",options:["Amazônia","Nordeste","Rio de Janeiro","Sul (sur)"],answer:3,explanation:"El Sur de Brasil (Curitiba, Serra Gaúcha) puede tener nieve en invierno.",hint:"La región más fría de Brasil"},
          {id:"A1-U3-L4-E4",type:"translation",skill:"writing",question:"Traduce: 'Hoy está nublado y hace frío en São Paulo. La temperatura es de 15 grados. Va a llover por la tarde.'",answer:["hoje está nublado e frio em são paulo","a temperatura está a quinze graus","vai chover à tarde"],hint:"nublado · frio · quinze graus · vai chover · à tarde",explanation:"Hoje está nublado e frio em São Paulo. A temperatura está a quinze graus. Vai chover à tarde."},
          {id:"A1-U3-L4-E5",type:"free_writing",skill:"writing",question:"Describí el clima de tu ciudad a lo largo del año y comparalo con el clima brasileño. Mínimo 5 oraciones.",prompt:"Na minha cidade, no verão... / No inverno... / Em comparação, o Brasil... / O clima que mais me gusta é...",hint:"Usa: está · tem · vai chover/nevar · graus · quente/frio/ameno"}
        ]
      },
      {
        id: "A1-U3-L5",
        title: "Verbos IR, TER, FAZER, QUERER",
        shadowing: "Lê 3 vezes em voz alta:\n\n— O que você vai fazer no fim de semana?\n— Vou ao mercado sábado. Depois quero ir ao cinema.\n— Que filme você quer ver?\n— Não sei ainda. Você tem alguma sugestão?\n— Tem um filme brasileiro ótimo em cartaz.\n— Ótimo! Posso ir com você?\n— Claro! A gente vai juntos às três.",
        memoryPhrases: ["O que você vai fazer?","Vou ao mercado.","Quero ir ao cinema.","Você tem...?","A gente vai juntos."],
        oralProduction: "SITUAÇÃO ORAL: Planifique seu próximo fim de semana em voz alta. Use IR, TER, FAZER e QUERER pelo menos uma vez cada um. Mínimo 6 frases.",
        content: "# Verbos IR, TER, FAZER, QUERER\n\n## IR (ir)\neu vou · você/a gente/ele/ela vai · nós vamos · vocês/eles/elas vão\n\nIR + ao/à/para = ir a:\nVou ao mercado. (ao = a + o) · Vou à escola. (à = a + a)\n\nIR + infinitivo = futuro próximo (el más usado en PB oral):\nVou falar. = Voy a hablar.\nEla vai estudar. · A gente vai viajar.\n\n## TER (tener)\neu tenho · você/a gente/ele/ela tem · nós temos · vocês/eles/elas têm\nUsos: posesión · edad · existência (hay) · obligación (TER QUE)\nTenho que estudar. = Tengo que estudiar.\n\n## FAZER (hacer)\neu faço · você/a gente/ele/ela faz · nós fazemos · vocês/eles/elas fazem\nO que você faz? · Faço exercício todo dia.\n\n## QUERER (querer)\neu quero · você/a gente/ele/ela quer · nós queremos · vocês/eles/elas querem\nQuero... / Quer um café? / Não quero.",
        exercises: [
          {id:"A1-U3-L5-E1",type:"multiple_choice",skill:"grammar",question:"'Eu ___ ao mercado amanhã.' (ir)",options:["vai","vou","vamos","vão"],answer:1,explanation:"IR para EU = VOU.",hint:"IR en primera persona singular"},
          {id:"A1-U3-L5-E2",type:"fill_blank",skill:"grammar",question:"'A gente ___ viajar no verão.' (ir + infinitivo)",answer:["vai"],hint:"IR para a gente (= 3ª persona singular)",explanation:"A gente + IR = VAI. A gente vai viajar = nosotros vamos a viajar."},
          {id:"A1-U3-L5-E3",type:"multiple_choice",skill:"grammar",question:"¿Cuál expresa obligación con TER?",options:["Tenho um carro.","Tenho vinte anos.","Tem três pessoas aqui.","Tenho que estudar."],answer:3,explanation:"TER QUE + infinitivo = tener que (obligación).",hint:"TER QUE + infinitivo = obligación"},
          {id:"A1-U3-L5-E4",type:"translation",skill:"writing",question:"Traduce: 'Esta noche voy a hacer la cena. Quiero cocinar algo brasileño. ¿Tenés una receta?'",answer:["esta noite vou fazer o jantar","quero cozinhar algo brasileiro","você tem uma receita"],hint:"esta noite · vou fazer · cozinhar=cocinar · receita=receta",explanation:"Esta noite vou fazer o jantar. Quero cozinhar algo brasileiro. Você tem uma receita?"},
          {id:"A1-U3-L5-E5",type:"free_writing",skill:"writing",question:"Describí tus planes para la próxima semana usando IR + infinitivo, TER QUE, FAZER y QUERER. Mínimo 6 oraciones.",prompt:"Na próxima semana vou... / Tenho que... / Quero... / Também vou fazer...",hint:"IR + infinitivo es el futuro más natural en PB oral"}
        ]
      }
    ]
  },
  {
    id: "A1-U4",
    title: "Lugares, transportes e compras",
    description: "Ciudad, transporte, restaurante y dinero",
    lessons: [
      {
        id: "A1-U4-L1",
        title: "A cidade e os lugares",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Com licença! Onde fica o Museu do Ipiranga?\n— Fica no bairro do Ipiranga, perto do metrô.\n— Fica longe daqui?\n— Uns vinte minutos de metrô.\n— E tem como ir a pé?\n— Não recomendo, é longe demais. Melhor pegar o metrô na linha dois.\n— Muito obrigado!\n— De nada! Seja bem-vindo a São Paulo!",
        memoryPhrases: ["Com licença! Onde fica...?","Fica perto/longe daqui.","Uns... minutos a pé/de metrô.","Tem como ir a pé?","Muito obrigado/a!"],
        oralProduction: "SITUAÇÃO ORAL: Um turista te pede direções para 3 lugares. Dê as direções em português. Use vocabulário de localização.",
        content: "# A Cidade e os Lugares\n\n## Lugares essenciais\nbanco · farmácia · supermercado · hospital\nescola · universidade · restaurante · padaria=panadería\nlivraria=librería · shopping=centro comercial\npraia=playa · parque · praça=plaza · museu\n\n## Localizações\nno centro · no bairro de...\nperto de · longe de · na esquina de... com...\natrás de · na frente de · ao lado de · entre...\n\n## Perguntar direções\nCom licença! = ¡Disculpe!\nOnde fica...? = ¿Dónde queda?\nComo chego a...? = ¿Cómo llego a...?\nFica longe daqui? · Tem como ir a pé?\n\n## Dar direções\nVai reto/direto. · Vira à esquerda/direita.\nTraversa a rua. · Fica na esquina.\nFica no segundo quarteirão.",
        exercises: [
          {id:"A1-U4-L1-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice '¡Disculpe!' para llamar la atención en português?",options:["Desculpe!","Com licença!","Perdão!","Atenção!"],answer:1,explanation:"Com licença = disculpe (para interrumpir).",hint:"Para interrumpir cortésmente"},
          {id:"A1-U4-L1-E2",type:"fill_blank",skill:"vocabulary",question:"'Onde ___ o supermercado?' (quedar/estar)",answer:["fica"],hint:"Verbo FICAR para localización",explanation:"FICAR = quedar. Onde fica? = ¿Dónde queda?"},
          {id:"A1-U4-L1-E3",type:"multiple_choice",skill:"vocabulary",question:"¿Qué significa 'Vira à esquerda'?",options:["Seguí recto","Girá a la derecha","Cruzá la calle","Girá a la izquierda"],answer:3,explanation:"Vira à esquerda = girá a la izquierda.",hint:"Esquerda = izquierda"},
          {id:"A1-U4-L1-E4",type:"translation",skill:"writing",question:"Traduce: '¡Disculpe! ¿Dónde queda el hospital más cercano? ¿Está lejos de aquí?'",answer:["com licença","onde fica o hospital mais próximo","fica longe daqui"],hint:"com licença · onde fica · hospital mais próximo · longe daqui",explanation:"Com licença! Onde fica o hospital mais próximo? Fica longe daqui?"},
          {id:"A1-U4-L1-E5",type:"free_writing",skill:"writing",question:"Describí cómo llegar desde tu casa hasta 3 lugares importantes de tu ciudad. Usá vocabulario de direcciones.",prompt:"Para chegar ao/à... da minha casa: / Primeiro... / Depois... / Vira... / Fica...",hint:"Usa: vai reto · vira · atravessa · fica na esquina"}
        ]
      },
      {
        id: "A1-U4-L2",
        title: "O transporte público",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Como você vai trabalhar todo dia?\n— Pego o metrô até a estação República, depois caminho uns dez minutos.\n— Nunca tenta de Uber?\n— Às vezes, quando tô atrasada. Mas o metrô é mais rápido no horário de pico.\n— E de ônibus?\n— O ônibus demora muito. São Paulo é um caos no trânsito!\n— Eu prefiro andar de bicicleta quando posso.\n— Que saudável!",
        memoryPhrases: ["Como você vai trabalhar?","Pego o metrô/ônibus.","Ando a pé/de bicicleta.","O trânsito está um caos!","Prefiro pegar um Uber."],
        oralProduction: "SITUAÇÃO ORAL: Explique como é o transporte público na sua cidade. Compare com o que você sabe sobre São Paulo ou Rio. Mínimo 5 frases.",
        content: "# O Transporte Público\n\n## Meios de transporte\nmetrô=metro · ônibus=autobús · trem=tren · barca=ferry\ntáxi · Uber/99=app de transporte\nbicicleta · patinete elétrico · carro · moto · avião\n\n## Verbos de transporte\npegar + o = tomar: Pego o metrô. (tomo el metro)\nandar de + vehículo: Ando de bicicleta. / Andamos de carro.\nir de + vehículo: Vou de ônibus.\ncaminhar / ir a pé=caminar / ir a pie\n\n## Vocabulário\nestação=estación · ponto de ônibus=parada\npassagem=boleto · cartão de transporte=tarjeta\nhorário de pico=hora pico · trânsito=tráfico\n\n## Frases úteis\nQual linha vai para...? · Onde é a próxima parada?\nPreciso descer aqui. · Este ônibus passa em...?\n\n## Transporte em SP/RJ\nSão Paulo: pior trânsito do mundo! Metrô = mejor opción.\n99/Uber: muito populares en todo Brasil.",
        exercises: [
          {id:"A1-U4-L2-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'autobús' en português?",options:["trem","metrô","ônibus","barca"],answer:2,explanation:"Ônibus = autobús. Trem=tren, Metrô=metro.",hint:"Con acento en la Ô"},
          {id:"A1-U4-L2-E2",type:"fill_blank",skill:"grammar",question:"'Eu ___ de bicicleta para o trabalho.' (ir en bicicleta)",answer:["ando"],hint:"ANDAR DE + vehículo",explanation:"ANDAR DE + vehículo = ir en. Ando de bicicleta / de carro."},
          {id:"A1-U4-L2-E3",type:"multiple_choice",skill:"vocabulary",question:"¿Qué significa 'horário de pico'?",options:["Horario de almuerzo","Hora pico/rush hour","Horario de cierre","Último servicio"],answer:1,explanation:"Horário de pico = hora pico. El momento de más tráfico.",hint:"El momento de más tráfico"},
          {id:"A1-U4-L2-E4",type:"translation",skill:"writing",question:"Traduce: 'Normalmente tomo el metro hasta la estación central. Después camino cinco minutos hasta el trabajo.'",answer:["normalmente pego o metrô até a estação central","depois caminho cinco minutos até o trabalho"],hint:"pego o metrô=tomo el metro · até=hasta · caminho=camino",explanation:"Normalmente pego o metrô até a estação central. Depois caminho cinco minutos até o trabalho."},
          {id:"A1-U4-L2-E5",type:"free_writing",skill:"writing",question:"Describí cómo te transportás normalmente. ¿Qué cambiarías del sistema? Mínimo 5 oraciones.",prompt:"Normalmente eu... / Uso... / O transporte na minha cidade é... / Preferia que...",hint:"Compará con el transporte público brasileiro"}
        ]
      },
      {
        id: "A1-U4-L3",
        title: "Fazer compras e artesanato",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Bom dia! Posso te ajudar?\n— Sim! Estou procurando um presente para minha mãe.\n— Que tipo de presente?\n— Algo típico do Brasil. Ela adora artesanato.\n— Temos lindas peças de cerâmica e bijuterias.\n— Quanto custa essa aqui?\n— Esse colar é cento e cinquenta reais.\n— Tem algo mais em conta?\n— Temos essas pulseiras por quarenta reais.\n— Perfeito! Vou levar três.",
        memoryPhrases: ["Posso te ajudar?","Estou procurando...","Quanto custa isso?","Tem algo mais em conta?","Vou levar!"],
        oralProduction: "SITUAÇÃO ORAL: Você está numa feira de artesanato. Simule a conversa completa: pergunte sobre 2 produtos, o preço, se tem desconto e decida o que comprar. Mínimo 8 falas.",
        content: "# Fazer Compras\n\n## No comércio\nPosso te ajudar? · Estou só olhando.\nEstou procurando... · Você tem...?\nQual é o preço? / Quanto custa?\n\n## Os preços\nÉ barato/caro. · Tem desconto?\nEm promoção=en oferta · Em conta=a buen precio\nParcelado em... vezes=en cuotas de... · À vista=al contado\n\n## Formas de pagamento\nCartão de crédito/débito · Dinheiro=efectivo\nPix=transferencia instantánea (muy usado en Brasil!)\n\n## Produtos típicos brasileiros\nartesanato · cerâmica · bijuteria\npedras brasileiras · cachaça · café\n\n## Expressões\nVou levar! · Não vou levar, obrigado/a.\nPode embrulhar para presente? (¿Envolver para regalo?)\nTem troco para cem reais? (¿Tiene cambio para cien?)",
        exercises: [
          {id:"A1-U4-L3-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Qué significa 'Em conta' en el contexto de compras?",options:["En la cuenta bancaria","A buen precio/barato","En la factura","A crédito"],answer:1,explanation:"Em conta = a buen precio, barato. Tem algo mais em conta?",hint:"Precio accesible"},
          {id:"A1-U4-L3-E2",type:"fill_blank",skill:"vocabulary",question:"En Brasil el pago digital instantáneo más popular se llama ___.",answer:["pix"],hint:"Sistema de pagamento instantâneo del Banco Central",explanation:"Pix = sistema de pago instantáneo del Banco Central do Brasil."},
          {id:"A1-U4-L3-E3",type:"multiple_choice",skill:"grammar",question:"'Posso ___ com cartão?' (pagar)",options:["pago","paguei","pagar","pagando"],answer:2,explanation:"PODER + infinitivo: Posso PAGAR.",hint:"PODER + infinitivo"},
          {id:"A1-U4-L3-E4",type:"translation",skill:"writing",question:"Traduce: '¿Cuánto cuesta ese collar? ¿Tiene algo más barato? ¿Puedo pagar con Pix?'",answer:["quanto custa esse colar","tem algo mais em conta","posso pagar com pix"],hint:"colar=collar · em conta=barato · posso pagar com",explanation:"Quanto custa esse colar? Tem algo mais em conta? Posso pagar com Pix?"},
          {id:"A1-U4-L3-E5",type:"free_writing",skill:"writing",question:"Describí tu experiencia comprando en mercados o ferias. ¿Cómo lo harías en Brasil? Mínimo 5 oraciones.",prompt:"Quando vou ao mercado... / Geralmente compro... / No Brasil, eu gostaria de comprar... / Vou tentar negociar...",hint:"Negociar=negociar · tentar=intentar · gostaria=me gustaría"}
        ]
      },
      {
        id: "A1-U4-L4",
        title: "No restaurante",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Boa tarde! Mesa para quantas pessoas?\n— Para dois, por favor.\n— Aqui está o cardápio.\n— Obrigado. Qual é o prato do dia?\n— Hoje é frango grelhado com arroz, feijão e salada.\n— Ótimo! E tem opção vegetariana?\n— Temos! Uma massa com legumes.\n— Eu quero o frango e ela quer a massa.\n— Para beber?\n— Uma água sem gás e um suco de laranja.",
        memoryPhrases: ["Mesa para quantas pessoas?","Qual é o prato do dia?","Tem opção vegetariana?","Eu quero... e ela quer...","A conta, por favor."],
        oralProduction: "SITUAÇÃO ORAL: Você está num restaurante brasileiro com um amigo. Simule a conversa completa: pedir mesa, cardápio, comida, bebida e a conta. Mínimo 10 falas.",
        content: "# No Restaurante\n\n## Chegando\nMesa para quantas pessoas? · Tem reserva?\nPode sentar aqui? · Este lugar está ocupado?\n\n## Pedindo\nO cardápio/menu, por favor.\nQual é o prato do dia? · O que você recomenda?\nTem opção vegetariana/vegana?\nQuero pedir... / Para mim,...\nPode trazer sem...?\n\n## Bebidas\nÁgua com/sem gás · Suco natural de...\nRefrigerante · Cerveja · Vinho\n\n## No final\nEstá delicioso! · O garçom, por favor.\nA conta, por favor.\nEstá incluída a gorjeta?\n10% é o padrão no Brasil para o serviço.",
        exercises: [
          {id:"A1-U4-L4-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se llama el menú/carta en un restaurante?",options:["lista","cardápio","pedido","conta"],answer:1,explanation:"Cardápio = menú/carta.",hint:"La carta con los platos"},
          {id:"A1-U4-L4-E2",type:"fill_blank",skill:"vocabulary",question:"'Água ___ gás, por favor.' (sin)",answer:["sem"],hint:"Sem = sin (opuesto de com=con)",explanation:"Sem = sin. Com = con. Água sem gás = agua sin gas."},
          {id:"A1-U4-L4-E3",type:"multiple_choice",skill:"grammar",question:"'Eu ___ o frango e ela ___ a salada.' (querer)",options:["quer/quero","quero/quer","quero/quero","quer/quer"],answer:1,explanation:"EU + QUERER = QUERO. ELA + QUERER = QUER.",hint:"QUERER: eu=quero, ela=quer"},
          {id:"A1-U4-L4-E4",type:"translation",skill:"writing",question:"Traduce: 'Disculpe, ¿cuál es el plato del día? ¿Tiene opción sin gluten? La cuenta, por favor.'",answer:["com licença qual é o prato do dia","tem opção sem glúten","a conta por favor"],hint:"com licença · prato do dia · sem glúten · a conta",explanation:"Com licença, qual é o prato do dia? Tem opção sem glúten? A conta, por favor."},
          {id:"A1-U4-L4-E5",type:"free_writing",skill:"writing",question:"Describí tu restaurante brasileiro ideal. ¿Qué tiene en el cardápio? ¿Cómo es el ambiente? ¿Qué pedirías? Mínimo 5 oraciones.",prompt:"Meu restaurante ideal teria... / No cardápio haveria... / Eu pediria... / O ambiente seria...",hint:"haveria=habría · pediria=pediría · seria=sería"}
        ]
      },
      {
        id: "A1-U4-L5",
        title: "Os números grandes e o dinheiro",
        shadowing: "Lê 3 vezes em voz alta:\n\n— Qual é o aluguel desse apartamento?\n— Dois mil e quinhentos reais por mês.\n— E o condomínio?\n— Mais oitocentos reais.\n— Total três mil e trezentos. Está caro para o bairro?\n— Na média. Outros custam entre quatro e cinco mil.\n— E conta de luz e água?\n— Mais ou menos duzentos reais juntos.",
        memoryPhrases: ["Quanto custa/fica?","Dois mil reais.","Entre... e... reais.","Por mês/semana/ano.","Está caro/barato."],
        oralProduction: "SITUAÇÃO ORAL: Fale sobre o custo de vida em São Paulo ou Rio (real ou imaginário). Compare com os preços na sua cidade. Mínimo 6 frases com números.",
        content: "# Números Grandes e o Dinheiro\n\n## Números 100-1.000.000\n100=cem · 200=duzentos · 300=trezentos · 400=quatrocentos\n500=quinhentos · 600=seiscentos · 700=setecentos\n800=oitocentos · 900=novecentos · 1.000=mil\n2.000=dois mil · 10.000=dez mil · 1.000.000=um milhão\n\nCombinando:\n1.500=mil e quinhentos\n2.750=dois mil setecentos e cinquenta\n\n## A moeda brasileira\nReal (R$) = real · Reais = reales (plural)\n1 real = 100 centavos\nR$ 25,90 = vinte e cinco reais e noventa centavos\n\n## Vocabulário financeiro\naluguel=alquiler · condomínio=expensas\nconta de luz=factura electricidad · conta de água\npreço=precio · custo=costo · gratuito/grátis · pago\neconomizar=ahorrar · gastar · desconto · promoção",
        exercises: [
          {id:"A1-U4-L5-E1",type:"multiple_choice",skill:"vocabulary",question:"¿Cómo se dice 'dos mil quinientos' en português?",options:["dois centos e cinquenta","dois mil e quinhentos","duzentos e cinquenta","dois bilhões"],answer:1,explanation:"2.500 = dois mil e quinhentos.",hint:"2.000 + 500"},
          {id:"A1-U4-L5-E2",type:"fill_blank",skill:"vocabulary",question:"La moneda de Brasil se llama ___ (singular).",answer:["real"],hint:"La unidad monetaria de Brasil",explanation:"Real = la moneda. Plural: reais. Símbolo: R$."},
          {id:"A1-U4-L5-E3",type:"multiple_choice",skill:"vocabulary",question:"R$ 1.750,00 se lee como:",options:["mil e setecentos e cinquenta reais","setecentos e cinquenta reais","mil reais e setecentos","um milhão"],answer:0,explanation:"R$ 1.750 = mil e setecentos e cinquenta reais.",hint:"1.000 + 700 + 50"},
          {id:"A1-U4-L5-E4",type:"translation",skill:"writing",question:"Traduce: 'El alquiler es de mil ochocientos reales por mes. Los gastos comunes son trescientos reales.'",answer:["o aluguel é de mil e oitocentos reais por mês","o condomínio é de trezentos reais"],hint:"aluguel · mil e oitocentos · por mês · condomínio · trezentos",explanation:"O aluguel é de mil e oitocentos reais por mês. O condomínio é de trezentos reais."},
          {id:"A1-U4-L5-E5",type:"free_writing",skill:"writing",question:"Describí el costo de vida en tu ciudad y comparalo con São Paulo o Rio. Mínimo 5 oraciones.",prompt:"Na minha cidade, o aluguel custa... / A comida por mês fica... / No Brasil, os preços são...",hint:"custa=cuesta · fica=queda · mais/menos caro"}
        ]
      }
    ]
  }
];
