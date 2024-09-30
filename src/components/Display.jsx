import Projects from "./Projects";

function Display() {
    const project = {
        title: 'BlogPoster',
        description: 'A blog posting app made with Javascript',
        repository: 'https://github.com/BunggoyLearn/Blogposter',
        deployed: "https://bunggoylearn.github.io/Blogposter/",
      };

    return (
        <div>
            <Projects name={project.name} description={project.description} repository={project.repository} deployed={project.deployed}/>
        </div>
    );
}

export default Display;