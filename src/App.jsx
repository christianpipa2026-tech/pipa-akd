import { useState, useEffect, useRef } from "react";
import { CURRICULUM, REFERENCE } from "./curriculum.js";
import { AULAS_TEORICAS } from "./aulas_teoricas.js";
import { CURRICULUM_ES_A1 as CURRICULUM_A1 } from "./curriculum_A1.js";
import { CURRICULUM_A2 } from "./curriculum_A2.js";
import { CURRICULUM_B1 } from "./curriculum_B1.js";
import { CURRICULUM_B2 } from "./curriculum_B2.js";
import { CURRICULUM_C1 } from "./curriculum_C1.js";
import { CURRICULUM_C2 } from "./curriculum_C2.js";
import { CURRICULUM_MASTER } from "./curriculum_Master.js";

// ── Storage ───────────────────────────────────────────────────────────────────
const load = (key, def) => { try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : def; } catch { return def; } };
const save = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };

// ── AI ────────────────────────────────────────────────────────────────────────
const callAI = async (messages, systemPrompt) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, systemPrompt }),
      signal: controller.signal
    });
    clearTimeout(timeout);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data.text || "";
  } catch (err) {
    clearTimeout(timeout);
    if (err.name === "AbortError") throw new Error("timeout");
    throw err;
  }
};

// ── Constants ─────────────────────────────────────────────────────────────────
// Merge full A1 curriculum
const FULL_CURRICULUM = {
  ...CURRICULUM,
  A1: { units: CURRICULUM_A1.units },
  A2: { units: CURRICULUM_A2.units },
  B1: { units: CURRICULUM_B1.units },
  B2: { units: CURRICULUM_B2.units },
  C1: { units: CURRICULUM_C1.units },
  C2: { units: CURRICULUM_C2.units },
  Master: { units: CURRICULUM_MASTER.units }
};

const LEVELS = [
  { id:"A1", label:"A1", desc:"Principiante absoluto", color:"#E0F2FE", text:"#0369A1", detail:"Saludos, números, familia, casa, comida, rutina" },
  { id:"A2", label:"A2", desc:"Básico",                color:"#E6F1FB", text:"#0C447C", detail:"Verbos, pasado, ciudad, compras, transporte" },
  { id:"B1", label:"B1", desc:"Intermedio",            color:"#EEEDFE", text:"#3C3489", detail:"Subjuntivo, opiniones, debate, trabajo" },
  { id:"B2", label:"B2", desc:"Intermedio alto",       color:"#FAEEDA", text:"#633806", detail:"Registro formal, argumentación, voz pasiva" },
  { id:"C1", label:"C1", desc:"Avanzado",              color:"#FAECE7", text:"#712B13", detail:"Figuras de lenguaje, análisis crítico, debate" },
  { id:"C2", label:"C2", desc:"Dominio",               color:"#FCEBEB", text:"#A32D2D", detail:"Ensayo académico, estilística, literatura" },
  { id:"Master", label:"Master", desc:"Nativo/Experto",color:"#F1EFE8", text:"#2C2C2A", detail:"Sociolingüística, investigación, crítica literaria" },
];
const LEVEL_ORDER = ["A1","A2","B1","B2","C1","C2","Master"];
const _SKILL_ICONS = { reading:"📖", listening:"🎧", writing:"✍️", speaking:"🗣️", grammar:"📐", vocabulary:"🔤", culture:"🇧🇷", pronunciation:"🔊" };

const EVAL_QUESTIONS = {
  A1:[
    {q:"¿Cómo se saluda en la mañana?", opts:["Boa noite!","Bom dia!","Boa tarde!","Olá!"], ans:1, exp:"'Bom dia' se usa hasta las 12h."},
    {q:"'Eu ___ Maria.' (ser)", opts:["é","são","sou","somos"], ans:2, exp:"SER para EU = 'sou'."},
    {q:"¿Cuánto es 'quinze'?", opts:["5","15","50","25"], ans:1, exp:"Quinze = 15."},
    {q:"¿Qué significa 'Obrigado'?", opts:["Por favor","De nada","Gracias","Perdón"], ans:2, exp:"Obrigado (hombre) / Obrigada (mujer) = Gracias."},
    {q:"¿Cómo se dice 'rojo'?", opts:["azul","verde","amarelo","vermelho"], ans:3, exp:"Vermelho = rojo."},
  ],
  A2:[
    {q:"'Ela ___ no Brasil.' (morar-presente)", opts:["morou","mora","moramos","moram"], ans:1, exp:"ELA MORA — verbo -AR, 3ª singular."},
    {q:"Pasado de 'eu vou':", opts:["fui","irei","ia","vou"], ans:0, exp:"Pretérito de IR: eu fui."},
    {q:"¿Qué significa 'saudade'?", opts:["Tristeza","Nostalgia/añoranza","Alegría","Sorpresa"], ans:1, exp:"Nostalgia mezclada con amor y deseo."},
    {q:"'Eu ___ café toda manhã.' (tomar)", opts:["tomei","tomo","tomarei","tomava"], ans:1, exp:"TOMAR para EU en presente = tomo."},
    {q:"'Quando criança, ela ___ muito.' (brincar)", opts:["brincou","brinca","brincava","brincaram"], ans:2, exp:"Hábito pasado → Imperfeito: BRINCAVA."},
  ],
  B1:[
    {q:"'Espero que ele ___ amanhã.' (vir)", opts:["vem","venha","veio","virá"], ans:1, exp:"'Espero que' + subjuntivo: VENHA."},
    {q:"¿Qué conectivo indica contraste?", opts:["portanto","além disso","porém","pois"], ans:2, exp:"Porém = sin embargo."},
    {q:"'Embora ___ cansada, trabalhou.' (estar)", opts:["está","esteve","esteja","estaria"], ans:2, exp:"EMBORA + subjuntivo: ESTEJA."},
    {q:"¿Qué significa 'dar um jeito'?", opts:["Girar","Resolver/encontrar solución","Perderse","Ejercitarse"], ans:1, exp:"'Dar um jeito' = resolver, encontrar una solución."},
    {q:"Conectivo de adición formal:", opts:["mas","porém","outrossim","porque"], ans:2, exp:"OUTROSSIM = además/asimismo. Conectivo formal aditivo."},
  ],
  B2:[
    {q:"Voz pasiva de 'O diretor assinou o contrato':", opts:["O contrato foi assinado pelo diretor.","O diretor foi assinado.","O contrato assinou.","Será assinado."], ans:0, exp:"sujeito paciente + foi + particípio + pelo + agente."},
    {q:"Equivalente formal de 'por causa de':", opts:["portanto","em virtude de","além disso","pois"], ans:1, exp:"'Em virtude de' = en virtud de / debido a. Registro formal."},
    {q:"Infinitivo flexionado correcto:", opts:["Para nós fazer","Para nós fazemos","Para nós fazermos","Para nós fizemos"], ans:2, exp:"NÓS → FAZERMOS. Infinitivo flexionado concuerda con el sujeto."},
    {q:"Nominalización de DESENVOLVER:", opts:["desenvolvência","desenvolvido","desenvolvimento","desenvoltura"], ans:2, exp:"Desenvolver → o desenvolvimento."},
    {q:"'Aspiro ___ uma vida melhor.'", opts:["Ø","em","para","a"], ans:3, exp:"ASPIRAR exige 'a': aspirar a."},
  ],
  C1:[
    {q:"'O silêncio gritava.' ¿Qué figura?", opts:["Hipérbole","Personificação/Metáfora","Metonímia","Eufemismo"], ans:1, exp:"Personificação: el silencio con capacidad humana de gritar."},
    {q:"'Ela tinha esperança; eu, dúvidas.' ¿Qué figura?", opts:["Anáfora","Elipse","Zeugma","Assíndeto"], ans:2, exp:"Zeugma: omisión del verbo 'tinha' ya mencionado."},
    {q:"Infinitivo flexionado: 'Para ___ saberem a verdade.'", opts:["eles","ele","vocês","nós"], ans:0, exp:"Para ELES saberem — sujeto explícito del infinitivo flexionado."},
    {q:"Conectivo: 'O projeto foi aprovado; ___, iniciará em março.'", opts:["embora","haja vista","portanto","mesmo que"], ans:2, exp:"PORTANTO = por lo tanto. Introduce consecuencia."},
    {q:"Versión formal de 'A gente tá precisando melhorar':", opts:["Nós estamos melhorando","É necessário aprimorar","A gente deve melhorar","Precisamos de melhora"], ans:1, exp:"'É necessário aprimorar' usa registro culto: necessário + infinitivo."},
  ],
  C2:[
    {q:"Uso correcto de crase:", opts:["Vou à Paris.","Fui à escola.","Refiro-me à isso.","Vou à ele."], ans:1, exp:"Fui À escola — sustantivo femenino con artículo. París sin artículo, pronombres no llevan crase."},
    {q:"'A maioria dos alunos chegaram cedo' presenta:", opts:["Zeugma","Silepse de número","Pleonasmo","Anacoluto"], ans:1, exp:"Silepse: concordancia con el sentido (alunos=plural) en lugar de la forma (maioria=singular)."},
    {q:"'LOQUOR' en latín originó:", opts:["lúdico y lúcido","eloquência y colóquio","locução e locomotiva","lógica e logaritmo"], ans:1, exp:"LOQUOR (hablar) → eloquência, colóquio, solilóquio, loquaz, locutor."},
    {q:"Colocación pronominal correcta en norma culta PB: 'Não ___ disse a verdade.'", opts:["disse-lhe","lhe disse","disse lhe","lhe-disse"], ans:1, exp:"Con negación (NÃO) → próclise obligatoria: Não LHE disse."},
    {q:"Eufemismo formal para 'morreu':", opts:["sumiu","faleceu","acabou","foi embora"], ans:1, exp:"Faleceu = eufemismo culto para morreu. Usado en necrológicas y contextos formales."},
  ],
  Master:[
    {q:"¿Quién publicó 'Pauliceia Desvairada' (1922)?", opts:["Oswald de Andrade","Mário de Andrade","Manuel Bandeira","Graciliano Ramos"], ans:1, exp:"Mário de Andrade — obra fundacional del Modernismo brasileño."},
    {q:"'Vossa Mercê' evolucionó a:", opts:["Senhor","Tu","Você","O senhor"], ans:2, exp:"Vossa Mercê → Vosmecê → Você. Proceso de gramaticalización."},
    {q:"Palatalización en PB convierte /t/ en:", opts:["[s]","[tʃ]","[k]","[f]"], ans:1, exp:"/t/→[tʃ] ante /i/. 'Tia'=[tʃia]. Típico del PB urbano."},
    {q:"'Jacaré' viene de la lengua:", opts:["Yorubá","Kimbundu","Tupi-Guarani","Italiano"], ans:2, exp:"Tupi-Guarani. También: mandioca, pipoca, abacaxi, piranha."},
    {q:"El 'Manifesto Antropófago' (1928) propone:", opts:["Rechazar lo extranjero","Devorar lo extranjero para crear algo brasileño","Volver a raíces indígenas","Adoptar el modernismo europeo"], ans:1, exp:"Oswald de Andrade: metáfora de 'devorar' influencias y transformarlas en algo únicamente brasileño."},
  ],
};

