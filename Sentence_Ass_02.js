var agree =document.getElementById("Sentence" && "Letter");
agree.addEventListener('change', function()
{
    let submit=document.getElementById("btn1");
    if(agree.checked)
    {
        submit.removeAttribute("disabled")
    }
    else
    {
        submit.setAttribute("diabled","disabled")
        var buttons = document.getElementById('btn1').onclick = function()
        {
 
                document.getElementById('result').innerHTML="Result"
                
                var mySentence = document.getElementById('Sentence').value;
                var myLetter = document.getElementById('Letter').value;
                if(mySentence.indexOf(myLetter)>=0)
                {
                    document.getElementById('input_3').innerHTML=mySentence.substr(mySentence.indexOf(myLetter)+1,mySentence.length)
                    document.getElementById("input_3").style.backgroundColor = '#4cb050';
                    document.getElementById("input_3").style.color = 'white';
                    document.getElementById("input_3").style.padding = '12px 20px';
                    document.getElementById("input_3").style.borderRadius = '5px';
                }
                else
                {  
                    document.getElementById('input_3').innerHTML="This letter is not pressent in the sentence" 
                    document.getElementById("input_3").style.backgroundColor = '#ed0404';
                    document.getElementById("input_3").style.color = 'white';
                    document.getElementById("input_3").style.padding = '12px 20px';
                    document.getElementById("input_3").style.borderRadius = '5px';
                }
        }
    }
})

 
    

