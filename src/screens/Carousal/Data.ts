import Images from '../../images/images';

export interface CarousalInterface {
  image: ReturnType<typeof require>;
  title: string;
  desc: string;
  textColor: string;
}

export const CarousalData: Array<CarousalInterface> = [
  {
    image: Images.BlackPanthoor,
    title: 'Black Panthoor',
    desc: 'Black Panthoor',
    textColor: 'white',
  },

  {
    image: Images.BlackWidow,
    title: 'Black Widow',
    desc: 'Black Widow',
    textColor: 'white',
  },

  {
    image: Images.CaptainAmerica,
    title: 'Captain America',
    desc: 'Captain America',
    textColor: 'blue',
  },

  {
    image: Images.CaptainMarvel,
    title: 'Captain Marvel',
    desc: 'Captain Marvel',
    textColor: 'white',
  },

  {
    image: Images.DeadPool,
    title: 'Dead Pool',
    desc: 'Dead Pool',
    textColor: 'white',
  },

  {
    image: Images.Groot,
    title: 'Groot',
    desc: 'Groot',
    textColor: 'black',
  },

  {
    image: Images.IronMan,
    title: 'Iron man',
    desc: 'Iron man',
    textColor: 'white',
  },

  {
    image: Images.MoonNight,
    title: 'Moon Night',
    desc: 'Moon Night',
    textColor: 'red',
  },

  {
    image: Images.ShangChi,
    title: 'Shang Chi',
    desc: 'Shang Chi',
    textColor: 'black',
  },

  {
    image: Images.Spiderman,
    title: 'Spiderman',
    desc: 'Spiderman',
    textColor: 'white',
  },
];
