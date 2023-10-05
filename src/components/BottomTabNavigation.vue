<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" @tap="$navigateBack" />
            <Label text="BottomNavigationBar" />
        </ActionBar>
        <GridLayout rows="*, *, auto">
            <StackLayout row="0">
                <label text="content" />
            </StackLayout>

            <MDBottomNavigation
                row="1"
                selectedIndex="1"
                :iosCustomPositioning="false"
                backgroundColor="blue"
            >
                <!-- MDTabStrip 으로 하단 네비게이션 바를 생성한다. -->
                <MDTabStrip>
                    <MDTabStripItem>
                        <Label text="First" />
                    </MDTabStripItem>
                    <MDTabStripItem>
                        <Label text="Second" />
                    </MDTabStripItem>
                    <MDTabStripItem>
                        <Label text="Third" />
                    </MDTabStripItem>
                    <MDTabStripItem>
                        <Label text="Fourth" />
                    </MDTabStripItem>
                </MDTabStrip>

                <!-- MDTabContentItem 으로 하다 네비게이션 버튼에 따른 컨텐츠 화면을 생성한다. -->
                <MDTabContentItem>
                    <Frame id="test" backgroundColor="transparent">
                        <Page backgroundColor="transparent">
                            <GridLayout backgroundColor="transparent">
                                <Label
                                    text="First Page"
                                    class="h2 text-center"
                                ></Label>
                                <Button
                                    text="show alert"
                                    verticalAlignment="center"
                                ></Button>
                            </GridLayout>
                        </Page>
                    </Frame>
                </MDTabContentItem>
                <MDTabContentItem>
                    <GridLayout backgroundColor="transparent">
                        <Label
                            text="Second Page"
                            class="h2 text-center"
                        ></Label>
                    </GridLayout>
                </MDTabContentItem>
                <MDTabContentItem>
                    <GridLayout backgroundColor="yellow">
                        <Label text="Third Page" class="h2 text-center"></Label>
                    </GridLayout>
                </MDTabContentItem>
                <MDTabContentItem>
                    <Frame id="test2">
                        <Page>
                            <GridLayout backgroundColor="transparent">
                                <Label
                                    text="Fourth Page"
                                    class="h2 text-center"
                                ></Label>
                                <Button
                                    text="show alert"
                                    verticalAlignment="center"
                                ></Button>
                            </GridLayout>
                        </Page>
                    </Frame>
                </MDTabContentItem>
            </MDBottomNavigation>

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
import { EventData, TabView, TabViewItem } from "@nativescript/core";
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
