import { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../app/types/place';

import japanImg from '../../assets/images/japan.jpg';

const places: IPlace[] = [
  {
    slug: 'tokyo',
    description: 'japan city',
    imagePath: japanImg.src,
    location: 'Japan',
    raiting: 5,
    duration: '10 days',
    distance: 10465,
    googleMapLink: 'map/link',
    mapImage: 'map/imageMap'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}