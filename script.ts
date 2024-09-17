document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();


   
    
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;


    if (nameElement && emailElement 
        && phoneElement && 
        educationElement && experienceElement
         && usernameElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;


        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

       

   // Resume Output
   const resumeOutput = `
   <h2>Resume</h2>
   
   <p><strong>Name:</strong>${name}</p>
   <p><strong>Email:</strong>${email}</p>
   <p><strong>Phone:</strong>${phone}</p>

   <h3>Education</h3>
   <p>${education}</p>

   <h4>Experience</h4>
   <p>${experience}</p>

   <h5>Skills</h5>
   <p>${skills}</p>`;

   const downloadlink = document.createElement('a')
   downloadlink.href = 'data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput)
   downloadlink.download =uniquePath;
   downloadlink.textContent = 'Download My Resume';

   const resumeOutputElement =document.getElementById("resumeOutput")
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput


    resumeOutputElement.appendChild(downloadlink);

   } else {
    console.error('The resume Output Elements are missing');
    
   }
 } else {
    console.error('one or more output elements(s) are missing ');
    
   }
}
   
)