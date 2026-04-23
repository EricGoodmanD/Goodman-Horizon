/**
 * Centralized asset registry for Goodman Horizon.
 *
 * Non-developer guide:
 * - Logo files live in: public/brand/logo/
 * - Homepage/section photos live in: public/images/<section-folder>/
 * - To swap an image, keep the same filename and replace that file in /public.
 */
export const siteAssets = {
  brand: {
    logo: '/brand/logo/goodman-horizon-logo.png',
    logoWhite: '/brand/logo/goodman-horizon-logo-white.png',
    favicon: '/brand/logo/goodman-horizon-favicon.png'
  },
  hero: {
    main: '/images/hero/hero-main.jpg',
    secondary: '/images/hero/hero-secondary.jpg'
  },
  sections: {
    familySupport: {
      primary: '/images/family-support/family-support-01.jpg',
      secondary: '/images/family-support/family-support-02.jpg'
    },
    youthMentorship: {
      primary: '/images/youth-mentorship/youth-mentorship-01.jpg',
      secondary: '/images/youth-mentorship/youth-mentorship-02.jpg'
    },
    caseManagement: {
      primary: '/images/case-management/case-management-01.jpg',
      secondary: '/images/case-management/case-management-02.jpg'
    },
    behavioralHealth: {
      primary: '/images/behavioral-health/behavioral-health-01.jpg',
      secondary: '/images/behavioral-health/behavioral-health-02.jpg'
    },
    communityOutreach: {
      primary: '/images/community-outreach/community-outreach-01.jpg',
      secondary: '/images/community-outreach/community-outreach-02.jpg'
    },
    referralConsultations: {
      primary: '/images/referral-consultations/referral-consultations-01.jpg',
      secondary: '/images/referral-consultations/referral-consultations-02.jpg'
    },
    housingSupport: {
      primary: '/images/housing-support/housing-support-01.jpg',
      secondary: '/images/housing-support/housing-support-02.jpg'
    },
    trustCare: {
      primary: '/images/trust-care/trust-care-01.jpg',
      secondary: '/images/trust-care/trust-care-02.jpg'
    }
  }
} as const;

export type SiteAssets = typeof siteAssets;
