import Images from '../../images/images';

export interface CarousalInterface {
  image: ReturnType<typeof require>;
  title: string;
  desc: string;
}

export const CarousalData: Array<CarousalInterface> = [
  {
    image: Images.BlackPanthoor,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.BlackWidow,
    title: 'Black Widow',
    desc: 'Black Widow',
  },

  {
    image: Images.CaptainAmerica,
    title: 'Captain America',
    desc: 'Captain America',
  },

  {
    image: Images.CaptainMarvel,
    title: 'Captain Marvel',
    desc: 'Captain Marvel',
  },

  {
    image: Images.DeadPool,
    title: 'Dead Pool',
    desc: 'Dead Pool',
  },

  {
    image: Images.Groot,
    title: 'Groot',
    desc: 'Groot',
  },

  {
    image: Images.IronMan,
    title: 'Iron man',
    desc: 'Iron man',
  },

  {
    image: Images.MoonNight,
    title: 'Moon Night',
    desc: 'Moon Night',
  },

  {
    image: Images.ShangChi,
    title: 'Shang Chi',
    desc: 'Shang Chi',
  },

  {
    image: Images.Spiderman,
    title: 'Spiderman',
    desc: 'Spiderman',
  },
];
