function Contact() {
  return (
    <div className="container mt-5 mb-5">
      <div className="contact-box">
        <h2 className="text-center">Contact Us</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>

            <textarea
              className="form-control"
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Contact;