// Event listener to toggle between languages
document.getElementById('language-toggle').addEventListener('click', function () {
  const currentLang = document.documentElement.lang || 'en';  // Default to English if no language is set

  if (currentLang === 'en') {
      document.documentElement.lang = 'de';
      updateContentToGerman();
      document.getElementById('language-toggle').innerText = 'Deutsch';  // Change button text to switch back
  } else {
      document.documentElement.lang = 'en';
      updateContentToEnglish();
      document.getElementById('language-toggle').innerText = 'English';  // Change button text to switch back
  }
});

// Function to update content in German
function updateContentToGerman() {
  document.getElementById('concept').innerText = "vom Konzept";
  document.getElementById('code').innerText = "zum Code";
  document.getElementById('service1').innerText = "In enger Zusammenarbeit mit Ihnen gestalten wir eine Website, die Ihre Marke stärkt und echte Ergebnisse liefert. Mit unserer Erfahrung stellen wir sicher, dass jede Seite intuitiv, technisch stabil und für alle Geräte optimiert ist.";
  document.getElementById('service2').innerText = "Vom ersten Entwurf bis zur finalen Umsetzung – wir sorgen dafür, dass Ihre Website in jeder Hinsicht überzeugt.";
  document.getElementById('custom-design').innerText = "Indivdiuelles Design";
  document.getElementById('coding').innerText = "Effiziente Programmierung";
  document.getElementById('mobile').innerText = "Responsive Design";
  document.getElementById('seo').innerText = "SEO-optimiert";
  document.getElementById('fast').innerText = "Schnell";
  document.getElementById('fast-txt').innerText = "Moderne Techniken sorgen dafür, dass Ihre Website in kürzester Zeit lädt und eine hervorragende Nutzererfahrung bietet.";
  document.getElementById('strategy').innerText = "Strategisch";
  document.getElementById('strategy-txt').innerText = "Wir entwickeln Lösungen, die exakt auf Ihre Geschäftsziele zugeschnitten sind, um langfristigen Erfolg zu sichern. ";
  document.getElementById('responsive').innerText = "Anpassungsfähig";
  document.getElementById('responsive-txt').innerText = "Wir stellen sicher, dass sich Ihre Website auf allen Geräten durch Responsive-Design-Techniken nahtlos anpasst und die Benutzererfahrung auf allen Plattformen und Bildschirmgrößen optimiert.";
  document.getElementById('maintenance').innerText = "Eigenwartung";
  document.getElementById('maintenance-txt').innerText = "Mit unseren benutzerfreundlichen CMS-Lösungen machen wir es Ihnen leicht, Ihre Website unabhängig zu verwalten – ganz ohne Programmier-Kenntnisse.";
  document.getElementById('fast1').innerText = "Schnell";
  document.getElementById('fast-txt1').innerText = "Moderne Techniken sorgen dafür, dass Ihre Website in kürzester Zeit lädt und eine hervorragende Nutzererfahrung bietet.";
  document.getElementById('strategy1').innerText = "Strategisch";
  document.getElementById('strategy-txt1').innerText = "Wir entwickeln Lösungen, die exakt auf Ihre Geschäftsziele zugeschnitten sind, um langfristigen Erfolg zu sichern. ";
  document.getElementById('responsive1').innerText = "Anpassungsfähig";
  document.getElementById('responsive-txt1').innerText = "Wir stellen sicher, dass sich Ihre Website auf allen Geräten durch Responsive-Design-Techniken nahtlos anpasst und die Benutzererfahrung auf allen Plattformen und Bildschirmgrößen optimiert.";
  document.getElementById('maintenance1').innerText = "Eigenwartung";
  document.getElementById('maintenance-txt1').innerText = "Mit unseren benutzerfreundlichen CMS-Lösungen machen wir es Ihnen leicht, Ihre Website unabhängig zu verwalten – ganz ohne Programmier-Kenntnisse.";
  document.getElementById('unlock').innerText = "Nutzen Sie das volle Potenzial Ihrer digitalen Möglichkeiten";
  document.getElementById('consultation').innerText = "Vereinbaren Sie jetzt eine kostenlose Beratung";
  document.getElementById('about').innerText = "Das Team";
  document.getElementById('jenny1').innerText = "Jenny ist in die Web-Entwicklung eingestiegen, um technisch komplexe Herausforderungen mit kreativen Lösungen anzugehen. Durch ihr analytisches Denken und ihre Erfahrung in der Sprachtherapie entwicklt sie funktionale, ästhetisch ansprechende und nutzerzentrierte Websites. Abseits des Programmierens bietet Jenny auch Fotografie und Social-Media-Services an, um ansprechende digitale Inhalte zu erstellen.";
  document.getElementById('jenny2').innerText = "Jenny ist in die Webentwicklung eingestiegen, um kreative Lösungen für komplexe Herausforderungen zu finden. Ihr analytisches Denken und ihre Erfahrung aus der Sprachtherapie helfen ihr, nutzerzentrierte Websites zu entwickeln, die funktional und ästhetisch ansprechend sind.";
  document.getElementById('patrick1').innerText = "Mit einem Hintergrund in Bauingenieurwesen und einer Leidenschaft für Technologie bringt Patrick eine einzigartige Perspektive in die Webentwicklung ein. Inspiriert von seinen Reisen und seiner Faszination für digitale Innovationen, hat er den Schritt in die Webentwicklung gewagt. Heute konzentriert er sich auf die Gestaltung und Entwicklung benutzerfreundlicher Websites, die die Anforderungen seiner Kunden zuverlässig erfüllen.";
  document.getElementById('patrick2').innerText = "Mit einem Hintergrund im Bauingenieurwesen und einer Leidenschaft für Technologie verbindet Patrick technisches Fachwissen mit einer Leidenschaft für digitale Innovation, um benutzerzentrierte, intuitive Websites zu entwickeln.";
  document.getElementById('projects').innerText = "Neueste Projekte";
  document.getElementById('optimized').innerText = "Optimiert für jedes Gerät";
  document.getElementById('responsive1').innerText = "Responsive Design";
  document.getElementById('contact1').innerText = "Schreib uns eine Nachricht";
  document.getElementById('contact2').innerText = "Möchten Sie ein Projekt besprechen oder haben Sie eine Frage? Wir freuen uns auf Ihre Nachricht! Füllen Sie einfach das Formular aus, und wir melden uns zeitnah bei Ihnen. Lassen Sie uns zusammen an Ihrer Idee arbeiten!";
  document.getElementById('submit').innerText = "ABSENDEN";
  document.getElementById('privacy').innerText = "Datenschutz";
  document.getElementById('legal-notice').innerText = "Impressum";
  document.getElementById('cookie-notice').innerText = "Cookie-Richtlinie";
  document.getElementById('location').innerText = "Adresse";
}

