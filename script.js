


//  SLIDER (HERO) 
window.onload = function () {
  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return;

  let index = 0;

  function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(changeSlide, 3000);
};


// FADE  SCROLL 
function reveal() {
  const text = document.getElementById("text");
  const image = document.getElementById("image");

  const trigger = window.innerHeight * 0.85;

  if (text && text.getBoundingClientRect().top < trigger) {
    text.classList.add("show");
  }

  if (image && image.getBoundingClientRect().top < trigger) {
    image.classList.add("show");
  }
}

window.addEventListener("scroll", reveal);
reveal();


//  COUNTERS 
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {
  let target = +counter.innerText.replace("%", "");
  let count = 0;

  function update() {
    count += target / 100;

    if (count < target) {
      counter.innerText = Math.floor(count);
      setTimeout(update, 20);
    } else {
      counter.innerText = target + (counter.innerText.includes("%") ? "%" : "");
    }
  }

  update();
});


//  TRACK HOVER
const track = document.querySelector(".track");

if (track) {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}


//  TEACHERS MARQUEE 
window.addEventListener("load", () => {
  const marquee = document.getElementById("marquee");

  if (!marquee) return;

  if (!marquee.dataset.duplicated) {
    marquee.innerHTML += marquee.innerHTML;
    marquee.dataset.duplicated = "true";
  }

  const speed = marquee.scrollWidth / 80;
  marquee.style.animationDuration = speed + "s";

  marquee.addEventListener("mouseenter", () => {
    marquee.style.animationPlayState = "paused";
  });

  marquee.addEventListener("mouseleave", () => {
    marquee.style.animationPlayState = "running";
  });
});


//  NEWS SLIDER 
const container = document.getElementById("newsContainer");
const cards = document.querySelectorAll(".news-card");

let scrollIndex = 0;
let autoSlideInterval;

function getCardWidth() {
  return cards.length ? cards[0].offsetWidth + 20 : 0;
}

function autoSlide() {
  if (!cards.length) return;

  scrollIndex++;
  if (scrollIndex > cards.length - 1) {
    scrollIndex = 0;
  }

  container.style.transform =
    `translateX(-${scrollIndex * getCardWidth()}px)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

if (container) {
  container.addEventListener("mouseenter", stopAutoSlide);
  container.addEventListener("mouseleave", startAutoSlide);
  startAutoSlide();
}


// NOTIFICATION MARQUEE 
const marqueeBox = document.getElementById("marqueeBox");

if (marqueeBox) {
  const marqueeList = marqueeBox.querySelector("ul");

  marqueeBox.addEventListener("mouseenter", () => {
    marqueeList.style.animationPlayState = "paused";
  });

  marqueeBox.addEventListener("mouseleave", () => {
    marqueeList.style.animationPlayState = "running";
  });
}


//  SCHOOL SLIDER 
const slider = document.getElementById("schoolSlider");

if (slider) {
  const nextBtn = document.querySelector(".school-next");
  const prevBtn = document.querySelector(".school-prev");

  if (nextBtn) {
    nextBtn.onclick = () => {
      slider.scrollBy({ left: 300, behavior: 'smooth' });
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      slider.scrollBy({ left: -300, behavior: 'smooth' });
    };
  }

  setInterval(() => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  }, 3000);
}