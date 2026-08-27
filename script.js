// EDITE ESTE ARCHIVO para actualizar avance, temas y enlaces de descarga.
const sessions=[
["27 ago.","6:00–9:00 p. m.","Introducción a la IA","Historia, aplicaciones y tipos de problemas.","current","completed","materiales/01_MIA.pdf"],
["28 ago.","6:00–9:00 p. m.","Agentes inteligentes","Racionalidad, entorno, percepción y acciones.","upcoming",""],
["29 ago.","7:00–11:00 a. m.","Formulación de problemas","Estados, acciones, objetivos y Taller 1.","upcoming",""],
["3 sep.","6:00–9:00 p. m.","Búsqueda no informada I","Fundamentos y búsqueda en anchura (BFS).","upcoming",""],
["4 sep.","6:00–9:00 p. m.","Búsqueda no informada II","DFS, búsqueda iterativa y costo uniforme.","upcoming",""],
["5 sep.","7:00–11:00 a. m.","Laboratorio de búsqueda","Implementación y Taller 2.","upcoming",""],
["10 sep.","6:00–9:00 p. m.","Búsqueda informada","Heurísticas, búsqueda voraz y A*.","upcoming",""],
["11 sep.","6:00–9:00 p. m.","Búsqueda adversaria","Minimax y poda alfa-beta.","upcoming",""],
["12 sep.","7:00–11:00 a. m.","Laboratorio del primer corte","Búsqueda informada y Taller 3.","upcoming",""],
["17 sep.","6:00–9:00 p. m.","Algoritmos evolutivos","Población, cromosoma y aptitud.","upcoming",""],
["18 sep.","6:00–9:00 p. m.","Operadores genéticos","Selección, cruce y mutación.","upcoming",""],
["19 sep.","7:00–11:00 a. m.","Laboratorio genético","Implementación y Taller 4.","upcoming",""],
["24 sep.","6:00–9:00 p. m.","Colonia de hormigas","Inteligencia de enjambres y ACO.","upcoming",""],
["25 sep.","6:00–9:00 p. m.","Enjambre de partículas","Fundamentos de PSO.","upcoming",""],
["26 sep.","7:00–11:00 a. m.","Laboratorio de optimización","Comparación de GA, ACO y PSO. Taller 5.","upcoming",""],
["1 oct.","6:00–9:00 p. m.","Machine learning","Tipos de aprendizaje y flujo de trabajo.","upcoming",""],
["2 oct.","6:00–9:00 p. m.","Clasificación","Árboles, sobreajuste y métricas.","upcoming",""],
["3 oct.","7:00–11:00 a. m.","Redes neuronales","Perceptrón, propagación y Taller 6.","upcoming",""],
["8 oct.","6:00–9:00 p. m.","Aprendizaje por refuerzo","Agentes, recompensas y Q-learning. Taller 7.","upcoming",""],
["9 oct.","6:00–7:00 p. m.","Cierre del curso","Síntesis, retroalimentación y notas.","upcoming",""]
];
const workshops=[
["Formulación de problemas",8,"Primer corte","29 ago.",""],["Búsqueda no informada",10,"Primer corte","5 sep.",""],["Búsqueda informada y adversaria",12,"Primer corte","12 sep.",""],["Algoritmos genéticos",15,"Segundo corte","19 sep.",""],["Inteligencia de enjambres",15,"Segundo corte","26 sep.",""],["Clasificación y redes neuronales",20,"Tercer corte","3 oct.",""],["Aprendizaje por refuerzo",20,"Tercer corte","8 oct.",""]
];
const resources=[
["Programa de la asignatura","Objetivos, competencias y metodología",""],["Presentaciones","Material de las sesiones",""],["Guías de talleres","Actividades evaluables del curso",""],["Código de laboratorios","Ejemplos y archivos de apoyo",""]
];
const labels={completed:"Finalizada",current:"En curso",upcoming:"Próxima"};
function renderSessions(items=sessions){document.querySelector("#sessionList").innerHTML=items.map((s,i)=>{const original=sessions.indexOf(s)+1;return `<article class="session"><span class="session-number">${String(original).padStart(2,"0")}</span><div class="session-date"><b>${s[0]}</b><small>${s[1]}</small></div><div class="session-info"><h3>${s[2]}</h3><p>${s[3]}</p></div><div class="session-actions"><span class="badge ${s[4]}">${labels[s[4]]}</span>${s[5]?`<a class="download" href="${s[5]}" download>Descargar</a>`:""}</div></article>`}).join("")}
function renderWorkshops(){document.querySelector("#workshopGrid").innerHTML=workshops.map((w,i)=>`<article class="workshop"><div class="workshop-head"><span class="workshop-number">T${i+1}</span><span class="weight">${w[1]}%</span></div><h3>${w[0]}</h3><p>Actividad práctica de aplicación y análisis de resultados.</p><div class="workshop-meta"><span>${w[2]}</span><span>${w[3]}</span></div>${w[4]?`<a class="download" href="${w[4]}" download>Descargar guía</a>`:`<div class="unavailable">Guía próximamente</div>`}</article>`).join("")}
function renderResources(){document.querySelector("#resourceGrid").innerHTML=resources.map((r,i)=>`<article class="resource"><span class="resource-icon">${i+1}</span><div><h3>${r[0]}</h3><p>${r[1]}</p></div>${r[2]?`<a class="download" href="${r[2]}" download>Descargar</a>`:`<span class="badge">Próximamente</span>`}</article>`).join("")}
function updateProgress(){const done=sessions.filter(s=>s[4]==="completed").length;const value=Math.round(done/sessions.length*100);document.querySelector("#progressNumber").textContent=value+"%";document.querySelector("#progressBar").style.width=value+"%";document.querySelector("#doneCount").textContent=done;document.querySelector("#pendingCount").textContent=sessions.length-done}
document.querySelector("#searchInput").addEventListener("input",e=>{const q=e.target.value.toLowerCase();renderSessions(sessions.filter(s=>s.slice(0,4).join(" ").toLowerCase().includes(q)))});
document.querySelector("#menuButton").addEventListener("click",e=>{const nav=document.querySelector("#mainNav");nav.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",nav.classList.contains("open"))});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#mainNav").classList.remove("open")));
renderSessions();renderWorkshops();renderResources();updateProgress();

[
  "27 ago.",
  "6:00–9:00 p. m.",
  "Introducción a la IA",
  "Historia, aplicaciones y tipos de problemas.",
  "completed",
  "materiales/01_MIA.pdf"
]
