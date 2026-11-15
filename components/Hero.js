import Link from "next/link";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MiniLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 10 L5 24 L19 38" stroke="#FF5A0A" />
      <path d="M29 10 L43 24 L29 38" stroke="#ffffff" />
    </svg>
  );
}

/* Building-like glass facade used inside both screens */
function Facade({ className = "", style }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        background:
          "repeating-linear-gradient(90deg, rgba(255,160,40,0.95) 0 6%, rgba(40,30,25,0.9) 6% 8%), linear-gradient(180deg,#ffb347,#c2410c)",
        clipPath: "polygon(18% 0, 100% 12%, 100% 100%, 0 100%, 0 22%)",
        ...style,
      }}
    />
  );
}

function DeviceMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[560px]"
      style={{ fontSize: "clamp(8px, 2.3vw, 14px)" }}
    >
      <div className="relative aspect-[1.18/1] w-full">
        {/* Laptop */}
        <div className="absolute left-0 top-[6%] w-[90%]">
          <div className="rounded-t-[1.2em] border-[0.45em] border-b-0 border-[#c9ccd1] bg-[#0f1318] shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-t-[0.6em] bg-gradient-to-br from-[#12161c] to-[#1d232c]">
              {/* nav */}
              <div className="absolute left-[6%] right-[6%] top-[6%] flex items-center justify-between">
                <MiniLogo className="h-[2em] w-[2em]" />
                <div className="flex gap-[1.4em] text-[0.55em] text-gray-200">
                  <span>Home</span>
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>
              <Facade className="bottom-0 right-0 h-[72%] w-[48%]" />
              {/* copy */}
              <div className="absolute left-[7%] top-[32%] w-[55%]">
                <p className="text-[1.9em] font-extrabold italic leading-tight text-white">Grow Your</p>
                <p className="text-[1.9em] font-extrabold italic leading-tight text-[#FF6A13]">
                  Business Online
                </p>
                <p className="mt-[0.7em] text-[0.6em] text-gray-200">
                  Professional · Modern · Responsive
                </p>
                <span className="mt-[1.2em] inline-block rounded-[0.4em] bg-[#FF5A0A] px-[1.2em] py-[0.5em] text-[0.6em] font-semibold text-white">
                  Get Started
                </span>
              </div>
            </div>
          </div>
          {/* base */}
          <div className="relative -mx-[4%] h-[1em] rounded-b-[1em] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] shadow-lg">
            <div className="absolute left-1/2 top-0 h-[0.35em] w-[16%] -translate-x-1/2 rounded-b-md bg-[#cbd0d6]" />
          </div>
        </div>

        {/* Phone */}
        <div className="absolute bottom-[2%] right-0 w-[25%] rotate-[1deg]">
          <div className="aspect-[9/19] overflow-hidden rounded-[1.6em] border-[0.35em] border-[#20242b] bg-[#12161c] shadow-2xl ring-1 ring-gray-400/40">
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-[2%] h-[0.7em] w-[35%] -translate-x-1/2 rounded-full bg-black" />
              <div className="absolute left-[10%] right-[10%] top-[8%] flex items-center justify-between">
                <MiniLogo className="h-[1.3em] w-[1.3em]" />
                <span className="text-[0.7em] text-white">≡</span>
              </div>
              <Facade className="bottom-0 right-0 h-[38%] w-[75%]" />
              <div className="absolute left-[10%] top-[24%] w-[85%]">
                <p className="text-[1.1em] font-extrabold leading-tight text-white">Grow</p>
                <p className="text-[1.1em] font-extrabold leading-tight text-white">Your</p>
                <p className="text-[1.1em] font-extrabold leading-tight text-white">Business</p>
                <p className="text-[1.1em] font-extrabold leading-tight text-[#FF6A13]">Online</p>
                <p className="mt-[0.5em] text-[0.45em] text-gray-300">Professional · Modern</p>
                <span className="mt-[0.9em] inline-block rounded-[0.3em] bg-[#FF5A0A] px-[0.9em] py-[0.35em] text-[0.45em] font-semibold text-white">
                  Get Started
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF9]">
      {/* Background shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[#FF9A1F] to-[#FF5A0A] sm:h-[360px] sm:w-[360px] lg:-right-16 lg:-top-20 lg:h-[560px] lg:w-[560px]" />
      <div className="pointer-events-none absolute -bottom-40 left-[30%] h-[420px] w-[420px] rounded-full bg-[#FFE9DD]/70 lg:h-[560px] lg:w-[560px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#FFE1D0]/80" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-24">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl md:text-6xl xl:text-7xl">
            Take Your
            <br />
            <span className="relative inline-block text-[#FF5A0A]">
              Business Online
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-[8%] h-3 w-[60%] sm:h-4"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 14 C 60 2, 160 2, 298 8" stroke="#FF5A0A" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-[#2a2a2a] sm:text-lg md:max-w-lg md:text-xl lg:mx-0">
            Get a modern, professional and responsive website for your business.
          </p>

          <Link
            href="https://wa.me/919096405319"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF7A18] to-[#FF5A0A] px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_25px_rgba(255,90,10,0.35)] transition hover:scale-[1.03] sm:px-9 sm:py-4 sm:text-lg"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Start a Project
          </Link>
        </div>

        {/* Devices */}
        <DeviceMockup />
      </div>
    </section>
  );
}