import Link from "next/link";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#F6F5F4]">
      {/* Orange corner blobs */}
      <div className="pointer-events-none absolute -left-[12%] top-4 h-32 w-[40%] rounded-full bg-gradient-to-br from-[#FF8A1F] to-[#FF5A0A] sm:h-40 md:-left-[6%] md:top-2 md:h-48 md:w-[28%]" />
      <div className="pointer-events-none absolute -right-[12%] top-8 h-32 w-[40%] rounded-full bg-gradient-to-bl from-[#FF8A1F] to-[#FF5A0A] sm:h-40 md:-right-[6%] md:top-6 md:h-48 md:w-[28%]" />

      {/* Dark curved panel */}
      <div
        className="relative z-10 mt-8 bg-[#161A20] px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-16 sm:pt-16 md:mt-6 md:pb-20 md:pt-20"
        style={{ borderRadius: "50% 50% 0 0 / clamp(30px, 7vw, 90px) clamp(30px, 7vw, 90px) 0 0" }}
      >
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Have a <span className="text-[#FF5A0A]">Project</span> in Mind?
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-gray-200 sm:mt-4 sm:text-base md:max-w-none md:text-lg">
          Let&apos;s build something great for your business.
        </p>

        <Link
          href="https://wa.me/919096405319"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#2FD14A] to-[#12A82C] px-5 py-3 text-white shadow-[0_8px_24px_rgba(18,168,44,0.35)] ring-1 ring-white/10 transition hover:scale-[1.03] sm:mt-10 sm:gap-4 sm:px-7 sm:py-4 md:px-9"
        >
          <WhatsAppIcon className="h-9 w-9 sm:h-11 sm:w-11" />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-xs font-medium sm:text-sm">Message Us on</span>
            <span className="text-xl font-bold sm:text-2xl">WhatsApp</span>
          </span>
          <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#12A82C] transition group-hover:translate-x-1 sm:ml-3 sm:h-10 sm:w-10">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </footer>
  );
}