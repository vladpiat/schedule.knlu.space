$(function() {

	document.body.style.minHeight = window.innerHeight + 'px';

	$('tbody .first-lesson').equalHeights();
	$('tbody .second-lesson').equalHeights();
	$('tbody .third-lesson').equalHeights();
	$('tbody .fourth-lesson').equalHeights();


	 var demo2 = new autoComplete({
            selector: '#advanced-demo',
			minChars: 2,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = [['Па 01-17', 'pa0117'], ['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117'],['Па 01-17', 'pa0117']];
                var suggestions = [];
                for (i=0;i<choices.length;i++)
                    if (~(choices[i][0]+' '+choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
            },
            renderItem: function (item, search){
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-lgroupname="'+item[0]+'" data-lgroup="'+item[1]+'" data-val="'+search+'">'+item[0].replace(re, "<b>$1</b>")+'</div>';
            },
            onSelect: function(e, term, item){
				document.location.href = "/" + item.getAttribute('data-lgroup') + ".html";
            }
        });
	// Custom JS

});

window.addEventListener('resize', function() {
	document.body.style.minHeight = window.innerHeight + 'px';
})