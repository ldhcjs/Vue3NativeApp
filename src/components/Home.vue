<template>
    <Frame>
        <Page>
            <ActionBar>
                <Label text="Home" class="font-bold text-lg" />
            </ActionBar>

            <GridLayout
                rows="*, auto, auto, auto, auto, auto, auto, auto, *"
                class="px-4"
            >
                <Label
                    row="1"
                    class="text-xl align-middle text-center text-gray-500"
                    :text="message"
                    @tap="logMessage"
                />

                <Button
                    row="2"
                    @tap="$navigateTo(Details)"
                    class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
                    horizontalAlignment="center"
                >
                    View Details
                </Button>

                <Button
                    row="3"
                    @tap="$navigateTo(BasicDrawer)"
                    class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
                    horizontalAlignment="center"
                >
                    Navigation Drawer
                </Button>

                <Button
                    row="4"
                    @tap="$navigateTo(BottomTabNavigation)"
                    class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
                    horizontalAlignment="center"
                >
                    Tab View
                </Button>

                <Button
                    row="5"
                    @tap="$navigateTo(NetworkTest)"
                    class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
                    horizontalAlignment="center"
                >
                    NetworkTest
                </Button>

                <Button
                    row="6"
                    @tap="$navigateTo(ChatList)"
                    class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
                    horizontalAlignment="center"
                >
                    ChatList
                </Button>

                <Button
                    row="7"
                    @tap="$navigateTo(DatabaseExam)"
                    class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
                    horizontalAlignment="center"
                >
                    Database Exam
                </Button>
            </GridLayout>
        </Page>
    </Frame>
</template>

<script lang="ts" setup>
import {
    ref,
    computed,
    onMounted,
    onUnmounted,
    $navigateTo,
} from "nativescript-vue";
import Details from "./Details.vue";
import BasicDrawer from "./BasicDrawer.vue";
import BottomTabNavigation from "@/components/BottomTabNavigation.vue";
import NetworkTest from "@/components/NetworkTest.vue";
import ChatList from "@/components/ChatList.vue";
import DatabaseExam from "@/components/DatabaseExam.vue";

const counter = ref(0);
const message = computed(() => {
    return `Blank {N}-Vue app: ${counter.value}`;
});

function logMessage() {
    console.log("You have tapped the message!");
}

let interval: any;
onMounted(() => {
    console.log("mounted");
    interval = setInterval(() => counter.value++, 100);
});

onUnmounted(() => {
    console.log("unmounted");
    clearInterval(interval);
});
</script>

<style>
/* .info {
    font-size: 20;
  } */
</style>
