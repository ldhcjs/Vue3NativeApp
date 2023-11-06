<template>
    <Page>
        <ActionBar>
            <GridLayout columns="40, *">
                <Label col="1" text="NetworkTest" fontSize="20" />
                <Label
                    col="0"
                    class="fas"
                    text="&#xf060;"
                    @tap="$navigateBack"
                    fontSize="20"
                />
            </GridLayout>
        </ActionBar>

        <GridLayout rows="auto,*">
            <Button
                row="0"
                @tap="getHttpString"
                class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
            >
                Http getString
            </Button>
            <!-- :text 로 쓰는 이유는 v-text 표현식이며, 데이터와 뷰를 바인딩하는 역할 -->
            <Label
                row="1"
                :text="resultHttpGetString"
                textWrap="true"
                whiteSpace="normal"
            />
            <ActivityIndicator
                :busy="indicator"
                rowSpan="2"
                verticalAlignment="center"
            />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { ref, $navigateBack, $navigateTo, onMounted } from "nativescript-vue";
import { ActivityIndicator, EventData, Http } from "@nativescript/core";
import { on } from "events";

export default {
    setup() {
        const resultHttpGetString = ref("http");
        const indicator = ref(false);

        const getHttpString = () => {
            indicator.value = true;
            Http.getString("https://httpbin.org/get").then(
                (result: string) => {
                    console.log(`Http getString : ${result}`);
                    resultHttpGetString.value = result;
                    console.log(
                        `Http getString resultHttpGetString : ${resultHttpGetString.value}`
                    );
                    indicator.value = false;
                },
                (e) => {
                    indicator.value = false;
                }
            );
        };
        return {
            getHttpString,
            resultHttpGetString,
            indicator,
        };
    },
    components: { ActivityIndicator },
};
</script>
