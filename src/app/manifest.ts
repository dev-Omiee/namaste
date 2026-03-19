import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Namaste Globals',
    short_name: 'Namaste Globals',
    description: 'Premium natural jaggery exporter from Maharashtra, India',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#c9a84c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
  };
}
