/* OUR DATA */
/* --------------------------------------OUR DATA variables ------------------*/
/*categories */
let allcatName = ["Rings", "Necklaces", "Bracelets", "Anklets", "Earrings"];
let aliasName = ["ring", "neck", "brac", "ankle", "ear"];
let allnum = [21, 17, 42, 18, 79];

/* --------------------------------------functios ------------------*/
/*categories creator *---if main t=1 else t=0---* */

function catCreatorFunc(cId, t) {
  if (t == true) {
    for (let i = 0; i < 8; i++) {
      let singleiteam = `
        <div class="single-cat col text-center">
        <div>
            <a href="categories.html"><img src="images/home/cat${
              i + 1
            }.jpg" class="cat-img" alt="Mohie FineArt's Product Image"></a>
        </div>
        <div class="cat-content text-center p-3">
        <h3 class="cat-name goldencolor"><a href="categories.html">${
          allcatName[i]
        }</a></h3>
        </div>
        </div>
        `;
      let x = document.getElementById(cId);
      x.insertAdjacentHTML("beforeend", singleiteam);
    }
  } else {
    for (let i = 0; i < allcatName.length; i++) {
      let singleiteam = `
                <div class="single-cat col text-center">
                
                <div class="cat-content text-center p-3">
                <h3 class="cat-name goldencolor"><a href="#catCategoryId" id="homecat${i}" onclick="document.getElementById(s_Id).innerHTML='',singleCreatorFunc(h_Id ,s_Id,${i})">${allcatName[i]}</a></h3>
                </div>
                </div>
                `;
      let x = document.getElementById(cId);
      x.insertAdjacentHTML("beforeend", singleiteam);
    }
  }
}
