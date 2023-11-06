<template>
 <div class="container" style="width: 400px; margin: auto;">
  <!-- Ограничиваем ширину списка задач и ставим его по центру -->
  <h2 class="todo__caption">Список задач</h2>
  <h3>{{ newTaskValue }}</h3>
  <!-- Заголовок списка -->
  <!-- Дальше будет поле ввода, куда пишем новые задачи -->
  <div id="tdlApp">
    <input 
    @keydown.enter="add"
    v-model="newTaskValue"
    type="text" 
    class="form-control" 
    placeholder="Новая задача">
    <!-- Создаём пока ещё пустой список -->
    <div class="tdlDiv">
      <h3>Актуальные</h3>
      <ul class="tdList list-unstyled">
        <li v-for="task in tasks" :key="task.id">
          {{ task.value }}
          <button
          @click="del(task)"
          >Удалить</button>
        </li>
      </ul>
      <h3>Решенные</h3>
      <ul class="tdList list-unstyled deleted">
        <li v-for="task in solTasks" :key="task.id">
          {{ task.value }}
          <button
          @click="delSol(task)"
          >Удалить</button>
        </li>
      </ul>
    </div>
  </div>
  <!-- Закончили с оформлением списка -->
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTaskValue: "Пу пу пууу",
      tasks: [
        {id: 1, value: "Первая"},
        {id: 2, value: "Вторая"},
        {id: 3, value: "Третья"},
      ],
      solTasks: [
        {id: 1, value: "удаленная 1"},
        {id: 2, value: "удаленная 2"},
        {id: 3, value: "удаленная 3"},
      ]
    }
  },
  methods: {
    add() {
      const newTask = {
        id: 1,
        value: this.newTaskValue
      }
      if (this.tasks.length > 0) {
        newTask.id = this.tasks.at(-1).id
      }
      this.tasks.push(newTask)
      this.newTaskValue = ""
    },
    del(deleteTask) {
      this.tasks = this.tasks.filter(task => task != deleteTask)
      this.solTasks.push(deleteTask)
    },
    delSol(deleteTask) {
      this.solTasks = this.solTasks.filter(task => task != deleteTask)
    }
  }
}

</script>

<style src="./style.css"></style>
