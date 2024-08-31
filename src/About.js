import "./About.css";

const About = () => {
  return (
    <div className="qcontainer">
      <div className="question">
        <h2>What is Amalthea?</h2>
        <p>
          Amalthea is India's first Student run tech fest. It includes veritey
          of events like Night Drone Racing, Tech Expo, and a lot of other
          intesting events. Amalathea is a dynamic and innovative tech fest that
          brings together a diverse community of technology enthusiasts,
          professionals, and visionaries. With its vibrant theme "Unveiling
          Tomorrow's Possibilities," Amalathea is dedicated to exploring the
          cutting-edge frontiers of science, engineering, and creativity. This
          exciting event is designed to inspire, educate, and connect
          individuals who are passionate about technology and its limitless
          potential. At Amalathea, participants can immerse themselves in a
          multifaceted experience that includes enlightening workshops,
          thought-provoking seminars, captivating exhibitions, and engaging
          competitions. The fest's agenda is carefully crafted to offer
          something for everyone, whether you're a student eager to learn, an
          expert aiming to share insights, or a company looking to showcase
          groundbreaking innovations.
        </p>
      </div>

      <div className="question">
        <h2>When is Amalthea?</h2>
        <p>It is yet to be announced</p>
      </div>

      <div className="question">
        <h2>Where is Amalthea held?</h2>
        <p>
          Amalthea is held at the Indian Institute of Technology Gandhinagar,
          located in Palaj, Gandhinagar, Gujarat, India.
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7899297207655!2d72.68575707500904!3d23.214325109145832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2be7df64cce5%3A0xd65c598110e14ba1!2sHockey%20Ground%20IIT%20Gandhinagar!5e0!3m2!1sen!2sin!4v1693202845845!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            title="IIT Gandhinagar Hockey Ground"
          ></iframe>
        </div>
      </div>

      <div className="question">
        <h2>Events in Amalthea</h2>
        <ul>
          <li>Drone Racing League</li>
          <li>ICON: Innovation Conferance</li>
          <li>Conclave and Symposium</li>
          <li>BrainWiz</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
