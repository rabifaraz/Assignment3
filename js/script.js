
let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]


const render_array_data = document.getElementById("rendered_data");

arr.map((current_object, curent_index) => {
  const { brand, model, price, camera,ram,rom } = current_object;
  const formattedPrice = parseInt(price).toLocaleString(); // Format price with a comma

  return (render_array_data.innerHTML += `<tr>
  <td class="number text-center">${curent_index +1}</td>
        <td class="image"><img src="assets/img/portfolio/thumbnails/img-placeholder.png" alt=""></td>
        <td class="product"><strong>Brand: ${brand}</strong><br><strong>Model: </strong>${model}<br><strong>Camera: </strong>${camera}<br><strong>RAM: </strong>${ram}<br><strong>ROM: </strong>${rom}</td>
        <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span></td>
        <td class="price text-right"><strong>${formattedPrice}</strong>/RS.</td>
</tr>`);
});

const show_result_desc = document.getElementById('show_result_description');

let selectedCategory = 'All Categories'; // Default category

function selectCategory(category) {
  selectedCategory = category;
  document.getElementById('selectedCategory').textContent = 'Selected Category: ' + category;
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Function to handle the 'keydown' event on the input field
function handleEnterKey(event) {
    if (event.key === "Enter") {
      // If the Enter key is pressed, trigger the click event on the search button
      searchButton.click();
    }
  }

  searchInput.addEventListener("keydown", handleEnterKey);

function renderTable() {
  render_array_data.innerHTML = ""; // Clear the previous content

  const searchTerm = searchInput.value.toLowerCase();

  const filteredData = arr.filter((current_object) => {
    const { brand, model, camera, ram, rom, price } = current_object;

    switch (selectedCategory) {
      case 'Brand':
        return brand.toLowerCase().includes(searchTerm);
      case 'Model':
        return model.toLowerCase().includes(searchTerm);
      case 'Camera':
        return camera.toLowerCase().includes(searchTerm);
      case 'RAM':
        return ram.toLowerCase().includes(searchTerm);
      case 'ROM':
        return rom.toLowerCase().includes(searchTerm);
      case 'Price':
        // Check if 'price' is a string representing a number before formatting
        const formattedPrice = isNaN(parseFloat(price)) ? price : parseInt(price).toLocaleString();
        return formattedPrice.toLowerCase().includes(searchTerm);
      default:
        return (
          brand.toLowerCase().includes(searchTerm) ||
          model.toLowerCase().includes(searchTerm) ||
          camera.toLowerCase().includes(searchTerm) ||
          ram.toLowerCase().includes(searchTerm) ||
          rom.toLowerCase().includes(searchTerm) ||
          price.toLowerCase().includes(searchTerm)
        );
    }
  });

  filteredData.map((current_object, curent_index) => {
    const { brand, model, camera, ram, rom, price } = current_object;

    // Calculate formattedPrice based on the 'Price' category
    const formattedPrice = selectedCategory === 'Price' ? (
      isNaN(parseFloat(price)) ? price : parseInt(price).toLocaleString()
    ) : price;

    return (render_array_data.innerHTML += `<tr>
        <td class="number text-center">${curent_index + 1}</td>
        <td class="image"><img src="assets/img/portfolio/thumbnails/img-placeholder.png" alt=""></td>
        <td class="product"><strong>Brand: ${brand}</strong><br><strong>Model: </strong>${model}<br><strong>Camera: </strong>${camera}<br><strong>RAM: </strong>${ram}<br><strong>ROM: </strong>${rom}</td>
        <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span></td>
        <td class="price text-right"><strong>${formattedPrice}</strong>/RS.</td>
    </tr>`);
  });

  show_result_desc.innerHTML = `Showing results for <strong>${selectedCategory}: ${searchTerm}</strong>`;
}

// Attach an event listener to the input button for real-time filtering
searchButton.addEventListener("click", renderTable);