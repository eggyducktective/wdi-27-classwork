console.log('Are you ready');

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});

const myApp = new Vue({
  el: '#app',
  data: {
    message: 'Hello World from Vue!',
    cat: 'http://placekitten.com/400/400',
    seen: true,
    newItemText: '',
    todos: [
      {id: 1, text: 'Learn Js'},
      {id: 2, text: 'Learn Vue'},
      {id: 3, text: 'Take over the world'}
    ]
  },
  methods: {
    addItem: function(){
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newItemText

      });
    },
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
});
