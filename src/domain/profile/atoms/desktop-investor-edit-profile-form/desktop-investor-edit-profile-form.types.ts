import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IProfileDetails,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IEditProfileFormFieldsData } from '../../profile.types';

export interface IDesktopInvestorEditProfileFormProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  onSubmit: (data: IEditProfileFormFieldsData) => void;
  profileDetails: IProfileDetails | undefined;
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
