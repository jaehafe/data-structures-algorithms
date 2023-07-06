# 해시 테이블

- 키-값 쌍을 저장하고 검색하는 데 사용
- 일반적으로 객체로 구현됨

## 시간 복잡도

- O(1)에 수렴

### 코드 설명

```javascript
const hashTable = {};

// 값 추가
hashTable['key1'] = 'value1';
hashTable['key2'] = 'value2';
hashTable['key3'] = 'value3';

console.log(hashTable['key1']); // value1
console.log(hashTable['key2']); // value2
console.log(hashTable['key3']); // value3
```

- 해시 테이블은 키를 이용하여 값에 빠르게 접근 가능
- 최악의 경우, 충돌(Collision)이 발생하여 해시 테이블의 성능이 저하 가능
