import {ImageRequireSource} from 'react-native';

export interface CampaignData {
  id: number;
  discount: string;
  title: string;
  promo: string;
  backgroundImage: ImageRequireSource;
}

export const campaignData: CampaignData[] = [
  {
    id: 1,
    discount: '50% off',
    title: 'On everything today',
    promo: 'With code: FSCREATION',
    backgroundImage: require('../assets/images/campaign-img1.png'),
  },
  {
    id: 2,
    discount: '30% off',
    title: 'On everything today',
    promo: 'With code: FSCREATION',
    backgroundImage: require('../assets/images/campaign-img2.png'),
  },
  {
    id: 3,
    discount: '20% off',
    title: 'On everything today',
    promo: 'With code: FSCREATION',
    backgroundImage: require('../assets/images/campaign-img1.png'),
  },
];
