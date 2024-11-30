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
    eventDate: 'Fall 2024 1st-Year MFA Show November 13 - December 13 Public reception: Friday, November 13',
    eventAddress: '1156 Chapel Street',
    eventCategory: 'Incoming Students (1st Year MFAs), Open to Yale Community, Exhibitions',
    color: '#008080'
  },
  {
    dateNumber: '02',
    dateMonth: 'Dec',
    eventName: 'Classes resume',
    eventDate: 'Monday, December 2 Classes resume',
    eventAddress: '',
    eventCategory: 'Academic Calendar',
    color: '#000000'
  },
  {
    dateNumber: '02',
    dateMonth: 'Dec',
    eventName: 'YPEI Info Session',
    eventDate: 'Meet YPEI staff to learn more about this teaching fellowship.',
    eventAddress: '5:00 PM - 6:00 PM EST',
    eventCategory: 'All School/Interdepartmental',
    color: '#DB8780'
  },
  {
    dateNumber: '02',
    dateMonth: 'Dec',
    eventName: 'Figure Drawing Workshop',
    eventDate: 'Monday, December 26-8 PM 1156 Chapel Street, Room G01 Join the Painting/Printmaking department...',
    eventAddress: '5:00 PM - 6:00 PM EST',
    eventCategory: 'Open to SoA Community',
    color: '#1F4591'
  },
  {
    dateNumber: '03',
    dateMonth: 'Dec',
    eventName: 'MFA Crits in Sculpture',
    eventDate: 'Sculpture critiques during the Fall 2024 semester are open to the School of Art community.',
    eventAddress: '36 Edgewood Ave., New Haven 12:00-3:00 PM EST',
    eventCategory: 'MFA Crits'
  },
  {
    dateNumber: '03',
    dateMonth: 'Dec',
    eventName: 'Presentation of MFA Crit Work in Painting/Printmaking',
    eventDate: '1-3 PM & 7-9 PM 353 Crown Street, the Pit Tuesday, December 3 Nadia Younes While...',
    eventAddress: '353 Crown Street, the Pit 1:00-9:00 PM EST',
    eventCategory: 'MFA Crits',
    color: '#2B6AD0'
  },
];

  function populateEvents() {
  const container = document.querySelector('.happening-at-soa-calendar');
  
  events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('calendar-event');
    
    eventDiv.innerHTML = `
      <div class="calendar-date">
        <div class="date-text">
          <div class="date-number">${event.dateNumber}</div>
          <div class="date-month">${event.dateMonth}</div>
        </div>
      </div>
      <div class="event-details">
        <div class="event-name">${event.eventName}</div>
        <div class="event-date">${event.eventDate}</div>
        <div class="event-address">${event.eventAddress}</div>
        <div class="event-category">Categories: ${event.eventCategory}</div>
      </div>
    `;

    const button = document.createElement('button');
    button.textContent = 'Subscribe to this Calendar';
    button.classList.add('subscribe-button');
    
    container.appendChild(eventDiv);
  });
}

document.addEventListener('DOMContentLoaded', populateEvents);