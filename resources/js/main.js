var btn= document.getElementById("btn").addEventListener("click",getData);
var div = document.getElementById("postsDiv");
var con=0;

function getData(){
    console.log("hi");
    let xhr= new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.onload=function(){
        if (this.status ===200){
            let data = JSON.parse(this.responseText);
            for (let index = 0; index < 1; index++) {
                div.innerHTML+=`
                    <div class="col-3 text-white card bg-dark mx-auto border border-white">
                    <img src="../img/1.jpg" class="card-img-top">
                    <div class="card-body">
                    <div class="card-title" onclick="myFunction()">TITLE: ${data[con].title}
                        <span class="popuptext" id="myPopup">${data[con].body}<br>${data[con].name}</span>
                    </div>
                        
                        </div>
                    </div>
                `
                con=con+1;
                
            }
        }
    }
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}