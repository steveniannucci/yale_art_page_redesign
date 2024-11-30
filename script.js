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
    eventDate: 'Fall 2024 1st-Year MFA Show November 13 - December 13 Public reception: Friday, November 15...',
    eventAddress: '1156 Chapel Street',
    eventCategory: 'Incoming Students (1st Year MFAs), Open to Yale Community, Exhibitions',
    additionalEventInfo: "Fall 2024 1st-Year MFA Show<br>November 13 - December 13<br><br><b>Public reception: Friday, November 15, 6-8PM</b><br><br>Open to the Yale community and invited, accompanied guests.<br><br>Featuring work by Alixe Turner, Amanda Atria, Ambrose Murray, Amy Chasse, Amy Fang, Amy Wang, Andrew Warner, Aru Apaza, Bendy Sohn, Cameron Patricia Downey, Camille Gwise, Chen Xiangyun, Chris Cole, Christian Badach, Christopher Postlewaite, Cierra Peters, David Jung, Denzel Boyd, Ellen Fabini, Em Wall, Faith Couch, Faye Wei Wei, Gabriella N. Báez, Hana Jelovšek & Gal Šnajder, Hasti Kasraei, Hazal Ozgur, Heejae Kim, Hongting Zhu, Ian Faden, Inkpa Mani, Izza Alyssa, Jasmine Clarke, John Shen, Josh Rabineau, Josh Vasquez, Kiki Serna, Kimberly Heard, Leyla Tonak, Mar Figueroa, Michael Stevens, Nabla Mohammad Yahya, Olivia Reavey, Priscilla Young, Rebecca Cheng, Sok Song, Taisha Carrington, Vernando Reuben, Wenqing Zhai, Xiwen Zhang, Yuna Cho, and Yuwei Tu.<br><br>Exhibition identity by Amy Fang and Camille Jen-Mei Gwise, Graphic Design MFAs '26.",
    color: '#008080'
  },
  {
    dateNumber: '02',
    dateMonth: 'Dec',
    eventName: 'Classes resume',
    eventDate: 'Monday, December 2 Classes resume',
    eventAddress: '',
    eventCategory: 'Academic Calendar',
    additionalEventInfo: '<b>Monday, December 2</b><br><br>Classes resume',
    color: '#000000'
  },
  {
    dateNumber: '02',
    dateMonth: 'Dec',
    eventName: 'YPEI Info Session',
    eventDate: 'Meet YPEI staff to learn more about this teaching fellowship.',
    eventAddress: '5:00 PM - 6:00 PM EST',
    eventCategory: 'All School/Interdepartmental',
    additionalEventInfo: '<b>Monday, December 2<br>5 PM<br><a>Join on Zoom</a></b><br><br>The Yale School of Art offers MFA graduates the opportunity to teach students incarcerated in Connecticut correctional institutions through the Yale Prison Education Initiative at Dwight Hall and its partnerships with Yale Summer Session and the University of New Haven. Meet YPEI staff to learn more about this teaching fellowship. Apps will be due in January.',
    color: '#DB8780'
  },
  {
    dateNumber: '02',
    dateMonth: 'Dec',
    eventName: 'Figure Drawing Workshop',
    eventDate: 'Monday, December 26-8 PM 1156 Chapel Street, Room G01 Join the Painting/Printmaking department...',
    eventAddress: '1156 Chapel Street, Room G01 6:00-8:00 PM EST',
    eventCategory: 'Open to SoA Community, Painting/Printmaking',
    additionalEventInfo: "<b>Monday, December 2<br>6-8 PM<br>1156 Chapel Street, Room G01</b><br><br>Join the Painting/Printmaking department for their series of Figure Drawing Workshops, hosted by Amy Chasse, Painting/Printmaking MFA '26.<br><br><b>Figure Drawing Workshop dates for Fall 2024:</b><br>Monday, October 28th<br>Monday, November 4th<br>Monday, November 11th<br>Monday, December 2nd<br>",
    color: '#1F4591'
  },
  {
    dateNumber: '03',
    dateMonth: 'Dec',
    eventName: 'MFA Crits in Sculpture',
    eventDate: 'Sculpture critiques during the Fall 2024 semester are open to the School of Art community.',
    eventAddress: '36 Edgewood Ave., New Haven 12:00-3:00 PM EST',
    eventCategory: 'MFA Crits, Sculpture, Open to SoA Community',
    additionalEventInfo: 'Sculpture critiques during the Fall 2024 semester are open to the School of Art community and will take place throughout 36 Edgewood Ave. Please find the exact location of each crit below or on the Sculpture Hub (accessible via the Student Hub).<br><br><b>Tuesday, December 3</b><br>12:00-1:30 PM<br><b>Cameron Patricia Downey</b><br>location TBD<br>2:00-3:30 PM<br><b>Shiellie Zhang</b><br>location TBD<br>',
  },
  {
    dateNumber: '03',
    dateMonth: 'Dec',
    eventName: 'Presentation of MFA Crit Work in Painting/Printmaking',
    eventDate: '1-3 PM & 7-9 PM 353 Crown Street, the Pit Tuesday, December 3 Nadia Younes While...',
    eventAddress: '353 Crown Street, the Pit 1:00-9:00 PM EST',
    eventCategory: 'MFA Crits, Painting/Printmaking, Open to SoA Community',
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
      <div class="additional-event-info" style="display: none;">
        <p>${event.additionalEventInfo}</p>
        <hr>
        <button class="subscribe-button">Add this event to Calendar</button>
      </div>
    `;

    eventDiv.addEventListener('click', function() {
      const additionalEventInfo = this.querySelector('.additional-event-info');
      if (additionalEventInfo.style.display === 'none') {
        additionalEventInfo.style.display = 'block';
      } else {
        additionalEventInfo.style.display = 'none';
      }
    });

    const button = document.createElement('button');
    button.textContent = 'Subscribe to this Calendar';
    button.classList.add('subscribe-button');
    
    container.appendChild(eventDiv);
  });
}

document.addEventListener('DOMContentLoaded', populateEvents);