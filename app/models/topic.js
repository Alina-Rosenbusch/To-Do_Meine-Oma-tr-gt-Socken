import mongoose, { Schema } from "mongoose";

// Definiere ein neues Schema für die Themen
const TopicSchema = new Schema(
  {
    title: String, // Ein Feld "title" vom Typ String für den Thema-Titel
  },
  { timestamps: true } // Füge automatisch Zeitstempel (createdAt, updatedAt) für jede Änderung hinzu
);

// Erstelle ein mongoose-Modell "Topic" basierend auf dem definierten Schema
const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

// Exportiere das Topic-Modell
export default Topic; //ACHTUNG Co-Pilot schreibt hier gerne, dass "TopicSchema" zu exportieren sei, es soll aber nur Model "Topic" exportiert werden

/*
Zusätzliche Kommentare:

1. Importiere das mongoose-Modul und das Schema-Objekt daraus:
Hier wird das mongoose-Modul und das Schema-Objekt daraus importiert. Mongoose ist eine ODM (Object Data Modeling)-Bibliothek für MongoDB und wird verwendet, um Schemata für Datenmodelle zu erstellen.

2. Definiere ein neues Schema für die Themen:
Ein neues Schema namens TopicSchema wird erstellt. In diesem Fall hat das Schema ein Feld namens "title" vom Typ String. Das { timestamps: true }-Objekt fügt automatisch Zeitstempel für jede Änderung hinzu.

3. Erstelle ein mongoose-Modell "Topic" basierend auf dem definierten Schema:
Ein mongoose-Modell namens "Topic" wird erstellt, das auf dem zuvor definierten Schema basiert. Wenn das Modell bereits existiert, wird es verwendet, andernfalls wird es erstellt.

4. Exportiere das Topic-Modell:
Das erstellte oder vorhandene Topic-Modell wird exportiert, damit es in anderen Dateien verwendet werden kann.
*/
