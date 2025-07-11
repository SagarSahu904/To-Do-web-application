const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return alert('You must write something!');
  const li = document.createElement('li');
  li.textContent = text;

  const close = document.createElement('span');
  close.textContent = '×';
  close.className = 'closeBtn';
  close.onclick = () => li.remove();

  li.onclick = (e) => {
    if (e.target === li) li.classList.toggle('completed');
  };

  li.appendChild(close);
  list.appendChild(li);
  input.value = '';
});
