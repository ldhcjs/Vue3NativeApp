<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" @tap="$navigateBack" />
            <Label text="BottomNavigationBar" />
        </ActionBar>
        <GridLayout rows="*, *, auto">
            <StackLayout row="0">
                <label text="content"></label>
            </StackLayout>
            <MDBottomNavigationBar
                activeColor="blue"
                inactiveColor="black"
                backgroundColor="white"
                @tabPressed="onBottomNavigationTabPressed"
                @tabSelected="onBottomNavigationTabSelected"
                @tabReselected="onBottomNavigationTabReselected"
                row="2"
            >
                <MDBottomNavigationTab title="Home" icon="~/icons/home.png" />
                <MDBottomNavigationTab
                    title="Details"
                    icon="~/icons/details.png"
                />
                <MDBottomNavigationTab
                    title="BasicDrawer"
                    icon="~/icons/drawer.png"
                />
            </MDBottomNavigationBar>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import * as frameModule from "@nativescript/core/ui/frame";
import {
    BottomNavigationBar,
    TabPressedEventData,
    TabReselectedEventData,
    TabSelectedEventData,
} from "@nativescript-community/ui-material-bottomnavigationbar";
import { EventData } from "@nativescript/core";
import Home from "@/components/Home.vue";
import Details from "@/components/Details.vue";

export const title = "BottomNavigationBar sample";

export default {
    setup() {
        const onNavigationButtonTap = () => {
            frameModule.Frame.topmost().goBack();
        };
        // const onbottomNavigationBarLoaded = (args: EventData) => {
        //     const bottomNavigationBar = args.object as BottomNavigationBar;
        // bottomNavigationBar.showBadge(1);
        // };
        const onBottomNavigationTabPressed = (args: TabPressedEventData) => {
            console.log(`pressed tab index:  ${args.index}`);
        };
        const onBottomNavigationTabSelected = (args: TabSelectedEventData) => {
            console.log(`old tab index:  ${args.oldIndex}`);
            console.log(`selected tab index:  ${args.newIndex}`);
            indexChange = 1;
        };
        const onBottomNavigationTabReselected = (
            args: TabReselectedEventData
        ) => {
            console.log(`pressed tab index:  ${args.index}`);
        };
        var indexChange = 0;
        return {
            onNavigationButtonTap,
            // onbottomNavigationBarLoaded,
            onBottomNavigationTabPressed,
            onBottomNavigationTabSelected,
            onBottomNavigationTabReselected,
            indexChange,
            Home,
            Details,
        };
    },
};
</script>
