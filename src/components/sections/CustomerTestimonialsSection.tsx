import Image from "next/image";

import { customerTestimonials } from "@/src/constants/dataSection";

export default function CustomerTestimonialsSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[22px] font-extrabold leading-8 tracking-tight text-slate-950">
          Khách hàng nói gì về{" "}
          <span className="text-blue-600">Maxv Accounting?</span>
        </h2>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {customerTestimonials.map((testimonial) => (
            <article
              className="flex min-h-[138px] gap-5 rounded-xl border border-slate-200/80 bg-white px-6 py-5 shadow-[0_7px_18px_rgba(15,23,42,0.08)]"
              key={testimonial.name}
            >
              <Image
                className="mt-1 h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-slate-100"
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                loading="lazy"
              />

              <div className="min-w-0">
                <p className="min-h-[52px] text-[13px] font-semibold leading-[22px] text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-4">
                  <h3 className="text-[13px] font-extrabold leading-5 text-slate-950">
                    {testimonial.name}
                  </h3>
                  <p className="text-[12px] font-semibold leading-5 text-slate-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
