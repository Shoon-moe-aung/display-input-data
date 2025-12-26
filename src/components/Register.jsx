import { useState } from "react";

export default function Register() {
  const genderChoices = ["Male", "Female", "Other"];
  const hobbyChoices = ["Music", "Movies", "Plastic Model"];
  const roleChoices = ["General staff", "Developer", "System Analyst"];

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("Male");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("General staff");

  function onHobbiesToggle(e) {
    const value = e.target.value;
    const checked = e.target.checked;
    if (!checked) setHobbies((prev) => prev.filter((x) => x !== value));
    else setHobbies((prev) => [...prev, value]);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    }}>
      <div style={{
        background: "white",
        width: 260,
        padding: 18,
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        fontFamily: "Times New Roman"
      }}>
        <div style={{ marginBottom: 10 }}>
          <div>Username</div>
          <input style={{ width: "100%" }} value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div style={{ marginBottom: 10 }}>
          <div>Firstname</div>
          <input style={{ width: "100%" }} value={firstname}
            onChange={(e) => setFirstname(e.target.value)} />
        </div>

        <div style={{ marginBottom: 10 }}>
          <div>Lastname</div>
          <input style={{ width: "100%" }} value={lastname}
            onChange={(e) => setLastname(e.target.value)} />
        </div>

        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: "bold" }}>Gender</div>
          {genderChoices.map((g) => (
            <label key={g} style={{ display: "block" }}>
              <input type="radio" name="gender" value={g}
                checked={gender === g}
                onChange={(e) => setGender(e.target.value)} /> {g}
            </label>
          ))}
        </div>

        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: "bold" }}>Hobbies</div>
          {hobbyChoices.map((h) => (
            <label key={h} style={{ display: "block" }}>
              <input type="checkbox" value={h}
                checked={hobbies.includes(h)}
                onChange={onHobbiesToggle} /> {h}
            </label>
          ))}
        </div>

        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: "bold" }}>Role</div>
          <select style={{ width: 160 }} value={role}
            onChange={(e) => setRole(e.target.value)}>
            {roleChoices.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <hr />

        <div>
          <div>Username: <span style={{ color: "brown" }}>{username}</span></div>
          <div>Firstname: <span style={{ color: "brown" }}>{firstname}</span></div>
          <div>Lastname: <span style={{ color: "brown" }}>{lastname}</span></div>
          <div>Gender: <span style={{ color: "brown" }}>{gender.toLowerCase()}</span></div>
          <div>Hoobies: <span style={{ color: "brown" }}>{hobbies.join(", ")}</span></div>
          <div>Role: <span style={{ color: "brown" }}>{role.toLowerCase()}</span></div>
        </div>
      </div>
    </div>
  );
}