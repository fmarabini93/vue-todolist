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
            newThing: {
                  text: "",
                  completed: false
            }
      },
      methods: {
            cancelText: function(selectedItem) {
                  this.list.splice(this.list[selectedItem], 1);
            },
            addThing: function() {
                        this.list.push(this.newThing);
            }
      }

      }
);