const DIALOGUES = {
  A1: [
    {
      title: "Presentarte a alguien en una fiesta",
      emoji: "🎉",
      lines: [
        { speaker: "Carlos", role: "user", text: "Oi! Tudo bem? Eu me chamo Carlos. E você?" },
        { speaker: "Ana", role: "assistant", text: "Olá, Carlos! Tudo ótimo, obrigada! Meu nome é Ana. Muito prazer!" },
        { speaker: "Carlos", role: "user", text: "Prazer, Ana! Você é daqui de São Paulo?" },
        { speaker: "Ana", role: "assistant", text: "Não, sou do Rio de Janeiro. E você, é daqui?" },
        { speaker: "Carlos", role: "user", text: "Sou sim, paulistano! Você está aqui a trabalho ou a passeio?" },
        { speaker: "Ana", role: "assistant", text: "Estou a passeio! Vim visitar uma amiga. São Paulo é incrível!" },
        { speaker: "Carlos", role: "user", text: "É verdade! Quantos anos você tem, Ana?" },
        { speaker: "Ana", role: "assistant", text: "Tenho vinte e seis anos. E você?" },
        { speaker: "Carlos", role: "user", text: "Tenho vinte e oito. Qual é a sua profissão?" },
        { speaker: "Ana", role: "assistant", text: "Sou professora de inglês. E você, o que faz?" },
        { speaker: "Carlos", role: "user", text: "Sou engenheiro. Você fala outros idiomas?" },
        { speaker: "Ana", role: "assistant", text: "Falo inglês e estou aprendendo espanhol. É difícil! [¡Es difícil!]" },
        { speaker: "Carlos", role: "user", text: "Ah, que legal! Eu também gosto de idiomas." },
        { speaker: "Ana", role: "assistant", text: "Que bom! Você tem redes sociais? Posso te adicionar?" },
        { speaker: "Carlos", role: "user", text: "Claro! Estou no Instagram. Vou te passar meu usuário." },
        { speaker: "Ana", role: "assistant", text: "Ótimo! Foi um prazer te conhecer, Carlos." },
        { speaker: "Carlos", role: "user", text: "Igualmente! Espero te ver de novo aqui." },
        { speaker: "Ana", role: "assistant", text: "Com certeza! Boa noite e aproveite a festa!" },
        { speaker: "Carlos", role: "user", text: "Você também! Tchau, Ana!" },
        { speaker: "Ana", role: "assistant", text: "Tchau, tchau! 😊" },
      ]
    },
    {
      title: "Ir a una tienda a comprar algo",
      emoji: "🛍️",
      lines: [
        { speaker: "Vendedor", role: "assistant", text: "Bom dia! Posso ajudar?" },
        { speaker: "Cliente", role: "user", text: "Bom dia! Estou procurando uma camiseta azul, tamanho médio." },
        { speaker: "Vendedor", role: "assistant", text: "Temos várias opções! Gosta desse modelo aqui?" },
        { speaker: "Cliente", role: "user", text: "Gostei! Quanto custa?" },
        { speaker: "Vendedor", role: "assistant", text: "Está por sessenta e nove reais. Em promoção!" },
        { speaker: "Cliente", role: "user", text: "Tem desconto se eu pagar à vista?" },
        { speaker: "Vendedor", role: "assistant", text: "Tem! À vista fica cinquenta e nove reais. Quer experimentar?" },
        { speaker: "Cliente", role: "user", text: "Quero! Onde fica o provador?" },
        { speaker: "Vendedor", role: "assistant", text: "É ali ao fundo, à direita. Fique à vontade!" },
        { speaker: "Cliente", role: "user", text: "Ficou ótima! Vou levar. Aceita cartão de débito?" },
        { speaker: "Vendedor", role: "assistant", text: "Aceitamos débito, crédito e Pix!" },
        { speaker: "Cliente", role: "user", text: "Vou pagar no Pix para ter o desconto." },
        { speaker: "Vendedor", role: "assistant", text: "Perfeito! Vou gerar o QR code." },
        { speaker: "Cliente", role: "user", text: "Prontinho, paguei!" },
        { speaker: "Vendedor", role: "assistant", text: "Recebi! Vou embrulhar sua camiseta. Quer nota fiscal?" },
        { speaker: "Cliente", role: "user", text: "Sim, por favor!" },
        { speaker: "Vendedor", role: "assistant", text: "Aqui está! Obrigado pela preferência!" },
        { speaker: "Cliente", role: "user", text: "Obrigado! Até logo!" },
        { speaker: "Vendedor", role: "assistant", text: "Até mais! Volte sempre!" },
        { speaker: "Cliente", role: "user", text: "Com certeza! Tchau!" },
      ]
    },
    {
      title: "Preguntar la hora y orientarse",
      emoji: "🕐",
      lines: [
        { speaker: "Turista", role: "user", text: "Com licença! Pode me dizer que horas são?" },
        { speaker: "Passante", role: "assistant", text: "Claro! São duas e meia da tarde." },
        { speaker: "Turista", role: "user", text: "Obrigado! E sabe onde fica a estação de metrô?" },
        { speaker: "Passante", role: "assistant", text: "Fica aqui pertinho! Vai reto e vira à esquerda." },
        { speaker: "Turista", role: "user", text: "É longe a pé?" },
        { speaker: "Passante", role: "assistant", text: "Não, são uns cinco minutos caminhando." },
        { speaker: "Turista", role: "user", text: "Perfeito! Tem banco perto daqui?" },
        { speaker: "Passante", role: "assistant", text: "Tem um Bradesco ali na esquina, à direita." },
        { speaker: "Turista", role: "user", text: "Ótimo! Que horas fecha?" },
        { speaker: "Passante", role: "assistant", text: "Acho que às cinco. Mas tem caixa eletrônico 24 horas." },
        { speaker: "Turista", role: "user", text: "Que bom! Sou turista, estou um pouco perdido." },
        { speaker: "Passante", role: "assistant", text: "De onde você é?" },
        { speaker: "Turista", role: "user", text: "Sou da Argentina. Estou aqui há três dias." },
        { speaker: "Passante", role: "assistant", text: "Que legal! Está gostando do Brasil?" },
        { speaker: "Turista", role: "user", text: "Muito! A comida é deliciosa e as pessoas são simpáticas." },
        { speaker: "Passante", role: "assistant", text: "Fico feliz! Se precisar de mais informações, é só perguntar." },
        { speaker: "Turista", role: "user", text: "Muito obrigado pela ajuda!" },
        { speaker: "Passante", role: "assistant", text: "De nada! Aproveite o Brasil!" },
        { speaker: "Turista", role: "user", text: "Obrigado! Tchau!" },
        { speaker: "Passante", role: "assistant", text: "Tchau! Boa visita!" },
      ]
    },
    {
      title: "Hablar por teléfono",
      emoji: "📞",
      lines: [
        { speaker: "Recepcionista", role: "assistant", text: "Bom dia, Restaurante Sabor Brasil, pois não?" },
        { speaker: "Cliente", role: "user", text: "Bom dia! Gostaria de fazer uma reserva para hoje à noite." },
        { speaker: "Recepcionista", role: "assistant", text: "Claro! Para quantas pessoas?" },
        { speaker: "Cliente", role: "user", text: "Para quatro pessoas." },
        { speaker: "Recepcionista", role: "assistant", text: "Que horas você prefere? Temos às dezenove ou às vinte e uma." },
        { speaker: "Cliente", role: "user", text: "Às sete da noite está ótimo." },
        { speaker: "Recepcionista", role: "assistant", text: "Perfeito! Qual é o seu nome?" },
        { speaker: "Cliente", role: "user", text: "Meu nome é Roberto Souza." },
        { speaker: "Recepcionista", role: "assistant", text: "Roberto Souza, quatro pessoas, às dezenove. Tem preferência de mesa?" },
        { speaker: "Cliente", role: "user", text: "Se possível, perto da janela." },
        { speaker: "Recepcionista", role: "assistant", text: "Anotado! E um telefone para contato?" },
        { speaker: "Cliente", role: "user", text: "Onze, nove, oito, sete, seis, cinco, quatro, três, dois, um." },
        { speaker: "Recepcionista", role: "assistant", text: "Confirmada a reserva! Vocês têm restrição alimentar?" },
        { speaker: "Cliente", role: "user", text: "Uma pessoa do grupo é vegetariana." },
        { speaker: "Recepcionista", role: "assistant", text: "Temos opções vegetarianas! Vou deixar anotado." },
        { speaker: "Cliente", role: "user", text: "Ótimo! Vocês têm estacionamento?" },
        { speaker: "Recepcionista", role: "assistant", text: "Temos convênio com o estacionamento da frente, com desconto." },
        { speaker: "Cliente", role: "user", text: "Perfeito! Muito obrigado." },
        { speaker: "Recepcionista", role: "assistant", text: "Por nada! Até esta noite, senhor Roberto!" },
        { speaker: "Cliente", role: "user", text: "Até logo!" },
      ]
    },
  ],
  A2: [
    {
      title: "Contar tu fin de semana",
      emoji: "🌞",
      lines: [
        { speaker: "Amiga", role: "assistant", text: "Oi! Como foi seu fim de semana?" },
        { speaker: "Você", role: "user", text: "Foi ótimo! No sábado fui à praia com minha família." },
        { speaker: "Amiga", role: "assistant", text: "Que legal! Que praia você foi?" },
        { speaker: "Você", role: "user", text: "Fui ao Guarujá. Estava muito bonito!" },
        { speaker: "Amiga", role: "assistant", text: "Adorei! Fez sol?" },
        { speaker: "Você", role: "user", text: "Fez sim! O tempo estava perfeito. Ficamos lá das dez até as cinco." },
        { speaker: "Amiga", role: "assistant", text: "E o mar, estava bom para nadar?" },
        { speaker: "Você", role: "user", text: "Estava ótimo! As crianças ficaram o dia todo na água." },
        { speaker: "Amiga", role: "assistant", text: "Que saudade de praia! E no domingo?" },
        { speaker: "Você", role: "user", text: "No domingo fui ao churrasco na casa dos meus pais." },
        { speaker: "Amiga", role: "assistant", text: "Nossa, que fim de semana gostoso! Tem churrasco toda semana?" },
        { speaker: "Você", role: "user", text: "Quase! É tradição na minha família." },
        { speaker: "Amiga", role: "assistant", text: "Me convida na próxima?" },
        { speaker: "Você", role: "user", text: "Claro! No próximo domingo tem mais um. Você está convidada!" },
        { speaker: "Amiga", role: "assistant", text: "Vou sim! Posso levar alguma coisa?" },
        { speaker: "Você", role: "user", text: "Pode trazer uma sobremesa. Minha mãe adora bolo de chocolate." },
        { speaker: "Amiga", role: "assistant", text: "Vou fazer o bolo! Que horas começa?" },
        { speaker: "Você", role: "user", text: "Ao meio-dia. Pode chegar um pouco antes se quiser." },
        { speaker: "Amiga", role: "assistant", text: "Perfeito! Mal posso esperar. Obrigada pelo convite!" },
        { speaker: "Você", role: "user", text: "A gente que agradece! Vai ser ótimo." },
      ]
    },
    {
      title: "En un restaurante: pedir y pagar",
      emoji: "🍽️",
      lines: [
        { speaker: "Garçom", role: "assistant", text: "Boa noite! Bem-vindos! Posso trazer o cardápio?" },
        { speaker: "Cliente", role: "user", text: "Sim, por favor! E uma água enquanto escolhemos." },
        { speaker: "Garçom", role: "assistant", text: "Com gás ou sem gás?" },
        { speaker: "Cliente", role: "user", text: "Com gás, por favor." },
        { speaker: "Garçom", role: "assistant", text: "Perfeito! Aqui está o cardápio. Têm alguma restrição alimentar?" },
        { speaker: "Cliente", role: "user", text: "Não como glúten. Tem algum prato sem glúten?" },
        { speaker: "Garçom", role: "assistant", text: "Temos! O frango grelhado e o peixe assado são sem glúten." },
        { speaker: "Cliente", role: "user", text: "Ótimo! Vou querer o frango com arroz e salada." },
        { speaker: "Garçom", role: "assistant", text: "E de acompanhamento, feijão ou purê?" },
        { speaker: "Cliente", role: "user", text: "Feijão, por favor." },
        { speaker: "Garçom", role: "assistant", text: "Uns vinte minutos. A cozinha está movimentada hoje." },
        { speaker: "Cliente", role: "user", text: "Tudo bem. Vocês têm sobremesa?" },
        { speaker: "Garçom", role: "assistant", text: "Temos pudim, mousse de chocolate e açaí com granola." },
        { speaker: "Cliente", role: "user", text: "Já deixo o pudim separado para depois!" },
        { speaker: "Garçom", role: "assistant", text: "Anotado! [Após a refeição] Gostou? Posso trazer a sobremesa?" },
        { speaker: "Cliente", role: "user", text: "Adorei! Pode trazer o pudim e a conta, por favor." },
        { speaker: "Garçom", role: "assistant", text: "A conta deu cento e quarenta e dois reais. Aceita cartão?" },
        { speaker: "Cliente", role: "user", text: "Aceita Pix?" },
        { speaker: "Garçom", role: "assistant", text: "Aceitamos! Vou gerar o QR code." },
        { speaker: "Cliente", role: "user", text: "Prontinho! Muito obrigado, estava delicioso." },
      ]
    },
    {
      title: "Pedir direcciones en la ciudad",
      emoji: "🗺️",
      lines: [
        { speaker: "Turista", role: "user", text: "Com licença! Estou procurando o Parque Ibirapuera." },
        { speaker: "Morador", role: "assistant", text: "O Ibirapuera! É um pouco longe daqui. Você está de carro?" },
        { speaker: "Turista", role: "user", text: "Não, estou a pé. Posso ir de metrô?" },
        { speaker: "Morador", role: "assistant", text: "Pode! Pega a linha dois até a estação Ana Rosa." },
        { speaker: "Turista", role: "user", text: "E daí, como chego ao parque?" },
        { speaker: "Morador", role: "assistant", text: "De lá são uns quinze minutos a pé, ou pega um Uber." },
        { speaker: "Turista", role: "user", text: "A estação de metrô mais próxima daqui, qual é?" },
        { speaker: "Morador", role: "assistant", text: "É a Consolação. Vai reto por essa avenida, uns dez minutos." },
        { speaker: "Turista", role: "user", text: "O parque abre que horas?" },
        { speaker: "Morador", role: "assistant", text: "Abre às cinco da manhã e fecha às meia-noite." },
        { speaker: "Turista", role: "user", text: "Tem alguma coisa legal para ver no parque?" },
        { speaker: "Morador", role: "assistant", text: "Tem o Museu de Arte Moderna, o lago, e muita área verde." },
        { speaker: "Turista", role: "user", text: "Tem restaurante dentro?" },
        { speaker: "Morador", role: "assistant", text: "Tem! Um com vista para o lago, muito bonito." },
        { speaker: "Turista", role: "user", text: "Perfeito! E o metrô é seguro?" },
        { speaker: "Morador", role: "assistant", text: "É sim! O metrô de São Paulo é muito bom." },
        { speaker: "Turista", role: "user", text: "Ótimo. Quanto custa a passagem?" },
        { speaker: "Morador", role: "assistant", text: "Uns cinco reais. Pode pagar no cartão ou no app." },
        { speaker: "Turista", role: "user", text: "Muito obrigado pela ajuda!" },
        { speaker: "Morador", role: "assistant", text: "De nada! Aproveite o parque!" },
      ]
    },
    {
      title: "Hablar de tu familia",
      emoji: "👨‍👩‍👧‍👦",
      lines: [
        { speaker: "Colega", role: "assistant", text: "Você tem filhos, Lucas?" },
        { speaker: "Lucas", role: "user", text: "Tenho! Uma menina de oito anos e um menino de cinco." },
        { speaker: "Colega", role: "assistant", text: "Que fofos! Como eles se chamam?" },
        { speaker: "Lucas", role: "user", text: "A menina é Isabela e o menino, Pedro." },
        { speaker: "Colega", role: "assistant", text: "Nomes lindos! Sua família mora aqui em São Paulo?" },
        { speaker: "Lucas", role: "user", text: "Mora. Meus pais são de Minas Gerais, mas vivem aqui há vinte anos." },
        { speaker: "Colega", role: "assistant", text: "Você visita Minas Gerais às vezes?" },
        { speaker: "Lucas", role: "user", text: "Visito nas férias! Meus avós ainda moram lá. As crianças adoram." },
        { speaker: "Colega", role: "assistant", text: "Tem fazenda lá?" },
        { speaker: "Lucas", role: "user", text: "Tem! Vacas, galinhas, cavalos. Meu filho é apaixonado pelos cavalos." },
        { speaker: "Colega", role: "assistant", text: "Adorável! Você tem irmãos?" },
        { speaker: "Lucas", role: "user", text: "Tenho uma irmã mais velha que mora em Belo Horizonte." },
        { speaker: "Colega", role: "assistant", text: "Vocês se veem com frequência?" },
        { speaker: "Lucas", role: "user", text: "Sempre no Natal e no Ano Novo. A família toda se reúne." },
        { speaker: "Colega", role: "assistant", text: "Que lindo! Família grande é uma riqueza." },
        { speaker: "Lucas", role: "user", text: "É mesmo! E você, tem família aqui?" },
        { speaker: "Colega", role: "assistant", text: "Tenho marido e uma filha de três anos. Chama Valentina." },
        { speaker: "Lucas", role: "user", text: "Que nome bonito! Ela vai à escola?" },
        { speaker: "Colega", role: "assistant", text: "Vai! Está amando. Faz amigos novos todo dia." },
        { speaker: "Lucas", role: "user", text: "Essa fase é maravilhosa! Aproveite muito." },
      ]
    },
  ],
  B1: [
    {
      title: "Dar tu opinión sobre una película",
      emoji: "🎬",
      lines: [
        { speaker: "Marina", role: "user", text: "Você assistiu 'Ainda Estou Aqui'? O que achou?" },
        { speaker: "Felipe", role: "assistant", text: "Assisti! Absolutamente devastador. Fernanda Torres está impecável." },
        { speaker: "Marina", role: "user", text: "Concordo! Na minha opinião, é o melhor filme brasileiro dos últimos anos." },
        { speaker: "Felipe", role: "assistant", text: "Sem dúvida. Embora o tema seja difícil, a direção é delicada e poderosa." },
        { speaker: "Marina", role: "user", text: "O que mais te tocou no filme?" },
        { speaker: "Felipe", role: "assistant", text: "A resistência da Eunice Paiva. Mesmo com tanta dor, nunca perdeu a dignidade." },
        { speaker: "Marina", role: "user", text: "Eu chorei muito na cena final. Você também?" },
        { speaker: "Felipe", role: "assistant", text: "Chorei bastante! Mas é um choro necessário. Faz a gente refletir sobre a ditadura." },
        { speaker: "Marina", role: "user", text: "Você acha que deveria ganhar o Oscar?" },
        { speaker: "Felipe", role: "assistant", text: "Espero que ganhe! Seria histórico para o cinema brasileiro." },
        { speaker: "Marina", role: "user", text: "Antes dele, qual foi o último filme brasileiro indicado?" },
        { speaker: "Felipe", role: "assistant", text: "'Cidade de Deus', em 2004. Quatro indicações, mas não ganhou." },
        { speaker: "Marina", role: "user", text: "Apesar de ser ambientado nos anos 70, parece muito atual." },
        { speaker: "Felipe", role: "assistant", text: "Essa é a força do cinema: conectar passado e presente." },
        { speaker: "Marina", role: "user", text: "Qual filme você quer ver a seguir?" },
        { speaker: "Felipe", role: "assistant", text: "Estou com vontade de ver 'Carandiru'. Você já assistiu?" },
        { speaker: "Marina", role: "user", text: "Já! É pesado, mas essencial. Trata da realidade prisional brasileira." },
        { speaker: "Felipe", role: "assistant", text: "O cinema brasileiro tem muito a dizer sobre nossa sociedade." },
        { speaker: "Marina", role: "user", text: "Tem mesmo! E cada vez mais pessoas estão valorizando isso." },
        { speaker: "Felipe", role: "assistant", text: "Com certeza. É muito importante apoiar o cinema nacional." },
      ]
    },
    {
      title: "Debatir el trabajo remoto",
      emoji: "💻",
      lines: [
        { speaker: "Joana", role: "user", text: "Você prefere trabalhar de casa ou no escritório?" },
        { speaker: "Rafael", role: "assistant", text: "Na minha opinião, o trabalho remoto tem vantagens e desvantagens." },
        { speaker: "Joana", role: "user", text: "Quais são as vantagens para você?" },
        { speaker: "Rafael", role: "assistant", text: "A flexibilidade e a economia de tempo no trânsito. Perdia duas horas por dia." },
        { speaker: "Joana", role: "user", text: "Entendo! Porém, sinto falta do contato com os colegas." },
        { speaker: "Rafael", role: "assistant", text: "Sinto também. A parte social faz muita diferença." },
        { speaker: "Joana", role: "user", text: "Além disso, em casa tenho muitas distrações." },
        { speaker: "Rafael", role: "assistant", text: "Esse é o grande desafio! Você criou uma rotina?" },
        { speaker: "Joana", role: "user", text: "Demorei, mas sim. Tenho um escritório separado e horários fixos." },
        { speaker: "Rafael", role: "assistant", text: "Fundamental! Eu trabalhava da cama no começo. Foi um desastre." },
        { speaker: "Joana", role: "user", text: "Haha! Eu também passei por isso. Sua empresa vai continuar remota?" },
        { speaker: "Rafael", role: "assistant", text: "Vai ser híbrido: três dias em casa, dois no escritório." },
        { speaker: "Joana", role: "user", text: "Acho que é o modelo ideal! Combina o melhor dos dois." },
        { speaker: "Rafael", role: "assistant", text: "Concordo. Qual é sua preferência pessoal?" },
        { speaker: "Joana", role: "user", text: "Prefiro o híbrido. Embora goste de casa, preciso do escritório às vezes." },
        { speaker: "Rafael", role: "assistant", text: "E os jovens que entram agora no mercado? Preferem o remoto?" },
        { speaker: "Joana", role: "user", text: "Acho que sim, mas aprender sem estar presencialmente é difícil." },
        { speaker: "Rafael", role: "assistant", text: "Verdade. O mentoring presencial é insubstituível para quem começa." },
        { speaker: "Joana", role: "user", text: "Esse debate vai continuar por muitos anos ainda." },
        { speaker: "Rafael", role: "assistant", text: "Com certeza! O mercado de trabalho está se transformando." },
      ]
    },
    {
      title: "Contar un viaje que hiciste",
      emoji: "✈️",
      lines: [
        { speaker: "Amigo", role: "assistant", text: "Você viajou nas férias? Para onde foi?" },
        { speaker: "Você", role: "user", text: "Fui para o Nordeste! Fortaleza e depois Jericoacoara." },
        { speaker: "Amigo", role: "assistant", text: "Que inveja! Jericoacoara é incrível. Como foi?" },
        { speaker: "Você", role: "user", text: "Foi mágico. As lagoas de água doce nas dunas são de tirar o fôlego." },
        { speaker: "Amigo", role: "assistant", text: "A Lagoa do Paraíso, né? Deve ser muito melhor ao vivo." },
        { speaker: "Você", role: "user", text: "É completamente diferente! A água tem uma cor azul-turquesa incrível." },
        { speaker: "Amigo", role: "assistant", text: "E o povo lá? Os cearenses são simpáticos?" },
        { speaker: "Você", role: "user", text: "Extremamente! Me receberam muito bem. E o sotaque é lindo!" },
        { speaker: "Amigo", role: "assistant", text: "E a comida, o que você provou?" },
        { speaker: "Você", role: "user", text: "Comi muito peixe fresco. A moqueca estava divina." },
        { speaker: "Amigo", role: "assistant", text: "Água na boca! Você foi de avião?" },
        { speaker: "Você", role: "user", text: "De avião até Fortaleza. De lá, fui de van até Jeri." },
        { speaker: "Amigo", role: "assistant", text: "A estrada de areia deve ser uma aventura!" },
        { speaker: "Você", role: "user", text: "Quatro horas na areia, mas vale cada minuto." },
        { speaker: "Amigo", role: "assistant", text: "Quais foram os pontos altos?" },
        { speaker: "Você", role: "user", text: "O pôr do sol na duna! Todo mundo aplaude quando o sol se põe." },
        { speaker: "Amigo", role: "assistant", text: "Que experiência! Você voltaria?" },
        { speaker: "Você", role: "user", text: "Voltaria com certeza! O Nordeste tem algo único." },
        { speaker: "Amigo", role: "assistant", text: "Me deu vontade de ir agora!" },
        { speaker: "Você", role: "user", text: "Vai! Te passo todas as dicas do roteiro." },
      ]
    },
    {
      title: "Hablar de planes para el futuro",
      emoji: "🔮",
      lines: [
        { speaker: "Carla", role: "user", text: "O que você planeja para os próximos anos, Thiago?" },
        { speaker: "Thiago", role: "assistant", text: "Quero terminar meu mestrado no ano que vem e depois trabalhar com IA." },
        { speaker: "Carla", role: "user", text: "IA! É um campo que está mudando tudo. Você pensa em ir para o exterior?" },
        { speaker: "Thiago", role: "assistant", text: "Espero conseguir uma vaga em Portugal. Quero morar lá por alguns anos." },
        { speaker: "Carla", role: "user", text: "Portugal é boa escolha! Já foi lá?" },
        { speaker: "Thiago", role: "assistant", text: "Ainda não, mas é um sonho. Embora o custo tenha subido, ainda vale." },
        { speaker: "Carla", role: "user", text: "E planos pessoais? Pensa em constituir família?" },
        { speaker: "Thiago", role: "assistant", text: "Penso, mas não é prioridade agora. Quero primeiro estabilizar a carreira." },
        { speaker: "Carla", role: "user", text: "Você tem alguma ideia de negócio próprio?" },
        { speaker: "Thiago", role: "assistant", text: "Tenho uma ideia de startup em educação com IA. Ainda no papel." },
        { speaker: "Carla", role: "user", text: "Que interessante! Qual é a ideia?" },
        { speaker: "Thiago", role: "assistant", text: "Uma plataforma que personaliza o aprendizado usando inteligência artificial." },
        { speaker: "Carla", role: "user", text: "Isso faz muita falta na educação! Você já tem sócios?" },
        { speaker: "Thiago", role: "assistant", text: "Estou conversando com um amigo programador. Se der certo, começamos em julho." },
        { speaker: "Carla", role: "user", text: "Torço por você! E antes de Portugal, quer viajar pelo Brasil?" },
        { speaker: "Thiago", role: "assistant", text: "Quero conhecer a Amazônia! É um crime ser brasileiro e não conhecer." },
        { speaker: "Carla", role: "user", text: "Concordo! É uma experiência transformadora." },
        { speaker: "Thiago", role: "assistant", text: "Assim que defender o mestrado, vou direto para Manaus." },
        { speaker: "Carla", role: "user", text: "Que plano lindo! Você tem uma visão muito clara do futuro." },
        { speaker: "Thiago", role: "assistant", text: "Espero que tudo se concretize! Os planos sempre mudam um pouco, né?" },
      ]
    },
  ],
  B2: [
    {
      title: "Entrevista de trabajo",
      emoji: "💼",
      lines: [
        { speaker: "Entrevistador", role: "assistant", text: "Bom dia! Pode se apresentar brevemente?" },
        { speaker: "Candidato", role: "user", text: "Bom dia! Sou formado em Administração pela USP, seis anos em gestão de projetos." },
        { speaker: "Entrevistador", role: "assistant", text: "O que te motivou a se candidatar a esta vaga?" },
        { speaker: "Candidato", role: "user", text: "A reputação da empresa em inovação e o projeto de expansão para a América Latina." },
        { speaker: "Entrevistador", role: "assistant", text: "Fale sobre um desafio profissional que você superou." },
        { speaker: "Candidato", role: "user", text: "Coordenei uma migração de sistema com cinco departamentos em três meses." },
        { speaker: "Entrevistador", role: "assistant", text: "Como gerenciou os conflitos entre as equipes?" },
        { speaker: "Candidato", role: "user", text: "Implementei reuniões semanais e um sistema de comunicação transparente." },
        { speaker: "Entrevistador", role: "assistant", text: "Quais são seus pontos de melhoria? Seja honesto." },
        { speaker: "Candidato", role: "user", text: "Tenho tendência à perfeição, o que às vezes impacta o tempo de entrega." },
        { speaker: "Entrevistador", role: "assistant", text: "Onde você se vê em cinco anos?" },
        { speaker: "Candidato", role: "user", text: "Assumindo liderança em projetos estratégicos e contribuindo para o crescimento da empresa." },
        { speaker: "Entrevistador", role: "assistant", text: "Quais são suas expectativas salariais?" },
        { speaker: "Candidato", role: "user", text: "Entre quinze e dezoito mil reais, considerando a senioridade da vaga." },
        { speaker: "Entrevistador", role: "assistant", text: "Tem disponibilidade para viagens internacionais?" },
        { speaker: "Candidato", role: "user", text: "Total! Falo inglês e espanhol fluentemente, o que facilitaria." },
        { speaker: "Entrevistador", role: "assistant", text: "Ótimo diferencial! Tem alguma pergunta sobre a empresa?" },
        { speaker: "Candidato", role: "user", text: "Como as equipes se organizam e qual é a cultura da empresa?" },
        { speaker: "Entrevistador", role: "assistant", text: "Cultura colaborativa, foco em resultados e muita autonomia. Foi uma excelente entrevista!" },
        { speaker: "Candidato", role: "user", text: "Obrigado pela oportunidade. Aguardo retorno com ansiedade." },
      ]
    },
    {
      title: "Debate sobre redes sociales",
      emoji: "📱",
      lines: [
        { speaker: "Jornalista", role: "user", text: "As redes sociais têm impacto positivo ou negativo na sociedade?" },
        { speaker: "Especialista", role: "assistant", text: "É complexo. Democratizaram a informação, mas amplificaram a desinformação." },
        { speaker: "Jornalista", role: "user", text: "Como assim democratizaram?" },
        { speaker: "Especialista", role: "assistant", text: "Antes, a mídia era controlada por poucos. Hoje qualquer pessoa pode publicar." },
        { speaker: "Jornalista", role: "user", text: "Porém, vemos um aumento alarmante de fake news." },
        { speaker: "Especialista", role: "assistant", text: "O algoritmo prioriza engajamento, não veracidade. Conteúdo emocional se espalha mais." },
        { speaker: "Jornalista", role: "user", text: "Quem deve regular os algoritmos? O Estado ou as empresas?" },
        { speaker: "Especialista", role: "assistant", text: "Acredito em regulação conjunta. As empresas têm expertise, o Estado define limites." },
        { speaker: "Jornalista", role: "user", text: "Isso não seria uma ameaça à liberdade de expressão?" },
        { speaker: "Especialista", role: "assistant", text: "Não. Regular desinformação não é censura. A liberdade tem limites em toda democracia." },
        { speaker: "Jornalista", role: "user", text: "E o impacto na saúde mental dos jovens?" },
        { speaker: "Especialista", role: "assistant", text: "Os dados são preocupantes. Há correlação com ansiedade em adolescentes." },
        { speaker: "Jornalista", role: "user", text: "Deveríamos limitar o acesso de menores?" },
        { speaker: "Especialista", role: "assistant", text: "É válido. A Austrália proibiu para menores de dezesseis anos." },
        { speaker: "Jornalista", role: "user", text: "Isso funcionaria no Brasil?" },
        { speaker: "Especialista", role: "assistant", text: "Poderia, desde que acompanhado de educação digital nas escolas." },
        { speaker: "Jornalista", role: "user", text: "Sua recomendação central sobre uso saudável?" },
        { speaker: "Especialista", role: "assistant", text: "Verificar fontes, limitar tempo de uso e lembrar que as redes mostram uma versão editada da realidade." },
        { speaker: "Jornalista", role: "user", text: "Excelente análise! Obrigado." },
        { speaker: "Especialista", role: "assistant", text: "É fundamental que a sociedade tenha esse debate de forma madura." },
      ]
    },
    {
      title: "Negociar en una reunión",
      emoji: "🤝",
      lines: [
        { speaker: "Fornecedor", role: "user", text: "Bom dia! Estou aqui para apresentar nossa proposta de fornecimento." },
        { speaker: "Diretora", role: "assistant", text: "Bom dia! Estamos avaliando três fornecedores. O que diferencia vocês?" },
        { speaker: "Fornecedor", role: "user", text: "Nosso prazo: sete dias úteis, enquanto o mercado opera em quinze." },
        { speaker: "Diretora", role: "assistant", text: "Relevante. Porém, o preço está acima do nosso orçamento." },
        { speaker: "Fornecedor", role: "user", text: "Podemos chegar a um acordo. Qual é o valor que vocês têm em mente?" },
        { speaker: "Diretora", role: "assistant", text: "Nossa verba prevê até cento e vinte mil por trimestre." },
        { speaker: "Fornecedor", role: "user", text: "Visto que o volume é significativo, poderíamos chegar a cento e trinta." },
        { speaker: "Diretora", role: "assistant", text: "Ainda está acima. Contanto que mantenham o prazo, chegamos a cento e vinte e cinco." },
        { speaker: "Fornecedor", role: "user", text: "Aceitamos mediante contrato de doze meses com pagamento em vinte e um dias." },
        { speaker: "Diretora", role: "assistant", text: "Nosso padrão é trinta dias. É possível com o valor de cento e vinte e cinco?" },
        { speaker: "Fornecedor", role: "user", text: "Para viabilizar, precisaríamos de reajuste semestral pelo IPCA." },
        { speaker: "Diretora", role: "assistant", text: "Razoável. Posso formalizar uma proposta por escrito?" },
        { speaker: "Fornecedor", role: "user", text: "Envio ainda hoje com os termos de suporte e garantia." },
        { speaker: "Diretora", role: "assistant", text: "Precisamos de decisão até sexta-feira. É viável?" },
        { speaker: "Fornecedor", role: "user", text: "É sim. Se precisar ajustar algo, conversamos antes." },
        { speaker: "Diretora", role: "assistant", text: "Vocês têm referências de clientes do nosso setor?" },
        { speaker: "Fornecedor", role: "user", text: "Atendemos a Ambev e o Grupo Pão de Açúcar. Incluo os contatos na proposta." },
        { speaker: "Diretora", role: "assistant", text: "Excelente! Aguardo a proposta por e-mail. Reunião produtiva." },
        { speaker: "Fornecedor", role: "user", text: "Igualmente! Estou otimista com essa parceria. Até sexta!" },
      ]
    },
    {
      title: "Presentación profesional",
      emoji: "🎯",
      lines: [
        { speaker: "Apresentadora", role: "user", text: "Bom dia. Venho apresentar os resultados do nosso projeto de transformação digital." },
        { speaker: "Diretor", role: "assistant", text: "Pode começar. Todos acompanharão com atenção." },
        { speaker: "Apresentadora", role: "user", text: "Abordarei três pontos: diagnóstico, implementação e resultados." },
        { speaker: "Diretor", role: "assistant", text: "Qual foi o investimento total?" },
        { speaker: "Apresentadora", role: "user", text: "Dois milhões e trezentos mil reais, conforme orçamento aprovado em março." },
        { speaker: "Diretor", role: "assistant", text: "Certo. Continue." },
        { speaker: "Apresentadora", role: "user", text: "O diagnóstico revelou que 60% dos processos eram manuais e geravam retrabalho." },
        { speaker: "Diretor", role: "assistant", text: "Qual era o impacto financeiro?" },
        { speaker: "Apresentadora", role: "user", text: "Perda de produtividade de trezentos e cinquenta mil reais anuais." },
        { speaker: "Diretor", role: "assistant", text: "Significativo. Prossiga para a implementação." },
        { speaker: "Apresentadora", role: "user", text: "Implementamos um ERP em oito meses, com treinamento de cento e vinte colaboradores." },
        { speaker: "Diretor", role: "assistant", text: "Houve resistência das equipes?" },
        { speaker: "Apresentadora", role: "user", text: "Sim, nos dois primeiros meses. Investimos em gestão de mudança." },
        { speaker: "Diretor", role: "assistant", text: "E os resultados?" },
        { speaker: "Apresentadora", role: "user", text: "40% menos retrabalho, 25% mais produtividade e ROI de 180% em doze meses." },
        { speaker: "Diretor", role: "assistant", text: "Impressionante! Superam as expectativas." },
        { speaker: "Apresentadora", role: "user", text: "A transformação digital mudou também a cultura organizacional." },
        { speaker: "Diretor", role: "assistant", text: "Parabéns! Quais são os próximos passos recomendados?" },
        { speaker: "Apresentadora", role: "user", text: "Expandir para as filiais no segundo semestre e automatizar o atendimento ao cliente." },
      ]
    },
  ],
  C1: [
    {
      title: "Análisis crítico de una obra de arte",
      emoji: "🎨",
      lines: [
        { speaker: "Crítica", role: "assistant", text: "Tarsila do Amaral pintou 'Abaporu' em 1928 — uma figura desproporcional, pés enormes na terra, braço fino ao sol." },
        { speaker: "Estudante", role: "user", text: "A desproporção é intencional? Parece uma escolha estilística muito deliberada." },
        { speaker: "Crítica", role: "assistant", text: "Absolutamente. A desproporção rompe com o realismo europeu e afirma uma estética própria, radicada na terra brasileira." },
        { speaker: "Estudante", role: "user", text: "Os pés enormes no chão sugerem enraizamento, pertencimento ao solo. É quase uma metáfora visual." },
        { speaker: "Crítica", role: "assistant", text: "Exato. E o braço fino em direção ao sol evoca tanto fragilidade quanto aspiração — uma tensão que define a condição humana." },
        { speaker: "Estudante", role: "user", text: "Como essa obra se relaciona com o Manifesto Antropófago de Oswald de Andrade?" },
        { speaker: "Crítica", role: "assistant", text: "A própria Tarsila enviou o quadro a Oswald, que o batizou de Abaporu — 'homem que come gente' em tupi — e criou o Manifesto a partir daí." },
        { speaker: "Estudante", role: "user", text: "Então a obra gerou o manifesto, não o contrário. A pintura como ponto de partida do pensamento teórico." },
        { speaker: "Crítica", role: "assistant", text: "Precisamente. A arte precede e funda a teoria — algo que os modernistas brasileiros entenderam profundamente." },
        { speaker: "Estudante", role: "user", text: "Do ponto de vista formal, como você analisa a paleta de cores?" },
        { speaker: "Crítica", role: "assistant", text: "As cores são chapadas, sem gradação — influência do cubismo e da fovismo que Tarsila estudou em Paris, mas aplicadas a uma iconografia genuinamente brasileira." },
        { speaker: "Estudante", role: "user", text: "Há uma tensão interessante: técnica europeia a serviço de um conteúdo radicalmente nacional." },
        { speaker: "Crítica", role: "assistant", text: "Essa é a síntese antropofágica em ação: devorar o que vem de fora e transformar em algo novo e próprio." },
        { speaker: "Estudante", role: "user", text: "O que torna 'Abaporu' uma obra paradigmática e não apenas historicamente importante?" },
        { speaker: "Crítica", role: "assistant", text: "Sua capacidade de ainda provocar leituras múltiplas — estética, política, filosófica. Uma obra que ainda pergunta, não apenas responde." },
        { speaker: "Estudante", role: "user", text: "Arte que permanece aberta é arte que permanece viva." },
        { speaker: "Crítica", role: "assistant", text: "Síntese perfeita. Guarde essa frase — ela define o que separa obra de arte de mero artefato cultural." },
        { speaker: "Estudante", role: "user", text: "Essa conversa mudou minha forma de olhar para o modernismo brasileiro." },
        { speaker: "Crítica", role: "assistant", text: "É exatamente para isso que a crítica existe: não para explicar a obra, mas para abrir mais janelas dentro dela." },
        { speaker: "Estudante", role: "user", text: "Obrigado pela análise. Vou reler o Manifesto Antropófago com outros olhos agora." },
      ]
    },
    {
      title: "Debate filosófico sobre identidade",
      emoji: "🧠",
      lines: [
        { speaker: "Filósofa", role: "assistant", text: "Vamos começar com uma pergunta simples — que é, na verdade, impossível: o que faz com que você seja você?" },
        { speaker: "Estudante", role: "user", text: "A continuidade da memória, talvez? Se perco a memória, perco a identidade?" },
        { speaker: "Filósofa", role: "assistant", text: "Locke diria que sim — identidade pessoal é continuidade da consciência e da memória." },
        { speaker: "Estudante", role: "user", text: "Mas e quem tem amnésia? Deixa de ser a mesma pessoa juridicamente, moralmente?" },
        { speaker: "Filósofa", role: "assistant", text: "Ótima objeção. Hume iria além: negaria a existência de um 'eu' substancial. Apenas um feixe de percepções em fluxo." },
        { speaker: "Estudante", role: "user", text: "Isso é perturbador. Não há nada estável, apenas padrões momentâneos?" },
        { speaker: "Filósofa", role: "assistant", text: "Perturbador e libertador, dependendo da perspectiva. O budismo chega a conclusão semelhante por outro caminho." },
        { speaker: "Estudante", role: "user", text: "O 'eu' como ilusão construída — não como substância, mas como narrativa." },
        { speaker: "Filósofa", role: "assistant", text: "Exatamente. Ricoeur propõe 'identidade narrativa': somos a história que contamos sobre nós mesmos." },
        { speaker: "Estudante", role: "user", text: "E se a história muda? Se eu reinterpreto meu passado, mudo quem sou?" },
        { speaker: "Filósofa", role: "assistant", text: "Segundo essa perspectiva, sim. Identidade não é descoberta — é construída e reconstruída continuamente." },
        { speaker: "Estudante", role: "user", text: "Isso tem implicações éticas. Se não há 'eu' estável, como responsabilizar alguém por atos passados?" },
        { speaker: "Filósofa", role: "assistant", text: "Esse é o paradoxo central. A responsabilidade moral pressupõe continuidade que a filosofia questiona." },
        { speaker: "Estudante", role: "user", text: "Talvez a resposta esteja em aceitar a tensão, não em resolvê-la." },
        { speaker: "Filósofa", role: "assistant", text: "Isso é pensar filosoficamente — sustentar a contradição sem precisar colapsá-la numa resposta fácil." },
        { speaker: "Estudante", role: "user", text: "E no contexto brasileiro, a identidade coletiva tem as mesmas ambiguidades?" },
        { speaker: "Filósofa", role: "assistant", text: "Muito mais, diria. Darcy Ribeiro chamava o Brasil de 'nação que ainda não foi' — identidade como projeto inacabado." },
        { speaker: "Estudante", role: "user", text: "Identidade como horizonte, não como ponto de partida." },
        { speaker: "Filósofa", role: "assistant", text: "Muito bem formulado. O Brasil não sabe o que é — e talvez seja exatamente isso que o define." },
        { speaker: "Estudante", role: "user", text: "Paradoxo como identidade. Há algo de profundamente humano nisso." },
      ]
    },
    {
      title: "Conferência informal sobre cultura brasileira",
      emoji: "🎭",
      lines: [
        { speaker: "Conferencista", role: "user", text: "Bom dia a todos. Hoje quero propor uma pergunta incômoda: o Brasil tem uma cultura nacional — ou culturas no plural?" },
        { speaker: "Plateia", role: "assistant", text: "Questão provocadora! A diversidade regional é tão grande que parece impossível falar em singular." },
        { speaker: "Conferencista", role: "user", text: "Exatamente. Um nordestino e um gaúcho compartilham a língua e pouco mais, em termos de referências culturais cotidianas." },
        { speaker: "Plateia", role: "assistant", text: "Mas o futebol, o carnaval, a MPB — não seriam elementos de uma identidade compartilhada?" },
        { speaker: "Conferencista", role: "user", text: "São símbolos de coesão, sim. Mas coesão não é homogeneidade — é a ilusão necessária que nos mantém juntos apesar das diferenças." },
        { speaker: "Plateia", role: "assistant", text: "Uma ilusão funcional, então. Como Benedict Anderson e as 'comunidades imaginadas'." },
        { speaker: "Conferencista", role: "user", text: "Precisamente. A nação é sempre uma construção imaginária — o Brasil talvez seja o mais explícito nisso." },
        { speaker: "Plateia", role: "assistant", text: "E a contribuição afro-brasileira? Parece sistematicamente sub-representada na narrativa oficial." },
        { speaker: "Conferencista", role: "user", text: "Essa é a ferida central. A cultura que mais moldou o Brasil — culinária, música, religiosidade — é a menos reconhecida institucionalmente." },
        { speaker: "Plateia", role: "assistant", text: "O samba virou símbolo nacional, mas seus criadores foram marginalizados por décadas." },
        { speaker: "Conferencista", role: "user", text: "Essa é a antropofagia às avessas: a cultura dominante devora as contribuições das margens sem reconhecer a fonte." },
        { speaker: "Plateia", role: "assistant", text: "Como você vê o papel da literatura nesse processo de construção identitária?" },
        { speaker: "Conferencista", role: "user", text: "A literatura é onde o Brasil imagina a si mesmo com mais honestidade — de Machado a Clarice, de Carolina de Jesus a Conceição Evaristo." },
        { speaker: "Plateia", role: "assistant", text: "Vozes tão distintas que juntas formam um mosaico impossível de reduzir a uma narrativa única." },
        { speaker: "Conferencista", role: "user", text: "E talvez seja exatamente isso o Brasil: um lugar onde a narrativa única é sempre insuficiente." },
        { speaker: "Plateia", role: "assistant", text: "Uma cultura que resiste à síntese. Isso é riqueza ou fraqueza?" },
        { speaker: "Conferencista", role: "user", text: "Depende de quem pergunta. Para quem quer controlar, é fraqueza. Para quem quer criar, é a maior riqueza possível." },
        { speaker: "Plateia", role: "assistant", text: "Que resposta elegante para encerrar. Obrigado pela provocação." },
        { speaker: "Conferencista", role: "user", text: "O objetivo era deixar mais perguntas do que respostas. Parece que funcionou." },
        { speaker: "Plateia", role: "assistant", text: "Funcionou muito bem. Continuamos no coffee break!" },
      ]
    },
    {
      title: "Crítica de uma obra literária brasileira",
      emoji: "📚",
      lines: [
        { speaker: "Crítico A", role: "user", text: "Quero propor 'Dom Casmurro' como o romance mais importante da literatura brasileira. Alguém discorda?" },
        { speaker: "Crítico B", role: "assistant", text: "Eu discordaria — não da qualidade, mas da classificação. 'Grande Sertão: Veredas' é formalmente mais inovador." },
        { speaker: "Crítico A", role: "user", text: "Mas Machado antecipa o modernismo com meio século de avanço. O narrador não confiável já estava lá em 1899." },
        { speaker: "Crítico B", role: "assistant", text: "Verdade. Bentinho é um dos mais sofisticados narradores não confiáveis da literatura ocidental." },
        { speaker: "Crítico A", role: "user", text: "E a ambiguidade central — Capitu traiu ou não — nunca é resolvida. Isso é genialidade estrutural." },
        { speaker: "Crítico B", role: "assistant", text: "A irresolvabilidade é proposital. Machado nos dá apenas a versão de um homem ciumento e nos pede para julgar." },
        { speaker: "Crítico A", role: "user", text: "E julgamos Capitu — quando deveríamos estar julgando o narrador. É uma armadilha para o leitor." },
        { speaker: "Crítico B", role: "assistant", text: "Exatamente. O verdadeiro tema não é a traição — é a misoginia e o ciúme que constroem narrativas sobre as mulheres." },
        { speaker: "Crítico A", role: "user", text: "Essa leitura feminista é relativamente recente, mas o texto a suporta completamente." },
        { speaker: "Crítico B", role: "assistant", text: "Isso é outro sinal de grandeza: a obra sobrevive a releituras que seus contemporâneos jamais imaginariam." },
        { speaker: "Crítico A", role: "user", text: "E o estilo? A ironia machadiana tem uma elegância que nenhum outro escritor brasileiro conseguiu replicar." },
        { speaker: "Crítico B", role: "assistant", text: "A ironia funciona como distância crítica — ele ri da elite carioca de dentro da elite carioca." },
        { speaker: "Crítico A", role: "user", text: "Sem nunca explicitar a crítica, o que a torna mais devastadora. O leitor ri e depois percebe que se autoincriminou." },
        { speaker: "Crítico B", role: "assistant", text: "Voltando à sua tese inicial — concordo que é o mais importante, talvez não o mais inovador formalmente." },
        { speaker: "Crítico A", role: "user", text: "Importância e inovação são critérios distintos. 'Dom Casmurro' fundou uma tradição de desconfiança narrativa." },
        { speaker: "Crítico B", role: "assistant", text: "E essa tradição vai de Machado a Clarice, de Clarice aos narradores contemporâneos da periferia." },
        { speaker: "Crítico A", role: "user", text: "A desconfiança em relação ao narrador como herança machadiana — isso é uma tese interessante para desenvolver." },
        { speaker: "Crítico B", role: "assistant", text: "Ficamos com mais trabalho do que tínhamos antes desta conversa." },
        { speaker: "Crítico A", role: "user", text: "O sinal de uma boa discussão literária." },
        { speaker: "Crítico B", role: "assistant", text: "Concordo plenamente. Machado agradeceria, ironicamente." },
      ]
    },
  ],
  C2: [
    {
      title: "Análise estilística: ironia e subtexto",
      emoji: "✍️",
      lines: [
        { speaker: "Crítico", role: "assistant", text: "Brás Cubas narra sua própria história depois de morto — o que isso implica narrativamente?" },
        { speaker: "Estudante", role: "user", text: "Ele está fora do tempo, pode mentir, omitir, se contradizer sem consequências." },
        { speaker: "Crítico", role: "assistant", text: "Exatamente. É o narrador não confiável por excelência. E a ironia funciona como distância crítica." },
        { speaker: "Estudante", role: "user", text: "Ele ri do leitor e de si mesmo simultaneamente?" },
        { speaker: "Crítico", role: "assistant", text: "Sim. Machado usa o riso para revelar o que o sentimentalismo romântico escondia: a crueldade das relações sociais." },
        { speaker: "Estudante", role: "user", text: "Então a forma — o narrador morto — é inseparável do conteúdo — a crítica social?" },
        { speaker: "Crítico", role: "assistant", text: "Essa é a síntese perfeita. Em Machado, nunca se pode separar como do quê. A ironia é a forma e o conteúdo ao mesmo tempo." },
        { speaker: "Estudante", role: "user", text: "O que isso significa para nossa própria escrita?" },
        { speaker: "Crítico", role: "assistant", text: "Que a forma que escolhemos para dizer algo é parte do que dizemos. Nunca é neutra." },
        { speaker: "Estudante", role: "user", text: "Vou reler Machado com esses olhos agora." },
      ]
    },
    {
      title: "Debate filosófico: língua e poder",
      emoji: "🧠",
      lines: [
        { speaker: "Filósofa", role: "assistant", text: "Toda luta social é também uma luta pela linguagem — quem nomeia, controla." },
        { speaker: "Estudante", role: "user", text: "Por isso movimentos sociais sempre criam vocabulário novo: 'racismo estrutural', 'capacitismo'." },
        { speaker: "Filósofa", role: "assistant", text: "E por isso a reação conservadora tenta proibir essas palavras — negar o vocabulário é negar a realidade que ele nomeia." },
        { speaker: "Estudante", role: "user", text: "A língua não apenas reflete a realidade — ela a constitui parcialmente?" },
        { speaker: "Filósofa", role: "assistant", text: "Sapir-Whorf em versão fraca: a língua que falamos molda o que conseguimos pensar." },
        { speaker: "Estudante", role: "user", text: "E o que conseguimos pensar molda o que conseguimos fazer." },
        { speaker: "Filósofa", role: "assistant", text: "Exato. Por isso ensinar filosofia da linguagem não é luxo acadêmico — é necessidade democrática." },
        { speaker: "Estudante", role: "user", text: "Como isso se aplica ao português brasileiro especificamente?" },
        { speaker: "Filósofa", role: "assistant", text: "O preconceito linguístico no Brasil é uma forma de exclusão social que se disfarça de correção gramatical." },
        { speaker: "Estudante", role: "user", text: "Atacar o sotaque é atacar a pessoa — não a língua." },
      ]
    },
    {
      title: "Negociação complexa: interesses vs. posições",
      emoji: "🤝",
      lines: [
        { speaker: "Mediadora", role: "assistant", text: "Em toda negociação difícil, há o que as partes dizem que querem e o que realmente precisam." },
        { speaker: "Estudante", role: "user", text: "Como se chega ao que realmente precisam?" },
        { speaker: "Mediadora", role: "assistant", text: "Perguntando o porquê três vezes. 'Queremos X' — 'por quê?' — 'precisamos de Y' — 'por quê?' — 'no fundo é Z'." },
        { speaker: "Estudante", role: "user", text: "Interesses versus posições — Fisher e Ury." },
        { speaker: "Mediadora", role: "assistant", text: "A posição é rígida; o interesse é flexível. Negocie interesses e encontrará saídas." },
        { speaker: "Estudante", role: "user", text: "Como eu uso isso sem revelar meu próprio piso?" },
        { speaker: "Mediadora", role: "assistant", text: "Faça perguntas. 'O que é mais importante para vocês aqui?' revela o interesse sem expor o seu." },
        { speaker: "Estudante", role: "user", text: "E se a outra parte não quiser colaborar?" },
        { speaker: "Mediadora", role: "assistant", text: "Então você usa seu BATNA — sua melhor alternativa se não houver acordo. Conhecê-lo dá poder." },
        { speaker: "Estudante", role: "user", text: "Poder para não precisar aceitar qualquer coisa." },
      ]
    },
    {
      title: "Crítica cultural: o que o cinema diz sobre o Brasil",
      emoji: "🎬",
      lines: [
        { speaker: "Crítica", role: "assistant", text: "'Cidade de Deus' mudou como o mundo vê o Brasil — para o bem e para o mal." },
        { speaker: "Estudante", role: "user", text: "Para o bem: visibilizou a violência estrutural. Para o mal: reforçou um estereótipo?" },
        { speaker: "Crítica", role: "assistant", text: "Exatamente a tensão. Um filme pode denunciar e estetizar ao mesmo tempo — e a estetização pode virar fetiche." },
        { speaker: "Estudante", role: "user", text: "A violência como espetáculo que o público internacional consome com prazer seguro." },
        { speaker: "Crítica", role: "assistant", text: "E os moradores da favela que assistem e se veem naquele espetáculo — o que sentem?" },
        { speaker: "Estudante", role: "user", text: "Reconhecimento? Orgulho? Raiva? Provavelmente as três coisas." },
        { speaker: "Crítica", role: "assistant", text: "Isso é o que torna o filme importante e problemático ao mesmo tempo. Arte que provoca essas contradições não é simples." },
        { speaker: "Estudante", role: "user", text: "Então a crítica cultural não pode ser só 'bom' ou 'ruim'." },
        { speaker: "Crítica", role: "assistant", text: "Nunca. A crítica que não sustenta contradição não está à altura de seu objeto." },
        { speaker: "Estudante", role: "user", text: "Que outros filmes brasileiros você colocaria nessa tensão?" },
      ]
    },
  ],
  Master: [
    {
      title: "O conto perfeito: lei de Tchekhov",
      emoji: "✍️",
      lines: [
        { speaker: "Escritora", role: "assistant", text: "Tchekhov dizia: se no primeiro ato aparece uma arma, ela precisa disparar. No conto, não há espaço para nada que não dispare." },
        { speaker: "Estudante", role: "user", text: "É uma forma de escrita que me intimida. Cada palavra carrega um peso imenso." },
        { speaker: "Escritora", role: "assistant", text: "Mas também liberta. No romance você pode se perder e se achar. No conto, você não pode se perder." },
        { speaker: "Estudante", role: "user", text: "O conto exige que você já saiba o que quer dizer antes de começar?" },
        { speaker: "Escritora", role: "assistant", text: "Exige que você descubra o que quer dizer exatamente ao escrever — e depois retire tudo que não é esse descobrimento." },
        { speaker: "Estudante", role: "user", text: "Como você sabe quando um conto está pronto?" },
        { speaker: "Escritora", role: "assistant", text: "Quando não há mais nada para tirar sem destruir. Não quando não há mais nada para acrescentar." },
        { speaker: "Estudante", role: "user", text: "A completude como subtração, não como adição." },
        { speaker: "Escritora", role: "assistant", text: "Exatamente. O conto perfeito parece inevitável — como se não pudesse ser diferente." },
        { speaker: "Estudante", role: "user", text: "Vou reler Clarice com esses olhos — procurando o que ela não disse." },
      ]
    },
    {
      title: "Metalinguagem: falar sobre a língua em português",
      emoji: "🔬",
      lines: [
        { speaker: "Linguista", role: "assistant", text: "O que você acha mais fascinante na fonologia do português brasileiro?" },
        { speaker: "Estudante", role: "user", text: "A palatalização — como 'dia' vira 'djia' e 'tia' vira 'tchia' em certas regiões." },
        { speaker: "Linguista", role: "assistant", text: "Excelente observação. E isso varia diatopicamente — no Rio, mais marcado; no interior de São Paulo, menos." },
        { speaker: "Estudante", role: "user", text: "E a neutralização de /e/ e /i/ átonos — como 'menino' pode soar 'menenu' no mesmo falante?" },
        { speaker: "Linguista", role: "assistant", text: "Você está pensando como fonólogo. O PB é um laboratório extraordinário de variação em tempo real." },
        { speaker: "Estudante", role: "user", text: "E morfologicamente — 'deletar' segue o paradigma verbal português apesar de vir do inglês." },
        { speaker: "Linguista", role: "assistant", text: "Isso é empréstimo com adaptação morfológica. O PB não importa verbos estrangeiros diretamente — os aportuguesiza." },
        { speaker: "Estudante", role: "user", text: "A língua como sistema que assimila o exterior sem perder sua lógica interna." },
        { speaker: "Linguista", role: "assistant", text: "Isso é exatamente o que distingue uma língua viva de uma que está morrendo." },
        { speaker: "Estudante", role: "user", text: "E o PB está muito vivo — às vezes caoticamente." },
      ]
    },
    {
      title: "Fernando Pessoa e a multiplicidade do eu",
      emoji: "🎭",
      lines: [
        { speaker: "Pessoiana", role: "assistant", text: "Pessoa dizia: 'Sou o intervalo entre o meu desejo e aquilo que a vida fez de mim.' Isso não é poema — é definição de sujeito moderno." },
        { speaker: "Estudante", role: "user", text: "E os heterônimos são extensões disso — não máscaras, mas pessoas reais com visões irreconciliáveis." },
        { speaker: "Pessoiana", role: "assistant", text: "Caeiro nega tudo que Campos excessa. Reis ordena tudo que o ortônimo deixa em caos." },
        { speaker: "Estudante", role: "user", text: "É como se Pessoa percebesse que um único 'eu' coerente é uma ficção — e então a tornasse ficção literária." },
        { speaker: "Pessoiana", role: "assistant", text: "E ao fazer isso, antecipou em décadas o que a filosofia e a psicologia levariam anos para teorizar." },
        { speaker: "Estudante", role: "user", text: "A literatura como laboratório filosófico." },
        { speaker: "Pessoiana", role: "assistant", text: "Sempre foi. Antes de haver termos para 'narrador não confiável', havia Machado. Antes de 'identidade fragmentada', havia Pessoa." },
        { speaker: "Estudante", role: "user", text: "A teoria literária sempre chegando atrasada para nomear o que os escritores já faziam." },
        { speaker: "Pessoiana", role: "assistant", text: "E isso não é limitação da teoria — é a natureza da arte. Ela sempre sabe antes." },
        { speaker: "Estudante", role: "user", text: "Que razão para continuar lendo." },
      ]
    },
    {
      title: "O intelectual público: rigor e coragem",
      emoji: "🎤",
      lines: [
        { speaker: "Mestra", role: "assistant", text: "O intelectual público tem a responsabilidade mais difícil: pensar com rigor e comunicar com clareza para quem não tem tempo de fazer os dois." },
        { speaker: "Estudante", role: "user", text: "É uma tradução permanente — da profundidade para a acessibilidade e de volta." },
        { speaker: "Mestra", role: "assistant", text: "Sem perder nada essencial nos dois sentidos. Isso distingue o intelectual do especialista." },
        { speaker: "Estudante", role: "user", text: "O especialista sabe muito sobre pouco. O intelectual público conecta muito ao que importa agora." },
        { speaker: "Mestra", role: "assistant", text: "E faz isso em público, assumindo o risco do erro, da simplificação, da crítica. Coragem epistêmica." },
        { speaker: "Estudante", role: "user", text: "Dizer 'não sei' publicamente — isso é a maior coragem intelectual?" },
        { speaker: "Mestra", role: "assistant", text: "Num ambiente que recompensa a certeza falsa, sim. Dizer 'não sei' é resistência." },
        { speaker: "Estudante", role: "user", text: "Mas como fazer isso sem parecer incompetente?" },
        { speaker: "Mestra", role: "assistant", text: "Especificando o que você sabe e o que não sabe. 'Sobre X tenho certeza; sobre Y a evidência é inconclusiva.' Isso é competência." },
        { speaker: "Estudante", role: "user", text: "A nuance como demonstração de competência, não de fraqueza." },
      ]
    },
  ],
};

