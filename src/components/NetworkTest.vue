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
    </Page>
</template>

<script lang="ts">
import { ref, $navigateBack, $navigateTo, onMounted } from "nativescript-vue";

export default {
    setup() {
        return {};
    },
};
</script>
