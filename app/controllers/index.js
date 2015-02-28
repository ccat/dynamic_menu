
var menu1 = null;
var menu2 = null;
var menu1show=true;


function doClick(e) {
    alert($.label.text);
}

function menu1func(e){
	menu1show=false;
	menuChange();
}

function menu2func(e){
	menu1show=true;
	menuChange();
}


function menuChange(){
	if(menu1!=null){
		menu1.setVisible(menu1show);
	}
	if(menu2!=null){
		menu2.setVisible(!menu1show);
	}
}


var activity=$.index.activity;

activity.onPrepareOptionsMenu = function(e) {
	var menu = e.menu;
	menu1 = menu.findItem("1");
	menu2 = menu.findItem("2");
	menuChange();
};


$.index.open();

