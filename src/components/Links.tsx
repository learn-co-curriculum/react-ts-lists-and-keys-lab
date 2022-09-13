interface Props {
  github: string;
  linkedin: string;
}

function Links({ github, linkedin }: Props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
