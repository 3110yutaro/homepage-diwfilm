export function RotatingVisionText() {
  const text = "OUR VISION OUR VISION OUR VISION ";
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-32 h-32 animate-spin-slow">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d={`
              M 60, 60
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
          />
        </defs>
        <text>
          <textPath href="#circlePath" startOffset="0" className="text-sm font-semibold tracking-widest fill-current text-cyan-700">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
