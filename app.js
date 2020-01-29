let name = 'mike baumgarten';
let career = 'Systems Administration Supervisor';
let myDescription = 'I try to do at least 1 international trip a year';
let interests = ['Snowboarding','Travel','Whiskey','Automation','Hiking'];
let job1 = {
    company: 'VMWare',
    title: 'Intern',
    jobDescription: 'Provided  helpdesk support for a VMWare call center'
};
let job2 = {
    company: 'Berg Hill Greenleaf, & Ruscitti',
    title: 'Helpdesk Support',
    jobDescription: "Supported attorney's with computer issues"
}

let job3 = {
    company: 'Antero Resources Corporation',
    title: 'Systems Administrator',
    jobDescription: "Infrastructure support for a large oil and gas company"
}

let jobs = [job1,job2,job3];

let skill1 = {
    skill: 'Spanish',
    cool: true
}
let skill2 = {
    skill: 'Active Directory',
    cool: false
};
let skill3 = {
    skill: 'PowerShell',
    cool: true
};
let skill4 = {
    skill: 'VMWare Technologies - vCenter, vRA, vROPS, ESXI',
    cool: true
};
let skill5 = {
    skill: 'Cisco UCS',
    cool: false
};
let skill6 = {
    skill: 'Netapp',
    cool: false
};

let skills = [skill1,skill2,skill3,skill4,skill5,skill6];

function displayPosition(company,title,jobDescription){
    console.log('* ' + title + ' at ' + company + ' - ' + jobDescription);
};


function displaySkill (skill,cool) {
    if(cool == true){
        console.log('* BAM: ' + skill)
    }else {
        console.log('* ' + skill)
    }
};

console.log('Name: ' + name.toUpperCase());
console.log('Career: ' + career);
console.log('Description: ' + myDescription)

console.log();
console.log('My Interests:')
for (i = 0; i < interests.length; ++i){
    console.log('* ' + interests[i]);
}
console.log();
console.log('My Previous Experience:');
for (i = 0; i < jobs.length; ++i){
    displayPosition(jobs[i].company,jobs[i].title,jobs[i].jobDescription);
};
    
console.log();
console.log('My Skills:');
for (i = 0; i < skills.length; ++i){
    displaySkill(skills[i].skill,skills[i].cool);
};