import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://facebook.com">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagramSquare className="social-icon instagram-icon"></FaInstagramSquare>
        </a>
      </li>
      <li>
        <a href="https://youtube.com">
          <FaYoutubeSquare className="social-icon youtube-icon"></FaYoutubeSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
