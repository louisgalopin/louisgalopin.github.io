// Code GoatCounter (le même que dans src/config/site.ts). Vide = pas de comptage.
var GOATCOUNTER = "louisgalopin";
var T = {
  es: {langs:"Francés · Inglés · Español", tag:"Práctica en eventos hoteleros<br>Cartagena de Indias · desde abril de 2027", sub:"Estudiante de Máster 2 · EM Normandie, Francia", port:"Ver mi portafolio", portSub:"Experiencia, eventos y acreditaciones", wa:"Escríbame por WhatsApp", mail:"Correo", cv:"Hoja de vida (PDF)", msg:"Hola Louis, conocí su portafolio y me gustaría hablar con usted sobre una práctica."},
  en: {langs:"French · English · Spanish", tag:"Hotel events internship<br>Cartagena de Indias · from April 2027", sub:"Master’s student (M2) · EM Normandie, France", port:"See my portfolio", portSub:"Experience, events and accreditations", wa:"Message me on WhatsApp", mail:"Email", cv:"CV (PDF)", msg:"Hello Louis, I came across your portfolio and would like to talk with you about an internship."},
  fr: {langs:"Français · Anglais · Espagnol", tag:"Stage en événementiel hôtelier<br>Carthagène des Indes · dès avril 2027", sub:"Étudiant en Master 2 · EM Normandie", port:"Voir mon portfolio", portSub:"Expériences, événements et accréditations", wa:"Écrivez-moi sur WhatsApp", mail:"E-mail", cv:"CV (PDF)", msg:"Bonjour Louis, j’ai découvert votre portfolio et j’aimerais échanger avec vous au sujet d’un stage."}
};
function setLang(l){
  var d=T[l]||T.es; document.documentElement.lang=l;
  document.querySelectorAll("[data-t]").forEach(function(el){ var k=el.getAttribute("data-t"); if(d[k]!=null) el.innerHTML=d[k]; });
  document.getElementById("wa").href="https://wa.me/33611985359?text="+encodeURIComponent(d.msg);
  document.querySelectorAll(".switch button").forEach(function(b){ b.setAttribute("aria-pressed", String(b.dataset.lang===l)); });
}
var pref=(navigator.language||"es").slice(0,2); setLang(T[pref]?pref:"es");
document.querySelectorAll(".switch button").forEach(function(b){ b.addEventListener("click",function(){ setLang(b.dataset.lang); }); });
if (GOATCOUNTER) { var s=document.createElement("script"); s.async=true; s.src="https://gc.zgo.at/count.js"; s.dataset.goatcounter="https://"+GOATCOUNTER+".goatcounter.com/count"; document.head.appendChild(s); }
document.addEventListener("contextmenu", function(e){ if (e.target.closest && e.target.closest("img, .arch")) e.preventDefault(); });
document.addEventListener("dragstart", function(e){ if (e.target.closest && e.target.closest("img")) e.preventDefault(); });
