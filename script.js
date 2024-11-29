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

  .calendar-event {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.calendar-date {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.date-bar {
  width: 5px;
  height: 50px;
  background-color: #007bff;
  margin-right: 10px;
}

.date-text {
  text-align: center;
}

.date-number {
  font-size: 24px;
  font-weight: bold;
}

.date-month {
  font-size: 16px;
}

.event-details {
  display: flex;
  flex-direction: column;
}

.event-name {
  font-size: 18px;
  font-weight: bold;
}

.event-date,
.event-address {
  font-size: 14px;
}