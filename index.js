const products = [
    {
        id: "1",
        image: "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg",
        alt: "Product",
        title: "Product: Smart Gadget",
        description: "An intelligent device designed for seamless connectivity and enhanced daily productivity."
    },
    {
        id: "2",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
        alt: "Product",
        title: "Product: Secure Software",
        description: "Robust and secure software solutions tailored for businesses of all sizes, protecting your data."
    },
    {
        id: "3",
        image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
        alt: "Service",
        title: "Service: Cloud Solutions",
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
