import mongoose from "mongoose";

// Asynchrone Funktion zum Verbinden mit der MongoDB
const connectMongoDB = async () => {
  try {
    // Versuche, eine Verbindung zur MongoDB mit der in der Umgebungsvariable gespeicherten URI herzustellen
    await mongoose.connect(process.env.MONGODB_URI);

    // Gib eine Erfolgsmeldung aus, wenn die Verbindung erfolgreich hergestellt wurde
    console.log("Verbindung zur MongoDB hergestellt");
  } catch (err) {
    // Falls ein Fehler auftritt, gib diesen in der Konsole aus
    console.log(err);
  }
};

// Exportiere die Funktion zum Verbinden mit der MongoDB
export default connectMongoDB;

/*
Zusätzliche Kommentare:

1. Importiere das mongoose-Modul für die MongoDB-Verbindung:
Hier wird das mongoose-Modul importiert, das für die Verbindung und Interaktion mit der MongoDB-Datenbank verwendet wird.

2. Asynchrone Funktion zum Verbinden mit der MongoDB:
Die Funktion connectMongoDB wird als asynchrone Funktion deklariert, da der Verbindungsaufbau zur MongoDB eine asynchrone Operation ist.

3. Versuche, eine Verbindung zur MongoDB herzustellen:
Innerhalb des try-Blocks wird versucht, eine Verbindung zur MongoDB mithilfe der in der Umgebungsvariable gespeicherten URI herzustellen.

4. Gib eine Erfolgsmeldung aus, wenn die Verbindung erfolgreich hergestellt wurde:
Wenn die Verbindung erfolgreich hergestellt wurde, wird eine Erfolgsmeldung in der Konsole ausgegeben.

5. Falls ein Fehler auftritt, gib diesen in der Konsole aus:
Falls ein Fehler während des Verbindungsaufbaus auftritt, wird dieser im catch-Block abgefangen und in der Konsole ausgegeben.

6. Exportiere die Funktion zum Verbinden mit der MongoDB:
Die Funktion connectMongoDB wird exportiert, damit sie in anderen Dateien verwendet werden kann.
*/
