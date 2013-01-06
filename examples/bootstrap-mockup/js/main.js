/**
 * GLOBALS
 */
var app = {};
app.events = {};

// EVENTS
app.events.init = function() {
    app.events.nav_set_list_state();
    $('#nav_edit').on('click', app.events.nav_set_edit);
    $('#nav_shop').on('click', app.events.nav_set_shop);
};
// NAV EVENTS
app.events.nav_set_edit = function(e) {   
    $('#nav_edit').parent().addClass('active');
    $('#nav_shop').parent().removeClass('active');
    app.events.nav_set_list_state(e);
};
app.events.nav_set_shop = function(e) { 
    $('#nav_shop').parent().addClass('active');
    $('#nav_edit').parent().removeClass('active');
    app.events.nav_set_list_state(e);
};
app.events.nav_set_list_state = function(e) {
    if ($('#nav_edit').parent().hasClass('active')) {
	$(':checkbox').hide();
	$('#edit_form').show();
	$('.sl-remove-item').show();
    }
    else {
	$(':checkbox').show();
	$('#edit_form').hide();
	$('.sl-remove-item').hide();
    }
};

/**
 * INIT
 */
$(document).ready(function() {
    app.events.init();
});
