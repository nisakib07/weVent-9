/* eslint-disable react/no-unescaped-entities */
const Comments = () => {
  return (
    <div className="mt-20">
      <h3 className="text-center text-white text-4xl font-bold">
        Here are some reviews of our clients
      </h3>
      <div
        className="lg:w-1/2 mx-auto mt-10 bg-white p-4 rounded-lg"
        data-aos="fade-up">
        <p>
          I can't thank WeVent enough for making my wedding day so incredibly
          special. Their attention to detail and creative ideas turned my dream
          wedding into a reality. It was a day we will cherish forever. <br />
          <span>-Sarah</span>
        </p>
      </div>
      <div
        className="lg:w-1/2 mx-auto mt-4 bg-white p-4 rounded-lg"
        data-aos="fade-down">
        <p>
          From planning my baby shower to my daughter's first birthday, WeVent
          has been my go-to event planner. Their dedication to making each event
          unique and memorable is truly remarkable <br />
          <span>-Emily</span>
        </p>
      </div>
      <div
        className="lg:w-1/2 mx-auto mt-4 bg-white p-4 rounded-lg"
        data-aos="fade-up">
        <p>
          We chose WeVent for our daughter's sweet sixteen party, and it was a
          hit! The decorations, entertainment, and overall experience were
          top-notch. I highly recommend them. <br />
          <span>-David</span>
        </p>
      </div>
    </div>
  );
};

export default Comments;
