<template>
    <Page>
        <ActionBar>
            <GridLayout columns="40, *">
                <Label col="1" text="ChatList View" fontSize="20" />
                <Label
                    col="0"
                    class="fas"
                    text="&#xf060;"
                    @tap="$navigateBack"
                    fontSize="20"
                />
            </GridLayout>
        </ActionBar>

        <GridLayout rows="*, auto">
            <ListView :items="chatData" row="0">
                <template #default="{ item, index }: ListItem<ChatData>">
                    <GridLayout rows="auto, auto, auto" columns="*, auto">
                        <Label :text="item.text" row="0" />
                        <Label :text="item.sender" row="1" />
                        <Label :text="item.time" row="2" />
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
import type { ListItem } from 'nativescript-vue';

interface ChatData {
            text: string;
            sender: string;
            time: string;
        }

export default {
    setup() {
        const chatData = ref<ChatData[]>(
            [
                {
                    text: "Hello Hyun",
                    sender: "Tony",
                    time: "14:30",
                }
            ]
        );
        const newMsg = ref("");

        const sendMsg = () => {
            if (newMsg.value.trim() === "") return;

            const sender = "User";
            const currentTime = new Date().toLocaleTimeString();

            chatData.value.push({
                text: newMsg.value,
                sender: sender,
                time: currentTime,
            })

            console.log(chatData.value);

            newMsg.value = "";
        };

        return {
            sendMsg,
            newMsg,
            chatData,
        };
    },
};
</script>
