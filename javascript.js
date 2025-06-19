// ---------------------------loader-------------------

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("main-content");
  const header = document.querySelector(".header");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";

      window.scrollTo(0, 0);
      window.dispatchEvent(new Event("scroll"));

      // Animate navbar/header
      header.classList.add("fade-in-navbar");

    }, 500);
  }, 1500);
});

// -----------------------------theme toggle-----------------
var icon = document.getElementById("theme-icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "assets/moon.png";
  }
  else {
    icon.src = "assets/sun.png";
  }
}

// -----------------------cf--------------------

// document.querySelector("#cf-button").addEventListener("click",event=>{

//   event.preventDefault();

//   let p=document.querySelector("#cf-handle").value;

//   fetch('https://codeforces.com/api/user.info?handles='+p)
//   .then((response) => response.json())
//   .then((data) => {
//     document.querySelector(".cf-c-rating").innerHTML=data.result[0].rating;
//     document.querySelector(".cf-m-rating").innerHTML=data.result[0].maxRating;
//     document.querySelector(".cf-c-rank").innerHTML=data.result[0].rank;
//     document.querySelector(".cf-m-rank").innerHTML=data.result[0].maxRank;
//     }
//   )

// })

// document.querySelector('.btn.outline').addEventListener('click', () => {
//   alert('CV download triggered!');
// });

// -----------------------------skills fade-in effect-----------------

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("hii")
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });
});


// ----------------------------home page effect-----------------
document.addEventListener("DOMContentLoaded", () => {
  const slideLeft = document.querySelector(".intro");
  const slideRight = document.querySelector(".image1");

  slideLeft.classList.add("slide-left");
  slideRight.classList.add("slide-right");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // remove when out of view
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(slideLeft);
  observer.observe(slideRight);
});

// ----------------------------about section animation-----------------


const fadeElements = document.querySelectorAll('.fade-left, .fade-right, .fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // optional: for replay on scroll back
    }
  });
}, {
  threshold: 0.3
});

fadeElements.forEach(el => observer.observe(el));


// ---------------------------------project section animation-------------------

const projectRows = document.querySelectorAll('.project-row');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    const el = entry.target;

    if (entry.isIntersecting) {
      el.style.animation = el.classList.contains('reverse')
        ? `slideInRightFade 0.8s ease forwards ${index * 0.2}s`
        : `slideInLeftFade 0.8s ease forwards ${index * 0.2}s`;
    } else {
      el.style.animation = 'none';
      el.style.opacity = 0;
      el.style.transform = el.classList.contains('reverse')
        ? 'translateX(60px)'
        : 'translateX(-60px)';
    }
  });
}, {
  threshold: 0.1
});

projectRows.forEach(row => projectObserver.observe(row));