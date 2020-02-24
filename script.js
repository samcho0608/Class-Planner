function testFunction(clicked_id) {
  let test = document.getElementById(clicked_id).textContent;
  document.getElementById(clicked_id).parentElement.previousElementSibling.innerHTML=test;
}

function nextPage() {
	document.getElementById('secondPage').style.display='none';
	document.getElementById('fourthPage').style.display='block';
}


// READ FILE
function readFile(file)
{
    var f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = function ()
    {
        if(f.readyState === 4)
        {
            if(f.status === 200 || f.status == 0)
            {
                var res= f.responseText;
                var splitted = res.split("\n");  
                console.log(splitted); //to see if contents are read
                console.log(typeof splitted[0]);
            }
        }
    }
    f.send(null);
}

readFile('statsprereq.txt');

function addOptions()
{
  let prereqs = ["Chem 20A", "Chem20B"];
  for (i=0; i<prereqs.length; i++)
  {
    var now = prereqs[i];
    $('#prereq').append(`<option value="${now}">${now}</option>`);
  }
}

function nextPage2() {
	document.getElementById('fourthPage').style.display='none';
	document.getElementById('thirdPage').style.display='block';
}