import React from "react";
import { useState } from "react";

export default function Username() {
  const [username, setusername] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter username"
        required
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday" />
    </div>
  );
}
