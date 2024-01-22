import Form from "./components/Form";
import connectMongoDB from "./libs/mongodb";
import Topic from "./models/topic";
import { revalidatePath } from "next/cache";

export default async function Home() {
  // Verbinde dich mit der MongoDB
  connectMongoDB();

  // Lade alle Notizen aus der Datenbank, sortiere sie nach dem Erstellungsdatum absteigend
  const notes = await Topic.find({}).sort({ createdAt: -1 });

  // Funktion zum Löschen einer Notiz
  async function deleteNote(data) {
    "use server";
    const id = JSON.parse(data.get("id")?.valueOf());

    // Lösche die Notiz mit der gegebenen ID aus der Datenbank
    await Topic.deleteOne({ _id: id });

    // Aktualisiere den Cache und revalidiere die Startseite
    revalidatePath("/");
  }

  return (
    <main className="w-full h-screen bg-gray-100">
      {/* Header-Bereich */}
      <div className="flex flex-col py-5 bg-indigo-600">
        <h1 className="text-2xl text-white text-center">
          Meine Oma trägt Socken
        </h1>
      </div>

      {/* Formular für das Hinzufügen neuer Notizen */}
      <div className="w-full flex justify-center my-4">
        <Form />
      </div>

      {/* Anzeige der vorhandenen Notizen */}
      <div>
        {notes.map((note) => (
          <div
            key={note._id}
            className="flex justify-between items-center w-1/3 mx-auto my-2 p-2 bg-white shadow-lg rounded-lg"
          >
            <p>{note.title}</p>

            {/* Formular zum Löschen einer Notiz */}
            <form action={deleteNote}>
              <input type="hidden" name="id" value={JSON.stringify(note._id)} />
              <button
                className="bg-red-400 px-3 border rounded-lg ml-2 text-white"
                type="submit"
              >
                Löschen
              </button>
            </form>
          </div>
        ))}
      </div>
    </main>
  );
}
