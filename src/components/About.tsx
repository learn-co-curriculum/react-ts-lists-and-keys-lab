import Links from "./Links";

interface Props {
  bio: string;
  links: {
    github: string;
    linkedin: string;
  }
}

function About({ bio, links }: Props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
