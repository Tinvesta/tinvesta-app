import { FormHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IInvestorDemandType,
  IInvestorProfileType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IEditProfileFormFieldsData } from '../../profile.types';

export interface IInvestorEditProfileFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<IEditProfileFormFieldsData>;
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  investorDemandTypes: IInvestorDemandType[];
  investorProfileTypes: IInvestorProfileType[];
  isDirty: boolean;
  isLoading: boolean;
  onResetButtonClick: () => void;
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
