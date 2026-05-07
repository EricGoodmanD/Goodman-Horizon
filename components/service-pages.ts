import { siteAssets } from '@/config/siteAssets';

export type ServicePage = {
  slug: string;
  label: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroEyebrow: string;
  heroSummary: string;
  overview: string;
  whoWeSupport: string[];
  referralSteps: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  image: string;
  imageAlt: string;
};

const serviceImages = {
  caseManagement: siteAssets.sections.caseManagement.primary,
  familySupport: siteAssets.sections.familySupport.primary,
  resourceCoordination: siteAssets.sections.referralConsultations.primary,
  housingSupport: siteAssets.sections.housingSupport.primary,
  employmentSupport: siteAssets.sections.trustCare.primary,
  communityOutreach: siteAssets.sections.communityOutreach.primary,
  peerSupport: siteAssets.sections.trustCare.primary,
  youthMentorship: siteAssets.sections.youthMentorship.primary,
  behavioralHealth: siteAssets.sections.behavioralHealth.primary,
  friendlyVisitor: siteAssets.sections.familySupport.secondary,
  crisisManagement: siteAssets.hero.secondary
} as const;

export const servicePages: ServicePage[] = [
  {
    slug: 'case-management-services-maryland',
    label: 'Case management assistance',
    title: 'Case Management Services in Maryland',
    metaTitle: 'Case Management Services Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon provides Maryland case management services that help youth, adults, and families coordinate care, referrals, benefits, and community supports.',
    keywords: ['case management services Maryland', 'Maryland care coordination', 'support planning Maryland'],
    heroEyebrow: 'Maryland case management assistance',
    heroSummary:
      'Coordinated planning, follow-up, and advocacy for people navigating complex service systems across Maryland.',
    overview:
      'Our case management assistance helps individuals and families identify needs, organize priorities, connect with providers, and stay engaged with practical next steps. Goodman Horizon keeps communication clear so care teams, families, and referral partners can move together with confidence.',
    whoWeSupport: [
      'Youth, adults, and families who need organized support plans',
      'Caregivers balancing appointments, resources, and provider communication',
      'Agencies seeking a responsive Maryland case management partner'
    ],
    referralSteps: [
      'Submit a referral with current needs, contact details, and any urgent concerns.',
      'Our team reviews goals, eligibility context, and existing supports.',
      'We coordinate next steps, communicate updates, and support follow-through.'
    ],
    faqs: [
      {
        question: 'What does case management assistance include?',
        answer:
          'It may include needs assessment, care planning, referral coordination, benefits navigation, appointment follow-up, and communication with approved support partners.'
      },
      {
        question: 'Do you support families across Maryland?',
        answer:
          'Yes. Goodman Horizon works with Maryland families, providers, and community partners to coordinate service access and continuity.'
      }
    ],
    related: ['resource-coordination-maryland', 'family-support-services-maryland', 'behavioral-health-support-maryland'],
    image: serviceImages.caseManagement,
    imageAlt: 'Maryland case management planning meeting with a support professional'
  },
  {
    slug: 'family-support-services-maryland',
    label: 'Family support',
    title: 'Family Support Services in Maryland',
    metaTitle: 'Family Support Services Maryland | Goodman Horizon',
    metaDescription:
      'Compassionate Maryland family support services from Goodman Horizon help households navigate care coordination, referrals, stability needs, and community resources.',
    keywords: ['family support services Maryland', 'Maryland caregiver support', 'family care coordination Maryland'],
    heroEyebrow: 'Maryland family support',
    heroSummary:
      'Practical, relationship-centered help for families seeking stability, access, and steady guidance.',
    overview:
      'Goodman Horizon supports families through respectful communication, resource navigation, and coordinated action plans. We help caregivers understand options, prepare for referrals, and connect with community supports that strengthen wellbeing at home and in the community.',
    whoWeSupport: [
      'Parents and caregivers managing complex family needs',
      'Families seeking referrals, stability planning, and resource access',
      'Community partners looking for a trusted family support provider'
    ],
    referralSteps: [
      'Share the family’s current priorities and preferred contact information.',
      'We discuss strengths, immediate needs, and existing services.',
      'Together we coordinate referrals, follow-up, and practical next steps.'
    ],
    faqs: [
      {
        question: 'Can family support include caregiver guidance?',
        answer:
          'Yes. We help caregivers understand service options, organize next steps, and communicate with referral partners when appropriate.'
      },
      {
        question: 'Is family support only for crisis situations?',
        answer:
          'No. Families can seek support for prevention, transition planning, resource coordination, and ongoing stability needs.'
      }
    ],
    related: ['case-management-services-maryland', 'youth-mentorship-maryland', 'resource-coordination-maryland'],
    image: serviceImages.familySupport,
    imageAlt: 'Maryland family support conversation with a compassionate care coordinator'
  },
  {
    slug: 'resource-coordination-maryland',
    label: 'Resource coordination',
    title: 'Resource Coordination in Maryland',
    metaTitle: 'Resource Coordination Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon offers Maryland resource coordination to connect people with referrals, community programs, care supports, and practical next steps.',
    keywords: ['resource coordination Maryland', 'Maryland referral coordination', 'community resources Maryland'],
    heroEyebrow: 'Maryland resource coordination',
    heroSummary:
      'Clear referral navigation that helps people find and access the right supports at the right time.',
    overview:
      'Resource coordination turns scattered information into a practical support pathway. Goodman Horizon helps identify appropriate services, clarify documentation needs, communicate with partners, and reduce barriers to access for Maryland residents and families.',
    whoWeSupport: [
      'Individuals unsure which community resources fit their needs',
      'Families and caregivers coordinating multiple referral options',
      'Schools, agencies, and providers seeking streamlined connections'
    ],
    referralSteps: [
      'Send referral details, priority needs, and any current provider contacts.',
      'We identify relevant Maryland community resources and referral pathways.',
      'Our team supports communication and follow-through whenever possible.'
    ],
    faqs: [
      {
        question: 'What kinds of resources can you help coordinate?',
        answer:
          'We can help navigate care supports, community programs, housing-related resources, behavioral health referrals, family supports, and other practical services.'
      },
      {
        question: 'Can agencies make referrals?',
        answer:
          'Yes. Agencies, schools, providers, families, and individuals may contact Goodman Horizon to discuss referral needs.'
      }
    ],
    related: ['case-management-services-maryland', 'housing-support-maryland', 'community-outreach-maryland'],
    image: serviceImages.resourceCoordination,
    imageAlt: 'Maryland referral consultation reviewing community resource options'
  },
  {
    slug: 'housing-support-maryland',
    label: 'Housing support',
    title: 'Housing Support in Maryland',
    metaTitle: 'Housing Support Maryland | Goodman Horizon',
    metaDescription:
      'Maryland housing support from Goodman Horizon helps individuals and families coordinate stability planning, referrals, supportive housing pathways, and community resources.',
    keywords: ['housing support Maryland', 'supportive housing coordination Maryland', 'housing stability Maryland'],
    heroEyebrow: 'Maryland housing support',
    heroSummary:
      'Supportive coordination for housing stability, safety planning, and long-term community connection.',
    overview:
      'Housing support focuses on helping people understand options, prepare for referrals, and coordinate practical steps toward stability. Goodman Horizon works with individuals, families, and partners to support housing-related communication and resource navigation across Maryland.',
    whoWeSupport: [
      'People experiencing housing instability or transition needs',
      'Families seeking supportive housing coordination and planning',
      'Referral partners working toward safer, more stable living arrangements'
    ],
    referralSteps: [
      'Provide the current housing concern, urgency, and preferred contact method.',
      'We review existing supports, risks, and referral pathways.',
      'Our team coordinates next steps with dignity and consistent communication.'
    ],
    faqs: [
      {
        question: 'Does Goodman Horizon provide housing placement?',
        answer:
          'We provide housing support and coordination, including referral navigation and stability planning. Specific availability depends on partner programs and eligibility.'
      },
      {
        question: 'Can housing support connect with other services?',
        answer:
          'Yes. Housing stability often connects with case management, resource coordination, behavioral health support, and family support.'
      }
    ],
    related: ['resource-coordination-maryland', 'case-management-services-maryland', 'crisis-management-support-maryland'],
    image: serviceImages.housingSupport,
    imageAlt: 'Maryland housing support coordination conversation for stability planning'
  },
  {
    slug: 'employment-support-maryland',
    label: 'Employment support',
    title: 'Employment Support in Maryland',
    metaTitle: 'Employment Support Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon provides Maryland employment support coordination that helps people prepare for work goals, referrals, stability needs, and community connections.',
    keywords: ['employment support Maryland', 'work readiness support Maryland', 'job support services Maryland'],
    heroEyebrow: 'Maryland employment support',
    heroSummary:
      'Encouraging, practical coordination for people building work readiness and employment stability.',
    overview:
      'Employment support helps people connect personal goals with practical next steps. Goodman Horizon can assist with referral coordination, readiness planning, barrier identification, and communication with supportive programs that promote independence and stability.',
    whoWeSupport: [
      'People exploring work goals or employment readiness',
      'Youth and adults who need support reducing barriers to employment',
      'Families and partners seeking coordinated vocational resources'
    ],
    referralSteps: [
      'Share employment goals, support needs, and current service connections.',
      'We identify readiness factors, resources, and referral options.',
      'Our team coordinates follow-up that supports confidence and consistency.'
    ],
    faqs: [
      {
        question: 'What is employment support coordination?',
        answer:
          'It is practical help connecting people to work-readiness resources, referrals, planning conversations, and supports that may reduce employment barriers.'
      },
      {
        question: 'Can employment support be paired with mentorship?',
        answer:
          'Yes. Employment goals often pair well with youth mentorship, peer supports, case management, and resource coordination.'
      }
    ],
    related: ['youth-mentorship-maryland', 'peer-support-services-maryland', 'resource-coordination-maryland'],
    image: serviceImages.employmentSupport,
    imageAlt: 'Maryland employment support planning focused on confidence and next steps'
  },
  {
    slug: 'community-outreach-maryland',
    label: 'Community outreach',
    title: 'Community Outreach in Maryland',
    metaTitle: 'Community Outreach Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon community outreach in Maryland builds relationships with families, agencies, providers, and neighborhoods to improve access to support.',
    keywords: ['community outreach Maryland', 'Maryland community support services', 'outreach support Maryland'],
    heroEyebrow: 'Maryland community outreach',
    heroSummary:
      'Relationship-based outreach that connects communities with compassionate support and trusted resources.',
    overview:
      'Community outreach strengthens access by meeting people and partners where they are. Goodman Horizon builds referral relationships, supports engagement, and helps communities connect with practical services that promote dignity, stability, and belonging.',
    whoWeSupport: [
      'Community organizations and agencies serving Maryland residents',
      'Families and individuals who benefit from accessible local connections',
      'Partners seeking collaborative outreach and engagement support'
    ],
    referralSteps: [
      'Contact us with outreach goals, population needs, or referral questions.',
      'We clarify priorities and identify the best engagement pathway.',
      'Goodman Horizon coordinates communication and community follow-up.'
    ],
    faqs: [
      {
        question: 'What does community outreach involve?',
        answer:
          'It can include relationship building, referral education, local resource connection, partner communication, and engagement support for Maryland communities.'
      },
      {
        question: 'Can organizations partner with Goodman Horizon?',
        answer:
          'Yes. We welcome conversations with community organizations, schools, agencies, and providers interested in coordinated support.'
      }
    ],
    related: ['resource-coordination-maryland', 'family-support-services-maryland', 'friendly-visitor-services-maryland'],
    image: serviceImages.communityOutreach,
    imageAlt: 'Maryland community outreach meeting connecting residents with support resources'
  },
  {
    slug: 'peer-support-services-maryland',
    label: 'Peer supports',
    title: 'Peer Support Services in Maryland',
    metaTitle: 'Peer Support Services Maryland | Goodman Horizon',
    metaDescription:
      'Peer support services in Maryland from Goodman Horizon promote trust, confidence, belonging, and connection to community-based resources.',
    keywords: ['peer support services Maryland', 'Maryland peer supports', 'community peer support Maryland'],
    heroEyebrow: 'Maryland peer supports',
    heroSummary:
      'Trust-building support that helps people feel heard, connected, and encouraged in their next steps.',
    overview:
      'Peer supports emphasize relationship, encouragement, and connection. Goodman Horizon helps people build confidence, engage with services, and strengthen community ties through respectful support that complements broader care coordination.',
    whoWeSupport: [
      'Individuals who benefit from encouragement and connection',
      'People working toward stability, community engagement, or personal goals',
      'Families and providers seeking supportive relationship-based services'
    ],
    referralSteps: [
      'Submit referral information describing goals and preferred supports.',
      'We learn about strengths, barriers, and relationship needs.',
      'Our team coordinates peer support next steps with care and respect.'
    ],
    faqs: [
      {
        question: 'How do peer supports help?',
        answer:
          'Peer supports can promote engagement, confidence, trust, personal goal-setting, and connection to community resources.'
      },
      {
        question: 'Can peer supports work alongside case management?',
        answer:
          'Yes. Peer supports often complement case management, behavioral health support, employment support, and community outreach.'
      }
    ],
    related: ['behavioral-health-support-maryland', 'employment-support-maryland', 'friendly-visitor-services-maryland'],
    image: serviceImages.peerSupport,
    imageAlt: 'Maryland peer support conversation focused on trust and belonging'
  },
  {
    slug: 'youth-mentorship-maryland',
    label: 'Youth mentorship',
    title: 'Youth Mentorship in Maryland',
    metaTitle: 'Youth Mentorship Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon youth mentorship in Maryland helps young people build confidence, stability, life skills, and trusted connections with caring support.',
    keywords: ['youth mentorship Maryland', 'Maryland youth support services', 'mentor services Maryland youth'],
    heroEyebrow: 'Maryland youth mentorship',
    heroSummary:
      'Consistent, caring mentorship that helps young people build confidence, direction, and positive momentum.',
    overview:
      'Youth mentorship provides guidance that respects each young person’s strengths, circumstances, and goals. Goodman Horizon supports youth with relationship-based encouragement, practical planning, and connections that promote wellbeing and healthy development.',
    whoWeSupport: [
      'Young people who need trusted guidance and encouragement',
      'Families seeking supportive mentorship and goal planning',
      'Schools, agencies, and providers referring youth for added support'
    ],
    referralSteps: [
      'Share youth strengths, concerns, goals, and caregiver contact information.',
      'We review mentorship needs, safety considerations, and referral context.',
      'Our team coordinates a supportive next-step plan with the family or partner.'
    ],
    faqs: [
      {
        question: 'What goals can youth mentorship support?',
        answer:
          'Mentorship can support confidence, life skills, positive relationships, school or work readiness, emotional wellbeing, and community engagement.'
      },
      {
        question: 'Can caregivers be involved?',
        answer:
          'Yes. Caregiver communication is important when appropriate and helps align mentorship with family goals.'
      }
    ],
    related: ['family-support-services-maryland', 'employment-support-maryland', 'behavioral-health-support-maryland'],
    image: serviceImages.youthMentorship,
    imageAlt: 'Maryland youth mentorship conversation encouraging confidence and growth'
  },
  {
    slug: 'behavioral-health-support-maryland',
    label: 'Behavioral health support',
    title: 'Behavioral Health Support in Maryland',
    metaTitle: 'Behavioral Health Support Maryland | Goodman Horizon',
    metaDescription:
      'Behavioral health support in Maryland from Goodman Horizon helps people coordinate care, referrals, stability planning, and compassionate community support.',
    keywords: ['behavioral health support Maryland', 'Maryland mental health support coordination', 'wellness support Maryland'],
    heroEyebrow: 'Maryland behavioral health support',
    heroSummary:
      'Compassionate coordination that centers emotional wellness, stability, and connection to appropriate care.',
    overview:
      'Behavioral health support helps people navigate care options, reduce barriers, and stay connected to stabilizing resources. Goodman Horizon provides respectful support, referral coordination, and practical communication with approved partners and care teams.',
    whoWeSupport: [
      'Youth and adults seeking emotional wellness and stability support',
      'Families coordinating behavioral health referrals and follow-up',
      'Providers and agencies seeking a collaborative support partner'
    ],
    referralSteps: [
      'Submit referral details with current concerns and urgency level.',
      'We review support needs, existing providers, and appropriate resources.',
      'Goodman Horizon coordinates next steps while prioritizing dignity and safety.'
    ],
    faqs: [
      {
        question: 'Is this a substitute for emergency care?',
        answer:
          'No. If someone is in immediate danger, call 911 or the local crisis response line. Goodman Horizon supports coordination, referrals, and stabilization planning.'
      },
      {
        question: 'Can behavioral health support include family communication?',
        answer:
          'Yes, when appropriate and authorized, we can help families and partners understand next steps and coordinate support.'
      }
    ],
    related: ['crisis-management-support-maryland', 'peer-support-services-maryland', 'case-management-services-maryland'],
    image: serviceImages.behavioralHealth,
    imageAlt: 'Maryland behavioral health support conversation centered on wellness and stability'
  },
  {
    slug: 'friendly-visitor-services-maryland',
    label: 'Friendly visitor',
    title: 'Friendly Visitor Services in Maryland',
    metaTitle: 'Friendly Visitor Services Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon friendly visitor services in Maryland offer compassionate connection, check-ins, community engagement, and supportive relationship-building.',
    keywords: ['friendly visitor services Maryland', 'Maryland companion support', 'community connection support Maryland'],
    heroEyebrow: 'Maryland friendly visitor services',
    heroSummary:
      'Warm, reliable connection that helps reduce isolation and strengthen a sense of belonging.',
    overview:
      'Friendly visitor services focus on meaningful connection, respectful check-ins, and engagement that supports wellbeing. Goodman Horizon helps individuals feel seen, connected, and encouraged while coordinating with broader support needs when appropriate.',
    whoWeSupport: [
      'People who may feel isolated or disconnected from community',
      'Families seeking compassionate check-in and engagement support',
      'Partners looking for relationship-based community connection services'
    ],
    referralSteps: [
      'Share the person’s connection goals, preferences, and support context.',
      'We discuss comfort, communication needs, and appropriate next steps.',
      'Our team coordinates friendly visitor support with respect and consistency.'
    ],
    faqs: [
      {
        question: 'What is a friendly visitor service?',
        answer:
          'It is supportive connection through respectful visits or check-ins that promote belonging, engagement, and wellbeing.'
      },
      {
        question: 'Can friendly visitor support connect someone to other services?',
        answer:
          'Yes. If additional needs emerge, Goodman Horizon can help coordinate referrals or related support options.'
      }
    ],
    related: ['peer-support-services-maryland', 'community-outreach-maryland', 'family-support-services-maryland'],
    image: serviceImages.friendlyVisitor,
    imageAlt: 'Maryland friendly visitor support providing warm community connection'
  },
  {
    slug: 'crisis-management-support-maryland',
    label: 'Crisis management',
    title: 'Crisis Management Support in Maryland',
    metaTitle: 'Crisis Management Support Maryland | Goodman Horizon',
    metaDescription:
      'Goodman Horizon crisis management support in Maryland helps coordinate urgent next steps, stabilization resources, referrals, and compassionate communication.',
    keywords: ['crisis management support Maryland', 'Maryland crisis support coordination', 'stabilization support Maryland'],
    heroEyebrow: 'Maryland crisis management support',
    heroSummary:
      'Calm, coordinated support for urgent situations that require clear next steps and stabilizing resources.',
    overview:
      'Crisis management support helps people and referral partners organize immediate priorities, identify appropriate resources, and coordinate communication during stressful moments. Goodman Horizon focuses on dignity, safety awareness, and practical stabilization planning.',
    whoWeSupport: [
      'Individuals and families experiencing urgent support needs',
      'Caregivers seeking help organizing next steps during stressful situations',
      'Agencies and providers coordinating stabilization referrals'
    ],
    referralSteps: [
      'If there is immediate danger, call 911 first; then contact us for coordination needs.',
      'Share the current concern, safety context, and existing support contacts.',
      'We help coordinate appropriate resources and follow-up communication.'
    ],
    faqs: [
      {
        question: 'Is crisis management support an emergency response service?',
        answer:
          'No. For immediate danger or medical emergencies, call 911. Goodman Horizon supports coordination, referrals, and practical stabilization planning.'
      },
      {
        question: 'Can crisis support continue after the immediate situation?',
        answer:
          'Yes. We can help connect crisis planning with case management, behavioral health support, housing support, and other services.'
      }
    ],
    related: ['behavioral-health-support-maryland', 'case-management-services-maryland', 'housing-support-maryland'],
    image: serviceImages.crisisManagement,
    imageAlt: 'Maryland crisis management support planning for urgent stabilization needs'
  }
];

export const servicePageSlugs = servicePages.map((service) => service.slug);

export const serviceHrefByLabel = servicePages.reduce<Record<string, string>>((acc, service) => {
  acc[service.label] = `/${service.slug}`;
  return acc;
}, {});

export const supportImageHrefByTitle: Record<string, string> = {
  'Family Support': '/family-support-services-maryland',
  'Youth Mentorship': '/youth-mentorship-maryland',
  'Case Management Meetings': '/case-management-services-maryland',
  'Behavioral Health Support': '/behavioral-health-support-maryland',
  'Community Outreach': '/community-outreach-maryland',
  'Referral Consultations': '/resource-coordination-maryland',
  'Supportive Housing Coordination': '/housing-support-maryland',
  'Professional Care & Trust-Building': '/peer-support-services-maryland'
};

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
