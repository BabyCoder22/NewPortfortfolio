/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
    firstName: "Tinashe",
    lastName: "Mupoperi",
    jobTitle: "Software Developer, Web Design, Graphic Design",
    city: "Johannesburg",
    postalCode: "2094",
    country: "South Africa",
    phone: "+27652721428",
    email: "tibrizzy22@gmail.com",
    education: [
        {
            school: "Rosebank College",
            degree: "Diploma NQF 6",
            graduationDate: "2024",
            description: "Software Developer"
        }
    ],
    links: [
        {
            label: "GitHub",
            link: "https://github.com/BabyCoder22"
        }
       
    ],
    skills: [
        "Java",
        "C#",
        "JavaScript",
        "SQL",
        "ASP.Net MVC",
        "SQL",
        "PHP",
        "Firebase",
        "ASP.NET",
        "Azure",
        "Wordpress",
        "Canva"
    ],
    languages: ["English", "Isizulu", "Ndebele"],
    professionalSummary: `Started doing freelancing in software development,graphic design and web design from 2023 until to date`,
    employmentHistory: [
        {
            jobTitle: "Sales Agent,Recruiter and Customer Service",
            startDate: "February 2021",
            endDate: "Present",
            employer: "Sihle",
            city: "Remote",
            achievements: [
                "Introduced to a new company that recruits people in order for people to buy their products",
                
            ]
        },
        {
            jobTitle: "FreeLancer",
            startDate: "February 2023",
            endDate: "Present",
            employer: "Amos",
            city: "Remote",
            achievements: [
                "Built a Portfolio for for My client",
                
            ]
        },
        {
            jobTitle: "FreeLancer",
            startDate: "January 2024",
            endDate: "Present",
            employer: "Tinashe",
            city: "Remote",
            achievements: [
                "Built a A Temperature Converter Website",

            ]
        },
        {
            jobTitle: "FreeLancer",
            startDate: "October 2023",
            endDate: "Present",
            employer: "Makhado",
            city: "Remote",
            achievements: [
                "Built a Website for Makhado General trading and services",

            ]
        },
        {
            jobTitle: "FreeLancer",
            startDate: "February 2023",
            endDate: "Present",
            employer: "MySelf",
            city: "Remote",
            achievements: [
                "Designed Logos and advert images for a living",

            ]
        }
       
    ],
    photo:
        "WhatsApp Image 2023-11-18 at 04.26.37_efac18c8.jpg"
};

const formatResume = (r) => ({
    ...r,
    address: [r.country, r.city, r.postalCode].filter(Boolean).join(", ")
});

new Vue({
    el: "#app",
    data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
    document.querySelector("body").classList.remove("d-none");
}
if (customElements) {
    customElements.whenDefined("animatable-component").then(animatableLoaded);
} else animatableLoaded();
