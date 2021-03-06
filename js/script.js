const app = new Vue (
      {

      el: "#root",
      data: {
            list: [
                        {
                              text: "Grocery shopping",
                              completed: false
                        },
                        {
                              text: "Car washing",
                              completed: false
                        },
                        {
                              text: "Do laundry",
                              completed: false
                        },
                        {
                              text: "Go to meeting",
                              completed: false
                        },
                        {
                              text: "Dentist",
                              completed: false
                        }
            ],
            newText: ""
      },
      methods: {
            addThing: function() {
                  if (this.newText.trim().length > 0) {
                        this.list.push({
                              text: this.newText,
                              completed: false           
                        });
                  }
                  this.newText = "";
            },
            checkDone: function(element) {
                  if (element < this.list.length) {
                        this.list[element].completed = !this.list[element].completed;
                  }
                  setTimeout(()=> {
                        this.list.splice(element, 1);
                  },3000)
            }
      }

      }
);