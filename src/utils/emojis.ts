export default Array.from({ length: 64 }, (_, i) =>
  String.fromCodePoint(0x1f600 + i),
);
