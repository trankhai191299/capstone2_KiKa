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
//Show feature shoe data
function renderFeatureShoe(arrSP,idBody){
    let html = ""
    for (let i in arrSP.slice(0,6)){
        let shoe = arrSP[i]
        let{id,name,price,shortDescription,image} = shoe
        html += `
        <div class="col-4">
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
            <a href="./detail.html?shoeid=${id}" class="btnBuy w-50 text-center"
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

//------------------------------------------------
window.onload = () => {
  getFeatureShoe()
} 