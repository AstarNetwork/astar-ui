<template>
  <div class="astar-kit-doc">
    <div>
      <button @click="setLightMode">Light</button>
      <button @click="setDarkMode">Dark</button>
    </div>

    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <Button @click="clickBtn">button</Button>
      <ActionBtn @click="openAnimatedModal" width="328">ActionBtn</ActionBtn>
      <ActionBtn disabled>disabledBtn</ActionBtn>
      <div v-for="(n, i) in 7" :key="i">
        <Text :type="`H${i + 1}`">H {{ i + 1 }}</Text>
      </div>
      <IconCopyBtn />
      <IconShareBtn />
      <IconCloseBtn />

      <Header>
        <template v-slot:left>
          Logo
        </template>
        <Button>button1</Button>
        <Button>button2</Button>
      </Header>

      <SideNav title="Assets">
        <img :src="testImg" />
      </SideNav>
      <SideNav title="Assets" selected>
        <img :src="testImg" />
      </SideNav>

      <SimpleModal :isCloseIcon="false" title="Network" width="375" :show="showModal" @close="showModal = false">
        <!-- <img :src="testImg" /> -->
        <div>Test</div>
        <ActionBtn width="328">ActionBtn</ActionBtn>
      </SimpleModal>

      <SimpleModal title="Network" width="375" :show="isAnimatedModal" @close="closeAnimatedModal" :isClosing="isClosing">
        <div>Animated Modal</div>
        <ActionBtn width="328" @click="closeAnimatedModal">ActionBtn</ActionBtn>
      </SimpleModal>

      <RadioBtn @change="changeRadio" />
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
import ComponentList from 'packages/list.json';
import { reactive, ref } from 'vue'
import testImg from "./assets/astr.png";
import Button from "packages/Buttons/src/Button.vue";
import ActionBtn from "packages/Buttons/src/ActionBtn.vue";
import Text from "packages/Text/src/Text.vue";
import IconCopyBtn from "packages/IconButtons/src/IconCopyBtn.vue";
import IconShareBtn from "packages/IconButtons/src/IconShareBtn.vue";
import IconCloseBtn from "packages/IconButtons/src/IconCloseBtn.vue";
import Header from "packages/Header/src/Header.vue";
import SideNav from "packages/Buttons/src/SideNav.vue";
import SimpleModal from "packages/Modals/src/SimpleModal.vue";
import RadioBtn from "packages/Buttons/src/RadioBtn.vue";
import { fadeDuration } from "packages/Modals";

export default {
  name: "App",
  components: {
    Button,
    ActionBtn,
    Text,
    IconCopyBtn,
    IconShareBtn,
    IconCloseBtn,
    Header,
    SideNav,
    SimpleModal,
    RadioBtn
  },
  setup() {
    const showModal = ref(false);
    const isAnimatedModal = ref(false);
    const isClosing = ref(false);

    const clickBtn = () => {
      showModal.value = true;
    };

    const openAnimatedModal = () => {
      isAnimatedModal.value = true;
    };

    const closeAnimatedModal = () => {
      isClosing.value = true;
      setTimeout(()=>{
        isAnimatedModal.value = false;
        isClosing.value = false
      }, fadeDuration)
    }

    const data = reactive({
      links: ComponentList.map(item => ({
        path: `/components/${item.compName}`,
        name: item.compName
      }))
    })

    const setLightMode = () => {
      document.body.classList.remove('body--dark')
    }

    const setDarkMode = () => {
      document.body.classList.add('body--dark')
    }

    const changeRadio = () => {
      console.log('changeRadio')
    }

    return {
      testImg,
      data,
      showModal,
      setLightMode,
      setDarkMode,
      clickBtn,
      openAnimatedModal,
      isAnimatedModal,
      closeAnimatedModal,
      isClosing,
      changeRadio
    };
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.astar-kit-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>