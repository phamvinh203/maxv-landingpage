import {
  BadgeCheck,
  BadgeDollarSign,
  BookOpenCheck,
  CircleDollarSign,
  FileChartColumn,
  FileLock2,
  Landmark,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Warehouse,
  Workflow,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { featuredModules } from "@/src/constants/dataSection";

const iconMap = {
  FileLock2,
  BookOpenCheck,
  BadgeDollarSign,
  CircleDollarSign,
  FileChartColumn,
  ShoppingCart,
  Warehouse,
  Settings2,
  ShieldCheck,
  Landmark,
  BadgeCheck,
  Workflow,
};

export default function FeaturesSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-3 sm:px-6 lg:px-8" id="tinh-nang">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center text-[24px] font-extrabold leading-8 tracking-tight text-slate-950">
          Tính năng nổi bật
        </h2>

        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {featuredModules.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];

              return (
                <article
                  className="flex min-h-[92px] gap-4 border-b border-r border-slate-200 px-5 py-4 last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
                  key={feature.title}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                    <Icon className="h-7 w-7 stroke-[1.9]" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[13px] font-extrabold leading-5 text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[12px] font-semibold leading-5 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}
