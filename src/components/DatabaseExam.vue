<template>
    <Page>
        <ActionBar>
            <GridLayout columns="40, *">
                <Label col="1" text="Database Exam" fontSize="20" />
                <Label
                    col="0"
                    class="fas"
                    text="&#xf060;"
                    @tap="$navigateBack"
                    fontSize="20"
                />
            </GridLayout>
        </ActionBar>

        <GridLayout rows="auto,auto,*">
            <Button
                row="0"
                @tap="onInsert(datas)"
                class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
            >
                Insert Data
            </Button>
            <Button
                row="1"
                @tap="onSelect"
                class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
            >
                Select Data
            </Button>
            <Label row="2" :text="datas" textWrap="true" whiteSpace="normal" />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ref, $navigateBack, onMounted } from "nativescript-vue";
import { openOrCreate } from "@nativescript-community/sqlite";
import { knownFolders, path } from "@nativescript/core/file-system";
import { alert } from "@nativescript/core";

interface DBData {
    id: number;
    name: string;
}

const filePath = path.join(
    knownFolders.documents().getFolder("db").path,
    "myDB.db"
);
const database = openOrCreate(filePath);
console.log(`path : ${filePath}`);

export default {
    onMounted() {
        const createCmd =
            "CREATE TABLE names (id INT, name TEXT, json TEXT, PRIMARY KEY (id))";
        database.execute(createCmd);

        console.log(`onMounted CREATE : ${createCmd}`);

        // generate Data
        // let i = 0;
        // const data: DBData[] = [];
        // while (i < 10) {
        //     data.push({ id: i, name: `${Math.random() + i} Test data` });
        //     ++i;
        // }
        // console.log("Generated " + i + " data items.");
    },
    setup() {
        const datas = ref<DBData[]>([
            {
                id: 0,
                name: "Tony0",
            },
            {
                id: 1,
                name: "Tony1",
            },
        ]);
        const onSelect = () => {
            const select = "SELECT * FROM names WHERE id < 20";
            const result = database.select(select);
            // result가 배열인지 확인 후 처리
            if (Array.isArray(result)) {
                result.forEach((item) => {
                    datas.value.push({
                        id: item.id,
                        name: item.name,
                    });
                });
                alert(`Received data: ${JSON.stringify(result)}`);
            } else {
                // result가 배열이 아니면 예외 처리 또는 다른 로직 추가
                console.error("Result is not an array");
            }
            alert(`Received data: ${JSON.stringify(result)}`);
        };
        async function onInsert(data: DBData[]) {
            for (let index = 0; index < 10; index++) {
                const d = data[index];
                const insert =
                    "INSERT INTO names (id, name, json) VALUES (?, ?, ?)";
                await database.execute(insert);
            }

            console.log(`data : ${data}`);
        }
        return {
            datas,
            database,
            //updateUser,
            //deleteUser,
            onSelect,
            onInsert,
        };
    },
};
</script>
