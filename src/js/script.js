
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});

// // ハンバーガーメニュー　↓
 
// // .js-hamburgerクラスの要素を取得
// const hamburger = document.querySelector('.js-hamburger');

// // 要素にクリックイベントリスナーを追加
// hamburger.addEventListener('click', () => {
//     // .is-activeクラスをトグル
//     hamburger.classList.toggle('is-active');
//     // .js-sp-navをトグル
//     const spNav = document.querySelector('.js-sp-nav');
//     if (spNav) {
//     spNav.classList.toggle('is-active');
//     if (spNav.classList.contains('is-active')) {
//     spNav.style.display = 'block';
//     spNav.style.opacity = 0;
//     spNav.style.transition = 'opacity 0.5s';
//     setTimeout(() => {
//         spNav.style.opacity = 1;
//     }, 100);
//     } else {
//     spNav.style.transition = 'opacity 0.5s';
//     spNav.style.opacity = 0;
//     setTimeout(() => {
//         spNav.style.display = 'none';
//     }, 500);
//     }
// } 
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // すべてのページ内リンクを取得
//     var links = document.querySelectorAll('a[href^="#"]');
  
//     links.forEach(function (link) {
//       link.addEventListener("click", function (event) {
//         event.preventDefault(); // デフォルトのリンク動作を無効化
  
//         // スムーススクロール対象の要素取得
//         var targetId = this.getAttribute("href").substring(1); // "#about" → "about"
//         var targetElement = document.getElementById(targetId);
  
//         if (targetElement) {
//           window.scrollTo({
//             top: targetElement.offsetTop - 80,
//             behavior: "smooth"
//           });
//         }
  
//         // ▼▼▼ ここでハンバーガー/ナビを閉じる ▼▼▼
//         const spNav = document.querySelector('.js-sp-nav');
//         const hamburger = document.querySelector('.js-hamburger');
//         if (spNav && hamburger) {
//           spNav.classList.remove('is-active');
//           hamburger.classList.remove('is-active');
//         }
//       });
//     });
//   });


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.js-hamburger');
    const spNav = document.querySelector('.js-sp-nav');
    const links = document.querySelectorAll('a[href^="#"]');
  
    if (hamburger && spNav) {
      // ハンバーガークリックで開閉
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        spNav.classList.toggle('is-active');
      });
    }
  
    // リンクをクリックしたらメニューを閉じる + スムーススクロール
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth"
          });
        }
  
        // メニューを閉じる
        if (hamburger && spNav) {
          hamburger.classList.remove('is-active');
          spNav.classList.remove('is-active');
        }
      });
    });
  });

// スムーズスクロール
document.addEventListener("DOMContentLoaded", function () {
    // すべてのページ内リンクを取得
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
    link.addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトの動作を無効化
    var targetId = this.getAttribute("href").substring(1); // "#target" の "#" を削除
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
        top: targetElement.offsetTop - 80,
        // 80px分上に調整（ヘッダー固定用）
        behavior: "smooth" // スムーズスクロール
        });
    }
    });
});
});


jQuery(function ($) {
$(window).on("scroll", function () {
    $(".js-fadeIn").each(function (index) {
    if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
        setTimeout(() => {
        $(this).addClass("is-active");
        }, index * 120);
    }
    });
}).trigger("scroll");
});

