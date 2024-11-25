class Exam {
    constructor(answer, weight) {
      this.answer = answer;
      this.weight = weight;
      this.exam = []; 
    }
  
    add(exam) {
      const pontuacao = Object.keys(this.answer).reduce((total, q) => {
        return total + (exam.answer[q] === this.answer[q] ? this.weight[q] : 0);
      }, 0);
  
      this.exam.push(pontuacao);
    }
  
    avg() {
      if (this.exam.length === 0) {
        return 0; 
      }
      const pontuacaoTotal = this.exam.reduce((total, pontuacao) => total + pontuacao, 0);
      return pontuacaoTotal / this.exam.length;
    }
  
    min(count = 1) {
      return this.exam.sort((a, f) => a - f).slice(0, count);
    }
  
    max(count = 1) {
      return this.exam.sort((a, f) => f - a).slice(0, count);
    }
  
    lt(limit) {
      return this.exam.filter((pontuacao) => pontuacao < limit);
    }
  
    gt(limit) {
      return this.exam.filter((pontuacao) => pontuacao > limit);
    }
}
  
export { Exam };