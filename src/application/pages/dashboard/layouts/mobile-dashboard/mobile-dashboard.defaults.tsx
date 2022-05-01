import {
  JoinInner as JoinInnerIcon,
  Settings as SettingsIcon,
  StarBorder as StarBorderIcon,
  Style as StyleIcon,
} from '@mui/icons-material';

import { ERoutes } from '@enums';

export const bottomNavigationOptions = [
  {
    icon: <StyleIcon />,
    route: ERoutes.DASHBOARD_DISCOVER,
  },
  {
    icon: <JoinInnerIcon />,
    route: ERoutes.DASHBOARD_MATCHES,
  },
  {
    icon: <StarBorderIcon />,
    route: ERoutes.DASHBOARD_LIKES,
  },
  {
    icon: <SettingsIcon />,
    route: ERoutes.DASHBOARD_SETTINGS,
  },
];
