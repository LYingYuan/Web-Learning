<template>
  <div class="input" :class="{ on: on_click || data }">
    <div class="left">
      <label :for="input_id">{{ label_text }}</label>
      <input
        :type="input_type"
        autofocus="autofocus"
        :id="input_id"
        @click="click"
        @keyup="leave"
        v-model.trim="data"
      />
    </div>
    <div class="right" v-if="has_right"></div>
  </div>
</template>

<script>
export default {
  emits: ["saveDate"],
  props: {
    input_type: {
      type: String,
      require: false,
      default: "text",
    },
    input_id: {
      type: String,
      require: true,
    },
    label_text: {
      type: String,
      require: false,
      default: "",
    },
    has_right: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      on_click: false,
      data: "",
    };
  },
  methods: {
    click() {
      this.on_click = true;
    },
    leave() {
      this.on_click = false;
      const user_data = {
        type: this.input_type,
        data: this.data,
      };
      this.$emit(`saveDate`, user_data);
    },
  },
};
</script>

<style scoped>
.input {
  height: 52px;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
}

.left {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

label {
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #828282;
  transition: all 0.1s linear;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
}

input {
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #222;
  letter-spacing: 0;
  line-height: 15px;
  width: 100%;
  background: none;
  flex: 1;
  height: 32px;
  padding: 20px 0 0 0;
  outline: none;
}

.on .left label {
  font-size: 12px;
  top: 4px;
  pointer-events: none;
}
</style>
