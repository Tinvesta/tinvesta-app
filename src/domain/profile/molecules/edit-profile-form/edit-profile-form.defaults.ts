import { IEditProfileFormFieldsData } from '../../profile.types';

export const translationStrings = [
  'common.errors.something.went.wrong',

  'component.dashboard.investor.edit.profile.form.messages.success',
  'component.dashboard.startup.edit.profile.form.messages.success',
  'component.dashboard.investor.edit.profile.form.heading',
  'component.dashboard.startup.edit.profile.form.heading',
] as const;

export const defaultFormFieldsValues: IEditProfileFormFieldsData = {
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
  whyStartupShouldMatchWithYou: '',
  teamSizeId: '',
  imageKeys: [],
  missionStatement: '',
  startupClaim: '',
  startupProfileCreatorTypeId: '',
  visionStatement: '',
};
