/* OUR DATA */
/* --------------------------------------OUR DATA variables ------------------*/
/*categories */
//let allcatName = ['ACCESSORIES','OFFICE','BEDROOM','DININGROOM','COMMODE','PRAVANS','LIGHTS','SALON','LIVING'];
//let aliasName = ['access','homeoffice','bedroom','dining','commode','pravan','lights','salon','living'];

//let alliteams = [{catName:'',catalias:''},{catName:'',catalias:''},{catName:'',catalias:''},]

/* --------------------------------------functios ------------------*/
/*categories creator *---if main t=1 else t=0---* */

function singleCreatorFunc(hh, cId, index) {
  for (let i = 0; i < allnum[index]; i++) {
    let singleiteam = `
                <div class="single-cat col text-center">
                <div>
                    <img src="/assets/imgs/iteams/${allcatName[index]}/${
      aliasName[index]
    }${
      i + 1
    }.jpg" class="cat-img" alt="Product Image" data-bs-toggle="modal" data-bs-target="#modal" onclick="document.getElementById(mod_Id).setAttribute('src','/assets/imgs/iteams/${
      allcatName[index]
    }/${aliasName[index]}${i + 1}.jpg');">
                </div>
                <div class="cat-content text-center p-3">
                <h3 class="cat-name goldencolor"><a href=""><img src="/assets/imgs/logo-gold.png"></a></h3>
                </div>
                </div>
                `;
    let x = document.getElementById(cId);
    x.insertAdjacentHTML("beforeend", singleiteam);

    document.getElementById(hh).innerText = allcatName[index];
  }
}
