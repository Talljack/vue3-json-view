import { App } from "vue";
import JsonView from "./json-view/index.vue";
import version from "./version";
// export JsonView;
export default JsonView;

export interface AppInstance {
  version: string;
  install: (app: App) => void;
}

const create: AppInstance = {
  version,
  install(app) {
    app.component(JsonView.name as string, JsonView);
  },
};

export { create as JsonView };
