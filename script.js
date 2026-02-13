const languages = {
  en: { name: 'English' },
  de: { name: 'Deutsch' },
  fr: { name: 'Français' },
  es: { name: 'Español' },
  it: { name: 'Italiano' }
};

const copy = {
  en: {
    nav: { market: 'Market Dynamics', thesis: 'Allocation Thesis', metrics: 'Live Metrics', faq: 'FAQ', contact: 'Contact', cta: 'Request Consultation' },
    hero: {
      title: 'Institutional AI Infrastructure & GPU Capacity Investment',
      p1: 'AI infrastructure investment is entering a structural expansion phase as enterprise compute demand growth accelerates across model training, inference, and sovereign digital modernization.',
      p2: 'FOSSENTRA provides institutional capital exposure to GPU capacity as infrastructure assets, positioning portfolios beyond software speculation with a disciplined, risk-managed allocation framework.',
      disclaimer: 'Institutional participation involves market, operational, liquidity, and regulatory risk.'
    },
    form: { title: 'Request Institutional Consultation', name: 'Full Name', email: 'Professional Email', phone: 'Phone Number', emailShort: 'Email', phoneShort: 'Phone', submit: 'Submit Request', success: 'Thank you. Your request has been received.', invalid: 'Please complete all required fields with a valid email.' },
    metrics: { gpu: 'GPU Units Tracked', dc: 'Data Center Partnerships', mw: 'Compute MW Capacity', util: 'Utilization Rate' },
    market: { title: 'Market Dynamics', c1t: 'Structural GPU Deficit', c1: 'Demand outpaces high-performance silicon supply, creating persistent allocation scarcity and pricing resilience.', c2t: 'Enterprise AI Expansion', c2: 'Global enterprises are moving from pilots to production-grade AI infrastructure with multi-year compute commitments.', c3t: 'Infrastructure Ownership Logic', c3: 'Owning exposure to capacity layers improves alignment with long-duration enterprise AI infrastructure demand.', c4t: 'Energy & Cooling Moat', c4: 'Power density, cooling design, and grid contracts establish meaningful barriers to competitive replication.' },
    thesis: { title: 'Allocation Thesis', t1: 'Structured allocation model', t2: 'Measurable compute signals', t3: 'Risk-adjusted exposure', t4: 'Infrastructure-backed economics' },
    dash: { title: 'Live Metrics Dashboard', m1: 'GPU units deployed', m2: 'Compute capacity (MW)', m3: 'Institutional capital exposure ($M)', m4: 'Utilization %', bars: 'GPU Class Allocation', e: 'Enterprise tier', r: 'Reserve allocation' },
    why: { title: 'Why FOSSENTRA', c1: 'Institutional governance', c2: 'Transparent reporting', c3: 'Capacity contracts', c4: 'Energy discipline', c5: 'Risk bands', c6: 'Long-duration capital logic' },
    infra: { title: 'Compute Infrastructure Visual', p1: 'Compute is a physical asset class shaped by procurement constraints, lead times, and rack-level economics rather than narrative momentum.', p2: 'Our enterprise AI infrastructure model tracks capacity utilization, energy efficiency, and contract quality to maintain institutional-grade investment discipline.' },
    insights: { title: 'Investor Insights', c1: 'AI cost curve shift', c2: 'GPU shortage pricing power', c3: 'Infrastructure yield logic', c4: 'Energy efficiency advantage' },
    gov: { doTitle: 'What We Do', do1: 'Capacity underwriting with measurable compute signal monitoring.', do2: 'Risk-managed allocation framework with scenario controls.', do3: 'Institutional reporting and governance cadence.', avoidTitle: 'What We Avoid', av1: 'Unhedged speculative leverage tied to hype cycles.', av2: 'Opaque structures without asset-level transparency.', av3: 'Overconcentration in single counterparties.' },
    reviews: { title: 'Investor Reviews', badge: 'VERIFIED', r1: 'Institutional transparency and infrastructure discipline exceeded our due-diligence expectations.', r2: 'A serious framework for AI infrastructure investment with real asset-level logic.', r3: 'Reporting quality and GPU capacity analytics are exceptional for institutional committees.', r4: 'Risk governance is practical, clear, and aligned with long-duration capital mandates.' },
    faq: { title: 'FAQ' },
    cta: { title: 'Position your portfolio for AI infrastructure scale.', p: 'Request a private consultation to evaluate institutional capital exposure, governance scope, and risk-managed entry into enterprise AI infrastructure.', button: 'Request Private Consultation' },
    footer: { privacy: 'Privacy Policy', terms: 'Terms', contact: 'Contact', disclaimer: 'This communication is for professional and institutional audiences and is not investment advice.' },
    privacy: { title: 'Privacy Policy', close: 'Close' }
  },
  de: {
    nav: { market: 'Marktdynamik', thesis: 'Allokationsthese', metrics: 'Live-Metriken', faq: 'FAQ', contact: 'Kontakt', cta: 'Beratung anfragen' },
    hero: { title: 'Institutionelle Investition in KI-Infrastruktur und GPU-Kapazität', p1: 'Investitionen in KI-Infrastruktur treten in eine strukturelle Expansionsphase ein, da das Wachstum der Compute-Nachfrage in Unternehmen deutlich zunimmt.', p2: 'FOSSENTRA ermöglicht institutionelles Kapitalengagement in GPU-Kapazität als Infrastruktur-Asset mit diszipliniertem, risikogesteuertem Allokationsrahmen.', disclaimer: 'Institutionelle Beteiligungen beinhalten Markt-, Betriebs-, Liquiditäts- und Regulierungsrisiken.' },
    form: { title: 'Institutionelle Beratung anfragen', name: 'Vollständiger Name', email: 'Geschäftliche E-Mail', phone: 'Telefonnummer', emailShort: 'E-Mail', phoneShort: 'Telefon', submit: 'Anfrage senden', success: 'Vielen Dank. Ihre Anfrage wurde übermittelt.', invalid: 'Bitte füllen Sie alle Pflichtfelder mit gültiger E-Mail aus.' },
    metrics: { gpu: 'Erfasste GPU-Einheiten', dc: 'Rechenzentrums-Partnerschaften', mw: 'Compute-Kapazität (MW)', util: 'Auslastungsrate' },
    market: { title: 'Marktdynamik', c1t: 'Strukturelles GPU-Defizit', c1: 'Die Nachfrage übersteigt das Angebot leistungsstarker Chips und stützt die Preisstruktur.', c2t: 'Expansion von Enterprise-KI', c2: 'Unternehmen wechseln von Pilotprojekten zu produktionsreifen KI-Infrastrukturen mit mehrjährigen Verpflichtungen.', c3t: 'Logik des Infrastruktur-Eigentums', c3: 'Eigentumsnahe Kapazitäts-Exponierung verbessert die Ausrichtung auf langfristige Enterprise-Nachfrage.', c4t: 'Energie- & Kühlungsmoat', c4: 'Leistungsdichte, Kühlarchitektur und Netzverträge schaffen deutliche Eintrittsbarrieren.' },
    thesis: { title: 'Allokationsthese', t1: 'Strukturiertes Allokationsmodell', t2: 'Messbare Compute-Signale', t3: 'Risikoadjustierte Exponierung', t4: 'Infrastrukturgestützte Ökonomie' },
    dash: { title: 'Live-Metrik-Dashboard', m1: 'Eingesetzte GPU-Einheiten', m2: 'Compute-Kapazität (MW)', m3: 'Institutionelle Kapitalexponierung (Mio. $)', m4: 'Auslastung %', bars: 'GPU-Klassenallokation', e: 'Enterprise-Klasse', r: 'Reserve-Allokation' },
    why: { title: 'Warum FOSSENTRA', c1: 'Institutionelle Governance', c2: 'Transparente Berichterstattung', c3: 'Kapazitätsverträge', c4: 'Energiedisziplin', c5: 'Risikobänder', c6: 'Logik langfristigen Kapitals' },
    infra: { title: 'Compute-Infrastruktur', p1: 'Compute ist eine physische Asset-Klasse mit Beschaffungsengpässen, Vorlaufzeiten und Rack-Ökonomie.', p2: 'Unser Modell verfolgt Auslastung, Energieeffizienz und Vertragsqualität für institutionelle Disziplin.' },
    insights: { title: 'Investor Insights', c1: 'Verschiebung der KI-Kostenkurve', c2: 'Preismacht durch GPU-Knappheit', c3: 'Infrastruktur-Renditelogik', c4: 'Vorteil durch Energieeffizienz' },
    gov: { doTitle: 'Was wir tun', do1: 'Kapazitäts-Underwriting mit messbaren Compute-Signalen.', do2: 'Risikogesteuerter Allokationsrahmen mit Szenariokontrollen.', do3: 'Institutionelle Berichts- und Governance-Routine.', avoidTitle: 'Was wir vermeiden', av1: 'Ungesicherte Spekulationshebel aus Hype-Zyklen.', av2: 'Intransparente Strukturen ohne Asset-Ebene.', av3: 'Überkonzentration auf einzelne Gegenparteien.' },
    reviews: { title: 'Investorenbewertungen', badge: 'VERIFIZIERT', r1: 'Die institutionelle Transparenz und Infrastrukturdisziplin übertrafen unsere Due-Diligence-Erwartungen.', r2: 'Ein belastbares Framework für KI-Infrastruktur mit realer Asset-Logik.', r3: 'Berichtsqualität und GPU-Analytik sind hervorragend für Investmentkomitees.', r4: 'Risikogovernance ist klar, praktikabel und mandatskonform.' },
    faq: { title: 'FAQ' },
    cta: { title: 'Positionieren Sie Ihr Portfolio für KI-Infrastruktur-Skalierung.', p: 'Fordern Sie eine private Beratung an, um institutionelle Exponierung und Governance zu bewerten.', button: 'Private Beratung anfragen' },
    footer: { privacy: 'Datenschutz', terms: 'Bedingungen', contact: 'Kontakt', disclaimer: 'Diese Kommunikation richtet sich an professionelle und institutionelle Zielgruppen und ist keine Anlageberatung.' },
    privacy: { title: 'Datenschutzrichtlinie', close: 'Schließen' }
  },
  fr: {
    nav: { market: 'Dynamiques du marché', thesis: 'Thèse d’allocation', metrics: 'Métriques en direct', faq: 'FAQ', contact: 'Contact', cta: 'Demander une consultation' },
    hero: { title: 'Investissement institutionnel en infrastructure IA et capacité GPU', p1: 'L’investissement en infrastructure IA entre dans une phase d’expansion structurelle avec une forte croissance de la demande de calcul en entreprise.', p2: 'FOSSENTRA offre une exposition institutionnelle à la capacité GPU en tant qu’actif d’infrastructure via un cadre d’allocation maîtrisé.', disclaimer: 'La participation institutionnelle implique des risques de marché, opérationnels, de liquidité et réglementaires.' },
    form: { title: 'Demander une consultation institutionnelle', name: 'Nom complet', email: 'E-mail professionnel', phone: 'Numéro de téléphone', emailShort: 'E-mail', phoneShort: 'Téléphone', submit: 'Envoyer la demande', success: 'Merci. Votre demande a été reçue.', invalid: 'Veuillez remplir tous les champs obligatoires avec un e-mail valide.' },
    metrics: { gpu: 'Unités GPU suivies', dc: 'Partenariats data centers', mw: 'Capacité de calcul MW', util: 'Taux d’utilisation' },
    market: { title: 'Dynamiques du marché', c1t: 'Déficit structurel de GPU', c1: 'La demande dépasse l’offre de silicium haute performance et soutient les prix.', c2t: 'Expansion IA des entreprises', c2: 'Les entreprises passent des pilotes à des infrastructures IA en production avec des engagements pluriannuels.', c3t: 'Logique de propriété d’infrastructure', c3: 'L’exposition à la capacité renforce l’alignement avec la demande de long terme.', c4t: 'Avantage énergie & refroidissement', c4: 'La densité énergétique, le refroidissement et les contrats réseau créent des barrières réelles.' },
    thesis: { title: 'Thèse d’allocation', t1: 'Modèle d’allocation structuré', t2: 'Signaux de calcul mesurables', t3: 'Exposition ajustée du risque', t4: 'Économie adossée à l’infrastructure' },
    dash: { title: 'Tableau de bord', m1: 'Unités GPU déployées', m2: 'Capacité de calcul (MW)', m3: 'Exposition du capital institutionnel (M$)', m4: 'Utilisation %', bars: 'Allocation par classe GPU', e: 'Niveau entreprise', r: 'Allocation de réserve' },
    why: { title: 'Pourquoi FOSSENTRA', c1: 'Gouvernance institutionnelle', c2: 'Reporting transparent', c3: 'Contrats de capacité', c4: 'Discipline énergétique', c5: 'Bandes de risque', c6: 'Logique de capital long terme' },
    infra: { title: 'Infrastructure de calcul', p1: 'Le calcul est un actif physique régi par les contraintes d’approvisionnement, les délais et l’économie au niveau rack.', p2: 'Notre modèle suit l’utilisation, l’efficacité énergétique et la qualité contractuelle.' },
    insights: { title: 'Insights investisseurs', c1: 'Évolution de la courbe de coût IA', c2: 'Pouvoir de prix lié à la pénurie GPU', c3: 'Logique de rendement infrastructure', c4: 'Avantage d’efficacité énergétique' },
    gov: { doTitle: 'Ce que nous faisons', do1: 'Souscription de capacité avec suivi des signaux de calcul.', do2: 'Cadre d’allocation maîtrisé avec contrôles de scénarios.', do3: 'Cadence de reporting institutionnel.', avoidTitle: 'Ce que nous évitons', av1: 'Levier spéculatif non couvert lié au hype.', av2: 'Structures opaques sans transparence des actifs.', av3: 'Surconcentration sur une seule contrepartie.' },
    reviews: { title: 'Avis investisseurs', badge: 'VÉRIFIÉ', r1: 'La transparence institutionnelle et la discipline infrastructurelle ont dépassé nos attentes.', r2: 'Un cadre sérieux pour l’investissement en infrastructure IA.', r3: 'Qualité de reporting et analytique GPU remarquables.', r4: 'Gouvernance du risque claire et adaptée aux mandats long terme.' },
    faq: { title: 'FAQ' },
    cta: { title: 'Positionnez votre portefeuille pour l’échelle IA.', p: 'Demandez une consultation privée pour évaluer l’exposition institutionnelle et la gouvernance.', button: 'Demander une consultation privée' },
    footer: { privacy: 'Politique de confidentialité', terms: 'Conditions', contact: 'Contact', disclaimer: 'Cette communication s’adresse aux professionnels et institutionnels et ne constitue pas un conseil en investissement.' },
    privacy: { title: 'Politique de confidentialité', close: 'Fermer' }
  },
  es: {
    nav: { market: 'Dinámica de mercado', thesis: 'Tesis de asignación', metrics: 'Métricas en vivo', faq: 'FAQ', contact: 'Contacto', cta: 'Solicitar consulta' },
    hero: { title: 'Inversión institucional en infraestructura IA y capacidad GPU', p1: 'La inversión en infraestructura IA entra en una fase de expansión estructural impulsada por el crecimiento de la demanda de cómputo empresarial.', p2: 'FOSSENTRA ofrece exposición institucional a capacidad GPU como activo de infraestructura con un marco de asignación gestionado por riesgo.', disclaimer: 'La participación institucional implica riesgo de mercado, operativo, de liquidez y regulatorio.' },
    form: { title: 'Solicitar consulta institucional', name: 'Nombre completo', email: 'Correo profesional', phone: 'Número de teléfono', emailShort: 'Correo', phoneShort: 'Teléfono', submit: 'Enviar solicitud', success: 'Gracias. Su solicitud fue recibida.', invalid: 'Complete todos los campos requeridos con un correo válido.' },
    metrics: { gpu: 'Unidades GPU monitorizadas', dc: 'Alianzas de data center', mw: 'Capacidad de cómputo MW', util: 'Tasa de utilización' },
    market: { title: 'Dinámica de mercado', c1t: 'Déficit estructural de GPU', c1: 'La demanda supera la oferta de silicio de alto rendimiento y sostiene el poder de precios.', c2t: 'Expansión IA empresarial', c2: 'Las empresas migran de pilotos a infraestructura IA productiva con compromisos plurianuales.', c3t: 'Lógica de propiedad de infraestructura', c3: 'La exposición a capas de capacidad mejora la alineación con demanda de largo plazo.', c4t: 'Foso de energía y enfriamiento', c4: 'Densidad energética, diseño térmico y contratos de red crean barreras competitivas.' },
    thesis: { title: 'Tesis de asignación', t1: 'Modelo de asignación estructurado', t2: 'Señales de cómputo medibles', t3: 'Exposición ajustada por riesgo', t4: 'Economía respaldada por infraestructura' },
    dash: { title: 'Panel de métricas en vivo', m1: 'Unidades GPU desplegadas', m2: 'Capacidad de cómputo (MW)', m3: 'Exposición de capital institucional (M$)', m4: 'Utilización %', bars: 'Asignación por clase GPU', e: 'Nivel empresarial', r: 'Asignación de reserva' },
    why: { title: 'Por qué FOSSENTRA', c1: 'Gobernanza institucional', c2: 'Reportes transparentes', c3: 'Contratos de capacidad', c4: 'Disciplina energética', c5: 'Bandas de riesgo', c6: 'Lógica de capital de larga duración' },
    infra: { title: 'Infraestructura de cómputo', p1: 'El cómputo es un activo físico definido por restricciones de adquisición, plazos y economía a nivel rack.', p2: 'Nuestro modelo de infraestructura IA empresarial monitorea utilización, eficiencia energética y calidad contractual.' },
    insights: { title: 'Insights del inversor', c1: 'Cambio en la curva de costo IA', c2: 'Poder de precio por escasez GPU', c3: 'Lógica de rendimiento en infraestructura', c4: 'Ventaja por eficiencia energética' },
    gov: { doTitle: 'Qué hacemos', do1: 'Suscripción de capacidad con monitoreo de señales de cómputo.', do2: 'Marco de asignación con gestión de riesgo y control de escenarios.', do3: 'Cadencia de reportes institucionales.', avoidTitle: 'Qué evitamos', av1: 'Apalancamiento especulativo sin cobertura.', av2: 'Estructuras opacas sin transparencia de activos.', av3: 'Sobreconcentración en contrapartes individuales.' },
    reviews: { title: 'Reseñas de inversores', badge: 'VERIFICADO', r1: 'La transparencia institucional y disciplina de infraestructura superaron nuestras expectativas.', r2: 'Un marco serio para inversión en infraestructura IA.', r3: 'La calidad de reportes y analítica GPU es excelente para comités.', r4: 'La gobernanza de riesgo es clara y práctica.' },
    faq: { title: 'FAQ' },
    cta: { title: 'Posicione su cartera para escalar en infraestructura IA.', p: 'Solicite una consulta privada para evaluar exposición institucional y alcance de gobernanza.', button: 'Solicitar consulta privada' },
    footer: { privacy: 'Política de privacidad', terms: 'Términos', contact: 'Contacto', disclaimer: 'Esta comunicación es para audiencias profesionales e institucionales y no constituye asesoramiento de inversión.' },
    privacy: { title: 'Política de privacidad', close: 'Cerrar' }
  },
  it: {
    nav: { market: 'Dinamiche di mercato', thesis: 'Tesi di allocazione', metrics: 'Metriche live', faq: 'FAQ', contact: 'Contatto', cta: 'Richiedi consulenza' },
    hero: { title: 'Investimento istituzionale in infrastruttura AI e capacità GPU', p1: 'L’investimento in infrastruttura AI entra in una fase di espansione strutturale con forte crescita della domanda di calcolo enterprise.', p2: 'FOSSENTRA offre esposizione di capitale istituzionale alla capacità GPU come asset infrastrutturale con framework di allocazione risk-managed.', disclaimer: 'La partecipazione istituzionale comporta rischio di mercato, operativo, liquidità e regolamentare.' },
    form: { title: 'Richiedi consulenza istituzionale', name: 'Nome completo', email: 'Email professionale', phone: 'Numero di telefono', emailShort: 'Email', phoneShort: 'Telefono', submit: 'Invia richiesta', success: 'Grazie. La richiesta è stata ricevuta.', invalid: 'Compila tutti i campi richiesti con un’email valida.' },
    metrics: { gpu: 'Unità GPU monitorate', dc: 'Partnership data center', mw: 'Capacità di calcolo MW', util: 'Tasso di utilizzo' },
    market: { title: 'Dinamiche di mercato', c1t: 'Deficit strutturale GPU', c1: 'La domanda supera l’offerta di silicio ad alte prestazioni e sostiene il potere di prezzo.', c2t: 'Espansione AI enterprise', c2: 'Le imprese passano dai pilot a infrastrutture AI produttive con impegni pluriennali.', c3t: 'Logica di proprietà infrastrutturale', c3: 'L’esposizione alla capacità migliora l’allineamento con la domanda di lungo periodo.', c4t: 'Moat energia e raffreddamento', c4: 'Densità energetica, design termico e contratti di rete creano barriere concrete.' },
    thesis: { title: 'Tesi di allocazione', t1: 'Modello di allocazione strutturato', t2: 'Segnali di calcolo misurabili', t3: 'Esposizione risk-adjusted', t4: 'Economia supportata da infrastruttura' },
    dash: { title: 'Dashboard metriche live', m1: 'Unità GPU distribuite', m2: 'Capacità di calcolo (MW)', m3: 'Esposizione capitale istituzionale (M$)', m4: 'Utilizzo %', bars: 'Allocazione classe GPU', e: 'Tier enterprise', r: 'Allocazione di riserva' },
    why: { title: 'Perché FOSSENTRA', c1: 'Governance istituzionale', c2: 'Reportistica trasparente', c3: 'Contratti di capacità', c4: 'Disciplina energetica', c5: 'Bande di rischio', c6: 'Logica di capitale di lunga durata' },
    infra: { title: 'Visual infrastruttura di calcolo', p1: 'Il calcolo è un asset fisico definito da vincoli di procurement, lead time ed economia a livello rack.', p2: 'Il nostro modello monitora utilizzo, efficienza energetica e qualità contrattuale.' },
    insights: { title: 'Insight investitori', c1: 'Shift della curva costi AI', c2: 'Pricing power da scarsità GPU', c3: 'Logica di rendimento infrastrutturale', c4: 'Vantaggio da efficienza energetica' },
    gov: { doTitle: 'Cosa facciamo', do1: 'Underwriting della capacità con monitoraggio di segnali misurabili.', do2: 'Framework di allocazione risk-managed con controlli di scenario.', do3: 'Cadence di reporting istituzionale.', avoidTitle: 'Cosa evitiamo', av1: 'Leva speculativa non coperta legata all’hype.', av2: 'Strutture opache senza trasparenza a livello asset.', av3: 'Sovraconcentrazione su singole controparti.' },
    reviews: { title: 'Recensioni investitori', badge: 'VERIFICATO', r1: 'Trasparenza istituzionale e disciplina infrastrutturale oltre le aspettative.', r2: 'Framework solido per investimento in infrastruttura AI.', r3: 'Qualità della reportistica e analisi GPU eccellente.', r4: 'Governance del rischio chiara e coerente con mandati long-term.' },
    faq: { title: 'FAQ' },
    cta: { title: 'Posiziona il portafoglio per la scala dell’infrastruttura AI.', p: 'Richiedi una consulenza privata per valutare esposizione istituzionale e governance.', button: 'Richiedi consulenza privata' },
    footer: { privacy: 'Privacy Policy', terms: 'Termini', contact: 'Contatto', disclaimer: 'Questa comunicazione è destinata a pubblici professionali e istituzionali e non costituisce consulenza di investimento.' },
    privacy: { title: 'Privacy Policy', close: 'Chiudi' }
  }
};

