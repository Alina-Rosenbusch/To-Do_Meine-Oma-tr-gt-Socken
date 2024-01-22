import connectMongoDB from "../libs/mongodb";
import Topic from "../models/topic";
import { revalidatePath } from "next/cache";

const Form = () => {
  // Serveraktionen - führt serverseitige Funktionen aus, z.B. Datenbankzugriff, API-Aufrufe, Fetching, etc.
  async function addTopicToDB(data) {
    "use server";

    // Extrahiere den Titel aus den Formulardaten, wenn vorhanden, und wandele es in einen String um
    const title = data.get("title")?.valueOf();

    try {
      // Stelle Verbindung zur Datenbank her
      await connectMongoDB();

      // Erstelle ein neues Topic-Objekt gemäß dem Schema
      const newTopic = new Topic({ title });

      // Speichere das neue Thema in der Datenbank
      await newTopic.save();
    } catch (error) {
      console.error(error);
    }

    // Aktualisiere die Seite automatisch
    revalidatePath("/");
  }

  // JSX-Code für das Formular zum Hinzufügen neuer Themen
  return (
    <form action={addTopicToDB} className="flex flex-col">
      <label htmlFor="todo">To-Do</label>
      <div className="flex">
        {/* Eingabefeld für den Titel des Themas */}
        <input
          className="p-2 rounded-lg border"
          type="text"
          name="title"
          placeholder="Enter your To-Do"
        />

        {/* Button zum Hinzufügen des Themas */}
        <button
          className="bg-indigo-400 px-3 border rounded-lg ml-2 text-white"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

// Exportiere die Form-Komponente
export default Form;
