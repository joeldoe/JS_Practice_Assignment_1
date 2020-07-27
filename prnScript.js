// formValidator() function will validate the data
function formValidator()
{
	// Counter variable to check if the submission is valid or not
	var submission = 0;

	if(document.getElementById('ip1').value < 1999)
	{
		document.getElementById('error1').textContent = 'College started in 1999!';
		document.getElementById('error1').style.color = 'red';
		document.getElementById('error1').style.fontSize = '12px';
		document.getElementById('error1').style.fontWeight = 'bold';
		submission++;
	}

	if(document.getElementById('ip1').value == '')
	{
		document.getElementById('error1').textContent = 'Required field!';
		document.getElementById('error1').style.color = 'red';
		document.getElementById('error1').style.fontSize = '12px';
		document.getElementById('error1').style.fontWeight = 'bold';
		submission++;	
	}

	if(document.getElementById('op1').selected == true)
	{
		document.getElementById('error2').textContent = 'Please select the department!';
		document.getElementById('error2').style.color = 'red';
		document.getElementById('error2').style.fontSize = '12px';
		document.getElementById('error2').style.fontWeight = 'bold';
		submission++;	
	}

	if(document.getElementById('ip2').value > 10)
	{
		document.getElementById('error3').textContent = "This batch no. is not valid!";
		document.getElementById('error3').style.color = 'red';
		document.getElementById('error3').style.fontSize = '12px';
		document.getElementById('error3').style.fontWeight = 'bold';
		submission++;
	}

	if(document.getElementById('ip2').value < 1)
	{
		document.getElementById('error3').textContent = "This batch no. is not valid! (Only 10 batches)";
		document.getElementById('error3').style.color = 'red';
		document.getElementById('error3').style.fontSize = '12px';
		document.getElementById('error3').style.fontWeight = 'bold';
		submission++;
	}

	if(document.getElementById('ip3').value < 1)
	{
		document.getElementById('error4').textContent = 'It should be maximum a 4-digit number!';
		document.getElementById('error4').style.color = 'red';
		document.getElementById('error4').style.fontSize = '12px';
		document.getElementById('error4').style.fontWeight = 'bold';
		submission++;
	}

	if(document.getElementById('ip3').value > 9999)
	{
		document.getElementById('error4').textContent = 'It should be maximum a 4-digit number!';
		document.getElementById('error4').style.color = 'red';
		document.getElementById('error4').style.fontSize = '12px';
		document.getElementById('error4').style.fontWeight = 'bold';
		submission++;
	}

	if(submission == 0)
	{
		console.log('Generated!');
		var year = document.getElementById('ip1').value;
		var branches = document.getElementsByName('option');
		var branch;
		for(let i = 0; i < branches.length; i++)
		{
			if(branches[i].selected == true)
			{
				branch = branches[i].value;
			}
		}

		var batch = document.getElementById('ip2').value;
		var seqNo = document.getElementById('ip3').value;

		document.getElementById('error1').textContent = '';
		document.getElementById('error2').textContent = '';
		document.getElementById('error3').textContent = '';
		document.getElementById('error4').textContent = '';
			
		prnGenerator(year,branch,batch,seqNo);
	}
	else
	{
		console.log('Denied!');
	}
}

// prnGenerator() function will generate the PRN only if the filled data is valid
function prnGenerator(year,branch,batch,seqNo)
{
	var prn;
	var strYear = year.slice(2,4);
	var strBatch;
	var strSeqNo;

	if(Number(batch) == 10)
	{
		strBatch = batch;
	}
	else
	{
		strBatch = '0' + batch;
	}

	if(Number(seqNo) < 10)
	{
		strSeqNo = '000' + seqNo;
	}
	else if(Number(seqNo) < 100)
	{
		strSeqNo = '00' + seqNo;
	}
	else if(Number(seqNo) < 1000)
	{
		strSeqNo = '0' + seqNo;
	}
	else
	{
		strSeqNo = seqNo;
	}

	prn = strYear + branch + strBatch + strSeqNo;
	document.getElementById('prn').textContent = 'PRN: ' + prn;
}