const CONVERSATIONS = {
  A1:["Presentarte a alguien en una fiesta","Ir a una tienda a comprar algo","Preguntar la hora","Hablar por teléfono básico"],
  A2:["Contar tu fin de semana","En un restaurante: pedir y pagar","Pedir direcciones en la ciudad","Hablar de tu familia"],
  B1:["Dar tu opinión sobre una película","Contar un viaje que hiciste","Debatir el trabajo remoto","Hablar de planes para el futuro"],
  B2:["Presentación profesional","Negociar en una reunión","Debate sobre redes sociales","Entrevista de trabajo"],
  C1:["Análisis crítico de una obra de arte","Debate filosófico sobre identidad","Conferencia informal sobre cultura","Crítica de una película brasileña"],
  C2:["Disertación sobre política lingüística","Defensa de posición académica","Debate sobre literatura brasileña","Análisis de fenómeno cultural"],
  Master:["Análise sociolinguística de corpus","Defesa de tese acadêmica","Conferência sobre variação do PB","Debate sobre identidade e língua"],
};

// ── App Component ─────────────────────────────────────────────────────────────
function RecsOverlay({ show, level, onClose }) {
  if (!show) return null;
  const recs = LISTENING_RECS[level] || LISTENING_RECS.A1;
  return (
    <div style={{position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"flex-end", justifyContent:"center", zIndex:999, padding:"0 0 0 0"}} onClick={onClose}>
      <div style={{background:"var(--color-background-primary)", borderRadius:"20px 20px 0 0", padding:"24px 20px 32px", width:"100%", maxWidth:480, maxHeight:"80vh", overflowY:"auto"}} onClick={e => e.stopPropagation()}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18}}>
          <div>
            <p style={{fontSize:11, fontWeight:700, color:"var(--color-accent)", letterSpacing:"0.06em", textTransform:"uppercase", margin:"0 0 3px"}}>¡Unidad completa! 🎉</p>
            <h2 style={{fontSize:18, fontWeight:800, color:"var(--color-text-primary)", margin:0, letterSpacing:"-0.02em"}}>Treine o ouvido agora</h2>
          </div>
          <button onClick={onClose} style={{cursor:"pointer", border:"none", background:"var(--color-background-secondary)", borderRadius:999, width:32, height:32, fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", color:"var(--color-text-secondary)", fontFamily:"var(--font-sans)"}}>×</button>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:12}}>
          <div style={{background:"var(--bg-accent)", borderRadius:14, padding:"14px 16px"}}>
            <p style={{fontSize:12, fontWeight:700, color:"var(--text-accent)", textTransform:"uppercase", letterSpacing:"0.04em", margin:"0 0 8px"}}>🎙️ Podcasts</p>
            {recs.podcasts.map((p,i) => <p key={i} style={{fontSize:13, color:"var(--color-text-primary)", margin:"4px 0", lineHeight:1.5}}>· {p}</p>)}
          </div>
          <div style={{background:"var(--bg-pro)", borderRadius:14, padding:"14px 16px"}}>
            <p style={{fontSize:12, fontWeight:700, color:"var(--text-pro)", textTransform:"uppercase", letterSpacing:"0.04em", margin:"0 0 8px"}}>📺 Séries e filmes</p>
            {recs.series.map((s,i) => <p key={i} style={{fontSize:13, color:"var(--color-text-primary)", margin:"4px 0", lineHeight:1.5}}>· {s}</p>)}
          </div>
          <div style={{background:"var(--bg-warning)", borderRadius:14, padding:"14px 16px"}}>
            <p style={{fontSize:12, fontWeight:700, color:"var(--text-warning)", textTransform:"uppercase", letterSpacing:"0.04em", margin:"0 0 8px"}}>🎵 Músicas</p>
            {recs.musicas.map((m,i) => <p key={i} style={{fontSize:13, color:"var(--color-text-primary)", margin:"4px 0", lineHeight:1.5}}>· {m}</p>)}
          </div>
          <div style={{background:"var(--bg-success)", borderRadius:14, padding:"14px 16px"}}>
            <p style={{fontSize:12, fontWeight:700, color:"var(--text-success)", textTransform:"uppercase", letterSpacing:"0.04em", margin:"0 0 6px"}}>💡 Dica do nível {level}</p>
            <p style={{fontSize:13, color:"var(--color-text-primary)", margin:0, lineHeight:1.5}}>{recs.dica}</p>
          </div>
        </div>

        <button onClick={onClose} style={{cursor:"pointer", width:"100%", marginTop:16, padding:"14px", background:"var(--color-accent)", color:"#fff", border:"none", borderRadius:14, fontSize:15, fontWeight:600, fontFamily:"var(--font-sans)"}}>
          Continuar praticando →
        </button>
      </div>
    </div>
  );
}

