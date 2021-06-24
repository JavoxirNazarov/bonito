import {strings} from '../../Constants/localization';
import sampi from './sampi.jpg';
import lokomotiv from './lokomotiv.jpg';
import sergeli from './sergeli.jpg';
import chilonzor from './chilonzor.jpg';
import shahristanskiy from './shahristanskiy.jpg';

export const mapImages = [
  {
    image: chilonzor,
    name: () => strings.MAPS.CHILONZOR,
    location: 'https://goo.gl/maps/Uv7Z5wz6qacMZ56d9',
  },
  {
    image: sergeli,
    name: () => strings.MAPS.SERGELI,
    location: 'https://goo.gl/maps/vXcs1N5AXf6iHysRA',
  },
  {
    image: lokomotiv,
    name: () => strings.MAPS.LOKOMOTIV,
    location: 'https://goo.gl/maps/Kmc71GSfEfeoYbUs6',
  },
  {
    image: shahristanskiy,
    name: () => strings.MAPS.SHAHRISTANSKIY,
    location: 'https://goo.gl/maps/cgCwLKGq89Pj8kvP9',
  },
  {
    image: sampi,
    name: () => strings.MAPS.SAMPI,
    location: 'https://goo.gl/maps/yVS44f4bZLg6eAGm8',
  },
];
