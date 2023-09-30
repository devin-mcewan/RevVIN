const About = () => {
  return (
    <div className="about">
      <h1>About revVIN</h1>
      <div className="text-box-about">
        <p>
          revVIN started out as a project for a coding cohort named
          <a href="https://htmelephant.com/"> HTMElephant</a>. This web
          application takes advantage of the NHTSA (National Highway Traffic
          Safety Administration) API to populate information about a vehicle
          using a provided VIN. While the API is nice and free to use, the
          information that is returned is limited. The vehicle information
          displayed on this website has been deemed 'most relevant' to common
          vin decoding requirements.
        </p>
      </div>
    </div>
  );
};
export default About;
