document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task';

    const span = document.createElement('span');
    span.textContent = taskText;

    const checkButton = document.createElement('button');
    checkButton.className = 'check-button';
    checkButton.textContent = 'Check';

    let seconds = 0;
    let timerId = setInterval(updateTimer, 1000);
    const timerSpan = document.createElement('span');
    timerSpan.className = 'timer';

    checkButton.addEventListener('click', function() {
      li.classList.toggle('completed');
      if (li.classList.contains('completed')) {
        clearInterval(timerId);
        timerId = null;
      } else {
        timerId = setInterval(updateTimer, 1000);
      }
      timerSpan.style.pointerEvents = li.classList.contains('completed') ? 'none' : 'auto';
    });

    timerSpan.addEventListener('click', function() {
      clearInterval(timerId);
      seconds = 0;
      timerSpan.textContent = '00:00';
      timerId = setInterval(updateTimer, 1000);
    });

    function updateTimer() {
      seconds++;
      const timeString = new Date(seconds * 1000).toISOString().substr(14, 5);
      timerSpan.textContent = timeString;
    }

    li.appendChild(span);
    li.appendChild(checkButton);
    li.appendChild(timerSpan);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

$('#taskList').on('mouseover', 'span.timer', function() {
  $(this).prop('title', 'Click to restart the timer');
}).on('mouseout', 'span.timer', function() {
  $(this).prop('title', '');
});


// Add language change option
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
  const selectedLanguage = languageSelect.value;
  if (selectedLanguage === 'fr') {
    document.documentElement.lang = 'fr';
    document.title = 'Planificateur d\'étude - Said id Mohamed _ Zakaria ezzammouri ';
    document.querySelector('h2').textContent = ' Said id Mohamed _ Zakaria ezzammouri ';
    document.querySelector('h3:nth-child(2)').textContent = 'Groupe : DEV103';
    document.querySelector('h3:nth-child(3)').textContent = 'ISTAG ym';
    document.querySelector('h3:nth-child(4)').textContent = 'Projet JavaScript mini';
    document.querySelector('h1').textContent = 'study planner';
    document.querySelector('input[placeholder="Enter your task"]').placeholder = 'Entrez votre tâche';
    document.querySelector('button#addTaskButton').textContent = 'Ajouter une tâche';
    document.querySelector('.tasks-section h2').textContent = 'Tâches de aujourdhui';
  } else {
    document.documentElement.lang = 'en';
    document.title = 'Study Planner - Said id Mohamed _ Zakaria ezzammouri';
    document.querySelector('h2').textContent = ' Said id Mohamed _ Zakaria ezzammouri';
    document.querySelector('h3:nth-child(2)').textContent = 'Group: DEV103';
    document.querySelector('h3:nth-child(3)').textContent = 'ISTAG ym';
    document.querySelector('h3:nth-child(4)').textContent = 'JavaScript mini-project';
    document.querySelector('h1').textContent = 'Study Planner';
    document.querySelector('.input-section input').placeholder = 'Enter your task';
    document.querySelector('button#addTaskButton').textContent = 'Add Task';
    document.querySelector('.tasks-section h2').textContent = 'Todays Tasks';
  }
});

