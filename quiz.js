let radioList = [
  document.querySelector(".abc")
]
let submitButton = document.querySelector('.submit');
let backButton = document.querySelector('.back');
let answers = [1, 1, 2, 0, 1, 1, 3, 0, 0, 2, 0, 3, 0, 3, 0];
submitButton.addEventListener('mousedown', () => {
  console.log('abc')
  Test()
})
backButton.addEventListener('mousedown', () => {
  window.location.href = location.protocol + '//' + location.host + '/EnglishHomework'
})



function Test() {
  let correct = 0;

  for (let i = 0; i < 15; i++) {
    var unorderedList   = document.getElementById('question'+i),
      ListItems       = unorderedList.getElementsByTagName('input');  
    console.log(ListItems[answers[i]].checked)
    if (ListItems[answers[i]].checked) {
      unorderedList.style.color = 'green';
      correct++;
    } else {
      unorderedList.style.color = 'red';

    }
  }
  let percentage = Math.round(correct/15 * 100);
  submitButton.textContent = percentage+"%"
  
}