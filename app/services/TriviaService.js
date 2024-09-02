import {AppState} from '../AppState.js';
import {Question} from '../models/Question.js';

class TriviaService {
  async retrieveQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=7&category=15&difficulty=medium&type=multiple');
    const questionsData = await response.json();
    const questions = questionsData.results.map((question) => new Question(question));
    AppState.questions = questions;
    AppState.activeQuestion = questions[0];
  }

  checkAnswer(answer) {
    const activeQuestion = AppState.activeQuestion;
    if (answer === activeQuestion.correct_answer) {
      alert('Correct!');
      this.nextQuestion();
    } else {
      alert('Incorrect!');
    }
  }

  nextQuestion() {
    const questions = AppState.questions;
    const activeQuestion = AppState.activeQuestion;
    const currentQuestionIndex = questions.findIndex((q) => q.question === activeQuestion.question);
    if (currentQuestionIndex < questions.length - 1) {
      AppState.activeQuestion = questions[currentQuestionIndex + 1];
    } else {
      alert('No more questions');
    }
  }
}

export const triviaService = new TriviaService();
