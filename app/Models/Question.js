export class Question {
    constructor(difficulty) {
        this.difficulty = difficulty
    }

    get Template() {
        return `
        <div class="card bg-dark mb-3 elevation-2 p-3 text-white">
          <h4>${this.difficulty}</h4>
        </div>
        `
    }


}