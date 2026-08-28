;(function () {
  'use strict'

  var STORAGE_KEY = 'ev-track-lang'
  var DEFAULT_LANG = 'en'

  var translations = {
    en: {
      'meta.title': 'DimensionVision Track',
      'meta.description':
        'DimensionVision Track brings quotes, crews, materials, and job progress into one place built for electrical contractors.',

      'brand.aria': 'DimensionVision Track home',
      'nav.aria': 'Main navigation',
      'lang.aria': 'Language',
      'nav.features': 'Features',
      'nav.savings': 'Savings',
      'nav.pricing': 'Pricing',
      'nav.login': 'Log in',
      'nav.cta': 'Create account',

      'hero.eyebrow': 'Construction management platform',
      'hero.title1': 'Run every job',
      'hero.title2': 'with clarity.',
      'hero.lede':
        'DimensionVision Track brings quotes, crews, materials, and job progress into one place built for electrical contractors.',
      'hero.primary': 'Get started ',
      'hero.secondary': 'Explore the platform ',
      'hero.lights': 'Animated installation of architectural lights',
      'hero.caption': 'LIGHTING THE WORK AHEAD',

      'trust.title': 'BUILT FOR THE WORK THAT KEEPS CONSTRUCTION MOVING',
      'trust.item1': 'QUOTES',
      'trust.item2': 'CREWS',
      'trust.item3': 'INVENTORY',
      'trust.item4': 'SITES',
      'trust.item5': 'CONTRACTS',

      'features.eyebrow': 'One connected workspace',
      'features.title1': 'Everything you need',
      'features.title2': 'to run the business.',
      'features.learn': 'Learn more ',
      'features.f1.title': 'Quotes & Invoicing',
      'features.f1.body':
        'Create professional quotes with dynamic line items and turn approved work into contracts in one click.',
      'features.f1.aria': 'Learn more about Quotes & Invoicing',
      'features.f2.title': 'Workforce Management',
      'features.f2.body':
        'Track timesheets, overtime, teams, site assignments, and labor costs as work happens.',
      'features.f2.aria': 'Learn more about Workforce Management',
      'features.f3.title': 'Inventory & Procurement',
      'features.f3.body':
        'Keep warehouse stock visible, compare supplier bids, and manage equipment in one operational view.',
      'features.f3.aria': 'Learn more about Inventory & Procurement',
      'features.f4.title': 'Task Scheduling',
      'features.f4.body':
        'Plan with Kanban boards and calendars, then assign work without losing the bigger picture.',
      'features.f4.aria': 'Learn more about Task Scheduling',
      'features.f5.title': 'Digital Contracts',
      'features.f5.body':
        'Generate contracts from quotes, collect signatures, and follow payment milestones with confidence.',
      'features.f5.aria': 'Learn more about Digital Contracts',
      'features.f6.title': 'Documents & Files',
      'features.f6.body':
        'Keep blueprints, permits, certificates, and progress photos organized by site.',
      'features.f6.aria': 'Learn more about Documents & Files',

      'savings.eyebrow': 'See the difference',
      'savings.title1': 'Less friction.',
      'savings.title2': 'More margin.',
      'savings.lede':
        'Estimate the time and money your team could reclaim with a single operational system.',

      'calc.title': 'Your company',
      'calc.workers': 'Number of workers',
      'calc.rate': 'Average hourly rate ',
      'calc.hours': 'Monthly hours per worker',
      'calc.currency': 'RON',
      'calc.savingsLabel': 'Estimated annual savings',
      'calc.hoursSaved': 'Hours saved each year',
      'calc.hoursUnit': 'hrs',
      'calc.losses': 'Potential annual losses without DV Track',
      'calc.cta': 'Build your workflow ',
      'calc.breakdown': 'Where operational costs add up',
      'calc.line1': 'Admin & overhead costs',
      'calc.line2': 'Material waste & over-ordering',
      'calc.line3': 'Scheduling & downtime losses',
      'calc.line4': 'Invoice & payment delays',
      'calc.line5': 'Compliance & documentation fines',

      'pricing.eyebrow': 'Simple, transparent pricing',
      'pricing.title': 'Scale on your terms.',
      'pricing.lede': 'Every plan includes every feature. Pay only for the people who use it.',
      'pricing.from': 'From 2',
      'pricing.per': 'RON / user / month',
      'pricing.popular': 'Most popular',
      'pricing.get': 'Get started ',
      'pricing.contact': 'Contact sales ',
      'pricing.roleOwner': 'Owner ',
      'pricing.roleManager': 'Manager ',
      'pricing.roleSupervisor': 'Site supervisor ',
      'pricing.roleWorker': 'Worker ',
      'pricing.priceOwner': '25 RON',
      'pricing.priceManager': '15 RON',
      'pricing.priceSupervisor': '5 RON',
      'pricing.priceWorker': '2 RON',
      'pricing.p1.name': 'Small',
      'pricing.p1.users': '1 - 10 users',
      'pricing.p1.note': 'Perfect for small crews and solo contractors',
      'pricing.p2.name': 'Medium',
      'pricing.p2.users': '11 - 50 users',
      'pricing.p2.note': 'Ideal for growing companies with multiple sites',
      'pricing.p3.name': 'Large',
      'pricing.p3.users': '50 - 500 users',
      'pricing.p3.note': 'For established firms managing complex projects',
      'pricing.p4.name': 'Enterprise',
      'pricing.p4.users': '500+ users',
      'pricing.p4.note': 'Custom solutions for large-scale operations',

      'final.eyebrow': 'Ready when you are',
      'final.title1': 'Put the whole job',
      'final.title2': 'in one clear view.',
      'final.cta': 'Start with DimensionVision ',

      'footer.rights': '© 2026 DimensionVision Track. All rights reserved.',
      'footer.privacy': 'Privacy policy',
      'footer.terms': 'Terms of service',
      'footer.contact': 'Contact',

      'login.meta.title': 'Log in · DimensionVision Track',
      'login.meta.description':
        'Log in to DimensionVision Track to manage quotes, crews, materials, and job progress.',
      'login.eyebrow': 'Welcome back',
      'login.visualTitle1': 'Every job,',
      'login.visualTitle2': 'still in clear view.',
      'login.visualBody':
        "Pick up where your crews left off: live job progress, approved quotes, and today's assignments.",
      'login.formEyebrow': 'Account access',
      'login.title': 'Log in.',
      'login.lede': 'Use the email address your company account is registered with.',
      'login.email': 'Work email',
      'login.emailPlaceholder': 'name@company.com',
      'login.password': 'Password',
      'login.remember': 'Keep me signed in',
      'login.forgot': 'Forgot password?',
      'login.submit': 'Log in ',
      'back.label': 'Back',
      'back.aria': 'Back to home',
      'login.noAccount': 'No account yet?',
      'login.note': 'SECURE ACCESS FOR ELECTRICAL CONTRACTORS',

      'register.meta.title': 'Create account · DimensionVision Track',
      'register.meta.description':
        'Create your DimensionVision Track account and bring quotes, crews, materials, and job progress into one place.',
      'register.eyebrow': 'Start in minutes',
      'register.visualTitle1': 'Put your first job',
      'register.visualTitle2': 'in one clear view.',
      'register.visualBody':
        'Every plan includes every feature. Add your crew, import your price list, and send a quote today.',
      'register.point1': 'Unlimited jobs and quotes',
      'register.point2': 'Mobile app for field crews',
      'register.point3': 'No setup fee, cancel anytime',
      'register.formEyebrow': 'New account',
      'register.title': 'Create account.',
      'register.lede':
        'Set up your company workspace. You can invite the rest of the team afterwards.',
      'register.company': 'Company name',
      'register.companyPlaceholder': 'DimensionVision SRL',
      'register.name': 'Full name',
      'register.namePlaceholder': 'Alex Popescu',
      'register.password': 'Password',
      'register.passwordHint': 'At least 8 characters',
      'register.terms': 'I agree to the terms of service',
      'register.submit': 'Create account ',
      'register.haveAccount': 'Already have an account?',
      'register.note': '14 DAYS OF FULL ACCESS, NO CARD REQUIRED',
    },

    ro: {
      'meta.title': 'DimensionVision Track',
      'meta.description':
        'DimensionVision Track aduce ofertele, echipele, materialele și progresul lucrărilor într-un singur loc, construit pentru antreprenorii electricieni.',

      'brand.aria': 'Pagina principală DimensionVision Track',
      'nav.aria': 'Navigație principală',
      'lang.aria': 'Limbă',
      'nav.features': 'Funcționalități',
      'nav.savings': 'Economii',
      'nav.pricing': 'Prețuri',
      'nav.login': 'Autentificare',
      'nav.cta': 'Creează cont',

      'hero.eyebrow': 'Platformă de management în construcții',
      'hero.title1': 'Fiecare lucrare,',
      'hero.title2': 'cu claritate.',
      'hero.lede':
        'DimensionVision Track aduce ofertele, echipele, materialele și progresul lucrărilor într-un singur loc, construit pentru antreprenorii electricieni.',
      'hero.primary': 'Începe acum ',
      'hero.secondary': 'Explorează platforma ',
      'hero.lights': 'Instalație animată de corpuri de iluminat arhitecturale',
      'hero.caption': 'LUMINĂM MUNCA CE URMEAZĂ',

      'trust.title': 'CONSTRUIT PENTRU MUNCA CARE ȚINE CONSTRUCȚIILE ÎN MIȘCARE',
      'trust.item1': 'OFERTE',
      'trust.item2': 'ECHIPE',
      'trust.item3': 'STOCURI',
      'trust.item4': 'ȘANTIERE',
      'trust.item5': 'CONTRACTE',

      'features.eyebrow': 'Un singur spațiu de lucru conectat',
      'features.title1': 'Tot ce ai nevoie',
      'features.title2': 'ca să conduci afacerea.',
      'features.learn': 'Află mai mult ',
      'features.f1.title': 'Oferte și facturare',
      'features.f1.body':
        'Creează oferte profesionale cu linii dinamice și transformă lucrările aprobate în contracte cu un singur clic.',
      'features.f1.aria': 'Află mai mult despre Oferte și facturare',
      'features.f2.title': 'Managementul forței de muncă',
      'features.f2.body':
        'Urmărește pontajele, orele suplimentare, echipele, repartizarea pe șantiere și costurile cu munca, în timp real.',
      'features.f2.aria': 'Află mai mult despre Managementul forței de muncă',
      'features.f3.title': 'Stocuri și achiziții',
      'features.f3.body':
        'Ține stocul din depozit la vedere, compară ofertele furnizorilor și gestionează echipamentele într-o singură vedere operațională.',
      'features.f3.aria': 'Află mai mult despre Stocuri și achiziții',
      'features.f4.title': 'Planificarea sarcinilor',
      'features.f4.body':
        'Planifică cu panouri Kanban și calendare, apoi repartizează munca fără să pierzi imaginea de ansamblu.',
      'features.f4.aria': 'Află mai mult despre Planificarea sarcinilor',
      'features.f5.title': 'Contracte digitale',
      'features.f5.body':
        'Generează contracte din oferte, colectează semnături și urmărește etapele de plată cu încredere.',
      'features.f5.aria': 'Află mai mult despre Contracte digitale',
      'features.f6.title': 'Documente și fișiere',
      'features.f6.body':
        'Păstrează planurile, autorizațiile, certificatele și fotografiile de progres organizate pe șantier.',
      'features.f6.aria': 'Află mai mult despre Documente și fișiere',

      'savings.eyebrow': 'Vezi diferența',
      'savings.title1': 'Mai puțină fricțiune.',
      'savings.title2': 'Marjă mai mare.',
      'savings.lede':
        'Estimează timpul și banii pe care echipa ta i-ar putea recupera cu un singur sistem operațional.',

      'calc.title': 'Compania ta',
      'calc.workers': 'Număr de angajați',
      'calc.rate': 'Tarif orar mediu ',
      'calc.hours': 'Ore lunare per angajat',
      'calc.currency': 'RON',
      'calc.savingsLabel': 'Economii anuale estimate',
      'calc.hoursSaved': 'Ore economisite în fiecare an',
      'calc.hoursUnit': 'ore',
      'calc.losses': 'Pierderi anuale posibile fără DV Track',
      'calc.cta': 'Construiește fluxul tău ',
      'calc.breakdown': 'Unde se adună costurile operaționale',
      'calc.line1': 'Costuri administrative și indirecte',
      'calc.line2': 'Risipă de materiale și comenzi în exces',
      'calc.line3': 'Pierderi din planificare și timp mort',
      'calc.line4': 'Întârzieri la facturare și plată',
      'calc.line5': 'Amenzi de conformitate și documentație',

      'pricing.eyebrow': 'Prețuri simple și transparente',
      'pricing.title': 'Crește în ritmul tău.',
      'pricing.lede':
        'Fiecare plan include toate funcționalitățile. Plătești doar pentru oamenii care le folosesc.',
      'pricing.from': 'De la 2',
      'pricing.per': 'RON / utilizator / lună',
      'pricing.popular': 'Cel mai popular',
      'pricing.get': 'Începe acum ',
      'pricing.contact': 'Contactează vânzările ',
      'pricing.roleOwner': 'Proprietar ',
      'pricing.roleManager': 'Manager ',
      'pricing.roleSupervisor': 'Șef de șantier ',
      'pricing.roleWorker': 'Angajat ',
      'pricing.priceOwner': '25 RON',
      'pricing.priceManager': '15 RON',
      'pricing.priceSupervisor': '5 RON',
      'pricing.priceWorker': '2 RON',
      'pricing.p1.name': 'Mic',
      'pricing.p1.users': '1 - 10 utilizatori',
      'pricing.p1.note': 'Perfect pentru echipe mici și contractori independenți',
      'pricing.p2.name': 'Mediu',
      'pricing.p2.users': '11 - 50 utilizatori',
      'pricing.p2.note': 'Ideal pentru companii în creștere, cu mai multe șantiere',
      'pricing.p3.name': 'Mare',
      'pricing.p3.users': '50 - 500 utilizatori',
      'pricing.p3.note': 'Pentru firme consacrate care gestionează proiecte complexe',
      'pricing.p4.name': 'Enterprise',
      'pricing.p4.users': 'Peste 500 utilizatori',
      'pricing.p4.note': 'Soluții personalizate pentru operațiuni de mare anvergură',

      'final.eyebrow': 'Gata când ești tu',
      'final.title1': 'Pune toată lucrarea',
      'final.title2': 'într-o singură vedere clară.',
      'final.cta': 'Începe cu DimensionVision ',

      'footer.rights': '© 2026 DimensionVision Track. Toate drepturile rezervate.',
      'footer.privacy': 'Politica de confidențialitate',
      'footer.terms': 'Termeni și condiții',
      'footer.contact': 'Contact',

      'login.meta.title': 'Autentificare · DimensionVision Track',
      'login.meta.description':
        'Autentifică-te în DimensionVision Track pentru a gestiona ofertele, echipele, materialele și progresul lucrărilor.',
      'login.eyebrow': 'Bine ai revenit',
      'login.visualTitle1': 'Fiecare lucrare,',
      'login.visualTitle2': 'tot la vedere.',
      'login.visualBody':
        'Continuă de unde au rămas echipele tale: progresul lucrărilor în timp real, ofertele aprobate și sarcinile de azi.',
      'login.formEyebrow': 'Acces în cont',
      'login.title': 'Autentificare.',
      'login.lede': 'Folosește adresa de e-mail cu care este înregistrat contul companiei.',
      'login.email': 'E-mail de serviciu',
      'login.emailPlaceholder': 'nume@companie.ro',
      'login.password': 'Parolă',
      'login.remember': 'Ține-mă autentificat',
      'login.forgot': 'Ai uitat parola?',
      'login.submit': 'Intră în cont ',
      'back.label': 'Înapoi',
      'back.aria': 'Înapoi la pagina principală',
      'login.noAccount': 'Nu ai încă un cont?',
      'login.note': 'ACCES SECURIZAT PENTRU ANTREPRENORII ELECTRICIENI',

      'register.meta.title': 'Creează cont · DimensionVision Track',
      'register.meta.description':
        'Creează-ți contul DimensionVision Track și adu ofertele, echipele, materialele și progresul lucrărilor într-un singur loc.',
      'register.eyebrow': 'Începe în câteva minute',
      'register.visualTitle1': 'Pune prima lucrare',
      'register.visualTitle2': 'într-o vedere clară.',
      'register.visualBody':
        'Fiecare plan include toate funcționalitățile. Adaugă echipa, importă lista de prețuri și trimite o ofertă azi.',
      'register.point1': 'Lucrări și oferte nelimitate',
      'register.point2': 'Aplicație mobilă pentru echipele din teren',
      'register.point3': 'Fără taxă de configurare, anulezi oricând',
      'register.formEyebrow': 'Cont nou',
      'register.title': 'Creează cont.',
      'register.lede':
        'Configurează spațiul de lucru al companiei. Poți invita restul echipei ulterior.',
      'register.company': 'Numele companiei',
      'register.companyPlaceholder': 'DimensionVision SRL',
      'register.name': 'Nume complet',
      'register.namePlaceholder': 'Alex Popescu',
      'register.password': 'Parolă',
      'register.passwordHint': 'Minimum 8 caractere',
      'register.terms': 'Accept termenii și condițiile',
      'register.submit': 'Creează cont ',
      'register.haveAccount': 'Ai deja un cont?',
      'register.note': '14 ZILE DE ACCES COMPLET, FĂRĂ CARD',
    },
  }

  var currentLang = DEFAULT_LANG

  function dict() {
    return translations[currentLang] || translations[DEFAULT_LANG]
  }

  function readStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY)
    } catch (error) {
      return null
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch (error) {
      /* storage unavailable: the choice still applies to this page view */
    }
  }

  function resolveInitialLang() {
    var stored = readStoredLang()
    if (stored && translations[stored]) {
      return stored
    }

    var browserLang = (navigator.language || '').slice(0, 2).toLowerCase()
    return translations[browserLang] ? browserLang : DEFAULT_LANG
  }

  /* Replaces an element's own text while leaving child elements (arrows, prices) untouched. */
  function setOwnText(node, value) {
    var textNodes = Array.prototype.filter.call(node.childNodes, function (child) {
      return child.nodeType === 3
    })

    if (!textNodes.length) {
      node.insertBefore(document.createTextNode(value), node.firstChild)
      return
    }

    textNodes[0].nodeValue = value
    for (var i = 1; i < textNodes.length; i++) {
      textNodes[i].nodeValue = ''
    }
  }

  function formatNumber(value) {
    return new Intl.NumberFormat(currentLang === 'ro' ? 'ro-RO' : 'en-US').format(Math.round(value))
  }

  function updateCalculator() {
    var workersInput = document.getElementById('ev-workers')
    var rateInput = document.getElementById('ev-rate')
    var hoursInput = document.getElementById('ev-hours')

    if (!workersInput || !rateInput || !hoursInput) {
      return
    }

    var workers = Math.max(1, Number(workersInput.value) || 0)
    var rate = Math.max(1, Number(rateInput.value) || 0)
    var hours = Math.max(1, Number(hoursInput.value) || 0)

    var annualPayroll = workers * rate * hours * 12
    var currency = dict()['calc.currency']

    setOwnText(document.getElementById('ev-savings'), formatNumber(annualPayroll * 0.2) + ' ')
    document.getElementById('ev-hours-saved').textContent =
      formatNumber(workers * 4.5 * 12) + ' ' + dict()['calc.hoursUnit']
    document.getElementById('ev-losses').textContent =
      formatNumber(annualPayroll * 0.31) + ' ' + currency

    Array.prototype.forEach.call(document.querySelectorAll('[data-loss]'), function (node) {
      node.textContent =
        formatNumber(annualPayroll * Number(node.getAttribute('data-loss'))) + ' ' + currency
    })
  }

  function applyLang(lang) {
    currentLang = translations[lang] ? lang : DEFAULT_LANG
    var dictionary = dict()

    document.documentElement.setAttribute('lang', currentLang)

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (node) {
      var value = dictionary[node.getAttribute('data-i18n')]
      if (typeof value !== 'string') {
        return
      }

      if (node.tagName === 'TITLE') {
        document.title = value
      } else if (node.tagName === 'META') {
        node.setAttribute('content', value)
      } else {
        setOwnText(node, value)
      }
    })

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-aria]'), function (node) {
      var value = dictionary[node.getAttribute('data-i18n-aria')]
      if (typeof value === 'string') {
        node.setAttribute('aria-label', value)
      }
    })

    Array.prototype.forEach.call(
      document.querySelectorAll('[data-i18n-placeholder]'),
      function (node) {
        var value = dictionary[node.getAttribute('data-i18n-placeholder')]
        if (typeof value === 'string') {
          node.setAttribute('placeholder', value)
        }
      }
    )

    Array.prototype.forEach.call(document.querySelectorAll('.ev-lang button'), function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === currentLang))
    })

    updateCalculator()
  }

  Array.prototype.forEach.call(document.querySelectorAll('.ev-lang button'), function (button) {
    button.addEventListener('click', function () {
      var lang = button.getAttribute('data-lang')
      if (!translations[lang]) {
        return
      }

      storeLang(lang)
      applyLang(lang)
    })
  })

  Array.prototype.forEach.call(
    document.querySelectorAll('#ev-workers, #ev-rate, #ev-hours'),
    function (input) {
      input.addEventListener('input', updateCalculator)
    }
  )

  applyLang(resolveInitialLang())
})()
