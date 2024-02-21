const nameSurname = document.querySelector(input_name);
const kmToDo = document.querySelector(input_km);
const yearsOld = document.querySelector(input_age);
const passenger = document.querySelector(passenger_name);
const genTicket = document.querySelector (btn_gen);
const resTicket = document.querySelector (btn_res);

passenger.value = nameSurname;

genTicket.addEventListener('click'.function(){
  passenger = (nameSurname.value);
})
