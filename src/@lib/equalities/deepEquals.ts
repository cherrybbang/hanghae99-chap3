// export function deepEquals<T>(objA: T, objB: T): boolean {
//   // 참조가 같을 떄 >>> 기본 타입이거나 null인 경우
//   if (objA === objB) {
//     return true;
//   }

//   // 둘 중 하나라도 객체일 경우 >>> 기본 타입이거나 null인 경우
//   if (
//     typeof objA !== "object" ||
//     objA === null ||
//     typeof objB !== "object" ||
//     typeof objB === null
//   ) {
//     return false;
//   }

//   // 배열여부 확인인
//   const isArrayA = Array.isArray(objA);
//   const isArrayB = Array.isArray(objB);
//   if (isArrayA !== isArrayB) {
//     return false;
//   }

//   if (isArrayA && isArrayB) {
//     // 배열일 경우, length가 다르면 false
//     if ((objA as any[]).length !== (objB as any[]).length) {
//       return false;
//     }

//     // 배열열요소들을 재귀적으로 deepEquals
//     return (objA as any[]).every((item, i) =>
//       deepEquals(item, (objB as any[])[i]),
//     );
//   }

//   const keysA = Object.keys(objA as object);
//   const keysB = Object.keys(objB as object);

//   // 객체의 키 개수가 다른 경우우
//   if (keysA.length !== keysB.length) {
//     return false;
//   }

//   // 각각에 deepEquals 재귀적으로 호출
//   for (const key of keysA) {
//     if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
//     const a = (objA as any)[key];
//     const b = (objB as any)[key];
//     if (!deepEquals(a, b)) return false;
//   }

//   return true;
// }
