const room5 = document.querySelector('.room5-container');
const room6 = document.querySelector('.room6-container');
const room8 = document.querySelector('.room8-container');
const room12 = document.querySelector('.room12-container');

const reserveBtn5 = document.getElementById('room5-reserve');
const reserveBtn6 = document.getElementById('room6-reserve');
const reserveBtn8 = document.getElementById('room8-reserve');
const reserveBtn12 = document.getElementById('room12-reserve');




// Event Listeners

// Reserve Rooms
reserveBtn5.addEventListener('click', () => {
  const selected = document.querySelectorAll('.room5-container .day.selected');
  selected.forEach(e => {
    e.classList.remove('selected');
    e.classList.add('reserved');
  })
})
reserveBtn6.addEventListener('click', () => {
  const selected = document.querySelectorAll('.room6-container .day.selected');
  selected.forEach(e => {
    e.classList.remove('selected');
    e.classList.add('reserved');
  })
})
reserveBtn8.addEventListener('click', () => {
  const selected = document.querySelectorAll('.room8-container .day.selected');
  selected.forEach(e => {
    e.classList.remove('selected');
    e.classList.add('reserved');
  })
})
reserveBtn12.addEventListener('click', () => {
  const selected = document.querySelectorAll('.room12-container .day.selected');
  selected.forEach(e => {
    e.classList.remove('selected');
    e.classList.add('reserved');
  })
})

// Select Rooms
room5.addEventListener('click', e => {
  if (
    e.target.classList.contains('day') &&
    !e.target.classList.contains('reserved')
  ) {
    e.target.classList.toggle('selected');
  }
})
room6.addEventListener('click', e => {
  if (
    e.target.classList.contains('day') &&
    !e.target.classList.contains('reserved')
  ) {
    e.target.classList.toggle('selected');
  }
})
room8.addEventListener('click', e => {
  if (
    e.target.classList.contains('day') &&
    !e.target.classList.contains('reserved')
  ) {
    e.target.classList.toggle('selected');
  }
})
room12.addEventListener('click', e => {
  if (
    e.target.classList.contains('day') &&
    !e.target.classList.contains('reserved')
  ) {
    e.target.classList.toggle('selected');
  }
})