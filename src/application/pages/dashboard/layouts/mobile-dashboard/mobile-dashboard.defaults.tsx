import {
  JoinInner as JoinInnerIcon,
  StarBorder as StarBorderIcon,
  Style as StyleIcon,
} from '@mui/icons-material';

import { ERoutes } from '@enums';

export const translationStrings = [
  'component.dashboard.sidemenu.option.discover',
  'component.dashboard.sidemenu.option.matches',
  'component.dashboard.sidemenu.option.likes',
] as const;

export const getBottomNavigationOptions = (translations: Record<string, string>) => [
  {
    icon: <StyleIcon />,
    route: ERoutes.DASHBOARD_DISCOVER,
    label: translations.componentDashboardSidemenuOptionDiscover,
  },
  {
    icon: <StarBorderIcon />,
    route: ERoutes.DASHBOARD_LIKES,
    label: translations.componentDashboardSidemenuOptionLikes,
  },
  {
    icon: <JoinInnerIcon />,
    route: ERoutes.DASHBOARD_MATCHES,
    label: translations.componentDashboardSidemenuOptionMatches,
  },
];
