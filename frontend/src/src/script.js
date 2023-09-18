function loadtextbyid(element){
    var cleanshit = document.getElementById("prev");
    cleanshit.remove();
    var parent = element.parentNode;
    //alert(parent.id);
    var content = parent.querySelector("div");
    //alert(content.id);
    console.log(element.id);
    var bottom = document.querySelector("body");
    let desc = document.createElement("div");
    desc.id = "prev";
    desc.innerHTML = '<p>'+element.id+'</p>';
    bottom.appendChild(desc);
    
}