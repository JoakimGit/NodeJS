// fetch("/api/projects").then(res => res.json()).then(console.log)

(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();

    const projectsDiv = document.getElementById("projects");

    result.projects.map(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project")

        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("project-title");
        projectTitle.innerHTML = '<b>' + project.title + '</b>';

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.innerText = project.description;

        const projectURL = document.createElement("p");
        projectURL.classList.add("project-url");
        projectURL.innerText = project.gitURL;

        const projectTechs = document.createElement("p");
        projectTechs.classList.add("project-technologies");
        projectTechs.innerText = "Technologies used: " + project.technologiesInvolved.join(", ");

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectURL);
        projectDiv.appendChild(projectTechs);
        projectsDiv.appendChild(projectDiv);

    });

})();
