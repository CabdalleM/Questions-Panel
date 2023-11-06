//using selectors inside the element
// traversing the dom
const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn')
    // console.log(btn);
    btn.addEventListener('click', function(){
        question.classList.toggle('show-text')
    })
})