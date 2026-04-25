const a = { ahoj: { nazdar: 1 } };
const b = { ...a };

b.ahoj.nazdar = 2;

console.log(a);