// Function to update content in English
function updateContentToEnglish() {
  document.getElementById('concept').innerText = "from concept";
  document.getElementById('code').innerText = "to code";
  document.getElementById('service1').innerText = "We specialize in creating captivating digital experiences that resonate with your audience and drive results.";
  document.getElementById('service2').innerText = "From intuitive user interfaces to robust backend development, we ensure every aspect of your website is crafted for optimal performance across all devices.";
  document.getElementById('custom-design').innerText = "Custom Design";
  document.getElementById('coding').innerText = "Smart Code";
  document.getElementById('mobile').innerText = "Mobile-friendly";
  document.getElementById('seo').innerText = "SEO-optimized";
  document.getElementById('fast').innerText = "Lightning Fast";
  document.getElementById('fast-txt').innerText = "Our commitment to rapid solutions stems from our use of cutting-edge technologies, ensuring your website loads with lightning speed.";
  document.getElementById('strategy').innerText = "Strategic Perspective";
  document.getElementById('strategy-txt').innerText = "Our team brings strategic insights to the table, understanding your business goals and crafting solutions that align perfectly.";
  document.getElementById('responsive').innerText = "Responsive Design";
  document.getElementById('responsive-txt').innerText = "We ensure your website adapts smoothly to all devices through responsive design techniques, optimizing user experience across platforms and screen sizes.";
  document.getElementById('maintenance').innerText = "Self-Maintenance";
  document.getElementById('maintenance-txt').innerText = "With our user-friendly CMS solutions, we make it easy for you to manage your website independently - no technical expertise required.";
  document.getElementById('fast1').innerText = "Lightning Fast";
  document.getElementById('fast-txt1').innerText = "Our commitment to rapid solutions stems from our use of cutting-edge technologies, ensuring your website loads with lightning speed.";
  document.getElementById('strategy1').innerText = "Strategic Perspective";
  document.getElementById('strategy-txt1').innerText = "Our team brings strategic insights to the table, understanding your business goals and crafting solutions that align perfectly.";
  document.getElementById('responsive1').innerText = "Responsive Design";
  document.getElementById('responsive-txt1').innerText = "We ensure your website adapts smoothly to all devices through responsive design techniques, optimizing user experience across platforms and screen sizes.";
  document.getElementById('maintenance1').innerText = "Self-Maintenance";
  document.getElementById('maintenance-txt1').innerText = "With our user-friendly CMS solutions, we make it easy for you to manage your website independently - no technical expertise required.";
  document.getElementById('unlock').innerText = "Unlock your digital potential";
  document.getElementById('consultation').innerText = "get started with a free consultation";
  document.getElementById('about').innerText = "About the team";
  document.getElementById('jenny1').innerText = "Jenny's journey into web development was sparked by her love for problem-solving and her desire to blend creativity with technical skills. Drawing from her speech therapy background, she combines an analytical mindset with a keen eye for design to craft intuitive user experiences. Outside of coding, Jenny enjoys photography and leverages her expertise in social media to create engaging digital experiences.";
  document.getElementById('jenny2').innerText = "Jenny's passion for problem-solving and creativity led her to web development. With a background in speech therapy, she blends analytical thinking with design to create intuitive user experiences.";
  document.getElementById('patrick1').innerText = "With a foundation in civil engineering and a passion for technology, Patrick brings a unique perspective to web development. Inspired by his travels and a fascination with digital innovation, he transitioned into web development. Today, he specializes in designing and developing intuitive, user-centric websites that meet client expectations.";
  document.getElementById('patrick2').innerText = "With a civil engineering background and a passion for technology, Patrick combines technical expertise with a passion for digital innovation to craft intuitive, user-focused websites.";
  document.getElementById('projects').innerText = "Latest Projects";
  document.getElementById('optimized').innerText = "Optimized for every device";
  document.getElementById('responsive').innerText = "Responsive Design";
  document.getElementById('contact1').innerText = "Send us a Message";
  document.getElementById('contact2').innerText = "Have a project in mind or a question? We'd love to hear from you! Fill out the form below, and we'll get back to you soon. Let's create something great together!";
  document.getElementById('submit').innerText = "SUBMIT";
  document.getElementById('privacy').innerText = "Privacy";
  document.getElementById('legal-notice').innerText = "Legal Notice";
  document.getElementById('cookie-notice').innerText = "Cookie Notice";
  document.getElementById('location').innerText = "location";
}


