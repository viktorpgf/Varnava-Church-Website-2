import { getClient, getSanityConfig } from './client';
import type {
  SiteSettings,
  HomePageData,
  AboutPageData,
  Leader,
  GalleryPhoto,
  ChurchFullData,
} from '../types/sanity';
import {
  DEMO_SITE_SETTINGS,
  DEMO_HOME_PAGE,
  DEMO_ABOUT_PAGE,
  DEMO_LEADERS,
  DEMO_GALLERY,
} from '../data/demoContent';

// GROQ Queries for Sanity CMS
export const SITE_SETTINGS_GROQ = `*[_type == "siteSettings"][0]{
  _id,
  _type,
  churchName,
  tagline,
  shortDescription,
  logo,
  officialInfo,
  announcement,
  address,
  contacts,
  scheduleSummary,
  socialMedia,
  bankDetails,
  googleMaps,
  serviceSchedule,
  directions,
  mapUrl,
  phone,
  email,
  socialLinks,
  donationText,
  donationDetails
}`;

export const HOME_PAGE_GROQ = `*[_type == "homePage"][0]{
  _id,
  _type,
  heroTitle,
  heroGreeting,
  heroDescription,
  heroInvitation,
  meetingTimeBadge,
  addressBadge,
  heroCtaText,
  heroSecondaryCtaText,
  heroImage,
  welcomeSnippet
}`;

export const ABOUT_PAGE_GROQ = `*[_type == "aboutPage"][0]{
  _id,
  _type,
  title,
  mainDescription,
  christCenteredStatement,
  communityInvitation,
  history,
  pastor,
  official
}`;

export const LEADERS_GROQ = `*[_type == "teamMember"] | order(order asc, name asc){
  _id,
  _type,
  name,
  role,
  description,
  photo,
  isSeniorPastor
}`;

export const ALL_CHURCH_DATA_GROQ = `{
  "siteSettings": ${SITE_SETTINGS_GROQ},
  "homePage": ${HOME_PAGE_GROQ},
  "about": ${ABOUT_PAGE_GROQ},
  "leaders": ${LEADERS_GROQ}
}`;

export async function fetchCompleteChurchData(): Promise<ChurchFullData> {
  const config = getSanityConfig();
  const client = getClient();

  if (!config.isConfigured || !client) {
    return {
      siteSettings: DEMO_SITE_SETTINGS,
      homePage: DEMO_HOME_PAGE,
      about: DEMO_ABOUT_PAGE,
      leaders: DEMO_LEADERS,
      gallery: DEMO_GALLERY,
      isDemoMode: true,
      sanityStatus: {
        isConfigured: false,
        projectId: config.projectId || undefined,
        dataset: config.dataset,
        error: !config.projectId
          ? 'Sanity Project ID не вказано у змінних середовища. Використовуються автентичні дані церкви Святого апостола Варнави.'
          : 'Використовується локальний макет.',
      },
    };
  }

  try {
    const rawData = await client.fetch<{
      siteSettings?: Partial<SiteSettings> | null;
      homePage?: Partial<HomePageData> | null;
      about?: Partial<AboutPageData> | null;
      leaders?: Leader[] | null;
    }>(ALL_CHURCH_DATA_GROQ);

    const hasRealContent = Boolean(
      rawData.siteSettings?.churchName || rawData.homePage?.heroTitle
    );

   const rawSettings = rawData.siteSettings as
  | (Partial<SiteSettings> & {
      address?: string | SiteSettings['address'];
      mapUrl?: string;
      phone?: string;
      email?: string;
    })
  | null
  | undefined;

const siteSettings: SiteSettings = rawSettings?.churchName
  ? {
      ...DEMO_SITE_SETTINGS,
      ...rawSettings,
      officialInfo: {
        ...DEMO_SITE_SETTINGS.officialInfo,
        ...(rawSettings.officialInfo ?? {}),
      },
      address: {
        ...DEMO_SITE_SETTINGS.address,
        ...(typeof rawSettings.address === 'object' && rawSettings.address
          ? rawSettings.address
          : {}),
        ...(typeof rawSettings.address === 'string' && rawSettings.address
          ? { street: rawSettings.address }
          : {}),
      },
      contacts: {
        ...DEMO_SITE_SETTINGS.contacts,
        ...(rawSettings.contacts ?? {}),
        ...(rawSettings.phone ? { phone: rawSettings.phone } : {}),
        ...(rawSettings.email ? { email: rawSettings.email } : {}),
      },
      googleMaps: {
        ...DEMO_SITE_SETTINGS.googleMaps,
        ...(rawSettings.googleMaps ?? {}),
        ...(rawSettings.mapUrl
          ? { directLink: rawSettings.mapUrl }
          : {}),
      },
    }
  : DEMO_SITE_SETTINGS;

    const homePage: HomePageData = rawData.homePage?.heroTitle
      ? { ...DEMO_HOME_PAGE, ...rawData.homePage }
      : DEMO_HOME_PAGE;

    const about: AboutPageData = rawData.about?.title
      ? { ...DEMO_ABOUT_PAGE, ...rawData.about }
      : DEMO_ABOUT_PAGE;

    const leaders: Leader[] =
      rawData.leaders && rawData.leaders.length > 0
        ? rawData.leaders
        : DEMO_LEADERS;

    return {
      siteSettings,
      homePage,
      about,
      leaders,
      gallery: DEMO_GALLERY,
      isDemoMode: !hasRealContent,
      sanityStatus: {
        isConfigured: true,
        projectId: config.projectId,
        dataset: config.dataset,
        error: !hasRealContent
          ? 'Підключено до Sanity, але документи ще не опубліковані у вашому датасеті. Відображено базовий контент громади.'
          : undefined,
      },
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.warn('Sanity fetch error (falling back to Barnabas church content):', errorMessage);

    return {
      siteSettings: DEMO_SITE_SETTINGS,
      homePage: DEMO_HOME_PAGE,
      about: DEMO_ABOUT_PAGE,
      leaders: DEMO_LEADERS,
      gallery: DEMO_GALLERY,
      isDemoMode: true,
      sanityStatus: {
        isConfigured: true,
        projectId: config.projectId,
        dataset: config.dataset,
        error: `Помилка завантаження із Sanity: ${errorMessage}`,
      },
    };
  }
}
