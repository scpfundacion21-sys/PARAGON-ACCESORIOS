/* =========================================
   PARAGON STRIKE DIVISION
   PRODUCT DATABASE
========================================= */


/* =========================================
   SYSTEM 01 — HELMET
========================================= */

const helmetProducts = [

    {
        id: "HELMET_BASE",
        name: "PARAGON HELMET",
        category: "HELMET SYSTEM",
        image: "helmet/HELMET_BASE.png",
        type: "Tactical Helmet",
        material: "Polímero técnico de alta resistencia",
        system: "Helmet Protection System",
        function: "Protección y soporte para accesorios",
        compatibility: "Accesorios modulares para casco",
        configuration: "Modular"
    },

    {
        id: "HELMET_COVER",
        name: "HELMET COVER",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_COVER.png",
        type: "Helmet Cover",
        material: "Textil sintético resistente",
        system: "Helmet Protection System",
        function: "Protección exterior y configuración",
        compatibility: "PARAGON Helmet",
        configuration: "Modular"
    },

    {
        id: "HELMET_GOGGLES",
        name: "TACTICAL GOGGLES",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_GOGGLES.png",
        type: "Protective Goggles",
        material: "Polímero técnico y lente resistente",
        system: "Eye Protection System",
        function: "Protección ocular",
        compatibility: "Helmet compatible",
        configuration: "Front mounted"
    },

    {
        id: "HELMET_GPNVG",
        name: "GPNVG-18",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_GPNVG_18.png",
        type: "Multi-Tube NVG",
        material: "Polímero técnico y componentes electrónicos",
        system: "Night Vision System",
        function: "Observación nocturna",
        compatibility: "NVG Mount",
        configuration: "Helmet mounted"
    },

    {
        id: "HELMET_HEADSET",
        name: "TACTICAL HEADSET",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_HEADSET.png",
        type: "Communication Headset",
        material: "Polímero técnico y materiales acolchados",
        system: "Communication System",
        function: "Comunicación y protección auditiva",
        compatibility: "Helmet / Headset Adapter",
        configuration: "Helmet mounted"
    },

    {
        id: "HELMET_ADAPTER",
        name: "HEADSET ADAPTER",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_HEADSET_ADAPTER.png",
        type: "Helmet Adapter",
        material: "Polímero técnico",
        system: "Helmet Integration System",
        function: "Integración del headset al casco",
        compatibility: "Compatible Headsets",
        configuration: "Side mounted"
    },

    {
        id: "HELMET_IFF",
        name: "IFF STROBE",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_IFF_STROBE.png",
        type: "Identification Light",
        material: "Polímero técnico y electrónica",
        system: "Identification System",
        function: "Identificación visual",
        compatibility: "Helmet mounting points",
        configuration: "Rear mounted"
    },

    {
        id: "HELMET_DUAL",
        name: "DUAL TUBE NVG",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_NVG_DUAL_TUBE.png",
        type: "Dual Tube NVG",
        material: "Polímero técnico y componentes electrónicos",
        system: "Night Vision System",
        function: "Observación nocturna",
        compatibility: "NVG Mount",
        configuration: "Front mounted"
    },

    {
        id: "HELMET_MONO",
        name: "MONOCULAR NVG",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_NVG_MONOCULAR.png",
        type: "Monocular NVG",
        material: "Polímero técnico y componentes electrónicos",
        system: "Night Vision System",
        function: "Observación nocturna",
        compatibility: "NVG Mount",
        configuration: "Front mounted"
    },

    {
        id: "HELMET_MOUNT",
        name: "NVG MOUNT",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_NVG_MOUNT.png",
        type: "NVG Mount",
        material: "Polímero técnico",
        system: "Helmet Integration System",
        function: "Soporte para dispositivo NVG",
        compatibility: "Compatible NVG systems",
        configuration: "Front mounted"
    },

    {
        id: "HELMET_SIGNAL",
        name: "SIGNAL LIGHT",
        category: "HELMET ACCESSORY",
        image: "helmet/HELMET_SIGNAL_LIGHT.png",
        type: "Signal Light",
        material: "Polímero técnico y electrónica",
        system: "Signal System",
        function: "Señalización e identificación",
        compatibility: "Helmet mounting points",
        configuration: "Modular"
    }

];


