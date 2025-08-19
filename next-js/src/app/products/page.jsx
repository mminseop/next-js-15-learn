import Link from "next/link";

export const metadata = {
  title: "오즈 상품 리스트",
  description: "오즈 상품리스트 페이지입니다",
};

export default async function ProductsPage() {
  //   throw new Error("강제로 에러 발생");

  let products = [];

  try {
    const res = await fetch("http://localhost:8080/api/products");

    if (!res.ok) throw new Error("상품 리스트를 불러오지 못했습니다.");

    const json = await res.json();
    products = json.data;
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <div>
        <h3>상품리스트</h3>
        {products.length > 0 ? (
          products.map((x) => (
            <div key={x.id}>
              <Link href={`/products/${x.id}`}>
                {x.title} ({x.id})
              </Link>
            </div>
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </div>
    </>
  );
}
