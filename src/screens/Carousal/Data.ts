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
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.CaptainAmerica,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.CaptainMarvel,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.DeadPool,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.Groot,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.IronMan,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.MoonNight,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.ShangChi,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },

  {
    image: Images.Spiderman,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
  },
];
