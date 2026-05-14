import {
  Camera,
  ChartNoAxesCombined,
  FileCheck2,
  FileCog,
  ShieldCheck,
} from "lucide-react";

import { accountingSolutions } from "@/src/constants/dataSection";

const iconMap = {
  FileCog,
  FileCheck2,
  Camera,
  ChartNoAxesCombined,
  ShieldCheck,
};

export default function SolutionsSection() {
  return (
    <section className="bg-white px-4 pb-9 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[22px] font-bold leading-8 tracking-tight text-slate-950">
          <span className="text-blue-600">Maxv Accounting</span> - Giải pháp
          toàn diện cho doanh nghiệp
        </h2>

        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {accountingSolutions.map((solution) => {
            const Icon = iconMap[solution.icon as keyof typeof iconMap];

            return (
              <article className="flex items-start gap-4" key={solution.title}>
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-blue-600">
                  <Icon className="h-8 w-8 stroke-[1.9]" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-[13px] font-extrabold leading-5 text-slate-950">
                    {solution.title}
                  </h3>
                  <p className="mt-1 text-[12px] font-semibold leading-5 text-slate-600">
                    {solution.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
