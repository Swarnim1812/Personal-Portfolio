var icon =  document.getElementById("theme-icon");

    icon.onclick =  function(){
      document.body.classList.toggle("light-theme");
      if(document.body.classList.contains("light-theme")){
        icon.src = "assets/moon.png";
      }
      else{
        icon.src =  "assets/sun.png";
      }
    }

// -----------------------cf--------------------

document.querySelector("#cf-button").addEventListener("click",event=>{

  event.preventDefault();

  let p=document.querySelector("#cf-handle").value;

  fetch('https://codeforces.com/api/user.info?handles='+p)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".cf-c-rating").innerHTML=data.result[0].rating;
    document.querySelector(".cf-m-rating").innerHTML=data.result[0].maxRating;
    document.querySelector(".cf-c-rank").innerHTML=data.result[0].rank;
    document.querySelector(".cf-m-rank").innerHTML=data.result[0].maxRank;
    }
  )

})

document.querySelector('.btn.outline').addEventListener('click', () => {
  alert('CV download triggered!');
});






    