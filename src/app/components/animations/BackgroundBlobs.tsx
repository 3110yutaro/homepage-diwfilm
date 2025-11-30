export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 opacity-70"></div>
<div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-50 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-50 animate-blob [animation-delay:2s]"></div>
<div className="absolute -bottom-32 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-50 animate-blob [animation-delay:4s]"></div>
    </div>
  );
}
