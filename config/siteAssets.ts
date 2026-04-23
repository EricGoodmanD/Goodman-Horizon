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
    main: '/images/hero/hero-main.png',
    secondary: '/images/hero/hero-secondary.png'
  },
  sections: {
    familySupport: {
      primary: '/images/family-support/family-support-01.png',
      secondary: '/images/family-support/family-support-02.png'
    },
    youthMentorship: {
      primary: '/images/youth-mentorship/youth-mentorship-01.png',
      secondary: '/images/youth-mentorship/youth-mentorship-02.png'
    },
    caseManagement: {
      primary: '/images/case-management/case-management-01.png',
      secondary: '/images/case-management/case-management-02.png'
    },
    behavioralHealth: {
      primary: '/images/behavioral-health/behavioral-health-01.png',
      secondary: '/images/behavioral-health/behavioral-health-02.png'
    },
    communityOutreach: {
      primary: '/images/community-outreach/community-outreach-01.png',
      secondary: '/images/community-outreach/community-outreach-02.png'
    },
    referralConsultations: {
      primary: '/images/referral-consultations/referral-consultations-01.png',
      secondary: '/images/referral-consultations/referral-consultations-02.png'
    },
    housingSupport: {
      primary: '/images/housing-support/housing-support-01.png',
      secondary: '/images/housing-support/housing-support-02.png'
    },
    trustCare: {
      primary: '/images/trust-care/trust-care-01.png',
      secondary: '/images/trust-care/trust-care-02.png'
    }
  }
} as const;

export type SiteAssets = typeof siteAssets;
