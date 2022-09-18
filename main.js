const billAmount=document.querySelector('#billAmount');
const cashGiven=document.querySelector('#cashGiven');
const checkButton=document.querySelector('.button');
const message=document.querySelector('.message')
const noOfNotes=document.querySelectorAll('.no-of-notes')
const notes=[2000,500,100,20,10,5,1];


function calculateChange(amount){
	for(let i=0;i<notes.length;i++){
		const numberOfNotes=Math.trunc(amount/notes[i]);
		amount%=notes[i];
		noOfNotes[i].innerText=numberOfNotes;
	}
}

checkButton.addEventListener('click',function checkAmount(){
	hideMessage();
	if(billAmount.value>0){
		if(cashGiven.value >= billAmount.value){
			const amountToBeReturned=cashGiven.value-billAmount.value;
			calculateChange(amountToBeReturned);
		}else{
			showMessage("Mind washing the dishes?")
		}
	}else{
		showMessage("Invalid Bill Amount");
	}
});



function showMessage(msg){
	message.style.display="block";
	message.innerText=msg;
}

function hideMessage(){
	message.style.display="none";
}
