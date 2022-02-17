(function () {
    let task = [];
    let lists = new Map();
    let completedTasks = [];
    let heading = "My Day";
    let taskContainer = document.getElementsByClassName('task-row');
    lists.set(heading, new listObject("My Day", []));
    let taskCounter = document.getElementById('task-count');
    let taskcount = 0;
    let taskInput = document.getElementById('new-task');
    let stepInput = document.getElementById('new-step');
    let listInput = document.getElementById('new-list');


    lists.set("Important", new listObject(heading, []));
    lists.set("My Day", new listObject(heading, []));
    lists.set("Tasks", new listObject(heading, []));
    lists.set("Planned", new listObject(heading, []));
    lists.set("Assigned", new listObject(heading, []));

    /**
     * Create a task.
     * 
     * @param {String} taskName 
     * @param {Array} subTasksObject 
     */
    function taskObject(taskName, subTasksObject) {
        this.taskName = taskName;
        this.subTasksObject = subTasksObject;
    }

    /**
     * 
     * @param {String} listName 
     * @param {Array} tasks 
     */
    function listObject(listName, tasks) {
        this.listName = listName;
        this.tasks = tasks;
    }

    /**
     * Initiates the onclick functions.
     */
    function init() {
        listInput.addEventListener('keyup', function (event) {
            addNewList(event);
        })

        document.getElementById('my-day').addEventListener('click', function () {
            openMyDay();
        })


        document.getElementById('important').addEventListener('click', function () {
            openImportantTask();
        })

        document.getElementById('planned').addEventListener('click', function () {
            openPlannedTasks();
        })

        document.getElementById('assigned').addEventListener('click', function () {
            openAssignedTasks();
        })

        document.getElementById('tasks').addEventListener('click', function () {
            openAllTasks();
        })

        taskInput.addEventListener('click', function () {
            openUserList();
        })

        taskInput.addEventListener("keyup", function (event) {
            if (event.key === 'Enter') {
                if (taskInput.value.length > 0) {
                    addTask(taskInput.value);
                }
                taskInput.value = "";
            }
        })

        document.getElementById('open-nav').addEventListener('click', function open_close_leftNav() {
            const element = document.querySelector('#container-left');
            var left = getComputedStyle(element).left;
            if ('0px' === left) {
                closeLeftNav();
            } else {
                openLeftNav();
            }
        });

        stepInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                if (stepInput.value.length > 0) {
                    addStep(stepInput);
                }
                stepInput.value = '';
            }
        })
    }

    /**
     * Closes the side navigation bar.
     */
    function closeLeftNav() {
        document.getElementById('container-left').classList.add('container-left-close');
        document.getElementById('container-left').classList.remove('container-left-open');
        document.getElementById('middle-container').classList.add('middle-left-close');
        document.getElementById('middle-container').classList.remove('middle-left-open');
        document.getElementById('list-title').style.left = '60px';
        document.getElementById('date').classList.add("date-left-close");
        document.getElementById('date').classList.remove("date-left-open");
        document.getElementById('open-nav').classList.add('open-nav-close');
        document.getElementById('open-nav').classList.remove('open-nav-open');
        document.getElementById('list-title').classList.remove('list-title-open');
        document.getElementById('list-title').classList.add('list-title-close');
    }

    /**
     * Opens the  side navigation bar.
     */
    function openLeftNav() {
        document.getElementById('container-left').classList.add('container-left-open');
        document.getElementById('container-left').classList.remove('container-left-close');
        document.getElementById('middle-container').classList.add('middle-left-open');
        document.getElementById('middle-container').classList.remove('middle-left-close');
        document.getElementById('open-nav').classList.add('open-nav-open');
        document.getElementById('open-nav').classList.remove('open-nav-close');
        document.getElementById('list-title').classList.add('list-title-open');
        document.getElementById('list-title').classList.remove('list-title-close');
        document.getElementById('date').classList.add("date-left-open");
        document.getElementById('date').classList.remove("date-left-close");
    }

    /**
     * Creates a new List.
     * 
     * @param event 
     */
    function addNewList(event) {
        if (event.key === 'Enter') {
            if (listInput.value.length > 0) {
                addList(listInput);
            }
            listInput.value = "";
        }
    }

    /**
     * Stores the list to the collection.
     * 
     * @param {String} input 
     */
    function addList(input) {
        let dynamicList = document.getElementById('added-list');
        let listElements = document.createElement('li');
        listElements.innerHTML = '<div class="list-row"><div> <i class="ms-Icon blue-icon"></i></div><div><span></span></div></div>';
        listElements.childNodes[0].childNodes[1].childNodes[0].appendChild(document.createTextNode(input.value));
        dynamicList.appendChild(listElements);
        lists.set(input.value, new listObject(input.value, []));
        listElements.addEventListener("click", function () {
            document.getElementById('title').innerHTML = listElements.childNodes[0].childNodes[1].childNodes[0].textContent;
            document.getElementById('date').classList.add('no-display');
            document.getElementById('date').classList.remove('block-display');
            document.getElementById('title').classList.add('color-blue');
            document.getElementById('title').classList.remove('color-green');
            document.getElementById('title').classList.remove('color-black');
            heading = listElements.childNodes[0].childNodes[1].childNodes[0].textContent;
            clearTaskDisplay();
            displayTasks(heading);
        })
    }

    /**
     * Open and displays My Day list.
     */
    function openMyDay() {
        document.getElementById('title').innerHTML = 'My Day';
        document.getElementById('title').classList.add('color-black');
        document.getElementById('title').classList.remove('color-green');
        document.getElementById('title').classList.remove('color-blue');
        document.getElementById('date').classList.add('block-display');
        document.getElementById('date').classList.remove('no-display');
        heading = "My Day";
        document.getElementById('middle-right').classList.add('flex-display');
        document.getElementById('middle-right').classList.remove('no-display');
        document.getElementsByClassName('container-right')[0].classList.remove('open-right-container');
        clearTaskDisplay();
        displayTasks(heading);
    }

    /**
     * Open and displays Important list.
     */
    function openImportantTask() {
        document.getElementById('title').innerHTML = 'Important';
        document.getElementById('date').classList.add('no-display');
        document.getElementById('date').classList.remove('block-display');
        document.getElementById('middle-right').classList.add('no-display');
        document.getElementById('middle-right').classList.remove('flex-display');
        document.getElementById('title').classList.add('color-blue');
        document.getElementById('title').classList.remove('color-green');
        document.getElementById('title').classList.remove('color-black');
        heading = "Important";
        clearTaskDisplay()
        displayTasks(heading);
    }

    /**
     * Open and displays planned list.
     */
    function openPlannedTasks() {
        document.getElementById('title').innerHTML = 'Planned';
        document.getElementById('date').classList.add('no-display');
        document.getElementById('date').classList.remove('block-display');
        document.getElementById('middle-right').classList.add('no-display');
        document.getElementById('middle-right').classList.remove('flex-display');
        document.getElementById('title').classList.add('color-blue');
        document.getElementById('title').classList.remove('color-green');
        document.getElementById('title').classList.remove('color-black');
        heading = "Planned";
        clearTaskDisplay();
        displayTasks(heading);
    }

    /**
     * Open and displays Assigned list.
     */
    function openAssignedTasks() {
        document.getElementById('title').innerHTML = 'Assigned to me';
        document.getElementById('title').classList.add('color-green');
        document.getElementById('title').classList.remove('color-blue');
        document.getElementById('title').classList.remove('color-black');
        document.getElementById('middle-right').classList.add('no-display');
        document.getElementById('middle-right').classList.remove('flex-display');
        document.getElementById('date').classList.add('no-display');
        document.getElementById('date').classList.remove('block-display');
        heading = "Assigned";
        clearTaskDisplay();
        displayTasks(heading);
    }

    /**
     * Open and displays Tasks list.
     */
    function openAllTasks() {
        document.getElementById('title').innerHTML = 'Tasks';
        document.getElementById('date').classList.add('no-display');
        document.getElementById('date').classList.remove('block-display');
        document.getElementById('middle-right').classList.add('no-display');
        document.getElementById('middle-right').classList.remove('flex-display');
        document.getElementById('title').classList.add('color-blue');
        document.getElementById('title').classList.remove('color-green');
        document.getElementById('title').classList.remove('color-black');
        heading = "Tasks";
        clearTaskDisplay();
        displayTasks(heading);
    }

    /**
     * Opens task input bar.
     */
    function openUserList() {
        document.getElementById('submit').classList.add('flex-display');
        document.getElementById('add-task').style.height = '14%';
        taskInput.style.backgroundColor = "#FAFAFA";
        document.getElementById('task-display').classList.add('add-task-onclick');
        document.getElementById('task-display').classList.remove('add-task-before');
    }

    /**
     * Add task to the Lists.
     * 
     * @param {String} input 
     */
    function addTask(input) {
        if (lists.has(heading)) {
            task = (lists.get(heading)).tasks;
            task.push(new taskObject(input, []));
            if (heading != "Tasks") {
                ((lists.get('Tasks')).tasks).push(new taskObject(input, []));
            }
            taskcount++;
            taskCounter.innerHTML = taskcount;
            taskHeading = input;
            document.getElementById('myday-count').innerHTML = (lists.get("My Day")).tasks.length;
            document.getElementById('important-count').innerHTML = (lists.get("Important")).tasks.length;
        }
        displayTasks(heading);
    }

    /**
     * To display tasks in a list.
     * 
     * @param {String} heading 
     */
    function displayTasks(heading) {
        let row;
        if (lists.has(heading)) {
            task = (lists.get(heading)).tasks;
            if (task.length > 0) {
                for (let t in task) {
                    taskContainer[t].innerHTML = '<div class="checkbox"><i class="ms-Icon ms-icon-CircleRing not-completed"></i></div><div><span id="task-name"></span></div>';
                    taskContainer[t].childNodes[1].childNodes[0].appendChild(document.createTextNode(task[t].taskName));
                    if (completedTasks.includes(task[t].taskName)) {
                        taskContainer[t].childNodes[1].classList.add('task-completed');
                        taskContainer[t].childNodes[0].childNodes[0].innerHTML = "";
                    }
                    taskContainer[t].childNodes[0].addEventListener('click', function () {
                        completeTask(taskContainer[t]);
                    })
                }
                openRightContainer(task);
            }
        }
    }

    /**
     * Makes a Task, a completed Task.
     *  
     * @param {String} taskHead 
     */
    function completeTask(taskHead) {
        taskHead.childNodes[1].classList.add('task-completed');
        let taskName = taskHead.childNodes[1].childNodes[0].textContent;
        let taskHeadingRight = document.getElementById('heading-content').textContent;
        taskHead.childNodes[0].childNodes[0].innerHTML = "";
        completedTasks.push(taskName);

    }

    /**
     * Opens the right column to add step tasks.
     * 
     * @param {String} task 
     */
    function openRightContainer(task) {
        for (let i = 0; i < task.length; i++) {
            taskContainer[i].addEventListener('click', function () {
                addStepTask(task[i].taskName);
            });
        }
    }

    /**
     * opens step task column.
     * 
     * @param {String} taskName 
     */
    function addStepTask(taskName) {
        document.getElementsByClassName('container-right')[0].classList.add('open-right-container');
        document.getElementById('heading-content').textContent = taskName;

        if (completedTasks.includes(taskName)) {
            document.getElementById('heading-content').classList.add('task-completed');
        } else {
            document.getElementById('heading-content').classList.remove('task-completed');

        }
        clearStepTaskDisplay();
        displayStepTask(taskName);
    }

    /**
     * Clears the task display.
     */
    function clearTaskDisplay() {
        for (let i = 0; i < taskContainer.length; i++) {
            taskContainer[i].innerHTML = '';
        }
    }

    /**
     * Adds step to a task.
     * 
     * @param  input 
     */
    function addStep(input) {
        let listElement = [];
        let currentTask = [];
        let taskHeading = document.getElementById('heading-content').textContent;
        listElement = (lists.get(heading)).tasks;
        currentTask = (listElement.find(element => element.taskName == taskHeading));
        (currentTask.subTasksObject).push(input.value);
        clearStepTaskDisplay();
        displayStepTask(taskHeading);
    }

    /**
     * Clears step task display.
     */
    function clearStepTaskDisplay() {
        let dynamicList = document.getElementById('added-steptask');
        let listRow = dynamicList.getElementsByClassName('list-row');
        for (let i = 0; i < listRow.length; i++) {
            listRow[i].innerHTML = '';
        }
    }

    /**
     * Displays the step tasks in a task.
     * 
     * @param {String} taskHeading 
     */
    function displayStepTask(taskHeading) {
        let dynamicList = document.getElementById('added-steptask');
        let listElements = document.getElementsByClassName('steptask-li');
        let taskElement = ((lists.get(heading)).tasks).find(element => element.taskName == taskHeading);
        alert(typeof (taskElement.subTasksObject));
        alert(taskElement.subTasksObject.length)
        if ((taskElement.subTasksObject).length > 0) {
            for (let i = 0; i < taskElement.subTasksObject.length; i++) {
                listElements[i].innerHTML = '<div class="list-row"><div> <i class="ms-Icon blue-icon"></i></div><div><span></span></div></div>';
                listElements[i].childNodes[0].childNodes[1].childNodes[0].appendChild(document.createTextNode(taskElement.subTasksObject[i]));
            }
        }
    }

    init();
})();
