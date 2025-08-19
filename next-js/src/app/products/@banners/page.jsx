export default async function BannerPage() {
  const res = await fetch("http://localhost:8080/api/banners");

  if (!res.ok) throw new Error("배너 데이터 응답 실패");
  
  const json = await res.json();
  const banners = json.data;

  return (
    <div className="banner-wrap">
      <h3>배너</h3>
      {banners.length > 0 ? (
        <div className="banner-list">
          {banners.map((x) => (
            <div key={x.id} className="banner-item">
              <img src={x.imgSrc} alt={x.title} className="banner-img" />
              <p className="banner-title">{x.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>배너가 없습니다.</p>
      )}
    </div>
  );
}