/* =========================================
   SYSTEM 02 — K-ZERO-SF
========================================= */

const kzeroProduct = {

    id: "K-ZERO-SF",

    name: "K-ZERO-SF",

    category: "K-ZERO-SF VEST SYSTEM",

    images: [
        "K-ZERO-SF-FRONT.png",
        "K-ZERO-SF-FRONT2.png"
    ],

    type: "Modular Tactical Vest",

    material: "Nylon técnico de alta resistencia",

    system: "K-ZERO-SF Vest System",

    function: "Plataforma modular para configuración del equipo",

    compatibility: "Configuración modular compatible con accesorios",

    configuration: "Modular / Front configuration"
};


/* =========================================
   RESTO DE PRODUCTOS DEL CHALECO
========================================= */

const vestProducts = [

    {
        id: "ADMIN",
        name: "ADMIN POUCH",
        category: "VEST ACCESSORY",
        image: "ADMIN.png",
        type: "Administrative Utility Pouch",
        material: "Nylon de alta resistencia",
        system: "K-ZERO-SF Vest System",
        function: "Organización y almacenamiento de accesorios",
        compatibility: "Modular Vest System",
        configuration: "Front mounted"
    },

    {
        id: "ESCOPETA",
        name: "ESCOPETA",
        category: "VEST CONFIGURATION",
        image: "ESCOPETA.png",
        type: "Configuration Component",
        material: "Material técnico según configuración",
        system: "K-ZERO-SF Vest System",
        function: "Componente de configuración del equipo",
        compatibility: "Configuración modular",
        configuration: "Modular"
    },

    {
        id: "HIDRATACION",
        name: "HYDRATION SYSTEM",
        category: "VEST ACCESSORY",
        image: "HIDRATACION.png",
        type: "Hydration System",
        material: "Material sintético resistente",
        system: "Hydration Equipment System",
        function: "Transporte de agua",
        compatibility: "Modular Vest System",
        configuration: "Rear / Modular"
    },

    {
        id: "IFAK",
        name: "IFAK",
        category: "VEST ACCESSORY",
        image: "IFAK.png",
        type: "Individual First Aid Kit",
        material: "Material sintético de grado médico",
        system: "Medical Equipment System",
        function: "Transporte de equipo de primeros auxilios",
        compatibility: "Modular Vest System",
        configuration: "Modular"
    },

    {
        id: "PHONE",
        name: "PHONE",
        category: "VEST ACCESSORY",
        image: "PHONE.png",
        type: "Communication Device",
        material: "Polímero técnico y componentes electrónicos",
        system: "Communication System",
        function: "Comunicación y gestión de información",
        compatibility: "Utility / Admin Configuration",
        configuration: "Portable"
    },

    {
        id: "PISTOL",
        name: "PISTOL",
        category: "VEST CONFIGURATION",
        image: "PISTOL.png",
        type: "Configuration Component",
        material: "Material técnico según configuración",
        system: "K-ZERO-SF Vest System",
        function: "Componente de configuración del equipo",
        compatibility: "Configuración modular",
        configuration: "Modular"
    },

    {
        id: "PORTA_GRANADAS",
        name: "PORTA-GRANADAS",
        category: "VEST ACCESSORY",
        image: "PORTA-GRANADAS.png",
        type: "Utility Carrier",
        material: "Nylon de alta resistencia",
        system: "K-ZERO-SF Vest System",
        function: "Transporte de accesorios",
        compatibility: "Modular Vest System",
        configuration: "Front mounted"
    },

    {
        id: "RADIO",
        name: "RADIO",
        category: "VEST ACCESSORY",
        image: "RADIO.png",
        type: "Communication Device",
        material: "Polímero técnico y componentes electrónicos",
        system: "Communication Equipment System",
        function: "Comunicación",
        compatibility: "Radio Pouch / Vest System",
        configuration: "Modular"
    },

    {
        id: "RIFLE",
        name: "RIFLE",
        category: "VEST CONFIGURATION",
        image: "RIFLE.png",
        type: "Configuration Component",
        material: "Material técnico según configuración",
        system: "K-ZERO-SF Vest System",
        function: "Componente de configuración del equipo",
        compatibility: "Configuración modular",
        configuration: "Modular"
    },

    {
        id: "SUJETA_FUSIL",
        name: "RIFLE RETENTION",
        category: "VEST ACCESSORY",
        image: "SUJETA-FUSIL.png",
        type: "Retention Component",
        material: "Material técnico resistente",
        system: "K-ZERO-SF Vest System",
        function: "Retención y organización del equipo",
        compatibility: "Modular Vest System",
        configuration: "Modular"
    },

    {
        id: "TORNIQUETE",
        name: "TOURNIQUET",
        category: "MEDICAL ACCESSORY",
        image: "TORNIQUETE.png",
        type: "Medical Accessory",
        material: "Material sintético de grado médico",
        system: "Medical Equipment System",
        function: "Elemento de primeros auxilios",
        compatibility: "Compatible medical carriers",
        configuration: "Compact"
    }

];


