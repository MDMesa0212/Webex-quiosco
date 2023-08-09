
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber: 'dtobar@collabmcr.com',
    dialNumber2: '1003',
    dialNumber3: 'dtobar@cisco.com',
    services: [],
    prueba: [],
    services_2: [],

    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber, name: 'Soporte-Técnico' },
      ],
      this.prueba = [
        { url: this.dialNumber2, name: 'Soporte-Académico' },
      ],
      this.services_2 = [
        { url: this.dialNumber3, name: 'Soporte-Financiación' },
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