const faqData = [
  { q: 'Risk management approach?', a: 'We use scenario-based stress assumptions, concentration limits, and capacity quality thresholds.' },
  { q: 'Liquidity profile?', a: 'Investment terms are aligned with infrastructure duration and contract maturity windows.' },
  { q: 'Revenue model?', a: 'Primary cash-flow drivers include contracted compute capacity and utilization-adjusted pricing.' },
  { q: 'Regulatory exposure?', a: 'Governance monitors relevant cross-border, data-center, and digital infrastructure regulation.' },
  { q: 'Minimum allocation?', a: 'Minimums are defined for professional and institutional investors after suitability assessment.' },
  { q: 'Reporting frequency?', a: 'Core reporting is provided monthly with quarterly governance updates.' },
  { q: 'GPU lifecycle risk?', a: 'Lifecycle management includes class rotation, depreciation policy, and refresh discipline.' },
  { q: 'Infrastructure moat?', a: 'Procurement channels, power access, and operational density protect competitive positioning.' },
  { q: 'Energy volatility impact?', a: 'Power-cost sensitivity is measured and mitigated through contract structure and efficiency metrics.' }
];

const privacySections = [
  'Data collection: contact details, institutional profile, consultation preferences, and technical interaction metadata.',
  'Legal basis: legitimate interest, pre-contractual measures, and consent where required.',
  'Cookies: we use essential and analytics cookies to improve investor experience.',
  'Sharing: information may be shared with infrastructure, compliance, and regulated service providers.',
  'Retention: data is retained for compliance, audit trails, and investor relation obligations.',
  'Security: encryption, role-based access controls, and monitoring safeguards are applied.',
  'International transfers: transfer mechanisms and contractual safeguards are applied where relevant.',
  'User rights: access, correction, objection, restriction, deletion, and portability rights may apply.',
  'AI infrastructure risk disclosure: GPU capacity and infrastructure assets are subject to market, operational, and policy uncertainty.'
];

