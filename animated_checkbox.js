/*
The MIT License (MIT)

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

jQuery.fn.animatedCheckBox = function(options) {
    var options = jQuery.extend({
        fontSize: '',//default follow parent
		labelColor:'',//default follow parent 
		labelFontFamily : '',//default follow parent 
        transitionTime: '0.35s' ,
		checkBoxText:'',
		checkBoxColor:''//default color from parent
		
    },
    options);
	
	var transitionTime='0.35s';

	
	if(options.transitionTime.length > 0){
			transitionTime=options.transitionTime;
	}

	
	//font size
	var font_size = this.css('font-size');
	//if font-size specify, use specify font-size
	if(options.fontSize.length > 0){
		font_size = options.fontSize;
	}
	
	var checkBox_size = 'calc('+font_size+' * 1.5)';
	var padding_size = 'calc( '+font_size+' * 2)';
	
	var checkbox_id = this.attr('id')+'_checkBox';
	var label_id = this.attr('id')+'_label';
	
	var css = "/*fontawesome iconfont*/\n"+
				"@import url(http://thecodeplayer.com/uploads/fonts/fontawesome/css/font-awesome.min.css);\n"+
				"* {margin: 0; padding: 0;}\n"+
				"/*Adding custom checkbox icons*/\n"+
				".animated_checkbox_label {\n	position: relative;	cursor: pointer;}\n"+
				".animated_checkbox_label:before, .animated_checkbox_label:after {		/*absolutely positioned*/	position: absolute; top: 0; left: 0;}\n"+
				".animated_checkbox_label:before {	content: '\\f096'; /*unchecked*/}\n"+
				".animated_checkbox_label:after {	content: '\\f046'; /*checked*/	}\n"+
				"/*hiding the original checkboxes*/\n"+
				"/*when the user checks the checkbox the checked icon will animate in*/\n";

	
    $('head').append('<style>'+css+'</style>');
	
	//set check box color;
	var checkboxColor = '';
	if(options.checkBoxColor.length > 1){
		checkboxColor = '#'+checkbox_id+'+#'+label_id+':before, #'+ checkbox_id+'+#'+label_id +':after { color: '+options.checkBoxColor+'}';
	}
	
	var specific_css = "#"+label_id+" {padding-left: "+padding_size+";	font-size: "+font_size+"; font-family:"+options.labelFontFamily+"; color: "+options.labelColor+"}\n"+
						"#"+label_id+":before, #"+label_id+":after {font-family: FontAwesome;	font-size: "+checkBox_size+";}\n"+
						"#"+label_id+":after {font-family: FontAwesome;	font-size: "+checkBox_size+"; /*checked icon will be hidden by default by using 0 max-width and overflow hidden*/	max-width: 0;	overflow: hidden;	opacity: 0.5;	/*CSS3 transitions for animated effect*/	transition: all "+transitionTime+"}\n"+
						"#"+checkbox_id+" {	display: none;}\n"+
						"#"+checkbox_id+":checked  + .animated_checkbox_label:after {\n max-width: 25px; /*an arbitratry number more than the icon's width*/	opacity: 1; /*for fade in effect*/}\n"+checkboxColor;	
	
	$('head').append('<style>'+specific_css+'</style>');
		var label_text = '<input type="checkbox" name="'+checkbox_id+'" id="'+checkbox_id+'" /><label id="'+label_id+'" class ="animated_checkbox_label" for="'+checkbox_id+'">'+options.checkBoxText+'</label>';	
		this.html(label_text);
	
    
};
