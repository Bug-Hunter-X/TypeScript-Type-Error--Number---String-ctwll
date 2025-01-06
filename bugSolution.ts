function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(5, 10); // Correct: adds two numbers

function addString(a: string, b: string): string {
  return a + b; // Correct: concatenates strings
}

const result2 = addString('5', '10'); // Correct: concatenates strings

function addNumberOrString(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return String(a) + String(b);
  }
}

const result3 = addNumberOrString(5, '10'); // Correctly handles number and string
const result4 = addNumberOrString(5,10); //Correctly handles number and number
const result5 = addNumberOrString('5','10'); //Correctly handles string and string