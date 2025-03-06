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
  document.getElementById('fast-txt').innerText = "Unser Engagement für schnelle Lösungen resultiert aus der Verwendung modernster Technologien, die sicherstellen, dass Ihre Website mit blitzschneller Geschwindigkeit lädt.";
  document.getElementById('strategy').innerText = "Strategisch";
  document.getElementById('strategy-txt').innerText = "Unser Team bringt strategische Erkenntnisse ein, versteht Ihre Geschäftsziele und entwickelt Lösungen, die perfekt darauf abgestimmt sind.";
  document.getElementById('responsive').innerText = "Anpassungsfähig";
  document.getElementById('responsive-txt').innerText = "Wir stellen sicher, dass sich Ihre Website auf allen Geräten durch Responsive-Design-Techniken nahtlos anpasst und die Benutzererfahrung auf allen Plattformen und Bildschirmgrößen optimiert wird.";
  document.getElementById('maintenance').innerText = "Eigenwartung";
  document.getElementById('maintenance-txt').innerText = "Mit unseren benutzerfreundlichen CMS-Lösungen machen wir es Ihnen leicht, Ihre Website unabhängig zu verwalten – ohne technische Kenntnisse.";
  document.getElementById('unlock').innerText = "Entfesseln Sie Ihr digitales Potenzial";
  document.getElementById('consultation').innerText = "Starten Sie mit einer kostenlosen Beratung";
  document.getElementById('about').innerText = "Über das Team";
  document.getElementById('jenny1').innerText = "Jennys Weg in die Webentwicklung wurde durch ihre Liebe zur Problemlösung und ihrem Wunsch, Kreativität mit technischen Fähigkeiten zu verbinden, inspiriert. Mit ihrem Hintergrund in der Sprachtherapie kombiniert sie analytisches Denken mit einem scharfen Blick für Design, um intuitive Benutzererlebnisse zu gestalten. Abseits des Programmierens liebt Jenny die Fotografie und nutzt ihre Expertise in sozialen Medien, um ansprechende digitale Erlebnisse zu schaffen.";
  document.getElementById('jenny2').innerText = "Jennys Leidenschaft für Problemlösung und Kreativität führte sie zur Webentwicklung. Mit einem Hintergrund in Sprachtherapie verbindet sie analytisches Denken mit Design, um intuitive Benutzererlebnisse zu schaffen.";
  document.getElementById('patrick1').innerText = "Mit einem Hintergrund in Bauingenieurwesen und einer Leidenschaft für Technologie bringt Patrick eine einzigartige Perspektive in die Webentwicklung ein. Inspiriert von seinen Reisen und seiner Faszination für digitale Innovationen, hat er den Schritt in die Webentwicklung gewagt. Heute spezialisiert er sich darauf, benutzerzentrierte, intuitive Websites zu entwerfen und zu entwickeln, die nicht nur die Erwartungen der Kunden erfüllen, sondern übertreffen.";
  document.getElementById('patrick2').innerText = "Mit einem Hintergrund im Bauingenieurwesen und einer Leidenschaft für Technologie verbindet Patrick technisches Fachwissen mit einer Leidenschaft für digitale Innovation, um benutzerzentrierte, intuitive Websites zu entwickeln.";
  document.getElementById('projects').innerText = "Neueste Projekte";
  document.getElementById('optimized').innerText = "Optimiert für jedes Gerät";
  document.getElementById('responsive').innerText = "Responsive Design";
  document.getElementById('contact1').innerText = "Schreiben Sie uns eine Nachricht ...";
  document.getElementById('contact2').innerText = "Haben Sie ein Projekt im Kopf oder eine Frage? Wir würden gerne von Ihnen hören! Füllen Sie das Formular unten aus und wir melden uns bald bei Ihnen. Lassen Sie uns gemeinsam etwas Großartiges schaffen!";
  document.getElementById('submit').innerText = "ABSENDEN";
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
  document.getElementById('unlock').innerText = "Unlock your digital potential";
  document.getElementById('consultation').innerText = "get started with a free consultation";
  document.getElementById('about').innerText = "About the team";
  document.getElementById('jenny1').innerText = "Jenny's journey into web development was sparked by her love for problem-solving and her desire to blend creativity with technical skills. Drawing from her speech therapy background, she combines an analytical mindset with a keen eye for design to craft intuitive user experiences. Outside of coding, Jenny enjoys photography and leverages her expertise in social media to create engaging digital experiences.";
  document.getElementById('jenny2').innerText = "Jenny's passion for problem-solving and creativity led her to web development. With a background in speech therapy, she blends analytical thinking with design to create intuitive user experiences.";
  document.getElementById('patrick1').innerText = "With a foundation in civil engineering and a passion for technology, Patrick brings a unique perspective to web development. Inspired by his travels and a fascination with digital innovation, he transitioned into web development. Today, he specializes in designing and developing intuitive, user-centric websites that not only meet but exceed client expectations.";
  document.getElementById('patrick2').innerText = "With a civil engineering background and a passion for technology, Patrick combines technical expertise with a passion for digital innovation to craft intuitive, user-focused websites.";
  document.getElementById('projects').innerText = "Latest Projects";
  document.getElementById('optimized').innerText = "Optimized for every device";
  document.getElementById('responsive').innerText = "Responsive Design";
  document.getElementById('contact1').innerText = "Send us a Message";
  document.getElementById('contact2').innerText = "Have a project in mind or a question? We'd love to hear from you! Fill out the form below, and we'll get back to you soon. Let's create something great together!";
  document.getElementById('submit').innerText = "SUBMIT";
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
  