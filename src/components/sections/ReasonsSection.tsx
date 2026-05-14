import { CheckCircle2 } from "lucide-react";

import { Button } from "@/src/components/ui/button";

const demoHighlights = [
  "Giao diện đơn giản, dễ sử dụng",
  "Đầy đủ nghiệp vụ kế toán",
  "Báo cáo đa dạng, trực quan",
  "Tiết kiệm 70% thời gian kế toán",
];

export default function ReasonsSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] rounded-xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 px-6 py-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="overflow-hidden rounded-xl bg-slate-900 shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/DcRmx9KwS0w"
                title="Trải nghiệm phần mềm kế toán online Maxx Accounting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950">
              Trải nghiệm{" "}
              <span className="text-blue-600">Maxx Accounting</span>
              <br />
              trong 3 phút
            </h2>

            <ul className="mt-7 space-y-4">
              {demoHighlights.map((item) => (
                <li
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  key={item}
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 fill-blue-600 text-white"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              className="mt-7 h-11 rounded-lg bg-blue-600 px-8 text-sm font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.28)] hover:bg-blue-700"
              asChild
            >
              <a href="https://www.youtube.com/watch?v=DcRmx9KwS0w" target="_blank" rel="noreferrer">
                Xem demo ngay
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
