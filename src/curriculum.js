import { CURRICULUM_ES_A1 } from "./curriculum_A1";
import { CURRICULUM_A2 as CURRICULUM_ES_A2 } from "./curriculum_A2";
import { CURRICULUM_B1 as CURRICULUM_ES_B1 } from "./curriculum_B1";


export const REFERENCE = {
  pronouns: {
    sections: [
      {
        title: "Pronomes Pessoais — Sujeito",
        tip: "Em espanhol, os pronomes de sujeito frequentemente são omitidos porque a conjugação verbal já indica a pessoa. 'Hablo' já indica 'eu falo' sem precisar de 'yo'.",
        headers: ["Pronome", "Portugués", "Exemplo"],
        rows: [
          ["yo", "eu", "Yo hablo español."],
          ["tú", "você (informal)", "¿Tú hablas inglés?"],
          ["él / ella", "ele / ela", "Él es médico."],
          ["usted", "você (formal)", "¿Usted tiene reserva?"],
          ["nosotros/as", "nós", "Nosotros estudiamos juntos."],
          ["vosotros/as", "vocês (Espanha)", "¿Vosotros sois hermanos?"],
          ["ellos / ellas", "eles / elas", "Ellos trabajan aquí."],
          ["ustedes", "vocês (América Lat.)", "¿Ustedes quieren café?"],
        ]
      },
      {
        title: "SER vs ESTAR — A Diferença Fundamental",
        tip: "SER = identidade, origem, profissão, características permanentes. ESTAR = estado temporário, localização, sentimentos. Esta é a maior dificuldade para brasileiros!",
        headers: ["Pronome", "SER (ser permanente)", "ESTAR (ser temporário)"],
        rows: [
          ["yo", "soy", "estoy"],
          ["tú", "eres", "estás"],
          ["él/ella/usted", "es", "está"],
          ["nosotros", "somos", "estamos"],
          ["vosotros", "sois", "estáis"],
          ["ellos/ustedes", "son", "están"],
        ]
      },
      {
        title: "Pronomes Possessivos",
        tip: "Os possessivos concordam em gênero e número com o objeto possuído, não com o possuidor. 'Mi libro' (meu livro) mas 'mis libros' (meus livros).",
        headers: ["Pronome", "Masc. sing.", "Fem. sing.", "Masc. pl.", "Fem. pl."],
        rows: [
          ["yo", "mi", "mi", "mis", "mis"],
          ["tú", "tu", "tu", "tus", "tus"],
          ["él/ella/usted", "su", "su", "sus", "sus"],
          ["nosotros", "nuestro", "nuestra", "nuestros", "nuestras"],
          ["vosotros", "vuestro", "vuestra", "vuestros", "vuestras"],
          ["ellos/ustedes", "su", "su", "sus", "sus"],
        ]
      },
      {
        title: "Pronomes de Objeto Direto",
        tip: "Os pronomes de objeto direto substituem o objeto do verbo. Vão ANTES do verbo conjugado ou DEPOIS do infinitivo/gerúndio.",
        headers: ["Pronome sujeito", "Objeto direto", "Exemplo"],
        rows: [
          ["yo", "me", "María me llama."],
          ["tú", "te", "Te veo mañana."],
          ["él/ella/usted (masc.)", "lo", "Lo compro hoy."],
          ["él/ella/usted (fem.)", "la", "La llamo ahora."],
          ["nosotros", "nos", "Nos invitaron."],
          ["vosotros", "os", "Os veo mañana."],
          ["ellos (masc.)", "los", "Los conozco bien."],
          ["ellas (fem.)", "las", "Las espero aquí."],
        ]
      },
    ]
  },
  contractions: {
    sections: [
      {
        title: "Contrações Obrigatórias do Espanhol",
        tip: "O espanhol tem apenas DUAS contrações obrigatórias: DE + EL = DEL e A + EL = AL. São as únicas contrações gramaticalmente obrigatórias!",
        headers: ["Preposição + Artigo", "Contração", "Exemplo"],
        rows: [
          ["de + el", "del", "Vengo del trabajo."],
          ["a + el", "al", "Voy al mercado."],
        ]
      },
      {
        title: "Atenção: Quando NÃO contrair",
        tip: "Não se faz contração com artigos de nomes próprios ou quando 'el' é pronome pessoal.",
        headers: ["Caso", "Exemplo", "Explixação"],
        rows: [
          ["Nome próprio com 'El'", "Vengo de El Salvador.", "El é parte do nome — não contrai."],
          ["Pronome pessoal 'él'", "Hablo de él.", "Él (com acento) é pronome — não contrai."],
          ["Artigo feminino 'la'", "Vengo de la tienda.", "LA não contrai com DE."],
        ]
      },
      {
        title: "Preposições de Lugar — Uso Frequente",
        tip: "Em espanhol, as preposições de lugar são essenciais para indicar posição e direção.",
        headers: ["Preposição", "Portugués", "Exemplo"],
        rows: [
          ["en", "em / dentro de", "Estoy en casa."],
          ["a", "a / para (direção)", "Voy a Madrid."],
          ["de", "de (origem)", "Soy de Brasil."],
          ["por", "por (movimento)", "Paso por el parque."],
          ["para", "para (destino/propósito)", "Este regalo es para ti."],
          ["con", "com", "Voy con mis amigos."],
          ["sin", "sem", "Café sin azúcar."],
          ["entre", "entre", "Entre tú y yo."],
        ]
      },
      {
        title: "A pessoal — Uso Único do Espanhol",
        tip: "Em espanhol, usa-se A antes de objetos diretos que são PESSOAS ou animais de estimação. Esta 'a pessoal' não existe em português!",
        headers: ["Estrutura", "Exemplo", "Tradução"],
        rows: [
          ["Verbo + A + pessoa", "Llamo a mi madre.", "Ligo para minha mãe."],
          ["Verbo + A + nome próprio", "Busco a Carlos.", "Procuro Carlos."],
          ["Verbo + A + animal", "Quiero a mi perro.", "Amo meu cachorro."],
          ["SEM 'a' pessoal", "Busco un médico.", "Procuro um médico (genérico)."],
        ]
      },
    ]
  },
  verbConjugations: {
    sections: [
      {
        title: "⚡ Estrutura das Tabelas",
        tip: "Ordem dos pronomes: yo · tú · él/ella/usted · nosotros · vosotros · ellos/ustedes. Na América Latina, vosotros é raramente usado — usam 'ustedes' no lugar.",
        headers: null,
        rows: []
      },
      {
        title: "SER — ser (identidade, origem, profissão)",
        tip: "SER para características permanentes: quem você é, de onde é, qual é sua profissão, como algo é por natureza.",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "soy", "fui", "era"],
          ["tú", "eres", "fuiste", "eras"],
          ["él/ella/usted", "es", "fue", "era"],
          ["nosotros", "somos", "fuimos", "éramos"],
          ["vosotros", "sois", "fuisteis", "erais"],
          ["ellos/ustedes", "son", "fueron", "eran"],
        ]
      },
      {
        title: "ESTAR — estar (estado temporário, localização)",
        tip: "ESTAR para estados que mudam: como você está, onde você está, estados emocionais temporários.",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "estoy", "estuve", "estaba"],
          ["tú", "estás", "estuviste", "estabas"],
          ["él/ella/usted", "está", "estuvo", "estaba"],
          ["nosotros", "estamos", "estuvimos", "estábamos"],
          ["vosotros", "estáis", "estuvisteis", "estabais"],
          ["ellos/ustedes", "están", "estuvieron", "estaban"],
        ]
      },
      {
        title: "TENER — ter / haver",
        tip: "TENER para posse, idade, e expressões idiomáticas: tengo hambre (estou com fome), tengo frío (estou com frio), tengo que (tenho que).",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "tengo", "tuve", "tenía"],
          ["tú", "tienes", "tuviste", "tenías"],
          ["él/ella/usted", "tiene", "tuvo", "tenía"],
          ["nosotros", "tenemos", "tuvimos", "teníamos"],
          ["vosotros", "tenéis", "tuvisteis", "teníais"],
          ["ellos/ustedes", "tienen", "tuvieron", "tenían"],
        ]
      },
      {
        title: "IR — ir",
        tip: "IR + A + infinitivo = futuro próximo (o mais usado no espanhol falado). Voy a comer = vou comer.",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "voy", "fui", "iba"],
          ["tú", "vas", "fuiste", "ibas"],
          ["él/ella/usted", "va", "fue", "iba"],
          ["nosotros", "vamos", "fuimos", "íbamos"],
          ["vosotros", "vais", "fuisteis", "ibais"],
          ["ellos/ustedes", "van", "fueron", "iban"],
        ]
      },
      {
        title: "HACER — fazer",
        tip: "HACER é muito versátil: ¿Qué haces? (o que você faz?), hace calor (está quente), hacer deporte (praticar esporte).",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "hago", "hice", "hacía"],
          ["tú", "haces", "hiciste", "hacías"],
          ["él/ella/usted", "hace", "hizo", "hacía"],
          ["nosotros", "hacemos", "hicimos", "hacíamos"],
          ["vosotros", "hacéis", "hicisteis", "hacíais"],
          ["ellos/ustedes", "hacen", "hicieron", "hacían"],
        ]
      },
      {
        title: "PODER — poder",
        tip: "PODER é irregular no presente (mudança o→ue): puedo, puedes, puede, podemos, podéis, pueden.",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "puedo", "pude", "podía"],
          ["tú", "puedes", "pudiste", "podías"],
          ["él/ella/usted", "puede", "pudo", "podía"],
          ["nosotros", "podemos", "pudimos", "podíamos"],
          ["vosotros", "podéis", "pudisteis", "podíais"],
          ["ellos/ustedes", "pueden", "pudieron", "podían"],
        ]
      },
      {
        title: "QUERER — querer",
        tip: "QUERER também tem mudança e→ie no presente: quiero, quieres, quiere, queremos, queréis, quieren.",
        headers: ["Pronome", "Presente", "Pretérito Indef.", "Imperfeito"],
        rows: [
          ["yo", "quiero", "quise", "quería"],
          ["tú", "quieres", "quisiste", "querías"],
          ["él/ella/usted", "quiere", "quiso", "quería"],
          ["nosotros", "queremos", "quisimos", "queríamos"],
          ["vosotros", "queréis", "quisisteis", "queríais"],
          ["ellos/ustedes", "quieren", "quisieron", "querían"],
        ]
      },
      {
        title: "Verbos Regulares -AR — Regras",
        tip: "REGRA: retire o -AR e adicione as terminações. Esta regra serve para centenas de verbos: hablar, trabajar, estudiar, llamar, escuchar, comprar...",
        headers: ["Pronome", "Presente", "Pret. Indefinido", "Imperfeito"],
        rows: [
          ["yo", "-o (hablo)", "-é (hablé)", "-aba (hablaba)"],
          ["tú", "-as (hablas)", "-aste (hablaste)", "-abas (hablabas)"],
          ["él/ella/usted", "-a (habla)", "-ó (habló)", "-aba (hablaba)"],
          ["nosotros", "-amos (hablamos)", "-amos (hablamos)", "-ábamos (hablábamos)"],
          ["vosotros", "-áis (habláis)", "-asteis (hablasteis)", "-abais (hablabais)"],
          ["ellos/ustedes", "-an (hablan)", "-aron (hablaron)", "-aban (hablaban)"],
        ]
      },
      {
        title: "Verbos Regulares -ER — Regras",
        tip: "REGRA: retire o -ER e adicione as terminações. Exemplos: comer, beber, leer, vender, correr, aprender...",
        headers: ["Pronome", "Presente", "Pret. Indefinido", "Imperfeito"],
        rows: [
          ["yo", "-o (como)", "-í (comí)", "-ía (comía)"],
          ["tú", "-es (comes)", "-iste (comiste)", "-ías (comías)"],
          ["él/ella/usted", "-e (come)", "-ió (comió)", "-ía (comía)"],
          ["nosotros", "-emos (comemos)", "-imos (comimos)", "-íamos (comíamos)"],
          ["vosotros", "-éis (coméis)", "-isteis (comisteis)", "-íais (comíais)"],
          ["ellos/ustedes", "-en (comen)", "-ieron (comieron)", "-ían (comían)"],
        ]
      },
      {
        title: "Verbos Regulares -IR — Regras",
        tip: "REGRA: retire o -IR e adicione as terminações. Exemplos: vivir, escribir, abrir, decidir, discutir...",
        headers: ["Pronome", "Presente", "Pret. Indefinido", "Imperfeito"],
        rows: [
          ["yo", "-o (vivo)", "-í (viví)", "-ía (vivía)"],
          ["tú", "-es (vives)", "-iste (viviste)", "-ías (vivías)"],
          ["él/ella/usted", "-e (vive)", "-ió (vivió)", "-ía (vivía)"],
          ["nosotros", "-imos (vivimos)", "-imos (vivimos)", "-íamos (vivíamos)"],
          ["vosotros", "-ís (vivís)", "-isteis (vivisteis)", "-íais (vivíais)"],
          ["ellos/ustedes", "-en (viven)", "-ieron (vivieron)", "-ían (vivían)"],
        ]
      },
      {
        title: "Futuro — as 3 formas do Espanhol",
        tip: "Na fala cotidiana, o futuro com IR é o mais usado. O Futuro Simples é mais formal. O presente também pode indicar futuro próximo.",
        headers: ["Forma", "Estrutura", "Exemplo"],
        rows: [
          ["Futuro com IR (oral)", "voy/vas/va + a + infinitivo", "Voy a estudiar mañana."],
          ["Futuro Simples (formal)", "infinitivo + -é/-ás/-á/-emos/-éis/-án", "Estudiaré mañana."],
          ["Presente como futuro", "presente do indicativo", "Mañana estudio (= vou estudar amanhã)."],
        ]
      },
    ]
  },
  top100Verbs: {
    sections: [
      {
        title: "Nível A1 — Essenciais",
        tip: "Estes 20 verbos são os mais usados no espanhol. Domine-os primeiro!",
        headers: ["#", "Verbo", "Portugués", "Exemplo"],
        rows: [
          ["1", "ser", "ser (permanente)", "Soy brasileño."],
          ["2", "estar", "estar (temporário)", "Estoy bien."],
          ["3", "tener", "ter / haver", "Tengo hambre."],
          ["4", "ir", "ir", "Voy al trabajo."],
          ["5", "hacer", "fazer", "Hago ejercicio."],
          ["6", "hablar", "falar", "Hablo español."],
          ["7", "querer", "querer", "Quiero agua."],
          ["8", "poder", "poder", "Puedo ayudarte."],
          ["9", "saber", "saber", "Sé nadar."],
          ["10", "ver", "ver", "Veo todo."],
          ["11", "venir", "vir", "Ven aquí."],
          ["12", "dar", "dar", "Dame un café."],
          ["13", "quedar", "ficar / sobrar", "Me quedo en casa."],
          ["14", "necesitar", "precisar", "Necesito ayuda."],
          ["15", "gustar", "gostar", "Me gusta la música."],
          ["16", "vivir", "morar / viver", "Vivo en São Paulo."],
          ["17", "trabajar", "trabalhar", "Trabajo mucho."],
          ["18", "estudiar", "estudar", "Estudio español."],
          ["19", "comer", "comer", "Comí pizza."],
          ["20", "beber", "beber / tomar", "Bebo café."],
        ]
      },
      {
        title: "Nível A2 — Frequentes",
        tip: null,
        headers: ["#", "Verbo", "Portugués", "Exemplo"],
        rows: [
          ["21", "llegar", "chegar", "Llegué tarde."],
          ["22", "salir", "sair", "Salgo a las 8."],
          ["23", "entrar", "entrar", "Entra, por favor."],
          ["24", "comprar", "comprar", "Compré un libro."],
          ["25", "vender", "vender", "Venden de todo."],
          ["26", "pagar", "pagar", "Pagué con tarjeta."],
          ["27", "usar", "usar", "Uso gafas."],
          ["28", "abrir", "abrir", "Abre la ventana."],
          ["29", "cerrar", "fechar", "Cierra la puerta."],
          ["30", "empezar", "começar", "Empieza a las 9."],
          ["31", "terminar", "terminar / acabar", "Terminó el café."],
          ["32", "ayudar", "ajudar", "¿Me ayudas?"],
          ["33", "esperar", "esperar", "Espera un poco."],
          ["34", "preguntar", "perguntar", "¿Puedo preguntar?"],
          ["35", "responder", "responder", "Responde, por favor."],
          ["36", "encontrar", "encontrar / achar", "Encontré a mi amigo."],
          ["37", "llevar", "levar / carregar", "Lleva el paraguas."],
          ["38", "traer", "trazer", "Trae el menú."],
          ["39", "dejar", "deixar", "Déjame intentar."],
          ["40", "tomar", "tomar / pegar", "Toma el autobús 47."],
        ]
      },
      {
        title: "Nível B1 — Importantes",
        tip: null,
        headers: ["#", "Verbo", "Portugués", "Exemplo"],
        rows: [
          ["41", "pensar", "pensar / achar", "Pienso que sí."],
          ["42", "creer", "acreditar / achar", "Creo que está bien."],
          ["43", "conocer", "conhecer", "Conozco Madrid."],
          ["44", "aprender", "aprender", "Aprendo rápido."],
          ["45", "enseñar", "ensinar", "¿Me enseñas?"],
          ["46", "escribir", "escrever", "Escribe un email."],
          ["47", "leer", "ler", "Leo mucho."],
          ["48", "escuchar", "ouvir / escutar", "Escucho música."],
          ["49", "sentir", "sentir", "Siento nostalgia."],
          ["50", "parecer", "parecer", "Me parece difícil."],
          ["51", "conseguir", "conseguir / obter", "Conseguí el trabajo."],
          ["52", "intentar", "tentar", "Intenta de nuevo."],
          ["53", "resolver", "resolver", "Resuelve el problema."],
          ["54", "cambiar", "mudar / trocar", "Cambié de idea."],
          ["55", "volver", "voltar", "Vuelvo mañana."],
          ["56", "mostrar", "mostrar", "¿Me muestras?"],
          ["57", "explicar", "explicar", "Explica mejor."],
          ["58", "pasar", "acontecer / passar", "¿Qué pasó?"],
          ["59", "seguir", "continuar / seguir", "Sigue practicando."],
          ["60", "recordar", "lembrar", "Recuerdo todo."],
        ]
      },
      {
        title: "Nível B2 — Avançados",
        tip: null,
        headers: ["#", "Verbo", "Portugués", "Exemplo"],
        rows: [
          ["61", "desarrollar", "desenvolver", "Desarrolla habilidades."],
          ["62", "establecer", "estabelecer", "Establece reglas."],
          ["63", "presentar", "apresentar", "Presenta el proyecto."],
          ["64", "representar", "representar", "Representa a Brasil."],
          ["65", "producir", "produzir", "Produce resultados."],
          ["66", "crecer", "crescer", "La empresa creció."],
          ["67", "aumentar", "aumentar", "Aumentó el precio."],
          ["68", "mejorar", "melhorar", "Mejoró mucho."],
          ["69", "asumir", "assumir", "Asume la responsabilidad."],
          ["70", "proponer", "propor", "Propongo una solución."],
          ["71", "discutir", "discutir / debater", "Discutimos el tema."],
          ["72", "acordar", "concordar", "Acordamos el precio."],
          ["73", "incluir", "incluir", "Incluye a todos."],
          ["74", "considerar", "considerar", "Considera las opciones."],
          ["75", "depender", "depender", "Depende del contexto."],
          ["76", "surgir", "surgir", "Surgió una idea."],
          ["77", "lograr", "conseguir / lograr", "Logré el objetivo."],
          ["78", "suponer", "supor", "Supongo que sí."],
          ["79", "pertenecer", "pertencer", "Pertenezco a este grupo."],
          ["80", "rechazar", "rejeitar", "Rechazaron la propuesta."],
        ]
      },
      {
        title: "Nível C1-Master — Especializados",
        tip: null,
        headers: ["#", "Verbo", "Portugués", "Exemplo"],
        rows: [
          ["81", "analizar", "analisar", "Analizó los datos."],
          ["82", "evaluar", "avaliar", "Evalúa el desempeño."],
          ["83", "criticar", "criticar", "Critica constructivamente."],
          ["84", "argumentar", "argumentar", "Argumenta con claridad."],
          ["85", "justificar", "justificar", "Justifica la decisión."],
          ["86", "comparar", "comparar", "Compara los resultados."],
          ["87", "sintetizar", "sintetizar", "Sintetiza el contenido."],
          ["88", "contextualizar", "contextualizar", "Contextualiza el problema."],
          ["89", "investigar", "investigar", "Investiga las causas."],
          ["90", "comprobar", "comprovar", "Comprueba la hipótesis."],
          ["91", "refutar", "refutar", "Refuta el argumento."],
          ["92", "reivindicar", "reivindicar", "Reivindica derechos."],
          ["93", "transformar", "transformar", "Transforma la realidad."],
          ["94", "preservar", "preservar", "Preserva la cultura."],
          ["95", "promover", "promover", "Promueve la igualdad."],
          ["96", "garantizar", "garantir", "Garantiza los derechos."],
          ["97", "conquistar", "conquistar", "Conquistó su espacio."],
          ["98", "emprender", "empreender", "Emprende un negocio."],
          ["99", "innovar", "inovar", "Innova constantemente."],
          ["100", "trascender", "transcender", "Trasciende las barreras."],
        ]
      },
    ]
  },
};

