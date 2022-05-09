export const data = new Array(5).fill('').map(item => Math.random().toFixed(2));

export default function() {
  console.log(data);
}