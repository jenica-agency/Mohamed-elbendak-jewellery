// function count nums 
let nums = document.querySelectorAll(".count-sec .container .row .middle-count .nums .num"); 
console.log(nums);
function startCount(el) {
  let goal = el.dataset.goal;
  console.log(goal);
  let count = setInterval(() => {
    el.textContent++;
    
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000/goal);
}
  nums.forEach((num) => startCount(num));