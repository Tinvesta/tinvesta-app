import {
  IClientType,
  IFocusMarket,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

export interface IDesktopOnboardingProps {
  clientTypes: IClientType[];
  focusMarkets: IFocusMarket[];
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
