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
    <footer className="w-full bg-[#0A1A2A] text-white">
      <div className="maxv-container px-4 py-12">
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
              Maxx Accounting là phần mềm kế toán online được phát triển dành riêng cho doanh nghiệp vừa và nhỏ dùng, chi phí hợp lý, hỗ trợ 24/7.
            </p>
            <div className="flex gap-2 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/www.maxv.vn?ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e05d2b] text-white transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Zalo */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068ff] text-white transition-opacity hover:opacity-80"
                aria-label="Zalo"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.394c-.075.148-.228.234-.39.234a.452.452 0 0 1-.218-.056c-1.115-.608-2.406-.93-3.737-.93-2.668 0-5.032 1.33-6.393 3.337A.44.44 0 0 1 6.454 19a.437.437 0 0 1-.26-.086.44.44 0 0 1-.094-.614c1.512-2.21 4.118-3.73 7.023-3.73 1.494 0 2.944.368 4.195 1.064a.44.44 0 0 1 .244.56zm1.418-2.992a.549.549 0 0 1-.488.3.544.544 0 0 1-.272-.073c-1.517-.897-3.458-1.39-5.479-1.39-2.113 0-4.13.538-5.682 1.515a.548.548 0 0 1-.76-.172.549.549 0 0 1 .172-.76c1.701-1.069 3.904-1.677 6.27-1.677 2.252 0 4.42.554 6.097 1.56a.55.55 0 0 1 .142.697zm1.35-3.307a.659.659 0 0 1-.59.364.66.66 0 0 1-.329-.088c-1.924-1.094-4.407-1.714-6.998-1.714-2.558 0-5.004.602-6.893 1.696a.659.659 0 0 1-.903-.239.659.659 0 0 1 .239-.903c2.038-1.174 4.69-1.845 7.557-1.845 2.9 0 5.585.69 7.75 1.993a.66.66 0 0 1 .167.736z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a66c2] text-white transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Sản phẩm</h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a className="text-sm text-white/75 hover:text-white transition-colors" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Kiến thức</h3>
            <ul className="space-y-2">
              {knowledgeLinks.map((item) => (
                <li key={item.label}>
                  <a className="text-sm text-white/75 hover:text-white transition-colors" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Công ty</h3>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a className="text-sm text-white/75 hover:text-white transition-colors" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-white/75">1900 6134 (8:00 - 17:30)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white/75">info@maxx.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
                <span className="text-sm text-white/75">maxx.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/75">
                  Tầng 5, Tòa nhà CT1, KĐT Văn Khê, Hà Đông, Hà Nội.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="maxv-container px-4 py-4 text-center text-sm text-white/50">
          © 2026 Maxv.vn - Phần mềm kế toán online. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
