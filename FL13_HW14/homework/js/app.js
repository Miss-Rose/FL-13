class Student {
    constructor(name, email) {
        this._name = name;
        this._email = email;
        this._homeworkResults = [];
    }
    getName () {
        return this._name;
    }
    getEmail () {
        return this._email;
    }
    addHomeworkResult (topic, success){
        let obj = {
            topic: topic,
            success: success
        };
        this._homeworkResults.push(obj);
    }
    getHomeworkResult() {
        return this._homeworkResults;
    }
}
