
var ncp = '#loader-image', // DOM-элемент индикатора загрузки
    ncl = '.loadpage', // DOM-элемент для подгрузки в него страницы
    headstyle = $(''), // jQuery модель: для группы стилей
    datahtml = 'data-loadhtml', // искомый атрибут для подгрузки страниц
    preloadfn;

preloadfn = function (arg){
		// удаляем старые стили предыдущих страниц
		headstyle.remove();

		// включаем предзагрузку
		$(ncp).css('display', 'block');
		$(ncl).css('display', 'none');

		// проверка аргумента
		if (arg != undefined) {
			namePage = arg;
		} else {
			var adress = (window.location.search).replace('?', '');
			if(adress.length != 0) $('body').attr(datahtml, adress)
			namePage = $('body').attr(datahtml);
		}

		if(namePage.indexOf('html') == -1) namePage += '.html';

		// AJAX запрос страницы
		$(ncl).load(namePage);

		// отображаем новую страницу
        $(ncp).fadeOut(500);
        setTimeout(function(){
            $(ncl).fadeIn(500);
        }, 600);

	return false;
};

$(function(){
	preloadfn();
})

