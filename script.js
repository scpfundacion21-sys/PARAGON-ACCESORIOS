const products = [

    /* =====================================================
       HELMET
    ===================================================== */

    {
        name: "HELMET BASE",
        category: "helmet",
        file: "HELMET_BASE.png",
        image: "helmet/HELMET_BASE.png",

        type: "Tactical Helmet",
        material: "Polímero técnico de alta resistencia",
        system: "Sistema de casco modular",
        function: "Protección y soporte de accesorios",
        compatibility: "Accesorios compatibles con casco táctico",
        configuration: "Modular"
    },

    {
        name: "HELMET COVER",
        category: "helmet",
        file: "HELMET_COVER.png",
        image: "helmet/HELMET_COVER.png",

        type: "Helmet Cover",
        material: "Textil sintético resistente",
        system: "Sistema de cobertura",
        function: "Protección y configuración exterior",
        compatibility: "Cascos compatibles",
        configuration: "Extraíble"
    },

    {
        name: "HELMET GOGGLES",
        category: "helmet",
        file: "HELMET_GOGGLES.png",
        image: "helmet/HELMET_GOGGLES.png",

        type: "Protective Goggles",
        material: "Polímero técnico y lente resistente",
        system: "Sistema de protección ocular",
        function: "Protección de los ojos",
        compatibility: "Configuraciones de casco compatibles",
        configuration: "Ajustable"
    },

    {
        name: "HELMET GPNVG 18",
        category: "helmet",
        file: "HELMET_GPNVG_18.png",
        image: "helmet/HELMET_GPNVG_18.png",

        type: "Multi-Tube NVG",
        material: "Polímero técnico y componentes electrónicos",
        system: "Sistema de visión nocturna",
        function: "Observación en condiciones de baja iluminación",
        compatibility: "Monturas NVG compatibles",
        configuration: "Multitubo"
    },

    {
        name: "HELMET HEADSET",
        category: "helmet",
        file: "HELMET_HEADSET.png",
        image: "helmet/HELMET_HEADSET.png",

        type: "Tactical Headset",
        material: "Polímero técnico y materiales acolchados",
        system: "Sistema de comunicación",
        function: "Comunicación y protección auditiva",
        compatibility: "Sistemas de comunicación compatibles",
        configuration: "Montable"
    },

    {
        name: "HEADSET ADAPTER",
        category: "helmet",
        file: "HELMET_HEADSET_ADAPTER.png",
        image: "helmet/HELMET_HEADSET_ADAPTER.png",

        type: "Headset Adapter",
        material: "Polímero técnico",
        system: "Adaptador de montaje",
        function: "Fijación del headset al casco",
        compatibility: "Headsets y cascos compatibles",
        configuration: "Modular"
    },

    {
        name: "IFF STROBE",
        category: "helmet",
        file: "HELMET_IFF_STROBE.png",
        image: "helmet/HELMET_IFF_STROBE.png",

        type: "Identification Strobe",
        material: "Polímero técnico",
        system: "Señalización electrónica",
        function: "Identificación visual",
        compatibility: "Montajes compatibles",
        configuration: "Compacta"
    },

    {
        name: "DUAL TUBE NVG",
        category: "helmet",
        file: "HELMET_NVG_DUAL_TUBE.png",
        image: "helmet/HELMET_NVG_DUAL_TUBE.png",

        type: "Dual-Tube NVG",
        material: "Polímero técnico y componentes electrónicos",
        system: "Visión nocturna",
        function: "Observación en baja iluminación",
        compatibility: "Monturas NVG compatibles",
        configuration: "Dual-Tube"
    },

    {
        name: "MONOCULAR NVG",
        category: "helmet",
        file: "HELMET_NVG_MONOCULAR.png",
        image: "helmet/HELMET_NVG_MONOCULAR.png",

        type: "Monocular NVG",
        material: "Polímero técnico y componentes electrónicos",
        system: "Visión nocturna",
        function: "Observación en baja iluminación",
        compatibility: "Monturas NVG compatibles",
        configuration: "Monocular"
    },

    {
        name: "NVG MOUNT",
        category: "helmet",
        file: "HELMET_NVG_MOUNT.png",
        image: "helmet/HELMET_NVG_MOUNT.png",

        type: "NVG Mount",
        material: "Polímero técnico / aleación ligera",
        system: "Sistema de montaje",
        function: "Fijación de dispositivos NVG",
        compatibility: "Dispositivos NVG compatibles",
        configuration: "Ajustable"
    },

    {
        name: "SIGNAL LIGHT",
        category: "helmet",
        file: "HELMET_SIGNAL_LIGHT.png",
        image: "helmet/HELMET_SIGNAL_LIGHT.png",

        type: "Signal Light",
        material: "Polímero técnico",
        system: "Iluminación auxiliar",
        function: "Señalización e identificación",
        compatibility: "Montajes compatibles",
        configuration: "Compacta"
    },


    /* =====================================================
       VEST
    ===================================================== */

    {
        name: "ADMIN",
        category: "vest",
        file: "ADMIN.png",
        image: "ADMIN.png",

        type: "Admin Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Organización de pequeños accesorios",
        compatibility: "Sistemas MOLLE compatibles",
        configuration: "Modular"
    },

    {
        name: "ESCOPETA",
        category: "vest",
        file: "ESCOPETA.png",
        image: "ESCOPETA.png",

        type: "Shotgun Component",
        material: "Material técnico según configuración",
        system: "Sistema modular",
        function: "Componente de configuración del equipo",
        compatibility: "Configuración compatible",
        configuration: "Modular"
    },

    {
        name: "HIDRATACION",
        category: "vest",
        file: "HIDRATACION.png",
        image: "HIDRATACION.png",

        type: "Hydration System",
        material: "Textil sintético y depósito flexible",
        system: "Hydration Carrier",
        function: "Transporte de agua",
        compatibility: "Chalecos y sistemas MOLLE compatibles",
        configuration: "Modular"
    },

    {
        name: "IFAK",
        category: "vest",
        file: "IFAK.png",
        image: "IFAK.png",

        type: "IFAK Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de material médico",
        compatibility: "Sistemas MOLLE compatibles",
        configuration: "Modular"
    },

    {
        name: "K-ZERO SF FRONT",
        category: "vest",
        file: "K-ZERO-SF-FRONT.png",
        image: "K-ZERO-SF-FRONT.png",

        type: "Plate Carrier",
        material: "Nylon de alta resistencia",
        system: "MOLLE / Modular",
        function: "Transporte y organización de equipamiento",
        compatibility: "Pouches y accesorios MOLLE",
        configuration: "Modular"
    },

    {
        name: "K-ZERO SF FRONT 2",
        category: "vest",
        file: "K-ZERO-SF-FRONT2.png",
        image: "K-ZERO-SF-FRONT2.png",

        type: "Plate Carrier",
        material: "Nylon de alta resistencia",
        system: "MOLLE / Modular",
        function: "Transporte y organización de equipamiento",
        compatibility: "Pouches y accesorios MOLLE",
        configuration: "Modular"
    },

    {
        name: "PHONE",
        category: "vest",
        file: "PHONE.png",
        image: "PHONE.png",

        type: "Phone Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de dispositivo móvil",
        compatibility: "Sistemas MOLLE compatibles",
        configuration: "Modular"
    },

    {
        name: "PISTOL",
        category: "vest",
        file: "PISTOL.png",
        image: "PISTOL.png",

        type: "Pistol Component",
        material: "Material técnico según configuración",
        system: "Sistema modular",
        function: "Componente de configuración del equipo",
        compatibility: "Configuración compatible",
        configuration: "Modular"
    },

    {
        name: "PORTA GRANADAS",
        category: "vest",
        file: "PORTA-GRANADAS.png",
        image: "PORTA-GRANADAS.png",

        type: "Utility Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de accesorios",
        compatibility: "Sistemas MOLLE compatibles",
        configuration: "Modular"
    },

    {
        name: "RADIO",
        category: "vest",
        file: "RADIO.png",
        image: "RADIO.png",

        type: "Radio Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte y organización de radio",
        compatibility: "Radios de tamaño compatible",
        configuration: "Ajustable"
    },

    {
        name: "RIFLE",
        category: "vest",
        file: "RIFLE.png",
        image: "RIFLE.png",

        type: "Rifle Component",
        material: "Material técnico según configuración",
        system: "Sistema modular",
        function: "Componente de configuración del equipo",
        compatibility: "Configuración compatible",
        configuration: "Modular"
    },

    {
        name: "SUJETA FUSIL",
        category: "vest",
        file: "SUJETA-FUSIL.png",
        image: "SUJETA-FUSIL.png",

        type: "Retention Accessory",
        material: "Nylon y materiales sintéticos resistentes",
        system: "Sistema de retención",
        function: "Sujeción y organización",
        compatibility: "Configuraciones compatibles",
        configuration: "Ajustable"
    },

    {
        name: "TORNIQUETE",
        category: "vest",
        file: "TORNIQUETE.png",
        image: "TORNIQUETE.png",

        type: "Medical Accessory",
        material: "Material sintético de grado médico",
        system: "Equipo médico",
        function: "Elemento de primeros auxilios",
        compatibility: "Porta-torniquetes compatibles",
        configuration: "Compacta"
    },


    /* =====================================================
       BELT
    ===================================================== */

    {
        name: "PARAGON BELT",
        category: "belt",
        file: "PARAGON_BELT.png",
        image: "belt/PARAGON_BELT.png",

        type: "Tactical Battle Belt",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte y organización de equipamiento",
        compatibility: "Pouches y accesorios MOLLE",
        configuration: "Ajustable y modular"
    },

    {
        name: "BELT ACCESSORY",
        category: "belt",
        file: "PARAGON_BELT_ACCESSORY.png",
        image: "belt/PARAGON_BELT_ACCESSORY.png",

        type: "Belt Accessory",
        material: "Nylon de alta resistencia",
        system: "Sistema modular",
        function: "Complemento del cinturón",
        compatibility: "Cinturones tácticos compatibles",
        configuration: "Modular"
    },

    {
        name: "DUMP POUCH",
        category: "belt",
        file: "PARAGON_DUMP_POUCH.png",
        image: "belt/PARAGON_DUMP_POUCH.png",

        type: "Dump Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Almacenamiento temporal de accesorios",
        compatibility: "Cinturones y sistemas MOLLE",
        configuration: "Plegable"
    },

    {
        name: "FLASHLIGHT POUCH",
        category: "belt",
        file: "PARAGON_FLASHLIGHT_POUCH.png",
        image: "belt/PARAGON_FLASHLIGHT_POUCH.png",

        type: "Flashlight Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de linterna",
        compatibility: "Linternas de tamaño compatible",
        configuration: "Compacta"
    },

    {
        name: "GLOVE POUCH",
        category: "belt",
        file: "PARAGON_GLOVE_POUCH.png",
        image: "belt/PARAGON_GLOVE_POUCH.png",

        type: "Glove Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de guantes",
        compatibility: "Cinturones MOLLE compatibles",
        configuration: "Compacta"
    },

    {
        name: "IFAK POUCH",
        category: "belt",
        file: "PARAGON_IFAK_POUCH.png",
        image: "belt/PARAGON_IFAK_POUCH.png",

        type: "IFAK Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de material médico",
        compatibility: "Sistemas MOLLE compatibles",
        configuration: "Modular"
    },

    {
        name: "MOLLE UTILITY BELT",
        category: "belt",
        file: "PARAGON_MOLLE_UTILITY_BELT.png",
        image: "belt/PARAGON_MOLLE_UTILITY_BELT.png",

        type: "MOLLE Utility Belt",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de accesorios",
        compatibility: "Pouches y accesorios MOLLE",
        configuration: "Ajustable y modular"
    },

    {
        name: "RADIO POUCH",
        category: "belt",
        file: "PARAGON_RADIO_POUCH.png",
        image: "belt/PARAGON_RADIO_POUCH.png",

        type: "Radio Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Transporte de radio",
        compatibility: "Radios de tamaño compatible",
        configuration: "Ajustable"
    },

    {
        name: "TACTICAL UTILITY BELT",
        category: "belt",
        file: "PARAGON_TACTICAL_UTILITY_BELT.png",
        image: "belt/PARAGON_TACTICAL_UTILITY_BELT.png",

        type: "Tactical Utility Belt",
        material: "Nylon de alta resistencia",
        system: "Sistema modular",
        function: "Transporte de equipamiento",
        compatibility: "Pouches y accesorios compatibles",
        configuration: "Ajustable y modular"
    },

    {
        name: "UTILITY POUCH",
        category: "belt",
        file: "PARAGON_UTILITY_POUCH.png",
        image: "belt/PARAGON_UTILITY_POUCH.png",

        type: "Utility Pouch",
        material: "Nylon de alta resistencia",
        system: "MOLLE",
        function: "Organización de accesorios",
        compatibility: "Sistemas MOLLE compatibles",
        configuration: "Modular"
    }

];


