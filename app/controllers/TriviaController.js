import {AppState} from '../AppState.js';
import {triviaService} from '../services/TriviaService.js';
import {setHTML} from '../utils/Writer.js';

export class TriviaController {
  constructor() {
    this.retrieveQuestions();
    AppState.on('activeQuestion', this.drawQuestion);
  }

  async retrieveQuestions() {
    await triviaService.retrieveQuestions();
  }

  drawQuestion() {
    const activeQuestion = AppState.activeQuestion;
    setHTML('questions', activeQuestion.QuestionTemplate);
  }

  checkAnswer(answer) {
    triviaService.checkAnswer(answer);
  }
}
