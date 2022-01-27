var mini = true;

document.getElementById("mySidebar").addEventListener("mouseover",toggleSideBar);
document.getElementById("mySidebar").addEventListener("mouseout", toggleSideBar);
function toggleSideBar(){
    if(mini){
        console.log("opening sidebar..");
        document.getElementById("mySidebar").style.width="200px";
        document.getElementById("main").style.marginLeft="200px"
        mini=false;
    } else{
        console.log("closing sidebar..");
        document.getElementById("mySidebar").style.width="75px";
        document.getElementById("main").style.marginLeft="75px";
        mini=true;
    }
}

function toggleSideBarBtn(){
    var buttonClick=false;
    document.getElementById("mySidebar").removeEventListener("mouseover",toggleSideBar);
    document.getElementById("mySidebar").removeEventListener("mouseout", toggleSideBar);
    if(mini){
        console.log("opening sidebar from button..");
        document.getElementById("mySidebar").style.width="200px";
        document.getElementById("main").style.marginLeft="200px"
        document.getElementById("left-bar").style.marginLeft="205px"
        mini=false;
        buttonClick=true;
    } else{
        console.log("closing sidebar from button..");
        document.getElementById("mySidebar").style.width="75px";
        document.getElementById("main").style.marginLeft="75px";
        document.getElementById("left-bar").style.marginLeft="80px"
        mini=true;
    buttonClick=false;
    }

   if(buttonClick){
    console.log("listeners are removed..");
   } else{
    document.getElementById("mySidebar").addEventListener("mouseover",toggleSideBar);
    document.getElementById("mySidebar").addEventListener("mouseout", toggleSideBar);
   }

}

// onmouseover="toggleSideBar()" onmouseout="toggleSideBar()"


