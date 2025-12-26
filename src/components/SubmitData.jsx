import { useRef, useState } from "react";

export default function SubmitData() {
  // arrays (guideline)
  const genderChoices = ["Male", "Female", "Others"];
  const hobbyChoices = ["Music", "Movies", "Plastic Models"];
  const roleChoices = ["General Staff", "Developer", "System Analyst"];

  // form state
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("Male");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("General Staff");

  // this is the "ternary switch" state (form page vs submitted page)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // refs for checkboxes (as hint suggests)
  const hobbyRef = useRef([]);

  function onHobbiesToggle(e) {
    const value = e.target.value;
    const checked = e.target.checked;

    if (!checked) setHobbies((prev) => prev.filter((x) => x !== value));
    else setHobbies((prev) => [...prev, value]);
  }

  function onSubmit(e) {
    e.preventDefault(); // stop refresh
    setIsSubmitted(true); // show submission view
  }

  function onBackToForm() {
    // optional: reset checkboxes using refs
    hobbyRef.current.forEach((el) => {
      if (el) el.checked = false;
    });

    // reset state
    setUsername("");
    setFirstname("");
    setLastname("");
    setGender("Male");
    setHobbies([]);
    setRole("General Staff");
    setIsSubmitted(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        background: "#1a1a1a",
        fontFamily: "Times New Roman",
      }}
    >
      <div
        style={{
          background: "white",
          width: 320,
          padding: 18,
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* ✅ Ternary render (Guideline requirement) */}
        {isSubmitted ? (
          // ================= SUBMISSION VIEW =================
          <div>
            <h3 style={{ marginTop: 0 }}>Submission Result</h3>
            <div>Username: {username}</div>
            <div>Firstname: {firstname}</div>
            <div>Lastname: {lastname}</div>
            <div>Gender: {gender}</div>
            <div>Hobbies: {hobbies.join(", ")}</div>
            <div>Role: {role}</div>

            <button onClick={onBackToForm} style={{ marginTop: 14 }}>
              Back to form
            </button>
          </div>
        ) : (
          // ================= FORM VIEW =================
          <form onSubmit={onSubmit}>
            <div style={{ marginBottom: 10 }}>
              <div>Username</div>
              <input
                style={{ width: "100%" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <div>Firstname</div>
              <input
                style={{ width: "100%" }}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <div>Lastname</div>
              <input
                style={{ width: "100%" }}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: "bold" }}>Gender</div>
              {genderChoices.map((g) => (
                <label key={g} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  {g}
                </label>
              ))}
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: "bold" }}>Hobbies</div>
              {hobbyChoices.map((h, index) => (
                <label key={h} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    id={h}
                    name="hobbies"
                    value={h}
                    ref={(el) => (hobbyRef.current[index] = el)}
                    onChange={onHobbiesToggle}
                  />{" "}
                  {h}
                </label>
              ))}
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: "bold" }}>Role</div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: 160 }}
              >
                {roleChoices.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* ✅ Submit button below the form (Guideline requirement) */}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}