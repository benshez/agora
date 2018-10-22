<template>
  <Page>
    <ActionBar android.icon="ic_home" class="action-bar" title="Home">
      <NavigationButton v-if="$isAndroid" text="Go Back" android.systemIcon="ic_menu_more" @tap="onOpenDrawerTap()" />
      <ActionItem v-else text="Menu" @tap="onOpenDrawerTap()" />
    </ActionBar>
    <StackLayout>
      <Label text="Important" class="sideLabel"></Label>
      <Label text="Starred" class="sideLabel"></Label>
      <Label text="Sent Mail" class="sideLabel"></Label>
      <Label text="Drafts" class="sideLabel"></Label>
      <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent backgroundColor="#eee">

          <Label text="Important" class="sideLabel"></Label>
          <Label text="Starred" class="sideLabel"></Label>
          <Label text="Sent Mail" class="sideLabel"></Label>
          <Label text="Drafts" class="sideLabel"></Label>
        </StackLayout>
        <StackLayout ~mainContent>
          <Label text="Main" />
          <Button text="Open Drawer" @tap="onOpenDrawerTap()" />
        </StackLayout>
      </RadSideDrawer>
    </StackLayout>
  </Page>
</template>

<script lang="ts" scoped>
  import Vue from 'nativescript-vue';
  import { Page } from 'tns-core-modules/ui/page';
  import { alert } from 'tns-core-modules/ui/dialogs';
  import NavigationComponent from '../components/navigation/Component.native.vue';

  export default Vue.extend({
    name: 'app',
    components: { NavigationComponent },
    props: {
      items: []
    },
    methods: {
      onItemTap() {
        alert(this.$refs.drawer).then(() => {
          console.log('Alert dialog closed.');
        });
      },
      onOpenDrawerTap() {
        //console.log(this.$refs.drawer._nativeView);
        // alert(this.$refs.drawer)
        //   .then(() => {
        //     console.log("Alert dialog closed.");
        //   });
        //(this.$refs['drawer'] as RadSideDrawer).nativeView.showDrawer();
        this.$refs.drawer.nativeView.toggleDrawerState();
      },
      onCloseDrawerTap() {
        //this.$refs.drawer.nativeView.closeDrawer();
      }
    },
    data() {
      return {
        mainContentText:
          'Sed to changes in its state. Swipe from left to open side drawer.',
        items: ['foo', 'bar', 'fizz', 'buzz']
      };
    }
  });
</script>

