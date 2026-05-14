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
    description: "Từ T2.3 à T7.00",
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
      <div className="absolute right-0 top-10 hidden h-[480px] w-[360px] rounded-l-[120px] bg-blue-100/70 lg:block" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-extrabold uppercase tracking-tight text-blue-600">
            Phần mềm kế toán online #1 cho doanh nghiệp Việt
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Phần mềm kế toán online{" "}
            <span className="text-blue-600">Maxx Accounting</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-slate-700">
            Giải pháp kế toán toàn diện cho doanh nghiệp vừa và nhỏ. Tự động hóa
            hóa đơn, báo cáo thuế, quản lý tài chính hiệu quả - mọi lúc, mọi nơi
            trên nền tảng điện toán đám mây.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div className="flex items-center gap-3" key={stat.label}>
                  <Icon className="h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
                  <div>
                    <p className="text-lg font-extrabold leading-5 text-blue-600">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs font-bold leading-4 text-slate-600">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              className="h-12 min-w-44 rounded-lg bg-blue-600 px-8 text-sm font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.25)] hover:bg-blue-700"
              asChild
            >
              <a href="#dang-ky">Dùng thử miễn phí</a>
            </Button>
            <Button
              className="h-12 min-w-44 rounded-lg border border-slate-300 bg-white px-8 text-sm font-bold text-slate-950 shadow-sm hover:bg-slate-50"
              variant="outline"
              asChild
            >
              <a href="#demo">Xem demo 3 phút</a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[470px]">
          <div className="absolute right-0 top-0 h-full w-full rounded-[56px] bg-blue-100/70" />
          <Image
            className="relative z-10 ml-auto h-auto w-full max-w-[670px] object-contain drop-shadow-[0_24px_36px_rgba(15,23,42,0.18)]"
            src={heroImage}
            alt="Giao diện phần mềm kế toán online Maxx Accounting trên laptop và điện thoại"
            width={760}
            height={580}
            priority
          />

          {/* <div className="absolute bottom-12 left-2 z-20 w-64 rounded-xl bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.16)] sm:left-8">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Doanh thu tháng 5</span>
              <span className="text-slate-400">↗</span>
            </div>
            <p className="mt-3 text-2xl font-extrabold text-slate-950">
              2.741.250.000
            </p>
            <p className="mt-2 text-sm font-extrabold text-emerald-500">
              +12,5% so với tháng trước
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
