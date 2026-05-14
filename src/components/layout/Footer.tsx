import Image from "next/image";

const productLinks = [
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Bảng giá", href: "#bao-gia" },
  { label: "Dùng thử miễn phí", href: "#dang-ky" },
  { label: "Hướng dẫn sử dụng", href: "#" },
];

const knowledgeLinks = [
  { label: "Tin tức", href: "#tin-tuc" },
  { label: "Kiến thức kế toán", href: "#kien-thuc-ke-toan" },
  { label: "Hỏi đáp", href: "#" },
];

const companyLinks = [
  { label: "Giới thiệu", href: "#" },
  { label: "Liên hệ", href: "#" },
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Điều khoản sử dụng", href: "#" },
];

function Footer() {
  return (
    <footer className="w-full bg-[#0A1A2A] text-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image
              src="https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png"
              alt="MAXV"
              className="h-auto w-auto"
              width={150}
              height={60}
            />
            <p className="text-xs text-white/75 leading-relaxed">
              Maxv Accounting là phần mềm kế toán online được phát triển dành
              riêng cho doanh nghiệp vừa và nhỏ dùng, chi phí hợp lý, hỗ trợ
              24/7.
            </p>
            <div className="flex gap-2 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/www.maxv.vn?ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@PhanMemKeToanMaxv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000] text-white transition-opacity hover:opacity-80"
                aria-label="YouTube"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Tik tok */}
              <a
                href="https://www.tiktok.com/@maxv.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-[#202020]"
                aria-label="TikTok"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.321 5.562a5.122 5.122 0 0 1-3.117-1.03A5.145 5.145 0 0 1 14.333.93h-3.172v13.823a2.927 2.927 0 1 1-2.006-2.78V8.744a6.104 6.104 0 1 0 5.178 6.03V7.763a8.275 8.275 0 0 0 4.988 1.62V5.562z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Sản phẩm
            </h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-sm text-white/75 hover:text-white transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Kiến thức
            </h3>
            <ul className="space-y-2">
              {knowledgeLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-sm text-white/75 hover:text-white transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Công ty
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-sm text-white/75 hover:text-white transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-white/75">
                  0382 325 225 (8:30 - 17:30)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-white/75">
                  SoftMaxv@gmail.com
                </span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-white/75">
                  Tầng 2, số 180 phố Hoàng Ngân, Phường Yên Hòa, Thành phố Hà Nội, Việt Nam.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1180px] py-4 text-center text-sm text-white/50">
          © 2026 Maxv.vn - Phần mềm kế toán online. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
