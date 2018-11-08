function Tamagotchi(name) {

    this.name = name;
    this.levelFood = 70;
    this.strength = 70;
    this.sick = false;
    this.exercises = 50;
    this.cleanliness = 50;
    this.happiness = 50;

    let didRun = false;

    this.feed = function () {
        if (check()) return;
        if (this.levelFood >= 100) {
            console.log('I\'m not hungry')
        } else {
            this.levelFood += 10;
            console.log('Thanks for feeding')
        }
    };

    this.walk = function () {
        if (check()) return;
        if (this.strength <= 10) {
            console.log('I don\'t have enough strength to walk, I want to sleep or watch TV')
        } else {
            this.strength -= 10;
            this.levelFood -= 10;
            this.cleanliness -= 10;
            this.happiness += 10;
            console.log('Good time outside')
        }
    };

    this.sleep = function () {
        if (check()) return;
        if (this.strength >= 100) {
            console.log("I don't want to sleep, I have a lot of strength");
        } else {
            console.log("zzzzzzz");
            this.strength += 10;
        }
    };

    this.medicate = function () {
        if (check()) return;
        if (this.sick) {
            this.happiness -= 10;
            this.sick = false;
            console.log('I feel much better')
        } else {
            console.log('No thanks, I am feeling gooood')
        }
    };

    this.sport = function () {
        if (check()) return;
        if (this.sick) {
            console.log('I\'m sick')
        } else if (this.strength <= 10) {
            console.log('I don\'t have enough strength, I want to sleep')
        } else if (this.levelFood <= 10) {
            console.log('I\'m hungry. Want to eat');
        } else {
            this.exercises += 10;
            this.strength -= 10;
            this.levelFood -= 10;
            this.cleanliness -= 10;
            this.happiness += 10;
            console.log('I\'m a great sportsmen')
        }
    };

    this.wash = function () {
        if (check()) return;
        if (this.cleanliness >= 100) {
            console.log('I don\'t need a shower')
        } else {
            this.cleanliness += 10;
            console.log('Thanks for shower')
        }
    };

    this.watchTV = function () {
        if (check()) return;
        if (this.strength >= 100) {
            console.log('I want to do something. I have a lot of strength')
        } else {
            this.strength += 10;
            this.exercises -= 10;
            console.log('Interesting film')
        }
    };

    this.checkState = function () {
        console.log(`Level food - ${this.levelFood}`);
        console.log(`Strength - ${this.strength}`);
        console.log(`Is sick - ${this.sick}`);
        console.log(`Sport - ${this.exercises}`);
        console.log(`Cleanliness - ${this.cleanliness}`);
        console.log(`Happiness - ${this.happiness}`);
    };

    function check () {
        if (didRun) {
            console.log('I ran away from you. Game over.');
            return true
        }
    }

    let changeIsSick = () => {
        if (!this.sick) {
            this.sick = true
        }
    };

    let timerId = setInterval(changeIsSick, 60000);

    let intervalValue = () => {
        if (this.strength <= 0 || this.levelFood <= 0 || this.happiness <= 0 || this.cleanliness <= 0) {
            clearInterval(timerId2);
            clearInterval(timerId);
            didRun = true;
            alert('I ran away from you. Game over.');
        } else {
            this.strength -= 2;
            this.levelFood -= 2;
            this.happiness -= 2
        }
    };

    let timerId2 = setInterval(intervalValue, 5000);

}


