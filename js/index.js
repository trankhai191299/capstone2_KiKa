//Get feature product
function getFeatureShoe() {
    let promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    })
    promise.then((result)=>{
        // console.log(result.data)
        renderFeatureShoe(result.data.content,"productFeatureTbl")
    })
    promise.catch((e)=>{
        console.log(e)
    })
}
//Get carousel shoe
async function getCarouselShoe(){
  let promise = axios({
    url:'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
  })
  await promise.then((result)=>{
    // console.log(result.data)
    renderCarouselShoe(result.data.content,"carousel-content");
})
  await promise.catch((e)=>{
    console.log(e)
})
}
//Show feature shoe data
function renderFeatureShoe(arrSP,idBody){
    let html = "";
    let featureArr = randomItem(arrSP,6);
    for (let i in featureArr){
        let shoe = featureArr[i]
        let{id,name,price,shortDescription,image} = shoe
        html += `
        <div class="col-lg-4 col-sm-6 col-12 product-main-part">
        <div class="card text-start m-3">
          <div class="card-top">
            <img
              class="card-img-top"
              src="${image}"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h4 class="card-title product-name">${name}</h4>
            <p class="card-text product-descript">${shortDescription.length > 50?shortDescription.substring(0,50)+"...":shortDescription}</p>
          </div>
          <div
            class="card-footer d-flex justify-content-between align-items-center"
          >
            <a href="./detail.html?getbyid=${id}" class="btnBuy w-50 text-center"
              >Buy Now</a
            >
            <p class="price d-inline-block text-center w-50 m-0">${price}$</p>
          </div>
        </div>
      </div>
        `
    }
    document.getElementById(idBody).innerHTML = html
}
//Show carousel shoe data
function renderCarouselShoe(arrSP,idBody){
  let html = "";
  let carouselArr = randomItem(arrSP,3)
  for (let i in carouselArr){
    let shoe = carouselArr[i];
    let {id,image,name,shortDescription} = shoe;
    html += `
    <div class="slick-item">
    <div class="row align-items-center">
      <div class="col-8">
        <div class="carousel-left">
          <img src=${image} alt="..." height="auto" />
        </div>
      </div>
      <div class="col-4">
        <div class="carousel-right">
          <div class="shoe-info">
            <h3 class="shoe-name">${name}</h3>
            <p class="shoe-description">${shortDescription.length > 50?shortDescription.substring(0,50)+"...":shortDescription}</p>
            <a class="btnBuy" href="./detail.html?getbyid=${id}">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
  document.getElementById(idBody).innerHTML = html;
}
//Random Item from Api
function randomItem(arr,nlength){
  let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let k = Math.floor(Math.random()*arr.length)
            if (!newArr.includes(arr[k]) && newArr.length < nlength) {
                newArr.push(arr[k]);
            }
            if (newArr.length == length) {
                break;
            }
    }
    return newArr;
}
//------------------------------------------------
window.onload = () => {
  getFeatureShoe();
  getCarouselShoe();
} 