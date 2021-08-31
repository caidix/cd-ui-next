<template>
  <div id="grid">
    <div>
      <h3>Button</h3>

      <cd-button
        :type="switchBtn ? 'primary' : 'default'"
        @click="switchBtn = !switchBtn"
        >{{ switchBtn ? 'Following' : 'Click to follow' }}</cd-button
      >

      <cd-button>Button</cd-button>
      <cd-button type="primary" text>Button</cd-button>
      <cd-button type="success">Button</cd-button>
      <cd-button type="danger" pulse>Button</cd-button>
      <cd-button type="warning" outlined>Button</cd-button>
      <cd-button type="black" round loading>Button</cd-button>
    </div>

    <div>
      <h3>Icon</h3>

      <cd-icon box box-color="#4b5cc4" color="#fff" name="info" />
      <cd-icon box box-color="#07d85b" color="#fff" name="room" />
      <cd-icon box box-color="#ff45c0" color="#fff" name="favorite" />
    </div>
  </div>
</template>

<script lang="ts">
const defaultColors = {
  hex: '#194d33e6',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 0.9,
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.3,
    a: 0.9,
  },
  rgba: {
    r: 159,
    g: 96,
    b: 43,
    a: 0.9,
  },
  a: 0.9,
}

export default {
  name: 'app',
  data: () => ({
    color: defaultColors,
    toggleValue: 'Light',
    toggleIconsValue: 'wb_sunny',
    switchBtn: false,
    selectValue: '',
    selectOptions: [
      'asdad',
      'dsadad',
      '111111',
      'qweddf',
      'ewfrrtgfg',
      'asddddd',
      'effee',
      '34434',
      435345,
      43455,
    ],
    alertTitle: 'We think we know you',
    switchValue: false,
    radioValue: '00',
    checkboxValue: false,
    inputValue: '',
    modal: false,
    drawer: false,
    textareaValue: '',
    numberInputValue: 1,
    stepSliderValue: 40,
    progressValue: 40,
  }),
  methods: {
    handleChangeSelect(e) {
      this.selectValue = e
    },
  },
}
</script>

<style lang="less">
.demo-list {
  display: flex;
  margin-bottom: 20px;
}

.demo-item {
  position: relative;
  z-index: 2;
  margin: 0 10px 0 10px;
  margin-bottom: 10px;
}

#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#grid > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border: 1px solid #d3dae6;
  border-radius: 6px;
  box-sizing: border-box;
  transition: 0.17s all ease-in-out;

  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.05),
      0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  }
}

#grid > div > * {
  margin: 5px;
}
</style>
