import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head-text text-center">
        Discover
        <br className="max-md:hidden"/>
        <span className="orange-gradient text-center">AI Prompts</span>
      </h1>
      <p className="desc text-center">
        This is a modern tools help to store advanced AI promts for further use and sharing
      </p>
      <Feed />
    </section>
  )
}

export default Home;
