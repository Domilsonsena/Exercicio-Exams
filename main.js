import {Exam} from './exams.js';

const answer = {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5:'d'};

const weight = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2};

const exam = new Exam( answer, weight);


const student1 = { answer: {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}};

//*const student2 = { answer: {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}};

exam.add(student1);
//exam.add(student2);

console.log('Média: ', exam.avg());
console.log('Min: ', exam.min());
console.log('Max: ', exam.max());
console.log('Menor que 6: ', exam.lt(6));
console.log('Maior que 6: ', exam.gt(6));
