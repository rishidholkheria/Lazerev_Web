var page2Video = document.querySelector("#page2_video");
var page2VideoHover = document.querySelector("#page2_video_hover");

page2Video.addEventListener("mouseenter", function () {
  gsap.to(page2VideoHover, {
    opacity: 1,
    scale: 1,
  });
});

page2Video.addEventListener("mouseleave", function () {
    gsap.to(page2VideoHover, {
      opacity: 0,
      scale: 0,
    });
  });

page2Video.addEventListener("mousemove", function (e) {
  const vidDimension = page2Video.getBoundingClientRect();
  const x = e.clientX - vidDimension.left-30;
  const y = e.clientY - vidDimension.top;

  gsap.to(page2VideoHover, {
    x: x,
    y: y,
    duration: 0.5,
  });
});

function page3Animations() {
  var page3RightElements = document.querySelectorAll(".page3_right_desc");

  //querySelector gave a Nodelist having all elements
  page3RightElements.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      //Why 3rd? --- childNodeList will have 'text'(jo space tag likhne me lia) also
      //We are skipping those 'text' elemets in the childNodeList -- 0th, 2nd elements
      //1st elem here is p tag
      // USED children because it gives only the tags without 'text' --- easier

      // e.children[1].style.opacity = "1"

      //Using gsap for smooth animations
      gsap.to(e.children[1], {
        opacity: 1,
        scale: 1,
      });
    });
    e.addEventListener("mouseleave", function () {
      // e.children[1].style.opacity = "0"
      gsap.to(e.children[1], {
        opacity: 0,
        scale: 0,
      });
    });

    e.addEventListener("mousemove", function (event) {
      //e.getBoundingClientRect() gets the dimensions of the rectangle(div)
      const rect = e.getBoundingClientRect();
      const x = event.clientX - rect.left - 80; // Mouse x position within the element
      const y = event.clientY - rect.top - 180; // Mouse y position within the element

      gsap.to(e.children[1], {
        x: x,
        y: y,
        duration: 0.5,
      });
    });
  });
}

page3Animations();
