// Настройка аккорденов
$(document).ready(function () {
  $(".collapse.show")
    .prev(".card-header")
    .find(".accordion-icon")
    .css("transform", "rotate(180deg)");

  $("#faqAccordion").on("show.bs.collapse", function (e) {
    $(e.target).prev(".card-header").find(".accordion-icon").css({
      transform: "rotate(90deg)",
      color: "#0056b3",
    });
  });

  $("#faqAccordion").on("hide.bs.collapse", function (e) {
    $(e.target).prev(".card-header").find(".accordion-icon").css({
      transform: "rotate(0deg)",
      color: "#666",
    });
  });

  $("#faqAccordion .collapse").on("show.bs.collapse", function () {
    $("#faqAccordion .collapse.show").not(this).collapse("hide");
  });
});


// Курс валюты
$(function() {

    const RATE = 70;

    $('#price .border').each(function() {
        $(this).find('.old-price, .new-price').each(function() {
            const rub = parseInt($(this).text().replace(/\D/g, ''), 10);
            $(this).data('rub', rub);
        });
    });

    $('.currency-code').on('click', function() {
        const $btn = $(this);
        const code = $btn.data('code');
        const $card = $btn.closest('.border');
        $card.find('.currency-code').removeClass('active');
        $btn.addClass('active');
        $card.find('.old-price, .new-price').each(function() {
            const rub = $(this).data('rub');
            if (code === 'USD') {
                const usd = Math.round(rub / RATE);
                $(this).text('$' + usd);
            } else {
                $(this).text(rub.toLocaleString('ru-RU') + ' ₽');
            }
        });
    });
});

    const burger = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('d-none');
    });