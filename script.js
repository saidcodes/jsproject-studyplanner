
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
        
        checkButton.addEventListener('click', function() {
            // Toggle 
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(checkButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
