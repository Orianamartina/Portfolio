import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import { GitlabIcon } from "../Icons/GitlabIcon";
import { LocationIcon } from "../Icons/LocationIcon";
const ContactInformation = ({ isMobile = false, style }) => {
  return (
    <article
      className={`${style.contactCard} ${
        isMobile ? style.contactCardMobile : style.contactCardDesktop
      }`}
    >
      <div>
        <div className={style.linksContainer}>
          <a
            href="https://www.linkedin.com/in/oriana-pettinelli-777a09268/"
            target="_blank"
          >
            <LinkedinIcon className={style.linkIcons} />
          </a>
          <a href="https://github.com/Orianamartina" target="_blank">
            <GithubIcon className={style.linkIcons} />
          </a>
          <a href="https://gitlab.com/Orianamartina" target="_blank">
            <GitlabIcon className={style.linkIcons} />
          </a>
        </div>
        <div>
          <div className={style.lineBreak} />

          <div className={style.contactIconItem}>
            <LocationIcon className={style.contactCardIcon} />
            <small>Argentina</small>
          </div>
          <div className={style.contactIconItem}>
            <LocationIcon className={style.contactCardIcon} />
            <small>orianapettinelli1@gmail.com</small>
          </div>
          <div className={style.contactIconItem}>
            <LocationIcon className={style.contactCardIcon} />
            <small>+54 011 49896418</small>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactInformation;
