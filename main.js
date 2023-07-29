const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertTrigger = document.getElementById('liveAlertBtn');

let alertShown = false;

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if(!alertShown) {
      appendAlert('Nice, you triggered this alert message!', 'success');
      alertShown = true;
    } else {
      alertPlaceholder.innerHTML = '';
      alertShown = false;
    }
  });
}

const form = document.querySelector('#form');
const resultContainer = document.querySelector('#resultContainer');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = document.getElementById('biirthdayInput').value;

  let regex = /\d{2}\.\d{2}\.\d{4}$/;
  if(!regex.test(data)) {
    alert('Please enter the date in DD.MM.YYYY format');
    return
  }
  const momentData = moment(data, 'DD.MM.YYYY').format('MMMM Do YYYY');
  
  resultContainer.innerHTML = momentData;

  console.log(data);
  console.log(momentData);
});