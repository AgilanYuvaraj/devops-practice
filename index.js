<!DOCTYPE html>
<html>
<head>
    <title>Task Manager Pro</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #f4f7f6; padding: 20px; }
        .container { max-width: 400px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        input { width: 80%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
        button { padding: 10px; background: #28a745; color: white; border: none; cursor: pointer; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; }
    </style>
</head>
<body>
    <div class="container">
        <h2>✅ Task Manager</h2>
        <input type="text" id="taskInput" placeholder="New task...">
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        async function loadTasks() {
            const res = await fetch('/api/tasks');
            const data = await res.json();
            const list = document.getElementById('taskList');
            list.innerHTML = data.map(t => `<li>${t.title} <span>${t.completed ? '✔️' : '⏳'}</span></li>`).join('');
        }

        async function addTask() {
            const title = document.getElementById('taskInput').value;
            await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            });
            document.getElementById('taskInput').value = '';
            loadTasks();
        }
        loadTasks();
    </script>
</body>
</html>
