const products = [
    {
        id: "1",
        image: "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg",
        alt: "Product A",
        title: "Product A: Smart Gadget",
        description: "An intelligent device designed for seamless connectivity and enhanced daily productivity."
    },
    {
        id: "2",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
        alt: "Product B",
        title: "Product B: Secure Software",
        description: "Robust and secure software solutions tailored for businesses of all sizes, protecting your data."
    },
    {
        id: "3",
        image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
        alt: "Service C",
        title: "Service C: Cloud Solutions",
        description: "Scalable and reliable cloud infrastructure to host your applications and data effortlessly."
    }
];

const container = document.getElementById("productCardsContainer");

container.innerHTML = products.map(product => `
    <div class="product-card" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.alt}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
    </div>
  `).join('');


const exploreServicesBtn = document.querySelector('.scroll-to-services');
exploreServicesBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetPosition = servicesSection.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});