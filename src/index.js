import content from './data';
import './styles.scss';

/* -------------------- new JS template below -------------------- */
let moonshine = {
  version: '2.0.0',
  author: 'Al Agustin',
  project: '',
  Date: '2023',

  // -------------------- INITIALIZATION --------------------
  init: function () {
    let context = this;

    // GLOBAL VARIABLES --------------------
    context.config = {
      contentData: content,
      estYear: 2001,
      currentYear: new Date().getFullYear()
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    moonshine.onDomReady();
    moonshine.eventHandlers();
  },

  onDomReady: () => {
    const siteConfig = moonshine.config;
    console.log(siteConfig);

    moonshine.header();
    moonshine.main();
    moonshine.footer();
  },

  header: () => {
    console.log('this is the header');
  },

  main: () => {
    const siteConfig = moonshine.config;
    const yearsOfService = siteConfig.currentYear - siteConfig.estYear;
    const yearsOfServiceHolder = document.getElementById('yearsOfService');
    const servicesHolder = document.getElementById('specilties');

    let moonshineServices = siteConfig.contentData.main.services;

    if (yearsOfService > 20) {
      yearsOfServiceHolder.innerText = `the past ${yearsOfService}`;
    }

    // REFACTOR BELOW
    const timeID = setInterval(timeAndDate, 7500);
    function timeAndDate() {

      let randomNum = Math.floor(Math.random() * moonshineServices.length);
      servicesHolder.innerText = moonshineServices[randomNum];
    }
  },

  footer: () => {
    const siteConfig = moonshine.config;
    const footerYearHolder = document.getElementById('footerYear');
    footerYearHolder.innerText = `- ${siteConfig.currentYear}`;
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    const siteConfig = moonshine.config;
    console.log(siteConfig);
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  moonshine.init();
});
