export const WaveForm = () => {
  const bars = [
    {x: 0, y: 24, height: 16, opacity: 0.3, delay: '0s'},
    {x: 14, y: 16, height: 32, opacity: 0.4, delay: '0.1s'},
    {x: 28, y: 25, height: 16, opacity: 0.6, delay: '0.2s'},
    {x: 42, y: 12, height: 40, opacity: 0.8, delay: '0.3s'},
    {x: 56, y: 20, height: 24, opacity: 0.5, delay: '0.4s'},
    {x: 70, y: 12, height: 40, opacity: 1, delay: '0.5s'},
    {x: 84, y: 20, height: 24, opacity: 0.9, delay: '0.4s'},
    {x: 98, y: 10, height: 44, opacity: 0.7, delay: '0.3s'},
    {x: 112, y: 22, height: 20, opacity: 0.4, delay: '0.2s'},
    {x: 126, y: 12, height: 38, opacity: 0.6, delay: '0.1s'},
    {x: 140, y: 20, height: 24, opacity: 1, delay: '0s'},
    {x: 154, y: 18, height: 28, opacity: 0.5, delay: '0.1s'},
    {x: 168, y: 12, height: 40, opacity: 0.8, delay: '0.2s'},
    {x: 182, y: 24, height: 16, opacity: 0.3, delay: '0.3s'},
  ];

  return (
    <svg width='188' height='64' viewBox='0 0 188 64' fill='none'>
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={bar.y}
          width='6'
          height={bar.height}
          rx='3'
          fill='#485422'
          fillOpacity={bar.opacity}
          style={{
            transformOrigin: `${bar.x + 3}px 32px`,
            animation: `wave 1s ease-in-out ${bar.delay} infinite`,
          }}
        />
      ))}
    </svg>
  );
};
