import { API_URL } from "../../../../constants"; // API_URL 경로에 맞게 수정해야 합니다.

export async function getCredits(id) {
  const res = await fetch(`${API_URL}/${id}/credits`);
  return await res.json();
}

// 아래 params 중괄호 문제
// { params }는 주어진 객체 { params: { id: '823464' }, searchParams: {} }에서 params라는 속성을 구조 분해하여 추출합니다. 따라서 params 변수는 { id: '823464' }와 같은 객체가 됩니다.
export default async function Credits({ params }) {
  const { id } = params;
  console.log(params);
  const credit = await getCredits(id);

  return (
    <div>
      <p>{JSON.stringify(credit)}</p>
    </div>
  );
}
