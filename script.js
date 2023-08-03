function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function showFunction () {
    document.getElementsByClassName("container")[0].style.display="block"
    console.log("showFunction")
    var home_tasks= document.getElementsByClassName("home_tasks")
    Array.from(home_tasks).forEach((element)=>{
      element.style.display="block"
    })
  }
  function taskFunction() {
    var x = document.getElementById("taskList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }