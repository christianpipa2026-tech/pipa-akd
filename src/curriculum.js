import { CURRICULUM_ES_A1 } from "./curriculum_A1";
import { CURRICULUM_A2 as CURRICULUM_ES_A2 } from "./curriculum_A2";
import { CURRICULUM_B1 as CURRICULUM_ES_B1 } from "./curriculum_B1";
import { CURRICULUM_B2 as CURRICULUM_ES_B2 } from "./curriculum_B2";
import { CURRICULUM_C1 as CURRICULUM_ES_C1 } from "./curriculum_C1";
import { CURRICULUM_C2 as CURRICULUM_ES_C2 } from "./curriculum_C2";
import { CURRICULUM_MASTER as CURRICULUM_ES_MASTER } from "./curriculum_Master";


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
  adjectives: {
    sections: [
      {
        title: "Adjetivos Mais Usados em Espanhol",
        tip: "Em espanhol os adjetivos concordam em gênero e número com o substantivo. Geralmente vão DEPOIS do substantivo: 'una casa grande'.",
        headers: ["Adjetivo (masc.)", "Adjetivo (fem.)", "Portugués", "Exemplo"],
        rows: [
          ["bueno", "buena", "bom/boa", "Un buen amigo. Una buena idea."],
          ["malo", "mala", "mau/má", "Un mal día. Una mala decisión."],
          ["grande", "grande", "grande", "Una ciudad grande."],
          ["pequeño", "pequeña", "pequeno/a", "Una casa pequeña."],
          ["bonito", "bonita", "bonito/a", "Un lugar bonito."],
          ["feo", "fea", "feio/feia", "Un zapato feo."],
          ["nuevo", "nueva", "novo/nova", "Un libro nuevo."],
          ["viejo", "vieja", "velho/velha", "Un amigo viejo."],
          ["joven", "joven", "jovem", "Una mujer joven."],
          ["alto", "alta", "alto/a", "Un hombre alto."],
          ["bajo", "baja", "baixo/a", "Una mesa baja."],
          ["rápido", "rápida", "rápido/a", "Un coche rápido."],
          ["lento", "lenta", "lento/a", "Una respuesta lenta."],
          ["fácil", "fácil", "fácil", "Una tarea fácil."],
          ["difícil", "difícil", "difícil", "Un problema difícil."],
          ["caro", "cara", "caro/a", "Un restaurante caro."],
          ["barato", "barata", "barato/a", "Una ropa barata."],
          ["feliz", "feliz", "feliz", "Una persona feliz."],
          ["triste", "triste", "triste", "Un rostro triste."],
          ["cansado", "cansada", "cansado/a", "Estoy cansado."],
          ["animado", "animada", "animado/a", "Una fiesta animada."],
          ["interesante", "interesante", "interessante", "Un libro interesante."],
          ["inteligente", "inteligente", "inteligente", "Un alumno inteligente."],
          ["simpático", "simpática", "simpático/a", "Una profesora simpática."],
          ["fuerte", "fuerte", "forte", "Un atleta fuerte."],
          ["débil", "débil", "fraco/a", "Una conexión débil."],
          ["blanco", "blanca", "branco/a", "Una camisa blanca."],
          ["negro", "negra", "preto/a", "Un coche negro."],
          ["rojo", "roja", "vermelho/a", "Una rosa roja."],
          ["azul", "azul", "azul", "Un cielo azul."],
        ]
      },
      {
        title: "Adjetivos — Posição Especial (ANTES do substantivo)",
        tip: "Alguns adjetivos mudam de significado dependendo de onde estão. Outros têm formas reduzidas antes de substantivos masculinos singulares.",
        headers: ["Antes", "Depois", "Diferença de sentido", "Exemplo"],
        rows: [
          ["buen hombre", "hombre bueno", "buen = bom em geral / bueno = moralmente bom", "Es un buen médico (competente)"],
          ["gran hombre", "hombre grande", "gran = notável / grande = de estatura", "Es un gran escritor (notável)"],
          ["pobre hombre", "hombre pobre", "pobre antes = coitado / depois = sem dinheiro", "¡Pobre hombre! (coitado)"],
          ["nuevo trabajo", "trabajo nuevo", "nuevo antes = outro / depois = recém-criado", "Necesito un nuevo trabajo (outro)"],
          ["mi viejo amigo", "mi amigo viejo", "viejo antes = de longa data / depois = de idade", "Mi viejo amigo Carlos"],
          ["mismo día", "—", "mismo antes do artigo = o mesmo", "El mismo día"],
        ]
      },
    ]
  },
  nouns: {
    sections: [
      {
        title: "Substantivos Mais Usados em Espanhol",
        tip: "Em espanhol, todo substantivo tem gênero. Regra geral: -o = masculino, -a = feminino. Mas há exceções importantes!",
        headers: ["Substantivo", "Artigo", "Plural", "Portugués"],
        rows: [
          ["casa", "la", "las casas", "casa"],
          ["apartamento", "el", "los apartamentos", "apartamento"],
          ["coche / carro", "el", "los coches", "carro"],
          ["trabajo", "el", "los trabajos", "trabalho"],
          ["escuela", "la", "las escuelas", "escola"],
          ["ciudad", "la", "las ciudades", "cidade"],
          ["calle", "la", "las calles", "rua"],
          ["persona", "la", "las personas", "pessoa"],
          ["hombre", "el", "los hombres", "homem"],
          ["mujer", "la", "las mujeres", "mulher"],
          ["familia", "la", "las familias", "família"],
          ["amigo", "el", "los amigos", "amigo"],
          ["dinero", "el", "—", "dinheiro"],
          ["tiempo", "el", "los tiempos", "tempo"],
          ["vida", "la", "las vidas", "vida"],
          ["día", "el", "los días", "dia"],
          ["año", "el", "los años", "ano"],
          ["vez", "la", "las veces", "vez"],
          ["cosa", "la", "las cosas", "coisa"],
          ["lugar", "el", "los lugares", "lugar"],
          ["mundo", "el", "los mundos", "mundo"],
          ["país", "el", "los países", "país"],
          ["nombre", "el", "los nombres", "nome"],
          ["mano", "la", "las manos", "mão"],
          ["ojo", "el", "los ojos", "olho"],
          ["problema", "el", "los problemas", "problema"],
          ["tema", "el", "los temas", "tema"],
          ["foto", "la", "las fotos", "foto"],
          ["autobús", "el", "los autobuses", "ônibus"],
          ["árbol", "el", "los árboles", "árvore"],
        ]
      },
      {
        title: "Substantivos com Gênero Especial",
        tip: "Estes substantivos têm gênero inesperado ou comportamento especial em espanhol.",
        headers: ["Substantivo", "Gênero", "Observação", "Armadilha para brasileiros"],
        rows: [
          ["el día", "masculino", "Termina em -a mas é masculino", "PT: o dia ✅ ES: el día ✅"],
          ["el problema", "masculino", "Terminação -ma = masculino (grego)", "PT: o problema ✅ ES: el problema ✅"],
          ["el agua", "feminino (com el!)", "'el' antes de -a tônica singular", "el agua fría (fem.) → las aguas"],
          ["el alma", "feminino (com el!)", "Mesmo caso que agua", "el alma bella → las almas"],
          ["la mano", "feminino", "Termina em -o mas é feminino", "PT: a mão ✅ ES: la mano ✅"],
          ["la foto", "feminino", "Abreviação de fotografía", "PT: a foto ✅ ES: la foto ✅"],
          ["el/la estudiante", "ambos", "Gênero pelo artigo", "el estudiante / la estudiante"],
          ["el/la artista", "ambos", "Gênero pelo artigo", "el artista / la artista"],
        ]
      },
    ]
  },
  spelling: {
    sections: [
      {
        title: "Regras de Acentuação em Espanhol",
        tip: "As regras de acento em espanhol são mais simples que em português. Aprenda as 3 regras básicas.",
        headers: ["Tipo de palavra", "Terminação", "Acento?", "Exemplos"],
        rows: [
          ["Llana (penúltima tônica)", "-a, -e, -o, -s, -n", "NÃO", "casa, examen, comen, libros"],
          ["Llana (penúltima tônica)", "outras terminações", "SIM", "fácil, álbum, azúcar, lápiz"],
          ["Aguda (última tônica)", "-a, -e, -o, -s, -n", "SIM", "café, mamá, también, japonés"],
          ["Aguda (última tônica)", "outras terminações", "NÃO", "reloj, papel, verdad, capaz"],
          ["Esdrújula (antepenúltima)", "TODAS", "SEMPRE", "médico, música, rápido, fábrica"],
          ["Hiato", "i ou u tônicos", "SIM", "baúl, país, oír, reír"],
        ]
      },
      {
        title: "Acento Diacrítico — Palavras que Mudam de Significado",
        tip: "Em espanhol, algumas palavras idênticas têm acento para se diferenciarem. São pares fundamentais para dominar!",
        headers: ["Com acento", "Significado", "Sem acento", "Significado"],
        rows: [
          ["tú", "você (pronome)", "tu", "seu/tua (possessivo)"],
          ["él", "ele (pronome)", "el", "o (artigo)"],
          ["sí", "sim / si mesmo", "si", "se (condicional)"],
          ["mí", "mim (pronome)", "mi", "meu/minha"],
          ["más", "mais", "mas", "mas (conjunção)"],
          ["té", "chá (bebida)", "te", "te (pronome)"],
          ["sé", "sei / sê", "se", "se (pronome/conjunção)"],
          ["dé", "dê (imperativo)", "de", "de (preposição)"],
          ["aún", "ainda (= todavía)", "aun", "até mesmo / incluso"],
          ["qué", "que (interrogativo)", "que", "que (relativo/conjunção)"],
        ]
      },
      {
        title: "B e V — Mesma Pronúncia, Escrita Diferente",
        tip: "Em espanhol, B e V têm o MESMO som /b/. A distinção é apenas ortográfica. Aqui estão as principais regras.",
        headers: ["Regra", "Use B", "Use V", "Exemplos"],
        rows: [
          ["Após M", "sempre B", "—", "también, hombre, cambio"],
          ["Imperfecto -aba", "sempre B", "—", "hablaba, trabajaba, amaba"],
          ["Prefixos bi-, bis-", "sempre B", "—", "bicicleta, bisabuelo, bilateral"],
          ["Prefixos sub-, ob-", "sempre B", "—", "subir, obtener, objetivo"],
          ["Verbos ir, ver, vivir", "—", "sempre V", "voy, veo, vivir, volver"],
          ["Sufixo -ivo/-iva", "—", "sempre V", "activo, pasivo, motivo"],
          ["Prefixo vice-", "—", "sempre V", "vicepresidente, vicedirector"],
        ]
      },
      {
        title: "H Muda, G/J, LL/Y",
        tip: "O H em espanhol é sempre MUDO. G e J têm sons diferentes conforme a vogal seguinte. LL e Y soam igual na América Latina (yeísmo).",
        headers: ["Letra(s)", "Som", "Regra", "Exemplos"],
        rows: [
          ["H", "mudo (sempre)", "Nunca se pronuncia", "hablar /ablar/, hora /ora/, hotel /otel/"],
          ["G + e/i", "/x/ (gutural)", "Som gutural como J", "gente /xente/, gitano /xitano/"],
          ["G + a/o/u", "/g/", "Som normal como em PT", "gato, gordo, gustar"],
          ["GU + e/i", "/g/", "U não se pronuncia", "guerra /gera/, guitarra /gitara/"],
          ["GÜ + e/i", "/gu/", "U se pronuncia (trema)", "pingüino, lingüística"],
          ["J", "/x/ (gutural)", "Sempre gutural", "joven, jugar, trabajo, Juan"],
          ["LL", "/y/ (Am. Latina)", "Igual ao Y (yeísmo)", "llamar = yamar, lluvia = yuvia"],
          ["Y", "/y/ ou /i/", "Como 'i' em iogurte", "yo, ya, hoy, hay"],
        ]
      },
      {
        title: "Diferenças Ortográficas PT → ES",
        tip: "Muitas palavras são quase iguais mas com diferenças ortográficas específicas.",
        headers: ["Portugués", "Español", "Padrão da mudança", "Mais exemplos"],
        rows: [
          ["filho", "hijo", "LH → J", "trabalho → trabajo, mulher → mujer"],
          ["chuva", "lluvia", "CH → LL em alguns casos", "chave → llave, cheio → lleno"],
          ["noite", "noche", "IT → CH", "leite → leche, oito → ocho"],
          ["amarelo", "amarillo", "L → LL", "cavalo → caballo, belo → bello"],
          ["muito", "mucho", "IT → CH", "feito → hecho, dito → dicho"],
          ["facto", "hecho", "H muda + mudança", "—"],
          ["cão", "perro", "palavras completamente diferentes", "gato → gato (igual)"],
          ["ão final", "-ón/-ión/-ión", "vogal nasal → ditongo", "coração → corazón, estação → estación"],
        ]
      },
    ]
  },
  falseAmigos: {
    sections: [
      {
        title: "Falsos Amigos — PERIGO 🚨 (Mais Embaraçosos)",
        tip: "Estes falsos amigos causam situações constrangedoras. Memorize com prioridade máxima!",
        headers: ["Palavra em ES", "Parece em PT", "Significa em ES", "Como dizer em ES"],
        rows: [
          ["embarazada", "envergonhada", "grávida", "avergonzada (envergonhada)"],
          ["borracha", "borracha (material)", "bêbada", "goma de borrar (borracha)"],
          ["exquisito", "esquisito (estranho)", "delicioso/refinado", "raro / extraño (esquisito PT)"],
          ["polvo", "polvo (animal marinho)", "pó/poeira", "pulpo (polvo animal)"],
          ["propina", "propina (suborno)", "gorjeta", "soborno (suborno PT)"],
          ["largo", "largo (extenso)", "comprido/longo", "ancho (largo PT) / largo (longo PT)"],
          ["poltrona", "poltrona (cadeira)", "covarde/preguiçoso", "sillón (poltrona PT)"],
          ["estafa", "estafa (cansaço PT)", "fraude/golpe", "cansancio (cansaço)"],
        ]
      },
      {
        title: "Falsos Amigos — CUIDADO ⚠️ (Diferenças Sutis)",
        tip: "Palavras parecidas com diferenças importantes de uso cotidiano.",
        headers: ["ES", "Parece PT", "Diferença real", "Correto"],
        rows: [
          ["asistir", "assistir (TV)", "asistir = comparecer. TV = ver la tele", "Veo la televisión"],
          ["contestar", "contestar (discutir)", "ES = responder", "Contestar el teléfono (atender)"],
          ["realizar", "realizar", "ES também = se dar conta", "Me realicé = me dei conta"],
          ["parada", "parada (desfile)", "ES = ponto de ônibus", "parada de autobús"],
          ["carpeta", "carpete (tapete)", "ES = pasta de documentos", "alfombra (tapete) / carpeta (pasta)"],
          ["taza", "taça (troféu)", "ES = xícara/caneca", "copa/trofeo (taça) / taza (xícara)"],
          ["bordar", "bordar (costura)", "ES também = ir muito bem", "Bordó el examen (foi muito bem)"],
          ["extrañar", "estranhar", "ES = sentir falta DE ALGUÉM", "Te extraño (sinto sua falta)"],
        ]
      },
      {
        title: "Falsos Amigos — ESTRUTURAS GRAMATICAIS",
        tip: "Estruturas que parecem iguais ao português mas funcionam diferente em espanhol.",
        headers: ["Estrutura PT", "Parece ES", "Correto em ES", "Explicação"],
        rows: [
          ["Gosto de música", "Me gusta de música", "Me gusta la música", "gustar não usa 'de'"],
          ["Estou com fome", "Estoy con hambre", "Tengo hambre", "ES usa TENER"],
          ["Estou com frio", "Estoy con frío", "Tengo frío", "ES usa TENER"],
          ["Que horas são?", "¿Qué horas son?", "¿Qué hora es?", "hora no singular"],
          ["Moro no Brasil", "Vivo en el Brasil", "Vivo en Brasil", "sem artigo com países"],
          ["A gente vai", "La gente va", "Nosotros vamos", "la gente = as pessoas (3ª sg.)"],
          ["Tudo bem?", "¿Todo bien?", "¿Cómo estás? / ¿Qué tal?", "mais natural em ES"],
        ]
      },
    ]
  },

// Alias para compatibilidade com App.jsx
};

// Importações dos outros níveis (placeholder — serão criados)
const emptyLevel = { units: [] };



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
export { FULL_CURRICULUM as CURRICULUM };
