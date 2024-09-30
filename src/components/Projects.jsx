function Projects(props) {
      const cardStyle = {
        width: '18rem',
      };
    return (
        <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src="src\assets\Blogposter.png"
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Project Title: {props.title}</h5>
        <p className="card-text">Description: {props.description}</p>
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
              View this project
            </a>
        </div>
      </div>
    </div> 
    );
}
    
export default Projects;