/* =========================================
   SYSTEM 03 — BELT
========================================= */

const beltProducts = [

    {
        id: "PARAGON_BELT",
        name: "PARAGON BELT",
        category: "TACTICAL BELT",
        image: "belt/PARAGON_BELT.png",
        type: "Tactical Battle Belt",
        material: "Nylon de alta resistencia",
        system: "Tactical Belt System",
        function: "Plataforma para accesorios de configuración",
        compatibility: "Modular accessories",
        configuration: "Modular"
    },

    {
        id: "PARAGON_BELT_ACCESSORY",
        name: "BELT ACCESSORY",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_BELT_ACCESSORY.png",
        type: "Belt Accessory",
        material: "Material técnico resistente",
        system: "Tactical Belt System",
        function: "Integración de accesorios",
        compatibility: "Tactical Belt",
        configuration: "Modular"
    },

    {
        id: "PARAGON_DUMP_POUCH",
        name: "DUMP POUCH",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_DUMP_POUCH.png",
        type: "Dump Pouch",
        material: "Nylon de alta resistencia",
        system: "Tactical Belt System",
        function: "Almacenamiento temporal de accesorios",
        compatibility: "MOLLE / Tactical Belt",
        configuration: "Foldable"
    },

    {
        id: "PARAGON_FLASHLIGHT_POUCH",
        name: "FLASHLIGHT POUCH",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_FLASHLIGHT_POUCH.png",
        type: "Flashlight Pouch",
        material: "Nylon de alta resistencia",
        system: "Tactical Belt System",
        function: "Transporte de linterna",
        compatibility: "Tactical Belt / MOLLE",
        configuration: "Compact"
    },

    {
        id: "PARAGON_GLOVE_POUCH",
        name: "GLOVE POUCH",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_GLOVE_POUCH.png",
        type: "Utility Pouch",
        material: "Nylon de alta resistencia",
        system: "Tactical Belt System",
        function: "Almacenamiento de accesorios pequeños",
        compatibility: "Tactical Belt / MOLLE",
        configuration: "Compact"
    },

    {
        id: "PARAGON_IFAK_POUCH",
        name: "IFAK POUCH",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_IFAK_POUCH.png",
        type: "Medical Pouch",
        material: "Nylon de alta resistencia",
        system: "Medical Equipment System",
        function: "Transporte de equipo médico",
        compatibility: "Tactical Belt / MOLLE",
        configuration: "Modular"
    },

    {
        id: "PARAGON_MOLLE_BELT",
        name: "MOLLE UTILITY BELT",
        category: "TACTICAL BELT",
        image: "belt/PARAGON_MOLLE_UTILITY_BELT.png",
        type: "MOLLE Utility Belt",
        material: "Nylon de alta resistencia",
        system: "MOLLE Belt System",
        function: "Plataforma modular para accesorios",
        compatibility: "MOLLE compatible accessories",
        configuration: "Modular"
    },

    {
        id: "PARAGON_RADIO_POUCH",
        name: "RADIO POUCH",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_RADIO_POUCH.png",
        type: "Radio Pouch",
        material: "Nylon de alta resistencia",
        system: "Communication Equipment System",
        function: "Transporte de radio",
        compatibility: "Tactical Belt / MOLLE",
        configuration: "Adjustable"
    },

    {
        id: "PARAGON_TACTICAL_BELT",
        name: "TACTICAL UTILITY BELT",
        category: "TACTICAL BELT",
        image: "belt/PARAGON_TACTICAL_UTILITY_BELT.png",
        type: "Tactical Utility Belt",
        material: "Nylon de alta resistencia",
        system: "Tactical Belt System",
        function: "Plataforma para accesorios",
        compatibility: "Modular accessories",
        configuration: "Modular"
    },

    {
        id: "PARAGON_UTILITY_POUCH",
        name: "UTILITY POUCH",
        category: "BELT ACCESSORY",
        image: "belt/PARAGON_UTILITY_POUCH.png",
        type: "Utility Pouch",
        material: "Nylon de alta resistencia",
        system: "Tactical Belt System",
        function: "Almacenamiento de accesorios",
        compatibility: "Tactical Belt / MOLLE",
        configuration: "Modular"
    }

];


