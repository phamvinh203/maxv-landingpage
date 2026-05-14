import {
  CircleDollarSign,
  ClipboardList,
  MonitorCog,
  RefreshCcwDot,
  ShieldCheck,
} from "lucide-react";

import { businessProblems } from "@/src/constants/dataSection";

const iconMap = {
  CircleDollarSign,
  RefreshCcwDot,
  ClipboardList,
  MonitorCog,
  ShieldCheck,
};

export default function ProblemsSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[22px] font-extrabold leading-8 tracking-tight text-slate-950">
          Doanh nghiệp đang{" "}
          <span className="text-blue-600">gặp phải những vấn đề</span> này?
        </h2>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {businessProblems.map((problem) => {
            const Icon = iconMap[problem.icon as keyof typeof iconMap];

            return (
              <article
                className="flex min-h-[150px] flex-col items-center justify-start rounded-xl border border-slate-200 bg-white px-5 py-5 text-center shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
                key={problem.title}
              >
                <div className="flex h-12 w-12 items-center justify-center text-blue-600">
                  <Icon className="h-11 w-11 stroke-[1.8]" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-[13px] font-extrabold leading-5 text-slate-950">
                  {problem.title}
                </h3>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-slate-600">
                  {problem.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
