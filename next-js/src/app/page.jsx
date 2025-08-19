import fs from "fs";

export default function Home() {
  const fullPath = process.cwd();

  const layoutPath = `${fullPath}/app/layout.jsx`;
  const pagePath = `${fullPath}/app/page.jsx`;
  // projectRoot 폴더 내 모든 파일/폴더 목록 (1 depth)
  const allFiles = fs.readdirSync(fullPath);

  return (
    <>
      <p>여기는 page</p>
      <p>layout.jsx 경로: {layoutPath}</p>
      <p>page.jsx 경로: {pagePath}</p>
      {allFiles.map((x) => {
        return <div key={x}>{x}</div>;
      })}
    </>
  );
}