/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(product) {

    return `
        <article
            class="product-card"
            onclick="openProduct('${product.id}')"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.type}
                </p>

                <button
                    onclick="event.stopPropagation(); openProduct('${product.id}')"
                >
                    VIEW DETAILS
                </button>

            </div>

        </article>
    `;
}


/* =========================================
   RENDER HELMET
========================================= */

const helmetContainer =
    document.getElementById("helmet-products");

helmetProducts.forEach(product => {

    helmetContainer.innerHTML +=
        createProductCard(product);

});


/* =========================================
   RENDER VEST
========================================= */

const vestContainer =
    document.getElementById("vest-products");

vestProducts.forEach(product => {

    vestContainer.innerHTML +=
        createProductCard(product);

});


/* =========================================
   RENDER BELT
========================================= */

const beltContainer =
    document.getElementById("belt-products");

beltProducts.forEach(product => {

    beltContainer.innerHTML +=
        createProductCard(product);

});


/* =========================================
   FIND PRODUCT
========================================= */

function findProduct(id) {

    if (id === "K-ZERO-SF") {
        return kzeroProduct;
    }

    return [
        ...helmetProducts,
        ...vestProducts,
        ...beltProducts
    ].find(product => product.id === id);
}


/* =========================================
   OPEN PRODUCT
========================================= */

function openProduct(id) {

    const product = findProduct(id);

    if (!product) {
        return;
    }


    const modal =
        document.getElementById("productModal");

    const modalImages =
        document.getElementById("modalImages");


    document.getElementById("modalCategory")
        .textContent = product.category;

    document.getElementById("modalTitle")
        .textContent = product.name;

    document.getElementById("modalDescription")
        .textContent = product.type;

    document.getElementById("modalType")
        .textContent = product.type;

    document.getElementById("modalMaterial")
        .textContent = product.material;

    document.getElementById("modalSystem")
        .textContent = product.system;

    document.getElementById("modalFunction")
        .textContent = product.function;

    document.getElementById("modalCompatibility")
        .textContent = product.compatibility;

    document.getElementById("modalConfiguration")
        .textContent = product.configuration;


    /* =========================
       IMAGES
    ========================= */

    modalImages.innerHTML = "";


    if (product.images) {

        product.images.forEach(image => {

            modalImages.innerHTML += `
                <img
                    src="${image}"
                    alt="${product.name}"
                >
            `;

        });

    } else {

        modalImages.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
            >
        `;

    }


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeProduct() {

    const modal =
        document.getElementById("productModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================
   CLICK OUTSIDE
========================================= */

document
    .getElementById("productModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeProduct();
        }

    });


/* =========================================
   ESC
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProduct();
    }

});
