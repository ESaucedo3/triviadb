export class Question {
  constructor(data) {
    this.question = data.question;
    this.correct_answer = data.correct_answer;
    this.incorrect_answers = data.incorrect_answers;
  }

  get QuestionTemplate() {
    return ` <h5 class="text-center">${this.question}</h5>
            <div class="row card-body text-center">
              ${this.AnswersTemplate}
            </div> `;
  }

  get AnswersTemplate() {
    let answers = [...this.incorrect_answers, this.correct_answer];
    this.shuffleAnswers(answers);

    return answers
      .map(
        (answer) => `
      <div class="col-md-6">
        <button onclick="app.TriviaController.checkAnswer('${answer}')" type="button" class="w-100 mb-1 btn btn-light border border-2 border-secondary">${answer}</button>
      </div>
    `
      )
      .join('');
  }

  shuffleAnswers(answers) {
    return answers.sort(() => Math.random() - 0.5);
  }
}
