import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <h2>여기는 Rootlayout</h2>
        <nav>
          <Link href="/">
            <button>홈</button>
          </Link>
          <Link href="/products">
            <button>상품 페이지로 이동</button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
