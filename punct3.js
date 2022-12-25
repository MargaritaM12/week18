document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document
            .getElementById("author")
            .value = name;
    }
});

const btn = document.querySelector('button')
const textaria = document.querySelector('textarea')
const author = document.getElementById("author")
const container = document.querySelector('.comContainer')

btn.addEventListener('click', () => {
    let textVAlue = textaria.value || author.value;
    let div = document.createElement('div');
    div.innerHTML = checkSpam(textVAlue);
    container.append(div);
    textVAlue.value = '';
})

function checkSpam(str) {
    const lowerStr = str.toLowerCase()
    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        let repl = 'viagra';
        let replSecond = 'xxx';
        newStr = str
            .replace(repl, '***')
            .replace(replSecond, '***');
        return newStr;
    }
    return str;
}
