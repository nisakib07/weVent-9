const Feedback = () => {
  return (
    <div className="mt-20">
      <h3 className="text-center text-white text-4xl font-bold">
        Your Feedback is much appreciated
      </h3>

      <div className="flex justify-center mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">FeedBack</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Feedback"
                  className="input input-bordered"
                  required></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
