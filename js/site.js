// Mobil menü aç/kapa + görsel şeridi durdur/oynat. Başka iş yapılmaz.
document.addEventListener("DOMContentLoaded", function () {
  var dugme = document.querySelector(".menu-dugmesi");
  var menu = document.getElementById("ana-menu");

  if (dugme && menu) {
    dugme.addEventListener("click", function () {
      var acikMi = menu.classList.toggle("acik");
      dugme.setAttribute("aria-expanded", acikMi ? "true" : "false");
      var etiket = dugme.querySelector(".sr-only");
      if (etiket) etiket.textContent = acikMi ? "Menüyü kapat" : "Menüyü aç";
    });
  }

  // Akan şerit: dokunmatik ve klavye kullanıcıları için durdurma kontrolü
  var serit = document.querySelector(".gorsel-seridi");
  var seritDugmesi = document.querySelector(".serit-dugmesi");

  if (serit && seritDugmesi) {
    seritDugmesi.addEventListener("click", function () {
      var durduMu = serit.classList.toggle("duraklatildi");
      seritDugmesi.setAttribute("aria-pressed", durduMu ? "true" : "false");
      seritDugmesi.textContent = durduMu ? "Akışı oynat" : "Akışı durdur";
    });
  }
});
