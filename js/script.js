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
                  console.log(selectedItem);
                  this.list.splice(selectedItem, 1);
            },
            addThing: function() {
                        this.list.push(this.newThing);
            }
      }

      }
);