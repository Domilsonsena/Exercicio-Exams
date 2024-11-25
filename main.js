import {Exam} from './exams.js';

const answer = {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5:'d'};

const weight = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2};

const exam = new Exam( answer, weight);

//Adicionando estudantes
const student1 = { answer: {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}};

const student2 = { answer: {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}};

const student3 = { answer: {q1: 'c', q2: 'b', q3: 'd', q4: 'c', q5: 'd'}};

const student4 = { answer: {q1: 'c', q2: 'b', q3: 'c', q4: 'd', q5: 'a'}};

const student5 = { answer: {q1: 'b', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}};

const student6 = { answer: {q1: 'b', q2: 'c', q3: 'd', q4: 'a', q5: 'a'}};

exam.add(student1);
exam.add(student2);
exam.add(student3);
exam.add(student4);
exam.add(student5);
exam.add(student6);

console.log('Média: ', exam.avg());
console.log('Min: ', exam.min());
console.log('Max: ', exam.max());
console.log('Menor que 7: ', exam.lt(7));
console.log('Maior que 7: ', exam.gt(7));
