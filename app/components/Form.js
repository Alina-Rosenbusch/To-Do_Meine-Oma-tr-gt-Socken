import connectMongoDB from "../libs/mongodb";
import Topic from "../models/topic";
import { revalidatePath } from "next/cache";

const Form = () => {
  // Server action Block - führt serverseitige Funktionen aus (z.B. Datenbankzugriff oder API-Call, fetching usw.)
  async function addTopicToDB(data) {
    "use server";
    const title = data.get("title")?.valueOf(); //fragt ob ein titel da ist und wen neiner da ist macht er daraus einen String
    console.log(title);
    try {
      await connectMongoDB(); //Verbindung zu DB
      const newTopic = new Topic({ title }); //das Anlegen der Variablen nach dem Schema
      await newTopic.save(); //speichern in der DB
    } catch (error) {
      console.error(error);
    }

    revalidatePath("/"); //aktualisiert die Seite selbstständig
  }

  return (
    <form action={addTopicToDB} className="flex flex-col">
      <label htmlFor="todo">To-Do</label>
      <div className="flex">
        <input
          className="p-2 rounded-lg border"
          type="text"
          name="title"
          placeholder="Enter your To-Do"
        />
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

export default Form;
