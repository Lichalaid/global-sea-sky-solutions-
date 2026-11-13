'use strict';
const english = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el => [el.dataset.i18n, el.innerHTML]));
const spanish = {
skip:'Ir al contenido',navExpertise:'Servicios',navExperiences:'Experiencias',navContact:'Contacto',heroTitle:'Oportunidades globales.',heroItalic:'Conexiones personales.',heroDescription:'Inversiones, yates, aviación privada y experiencias extraordinarias. Tu mundo, conectado a través de una sola persona.',heroButton:'Ver servicios',heroContact:'Contactar a Mercedes',scroll:'BAJAR',introTitle:'Yates, aviación<br><em>e inversiones.</em>',introDescription:'Ya sea que busques invertir, adquirir un yate o planear un viaje privado, Global Sea Sky Solutions conecta tus intereses a través de Mercedes Pilla y sus contactos internacionales.',expertiseTitle:'Servicios',investmentsTitle:'Conexiones de inversión',investmentsDescription:'Para personas que buscan invertir. Para negocios que buscan un inversor.',investAction:'Invertir en un negocio',capitalAction:'Buscar un inversor',yachtsTitle:'Yates, en todo el mundo.',yachtsDescription:'Buscamos el yate que querés, en cualquier parte del mundo. Nuevos, usados y fuera del mercado público.',yachtNetwork:'Para la venta de yates, trabajamos junto a <strong>HOFF Exclusive</strong> y <strong>BB Yachts</strong>.',yachtAction:'Encontrar un yate',aviationTitle:'Aviación privada',aviationDescription:'Compra, venta, charters privados y leasing de aeronaves a través de Smarter Aircraft.',aviationAction:'Comprar, vender o volar',estateTitle:'Inversión inmobiliaria',estateDescription:'Inversión en construcción de apartamentos de lujo en Miami, Fort Lauderdale y West Palm Beach.',estateAction:'Ver inversión inmobiliaria',experienceTitle:'Algunos viajes<br>merecen ser<br><em>extraordinarios.</em>',experienceDescription:'Aviación privada, vacaciones de lujo y acceso a eventos excepcionales. Contanos adónde querés ir. Empecemos esa conversación.',experienceAction:'Ver viajes privados y eventos',furtherTitle:'Otros servicios',furtherDescription:'Arte y relojería, venta de SEABOB y presencia de atletas en eventos.',artTitle:'Arte y relojería',artDescription:'Relojes B.R.M de la campaña 2026, esculturas y relojes náuticos.',waterTitle:'Water toys',waterDescription:"Venta exclusiva de SEABOB en El Salvador. Consultanos por el precio especial de introducción y la disponibilidad.",athleteTitle:'Atletas y eventos',athleteDescription:'La presencia de atletas en tu próximo evento.',contactTitle:'Contacto',contactDescription:'Una nueva inversión. Un yate. Ese viaje que estás imaginando. Contale a Mercedes qué estás buscando.',whatsapp:'Conectá por WhatsApp',interestLabel:'Tu interés:',nameLabel:'Tu nombre',emailLabel:'Email',phoneLabel:'Teléfono',cityLabel:'Tu ciudad',messageLabel:'¿Qué estás buscando?',submit:'Continuar por email',formNote:'Se abrirá tu aplicación de correo para que puedas revisar y enviar el mensaje.',footerLocation:'WEST PALM BEACH, FLORIDA',dialogAction:'Consultá por este servicio'
};
Object.assign(spanish,{"navEvents": "Eventos", "brandsTitle": "Yates y marcas", "associationsTitle": "Empresas con las que trabajamos", "yachtcreatorsRole": "Brokerage de yates", "hoffRole": "Charters de yates y aeronaves · Eventos de negocios", "smarterRole": "Aviación privada", "eventsHeading": "Eventos", "eventsDescription": "Eventos y viajes privados con HOFF Exclusive. Consultá a Mercedes por el programa y la disponibilidad.", "allEvents": "Ver todos los eventos", "eventDetails": "Ver programa", "backHome": "Volver al inicio", "eventDallasDate": "8 de noviembre de 2026", "eventDallasSummary": "Sesiones de Pilates, visita de aeronaves y marcas de bienestar en Addison Airport. De 12:00 a 16:00.", "eventDubaiDate": "25–29 de noviembre de 2026", "eventDubaiSummary": "Vuelos privados desde Dallas, Atlantis The Royal, Boat Show, helicóptero, desierto y un día en yate privado.", "eventAbuDhabiDate": "2–7 de diciembre de 2026", "eventAbuDhabiSummary": "Vuelos privados desde Dallas, cinco noches en Yas Island y el fin de semana del Grand Prix, con la carrera desde un superyate."});
Object.assign(spanish,{"allServices": "Todos los servicios", "requestCall": "Solicitar una llamada", "pageEnquiry": "Consultar con Mercedes", "whatsappDirect": "WhatsApp", "backServices": "Ver servicios", "included": "Qué incluye", "programme": "Programa", "eventEnquiry": "Consultar por este evento", "readDetails": "Ver detalles", "serviceDirectoryTitle": "Servicios", "serviceDirectoryLead": "Yates, aviación privada, inversiones, viajes, arte, SEABOB y atletas para eventos. Elegí el área que te interesa y consultá directamente con Mercedes.", "relatedServices": "Otros servicios", "aboutPageTitle": "Mercedes Pilla", "aboutPageLead": "CEO & President de Global Sea Sky Solutions, con oficina en West Palm Beach y una red internacional de contactos comerciales.", "officeTitle": "Oficina", "coverageTitle": "Cobertura", "aboutTextTitle": "Global Sea Sky Solutions", "aboutText": "Mercedes reúne conexiones de inversión, venta de yates, aviación privada, inversión inmobiliaria, viajes y eventos, arte, relojería y water toys a través de un contacto personal. Su trabajo incluye las asociaciones y empresas presentadas en esta web.", "aboutCoverage": "Florida, El Salvador, Costa Rica, Cannes, Mónaco, Italia, Alemania y Polonia. La búsqueda de yates tiene alcance mundial.", "tripOrigin": "Salida desde Dallas", "eventHost": "Organizado por HOFF Exclusive", "eventAvailability": "Consultá por la disponibilidad y los detalles de participación. El programa está sujeto a confirmación final de lugares y horarios.", "menu_invest": "Conexiones de inversión", "menu_yachts": "Venta de yates", "menu_aviation": "Aviación privada", "menu_realestate": "Inversión inmobiliaria", "menu_experiences": "Viajes privados y eventos", "menu_art": "Arte y relojería", "menu_watertoys": "Venta de SEABOB", "menu_athletes": "Atletas para eventos"});
Object.assign(spanish,{flarepointRole:"Programa de inversión"});
Object.assign(spanish,window.GC_PAGE_TRANSLATIONS||{});
const placeholders = {en:{namePlaceholder:'Full name',cityPlaceholder:'Your city',messagePlaceholder:'Tell us a little about what you have in mind…'},es:{namePlaceholder:'Nombre y apellido',cityPlaceholder:'Tu ciudad',messagePlaceholder:'Contanos un poco sobre lo que tenés en mente…'}};
const intents = {en:{invest:'Investment opportunities',yachts:'Yacht sales',aviation:'Private aviation',realestate:'Real estate investment',experiences:'Private travel & experiences',art:'Art & horology',watertoys:'SEABOB in El Salvador',athletes:'Athletes for events'},es:{invest:'Oportunidades de inversión',yachts:'Venta de yates',aviation:'Aviación privada',realestate:'Inversión inmobiliaria',experiences:'Viajes privados y experiencias',art:'Arte y relojería',watertoys:'SEABOB in El Salvador',athletes:'Atletas para eventos'}};
const services = {
en:{
yachts:{title:'Yacht sales',description:'Tell us the yacht you want, wherever it is. Mercedes Pilla sources new, pre-owned and off-market yachts worldwide, working with HOFF Exclusive and BB Yachts.',points:['New and pre-owned yacht sales','Worldwide yacht sourcing','Financing, insurance and inspection enquiries','Registration, delivery and translation support'],image:'/moon-70-sail.jpeg'},
aviation:{title:'Private aviation',description:'Discuss aircraft purchase, sale, private charter or leasing with Mercedes Pilla.',points:['Aircraft acquisition and sales','Private charters','Aircraft leasing','Tax deduction guide'],image:'/aviation.jpg'},
realestate:{title:'Real estate investment',description:'Explore investment in luxury apartment construction in South Florida. Talk to Mercedes about the opportunities you are looking for.',points:['Miami','Fort Lauderdale','West Palm Beach'],image:'/investment.jpg'},
experiences:{title:'Private travel and events',description:'Luxury vacations, private aviation and access to events. Connect with Mercedes to discuss your destination and the experience you have in mind.',points:['Monaco · Dubai · Abu Dhabi','Miami · Singapore','Costa Rica · El Salvador','Private aviation and access to events'],image:'/coast.jpg'},
art:{title:'Art and horology',description:'Discover Bernard Richards Manufacture through sculptural objects, table clocks and watch winders created for distinctive interiors.',points:['Formulart and Speedart sculptures','Propeller and ship’s wheel table clocks','Watch winders for automatic watches','Enquire about available pieces'],image:null},
watertoys:{title:'SEABOB sales',description:'Explore SEABOB water toys for sale and ask us about the model you are looking for.',points:['SEABOB water toy sales','Personal enquiries and product information'],image:'/yacht.jpg'},
athletes:{title:'Athlete appearances',description:'Contact Mercedes to discuss bringing an athlete to your event. Share your occasion and what you have in mind.',points:['Athlete appearances for events','Availability and details by enquiry'],image:null}
},
es:{
yachts:{title:'Venta de yates',description:'Contanos qué yate buscás, esté donde esté. Mercedes Pilla busca yates nuevos, usados y oportunidades fuera del mercado público en todo el mundo, junto a HOFF Exclusive y BB Yachts.',points:['Venta de yates nuevos y usados','Búsqueda de yates en todo el mundo','Consultas de financiación, seguros e inspecciones','Apoyo en registro, entrega y traducción'],image:'/moon-70-sail.jpeg'},
aviation:{title:'Aviación privada',description:'Consultá por compra, venta, charter privado o leasing de aeronaves con Mercedes Pilla.',points:['Compra y venta de aeronaves','Charters privados','Leasing de aeronaves','Tax deduction guide'],image:'/aviation.jpg'},
realestate:{title:'Inversión inmobiliaria',description:'Explorá inversiones para la construcción de apartamentos de lujo en el sur de Florida. Conversá con Mercedes sobre las oportunidades que estás buscando.',points:['Miami','Fort Lauderdale','West Palm Beach'],image:'/investment.jpg'},
experiences:{title:'Viajes privados y eventos',description:'Vacaciones de lujo, aviación privada y acceso a eventos. Conectá con Mercedes para conversar sobre el destino y la experiencia que tenés en mente.',points:['Mónaco · Dubái · Abu Dabi','Miami · Singapur','Costa Rica · El Salvador','Aviación privada y acceso a eventos'],image:'/coast.jpg'},
art:{title:'Arte y relojería',description:'Descubrí Bernard Richards Manufacture a través de esculturas, relojes de mesa y watch winders para interiores distintivos.',points:['Esculturas Formulart y Speedart','Relojes de mesa con formas de hélice y timón','Watch winders para relojes automáticos','Consultá por las piezas disponibles'],image:null},
watertoys:{title:'Venta de SEABOB',description:'Conocé los water toys de SEABOB disponibles para la venta y consultanos por el modelo que buscás.',points:['Venta de water toys SEABOB','Consultas personales e información de productos'],image:'/yacht.jpg'},
athletes:{title:'Atletas para eventos',description:'Contactá a Mercedes para conversar sobre la presencia de un atleta en tu evento. Contale sobre la ocasión y qué tenés en mente.',points:['Presencia de atletas en eventos','Disponibilidad y detalles por consulta'],image:null}
}
};
Object.assign(services.en,{"eventDallas": {"title": "Pilates & Jets", "description": "8 November 2026 · Addison Airport, Dallas. A HOFF Exclusive afternoon with Pilates, private aircraft viewing and networking, from 12:00 PM to 4:00 PM.", "points": ["Two guided Pilates sessions", "Private aviation access and aircraft viewing", "Luxury, beauty and wellness vendors", "Mocktails, hors d’oeuvres and giveaways", "Networking at Addison Airport", "Attendance details and availability by enquiry"], "image": "/dallas-private-jet-service.jpg"}, "eventDubai": {"title": "Dubai Experience", "description": "25–29 November 2026 · Dubai. A HOFF Exclusive trip from Dallas, with private aviation and four nights at Atlantis The Royal.", "points": ["Round-trip private jet from Dallas", "Four nights in a private suite at Atlantis The Royal, with daily breakfast", "Dubai International Boat Show, yacht viewings and private appointments", "Private helicopter flight over Dubai", "Desert experience and dinner under the stars", "Private yacht charter with lunch on board", "Chauffeur service, private dinners and a dedicated HOFF host", "Private group of up to 16 guests, by invitation", "Programme subject to final confirmation of venues and timings"], "image": "/event-dubai.jpg"}, "eventAbuDhabi": {"title": "Abu Dhabi Grand Prix Experience", "description": "2–7 December 2026 · Abu Dhabi. The HOFF Exclusive Grand Prix trip combines private aviation, a five-star stay on Yas Island and race day aboard a superyacht in Yas Marina.", "points": ["Round-trip private jet from Dallas", "Five nights in a five-star suite on Yas Island, with daily breakfast", "Grand Prix weekend access and a guided circuit tour", "Private hospitality and networking before qualifying", "A private yacht day along the Abu Dhabi coastline", "Private helicopter flight over Abu Dhabi", "Race day aboard a superyacht in Yas Marina", "Private dinners, a closing party, chauffeur service and a dedicated HOFF host", "Private group of up to 16 guests, by invitation", "Programme subject to final confirmation of venues and timings"], "image": "/event-abu-dhabi.jpg"}});
Object.assign(services.es,{"eventDallas": {"title": "Pilates & Jets", "description": "8 de noviembre de 2026 · Addison Airport, Dallas. Un evento de HOFF Exclusive con Pilates, visita de aeronaves y networking, de 12:00 a 16:00.", "points": ["Dos sesiones guiadas de Pilates", "Acceso al entorno de aviación privada y visita de aeronaves", "Marcas de lujo, belleza y bienestar", "Mocktails, aperitivos y sorteos", "Networking en Addison Airport", "Detalles de asistencia y disponibilidad por consulta"], "image": "/dallas-private-jet-service.jpg"}, "eventDubai": {"title": "Dubai Experience", "description": "25–29 de noviembre de 2026 · Dubái. Un viaje de HOFF Exclusive desde Dallas, con aviación privada y cuatro noches en Atlantis The Royal.", "points": ["Avión privado de ida y vuelta desde Dallas", "Cuatro noches en suite privada en Atlantis The Royal, con desayuno diario", "Dubai International Boat Show, visitas de yates y citas privadas", "Vuelo privado en helicóptero sobre Dubái", "Experiencia en el desierto y cena bajo las estrellas", "Charter privado de yate con almuerzo a bordo", "Chofer, cenas privadas y un anfitrión de HOFF", "Grupo privado de hasta 16 personas, por invitación", "Programa sujeto a confirmación final de lugares y horarios"], "image": "/event-dubai.jpg"}, "eventAbuDhabi": {"title": "Abu Dhabi Grand Prix Experience", "description": "2–7 de diciembre de 2026 · Abu Dabi. La experiencia Grand Prix de HOFF Exclusive combina aviación privada, una estancia de cinco estrellas en Yas Island y la carrera desde un superyate en Yas Marina.", "points": ["Avión privado de ida y vuelta desde Dallas", "Cinco noches en suite de cinco estrellas en Yas Island, con desayuno diario", "Acceso al fin de semana del Grand Prix y visita guiada del circuito", "Hospitalidad privada y networking antes de la clasificación", "Un día en yate privado por la costa de Abu Dabi", "Vuelo privado en helicóptero sobre Abu Dabi", "La carrera desde un superyate en Yas Marina", "Cenas privadas, fiesta de cierre, chofer y un anfitrión de HOFF", "Grupo privado de hasta 16 personas, por invitación", "Programa sujeto a confirmación final de lugares y horarios"], "image": "/event-abu-dhabi.jpg"}});
Object.assign(intents.en,{"eventDallas": "Pilates & Jets · 8 November 2026", "eventDubai": "Dubai Experience · 25–29 November 2026", "eventAbuDhabi": "Abu Dhabi Grand Prix Experience · 2–7 December 2026", "brand-ferretti": "Yachts — Ferretti Group", "brand-capelli": "Yachts — Capelli", "brand-cncalvi": "Yachts — Chantiers Navals de Calvi", "brand-bb": "Yachts — BB Yachts", "brand-g-yachts": "Yachts — G-Yachts", "brand-joyme": "Yachts — joyMe", "brand-moon": "Yachts — Moon Yacht"});
Object.assign(intents.es,{"eventDallas": "Pilates & Jets · 8 de noviembre de 2026", "eventDubai": "Dubai Experience · 25–29 de noviembre de 2026", "eventAbuDhabi": "Abu Dhabi Grand Prix Experience · 2–7 de diciembre de 2026", "brand-ferretti": "Yates — Ferretti Group", "brand-capelli": "Yates — Capelli", "brand-cncalvi": "Yates — Chantiers Navals de Calvi", "brand-bb": "Yates — BB Yachts", "brand-g-yachts": "Yates — G-Yachts", "brand-joyme": "Yates — joyMe", "brand-moon": "Yates — Moon Yacht"});
Object.assign(intents.en,{call:'Call request',capital:'Seeking an investor'});Object.assign(intents.es,{call:'Solicitud de llamada',capital:'Busco un inversor'});
Object.assign(intents.en,{'moon-sail':'Moon 70 Sail'});Object.assign(intents.es,{'moon-sail':'Moon 70 Sail'});
Object.assign(intents.en,{'aviation-buy':'Aircraft purchase','aviation-sell':'Aircraft sale','aviation-lease':'Aircraft leasing','aviation-charter':'Private charter flight'});
Object.assign(intents.es,{'aviation-buy':'Compra de aeronave','aviation-sell':'Venta de aeronave','aviation-lease':'Leasing de aeronave','aviation-charter':'Vuelo chárter privado'});
const alts = {"en": {"investmentAlt": "Illustrative photo of an agreement being signed", "yachtAlt": "White motor yacht on Mediterranean waters", "aviationAlt": "Private business aircraft on the runway", "estateAlt": "Modern architecture reaching into the sky", "experienceAlt": "Coastal village overlooking the Mediterranean"}, "es": {"investmentAlt": "Foto ilustrativa de la firma de un acuerdo", "yachtAlt": "Yate a motor blanco en el Mediterráneo", "aviationAlt": "Avión privado en una pista", "estateAlt": "Arquitectura moderna vista desde abajo", "experienceAlt": "Pueblo costero sobre el Mediterráneo"}};
Object.assign(alts.en,{"eventDallasAlt": "Private aircraft on a runway", "eventDubaiAlt": "Yachts at Dubai Harbour", "eventAbuDhabiAlt": "Yas Marina Circuit illuminated at night"});
Object.assign(alts.es,{"eventDallasAlt": "Avión privado sobre una pista", "eventDubaiAlt": "Yates en Dubai Harbour", "eventAbuDhabiAlt": "Circuito de Yas Marina iluminado de noche"});
let language='en';
let selectedIntent='';
let selectedModel={};
function interestLabel(){return [intents[language][selectedIntent],selectedModel[language]].filter(Boolean).join(' — ');}
let activeService='';
let previousFocus=null;
const dialog=document.getElementById('service-dialog');
const menuButton=document.getElementById('menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
function setLanguage(lang){
 language=lang;
 const strings=lang==='en'?english:spanish;
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>{if(strings[el.dataset.i18n]!==undefined)el.innerHTML=strings[el.dataset.i18n];});
 document.querySelectorAll('[data-placeholder]').forEach(el=>{el.placeholder=placeholders[lang][el.dataset.placeholder]||'';});
 document.querySelectorAll('[data-alt-en]').forEach(el=>{el.alt=lang==='en'?el.dataset.altEn:el.dataset.altEs;});
 document.querySelectorAll('[data-alt]').forEach(el=>{el.alt=alts[lang][el.dataset.alt]||'';});
 document.querySelectorAll('[data-lang]').forEach(el=>{const active=el.dataset.lang===lang;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
 document.title=(lang==='en'?document.body.dataset.titleEn:document.body.dataset.titleEs)||(lang==='en'?'Global Sea Sky Solutions — A Personal Connection to a Wider World':'Global Sea Sky Solutions — Una conexión personal con el mundo');
 menuButton.setAttribute('aria-label',lang==='en'?'Open menu':'Abrir menú');
 document.querySelectorAll('a[aria-label="Back to top"],a[aria-label="Volver arriba"]').forEach(el=>el.setAttribute('aria-label',lang==='en'?'Back to top':'Volver arriba'));
 document.getElementById('dialog-close').setAttribute('aria-label',lang==='en'?'Close details':'Cerrar detalles');
 document.getElementById('clear-interest').setAttribute('aria-label',lang==='en'?'Clear selected interest':'Borrar interés seleccionado');
 if(selectedIntent){document.getElementById('interest-name').textContent=interestLabel();document.getElementById('interest').value=interestLabel();}
 if(activeService&&dialog.open)renderDialog(activeService);
 try{localStorage.setItem('global-sea-sky-solutions-language',lang);}catch{}
}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>setLanguage(el.dataset.lang)));
function closeMenu(){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';mobileNav.hidden=open;menuButton.setAttribute('aria-expanded',String(!open));});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const header=document.getElementById('header');
function handleScroll(){header.classList.toggle('scrolled',window.scrollY>70);}
window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();
function startEnquiry(intent,model='',modelEs=model){
 selectedIntent=intent;
 selectedModel={en:model,es:modelEs};
 document.getElementById('interest').value=interestLabel();
 document.getElementById('interest-name').textContent=interestLabel();
 document.getElementById('interest-line').hidden=!intent;
 if(dialog.open)dialog.close();
 closeMenu();
 document.getElementById('contact').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
document.querySelectorAll('[data-intent]').forEach(el=>el.addEventListener('click',()=>startEnquiry(el.dataset.intent,el.dataset.enquiryModel,el.dataset.enquiryModelEs)));
document.getElementById('clear-interest').addEventListener('click',()=>{selectedIntent='';selectedModel={};document.getElementById('interest').value='';document.getElementById('interest-line').hidden=true;});
function renderDialog(key){
 const data=services[language][key];
 document.getElementById('dialog-title').textContent=data.title;
 document.getElementById('dialog-description').textContent=data.description;
 const list=document.getElementById('dialog-points');list.replaceChildren();
 data.points.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});
 const photo=document.getElementById('dialog-photo');
 photo.style.backgroundImage=data.image?'url("'+data.image+'")':'none';
 dialog.classList.toggle('no-photo',!data.image);
}
document.querySelectorAll('[data-service]').forEach(el=>el.addEventListener('click',()=>{
 activeService=el.dataset.service;previousFocus=el;renderDialog(activeService);dialog.showModal();
}));
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(previousFocus)previousFocus.focus({preventScroll:true});activeService='';});
document.getElementById('dialog-contact').addEventListener('click',()=>{const key=activeService;startEnquiry(key);});
const form=document.getElementById('contact-form');
form.addEventListener('submit',e=>{
 e.preventDefault();
 if(!form.reportValidity())return;
 const data=new FormData(form);
 const names=language==='en'?['Name','Email','Phone','City','Interest','Message']:['Nombre','Email','Teléfono','Ciudad','Interés','Mensaje'];
 const values=['name','email','phone','city','interest','message'].map(key=>String(data.get(key)||'').trim());
 if(selectedIntent)values[4]=interestLabel();
 const body=names.map((name,i)=>name+': '+values[i]).filter((_,i)=>i!==4||values[4]).join('\n\n');
 const subject=(language==='en'?'Global Sea Sky Solutions enquiry':'Consulta Global Sea Sky Solutions')+(values[4]?' — '+values[4]:'');
 const url='mailto:Globlalconsulting@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 window.location.href=url;
 document.getElementById('form-status').textContent=language==='en'?'Review and send your message in your email app. You can also contact Mercedes directly by WhatsApp.':'Revisá y enviá el mensaje en tu aplicación de correo. También podés contactar a Mercedes directamente por WhatsApp.';
});
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
 document.documentElement.classList.add('js');
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
try{const saved=localStorage.getItem('global-sea-sky-solutions-language')||localStorage.getItem('global-consulting-language');if(saved==='es')language='es';}catch{}
setLanguage(language);

const servicesMenu=document.querySelector('.services-menu');
if(servicesMenu){document.addEventListener('click',e=>{if(!servicesMenu.contains(e.target))servicesMenu.open=false;});document.addEventListener('keydown',e=>{if(e.key==='Escape')servicesMenu.open=false;});servicesMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>servicesMenu.open=false));}
const queryIntent=new URLSearchParams(location.search).get('interest');
const contextIntent=(queryIntent&&Object.hasOwn(intents[language],queryIntent)?queryIntent:null)||document.body.dataset.interest;
if(contextIntent&&intents[language][contextIntent]){selectedIntent=contextIntent;document.getElementById('interest').value=intents[language][contextIntent];document.getElementById('interest-name').textContent=intents[language][contextIntent];document.getElementById('interest-line').hidden=false;}