let currentLang = 'en';

const q = (sel, scope = document) => scope.querySelector(sel);
const qa = (sel, scope = document) => [...scope.querySelectorAll(sel)];

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => (acc ? acc[part] : ''), obj);
}

function translate(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  q('#currentLanguage').textContent = languages[lang].name;
  qa('[data-i18n]').forEach((node) => {
    const value = getByPath(copy[lang], node.dataset.i18n);
    if (value) node.textContent = value;
  });
  qa('[data-i18n-placeholder]').forEach((node) => {
    const value = getByPath(copy[lang], node.dataset.i18nPlaceholder);
    if (value) node.placeholder = value;
  });
  renderFaq();
  renderPrivacy();
}

function renderFaq() {
  const wrap = q('#faqList');
  wrap.innerHTML = faqData.map((item) => `
    <article class="faq-item">
      <button class="faq-q">${item.q}</button>
      <div class="faq-a"><p>${item.a}</p></div>
    </article>`).join('');
  qa('.faq-q', wrap).forEach((btn) => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));
}

function renderPrivacy() {
  q('#privacyContent').innerHTML = privacySections.map((s) => `<p>${s}</p>`).join('');
}

function initLanguageDropdown() {
  const dropdown = q('#langDropdown');
  const button = q('#langButton');
  const menu = q('#langMenu');
  button.addEventListener('click', () => {
    dropdown.classList.toggle('open');
    button.setAttribute('aria-expanded', String(dropdown.classList.contains('open')));
  });
  qa('button[data-lang]', menu).forEach((btn) => btn.addEventListener('click', () => {
    translate(btn.dataset.lang);
    dropdown.classList.remove('open');
  }));
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
}

