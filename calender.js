const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const themeToggle = document.getElementById('themeToggle');

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let isDarkMode = false; 


const dailyExpenses = {
  '2024-10-01': { incoming: 200, outgoing: 300, limit: 250 },
  '2024-10-05': { incoming: 400, outgoing: 200, limit: 300 },
  '2024-10-10': { incoming: 100, outgoing: 350, limit: 300 },
  '2024-10-15': { incoming: 500, outgoing: 450, limit: 400 },
  '2024-10-20': { incoming: 300, outgoing: 250, limit: 500 },
};


function renderCalendar(month, year) {
  calendarDays.innerHTML = '';

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();


  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day');
    calendarDays.appendChild(emptyDay);
  }

  // Loop through each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    const dayKey = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const expenseData = dailyExpenses[dayKey];

    if (expenseData) {
      const { incoming, outgoing, limit } = expenseData;
      dayDiv.innerHTML = `<span>${day}</span>`;

      
      if (outgoing > limit) {
        dayDiv.classList.add('expense');
        dayDiv.innerHTML += `<div class="tooltip red">Exceeded by $${outgoing - limit}</div>`;
      } else {
        dayDiv.classList.add('income');
        dayDiv.innerHTML += `<div class="tooltip green">Under by $${limit - outgoing}</div>`;
      }
    } else {
      dayDiv.innerHTML = `<span>${day}</span>`;
    }

    calendarDays.appendChild(dayDiv);
  }
}



prevMonthButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);

