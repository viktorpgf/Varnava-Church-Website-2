/**
 * TypeScript types for Church of St. Apostle Barnabas and Sanity CMS
 */

export interface SanityImageReference {
  _type?: 'image';
  asset: {
    _ref: string;
    _type?: 'reference';
    url?: string;
  };
  alt?: string;
  caption?: string;
}

export interface OfficialInfo {
  legalName: string;
  foundationDate: string;
  pastorFullName: string;
  city: string;
}

export interface SiteSettings {
  _id?: string;
  _type: 'siteSettings';
  churchName: string;
  tagline: string;
  shortDescription: string;
  logo?: SanityImageReference;
  localLogoPath?: string;
  officialInfo: OfficialInfo;
  announcement?: {
    enabled: boolean;
    text: string;
    link?: string;
  };
  address: {
    street: string;
    city: string;
    postalCode?: string;
    directionsNote?: string;
  };
  contacts: {
    phone: string;
    secondaryPhone?: string;
    email: string;
  };
  scheduleSummary: {
    day: string;
    time: string;
    duration: string;
  };
  socialMedia: {
    youtube?: string;
    instagram?: string;
    facebook?: string;
    telegram?: string;
    youtubeNotice?: string;
    instagramNotice?: string;
    facebookNotice?: string;
  };
  bankDetails: {
    recipientName: string;
    iban?: string;
    edrpou?: string;
    bankName?: string;
    paymentPurpose: string;
    qrCodeAvailable: boolean;
    qrNotice: string;
  };
  googleMaps: {
    directLink: string;
    embedUrl?: string;
  };
}

export interface HomePageData {
  _id?: string;
  _type: 'homePage';
  heroTitle: string;
  heroGreeting: string;
  heroDescription: string;
  heroInvitation: string;
  meetingTimeBadge: string;
  addressBadge: string;
  heroCtaText: string;
  heroSecondaryCtaText: string;
  heroImage?: SanityImageReference;
  localHeroImagePath?: string;
  welcomeSnippet: {
    title: string;
    body: string;
  };
}

export interface AboutPageData {
  _id?: string;
  _type: 'aboutPage';
  title: string;
  mainDescription: string;
  christCenteredStatement: string;
  communityInvitation: string;
  history: {
    title: string;
    foundedDate: string;
    description: string;
  };
  pastor: {
    title: string;
    name: string;
    description: string;
    photo?: SanityImageReference;
    localPhotoPath?: string;
  };
  official: OfficialInfo;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image?: SanityImageReference;
  localPath: string;
  description?: string;
}

export interface Leader {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string;
  description: string;
  photo?: SanityImageReference;
  localPhotoPath?: string;
  isSeniorPastor?: boolean;
}

export interface ChurchFullData {
  siteSettings: SiteSettings;
  homePage: HomePageData;
  about: AboutPageData;
  leaders: Leader[];
  gallery: GalleryPhoto[];
  isDemoMode: boolean;
  sanityStatus: {
    isConfigured: boolean;
    projectId?: string;
    dataset?: string;
    error?: string;
  };
}
