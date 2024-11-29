import { useState } from "react";
import validator from "validator";

const App = () => {
  // State untu menyimpan pesan error atau hasil validasi
  const [errorMessage, SetErrorMessage] = useState("");

  // Fungsi untuk memvalidasi kekuatan password
  const validate = (value) => {
    if (
      // Menggunakan library validator untuk memeriksa apakah password memenuhi kriteria
      validator.isStrongPassword(value, {
        minLength: 8, // Minimal panjang password 8 karakter
        minLowercase: 1, // Minimal ada 1 huruf kecil
        minUppercase: 1, // Minimal ada 1 huruf kapital
        minNumbers: 1, // Miniaml ada 1 angka
        minSymbols: 1, // Minimal ada 1 simbol
      })
    ) {
      // jika password kuat, set pesan mejadi "Your Password Is Strong"
      SetErrorMessage("Your Password Is Strong");
    } else {
      // Jika tidak kuat, set pesan menjadi "Is Not Strong Password"
      SetErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <div>
      <form>
        <h2>Checking Password Strength</h2>
        <label htmlFor="">Enter Your Password</label>
        {/* Input Field untuk memasukkan password */}
        <input type="text" onChange={(e) => validate(e.target.value)} // memanggil fungsi validate setiap kali ada perubahan input
        /> <br />
        {/* Menampilkan pesan error atau hasil validasi */}
        {errorMessage === "" ? null : <span>{errorMessage}</span>}
      </form>
    </div>
  );
};

export default App;
