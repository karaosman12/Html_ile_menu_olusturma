function toggleMenu() {
  var navbar = document.getElementById("navbar");
  var menuToggle = document.getElementById("menuToggle");
  var content = document.querySelector('.content');
  
  if (navbar.style.left === "0px") {
    navbar.style.left = "-250px";
    menuToggle.classList.remove("hidden");
    content.classList.remove("menu-open");
  } else {
    navbar.style.left = "0px";
    menuToggle.classList.add("hidden");
    content.classList.add("menu-open");
  }
}

// Menü dışına tıklandığında menüyü kapat
window.onclick = function(event) {
  var navbar = document.getElementById("navbar");
  if (event.target !== navbar && event.target !== document.querySelector('.menu-toggle')) {
    navbar.style.left = "-250px";
    document.getElementById("menuToggle").classList.remove("hidden");
    document.querySelector('.content').classList.remove("menu-open");
  }
}

// Menü bağlantılarına tıklandığında ilgili bölüme geçiş yap
document.querySelectorAll('.navbar a').forEach(item => {
  item.addEventListener('click', event => {
    var targetId = event.target.getAttribute('href').slice(1); // Bağlantı hedefinin ID'sini al
    document.querySelectorAll('.content > div').forEach(div => {
      if (div.id === targetId) {
        div.style.display = 'block'; // Seçilen bölümü göster
      } else {
        div.style.display = 'none'; // Diğer bölümleri gizle
      }
    });
  });
});
