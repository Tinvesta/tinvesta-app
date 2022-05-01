import {
  JoinInner as JoinInnerIcon,
  Settings as SettingsIcon,
  StarBorder as StarBorderIcon,
  Style as StyleIcon,
} from '@mui/icons-material';

import { ERoutes } from '@enums';

export const translationStrings = [
  'component.dashboard.sidemenu.option.discover',
  'component.dashboard.sidemenu.option.matches',
  'component.dashboard.sidemenu.option.likes',
  'component.dashboard.sidemenu.option.settings',
] as const;

export const getBottomNavigationOptions = (translations: Record<string, string>) => [
  {
    icon: <StyleIcon />,
    route: ERoutes.DASHBOARD_DISCOVER,
    label: translations.componentDashboardSidemenuOptionDiscover,
  },
  {
    icon: <JoinInnerIcon />,
    route: ERoutes.DASHBOARD_MATCHES,
    label: translations.componentDashboardSidemenuOptionMatches,
  },
  {
    icon: <StarBorderIcon />,
    route: ERoutes.DASHBOARD_LIKES,
    label: translations.componentDashboardSidemenuOptionLikes,
  },
  {
    icon: <SettingsIcon />,
    route: ERoutes.DASHBOARD_SETTINGS,
    label: translations.componentDashboardSidemenuOptionSettings,
  },
];
