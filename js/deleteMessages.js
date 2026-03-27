import { db } from "./firebase.js";
import { ref, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

/**
 * Raderar ett enskilda  meddelande som är  baserat på dess ID i Firebase Realtime Database.
 * @param {string} messageId - ID på meddelandet som ska tas bort.
 */
export function deleteMessage(messageId) {
const confirmDelete = confirm("Är du säker på att du vill ta bort det här meddelandet?");
  
  if (confirmDelete) {

    const messageRef = ref(db, `messages/${messageId}`);


    remove(messageRef)
      .then(() => {
        console.log("Meddelandet har raderats!");
      })
      .catch((error) => {
        console.error("Kunde inte radera meddelandet:", error);
        alert("Något gick fel när meddelandet skulle tas bort.");
      });
  }
}

