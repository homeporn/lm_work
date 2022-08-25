// "use strict"

// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('g-form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//         let formData = new FormData(form);

//         if (error === 0) {
//             form.classList.add('_sending');
//             let response = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 let result = await response.json();
//                 alert(result.message);
//                 formPreview.innerHTML = '';
//                 form.reset();
//                 form.classList.remove('_sending');
//             }
//         } else {
//             alert('Заполните обязательные поля');
//         }
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document('._req');

//         for (let index = 0; index < formReq.length; index++){
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_email')){
//                 if (emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             }

//         }
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error')
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error')
//     }
//     function emailTest(input) {
//         return !/ˆ\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// });

const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["submit"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck); // обработка кнопки "Отправить"

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}
// Здесь проверяем, можно ли отправить форму
function formCheck(e) {
  e.preventDefault(); // блокируем input
  const allValid = []; // создаем массив валидных значений
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid")); // проверяем каждое поле
  });
  const isAllValid = allValid.reduce((acc, current) => { // проверяем, чтобы все было правильно
    return acc && current;
  });
  if (!Boolean(Number(isAllValid))) {
    alert("Заполните поля правильно!"); // если не правильно - сообщение пользователю
    return;
  }
  formSubmit(); // если правильно - отправляем данные
}
