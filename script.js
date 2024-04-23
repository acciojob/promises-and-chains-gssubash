//your JS code here. If required.
const forms= document.getElementById('forms');


forms.addEventListener('submit',(e)=>{
	const obj = e.target;
	
e.preventDefault();
	const name = obj.name.value;
	const age = obj.age.value;
 
	const pro = new Promise((rs,rj)=>{
		setTimeout(()=>{
		if(age>18){
			
				rs(`Welcome, ${name}. You can vote.`);
			
		}else{
			rj(new Error(`Oh sorry ${age}. You aren't old enough.`));
		}
					   },4000);
	});

	checkAge(pro);
});


async function checkAge(data){
	try{
		const result = await data;
	alert(result);
	}catch(err){
		alert(err.message);
		console.log(err.message);
	}
}