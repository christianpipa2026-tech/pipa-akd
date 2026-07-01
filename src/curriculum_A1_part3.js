export const CURRICULUM_ES_A1_PART3 = {
  units: [
    {
      id: "ES-A1-U5",
      title: "Trabalho e Profissões",
      description: "Vocabulário profissional e conversas de trabalho",
      lessons: [
        {
          id: "ES-A1-U5-L1",
          title: "Las Profesiones — As Profissões",
          shadowing: "— ¿A qué te dedicas?\n— Soy médico. Trabajo en un hospital.\n— ¡Qué interesante! ¿Y dónde trabajas exactamente?\n— En el Hospital Central. ¿Y tú?\n— Yo soy profesora de español.\n— ¡Qué bien! ¿Te gusta tu trabajo?\n— Sí, me encanta.",
          memoryPhrases: [
            "¿A qué te dedicas? = A que você se dedica? / O que você faz?",
            "Soy... = Sou... (profissão)",
            "médico/a = médico/a",
            "profesor/a = professor/a",
            "ingeniero/a = engenheiro/a",
            "me gusta / me encanta = gosto / adoro"
          ],
          oralProduction: "Fale sobre sua profissão em espanhol: o que você faz, onde trabalha, se gosta.",
          exercises: [
            { id: "ES-A1-U5-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se pergunta 'O que você faz?' (profissão) em espanhol?", options: ["¿Qué haces?", "¿A qué te dedicas?", "¿Cómo trabajas?", "¿Dónde eres?"], answer: 1, explanation: "¿A qué te dedicas? = A que você se dedica? É a pergunta mais formal para profissão. Também se usa ¿Qué haces? ou ¿Cuál es tu profesión?" },
            { id: "ES-A1-U5-L1-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Sou engenheira' em espanhol?", options: ["Soy ingeniero", "Estoy ingeniera", "Soy ingeniera", "Soy una ingeniera"], answer: 2, explanation: "Soy ingeniera = sou engenheira. Em espanhol, para profissões após SER não se usa artigo indefinido: 'Soy médico' (não 'Soy un médico')." },
            { id: "ES-A1-U5-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Trabajo en una _____.' (Trabalho num escritório.)", answer: ["oficina"], hint: "escritório em espanhol (não confundir com 'office' em inglês)", explanation: "Oficina = escritório em espanhol. Cuidado: em inglês 'office' virou a palavra. Em espanhol é 'oficina'." },
            { id: "ES-A1-U5-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Ela é professora e trabalha numa escola internacional.'", answer: ["Ella es profesora y trabaja en una escuela internacional."], explanation: "Es profesora (sem artigo). Trabaja = trabalha. En una escuela = numa escola." },
            { id: "ES-A1-U5-L1-E5", type: "free_writing", skill: "writing", question: "Escreva um parágrafo sobre sua vida profissional em espanhol. Mínimo 6 frases.", prompt: "Inclua: profissão · onde trabalha · horário · se gosta · salário aproximado", hint: "Soy..., trabajo en..., trabajo de... a..., me gusta/encanta porque..." }
          ]
        },
        {
          id: "ES-A1-U5-L2",
          title: "Gustar e Verbos de Opinião",
          shadowing: "— ¿Te gusta el español?\n— Sí, me gusta mucho. Me encanta la cultura.\n— ¿Y la música española?\n— Me gusta el flamenco pero no me gustan el reggaeton.\n— ¿Qué tipo de música te gusta más?\n— Me encanta el jazz y la bossa nova.",
          memoryPhrases: [
            "me gusta = gosto (singular)",
            "me gustan = gosto (plural)",
            "me encanta = adoro (singular)",
            "no me gusta = não gosto",
            "¿Te gusta? = Você gosta?",
            "a mí me gusta / a ti te gusta"
          ],
          oralProduction: "Fale sobre 5 coisas que você gosta e 3 que não gosta, em espanhol.",
          exercises: [
            { id: "ES-A1-U5-L2-E1", type: "multiple_choice", skill: "grammar", question: "Qual é correto: 'Me _____ los tacos'?", options: ["gusta", "gustan", "gustas", "gustamos"], answer: 1, explanation: "Me gustan los tacos = gosto de tacos. Com substantivo plural usa-se GUSTAN. Com singular: me gusta el taco." },
            { id: "ES-A1-U5-L2-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Ele gosta de futebol'?", options: ["Él gusta fútbol", "Él le gusta fútbol", "A él le gusta el fútbol", "Él me gusta fútbol"], answer: 2, explanation: "A él le gusta el fútbol = ele gosta de futebol. O verbo GUSTAR funciona ao contrário: o esporte é o sujeito, a pessoa é o objeto indireto (le)." },
            { id: "ES-A1-U5-L2-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'No _____ gusta el frío.' (Não gosto do frio.)", answer: ["me"], hint: "pronome de objeto indireto para 'eu'", explanation: "No me gusta = não gosto. ME é o pronome de objeto indireto para a 1ª pessoa singular." },
            { id: "ES-A1-U5-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Gosto muito de música mas não gosto de ópera.'", answer: ["Me gusta mucho la música pero no me gusta la ópera."], explanation: "Me gusta mucho = gosto muito. No me gusta = não gosto. La música, la ópera = artigo definido necessário com gustar." },
            { id: "ES-A1-U5-L2-E5", type: "free_writing", skill: "writing", question: "Escreva sobre seus gostos pessoais: comida, música, esportes, hobbies. Mínimo 8 frases.", prompt: "Inclua: me gusta/gustan · me encanta/encantan · no me gusta/gustan · ¿a ti te gusta?", hint: "Lembre: singular = gusta, plural = gustan. Me encanta = adoro (muito mais intenso)" }
          ]
        },
        {
          id: "ES-A1-U5-L3",
          title: "Los Días e La Hora",
          shadowing: "— ¿Qué día es hoy?\n— Hoy es martes, doce de marzo.\n— ¿Y la reunión es el jueves?\n— Sí, el jueves a las tres de la tarde.\n— ¿Qué hora es ahora?\n— Son las dos y cuarto.\n— Perfecto, tengo tiempo.",
          memoryPhrases: [
            "lunes, martes, miércoles, jueves, viernes",
            "sábado, domingo",
            "¿Qué hora es? = Que horas são?",
            "Son las... = São... horas",
            "Es la una = É uma hora",
            "y media / y cuarto = e meia / e quinze"
          ],
          oralProduction: "Diga em voz alta: o dia de hoje, que horas são agora, e que horas você faz atividades da sua rotina.",
          exercises: [
            { id: "ES-A1-U5-L3-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'quarta-feira' em espanhol?", options: ["martes", "jueves", "miércoles", "viernes"], answer: 2, explanation: "Miércoles = quarta-feira. Dica: lunes=segunda, martes=terça, miércoles=quarta, jueves=quinta, viernes=sexta." },
            { id: "ES-A1-U5-L3-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'São duas horas'?", options: ["Es las dos", "Son la dos", "Son las dos", "Es dos horas"], answer: 2, explanation: "Son las dos = são duas horas. Use 'son las' para todas as horas EXCETO 1h: 'Es la una' = é uma hora." },
            { id: "ES-A1-U5-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Son las tres y _____.' (São três e meia.)", answer: ["media"], hint: "meia hora em espanhol", explanation: "Media = meia. Son las tres y media = são três e meia. Y cuarto = e quinze. Menos cuarto = menos quinze." },
            { id: "ES-A1-U5-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'A reunião é na quinta-feira às dez e meia da manhã.'", answer: ["La reunión es el jueves a las diez y media de la mañana."], explanation: "El jueves = na quinta-feira. A las diez y media = às dez e meia. De la mañana = da manhã." },
            { id: "ES-A1-U5-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sua agenda para a próxima semana em espanhol, com dias e horários.", prompt: "Inclua: pelo menos 5 dias · horários específicos · atividades", hint: "El lunes a las..., el martes tengo..., el miércoles voy a..." }
          ]
        },
        {
          id: "ES-A1-U5-L4",
          title: "Pronomes de Objeto Direto — Lo, La, Los, Las",
          shadowing: "— ¿Tienes el libro?\n— Sí, lo tengo aquí.\n— ¿Y las llaves?\n— Las dejé en casa. ¿Las necesitas?\n— Sí, las necesito.\n— Voy a buscarlas.\n— ¡Gracias!",
          memoryPhrases: [
            "lo = o (masculino singular)",
            "la = a (feminino singular)",
            "los = os (masculino plural)",
            "las = as (feminino plural)",
            "lo tengo = tenho ele/o (objeto)",
            "¿Lo ves? = Você o vê?"
          ],
          oralProduction: "Pratique substituindo objetos por pronomes: 'Tengo el libro' → 'Lo tengo'. Faça 5 exemplos.",
          exercises: [
            { id: "ES-A1-U5-L4-E1", type: "multiple_choice", skill: "grammar", question: "Substitua: 'Tengo el coche' → 'Tengo ___'", options: ["la", "lo", "los", "las"], answer: 1, explanation: "Lo tengo = tenho ele (o carro). Coche é masculino singular, então usamos LO." },
            { id: "ES-A1-U5-L4-E2", type: "multiple_choice", skill: "grammar", question: "Substitua: 'Compro las frutas' → 'Las ___ → 'Compro ___'", options: ["lo compro", "la compro", "los compro", "las compro"], answer: 3, explanation: "Las compro = as compro (as frutas). Frutas é feminino plural, então LAS." },
            { id: "ES-A1-U5-L4-E3", type: "fill_blank", skill: "grammar", question: "Substitua: 'Veo la película.' → '___ veo.' ", answer: ["La"], hint: "pronome para objeto feminino singular", explanation: "La veo = a vejo. Película é feminino singular → LA. O pronome vai ANTES do verbo conjugado." },
            { id: "ES-A1-U5-L4-E4", type: "translation", skill: "writing", question: "Traduza usando pronomes: 'Tenho os ingressos. Os tenho na bolsa.'", answer: ["Tengo los boletos. Los tengo en la bolsa."], explanation: "Los tengo = os tenho. Boletos = ingressos/bilhetes. Los = pronome masculino plural." },
            { id: "ES-A1-U5-L4-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo onde você e um amigo procuram objetos perdidos. Use pronomes de objeto direto.", prompt: "Inclua: pelo menos 4 objetos diferentes · perguntas e respostas com lo/la/los/las", hint: "¿Tienes...? Sí, lo/la tengo. No, no lo/la tengo." }
          ]
        },
        {
          id: "ES-A1-U5-L5",
          title: "Revisão A1 — Conversação Livre",
          shadowing: "— Hola, ¿cómo estás?\n— Muy bien, gracias. Acabo de llegar de Brasil.\n— ¡Qué interesante! ¿Cuánto tiempo estuviste allí?\n— Dos semanas. Es un país increíble.\n— ¿Hablas portugués?\n— Un poco. Pero el español me parece más fácil.\n— ¿De verdad? Para mí el portugués es muy bonito.\n— Sí, es verdad. Los dos idiomas son hermosos.",
          memoryPhrases: [
            "Acabo de + infinitivo = acabei de + infinitivo",
            "¡Qué interesante! = Que interessante!",
            "me parece = me parece / acho que",
            "de verdad = de verdade / sério",
            "es verdad = é verdade",
            "los dos = os dois / ambos"
          ],
          oralProduction: "Faça uma conversa livre de 2 minutos em espanhol sobre qualquer tópico da unidade A1.",
          exercises: [
            { id: "ES-A1-U5-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'Acabo de llegar'?", options: ["Vou chegar", "Acabei de chegar", "Estou chegando", "Chegou"], answer: 1, explanation: "Acabo de llegar = acabei de chegar. ACABAR DE + infinitivo = ação que acabou de acontecer. É a forma de passado recente mais usada no espanhol." },
            { id: "ES-A1-U5-L5-E2", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'É verdade' em espanhol?", options: ["Es real", "Es verdad", "Es cierto también", "Tienes razón"], answer: 1, explanation: "Es verdad = é verdade. Tienes razón = você tem razão (também correto mas diferente). Es cierto = é certo/verdadeiro." },
            { id: "ES-A1-U5-L5-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'El español me _____ fácil.' (O espanhol me parece fácil.)", answer: ["parece"], hint: "me parece = me parece / acho", explanation: "Me parece = me parece / acho. Parecerse a gustar: me parece fácil = acho fácil / me parece fácil." },
            { id: "ES-A1-U5-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Acabei de ler um livro em espanhol. Me parece muito interessante.'", answer: ["Acabo de leer un libro en español. Me parece muy interesante."], explanation: "Acabo de leer = acabei de ler. Me parece muy interesante = me parece muito interessante." },
            { id: "ES-A1-U5-L5-E5", type: "free_writing", skill: "writing", question: "Escreva uma redação sobre sua experiência aprendendo espanhol até agora. Mínimo 8 frases.", prompt: "Inclua: por que quer aprender · o que acha difícil/fácil · comparação com português · seus objetivos", hint: "Quiero aprender porque..., me parece..., es diferente/similar al portugués..., mi objetivo es..." }
          ]
        }
      ]
    },
    {
      id: "ES-A1-U6",
      title: "Saúde e Corpo",
      description: "Vocabulário do corpo humano, saúde e idas ao médico",
      lessons: [
        {
          id: "ES-A1-U6-L1",
          title: "El Cuerpo Humano — O Corpo Humano",
          shadowing: "— ¿Qué te pasa?\n— Me duele la cabeza y tengo fiebre.\n— ¿Tienes tos también?\n— Sí, un poco. Y me duelen los ojos.\n— Debes ir al médico.\n— Tienes razón. Voy a pedir cita.",
          memoryPhrases: [
            "la cabeza = a cabeça",
            "el brazo / la pierna = o braço / a perna",
            "el estómago = o estômago",
            "me duele... = dói... / estou com dor de...",
            "tengo fiebre = estou com febre",
            "tengo tos = estou com tosse"
          ],
          oralProduction: "Descreva como você está se sentindo hoje usando partes do corpo e sintomas em espanhol.",
          exercises: [
            { id: "ES-A1-U6-L1-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'Estou com dor de cabeça' em espanhol?", options: ["Tengo dolor de cabeza", "Me duele la cabeza", "Siento la cabeza", "Ambas A e B são corretas"], answer: 3, explanation: "Tanto 'Tengo dolor de cabeza' quanto 'Me duele la cabeza' são corretos. Me duele = dói-me / estou com dor." },
            { id: "ES-A1-U6-L1-E2", type: "multiple_choice", skill: "grammar", question: "Qual é correto: 'Me ___ los pies'? (Estou com dor nos pés.)", options: ["duele", "duelen", "dueles", "dolor"], answer: 1, explanation: "Me duelen los pies = estou com dor nos pés. DUELEN (plural) porque os pés são dois. Me duele (singular) para partes únicas." },
            { id: "ES-A1-U6-L1-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: 'Tengo _____.' (Estou com febre.)", answer: ["fiebre"], hint: "febre em espanhol", explanation: "Fiebre = febre. Tengo fiebre = estou com febre / tenho febre." },
            { id: "ES-A1-U6-L1-E4", type: "translation", skill: "writing", question: "Traduza: 'Estou com dor de barriga e febre desde ontem.'", answer: ["Tengo dolor de estómago y fiebre desde ayer.", "Me duele el estómago y tengo fiebre desde ayer."], explanation: "Estómago = barriga/estômago. Desde ayer = desde ontem. Fiebre = febre." },
            { id: "ES-A1-U6-L1-E5", type: "free_writing", skill: "writing", question: "Você está doente. Escreva uma mensagem para seu chefe explicando seus sintomas e que não pode ir trabalhar.", prompt: "Inclua: sintomas · faz quantos dias · que vai fazer (médico) · quando volta", hint: "Me duele..., tengo..., desde hace..., voy a ir al médico, vuelvo el..." }
          ]
        },
        {
          id: "ES-A1-U6-L2",
          title: "En el Médico — No Médico",
          shadowing: "— Buenos días. ¿Qué le pasa?\n— Doctor, me siento muy mal. Tengo fiebre y me duele la garganta.\n— ¿Desde cuándo?\n— Desde ayer por la tarde.\n— Voy a examinarle. Abra la boca, por favor.\n— ¿Es grave?\n— No, es una infección leve. Le receto antibióticos.",
          memoryPhrases: [
            "¿Qué le pasa? = O que está acontecendo? / O que você tem?",
            "Me siento mal = Estou me sentindo mal",
            "la garganta = a garganta",
            "¿Desde cuándo? = Desde quando?",
            "Le receto... = Vou receitar...",
            "Es una infección = É uma infecção"
          ],
          oralProduction: "Pratique um diálogo de consulta médica em espanhol: descreva seus sintomas e pergunte ao médico.",
          exercises: [
            { id: "ES-A1-U6-L2-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'Estou me sentindo mal' em espanhol?", options: ["Estoy malo", "Me siento mal", "Tengo malo", "Soy enfermo"], answer: 1, explanation: "Me siento mal = estou me sentindo mal. 'Estoy malo' também existe mas é mais informal. 'Soy enfermo' está errado (usar ESTAR, não SER para estados temporários)." },
            { id: "ES-A1-U6-L2-E2", type: "multiple_choice", skill: "vocabulary", question: "O que significa 'Le receto antibióticos'?", options: ["Você precisa de antibióticos", "Vou receitar antibióticos", "Toma os antibióticos", "Compre antibióticos"], answer: 1, explanation: "Le receto = vou receitar para você. Recetar = receitar. O médico é quem receta (receita)." },
            { id: "ES-A1-U6-L2-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: '¿_____ cuándo tiene estos síntomas?' (Desde quando você tem esses sintomas?)", answer: ["Desde"], hint: "palavra que indica ponto de início no tempo", explanation: "Desde cuándo = desde quando. Desde = desde (ponto de início). Hace tres días = há três dias." },
            { id: "ES-A1-U6-L2-E4", type: "translation", skill: "writing", question: "Traduza: 'Doutor, estou com dor de garganta e tosse há dois dias.'", answer: ["Doctor, tengo dolor de garganta y tos desde hace dos días.", "Doctor, me duele la garganta y tengo tos desde hace dos días."], explanation: "Desde hace dos días = há dois dias. Garganta = garganta. Tos = tosse." },
            { id: "ES-A1-U6-L2-E5", type: "free_writing", skill: "writing", question: "Escreva um diálogo completo de consulta médica. Mínimo 8 falas.", prompt: "Inclua: saudação · sintomas · desde quando · exame · diagnóstico · receita", hint: "¿Qué le pasa?, Me duele/tengo..., desde hace..., voy a examinarle, le receto..." }
          ]
        },
        {
          id: "ES-A1-U6-L3",
          title: "Pretérito Indefinido — Passado Simples (-AR)",
          shadowing: "— ¿Qué hiciste ayer?\n— Trabajé todo el día. Por la noche cené con mi familia.\n— ¿Y el fin de semana?\n— El sábado viajé a Madrid. Llegué a las diez de la noche.\n— ¿Y el domingo?\n— Descansé en casa y llamé a mis amigos.",
          memoryPhrases: [
            "trabajé = trabalhei",
            "viajé = viajei",
            "llegué = cheguei",
            "hablé = falei",
            "comí = comi",
            "Terminações -AR: -é, -aste, -ó, -amos, -aron"
          ],
          oralProduction: "Conte o que você fez ontem e no último fim de semana em espanhol, usando o pretérito indefinido.",
          exercises: [
            { id: "ES-A1-U6-L3-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Eu trabalhei' em espanhol (pretérito)?", options: ["Yo trabajé", "Yo trabajé", "Yo trabajó", "Yo trabajaba"], answer: 0, explanation: "Trabajé = trabalhei. Pretérito indefinido -AR: yo -é. Atenção ao acento em trabajé!" },
            { id: "ES-A1-U6-L3-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Ela viajou' no pretérito?", options: ["Ella viajé", "Ella viajaste", "Ella viajó", "Ella viajamos"], answer: 2, explanation: "Viajó = viajou. Pretérito -AR para él/ella/usted: -ó (com acento)." },
            { id: "ES-A1-U6-L3-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Ayer nosotros _____ mucho.' (Ontem nós trabalhamos muito.)", answer: ["trabajamos"], hint: "pretérito -AR para nosotros", explanation: "Trabajamos = trabalhamos (pretérito). Curioso: nosotros no pretérito -AR é igual ao presente! Contexto diferencia." },
            { id: "ES-A1-U6-L3-E4", type: "translation", skill: "writing", question: "Traduza: 'Ontem eu chamei minha mãe e conversamos por uma hora.'", answer: ["Ayer llamé a mi madre y hablamos por una hora."], explanation: "Llamé = liguei/chamei. Hablamos = conversamos. Por una hora = por uma hora. A mi madre = minha mãe (a + pessoa)." },
            { id: "ES-A1-U6-L3-E5", type: "free_writing", skill: "writing", question: "Escreva sobre o que você fez no último fim de semana usando o pretérito indefinido. Mínimo 8 frases.", prompt: "Inclua: sábado e domingo · atividades · com quem · onde · que horas", hint: "El sábado + pretérito: trabajé, viajé, llegué, llamé, hablé, descansé" }
          ]
        },
        {
          id: "ES-A1-U6-L4",
          title: "Pretérito Indefinido — Passado Simples (-ER/-IR e Irregulares)",
          shadowing: "— ¿Fuiste al concierto?\n— Sí, fui con mi novia. Fue increíble.\n— ¿Qué música tocaron?\n— Tocaron canciones clásicas. Comí mucho y bebí demasiado.\n— ¡Qué bien! ¿Volviste tarde?\n— Sí, volví a las dos de la mañana.",
          memoryPhrases: [
            "fui = fui (SER e IR têm o mesmo pretérito!)",
            "fue = foi",
            "tuve = tive",
            "hice = fiz",
            "vine = vim",
            "Terminações -ER/-IR: -í, -iste, -ió, -imos, -ieron"
          ],
          oralProduction: "Conte sobre a última vez que você foi a um show, cinema ou restaurante, em espanhol.",
          exercises: [
            { id: "ES-A1-U6-L4-E1", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Eu fui' (ir) em espanhol pretérito?", options: ["iba", "fui", "va", "iré"], answer: 1, explanation: "Fui = fui (ir). ATENÇÃO: SER e IR têm o mesmo pretérito: fui, fuiste, fue, fuimos, fueron. O contexto diferencia." },
            { id: "ES-A1-U6-L4-E2", type: "multiple_choice", skill: "grammar", question: "Como se diz 'Ele comeu' no pretérito?", options: ["él comió", "él comé", "él comió", "él comío"], answer: 0, explanation: "Comió = comeu. Pretérito -ER para él/ella: -ió (com acento). Atenção: comIÓ, bebIÓ, vivIÓ." },
            { id: "ES-A1-U6-L4-E3", type: "fill_blank", skill: "grammar", question: "Complete: 'Yo _____ mucho ayer.' (Eu dormi muito ontem.)", answer: ["dormí"], hint: "pretérito de 'dormir' para yo", explanation: "Dormí = dormi. Dormir é irregular no pretérito: dormí, dormiste, durmió, dormimos, durmieron." },
            { id: "ES-A1-U6-L4-E4", type: "translation", skill: "writing", question: "Traduza: 'Ontem fui ao cinema, comi pipoca e bebi refrigerante.'", answer: ["Ayer fui al cine, comí palomitas y bebí refresco."], explanation: "Fui = fui. Cine = cinema. Palomitas = pipoca. Refresco = refrigerante/refri." },
            { id: "ES-A1-U6-L4-E5", type: "free_writing", skill: "writing", question: "Escreva sobre o melhor dia da sua vida usando o pretérito indefinido. Mínimo 8 frases.", prompt: "Inclua: quando foi · onde foi · com quem · o que fez · verbos regulares e irregulares", hint: "fui, estuve, hice, comí, bebí, conocí, hablé, bailé..." }
          ]
        },
        {
          id: "ES-A1-U6-L5",
          title: "Revisão Geral A1 e Próximos Passos",
          shadowing: "— ¡Enhorabuena! Has terminado el nivel A1 de español.\n— ¡Gracias! He aprendido muchísimo.\n— Ahora puedes presentarte, hablar de tu familia y tu trabajo.\n— Sí, y también puedo pedir en restaurantes y dar direcciones.\n— ¿Cuál fue la parte más difícil?\n— Los verbos irregulares y ser/estar. Pero ya los entiendo mejor.\n— ¡Sigue practicando! El A2 te espera.",
          memoryPhrases: [
            "¡Enhorabuena! = Parabéns!",
            "He aprendido = aprendi / tenho aprendido",
            "ya entiendo = já entendo",
            "¡Sigue practicando! = Continue praticando!",
            "te espera = te espera / está esperando por você",
            "lo más difícil = o mais difícil"
          ],
          oralProduction: "Faça um resumo em espanhol de tudo que você aprendeu no A1: apresentação, família, trabalho, rotina, passado.",
          exercises: [
            { id: "ES-A1-U6-L5-E1", type: "multiple_choice", skill: "vocabulary", question: "Como se diz 'Parabéns!' em espanhol?", options: ["¡Felicidades!", "¡Enhorabuena!", "¡Congratulaciones!", "A e B estão corretas"], answer: 3, explanation: "Tanto ¡Felicidades! quanto ¡Enhorabuena! significam Parabéns em espanhol. Felicidades é mais usada na América Latina, Enhorabuena na Espanha." },
            { id: "ES-A1-U6-L5-E2", type: "multiple_choice", skill: "grammar", question: "O que é o PRETÉRITO PERFECTO? 'He aprendido'", options: ["Aprendi (ação completa no passado)", "Aprendi (passado recente ou conectado ao presente)", "Vou aprender", "Estava aprendendo"], answer: 1, explanation: "He aprendido = tenho aprendido / aprendi (recente). É diferente do pretérito indefinido (aprendí). O perfecto conecta o passado ao presente." },
            { id: "ES-A1-U6-L5-E3", type: "fill_blank", skill: "vocabulary", question: "Complete: '¡_____ practicando!' (Continue praticando!)", answer: ["Sigue"], hint: "imperativo de seguir = continuar", explanation: "Sigue practicando = continue praticando. SEGUIR + gerúndio = continuar fazendo algo." },
            { id: "ES-A1-U6-L5-E4", type: "translation", skill: "writing", question: "Traduza: 'Aprendi muito espanhol mas preciso continuar praticando.'", answer: ["He aprendido mucho español pero necesito seguir practicando.", "Aprendí mucho español pero necesito seguir practicando."], explanation: "He aprendido ou Aprendí ambos funcionam. Necesito seguir practicando = preciso continuar praticando." },
            { id: "ES-A1-U6-L5-E5", type: "free_writing", skill: "writing", question: "Escreva uma carta em espanhol para um amigo brasileiro contando sua experiência aprendendo espanhol no nível A1. Mínimo 10 frases.", prompt: "Inclua: por que começou · o que foi fácil/difícil · comparações com português · seus objetivos para o A2", hint: "Empecé a estudiar porque..., fue difícil/fácil..., es similar/diferente al portugués..., quiero..." }
          ]
        }
      ]
    }
  ]
};
