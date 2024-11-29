document.getElementById('toggle-quick-links').addEventListener('click', function() {
    var content = document.getElementById('quick-links-content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      this.textContent = 'Hide Quick Links';
    } else {
      content.style.display = 'none';
      this.textContent = 'Show Quick Links';
    }
  });

  const events = [
  {
    dateNumber: '13',
    dateMonth: 'Nov',
    eventName: '"Feedback Loop" — First-Year MFA Exhibition',
    eventDate: 'Fall 2024 1st-Year MFA Show November 13 - December 13 Public reception: Friday',
    eventAddress: '123 Art St, New Haven, CT'
  },
  {
    dateNumber: '20',
    dateMonth: 'Nov',
    eventName: 'Sculpture Workshop',
    eventDate: 'November 20, 2024',
    eventAddress: '456 Sculpture Rd, New Haven, CT'
  },
  // Add more events here
];

  function populateEvents() {
  const container = document.querySelector('.happening-at-soa');
  
  events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('calendar-event');
    
    eventDiv.innerHTML = `
      <div class="calendar-date">
        <div class="date-bar"></div>
        <div class="date-text">
          <div class="date-number">${event.dateNumber}</div>
          <div class="date-month">${event.dateMonth}</div>
        </div>
      </div>
      <div class="event-details">
        <div class="event-name">${event.eventName}</div>
        <div class="event-date">${event.eventDate}</div>
        <div class="event-address">${event.eventAddress}</div>
      </div>
    `;
    
    container.appendChild(eventDiv);
  });
}

document.addEventListener('DOMContentLoaded', populateEvents);