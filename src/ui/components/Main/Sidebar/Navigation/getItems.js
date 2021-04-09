import { Tune } from '@material-ui/icons';
import { Campaign } from '../../../general/icons/Campaign';
import { routes } from '../../../../config/routes';

const items = [
  {
    name: 'Campaigns',
    to: routes.campaigns,
    activeFor: [routes.campaigns, routes.campaign, routes.createCampaign],
    icon: Campaign,
  },
  {
    name: 'Settings',
    to: '/settings',
    activeFor: ['/settings'],
    icon: Tune,
  },
];

export const getItems = (match) =>
  items.map(({ name, to, icon, activeFor }) => ({
    name,
    icon,
    to,
    isActive: activeFor.includes(match.path),
  }));
