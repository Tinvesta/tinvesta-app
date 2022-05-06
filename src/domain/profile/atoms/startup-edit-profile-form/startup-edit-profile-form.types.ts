import { FormHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

import {
  IFocusMarket,
  IIndustrialSector,
  IInvestmentSize,
  IInvestmentStageType,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IEditProfileFormFieldsData } from '../../profile.types';

export interface IStartupEditProfileFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<IEditProfileFormFieldsData>;
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  isDirty: boolean;
  isLoading: boolean;
  onResetButtonClick: () => void;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
