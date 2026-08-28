;(function () {
  'use strict'

  var STORAGE_KEY = 'ev-track-lang'
  var DEFAULT_LANG = 'en'

  var translations = {
    en: {
      'meta.title': 'ElectricVision Track — Run every job with clarity',
      'meta.description':
        'ElectricVision Track brings quotes, crews, materials, and job progress into one place built for electrical contractors.',

      'lang.label': 'Language',
      'nav.features': 'Features',
      'nav.savings': 'Savings',
      'nav.pricing': 'Pricing',
      'nav.login': 'Log in',
      'nav.cta': 'Create account',

      'hero.eyebrow': 'Construction management platform',
      'hero.titleLine1': 'Run every job',
      'hero.titleLine2': 'with clarity.',
      'hero.lede':
        'ElectricVision Track brings quotes, crews, materials, and job progress into one place built for electrical contractors.',
      'hero.primary': 'Get started',
      'hero.secondary': 'Explore the platform',
      'hero.tagline': 'Lighting the work ahead',

      'features.eyebrow': 'Features',
      'features.title': 'Everything a job needs, in one system.',
      'features.lede':
        'From the first estimate to the final invoice, your team works from the same live picture of the job.',
      'features.item1.title': 'Quotes that win work',
      'features.item1.body':
        'Build accurate estimates from your own price lists and send them the same day.',
      'features.item2.title': 'Crew scheduling',
      'features.item2.body':
        'See who is on site, who is available, and what happens next across every job.',
      'features.item3.title': 'Materials tracking',
      'features.item3.body':
        'Follow cable, conduit, and fittings from purchase order through to installation.',
      'features.item4.title': 'Job progress',
      'features.item4.body':
        'Live progress by phase, so nothing is invoiced before it is actually finished.',

      'savings.eyebrow': 'Savings',
      'savings.title': 'Less admin, fewer overruns, faster cash.',
      'savings.lede':
        'Averages reported by electrical contractors after their first six months on ElectricVision Track.',
      'savings.stat1.label': 'Hours saved per week, per project manager',
      'savings.stat1.unit': 'h',
      'savings.stat2.label': 'Reduction in material overruns',
      'savings.stat3.label': 'Faster invoicing after job completion',
      'savings.stat3.unit': 'days',
      'savings.stat4.label': 'Quote accuracy against final cost',

      'pricing.eyebrow': 'Pricing',
      'pricing.title': 'Priced per user, billed monthly.',
      'pricing.lede':
        'Every plan includes unlimited jobs, unlimited quotes, and the mobile app for field crews.',
      'pricing.perUser': '/user / month',
      'pricing.popular': 'Most popular',
      'pricing.custom': 'Custom',
      'pricing.contact': 'Talk to sales',
      'pricing.plan1.name': 'Crew',
      'pricing.plan1.note': 'For small teams running a handful of jobs at a time.',
      'pricing.plan1.f1': 'Quotes and estimates',
      'pricing.plan1.f2': 'Crew scheduling',
      'pricing.plan1.f3': 'Mobile job updates',
      'pricing.plan2.name': 'Contractor',
      'pricing.plan2.note': 'For contractors managing multiple sites and subcontractors.',
      'pricing.plan2.f1': 'Everything in Crew',
      'pricing.plan2.f2': 'Materials and purchase orders',
      'pricing.plan2.f3': 'Progress billing',
      'pricing.plan2.f4': 'Cost reporting per job',
      'pricing.plan3.name': 'Enterprise',
      'pricing.plan3.note': 'For regional and national electrical operations.',
      'pricing.plan3.f1': 'Everything in Contractor',
      'pricing.plan3.f2': 'Single sign-on',
      'pricing.plan3.f3': 'Dedicated onboarding',

      'cta.title': 'Ready to run every job with clarity?',
      'cta.body': 'Start with your next job. No setup fee, no long contract.',

      'footer.rights': '© 2026 ElectricVision. All rights reserved.',
    },

    ro: {
      'meta.title': 'ElectricVision Track — Fiecare lucrare, cu claritate',
      'meta.description':
        'ElectricVision Track aduce ofertele, echipele, materialele și progresul lucrărilor într-un singur loc, construit pentru antreprenorii electricieni.',

      'lang.label': 'Limbă',
      'nav.features': 'Funcționalități',
      'nav.savings': 'Economii',
      'nav.pricing': 'Prețuri',
      'nav.login': 'Autentificare',
      'nav.cta': 'Creează cont',

      'hero.eyebrow': 'Platformă de management în construcții',
      'hero.titleLine1': 'Fiecare lucrare,',
      'hero.titleLine2': 'cu claritate.',
      'hero.lede':
        'ElectricVision Track aduce ofertele, echipele, materialele și progresul lucrărilor într-un singur loc, construit pentru antreprenorii electricieni.',
      'hero.primary': 'Începe acum',
      'hero.secondary': 'Explorează platforma',
      'hero.tagline': 'Luminăm munca ce urmează',

      'features.eyebrow': 'Funcționalități',
      'features.title': 'Tot ce cere o lucrare, într-un singur sistem.',
      'features.lede':
        'De la prima estimare până la factura finală, echipa ta lucrează cu aceeași imagine în timp real.',
      'features.item1.title': 'Oferte care aduc contracte',
      'features.item1.body':
        'Construiește estimări precise din propriile liste de prețuri și trimite-le în aceeași zi.',
      'features.item2.title': 'Planificarea echipelor',
      'features.item2.body':
        'Vezi cine este pe șantier, cine este disponibil și ce urmează pe fiecare lucrare.',
      'features.item3.title': 'Urmărirea materialelor',
      'features.item3.body':
        'Urmărește cablurile, tuburile și accesoriile de la comandă până la montaj.',
      'features.item4.title': 'Progresul lucrării',
      'features.item4.body':
        'Progres în timp real pe fiecare etapă, ca nimic să nu fie facturat înainte de finalizare.',

      'savings.eyebrow': 'Economii',
      'savings.title': 'Mai puțină birocrație, mai puține depășiri, încasări mai rapide.',
      'savings.lede':
        'Medii raportate de antreprenorii electricieni după primele șase luni cu ElectricVision Track.',
      'savings.stat1.label': 'Ore economisite pe săptămână, pe manager de proiect',
      'savings.stat1.unit': 'h',
      'savings.stat2.label': 'Reducere a depășirilor de materiale',
      'savings.stat3.label': 'Facturare mai rapidă după finalizarea lucrării',
      'savings.stat3.unit': 'zile',
      'savings.stat4.label': 'Acuratețea ofertei față de costul final',

      'pricing.eyebrow': 'Prețuri',
      'pricing.title': 'Preț pe utilizator, facturat lunar.',
      'pricing.lede':
        'Fiecare plan include lucrări nelimitate, oferte nelimitate și aplicația mobilă pentru echipele din teren.',
      'pricing.perUser': '/utilizator / lună',
      'pricing.popular': 'Cel mai popular',
      'pricing.custom': 'Personalizat',
      'pricing.contact': 'Contactează vânzările',
      'pricing.plan1.name': 'Echipă',
      'pricing.plan1.note': 'Pentru echipe mici, cu câteva lucrări în paralel.',
      'pricing.plan1.f1': 'Oferte și estimări',
      'pricing.plan1.f2': 'Planificarea echipelor',
      'pricing.plan1.f3': 'Actualizări mobile din teren',
      'pricing.plan2.name': 'Antreprenor',
      'pricing.plan2.note': 'Pentru antreprenori cu mai multe șantiere și subcontractanți.',
      'pricing.plan2.f1': 'Tot ce include Echipă',
      'pricing.plan2.f2': 'Materiale și comenzi de achiziție',
      'pricing.plan2.f3': 'Facturare pe stadii',
      'pricing.plan2.f4': 'Raportare de costuri pe lucrare',
      'pricing.plan3.name': 'Enterprise',
      'pricing.plan3.note': 'Pentru operațiuni electrice regionale și naționale.',
      'pricing.plan3.f1': 'Tot ce include Antreprenor',
      'pricing.plan3.f2': 'Autentificare unică (SSO)',
      'pricing.plan3.f3': 'Implementare dedicată',

      'cta.title': 'Ești pregătit să conduci fiecare lucrare cu claritate?',
      'cta.body': 'Începe cu următoarea lucrare. Fără taxă de configurare, fără contract lung.',

      'footer.rights': '© 2026 ElectricVision. Toate drepturile rezervate.',
    },
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
      /* storage unavailable: language still applies for this page view */
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

  function applyLang(lang) {
    var dictionary = translations[lang] || translations[DEFAULT_LANG]

    document.documentElement.setAttribute('lang', lang)

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
        node.textContent = value
      }
    })

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-label]'), function (node) {
      var value = dictionary[node.getAttribute('data-i18n-label')]
      if (typeof value === 'string') {
        node.setAttribute('aria-label', value)
      }
    })

    Array.prototype.forEach.call(document.querySelectorAll('.lang-option'), function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === lang))
    })
  }

  Array.prototype.forEach.call(document.querySelectorAll('.lang-option'), function (button) {
    button.addEventListener('click', function () {
      var lang = button.getAttribute('data-lang')
      if (!translations[lang]) {
        return
      }

      storeLang(lang)
      applyLang(lang)
    })
  })

  applyLang(resolveInitialLang())
})()
