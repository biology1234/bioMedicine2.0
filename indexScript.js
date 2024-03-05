window.addEventListener('DOMContentLoaded', function(){


const word1 = document.getElementById('typeText1Ex1');
  const word2 = document.getElementById('typeText2Ex1');
  const word3 = document.getElementById('typeText3Ex1');
  
 document.getElementById('submit1').addEventListener('click', function click(event){
    
       let score = 0;
      if(word1.value === 'двойна' || word1.value === 'Двойна' || word1.value === 'смесена' || word1.value === 'Смесена'){
          score += 1; 
      }
      if (word2.value === 'вътрешна' || word2.value === 'Вътрешна'){
        score += 1; 
      }
      if(word3.value === 'външна'|| word3.value === 'Външна'){
        score += 1; 
      }
      if(score === 3){
        alert('Браво! Всичко е вярно!'); 
      }
      else{
        alert('Моля, попълнете правилно твърденията!');
      }
  });});

  

