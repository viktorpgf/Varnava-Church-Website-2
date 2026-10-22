import type {
  SiteSettings,
  HomePageData,
  AboutPageData,
  Leader,
  GalleryPhoto,
} from '../types/sanity';

export const CHURCH_ASSETS = {
  emblem: '/src/assets/images/byzantine_mosaic_cross_emblem_1792663601443.jpg',
  sanctuaryArch: '/src/assets/images/byzantine_church_arch_sanctuary_1792663602688.jpg',
  pastorRuslan: '/src/assets/images/pastor_ruslan_portrait_1792663603021.jpg',
  fellowship: '/src/assets/images/church_community_fellowship_1792660951020.jpg',
  worship: '/src/assets/images/church_worship_music_1792660953023.jpg',
};

export const DEMO_SITE_SETTINGS: SiteSettings = {
  _type: 'siteSettings',
  churchName: 'Церква Святого апостола Варнави',
  tagline: 'Християнська громада повного Євангелія у місті Києві',
  shortDescription:
    'Християнська громада, яка збирається, щоб разом поклонятися Богові, вивчати Його Слово, підтримувати одне одного та ділитися любов’ю Христа з людьми.',
  localLogoPath: CHURCH_ASSETS.emblem,
  officialInfo: {
    legalName:
      'Релігійна організація «Релігійна громада християнської церкви повного Євангелія Святого апостола Варнави в Оболонському районі м. Києва»',
    foundationDate: '15 серпня 1995 року',
    pastorFullName: 'Марченко Руслан Володимирович',
    city: 'Київ, Україна',
  },
  address: {
    street: 'вул. Вадима Гетьмана, 1А',
    city: 'м. Київ',
    postalCode: '03057',
    directionsNote: 'Зручний доїзд від станції метро «Шулявська»',
  },
  contacts: {
    phone: '+380 (44) 223-14-15',
    secondaryPhone: '+380 (50) 412-34-56',
    email: 'contact@barnabas-church.kiev.ua',
  },
  scheduleSummary: {
    day: 'Щосуботи',
    time: '14:00 – 17:00',
    duration: '3 години',
  },
  socialMedia: {
    youtubeNotice: 'YouTube — проповіді, записи зібрань та відео з життя церкви.',
    instagramNotice: 'Instagram — фотографії, новини та моменти церковного життя.',
    facebookNotice: 'Facebook — оголошення, оновлення та інформація про діяльність громади.',
    youtube: '',
    instagram: '',
    facebook: '',
  },
  bankDetails: {
    recipientName:
      'Релігійна організація «Релігійна громада християнської церкви повного Євангелія Святого апостола Варнави в Оболонському районі м. Києва»',
    paymentPurpose: 'Добровільна пожертва на статутну діяльність релігійної громади',
    qrCodeAvailable: false,
    qrNotice:
      'Ми готуємо зручний спосіб підтримати служіння церкви онлайн. Інформація про доступні способи переказу коштів та QR-код для швидкої оплати будуть опубліковані найближчим часом.',
  },
  googleMaps: {
    directLink: 'https://maps.google.com/?q=Київ,вул.+Вадима+Гетьмана,1А',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.895311218526!2d30.4435!3d50.4528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce799f9c065f%3A0x1d7c34b6e5e8e8!2z0LLRg9C7LiDQktCw0LTQuNC80LAg0JPQtdGC0YzQvNCw0L3QsCwgMUEsINCa0LjRl9Cy!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua',
  },
};

