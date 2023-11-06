<template>
    <Page>
        <GridLayout rows="*, auto">
            <ListView :items="msgs" row="0">
                <template v-slot:item="{ item }">
                    <GridLayout rows="auto">
                        <Label :text="item.text" />
                        <Label :text="item.sender" />
                        <Label :text="item.time" />
                    </GridLayout>
                </template>
            </ListView>

            <GridLayout rows="auto" columns="*,auto" row="1">
                <TextField
                    v-model="newMsg"
                    @returnPress="sendMsg"
                    returnKeyType="send"
                    hint="Enter your message"
                    col="0"
                />
                <Button text="Send" @tap="sendMsg" col="1" />
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ref, $navigateBack, ListView } from "nativescript-vue";

export default {
    setup() {
        const newMsg = ref("");
        const msgs = ref([
            {
                text: "Hello Hyun",
                sender: "Tony",
                time: "14:30",
            },
            {
                text: "Hello Tony",
                sender: "Hyun",
                time: "14:40",
            },
        ]);
        const sendMsg = () => {
            if (newMsg.value.trim() === "") return;

            const sender = "User";
            const currentTime = new Date().toLocaleTimeString();

            msgs.value.push({
                text: newMsg.value,
                sender: sender,
                time: currentTime,
            });

            console.log(msgs.value);

            newMsg.value = "";
        };

        return {
            sendMsg,
            newMsg,
            msgs,
        };
    },
};
</script>
