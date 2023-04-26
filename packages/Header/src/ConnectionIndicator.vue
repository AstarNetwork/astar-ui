<template>
  <div class="wrapper--indicator">
    <div class="dot" :class="getDotClass(connectionType)"></div>
    <div class="txt--status" :class="getDotClass(connectionType)">
      <div>
        <span>
          {{ capitalize(connectionType) }}
        </span>
      </div>
      <div v-if="connectionType === 'connected'">
        <span> v{{ version }} </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    connectionType: {
      type: String,
      default: "connected",
      required: true,
    },
    version: {
      type: String,
      default: "0.0.0",
    },
  },
  setup() {
    const capitalize = (str: string): string => {
      if (typeof str !== "string" || !str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return {
      capitalize,
    };
  },
  methods: {
    getDotClass(connectionType: string) {
      if (connectionType === "connecting") {
        return "orange";
      } else if (connectionType === "connected") {
        return "green";
      } else if (connectionType === "offline") {
        return "red";
      }
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../../styles/main.scss";

.wrapper--indicator {
  display: flex;
  align-items: center;
}
.dot {
  height: 7px;
  width: 7px;
  border-radius: 90%;
  margin-right: 4.6px;
}
.dot.green {
  background-color: #00ff00;
}
.dot.orange {
  background-color: #ffa500;
}
.dot.red {
  background-color: #ff0000;
}
.txt--status {
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  text-align: left;
  color: $gray-1;
  margin-left: 5px;

  @media (max-width: $sm) {
    display: none;
  }
  @media (min-width: $lg) {
    color: $navy-1;
  }
}

.body--dark {
  .txt--status {
    color: $gray-1;
  }
}
</style>
