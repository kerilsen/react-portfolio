export default function Project(props) {
    return (
        <article className="project grid-item">
        <h3 className="app-title">{props.title}</h3>
        <p className="caption">{props.caption}</p>
        <a href={props.link}><img
                src={props.img} className="stretchimage"
                alt={props.alt} /></a>
    </article>
    )
}