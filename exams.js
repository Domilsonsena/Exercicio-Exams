class Exam {
    constructor(answer, weight) {
      this.answer = answer;
      this.weight = weight;
      this.examResults = []; // Armazena apenas os resultados dos exames
    }
  
    add(exam) {
      const grade = Object.keys(this.answer).reduce((total, q) => {
        return total + (exam.answer[q] === this.answer[q] ? this.weight[q] : 0);
      }, 0);
  
      this.examResults.push(grade);
    }
  
    avg() {
      if (this.examResults.length === 0) {
        return 0; // Ou outro valor padrão apropriado
      }
      const totalGrade = this.examResults.reduce((total, grade) => total + grade, 0);
      return totalGrade / this.examResults.length;
    }
  
    min(count = 1) {
      return this.examResults.sort((a, b) => a - b).slice(0, count);
    }
  
    max(count = 1) {
      return this.examResults.sort((a, b) => b - a).slice(0, count);
    }
  
    lt(limit) {
      return this.examResults.filter((grade) => grade < limit);
    }
  
    gt(limit) {
      return this.examResults.filter((grade) => grade > limit);
    }
}
  
export { Exam };