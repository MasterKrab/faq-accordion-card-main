const faqButton = document.querySelectorAll(`.accordion-faq__question`)
const faqAnswer = document.querySelectorAll(`.accordion-faq__answers`)

faqButton.forEach((question) => {
    question.addEventListener(`click`, () =>{
        if(question.parentNode.classList.contains(`accordion-faq--active`))
            question.parentNode.classList.remove(`accordion-faq--active`)
        else{
            faqButton.forEach((question) => {
                question.parentNode.classList.remove(`accordion-faq--active`)
            })
            question.parentNode.classList.toggle(`accordion-faq--active`)
            
        }
    })
})
