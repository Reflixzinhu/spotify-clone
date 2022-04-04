// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  title: string;
  channel: string;
  views: string;
  date: string;
  avatar: string;
  thumb: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    id: sexo,
    title: 'Elden Ring: Começando bem',
    channel: 'Filipe Ramos',
    views: '385 mil visualizações',
    date: 'há 2 semana',
    avatar: `path/filipeRamos.jpg`,
    thumb: `path1.jpg`,
  });
}

const sexo = 0;
