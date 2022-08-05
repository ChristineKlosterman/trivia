import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

export class questionService {


    async getQuestion() {
        let res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy')
        console.log('get question', res);

        ProxyState.questions = res.data.results.map(q => new Question)


    }
}