/* =====================================================
   ELEMENTOS
===================================================== */

const productsContainer =
    document.getElementById("products");

const counter =
    document.getElementById("counter");

const filters =
    document.querySelectorAll(".filter");

const modal =
    document.getElementById("modal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalCategory =
    document.getElementById("modalCategory");

const modalType =
    document.getElementById("modalType");

const modalMaterial =
    document.getElementById("modalMaterial");

const modalSystem =
    document.getElementById("modalSystem");

const modalFunction =
    document.getElementById("modalFunction");

const modalCompatibility =
    document.getElementById("modalCompatibility");

const modalConfiguration =
    document.getElementById("modalConfiguration");

const modalFile =
    document.getElementById("modalFile");

const closeModal =
    document.getElementById("closeModal");


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function renderProducts(category = "all") {

    const visibleProducts =
        category === "all"
            ? products
            : products.filter(
                product =>
                    product.category === category
            );

    counter.textContent =
        `${String(visibleProducts.length).padStart(2, "0")} ITEMS`;

    productsContainer.innerHTML = "";

    visibleProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product";

        card.innerHTML = `
            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.parentElement.classList.add('image-error')"
                >

            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.category.toUpperCase()}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-file">
                    ${product.file}
                </div>

            </div>
        `;

        card.addEventListener(
            "click",
            () => openProduct(product)
        );

        productsContainer.appendChild(card);
    });
}


/* =====================================================
   MODAL
===================================================== */

function openProduct(product) {

    modalImage.src = product.image;

    modalImage.alt = product.name;

    modalName.textContent =
        product.name;

    modalCategory.textContent =
        product.category.toUpperCase();

    modalType.textContent =
        product.type;

    modalMaterial.textContent =
        product.material;

    modalSystem.textContent =
        product.system;

    modalFunction.textContent =
        product.function;

    modalCompatibility.textContent =
        product.compatibility;

    modalConfiguration.textContent =
        product.configuration;

    modalFile.textContent =
        "FILE // " + product.file;

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


function closeProduct() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


closeModal.addEventListener(
    "click",
    closeProduct
);


document
    .querySelector(".modal-background")
    .addEventListener(
        "click",
        closeProduct
    );


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeProduct();
        }

    }
);


/* =====================================================
   FILTROS
===================================================== */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(
                item =>
                    item.classList.remove("active")
            );

            button.classList.add("active");

            renderProducts(
                button.dataset.category
            );

        }
    );

});


/* =====================================================
   INICIAR
===================================================== */

renderProducts();
