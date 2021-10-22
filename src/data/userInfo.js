const userInfo = [
  {
    id: 0,
    name: 'Palomannah Rincattersón',
    nickName: 'Palomannah',
    about: 'I´m a visual artist working across different disciplines with a strong focus in concept development and art direction. I shoot photographic stills and direct moving image projects in a quirky style marked by bold colors and graphic compositions. I create visual games using a playful language where the meaning of objects is redefined by unexpected juxtapositions. In my work I explore perception through physical works that seem to be digitally created toying with the real and the unreal.',
    accountType: 'Creator, Connoisseur, & CEO',
    photoUrl: 'https://code4good.io/wp-content/uploads/2020/03/AnnahPatterson.jpg',
    followers: '4m',
    following: '253',
    socialMedia: {
      Facebook: 'https://www.facebook.com/Paloma-Rincón-174901122523064/',
      Instagram: 'https://www.instagram.com/paloma_Rincón_/',
      Twitter: 'https://twitter.com/paloma_Rincón_',
    },
    upcomingEvents: [
      {
        id: 0,
        title: 'Auction 1 - Paloma Rincón',
        start: new Date(2021, 9, 6),
        end: new Date(2021, 9, 7),
      },
      {
        id: 1,
        title: 'Auction 2 - Ekaitza',
        start: new Date(2021, 9, 8, 0, 0, 0),
        end: new Date(2021, 9, 9, 0, 0, 0),
      },
      {
        id: 2,
        title: 'Auction 3 - CalvynJustus',
        start: new Date(2021, 9, 12, 0, 0, 0),
        end: new Date(2021, 9, 14, 0, 0, 0),
      },
      {
        id: 3,
        title: 'Product Drop 1 - Flamingo Dreaming',
        start: new Date(2021, 9, 17, 5, 30, 0),
        end: new Date(2021, 9, 18, 6, 30, 0),
      },
      {
        id: 4,
        title: 'Product Drop 2 - HODL. Freshly baked',
        date: '10/21/2021',
        start: new Date(2021, 9, 21),
        end: new Date(2021, 9, 22),
      },
      {
        id: 5,
        title: 'Product Drop 3 - Vida',
        date: '10/25/2021',
        start: new Date(2021, 9, 25),
        end: new Date(2021, 9, 27),
      },
      {
        id: 6,
        date: '10/31/2021',
        title: 'Exclusive VIP Shindig',
      },
      {
        id: 7,
        date: '11/1/2021',
        title: 'CulturePunk Live Launch',
      },
      {
        id: 8,
        date: '11/19/2021',
        title: 'Rin-Con: Fans of Paloma Event',
      },
    ],
    Gallery: [
      {
        title: 'Heatwave Pine Saver',
        actualArtist: 'Paloma Rincón',
        subtitle: 'Paloma Rincón',
        description: 'Bye bye Heat Wave, welcome holiday.',
        artistId: 0,
        image:
          'https://i1.wp.com/www.kronkeling.com/wp-content/uploads/2016/12/paloma_rincon_heatwave-1.jpg?resize=883%2C883&ssl=1',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Life & Death',
        subtitle: 'Paloma Rincón',
        description: 'a very special artwork created for the Time to Rise drop',
        artistId: 0,
        image: 'https://palomarincon.com/wp-content/uploads/2021/09/Life-Dead-low.gif',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Mexican Feast',
        subtitle: 'Paloma Rincón',
        description: 'A celebration of colour, traditional mexican handcrafts and gastronomy.',
        artistId: 0,
        image: 'https://palomarincon.com/wp-content/uploads/2020/10/mexican-feast-pink-meal_01-1024x768.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'OFFF Synesthesia Touch',
        subtitle: 'Paloma Rincón',
        description: 'My campaign for @offfbogota',
        artistId: 0,
        image: 'https://palomarincon.com/wp-content/uploads/2020/03/touch_3000px-1-scaled.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'OFFF Synesthesia Smell',
        subtitle: 'Paloma Rincón',
        description: 'an exploration on the 5 senses through textures, colours and materials',
        artistId: 0,
        image: 'https://palomarincon.com/wp-content/uploads/2020/03/smell_3000px-1024x1024.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Mental Health Banana',
        description: 'Have you ever felt this way?',
        subtitle: 'Paloma Rincón',
        artistId: 0,
        image: 'https://palomarincon.com/wp-content/uploads/2020/10/mental-health-banana_3000px-1024x1024.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Discomelon',
        subtitle: 'Paloma Rincón',
        description: 'Oh yes! It is again this time of the year.',
        artistId: 0,
        image: 'https://palomarincon.com/wp-content/uploads/2020/04/Dicscomelon-3000px-scaled.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
    ],
    Collection: [
      {
        title: 'Three Best Friends',
        actualArtist: 'TJ Fuller',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'The real OGs',
        image:
          'https://media0.giphy.com/media/l3vRmK9WSNEnHDg2I/giphy.gif?cid=ecf05e47qycyokzqljw59gcpwp42v6pmz2oqttqg5aee2wtm&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Pokeball',
        actualArtist: 'Biteable',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'a simple dancing pokeball',
        image:
          'https://media0.giphy.com/media/xQMYEokueU2Ww16p8I/giphy.gif?cid=ecf05e47p0ea7a1s5vn5ia1ci90m11nshu2f6gx1ompwo9mk&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Party Glow',
        actualArtist: 'xponentialdesign',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'disco lasers',
        image:
          'https://media3.giphy.com/media/jtd6dzbJuEGYnP9QWv/giphy.gif?cid=790b7611a163abd166f12b4e22d2183d8e015bf62bea6617&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Poke-love',
        actualArtist: 'Blake Kathryn',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'The only way to catch your true love',
        image:
          'https://media1.giphy.com/media/l46Ckl0fn7yCg3kze/giphy.gif?cid=ecf05e47hwx2ouc4j16b1hhjz1f2j93m9l4igrncrvfm3qq8&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Mew(TWO) in Space',
        actualArtist: 'Tmblr',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Travelling through the heavens',
        image:
          'https://media0.giphy.com/media/10NJgJnayk9Db2/giphy.gif?cid=ecf05e47ghlwy3snl7uw6uznxzw1mz94j296pdwh5zpnsp43&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Drake Catchem',
        actualArtist: 'Sunny Peabody',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'A piece of heaven',
        image:
          'https://media1.giphy.com/media/vsyKKf1t22nmw/giphy.gif?cid=ecf05e47qycyokzqljw59gcpwp42v6pmz2oqttqg5aee2wtm&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
    ],
  },
  {
    id: 1,
    name: 'Oliver Squirtle Nomes',
    nickName: 'Oliver',
    about: 'I help wealthy entrepeneurs and celebrities find the best up and coming art to decorate their homes and places of businesses with that elusive sense of grandeur while maintaining a human touch.',
    accountType: 'Connoisseur',
    photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    followers: '386',
    following: '1.5k',
    socialMedia: {
      Facebook: 'https://www.facebook.com/oliver-squirtle-nomes',
      Instagram: 'https://www.instagram.com/oliver-squirtle-nomes',
    },
    upcomingEvents: [
      {
        id: 0,
        title: 'Auction 1 - Paloma Rincón',
        start: new Date(2021, 9, 6),
        end: new Date(2021, 9, 7),
      },
      {
        id: 1,
        title: 'Auction 2 - Ekaitza',
        start: new Date(2021, 9, 8, 0, 0, 0),
        end: new Date(2021, 9, 9, 0, 0, 0),
      },
      {
        id: 2,
        title: 'Auction 3 - CalvynJustus',
        start: new Date(2021, 9, 12, 0, 0, 0),
        end: new Date(2021, 9, 14, 0, 0, 0),
      },
      {
        id: 3,
        title: 'Product Drop 1 - Flamingo Dreaming',
        start: new Date(2021, 9, 17, 5, 30, 0),
        end: new Date(2021, 9, 18, 6, 30, 0),
      },
      {
        id: 4,
        title: 'Product Drop 2 - HODL. Freshly baked',
        date: '10/21/2021',
        start: new Date(2021, 9, 21),
        end: new Date(2021, 9, 22),
      },
      {
        id: 5,
        title: 'Product Drop 3 - Vida',
        date: '10/25/2021',
        start: new Date(2021, 9, 25),
        end: new Date(2021, 9, 27),
      },
      {
        id: 6,
        date: '10/31/2021',
        title: 'Exclusive VIP Shindig',
      },
      {
        id: 7,
        date: '11/1/2021',
        title: 'CulturePunk Live Launch',
      },
      {
        id: 8,
        date: '11/19/2021',
        title: 'Rin-Con: Fans of Paloma Event',
      },
    ],
    Gallery: [],
    Collection: [
      {
        title: 'Bull Run',
        actualArtist: 'unknown',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Riding the Bull Market',
        image:
          'https://i.redd.it/qwi6pw711f061.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Saturn Rising',
        actualArtist: 'FuturePunk',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'Just like all of us.',
        image:
          'https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F31c42cf0-d2d6-49f0-aa4e-181a613bde5c_1018x1018.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Warmer Than Gold',
        actualArtist: 'FuturePunk',
        subtitle: 'Mara Sukhrab-Ali',
        description: 'Just like all of us.',
        artistId: 2,
        image:
          'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5c349750-2862-4cf3-bd7c-66dc91b7dbb4_1170x900.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Heatwave Pine Saver',
        actualArtist: 'Paloma Rincón',
        subtitle: 'Paloma Rincón',
        description: 'Bye bye Heat Wave, welcome holiday.',
        artistId: 0,
        image:
          'https://i1.wp.com/www.kronkeling.com/wp-content/uploads/2016/12/paloma_rincon_heatwave-1.jpg?resize=883%2C883&ssl=1',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Intoxicated Strokes',
        actualArtist: 'Asleep Hernandez',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: '(Toad)',
        image:
          'https://images.squarespace-cdn.com/content/v1/600b910d70305b6eb07d9c39/1611508868436-UXT6O7G9S3K2QUGAXZRT/tumblr_inline_numqrlszSM1tas015_500.jpg?format=750w',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
    ],
  },
  {
    id: 2,
    name: 'Mara Sukhrab-Ali',
    nickName: 'Mara',
    about: 'I\'m a lover of all things beatiful. Truth is beauty, and that is the truth, and it is beautiful, so I love it. You are beautiful, but that is not true, so I love you, but I also hate that I love you.',
    accountType: 'Creator & Connoisseur',
    photoUrl: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    followers: '14',
    following: '157',
    socialMedia: {
      Facebook: 'https://www.facebook.com/mara-sukhrab',
      Instagram: 'https://www.instagram.com/msa-alltheway',
    },
    upcomingEvents: [
      {
        id: 0,
        title: 'Auction 1 - Paloma Rincón',
        start: new Date(2021, 9, 6),
        end: new Date(2021, 9, 7),
      },
      {
        id: 1,
        title: 'Auction 2 - Ekaitza',
        start: new Date(2021, 9, 8, 0, 0, 0),
        end: new Date(2021, 9, 9, 0, 0, 0),
      },
      {
        id: 2,
        title: 'Auction 3 - CalvynJustus',
        start: new Date(2021, 9, 12, 0, 0, 0),
        end: new Date(2021, 9, 14, 0, 0, 0),
      },
      {
        id: 3,
        title: 'Product Drop 1 - Flamingo Dreaming',
        start: new Date(2021, 9, 17, 5, 30, 0),
        end: new Date(2021, 9, 18, 6, 30, 0),
      },
      {
        id: 7,
        date: '10/31/2021',
        // start: new Date(2021, 10, 31, 7, 30, 0),
        title: 'Exclusive VIP Shindig',
      },
      {
        id: 8,
        date: '11/19/2021',
        title: 'Rin-Con: Fans of Paloma Event',
      },
      {
        id: 9,
        date: '12/17/2021',
        title: 'CulturePunk Christmas Party',
      },
      {
        id: 10,
        date: '12/21/2021',
        title: 'CulturePunk Winter Solstice Party',
      },
      {
        id: 11,
        date: '11/28/2021',
        title: 'CulturePunk Hannukah Party',
      },
      {
        id: 12,
        date: '12/26/2021',
        title: 'CulturePunk Kwanzaa Party',
      },

    ],
    Gallery: [
      {
        title: 'Warmer Than Gold',
        actualArtist: 'FuturePunk',
        subtitle: 'Mara Sukhrab-Ali',
        description: 'Just like all of us.',
        artistId: 2,
        image:
          'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5c349750-2862-4cf3-bd7c-66dc91b7dbb4_1170x900.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Bull Run',
        actualArtist: 'unknown',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Riding the Bull Market',
        image:
          'https://i.redd.it/qwi6pw711f061.jpg',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Tears of a Porcelain Doll',
        actualArtist: 'FuturePunk',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Strong enough to be fragile.',
        image:
          'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0d6e10fb-80fe-449f-84a6-d972fa9797ba_1358x1284.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Swamp Version',
        actualArtist: 'Asleep Hernandez',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Strong enough to be fragile.',
        image:
          'https://images.squarespace-cdn.com/content/v1/600b910d70305b6eb07d9c39/1611508871233-37B9AFIBEI43YAZ0OI8N/tumblr_inline_q0if9078ah1tas015_500.jpg?format=750w',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
    ],
    Collection: [
      {
        title: 'Tears of a Porcelain Doll',
        actualArtist: 'FuturePunk',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Strong enough to be fragile.',
        image:
          'https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0d6e10fb-80fe-449f-84a6-d972fa9797ba_1358x1284.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'BLUE',
        actualArtist: 'Lasergun Factory',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'laser head vision',
        image:
          'https://491569-1551798-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/BLUE_can.gif',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'OTHER',
        actualArtist: 'Lasergun Factory',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'laser vision head',
        image:
          'https://491569-1551798-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/OTHER_can-1.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Heatwave Pine Saver',
        actualArtist: 'Paloma Rincón',
        subtitle: 'Paloma Rincón',
        description: 'Bye bye Heat Wave, welcome holiday.',
        artistId: 0,
        image:
          'https://i1.wp.com/www.kronkeling.com/wp-content/uploads/2016/12/paloma_rincon_heatwave-1.jpg?resize=883%2C883&ssl=1',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Swamp Version',
        actualArtist: 'Asleep Hernandez',
        subtitle: 'Mara Sukhrab-Ali',
        artistId: 2,
        description: 'Strong enough to be fragile.',
        image:
          'https://images.squarespace-cdn.com/content/v1/600b910d70305b6eb07d9c39/1611508871233-37B9AFIBEI43YAZ0OI8N/tumblr_inline_q0if9078ah1tas015_500.jpg?format=750w',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
    ],
  },
  {
    id: 3,
    name: 'Millette Renoux',
    nickName: 'Milly',
    about: 'My goal is to shine a light (literally and literarily) on things unseen. Where some see taboos, I see uncharted territory. Where some see controversy, I see conversation. Where some see a void, I see an empty canvas waiting for my brush. See my Saved-by-the-Bell inspired mixed-media tribute to Italian Gothic Architecture for the most recent and buzzworthy examples',
    accountType: 'Creator',
    photoUrl: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    followers: '256k',
    following: '0',
    socialMedia: {
      Facebook: 'https://www.facebook.com/millette-renoux',
      Instagram: 'https://www.instagram.com/milly-ngabout',
      Pinterest: 'https://www.pinterest.com/milly',
      YouTube: 'https://www.youtube.com/milly',
    },
    upcomingEvents: [
      {
        id: 0,
        title: 'Auction 1 - Paloma Rincón',
        start: new Date(2021, 9, 6),
        end: new Date(2021, 9, 7),
      },
      {
        id: 3,
        title: 'Product Drop 1 - Flamingo Dreaming',
        start: new Date(2021, 9, 17, 5, 30, 0),
        end: new Date(2021, 9, 18, 6, 30, 0),
      },
      {
        id: 7,
        date: '10/31/2021',
        title: 'Exclusive VIP Shindig',
      },
      {
        id: 8,
        date: '11/19/2021',
        title: 'Rin-Con: Fans of Paloma Event',
      },
      {
        id: 1000000,
        date: '12/31/2070',
        title: 'Lunar Colony Gala',
      },
    ],
    Gallery: [
      {
        title: 'BLUE',
        actualArtist: 'Lasergun Factory',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'laser head vision',
        image:
          'https://491569-1551798-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/BLUE_can.gif',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'OTHER',
        actualArtist: 'Lasergun Factory',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'laser vision head',
        image:
          'https://491569-1551798-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/OTHER_can-1.png',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Intoxicated Strokes',
        actualArtist: 'Asleep Hernandez',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: '(Toad)',
        image:
          'https://images.squarespace-cdn.com/content/v1/600b910d70305b6eb07d9c39/1611508868436-UXT6O7G9S3K2QUGAXZRT/tumblr_inline_numqrlszSM1tas015_500.jpg?format=750w',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Pokeball',
        actualArtist: 'Biteable',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'a simple dancing pokeball',
        image:
          'https://media0.giphy.com/media/xQMYEokueU2Ww16p8I/giphy.gif?cid=ecf05e47p0ea7a1s5vn5ia1ci90m11nshu2f6gx1ompwo9mk&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
      {
        title: 'Poke-love',
        actualArtist: 'Blake Kathryn',
        subtitle: 'Millette Renoux',
        artistId: 3,
        description: 'The only way to catch your true love',
        image:
          'https://media1.giphy.com/media/l46Ckl0fn7yCg3kze/giphy.gif?cid=ecf05e47hwx2ouc4j16b1hhjz1f2j93m9l4igrncrvfm3qq8&rid=giphy.gif&ct=g',
        bkg: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4=',
      },
    ],
    Collection: [],
  },
];

export default userInfo;