function initDrawer() {
  const burger = q('#burger');
  const drawer = q('#mobileDrawer');
  burger.addEventListener('click', () => drawer.classList.toggle('open'));
  qa('a', drawer).forEach((a) => a.addEventListener('click', () => drawer.classList.remove('open')));
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      const end = Number(target.dataset.counter);
      const startTime = performance.now();
      const dur = 1200;
      const isPct = end <= 100;
      const animate = (now) => {
        const progress = Math.min((now - startTime) / dur, 1);
        target.textContent = `${Math.floor(end * progress).toLocaleString()}${isPct ? '%' : ''}`;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.unobserve(target);
    });
  }, { threshold: .35 });
  qa('[data-counter]').forEach((el) => observer.observe(el));
}

function initBars() {
  const section = q('.bars-wrap');
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    qa('[data-fill]').forEach((bar) => { bar.style.width = `${bar.dataset.fill}%`; });
    observer.disconnect();
  }, { threshold: .4 });
  observer.observe(section);
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting));
  }, { threshold: .12 });
  qa('.reveal').forEach((el) => observer.observe(el));
}

function initModal() {
  const modal = q('#privacyModal');
  const open = q('#privacyOpen');
  const closeButtons = [q('#privacyClose'), q('#privacyDone')];
  const close = () => modal.classList.remove('open');
  open.addEventListener('click', () => modal.classList.add('open'));
  closeButtons.forEach((btn) => btn.addEventListener('click', close));
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

function initForms() {
  const forms = [q('#heroForm'), q('#ctaForm')];
  forms.forEach((form) => form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = String(data.get('email') || '');
    const valid = [...form.querySelectorAll('input')].every((i) => i.value.trim()) && email.includes('@');
    q('.status-msg', form).textContent = valid ? copy[currentLang].form.success : copy[currentLang].form.invalid;
    if (valid) form.reset();
  }));
}

function initParticles() {
  const wrap = q('#particles');
  for (let i = 0; i < 22; i += 1) {
    const p = document.createElement('span');
    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = `${Math.random() * 30}%`;
    p.style.animationDelay = `${Math.random() * 6}s`;
    p.style.animationDuration = `${6 + Math.random() * 8}s`;
    wrap.appendChild(p);
  }
}

function initParallax() {
  const nodes = qa('.parallax');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nodes.forEach((n) => {
      const speed = Number(n.dataset.parallax || 0.1);
      n.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

initLanguageDropdown();
initDrawer();
initCounters();
initBars();
initReveal();
initModal();
initForms();
initParticles();
initParallax();
translate('en');
