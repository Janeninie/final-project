function loadtextbyid(element){
    var parent = element.parentNode;
    //alert(parent.id);
    var content = parent.querySelector("div");
    //alert(content.id);
    console.log(element.id);
    var bottom = document.querySelector("body");
    let desc = document.createElement("div");
    desc.innerHTML = '<p>'+element.id+'</p>';
    bottom.appendChild(desc);
    
}
