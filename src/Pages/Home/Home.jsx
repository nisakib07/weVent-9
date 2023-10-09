/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div
        className="bg-contain"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Jkm96Nh/istockphoto-1298329918-612x612.jpg)",
        }}>
        <Navbar></Navbar>
        <div className="hero min-h-[500px]">
          <div className="text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Celebrating Moments, Creating Memories
              </h1>
              <p className="mb-5">
                At WeVent, we are passionate about turning your dreams into
                extraordinary social events. From intimate gatherings to grand
                celebrations, our expert team crafts experiences that leave a
                lasting impression. Let's celebrate your special moments
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center mb-32 text-3xl text-white">
          Services you might grab
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((singleCard) => (
            <Card key={singleCard.id} singleCard={singleCard}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
