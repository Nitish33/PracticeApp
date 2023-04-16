import Images from '../../images/images';

export interface CarInterface {
  brand: string;
  name: string;
  price: string;
  hub: string;
  transmission: string;
  fuel: string;
  id: string;
  registration: string;
  image: ReturnType<typeof require>;
}

const CarData: Array<CarInterface> = [
  {
    brand: 'Audi',
    name: '2015 Audi A3',
    price: '16.90 Lakhs',
    hub: 'Spinny Max Centre - Delhi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    id: '5552401',
    registration: 'UP14',
    image: Images.M5552401,
  },

  {
    brand: 'BMW',
    name: '2022 BMW X3',
    price: '65.50 Lakhs',
    hub: 'Spinny Max Centre - Mumbai',
    transmission: 'Automatic',
    fuel: 'Petrol',
    id: '7383264',
    registration: 'MH03',
    image: Images.M7383264,
  },

  {
    brand: 'Jeep',
    name: '2021 Jeep Compass',
    price: '24.50 Lakhs',
    hub: 'Spinny Max Centre - Mumbai',
    transmission: 'Automatic',
    fuel: 'Petrol',
    id: '7437631',
    registration: 'MH01',
    image: Images.M7437631,
  },

  {
    brand: 'BMW',
    name: '2018 BMW 3 Series GT',
    price: '34.50 Lakhs',
    hub: 'Spinny Max Centre - Mumbai',
    transmission: 'Automatic',
    fuel: 'Diesel',
    id: '7449231',
    registration: 'MH04',
    image: Images.M7449231,
  },

  {
    name: '2019 Volvo XC60',
    brand: 'Volvo',
    price: '51.75 Lakhs',
    hub: 'Spinny Max Centre - Bangalore',
    transmission: 'Automatic',
    fuel: 'Diesel',
    id: '7915227',
    registration: 'KA02',
    image: Images.M7915227,
  },

  {
    brand: 'Jeep',
    name: '2018 Jeep Compass',
    price: '11.90 Lakhs',
    hub: 'Spinny Max Centre - Delhi',
    transmission: 'Manual',
    fuel: 'Petrol',
    id: '7983109',
    registration: 'DL2C',
    image: Images.M7983109,
  },

  {
    brand: 'Mercedes-Benz',
    name: '2019 Mercedes-Benz CLA',
    price: '30.90 Lakhs',
    hub: 'Spinny Max Centre - Mumbai',
    transmission: 'Automatic',
    fuel: 'Petrol',
    id: '8301532',
    registration: 'MH04',
    image: Images.M8301532,
  },

  {
    brand: 'Audi',
    name: '2016 Audi A6',
    price: '24.50 Lakhs',
    hub: 'Spinny Max Centre - Delhi',
    transmission: 'Automatic',
    fuel: 'Petrol',
    id: '8349925',
    registration: 'DL1C',
    image: Images.M8349925,
  },

  {
    brand: 'Jaguar',
    name: '2015 Jaguar XF',
    price: '22.50 Lakhs',
    hub: 'Spinny Max Centre - Bangalore',
    transmission: 'Automatic',
    fuel: 'Diesel',
    id: '8426218',
    registration: 'KA01',
    image: Images.M8426218,
  },
];

export default CarData;
