import { IFormFieldsData } from './investor-edit-profile-form.types';

export const translationStrings = [
  'common.form.field.error.required',
  'common.form.field.error.contain.single.word',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',
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
  'common.investor.profile.types.private',
  'common.investor.profile.types.corporate',
  'common.investor.profile.types.institutional',
  'common.team.sizes.very.small',
  'common.team.sizes.small',
  'common.team.sizes.medium',
  'common.team.sizes.large',
  'common.investment.stage.types.idea',
  'common.investment.stage.types.seed',
  'common.investment.stage.types.growth',
  'common.investment.stage.types.series.a',
  'common.investment.stage.types.series.b',
  'common.investment.sizes.very.small',
  'common.investment.sizes.small',
  'common.investment.sizes.medium',
  'common.investment.sizes.large',
  'common.investment.sizes.very.large',
  'common.investor.demand.types.talent',
  'common.investor.demand.types.location',
  'common.investor.demand.types.technology',
  'common.investor.demand.types.co.founder',
  'common.investor.demand.types.money.for.shares',
  'common.investor.demand.types.network.and.support',
  'common.investor.demand.types.debt.capital.without.shares',

  'component.dashboard.edit.profile.form.heading',
  'component.dashboard.edit.profile.form.first.name.field.label',
  'component.dashboard.edit.profile.form.first.name.field.max.length.error',
  'component.dashboard.edit.profile.form.last.name.field.label',
  'component.dashboard.edit.profile.form.last.name.field.max.length.error',
  'component.dashboard.edit.profile.form.contact.email.field.label',
  'component.dashboard.edit.profile.form.contact.email.field.max.length.error',
  'component.dashboard.edit.profile.form.contact.email.field.pattern.match.error',
  'component.dashboard.edit.profile.form.company.name.field.label',
  'component.dashboard.edit.profile.form.company.name.field.max.length.error',
  'component.dashboard.edit.profile.form.location.field.label',
  'component.dashboard.edit.profile.form.images.field.min.length.error',
  'component.dashboard.edit.profile.form.your.position.field.label',
  'component.dashboard.edit.profile.form.focus.market.field.label',
  'component.dashboard.edit.profile.form.startup.sector.field.label',
  'component.dashboard.edit.profile.form.industrial.sectors.field.label',
  'component.dashboard.edit.profile.form.team.size.field.label',
  'component.dashboard.edit.profile.form.investment.stage.field.label',
  'component.dashboard.edit.profile.form.investment.size.field.label',
  'component.dashboard.edit.profile.form.demand.field.label',
  'component.dashboard.edit.profile.form.why.startup.should.match.with.you.field.label',
  'component.dashboard.edit.profile.form.why.startup.should.match.with.you.field.max.length.error',
] as const;

export const defaultFormFieldsValues: IFormFieldsData = {
  companyName: '',
  contactEmail: '',
  firstName: '',
  lastName: '',
  location: '',
  images: [],
  focusMarketIds: [],
  industrialSectorIds: [],
  investmentSizeIds: [],
  investmentStageTypeIds: [],
  investorDemandTypeIds: [],
  investorProfileTypeId: '',
  startupSectorIds: [],
  teamSizeIds: [],
  whatAreYouLookingFor: '',
  whyStartupShouldMatchWithYou: '',
};
