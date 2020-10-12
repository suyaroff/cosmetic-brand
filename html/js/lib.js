/* 
    Created on : 15.07.2011, 12:06:02
    Author     : Djamal Suyarov suyaroff@gmail.com www.suyaroff.ru 
    Description:
        Основной фаил для своих функций
*/



jQuery(document).ready(function(){
	// селекты
	var cuSelParams = {
		changedEl: "select.custom",
		//visRows: 5,
		scrollArrows: true
	}
	
	cuSel(cuSelParams);
	jQuery('.scroll-pane').jScrollPane(); // скрол брендов на главной
	jQuery('#articles-bottom .article-slider').slides({
		generatePagination: false
	});
	
});


function tab_on_brand(tab, obj){
	jQuery('.tabs .tab').removeClass('act');
	jQuery(obj).addClass('act');
	if(tab == 'brand_article'){
		jQuery('#brand_article').show();
		jQuery('#otziv').hide();
	} else {
		jQuery('#otziv').show();
		jQuery('#brand_article').hide();
	}
}

function selectroot(num){
	jQuery('#subsections .item').removeClass('current');
	jQuery('#rootcat'+num).addClass('current');
}

function select_product_tab(tab){
	jQuery('#product_page .all-info .tabs li').removeClass('act');
	jQuery('#product_page .all-info .tab-content .item').hide();
	jQuery(tab).addClass('act');
	jQuery('#product_page .all-info .tab-content .'+jQuery(tab).attr('rel')).show();
}