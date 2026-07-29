export function SplashScreen() {
  const boxes = [0, 1, 2, 3, 4];
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-row splash-row-top">
        {boxes.map((i) => (
          <div key={`t-${i}`} className="splash-box" />
        ))}
      </div>
      <div className="splash-row splash-row-bottom">
        {boxes.map((i) => (
          <div key={`b-${i}`} className="splash-box" />
        ))}
      </div>
    </div>
  );
}
