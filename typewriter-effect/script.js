const Typewriter = function(txtElement, words, waitTime = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.waitTime = parseInt(waitTime, 10);
    this.txt = '';
    this.isDeleting = false;
    this.wordIndex = 0;
    this.type();
}

Typewriter.prototype.type = function() {
    
    const currentWordIndex = this.wordIndex % this.words.length;
    const currentWord = this.words[currentWordIndex];
    let typeSpeed = 300;

    if (this.isDeleting) {
        this.txt = currentWord.substr(0, this.txt.length - 1);
    } else {
        this.txt = currentWord.substr(0, this.txt.length + 1);
    }

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === currentWord) {
        typeSpeed = this.waitTime;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), typeSpeed);
}

function init() {
    const txtElement = document.getElementById('txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const waitTime = txtElement.getAttribute('data-waitTime');

    new Typewriter(txtElement, words, waitTime);
}

document.addEventListener('DOMContentLoaded', init);