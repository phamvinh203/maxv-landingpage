import { Clock, Headphones, PhoneCall, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { Button } from "@/src/components/ui/button";

const heroImage =
  "https://maxv.vn/wp-content/uploads/2024/10/Laptop-Phan-mem-ke-toan-Maxv-Accounting-ket-noi-tong-cuc-thue-01.png";

const heroStats = [
  {
    label: "2.500+",
    description: "Doanh nghiệp tin dùng",
    icon: PhoneCall,
  },
  {
    label: "Kết nối",
    description: "Tổng cục Thuế",
    icon: Clock,
  },
  {
    label: "Hỗ trợ",
    description: "T2 - T7, 8:30 - 17:30",
    icon: Headphones,
  },
  {
    label: "Bảo mật",
    description: "An toàn tuyệt đối",
    icon: ShieldCheck,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/45 to-white px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-extrabold uppercase tracking-tight text-blue-600">
            Phần mềm kế toán online #1 cho doanh nghiệp Việt
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Phần mềm kế toán online{" "}
            <span className="text-blue-600">Maxv Accounting</span>
          </h1>

          <p className="mt-5 text-base font-medium leading-7 text-slate-600">
            Giải pháp kế toán toàn diện cho doanh nghiệp vừa và nhỏ. Tự động hóa
            hóa đơn, báo cáo thuế, quản lý tài chính hiệu quả — mọi lúc, mọi nơi
            trên nền tảng điện toán đám mây.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {heroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div className="flex items-center gap-3" key={stat.label}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Icon
                      className="h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-blue-600">
                      {stat.label}
                    </p>
                    <p className="text-xs text-slate-500 leading-4">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="h-11 min-w-44 rounded-lg bg-blue-600 px-7 text-sm font-bold text-white shadow-[0_8px_16px_rgba(37,99,235,0.25)] hover:bg-blue-700"
              asChild
            >
              <a href="#dang-ky">Dùng thử miễn phí</a>
            </Button>
            <Button
              className="h-11 min-w-44 rounded-lg border border-slate-300 bg-white px-7 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50"
              variant="outline"
              asChild
            >
              <a href="#demo">Xem demo 3 phút</a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[460px]">
          <div className="absolute right-0 top-0 h-full w-full rounded-[48px] bg-blue-100/70" />
          <Image
            className="relative z-10 ml-auto h-auto w-full max-w-[620px] object-contain drop-shadow-[0_20px_32px_rgba(15,23,42,0.15)]"
            src={heroImage}
            alt="Giao diện phần mềm kế toán online Maxv Accounting trên laptop và điện thoại"
            width={760}
            height={580}
            priority
          />
        </div>
      </div>
    </section>
  );
}
