import a from "../images/youtube.png";
import b from "../images/github.png";
import c from "../images/ins.png";
import d from "../images/mail.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links_div">
          <div className="socialmedia">
            <a href="https://www.youtube.com/channel/UCBjv0x-eWOwNzmv5EuLw29g">
              <img id="youtube" src={a} style={{ height: "2.5rem" }} alt="" />
            </a>
            <a href="https://github.com/annali07">
              <img id="github" src={b} style={{ height: "2.5rem" }} alt="" />
            </a>
            <a href="https://www.instagram.com/annaxzl/?next=%2F">
              <img src={c} style={{ height: "2.5rem" }} alt="" />
            </a>
            <a href="#">
              <img src={d} style={{ height: "2.5rem" }} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p>COPYRIGHT © 2023 NANA BLOG. ALL RIGHTS RESERVED.</p>
    </div>
  );
}
