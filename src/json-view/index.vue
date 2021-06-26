<template>
  <div
    v-if="visible"
    :class="['json-view-container', theme, `deep-${currentDeep}`]"
  >
    <div
      :class="['json-view', length ? 'closeable' : '']"
      :style="{ fontSize: fontSize + 'px', lineHeight: lineHeight + 'px' }"
    >
      <!--icon-style-square-->
      <span
        v-if="length && iconStyle === 'square'"
        class="angle"
        @click="toggleClose"
      >
        <svg
          v-if="innerClosed"
          :fill="iconColors[0]"
          width="1em"
          height="1em"
          viewBox="0 0 1792 1792"
          style="
            vertical-align: middle;
            color: rgb(42, 161, 152);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
          ></path>
        </svg>
        <svg
          v-if="!innerClosed"
          :fill="iconColors[1]"
          width="1em"
          height="1em"
          viewBox="0 0 1792 1792"
          style="
            vertical-align: middle;
            color: rgb(88, 110, 117);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
          ></path>
        </svg>
      </span>
      <!--icon-style-circle-->
      <span
        v-if="length && iconStyle === 'circle'"
        class="angle"
        @click="toggleClose"
      >
        <svg
          v-if="!innerClosed"
          viewBox="0 0 24 24"
          :fill="iconColors[0]"
          preserveAspectRatio="xMidYMid meet"
          style="
            vertical-align: middle;
            color: rgb(1, 160, 228);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
          ></path>
        </svg>
        <svg
          v-if="innerClosed"
          viewBox="0 0 24 24"
          :fill="iconColors[1]"
          preserveAspectRatio="xMidYMid meet"
          style="
            vertical-align: middle;
            color: rgb(161, 106, 148);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
          ></path>
        </svg>
      </span>
      <!--icon-style-triangle-->
      <span
        v-if="length && iconStyle === 'triangle'"
        class="angle"
        @click="toggleClose"
      >
        <svg
          v-if="!innerClosed"
          viewBox="0 0 15 15"
          :fill="iconColors[0]"
          style="
            vertical-align: top;
            color: #3c4047;
            height: 1em;
            width: 1em;
            padding-left: 2px;
          "
        >
          <path d="M0 5l6 6 6-6z"></path>
        </svg>
        <svg
          v-if="innerClosed"
          viewBox="0 0 15 15"
          :fill="iconColors[1]"
          style="
            vertical-align: top;
            color: #3c4047;
            height: 1em;
            width: 1em;
            padding-left: 2px;
          "
        >
          <path d="M0 14l6-6-6-6z"></path>
        </svg>
      </span>
      <div class="content-wrap">
        <p
          :class="['first-line', length > 0 ? 'pointer' : '']"
          @click="toggleClose"
        >
          <span v-if="jsonKey" class="json-key">"{{ jsonKey }}": </span>
          <!-- 折叠之后展示的样式 -->
          <span v-if="length"
            >{{ prefix }}{{ innerClosed ? "..." + subfix : "" }}
            <span class="json-note">{{
              innerClosed ? length + " items" : ""
            }}</span>
          </span>
          <span v-if="!length">{{
            `${isArray ? "[]" : "{}"}${isLast ? "" : ","}`
          }}</span>
        </p>
        <div v-if="!innerClosed && length" class="json-body">
          <!-- 递归每一个对象渲染 -->
          <template v-for="(item, index) in items" :key="item.key + index">
            <json-view
              v-if="item.isJSON"
              :closed="isClose()"
              :data="item.value"
              :json-key="item.key"
              :current-deep="templateDeep + 1"
              :deep="deep"
              :icon-style="iconStyle"
              :theme="theme"
              :font-size="fontSize"
              :line-height="lineHeight"
              :icon-color="iconColors"
              :is-last="index === items.length - 1"
              :has-siblings="item.hasSiblings"
            />
            <p v-else class="json-item">
              <span class="json-key">{{
                isArray ? "" : '"' + item.key + '":'
              }}</span>
              <span :class="['json-value', getDataType(item.value)]">
                {{
                  `${
                    getDataType(item.value) === "string" ? '"' : ""
                  }${formatValue(item.value)}${
                    getDataType(item.value) === "string" ? '"' : ""
                  }${index === items.length - 1 ? "" : ","}`
                }}
              </span>
            </p>
          </template>
          <span v-if="!innerClosed" class="base-line"></span>
        </div>
        <p v-if="!innerClosed" class="last-line">
          <span>{{ subfix }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed,
  watch,
  onMounted,
} from "vue";
import {
  getDataType,
  isEmptyArrayOrObject,
  formatValue,
  isObjectOrArray,
  Data,
} from "../utils/index";
export default defineComponent({
  name: "JsonView",
  props: {
    data: {
      // 传入的json数据
      type: [Object, Array],
      required: true,
    },
    jsonKey: {
      // json的key值，用于第二层及二层以上的组件的key值
      type: String as PropType<string>,
      default: "",
    },
    closed: {
      // 是否折叠
      type: Boolean as PropType<boolean>,
      default: false,
    },
    isLast: {
      //是否是最后一行
      type: Boolean as PropType<boolean>,
      default: true,
    },
    fontSize: {
      //字体大小
      type: Number as PropType<number>,
      default: 14,
    },
    lineHeight: {
      //行高
      type: Number as PropType<number>,
      default: 24,
    },
    deep: {
      // 展开深度
      type: Number as PropType<number>,
      default: 3,
    },
    currentDeep: {
      // 当前为递归的第几层
      type: Number as PropType<number>,
      default: 1,
    },
    iconStyle: {
      // 折叠icon样式
      type: String as PropType<"square" | "circle" | "triangle">,
      default: "square",
    },
    iconColor: {
      //icon颜色
      type: Array as PropType<string[]>,
      default: () => [],
    },
    theme: {
      // 主题
      type: String as PropType<"one-dark" | "vs-code" | "other">,
      default: "",
    },
    hasSiblings: {
      // 是否有兄弟节点
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props, { slots, emit }) {
    const innerClosed = ref(props.closed);
    const templateDeep = ref(props.currentDeep);
    const visible = ref(false);
    const isArray = computed(() => {
      return getDataType(props.data as Data) === "array";
    });
    const length = computed(() => {
      return isArray.value
        ? (props.data as []).length
        : Object.keys(props.data as object).length;
    });
    const subfix = computed(() => {
      const data = props.data;

      if (isEmptyArrayOrObject(data as Data)) {
        return "";
      } else {
        return (isArray.value ? "]" : "}") + (props.isLast ? "" : ",");
      }
    });
    const prefix = computed(() => {
      return isArray.value ? "[" : "{";
    });
    const items = computed(() => {
      const data = props.data;
      //为array
      if (isArray.value) {
        return data.map((item: object) => {
          const isJson = isObjectOrArray(item);
          return {
            value: item,
            isJson,
            key: "",
          };
        });
      }
      // 如果为object
      return Object.keys(data as object[]).map((key) => {
        const item = data[key];
        const isJson = isObjectOrArray(item);
        return {
          value: item,
          isJson,
          key,
        };
      });
    });

    const iconColors = computed(() => {
      const { theme, iconColor } = props;
      if (iconColor.length === 2) {
        return iconColor;
      } else {
        if (theme === "one-dark") {
          return ["#747983", "#747983"];
        } else if (theme === "vs-code") {
          return ["#c6c6c6", "#c6c6c6"];
        } else {
          return ["#747983", "#747983"];
        }
      }
    });

    const toggleClose = () => {
      if (length.value === 0) return;
      if (innerClosed.value) {
        innerClosed.value = false;
      } else {
        innerClosed.value = true;
      }
    };

    const isClose = () => {
      return templateDeep.value + 1 > props.deep;
    };

    onMounted(() => {
      setTimeout(() => {
        visible.value = true;
      }, 0);
    });

    watch(
      () => props.closed,
      (value) => {
        innerClosed.value = value;
      }
    );
    return {
      innerClosed,
      templateDeep,
      visible,
      length,
      subfix,
      prefix,
      items,
      iconColors,
      isArray,
      formatValue,
      getDataType,
      isEmptyArrayOrObject,
      toggleClose,
      isClose,
    };
  },
});
</script>

<style scoped lang="less">
@import "./style/index";
@import "./style/on-dark";
@import "./style/vs-code";
</style>
