
// 手机模式，点击导航块，展开导航
$('.echat-nav-bar').click(function () {
  $('.echat-phone-menu').addClass('echat-phone-menu-show');
  $('.menu-motai').show();
  stopBodyScroll(true);
  return false;
});

// 手机模式，关闭导航
$('.menu-motai').click(function () {
  CloseMenu();
  return false;
});

// 关闭手机菜单
function CloseMenu() {
  $('.echat-phone-menu').removeClass('echat-phone-menu-show');
  $('.menu-motai').hide();
  stopBodyScroll(false);
}

// 打开手机菜单时，禁止背景页面滚动
function stopBodyScroll(isFixed) {
  var body = document.body;
  var html = document.html;
  var top = 0;
  if (isFixed) {
    top = window.scrollY;

    body.addEventListener(
      'touchmove',
      function (e) {
        e.stopPropagation();
      },
      { passive: false }
    );

    document
      .getElementsByClassName('navbar-nav-menu-phone')[0]
      .addEventListener(
        'touchmove',
        function (e) {
          e.stopPropagation();
        },
        { passive: true }
      );
    document.getElementsByClassName('menu-motai')[0].addEventListener(
      'touchmove',
      function (e) {
        CloseMenu();
        e.stopPropagation();
      },
      { passive: true }
    );
    // body.style.position = 'fixed';
    // body.style.overflow = "hidden";
    // html.style.overflow = "hidden";
    // body.style.top = "0%";
  } else {
    // body.style.position = 'relative';
    // html.style.position = 'relative';
    // body.style.top = '';
    // body.style.overflow = "auto";
    // html.style.overflow = "auto";

    body.addEventListener(
      'touchmove',
      function (e) {
        e.stopPropagation();
      },
      { passive: true }
    );
    // window.scrollTo(0, top) // 回到原先的top
  }
}

//顶部导航标签展示
$('#nav')
  .on('mouseover', 'ul li', function () {
    var index = $(this).index();
    if (index < 9) {
      $(this).children('a').addClass('menu_a_click');
      $(this).siblings().children(0).removeClass('menu_a_click');
    }
    $(this).find('.dropdown').addClass('dropdown-show');
    switchproducttab();
    return false;
  })
  .on('mouseleave', 'ul li', function () {
    $(this).children('a').removeClass('menu_a_click');
    $(this).find('.dropdown').removeClass('dropdown-show');
    var href = window.location.href;
    $('#nav ul li').each(function () {
      var src = $(this).children('a').attr('href');
      if (src.indexOf('http') > -1) {
        var aUrl = $(this).children('a').attr('href');
      } else {
        var aUrl = '/' + $(this).children('a').attr('href');
      }
      if (window.location.pathname == '/') {
        $('#nav ul li:eq(0)').children('a').addClass('menu_a_click');
        return false;
      }
      if (href.indexOf('pro-') > -1) {
        $('#nav ul li:eq(1)').children('a').addClass('menu_a_click');
        return false;
      }
      if (href.indexOf('solution-') > -1) {
        $('#nav ul li:eq(2)').children('a').addClass('menu_a_click');
        return false;
      }

      if (href.indexOf(aUrl) > -1 && src != '/') {
        $(this).children('a').addClass('menu_a_click');
      }
    });
  });

// 切换顶部产品介绍左侧标签切换
function switchproducttab() {
  // $(".dropdown-content>.column").on("mouseover", "a", function() {
  //     var index = $(this).index();
  //     $(this).addClass("block-link-show").siblings().removeClass("block-link-show");
  //     $(".column2:eq(" + index + ")").addClass("column2-show").siblings(".column2").removeClass("column2-show");
  //     return false;
  // })
}

$('.echat-product').mouseleave(function () {
  // $(this).removeClass("show-product");
  return false;
});

$('.navbar-nav-menu-phone').on('click', 'li>a', function () {
  var index = $(this).index();
  var tag = $(this).parent().attr('data-tag');
  if (tag) {
    $(this).siblings('ul').toggleClass('product-phone-close');
    $(this).siblings('div.echat-sanjiao-top').toggleClass('echat-sanjiao-down');
  }
});

