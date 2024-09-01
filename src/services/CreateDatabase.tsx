import * as SQLite from "expo-sqlite";
import { Text, View } from "../components/Themed";
import { Pressable, StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";

const onPressHandler = async () => {
  console.log(" --- CREATING DATABASE --- ");
  const db = await SQLite.openDatabaseAsync("me_contacts.db");

  // `execAsync()` is useful for bulk queries when you want to execute altogether.
  // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
  await db.execAsync(`
      PRAGMA journal_mode = WAL;

      CREATE TABLE IF NOT EXISTS contacts (

          id TEXT PRIMARY KEY NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

          first_name TEXT,
          last_name TEXT,
          middle_name TEXT,
          notes TEXT

      );

      CREATE TABLE IF NOT EXISTS addresses (

          id TEXT PRIMARY KEY NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

          address_type TEXT,
          address TEXT NOT NULL,

          contact_id TEXT NOT NULL,
          FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE CASCADE

      );

      CREATE TABLE IF NOT EXISTS phone_numbers (

          id TEXT PRIMARY KEY NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

          phone_type TEXT,
          phone_number TEXT NOT NULL,

          contact_id TEXT NOT NULL,
          FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE CASCADE

      );
        `);

  const insertExampleData = (
    id: string,
    first_name: string,
    last_name: string,
    middle_name: string,
    notes: string
  ) => {
    db.transactionq;
  };

  {
    // `runAsync()` is useful when you want to execute some write operations.
    //   const result = await db.runAsync(
    //     "INSERT INTO test (value, intValue) VALUES (?, ?)",
    //     "aaa",
    //     100
    //   );
    //   console.log(result.lastInsertRowId, result.changes);
    //   await db.runAsync("UPDATE test SET intValue = ? WHERE value = ?", 999, "aaa"); // Binding unnamed parameters from variadic arguments
    //   await db.runAsync("UPDATE test SET intValue = ? WHERE value = ?", [
    //     999,
    //     "aaa",
    //   ]); // Binding unnamed parameters from array
    //   await db.runAsync("DELETE FROM test WHERE value = $value", {
    //     $value: "test3",
    //   }); // Binding named parameters from object
    // `getFirstAsync()` is useful when you want to get a single row from the database.
    // const firstRow = await db.getFirstAsync("SELECT * FROM contacts");
    // console.log(firstRow.id, firstRow.value, firstRow.intValue);
    // `getAllAsync()` is useful when you want to get all results as an array of objects.
    // const allRows = await db.getAllAsync("SELECT * FROM test");
    // for (const row of allRows) {
    //   console.log(row.id, row.value, row.intValue);
    // }
    // `getAllAsync()` is useful when you want to get all results as an array of objects.
    // const allRowsLabels = await db.getAllAsync(
    //   "PRAGMA table_info(your_table_name);"
    // );
    // for (const row of allRowsLabels) {
    //   console.log("Running", row.name);
    // }
    // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
    // for await (const row of db.getEachAsync("SELECT * FROM test")) {
    //   console.log(row.id, row.value, row.intValue);
    // }
  }
};

export default function CreateDatabase() {
  return (
    <View>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.title}>Create Database</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
