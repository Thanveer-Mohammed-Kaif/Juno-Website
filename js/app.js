document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const country = params.get("country") || "india";
  const currentProductId = params.get("id");
  const jsonFile =
    country.toLowerCase() === "usa"
      ? "../json/usa-product.json"
      : "../json/indian-product.json";

  fetch(jsonFile)
    .then((res) => res.json())
    .then((data) => {
      let relatedProducts = data;
      if (currentProductId) {
        relatedProducts = data.filter((p) => p.id != currentProductId);
      }
      createRelatedProductsSlickCarousel(relatedProducts, country);
    })
    .catch((err) =>
      console.error("Error loading products for related section:", err)
    );
});
function createRelatedProductsSlickCarousel(products, currentCountry) {
  const sliderContainer = document.getElementById("related-products-slider");

  if (!sliderContainer) {
    console.error("Related products slider container not found!");
    return;
  }
  sliderContainer.innerHTML = ""; // Clear existing content

  if (!products || products.length === 0) {
    sliderContainer.innerHTML =
      "<p class='text-center'>No related products available.</p>";
    return;
  }
  products.forEach((product) => {
    const productCardHtml = `
      <div class="product-card mb-5 mx-5">
        <img src="${product.image}" alt="${
      product.name
    }" class="product-img w-100" />
        <h5 class="product-name text-capitalize">${product.name}</h5>
        <p class="text-muted">${product.weight || ""}</p>
        <p class="product-desc">${product.Description || ""}</p>
        <p>
          <span class="rating">★</span> ${product.rating || "4.7"}
          (${product.reviews || "120"} reviews)
        </p>
        <a href="detail.html?country=${currentCountry}&id=${
      product.id
    }" class="view-btn text-decoration-none">View Details</a>
      </div>
    `;
    const slideDiv = document.createElement("div");
    slideDiv.innerHTML = productCardHtml;
    sliderContainer.appendChild(slideDiv);
  });

  $("#related-products-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
