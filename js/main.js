
$(".card-body a").click(function() {
  $(this).css("background-color", "black");
});

$(".card-body .card-title").mouseover(function() {
  $(this).text("Fashion 24 For You!").css("color","purple");;
});

$("#submit").click(function(){  
   var email= $("#emailInput").val();
   var prodname=$("#productNameInput").val();
   if(email && prodname)
   {
    $("#message").text("Your Product Details have been submitted!").css("color","green");

   }
   else{$("#message").text("Please Enter Product Details ").css("color","red");
   }
  
});

let qoute= document.querySelector(".qoute");
//in jquery just use to use $(".qoute");
let btn = document.querySelector("#newqoute");
let person = document.querySelector(".person");
const qout=[
    {
        qoute:`Its not that we use technology, we live technology`,
        person:`Godfrey Reggio`
    },
    {
        qoute:`The real problem is not whether machines think but whether men do.`,
        person:`B. F. Skinner`

    },
    {
        qoute:`Any sufficiently advanced technology is indistinguishable from magic.`,
        person:`  Arthur C. Clarke`


    }

    
];

btn.addEventListener("click",function()
{
    let random = Math.floor(Math.random()*qout.length);
    qoute.innerHTML= qout[random].qoute;
    person.innerHTML= qout[random].person;
})