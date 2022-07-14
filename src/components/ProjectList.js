import PropTypes from 'prop-types';

function ProjectList(props) {

    const { projects } = props;

    return (
        <div className="project-list">
                {projects.map((o, index) => (<img className="project-img" key={index} src={o.img} />))}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}

export default ProjectList;

