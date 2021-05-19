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
            cancelText: function(selectedItem) {
                  this.list.splice(selectedItem, 1);
                  this.list[selectedItem].completed = true;
            },
            addThing: function() {
                  if (this.newText.trim().length > 0) {
                        this.list.push({
                              text: this.newText,
                              completed: false           
                        });
                        this.newText = "";
                  }
            },
            checkDone: function(element) {
                  console.log(element);
                  if (this.list[element].completed == false) {
                        this.list[element].completed = true;
                  } else {
                        this.list[element].completed = false;
                  }
            }
      }

      }
);