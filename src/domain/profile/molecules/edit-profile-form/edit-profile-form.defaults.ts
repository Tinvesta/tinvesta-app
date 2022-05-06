import { IEditProfileFormFieldsData } from '../../profile.types';

export const translationStrings = [
  'common.errors.something.went.wrong',

  'component.dashboard.edit.profile.form.messages.success',
  'component.dashboard.edit.profile.form.investor.heading',
  'component.dashboard.edit.profile.form.startup.heading',
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
