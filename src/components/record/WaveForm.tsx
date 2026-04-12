/* isPlaying이 true일 때 애니메이션 재생, false일 때 정지 */
export const WaveForm = ({isPlaying}: {isPlaying: boolean}) => {
  const bars = [
    {x: 116, y: 32, height: 32, opacity: 0.2, delay: '0s'},
    {x: 126, y: 24, height: 48, opacity: 0.4, delay: '0.1s'},
    {x: 136, y: 16, height: 64, opacity: 0.6, delay: '0.2s'},
    {x: 146, y: 8, height: 80, opacity: 0.8, delay: '0.3s'},
    {x: 156, y: 20, height: 56, opacity: 1, delay: '0.4s'},
    {x: 166, y: 0, height: 96, opacity: 1, delay: '0.5s'},
    {x: 176, y: 16, height: 64, opacity: 0.8, delay: '0.4s'},
    {x: 186, y: 24, height: 48, opacity: 0.6, delay: '0.3s'},
    {x: 196, y: 28, height: 40, opacity: 0.4, delay: '0.2s'},
    {x: 206, y: 36, height: 24, opacity: 0.2, delay: '0.1s'},
  ];

  return (
    <svg width='326' height='96' viewBox='0 0 326 96' fill='none'>
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={bar.y}
          width='4'
          height={bar.height}
          rx='2'
          fill='#485422'
          fillOpacity={bar.opacity}
          style={{
            transformOrigin: `${bar.x + 2}px 48px`,
            animation: isPlaying
              ? `wave 1s ease-in-out ${bar.delay} infinite`
              : 'none',
          }}
        />
      ))}
    </svg>
  );
};
