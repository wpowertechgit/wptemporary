import { Box } from '@mui/material'

export default function SectionShapes() {
  return (
    <>
      {/* --- Decorative Shapes --- */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderRight: '65vw solid transparent',
          borderTop: `30vh solid var(--section-triangle)`,
          zIndex: 0,
          transition: 'all 0.5s ease',
          '&:hover': {
            borderTopColor: 'var(--section-triangle-hover)',
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)',
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderLeft: '65vw solid transparent',
          borderBottom: `25vh solid var(--section-triangle)`,
          zIndex: 0,
          transition: 'all 0.5s ease',
          '&:hover': {
            borderBottomColor: 'var(--section-triangle-hover)',
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)',
          },
        }}
      />

      {/* --- Accent lines – top-left --- */}
      <Box
        sx={{
          position: 'absolute',
          top: '5vh',
          left: '3vw',
          width: '45%',
          height: '2px',
          background: `
            linear-gradient(
              90deg,
              var(--section-accent-start) 0%,
              var(--section-accent-end) 100%
            )
          `,
          transform: 'rotate(-10deg)',
          zIndex: 1,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            background: `
              linear-gradient(
                90deg,
                var(--section-accent-start) 0%,
                var(--section-accent-end) 100%
              )
            `,
          },
          '&::before': { top: '8px' },
          '&::after': { top: '16px' },
        }}
      />

      {/* --- Accent lines – bottom-right --- */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '4vh',
          right: '3vw',
          width: '45%',
          height: '2px',
          background: `
            linear-gradient(
              90deg,
              var(--section-accent-end) 0%,
              var(--section-accent-start) 100%
            )
          `,
          transform: 'rotate(-10deg)',
          zIndex: 1,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            background: `
            linear-gradient(
              90deg,
              var(--section-accent-end) 0%,
              var(--section-accent-start) 100%
            )
          `,
          },
          '&::before': { top: '8px' },
          '&::after': { top: '16px' },
        }}
      />
    </>
  )
}
