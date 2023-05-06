import conf from "../../config";

export default function Footer(){
  return (
    <footer>
      <img src="/assets/logo.png" alt="Logo" />

      <div className="links">
        {
          conf.SITE_DISCORD &&
          <a href={conf.SITE_DISCORD} target="_blank">Discord</a>
        }

        {
          conf.SITE_CREDITS &&
          <a>Made by Vibudha</a>
        }
      </div>

      <p className="disclaimer">&copy; {conf.SITE_TITLE}. All media has been licensed.</p>
    </footer>
  )
}
