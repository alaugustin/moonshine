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
      headerHolder: document.getElementById('siteName'),
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    moonshine.onDomReady();
    moonshine.eventHandlers();
  },

  onDomReady: () => {
    const siteConfig = moonshine.config;

    moonshine.header();
    moonshine.main();
    moonshine.footer();
  },

  header: () => {
    const siteConfig = moonshine.config;

    siteConfig.headerHolder.innerText = siteConfig.contentData.siteName;
  },
  main: () => {
    console.log('this is the main');
  },
  footer: () => {
    console.log('this is the footer');
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
