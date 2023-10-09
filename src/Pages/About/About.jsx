/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <div className="bg-pink-600">
        <Navbar></Navbar>
      </div>
      <div
        className="shadow-xl mt-10 w-1/2 mx-auto p-5 rounded-lg"
        data-aos="fade-up">
        <h3 className="text-3xl mb-3 font-bold text-center">
          Our Mission and Values
        </h3>
        <p>
          Our mission is to turn your special moments into unforgettable
          memories by crafting exceptional events filled with creativity, care,
          and attention to detail. At WeVent, we are dedicated to bringing your
          dreams to life through innovative event planning and execution. We
          exist to create magical experiences that celebrate life's milestones,
          leaving a lasting impression on every guest.
          <br />
          <br />
          At WeVent, our values define who we are and how we approach event
          management: <br /> <b>Creativity:</b> We believe in the power of
          creativity to transform ordinary events into extraordinary
          experiences. We strive to infuse every occasion with fresh and
          imaginative ideas, ensuring that your event is truly one-of-a-kind.{" "}
          <br />
          <b>Excellence:</b> Excellence is the standard we uphold in every
          aspect of our work. From meticulous planning to flawless execution, we
          are committed to delivering the highest quality event services. <br />
          <b>Client-Centric: </b>Our clients are at the heart of everything we
          do. We listen attentively, understand your unique needs, and tailor
          our services to surpass your expectations, making your vision a
          reality. <br />
          <b>Attention to Detail:</b> We understand that the magic is in the
          details. Our meticulous approach ensures that no element of your event
          is overlooked, no matter how small. <br /> <b>Integrity:</b> Integrity
          guides our actions. We operate with transparency, honesty, and ethical
          conduct, earning the trust of our clients and partners.
        </p>
      </div>
      <div
        className="shadow-xl mt-10 w-1/2 mx-auto p-5 rounded-lg mb-4"
        data-aos="fade-up">
        <h3 className="text-3xl mb-3 font-bold text-center">Company Culture</h3>
        <p>
          Company culture is the heartbeat of WeVent. It defines how we work
          together and what you can expect when you choose us as your event
          management partner:
        </p>
        <p>
          <b>Client-Centric Approach:</b> Everything we do revolves around you,
          our valued client. We pride ourselves on our client-centric approach,
          where your vision and satisfaction take center stage in every decision
          we make.
        </p>
        <p>
          <b>Team Collaboration:</b> Teamwork is at the core of our culture. Our
          diverse and talented team collaborates seamlessly, combining our
          strengths to overcome challenges and exceed expectations.
        </p>
        <p>
          <b>Passion and Dedication:</b> Passion fuels our work. We are deeply
          dedicated to crafting events that inspire, delight, and leave a
          lasting impression. Our enthusiasm is evident in every project we
          undertake.
        </p>
        <p>
          <b>Continuous Improvement:</b> We are committed to continuous
          improvement. Embracing change and learning from every experience, we
          stay at the forefront of industry trends and technologies to deliver
          excellence.
        </p>
        <p>
          <b>Community Engagement:</b> Giving back is fundamental. We engage
          with our community through charitable initiatives, supporting causes
          that matter and making a positive impact beyond our events.
        </p>
      </div>
    </div>
  );
};

export default About;
