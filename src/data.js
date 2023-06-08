const content = {
  siteName: 'Moonshine Unisex Hair Salon',
  contact: {
    social: {
      faceBook: {
        icon: 'https://moonshinehairsalon.com/img/facebook.png',
      },
      twitter: {
        icon: 'https://moonshinehairsalon.com/img/twitter.png',
      },
      instagram: {
        icon: 'https://moonshinehairsalon.com/img/twitter.png',
      }
    },
    hours: {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      day: new Date().getDay(),
      year: new Date().getFullYear(),
      sunday: {
        open: '900',
        closed: '1700'
      },
      otherDay: {
        open: '815',
        closed: '2100'
      }
    }
  },
  main: {
    services: ['Curls', 'Texturizing', 'Braids', 'Twists', 'Weave', 'Relaxer', 'Soft (Jheri) Curls', 'Colouring', 'Perm', 'Hot Press', 'Highlights', 'Creative Men\'s Cut', 'Boy\'s Cut', 'Kid\'s Hairdo', 'Ladies hairstyes'],
  },
};

export default content;
