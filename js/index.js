const loadCatagory = async () => {
  const rea = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
  const data = await rea.json();
  const catagory = data.data;
  // allProducts(result);
  console.log(catagory);
  // allProducts(product);
  allCatagory(catagory);
}
loadCatagory();

const allCatagory = catagory => {
  const catagoryContainer = document.getElementById('catagoryContainer');
  // catagoryContainer.innerText='';
  catagory.forEach(catagory => {
    const catagoryDiv = document.createElement('div');
    catagoryDiv.innerHTML = `
            <button onclick="catagoryId('${catagory.category_id}')" class="btn btn-ghost tab tab-active">${catagory.category}</button>
            `
    catagoryContainer.appendChild(catagoryDiv);

  })
}

// catagory ID Part
const catagoryId = async (catagoryId) => {
  console.log(catagoryId);
  const productContainer = document.getElementById('productContainer');
  productContainer.innerText = "";
  const errorButton=document.getElementById('errorButton');
    errorButton.innerText="";
  if (catagoryId==='1005') {
  
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
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await response.json();
    const dataRes = data.data;

    console.log(dataRes);

    dataRes.forEach((product => {
      const productDiv = document.createElement('div');
      productDiv.classList = `card my-6 bg-base-100 shadow-xl`;
      productDiv.innerHTML = `
      <div>
      <div class="relative">
        <div>
          <figure><img class="h-80 w-full rounded-md" src="${product.thumbnail}" alt="" /></figure>
        </div>
        <div class="absolute bottom-0 right-0 text-white bg-black">
          <p>${product.others.posted_date}</p>
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
            <p>${product.others.views} views</p>
          </div>
        </div>
      </div>
    </div>
      `;
      productContainer.appendChild(productDiv);
    }));
  }
}


const loadProducts = async () => {
  const rea = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
  const data = await rea.json();
  const product = data.data;
  console.log(product);
  // allProducts(product);
}
loadProducts()
catagoryId("1000")

// optional part
