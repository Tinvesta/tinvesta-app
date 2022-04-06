import {
  IClientType,
  IFocusMarket,
  IIndustrialSector,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

export interface IDesktopOnboardingProps {
  clientTypes: IClientType[];
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
