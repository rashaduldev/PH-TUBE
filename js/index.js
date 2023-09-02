const loadCatagory = async () => {
  const rea = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
  const data = await rea.json();
  const catagory = data.data;
  // allProducts(result);
  // console.log(catagory);
  // allProducts(product);
  allCatagory(catagory);

}
loadCatagory();


const allCatagory = (catagory) => {
  const catagoryContainer = document.getElementById('catagoryContainer');
  catagoryContainer.innerText = '';

  catagory.forEach((cat) => {
    const catagoryDiv = document.createElement('div');
    catagoryDiv.innerHTML = `
      <button onclick="catagoryId('${cat.category_id}')" class="btn btn-ghost tab tab-active">${cat.category}</button>
    `;
    catagoryContainer.appendChild(catagoryDiv);
  });
};

/ /

const sortbyview = async () => {
  // alert('hi')
  const sortButton = document.getElementById('sortButton');
  const catagoryId = sortButton.getAttribute("data-sortByview");

  // api call 
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
  const data = await response.json();
  const dataRes = data.data;

  const products = dataRes;

  // console.log(products.length);


  const errorButton = document.getElementById('errorButton');
  errorButton.innerText = '';

  const productContainer = document.getElementById('productContainer');
  productContainer.innerText = '';


  if (products.length <= 0) {
    const productIMG = document.createElement('div');
    productIMG.innerHTML = `
      <div>
        <div class="grid grid-cols-1 justify-center text-center items-center m-auto lg:mt-10">
          <p><img class="text-center mx-auto" src="../img/Icon.png" alt="" /></p>
          <h2 class="text-3xl">Oops!! Sorry, There is no <br> content here</h2>
        </div>
      </div>
    `;
    errorButton.appendChild(productIMG);

  } else {
    // alert(products.length);
    products.sort((a, b) => {
      const viewOne = parseFloat(a.others.views);
      const viewTwo = parseFloat(b.others.views);
      return viewTwo - viewOne;
      // return viewOne-viewTwo;   
    })

    // product loop start
    products.forEach((product) => {
      // 
      const productDiv = document.createElement('div');
      const views = product.others.views;

      function timeShow(Seconds) {
        const hours = Math.floor(Seconds / 3600);
        const remainingSeconds = Seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        return `<div>${hours}hrs ${minutes}min ago</div>`
      }

      productDiv.classList = `card my-6 bg-base-100 shadow-xl`;
      productDiv.innerHTML = `
        <div>
          <div class="relative">
            <div>
              <figure><img class="h-80 w-full rounded-md" src="${product.thumbnail}" alt="" /></figure>
            </div>
            <div class="absolute bottom-0 right-0 text-white bg-black">
              <p>${product.others.posted_date?timeShow(product.others.posted_date):""}</p>
            </div>
          </div>
          <div class="flex">
            <div>
              <img class="w-10 h-10 rounded-full mt-7 ml-3" src="${product.authors[0].profile_picture}" alt="">
            </div>
            <div>
              <div class="card-body text-left">
                <h2 class="card-title">${product.title}</h2>
                <div class="flex items-center gap-3">
                  <p>${product.authors[0].profile_name}</p>
                  ${product.authors[0].verified ? `
                    <p>
                      <i class="fa-solid fa-circle-check" style="color: #2568ef;"></i>
                    </p>
                  ` : ''}
                </div>
                <p>${views} views</p>
              </div>
            </div>
          </div>
        </div>
      `;
      productContainer.appendChild(productDiv);
    });

  }


  // console.log(products);
}



const catagoryId = async (catagoryId) => {
  // console.log(catagoryId);
  const sortButton = document.getElementById('sortButton');

  sortButton.setAttribute("data-sortByview", catagoryId);
  // sortButton.setAttribute("data-sortByview","0118421545");

  const productContainer = document.getElementById('productContainer');
  productContainer.innerText = '';
  const errorButton = document.getElementById('errorButton');
  errorButton.innerText = '';


  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
  const data = await response.json();
  const dataRes = data.data;

  // Define and populate the products array within this scope
  const products = dataRes;

  // console.log(products);


  if (products.length <= 0) {
    const productIMG = document.createElement('div');
    productIMG.innerHTML = `
      <div>
        <div class="grid grid-cols-1 justify-center text-center items-center m-auto lg:mt-10">
          <p><img class="text-center mx-auto" src="../img/Icon.png" alt="" /></p>
          <h2 class="text-3xl">Oops!! Sorry, There is no <br> content here</h2>
        </div>
      </div>
    `;
    errorButton.appendChild(productIMG);
  } else {
    products.forEach((product) => {
      // 
      const productDiv = document.createElement('div');
      const views = product.others.views;

      function timeShow(Seconds) {
        const hours = Math.floor(Seconds / 3600);
        const remainingSeconds = Seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        return `<div>${hours}hrs ${minutes}min ago</div>`
      }

      productDiv.classList = `card my-6 bg-base-100 shadow-xl`;
      productDiv.innerHTML = `
        <div>
          <div class="relative">
            <div>
              <figure><img class="h-80 w-full rounded-md" src="${product.thumbnail}" alt="" /></figure>
            </div>
            <div class="absolute bottom-0 right-0 text-white bg-black">
              <p>${product.others.posted_date?timeShow(product.others.posted_date):""}</p>
            </div>
          </div>
          <div class="flex">
            <div>
              <img class="w-10 h-10 rounded-full mt-7 ml-3" src="${product.authors[0].profile_picture}" alt="">
            </div>
            <div>
              <div class="card-body text-left">
                <h2 class="card-title">${product.title}</h2>
                <div class="flex items-center gap-3">
                  <p>${product.authors[0].profile_name}</p>
                  ${product.authors[0].verified ? `
                    <p>
                      <i class="fa-solid fa-circle-check" style="color: #2568ef;"></i>
                    </p>
                  ` : ''}
                </div>
                <p>${views} views</p>
              </div>
            </div>
          </div>
        </div>
      `;
      productContainer.appendChild(productDiv);
    });
  }
};



const loadProducts = async () => {
  const rea = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
  const data = await rea.json();
  const product = data.data;
}
loadProducts()
catagoryId("1000")