export const DEMO_HOME_PAGE: HomePageData = {
  _type: 'homePage',
  heroTitle: 'Церква Святого апостола Варнави',
  heroGreeting: 'Раді вітати вас на сайті церкви Святого апостола Варнави!',
  heroDescription:
    'Ми — християнська громада, яка збирається, щоб разом поклонятися Богові, вивчати Його Слово, підтримувати одне одного та ділитися любов’ю Христа з людьми.',
  heroInvitation:
    'Запрошуємо вас познайомитися з нашою церквою, долучитися до спільної молитви та стати частиною нашої громади.',
  meetingTimeBadge: 'Щосуботи з 14:00 до 17:00',
  addressBadge: 'м. Київ, вул. Вадима Гетьмана, 1А',
  heroCtaText: 'Як нас знайти',
  heroSecondaryCtaText: 'Про нашу церкву',
  localHeroImagePath: CHURCH_ASSETS.sanctuaryArch,
  welcomeSnippet: {
    title: 'Будемо раді бачити вас!',
    body: 'Не потрібно спеціально готуватися чи мати попередній досвід відвідування церкви. Просто приходьте — наші двері відчинені для кожного серця.',
  },
};

export const DEMO_ABOUT_PAGE: AboutPageData = {
  _type: 'aboutPage',
  title: 'Про церкву',
  mainDescription:
    'Релігійна громада християнської церкви повного Євангелія Святого апостола Варнави — це християнська громада в місті Києві, яка прагне жити відповідно до Божого Слова, зростати у вірі, підтримувати одне одного та служити людям.',
  christCenteredStatement:
    'У центрі нашого життя — Ісус Христос, Його вчення та Євангеліє. Ми віримо, що церква — це не лише місце зібрання, а й спільнота людей, які разом шукають Бога, моляться, навчаються та допомагають одне одному проходити життєвий шлях.',
  communityInvitation:
    'Ми запрошуємо кожного долучитися до наших зібрань, познайомитися з громадою та стати частиною церковного життя.',
  history: {
    title: 'Історія церкви',
    foundedDate: '15 серпня 1995 року',
    description:
      'Наша громада була заснована 15 серпня 1995 року. Відтоді церква продовжує своє служіння, збираючи людей для поклоніння Богові, вивчення Святого Письма та християнського спілкування.',
  },
  pastor: {
    title: 'Пастор церкви',
    name: 'Марченко Руслан Володимирович',
    description:
      'Марченко Руслан Володимирович — пастор церкви Святого апостола Варнави. Пасторське служіння передбачає духовну опіку громади, навчання Божого Слова, молитву та підтримку людей у їхньому християнському житті.',
    localPhotoPath: CHURCH_ASSETS.pastorRuslan,
  },
  official: {
    legalName:
      'Релігійна організація «Релігійна громада християнської церкви повного Євангелія Святого апостола Варнави в Оболонському районі м. Києва»',
    foundationDate: '15 серпня 1995 року',
    pastorFullName: 'Марченко Руслан Володимирович',
    city: 'Київ, Україна',
  },
};

export const DEMO_LEADERS: Leader[] = [
  {
    _id: 'leader-1',
    _type: 'teamMember',
    name: 'Марченко Руслан Володимирович',
    role: 'Пастор церкви Святого апостола Варнави',
    description:
      'Пасторське служіння охоплює духовне наставництво, проповідування Божого Слова, молитву та турботу про громаду.',
    localPhotoPath: CHURCH_ASSETS.pastorRuslan,
    isSeniorPastor: true,
  },
];

export const DEMO_GALLERY: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Богослужіння та спільна молитва',
    category: 'Зібрання',
    localPath: CHURCH_ASSETS.sanctuaryArch,
    description: 'Моменти благоговійного поклоніння та слухання Божого Слова.',
  },
  {
    id: 'gal-2',
    title: 'Братерське спілкування громади',
    category: 'Спільнота',
    localPath: CHURCH_ASSETS.fellowship,
    description: 'Теплі розмови, підтримка та радість спільності після зібрання.',
  },
  {
    id: 'gal-3',
    title: 'Музичне прославлення',
    category: 'Прославлення',
    localPath: CHURCH_ASSETS.worship,
    description: 'Спільні християнські пісні та поклоніння Господу всім серцем.',
  },
  {
    id: 'gal-4',
    title: 'Мозаїчна святиня',
    category: 'Символіка',
    localPath: CHURCH_ASSETS.emblem,
    description: 'Хрест Святого апостола Варнави — символ вірності та підбадьорення.',
  },
];
