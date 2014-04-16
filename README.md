# jQuery Center Plugin

A jQuery plugin that cmake the checkbox look more interesting.



## Description

This simple plugin helps you make checkbox more interesting without become expert in CSS. This checkbox is inspired from http://thecodeplayer.com/walkthrough/custom-animated-checkbox-inputs-using-css-iconfonts.

I have make a jquery plugin for this checkbox to simplify it. Hope you all get benifit from it. Please see look at the tutorial.html to know how to use it.


## Demo
 - Please see tutorial.html


## Requires
  - jQuery


## Installation
  - First, make sure you are using valid [DOCTYPE](http://bit.ly/hQK1Rk)
  - Include nessesary JS files

<!-- -->

      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
      <script type="text/javascript" src="path-to-file/animated_checkbox.js"></script>



## Options

#### fontSize
  - description: font-size for the whole check box with px unit only
  - data type: string
  - default value: '' //follow parent
  - possible value: '14px', '18px'

#### labelColor
  - description: specify the checkbox text color
  - data type: string
  - default value: '' //follow parent 
  - possible value: 'red' , 'hsl(300, 45%, 40%)' or any color type.

#### labelFontFamily
  - description: change the font family of checkbox text
  - data type: string
  - default value: '' //follow parent
  - possible value: 'Georgia', 'Courier New'

#### transitionTime
  - description: specify the time for transition
  - data type: string
  - default value: '0.35s'
  - possible value: '0.5s', '500ms'
  
#### checkBoxText
  - description: checkbox text
  - data type: string
  - default value: ''
  - possible value: 'Yes', 'No'
  
#### checkBoxColor
  - description: specify the color of checkbox's box
  - data type: string
  - default value: '' //follow parent 
  - possible value: 'red' , 'hsl(300, 45%, 40%)' or any color type.

## Usage
> Example code:

      // just showing the checkbox's box
      $( '#some-element' ).animatedCheckBox();

      // centralize .some-element against its parent element
      $( '#some-element' ).animatedCheckBox({
        checkBoxText:'Yes'
      });


## License

The expandable plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2014 Yeap Sin Yu
