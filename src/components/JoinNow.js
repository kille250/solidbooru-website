import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Join us and get help with all your questions!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/invite/aFsdveRv2R">
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
