import { IDesktopOnboardingStepThreeInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultDesktopOnboardingStepThreeInvestorFormData: IDesktopOnboardingStepThreeInvestorData =
  {
    focusMarketIds: [],
    startupSectorIds: [],
    industrialSectorIds: [],
    investorProfileTypeId: '',
  };

export const translationStrings = [
  'common.focus.markets.b2b',
  'common.focus.markets.b2c',
  'common.industrial.sectors.web3',
  'common.industrial.sectors.energy',
  'common.industrial.sectors.social',
  'common.industrial.sectors.edtech',
  'common.industrial.sectors.telecom',
  'common.industrial.sectors.fintech',
  'common.industrial.sectors.security',
  'common.industrial.sectors.materials',
  'common.industrial.sectors.ecommerce',
  'common.industrial.sectors.environment',
  'common.industrial.sectors.real.estate',
  'common.industrial.sectors.climate.tech',
  'common.industrial.sectors.biotechnology',
  'common.industrial.sectors.infrastructure',
  'common.industrial.sectors.data.analytics',
  'common.industrial.sectors.cloud.computing',
  'common.industrial.sectors.shared.mobility',
  'common.industrial.sectors.healthcare.tech',
  'common.industrial.sectors.living.and.family',
  'common.industrial.sectors.delivery.services',
  'common.industrial.sectors.sports.and.fashion',
  'common.industrial.sectors.jobs.recruitment',
  'common.industrial.sectors.wellness.and.beauty',
  'common.industrial.sectors.travel.and.hospitality',
  'common.industrial.sectors.artificial.intelligence',
  'common.industrial.sectors.media.and.entertainment',
  'common.industrial.sectors.electronics.and.automation',
  'common.startup.sectors.software',
  'common.startup.sectors.service.industry',
  'common.startup.sectors.physical.product',
] as const;