// Importações dos outros níveis (placeholder — serão criados)
const emptyLevel = { units: [] };


const CURRICULUM_ES_B2 = emptyLevel;
const CURRICULUM_ES_C1 = emptyLevel;
const CURRICULUM_ES_C2 = emptyLevel;
const CURRICULUM_ES_MASTER = emptyLevel;

export const FULL_CURRICULUM = {
  A1:     { units: CURRICULUM_ES_A1.units },
  A2:     { units: CURRICULUM_ES_A2.units },
  B1:     { units: CURRICULUM_ES_B1.units },
  B2:     { units: CURRICULUM_ES_B2.units },
  C1:     { units: CURRICULUM_ES_C1.units },
  C2:     { units: CURRICULUM_ES_C2.units },
  Master: { units: CURRICULUM_ES_MASTER.units },
};

export const DIALOGUES = {
  A1: [
    { emoji: "☕", title: "En el café", lines: [
      { speaker: "Cliente", role: "user", text: "Hola, buenas tardes. ¿Tiene café con leche?" },
      { speaker: "Camarero", role: "assistant", text: "Sí, claro. ¿Lo quiere grande o pequeño?" },
      { speaker: "Cliente", role: "user", text: "Grande, por favor. ¿Y tiene algo para comer?" },
      { speaker: "Camarero", role: "assistant", text: "Tenemos tostadas, croissants y bocadillos." },
      { speaker: "Cliente", role: "user", text: "Una tostada con mantequilla, por favor." },
      { speaker: "Camarero", role: "assistant", text: "Perfecto. ¿Algo más?" },
      { speaker: "Cliente", role: "user", text: "No, gracias. ¿Cuánto es?" },
      { speaker: "Camarero", role: "assistant", text: "Son cuatro euros con cincuenta." },
    ]},
    { emoji: "🏨", title: "En el hotel", lines: [
      { speaker: "Recepcionista", role: "assistant", text: "Buenas noches. ¿Tiene reserva?" },
      { speaker: "Cliente", role: "user", text: "Sí, a nombre de Silva. Una habitación doble." },
      { speaker: "Recepcionista", role: "assistant", text: "Perfecto. Su habitación es la 305, en el tercer piso." },
      { speaker: "Cliente", role: "user", text: "¿El desayuno está incluido?" },
      { speaker: "Recepcionista", role: "assistant", text: "Sí, el desayuno es de 7 a 10 de la mañana." },
      { speaker: "Cliente", role: "user", text: "¿Hay WiFi en las habitaciones?" },
      { speaker: "Recepcionista", role: "assistant", text: "Sí, la contraseña es hotel2024. Buenas noches." },
    ]},
    { emoji: "🛒", title: "En el supermercado", lines: [
      { speaker: "Cliente", role: "user", text: "Perdona, ¿dónde están las frutas?" },
      { speaker: "Empleado", role: "assistant", text: "En el pasillo tres, al fondo a la derecha." },
      { speaker: "Cliente", role: "user", text: "Gracias. ¿Y los productos de limpieza?" },
      { speaker: "Empleado", role: "assistant", text: "En el pasillo cinco, a la izquierda." },
      { speaker: "Cliente", role: "user", text: "¿Tienen oferta en yogures hoy?" },
      { speaker: "Empleado", role: "assistant", text: "Sí, los yogures griegos están al dos por uno." },
    ]},
  ],
  A2: [], B1: [], B2: [], C1: [], C2: [], Master: []
};

export const CONVERSATIONS = {
  A1: ["Presentaciones y saludos", "En el restaurante", "En la tienda"],
  A2: [], B1: [], B2: [], C1: [], C2: [], Master: []
};

// Alias para compatibilidade com App.jsx
export { FULL_CURRICULUM as CURRICULUM };
