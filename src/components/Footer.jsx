import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <p> You have gone too deep! </p>
        <a href="#top"> Back to Safety</a>
        <div className="footer">
            <div className="linkimgs">
                <a
                className="linkimg"
                href="https://github.com/BunggoyLearn"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub />
                </a>
                <a
                className="linkimg"
                href="https://www.linkedin.com/in/andrew-sitko-450932192/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin />
                </a>
            </div>
        </div>
    </footer>
  );
}
 
export default Footer;