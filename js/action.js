function changeSizeImage(im) {
var win ="width=600,height=600"
newWin = window.open(im.src,"newWin",win);
newWin.focus();
}
<!-- onClick="changeSizeImage(this)"-->


function check()
{
	let n=0;
	if (form3.answer1[1].checked)
		n=n+1;
	if (form3.answer2[0].checked)
		n=n+1;
	if (form3.answer3[0].checked)
		n=n+1;
	if (form3.answer4[0].checked)
		n=n+1;
	if (form3.answer5[1].checked)
		n=n+1;
	if (form3.answer6[1].checked)
		n=n+1;
	if (form3.answer7[3].checked)
		n=n+1;
	if (form3.answer8[2].checked)
		n=n+1;
	if (form3.answer9[0].checked)
		n=n+1;
	if (form3.answer10[0].checked)
		n=n+1;
	alert("\nВы набрали "+n+" баллов! Молодец!");
}