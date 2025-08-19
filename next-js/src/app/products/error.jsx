"use client";

export default function Error({ error }) {
  return (
    <div>
      <h2>에러 발생!</h2>
      {/* nullish */}
      <p>{error.message ?? "에러가 발생했습니다."}</p> 
    </div>
  );
}
