import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { trustedByLogos } from "@/src/constants/dataSection";

export default function TrustedCompaniesSection() {
  return (
    <section className="w-full border-y border-slate-100 bg-white" id="doi-tac">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-bold text-slate-950">
          Được tin dùng bởi doanh nghiệp trên toàn quốc
        </h2>

        <div className="mt-5 flex items-center gap-4">
          <button
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition hover:border-blue-200 hover:text-blue-600 sm:flex"
            type="button"
            aria-label="Xem đối tác trước"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="grid min-w-0 flex-1 grid-cols-2 items-center gap-x-8 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">
            {trustedByLogos.map((logo) => (
              <div
                className="flex h-10 items-center justify-center px-2"
                key={logo.name}
              >
                <Image
                  className="max-h-9 w-auto max-w-full object-contain opacity-55 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={56}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition hover:border-blue-200 hover:text-blue-600 sm:flex"
            type="button"
            aria-label="Xem đối tác tiếp theo"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
