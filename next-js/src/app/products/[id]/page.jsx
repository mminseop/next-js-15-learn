export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(`http://localhost:8080/api/products/${id}`);

    console.log("api 호출");
    if (!res.ok) throw new Error("상품 정보를 불러오지 못했습니다");

    const json = await res.json();
    const product = json.data;

    return {
      title: `${product.title} 상세 페이지`,
      description: product.description ?? "상품 상세 페이지",
    };
  } catch (e) {
    console.error(e);
    return {
      title: "상품 상세페이지",
      description: "상품 상세페이지입니다.",
    };
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = params;

  const res = await fetch("http://localhost:8080/api/products");

  if (!res.ok) {
    return <div>상품 정보를 불러오지 못했습니다.</div>;
  }

  const json = await res.json();
  const product = json.data.find((item) => item.id === Number(id));

  if (!product) {
    return <div>상품을 찾을 수 없습니다. (ID: {id})</div>;
  }

  return (
    <div>
      <h3>ProductID: {product.id}</h3>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>가격: {product.price}</p>
      <p>재고: {product.stock}</p>
    </div>
  );
}
