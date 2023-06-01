import content from './data';
import './styles.scss';

/* -------------------- new JS template below -------------------- */
let moonshine = {
  version: '2.0.0',
  author: 'Al Augustin',
  project: '',
  Date: '2023',

  // -------------------- INITIALIZATION --------------------
  init: function () {
    let context = this;

    // GLOBAL VARIABLES --------------------
    context.config = {
      contentData: content,
      estYear: 2001,
      currentDay: new Date().getDay(),
      currentYear: new Date().getFullYear(),
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    moonshine.onDomReady();
    moonshine.eventHandlers();
  },

  onDomReady: () => {
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

    const servicesArrayRandomizer = () => {
      let randomNum = Math.floor(Math.random() * moonshineServices.length);
      servicesHolder.innerText = moonshineServices[randomNum];
    };
    setInterval(servicesArrayRandomizer, 7500);

    const hoursTableStriping = () => {
      const tableRow = document.querySelectorAll('#hoursTable tr');

      const setDayColurStriping = (dayIndex) => {
        tableRow[dayIndex].classList.add('font-bold');
        tableRow[dayIndex].classList.add('text-white');
        tableRow[dayIndex].style.backgroundColor = '#0670cc'; //TO-DO | add to tailwind config and add class
      };

      switch (siteConfig.currentDay) {
        case 0:
          setDayColurStriping(0);
          break;
        case 1:
          setDayColurStriping(1);
          break;
        case 2:
          setDayColurStriping(2);
          break;
        case 3:
          setDayColurStriping(3);
          break;
        case 4:
          setDayColurStriping(4);
          break;
        case 5:
          setDayColurStriping(5);
          break;
        case 6:
          setDayColurStriping(6);
          break;

        default:
          console.log('do date data');
          break;
      }

    };
    hoursTableStriping();
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
