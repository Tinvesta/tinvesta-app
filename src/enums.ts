export enum ELocale {
  EN = 'en',
}

export enum EApiError {
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
}

export enum EApiEndpoint {
  CREATE_PROFILE = '/api/create-profile',
  CREATE_STRIPE_CUSTOMER = '/api/create-stripe-customer',
  DISCOVER_RECORDS = '/api/discover-records',
  FEEDBACK = '/api/feedback',
  HEALTH_CHECK = '/api/health-check',
  LIKES = '/api/likes',
  LIKE_PROFILE = '/api/like-profile',
  MATCHES = '/api/matches',
  PROFILE_DETAILS = '/api/profile-details',
  REMOVE_MATCH = '/api/remove-match',
  SET_SUPABASE_COOKIE = '/api/set-supabase-cookie',
  STRIPE_PORTAL = '/api/stripe-portal',
  SUBSCRIPTION = '/api/subscription',
  UPDATE_PROFILE = '/api/update-profile',
}

export enum ERoutes {
  DASHBOARD = '/dashboard',
  DASHBOARD_DISCOVER = '/dashboard/discover',
  DASHBOARD_LIKES = '/dashboard/likes',
  DASHBOARD_MATCHES = '/dashboard/matches',
  DASHBOARD_PROFILE = '/dashboard/profile',
  HOME = '/',
  INTERNAL_SERVER_ERROR = '/500',
  NOT_FOUND = '/404',
  ONBOARDING = '/onboarding',
  PRIVACY_POLICY = '/privacy-policy',
  TERMS = '/terms',
}

export enum EFocusMarket {
  B2B = 'b2b',
  B2C = 'b2c',
}

export enum ETeamSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  VERY_SMALL = 'very-small',
}

export enum EClientType {
  INVESTOR = 'investor',
  STARTUP = 'startup',
}

export enum EStartupSector {
  PHYSICAL_PRODUCT = 'physical-product',
  SERVICE_INDUSTRY = 'service-industry',
  SOFTWARE = 'software',
}

export enum EInvestorDemandType {
  CO_FOUNDER = 'co-founder',
  DEBT_CAPITAL_WITHOUT_SHARES = 'debt-capital-without-shares',
  LOCATION = 'location',
  MONEY_FOR_SHARES = 'money-for-shares',
  NETWORK_AND_SUPPORT = 'network-and-support',
  TALENT = 'talent',
  TECHNOLOGY = 'technology',
}

export enum EInvestmentStageType {
  GROWTH = 'growth',
  IDEA = 'idea',
  SEED = 'seed',
  SERIES_A = 'series-a',
  SERIES_B = 'series-b',
}

export enum EIndustrialSector {
  ARTIFICIAL_INTELLIGENCE = 'artificial-intelligence',
  BIOTECHNOLOGY = 'biotechnology',
  CLIMATE_TECH = 'climate-tech',
  CLOUD_COMPUTING = 'cloud-computing',
  DATA_ANALYTICS = 'data-analytics',
  DELIVERY_SERVICES = 'delivery-services',
  EDTECH = 'edtech',
  ELECTRONICS_AND_AUTOMATION = 'electronics-and-automation',
  ENERGY = 'energy',
  ENVIRONMENT = 'environment',
  E_COMMERCE = 'e-commerce',
  FINTECH = 'fintech',
  HEALTHCARE_TECH = 'healthcare-tech',
  INFRASTRUCTURE = 'infrastructure',
  JOBS_RECRUITMENT = 'jobs-recruitment',
  LIVING_AND_FAMILY = 'living-and-family',
  MATERIALS = 'materials',
  MEDIA_AND_ENTERTAINMENT = 'media-and-entertainment',
  REAL_ESTATE = 'real-estate',
  SECURITY = 'security',
  SHARED_MOBILITY = 'shared-mobility',
  SOCIAL = 'social',
  SPORTS_AND_FASHION = 'sports-and-fashion',
  TELECOM = 'telecom',
  TRAVEL_AND_HOSPITALITY = 'travel-and-hospitality',
  WEB3 = 'web3',
  WELLNESS_AND_BEAUTY = 'wellness-and-beauty',
}

export enum EInvestmentSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  VERY_LARGE = 'very-large',
  VERY_SMALL = 'very-small',
}

export enum EInvestorProfileType {
  CORPORATE = 'corporate',
  INSTITUTIONAL = 'institutional',
  PRIVATE = 'private',
}

export enum EStartupProfileCreatorType {
  CO_FOUNDER = 'co-founder',
  EMPLOYEE = 'employee',
  FOUNDER = 'founder',
}

export enum ECurrency {
  USD = 'usd',
}

export enum ESubscriptionInterval {
  MONTH = 'month',
  YEAR = 'year',
}

export enum ESubscriptionName {
  BASIC = 'basic',
  PREMIUM = 'premium',
}

export enum EPaymentStatus {
  SUCCESS = 'success',
}
