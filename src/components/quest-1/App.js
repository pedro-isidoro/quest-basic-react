function UppercaseParagraph(){
  const paragraph = document.getElementById('paragraph');
  const pContain = paragraph.classList;
  if(pContain.contains('uppercase')){
    paragraph.classList.remove('uppercase')
  }else{
    paragraph.classList.add('uppercase')
  }
}

export {UppercaseParagraph}