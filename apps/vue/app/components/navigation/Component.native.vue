<template>
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent backgroundColor="lightgray">
      <StackLayout height="56" style="text-align: left; vertical-align: center;">
        <Label :text="titleText" padding="10" />
      </StackLayout>
      <StackLayout backgroundColor="white">
        <list-view for="route in routes">
          <v-template scope="route">
            <Label :text="route" padding="10" backgroundColor="lightgray" />
          </v-template>
        </list-view>
      </StackLayout>
    </StackLayout>
    <StackLayout ~mainContent>

    </StackLayout>
  </RadSideDrawer>
</template>

<script lang="ts" scoped>
  import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

  export default {
    name: 'navigation-component',
    props: {},
    data: () => {
      return {
        mainContentText: 'dfsdfsdf',
        titleText: '',
        routes: [
          {
            path: '/',
            meta: {
              translationKey: '',
              description: 'sadasd'
            }
          }
        ]
      };
    },
    created() {},
    methods: {
      onOpenDrawerTap() {
        //this.$refs.drawer.nativeView.toggleDrawerState();
      }
    }
  };
</script>
