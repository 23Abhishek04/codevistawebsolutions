
const categories = [
  {
    name: "Shopify Development",
    icon: "shopify",
    works: [
      { name: "The Nibbles", url: "https://thenibbles.shop/" },
      { name: "Eclat Maison", url: "https://www.eclatmaison.in/" },
      { name: "Drapes Corner", url: "https://drapescorner.com/" },
      { name: "Slaykart", url: "https://slaykart4.myshopify.com/" },
      { name: "Nagpals Wellness & Nutrition", url: "https://nagpalswellnessandnutrition.com/" },
    ],
  },
  {
    name: "WordPress Development",
    icon: "wordpress",
    works: [
      { name: "Branding Nexus", url: "https://brandingnexus.in/brand-that-converts/" },
      { name: "Embassy Worli Citadel", url: "https://embassyworlicitadel.in/" },
      { name: "25 South Prabhadevi", url: "https://25south-prabhadevi.com/" },
      { name: "Gars Lubricants", url: "https://www.garslubricants.com/" },
      { name: "Shakti Agrotech", url: "https://shaktiagrotech.com/" },
      { name: "Axabull", url: "https://axabull.in/" },
      { name: "Racerbull", url: "https://racerbull.com/" },
    ],
  },
  {
    name: "Custom Coded Websites",
    icon: "code",
    works: [
      { name: "Patil Brothers", url: "https://patilbrothers.com/" },
      { name: "SAND Salibaug", url: "https://www.sandsalibaug.co.in/" },
      { name: "Yadav Enterprises", url: "https://yadav-enterprises.vercel.app/" },
    ],
  },
];

function LaptopMockup({ work }) {
  const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/${work.url}`;

  return (
    <div className="mx-auto w-full max-w-[320px] text-[10px] transition-transform duration-500 group-hover:scale-[1.02]">

      {/* Laptop Screen */}
      <div className="rounded-t-[0.9em] border-[0.3em] border-b-0 border-[#1f2124] bg-black p-[2px]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[0.5em] bg-white">

          <img
            src={screenshotUrl}
            alt={`${work.name} website preview`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />

        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative -mx-[4%] h-[0.9em] rounded-b-[1em] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] shadow-sm">
        <div className="absolute left-1/2 top-0 h-[0.3em] w-[16%] -translate-x-1/2 rounded-b bg-[#cbd0d6]" />
      </div>
    </div>
  );
}

function ExternalIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}

function CategoryIcon({ type }) {
  if (type === "shopify") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#95BF47] text-xl font-bold text-white">
        S
      </span>
    );
  }

  if (type === "wordpress") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#21759b] font-serif text-2xl text-white">
        W
      </span>
    );
  }

  return (
    <span className="flex h-9 w-9 items-center justify-center text-[#FF5A0A]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="h-9 w-9"
      >
        <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />
      </svg>
    </span>
  );
}

export default function Work() {
  return (
    <section
      id="works"
      className="w-full bg-[#FAF9F7] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Main Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <span className="h-[3px] w-8 rounded-full bg-[#FF5A0A] sm:w-14" />

            <h2 className="text-3xl font-extrabold text-[#111111] sm:text-4xl md:text-5xl">
              Our <span className="text-[#FF5A0A]">Works</span>
            </h2>

            <span className="h-[3px] w-8 rounded-full bg-[#FF5A0A] sm:w-14" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm text-[#444444] sm:text-base md:text-lg">
            A look at some of the websites we&apos;ve built for businesses.
          </p>
        </div>

        {/* Project Categories */}
        <div className="space-y-12 sm:space-y-14">
          {categories.map((category) => (
            <div key={category.name}>

              {/* Category Heading */}
              <div className="mb-5 flex items-center gap-3">
                <CategoryIcon type={category.icon} />

                <h3 className="text-xl font-extrabold text-[#111111] sm:text-2xl">
                  <span className="text-[#FF5A0A]">
                    {category.name.split(" ")[0]}
                  </span>{" "}
                  {category.name.split(" ").slice(1).join(" ")}
                </h3>

                <div className="ml-auto hidden h-px flex-1 bg-[#e7e3df] sm:block" />
              </div>

              {/* Three Column Project Grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {category.works.map((work, index) => (
                  <a
                    key={work.name}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${work.name} website`}
                    className="group flex flex-col rounded-2xl border border-[#eeece9] bg-[#F1F0EF] px-5 pb-5 pt-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A0A]/30 hover:bg-white hover:shadow-xl sm:px-6"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <LaptopMockup work={work} />

                    <div className="mt-5 flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#111111] transition-colors group-hover:text-[#FF5A0A] sm:text-base">
                        {work.name}
                      </h4>

                      <ExternalIcon className="h-4 w-4 shrink-0 text-[#333333] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF5A0A]" />
                    </div>

                    <p className="mt-1 truncate text-xs text-[#777777]">
                      {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
