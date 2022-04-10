import {
  IFocusMarket,
  IIndustrialSector,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IDesktopOnboardingStepThreeStartupData } from '../../onboarding.types';

export interface IDesktopOnboardingStepThreeStartupProps {
  defaultValues?: IDesktopOnboardingStepThreeStartupData;
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepThreeStartupData) => void;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
