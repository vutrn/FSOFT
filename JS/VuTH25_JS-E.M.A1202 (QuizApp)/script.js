const myQuestions = [
  {
    question: 'Javascript is _________ language.',
    answers: {
      a: 'Programming',
      b: 'Application',
      c: 'None of These',
      d: 'Scripting'
    },

    multi: false,
    correctAnswer: 'd'
  },
  {
    question:
      'Which of the following is a valid type of function javascript supports?',
    answers: {
      a: 'named function',
      b: 'anonymous function',
      c: 'both of the above',
      d: 'none of the above'
    },
    multi: false,
    correctAnswer: 'c'
  },

  {
    question:
      'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
    answers: {
      a: 'getIndex()',
      b: 'location()',
      c: 'indexOf()',
      d: 'getLocation()'
    },
    multi: false,
    correctAnswer: 'c'
  },

  {
    question: 'Which one of the following is valid data type of JavaScript',
    answers: {
      a: 'number',
      b: 'void',
      c: 'boolean',
      d: 'nothing'
    },
    multi: false,
    correctAnswer: 'c'
  }
];

let currentIndex = 0;
const selections = {};

const qTextEl = document.querySelector('#q-text');
const choicesEl = document.querySelector('#choices');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const submitBtn = document.querySelector('#submitBtn');
const resultEl = document.querySelector('#result');

function render () {
  const q = myQuestions[currentIndex];
  qTextEl.textContent = `Question ${currentIndex + 1}: ${q.question}`;

  choicesEl.innerHTML = Object.entries(q.answers).map(([key, value]) => {
    console.log("key", key, "value", value)
    const isChecked = selections[currentIndex] === key ? 'checked' : '';
    return `
       <label>
          <input type="radio" name="choice" value="${key}" ${isChecked}>
          ${key.toUpperCase()}. ${value}
        </label>
    `
  }).join('');

  if (currentIndex === 0) {
    btnPrev.classList.add('hidden');
    btnNext.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  } else if (currentIndex === myQuestions.length - 1) {
    btnPrev.classList.remove('hidden');
    btnNext.classList.add('hidden');
    submitBtn.classList.remove('hidden');
  } else {
    btnPrev.classList.remove('hidden');
    btnNext.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  }
}

btnPrev.addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  render();
});

btnNext.addEventListener('click', () => {
  const checked = choicesEl.querySelector('input[name="choice"]:checked');
  if (checked) selections[currentIndex] = checked.value;
  currentIndex = Math.min(myQuestions.length - 1, currentIndex + 1);
  render();
});

submitBtn.addEventListener('click', () => {
  const checked = choicesEl.querySelector('input[name="choice"]:checked');
  if (checked) selections[currentIndex] = checked.value;
  console.log(checked.value)
  console.log(selections)
  let score = 0;
  myQuestions.forEach((q, i) => {
    if (selections[i] === q.correctAnswer) score++;
  });
  resultEl.textContent = `Your score: ${score} / ${myQuestions.length}`;
});

render();