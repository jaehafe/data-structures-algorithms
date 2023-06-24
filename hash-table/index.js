class HashTable {
  constructor() {
    this.table = {};
  }

  // 값을 저장하는 Set 메서드
  set(key, value) {
    this.table[key] = value;
  }

  // 특정 키에 대한 값을 가져오는 Get 메서드
  get(key) {
    return this.table[key];
  }
}

// 해시 테이블 객체 생성
const hashTable = new HashTable();

// 값 저장 (Set)
hashTable.set('apple', 10);
hashTable.set('banana', 20);
hashTable.set('orange', 30);

// 특정 키에 대한 값 가져오기 (Get)
console.log(hashTable.get('apple')); // 10
console.log(hashTable.get('banana')); //  20
console.log(hashTable.get('orange')); //  30
