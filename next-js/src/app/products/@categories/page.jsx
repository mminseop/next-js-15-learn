export default async function CategoryPage() {
    // throw new Error("강제로 카테고리 에러 발생");
  const res = await fetch("http://localhost:8080/api/categories");
  
  if (!res.ok) throw new Error("카테고리 데이터를 응답 실패");

  const json = await res.json();
  const categories = json.data;

  return (
    <div className="category-wrap">
      <h3>카테고리</h3>
      <div className="category-item">
        {categories.length > 0 ? (
          categories.map((x) => <div key={x.id}>{x.label}</div>)
        ) : (
          <p>카테고리가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
