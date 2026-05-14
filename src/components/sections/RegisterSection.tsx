import Image from "next/image";

import { Button } from "@/src/components/ui/button";

const bannerImage =
  "https://maxv.vn/wp-content/uploads/2024/10/Laptop-Phan-mem-ke-toan-Maxv-Accounting-ket-noi-tong-cuc-thue-01.png";

export default function RegisterSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0067e8] py-5 px-4 sm:px-6 lg:px-8"
      id="dang-ky"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0062dc_0%,#0078ff_48%,#0069e6_100%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_55%_45%,rgba(255,255,255,0.22),transparent_38%)]" />

      <div className="relative mx-auto max-w-[1180px] grid items-center gap-5 md:grid-cols-[1fr_430px]">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-extrabold leading-8 text-white sm:text-2xl">
            Bắt đầu chuyển đổi số kế toán cùng Maxv ngay hôm nay!
          </h2>
          <p className="mt-2 text-sm font-medium text-blue-100 sm:text-base">
            Trải nghiệm miễn phí 15 ngày - Không cần thẻ tín dụng
          </p>

          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button
              className="h-10 min-w-40 rounded-lg bg-orange-500 px-6 text-sm font-bold text-white shadow-[0_8px_18px_rgba(249,115,22,0.28)] hover:bg-orange-600"
              asChild
            >
              <a href="#dang-ky">Dùng thử miễn phí</a>
            </Button>
            <Button
              className="h-10 min-w-40 rounded-lg border border-white/45 bg-white/5 px-6 text-sm font-bold text-white hover:bg-white/15"
              variant="outline"
              asChild
            >
              <a href="#lien-he">Nhận tư vấn 1-1</a>
            </Button>
          </div>
        </div>

        <div className="relative hidden h-28 items-center justify-end md:flex">
          
          <div className="absolute right-8 top-1 h-9 w-9 rounded-full border-4 border-white/45" />
          <div className="absolute right-0 bottom-3 h-8 w-10 rounded-md border-4 border-white/45" />
          <Image
            className="relative z-10 h-[118px] w-auto object-contain drop-shadow-[0_12px_22px_rgba(0,32,88,0.3)]"
            src={bannerImage}
            alt="Giao diện phần mềm kế toán Maxv Accounting trên laptop và điện thoại"
            width={430}
            height={164}
            priority
          />
        </div>
      </div>
    </section>
  );
}
