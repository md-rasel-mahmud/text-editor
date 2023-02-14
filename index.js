// select textarea 
const textarea = document.getElementById('text-input');

//select typography
const bold = document.getElementById('bold');
    bold.addEventListener('click',function(){
        if (textarea.style.fontWeight =='bold') {
            textarea.style.fontWeight ='normal';
        }else{
            textarea.style.fontWeight ='bold';
        }
    })

const italic = document.getElementById('italic');
    italic.addEventListener('click',function(){
        if (textarea.style.fontStyle =='italic') {
            textarea.style.fontStyle ='normal';
        }else{
            textarea.style.fontStyle ='italic';
        }
    })

const underline = document.getElementById('underline');
    underline.addEventListener('click',function(){
        if (textarea.style.textDecoration =='underline') {
            textarea.style.textDecoration ='none';
        }else{
            textarea.style.textDecoration ='underline';
        }
    })

// select alignment 
const alignLeft = document.getElementById('align-left');
    alignLeft.addEventListener('click',function () {
        textarea.style.textAlign ='left';
    })
const alignCenter = document.getElementById('align-center');
    alignCenter.addEventListener('click',function () {
        textarea.style.textAlign ='center';
    })
const alignRight = document.getElementById('align-right');
    alignRight.addEventListener('click',function () {
        textarea.style.textAlign ='right';
    })

//Uppercase/lowercase/capitalize, font size and color
const textTansform = document.getElementById('text-tansform');
    textTansform.addEventListener('click',function(){
        if (textarea.style.textTransform == 'uppercase') {
            textarea.style.textTransform = 'lowercase';
        } else if(textarea.style.textTransform == 'lowercase'){
            textarea.style.textTransform = 'capitalize';
        }else{
            textarea.style.textTransform = 'uppercase';
        }
    })
const fontSize = document.getElementById('font-size');
    fontSize.addEventListener('change', function(e){
        textarea.style.fontSize = e.target.value+'px';
    })
const color = document.getElementById('color');
    color.addEventListener('change',function(e){
        textarea.style.color = e.target.value;
    })