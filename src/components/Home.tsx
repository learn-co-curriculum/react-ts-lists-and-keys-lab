interface Props {
  color: string;
  username: string;
  city: string;
}

function Home({ color, username, city }: Props) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
