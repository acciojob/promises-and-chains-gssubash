const forms = document.getElementById('forms');

forms.addEventListener('submit', async (e) => {
  e.preventDefault();
  const obj = e.target;
  const name = obj.name.value;
  const age = obj.age.value;

  const pro = new Promise((rs, rj) => {
    setTimeout(() => {
      if (age > 18) {
        rs(`Welcome, ${name}. You can vote.`);
      } else if(age<18){
        rj(new Error(`Oh sorry ${age}. You aren't old enough.`));
      }
    }, 4000);
  });

  try {
    const result = await pro;
    alert(result);
  } catch (err) {
    alert(err.message);
    console.log(err.message);
  }
});