$('.slider-container').slick({
  autoplay: true,        // Do we want it to autoplay? true or false
	autoplaySpeed: 2000,   // How long between each slide when autoplaying
	speed: 500,            // How fast is the transition 
  arrows: true,          // Do you want to show arrows to trigger each slide
  accessibility: true,   // Enables tabbing and arrow key navigation 
  dots: true,            // Enables the dots below to show how many slides
  fade: false,           // Changes the animate from slide to fade if true
  infinite: true,       // When true, means that it will scroll in a circle
  pauseOnHover: true,   // When true means the autoplay pauses when hovering
  pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Cookie Banner Skript

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}

function runCookiedCodes() {
  // Add tracking scripts here
  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TTER589G1V');
   // End tracking scripts

  console.log("cookies ran");
}

if (readCookie("cookie-notice-accepted") == "true") {
  runCookiedCodes();
document.querySelector(".reshow-button").classList.add("hide-button");
  
} else {
  
  document.getElementById("cookie-notice").style.display = "block";
}

document
  .getElementById("cookie-notice-accept")
  .addEventListener("click", function () {
    createCookie("cookie-notice-accepted", "true", 31);
    document.getElementById("cookie-notice").style.display = "none";
    document.getElementById("cookie-notice").classList.add("hide-button");
    runCookiedCodes();
  });

document
  .querySelector("#close-cookie-banner")
  .addEventListener("click", (e) => {
    eraseCookie("cookie-notice-accepted")
    document.getElementById("cookie-notice").style.display = "none";

    console.log("cookies erased")
  });

document.querySelector(".reshow-button")
  .addEventListener("click", function() {
  document.getElementById("cookie-notice").style.display = "block";
})
  