import content from './data';

const { hour, minute, day, year, sunday, otherDay } = content.contact.hours;
const { siteName } = content;

/* -------------------- new JS template below -------------------- */
let moonshine = {
  version: '2.0.0',
  author: 'Al Augustin',
  project: '',
  projectDate: '2023',

  // -------------------- INITIALIZATION --------------------
  init: function () {
    let context = this;

    // GLOBAL VARIABLES --------------------
    context.config = {
      siteName: siteName,
      estYear: 2001,
      currentHour: hour,
      currentMinute: minute,
      currentDay: day,
      currentYear: year,
      sundayHours: sunday,
      otherHours: otherDay,
      bodyTag: document.querySelector('body'),
      bttDestinationElement: document.querySelector('#allHolder'),
      mainNavLinks: document.querySelectorAll('#navHolder a'),
      footerYearHolder: document.getElementById('footerYear'),
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    moonshine.onDomReady();
    moonshine.eventHandlers();
  },

  onDomReady: () => {
    moonshine.main();
    moonshine.footer();
  },

  showOnLoad: () => {
    const siteConfig = moonshine.config;
    siteConfig.bodyTag.classList.remove('hidden');
  },

  setYearsOfService: () => {
    const siteConfig = moonshine.config;
    const { currentYear, estYear } = siteConfig;
    const yearsOfService = currentYear - estYear;
    const yearsOfServiceHolder = document.getElementById('yearsOfService');

    if (yearsOfService > 20) {
      yearsOfServiceHolder.textContent = `the past ${yearsOfService}`;
    }
  },

  specialtiesRandomizer: () => {
    const servicesHolder = document.getElementById('specialties');
    const wordDisplayInterval = 3000;

    let moonshineServices = content.main.services;

    const getRandomWord = () => {
      return moonshineServices[Math.floor(Math.random() * moonshineServices.length)];
    };

    const fadeOutWord = () => {
      servicesHolder.classList.add('fade-out-animation');
    };

    const fadeInWord = () => {
      servicesHolder.textContent = getRandomWord();
      servicesHolder.classList.remove('fade-out-animation');
    };

    const displayRandomWord = () => {
      fadeOutWord();
      setTimeout(fadeInWord, 1000);
    };

    // Display random word initially
    servicesHolder.textContent = 'Creative unisex hairstyes';
    setInterval(displayRandomWord, wordDisplayInterval);
  },

  hoursTableStriping: () => {
    const siteConfig = moonshine.config;
    const { currentDay, currentHour, currentMinute } = siteConfig;
    const sundayHours = sunday;
    const otherHours = otherDay;
    const tableRow = document.querySelectorAll('#hoursTable tr');
    const storeHours = (currentDay === 0) ? sundayHours : otherHours;
    const { open, closed } = storeHours;

    const setDayColourStriping = (dayIndex, openHour, closedHour) => {
      const timeCell = tableRow[dayIndex].querySelector('td');
      const timeOpened = Number(openHour);
      const timeClosed = Number(closedHour);
      const currentTimeString = `${String(currentHour).padStart(2, '0')}${String(currentMinute).padStart(2, '0')}`;
      const timeNow = Number(currentTimeString);
      const tableRowClasses = tableRow[dayIndex].classList;

      tableRow[dayIndex].classList.add('font-bold');
      tableRow[dayIndex].classList.add('drop-shadow');

      const addTimeColon = () => {
        const str = timeOpened.toString();
        const formattedTime = `${str.slice(0, -2)}:${str.slice(-2)}`;

        return `Opens at ${formattedTime}`;
      };

      const closedTreatment = (tcTextContent) => {
        tableRowClasses.add('bg-lightGrayBlue');
        timeCell.textContent = tcTextContent;
      };

      const openClosedSwitcher = (storeOpenOrClosed) => {

        switch (storeOpenOrClosed) {
          case 'closed':
            closedTreatment('CLOSED');
            break;

          case 'closedAm':
            closedTreatment(addTimeColon());
            break;

          default:
            tableRowClasses.add('text-white');
            tableRowClasses.add('bg-strongBlue');
            tableRowClasses.add('drop-shadow');
            break;
        }
      };

      (timeNow >= timeClosed) ?
        openClosedSwitcher('closed') :
        (timeNow >= timeOpened) ?
          openClosedSwitcher('open') :
          openClosedSwitcher('closedAm');
    };

    switch (currentDay) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        setDayColourStriping(currentDay, open, closed);
        break;

      default:
        console.log('do date data');
        break;
    }
  },

  main: () => {
    moonshine.setYearsOfService();
    moonshine.specialtiesRandomizer();
    moonshine.hoursTableStriping();
  },

  footer: () => {
    const siteConfig = moonshine.config;
    const { footerYearHolder, currentYear } = siteConfig;

    footerYearHolder.textContent = `- ${currentYear}`;
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    const siteConfig = moonshine.config;
    const { mainNavLinks, bttDestinationElement, siteName } = siteConfig;
    const bttLinks = document.querySelectorAll('.backToTop');

    bttLinks.forEach((bttLink) => {
      bttLink.addEventListener('click', handleBackToTopClick);
    });

    mainNavLinks.forEach((navLink) => {
      navLink.addEventListener('click', handleNavLinkClick);
    });

    function handleBackToTopClick(e) {
      e.preventDefault();
      bttDestinationElement.scrollIntoView();
      window.location.hash = 'home';
      document.title = `${siteName} | Home`;
    }

    function handleNavLinkClick(e) {
      const targetInnerText = e.target.innerText;
      document.title = `${siteName} | ${targetInnerText}`;
    }
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  moonshine.init();
  moonshine.showOnLoad();
});
