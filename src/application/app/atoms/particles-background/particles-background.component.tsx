import { useTheme } from '@mui/material';
import Particles from 'react-tsparticles';

export const ParticlesBackground = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Particles
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 1,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme.palette.grey[500],
          },
          links: {
            color: theme.palette.grey[500],
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1600,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
