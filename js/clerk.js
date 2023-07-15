(function () {
    'use strict'
   
var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  const clerknamedisplay = document.getElementById('clerknamedisplay');
  const posclerkname = document.getElementById('posclerkname')
  const pindisplay = document.getElementById('pindisplay');
  const clerk1name = document.getElementById('clerk1');
  const clerk2name = document.getElementById('clerk2');

    

  function namedisplay() {
  var getclerkname = document.getElementById('clerknamedisplay').value;
  localStorage.setItem('clerk_name', getclerkname);
  }
  
  function clerk1() {
  
    clerknamedisplay.value = clerk1name.value
    selectaudio.play()
  };

  function clerk2() {
  
    clerknamedisplay.value = clerk2name.value
    selectaudio.play()
  };

  function clearform() {
    clerknamedisplay.value = "";
    pindisplay.value = "";
    audio.play()
  }

  function pinpress(number1){

    console.log(pindisplay.length);
    if (pindisplay.value == 0 && number1 == '00') {
        pindisplay = '0.';
    } else if (pindisplay.value == 0 && number1 == '0') {
        pindisplayy = '0.';
    } else if (pindisplay.value == '' && number1 == '00') {
        pindisplay.value = '0';
    } else if (pindisplay.value.includes('.') === true && number1 =='.') {
        pindisplay.value = pindisplay.value;
    } else {
        pindisplay.value += number1;
    }

    if (pindisplay.value == '.') {
        pindisplay = '0.';
    };
  
    selectaudio.play()
};


const audio = new Audio();
audio.src = "";
audio.volume = .1;

const selectaudio = new Audio();
selectaudio.src = "#"
selectaudio.volume = 1;

window.history.forward();
function noBack() {
    window.history.forward();
}


function addclerk() {
    let namebuttoncon = document.getElementById('clerknamebuttoncon')
    let addclerkinput = document.getElementById('addclerkname').value
    let addpininput = document.getElementById('addpin').value


    localStorage.setItem('new_clerk', addclerkinput);
    localStorage.setItem('new_pin', addpininput);


    const nametext = localStorage.getItem('new_clerk')

    const creatediv = document.createElement('div')
    const createclerknamebutton = document.createElement('button')
    const createname = document.createTextNode(nametext);

    namebuttoncon.appendChild(creatediv)
    creatediv.appendChild(createclerknamebutton)
    createclerknamebutton.appendChild(createname)
    creatediv.className = " mb-2 col-md-6"
    createclerknamebutton.className = 'btn btn-dark'
    createclerknamebutton.setAttribute('onclick', 'newclerk()',)
    createclerknamebutton.setAttribute('value', nametext)
    createclerknamebutton.setAttribute('id', nametext)
    
    
    document.getElementById('addclerkname').value = "";
    document.getElementById('addpin').value = "";

    
}



function newclerk() {
   let loginnewclerk = document.getElementById(localStorage.getItem('new_clerk')).value

   clerknamedisplay.value = loginnewclerk
   selectaudio.play()
}


function authentication() {

    const getname = localStorage.getItem('new_clerk')
    const getpin = localStorage.getItem('new_pin')
    
    var pincode = document.getElementById('pindisplay').value;
    if(pincode === "123456"  && clerknamedisplay.value === "Cyril John") {
        window.location.assign("");
        alert("Hi Cyril John. You are now logged in.")
    } else if (pincode === "000000"  && clerknamedisplay.value === "Hazel Fel") {
        window.location.assign("../page1.html");
        alert("Hi Hazel Fel You are now logged in.")
    
    } else if (pincode == getpin  && clerknamedisplay.value == getname) {
        window.location.assign("page1.html");
        alert("Hi " + getname +  ". You are now logged in..")
    } else {
        alert('Wrong Pin Code. Try Again!');
        return;
    }

    namedisplay()
    noBack()
}


