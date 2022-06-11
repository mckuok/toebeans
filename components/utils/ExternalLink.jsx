export default function ExternalLink({href, children }) {
    return (
        <a className="link-text" href={href} target="_blank" rel="noreferrer">    
            {children}
        </a>
    );
}