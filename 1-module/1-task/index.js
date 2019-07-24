/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let x = m;
  for (let i = 1; i < n; i++) {
  	x *= m;
  }
  return x;
}