function CelebrationOverlay({ show, msg }) {
  if (!show) return null;
  return (
    <div style={{position:"fixed", top:0, left:0, right:0, bottom:0, display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000, pointerEvents:"none"}}>
      <div style={{background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-secondary)", borderRadius:"var(--border-radius-lg)", padding:"1.5rem 2rem", textAlign:"center", boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
        <div style={{fontSize:48, marginBottom:8}}>🎉</div>
        <p style={{fontSize:16, fontWeight:600, color:"var(--color-text-primary)", margin:"0 0 4px"}}>{msg}</p>
        <p style={{fontSize:13, color:"var(--color-text-secondary)", margin:0}}>¡Seguí así!</p>
      </div>
    </div>
  );
}

const LISTENING_RECS = {
  A1: {
    podcasts: ["Español con Juan (YouTube) — ritmo lento", "Dreaming Spanish (YouTube) — iniciante"],
    series:   ["Extra en Español (YouTube) — série didática"],
    musicas:  ["La Bamba — Ritchie Valens", "Cucurrucucú Paloma — versão espanhol"],
    dica:     "Não precisa entender tudo. Focalize no ritmo e na entonação do espanhol.",
  },
  A2: {
    podcasts: ["Coffee Break Spanish (Spotify)", "Español con Pablo (YouTube)"],
    series:   ["Club de Cuervos (Netflix) — espanhol mexicano"],
    musicas:  ["Besame Mucho — versão clássica", "Oye Como Va — Santana"],
    dica:     "Tente repetir frases que você entender. Shadowing com áudio real em espanhol.",
  },
  B1: {
    podcasts: ["Notes in Spanish (Spotify) — conversas do cotidiano"],
    series:   ["La Casa de Papel (Netflix)", "Club de Cuervos (Netflix)"],
    musicas:  ["Despacito — Luis Fonsi", "Bailando — Enrique Iglesias"],
    dica:     "Assista 5 minutos sem legenda, depois com legenda em espanhol.",
  },
  B2: {
    podcasts: ["El Hilo (Spotify) — jornalismo latinoamericano", "Radio Ambulante (NPR)"],
    series:   ["Narcos México (Netflix)", "Élite (Netflix)"],
    musicas:  ["Clandestino — Manu Chao", "Latinoamérica — Calle 13"],
    dica:     "Escute sem legenda. O que não entender, anote e pesquise depois.",
  },
  C1: {
    podcasts: ["Pensamiento Crítico (Spotify)", "El País Semanal Podcast"],
    series:   ["El Ministerio del Tiempo (Netflix)", "Vis a Vis (Netflix)"],
    musicas:  ["A Dios le Pido — Juanes", "Pies Descalzos — Shakira"],
    dica:     "Leia sobre o tema antes de escutar — contexto facilita a compreensão.",
  },
  C2: {
    podcasts: ["El País Audio", "Foco Económico (Spotify)"],
    series:   ["El Tiempo entre Costuras (Netflix)", "Gran Hotel (Netflix)"],
    musicas:  ["Todo Cambia — Mercedes Sosa", "Gracias a la Vida — Violeta Parra"],
    dica:     "Assista filmes em espanhol sem legenda. Anote expressões idiomáticas.",
  },
  Master: {
    podcasts: ["Aquí la Tierra (RTVE)", "El Mundo en 24 horas (RFI Español)"],
    series:   ["Isabel (Netflix)", "Carlos Rey Emperador (Netflix)"],
    musicas:  ["Alfonsina y el Mar — Mercedes Sosa", "Canción con Todos — Astor Piazzolla"],
    dica:     "Escute literatura narrada: Borges, García Márquez, Isabel Allende no YouTube.",
  },
};


export default function App() {
  const [screen, setScreen]               = useState(() => load("pb_level",null) ? "session" : "welcome");
  const [onboardStep, setOnboardStep]     = useState(0);
  const [streak, setStreak]               = useState(() => {
    const s = load("streak", { count: 0, lastDate: null });
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (s.lastDate === today || s.lastDate === yesterday) return s;
    return { count: 0, lastDate: null };
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [showRecs, setShowRecs]                 = useState(false);
  const [celebrationMsg, setCelebrationMsg]   = useState("");
  const [selectedLevel, setSelectedLevel] = useState(() => load("pb_level", null));
  const [assignedLevel, setAssignedLevel] = useState(() => load("pb_level", null));
  const [evalQs, setEvalQs]               = useState([]);
  const [evalIdx, setEvalIdx]             = useState(0);
  const [evalScore, setEvalScore]         = useState(0);
  const [evalAnswered, setEvalAnswered]   = useState(false);
  const [evalSelected, setEvalSelected]   = useState(null);
  const [currentUnit, setCurrentUnit]     = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [showAula, setShowAula]     = useState(false);
  const [aulaUnit, setAulaUnit]     = useState(null);
  const [exerciseIdx, setExerciseIdx]     = useState(0);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [lessonExercises, setLessonExercises] = useState([]);
  const [userAnswer, setUserAnswer]       = useState("");
  const [exerciseAnswered, setExerciseAnswered] = useState(false);
  const [exerciseFeedback, setExerciseFeedback] = useState(null);
  const [aiFeedback, setAiFeedback]       = useState(null);
  const [aiLoading, _setAiLoading]         = useState(false);
  const [sessionMode, setSessionMode]     = useState("curriculum");
  const [chatMessages, setChatMessages]   = useState([]);
  const [chatInput, setChatInput]         = useState("");
  const [chatLoading, setChatLoading]     = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState(null);
  const [progress, setProgress]           = useState(() => load("pb_progress", {}));
  const [showLevelUp, setShowLevelUp]     = useState(false);
  const [reviewMode, setReviewMode]       = useState(false);
  const [reviewExercises, setReviewExercises] = useState([]);
  const [nextLevel, setNextLevel]         = useState(null);
  const [refSection, setRefSection]       = useState(null);
  const chatEndRef = useRef(null);

  // ── Web Speech API ────────────────────────────────────────────────────────
  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "es-MX";
    utt.rate = 0.85;
    utt.pitch = 1;
    // Intentar usar una voz es-MX si está disponible
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang === "es-MX") || voices.find(v => v.lang.startsWith("pt"));
    if (ptVoice) utt.voice = ptVoice;
    window.speechSynthesis.speak(utt);
  };

  const speakDialogue = (lines) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    let delay = 0;
    lines.forEach((line) => {
      const utt = new SpeechSynthesisUtterance(line.text);
      utt.lang = "es-MX";
      utt.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang === "es-MX") || voices.find(v => v.lang.startsWith("pt"));
      if (ptVoice) utt.voice = ptVoice;
      window.speechSynthesis.speak(utt);
    });
  };
  const feedbackRef = useRef(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior:"smooth" }); }, [chatMessages]);
  useEffect(() => { if (exerciseFeedback) feedbackRef.current?.scrollIntoView({ behavior:"smooth", block:"nearest" }); }, [exerciseFeedback]);

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const getLvl  = id => LEVELS.find(l => l.id === id) || LEVELS[0];

  const saveProgress = (newProg) => {
    save("pb_progress", newProg); setProgress(newProg);
    // Actualizar racha
    const today = new Date().toDateString();
    setStreak(prev => {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newCount = prev.lastDate === today ? prev.count
                     : prev.lastDate === yesterday ? prev.count + 1 : 1;
      const ns = { count: newCount, lastDate: today };
      save("streak", ns); return ns;
    });
  };
  const saveLevel    = (lvl)    => { save("pb_level", lvl); };

  // ── Eval ──────────────────────────────────────────────────────────────────
  const startEval = () => {
    saveLevel(selectedLevel);
    const qs = shuffle(EVAL_QUESTIONS[selectedLevel] || EVAL_QUESTIONS.A1).slice(0,5);
    setEvalQs(qs); setEvalIdx(0); setEvalScore(0);
    setEvalAnswered(false); setEvalSelected(null); setScreen("eval");
  };

  const _handleEvalAnswer = (i) => {
    if (evalAnswered) return;
    setEvalSelected(i); setEvalAnswered(true);
    if (i === evalQs[evalIdx].ans) setEvalScore(s => s+1);
  };

  const nextEvalQ = () => {
    const correct  = evalSelected === evalQs[evalIdx].ans;
    const newScore = evalScore + (correct ? 1 : 0);
    if (evalIdx+1 >= evalQs.length) {
      const idx      = LEVEL_ORDER.indexOf(selectedLevel);
      const assigned = newScore >= 4 ? selectedLevel
                     : newScore === 3 ? (idx>0 ? LEVEL_ORDER[idx-1] : "A1")
                     : (idx>1 ? LEVEL_ORDER[idx-2] : "A1");
      saveLevel(assigned);
      setAssignedLevel(assigned); setScreen("result");
    } else {
      setEvalIdx(i => i+1); setEvalAnswered(false); setEvalSelected(null);
    }
  };

  // ── Lessons & Exercises ───────────────────────────────────────────────────
  const _updateStreak = () => {
    const today = new Date().toDateString();
    setStreak(prev => {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      let newCount = prev.lastDate === today ? prev.count
                   : prev.lastDate === yesterday ? prev.count + 1
                   : 1;
      const newStreak = { count: newCount, lastDate: today };
      save("streak", newStreak);
      return newStreak;
    });
  };

  // ── Notificaciones push ──────────────────────────────────────────────────
  const requestNotifications = async () => {
    if (!("Notification" in window)) return false;
    if (Notification.permission === "granted") return true;
    if (Notification.permission === "denied") return false;
    const perm = await Notification.requestPermission();
    return perm === "granted";
  };

  const scheduleReminder = () => {
    // Usar setTimeout para mostrar notificación local a las 20hs si no practicó hoy
    const now = new Date();
    const today = now.toDateString();
    const lastPractice = streak.lastDate;
    if (lastPractice === today) return; // Ya practicó hoy
    const target = new Date();
    target.setHours(20, 0, 0, 0);
    const ms = target.getTime() - now.getTime();
    if (ms > 0 && ms < 86400000) {
      setTimeout(() => {
        if (Notification.permission === "granted") {
          new Notification("🇪🇸 Pipa Akd — Espanhol", {
            body: streak.count > 0
              ? `🔥 ¡No pierdas tu racha de ${streak.count} días! Practicá hoy.`
              : "¡Hora de practicar português! 💪",
            icon: "/icon-192.png",
            tag: "daily-reminder"
          });
        }
      }, ms);
    }
  };

  const celebrate = (msg) => {
    setCelebrationMsg(msg);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const openLesson = (lesson, unit) => {
    setCurrentLesson(lesson);
    setCurrentUnit(unit);
    const isFirstLesson = unit.lessons[0]?.id === lesson.id;
    if (isFirstLesson && AULAS_TEORICAS[unit.id]) {
      setAulaUnit({ unit, lesson, aula: AULAS_TEORICAS[unit.id] });
      setShowAula(true);
      return;
    }
    setScreen("lesson");
  };

  const startLessonExercises = (lesson) => {
    const exs = shuffle([...lesson.exercises]);
    setLessonExercises(exs);
    setExerciseIdx(0);
    setCurrentExercise(exs[0]);
    setExerciseAnswered(false); setUserAnswer("");
    setExerciseFeedback(null); setAiFeedback(null);
    setReviewMode(false); setReviewExercises([]);
    setScreen("exercise");
  };

  const checkExercise = async () => {
    const ex = currentExercise;
    setExerciseAnswered(true);

    if (ex.type === "multiple_choice") {
      const ok = parseInt(userAnswer) === ex.answer;
      setExerciseFeedback({ ok, msg: ex.explanation });
      saveProgress({...progress, [ex.id]: ok});

    } else if (ex.type === "fill_blank") {
      const val = userAnswer.trim().toLowerCase();
      const ok  = ex.answer.some(a => val.includes(a.toLowerCase()));
      setExerciseFeedback({ ok, msg: ex.explanation });
      saveProgress({...progress, [ex.id]: ok});

    } else {
      // translation / free_writing — mostrar respuesta modelo para autocorrección
      if (ex.type === "free_writing" && userAnswer.trim().length < 15) {
        setExerciseAnswered(false);
        setExerciseFeedback({ ok:null, msg:"Por favor escribe una respuesta más completa." });
        return;
      }
      if (userAnswer.trim().length < 1) {
        setExerciseAnswered(false);
        setExerciseFeedback({ ok:null, msg:"Por favor escribe tu respuesta." });
        return;
      }
      // Construir la respuesta modelo a partir de explanation y/o answer
      let modelo = "";
      if (ex.explanation) modelo = ex.explanation;
      else if (Array.isArray(ex.answer)) modelo = ex.answer.join(" · ");
      else if (ex.answer) modelo = String(ex.answer);

      if (modelo) {
        // Hay respuesta modelo exacta — comparación directa
        setAiFeedback(
          `📝 TU RESPUESTA:\n${userAnswer}\n\n✅ RESPUESTA MODELO:\n${modelo}\n\n💡 Compara tu respuesta con el modelo. Fíjate en: ortografía, concordancia (género/número), conjugación verbal y vocabulario.`
        );
      } else {
        // Ejercicio abierto (sin única respuesta correcta) — checklist de autoevaluación
        const checklist = ex.prompt ? ex.prompt.replace(/^Incluí?:?\s*/i, "") : null;
        setAiFeedback(
          `📝 TU RESPUESTA:\n${userAnswer}\n\n✅ AUTOEVALUACIÓN — este ejercicio es abierto (sin respuesta única). Verifica que tu respuesta incluya:\n${checklist ? checklist.split("·").map(s => "• " + s.trim()).join("\n") : "• Todo lo que el enunciado pedía"}\n\n${ex.hint ? "💡 Dica: " + ex.hint : ""}\n\nSi cumpliste esos puntos con frases correctas en español, ¡está bien!`
        );
      }
      setExerciseFeedback({ ok:true, msg:"Autoevaluación disponible abajo 👇" });
      saveProgress({...progress, [ex.id]: true});
    }
  };

  const nextExercise = () => {
    // Si es el último ejercicio, celebrar
    if (exerciseIdx + 1 >= lessonExercises.length) {
      celebrate(`¡Lição "${currentLesson?.title?.substring(0,30)}" completada!`);
      // Verificar si completó toda la unidad
      if (currentUnit) {
        const unitEx = currentUnit.lessons.flatMap(l => l.exercises);
        const doneSoFar = unitEx.filter(e => progress[e.id]).length;
        const totalUnit = unitEx.length;
        // Si quedan solo los de esta lección por completar = unidad completa
        if (totalUnit - doneSoFar <= lessonExercises.length) {
          setTimeout(() => setShowRecs(true), 3200);
        }
      }
    }
    if (exerciseIdx+1 < lessonExercises.length) {
      const ni = exerciseIdx+1;
      setExerciseIdx(ni); setCurrentExercise(lessonExercises[ni]);
      setExerciseAnswered(false); setUserAnswer("");
      setExerciseFeedback(null); setAiFeedback(null);
    } else {
      // Check for wrong answers to review
      const wrongOnes = lessonExercises.filter(ex => progress[ex.id] === false);
      if (wrongOnes.length > 0 && !reviewMode) {
        // Enter review mode with wrong exercises
        setReviewMode(true);
        setReviewExercises(shuffle([...wrongOnes]));
        setExerciseIdx(0);
        setCurrentExercise(wrongOnes[0]);
        setExerciseAnswered(false); setUserAnswer("");
        setExerciseFeedback(null); setAiFeedback(null);
      } else {
        // Lesson done — check level progression
        setReviewMode(false);
        setReviewExercises([]);
        const units    = FULL_CURRICULUM[assignedLevel]?.units || [];
        const allEx    = units.flatMap(u => u.lessons.flatMap(l => l.exercises));
        const updProg  = {...progress};
        const done     = allEx.filter(e => updProg[e.id]).length;
        const pct      = allEx.length > 0 ? done / allEx.length : 0;
        const curIdx   = LEVEL_ORDER.indexOf(assignedLevel);
        if (pct >= 0.85 && curIdx < LEVEL_ORDER.length-1) {
          setNextLevel(LEVEL_ORDER[curIdx+1]);
          setShowLevelUp(true);
        } else {
          setScreen("session");
        }
      }
    }
  };

  const confirmLevelUp = () => {
    const next = nextLevel;
    saveLevel(next);
    save("pb_progress", {});
    setAssignedLevel(next); setSelectedLevel(next);
    setProgress({}); setShowLevelUp(false); setNextLevel(null);
    setScreen("session"); setSessionMode("curriculum");
  };

  // ── Chat ──────────────────────────────────────────────────────────────────
  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const msg  = chatInput.trim(); setChatInput("");
    const msgs = [...chatMessages, { role:"user", content:msg }];
    setChatMessages(msgs); setChatLoading(true);
    try {
      const sys = `Eres PROF. BRASIL, el mejor y más paciente profesor de português do Brasil. El alumno está en nivel ${assignedLevel || "B1"}.

REGLAS ABSOLUTAS:
- Siempre responde PRIMERO en português do Brasil, adaptado al nivel ${assignedLevel}
- Incluye traducciones al español entre [corchetes] cuando sea útil para el nivel
- Corrige errores INMEDIATAMENTE y con amabilidad: señala el error, da la forma correcta y explica brevemente
- Haz UNA pregunta de seguimiento al final para continuar la conversación
- Nivel A1-A2: frases muy simples, mucho vocabulario entre corchetes, máximo 3-4 oraciones
- Nivel B1-B2: estructuras más complejas, menos traducción, incluye expresiones idiomáticas
- Nivel C1-C2-Master: debate culto, matices, referencias culturales y literarias, mínima traducción
- Si el alumno escribe en español: responde en português con la traducción entre [corchetes]
- Elogia los aciertos genuinamente
- Eres paciente, nunca frustrante, siempre motivador`;
      const reply = await callAI(msgs.map(m => ({role:m.role, content:m.content})), sys);
      setChatMessages(prev => [...prev, { role:"assistant", content:reply }]);
    } catch(err) {
      const msg = err.message === "timeout"
        ? "Desculpe, demorei muito. Tente novamente! [Lo siento, tardé demasiado. ¡Intentá de nuevo!]"
        : `❌ Erro: ${err.message || "erro desconhecido"}`;
      setChatMessages(prev => [...prev, { role:"assistant", content: msg }]);
    }
    setChatLoading(false);
  };

  const _startSituation = async (ctx) => {
    const opening = `Olá Prof. Brasil! Quero praticar esta situação: "${ctx}". Pode começar a simulação você?`;
    setChatMessages([]);
    setChatInput("");
    setSessionMode("chat");
    // Enviar mensaje inicial automáticamente
    const msgs = [{ role:"user", content: opening }];
    setChatMessages(msgs);
    setChatLoading(true);
    try {
      const sys = `Eres PROF. BRASIL, el mejor y más paciente profesor de português do Brasil. El alumno está en nivel ${assignedLevel}. Habla SIEMPRE en português do Brasil. Corrige errores con amabilidad. Sé conversacional, natural y motivador. Máximo 3-4 frases por respuesta.`;
      const res = await fetch("/api/chat", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ messages: msgs, systemPrompt: sys })
      });
      const data = await res.json();
      const reply = data.text || "Olá! Vamos praticar? Como posso te ajudar?";
      setChatMessages([...msgs, { role:"assistant", content: reply }]);
    } catch(e) {
      setChatMessages([...msgs, { role:"assistant", content:"Olá! Vamos praticar português! Como posso te ajudar?" }]);
    }
    setChatLoading(false);
  };

  const resetApp = () => {
    if (window.confirm("¿Reiniciar todo el progreso y volver al inicio?")) {
      localStorage.clear(); window.location.reload();
    }
  };

  // ── Styles ────────────────────────────────────────────────────────────────
  const S    = { fontFamily:"var(--font-sans)", padding:"1rem 0" };
  const _card = { background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", padding:"1.25rem", marginBottom:"1rem" };
  const btn  = (e={}) => ({ cursor:"pointer", border:"0.5px solid var(--color-border-secondary)", borderRadius:"var(--border-radius-md)", padding:"9px 18px", fontSize:14, background:"transparent", color:"var(--color-text-primary)", fontFamily:"var(--font-sans)", ...e });
  const btnP = (e={}) => ({ ...btn(), background:"#0EA5E9", border:"none", color:"#fff", fontWeight:500, ...e });

  // ── Reference panel ───────────────────────────────────────────────────────
  if (refSection) {
    const data = REFERENCE[refSection];
    const titles = { pronouns:"Pronombres", contractions:"Contracciones", verbConjugations:"Conjugaciones Verbales", top100Verbs:"100 Verbos Esenciales", adjectives:"Adjetivos", nouns:"Sustantivos", spelling:"Ortografía", falseAmigos:"Falsos Amigos" };
    const icons  = { pronouns:"👤", contractions:"🔗", verbConjugations:"⚡", top100Verbs:"📋", adjectives:"📝", nouns:"📦", spelling:"✍️", falseAmigos:"⚠️" };

    return (
      <div style={S}>
        <button onClick={() => setRefSection(null)} style={{cursor:"pointer", border:"none", background:"transparent", color:"var(--color-text-tertiary)", fontFamily:"var(--font-sans)", fontSize:13, padding:0, marginBottom:16, display:"flex", alignItems:"center", gap:4}}>← Volver</button>
        {currentUnit && AULAS_TEORICAS[currentUnit.id] && (
          <button onClick={() => { setAulaUnit({ unit: currentUnit, lesson: currentLesson, aula: AULAS_TEORICAS[currentUnit.id] }); setShowAula(true); }} style={{cursor:"pointer", border:"none", background:"var(--color-background-secondary)", color:"var(--color-text-secondary)", fontFamily:"var(--font-sans)", fontSize:12, padding:"6px 12px", borderRadius:8, display:"flex", alignItems:"center", gap:4}}>📖 Aula Teórica</button>
        )}

        <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:16, padding:"16px 18px", marginBottom:16}}>
          <p style={{fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.75)", textTransform:"uppercase", letterSpacing:"0.06em", margin:"0 0 4px"}}>{icons[refSection]} Referência</p>
          <h1 style={{fontSize:20, fontWeight:800, color:"#fff", margin:0, letterSpacing:"-0.02em", fontFamily:"var(--font-sans)"}}>{titles[refSection]}</h1>
        </div>

        {data && data.sections && data.sections.map((sec, si) => (
          <div key={si} style={{marginBottom:16}}>
            <div style={{background:"var(--bg-accent)", borderRadius:12, padding:"10px 14px", marginBottom:10}}>
              <h2 style={{fontSize:14, fontWeight:700, color:"var(--text-accent)", margin:0, fontFamily:"var(--font-sans)"}}>{sec.title}</h2>
            </div>

            {sec.tip && (
              <div style={{display:"flex", gap:10, background:"var(--bg-success)", borderRadius:12, padding:"10px 14px", marginBottom:10}}>
                <span style={{fontSize:16, flexShrink:0}}>💡</span>
                <p style={{fontSize:13, color:"var(--text-success)", margin:0, lineHeight:1.6, fontWeight:500, fontFamily:"var(--font-sans)"}}>{sec.tip}</p>
              </div>
            )}

            {sec.headers && sec.rows && sec.rows.length > 0 && (
              <div style={{background:"var(--color-background-primary)", borderRadius:14, overflow:"hidden", boxShadow:"var(--shadow-card)"}}>
                <div style={{display:"flex", background:"var(--color-background-secondary)", borderBottom:"2px solid var(--color-accent)"}}>
                  {sec.headers.map((h, hi) => (
                    <div key={hi} style={{flex:1, padding:"9px 10px", fontSize:11, fontWeight:700, color:"var(--color-accent)", letterSpacing:"0.02em", fontFamily:"var(--font-sans)"}}>{h}</div>
                  ))}
                </div>
                {sec.rows.map((row, ri) => (
                  <div key={ri} style={{display:"flex", background:ri%2===0?"var(--color-background-primary)":"var(--color-background-secondary)", borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
                    {row.map((cell, ci) => (
                      <div key={ci} style={{flex:1, padding:"9px 10px", fontSize:13, color:"var(--color-text-primary)", fontWeight:400, lineHeight:1.4, fontFamily:"var(--font-sans)"}}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // ── Welcome ───────────────────────────────────────────────────────────────
  if (screen === "welcome") {
    // Paso 0: Bienvenida
    if (onboardStep === 0) return (
      <div style={{fontFamily:"var(--font-sans)", display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"100vh", padding:"2rem 1.25rem"}}>
        <div style={{textAlign:"center", marginBottom:"2.25rem"}}>
          <div style={{width:72, height:72, borderRadius:20, background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px", boxShadow:"0 4px 16px rgba(29,158,117,0.3)"}}>
            <span style={{fontSize:34}}>🇧🇷</span>
          </div>
          <h1 style={{fontSize:27, fontWeight:800, color:"var(--color-text-primary)", margin:"0 0 8px", letterSpacing:"-0.02em"}}>
            Pipa Akd — Aprenda Español
          </h1>
          <p style={{fontSize:15, color:"var(--color-text-secondary)", margin:0, lineHeight:1.5}}>
            Do zero à fluência real.<br/>A1 → Master.
          </p>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:10, marginBottom:"2.25rem"}}>
          {[
            { icon:"headphones", color:"var(--bg-accent)", colorIcon:"var(--text-accent)", title:"Shadowing real", desc:"Imite o ritmo e a entonação brasileira desde o primeiro dia" },
            { icon:"pencil", color:"var(--bg-pro)", colorIcon:"var(--text-pro)", title:"1.440 ejercicios", desc:"De A1 a Master — la progresión más completa del mercado" },
            { icon:"volume", color:"var(--bg-warning)", colorIcon:"var(--text-warning)", title:"Áudio em es-MX", desc:"Escute cada diálogo e pratique a pronúncia" },
          ].map(item => (
            <div key={item.title} style={{display:"flex", gap:14, alignItems:"center", background:"var(--color-background-primary)", borderRadius:16, padding:"14px 16px", boxShadow:"var(--shadow-card)"}}>
              <div style={{width:38, height:38, borderRadius:11, background:item.color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                <i className={`ti ti-${item.icon}`} style={{color:item.colorIcon, fontSize:19}} aria-hidden="true"></i>
              </div>
              <div>
                <p style={{fontSize:14, fontWeight:600, color:"var(--color-text-primary)", margin:"0 0 2px"}}>{item.title}</p>
                <p style={{fontSize:12.5, color:"var(--color-text-secondary)", margin:0, lineHeight:1.4}}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => setOnboardStep(1)} style={{cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, width:"100%", border:"none", borderRadius:16, padding:15, background:"var(--color-accent)", color:"#fff", fontSize:16, fontWeight:600, fontFamily:"var(--font-sans)", boxShadow:"0 2px 10px rgba(29,158,117,0.3)"}}>
          Começar agora <span style={{fontSize:17}}>→</span>
        </button>
        <p style={{textAlign:"center", fontSize:12, color:"var(--color-text-tertiary)", marginTop:12}}>
          Grátis · Sem publicidade · Progresso salvo
        </p>
      </div>
    );

    // Paso 1: Elegir nivel
    if (onboardStep === 1) return (
      <div style={{fontFamily:"var(--font-sans)", padding:"1rem 0"}}>
        <div style={{marginBottom:"1.5rem"}}>
          <p style={{fontSize:11, fontWeight:700, color:"var(--color-accent)", letterSpacing:"0.06em", textTransform:"uppercase", margin:"0 0 6px"}}>Passo 1 de 2</p>
          <h2 style={{fontSize:21, fontWeight:800, color:"var(--color-text-primary)", margin:"0 0 6px", letterSpacing:"-0.02em"}}>
            Em que nível você está?
          </h2>
          <p style={{fontSize:13, color:"var(--color-text-secondary)", margin:0}}>
            Escolha seu nível e faça uma avaliação rápida para confirmar.
          </p>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:8, marginBottom:"1.5rem"}}>
          {LEVELS.map(lv => (
            <div key={lv.id} onClick={() => setSelectedLevel(lv.id)}
              style={{cursor:"pointer", border:selectedLevel===lv.id ? `2px solid ${lv.text}` : "none", borderRadius:14, padding:"14px 16px", background:selectedLevel===lv.id ? lv.color : "var(--color-background-primary)", transition:"all 0.15s", display:"flex", justifyContent:"space-between", alignItems:"center", boxShadow:selectedLevel===lv.id?"none":"var(--shadow-card)"}}>
              <div>
                <span style={{fontSize:15, fontWeight:700, color:selectedLevel===lv.id ? lv.text : "var(--color-text-primary)", marginRight:10}}>{lv.label}</span>
                <span style={{fontSize:13, color:selectedLevel===lv.id ? lv.text : "var(--color-text-secondary)"}}>{lv.desc}</span>
              </div>
              {selectedLevel===lv.id && <span style={{color:lv.text, fontSize:20}}>✅</span>}
            </div>
          ))}
        </div>

        <button onClick={startEval} disabled={!selectedLevel} style={{cursor:selectedLevel?"pointer":"not-allowed", display:"flex", alignItems:"center", justifyContent:"center", gap:8, width:"100%", border:"none", borderRadius:16, padding:14, background:"var(--color-accent)", color:"#fff", fontSize:15, fontWeight:600, fontFamily:"var(--font-sans)", opacity:selectedLevel?1:0.4}}>
          Iniciar avaliação diagnóstica <span style={{fontSize:16}}>→</span>
        </button>
        <button onClick={() => setOnboardStep(0)} style={{cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, width:"100%", border:"none", background:"transparent", marginTop:12, fontSize:13, fontWeight:600, color:"var(--color-text-tertiary)", fontFamily:"var(--font-sans)", padding:8}}>
          <span style={{fontSize:14}}>←</span> Voltar
        </button>
      </div>
    );

    return null;
  }

  // ── Eval ──────────────────────────────────────────────────────────────────
  if (screen === "eval") {
    const q = evalQs[evalIdx]; if (!q) return null;
    return (
      <div style={S}>
        <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:20, padding:"18px 20px 22px", marginBottom:16}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14}}>
            <div>
              <p style={{fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.75)", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 3px"}}>Avaliação diagnóstica</p>
              <p style={{fontSize:18, fontWeight:700, color:"#fff", margin:0}}>{selectedLevel}</p>
            </div>
            <span style={{background:"rgba(255,255,255,0.18)", color:"#fff", fontSize:12, fontWeight:600, padding:"6px 12px", borderRadius:999}}>{evalIdx+1} / {evalQs.length}</span>
          </div>
          <div style={{height:6, background:"rgba(255,255,255,0.25)", borderRadius:999, overflow:"hidden"}}>
            <div style={{background:"#fff", height:"100%", borderRadius:999, width:`${((evalIdx)/evalQs.length)*100}%`, transition:"width 0.4s"}} />
          </div>
        </div>

        <div style={{background:"var(--color-background-primary)", borderRadius:18, padding:20, marginBottom:14, boxShadow:"var(--shadow-card)"}}>
          <p style={{fontSize:16, fontWeight:600, color:"var(--color-text-primary)", marginBottom:"1rem", lineHeight:1.5}}>{q.question}</p>
          {q.options.map((opt,i) => {
            let bg="var(--color-background-secondary)", border="1.5px solid transparent", color="var(--color-text-primary)";
            if (evalAnswered) {
              if (i===q.answer) { bg="var(--bg-success)"; border="1.5px solid var(--text-success)"; color="var(--text-success)"; }
              else if (parseInt(evalSelected)===i) { bg="#FCEBEB"; border="1.5px solid #E24B4A"; color="#A32D2D"; }
            } else if (parseInt(evalSelected)===i) { bg="var(--bg-accent)"; border="1.5px solid var(--text-accent)"; color="var(--text-accent)"; }
            return <button key={i} onClick={() => !evalAnswered && setEvalSelected(String(i))}
              style={{display:"block", width:"100%", textAlign:"left", cursor:evalAnswered?"default":"pointer", border, borderRadius:12, padding:"12px 16px", fontSize:14, fontWeight:500, background:bg, color, marginBottom:8, fontFamily:"var(--font-sans)", transition:"all 0.15s"}}>{opt}</button>;
          })}
        </div>

        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8}}>
          {!evalAnswered ? (
            <button onClick={() => setEvalAnswered(true)} disabled={evalSelected===null} style={{cursor:evalSelected===null?"not-allowed":"pointer", display:"flex", alignItems:"center", gap:7, border:"none", borderRadius:14, padding:"13px 22px", fontSize:14, fontWeight:600, background:"var(--color-accent)", color:"#fff", fontFamily:"var(--font-sans)", opacity:evalSelected===null?0.4:1}}>
              ✓ Confirmar
            </button>
          ) : (
            <button onClick={nextEvalQ} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:7, border:"none", borderRadius:14, padding:"13px 22px", fontSize:14, fontWeight:600, background:"var(--color-accent)", color:"#fff", fontFamily:"var(--font-sans)"}}>
              {evalIdx+1 < evalQs.length ? "Próxima →" : "Ver resultado →"}
            </button>
          )}
        </div>
      </div>
    );
  }


  if (screen === "result") {
    const lv = getLvl(assignedLevel);
    return (
      <div style={{...S, textAlign:"center"}}>
        <div style={{fontSize:48, marginBottom:12}}>📊</div>
        <p style={{fontSize:20, fontWeight:500, color:"var(--color-text-primary)", marginBottom:6}}>Resultado de la evaluación</p>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, margin:"1.25rem 0"}}>
          <div style={{background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", padding:"1rem"}}>
            <p style={{fontSize:12, color:"var(--color-text-secondary)", marginBottom:6}}>Nivel declarado</p>
            <p style={{fontSize:26, fontWeight:500, color:"var(--color-text-primary)", margin:0}}>{selectedLevel}</p>
          </div>
          <div style={{background:lv.color, borderRadius:"var(--border-radius-md)", padding:"1rem"}}>
            <p style={{fontSize:12, color:lv.text, marginBottom:6}}>Nivel asignado</p>
            <p style={{fontSize:26, fontWeight:500, color:lv.text, margin:0}}>{assignedLevel}</p>
          </div>
        </div>
        <div style={{background:"#E6F1FB", border:"0.5px solid #85B7EB", borderRadius:"var(--border-radius-md)", padding:"1rem", marginBottom:"1.5rem", textAlign:"left", fontSize:13, color:"#0C447C", lineHeight:1.7}}>
          {assignedLevel===selectedLevel
            ? `✅ ¡Confirmaste tu nivel ${selectedLevel}! Tu programa comienza aquí con desafíos progresivos diseñados para llevarte al siguiente nivel.`
            : LEVEL_ORDER.indexOf(assignedLevel) < LEVEL_ORDER.indexOf(selectedLevel)
              ? `📚 Tu base más sólida está en ${assignedLevel}. Esto es excelente — construiremos una base firme y avanzarás más rápido y con más confianza hacia ${selectedLevel}.`
              : `🌟 ¡Resultado impresionante! Empezarás en ${assignedLevel} para consolidar antes de avanzar.`}
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
          <button onClick={() => { setScreen("session"); setSessionMode("curriculum"); }} style={btnP()}>🚀 Comenzar programa</button>
          <button onClick={() => { setScreen("welcome"); setSelectedLevel(null); setAssignedLevel(null); }} style={btn()}>← Otro nivel</button>
        </div>
      </div>
    );
  }

  // ── Level Up ──────────────────────────────────────────────────────────────
  if (showLevelUp) {
    const lv = getLvl(nextLevel);
    return (
      <div style={{...S, textAlign:"center"}}>
        <div style={{fontSize:64, marginBottom:16}}>🎉</div>
        <p style={{fontSize:22, fontWeight:500, color:"var(--color-text-primary)", marginBottom:8}}>¡Nivel completado!</p>
        <p style={{fontSize:14, color:"var(--color-text-secondary)", marginBottom:"1.5rem", lineHeight:1.6}}>
          Completaste el nivel <strong>{assignedLevel}</strong> con excelente desempeño.<br/>¡Estás listo para el siguiente desafío!
        </p>
        <div style={{background:lv.color, borderRadius:"var(--border-radius-lg)", padding:"1.25rem", marginBottom:"1.5rem"}}>
          <p style={{fontSize:13, color:lv.text, marginBottom:4}}>Próximo nivel</p>
          <p style={{fontSize:36, fontWeight:500, color:lv.text, margin:"0 0 4px"}}>{nextLevel}</p>
          <p style={{fontSize:13, color:lv.text}}>{lv.desc}</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
          <button onClick={confirmLevelUp} style={btnP()}>🚀 Subir a {nextLevel}</button>
          <button onClick={() => { setShowLevelUp(false); setScreen("session"); }} style={btn()}>Seguir en {assignedLevel}</button>
        </div>
      </div>
    );
  }

  // ── Session ───────────────────────────────────────────────────────────────
  if (screen === "session") {
    const units  = FULL_CURRICULUM[assignedLevel]?.units || [];
    const allEx  = units.flatMap(u => u.lessons.flatMap(l => l.exercises));
    const done   = allEx.filter(e => progress[e.id]).length;
    const pct    = allEx.length > 0 ? Math.round((done/allEx.length)*100) : 0;

    return (
      <div style={S}>
        <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:20, padding:"18px 20px 22px", marginBottom:16}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14, flexWrap:"wrap", gap:10}}>
            <div>
              <p style={{fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.75)", letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 4px"}}>Pipa Akd — Espanhol</p>
              <p style={{fontSize:19, fontWeight:700, color:"#fff", margin:0, letterSpacing:"-0.02em"}}>Nível de Espanhol {assignedLevel}</p>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap"}}>
              {streak.count > 0 && (
                <div style={{display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.18)", borderRadius:999, padding:"6px 12px"}}>
                  <span style={{color:"#FFD580", fontSize:16}}>🔥</span>
                  <span style={{fontSize:13, fontWeight:700, color:"#fff"}}>{streak.count}</span>
                </div>
              )}
              <select
                value={assignedLevel}
                onChange={e => { setAssignedLevel(e.target.value); setProgress({}); setSessionMode("curriculum"); }}
                style={{fontSize:12, fontWeight:600, padding:"6px 10px", borderRadius:8, border:"none", background:"rgba(255,255,255,0.18)", color:"#fff", cursor:"pointer", fontFamily:"var(--font-sans)"}}>
                {["A1","A2","B1","B2","C1","C2","Master"].map(lv => (
                  <option key={lv} value={lv} style={{background:"#1A1A18", color:"#fff"}}>{lv}</option>
                ))}
              </select>
              <button onClick={async () => {
                  const ok = await requestNotifications();
                  if (ok) { scheduleReminder(); alert("✅ Notificaciones activadas. Te avisamos a las 20hs si no practicaste."); }
                  else alert("❌ Permiso denegado. Activá las notificaciones en la configuración de tu navegador.");
                }} style={{cursor:"pointer", border:"none", background:"rgba(255,255,255,0.18)", borderRadius:8, padding:"6px 9px", display:"flex", alignItems:"center"}} title="Activar recordatorios">
                <span style={{color:"#fff", fontSize:14}}>🔔</span>
              </button>
              <button onClick={resetApp} style={{cursor:"pointer", border:"none", background:"rgba(255,255,255,0.18)", borderRadius:8, padding:"6px 9px", display:"flex", alignItems:"center"}}>
                <span style={{color:"#fff", fontSize:14}}>↺</span>
              </button>
            </div>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            <div style={{flex:1, height:6, background:"rgba(255,255,255,0.25)", borderRadius:999, overflow:"hidden"}}>
              <div style={{width:`${pct}%`, height:"100%", background:"#fff", borderRadius:999, transition:"width 0.4s"}} />
            </div>
            <span style={{fontSize:12, fontWeight:600, color:"#fff"}}>{pct}%</span>
          </div>
          <p style={{fontSize:12, color:"rgba(255,255,255,0.75)", margin:"6px 0 0"}}>{done}/{allEx.length} ejercicios completados</p>
        </div>

        {/* Reference materials */}
        <div style={{display:"flex", gap:6, marginBottom:"1rem", flexWrap:"wrap"}}>
          <p style={{fontSize:12, color:"var(--color-text-secondary)", margin:"auto 4px auto 0"}}>Referência:</p>
          {[["pronouns","Pronombres"],["contractions","Contracciones"],["verbConjugations","Conjugaciones"],["top100Verbs","100 Verbos"],["adjectives","Adjetivos"],["nouns","Sustantivos"],["spelling","Ortografía"],["falseAmigos","Falsos Amigos"]].map(([k,l]) => (
            <button key={k} onClick={() => setRefSection(k)} style={btn({fontSize:12, padding:"4px 10px"})}>{l}</button>
          ))}
        </div>

        <div style={{display:"flex", gap:8, marginBottom:"1.25rem", flexWrap:"wrap"}}>
          {[["curriculum","book-2","Lecciones"],["situations","theater","Situaciones"],["stats","chart-bar","Progreso"]].map(([m,icon,l]) => (
            <button key={m} onClick={() => setSessionMode(m)} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:6, padding:"9px 16px", borderRadius:10, fontSize:13, fontWeight:600, fontFamily:"var(--font-sans)", background:sessionMode===m?"var(--color-accent)":"var(--color-background-primary)", color:sessionMode===m?"#fff":"var(--color-text-secondary)", border:sessionMode===m?"none":"0.5px solid var(--color-border-secondary)", boxShadow:sessionMode===m?"var(--shadow-card)":"none"}}>
              <i className={`ti ti-${icon}`} style={{fontSize:15}} aria-hidden="true"></i>
              {l}
            </button>
          ))}
        </div>

        {sessionMode==="curriculum" && <div>
          {units.map((unit,ui) => {
            const unitEx   = unit.lessons.flatMap(l => l.exercises);
            const unitDone = unitEx.filter(e => progress[e.id]).length;
            const unitComplete = unitDone===unitEx.length && unitEx.length>0;
            return (
              <div key={unit.id} style={{background:"var(--color-background-primary)", borderRadius:16, padding:18, marginBottom:14, boxShadow:"var(--shadow-card)"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14, gap:8}}>
                  <div style={{display:"flex", alignItems:"center", gap:10}}>
                    <div style={{width:34, height:34, borderRadius:10, background:unitComplete?"var(--bg-success)":"var(--color-background-secondary)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                      <span style={{fontSize:17, color:unitComplete?"var(--text-success)":"var(--color-text-tertiary)"}}>{unitComplete ? "✓" : "📚"}</span>
                    </div>
                    <div>
                      <p style={{fontSize:11, fontWeight:700, color:"var(--color-accent)", letterSpacing:"0.04em", textTransform:"uppercase", margin:"0 0 2px"}}>Unidad {ui+1}</p>
                      <p style={{fontSize:14.5, fontWeight:600, color:"var(--color-text-primary)", margin:0}}>{unit.title}</p>
                    </div>
                  </div>
                  <span style={{fontSize:12, fontWeight:600, color:unitComplete?"var(--text-success)":"var(--color-text-secondary)", whiteSpace:"nowrap", flexShrink:0}}>{unitDone}/{unitEx.length}</span>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:8}}>
                  {unit.lessons.map((lesson,li) => {
                    const lessDone = lesson.exercises.filter(e => progress[e.id]).length;
                    const lessTotal = lesson.exercises.length;
                    const allDone  = lessDone === lessTotal && lessTotal > 0;
                    return (
                      <div key={lesson.id} style={{borderRadius:12, padding:"12px 14px", background:allDone?"var(--bg-success)":"var(--color-background-secondary)"}}>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8, gap:8}}>
                          <p style={{fontSize:13.5, fontWeight:600, color:"var(--color-text-primary)", margin:0, display:"flex", alignItems:"center", gap:6}}>
                            {allDone && <span style={{color:"var(--text-success)", fontSize:15}}>✅</span>}
                            {li+1}. {lesson.title}
                          </p>
                          <span style={{fontSize:11, color:"var(--color-text-tertiary)", whiteSpace:"nowrap", flexShrink:0}}>{lessDone}/{lessTotal}</span>
                        </div>
                        <div style={{display:"flex", gap:8}}>
                          <button onClick={() => openLesson(lesson, unit)} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:5, border:"0.5px solid var(--color-border-secondary)", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:600, background:"var(--color-background-primary)", color:"var(--color-text-primary)", fontFamily:"var(--font-sans)"}}>
                            <span style={{fontSize:13}}>📖</span> Ver
                          </button>
                          <button onClick={() => startLessonExercises(lesson)} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:5, border:"none", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:600, background:"var(--color-accent)", color:"#fff", fontFamily:"var(--font-sans)"}}>
                            <span style={{fontSize:13}}>✏️</span> Praticar
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {pct >= 50 && pct < 85 && <div style={{background:"var(--bg-success)", borderRadius:16, padding:"1.1rem", textAlign:"center", fontSize:13.5, color:"var(--text-success)", marginTop:8, fontWeight:500}}>
            <span style={{fontSize:18, display:"block", marginBottom:6}}>🎯</span>
            {pct}% completado. Necesitás o 85% para subir de nível. Continua assim!
          </div>}
        </div>}

        {sessionMode==="stats" && <div>
          <div style={{background:"var(--color-background-primary)", borderRadius:16, padding:18, boxShadow:"var(--shadow-card)"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}><span style={{fontSize:20}}>📊</span><h2 style={{fontSize:15, fontWeight:700, color:"var(--color-text-primary)", margin:0}}>Mi progreso en {assignedLevel}</h2></div>
            {(() => {
              const units = FULL_CURRICULUM[assignedLevel]?.units || [];
              return units.map((unit, ui) => {
                const unitEx = unit.lessons.flatMap(l => l.exercises);
                const correct = unitEx.filter(e => progress[e.id] === true).length;
                const wrong = unitEx.filter(e => progress[e.id] === false).length;
                const pending = unitEx.filter(e => progress[e.id] === undefined).length;
                const unitPct = unitEx.length > 0 ? Math.round((correct/unitEx.length)*100) : 0;
                return (
                  <div key={unit.id} style={{marginBottom:"1.25rem"}}>
                    <div style={{display:"flex", justifyContent:"space-between", marginBottom:6}}>
                      <p style={{fontSize:13, fontWeight:500, color:"var(--color-text-primary)", margin:0}}>Unidad {ui+1}: {unit.title}</p>
                      <span style={{fontSize:12, color:"#0369A1"}}>{unitPct}%</span>
                    </div>
                    <div style={{background:"var(--color-background-secondary)", borderRadius:99, height:8, marginBottom:8}}>
                      <div style={{background:"#0EA5E9", height:8, borderRadius:99, width:`${unitPct}%`, transition:"width 0.4s"}} />
                    </div>
                    <div style={{display:"flex", gap:12, fontSize:12}}>
                      <span style={{color:"#0369A1"}}>✅ {correct} correctos</span>
                      <span style={{color:"#A32D2D"}}>❌ {wrong} errores</span>
                      <span style={{color:"var(--color-text-tertiary)"}}>⏳ {pending} pendientes</span>
                    </div>
                    {wrong > 0 && (
                      <button onClick={() => {
                        const wrongExs = unit.lessons.flatMap(l => l.exercises).filter(e => progress[e.id] === false);
                        if (wrongExs.length > 0) {
                          setCurrentLesson(unit.lessons[0]);
                          setCurrentUnit(unit);
                          setLessonExercises(wrongExs);
                          setReviewMode(true);
                          setReviewExercises(wrongExs);
                          setExerciseIdx(0);
                          setCurrentExercise(wrongExs[0]);
                          setExerciseAnswered(false); setUserAnswer("");
                          setExerciseFeedback(null); setAiFeedback(null);
                          setScreen("exercise");
                        }
                      }} style={{...btn({fontSize:12, padding:"5px 10px", marginTop:6}), background:"#FAEEDA", color:"#633806", border:"1px solid #F0C060"}}>
                        🔄 Repasar {wrong} error{wrong>1?"es":""}
                      </button>
                    )}
                  </div>
                );
              });
            })()}
          </div>
        </div>}

        {sessionMode==="situations" && <div>
          <div style={{display:"flex", alignItems:"center", gap:10, background:"var(--bg-accent)", borderRadius:14, padding:"12px 16px", marginBottom:16}}>
            <span style={{color:"var(--text-accent)", fontSize:18, flexShrink:0}}>ℹ️</span>
            <p style={{fontSize:13, color:"var(--text-accent)", margin:0, lineHeight:1.5}}>Elegí uma situação e leia o diálogo em voz alta para praticar o ritmo e a pronúncia.</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {(DIALOGUES[assignedLevel]||[]).map((d,i) => (
              <button key={i} onClick={() => { setCurrentDialogue(d); setSessionMode("dialogue"); }}
                style={{display:"flex", alignItems:"center", gap:14, width:"100%", textAlign:"left", cursor:"pointer", border:"none", borderRadius:16, padding:"16px 18px", fontSize:14, background:"var(--color-background-primary)", color:"var(--color-text-primary)", fontFamily:"var(--font-sans)", boxShadow:"var(--shadow-card)"}}>
                <div style={{width:42, height:42, borderRadius:12, background:"var(--bg-accent)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0}}>{d.emoji}</div>
                <p style={{fontSize:14.5, fontWeight:600, margin:0, flex:1}}>{d.title}</p>
                <span style={{color:"var(--color-accent)", fontSize:20, flexShrink:0}}>›</span>
              </button>
            ))}
            {!(DIALOGUES[assignedLevel]||[]).length && (CONVERSATIONS[assignedLevel]||[]).map((ctx,i) => (
              <div key={i} style={{display:"flex", alignItems:"center", gap:14, borderRadius:16, padding:"16px 18px", fontSize:14, color:"var(--color-text-secondary)", background:"var(--color-background-primary)", boxShadow:"var(--shadow-card)"}}>
                <span style={{color:"var(--color-text-tertiary)", fontSize:20, flexShrink:0}}>🎭</span>
                {ctx}
              </div>
            ))}
          </div>
        </div>}

        {sessionMode==="dialogue" && currentDialogue && <div>
          <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:20, padding:"18px 20px 22px", marginBottom:16}}>
            <button onClick={() => setSessionMode("situations")} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:6, border:"none", background:"rgba(255,255,255,0.18)", borderRadius:999, padding:"7px 14px", marginBottom:14}}>
              <span style={{color:"#fff", fontSize:16}}>←</span>
              <span style={{color:"#fff", fontSize:13, fontWeight:600, fontFamily:"var(--font-sans)"}}>Volver</span>
            </button>
            <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:14}}>
              <div style={{width:42, height:42, borderRadius:12, background:"rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0}}>{currentDialogue.emoji}</div>
              <p style={{fontSize:18, fontWeight:700, color:"#fff", margin:0, letterSpacing:"-0.01em"}}>{currentDialogue.title}</p>
            </div>
            <div style={{display:"flex", gap:8}}>
              <button onClick={() => speakDialogue(currentDialogue.lines)} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:6, border:"none", borderRadius:10, padding:"8px 16px", fontSize:13, fontWeight:600, background:"#fff", color:"var(--color-accent-dark)", fontFamily:"var(--font-sans)"}}>
                <span style={{fontSize:14}}>▶</span> Escuchar diálogo
              </button>
              <button onClick={() => window.speechSynthesis.cancel()} style={{cursor:"pointer", border:"none", borderRadius:10, padding:"6px 12px", background:"rgba(255,255,255,0.18)", fontSize:14, color:"#fff", fontWeight:700, lineHeight:1, fontFamily:"var(--font-sans)"}}>
                ■
              </button>
            </div>
          </div>

          <div style={{background:"var(--color-background-primary)", borderRadius:18, padding:16, marginBottom:14, boxShadow:"var(--shadow-card)"}}>
            {currentDialogue.lines.map((line,i) => (
              <div key={i} style={{display:"flex", justifyContent:line.role==="user"?"flex-end":"flex-start", marginBottom:i<currentDialogue.lines.length-1?10:0}}>
                <div style={{maxWidth:"85%", display:"flex", flexDirection:"column", gap:3}}>
                  <span style={{fontSize:11, fontWeight:600, color:"var(--color-text-tertiary)", paddingLeft:line.role==="user"?0:14, paddingRight:line.role==="user"?14:0, textAlign:line.role==="user"?"right":"left"}}>{line.speaker}</span>
                  <div style={{display:"flex", alignItems:"center", gap:8, background:line.role==="user"?"var(--color-accent)":"var(--color-background-secondary)", borderRadius:16, padding:"10px 14px", flexDirection:line.role==="user"?"row-reverse":"row"}}>
                    <span style={{fontSize:13.5, color:line.role==="user"?"#fff":"var(--color-text-primary)", lineHeight:1.5}}>{line.text}</span>
                    <button onClick={() => speakText(line.text)} style={{cursor:"pointer", border:"none", background:"transparent", padding:0, flexShrink:0}}>
                      <span style={{color:line.role==="user"?"rgba(255,255,255,0.8)":"var(--color-text-tertiary)", fontSize:15}}>🔊</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{display:"flex", alignItems:"flex-start", gap:10, background:"var(--bg-success)", borderRadius:14, padding:"12px 16px"}}>
            <span style={{color:"var(--text-success)", fontSize:17, flexShrink:0, marginTop:1}}>💡</span>
            <p style={{fontSize:13, color:"var(--text-success)", margin:0, lineHeight:1.6}}><strong>Dica:</strong> Presta atenção na entonação e no ritmo. Lê devagar primeiro, depois mais rápido. Tenta gravar sua voz e comparar!</p>
          </div>

        </div>}
      {/* ── CHAT CON PROF. BRASIL ── */}
      {sessionMode==="chat" && <div style={{display:"flex", flexDirection:"column", height:"calc(100vh - 200px)", minHeight:400}}>
        <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:"1rem"}}>
          <button onClick={() => setSessionMode("situations")} style={{cursor:"pointer", border:"0.5px solid var(--color-border-secondary)", borderRadius:"var(--border-radius-md)", padding:"6px 12px", fontSize:13, background:"transparent", color:"var(--color-text-primary)", fontFamily:"var(--font-sans)"}}>← Volver</button>
          <p style={{fontSize:14, fontWeight:500, color:"var(--color-text-primary)", margin:0}}>🤖 Prof. Brasil</p>
        </div>
        <div style={{flex:1, overflowY:"auto", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", padding:"1rem", marginBottom:"0.75rem", display:"flex", flexDirection:"column", gap:10}}>
          {chatMessages.length === 0 && (
            <div style={{textAlign:"center", color:"var(--color-text-tertiary)", fontSize:13, marginTop:"2rem"}}>
              <p style={{fontSize:32, margin:"0 0 8px"}}>🤖</p>
              <p style={{margin:0}}>Enviando tu mensaje al Prof. Brasil...</p>
            </div>
          )}
          {chatMessages.map((msg, i) => (
            <div key={i} style={{display:"flex", justifyContent:msg.role==="user"?"flex-end":"flex-start"}}>
              <div style={{maxWidth:"85%", padding:"10px 14px", borderRadius:"var(--border-radius-lg)", background:msg.role==="user"?"#0EA5E9":"var(--color-background-secondary)", color:msg.role==="user"?"#fff":"var(--color-text-primary)", fontSize:13, lineHeight:1.65}}>
                {msg.role==="assistant" && <span style={{fontSize:11, fontWeight:600, color:"#0369A1", display:"block", marginBottom:4}}>🤖 Prof. Brasil</span>}
                {msg.content}
              </div>
            </div>
          ))}
          {chatLoading && (
            <div style={{display:"flex", justifyContent:"flex-start"}}>
              <div style={{padding:"10px 14px", borderRadius:"var(--border-radius-lg)", background:"var(--color-background-secondary)", fontSize:13, color:"var(--color-text-secondary)"}}>
                ✍️ Prof. Brasil está escribiendo...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div style={{display:"flex", gap:8}}>
          <input
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            onKeyDown={e => e.key==="Enter" && !e.shiftKey && !chatLoading && sendChat()}
            placeholder="Escribe en português..."
            style={{flex:1, padding:"10px 14px", border:"0.5px solid var(--color-border-secondary)", borderRadius:"var(--border-radius-md)", fontSize:14, background:"var(--color-background-primary)", color:"var(--color-text-primary)", fontFamily:"var(--font-sans)", outline:"none"}}
          />
          <button onClick={sendChat} disabled={chatLoading || !chatInput.trim()} style={{padding:"10px 18px", background:chatLoading||!chatInput.trim()?"var(--color-background-secondary)":"#0EA5E9", color:chatLoading||!chatInput.trim()?"var(--color-text-tertiary)":"#fff", border:"none", borderRadius:"var(--border-radius-md)", fontSize:14, fontWeight:600, cursor:chatLoading||!chatInput.trim()?"default":"pointer", fontFamily:"var(--font-sans)"}}>
            {chatLoading ? "..." : "→"}
          </button>
        </div>
      </div>}
            <CelebrationOverlay show={showCelebration} msg={celebrationMsg} />
      <RecsOverlay show={showRecs} level={assignedLevel} onClose={() => setShowRecs(false)} />
      </div>
    );
  }

  // ── Lesson ────────────────────────────────────────────────────────────────
  if (screen === "lesson") {
    const lesson = currentLesson;
    if (!lesson) return null;

    // Soporte para formato antiguo (A1/A2/B1) y nuevo (B2+)
    const hasShadowing = !!lesson.shadowing;
    const hasShadowingDialogue = !!lesson.shadowingDialogue;
    const hasKeyPhrases = !!lesson.keyPhrases;
    const hasMemoryPhrases = !!lesson.memoryPhrases;
    const hasGrammar = !!lesson.grammar;
    const hasGuidedProduction = !!lesson.guidedProduction;
    const hasOralProduction = !!lesson.oralProduction;
    const hasContent = !!lesson.content;

    const lessDone  = lesson.exercises.filter(e => progress[e.id]).length;
    const lessTotal = lesson.exercises.length;

    // Tarjeta reutilizable con ícono Tabler en cuadrado de color
    const Block = ({ bgIcon, colorIcon, icon, title, children, actions }) => (
      <div style={{background:"var(--color-background-primary)", borderRadius:16, padding:16, marginBottom:12, boxShadow:"var(--shadow-card)"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12, gap:8, flexWrap:"wrap"}}>
          <div style={{display:"flex", alignItems:"center", gap:10}}>
            <div style={{width:36, height:36, borderRadius:10, background:bgIcon, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
              <span style={{color:colorIcon, fontSize:18}}>{icon}</span>
            </div>
            <p style={{fontSize:14, fontWeight:600, color:"var(--color-text-primary)", margin:0}}>{title}</p>
          </div>
          {actions}
        </div>
        {children}
      </div>
    );

    const SoundBtn = ({ onPlay }) => (
      <div style={{display:"flex", gap:6}}>
        <button onClick={onPlay} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:5, border:"none", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:600, background:"var(--color-accent)", color:"#fff", fontFamily:"var(--font-sans)"}}>
          <span style={{fontSize:12}}>▶</span> Escuchar
        </button>
        <button onClick={() => window.speechSynthesis.cancel()} style={{cursor:"pointer", border:"none", borderRadius:8, padding:"6px 12px", background:"var(--color-background-secondary)", fontSize:14, color:"var(--color-text-primary)", fontFamily:"var(--font-sans)", fontWeight:700, lineHeight:1}}>
          ■
        </button>
      </div>
    );

    return (
      <div style={{fontFamily:"var(--font-sans)"}}>
            {/* ── Aula Teórica Overlay ────────────────────────────────────── */}
        {showAula && aulaUnit && (
          <div style={{position:"fixed", top:0, left:0, right:0, bottom:0, background:"var(--color-background-primary)", zIndex:9999, overflowY:"auto"}}>
            <div style={{maxWidth:480, margin:"0 auto", padding:16}}>
              <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:16}}>
                <button onClick={() => { setShowAula(false); setAulaUnit(null); }} style={{cursor:"pointer", border:"none", background:"transparent", color:"var(--color-text-tertiary)", fontFamily:"var(--font-sans)", fontSize:13, padding:0, display:"flex", alignItems:"center", gap:4}}>← Volver</button>
              </div>
              <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:16, padding:"16px 18px", marginBottom:16}}>
                <p style={{fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.75)", textTransform:"uppercase", letterSpacing:"0.06em", margin:"0 0 4px"}}>📖 Aula Teórica · {aulaUnit.unit.title}</p>
                <h1 style={{fontSize:18, fontWeight:800, color:"#fff", margin:0, letterSpacing:"-0.02em"}}>{aulaUnit.aula.title}</h1>
              </div>
              {aulaUnit.aula.sections && aulaUnit.aula.sections.map((sec, si) => (
                <div key={si} style={{marginBottom:16}}>
                  <div style={{background:"var(--bg-accent)", borderRadius:12, padding:"10px 14px", marginBottom:10}}>
                    <h2 style={{fontSize:14, fontWeight:700, color:"var(--text-accent)", margin:0}}>{sec.title}</h2>
                  </div>
                  {sec.tip && (
                    <div style={{display:"flex", gap:10, background:"var(--bg-success)", borderRadius:12, padding:"10px 14px", marginBottom:10}}>
                      <span style={{fontSize:16, flexShrink:0}}>💡</span>
                      <p style={{fontSize:13, color:"var(--text-success)", margin:0, lineHeight:1.6, fontWeight:500}}>{sec.tip}</p>
                    </div>
                  )}
                  {sec.headers && sec.rows && (
                    <div style={{background:"var(--color-background-secondary)", borderRadius:12, overflow:"hidden"}}>
                      <div style={{display:"grid", gridTemplateColumns:`repeat(${sec.headers.length}, 1fr)`, background:"var(--bg-accent)", padding:"8px 12px", gap:8}}>
                        {sec.headers.map((h,hi) => <span key={hi} style={{fontSize:11, fontWeight:700, color:"var(--text-accent)", textTransform:"uppercase", letterSpacing:"0.04em"}}>{h}</span>)}
                      </div>
                      {sec.rows.map((row,ri) => (
                        <div key={ri} style={{display:"grid", gridTemplateColumns:`repeat(${sec.headers.length}, 1fr)`, padding:"8px 12px", gap:8, borderTop:"1px solid var(--color-border-primary)", background:ri%2===0?"var(--color-background-secondary)":"var(--color-background-primary)"}}>
                          {row.map((cell,ci) => <span key={ci} style={{fontSize:12, color:"var(--color-text-primary)", lineHeight:1.5}}>{cell}</span>)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => { setShowAula(false); setAulaUnit(null); setScreen("lesson"); }} style={{width:"100%", padding:"14px", background:"var(--color-accent)", color:"#fff", border:"none", borderRadius:14, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"var(--font-sans)", marginTop:8}}>
                ▶ Empezar lección
              </button>
            </div>
          </div>
        )}
        {/* Header con gradiente */}
        <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:20, padding:"20px 20px 26px", marginBottom:14}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16}}>
            <button onClick={() => setScreen("session")} style={{cursor:"pointer", border:"none", background:"rgba(255,255,255,0.18)", borderRadius:999, padding:"7px 14px", display:"flex", alignItems:"center", gap:6}}>
              <span style={{color:"#fff", fontSize:16}}>←</span>
              <span style={{color:"#fff", fontSize:13, fontWeight:600, fontFamily:"var(--font-sans)"}}>Volver</span>
            </button>
            {streak.count > 0 && (
              <div style={{display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.18)", padding:"5px 12px", borderRadius:999}}>
                <span style={{color:"#FFD580", fontSize:15}}>🔥</span>
                <span style={{color:"#fff", fontSize:12, fontWeight:600}}>{streak.count} {streak.count===1?"dia":"dias"}</span>
              </div>
            )}
          </div>
          <p style={{color:"rgba(255,255,255,0.75)", fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 5px"}}>{currentUnit?.title || "Lección"}</p>
          <h1 style={{color:"#fff", fontSize:21, fontWeight:700, margin:"0 0 14px", lineHeight:1.25, letterSpacing:"-0.02em"}}>{lesson.title}</h1>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            <div style={{flex:1, height:6, background:"rgba(255,255,255,0.25)", borderRadius:999, overflow:"hidden"}}>
              <div style={{width:`${lessTotal>0?(lessDone/lessTotal)*100:0}%`, height:"100%", background:"#fff", borderRadius:999, transition:"width 0.4s"}} />
            </div>
            <span style={{color:"#fff", fontSize:12, fontWeight:600}}>{lessDone}/{lessTotal}</span>
          </div>
        </div>

        {/* OBJECTIVES */}
        {lesson.objectives && (
          <Block bgIcon="var(--bg-success)" colorIcon="var(--text-success)" icon="🎯" title="Objetivos de la lección">
            {lesson.objectives.map((o,i) => (
              <p key={i} style={{fontSize:13, color:"var(--color-text-secondary)", margin:"4px 0", lineHeight:1.5}}>· {o}</p>
            ))}
          </Block>
        )}

        {/* SHADOWING — formato antiguo (string) */}
        {hasShadowing && (
          <Block bgIcon="var(--bg-accent)" colorIcon="var(--text-accent)" icon="🎧" title="Shadowing"
            actions={<SoundBtn onPlay={() => speakText(lesson.shadowing)} />}>
            {lesson.shadowing.split("\n").map((line,i,arr) => (
              line.trim() ? (
                <div key={i} style={{display:"flex", alignItems:"flex-start", gap:8, padding:"7px 0", borderBottom:i<arr.filter(l=>l.trim()).length-1?"0.5px solid var(--color-border-tertiary)":"none"}}>
                  <span style={{fontSize:13, color:"var(--color-text-secondary)", fontStyle:"italic", flex:1, lineHeight:1.5}}>{line}</span>
                  <button onClick={() => speakText(line)} style={{cursor:"pointer", border:"none", background:"transparent", padding:0, flexShrink:0}}>
                    <span style={{color:"var(--color-text-tertiary)", fontSize:16}}>🔊</span>
                  </button>
                </div>
              ) : null
            ))}
          </Block>
        )}

        {/* SHADOWING DIALOGUE — formato nuevo (objeto con lines) */}
        {hasShadowingDialogue && (
          <Block bgIcon="var(--bg-accent)" colorIcon="var(--text-accent)" icon="🎧" title={lesson.shadowingDialogue.title}
            actions={<SoundBtn onPlay={() => speakDialogue(lesson.shadowingDialogue.lines)} />}>
            {lesson.shadowingDialogue.lines.map((line,i,arr) => (
              <div key={i} style={{display:"flex", alignItems:"flex-start", gap:8, padding:"7px 0", borderBottom:i<arr.length-1?"0.5px solid var(--color-border-tertiary)":"none"}}>
                <span style={{fontSize:13, color:"var(--color-text-secondary)", flex:1, lineHeight:1.5}}><span style={{fontWeight:700, color:"var(--color-text-primary)"}}>{line.speaker}: </span><span style={{fontStyle:"italic"}}>{line.text}</span></span>
                <button onClick={() => speakText(line.text)} style={{cursor:"pointer", border:"none", background:"transparent", padding:0, flexShrink:0}}>
                  <span style={{color:"var(--color-text-tertiary)", fontSize:16}}>🔊</span>
                </button>
              </div>
            ))}
          </Block>
        )}

        {/* FRASES CLAVE — formato antiguo (badges en píldora) */}
        {hasMemoryPhrases && (
          <Block bgIcon="var(--bg-pro)" colorIcon="var(--text-pro)" icon="🔤" title="Frases para memorizar">
            <div style={{display:"flex", flexWrap:"wrap", gap:6}}>
              {Array.isArray(lesson.memoryPhrases) && lesson.memoryPhrases.map((p,i) => (
                <span key={i} style={{fontSize:12.5, background:"var(--bg-pro)", color:"var(--text-pro)", padding:"6px 12px", borderRadius:999, fontWeight:500}}>{p}</span>
              ))}
            </div>
          </Block>
        )}

        {/* KEY PHRASES — formato nuevo (lista, suelen ser más largas) */}
        {hasKeyPhrases && (
          <Block bgIcon="var(--bg-pro)" colorIcon="var(--text-pro)" icon="🔤" title="Frases e conceitos-chave">
            {Array.isArray(lesson.keyPhrases) && lesson.keyPhrases.map((p,i) => (
              <p key={i} style={{fontSize:13, color:"var(--color-text-secondary)", margin:"4px 0", lineHeight:1.5}}>· {p}</p>
            ))}
          </Block>
        )}

        {/* PRODUCCIÓN ORAL — formato antiguo (string o array) */}
        {hasOralProduction && (
          <Block bgIcon="var(--bg-warning)" colorIcon="var(--text-warning)" icon="🎤" title="Produção oral guiada">
            {Array.isArray(lesson.oralProduction)
              ? lesson.oralProduction.map((q,i) => (
                  <p key={i} style={{fontSize:13, color:"var(--color-text-secondary)", margin:"4px 0", lineHeight:1.5}}>· {q}</p>
                ))
              : <p style={{fontSize:13, color:"var(--color-text-secondary)", margin:0, lineHeight:1.6}}>{lesson.oralProduction}</p>
            }
          </Block>
        )}

        {/* GUIDED PRODUCTION — formato nuevo */}
        {hasGuidedProduction && (
          <Block bgIcon="var(--bg-warning)" colorIcon="var(--text-warning)" icon="🎤" title="Produção guiada">
            {lesson.guidedProduction.map((q,i) => (
              <p key={i} style={{fontSize:13, color:"var(--color-text-secondary)", margin:"4px 0", lineHeight:1.5}}>· {q}</p>
            ))}
          </Block>
        )}

        {/* CONTENT — formato antiguo */}
        {hasContent && (
          <Block bgIcon="var(--color-background-secondary)" colorIcon="var(--color-text-tertiary)" icon="📖" title="Conteúdo">
            <p style={{fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.7, margin:0}}>{lesson.content}</p>
          </Block>
        )}

        {/* GRAMMAR — formato nuevo */}
        {hasGrammar && (
          <Block bgIcon="var(--color-background-secondary)" colorIcon="var(--color-text-tertiary)" icon="📖" title={lesson.grammar.title}>
            <p style={{fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.7, margin:"0 0 10px"}}>{lesson.grammar.explanation}</p>
            {lesson.grammar.conjugation && (
              <p style={{fontSize:12.5, color:"var(--color-text-secondary)", fontStyle:"italic", borderTop:"0.5px solid var(--color-border-tertiary)", paddingTop:10, margin:0, lineHeight:1.6}}>{lesson.grammar.conjugation}</p>
            )}
          </Block>
        )}

        <button onClick={() => startLessonExercises(lesson)} style={{cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, width:"100%", marginTop:6, padding:16, background:"var(--color-accent)", color:"#fff", border:"none", borderRadius:16, fontSize:15, fontWeight:600, fontFamily:"var(--font-sans)"}}>
          Practicar esta lección <span style={{fontSize:16}}>→</span>
        </button>
      </div>
    );
  }


  if (screen === "exercise") {
    const ex   = currentExercise; if (!ex) return null;
    const total = reviewMode ? reviewExercises.length : lessonExercises.length;
    return (
      <div style={S}>
        <div style={{background:"linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))", borderRadius:20, padding:"16px 20px 20px", marginBottom:16}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
            <button onClick={() => { setReviewMode(false); setReviewExercises([]); setScreen("session"); }} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:6, border:"none", background:"rgba(255,255,255,0.18)", borderRadius:999, padding:"7px 14px"}}>
              <span style={{color:"#fff", fontSize:16}}>←</span>
              <span style={{color:"#fff", fontSize:13, fontWeight:600, fontFamily:"var(--font-sans)"}}>Volver</span>
            </button>
            <div style={{textAlign:"right"}}>
              <p style={{fontSize:11, color:"rgba(255,255,255,0.75)", margin:0}}>{reviewMode ? "Repaso de errores" : currentLesson?.title}</p>
              <p style={{fontSize:12, fontWeight:600, color:"#fff", margin:"2px 0 0"}}>Ejercicio {exerciseIdx+1} de {total}</p>
            </div>
          </div>
          <div style={{height:6, background:"rgba(255,255,255,0.25)", borderRadius:999, overflow:"hidden"}}>
            <div style={{background:"#fff", height:"100%", borderRadius:999, width:`${(exerciseIdx/total)*100}%`, transition:"width 0.4s"}} />
          </div>
        </div>

        {reviewMode && (
          <div style={{display:"flex", alignItems:"center", gap:10, background:"var(--bg-warning)", borderRadius:14, padding:"12px 16px", marginBottom:14}}>
            <span style={{color:"var(--text-warning)", fontSize:18, flexShrink:0}}>↺</span>
            <p style={{fontSize:13, color:"var(--text-warning)", margin:0, lineHeight:1.5}}><strong>Repaso de errores</strong> — Estos ejercicios los erraste antes. ¡Ahora sí los vas a clavar!</p>
          </div>
        )}

        <div style={{background:"var(--color-background-primary)", borderRadius:18, padding:20, marginBottom:14, boxShadow:"var(--shadow-card)"}}>
          <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:14}}>
            <span style={{fontSize:11, fontWeight:700, color:"var(--color-text-tertiary)", textTransform:"uppercase", letterSpacing:"0.04em"}}>{ex.skill} · {assignedLevel}</span>
            {progress[ex.id] && (
              <span style={{display:"flex", alignItems:"center", gap:4, fontSize:11, fontWeight:600, color:"var(--text-success)", marginLeft:"auto", background:"var(--bg-success)", padding:"3px 10px", borderRadius:999}}>
                <span style={{fontSize:12}}>✓</span> Já completado
              </span>
            )}
          </div>
          <p style={{fontSize:16, fontWeight:600, color:"var(--color-text-primary)", marginBottom:"1rem", lineHeight:1.5}}>{ex.question}</p>
          {ex.prompt && (
            <div style={{display:"flex", gap:8, background:"var(--color-background-secondary)", padding:"12px 14px", borderRadius:12, marginBottom:"1rem"}}>
              <span style={{color:"var(--color-text-tertiary)", fontSize:15, flexShrink:0, marginTop:1}}>ℹ️</span>
              <p style={{fontSize:13, color:"var(--color-text-secondary)", margin:0, lineHeight:1.6}}>{ex.prompt}</p>
            </div>
          )}

          {ex.type==="multiple_choice" && ex.options.map((opt,i) => {
            let bg="var(--color-background-secondary)", border="1.5px solid transparent", color="var(--color-text-primary)";
            if (exerciseAnswered) {
              if (i===ex.answer) { bg="var(--bg-success)"; border="1.5px solid var(--text-success)"; color="var(--text-success)"; }
              else if (parseInt(userAnswer)===i && i!==ex.answer) { bg="var(--bg-danger)"; border="1.5px solid var(--text-danger)"; color="var(--text-danger)"; }
            } else if (parseInt(userAnswer)===i) { bg="var(--bg-accent)"; border="1.5px solid var(--text-accent)"; color="var(--text-accent)"; }
            return <button key={i} onClick={() => !exerciseAnswered && setUserAnswer(String(i))}
              style={{display:"block", width:"100%", textAlign:"left", cursor:exerciseAnswered?"default":"pointer", border, borderRadius:12, padding:"12px 16px", fontSize:14, fontWeight:500, background:bg, color, marginBottom:8, fontFamily:"var(--font-sans)", transition:"all 0.15s"}}>{opt}</button>;
          })}

          {ex.type==="fill_blank" && <input value={userAnswer} onChange={e => setUserAnswer(e.target.value)}
            onKeyDown={e => e.key==="Enter" && !exerciseAnswered && checkExercise()}
            disabled={exerciseAnswered} placeholder={ex.hint||"Escribe tu respuesta..."}
            style={{width:"100%", border:"1.5px solid var(--color-border-secondary)", borderRadius:12, padding:"12px 16px", fontSize:14, color:"var(--color-text-primary)", background:"var(--color-background-primary)", fontFamily:"var(--font-sans)"}} />}

          {(ex.type==="translation"||ex.type==="free_writing") && <textarea value={userAnswer} onChange={e => setUserAnswer(e.target.value)}
            disabled={exerciseAnswered} placeholder={ex.hint||"Escreva em português..."}
            style={{width:"100%", minHeight:ex.type==="free_writing"?150:80, border:"1.5px solid var(--color-border-secondary)", borderRadius:12, padding:"12px 16px", fontSize:14, color:"var(--color-text-primary)", background:"var(--color-background-primary)", fontFamily:"var(--font-sans)", resize:"vertical"}} />}
        </div>

        {exerciseFeedback && (
          <div ref={feedbackRef} style={{display:"flex", alignItems:"flex-start", gap:10, background:exerciseFeedback.ok===true?"var(--bg-success)":exerciseFeedback.ok===false?"var(--bg-danger)":"var(--bg-accent)", borderRadius:14, padding:"14px 16px", marginBottom:14}}>
            <span style={{fontSize:18, flexShrink:0, marginTop:1}}>{exerciseFeedback.ok===true?"✅":exerciseFeedback.ok===false?"❌":"ℹ️"}</span>
            <p style={{fontSize:13, lineHeight:1.7, margin:0, color:exerciseFeedback.ok===true?"var(--text-success)":exerciseFeedback.ok===false?"var(--text-danger)":"var(--text-accent)"}}>{exerciseFeedback.msg}{aiLoading && " ⏳"}</p>
          </div>
        )}

        {aiFeedback && (
          <div style={{background:"var(--color-background-primary)", borderRadius:16, padding:16, marginBottom:14, boxShadow:"var(--shadow-card)", whiteSpace:"pre-wrap"}}>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:10}}>
              <span style={{color:"var(--color-accent)", fontSize:17}}>📋</span>
              <p style={{fontSize:12, fontWeight:700, color:"var(--color-accent)", margin:0, textTransform:"uppercase", letterSpacing:"0.04em"}}>Autoavaliação</p>
            </div>
            <p style={{fontSize:13, color:"var(--color-text-primary)", lineHeight:1.8, margin:0}}>{aiFeedback}</p>
          </div>
        )}

        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8}}>
          {!exerciseAnswered ? (
            <button onClick={checkExercise} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:7, border:"none", borderRadius:14, padding:"13px 22px", fontSize:14, fontWeight:600, background:"var(--color-accent)", color:"#fff", fontFamily:"var(--font-sans)"}}>
              <span style={{fontSize:16}}>✓</span> Verificar resposta
            </button>
          ) : (
            <button onClick={nextExercise} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:7, border:"none", borderRadius:14, padding:"13px 22px", fontSize:14, fontWeight:600, background:"var(--color-accent)", color:"#fff", fontFamily:"var(--font-sans)"}}>
              {exerciseIdx+1 < total ? "Próximo ejercicio" : "Finalizar lección"} <span style={{fontSize:16}}>→</span>
            </button>
          )}
          {ex.hint && !exerciseAnswered && (
            <button onClick={() => setExerciseFeedback({ok:null, msg:`💡 Pista: ${ex.hint}`})} style={{cursor:"pointer", display:"flex", alignItems:"center", gap:6, border:"0.5px solid var(--color-border-secondary)", borderRadius:14, padding:"13px 18px", fontSize:13, fontWeight:600, background:"transparent", color:"var(--color-text-secondary)", fontFamily:"var(--font-sans)"}}>
              <span style={{fontSize:15}}>💡</span> Dica
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

