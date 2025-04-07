export function deepEquals<T>(objA: T, objB: T): boolean {
  // 참조가 같을 떄 >>> 기본 타입이거나 null인 경우
  if (objA === objB) {
    return true;
  }

  // 둘 중 하나라도 객체일 경우 >>> 기본 타입이거나 null인 경우
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // 배열여부 확인
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);
  if (isArrayA !== isArrayB) {
    return false;
  }

  if (isArrayA && isArrayB) {
    const arrA = objA as unknown[];
    const arrB = objB as unknown[];

    // 배열일 경우, 길이가 다르면 false
    if (arrA.length !== arrB.length) {
      return false;
    }

    return arrA.every((item, i) => deepEquals(item, arrB[i]));
  }

  const keysA = Object.keys(objA as object);
  const keysB = Object.keys(objB as object);

  // 객체의 키 개수가 다른 경우우
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 각각에 deepEquals 재귀적으로 호출
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    const a = (objA as Record<string, unknown>)[key];
    const b = (objB as Record<string, unknown>)[key];
    if (!deepEquals(a, b)) return false;
  }

  return true;
}
