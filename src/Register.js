import "./Register.css";
const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <form action="#" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
