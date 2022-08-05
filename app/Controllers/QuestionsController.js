import { ProxyState } from "../AppState.js"
import { questionService } from "../Services/questionService.js";
import { Pop } from "../Utils/Pop.js";



function _drawQuestions() {
    let template = ''
    ProxyState.questions.forEach(q => template = q.Template)

    document.getElementById('list').innerHTML = template

}

export class QuestionsController {
    constuctor() {
        console.log('testing');


    }
    _drawQuestions

    async getQuestions() {
        try {
            await questionService.getQuestions()

        } catch (error) {
            console.log('[getQuestions]', error);
            Pop.error(error)
        }
    }
}