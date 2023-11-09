<template></template>

<script lang="ts">
import { ref, $navigateBack } from "nativescript-vue";
// import { Sqlite } from "nativescript-sqlite";
import { Observable } from "@nativescript/core/data/observable";
import {
    SQLiteDatabase,
    openOrCreate,
    deleteDatabase,
} from "@nativescript-community/sqlite";
import { knownFolders, path } from "@nativescript/core/file-system";
import { ImageSource } from "@nativescript/core";
import {
    BaseEntity,
    Column,
    Connection,
    Entity,
    PrimaryGeneratedColumn,
    createConnection,
} from "@nativescript-community/typeorm/browser";
import { installMixins } from "@nativescript-community/sqlite/typeorm";

const database = openOrCreate("path/to/db");
interface DBData {
    id: number;
    name: string;
}

// const sqlite = openOrCreate("path/to/db");
// sqlite.execute("CREATE TABLE names (id INT, name TEXT)");
// sqlite.transaction((cancelTransaction) => {
//     // Calling cancelTransaction will rollback all changes made to db
//     names.forEach((name, id) =>
//         sqlite.execute("INSERT INTO names (id, name) VALUES (?, ?)", [id, name])
//     );
// });

// const database = new Sqlite();
// database.open("mydatabase.db");

export default {
    setup() {
        const users = ref("user");

        const updateUser = (id: number, name: string, age: number) => {
            // 데이터베이스 업데이트
            database.execute(
                "UPDATE users SET name = ?, age = ? WHERE id = ?",
                [name, age, id]
            );

            // 데이터 조회
            users.value = database.query("SELECT * FROM users");
        };

        const deleteUser = (id: number) => {
            // 데이터베이스 삭제
            database.execute("DELETE FROM users WHERE id = ?", [id]);

            // 데이터 조회
            users.value = database.query("SELECT * FROM users");
        };

        return {
            database,
            updateUser,
            deleteUser,
        };
    },
};
</script>
