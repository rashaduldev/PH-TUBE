// Function to convert seconds to hours, minutes, and seconds
function convertSecondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return { hours, minutes, seconds: remainingSeconds };
  }
  
  const catagoryId = async (catagoryId) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerText = '';
    const errorButton = document.getElementById('errorButton');
    errorButton.innerText = '';
  
    if (catagoryId === '1005') {
      // ... (your existing code for handling '1005' case)
    } else {
      const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
      const data = await response.json();
      const dataRes = data.data;
  
      // Define and populate the products array within this scope
      const products = dataRes;
  
      products.forEach((product) => {
        const productDiv = document.createElement('div');
        const views = product.others.views;
  
        // Convert views to hours, minutes, and seconds
        const { hours, minutes, seconds } = convertSecondsToTime(views);
        console.log(convertSecondsToTime);
  
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
                  <p>${hours} hours ${minutes} minutes ${seconds} seconds</p>
                </div>
              </div>
            </div>
          </div>
        `;
        productContainer.appendChild(productDiv);
      });
    }
  };
  