window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("getbyid");
  console.log("params", myParam);
  //call api load lên giao diện
  getDetail(myParam);
};

// lay Api detail cua sp
function getDetail(id) {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
    method: "GET",
  });
  promise.then((result) => {
    renderDetail(result.data.content, "detail");
    renderRelateProduct(result.data.content.relatedProducts, "relatedProducts");
  });
  promise.catch((e) => {
    console.log(e);
  });
}

//render detail len giao dien
function renderDetail(arrSP, idBody) {
  let { name, price, id, size, image, description } = arrSP;
// muon map ra so size nhung ko lam duoc danh phai su dung cach dot
//   let renderSize = size.map(
//     (index) => `<button class="me-2 ps-1 pe-1">${index}</button>`
//   );
//   let sizes = JSON.stringify(renderSize)
//   console.log(sizes);
  let html = `
    <div class="row" id="${id}">
          <div class="col-4 ps-5 pt-5">
            <img class="bg-light w-100" src=${image} alt="" />
          </div>
          <div class="col-6 p-5">
            <h3>${name}</h3>
            <p>${description}</p>
            <span style="display: block" class="mb-2 text-success fw-bold"
              >Available size</span
            >
            <button class="me-2 ps-1 pe-1">${size[0]}</button>
            <button class="me-2 ps-1 pe-1">${size[1]}</button>
            <button class="me-2 ps-1 pe-1">${size[2]}</button>
            <button class="me-2 ps-1 pe-1">${size[3]}</button>
            <button class="me-2 ps-1 pe-1">${size[4]}</button>
            <button class="me-2 ps-1 pe-1">${size[5]}</button>
            <button class="me-2 ps-1 pe-1">${size[6]}</button>
            <span style="display: block" class="mt-2 mb-2 text-danger fw-bold"
              >${price}$</span
            >
            <button
              class="add ps-2 pe-2 text-white"
              style="background-color: #6181f3; border: none"
            >
              +
            </button>
            <span class="ms-1 me-1">1</span>
            <button
              class="minus ps-2 pe-2 text-white"
              style="background-color: #6181f3; border: none"
            >
              -
            </button>
            <button
              style="
                display: block;
                background: linear-gradient(
                  270deg,
                  rgba(62, 32, 248, 0.9) 5.14%,
                  #d017ee 89.71%
                );
                border: none;
              "
              class="cart mt-3 p-2 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
    `;
  document.getElementById(idBody).innerHTML = html;
}

//render relate product
function renderRelateProduct(arrRelatedProducts, idBody) {
  let html = "";
  for (let i in arrRelatedProducts.slice(0, 6)) {
    let shoe = arrRelatedProducts[i];
    let { id, name, price, shortDescription, image } = shoe;
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
            <p class="card-text product-descript">${
              shortDescription.length > 50
                ? shortDescription.substring(0, 50) + "..."
                : shortDescription
            }</p>
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
        `;
  }
  document.getElementById(idBody).innerHTML = html;
}
